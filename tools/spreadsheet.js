/* Spreadsheet tool for the exam practice site.
 * Toolbar, grid, dialogs and behaviour modelled on the Webix SpreadSheet used in the NESA online exam;
 * calculations by HyperFormula (Excel-compatible), graphs by Chart.js.
 * postMessage protocol with the exam page:
 *   embed -> host: loaded | value(serialised sheet) | exported(report snapshot)
 *   host -> embed: config{readOnly,fontScale} | value{value,reset} | export{value,reqId}
 */
(function () {
  'use strict';
  var ROWS = 60, COLS = 26, DEF_W = 120, DEF_H = 36, MAX_UNDO = 80;   // NESA (Webix) default column width / row height
  var embedId = decodeURIComponent((/[#&]id=([^&]+)/.exec(location.hash) || [])[1] || '');
  var $ = function (id) { return document.getElementById(id); };
  var grid = $('grid'), wrap = $('gridwrap'), editor = $('editor'), fx = $('fx'), namebox = $('namebox');

  // ------------------------------------------------------------------ state
  var hf = null, SHEET = 0;
  var raws = {}, styles = {}, comments = {}, colW = {}, rowH = {}, merges = [], conds = [], charts = [], named = {}, filter = null;
  var showFormulas = false;
  var hiddenRows = {}, hiddenCols = {}, groups = { r: [], c: [] }, highlightInvalid = false;   // hide/show, group/ungroup, validation highlight
  var sel ={ r1: 0, c1: 0, r2: 0, c2: 0 }, act = { r: 0, c: 0 };
  var editing = null;        // { r, c, input: editor|fx }
  var point = null;          // formula point-mode: { start, end, r1, c1, r2, c2 }
  var readOnly = false, changed = false;
  var undoStack = [], redoStack = [];
  var clip = null;
  var chartObjs = {}, chartPanelFor = null;

  // ------------------------------------------------------------------ addressing
  function colName(c) { var s = ''; c++; while (c > 0) { var m = (c - 1) % 26; s = String.fromCharCode(65 + m) + s; c = Math.floor((c - 1) / 26); } return s; }
  function colIndex(name) { var n = 0; for (var i = 0; i < name.length; i++) n = n * 26 + (name.charCodeAt(i) - 64); return n - 1; }
  function a1(r, c) { return colName(c) + (r + 1); }
  function parseA1(s) { var m = /^\$?([A-Z]{1,3})\$?(\d+)$/i.exec(String(s).trim()); return m ? { r: +m[2] - 1, c: colIndex(m[1].toUpperCase()) } : null; }
  function parseRange(s) {
    if (s == null) return null;
    var p = String(s).replace(/\s/g, '').split(':'); var a = parseA1(p[0]); if (!a) return null; var b = p[1] ? parseA1(p[1]) : a; if (!b) return null;
    return { r1: Math.min(a.r, b.r), c1: Math.min(a.c, b.c), r2: Math.max(a.r, b.r), c2: Math.max(a.c, b.c) };
  }
  function rangeStr(g) { return g.r1 === g.r2 && g.c1 === g.c2 ? a1(g.r1, g.c1) : a1(g.r1, g.c1) + ':' + a1(g.r2, g.c2); }
  function absRange(g) { return '$' + colName(g.c1) + '$' + (g.r1 + 1) + ':$' + colName(g.c2) + '$' + (g.r2 + 1); }
  function key(r, c) { return r + ',' + c; }
  function norm(g) { return { r1: Math.min(g.r1, g.r2), c1: Math.min(g.c1, g.c2), r2: Math.max(g.r1, g.r2), c2: Math.max(g.c1, g.c2) }; }
  function inRange(g, r, c) { return r >= g.r1 && r <= g.r2 && c >= g.c1 && c <= g.c2; }
  function overlaps(a, b) { return !(a.r2 < b.r1 || a.r1 > b.r2 || a.c2 < b.c1 || a.c1 > b.c2); }
  function addr(r, c) { return { sheet: SHEET, row: r, col: c }; }
  function escapeHtml(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  // ------------------------------------------------------------------ formula text helpers
  function shiftFormula(f, dr, dc) {
    if (typeof f !== 'string' || f[0] !== '=') return f;
    var out = '', i = 0, inStr = false;
    while (i < f.length) {
      var ch = f[i];
      if (ch === '"') { inStr = !inStr; out += ch; i++; continue; }
      if (inStr) { out += ch; i++; continue; }
      var m = /^(\$?)([A-Z]{1,3})(\$?)(\d+)/i.exec(f.slice(i));
      var prev = i > 0 ? f[i - 1] : '';
      if (m && !/[A-Za-z0-9_.]/.test(prev) && !/^[A-Za-z0-9_(]/.test(f.slice(i + m[0].length))) {
        var c = colIndex(m[2].toUpperCase()), r = +m[4] - 1;
        if (!m[1]) c += dc; if (!m[3]) r += dr;
        out += (c < 0 || r < 0) ? '#REF!' : (m[1] + colName(c) + m[3] + (r + 1));
        i += m[0].length; continue;
      }
      out += ch; i++;
    }
    return out;
  }
  // HyperFormula only knows TRUE()/FALSE(); students type bare TRUE/FALSE as in Excel.
  function mapBooleans(f, toEngineForm) {
    var out = '', inStr = false;
    for (var i = 0; i < f.length; i++) {
      var ch = f[i];
      if (ch === '"') { inStr = !inStr; out += ch; continue; }
      if (!inStr) {
        var m = toEngineForm ? /^(TRUE|FALSE)(?![\w(.])/i.exec(f.slice(i)) : /^(TRUE|FALSE)\(\)/i.exec(f.slice(i));
        if (m && !/[\w.$]/.test(f[i - 1] || '')) { out += m[1].toUpperCase() + (toEngineForm ? '()' : ''); i += m[0].length - 1; continue; }
      }
      out += ch;
    }
    return out;
  }
  function isSparkline(v) { return typeof v === 'string' && /^=\s*SPARKLINE\s*\(/i.test(v); }
  // links are stored as =HYPERLINK("url","text") (as in Webix); the engine just sees the link text
  function parseLink(raw) {
    var m = /^=\s*HYPERLINK\(\s*"((?:[^"]|"")*)"\s*(?:,\s*"((?:[^"]|"")*)"\s*)?\)\s*$/i.exec(typeof raw === 'string' ? raw : '');
    if (!m) return null;
    var url = m[1].replace(/""/g, '"');
    return { url: url, text: m[2] != null && m[2] !== '' ? m[2].replace(/""/g, '"') : url };
  }
  // ------------------------------------------------------------------ NESA (Webix) function set
  // The functions the NESA spreadsheet knows (its f(x) list). Anything else (COUNTIF, SUMIF, IFERROR, TODAY…) shows #ERROR! there,
  // so the engine is set up the same way.
  var NESA_FUNCS = ('ABS,ACCRINT,ACOS,ACOSH,ACOT,ACOTH,ADD,AND,ARABIC,ARRAYTOTEXT,ASIN,ASINH,ATAN,ATAN2,ATANH,AVEDEV,AVERAGE,AVERAGEA,BASE,BINOM.DIST,BINOM.DIST.RANGE,BINOM.INV,BINOMDIST,' +
    'BITAND,BITLSHIFT,BITOR,BITRSHIFT,BITXOR,CEILING,CHAR,CHECKBOX,CHOOSE,CHOOSECOLS,CHOOSEROWS,CLEAN,CODE,COMBIN,COMBINA,COMPLEX,CONCATENATE,CORREL,COS,COSH,COT,COTH,COUNT,COUNTA,COUNTBLANK,' +
    'COVAR,COVARIANCE.P,COVARIANCE.S,CSC,CSCH,DATE,DATEDIF,DATEVALUE,DAY,DAYS,DAYS360,DB,DDB,DEC2BIN,DEC2HEX,DEC2OCT,DECIMAL,DEGREES,DELTA,DEVSQ,DIVIDE,DOLLAR,DOLLARDE,DOLLARFR,DROP,EDATE,EFFECT,' +
    'EOMONTH,EQ,ERF,ERFC,EVEN,EXACT,EXP,EXPAND,FACT,FACTDOUBLE,FALSE,FIND,FISHER,FISHERINV,FIXED,FLOOR,FV,FVSCHEDULE,GAMMA,GCD,GEOMEAN,GESTEP,GT,GTE,HARMEAN,HEX2BIN,HEX2DEC,HEX2OCT,HLOOKUP,HOUR,' +
    'HYPERLINK,IF,IMABS,IMAGE,IMAGINARY,IMCONJUGATE,IMCOS,IMCOSH,IMCOT,IMCSC,IMCSCH,IMDIV,IMEXP,IMLN,IMPOWER,IMPRODUCT,IMREAL,IMSEC,IMSECH,IMSIN,IMSINH,IMSQRT,IMSUB,IMSUM,IMTAN,INDEX,INT,IPMT,IRR,' +
    'ISBINARY,ISBLANK,ISEVEN,ISNONTEXT,ISNUMBER,ISODD,ISOWEEKNUM,ISPMT,ISTEXT,JOIN,LARGE,LEFT,LEN,LN,LOG,LOG10,LOOKUP,LOWER,LT,LTE,MATCH,MAX,MEDIAN,MID,MIN,MINUS,MINUTE,MOD,MONTH,MROUND,MULTINOMIAL,' +
    'MULTIPLY,N,NE,NETWORKDAYS,NETWORKDAYS.INTL,NOMINAL,NOT,NOW,NPER,NPV,NUMBERVALUE,OCT2BIN,OCT2DEC,OCT2HEX,ODD,OR,PDURATION,PERCENTILE,PERCENTILE.EXC,PERCENTILE.INC,PERMUT,PI,PMT,POW,POWER,PPMT,' +
    'PRODUCT,PROPER,PV,QUARTILE,QUARTILE.EXC,QUARTILE.INC,QUOTIENT,RADIANS,RADIO,RAND,RANDARRAY,RANDBETWEEN,REGEXEXTRACT,REGEXMATCH,REGEXREPLACE,REPLACE,REPT,RIGHT,ROMAN,ROUND,ROUNDDOWN,ROUNDUP,' +
    'SEARCH,SEC,SECH,SECOND,SEQUENCE,SIGN,SIN,SINH,SMALL,SORT,SORTBY,SPARKLINE,SQRT,SQRTPI,STDEV,STDEV.P,STDEV.S,STDEVA,STDEVP,STDEVPA,STEYX,SUBSTITUTE,SUBTOTAL,SUM,SUMPRODUCT,SUMSQ,SUMX2MY2,' +
    'SUMX2PY2,SUMXMY2,SYD,T,TAKE,TAN,TANH,TBILLPRICE,TBILLYIELD,TEXTSPLIT,TIME,TIMEVALUE,TOCOL,TOROW,TRIM,TRUE,TRUNC,UNIQUE,UPPER,VAR,VAR.P,VAR.S,VARA,VARP,VARPA,VLOOKUP,WEEKDAY,WEEKNUM,WEIBULL,' +
    'WEIBULL.DIST,WORKDAY,WORKDAY.INTL,WRAPCOLS,WRAPROWS,XLOOKUP,XMATCH,YEAR,YEARFRAC').split(',');
  var FN_CATS = {
    common: 'AND,CHECKBOX,CHOOSE,FALSE,HLOOKUP,HYPERLINK,IF,IMAGE,INDEX,ISBINARY,ISBLANK,ISEVEN,ISNONTEXT,ISNUMBER,ISODD,ISTEXT,LOOKUP,MATCH,N,NOT,OR,RADIO,SPARKLINE,TRUE,VLOOKUP,XLOOKUP,XMATCH',
    date: 'DATE,DATEDIF,DATEVALUE,DAY,DAYS,DAYS360,EDATE,EOMONTH,HOUR,ISOWEEKNUM,MINUTE,MONTH,NETWORKDAYS,NETWORKDAYS.INTL,NOW,SECOND,TIME,TIMEVALUE,WEEKDAY,WEEKNUM,WORKDAY,WORKDAY.INTL,YEAR,YEARFRAC',
    text: 'ARRAYTOTEXT,CHAR,CLEAN,CODE,CONCATENATE,EXACT,FIND,FIXED,JOIN,LEFT,LEN,LOWER,MID,NUMBERVALUE,PROPER,REGEXEXTRACT,REGEXMATCH,REGEXREPLACE,REPLACE,REPT,RIGHT,SEARCH,SUBSTITUTE,T,TRIM,UPPER',
    financial: 'ACCRINT,DB,DDB,DOLLAR,DOLLARDE,DOLLARFR,EFFECT,FV,FVSCHEDULE,IPMT,IRR,ISPMT,NOMINAL,NPER,NPV,PDURATION,PMT,PPMT,PV,SYD,TBILLPRICE,TBILLYIELD',
    array: 'CHOOSECOLS,CHOOSEROWS,DROP,EXPAND,RANDARRAY,SEQUENCE,SORT,SORTBY,TAKE,TEXTSPLIT,TOCOL,TOROW,UNIQUE,WRAPCOLS,WRAPROWS',
  };
  var FN_CAT_LABEL = { common: 'Common', date: 'Date', text: 'Text', number: 'Number', financial: 'Financial', array: 'Array' };
  function fnCategory(name) { for (var k in FN_CATS) if ((',' + FN_CATS[k] + ',').indexOf(',' + name + ',') >= 0) return k; return 'number'; }
  // argument help shown while typing a function (name, required?, description)
  function A(n, req, d) { return [n, req, d]; }
  function nums(word, verb) { return [A(word + '1', true, 'The first ' + verb + '.'), A(word + '2', false, 'The second ' + verb + '.'), A(word + '3', false, 'The third ' + verb + '.')]; }
  var FN_ARGS = {
    SUM: nums('Number', 'number or range to add up'), PRODUCT: nums('Number', 'number or range to multiply'),
    AVERAGE: nums('Number', 'number or range to average'), AVERAGEA: nums('Value', 'value or range to average'),
    MIN: nums('Number', 'number or range to search for the smallest value'), MAX: nums('Number', 'number or range to search for the largest value'),
    COUNT: nums('Value', 'value or range to count numbers in'), COUNTA: nums('Value', 'value or range to count non-empty cells in'),
    MEDIAN: nums('Number', 'number or range'), STDEV: nums('Number', 'number or range (sample)'), 'STDEV.S': nums('Number', 'number or range (sample)'),
    'STDEV.P': nums('Number', 'number or range (population)'), STDEVP: nums('Number', 'number or range (population)'), VAR: nums('Number', 'number or range (sample)'),
    'VAR.S': nums('Number', 'number or range (sample)'), 'VAR.P': nums('Number', 'number or range (population)'), VARP: nums('Number', 'number or range (population)'),
    SUMSQ: nums('Number', 'number or range to square and add'), GEOMEAN: nums('Number', 'positive number or range'), HARMEAN: nums('Number', 'positive number or range'),
    COUNTBLANK: [A('Range', true, 'The range to count empty cells in.')],
    LARGE: [A('Array', true, 'The range of numbers.'), A('K', true, 'The position from the largest (1 = largest).')],
    SMALL: [A('Array', true, 'The range of numbers.'), A('K', true, 'The position from the smallest (1 = smallest).')],
    ROUND: [A('Number', true, 'The number to round.'), A('Digits', true, 'The number of decimal places.')],
    ROUNDUP: [A('Number', true, 'The number to round up.'), A('Digits', true, 'The number of decimal places.')],
    ROUNDDOWN: [A('Number', true, 'The number to round down.'), A('Digits', true, 'The number of decimal places.')],
    MROUND: [A('Number', true, 'The number to round.'), A('Multiple', true, 'The multiple to round to.')],
    TRUNC: [A('Number', true, 'The number to cut short.'), A('Digits', false, 'The number of decimal places to keep.')],
    INT: [A('Number', true, 'The number to round down to a whole number.')], ABS: [A('Number', true, 'The number to make positive.')],
    SQRT: [A('Number', true, 'The number to find the square root of.')], SIGN: [A('Number', true, 'The number to check.')],
    POWER: [A('Number', true, 'The base number.'), A('Power', true, 'The power to raise it to.')], POW: [A('Number', true, 'The base number.'), A('Power', true, 'The power to raise it to.')],
    MOD: [A('Number', true, 'The number to divide.'), A('Divisor', true, 'The number to divide by.')],
    QUOTIENT: [A('Numerator', true, 'The number to divide.'), A('Denominator', true, 'The number to divide by.')],
    CEILING: [A('Number', true, 'The number to round up.'), A('Significance', true, 'The multiple to round up to.')],
    FLOOR: [A('Number', true, 'The number to round down.'), A('Significance', true, 'The multiple to round down to.')],
    RANDBETWEEN: [A('Bottom', true, 'The smallest whole number.'), A('Top', true, 'The largest whole number.')], RAND: [], PI: [],
    SUMPRODUCT: [A('Array1', true, 'The first range to multiply.'), A('Array2', false, 'The second range to multiply.'), A('Array3', false, 'The third range to multiply.')],
    SUBTOTAL: [A('Function_num', true, 'The function to use (e.g. 9 = SUM, 1 = AVERAGE).'), A('Ref1', true, 'The first range.'), A('Ref2', false, 'The second range.')],
    PERCENTILE: [A('Array', true, 'The range of numbers.'), A('K', true, 'The percentile, from 0 to 1.')],
    QUARTILE: [A('Array', true, 'The range of numbers.'), A('Quart', true, 'Which quartile (0 to 4).')],
    IF: [A('Logical_test', true, 'The condition to check.'), A('Value_if_true', false, 'The result when the condition is true.'), A('Value_if_false', false, 'The result when the condition is false.')],
    AND: [A('Logical1', true, 'The first condition.'), A('Logical2', false, 'The second condition.'), A('Logical3', false, 'The third condition.')],
    OR: [A('Logical1', true, 'The first condition.'), A('Logical2', false, 'The second condition.'), A('Logical3', false, 'The third condition.')],
    NOT: [A('Logical', true, 'The condition to reverse.')], TRUE: [], FALSE: [],
    VLOOKUP: [A('Search_key', true, 'The value to look for in the first column.'), A('Range', true, 'The table to search.'), A('Index', true, 'The column number of the value to return.'), A('Is_sorted', false, 'TRUE (or omitted) for the nearest match in a sorted column, FALSE for an exact match.')],
    HLOOKUP: [A('Search_key', true, 'The value to look for in the first row.'), A('Range', true, 'The table to search.'), A('Index', true, 'The row number of the value to return.'), A('Is_sorted', false, 'TRUE (or omitted) for the nearest match in a sorted row, FALSE for an exact match.')],
    XLOOKUP: [A('Search_key', true, 'The value to look for.'), A('Lookup_range', true, 'The range to search.'), A('Result_range', true, 'The range to return a value from.'), A('Missing_value', false, 'The result when nothing is found.')],
    LOOKUP: [A('Search_key', true, 'The value to look for.'), A('Search_range', true, 'The sorted range to search.'), A('Result_range', false, 'The range to return a value from.')],
    INDEX: [A('Reference', true, 'The range.'), A('Row', true, 'The row number in the range.'), A('Column', false, 'The column number in the range.')],
    MATCH: [A('Search_key', true, 'The value to find.'), A('Range', true, 'The row or column to search.'), A('Search_type', false, '1 = nearest smaller (sorted), 0 = exact, -1 = nearest larger.')],
    XMATCH: [A('Search_key', true, 'The value to find.'), A('Lookup_range', true, 'The row or column to search.')],
    CHOOSE: [A('Index', true, 'Which value to return (1, 2, 3…).'), A('Choice1', true, 'The first value.'), A('Choice2', false, 'The second value.')],
    ISBLANK: [A('Value', true, 'The cell to check for being empty.')], ISNUMBER: [A('Value', true, 'The value to check for being a number.')], ISTEXT: [A('Value', true, 'The value to check for being text.')],
    ISEVEN: [A('Value', true, 'The number to check.')], ISODD: [A('Value', true, 'The number to check.')], N: [A('Value', true, 'The value to turn into a number.')],
    HYPERLINK: [A('Url', true, 'The web address.'), A('Link_label', false, 'The text to show.')],
    CONCATENATE: [A('String1', true, 'The first text to join.'), A('String2', false, 'The second text to join.'), A('String3', false, 'The third text to join.')],
    LEFT: [A('String', true, 'The text.'), A('Number_of_characters', false, 'How many characters to take from the start.')],
    RIGHT: [A('String', true, 'The text.'), A('Number_of_characters', false, 'How many characters to take from the end.')],
    MID: [A('String', true, 'The text.'), A('Starting_at', true, 'The position of the first character.'), A('Extract_length', true, 'How many characters to take.')],
    LEN: [A('Text', true, 'The text to count the characters of.')], UPPER: [A('Text', true, 'The text to change to capitals.')], LOWER: [A('Text', true, 'The text to change to lower case.')],
    PROPER: [A('Text', true, 'The text to capitalise word by word.')], TRIM: [A('Text', true, 'The text to remove extra spaces from.')],
    FIND: [A('Search_for', true, 'The text to find (case sensitive).'), A('Text_to_search', true, 'The text to look in.'), A('Starting_at', false, 'The position to start from.')],
    SEARCH: [A('Search_for', true, 'The text to find.'), A('Text_to_search', true, 'The text to look in.'), A('Starting_at', false, 'The position to start from.')],
    SUBSTITUTE: [A('Text_to_search', true, 'The text.'), A('Search_for', true, 'The text to replace.'), A('Replace_with', true, 'The new text.'), A('Occurrence_number', false, 'Which occurrence to replace.')],
    REPLACE: [A('Text', true, 'The text.'), A('Position', true, 'Where to start replacing.'), A('Length', true, 'How many characters to replace.'), A('New_text', true, 'The new text.')],
    REPT: [A('Text', true, 'The text to repeat.'), A('Number_of_repetitions', true, 'How many times to repeat it.')],
    EXACT: [A('String1', true, 'The first text.'), A('String2', true, 'The second text.')], CHAR: [A('Number', true, 'The character code.')], CODE: [A('String', true, 'The text.')],
    FIXED: [A('Number', true, 'The number.'), A('Number_of_places', false, 'The decimal places.'), A('Suppress_separator', false, 'TRUE to leave out commas.')],
    DATE: [A('Year', true, 'The year.'), A('Month', true, 'The month (1–12).'), A('Day', true, 'The day of the month.')],
    DATEVALUE: [A('Date_string', true, 'A date written as text.')], DAY: [A('Date', true, 'The date.')], MONTH: [A('Date', true, 'The date.')], YEAR: [A('Date', true, 'The date.')],
    WEEKDAY: [A('Date', true, 'The date.'), A('Type', false, 'How days are numbered (1 = Sunday is 1).')], WEEKNUM: [A('Date', true, 'The date.'), A('Type', false, 'The day the week starts on.')],
    DAYS: [A('End_date', true, 'The later date.'), A('Start_date', true, 'The earlier date.')], DAYS360: [A('Start_date', true, 'The start date.'), A('End_date', true, 'The end date.')],
    DATEDIF: [A('Start_date', true, 'The start date.'), A('End_date', true, 'The end date.'), A('Unit', true, '"Y", "M" or "D".')],
    EDATE: [A('Start_date', true, 'The start date.'), A('Months', true, 'The number of months to add.')], EOMONTH: [A('Start_date', true, 'The start date.'), A('Months', true, 'The number of months to add.')],
    NETWORKDAYS: [A('Start_date', true, 'The start date.'), A('End_date', true, 'The end date.'), A('Holidays', false, 'Dates to leave out.')],
    WORKDAY: [A('Start_date', true, 'The start date.'), A('Num_days', true, 'The number of working days.'), A('Holidays', false, 'Dates to leave out.')],
    YEARFRAC: [A('Start_date', true, 'The start date.'), A('End_date', true, 'The end date.')], NOW: [],
    TIME: [A('Hour', true, 'The hour.'), A('Minute', true, 'The minute.'), A('Second', true, 'The second.')], HOUR: [A('Time', true, 'The time.')], MINUTE: [A('Time', true, 'The time.')], SECOND: [A('Time', true, 'The time.')],
    PMT: [A('Rate', true, 'The interest rate per period.'), A('Number_of_periods', true, 'The number of payments.'), A('Present_value', true, 'The amount borrowed.'), A('Future_value', false, 'The balance left at the end.'), A('End_or_beginning', false, '0 = end of period, 1 = beginning.')],
    FV: [A('Rate', true, 'The interest rate per period.'), A('Number_of_periods', true, 'The number of payments.'), A('Payment_amount', true, 'The payment each period.'), A('Present_value', false, 'The starting amount.')],
    PV: [A('Rate', true, 'The interest rate per period.'), A('Number_of_periods', true, 'The number of payments.'), A('Payment_amount', true, 'The payment each period.'), A('Future_value', false, 'The balance left at the end.')],
    NPER: [A('Rate', true, 'The interest rate per period.'), A('Payment_amount', true, 'The payment each period.'), A('Present_value', true, 'The amount borrowed.')],
    NPV: [A('Discount', true, 'The discount rate per period.'), A('Cashflow1', true, 'The first cash flow.'), A('Cashflow2', false, 'The second cash flow.')],
    IRR: [A('Cashflow_amounts', true, 'The range of cash flows.'), A('Rate_guess', false, 'A starting guess for the rate.')],
    IPMT: [A('Rate', true, 'The interest rate per period.'), A('Period', true, 'The period to find the interest for.'), A('Number_of_periods', true, 'The number of payments.'), A('Present_value', true, 'The amount borrowed.')],
    PPMT: [A('Rate', true, 'The interest rate per period.'), A('Period', true, 'The period to find the principal for.'), A('Number_of_periods', true, 'The number of payments.'), A('Present_value', true, 'The amount borrowed.')],
    SORT: [A('Range', true, 'The range to sort.'), A('Sort_column', false, 'The column to sort by.'), A('Is_ascending', false, 'TRUE for ascending, FALSE for descending.')],
    UNIQUE: [A('Range', true, 'The range to take unique values from.')], SEQUENCE: [A('Rows', true, 'The number of rows.'), A('Columns', false, 'The number of columns.'), A('Start', false, 'The first number.'), A('Step', false, 'The amount to add each time.')],
  };
  var NESA_FN_SET = {}; NESA_FUNCS.forEach(function (n) { NESA_FN_SET[n] = 1; });
  // remove every engine function NESA doesn't have, so they give #ERROR! like the real exam
  (function () {
    if (!window.HyperFormula || !HyperFormula.unregisterFunction) return;
    try {
      HyperFormula.getRegisteredFunctionNames('enGB').forEach(function (n) {
        if (!NESA_FN_SET[n] && !/^HF\./.test(n) && n !== 'VERSION') { try { HyperFormula.unregisterFunction(n); } catch (e) { } }
      });
    } catch (e) { console.warn('function list', e); }
  })();

  // Typed values follow NESA's rules: plain numbers become numbers, m/d/yyyy becomes a date,
  // everything else (12%, $5, 1,000, true…) stays as text.
  var NUM_RE = /^\s*[-+]?(\d+\.?\d*|\.\d+)(e[-+]?\d+)?\s*$/i;
  var MDY_RE = /^\s*(\d{1,2})\/(\d{1,2})\/(\d{4})\s*$/;
  function mdyToSerial(s) {
    var m = MDY_RE.exec(s); if (!m) return null;
    var mo = +m[1], d = +m[2], y = +m[3], t = Date.UTC(y, mo - 1, d), dt = new Date(t);
    if (mo < 1 || mo > 12 || dt.getUTCDate() !== d) return null;
    return Math.round((t - Date.UTC(1899, 11, 30)) / 86400000);
  }
  function toEngine(v) {
    if (v === '' || v == null) return null;
    var s = String(v);
    if (isSparkline(s)) return null;
    var lk = parseLink(s); if (lk) return "'" + lk.text;
    if (s[0] === '=') return s;
    if (NUM_RE.test(s)) return s.trim();
    var ds = mdyToSerial(s); if (ds != null) return ds;
    return "'" + s;
  }
  var DATE_FN_RE = /^=\s*(DATE|DATEVALUE|EDATE|EOMONTH|NOW|WORKDAY|WORKDAY\.INTL)\s*\(/i;

  // ------------------------------------------------------------------ engine
  function newEngine() {
    hf = HyperFormula.buildEmpty({
      licenseKey: 'gpl-v3', dateFormats: ['MM/DD/YYYY', 'MM/DD/YY', 'YYYY-MM-DD'], timeFormats: ['hh:mm', 'hh:mm:ss'],
      currencySymbol: ['$'], decimalSeparator: '.', thousandSeparator: '', functionArgSeparator: ',', precisionRounding: 10,
      smartRounding: true, leapYear1900: false, nullDate: { year: 1899, month: 12, day: 30 },
    });
    var name = hf.addSheet('Sheet1'); SHEET = hf.getSheetId(name);
  }
  function getRaw(r, c) {
    var k = key(r, c);
    try { if (hf.doesCellHaveFormula(addr(r, c))) return hf.getCellFormula(addr(r, c)); } catch (e) { }
    return raws[k] == null ? '' : String(raws[k]);
  }
  function setRawNoRender(r, c, v) {
    var k = key(r, c);
    v = v == null ? '' : String(v);
    if (v === '') delete raws[k]; else raws[k] = v;
    try { hf.setCellContents(addr(r, c), [[toEngine(v)]]); } catch (e) { try { hf.setCellContents(addr(r, c), [[null]]); } catch (e2) { } }
    // like NESA: typing a date (m/d/yyyy) or a DATE() formula gives the cell the date format
    var st = styles[k] || {};
    if (!st.fmt && v && (mdyToSerial(v) != null || DATE_FN_RE.test(v))) { st.fmt = 'date'; styles[k] = st; }
  }
  function cellValue(r, c) { try { return hf.getCellValue(addr(r, c)); } catch (e) { return null; } }
  function isError(v) { return v && typeof v === 'object' && 'value' in v && 'type' in v; }
  function syncNamed() {
    try { hf.listNamedExpressions().forEach(function (n) { hf.removeNamedExpression(n); }); } catch (e) { }
    Object.keys(named).forEach(function (n) { var g = parseRange(named[n]); if (g) try { hf.addNamedExpression(n, '=Sheet1!' + absRange(g)); } catch (e) { console.warn('name', n, e.message); } });
  }

  // ------------------------------------------------------------------ display formatting
  var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  // NESA's date formats: mm/dd/yyyy (default), hh:mm AM/PM, mm/dd/yyyy hh:mm AM/PM, dd mmmm yyyy
  function serialToDate(n, pattern) {
    var ms = Date.UTC(1899, 11, 30) + n * 86400000, d = new Date(Math.round(ms / 60000) * 60000);
    var mm = String(d.getUTCMonth() + 1).padStart(2, '0'), dd = String(d.getUTCDate()).padStart(2, '0'), yy = d.getUTCFullYear();
    var h = d.getUTCHours(), ap = h < 12 ? 'AM' : 'PM', h12 = String(h % 12 || 12).padStart(2, '0'), mi = String(d.getUTCMinutes()).padStart(2, '0');
    switch (pattern) {
      case 'time': return h12 + ':' + mi + ' ' + ap;
      case 'datetime': return mm + '/' + dd + '/' + yy + ' ' + h12 + ':' + mi + ' ' + ap;
      case 'long': return dd + ' ' + MONTHS[d.getUTCMonth()] + ' ' + yy;
    }
    return mm + '/' + dd + '/' + yy;
  }
  function fmtCustom(n, pattern) {
    var p = String(pattern || '0');
    if (/[dmyh]/i.test(p) && !/[0#]/.test(p)) {   // date pattern such as mm/dd/yyyy or dd mmmm yyyy
      var d = new Date(Math.round((Date.UTC(1899, 11, 30) + n * 86400000) / 60000) * 60000), h = d.getUTCHours();
      var ap = /AM\/PM/i.test(p);
      return p.replace(/AM\/PM/gi, '\u0001').replace(/yyyy|yy|mmmm|mmm|mm|m|dd|d|hh|h|ss|nn/gi, function (t, i, s) {
        var lt = t.toLowerCase(), prev = s.slice(0, i);
        if ((lt === 'mm' || lt === 'm') && /h+\s*:\s*$/i.test(prev)) return String(d.getUTCMinutes()).padStart(2, '0');
        switch (lt) {
          case 'yyyy': return String(d.getUTCFullYear()); case 'yy': return String(d.getUTCFullYear()).slice(-2);
          case 'mmmm': return MONTHS[d.getUTCMonth()]; case 'mmm': return MONTHS[d.getUTCMonth()].slice(0, 3);
          case 'mm': return String(d.getUTCMonth() + 1).padStart(2, '0'); case 'm': return String(d.getUTCMonth() + 1);
          case 'dd': return String(d.getUTCDate()).padStart(2, '0'); case 'd': return String(d.getUTCDate());
          case 'hh': return String(ap ? (h % 12 || 12) : h).padStart(2, '0'); case 'h': return String(ap ? (h % 12 || 12) : h);
          case 'ss': return String(d.getUTCSeconds()).padStart(2, '0'); case 'nn': return String(d.getUTCMinutes()).padStart(2, '0');
        }
        return t;
      }).replace(/\u0001/g, h < 12 ? 'AM' : 'PM');
    }
    var first = p.search(/[#0]/), last = Math.max(p.lastIndexOf('#'), p.lastIndexOf('0'));
    if (first < 0) return p + n;
    var prefix = p.slice(0, first), core = p.slice(first, last + 1), suffix = p.slice(last + 1);
    var pct = /%/.test(suffix) || /%/.test(prefix);
    var dec = (core.split('.')[1] || '').length, group = /,/.test(core);
    var v = pct ? n * 100 : n;
    var s = Math.abs(v).toLocaleString('en-AU', { minimumFractionDigits: dec, maximumFractionDigits: dec, useGrouping: group });
    return (v < 0 ? '-' : '') + prefix.replace(/"/g, '') + s + suffix.replace(/"/g, '');
  }
  // NESA "Common" shows up to 8 decimal places (10/3 -> 3.33333333)
  function commonNumber(n) { return Number.isInteger(n) ? String(n) : String(+n.toFixed(8)); }
  function fmtNumber(n, st) {
    var fmt = st.fmt || 'common', dec = st.dec, neg = st.neg || 1;
    if (fmt === 'text') return commonNumber(n);
    if (fmt === 'custom') return fmtCustom(n, st.pattern);
    if (fmt === 'date') return serialToDate(n, st.datePattern);
    var out;
    if (fmt === 'percent') { dec = dec == null ? 0 : dec; out = Math.abs(n * 100).toFixed(dec) + '%'; }
    else if (fmt === 'currency') { dec = dec == null ? 2 : dec; out = (st.cur || '$') + Math.abs(n).toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec, useGrouping: st.group !== false }); }
    else if (fmt === 'number') { dec = dec == null ? 2 : dec; out = Math.abs(n).toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec, useGrouping: st.group !== false }); }
    else return dec != null ? n.toFixed(dec) : commonNumber(n);
    if (n >= 0) return out;
    return neg === 3 ? out : neg === 4 ? '(' + out + ')' : '-' + out;
  }
  function negRed(n, st) { return typeof n === 'number' && n < 0 && /currency|number|percent/.test(st.fmt || '') && (st.neg || 1) > 1; }
  function displayOf(r, c) {
    var raw = raws[key(r, c)];
    if (isSparkline(raw)) return { text: '', spark: raw };
    var lk = parseLink(raw);
    if (lk) return showFormulas ? { text: raw, num: false } : { text: lk.text, link: lk.url, num: false };
    if (showFormulas) { var f = getRaw(r, c); if (f && f[0] === '=') return { text: f, num: false }; }
    var v = cellValue(r, c), st = styles[key(r, c)] || {};
    if (v == null || v === '') return { text: '', num: false };
    if (isError(v)) return { text: '#ERROR!', err: true };              // NESA shows every error as #ERROR!
    if (typeof v === 'number') return { text: fmtNumber(v, st), num: true, red: negRed(v, st) };
    if (typeof v === 'boolean') return { text: v ? '1' : '', num: false, bool: true };   // NESA: TRUE shows 1, FALSE shows nothing
    return { text: String(v), num: false };
  }

  // ------------------------------------------------------------------ conditional formatting (NESA styles: normal / neutral / bad / good)
  var COND_STYLES = { normal: {}, neutral: { color: '#9c5700', bg: '#ffeb9c' }, bad: { color: '#9c0006', bg: '#ffc7ce' }, good: { color: '#006100', bg: '#c6efce' } };
  var COND_OPS = [['Common', null], ['greater', '>'], ['less', '<'], ['greater or equal', '>='], ['less or equal', '<='], ['equal', '='], ['not equal', '!='], ['between', 'between'], ['not between', 'notbetween'],
    ['Text', null], ['contains', 'contains'], ['not contains', 'notcontains'], ['begins with', 'begins'], ['not begins with', 'notbegins'], ['ends with', 'ends'], ['not ends with', 'notends']];
  function condMatches(rule, v) {
    var n = typeof v === 'number' ? v : (v !== '' && v != null && !isNaN(+v) ? +v : null);
    var a = rule.v1, b = rule.v2, an = +a, bn = +b, s = String(v == null ? '' : v).toLowerCase(), t = String(a == null ? '' : a).toLowerCase();
    switch (rule.op) {
      case '>': return n != null && n > an;
      case '<': return n != null && n < an;
      case '>=': return n != null && n >= an;
      case '<=': return n != null && n <= an;
      case '=': return n != null && a !== '' && !isNaN(an) ? n === an : s === t;
      case '!=': return n != null && a !== '' && !isNaN(an) ? n !== an : s !== t;
      case 'between': return n != null && n >= Math.min(an, bn) && n <= Math.max(an, bn);
      case 'notbetween': return n != null && !(n >= Math.min(an, bn) && n <= Math.max(an, bn));
      case 'contains': return s.indexOf(t) >= 0;
      case 'notcontains': return s.indexOf(t) < 0;
      case 'begins': return s.indexOf(t) === 0;
      case 'notbegins': return s.indexOf(t) !== 0;
      case 'ends': return t !== '' && s.slice(-t.length) === t;
      case 'notends': return !(t !== '' && s.slice(-t.length) === t);
    }
    return false;
  }
  function condStyle(r, c) {
    var out = null;
    conds.forEach(function (rule) {
      var g = parseRange(rule.range); if (!g || !inRange(g, r, c)) return;
      var v = cellValue(r, c); if (isError(v) || v == null || v === '') return;
      if (condMatches(rule, v)) out = Object.assign(out || {}, typeof rule.style === 'string' ? COND_STYLES[rule.style] : rule.style);
    });
    return out;
  }

  function displayText(r, c) { var d = displayOf(r, c); return d.text; }

  // ------------------------------------------------------------------ rendering
  var tds = [];
  function mergeAt(r, c) { for (var i = 0; i < merges.length; i++) { var g = parseRange(merges[i]); if (g && inRange(g, r, c)) return g; } return null; }
  function buildGrid() {
    var html = '<colgroup><col style="width:40px">';
    for (var c = 0; c < COLS; c++) html += '<col style="width:' + (hiddenCols[c] ? 0 : (colW[c] || DEF_W)) + 'px">';
    html += '</colgroup><thead><tr><th class="corner"></th>';
    for (c = 0; c < COLS; c++) html += '<th data-c="' + c + '" class="' + (hiddenCols[c] ? 'hc' : '') + (c > 0 && hiddenCols[c - 1] && !hiddenCols[c] ? ' after-hidden' : '') + '">' + colName(c) + '<div class="col-resizer" data-c="' + c + '"></div></th>';
    html += '</tr></thead><tbody>';
    for (var r = 0; r < ROWS; r++) {
      html += '<tr style="height:' + (rowH[r] || DEF_H) + 'px"><th data-r="' + r + '"' + (r > 0 && hiddenRows[r - 1] && !hiddenRows[r] ? ' class="after-hidden"' : '') + '>' + (r + 1) + '<div class="row-resizer" data-r="' + r + '"></div></th>';
      for (c = 0; c < COLS; c++) html += '<td data-r="' + r + '" data-c="' + c + '"' + (hiddenCols[c] ? ' class="hc"' : '') + '></td>';
      html += '</tr>';
    }
    grid.innerHTML = html + '</tbody>';
    var w = 40; for (c = 0; c < COLS; c++) w += hiddenCols[c] ? 0 : (colW[c] || DEF_W); grid.style.width = w + 'px';
    // group brackets with a +/- toggle on the header just after the group (like Webix)
    ['c', 'r'].forEach(function (gk) {
      groups[gk].forEach(function (x, gi) {
        for (var i = x.a; i <= x.b; i++) { var h = gk === 'c' ? grid.tHead.rows[0].cells[i + 1] : (grid.tBodies[0].rows[i] || {}).cells && grid.tBodies[0].rows[i].cells[0]; if (h) h.classList.add('grouped'); }
        var t = x.b + 1 < (gk === 'c' ? COLS : ROWS) ? x.b + 1 : x.a - 1; if (t < 0) return;
        var th = gk === 'c' ? grid.tHead.rows[0].cells[t + 1] : grid.tBodies[0].rows[t].cells[0];
        th.insertAdjacentHTML('beforeend', '<span class="grp-tog" data-gk="' + gk + '" data-gi="' + gi + '" title="' + (x.collapsed ? 'Expand' : 'Collapse') + '">' + (x.collapsed ? '+' : '−') + '</span>');
      });
    });
    tds = [];
    var rows = grid.tBodies[0].rows;
    for (r = 0; r < ROWS; r++) { tds[r] = []; for (c = 0; c < COLS; c++) tds[r][c] = rows[r].cells[c + 1]; }
    merges.forEach(function (m) {
      var g = parseRange(m); if (!g) return;
      for (var rr = g.r1; rr <= g.r2; rr++) for (var cc = g.c1; cc <= g.c2; cc++) if (rr < ROWS && cc < COLS && (rr !== g.r1 || cc !== g.c1)) tds[rr][cc].style.display = 'none';
      if (g.r1 < ROWS && g.c1 < COLS) { tds[g.r1][g.c1].colSpan = g.c2 - g.c1 + 1; tds[g.r1][g.c1].rowSpan = g.r2 - g.r1 + 1; }
    });
    renderCells();
  }
  function renderCells() {
    for (var r = 0; r < ROWS; r++) {
      grid.tBodies[0].rows[r].style.display = isRowHidden(r) ? 'none' : '';
      for (var c = 0; c < COLS; c++) renderCell(r, c);
    }
    renderSelection(); renderCharts();
  }
  function renderCell(r, c) {
    var td = tds[r] && tds[r][c]; if (!td) return;
    var k = key(r, c), st = styles[k] || {}, d = displayOf(r, c), cs = condStyle(r, c);
    if (d.spark) td.innerHTML = sparklineSvg(d.spark, td);
    else if (d.link) td.innerHTML = '<a class="ss-link" href="' + escapeHtml(d.link) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(d.text) + '</a>';
    else td.textContent = d.text;
    td.classList.toggle('invalid', highlightInvalid && !!st.vr && !isValidValue(r, c));
    td.title = d.title || '';
    var s = td.style;
    s.fontWeight = st.b || (cs && cs.b) ? '700' : '';
    s.fontStyle = st.i ? 'italic' : '';
    s.textDecoration = [st.u ? 'underline' : '', st.s ? 'line-through' : ''].join(' ').trim();
    s.fontSize = st.fs ? st.fs + 'px' : '';
    s.color = (cs && cs.color) || (d.red ? '#ff0000' : '') || st.color || '';
    s.background = (cs && cs.bg) || st.bg || '';
    s.textAlign = st.ha || 'left';   // NESA aligns everything left unless the cell is styled
    s.verticalAlign = st.va || 'middle';   // Webix default
    s.paddingLeft = st.indent ? (6 + st.indent * 14) + 'px' : '';
    td.classList.toggle('wrap', !!st.wrap);
    td.classList.toggle('err', !!d.err);
    td.classList.toggle('has-comment', !!comments[k]);
    td.classList.toggle('locked', !!st.lock);
    td.classList.toggle('has-dd', !!st.dd);
    td.classList.toggle('spark', !!d.spark);
    var bcss = borderCss(st);
    s.borderTop = st.bt ? bcss : '';
    s.borderLeft = st.bl ? bcss : '';
    s.borderRight = st.br ? bcss : '';
    s.borderBottom = st.bb ? bcss : '';
    var fcell = filter ? filterCells()[k] : null;
    td.classList.toggle('has-filter', !!fcell);
    if (fcell) {
      var on = !!(fcell.values || fcell.v);
      td.insertAdjacentHTML('beforeend', '<span class="ss-filter-btn' + (on ? ' on' : '') + '" data-fr="' + r + '" data-fc="' + c + '"><i class="fas fa-filter"></i></span>');
    }
  }
  function cellRect(r, c) {
    var m = mergeAt(r, c); if (m) { r = m.r1; c = m.c1; }
    var td = tds[r][c]; return { x: td.offsetLeft, y: td.offsetTop, w: td.offsetWidth, h: td.offsetHeight };
  }
  function rangeRect(g) {
    var a = cellRect(g.r1, g.c1), b = cellRect(g.r2, g.c2);
    var x2 = Math.max(a.x + a.w, b.x + b.w), y2 = Math.max(a.y + a.h, b.y + b.h);
    return { x: Math.min(a.x, b.x), y: Math.min(a.y, b.y), w: x2 - Math.min(a.x, b.x), h: y2 - Math.min(a.y, b.y) };
  }
  function place(elm, rc) { elm.style.left = rc.x + 'px'; elm.style.top = rc.y + 'px'; elm.style.width = rc.w + 'px'; elm.style.height = rc.h + 'px'; }
  function renderSelection() {
    if (!tds.length) return;
    var g = norm(sel), multi = g.r1 !== g.r2 || g.c1 !== g.c2;
    var selbox = $('selbox');
    selbox.style.display = multi ? 'block' : 'none';
    if (multi) place(selbox, rangeRect(g));
    place($('activebox'), cellRect(act.r, act.c));
    $('activebox').classList.toggle('multi', multi);   // NESA draws only the outline of a selected range
    var rr = rangeRect(g), h = $('handle');
    h.style.left = (rr.x + rr.w - 5) + 'px'; h.style.top = (rr.y + rr.h - 5) + 'px';
    Array.prototype.forEach.call(grid.tHead.rows[0].cells, function (th, i) { th.classList.toggle('hsel', i > 0 && i - 1 >= g.c1 && i - 1 <= g.c2); });
    for (var r = 0; r < ROWS; r++) grid.tBodies[0].rows[r].cells[0].classList.toggle('hsel', r >= g.r1 && r <= g.r2);
    namebox.value = rangeStr(g);
    if (!editing) fx.value = getRaw(act.r, act.c);
    updateToolbarState(); updateStatus();
    if (!editing) positionEditor();
  }
  function positionEditor() {
    var rc = cellRect(act.r, act.c);
    editor.style.left = rc.x + 'px'; editor.style.top = rc.y + 'px';
    editor.style.width = rc.w + 'px'; editor.style.height = rc.h + 'px';
  }
  function updateStatus() {
    var g = norm(sel), sum = 0, count = 0, nums = 0;
    for (var r = g.r1; r <= Math.min(g.r2, ROWS - 1); r++) for (var c = g.c1; c <= Math.min(g.c2, COLS - 1); c++) { var v = cellValue(r, c); if (v !== null && v !== '' && !isError(v)) { count++; if (typeof v === 'number') { sum += v; nums++; } } }
    var k = key(act.r, act.c), st = styles[k] || {};
    var left = comments[k] ? '<i class="far fa-comment"></i> ' + escapeHtml(comments[k]).slice(0, 80) : st.lock ? '<i class="fas fa-lock"></i> Locked cell' : '&nbsp;';
    $('status').innerHTML = '<span>' + left + '</span><span>' +
      (count > 1 ? 'Count: ' + count + (nums ? '&nbsp;&nbsp; Sum: ' + (+sum.toPrecision(12)) + '&nbsp;&nbsp; Average: ' + (+(sum / nums).toPrecision(10)) : '') : '') + '</span>';
  }
  function scrollIntoViewCell(r, c) {
    var rc = cellRect(r, c);
    if (rc.x - 40 < wrap.scrollLeft) wrap.scrollLeft = rc.x - 40;
    else if (rc.x + rc.w > wrap.scrollLeft + wrap.clientWidth) wrap.scrollLeft = rc.x + rc.w - wrap.clientWidth;
    if (rc.y - 22 < wrap.scrollTop) wrap.scrollTop = rc.y - 22;
    else if (rc.y + rc.h > wrap.scrollTop + wrap.clientHeight) wrap.scrollTop = rc.y + rc.h - wrap.clientHeight;
  }

  // ------------------------------------------------------------------ sparklines (=SPARKLINE(range,"type","#colour"), as in Webix)
  function parseSparkline(raw) {
    var m = /^=\s*SPARKLINE\s*\(\s*([^,)]+)\s*(?:,\s*"?([A-Za-z]+)"?\s*)?(?:,\s*"?(#[0-9a-fA-F]{3,6})"?\s*)?(?:,\s*"?(#[0-9a-fA-F]{3,6})"?\s*)?\)/i.exec(raw || '');
    if (!m) return null;
    var t = (m[2] || 'line'), tl = t.toLowerCase();
    t = { splinearea: 'splineArea' }[tl] || tl;
    return { range: m[1], type: t, color: m[3] || '#6666FF', neg: m[4] || '#FF6666' };
  }
  function rangeNumbers(g) { var out = []; for (var r = g.r1; r <= g.r2; r++) for (var c = g.c1; c <= g.c2; c++) { var v = cellValue(r, c); if (typeof v === 'number') out.push(v); } return out; }
  function sparklineSvg(raw, td) {
    var p = parseSparkline(raw); if (!p) return '<span style="color:#b81237">#ERROR!</span>';
    var g = parseRange(p.range); if (!g) return '<span style="color:#b81237">#REF!</span>';
    var vals = rangeNumbers(g); if (!vals.length) return '';
    var W = Math.max(30, (td && td.offsetWidth || 100) - 10), H = Math.max(14, (td && td.offsetHeight || 28) - 8);
    var min = Math.min.apply(null, vals.concat(0)), max = Math.max.apply(null, vals), span = (max - min) || 1, col = p.color;
    var svg = '<svg width="' + W + '" height="' + H + '" style="display:block">';
    if (p.type === 'bar' || p.type === 'column') {
      var bw = W / vals.length, lo = Math.min(0, min), hi = Math.max(0, max), sp2 = (hi - lo) || 1, zero = H - (0 - lo) / sp2 * H;
      vals.forEach(function (v, i) { var y = H - (v - lo) / sp2 * H; svg += '<rect x="' + (i * bw + 1) + '" y="' + Math.min(y, zero) + '" width="' + Math.max(1, bw - 2) + '" height="' + Math.max(1, Math.abs(zero - y)) + '" fill="' + (v < 0 ? p.neg : col) + '"/>'; });
    } else if (p.type === 'pie' || p.type === 'donut') {
      var tot = vals.reduce(function (a, b) { return a + Math.abs(b); }, 0) || 1, ang = -Math.PI / 2, cx = W / 2, cy = H / 2, rad = H / 2 - 1;
      var pal = ['#e06666', '#f6b26b', '#ffd966', '#93c47d', '#76a5af', '#6fa8dc', '#8e7cc3', '#c27ba0'];
      vals.forEach(function (v, i) { var a2 = ang + Math.abs(v) / tot * Math.PI * 2; var large = a2 - ang > Math.PI ? 1 : 0; svg += '<path d="M' + cx + ',' + cy + ' L' + (cx + rad * Math.cos(ang)) + ',' + (cy + rad * Math.sin(ang)) + ' A' + rad + ',' + rad + ' 0 ' + large + ' 1 ' + (cx + rad * Math.cos(a2)) + ',' + (cy + rad * Math.sin(a2)) + ' Z" fill="' + pal[i % pal.length] + '"/>'; ang = a2; });
      if (p.type === 'donut') svg += '<circle cx="' + cx + '" cy="' + cy + '" r="' + (rad * 0.5) + '" fill="#fff"/>';
    } else if (p.type === 'radar') {
      var rcx = W / 2, rcy = H / 2, rr = H / 2 - 1, pts2 = vals.map(function (v, i) { var a = -Math.PI / 2 + i * 2 * Math.PI / vals.length, k = (v - Math.min(0, min)) / ((max - Math.min(0, min)) || 1) * rr; return (rcx + k * Math.cos(a)) + ',' + (rcy + k * Math.sin(a)); });
      svg += '<polygon points="' + pts2.join(' ') + '" fill="' + col + '" fill-opacity=".3" stroke="' + col + '" stroke-width="1.2"/>';
    } else {
      var pts = vals.map(function (v, i) { return (vals.length === 1 ? W / 2 : i * W / (vals.length - 1)) + ',' + (H - 1 - (v - min) / span * (H - 2)); });
      if (p.type === 'area' || p.type === 'splinearea') svg += '<polygon points="0,' + H + ' ' + pts.join(' ') + ' ' + W + ',' + H + '" fill="' + col + '" fill-opacity=".35"/>';
      svg += '<polyline points="' + pts.join(' ') + '" fill="none" stroke="' + col + '" stroke-width="1.5"/>';
    }
    return svg + '</svg>';
  }

  // ------------------------------------------------------------------ serialisation
  function serialize() {
    var cells = {}, k, p, keys = {};
    Object.keys(raws).forEach(function (x) { keys[x] = 1; }); Object.keys(styles).forEach(function (x) { keys[x] = 1; });
    for (k in keys) {
      p = k.split(','); var r = +p[0], c = +p[1];
      var raw = getRaw(r, c), st = styles[k], hasSt = st && Object.keys(st).length;
      if (raw === '' && !hasSt) continue;
      var cell = {}; if (raw !== '') cell.v = raw; if (hasSt) cell.s = st;
      cells[a1(r, c)] = cell;
    }
    var cw = {}; Object.keys(colW).forEach(function (c) { cw[colName(+c)] = colW[c]; });
    var cm = {}; Object.keys(comments).forEach(function (x) { p = x.split(','); cm[a1(+p[0], +p[1])] = comments[x]; });
    return { format: 'epc-sheet', cells: cells, colW: cw, rowH: Object.assign({}, rowH), merges: merges.slice(), conds: conds.map(function (x) { return Object.assign({}, x); }),
      comments: cm, charts: charts.map(function (ch) { return Object.assign({}, ch); }), named: Object.assign({}, named), filter: filter ? JSON.parse(JSON.stringify(filter)) : null,
      showFormulas: showFormulas, hiddenRows: Object.keys(hiddenRows).map(Number), hiddenCols: Object.keys(hiddenCols).map(Number),
      groups: JSON.parse(JSON.stringify(groups)), highlightInvalid: highlightInvalid, changed: changed };
  }
  function clearModel() { raws = {}; styles = {}; comments = {}; colW = {}; rowH = {}; merges = []; conds = []; charts = []; named = {}; filter = null; showFormulas = false; hiddenRows = {}; hiddenCols = {}; groups = { r: [], c: [] }; highlightInvalid = false; newEngine(); }
  function eachRange(spec, fn) { (Array.isArray(spec) ? spec : spec ? [spec] : []).forEach(function (s) { var g = parseRange(s); if (!g) return; for (var r = g.r1; r <= g.r2; r++) for (var c = g.c1; c <= g.c2; c++) fn(r, c); }); }
  function styleOf(r, c) { var k = key(r, c); return styles[k] || (styles[k] = {}); }

  function load(v) {
    clearModel();
    if (v && v.data && v.styles) loadWebix(v);
    else if (v && (v.cells || v.format === 'epc-sheet')) {
      var cellsIn = v.cells || {};
      eachRange(v.bold, function (r, c) { styleOf(r, c).b = true; });
      eachRange(v.italic, function (r, c) { styleOf(r, c).i = true; });
      eachRange(v.center, function (r, c) { styleOf(r, c).ha = 'center'; });
      eachRange(v.right, function (r, c) { styleOf(r, c).ha = 'right'; });
      eachRange(v.currency, function (r, c) { styleOf(r, c).fmt = 'currency'; });
      eachRange(v.percent, function (r, c) { styleOf(r, c).fmt = 'percent'; });
      eachRange(v.date, function (r, c) { styleOf(r, c).fmt = 'date'; });
      eachRange(v.borders, function (r, c) { var s = styleOf(r, c); s.bt = s.bb = s.bl = s.br = true; });
      eachRange(v.fill, function (r, c) { styleOf(r, c).bg = '#f2f2f2'; });
      Object.keys(cellsIn).forEach(function (ref) {
        var p = parseA1(ref); if (!p) return;
        var cell = cellsIn[ref];
        if (cell !== null && typeof cell === 'object') {
          if (cell.s) Object.assign(styleOf(p.r, p.c), cell.s);
          if (cell.v != null && cell.v !== '') raws[key(p.r, p.c)] = String(cell.v);
        } else if (cell != null && cell !== '') raws[key(p.r, p.c)] = String(cell);
      });
      var cw = v.colW || v.colWidths || {};
      Object.keys(cw).forEach(function (c) { var idx = isNaN(+c) ? colIndex(c.toUpperCase()) : +c; colW[idx] = +cw[c]; });
      Object.keys(v.rowH || {}).forEach(function (r) { rowH[+r] = +v.rowH[r]; });
      merges = (v.merges || v.merge || []).slice();
      conds = (v.conds || []).map(function (x) { return Object.assign({}, x); });
      Object.keys(v.comments || {}).forEach(function (ref) { var p = parseA1(ref); if (p) comments[key(p.r, p.c)] = v.comments[ref]; });
      charts = (v.charts || []).map(function (ch) { return Object.assign({}, ch); });
      named = Object.assign({}, v.named || {});
      filter = v.filter ? JSON.parse(JSON.stringify(v.filter)) : null;
      showFormulas = !!v.showFormulas;
      (v.hiddenRows || []).forEach(function (r) { hiddenRows[r] = true; });
      (v.hiddenCols || []).forEach(function (c) { hiddenCols[c] = true; });
      if (v.groups) groups = { r: (v.groups.r || []).map(function (x) { return Object.assign({}, x); }), c: (v.groups.c || []).map(function (x) { return Object.assign({}, x); }) };
      highlightInvalid = !!v.highlightInvalid;
      syncNamed();
      pushAllToEngine();
    }
    Object.keys(styles).forEach(function (k) { if (!Object.keys(styles[k]).length) delete styles[k]; });
    changed = !!(v && v.changed);
    ensureSize();
    buildGrid();
  }
  function pushAllToEngine() {
    hf.batch(function () { Object.keys(raws).forEach(function (k) { var p = k.split(','); try { hf.setCellContents(addr(+p[0], +p[1]), [[toEngine(raws[k])]]); } catch (e) { } }); });
  }
  function ensureSize() {
    var maxR = ROWS - 1, maxC = COLS - 1;
    Object.keys(raws).concat(Object.keys(styles)).forEach(function (k) { var p = k.split(','); maxR = Math.max(maxR, +p[0] + 5); maxC = Math.max(maxC, +p[1] + 2); });
    ROWS = Math.max(ROWS, maxR + 1); COLS = Math.max(COLS, maxC + 1);
  }
  // Webix SpreadSheet serialisation (NESA's own items)
  function loadWebix(v) {
    var fmts = {}; (v.formats || []).forEach(function (f) { fmts[f[0]] = f[1]; });
    var st = {};
    (v.styles || []).forEach(function (s) {
      var f = String(s[1]).split(';'), o = {};
      if (f[0]) o.color = f[0]; if (f[1]) o.bg = f[1]; if (f[2]) o.ha = f[2]; if (f[4]) o.fs = parseInt(f[4], 10) || undefined;
      if (f[5] === 'italic') o.i = true; if (f[6] === 'underline') o.u = true; if (f[7] === 'bold') o.b = true;
      if (f[8]) o.va = f[8] === 'baseline' ? 'bottom' : f[8]; if (f[9] === 'wrap') o.wrap = true;
      var fm = fmts[f[11]] || f[11];
      if (fm) {
        if (/\$/.test(fm)) o.fmt = 'currency'; else if (/%/.test(fm)) o.fmt = 'percent';
        else if (/[0#]/.test(fm)) { o.fmt = 'number'; o.dec = (fm.split('.')[1] || '').length; o.group = /,/.test(fm); }
        else if (/d|m|y/i.test(fm)) o.fmt = 'date';
      }
      if (f[12]) { o.br = true; o.bc = f[12]; } if (f[13]) { o.bb = true; o.bc = f[13]; } if (f[14]) { o.bl = true; o.bc = f[14]; } if (f[15]) { o.bt = true; o.bc = f[15]; }
      if (f[16] === 'line-through' || f[16] === 'strike') o.s = true;
      Object.keys(o).forEach(function (k) { if (o[k] === undefined) delete o[k]; });
      st[s[0]] = o;
    });
    (v.data || []).forEach(function (d) {
      var r = d[0] - 1, c = d[1] - 1;
      if (d[2] != null && d[2] !== '') raws[key(r, c)] = String(d[2]);
      if (d[3] && st[d[3]]) styles[key(r, c)] = Object.assign({}, st[d[3]]);
    });
    (v.spans || []).forEach(function (s) { merges.push(rangeStr({ r1: s[0] - 1, c1: s[1] - 1, r2: s[0] - 1 + (s[3] || 1) - 1, c2: s[1] - 1 + (s[2] || 1) - 1 })); });
    (v.sizes || []).forEach(function (s) { if (s[0] === 0 && s[1] > 0) colW[s[1] - 1] = s[2]; else if (s[1] === 0 && s[0] > 0) rowH[s[0] - 1] = s[2]; });
    (v.comments || []).forEach(function (cm) { comments[key(cm[0] - 1, cm[1] - 1)] = cm[2]; });
    pushAllToEngine();
  }

  // ------------------------------------------------------------------ change tracking / undo
  var postTimer = null;
  function post(type, value, extra) { if (window.parent !== window) parent.postMessage(Object.assign({ source: 'epc-embed', id: embedId, type: type, value: value }, extra || {}), '*'); }
  function snapshot() { return JSON.stringify(serialize()); }
  function beginChange() { undoStack.push(snapshot()); if (undoStack.length > MAX_UNDO) undoStack.shift(); redoStack = []; }
  function schedulePost() { clearTimeout(postTimer); postTimer = setTimeout(function () { post('value', serialize()); }, 300); }
  function endChange(rebuild) { changed = true; if (rebuild) { ensureSize(); buildGrid(); } else renderCells(); schedulePost(); }
  function restore(json) { var keep = { sel: Object.assign({}, sel), act: Object.assign({}, act) }; load(JSON.parse(json)); changed = true; sel = keep.sel; act = keep.act; renderSelection(); schedulePost(); }
  function undo() { if (readOnly || !undoStack.length) return; commitEdit(); redoStack.push(snapshot()); restore(undoStack.pop()); }
  function redo() { if (readOnly || !redoStack.length) return; commitEdit(); undoStack.push(snapshot()); restore(redoStack.pop()); }

  // ------------------------------------------------------------------ selection & mouse
  function cellFromEvent(e) { var td = e.target.closest && e.target.closest('td[data-r]'); return td ? { r: +td.getAttribute('data-r'), c: +td.getAttribute('data-c') } : null; }
  function setSelection(r1, c1, r2, c2, ar, ac) {
    sel = { r1: r1, c1: c1, r2: r2, c2: c2 };
    act = { r: ar == null ? r1 : ar, c: ac == null ? c1 : ac };
    var g = norm(sel);
    merges.forEach(function (m) { var mg = parseRange(m); if (mg && overlaps(mg, g)) { g.r1 = Math.min(g.r1, mg.r1); g.c1 = Math.min(g.c1, mg.c1); g.r2 = Math.max(g.r2, mg.r2); g.c2 = Math.max(g.c2, mg.c2); } });
    if (sel.r1 <= sel.r2) { sel.r1 = g.r1; sel.r2 = g.r2; } else { sel.r2 = g.r1; sel.r1 = g.r2; }
    if (sel.c1 <= sel.c2) { sel.c1 = g.c1; sel.c2 = g.c2; } else { sel.c2 = g.c1; sel.c1 = g.c2; }
    renderSelection();
    closePop('dd');
    if (!editing) showInputMessage();
  }
  var drag = null;
  grid.addEventListener('mousedown', function (e) {
    if (e.button !== 0) return;
    var tog = e.target.closest('.grp-tog');
    if (tog) { e.preventDefault(); e.stopPropagation(); if (!readOnly) toggleGroup(tog.getAttribute('data-gk'), +tog.getAttribute('data-gi')); return; }
    var lnk = e.target.closest('a.ss-link');
    if (lnk && !editing) { e.preventDefault(); window.open(lnk.getAttribute('href'), '_blank', 'noopener'); }
    var fb = e.target.closest('.ss-filter-btn');
    if (fb) { e.preventDefault(); e.stopPropagation(); if (!readOnly) { if (pops.filter) closePop('filter'); else openFilterMenu(+fb.getAttribute('data-fr'), +fb.getAttribute('data-fc'), fb); } return; }
    var rz = e.target.closest('.col-resizer, .row-resizer');
    if (rz) { startResize(e, rz); return; }
    var th = e.target.closest('th');
    if (th && th.hasAttribute('data-c')) { commitEdit(); var c = +th.getAttribute('data-c'); setSelection(0, c, ROWS - 1, c, 0, c); focusKeys(); e.preventDefault(); return; }
    if (th && th.hasAttribute('data-r')) { commitEdit(); var r = +th.getAttribute('data-r'); setSelection(r, 0, r, COLS - 1, r, 0); focusKeys(); e.preventDefault(); return; }
    if (th && th.classList.contains('corner')) { commitEdit(); setSelection(0, 0, ROWS - 1, COLS - 1, 0, 0); focusKeys(); e.preventDefault(); return; }
    var cell = cellFromEvent(e); if (!cell) return;
    if (editing && canPoint()) { e.preventDefault(); startPoint(cell); drag = { mode: 'point' }; return; }
    commitEdit();
    if (e.shiftKey) setSelection(act.r, act.c, cell.r, cell.c, act.r, act.c);
    else setSelection(cell.r, cell.c, cell.r, cell.c);
    drag = { mode: 'select' };
    focusKeys();
    e.preventDefault();
  });
  document.addEventListener('mousemove', function (e) {
    if (!drag) return;
    var el2 = document.elementFromPoint(e.clientX, e.clientY);
    var td = el2 && el2.closest && el2.closest('td[data-r]'); if (!td) return;
    var r = +td.getAttribute('data-r'), c = +td.getAttribute('data-c');
    if (drag.mode === 'select') setSelection(act.r, act.c, r, c, act.r, act.c);
    else if (drag.mode === 'point') extendPoint(r, c);
    else if (drag.mode === 'fill') showFillPreview(r, c);
  });
  document.addEventListener('mouseup', function () { if (drag && drag.mode === 'fill') doFill(); drag = null; });
  $('handle').addEventListener('mousedown', function (e) { if (readOnly) return; e.preventDefault(); e.stopPropagation(); commitEdit(); drag = { mode: 'fill', target: null }; });
  // right-click menus: the same items as the NESA (Webix) spreadsheet for cells, column headers and row headers
  grid.addEventListener('contextmenu', function (e) {
    if (readOnly) return;
    var th = e.target.closest('th');
    if (th && (th.hasAttribute('data-c') || th.hasAttribute('data-r'))) {
      e.preventDefault(); commitEdit();
      var isRow = th.hasAttribute('data-r'), i = +th.getAttribute(isRow ? 'data-r' : 'data-c'), g0 = norm(sel);
      var whole = isRow ? (g0.c1 === 0 && g0.c2 === COLS - 1 && i >= g0.r1 && i <= g0.r2) : (g0.r1 === 0 && g0.r2 === ROWS - 1 && i >= g0.c1 && i <= g0.c2);
      if (!whole) { if (isRow) setSelection(i, 0, i, COLS - 1, i, 0); else setSelection(0, i, ROWS - 1, i, 0, i); }
      openMenu(e.clientX, e.clientY, headerMenuEntries(isRow));
      return;
    }
    var cell = cellFromEvent(e); if (!cell) return; e.preventDefault(); commitEdit();
    if (!inRange(norm(sel), cell.r, cell.c)) setSelection(cell.r, cell.c, cell.r, cell.c);
    openMenu(e.clientX, e.clientY, cellMenuEntries());
  });

  function startResize(e, rz) {
    e.preventDefault(); e.stopPropagation(); if (readOnly) return;
    var isCol = rz.classList.contains('col-resizer'), idx = +rz.getAttribute(isCol ? 'data-c' : 'data-r');
    var start = isCol ? e.clientX : e.clientY, orig = isCol ? (colW[idx] || DEF_W) : (rowH[idx] || DEF_H), snap = snapshot(), moved = false;
    function mv(ev) {
      if (Math.abs((isCol ? ev.clientX : ev.clientY) - start) < 2 && !moved) return;
      moved = true;
      var n = Math.max(isCol ? 24 : 18, orig + (isCol ? ev.clientX : ev.clientY) - start);
      if (isCol) { colW[idx] = n; grid.querySelector('colgroup').children[idx + 1].style.width = n + 'px'; var w = 40; for (var c = 0; c < COLS; c++) w += (colW[c] || DEF_W); grid.style.width = w + 'px'; }
      else { rowH[idx] = n; grid.tBodies[0].rows[idx].style.height = n + 'px'; }
      renderSelection(); renderCharts();
    }
    function up() { document.removeEventListener('mousemove', mv); document.removeEventListener('mouseup', up); if (!moved) return; undoStack.push(snap); redoStack = []; endChange(false); }
    document.addEventListener('mousemove', mv); document.addEventListener('mouseup', up);
  }

  // ------------------------------------------------------------------ fill handle
  function showFillPreview(r, c) {
    var g = norm(sel), t;
    var dDown = r - g.r2, dUp = g.r1 - r, dRight = c - g.c2, dLeft = g.c1 - c;
    var best = Math.max(dDown, dUp, dRight, dLeft);
    if (best <= 0) { drag.target = null; $('fillbox').classList.add('hidden'); return; }
    if (best === dDown) t = { r1: g.r1, c1: g.c1, r2: r, c2: g.c2 };
    else if (best === dRight) t = { r1: g.r1, c1: g.c1, r2: g.r2, c2: c };
    else if (best === dUp) t = { r1: r, c1: g.c1, r2: g.r2, c2: g.c2 };
    else t = { r1: g.r1, c1: c, r2: g.r2, c2: g.c2 };
    drag.target = t;
    var fb = $('fillbox'); fb.classList.remove('hidden'); place(fb, rangeRect(t));
  }
  function doFill() {
    $('fillbox').classList.add('hidden');
    var t = drag.target; if (!t) return;
    var g = norm(sel), h = g.r2 - g.r1 + 1, w = g.c2 - g.c1 + 1;
    beginChange();
    hf.batch(function () {
      for (var r = t.r1; r <= t.r2; r++) for (var c = t.c1; c <= t.c2; c++) {
        if (inRange(g, r, c) || (styles[key(r, c)] || {}).lock) continue;
        var sr = g.r1 + (((r - g.r1) % h) + h) % h, sc = g.c1 + (((c - g.c1) % w) + w) % w;
        setRawNoRender(r, c, shiftFormula(getRaw(sr, sc), r - sr, c - sc));
        var st = styles[key(sr, sc)]; if (st) styles[key(r, c)] = Object.assign({}, st); else delete styles[key(r, c)];
      }
    });
    setSelection(t.r1, t.c1, t.r2, t.c2, act.r, act.c);
    endChange(false);
  }

  // ------------------------------------------------------------------ editing
  function focusKeys() { if (!editing) { positionEditor(); editor.value = ''; editor.focus({ preventScroll: true }); } }
  function isLocked(r, c) { return !!(styles[key(r, c)] || {}).lock; }
  function beginEdit(replace, initialText) {
    if (readOnly) return;
    var m = mergeAt(act.r, act.c); if (m) act = { r: m.r1, c: m.c1 };
    if (isLocked(act.r, act.c)) { flash('This cell is locked. Unlock it with the lock button to edit it.'); editor.value = ''; return; }
    scrollIntoViewCell(act.r, act.c);
    positionEditor();
    editing = { r: act.r, c: act.c, input: editor };
    editor.classList.add('editing');
    editor.value = replace ? (initialText || '') : getRaw(act.r, act.c);
    fx.value = editor.value;
    var st = styles[key(act.r, act.c)] || {};
    editor.style.fontWeight = st.b ? '700' : ''; editor.style.fontStyle = st.i ? 'italic' : '';
    editor.style.textAlign = st.ha || 'left';
    autoSizeEditor();
    editor.focus({ preventScroll: true });
    var n = editor.value.length; editor.setSelectionRange(n, n);
    point = null;
    closePop('vmsg');
    updateFormulaUI();
  }
  // NESA's cell editor stays the size of the cell (long text scrolls inside it)
  function autoSizeEditor() {
    var rc = cellRect(editing ? editing.r : act.r, editing ? editing.c : act.c);
    editor.style.width = rc.w + 'px'; editor.style.height = rc.h + 'px';
    editor.style.lineHeight = Math.max(16, rc.h - 4) + 'px';
    edhl.style.lineHeight = editor.style.lineHeight;
  }
  function tidyFormula(val) {
    if (!val || val[0] !== '=') return val;
    var out = '', inStr = false;
    for (var i = 0; i < val.length; i++) { var ch = val[i]; if (ch === '"') inStr = !inStr; out += inStr ? ch : ch.toUpperCase(); }
    return out;
  }
  function commitEdit(move) {
    if (!editing) return false;
    var r = editing.r, c = editing.c, val = editing.input === fx ? fx.value : editor.value;
    editing = null; point = null; $('pointbox').classList.add('hidden');
    editor.classList.remove('editing'); editor.value = '';
    updateFormulaUI();
    if (val !== getRaw(r, c)) {
      var before = getRaw(r, c);
      beginChange();
      if (val && val[0] === '=') val = tidyFormula(val);
      setRawNoRender(r, c, val);
      endChange(false);
      // data validation: NESA keeps the value and shows its Information / Warning / Stop message
      var vr = normVr((styles[key(r, c)] || {}).vr);
      if (vr && vr.type !== 'any' && val !== '' && !isValidValue(r, c)) {
        validationAlert(vr, function () { setRawNoRender(r, c, before); undoStack.pop(); renderCells(); schedulePost(); }, function () { });
        if (move) moveActive(move[0], move[1], false); else renderSelection();
        return true;
      }
    }
    if (move) moveActive(move[0], move[1], false); else renderSelection();
    editor.focus({ preventScroll: true });
    return true;
  }
  function cancelEdit() {
    if (!editing) return;
    editing = null; point = null; $('pointbox').classList.add('hidden');
    editor.classList.remove('editing'); editor.value = '';
    updateFormulaUI();
    renderSelection(); editor.focus({ preventScroll: true });
  }
  function moveActive(dr, dc, extend) {
    if (extend) { var g = { r2: Math.max(0, Math.min(ROWS - 1, sel.r2 + dr)), c2: Math.max(0, Math.min(COLS - 1, sel.c2 + dc)) }; sel = { r1: act.r, c1: act.c, r2: g.r2, c2: g.c2 }; renderSelection(); scrollIntoViewCell(g.r2, g.c2); return; }
    var r = act.r, c = act.c, m = mergeAt(r, c);
    if (m) { if (dr > 0) r = m.r2; if (dc > 0) c = m.c2; }
    r = Math.max(0, Math.min(ROWS - 1, r + dr)); c = Math.max(0, Math.min(COLS - 1, c + dc));
    while (dr !== 0 && isRowHidden(r) && r > 0 && r < ROWS - 1) r += dr > 0 ? 1 : -1;
    while (dc !== 0 && hiddenCols[c] && c > 0 && c < COLS - 1) c += dc > 0 ? 1 : -1;
    setSelection(r, c, r, c); scrollIntoViewCell(r, c);
  }

  // formula point mode: click / arrow-key cells while typing a formula to insert references
  function activeInput() { return editing ? editing.input : null; }
  function canPoint() {
    var inp = activeInput(); if (!inp) return false;
    var t = inp.value; if (t[0] !== '=') return false;
    var pos = inp.selectionStart;
    if (point && pos === point.end) return true;
    return /[=(,+\-*\/^&<>:;]$/.test(t.slice(0, pos).replace(/\s+$/, ''));
  }
  function startPoint(cell) {
    var inp = activeInput(), pos = inp.selectionStart;
    if (!(point && pos === point.end)) point = { start: pos, end: pos };
    point.r1 = point.r2 = cell.r; point.c1 = point.c2 = cell.c;
    writePoint();
  }
  function extendPoint(r, c) { if (!point) return; point.r2 = r; point.c2 = c; writePoint(); }
  function writePoint() {
    var inp = activeInput(), g = norm({ r1: point.r1, c1: point.c1, r2: point.r2, c2: point.c2 });
    var ref = rangeStr(g), t = inp.value;
    inp.value = t.slice(0, point.start) + ref + t.slice(point.end);
    point.end = point.start + ref.length;
    inp.setSelectionRange(point.end, point.end);
    (inp === editor ? fx : editor).value = inp.value;
    if (inp === editor) autoSizeEditor();
    updateFormulaUI();   // the new reference is coloured on the grid, like NESA
  }

  editor.addEventListener('input', function () {
    if (!editing && editor.value) { var ch = editor.value; beginEdit(true, ch); return; }
    if (editing) { fx.value = editor.value; autoSizeEditor(); point = null; $('pointbox').classList.add('hidden'); updateFormulaUI(); }
  });
  fx.addEventListener('focus', function () {
    if (readOnly) { fx.blur(); return; }
    if (!editing) {
      if (isLocked(act.r, act.c)) { flash('This cell is locked.'); fx.blur(); return; }
      editing = { r: act.r, c: act.c, input: fx }; fx.value = getRaw(act.r, act.c);
      closePop('vmsg');
    } else if (editing.input !== fx) { editing.input = fx; editor.classList.remove('editing'); }
    updateFormulaUI();
  });
  fx.addEventListener('input', function () { if (editing) { editor.value = fx.value; point = null; $('pointbox').classList.add('hidden'); updateFormulaUI(); } });
  fx.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') { e.preventDefault(); commitEdit([1, 0]); }
    else if (e.key === 'Escape') { e.preventDefault(); cancelEdit(); }
    else if (e.key === 'Tab') { e.preventDefault(); commitEdit([0, 1]); }
  });
  namebox.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter') return; e.preventDefault();
    var txt = namebox.value.trim(), g = named[txt] ? parseRange(named[txt]) : parseRange(txt.toUpperCase()); if (!g) return;
    g.r2 = Math.min(g.r2, ROWS - 1); g.c2 = Math.min(g.c2, COLS - 1);
    setSelection(g.r1, g.c1, g.r2, g.c2); scrollIntoViewCell(g.r1, g.c1); focusKeys();
  });

  editor.addEventListener('keydown', function (e) {
    var ctrl = e.ctrlKey || e.metaKey;
    if (editing) {
      if (e.key === 'Enter' && !e.altKey) { e.preventDefault(); commitEdit(e.shiftKey ? [-1, 0] : [1, 0]); }
      else if (e.key === 'Enter' && e.altKey) { e.preventDefault(); var p = editor.selectionStart; editor.value = editor.value.slice(0, p) + '\n' + editor.value.slice(editor.selectionEnd); editor.setSelectionRange(p + 1, p + 1); fx.value = editor.value; autoSizeEditor(); }
      else if (e.key === 'Tab') { e.preventDefault(); commitEdit(e.shiftKey ? [0, -1] : [0, 1]); }
      else if (e.key === 'Escape') { e.preventDefault(); cancelEdit(); }
      else if (/^Arrow/.test(e.key) && canPoint()) {
        e.preventDefault();
        var d = { ArrowUp: [-1, 0], ArrowDown: [1, 0], ArrowLeft: [0, -1], ArrowRight: [0, 1] }[e.key];
        if (!point) startPoint({ r: Math.max(0, editing.r + d[0]), c: Math.max(0, editing.c + d[1]) });
        else if (e.shiftKey) extendPoint(Math.max(0, point.r2 + d[0]), Math.max(0, point.c2 + d[1]));
        else { point.r1 = point.r2 = Math.max(0, point.r1 + d[0]); point.c1 = point.c2 = Math.max(0, point.c1 + d[1]); writePoint(); }
      }
      return;
    }
    if (ctrl && (e.key === 'z' || e.key === 'Z')) { e.preventDefault(); e.shiftKey ? redo() : undo(); return; }
    if (ctrl && (e.key === 'y' || e.key === 'Y')) { e.preventDefault(); redo(); return; }
    if (ctrl && /^[biu]$/i.test(e.key)) { e.preventDefault(); toggleStyle({ b: 'b', i: 'i', u: 'u' }[e.key.toLowerCase()]); return; }
    if (ctrl && (e.key === 'a' || e.key === 'A')) { e.preventDefault(); setSelection(0, 0, ROWS - 1, COLS - 1, 0, 0); return; }
    if (ctrl && e.key === '`') { e.preventDefault(); toggleShowFormulas(); return; }
    if (ctrl && /^[cxv]$/i.test(e.key)) return;
    if (e.altKey && e.key === 'ArrowDown' && (styles[key(act.r, act.c)] || {}).dd) { e.preventDefault(); openDropdownList(act.r, act.c); return; }
    switch (e.key) {
      case 'ArrowUp': e.preventDefault(); moveActive(-1, 0, e.shiftKey); return;
      case 'ArrowDown': e.preventDefault(); moveActive(1, 0, e.shiftKey); return;
      case 'ArrowLeft': e.preventDefault(); moveActive(0, -1, e.shiftKey); return;
      case 'ArrowRight': e.preventDefault(); moveActive(0, 1, e.shiftKey); return;
      case 'Enter': e.preventDefault(); moveActive(e.shiftKey ? -1 : 1, 0); return;
      case 'Tab': e.preventDefault(); moveActive(0, e.shiftKey ? -1 : 1); return;
      case 'Delete': case 'Backspace': e.preventDefault(); clearRange('values'); return;
      case 'F2': e.preventDefault(); beginEdit(false); return;
      case 'Home': e.preventDefault(); setSelection(act.r, 0, act.r, 0); scrollIntoViewCell(act.r, 0); return;
      case 'PageDown': e.preventDefault(); moveActive(15, 0); return;
      case 'PageUp': e.preventDefault(); moveActive(-15, 0); return;
    }
    if (readOnly) { e.preventDefault(); return; }
    if (e.key.length === 1 && !ctrl && !e.altKey && isLocked(act.r, act.c)) { e.preventDefault(); flash('This cell is locked.'); }
  });

  // ------------------------------------------------------------------ clipboard
  function selectionTSV() {
    var g = norm(sel), lines = [];
    for (var r = g.r1; r <= g.r2; r++) { var row = []; for (var c = g.c1; c <= g.c2; c++) row.push(displayOf(r, c).text); lines.push(row.join('\t')); }
    return lines.join('\n');
  }
  function copySelection(cut) {
    var g = norm(sel), cells = [];
    for (var r = g.r1; r <= g.r2; r++) {
      var row = [];
      for (var c = g.c1; c <= g.c2; c++) {
        var v = cellValue(r, c); v = isError(v) ? displayOf(r, c).text : v == null ? '' : typeof v === 'boolean' ? (v ? 'TRUE' : 'FALSE') : v;
        row.push({ raw: getRaw(r, c), v: v, st: styles[key(r, c)] ? Object.assign({}, styles[key(r, c)]) : null });
      }
      cells.push(row);
    }
    clip = { g: g, cells: cells, text: selectionTSV(), cut: cut };
    return clip.text;
  }
  editor.addEventListener('copy', function (e) { if (editing) return; e.preventDefault(); e.clipboardData.setData('text/plain', copySelection(false)); });
  editor.addEventListener('cut', function (e) { if (editing || readOnly) return; e.preventDefault(); e.clipboardData.setData('text/plain', copySelection(true)); });
  editor.addEventListener('paste', function (e) {
    if (editing || readOnly) return;
    e.preventDefault();
    var text = e.clipboardData.getData('text/plain');
    if (clip && text.replace(/\r/g, '') === clip.text) pasteInternal(clip); else pasteText(text);
  });
  function pasteInternal(cb) {
    beginChange();
    var dr = act.r - cb.g.r1, dc = act.c - cb.g.c1;
    hf.batch(function () {
      if (cb.cut) for (var r = cb.g.r1; r <= cb.g.r2; r++) for (var c = cb.g.c1; c <= cb.g.c2; c++) { setRawNoRender(r, c, ''); delete styles[key(r, c)]; }
      cb.cells.forEach(function (row, i) { row.forEach(function (cell, j) {
        var r = act.r + i, c = act.c + j; if (r >= ROWS || c >= COLS || isLocked(r, c)) return;
        setRawNoRender(r, c, cb.cut ? cell.raw : shiftFormula(cell.raw, dr, dc));
        if (cell.st) styles[key(r, c)] = Object.assign({}, cell.st); else delete styles[key(r, c)];
      }); });
    });
    if (cb.cut) clip = null;
    setSelection(act.r, act.c, act.r + cb.cells.length - 1, act.c + cb.cells[0].length - 1, act.r, act.c);
    endChange(false);
  }
  function pasteText(text) {
    var rows = text.replace(/\r/g, '').replace(/\n$/, '').split('\n').map(function (l) { return l.split('\t'); });
    beginChange();
    hf.batch(function () { rows.forEach(function (row, i) { row.forEach(function (v, j) { var r = act.r + i, c = act.c + j; if (r < ROWS && c < COLS && !isLocked(r, c)) setRawNoRender(r, c, v); }); }); });
    setSelection(act.r, act.c, act.r + rows.length - 1, act.c + rows[0].length - 1, act.r, act.c);
    endChange(false);
  }

  // ------------------------------------------------------------------ range operations
  function forSel(fn) { var g = norm(sel); for (var r = g.r1; r <= Math.min(g.r2, ROWS - 1); r++) for (var c = g.c1; c <= Math.min(g.c2, COLS - 1); c++) fn(r, c); }
  function applyStyle(patch) {
    if (readOnly) return;
    commitEdit(); beginChange();
    forSel(function (r, c) { var s = styleOf(r, c); Object.keys(patch).forEach(function (k) { if (patch[k] === null || patch[k] === undefined) delete s[k]; else s[k] = patch[k]; }); });
    endChange(false);
  }
  function toggleStyle(prop) { var st = styles[key(act.r, act.c)] || {}; var p = {}; p[prop] = st[prop] ? null : true; applyStyle(p); }
  function changeIndent(d) { var st = styles[key(act.r, act.c)] || {}; var n = Math.max(0, Math.min(8, (st.indent || 0) + d)); applyStyle({ indent: n || null }); }
  function clearRange(what) {
    if (readOnly) return; commitEdit(); beginChange();
    var g = norm(sel);
    if (what === 'conds' || what === 'all') conds = conds.filter(function (rule) { var rg = parseRange(rule.range); return !rg || !overlaps(rg, g); });
    if (what === 'filters' || what === 'all') { var fcs = filterCells(); Object.keys(fcs).forEach(function (k) { var p = k.split(','); if (inRange(g, +p[0], +p[1])) delete fcs[k]; }); if (!Object.keys(fcs).length) filter = null; }
    hf.batch(function () {
      forSel(function (r, c) {
        var k = key(r, c);
        if ((what === 'values' || what === 'all') && !isLocked(r, c)) setRawNoRender(r, c, '');
        if (what === 'styles' || what === 'all') {
          // "Styles" leaves locks, dropdowns and validation rules alone (they have their own Clear items)
          var old = styles[k], keep = {};
          if (old && what !== 'all') ['lock', 'dd', 'vr'].forEach(function (p) { if (old[p]) keep[p] = old[p]; });
          delete styles[k]; if (Object.keys(keep).length) styles[k] = keep;
        }
        if (what === 'dropdowns' && styles[k]) delete styles[k].dd;
        if (what === 'comments' || what === 'all') delete comments[k];
      });
    });
    endChange(false);
  }
  function setBorders(kind, color, line) {
    if (readOnly) return; commitEdit(); beginChange();
    var g = norm(sel);
    forSel(function (r, c) {
      var s = styleOf(r, c);
      if (kind === 'no' || kind === 'none') { delete s.bt; delete s.bb; delete s.bl; delete s.br; delete s.bc; delete s.bs; return; }
      var touched = false;
      if (kind === 'all') { s.bt = s.bb = s.bl = s.br = true; touched = true; }
      if ((kind === 'outer' || kind === 'top' || kind === 'top-bottom') && r === g.r1) { s.bt = true; touched = true; }
      if ((kind === 'outer' || kind === 'bottom' || kind === 'top-bottom') && r === g.r2) { s.bb = true; touched = true; }
      if ((kind === 'outer' || kind === 'left') && c === g.c1) { s.bl = true; touched = true; }
      if ((kind === 'outer' || kind === 'right') && c === g.c2) { s.br = true; touched = true; }
      if (touched) {
        if (color && color !== '#000000') s.bc = color; else delete s.bc;
        if (line && line !== 'thin') s.bs = line; else delete s.bs;
      }
    });
    endChange(false);
  }
  // Webix / Excel line types -> CSS
  function borderCss(st) {
    var t = st.bs || 'thin', col = st.bc || '#000';
    var css = { hair: '1px dotted', dotted: '1px dotted', dashDotDot: '1px dashed', dashDot: '1px dashed', dashed: '1px dashed', thin: '1px solid', mediumDashDotDot: '2px dashed', slantDashDot: '2px dashed', mediumDashDot: '2px dashed', mediumDashed: '2px dashed', medium: '2px solid', thick: '3px solid', double: '3px double' }[t] || '1px solid';
    return css + ' ' + col;
  }
  function toggleMerge() {
    if (readOnly) return; commitEdit();
    var g = norm(sel), existing = mergeAt(act.r, act.c);
    if (existing && g.r1 === existing.r1 && g.c1 === existing.c1 && g.r2 === existing.r2 && g.c2 === existing.c2) {
      beginChange(); merges = merges.filter(function (m) { var mg = parseRange(m); return !(mg.r1 === existing.r1 && mg.c1 === existing.c1); });
    } else {
      if (g.r1 === g.r2 && g.c1 === g.c2) { flash('Select two or more cells to merge.'); return; }
      beginChange();
      merges = merges.filter(function (m) { return !overlaps(parseRange(m), g); });
      merges.push(rangeStr(g)); act = { r: g.r1, c: g.c1 };
    }
    endChange(true);
  }
  function changeDecimals(delta) {
    var st = styles[key(act.r, act.c)] || {}, cur = st.dec;
    if (cur == null) { var m = /\.(\d+)/.exec(displayOf(act.r, act.c).text); cur = m ? m[1].length : 0; }
    var fmt = st.fmt || 'common';
    applyStyle({ dec: Math.max(0, Math.min(10, cur + delta)), fmt: fmt === 'common' ? 'number' : fmt });
  }
  function toggleLock() { var st = styles[key(act.r, act.c)] || {}; applyStyle({ lock: st.lock ? null : true }); }
  function toggleShowFormulas() { showFormulas = !showFormulas; renderCells(); schedulePost(); }

  // ------------------------------------------------------------------ cut / copy / paste from the menu, special paste
  function menuCopy(cut) {
    if (cut && readOnly) return;
    var text = copySelection(cut);
    try { if (navigator.clipboard) navigator.clipboard.writeText(text).catch(function () { }); } catch (e) { }
  }
  function menuPaste() {
    if (readOnly) return; commitEdit();
    if (clip) { pasteInternal(clip); return; }
    if (navigator.clipboard && navigator.clipboard.readText) {
      navigator.clipboard.readText().then(function (t) { if (t) pasteText(t); }).catch(function () { flash('Use Ctrl+V to paste from outside the spreadsheet.'); });
    } else flash('Use Ctrl+V to paste from outside the spreadsheet.');
  }
  function specialPaste(kind) {
    if (readOnly) return; commitEdit();
    if (!clip) { flash('Copy some cells first (Ctrl+C or right-click › Copy).'); return; }
    var cb = clip, H = cb.cells.length, W = cb.cells[0].length, tr = kind === 'transpose';
    beginChange();
    hf.batch(function () {
      cb.cells.forEach(function (row, i) { row.forEach(function (cell, j) {
        var r = act.r + (tr ? j : i), c = act.c + (tr ? i : j);
        if (r >= ROWS || c >= COLS || isLocked(r, c)) return;
        var k = key(r, c), sr = cb.g.r1 + i, sc = cb.g.c1 + j;
        if (kind === 'values') setRawNoRender(r, c, cell.v === '' ? '' : String(cell.v));
        else if (kind === 'formulas') setRawNoRender(r, c, shiftFormula(cell.raw, r - sr, c - sc));
        else if (kind === 'styles') { var keep = styles[k] && styles[k].vr; if (cell.st) { styles[k] = Object.assign({}, cell.st); delete styles[k].vr; } else delete styles[k]; if (keep) styleOf(r, c).vr = keep; }
        else if (kind === 'validation') { if (cell.st && cell.st.vr) styleOf(r, c).vr = JSON.parse(JSON.stringify(cell.st.vr)); else if (styles[k]) delete styles[k].vr; }
        else if (tr) { setRawNoRender(r, c, shiftFormula(cell.raw, r - sr, c - sc)); if (cell.st) styles[k] = Object.assign({}, cell.st); else delete styles[k]; }
      }); });
    });
    if (kind === 'conds') {
      var dr = act.r - cb.g.r1, dc = act.c - cb.g.c1;
      conds.slice().forEach(function (rule) {
        var rg = parseRange(rule.range); if (!rg || !overlaps(rg, cb.g)) return;
        var part = { r1: Math.max(rg.r1, cb.g.r1) + dr, c1: Math.max(rg.c1, cb.g.c1) + dc, r2: Math.min(rg.r2, cb.g.r2) + dr, c2: Math.min(rg.c2, cb.g.c2) + dc };
        conds.push(Object.assign({}, rule, { range: rangeStr(part) }));
      });
    }
    setSelection(act.r, act.c, act.r + (tr ? W : H) - 1, act.c + (tr ? H : W) - 1, act.r, act.c);
    endChange(false);
  }

  // ------------------------------------------------------------------ hide / show, resize, group rows and columns
  function isRowHidden(r) { return !!hiddenRows[r] || rowHiddenByFilter(r); }
  function setHidden(isRow, hide) {
    if (readOnly) return; commitEdit();
    var g = norm(sel), map = isRow ? hiddenRows : hiddenCols, a = isRow ? g.r1 : g.c1, b = isRow ? g.r2 : g.c2, i;
    beginChange();
    if (hide) {
      var total = isRow ? ROWS : COLS, shown = 0; for (i = 0; i < total; i++) if (!map[i] && (i < a || i > b)) shown++;
      if (!shown) { undoStack.pop(); flash('You can’t hide every ' + (isRow ? 'row' : 'column') + '.'); return; }
      for (i = a; i <= b; i++) map[i] = true;
    } else {
      var any = false; for (i = a; i <= b; i++) if (map[i]) { delete map[i]; any = true; }
      if (!any) { for (i = a - 1; i >= 0 && map[i]; i--) delete map[i]; for (i = b + 1; map[i]; i++) delete map[i]; }
    }
    endChange(true);
    if (hide) { var t = b + 1; var lim = isRow ? ROWS : COLS; while (t < lim && map[t]) t++; if (t >= lim) { t = a - 1; while (t > 0 && map[t]) t--; } if (isRow) setSelection(t, 0, t, COLS - 1, t, 0); else setSelection(0, t, ROWS - 1, t, 0, t); }
  }
  function groupSel(isRow, on) {
    if (readOnly) return; commitEdit();
    var g = norm(sel), a = isRow ? g.r1 : g.c1, b = isRow ? g.r2 : g.c2, gk = isRow ? 'r' : 'c', map = isRow ? hiddenRows : hiddenCols;
    var hitList = groups[gk].filter(function (x) { return !(x.b < a || x.a > b); });
    if (!on && !hitList.length) { flash('There is no group here to ungroup.'); return; }
    beginChange();
    hitList.forEach(function (x) { if (x.collapsed) for (var i = x.a; i <= x.b; i++) delete map[i]; });
    groups[gk] = groups[gk].filter(function (x) { return hitList.indexOf(x) < 0; });
    if (on) groups[gk].push({ a: a, b: b, collapsed: false });
    endChange(true);
  }
  function toggleGroup(gk, gi) {
    var x = groups[gk][gi]; if (!x) return;
    commitEdit(); beginChange();
    x.collapsed = !x.collapsed;
    var map = gk === 'r' ? hiddenRows : hiddenCols;
    for (var i = x.a; i <= x.b; i++) { if (x.collapsed) map[i] = true; else delete map[i]; }
    endChange(true);
  }
  function insertAtSel(isRow) { var g = norm(sel); if (isRow) insertRows(g.r1, g.r2 - g.r1 + 1); else insertCols(g.c1, g.c2 - g.c1 + 1); }
  function deleteAtSel(isRow) { var g = norm(sel); if (isRow) deleteRows(g.r1, g.r2 - g.r1 + 1); else deleteCols(g.c1, g.c2 - g.c1 + 1); }

  // ------------------------------------------------------------------ the right-click menus (same items as NESA)
  function cellMenuEntries() {
    return [
      ['Cut', null, function () { menuCopy(true); }], ['Copy', null, function () { menuCopy(false); }], ['Paste', null, menuPaste],
      ['Special paste', null, null, [['Values', null, function () { specialPaste('values'); }], ['Formulas', null, function () { specialPaste('formulas'); }], ['Styles', null, function () { specialPaste('styles'); }],
        ['Conditional formats', null, function () { specialPaste('conds'); }], ['Validation', null, function () { specialPaste('validation'); }], null, ['Paste transposed', null, function () { specialPaste('transpose'); }]]],
    ].concat((function () {
      // NESA only offers "Sort Range" when more than one cell is selected
      var g = norm(sel); if (g.r1 === g.r2 && g.c1 === g.c2) return [];
      return [['Sort Range', null, null, [['Ascending (A to Z)', null, function () { sortSelection(false); }], ['Descending (Z to A)', null, function () { sortSelection(true); }], ['Custom Sort', null, customSortDialog]]]];
    })(), [
      ['Create/remove filters', null, toggleFilter], ['Named ranges', null, namedRangesDialog], ['Conditional format', null, condDialog], ['Lock/unlock cell', null, toggleLock],
      ['Add link', null, linkDialog], ['Add dropdown', null, dropdownDialog],
      ['Clear', null, null, clearEntries()],
      ['Validation', null, null, [['Add data validation', null, validationDialog], ['Remove data validation', null, removeValidation], ['Highlight invalid data', null, function () { setHighlightInvalid(true); }], ['Remove highlighting of invalid data', null, function () { setHighlightInvalid(false); }]]],
      ['Find and Replace', null, findDialog],
    ]);
  }
  function headerMenuEntries(isRow) {
    var w = isRow ? 'row' : 'column';
    return [
      ['Insert ' + w, null, function () { insertAtSel(isRow); }], ['Delete ' + w, null, function () { deleteAtSel(isRow); }],
      ['Show ' + w, null, function () { setHidden(isRow, false); }], ['Hide ' + w, null, function () { setHidden(isRow, true); }], ['Resize ' + w, null, function () { resizeDialog(isRow); }], null,
      ['Group ' + w, null, function () { groupSel(isRow, true); }], ['Ungroup ' + w, null, function () { groupSel(isRow, false); }], null,
      [(isRow ? 'Row' : 'Column') + ' format', null, null, FORMATS.map(function (f) { return [f[1], null, function () { if (f[0] === 'custom') customFormatDialog(); else applyStyle({ fmt: f[0] === 'common' ? null : f[0], dec: null, pattern: null }); }]; })],
    ];
  }

  // insert / delete rows & columns (HyperFormula adjusts formulas)
  function shiftMaps(isRow, at, n) {
    function sh(k) { var p = k.split(',').map(Number); var i = isRow ? 0 : 1; if (p[i] >= at) { if (n < 0 && p[i] < at - n) return null; p[i] += n; } return p.join(','); }
    [raws, styles, comments].forEach(function (map) {
      var copy = {}; Object.keys(map).forEach(function (k) { var nk = sh(k); if (nk) copy[nk] = map[k]; });
      Object.keys(map).forEach(function (k) { delete map[k]; }); Object.assign(map, copy);
    });
    var sizes = isRow ? rowH : colW, ns = {};
    Object.keys(sizes).forEach(function (k) { var i = +k; if (i >= at) { if (n < 0 && i < at - n) return; i += n; } ns[i] = sizes[k]; });
    Object.keys(sizes).forEach(function (k) { delete sizes[k]; }); Object.assign(sizes, ns);
    function shiftG(g) { if (isRow) { if (g.r1 >= at) g.r1 = Math.max(at, g.r1 + n); if (g.r2 >= at) g.r2 = Math.max(at - 1, g.r2 + n); } else { if (g.c1 >= at) g.c1 = Math.max(at, g.c1 + n); if (g.c2 >= at) g.c2 = Math.max(at - 1, g.c2 + n); } return g.r2 >= g.r1 && g.c2 >= g.c1 ? g : null; }
    merges = merges.map(function (m) { var g = shiftG(parseRange(m)); return g && (g.r1 !== g.r2 || g.c1 !== g.c2) ? rangeStr(g) : null; }).filter(Boolean);
    conds = conds.filter(function (rule) { var g = shiftG(parseRange(rule.range)); if (g) rule.range = rangeStr(g); return !!g; });
    charts.forEach(function (ch) { var g = shiftG(parseRange(ch.range)); if (g) ch.range = rangeStr(g); });
    Object.keys(named).forEach(function (nm) { var g = shiftG(parseRange(named[nm])); if (g) named[nm] = rangeStr(g); else delete named[nm]; });
    if (filter) { var fg = shiftG(parseRange(filter.range)); filter = fg ? { range: rangeStr(fg), crit: {} } : null; }
    // hidden and grouped rows / columns move with the insert or delete
    function shiftIdx(i) { if (i >= at) { if (n < 0 && i < at - n) return null; i += n; } return i; }
    var hm = isRow ? hiddenRows : hiddenCols, nh = {};
    Object.keys(hm).forEach(function (k) { var i = shiftIdx(+k); if (i != null) nh[i] = true; });
    if (isRow) hiddenRows = nh; else hiddenCols = nh;
    var gk = isRow ? 'r' : 'c';
    groups[gk] = groups[gk].map(function (x) {
      var a = shiftIdx(x.a), b = shiftIdx(x.b);
      if (a == null && b == null) return null;
      if (a == null) a = at; if (b == null) b = at - 1;
      return b >= a ? { a: a, b: b, collapsed: x.collapsed } : null;
    }).filter(Boolean);
  }
  function insertRows(at, n) { if (readOnly) return; commitEdit(); beginChange(); try { hf.addRows(SHEET, [at, n]); } catch (e) { } shiftMaps(true, at, n); ROWS += n; syncRawsFromEngine(); endChange(true); }
  function insertCols(at, n) { if (readOnly) return; commitEdit(); beginChange(); try { hf.addColumns(SHEET, [at, n]); } catch (e) { } shiftMaps(false, at, n); COLS += n; syncRawsFromEngine(); endChange(true); }
  function deleteRows(at, n) { if (readOnly) return; commitEdit(); beginChange(); try { hf.removeRows(SHEET, [at, n]); } catch (e) { } shiftMaps(true, at, -n); syncRawsFromEngine(); endChange(true); }
  function deleteCols(at, n) { if (readOnly) return; commitEdit(); beginChange(); try { hf.removeColumns(SHEET, [at, n]); } catch (e) { } shiftMaps(false, at, -n); syncRawsFromEngine(); endChange(true); }
  function syncRawsFromEngine() { Object.keys(raws).forEach(function (k) { var p = k.split(','); try { if (hf.doesCellHaveFormula(addr(+p[0], +p[1]))) raws[k] = hf.getCellFormula(addr(+p[0], +p[1])); } catch (e) { } }); syncNamed(); }

  // ------------------------------------------------------------------ menus / palettes
  // the same 8 x 10 colour board as the NESA (Webix) colour picker
  var COLOR_BOARD = [
    ['#000000', '#434343', '#666666', '#999999', '#b7b7b7', '#cccccc', '#d9d9d9', '#efefef', '#f3f3f3', '#ffffff'],
    ['#980000', '#ff0000', '#ff9900', '#ffff00', '#00ff00', '#00ffff', '#4a86e8', '#0000ff', '#9900ff', '#ff00ff'],
    ['#e6b8af', '#f4cccc', '#fce5cd', '#fff2cc', '#d9ead3', '#d0e0e3', '#c9daf8', '#cfe2f3', '#d9d2e9', '#ead1dc'],
    ['#dd7e6b', '#ea9999', '#f9cb9c', '#ffe599', '#b6d7a8', '#a2c4c9', '#a4c2f4', '#9fc5e8', '#b4a7d6', '#d5a6bd'],
    ['#cc4125', '#e06666', '#f6b26b', '#ffd966', '#93c47d', '#76a5af', '#6d9eeb', '#6fa8dc', '#8e7cc3', '#c27ba0'],
    ['#a61c00', '#cc0000', '#e69138', '#f1c232', '#6aa84f', '#45818e', '#3c78d8', '#3d85c6', '#674ea7', '#a64d79'],
    ['#85200c', '#990000', '#b45f06', '#bf9000', '#38761d', '#134f5c', '#1155cc', '#0b5394', '#351c75', '#741b47'],
    ['#5b0f00', '#660000', '#783f04', '#7f6000', '#274e13', '#0c343d', '#1c4587', '#073763', '#20124d', '#4c1130']];
  // Menus: entries are [label, (unused), onClick, submenuEntries] or null for a separator. No icons, like Webix.
  var menuEl = null, subEl = null;
  function closeMenu() { if (subEl) { subEl.remove(); subEl = null; } if (menuEl) { menuEl.remove(); menuEl = null; } }
  document.addEventListener('mousedown', function (e) { if (menuEl && !menuEl.contains(e.target) && !(subEl && subEl.contains(e.target))) closeMenu(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && menuEl) { closeMenu(); editor.focus({ preventScroll: true }); } }, true);
  function placeAt(elm, x, y) { var w = elm.offsetWidth, h = elm.offsetHeight; elm.style.left = Math.max(2, Math.min(x, window.innerWidth - w - 4)) + 'px'; elm.style.top = Math.max(2, Math.min(y, window.innerHeight - h - 4)) + 'px'; }
  function positionMenu(x, y) { placeAt(menuEl, x, y); }
  function buildMenu(entries, isSub) {
    var m = document.createElement('div'); m.className = 'menu' + (isSub ? ' submenu' : '');
    entries.forEach(function (en) {
      if (!en) { var s = document.createElement('div'); s.className = 'sep'; m.appendChild(s); return; }
      var d = document.createElement('div'); d.className = 'mi' + (en[3] ? ' has-sub' : '') + (en[4] ? ' disabled' : '');
      d.innerHTML = '<span>' + en[0] + '</span>' + (en[3] ? '<span class="mi-arrow">›</span>' : '');
      if (en[3]) {
        d.addEventListener('mouseenter', function () { openSub(d, en[3]); });
        d.addEventListener('mousedown', function (e) { e.preventDefault(); e.stopPropagation(); openSub(d, en[3]); });
      } else {
        if (!isSub) d.addEventListener('mouseenter', function () { if (subEl) { subEl.remove(); subEl = null; } Array.prototype.forEach.call(m.querySelectorAll('.mi.open'), function (x) { x.classList.remove('open'); }); });
        d.addEventListener('mousedown', function (e) { e.preventDefault(); e.stopPropagation(); if (en[4]) return; closeMenu(); en[2](); });
      }
      m.appendChild(d);
    });
    return m;
  }
  function openSub(item, entries) {
    if (subEl && subEl._for === item) return;
    if (subEl) subEl.remove();
    Array.prototype.forEach.call(menuEl.querySelectorAll('.mi.open'), function (x) { x.classList.remove('open'); });
    item.classList.add('open');
    subEl = buildMenu(entries, true); subEl._for = item; document.body.appendChild(subEl);
    var r = item.getBoundingClientRect(), w = subEl.offsetWidth;
    var x = r.right - 2; if (x + w > window.innerWidth - 4) x = r.left - w + 2;
    placeAt(subEl, x, r.top - 5);
  }
  function openMenu(x, y, entries) {
    closeMenu();
    menuEl = buildMenu(entries, false);
    document.body.appendChild(menuEl); positionMenu(x, y);
  }
  // a dropdown panel under a toolbar button
  function openPopup(btn, content, cls) {
    closeMenu();
    menuEl = document.createElement('div'); menuEl.className = 'menu popup ' + (cls || '');
    menuEl.appendChild(content); document.body.appendChild(menuEl);
    var b = btn.getBoundingClientRect(); positionMenu(b.left, b.bottom + 3);
    btn.classList.add('open'); menuEl._btn = btn;
    var obs = new MutationObserver(function () { if (!menuEl || !document.body.contains(menuEl)) { btn.classList.remove('open'); obs.disconnect(); } });
    obs.observe(document.body, { childList: true });
  }
  function colorBoard(current, onPick) {
    var board = document.createElement('div'); board.className = 'color-board';
    COLOR_BOARD.forEach(function (row) { row.forEach(function (c) {
      var s = document.createElement('span'); s.style.background = c; s.setAttribute('data-c', c);
      if (current && current.toLowerCase() === c) s.classList.add('on');
      s.addEventListener('mousedown', function (e) { e.preventDefault(); e.stopPropagation(); onPick(c); });
      board.appendChild(s);
    }); });
    return board;
  }
  function openPalette(btn, onPick, current) {
    openPopup(btn, colorBoard(current, function (c) { closeMenu(); onPick(c); }), 'color-pop');
  }
  // ------------------------------------------------------------------ icons (drawn to look like the NESA / Webix SpreadSheet icon set)
  var ICON_PATHS = {
    undo: '<path d="M6.6 7.4A7.2 7.2 0 1 1 4.8 13"/><path d="M3.6 3.9 9.1 4.4 5.4 9.1Z" fill="currentColor" stroke="none"/>',
    redo: '<g transform="matrix(-1 0 0 1 24 0)"><path d="M6.6 7.4A7.2 7.2 0 1 1 4.8 13"/><path d="M3.6 3.9 9.1 4.4 5.4 9.1Z" fill="currentColor" stroke="none"/></g>',
    background: '<path d="M10.2 3.2 18.4 11.4 11.6 18.2 3.4 10Z" fill="currentColor" stroke="none"/><path d="M6.9 6.6 15 14.7" stroke="#fff" stroke-width="1.4"/><path d="M8.2 2.2 11 5"/><path d="M20 13.4s-2.3 2.6-2.3 4a2.3 2.3 0 0 0 4.6 0c0-1.4-2.3-4-2.3-4Z" fill="currentColor" stroke="none"/>',
    color: '<path d="M6 19.5 12 4l6 15.5M8.3 14h7.4"/>',
    'borders-all': '<rect x="3.5" y="3.5" width="17" height="17"/><path d="M12 3.5v17M3.5 12h17"/>',
    left: '<path d="M3.5 5h17M3.5 9h11M3.5 13h17M3.5 17h11M3.5 21h17"/>',
    center: '<path d="M3.5 5h17M6.5 9h11M3.5 13h17M6.5 17h11M3.5 21h17"/>',
    right: '<path d="M3.5 5h17M9.5 9h11M3.5 13h17M9.5 17h11M3.5 21h17"/>',
    span: '<rect x="3.5" y="3.5" width="17" height="17"/><path d="M3.5 8.5h17M12 3.5v5M6.5 14.5h11"/><path d="M8.8 12.2 6.4 14.5l2.4 2.3M15.2 12.2l2.4 2.3-2.4 2.3"/>',
    'increase-indent': '<path d="M3.5 4h17M10.5 8h10M10.5 12h10M10.5 16h10M3.5 20h17"/><path d="M3.5 9.2 7.5 12l-4 2.8Z" fill="currentColor" stroke="none"/>',
    'decrease-indent': '<path d="M3.5 4h17M10.5 8h10M10.5 12h10M10.5 16h10M3.5 20h17"/><path d="M7.5 9.2 3.5 12l4 2.8Z" fill="currentColor" stroke="none"/>',
    top: '<path d="M4 3.5h16M12 21V7"/><path d="M8.8 9.8 12 6.2l3.2 3.6Z" fill="currentColor" stroke="none"/>',
    middle: '<path d="M3.5 12h17M12 3v5M12 16v5"/><path d="M9.5 6.6 12 9.6l2.5-3ZM9.5 17.4 12 14.4l2.5 3Z" fill="currentColor" stroke="none"/>',
    bottom: '<path d="M4 20.5h16M12 3v14"/><path d="M8.8 14.2 12 17.8l3.2-3.6Z" fill="currentColor" stroke="none"/>',
    wrap: '<path d="M3.5 6h17M3.5 12h13.2a3 3 0 0 1 0 6H10M3.5 18h3"/><path d="M11.2 15.6 8.2 18l3 2.4Z" fill="currentColor" stroke="none"/>',
    'increase-decimals': '<circle cx="2.8" cy="13.6" r="1.3" fill="currentColor" stroke="none"/><ellipse cx="8.6" cy="9.4" rx="2.6" ry="4.6"/><ellipse cx="16" cy="9.4" rx="2.6" ry="4.6"/><path d="M8.5 19.3h10"/><path d="M17.6 16.8l3.4 2.5-3.4 2.5Z" fill="currentColor" stroke="none"/>',
    'decrease-decimals': '<circle cx="4.2" cy="13.6" r="1.3" fill="currentColor" stroke="none"/><ellipse cx="11" cy="9.4" rx="2.6" ry="4.6"/><path d="M7.5 19.3h11"/><path d="M8.4 16.8 5 19.3l3.4 2.5Z" fill="currentColor" stroke="none"/>',
    'sort-asc': '<path d="M6 3.5v15"/><path d="M3.3 16.6 6 20.5l2.7-3.9Z" fill="currentColor" stroke="none"/><path d="M11 5h4M11 10h6.5M11 15h9.5M11 20h9.5"/>',
    'sort-desc': '<path d="M6 20.5v-15"/><path d="M3.3 7.4 6 3.5l2.7 3.9Z" fill="currentColor" stroke="none"/><path d="M11 5h9.5M11 10h9.5M11 15h6.5M11 20h4"/>',
    'create-filter': '<path d="M3.5 4h17l-6.6 8v8.3l-3.8-2v-6.3Z"/>',
    'conditional-format': '<rect x="3.5" y="3.5" width="17" height="17"/><path d="M12 3.5v17M3.5 12h17M5.8 6l3.5 2-3.5 2M14.2 7h4.2M14.2 9h4.2M5.8 15.5h4M5.8 17.5h4M9 14l-2.2 5M18 14.2l-3.4 1.9 3.4 1.9"/>',
    'clear-styles': '<path d="M3 15.6 13.6 5l7 7L13 19.6H7Z"/><path d="M13.6 5l7 7-5.3 5.3-7-7Z" fill="currentColor" stroke="none"/>',
    'add-range': '<path d="M14 4.5h7M3 12.5h18"/><path d="M14 6.5h7l-3.5 3.7ZM3 18.5h7l-3.5-3.7Z" fill="currentColor" stroke="none"/>',
    'lock-cell': '<path d="M7.5 10.5V7.8a4.5 4.5 0 0 1 9 0v2.7"/><rect x="5" y="10.5" width="14" height="10" rx="1"/><circle cx="12" cy="15.5" r="1.2" fill="currentColor" stroke="none"/>',
    'add-dropdown': '<rect x="3.5" y="3.5" width="17" height="17"/><path d="M3.5 8h17M6.5 12h6M6.5 15.5h4"/><path d="M15.2 5.2h3l-1.5 1.6Z" fill="currentColor" stroke="none"/><path d="M12.5 19.2l.6-2.6 4.6-4.6 2 2-4.6 4.6Z"/>',
    'show-formulas': '<text x="0.3" y="10.8" font-size="11.5" font-style="italic" font-family="Georgia,serif" fill="currentColor" stroke="none">15</text><path d="M19.5 2 7.5 22"/><text x="11.4" y="21" font-size="13" font-style="italic" font-family="Georgia,serif" fill="currentColor" stroke="none">f</text><text x="16.4" y="23" font-size="8" font-style="italic" font-family="Georgia,serif" fill="currentColor" stroke="none">x</text>',
    'add-comment': '<path d="M3.5 4h17v13H10.5l-4 3.8V17h-3Z"/><path d="M12 7.2v6.6M8.7 10.5h6.6"/>',
    'add-sparkline': '<path d="M3 16.5l5.3-5.2 4 3.6L21 7"/>',
    'menu-down': '<path d="M7 10l5 5 5-5Z" fill="currentColor" stroke="none"/>',
    pen: '<path d="M4.5 19.5l1-4L15.8 5.2l3 3L8.5 18.5Z"/><path d="M13.6 7.4l3 3"/>',
  };
  // border icons: a dotted cell grid with the chosen edges drawn solid
  (function () {
    var sides = { left: 'M3.5 3.5v17', top: 'M3.5 3.5h17', right: 'M20.5 3.5v17', bottom: 'M3.5 20.5h17' };
    var kinds = { no: [], left: ['left'], top: ['top'], right: ['right'], bottom: ['bottom'], outer: ['left', 'top', 'right', 'bottom'], 'top-bottom': ['top', 'bottom'] };
    Object.keys(kinds).forEach(function (k) {
      ICON_PATHS['borders-' + k] = '<rect x="3.5" y="3.5" width="17" height="17" stroke-dasharray="1.2 1.6" stroke-width="1.1"/><path d="M12 3.5v17M3.5 12h17" stroke-dasharray="1.2 1.6" stroke-width="1.1"/>' +
        (kinds[k].length ? '<path d="' + kinds[k].map(function (s) { return sides[s]; }).join('') + '" stroke-width="1.8"/>' : '');
    });
  })();
  function icon(name, cls) { return '<svg class="ssi ' + (cls || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" aria-hidden="true">' + (ICON_PATHS[name] || '') + '</svg>'; }
  function caret() { return icon('menu-down', 'caret'); }

  // ------------------------------------------------------------------ toolbar (same groups and order as the NESA Webix toolbar)
  // toolbar buttons show Webix-style tooltips (same wording as NESA) instead of the browser's title box
  var tipEl = null, tipTimer = null;
  function showTip(el) {
    var text = el.getAttribute('data-tip'); if (!text) return;
    if (!tipEl) { tipEl = document.createElement('div'); tipEl.className = 'tb-tip'; document.body.appendChild(tipEl); }
    tipEl.textContent = text; tipEl.style.display = 'block';
    var r = el.getBoundingClientRect();
    placeAt(tipEl, r.left + r.width / 2 - tipEl.offsetWidth / 2, r.bottom + 6);
  }
  function hideTip() { clearTimeout(tipTimer); if (tipEl) tipEl.style.display = 'none'; }
  function withTip(el, text) {
    el.setAttribute('data-tip', text); el.setAttribute('aria-label', text);
    el.addEventListener('mouseenter', function () { clearTimeout(tipTimer); tipTimer = setTimeout(function () { if (!el.classList.contains('open')) showTip(el); }, 450); });
    el.addEventListener('mouseleave', hideTip); el.addEventListener('mousedown', hideTip);
    return el;
  }
  function tbtn(html, title, onClick, cls) {
    var b = document.createElement('button'); b.type = 'button'; b.className = 'tbtn ' + (cls || ''); b.innerHTML = html;
    withTip(b, title);
    b.addEventListener('mousedown', function (e) { e.preventDefault(); });
    b.addEventListener('click', function (e) { if (readOnly) return; if (b.classList.contains('open') && menuEl) { closeMenu(); return; } onClick(b, e); });
    return b;
  }
  function group(label, rows) {
    var g = document.createElement('div'); g.className = 'tb-group';
    var rs = document.createElement('div'); rs.className = 'tb-rows';
    rows.forEach(function (items) { var row = document.createElement('div'); row.className = 'tb-row'; items.forEach(function (i) { row.appendChild(i); }); rs.appendChild(row); });
    g.appendChild(rs);
    var l = document.createElement('div'); l.className = 'tb-label'; l.innerHTML = label || '&nbsp;'; g.appendChild(l);
    return g;
  }
  function menuBtn(btn, entries) {
    var r = btn.getBoundingClientRect(); openMenu(r.left, r.bottom + 3, entries);
    btn.classList.add('open'); var m = menuEl;
    var obs = new MutationObserver(function () { if (!document.body.contains(m)) { btn.classList.remove('open'); obs.disconnect(); } });
    obs.observe(document.body, { childList: true });
  }
  // a row of icon choices (horizontal / vertical align, like Webix)
  function iconChoices(btn, items, current, onPick) {
    var row = document.createElement('div'); row.className = 'icon-choices';
    items.forEach(function (it) {
      var b = document.createElement('span'); b.className = 'ic' + (it[0] === current ? ' on' : ''); b.innerHTML = icon(it[1]);
      withTip(b, it[2]);
      b.addEventListener('mousedown', function (e) { e.preventDefault(); e.stopPropagation(); hideTip(); closeMenu(); onPick(it[0]); });
      row.appendChild(b);
    });
    openPopup(btn, row, 'align-pop');
  }
  var tb = {};
  var FORMATS = [['common', 'Common', ''], ['currency', 'Currency', '$98.20'], ['number', 'Number', '2,120.02'], ['percent', 'Percent', '50%'], ['date', 'Date', '03/15/2023'], ['text', 'Text', '012345'], ['custom', 'Custom', '']];
  var FONT_SIZES = [8, 9, 10, 11, 12, 14, 15, 16, 18, 20, 22, 24, 28, 36];
  var BORDER_KINDS = [['no', 'Clear borders'], ['left', 'Left border'], ['top', 'Top border'], ['right', 'Right border'], ['bottom', 'Bottom border'], ['all', 'All borders'], ['outer', 'Outer borders'], ['top-bottom', 'Top and bottom borders']];
  var LINE_TYPES = ['hair', 'dotted', 'dashDotDot', 'dashDot', 'dashed', 'thin', 'mediumDashDotDot', 'slantDashDot', 'mediumDashDot', 'mediumDashed', 'medium', 'thick', 'double'];
  var lastBg = '#ffffff', lastColor = '#000000', borderColor = '#000000', borderLine = 'thin';
  function lineSample(t) {
    var w = { hair: 1, dotted: 1, dashDotDot: 1, dashDot: 1, dashed: 1, thin: 1, mediumDashDotDot: 2, slantDashDot: 2, mediumDashDot: 2, mediumDashed: 2, medium: 2, thick: 3, double: 1 }[t];
    var dash = { hair: '1 1', dotted: '1.5 2', dashDotDot: '6 2 1.5 2 1.5 2', dashDot: '6 2 1.5 2', dashed: '5 3', mediumDashDotDot: '6 2 2 2 2 2', slantDashDot: '7 2 2 2', mediumDashDot: '7 2 2 2', mediumDashed: '6 3' }[t] || '';
    if (t === 'double') return '<svg viewBox="0 0 60 8" width="60" height="8"><path d="M2 2.5h56M2 5.5h56" stroke="#475466" stroke-width="1"/></svg>';
    return '<svg viewBox="0 0 60 8" width="60" height="8"><path d="M2 4h56" stroke="#475466" stroke-width="' + w + '"' + (dash ? ' stroke-dasharray="' + dash + '"' : '') + '/></svg>';
  }
  function openBorders(btn) {
    var chosen = null;
    var wrapEl = document.createElement('div'); wrapEl.className = 'borders-pop';
    var gridEl = document.createElement('div'); gridEl.className = 'borders-grid';
    BORDER_KINDS.forEach(function (k) {
      var s = document.createElement('span'); s.className = 'ic'; s.innerHTML = icon('borders-' + k[0]); withTip(s, k[1]);
      s.addEventListener('mousedown', function (e) { e.preventDefault(); e.stopPropagation(); chosen = k[0]; Array.prototype.forEach.call(gridEl.children, function (x) { x.classList.toggle('on', x === s); }); });
      gridEl.appendChild(s);
    });
    var side = document.createElement('div'); side.className = 'borders-side';
    var colBtn = document.createElement('span'); colBtn.className = 'pick'; colBtn.innerHTML = icon('pen') + '<span class="bar"></span>' + caret(); withTip(colBtn, 'Border color');
    colBtn.querySelector('.bar').style.background = borderColor;
    var colPanel = null;
    colBtn.addEventListener('mousedown', function (e) {
      e.preventDefault(); e.stopPropagation();
      if (colPanel) { colPanel.remove(); colPanel = null; return; }
      colPanel = colorBoard(borderColor, function (c) { borderColor = c; colBtn.querySelector('.bar').style.background = c; colPanel.remove(); colPanel = null; });
      colPanel.classList.add('inline'); wrapEl.appendChild(colPanel);
    });
    var lineBtn = document.createElement('span'); lineBtn.className = 'pick line'; withTip(lineBtn, 'Border line type');
    function drawLine() { lineBtn.innerHTML = lineSample(borderLine) + caret(); }
    drawLine();
    var linePanel = null;
    lineBtn.addEventListener('mousedown', function (e) {
      e.preventDefault(); e.stopPropagation();
      if (linePanel) { linePanel.remove(); linePanel = null; return; }
      linePanel = document.createElement('div'); linePanel.className = 'line-list';
      LINE_TYPES.forEach(function (t) {
        var it = document.createElement('div'); it.className = 'lt' + (t === borderLine ? ' on' : ''); it.innerHTML = lineSample(t);
        it.addEventListener('mousedown', function (ev) { ev.preventDefault(); ev.stopPropagation(); borderLine = t; drawLine(); linePanel.remove(); linePanel = null; });
        linePanel.appendChild(it);
      });
      wrapEl.appendChild(linePanel);
    });
    side.append(colBtn, lineBtn);
    var top = document.createElement('div'); top.className = 'borders-top'; top.append(gridEl, side);
    var apply = document.createElement('button'); apply.type = 'button'; apply.className = 'apply'; apply.textContent = 'Apply';
    apply.addEventListener('mousedown', function (e) { e.preventDefault(); e.stopPropagation(); if (!chosen) { closeMenu(); return; } closeMenu(); setBorders(chosen, borderColor, borderLine); });
    wrapEl.append(top, apply);
    openPopup(btn, wrapEl, 'borders-popup');
  }
  function openFontSizes(btn) {
    var cur = String((styles[key(act.r, act.c)] || {}).fs || 15);
    menuBtn(btn, FONT_SIZES.map(function (n) { return [String(n) + (String(n) === cur ? '' : ''), null, function () { applyStyle({ fs: n === 15 ? null : n }); editor.focus({ preventScroll: true }); }]; }));
    if (menuEl) { menuEl.classList.add('narrow'); Array.prototype.forEach.call(menuEl.children, function (mi) { if (mi.textContent === cur) mi.classList.add('on'); }); }
  }
  function openFormats(btn) {
    var cur = (styles[key(act.r, act.c)] || {}).fmt || 'common';
    menuBtn(btn, FORMATS.map(function (f) {
      return ['<span class="fmt-name">' + f[1] + '</span><span class="fmt-eg">' + f[2] + '</span>', null, function () {
        if (f[0] === 'custom') { customFormatDialog(); return; }
        applyStyle({ fmt: f[0] === 'common' ? null : f[0], dec: null, pattern: null }); editor.focus({ preventScroll: true });
      }];
    }));
    if (menuEl) { menuEl.classList.add('formats'); Array.prototype.forEach.call(menuEl.children, function (mi, i) { if (FORMATS[i][0] === cur) mi.classList.add('on'); }); }
  }
  function clearEntries() {
    return [['Values', null, function () { clearRange('values'); }], ['Styles', null, function () { clearRange('styles'); }], ['Conditional formats', null, function () { clearRange('conds'); }],
      ['Dropdowns', null, function () { clearRange('dropdowns'); }], ['Filters', null, function () { clearRange('filters'); }], ['Comments', null, function () { clearRange('comments'); }], null, ['All', null, function () { clearRange('all'); }]];
  }
  function buildToolbar() {
    var bar = $('toolbar');
    tb.undo = tbtn(icon('undo'), 'Undo', undo, 'ico');
    tb.redo = tbtn(icon('redo'), 'Redo', redo, 'ico');
    tb.fs = tbtn('<span class="val">15</span>' + caret(), 'Font size', openFontSizes, 'combo fs');
    tb.b = tbtn('B', 'Bold', function () { toggleStyle('b'); }, 'txt b');
    tb.i = tbtn('I', 'Italic', function () { toggleStyle('i'); }, 'txt i');
    tb.u = tbtn('U', 'Underline', function () { toggleStyle('u'); }, 'txt u');
    tb.s = tbtn('S', 'Strike', function () { toggleStyle('s'); }, 'txt s');
    tb.bg = tbtn('<span class="colicon">' + icon('background') + '<span class="bar"></span></span>' + caret(), 'Background color', function (b) { openPalette(b, function (c) { lastBg = c; tb.bg.querySelector('.bar').style.background = c; applyStyle({ bg: c === '#ffffff' ? null : c }); }, (styles[key(act.r, act.c)] || {}).bg); }, 'drop');
    tb.color = tbtn('<span class="colicon">' + icon('color') + '<span class="bar"></span></span>' + caret(), 'Font color', function (b) { openPalette(b, function (c) { lastColor = c; tb.color.querySelector('.bar').style.background = c; applyStyle({ color: c === '#000000' ? null : c }); }, (styles[key(act.r, act.c)] || {}).color); }, 'drop');
    tb.borders = tbtn(icon('borders-all') + caret(), 'Borders', openBorders, 'drop');
    tb.ha = tbtn(icon('left') + caret(), 'Horizontal align', function (b) {
      iconChoices(b, [['left', 'left', 'Left'], ['center', 'center', 'Center'], ['right', 'right', 'Right']], (styles[key(act.r, act.c)] || {}).ha || 'left', function (v) { applyStyle({ ha: v === 'left' ? null : v }); });
    }, 'drop');
    tb.va = tbtn(icon('middle') + caret(), 'Vertical align', function (b) {
      iconChoices(b, [['top', 'top', 'Top'], ['middle', 'middle', 'Middle'], ['bottom', 'bottom', 'Bottom']], (styles[key(act.r, act.c)] || {}).va || 'middle', function (v) { applyStyle({ va: v === 'middle' ? null : v }); });
    }, 'drop');
    tb.merge = tbtn(icon('span'), 'Merge', toggleMerge, 'ico');
    tb.wrap = tbtn(icon('wrap'), 'Text wrap', function () { toggleStyle('wrap'); }, 'ico');
    tb.indentUp = tbtn(icon('increase-indent'), 'Increase indent', function () { changeIndent(1); }, 'ico');
    tb.indentDown = tbtn(icon('decrease-indent'), 'Decrease indent', function () { changeIndent(-1); }, 'ico');
    tb.fmt = tbtn('<span class="val">Common</span>' + caret(), 'Number format', openFormats, 'combo fmt');
    tb.decUp = tbtn(icon('increase-decimals'), 'Increase decimal places', function () { changeDecimals(1); }, 'ico');
    tb.decDown = tbtn(icon('decrease-decimals'), 'Decrease decimal places', function () { changeDecimals(-1); }, 'ico');
    tb.sortAsc = tbtn(icon('sort-asc'), 'Ascending (A to Z)', function () { sortSelection(false); }, 'ico');
    tb.sortDesc = tbtn(icon('sort-desc'), 'Descending (Z to A)', function () { sortSelection(true); }, 'ico');
    tb.filter = tbtn(icon('create-filter'), 'Create/remove filters', toggleFilter, 'ico');
    tb.cond = tbtn(icon('conditional-format'), 'Conditional format', condDialog, 'ico');
    tb.clear = tbtn(icon('clear-styles') + caret(), 'Clear', function (b) { menuBtn(b, clearEntries()); }, 'drop');
    tb.range = tbtn(icon('add-range'), 'Named ranges', namedRangesDialog, 'ico');
    tb.lock = tbtn(icon('lock-cell'), 'Lock/unlock cell', toggleLock, 'ico');
    tb.dd = tbtn(icon('add-dropdown'), 'Add dropdown', dropdownDialog, 'ico');
    tb.showF = tbtn(icon('show-formulas'), 'Hide/Show formulas', toggleShowFormulas, 'ico');
    tb.comment = tbtn(icon('add-comment') + '<span>Comment</span>', 'Comment', commentDialog, 'wide2');
    tb.graph = tbtn(icon('add-sparkline') + '<span>Graph</span>' + caret(), 'Graph', function (b) {
      menuBtn(b, [['Add to cell', null, sparklineDialog], ['Add above cells', null, function () { addChart(); }]]);
    }, 'wide2 drop');
    tb.bg.querySelector('.bar').style.background = lastBg; tb.color.querySelector('.bar').style.background = lastColor;
    bar.append(
      group('', [[tb.undo], [tb.redo]]),
      group('Font', [[tb.fs, tb.b, tb.i, tb.u, tb.s], [tb.bg, tb.color, tb.borders]]),
      group('Align', [[tb.ha, tb.merge, tb.indentUp], [tb.va, tb.wrap, tb.indentDown]]),
      group('Format', [[tb.fmt], [tb.decUp, tb.decDown]]),
      group('Edit', [[tb.sortAsc, tb.filter, tb.cond, tb.clear], [tb.sortDesc, tb.range, tb.lock, tb.dd, tb.showF]]),
      group('Insert', [[tb.comment], [tb.graph]])
    );
  }
  function updateToolbarState() {
    if (!tb.b) return;
    var st = styles[key(act.r, act.c)] || {};
    ['b', 'i', 'u', 's', 'wrap'].forEach(function (p) { tb[p].classList.toggle('on', !!st[p]); });
    tb.fs.querySelector('.val').textContent = st.fs || 15;
    var f = FORMATS.filter(function (x) { return x[0] === (st.fmt || 'common'); })[0];
    tb.fmt.querySelector('.val').textContent = f ? f[1] : 'Common';
    tb.ha.innerHTML = icon(st.ha || 'left') + caret();
    tb.va.innerHTML = icon(st.va || 'middle') + caret();
    tb.merge.classList.toggle('on', !!mergeAt(act.r, act.c));
    tb.lock.classList.toggle('on', !!st.lock);
    tb.filter.classList.toggle('on', !!filter);
    tb.showF.classList.toggle('on', showFormulas);
    tb.undo.disabled = !undoStack.length; tb.redo.disabled = !redoStack.length;
  }

  // ------------------------------------------------------------------ graphs ("Add above cells", edited in a side panel like Webix)
  var PALETTE = ['#6666ff', '#e1251b', '#00a650', '#ff9900', '#7030a0', '#00b0f0', '#d5a6bd', '#666666'];
  var CHART_TYPES = [['line', 'Line'], ['spline', 'Spline'], ['splineArea', 'Spline Area'], ['area', 'Area'], ['bar', 'Bar'], ['hbar', 'Bar (horizontal)'], ['radar', 'Radar'], ['pie', 'Pie'], ['donut', 'Donut'], ['scatter', 'Scatter']];
  function chartData(ch) {
    var g = parseRange(ch.range); if (!g) return null;
    var M = [];
    for (var r = g.r1; r <= g.r2; r++) { var row = []; for (var c = g.c1; c <= g.c2; c++) { var v = cellValue(r, c); row.push(isError(v) ? null : v); } M.push(row); }
    if (ch.seriesFrom === 'rows') M = M[0].map(function (_, c) { return M.map(function (row) { return row[c]; }); });
    var body = ch.legendTop ? M.slice(1) : M;
    var labels = body.map(function (row, i) { return ch.xCol ? String(row[0] == null ? '' : row[0]) : String(i + 1); });
    var series = [];
    for (var c = ch.xCol ? 1 : 0; c < (M[0] || []).length; c++) {
      series.push({ label: ch.legendTop ? String(M[0][c] == null ? '' : M[0][c]) : 'Data ' + (series.length + 1), data: body.map(function (row) { return typeof row[c] === 'number' ? row[c] : null; }) });
    }
    return { labels: labels, series: series };
  }
  function chartConfig(ch) {
    var data = chartData(ch); if (!data) return null;
    var t = ch.type || 'line', pie = t === 'pie' || t === 'donut';
    var type = { line: 'line', spline: 'line', splineArea: 'line', area: 'line', bar: 'bar', hbar: 'bar', radar: 'radar', pie: 'pie', donut: 'doughnut', scatter: 'scatter' }[t] || 'line';
    var colors = ch.colors || [];
    var datasets = (pie ? data.series.slice(0, 1) : data.series).map(function (s, i) {
      var col = colors[i] || PALETTE[i % PALETTE.length];
      var ds = { label: s.label, data: s.data, borderColor: col, backgroundColor: pie ? data.labels.map(function (_, j) { return PALETTE[j % PALETTE.length]; }) : (/area|Area/.test(t) ? col + '55' : col), borderWidth: 2,
        tension: /spline/i.test(t) ? 0.4 : 0, fill: /area|Area/.test(t), pointRadius: t === 'scatter' ? 4 : 3, pointBackgroundColor: '#fff', pointBorderColor: col };
      if (t === 'scatter') ds.data = s.data.map(function (y, j) { return { x: isNaN(+data.labels[j]) ? j + 1 : +data.labels[j], y: y }; });
      return ds;
    });
    var cfg = { type: type, data: { labels: data.labels, datasets: datasets }, options: { responsive: true, maintainAspectRatio: false, animation: false, indexAxis: t === 'hbar' ? 'y' : 'x',
      plugins: { legend: { display: !!ch.legendTop || pie, position: ch.legendPos || 'bottom' }, title: { display: !!ch.title, text: ch.title } } } };
    if (!pie && type !== 'radar') cfg.options.scales = { x: { title: { display: !!ch.xTitle, text: ch.xTitle }, grid: { display: ch.lines !== false } }, y: { beginAtZero: true, title: { display: !!ch.yTitle, text: ch.yTitle }, grid: { display: ch.lines !== false } } };
    return cfg;
  }
  function addChart() {
    if (readOnly) return; commitEdit();
    var g = norm(sel);
    if (g.r1 === g.r2 && g.c1 === g.c2) { flash('Select the data to graph first (include headings).'); return; }
    var firstColText = false, firstRowText = false;
    for (var r = g.r1; r <= g.r2; r++) { var v = cellValue(r, g.c1); if (typeof v === 'string' && v !== '') firstColText = true; }
    for (var c = g.c1; c <= g.c2; c++) { var v2 = cellValue(g.r1, c); if (typeof v2 === 'string' && v2 !== '') firstRowText = true; }
    var rc = rangeRect(g);
    beginChange();
    var ch = { id: 'ch' + Date.now(), type: 'line', range: rangeStr(g), xCol: firstColText && g.c2 > g.c1, legendTop: firstRowText && g.r2 > g.r1, seriesFrom: 'columns', x: rc.x + 30, y: rc.y + 30, w: 420, h: 260 };
    charts.push(ch);
    endChange(false);
    openChartPanel(ch.id);
  }
  function renderCharts() {
    var layer = $('charts'), keep = {};
    charts.forEach(function (ch) {
      keep[ch.id] = 1;
      var box = layer.querySelector('[data-id="' + ch.id + '"]');
      if (!box) {
        box = document.createElement('div'); box.className = 'ss-chart'; box.setAttribute('data-id', ch.id);
        box.innerHTML = '<div class="ss-chart-menu" title="Menu"><i class="fas fa-ellipsis-v"></i></div><div class="ss-chart-body"><canvas></canvas></div><div class="ss-chart-resize"></div>';
        layer.appendChild(box); wireChart(box, ch.id);
      }
      box.style.left = ch.x + 'px'; box.style.top = ch.y + 'px'; box.style.width = ch.w + 'px'; box.style.height = ch.h + 'px';
      drawChart(box, ch);
    });
    Array.prototype.forEach.call(layer.children, function (b) { if (!keep[b.getAttribute('data-id')]) { var o = chartObjs[b.getAttribute('data-id')]; o && o.destroy(); b.remove(); } });
    if (chartPanelFor && !charts.some(function (c) { return c.id === chartPanelFor; })) closeChartPanel();
  }
  function drawChart(box, ch) {
    if (!window.Chart) { box.querySelector('.ss-chart-body').textContent = 'Graphs need an internet connection (Chart.js).'; return; }
    var cfg = chartConfig(ch); if (!cfg) return;
    var old = chartObjs[ch.id]; if (old) old.destroy();
    chartObjs[ch.id] = new Chart(box.querySelector('canvas'), cfg);
  }
  function findChart(id) { return charts.filter(function (c) { return c.id === id; })[0]; }
  function wireChart(box, id) {
    box.querySelector('.ss-chart-menu').addEventListener('mousedown', function (e) {
      e.preventDefault(); e.stopPropagation(); if (readOnly) return;
      var b = e.currentTarget.getBoundingClientRect();
      openMenu(b.left, b.bottom, [['Edit', null, function () { openChartPanel(id); }], ['Download', null, function () {
        var a = document.createElement('a'); a.href = chartObjs[id].toBase64Image(); a.download = 'graph.png'; a.click();
      }], ['Remove', null, function () { beginChange(); charts = charts.filter(function (c) { return c.id !== id; }); endChange(false); }]]);
    });
    function dragger(handle, resize) {
      handle.addEventListener('mousedown', function (e) {
        if (readOnly || e.target.closest('.ss-chart-menu')) return; e.preventDefault(); e.stopPropagation();
        var ch = findChart(id), sx = e.clientX, sy = e.clientY, o = { x: ch.x, y: ch.y, w: ch.w, h: ch.h }, snap = snapshot(), moved = false;
        function mv(ev) {
          moved = true;
          if (resize) { ch.w = Math.max(220, o.w + ev.clientX - sx); ch.h = Math.max(160, o.h + ev.clientY - sy); }
          else { ch.x = Math.max(0, o.x + ev.clientX - sx); ch.y = Math.max(0, o.y + ev.clientY - sy); }
          box.style.left = ch.x + 'px'; box.style.top = ch.y + 'px'; box.style.width = ch.w + 'px'; box.style.height = ch.h + 'px';
        }
        function up() { document.removeEventListener('mousemove', mv); document.removeEventListener('mouseup', up); if (moved) { undoStack.push(snap); redoStack = []; endChange(false); } }
        document.addEventListener('mousemove', mv); document.addEventListener('mouseup', up);
      });
    }
    dragger(box.querySelector('.ss-chart-body'), false); dragger(box.querySelector('.ss-chart-resize'), true);
  }
  function closeChartPanel() { var p = $('chartpanel'); if (p) p.remove(); chartPanelFor = null; }
  function openChartPanel(id) {
    closeChartPanel(); chartPanelFor = id;
    var ch = findChart(id); if (!ch) return;
    var p = document.createElement('div'); p.id = 'chartpanel'; p.className = 'ss-panel';
    p.innerHTML = '<div class="ss-panel-head"><span class="ss-panel-back"><i class="fas fa-arrow-left"></i></span> Edit chart</div><div class="ss-tabs"><span data-t="common" class="on">Common</span><span data-t="series">Series</span><span data-t="extras">Extras</span></div><div class="ss-panel-body"></div>';
    document.body.appendChild(p);
    p.querySelector('.ss-panel-back').onclick = closeChartPanel;
    var body = p.querySelector('.ss-panel-body');
    function update(fn) { beginChange(); fn(ch); endChange(false); }
    function tab(t) {
      Array.prototype.forEach.call(p.querySelectorAll('.ss-tabs span'), function (s) { s.classList.toggle('on', s.getAttribute('data-t') === t); });
      if (t === 'common') {
        body.innerHTML = '<div class="pf"><label>Type</label><select id="ct">' + CHART_TYPES.map(function (x) { return '<option value="' + x[0] + '">' + x[1] + '</option>'; }).join('') + '</select></div>' +
          '<div class="pf"><label>Range</label><input id="cr"></div><div class="pf"><label>Use left column as xAxis</label><input type="checkbox" id="cx"></div><div class="pf"><label>Use top row as legend</label><input type="checkbox" id="cl"></div>' +
          '<div class="pf pf-col"><label>Data series from</label><label class="rad"><input type="radio" name="csf" value="columns"> columns</label><label class="rad"><input type="radio" name="csf" value="rows"> rows</label></div>';
        body.querySelector('#ct').value = ch.type; body.querySelector('#cr').value = ch.range; body.querySelector('#cx').checked = !!ch.xCol; body.querySelector('#cl').checked = !!ch.legendTop;
        body.querySelector('input[name=csf][value=' + (ch.seriesFrom || 'columns') + ']').checked = true;
        body.querySelector('#ct').onchange = function (e) { update(function (c) { c.type = e.target.value; }); };
        body.querySelector('#cr').onchange = function (e) { var rg = parseRange(e.target.value.toUpperCase()); if (rg) update(function (c) { c.range = rangeStr(rg); }); };
        body.querySelector('#cx').onchange = function (e) { update(function (c) { c.xCol = e.target.checked; }); };
        body.querySelector('#cl').onchange = function (e) { update(function (c) { c.legendTop = e.target.checked; }); };
        Array.prototype.forEach.call(body.querySelectorAll('input[name=csf]'), function (r) { r.onchange = function () { update(function (c) { c.seriesFrom = r.value; }); }; });
      } else if (t === 'series') {
        var data = chartData(ch) || { series: [] };
        body.innerHTML = data.series.map(function (s, i) { return '<div class="pf-sec">' + escapeHtml(s.label) + '</div><div class="pf"><label>Color</label><input type="color" data-i="' + i + '" value="' + ((ch.colors || [])[i] || PALETTE[i % PALETTE.length]) + '"></div>'; }).join('') || '<p class="muted">No data series in the range.</p>';
        Array.prototype.forEach.call(body.querySelectorAll('input[type=color]'), function (inp) { inp.onchange = function () { update(function (c) { c.colors = (c.colors || []).slice(); c.colors[+inp.getAttribute('data-i')] = inp.value; }); }; });
      } else {
        body.innerHTML = '<div class="pf-sec">Title</div><div class="pf"><label>Chart title</label><input id="et"></div><div class="pf-sec">Legend</div><div class="pf"><label>Position</label><select id="elp"><option value="bottom">Bottom</option><option value="top">Top</option><option value="left">Left</option><option value="right">Right</option></select></div>' +
          '<div class="pf-sec">Scale</div><div class="pf"><label>Lines</label><input type="checkbox" id="esl"></div><div class="pf-sec">X axis</div><div class="pf"><label>Title</label><input id="ext"></div><div class="pf-sec">Y axis</div><div class="pf"><label>Title</label><input id="eyt"></div>';
        body.querySelector('#et').value = ch.title || ''; body.querySelector('#elp').value = ch.legendPos || 'bottom'; body.querySelector('#esl').checked = ch.lines !== false;
        body.querySelector('#ext').value = ch.xTitle || ''; body.querySelector('#eyt').value = ch.yTitle || '';
        body.querySelector('#et').onchange = function (e) { update(function (c) { c.title = e.target.value; }); };
        body.querySelector('#elp').onchange = function (e) { update(function (c) { c.legendPos = e.target.value; }); };
        body.querySelector('#esl').onchange = function (e) { update(function (c) { c.lines = e.target.checked; }); };
        body.querySelector('#ext').onchange = function (e) { update(function (c) { c.xTitle = e.target.value; }); };
        body.querySelector('#eyt').onchange = function (e) { update(function (c) { c.yTitle = e.target.value; }); };
      }
    }
    Array.prototype.forEach.call(p.querySelectorAll('.ss-tabs span'), function (s) { s.onclick = function () { tab(s.getAttribute('data-t')); }; });
    tab('common');
  }

  // ------------------------------------------------------------------ export snapshot (used by the "download answers" report)
  function usedRange() {
    var r2 = -1, c2 = -1;
    Object.keys(raws).concat(Object.keys(styles).filter(function (k) { var s = styles[k]; return s.bg || s.bt || s.bb || s.bl || s.br; })).forEach(function (k) { var p = k.split(','); r2 = Math.max(r2, +p[0]); c2 = Math.max(c2, +p[1]); });
    merges.forEach(function (m) { var g = parseRange(m); r2 = Math.max(r2, g.r2); c2 = Math.max(c2, g.c2); });
    return r2 < 0 ? null : { r1: 0, c1: 0, r2: r2, c2: c2 };
  }
  function exportSnapshot() {
    var g = usedRange();
    var res = { html: '', formulas: [], charts: [] };
    if (g) {
      var h = '<table class="sheet-export"><thead><tr><th></th>';
      for (var c = 0; c <= g.c2; c++) h += '<th>' + colName(c) + '</th>';
      h += '</tr></thead><tbody>';
      for (var r = 0; r <= g.r2; r++) {
        h += '<tr><th>' + (r + 1) + '</th>';
        for (c = 0; c <= g.c2; c++) {
          var m = mergeAt(r, c);
          if (m && (m.r1 !== r || m.c1 !== c)) continue;
          var st = styles[key(r, c)] || {}, d = displayOf(r, c), cs = condStyle(r, c) || {};
          var css = [];
          if (st.b || cs.b) css.push('font-weight:700'); if (st.i) css.push('font-style:italic');
          if (st.u || st.s) css.push('text-decoration:' + (st.u ? 'underline ' : '') + (st.s ? 'line-through' : ''));
          if (cs.color || st.color) css.push('color:' + (cs.color || st.color)); if (cs.bg || st.bg) css.push('background:' + (cs.bg || st.bg));
          css.push('text-align:' + (st.ha || 'left'));
          ['bt', 'br', 'bb', 'bl'].forEach(function (b, i) { if (st[b]) css.push('border-' + ['top', 'right', 'bottom', 'left'][i] + ':' + borderCss(st)); });
          var span = m ? ' colspan="' + (m.c2 - m.c1 + 1) + '" rowspan="' + (m.r2 - m.r1 + 1) + '"' : '';
          h += '<td' + span + ' style="' + css.join(';') + '">' + (d.spark ? sparklineSvg(d.spark, null) : escapeHtml(d.text)) + '</td>';
          var raw = getRaw(r, c);
          if (raw && raw[0] === '=') res.formulas.push([a1(r, c), raw, d.text]);
        }
        h += '</tr>';
      }
      res.html = h + '</tbody></table>';
    }
    res.comments = Object.keys(comments).map(function (k) { var p = k.split(','); return [a1(+p[0], +p[1]), comments[k]]; });
    res.conds = conds.map(function (x) { return x.range + ': ' + x.style + ' when ' + (COND_OPS.filter(function (o) { return o[1] === x.op; })[0] || [x.op])[0] + ' ' + (x.v1 || '') + (/between/.test(x.op) ? ' and ' + x.v2 : ''); });
    res.named = Object.keys(named).map(function (n) { return n + ' = ' + named[n]; });
    charts.forEach(function (ch) {
      if (!window.Chart) return;
      var cv = document.createElement('canvas'); cv.width = ch.w * 2; cv.height = ch.h * 2;
      cv.style.width = ch.w + 'px'; cv.style.height = ch.h + 'px';
      var holder = document.createElement('div'); holder.style.cssText = 'position:fixed;left:-9999px;width:' + ch.w + 'px;height:' + ch.h + 'px';
      holder.appendChild(cv); document.body.appendChild(holder);
      var cfg = chartConfig(ch); cfg.options.responsive = false; cfg.options.devicePixelRatio = 2;
      cfg.plugins = [{ id: 'bg', beforeDraw: function (c) { var x = c.ctx; x.save(); x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height); x.restore(); } }];
      var chart = new Chart(cv, cfg);
      res.charts.push(chart.toBase64Image()); chart.destroy(); holder.remove();
    });
    return res;
  }

  // =====================================================================================
  // NESA (Webix SpreadSheet) behaviour: messages, dialogs, formula colouring, function
  // suggestions and hints, comments, dropdown lists, filters, data validation, sorting
  // =====================================================================================
  function flash(msg) {
    var t = document.createElement('div'); t.className = 'wx-toast'; t.textContent = msg; document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 3000);
  }
  // Webix-style window: title bar with ×, body, buttons bottom-right
  function dialog(title, bodyHtml, onReady, width) {
    closePops();
    var bg = document.createElement('div'); bg.className = 'dlg-bg';
    bg.innerHTML = '<div class="dlg" style="width:' + (typeof width === 'number' ? width : 350) + 'px"><div class="dlg-head">' + title + '<span class="dlg-x">&times;</span></div><div class="dlg-body">' + bodyHtml + '</div></div>';
    document.body.appendChild(bg);
    function esc(e) { if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); close(); } }
    function close() { bg.remove(); document.removeEventListener('keydown', esc, true); editor.focus({ preventScroll: true }); }
    document.addEventListener('keydown', esc, true);
    bg.querySelector('.dlg-x').onclick = close;
    onReady(bg.querySelector('.dlg-body'), close);
    var f = bg.querySelector('input.wx-in, textarea, select'); if (f && !f.hasAttribute('data-nofocus')) f.focus();
  }
  function frow(label, ctl, lw, req, cls) {
    return '<div class="frow' + (cls ? ' ' + cls : '') + '">' + (label !== null ? '<span class="fl" style="width:' + (lw || 140) + 'px">' + label + (req ? '<span class="req">*</span>' : '') + '</span>' : '') + '<div class="fc">' + ctl + '</div></div>';
  }
  function btns(list) { return '<div class="dlg-btns">' + list.map(function (b) { return '<button type="button" class="wx-btn ' + (b[2] || '') + '" id="' + b[0] + '">' + b[1] + '</button>'; }).join('') + '</div>'; }
  function opts(list, cur) { return list.map(function (o) { return '<option value="' + o[0] + '"' + (String(o[0]) === String(cur) ? ' selected' : '') + '>' + o[1] + '</option>'; }).join(''); }
  // small popups (comments, hints, lists) that close when something else is clicked
  var pops = {};
  function closePops(except) { Object.keys(pops).forEach(function (k) { if (k !== except && pops[k]) { if (pops[k]._onclose) pops[k]._onclose(); pops[k].remove(); delete pops[k]; } }); }
  function closePop(name) { var p = pops[name]; if (p) { if (p._onclose) p._onclose(); p.remove(); delete pops[name]; } }
  function openPop(name, cls, html) { closePop(name); var p = document.createElement('div'); p.className = 'wx-pop ' + cls; p.innerHTML = html || ''; document.body.appendChild(p); pops[name] = p; return p; }
  document.addEventListener('mousedown', function (e) {
    if (!e.target.isConnected) return;   // the click was on a popup item that has just closed itself
    Object.keys(pops).forEach(function (k) { var p = pops[k]; if (p && !p.contains(e.target) && !(p._owner && p._owner.contains(e.target))) closePop(k); });
  });
  var measureCtx = document.createElement('canvas').getContext('2d');
  function textWidth(s, font) { measureCtx.font = font || '16px Roboto, sans-serif'; return measureCtx.measureText(s).width; }

  // ---------- formula colouring (NESA colours each reference in the edit bar and on the grid)
  function formulaRefs(f) {
    var out = [], inStr = false, i = 0;
    while (i < f.length) {
      var ch = f[i];
      if (ch === '"') { inStr = !inStr; i++; continue; }
      if (inStr || !/[A-Za-z$]/.test(ch) || /[A-Za-z0-9_.$]/.test(f[i - 1] || '')) { i++; continue; }
      var rest = f.slice(i), m = /^(\$?[A-Za-z]{1,3}\$?\d+)(:\$?[A-Za-z]{1,3}\$?\d+)?/.exec(rest);
      if (m && !/^[A-Za-z0-9_(]/.test(rest.slice(m[0].length))) {
        var g = parseRange(m[0].replace(/\$/g, '').toUpperCase());
        if (g) { out.push({ s: i, e: i + m[0].length, ref: m[0].replace(/\$/g, '').toUpperCase(), g: g }); i += m[0].length; continue; }
      }
      var id = /^[A-Za-z_$][A-Za-z0-9_.$]*/.exec(rest); i += id ? id[0].length : 1;
    }
    var colours = {}, n = 0;
    out.forEach(function (t) { if (!colours[t.ref]) colours[t.ref] = (n++ % 7) + 1; t.col = colours[t.ref]; });
    return out;
  }
  function hlHtml(text, refs) {
    var h = '', p = 0;
    refs.forEach(function (t) { h += escapeHtml(text.slice(p, t.s)) + '<span class="hlc' + t.col + '">' + escapeHtml(text.slice(t.s, t.e)) + '</span>'; p = t.e; });
    return h + escapeHtml(text.slice(p)) + ' ';
  }
  var fxhl = $('fxhl'), edhl = $('edhl'), refsLayer = $('refs');
  function updateFormulaUI() {
    var inp = activeInput(), t = inp ? inp.value : '', on = !!(editing && t[0] === '=');
    var refs = on ? formulaRefs(t) : [];
    fx.parentNode.classList.toggle('hl-on', on); fxhl.classList.toggle('show', on);
    fxhl.innerHTML = on ? hlHtml(t, refs) : ''; fxhl.scrollLeft = fx.scrollLeft;
    var inCell = on && editor.classList.contains('editing');
    editor.classList.toggle('hl-on', inCell); edhl.classList.toggle('show', inCell);
    if (inCell) {
      edhl.style.left = editor.style.left; edhl.style.top = editor.style.top; edhl.style.width = editor.style.width; edhl.style.height = editor.style.height;
      edhl.innerHTML = hlHtml(editor.value, formulaRefs(editor.value)); edhl.scrollLeft = editor.scrollLeft; edhl.scrollTop = editor.scrollTop;
    } else edhl.innerHTML = '';
    var seen = {}, html = '';
    refs.forEach(function (t) {
      if (seen[t.ref]) return; seen[t.ref] = 1;
      var g = { r1: t.g.r1, c1: t.g.c1, r2: Math.min(t.g.r2, ROWS - 1), c2: Math.min(t.g.c2, COLS - 1) };
      if (g.r1 >= ROWS || g.c1 >= COLS) return;
      var rc = rangeRect(g); html += '<div class="hlb' + t.col + '" style="left:' + rc.x + 'px;top:' + rc.y + 'px;width:' + rc.w + 'px;height:' + rc.h + 'px"></div>';
    });
    refsLayer.innerHTML = html;
    updateFnPopups();
  }
  ['scroll', 'keyup', 'click', 'select'].forEach(function (ev) {
    fx.addEventListener(ev, function () { fxhl.scrollLeft = fx.scrollLeft; if (ev !== 'scroll') updateFnPopups(); });
    editor.addEventListener(ev, function () { edhl.scrollLeft = editor.scrollLeft; edhl.scrollTop = editor.scrollTop; if (ev !== 'scroll' && editing) updateFnPopups(); });
  });

  // ---------- function suggestions and argument hints (shown under the edit bar, like NESA)
  function caretX(inp, pos) {
    var r = fx.getBoundingClientRect();
    var src = inp === fx ? fx.value : editor.value;
    return r.left + 13 + textWidth(src.slice(0, pos)) - fx.scrollLeft;
  }
  function fnPrefix(t, pos) {
    if (t[0] !== '=') return null;
    var before = t.slice(0, pos);
    if ((before.match(/"/g) || []).length % 2) return null;
    var m = /(^=|[=(,+\-*\/^&<>:;\s])([A-Za-z][A-Za-z0-9.]*)$/.exec(before);
    return m ? { start: pos - m[2].length, text: m[2] } : null;
  }
  function callAt(t, pos) {
    var stack = [], inStr = false;
    for (var i = 0; i < pos && i < t.length; i++) {
      var ch = t[i];
      if (ch === '"') { inStr = !inStr; continue; } if (inStr) continue;
      if (ch === '(') { var m = /([A-Za-z][A-Za-z0-9.]*)$/.exec(t.slice(0, i)); stack.push({ name: m ? m[1].toUpperCase() : '', arg: 0, at: m ? i - m[1].length : i }); }
      else if (ch === ')') stack.pop();
      else if (ch === ',' && stack.length) stack[stack.length - 1].arg++;
    }
    for (var k = stack.length - 1; k >= 0; k--) if (stack[k].name) return NESA_FN_SET[stack[k].name] ? stack[k] : null;
    return null;
  }
  function insertFunction(inp, start, end, name) {
    var t = inp.value; inp.value = t.slice(0, start) + name + '(' + t.slice(end);
    var p = start + name.length + 1; inp.focus(); inp.setSelectionRange(p, p);
    (inp === editor ? fx : editor).value = inp.value; point = null; $('pointbox').classList.add('hidden');
    if (inp === editor) autoSizeEditor();
    updateFormulaUI();
  }
  function updateFnPopups() {
    var inp = activeInput();
    if (!editing || !inp || inp.value[0] !== '=' || document.activeElement !== inp) { closePop('suggest'); closePop('hint'); return; }
    var pos = inp.selectionStart, t = inp.value, fr = fx.getBoundingClientRect();
    var pre = inp.selectionStart === inp.selectionEnd ? fnPrefix(t, pos) : null;
    var list = pre ? NESA_FUNCS.filter(function (n) { return n.indexOf(pre.text.toUpperCase()) === 0; }) : [];
    if (pre && list.length && !(list.length === 1 && list[0] === pre.text.toUpperCase() && t[pos] === '(')) {
      closePop('hint');
      var p = pops.suggest && pops.suggest._key === pre.text.toUpperCase() ? pops.suggest : null;
      if (!p) {
        p = openPop('suggest', 'wx-list fn-suggest', list.map(function (n) { return '<div class="wi" data-n="' + n + '">' + n + '</div>'; }).join(''));
        p._key = pre.text.toUpperCase(); p._owner = inp;
        p.addEventListener('mousedown', function (e) {
          e.preventDefault(); var it = e.target.closest('.wi'); if (!it) return;
          var cur = activeInput(), pr = fnPrefix(cur.value, cur.selectionStart); closePop('suggest');
          if (pr) insertFunction(cur, pr.start, cur.selectionStart, it.getAttribute('data-n'));
        });
      }
      p.style.left = Math.max(2, Math.min(caretX(inp, pre.start), window.innerWidth - 354)) + 'px'; p.style.top = fr.bottom + 'px';
      return;
    }
    closePop('suggest');
    var call = callAt(t, pos);
    if (!call) { closePop('hint'); return; }
    var args = FN_ARGS[call.name] || [];
    var html = '<p><span class="fh-name">' + call.name + '</span><span class="fh-cat">' + FN_CAT_LABEL[fnCategory(call.name)] + '</span></p>' +
      args.map(function (a, i) { return '<p' + (i === call.arg ? ' class="on"' : '') + '><span class="fh-p">' + a[0] + ': </span><span class="fh-desc">' + (a[1] ? 'Required. ' : 'Optional. ') + a[2] + '</span></p>'; }).join('');
    var h = pops.hint || openPop('hint', 'fn-hint');
    h._owner = inp;
    if (h._html !== html) { h.innerHTML = html; h._html = html; }
    h.style.left = Math.max(2, Math.min(caretX(inp, call.at), window.innerWidth - 354)) + 'px'; h.style.top = fr.bottom + 'px';
  }

  // ---------- f(x): category + search + list of NESA's functions
  $('fxbtn').addEventListener('mousedown', function (e) { e.preventDefault(); });
  $('fxbtn').addEventListener('click', function () {
    if (readOnly) return;
    if (pops.fx) { closePop('fx'); return; }
    var btn = $('fxbtn'), b = btn.getBoundingClientRect();
    var p = openPop('fx', 'fx-pop', frow('Category', '<select class="wx-in" id="fxcat"><option value=""></option>' + ['common', 'date', 'text', 'number', 'financial', 'array'].map(function (k) { return '<option value="' + k + '">' + FN_CAT_LABEL[k] + '</option>'; }).join('') + '</select>', 74) +
      frow('Search', '<input class="wx-in" id="fxq" autocomplete="off">', 74) + '<div class="wx-list" id="fxlist"></div>');
    p._owner = btn; btn.classList.add('open'); p._onclose = function () { btn.classList.remove('open'); };
    p.style.left = b.left + 'px'; p.style.top = b.bottom + 'px';
    var cat = p.querySelector('#fxcat'), q = p.querySelector('#fxq'), list = p.querySelector('#fxlist');
    function draw() {
      var s = q.value.trim().toUpperCase();
      list.innerHTML = NESA_FUNCS.filter(function (n) { return (!cat.value || fnCategory(n) === cat.value) && (!s || n.indexOf(s) >= 0); }).map(function (n) { return '<div class="wi">' + n + '</div>'; }).join('');
    }
    cat.onchange = draw; q.oninput = draw; draw(); q.focus();
    list.addEventListener('mousedown', function (e) {
      e.preventDefault(); var it = e.target.closest('.wi'); if (!it) return;
      var name = it.textContent; closePop('fx');
      if (!editing) { if (isLocked(act.r, act.c)) { flash('This cell is locked.'); return; } beginEdit(true, '='); }
      var inp = activeInput(); if (!inp) return;
      if (inp.value[0] !== '=') inp.value = '=' + inp.value;
      var pos = inp === document.activeElement ? inp.selectionStart : inp.value.length;
      insertFunction(inp, pos, pos, name);
    });
  });

  // ---------- comments: a note box beside the cell (typed straight in), shown on hover
  function commentDialog() {
    if (readOnly) return; commitEdit();
    var r = act.r, c = act.c, k = key(r, c), td = tds[r][c], b = td.getBoundingClientRect();
    var p = openPop('comment', 'cm-pop', '<textarea spellcheck="false"></textarea>');
    var ta = p.querySelector('textarea'); ta.value = comments[k] || '';
    p.style.left = b.right + 'px'; p.style.top = b.top + 'px';
    p._onclose = function () {
      var v = ta.value; if (v === (comments[k] || '')) return;
      beginChange(); if (v.trim()) comments[k] = v; else delete comments[k]; endChange(false);
    };
    setTimeout(function () { ta.focus(); }, 0);
  }
  var hoverCm = null;
  grid.addEventListener('mouseover', function (e) {
    var cell = cellFromEvent(e);
    var k = cell && key(cell.r, cell.c);
    if (cell && comments[k] && !pops.comment) {
      if (hoverCm === k) return; hoverCm = k;
      var b = tds[cell.r][cell.c].getBoundingClientRect();
      var p = openPop('cmview', 'cm-pop view', '<textarea readonly></textarea>'); p.querySelector('textarea').value = comments[k];
      p.style.left = b.right + 'px'; p.style.top = b.top + 'px'; p.style.pointerEvents = 'none';
    } else if (!cell || !comments[k]) { hoverCm = null; closePop('cmview'); }
  });
  grid.addEventListener('mouseleave', function () { hoverCm = null; closePop('cmview'); });

  // ---------- input message of a validated cell: shown under the cell while it is selected
  function showInputMessage() {
    closePop('vmsg');
    var vr = normVr((styles[key(act.r, act.c)] || {}).vr);
    if (!vr || !vr.input || editing) return;
    var g = norm(sel); if (g.r1 !== g.r2 || g.c1 !== g.c2) { var m = mergeAt(act.r, act.c); if (!m) return; }
    var b = tds[act.r][act.c].getBoundingClientRect();
    var p = openPop('vmsg', 'cm-pop msg', '<textarea readonly></textarea>'); p.querySelector('textarea').value = vr.input;
    p.style.left = b.left + 'px'; p.style.top = b.bottom + 'px';
  }

  // ---------- dropdown cells: double-click opens the list (sorted, like NESA)
  function dropdownOptions(st) {
    var opts = [], g = parseRange(st.dd);
    if (g && /^\$?[A-Z]+\$?\d+(:\$?[A-Z]+\$?\d+)?$/i.test(String(st.dd).trim())) { for (var rr = g.r1; rr <= g.r2; rr++) for (var cc = g.c1; cc <= g.c2; cc++) { var t = displayText(rr, cc); if (t !== '' && opts.indexOf(t) < 0) opts.push(t); } }
    else opts = String(st.dd).split(',').map(function (s) { return s.trim(); }).filter(Boolean);
    opts.sort(function (a, b) { return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }); });
    if (st.ddEmpty) opts.unshift('');
    return opts;
  }
  function openDropdownList(r, c) {
    var st = styles[key(r, c)] || {}; if (!st.dd || readOnly) return;
    if (isLocked(r, c)) { flash('This cell is locked.'); return; }
    var b = tds[r][c].getBoundingClientRect(), list = dropdownOptions(st);
    if (!b.width || !b.height) return;   // hidden row / column
    var p = openPop('dd', 'wx-list dd-list', list.map(function (o, i) { return '<div class="wi" data-i="' + i + '">' + (o === '' ? '&nbsp;' : escapeHtml(o)) + '</div>'; }).join(''));
    p.style.left = b.left + 'px'; p.style.top = b.bottom + 'px'; p.style.width = Math.max(b.width, 80) + 'px';
    p.addEventListener('mousedown', function (e) {
      e.preventDefault(); var it = e.target.closest('.wi'); if (!it) return;
      var v = list[+it.getAttribute('data-i')]; closePop('dd');
      if (v !== getRaw(r, c)) { beginChange(); setRawNoRender(r, c, v); endChange(false); }
      editor.focus({ preventScroll: true });
    });
  }
  function dropdownDialog() {
    if (readOnly) return; commitEdit();
    var st = styles[key(act.r, act.c)] || {};
    dialog('Add dropdown', frow('Range', '<input class="wx-in" id="ddr" autocomplete="off">', 110) + frow('Empty option', '<input type="checkbox" id="dde">', 110) + btns([['ddc', 'Cancel'], ['dds', 'Save', 'sec']]), function (d, close) {
      d.querySelector('#ddr').value = st.dd || ''; d.querySelector('#dde').checked = !!st.ddEmpty;
      d.querySelector('#ddc').onclick = close;
      d.querySelector('#dds').onclick = function () {
        var v = d.querySelector('#ddr').value.trim(), rg = parseRange(v.replace(/^.*!/, '').toUpperCase());
        if (!v) { close(); applyStyle({ dd: null, ddEmpty: null }); return; }
        close(); applyStyle({ dd: rg ? rangeStr(rg) : v, ddEmpty: d.querySelector('#dde').checked || null });
      };
    }, 280);
  }

  // ---------- links
  function linkDialog() {
    if (readOnly) return; commitEdit();
    var r = act.r, c = act.c, cur = parseLink(raws[key(r, c)]);
    if (isLocked(r, c)) { flash('This cell is locked.'); return; }
    dialog('Add Link', '<div class="frow"><div class="fc"><input class="wx-in" id="lkn" placeholder="Text" autocomplete="off"></div></div><div class="frow"><div class="fc"><input class="wx-in" id="lku" placeholder="URL" autocomplete="off"></div></div>' + btns([['lkc', 'Cancel'], ['lks', 'Save', 'sec']]), function (d, close) {
      var n = d.querySelector('#lkn'), u = d.querySelector('#lku');
      n.value = cur ? cur.text : (getRaw(r, c)[0] === '=' ? '' : getRaw(r, c)); u.value = cur ? cur.url : '';
      d.querySelector('#lkc').onclick = close;
      d.querySelector('#lks').onclick = function () {
        var url = u.value.trim();
        if (!url) { close(); if (cur) { beginChange(); setRawNoRender(r, c, cur.text); endChange(false); } return; }
        if (!/^[a-z][a-z0-9+.-]*:/i.test(url)) url = 'http://' + url;
        var name = n.value.trim() || url;
        close(); beginChange();
        setRawNoRender(r, c, '=HYPERLINK("' + url.replace(/"/g, '""') + '","' + name.replace(/"/g, '""') + '")');
        endChange(false);
      };
    }, 308);
  }

  // ---------- data validation (same types, conditions and error handling as NESA)
  var VAL_TYPES = [['any', 'Any'], ['date', 'Date'], ['number', 'Number'], ['text', 'Text'], ['textLength', 'Text length'], ['range', 'Range']];
  var C_NUM = [['greater', 'greater'], ['less', 'less'], ['greaterOrEqual', 'greater or equal'], ['lessOrEqual', 'less or equal'], ['equal', 'equal'], ['notEqual', 'not equal']];
  var C_TEXT = [['contains', 'contains'], ['notContains', 'not contains'], ['equal', 'equal'], ['notEqual', 'not equal'], ['beginsWith', 'begins with'], ['notBeginsWith', 'not begins with'], ['endsWith', 'ends with'], ['notEndsWith', 'not ends with']];
  var C_BETWEEN = [['between', 'between'], ['notBetween', 'not between']];
  function valConds(type) {
    if (type === 'number') return C_NUM.concat([['contains', 'contains'], ['notContains', 'not contains']], C_BETWEEN);
    if (type === 'date') return C_NUM.concat(C_BETWEEN);
    if (type === 'text') return C_TEXT;
    if (type === 'textLength') return C_NUM;
    return [];
  }
  // older saved rules (whole number / list / …) are read as the NESA kinds
  function normVr(vr) {
    if (!vr) return null;
    if (vr.handle || /^(any|date|number|text|textLength|range)$/.test(vr.type)) return vr;
    var opMap = { '>': 'greater', '<': 'less', '>=': 'greaterOrEqual', '<=': 'lessOrEqual', '=': 'equal', '!=': 'notEqual', between: 'between', notbetween: 'notBetween' };
    var t = { integer: 'number', decimal: 'number', list: 'range', date: 'date', length: 'textLength' }[vr.type] || 'any';
    return { type: t, integer: vr.type === 'integer', ignoreEmpty: vr.ignoreBlank !== false, op: opMap[vr.op] || 'equal', v1: t === 'range' ? vr.source : vr.v1, v2: vr.v2, input: '', handle: 'stop', title: '', message: vr.message || '' };
  }
  function valNum(s, type) {
    if (s == null || s === '') return NaN;
    var ref = parseA1(String(s)); if (ref) { var rv = cellValue(ref.r, ref.c); return typeof rv === 'number' ? rv : NaN; }
    if (type === 'date') { var d = mdyToSerial(String(s)); if (d != null) return d; }
    return +s;
  }
  function textOp(op, s, t) {
    s = String(s).toLowerCase(); t = String(t == null ? '' : t).toLowerCase();
    switch (op) {
      case 'contains': return s.indexOf(t) >= 0; case 'notContains': return s.indexOf(t) < 0;
      case 'equal': return s === t; case 'notEqual': return s !== t;
      case 'beginsWith': return s.indexOf(t) === 0; case 'notBeginsWith': return s.indexOf(t) !== 0;
      case 'endsWith': return t !== '' && s.slice(-t.length) === t; case 'notEndsWith': return !(t !== '' && s.slice(-t.length) === t);
    }
    return true;
  }
  function numOp(op, n, a, b) {
    switch (op) {
      case 'greater': return n > a; case 'less': return n < a; case 'greaterOrEqual': return n >= a; case 'lessOrEqual': return n <= a;
      case 'equal': return n === a; case 'notEqual': return n !== a;
      case 'between': return n >= Math.min(a, b) && n <= Math.max(a, b); case 'notBetween': return !(n >= Math.min(a, b) && n <= Math.max(a, b));
    }
    return true;
  }
  function listOptions(src) {
    var g = parseRange(String(src || '').replace(/^.*!/, '').toUpperCase()), out = [];
    if (g && /^\$?[A-Z]+\$?\d+(:\$?[A-Z]+\$?\d+)?$/i.test(String(src).replace(/^.*!/, '').trim())) { for (var r = g.r1; r <= g.r2; r++) for (var c = g.c1; c <= g.c2; c++) { var t = displayText(r, c); if (t !== '') out.push(t); } }
    else out = String(src || '').split(',').map(function (s) { return s.trim(); }).filter(Boolean);
    return out;
  }
  function isValidValue(r, c) {
    var vr = normVr((styles[key(r, c)] || {}).vr); if (!vr || vr.type === 'any') return true;
    var v = cellValue(r, c), txt = displayText(r, c);
    if (v == null || v === '') return vr.ignoreEmpty !== false;
    if (isError(v)) return false;
    switch (vr.type) {
      case 'number':
        if (vr.op === 'contains' || vr.op === 'notContains') return typeof v === 'number' && textOp(vr.op, txt, vr.v1);
        if (typeof v !== 'number' || (vr.integer && !Number.isInteger(v))) return false;
        return numOp(vr.op, v, valNum(vr.v1), valNum(vr.v2));
      case 'date': return typeof v === 'number' && numOp(vr.op, Math.floor(v), valNum(vr.v1, 'date'), valNum(vr.v2, 'date'));
      case 'text': return textOp(vr.op, txt, vr.v1);
      case 'textLength': return numOp(vr.op, String(txt).length, valNum(vr.v1), valNum(vr.v2));
      case 'range': return listOptions(vr.v1).some(function (o) { return o.toLowerCase() === String(txt).toLowerCase(); });
    }
    return true;
  }
  // Webix alert: Information (Save), Warning (Restore / Save), Stop (Restore)
  function validationAlert(vr, onRestore, onKeep) {
    var bg = document.createElement('div'); bg.className = 'wx-alert-bg';
    var a = document.createElement('div'); a.className = 'wx-alert ' + (vr.handle || 'stop');
    var buttons = vr.handle === 'information' ? [['Save', 'pri', onKeep]] : vr.handle === 'warning' ? [['Restore', '', onRestore], ['Save', 'pri', onKeep]] : [['Restore', 'pri', onRestore]];
    a.innerHTML = '<div class="t">' + escapeHtml(vr.title || '') + '</div><div class="m">' + escapeHtml(vr.message || 'The value is not valid.') + '</div><div class="b"></div>';
    buttons.forEach(function (bt) { var b = document.createElement('button'); b.type = 'button'; b.className = 'wx-btn ' + bt[1]; b.textContent = bt[0]; b.onclick = function () { bg.remove(); a.remove(); bt[2](); editor.focus({ preventScroll: true }); }; a.querySelector('.b').appendChild(b); });
    document.body.append(bg, a); a.querySelector('button:last-child').focus();
  }
  function validationDialog() {
    if (readOnly) return; commitEdit();
    var cur = normVr((styles[key(act.r, act.c)] || {}).vr) || { type: 'any', handle: 'information' };
    var lw = 150;
    dialog('Add data validation',
      frow('Type', '<select class="wx-in" id="vt">' + opts(VAL_TYPES, cur.type) + '</select>', lw) +
      frow('Integers only', '<input type="checkbox" id="vint">', lw, false, 'v-int') +
      frow('Ignore empty', '<input type="checkbox" id="vie">', lw, false, 'v-adv') +
      frow('Condition', '<select class="wx-in" id="vop"></select>', lw, true, 'v-cond') +
      frow('Value', '<div class="vals2" style="width:100%"><input class="wx-in" id="v1" autocomplete="off"><input class="wx-in" id="v2" autocomplete="off"></div>', lw, true, 'v-val') +
      frow('Input message', '<textarea class="wx-ta" id="vin"></textarea>', lw) +
      frow('Error handle', '<select class="wx-in" id="vh">' + opts([['information', 'Information'], ['warning', 'Warning'], ['stop', 'Stop']], cur.handle || 'information') + '</select>', lw, false, 'v-adv') +
      frow('Error title', '<input class="wx-in" id="vtt" autocomplete="off">', lw, false, 'v-adv') +
      frow('Error message', '<textarea class="wx-ta" id="vm"></textarea>', lw, false, 'v-adv') +
      btns([['vc', 'Cancel'], ['vs', 'Save', 'sec']]), function (d, close) {
        var vt = d.querySelector('#vt'), vop = d.querySelector('#vop');
        d.querySelector('#vint').checked = !!cur.integer; d.querySelector('#vie').checked = !!cur.ignoreEmpty;
        d.querySelector('#v1').value = cur.v1 == null ? '' : cur.v1; d.querySelector('#v2').value = cur.v2 == null ? '' : cur.v2;
        d.querySelector('#vin').value = cur.input || ''; d.querySelector('#vtt').value = cur.title || ''; d.querySelector('#vm').value = cur.message || '';
        function show(cls, on) { Array.prototype.forEach.call(d.querySelectorAll('.' + cls), function (x) { x.style.display = on ? '' : 'none'; }); }
        function sync(first) {
          var t = vt.value, keep = first ? cur.op : vop.value;
          var list = valConds(t); vop.innerHTML = '<option value="" hidden></option>' + opts(list, keep);
          if (!list.some(function (o) { return o[0] === keep; })) vop.value = '';
          show('v-adv', t !== 'any'); show('v-int', t === 'number'); show('v-cond', list.length > 0); show('v-val', t !== 'any');
          var two = /etween/.test(vop.value); d.querySelector('#v2').style.display = two ? '' : 'none';
          d.querySelector('#v1').placeholder = t === 'number' || t === 'textLength' ? '123' : t === 'date' ? 'mm/dd/yyyy' : t === 'range' ? 'A1:A10' : '';
          d.querySelector('#v2').placeholder = d.querySelector('#v1').placeholder;
        }
        vt.onchange = function () { sync(false); }; vop.onchange = function () { sync(false); }; sync(true);
        d.querySelector('#vc').onclick = close;
        d.querySelector('#vs').onclick = function () {
          var t = vt.value;
          if (t === 'any') { var msg = d.querySelector('#vin').value; close(); applyStyle({ vr: msg ? { type: 'any', input: msg } : null }); return; }
          var rule = { type: t, integer: t === 'number' && d.querySelector('#vint').checked, ignoreEmpty: d.querySelector('#vie').checked, op: vop.value,
            v1: d.querySelector('#v1').value.trim(), v2: d.querySelector('#v2').value.trim(), input: d.querySelector('#vin').value,
            handle: d.querySelector('#vh').value, title: d.querySelector('#vtt').value, message: d.querySelector('#vm').value };
          if (t !== 'range' && !rule.op) { vop.focus(); vop.style.borderBottomColor = '#ff5c4c'; return; }
          if (!rule.v1) { d.querySelector('#v1').focus(); d.querySelector('#v1').style.borderBottomColor = '#ff5c4c'; return; }
          if (t === 'range') delete rule.op;
          close(); applyStyle({ vr: rule });
        };
      }, 450);
  }
  function removeValidation() { applyStyle({ vr: null }); }
  function setHighlightInvalid(on) { highlightInvalid = on; renderCells(); schedulePost(); }

  // ---------- Find and Replace
  function findDialog() {
    if (readOnly) return; commitEdit();
    var lw = 110, body =
      '<div style="display:flex;gap:24px"><div style="flex:1">' + frow('Find what:', '<input class="wx-in" id="fw" autocomplete="off">', lw) + frow('Replace with:', '<input class="wx-in" id="rw" autocomplete="off">', lw) + '</div>' +
      '<div style="flex:1">' + frow('Within:', '<select class="wx-in" id="fwi"><option value="sheet">Sheet</option></select>', 140) + frow('Look in', '<select class="wx-in" id="flk"><option value="formulas">Formulas</option><option value="values">Values</option></select>', 140) +
      frow('Match case', '<input type="checkbox" id="fcase">', 140) + frow('Match entire cell cont…', '<input type="checkbox" id="fwhole">', 140) + '</div></div>' +
      '<div style="margin-top:10px;height:120px;overflow:auto;border-bottom:1px solid #edeff0"><table class="wx-table"><thead><tr><th>Sheet</th><th>Cell</th><th>Value</th><th>Formula</th></tr></thead><tbody id="fres"></tbody></table></div>' +
      btns([['fclose', 'Cancel'], ['frall', 'Replace all', 'sec'], ['fr', 'Replace', 'sec'], ['fall', 'Find all', 'sec'], ['fnext', 'Find next', 'sec']]);
    dialog('Find and Replace', body, function (d, close) {
      var fw = d.querySelector('#fw'), rw = d.querySelector('#rw'), res = d.querySelector('#fres');
      function o() { return { q: fw.value, cs: d.querySelector('#fcase').checked, whole: d.querySelector('#fwhole').checked, form: d.querySelector('#flk').value === 'formulas' }; }
      function textOf(r, c, x) { var raw = getRaw(r, c); return x.form && raw !== '' ? raw : displayText(r, c); }
      function hit(r, c, x) { var t = textOf(r, c, x), q = x.q; if (!q || t === '') return false; if (!x.cs) { t = t.toLowerCase(); q = q.toLowerCase(); } return x.whole ? t === q : t.indexOf(q) >= 0; }
      function next() {
        var x = o(); if (!x.q) { fw.focus(); return false; }
        var start = act.r * COLS + act.c, total = ROWS * COLS;
        for (var k = 1; k <= total; k++) { var idx = (start + k) % total, r = Math.floor(idx / COLS), c = idx % COLS; if (isRowHidden(r) || hiddenCols[c]) continue; if (hit(r, c, x)) { setSelection(r, c, r, c); scrollIntoViewCell(r, c); return true; } }
        flash('Nothing was found'); return false;
      }
      function findAll() {
        var x = o(); res.innerHTML = ''; if (!x.q) return;
        for (var r = 0; r < ROWS; r++) for (var c = 0; c < COLS; c++) if (hit(r, c, x)) {
          var tr = document.createElement('tr'); var raw = getRaw(r, c);
          tr.innerHTML = '<td>Sheet1</td><td>' + a1(r, c) + '</td><td>' + escapeHtml(displayText(r, c)) + '</td><td>' + (raw[0] === '=' ? escapeHtml(raw) : '') + '</td>';
          (function (rr, cc) { tr.onclick = function () { Array.prototype.forEach.call(res.rows, function (x2) { x2.classList.remove('on'); }); tr.classList.add('on'); setSelection(rr, cc, rr, cc); scrollIntoViewCell(rr, cc); }; })(r, c);
          res.appendChild(tr);
        }
        if (!res.rows.length) flash('Nothing was found');
      }
      function replaceIn(r, c, x) {
        var raw = getRaw(r, c); if (isLocked(r, c)) return false;
        var re = new RegExp(x.q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), x.cs ? 'g' : 'gi');
        var out = x.whole ? rw.value : raw.replace(re, rw.value);
        if (out === raw) return false; setRawNoRender(r, c, out); return true;
      }
      d.querySelector('#fnext').onclick = next; d.querySelector('#fall').onclick = findAll;
      fw.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); next(); } });
      d.querySelector('#fr').onclick = function () { var x = o(); if (!x.q) return; if (hit(act.r, act.c, x)) { beginChange(); if (replaceIn(act.r, act.c, x)) endChange(false); else undoStack.pop(); } next(); };
      d.querySelector('#frall').onclick = function () {
        var x = o(); if (!x.q) return; beginChange();
        var hits = []; for (var r = 0; r < ROWS; r++) for (var c = 0; c < COLS; c++) if (hit(r, c, x)) hits.push([r, c]);
        var n = 0; hf.batch(function () { hits.forEach(function (h) { if (replaceIn(h[0], h[1], x)) n++; }); });
        if (n) endChange(false); else undoStack.pop();
        flash(n ? n + ' cell' + (n === 1 ? ' was' : 's were') + ' replaced' : 'Nothing was found');
      };
      d.querySelector('#fclose').onclick = close;
    }, 700);
  }

  // ---------- Resize row / column
  function resizeDialog(isRow) {
    if (readOnly) return; commitEdit();
    var g = norm(sel), idx = isRow ? g.r1 : g.c1, cur = isRow ? (rowH[idx] || DEF_H) : (colW[idx] || DEF_W);
    dialog(isRow ? 'Resize row' : 'Resize column', frow(isRow ? 'Row height' : 'Column width', '<input class="wx-in" id="rsz" autocomplete="off">', 130) + btns([['rszc', 'Cancel'], ['rszs', 'Save', 'sec']]), function (d, close) {
      var inp = d.querySelector('#rsz'); inp.value = cur; inp.select();
      function save() { var n = Math.round(Math.max(isRow ? 16 : 20, Math.min(800, +inp.value || cur))); close(); beginChange(); for (var i = (isRow ? g.r1 : g.c1); i <= (isRow ? g.r2 : g.c2); i++) { if (isRow) rowH[i] = n; else colW[i] = n; } endChange(true); }
      inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') save(); });
      d.querySelector('#rszc').onclick = close; d.querySelector('#rszs').onclick = save;
    }, 320);
  }

  // ---------- double-click a header border: fit the column width / row height to the contents (NESA)
  function autofit(isCol, idx) {
    if (readOnly) return; commitEdit();
    if (isCol) {
      var w = 0;
      for (var r = 0; r < ROWS; r++) {
        if (mergeAt(r, idx) && (mergeAt(r, idx).c1 !== mergeAt(r, idx).c2)) continue;
        var t = displayText(r, idx); if (t === '') continue;
        var st = styles[key(r, idx)] || {};
        w = Math.max(w, textWidth(t, (st.b ? '700 ' : '') + (st.i ? 'italic ' : '') + (st.fs || parseInt(getComputedStyle(grid).fontSize, 10) || 16) + 'px Roboto, sans-serif') + 35 + (st.dd ? 16 : 0) + (st.indent ? st.indent * 14 : 0));
      }
      beginChange(); colW[idx] = Math.max(40, Math.ceil(w || DEF_W)); endChange(true);
    } else {
      var h = DEF_H, probe = document.createElement('div');
      probe.style.cssText = 'position:absolute;left:-9999px;top:0;visibility:hidden;white-space:pre-wrap;word-break:break-word;line-height:1.25;font-family:Roboto,sans-serif';
      document.body.appendChild(probe);
      for (var c = 0; c < COLS; c++) {
        var s2 = styles[key(idx, c)] || {}, tx = displayText(idx, c); if (!tx || !s2.wrap) continue;
        probe.style.width = ((colW[c] || DEF_W) - 24) + 'px'; probe.style.fontSize = (s2.fs || 16) + 'px'; probe.textContent = tx;
        h = Math.max(h, probe.offsetHeight + 12);
      }
      probe.remove(); beginChange(); rowH[idx] = h; endChange(true);
    }
  }
  grid.addEventListener('dblclick', function (e) {
    var rz = e.target.closest('.col-resizer, .row-resizer');
    if (rz) { e.preventDefault(); e.stopPropagation(); var isCol = rz.classList.contains('col-resizer'); autofit(isCol, +rz.getAttribute(isCol ? 'data-c' : 'data-r')); return; }
    var cell = cellFromEvent(e); if (!cell || readOnly) return;
    setSelection(cell.r, cell.c, cell.r, cell.c);
    if ((styles[key(cell.r, cell.c)] || {}).dd) openDropdownList(cell.r, cell.c); else beginEdit(false);
  });

  // ---------- Named ranges
  function namedRangesDialog() {
    if (readOnly) return; commitEdit();
    var g = norm(sel);
    var body = '<div style="display:flex;gap:16px"><div style="flex:0 0 400px;height:170px;overflow:auto;border-bottom:1px solid #edeff0"><table class="wx-table"><thead><tr><th style="width:105px">Name</th><th style="width:130px">Range</th><th>Scope</th><th style="width:28px"></th><th style="width:28px"></th></tr></thead><tbody id="nlist"></tbody></table></div>' +
      '<div style="flex:1">' + frow('Name', '<input class="wx-in" id="nname" autocomplete="off">', 80) + frow('Range', '<input class="wx-in" id="nrange" autocomplete="off">', 80) + frow('Scope', '<select class="wx-in" id="nscope"><option value="book">Book</option><option value="sheet">Sheet1</option></select>', 80) + '</div></div>' +
      btns([['nclose', 'Cancel'], ['nsave', 'Save', 'sec']]);
    dialog('Named ranges', body, function (d, close) {
      var editingName = null;
      d.querySelector('#nrange').value = 'Sheet1!' + rangeStr(g);
      function list() {
        var tb2 = d.querySelector('#nlist'); tb2.innerHTML = '';
        Object.keys(named).forEach(function (n) {
          var tr = document.createElement('tr');
          tr.innerHTML = '<td>' + escapeHtml(n) + '</td><td>Sheet1!' + escapeHtml(named[n]) + '</td><td>Book</td><td class="ed" style="cursor:pointer;color:#94a1b3"><i class="fas fa-pen"></i></td><td class="del" style="cursor:pointer;color:#94a1b3"><i class="fas fa-trash"></i></td>';
          tr.querySelector('.ed').onclick = function () { editingName = n; d.querySelector('#nname').value = n; d.querySelector('#nrange').value = 'Sheet1!' + named[n]; };
          tr.querySelector('.del').onclick = function () { beginChange(); delete named[n]; syncNamed(); endChange(false); list(); };
          tb2.appendChild(tr);
        });
      }
      list();
      d.querySelector('#nclose').onclick = close;
      d.querySelector('#nsave').onclick = function () {
        var n = d.querySelector('#nname').value.trim(), rg = parseRange(d.querySelector('#nrange').value.replace(/^.*!/, '').toUpperCase());
        if (!/^[A-Za-z_][A-Za-z0-9_.]*$/.test(n) || parseA1(n)) { d.querySelector('#nname').style.borderBottomColor = '#ff5c4c'; d.querySelector('#nname').focus(); return; }
        if (!rg) { d.querySelector('#nrange').style.borderBottomColor = '#ff5c4c'; d.querySelector('#nrange').focus(); return; }
        beginChange(); if (editingName && editingName !== n) delete named[editingName]; named[n] = rangeStr(rg); syncNamed(); endChange(false); close();
      };
    }, 700);
  }

  // ---------- Conditional Format (Display / Condition / Value rows)
  function condDialog() {
    if (readOnly) return; commitEdit();
    var g = norm(sel), range = rangeStr(g);
    var existing = conds.filter(function (r) { var rg = parseRange(r.range); return rg && overlaps(rg, g); });
    var OPS = [['Common', null], ['greater', '>'], ['less', '<'], ['greater or equal', '>='], ['less or equal', '<='], ['equal', '='], ['not equal', '!='], ['between', 'between'], ['not between', 'notbetween'],
      ['Text', null], ['contains', 'contains'], ['not contains', 'notcontains'], ['begins with', 'begins'], ['not begins with', 'notbegins'], ['ends with', 'ends'], ['not ends with', 'notends']];
    function opHtml(cur) { var h = '<option value="" hidden>Operator</option>', open = false; OPS.forEach(function (o) { if (o[1] === null) { h += (open ? '</optgroup>' : '') + '<optgroup label="' + o[0] + '">'; open = true; } else h += '<option value="' + o[1] + '"' + (o[1] === cur ? ' selected' : '') + '>' + o[0] + '</option>'; }); return h + '</optgroup>'; }
    var body = '<div class="cf-grid"><div class="h">Display</div><div class="h">Condition</div><div class="h">Value</div><div class="h cf-ic" id="cfadd" title="Add"><i class="fas fa-plus-circle"></i></div><div class="cf-rows" id="cfrows"></div></div>' + btns([['cfc', 'Cancel'], ['cfs', 'Save', 'sec']]);
    dialog('Conditional Format', body, function (d, close) {
      var rowsEl = d.querySelector('#cfrows');
      function addRow(rule) {
        rule = rule || {};
        var st = typeof rule.style === 'string' ? rule.style : '';
        var wrap2 = document.createElement('div'); wrap2.style.display = 'contents';
        wrap2.innerHTML = '<select class="wx-in cf-st"><option value="" hidden>Style</option>' + ['normal', 'neutral', 'bad', 'good'].map(function (s) { return '<option value="' + s + '"' + (s === st ? ' selected' : '') + '>' + s + '</option>'; }).join('') + '</select>' +
          '<select class="wx-in cf-op">' + opHtml(rule.op) + '</select><div class="vals2"><input class="wx-in cf-v1" autocomplete="off"><input class="wx-in cf-v2" autocomplete="off"></div><div class="cf-ic cf-del" title="Delete"><i class="fas fa-trash"></i></div>';
        var s = wrap2.querySelector('.cf-st'), op = wrap2.querySelector('.cf-op'), v2 = wrap2.querySelector('.cf-v2');
        wrap2.querySelector('.cf-v1').value = rule.v1 == null ? '' : rule.v1; v2.value = rule.v2 == null ? '' : rule.v2;
        function sync() { v2.style.display = /between/.test(op.value) ? '' : 'none'; s.className = 'wx-in cf-st st-' + s.value; }
        s.onchange = sync; op.onchange = sync; sync();
        wrap2.querySelector('.cf-del').onclick = function () { wrap2.remove(); };
        rowsEl.appendChild(wrap2);
      }
      existing.forEach(addRow); for (var i = existing.length; i < 3; i++) addRow();
      d.querySelector('#cfadd').onclick = function () { addRow(); };
      d.querySelector('#cfc').onclick = close;
      d.querySelector('#cfs').onclick = function () {
        beginChange();
        conds = conds.filter(function (r) { return existing.indexOf(r) < 0; });
        Array.prototype.forEach.call(rowsEl.children, function (w) {
          var st = w.querySelector('.cf-st').value, op = w.querySelector('.cf-op').value; if (!st || !op) return;
          conds.push({ range: range, style: st, op: op, v1: w.querySelector('.cf-v1').value, v2: w.querySelector('.cf-v2').value });
        });
        endChange(false); close();
      };
    }, 610);
  }

  // ---------- Set format (Currency / Number / Percent / Date / Custom)
  function customFormatDialog() {
    if (readOnly) return; commitEdit();
    var st0 = styles[key(act.r, act.c)] || {}, f = { fmt: /^(currency|number|percent|date|custom)$/.test(st0.fmt) ? st0.fmt : 'currency', dec: st0.dec, group: st0.group, cur: st0.cur || '$', neg: st0.neg || 1, datePattern: st0.datePattern || 'date', pattern: st0.pattern || '' };
    var cell = cellValue(act.r, act.c);
    var body = '<div style="display:flex;min-height:300px"><div class="wx-side" id="sfl">' + [['currency', 'Currency'], ['number', 'Number'], ['percent', 'Percent'], ['date', 'Date'], ['custom', 'Custom']].map(function (x) { return '<div class="wi" data-f="' + x[0] + '">' + x[1] + '</div>'; }).join('') + '</div><div style="flex:1;padding-left:20px" id="sfp"></div></div>' + btns([['sfc', 'Cancel'], ['sfs', 'Save', 'sec']]);
    dialog('Set format', body, function (d, close) {
      var panel = d.querySelector('#sfp');
      function sample() { return f.fmt === 'date' ? (typeof cell === 'number' ? cell : 45000.5) : (typeof cell === 'number' ? cell : 1234.567); }
      function preview() { var st = { fmt: f.fmt, dec: f.dec, group: f.group, cur: f.cur, neg: f.neg, datePattern: f.datePattern, pattern: f.pattern }; var v = sample(); return '<span style="color:' + (negRed(v, st) ? '#ff0000' : 'inherit') + '">' + escapeHtml(fmtNumber(v, st)) + '</span>'; }
      function draw() {
        Array.prototype.forEach.call(d.querySelectorAll('#sfl .wi'), function (x) { x.classList.toggle('on', x.getAttribute('data-f') === f.fmt); });
        var defDec = f.fmt === 'percent' ? 0 : 2, dec = f.dec == null ? defDec : f.dec, h = '<div class="fmt-prev" id="sfprev"></div>';
        if (/currency|number|percent/.test(f.fmt)) {
          h += frow('Decimal places', '<span class="wx-counter"><button type="button" id="dm">−</button><input id="dv" value="' + dec + '"><button type="button" id="dp">+</button></span>', 120);
          if (f.fmt !== 'percent') h += frow('Group separator', '<input type="checkbox" id="gs"' + (f.group !== false ? ' checked' : '') + '>', 120);
          if (f.fmt === 'currency') h += frow('Currency', '<select class="wx-in" id="cu">' + opts([['$', '$'], ['€', '€'], ['¥', '¥'], ['R$', 'R$'], ['rub.', 'rub.']], f.cur) + '</select>', 120);
          h += '<div class="frow" style="align-items:flex-start"><span class="fl" style="width:120px;padding-top:6px">Negative number</span><div class="fc"><div class="neg-list" id="nl" style="width:100%"></div></div></div>';
        } else if (f.fmt === 'date') {
          h += '<div class="frow" style="align-items:flex-start"><span class="fl" style="width:120px;padding-top:6px">Date format</span><div class="fc"><div class="neg-list" id="dfl" style="width:100%">' + [['date', 'mm/dd/yyyy'], ['time', 'hh:mm AM/PM'], ['datetime', 'mm/dd/yyyy hh:mm AM/PM'], ['long', 'dd mmmm yyyy']].map(function (x) { return '<div class="wi" data-p="' + x[0] + '" style="text-align:left">' + x[1] + '</div>'; }).join('') + '</div></div></div>';
        } else {
          h += '<div style="font-weight:500;margin-top:4px">Format pattern</div><input class="wx-in" id="cp" autocomplete="off"><div style="margin-top:10px"><span class="wx-link" id="cphelp">How to create a format</span></div>';
        }
        panel.innerHTML = h;
        function upd() { d.querySelector('#sfprev').innerHTML = preview(); }
        var dv = panel.querySelector('#dv');
        if (dv) {
          function setDec(n) { f.dec = Math.max(0, Math.min(10, n)); dv.value = f.dec; upd(); drawNeg(); }
          panel.querySelector('#dm').onclick = function () { setDec((+dv.value || 0) - 1); };
          panel.querySelector('#dp').onclick = function () { setDec((+dv.value || 0) + 1); };
          dv.onchange = function () { setDec(+dv.value || 0); };
          var gs = panel.querySelector('#gs'); if (gs) gs.onchange = function () { f.group = gs.checked; upd(); drawNeg(); };
          var cu = panel.querySelector('#cu'); if (cu) cu.onchange = function () { f.cur = cu.value; upd(); drawNeg(); };
          var drawNeg = function () {
            var nl = panel.querySelector('#nl'); nl.innerHTML = '';
            [1, 2, 3, 4].forEach(function (n) {
              var st = { fmt: f.fmt, dec: f.dec, group: f.group, cur: f.cur, neg: n };
              var it = document.createElement('div'); it.className = 'wi' + (f.neg === n ? ' on' : ''); it.textContent = fmtNumber(-1234.567, st); if (n > 1) it.style.color = '#ff0000';
              it.onclick = function () { f.neg = n; drawNeg(); upd(); }; nl.appendChild(it);
            });
          };
          drawNeg();
        }
        var dfl = panel.querySelector('#dfl');
        if (dfl) Array.prototype.forEach.call(dfl.children, function (it) { it.classList.toggle('on', it.getAttribute('data-p') === f.datePattern); it.onclick = function () { f.datePattern = it.getAttribute('data-p'); draw(); }; });
        var cp = panel.querySelector('#cp');
        if (cp) { cp.value = f.pattern || (f.datePattern ? 'mm/dd/yyyy' : '#,##0.00'); f.pattern = cp.value; cp.oninput = function () { f.pattern = cp.value; upd(); }; panel.querySelector('#cphelp').onclick = function () { flash('0 = digit, # = optional digit, , = thousands, . = decimals, % = percent; mm/dd/yyyy for dates'); }; }
        upd();
      }
      Array.prototype.forEach.call(d.querySelectorAll('#sfl .wi'), function (x) { x.onclick = function () { f.fmt = x.getAttribute('data-f'); if (f.fmt !== 'custom') f.pattern = ''; draw(); }; });
      draw();
      d.querySelector('#sfc').onclick = function () { close(); updateToolbarState(); };
      d.querySelector('#sfs').onclick = function () {
        close();
        var patch = { fmt: f.fmt, dec: f.fmt === 'date' || f.fmt === 'custom' ? null : (f.dec == null ? null : f.dec), group: f.fmt === 'currency' || f.fmt === 'number' ? (f.group === false ? false : null) : null,
          cur: f.fmt === 'currency' && f.cur !== '$' ? f.cur : null, neg: /currency|number|percent/.test(f.fmt) && f.neg > 1 ? f.neg : null,
          datePattern: f.fmt === 'date' && f.datePattern !== 'date' ? f.datePattern : null, pattern: f.fmt === 'custom' ? f.pattern : null };
        applyStyle(patch);
      };
    }, 400);
  }

  // ---------- sparkline ("Graph › Add to cell")
  function sparklineDialog() {
    if (readOnly) return; commitEdit();
    var target = { r: act.r, c: act.c };
    var cur = parseSparkline(raws[key(target.r, target.c)]) || { type: 'line', range: '', color: '#6666FF', neg: '#FF6666' };
    var lw = 90;
    var body = frow('Type', '<select class="wx-in" id="spt">' + opts([['line', 'Line'], ['spline', 'Spline'], ['splineArea', 'Spline Area'], ['area', 'Area'], ['bar', 'Bar'], ['radar', 'Radar'], ['pie', 'Pie'], ['donut', 'Donut']], cur.type) + '</select>', lw) +
      frow('Range', '<input class="wx-in" id="spr" autocomplete="off">', lw) +
      frow('Color', '<input class="wx-in" id="spc"><span class="wx-swatch" id="spcs"></span>', lw, false, 'sp-col') +
      frow('Positive', '<input class="wx-in" id="spp"><span class="wx-swatch" id="spps"></span>', lw, false, 'sp-bar') +
      frow('Negative', '<input class="wx-in" id="spn"><span class="wx-swatch" id="spns"></span>', lw, false, 'sp-bar') +
      frow('Horizontal', '<input type="checkbox" id="sph">', lw, false, 'sp-bar') +
      '<div id="spprev" style="height:60px;display:flex;align-items:center;justify-content:center"></div>' + btns([['spx', 'Cancel'], ['sps', 'Save', 'sec']]);
    dialog('Add sparkline', body, function (d, close) {
      var t = d.querySelector('#spt'), rg = d.querySelector('#spr');
      d.querySelector('#spc').value = cur.color; d.querySelector('#spp').value = cur.color; d.querySelector('#spn').value = cur.neg || '#FF6666'; rg.value = cur.range;
      function swatch(inp, sw) { sw.style.background = inp.value; sw.onclick = function () { var b = sw.getBoundingClientRect(); var p = openPop('spcol', 'menu popup', ''); p.appendChild(colorBoard(inp.value, function (c) { inp.value = c.toUpperCase(); closePop('spcol'); sync(); })); p.style.left = (b.left - 200) + 'px'; p.style.top = b.bottom + 'px'; p._owner = sw; }; inp.oninput = function () { sync(); }; }
      function formula() { var g = parseRange(rg.value.toUpperCase()); if (!g) return null; var bar = t.value === 'bar'; return '=SPARKLINE(' + rangeStr(g) + ',"' + t.value + '","' + (bar ? d.querySelector('#spp').value : d.querySelector('#spc').value) + '"' + (bar ? ',"' + d.querySelector('#spn').value + '"' : '') + ')'; }
      function sync() {
        var bar = t.value === 'bar', pie = /pie|donut/.test(t.value);
        Array.prototype.forEach.call(d.querySelectorAll('.sp-bar'), function (x) { x.style.display = bar ? '' : 'none'; });
        Array.prototype.forEach.call(d.querySelectorAll('.sp-col'), function (x) { x.style.display = bar || pie ? 'none' : ''; });
        ['spc', 'spp', 'spn'].forEach(function (id) { d.querySelector('#' + id + 's').style.background = d.querySelector('#' + id).value; });
        var f2 = formula(); d.querySelector('#spprev').innerHTML = f2 ? sparklineSvg(f2, { offsetWidth: 220, offsetHeight: 56 }) : '';
      }
      swatch(d.querySelector('#spc'), d.querySelector('#spcs')); swatch(d.querySelector('#spp'), d.querySelector('#spps')); swatch(d.querySelector('#spn'), d.querySelector('#spns'));
      t.onchange = sync; rg.oninput = sync; sync();
      d.querySelector('#spx').onclick = close;
      d.querySelector('#sps').onclick = function () {
        var f2 = formula(); if (!f2) { rg.style.borderBottomColor = '#ff5c4c'; rg.focus(); return; }
        close(); beginChange(); setRawNoRender(target.r, target.c, f2); endChange(false);
      };
    }, 308);
  }

  // ---------- filters: a filter on each chosen header cell (NESA puts it only on the selected cells)
  var F_NUM = [['greater', 'greater'], ['less', 'less'], ['greaterOrEqual', 'greater or equal'], ['lessOrEqual', 'less or equal'], ['equal', 'equal'], ['notEqual', 'not equal'], ['contains', 'contains'], ['notContains', 'not contains']];
  function filterCells() {
    if (!filter) return {};
    if (!filter.cells && filter.range) {   // older saves: one filter range with value lists
      var g = parseRange(filter.range), cells = {};
      if (g) for (var c = g.c1; c <= g.c2; c++) { var cr = filter.crit && filter.crit[c]; cells[key(g.r1, c)] = Array.isArray(cr) ? { values: cr } : {}; }
      filter = { cells: cells };
    }
    return filter.cells || {};
  }
  function filterDataRows(fr, fc) { var r = fr + 1, out = []; while (r < ROWS && getRaw(r, fc) !== '') { out.push(r); r++; } return out; }
  function filterPasses(f, r, c) {
    var v = cellValue(r, c), txt = displayText(r, c);
    if (f.values && f.values.indexOf(txt) < 0) return false;
    if (f.op && f.v != null && f.v !== '') {
      if (/^(greater|less|greaterOrEqual|lessOrEqual)$/.test(f.op) || ((f.op === 'equal' || f.op === 'notEqual') && typeof v === 'number' && !isNaN(+f.v))) return typeof v === 'number' && numOp(f.op, v, +f.v);
      return textOp(f.op, txt, f.v);
    }
    return true;
  }
  function rowHiddenByFilter(r) {
    var cells = filterCells();
    return Object.keys(cells).some(function (k) {
      var p = k.split(','), fr = +p[0], fc = +p[1], f = cells[k];
      if (r <= fr || (!f.values && !(f.op && f.v))) return false;
      if (filterDataRows(fr, fc).indexOf(r) < 0) return false;
      return !filterPasses(f, r, fc);
    });
  }
  function toggleFilter() {
    if (readOnly) return; commitEdit(); beginChange();
    if (Object.keys(filterCells()).length) { filter = null; endChange(false); return; }
    var g = norm(sel), cells = {};
    for (var c = g.c1; c <= Math.min(g.c2, COLS - 1); c++) cells[key(g.r1, c)] = {};
    filter = { cells: cells };
    endChange(false);
  }
  function openFilterMenu(fr, fc, btn) {
    var f = filterCells()[key(fr, fc)] || {}, rows = filterDataRows(fr, fc), vals = [], allNum = rows.length > 0;
    rows.forEach(function (r) { var t = displayText(r, fc); if (vals.indexOf(t) < 0) vals.push(t); if (typeof cellValue(r, fc) !== 'number') allNum = false; });
    vals.sort(function (a, b) { return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }); });
    var conds2 = allNum ? F_NUM : C_TEXT, op = f.op || conds2[0][0];
    var html = '<div class="flt-cond"><select class="wx-in" id="fop">' + opts(conds2, op) + '</select><input id="fv" autocomplete="off"></div>' +
      (vals.length ? '<button type="button" class="wx-btn toggle" id="ftog"></button><div class="flt-list" id="flist">' + vals.map(function (v, i) { return '<label><input type="checkbox" data-i="' + i + '"' + (!f.values || f.values.indexOf(v) >= 0 ? ' checked' : '') + '>' + (v === '' ? '&nbsp;' : escapeHtml(v)) + '</label>'; }).join('') + '</div>' : '') +
      btns([['fcan', 'Cancel'], ['fapp', 'Apply', 'sec']]);
    var p = openPop('filter', 'flt-pop', html); p._owner = btn;
    var b = tds[fr][fc].getBoundingClientRect();
    p.style.left = Math.min(b.right - 20, window.innerWidth - 320) + 'px'; p.style.top = Math.max(2, b.top - 20) + 'px';
    p.querySelector('#fv').value = f.v == null ? '' : f.v;
    var tog = p.querySelector('#ftog');
    function boxes() { return Array.prototype.slice.call(p.querySelectorAll('#flist input')); }
    function syncTog() { if (!tog) return; var all = boxes().every(function (x) { return x.checked; }); tog.textContent = all ? 'Unselect all' : 'Select all'; tog.classList.toggle('on', all); }
    if (tog) { tog.onclick = function () { var all = boxes().every(function (x) { return x.checked; }); boxes().forEach(function (x) { x.checked = !all; }); syncTog(); }; p.querySelector('#flist').onchange = syncTog; syncTog(); }
    p.querySelector('#fcan').onclick = function () { closePop('filter'); };
    p.querySelector('#fapp').onclick = function () {
      var nf = { op: p.querySelector('#fop').value, v: p.querySelector('#fv').value };
      if (tog) { var on = boxes().filter(function (x) { return x.checked; }).map(function (x) { return vals[+x.getAttribute('data-i')]; }); if (on.length < vals.length) nf.values = on; }
      if (!nf.v) { delete nf.v; }
      closePop('filter'); beginChange(); filterCells()[key(fr, fc)] = nf; endChange(true);
    };
  }

  // ---------- sorting a range, and the Custom Sort dialog
  function sortRows(g, keys) {
    var rows = [];
    for (var r = g.r1; r <= g.r2; r++) { var row = { src: r, k: keys.map(function (k) { return cellValue(r, k.c); }), cells: [] }; for (var c = g.c1; c <= g.c2; c++) row.cells.push({ raw: getRaw(r, c), st: styles[key(r, c)] }); rows.push(row); }
    rows.sort(function (a, b) {
      for (var i = 0; i < keys.length; i++) {
        var x = a.k[i], y = b.k[i], ex = x == null || x === '', ey = y == null || y === '';
        if (ex && ey) continue; if (ex) return 1; if (ey) return -1;
        var res = (typeof x === 'number' && typeof y === 'number') ? x - y : String(x).localeCompare(String(y), undefined, { numeric: true, sensitivity: 'base' });
        if (res) return keys[i].desc ? -res : res;
      }
      return a.src - b.src;
    });
    hf.batch(function () { rows.forEach(function (row, i) { row.cells.forEach(function (cell, j) { var r = g.r1 + i, c = g.c1 + j; setRawNoRender(r, c, shiftFormula(cell.raw, r - row.src, 0)); if (cell.st) styles[key(r, c)] = cell.st; else delete styles[key(r, c)]; }); }); });
  }
  function sortSelection(desc) {
    if (readOnly) return; commitEdit();
    var g = norm(sel); if (g.r1 === g.r2) return;
    beginChange(); sortRows(g, [{ c: g.c1 <= act.c && act.c <= g.c2 ? act.c : g.c1, desc: desc }]); endChange(false);
  }
  function customSortDialog() {
    if (readOnly) return; commitEdit();
    var g = norm(sel);
    var body = frow('Data has headers', '<input type="checkbox" id="csh">', 150) + '<div id="csrows"></div><div style="margin:6px 0 0"><button type="button" class="wx-btn sec" id="csadd">Add one more column</button></div>' + btns([['csc', 'Cancel'], ['css', 'Save', 'sec']]);
    dialog('Custom Sort', body, function (d, close) {
      var rowsEl = d.querySelector('#csrows'), hdr = d.querySelector('#csh');
      function colOpts(cur) { var h = ''; for (var c = g.c1; c <= g.c2; c++) { var name = hdr.checked && displayText(g.r1, c) !== '' ? displayText(g.r1, c) : 'Column ' + colName(c); h += '<option value="' + c + '"' + (c === cur ? ' selected' : '') + '>' + escapeHtml(name) + '</option>'; } return h; }
      var n = 0;
      function addRow() {
        var i = n++, row = document.createElement('div'); row.className = 'frow cs-row';
        row.innerHTML = '<span class="fl" style="width:70px">' + (rowsEl.children.length ? 'Then by' : 'Sort by') + '</span><div class="fc"><select class="wx-in cs-col" style="flex:0 0 150px">' + colOpts(g.c1 + Math.min(rowsEl.children.length, g.c2 - g.c1)) + '</select>' +
          '<label style="font-weight:400;display:flex;gap:4px;align-items:center"><input type="radio" name="csd' + i + '" value="asc" checked>A &gt; Z</label><label style="font-weight:400;display:flex;gap:4px;align-items:center"><input type="radio" name="csd' + i + '" value="desc">Z &gt; A</label><span class="cf-ic cs-del" style="color:#94a1b3;cursor:pointer;margin-left:auto"><i class="fas fa-trash"></i></span></div>';
        row.querySelector('.cs-del').onclick = function () { if (rowsEl.children.length > 1) row.remove(); };
        rowsEl.appendChild(row);
      }
      addRow();
      hdr.onchange = function () { Array.prototype.forEach.call(rowsEl.querySelectorAll('.cs-col'), function (s) { var v = +s.value; s.innerHTML = colOpts(v); }); };
      d.querySelector('#csadd').onclick = function () { if (rowsEl.children.length < g.c2 - g.c1 + 1) addRow(); };
      d.querySelector('#csc').onclick = close;
      d.querySelector('#css').onclick = function () {
        var keys = Array.prototype.map.call(rowsEl.children, function (row) { return { c: +row.querySelector('.cs-col').value, desc: row.querySelector('input[type=radio]:checked').value === 'desc' }; });
        var rg = { r1: g.r1 + (hdr.checked ? 1 : 0), c1: g.c1, r2: g.r2, c2: g.c2 };
        close(); if (rg.r1 > rg.r2) return;
        beginChange(); sortRows(rg, keys); endChange(false);
      };
    }, 440);
  }

  // ------------------------------------------------------------------ host messages
  function applyConfig(d) {
    readOnly = !!d.readOnly;
    $('ss').classList.toggle('readonly', readOnly);
    fx.readOnly = readOnly;
    if (readOnly) { cancelEdit(); closeChartPanel(); closeMenu(); }
    document.documentElement.style.setProperty('--cell-font', Math.round(16 * (d.fontScale || 1)) + 'px');
    if (tds.length) buildGrid();
  }
  window.addEventListener('message', function (e) {
    var d = e.data; if (!d || d.source !== 'epc-host' || d.id !== embedId) return;
    if (d.type === 'config') applyConfig(d);
    else if (d.type === 'value') {
      cancelEdit(); closeChartPanel(); load(d.value); undoStack = []; redoStack = [];
      setSelection(0, 0, 0, 0); if (!readOnly) focusKeys();
      if (d.reset) changed = false;
    } else if (d.type === 'export') {
      var out;
      try { load(d.value); out = exportSnapshot(); } catch (err) { out = { html: '<p>Could not render the spreadsheet: ' + escapeHtml(err.message) + '</p>', formulas: [], charts: [] }; }
      post('exported', out, { reqId: d.reqId });
    }
  });
  window.addEventListener('resize', renderSelection);

  // ------------------------------------------------------------------ start
  if (!window.HyperFormula) {
    document.body.innerHTML = '<div style="padding:1.5rem;color:#b81237;font:15px Arial">The spreadsheet tool could not be loaded. Check your internet connection and reload the page.</div>';
    return;
  }
  newEngine();
  buildToolbar();
  buildGrid();
  setSelection(0, 0, 0, 0);
  post('loaded');
  window.__sheet = { serialize: serialize, load: load, getRaw: getRaw, cellValue: cellValue, exportSnapshot: exportSnapshot, select: setSelection,   // debugging aid
    open: { validation: validationDialog, dropdown: dropdownDialog, link: linkDialog, named: namedRangesDialog, cond: condDialog, find: findDialog, format: customFormatDialog, sparkline: sparklineDialog, sort: customSortDialog, resize: resizeDialog, comment: commentDialog, filter: toggleFilter } };
})();
