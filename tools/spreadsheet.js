/* Spreadsheet tool for the exam practice site.
 * Toolbar, grid, dialogs and behaviour modelled on the Webix SpreadSheet used in the NESA online exam;
 * calculations by HyperFormula (Excel-compatible), graphs by Chart.js.
 * postMessage protocol with the exam page:
 *   embed -> host: loaded | value(serialised sheet) | exported(report snapshot)
 *   host -> embed: config{readOnly,fontScale} | value{value,reset} | export{value,reqId}
 */
(function () {
  'use strict';
  var ROWS = 60, COLS = 26, DEF_W = 100, DEF_H = 28, MAX_UNDO = 80;
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
  function toEngine(v) {
    if (v === '' || v == null) return null;
    var s = String(v);
    if (isSparkline(s)) return null;
    var lk = parseLink(s); if (lk) return lk.text;
    if (s[0] === '=') return mapBooleans(s, true);
    if (/^\s*-?\$?\s*\d{1,3}(,\d{3})+(\.\d+)?\s*%?\s*$/.test(s) || /^\s*-?\$\s*[\d.]+\s*$/.test(s)) s = s.replace(/[\s,]/g, '');
    if (/^-?\$/.test(s)) s = s.replace('$', '');
    return s;
  }

  // ------------------------------------------------------------------ engine
  function newEngine() {
    hf = HyperFormula.buildEmpty({
      licenseKey: 'gpl-v3', dateFormats: ['DD/MM/YYYY', 'DD/MM/YY', 'YYYY-MM-DD', 'DD-MM-YYYY'], timeFormats: ['hh:mm', 'hh:mm:ss'],
      currencySymbol: ['$'], decimalSeparator: '.', thousandSeparator: '', functionArgSeparator: ',', precisionRounding: 10,
      smartRounding: true, leapYear1900: false, nullDate: { year: 1899, month: 12, day: 30 },
    });
    var name = hf.addSheet('Sheet1'); SHEET = hf.getSheetId(name);
  }
  function getRaw(r, c) {
    var k = key(r, c);
    try { if (hf.doesCellHaveFormula(addr(r, c))) return mapBooleans(hf.getCellFormula(addr(r, c)), false); } catch (e) { }
    return raws[k] == null ? '' : String(raws[k]);
  }
  function setRawNoRender(r, c, v) {
    var k = key(r, c);
    v = v == null ? '' : String(v);
    if (v === '') delete raws[k]; else raws[k] = v;
    try { hf.setCellContents(addr(r, c), [[toEngine(v)]]); } catch (e) { try { hf.setCellContents(addr(r, c), [[null]]); } catch (e2) { } }
    var st = styles[k] || {};
    if (!st.fmt && v && v[0] !== '=') {
      if (/^\s*-?[\d,]*\.?\d+\s*%\s*$/.test(v)) { st.fmt = 'percent'; if (/\./.test(v)) st.dec = (v.split('.')[1] || '').replace(/\D/g, '').length; styles[k] = st; }
      else if (/^\s*-?\$\s*[\d,]*\.?\d+\s*$/.test(v)) { st.fmt = 'currency'; styles[k] = st; }
      else if (/^\s*\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}\s*$|^\d{4}-\d{2}-\d{2}$/.test(v) && typeof cellValue(r, c) === 'number') { st.fmt = 'date'; styles[k] = st; }
    }
  }
  function cellValue(r, c) { try { return hf.getCellValue(addr(r, c)); } catch (e) { return null; } }
  function isError(v) { return v && typeof v === 'object' && 'value' in v && 'type' in v; }
  function syncNamed() {
    try { hf.listNamedExpressions().forEach(function (n) { hf.removeNamedExpression(n); }); } catch (e) { }
    Object.keys(named).forEach(function (n) { var g = parseRange(named[n]); if (g) try { hf.addNamedExpression(n, '=Sheet1!' + absRange(g)); } catch (e) { console.warn('name', n, e.message); } });
  }

  // ------------------------------------------------------------------ display formatting
  function serialToDate(n) {
    var d = new Date(Date.UTC(1899, 11, 30) + Math.round(n) * 86400000);
    return String(d.getUTCDate()).padStart(2, '0') + '/' + String(d.getUTCMonth() + 1).padStart(2, '0') + '/' + d.getUTCFullYear();
  }
  function fmtCustom(n, pattern) {
    var p = String(pattern || '0');
    var first = p.search(/[#0]/), last = Math.max(p.lastIndexOf('#'), p.lastIndexOf('0'));
    if (first < 0) return p + n;
    var prefix = p.slice(0, first), core = p.slice(first, last + 1), suffix = p.slice(last + 1);
    var pct = /%/.test(suffix) || /%/.test(prefix);
    var dec = (core.split('.')[1] || '').length, group = /,/.test(core);
    var v = pct ? n * 100 : n;
    var s = Math.abs(v).toLocaleString('en-AU', { minimumFractionDigits: dec, maximumFractionDigits: dec, useGrouping: group });
    return (v < 0 ? '-' : '') + prefix.replace(/"/g, '') + s + suffix.replace(/"/g, '');
  }
  function fmtNumber(n, st) {
    var fmt = st.fmt || 'common', dec = st.dec;
    if (fmt === 'text') return String(n);
    if (fmt === 'custom') return fmtCustom(n, st.pattern);
    if (fmt === 'percent') { dec = dec == null ? 0 : dec; return (n * 100).toFixed(dec) + '%'; }
    if (fmt === 'currency') { dec = dec == null ? 2 : dec; var s = Math.abs(n).toLocaleString('en-AU', { minimumFractionDigits: dec, maximumFractionDigits: dec }); return (n < 0 ? '-$' : '$') + s; }
    if (fmt === 'number') { dec = dec == null ? 2 : dec; return n.toLocaleString('en-AU', { minimumFractionDigits: dec, maximumFractionDigits: dec, useGrouping: st.group !== false }); }
    if (fmt === 'date') return serialToDate(n);
    if (dec != null) return n.toFixed(dec);
    return String(+n.toPrecision(10));
  }
  function displayOf(r, c) {
    var raw = raws[key(r, c)];
    if (isSparkline(raw)) return { text: '', spark: raw };
    var lk = parseLink(raw);
    if (lk) return showFormulas ? { text: raw, num: false } : { text: lk.text, link: lk.url, num: false };
    if (showFormulas) { var f = getRaw(r, c); if (f && f[0] === '=') return { text: f, num: false }; }
    var v = cellValue(r, c), st = styles[key(r, c)] || {};
    if (v == null || v === '') return { text: '', num: false };
    if (isError(v)) return { text: v.value || '#ERROR!', err: true, title: v.message };
    if (typeof v === 'number') return { text: fmtNumber(v, st), num: true };
    if (typeof v === 'boolean') return { text: v ? 'TRUE' : 'FALSE', num: false, bool: true };
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

  // ------------------------------------------------------------------ filter
  function rowHiddenByFilter(r) {
    if (!filter) return false;
    var g = parseRange(filter.range); if (!g || r <= g.r1 || r > g.r2) return false;
    return Object.keys(filter.crit || {}).some(function (c) {
      var allowed = filter.crit[c]; if (!allowed) return false;
      return allowed.indexOf(displayText(r, +c)) < 0;
    });
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
    s.color = (cs && cs.color) || st.color || '';
    s.background = (cs && cs.bg) || st.bg || '';
    s.textAlign = st.ha || (d.num || d.bool ? 'right' : (d.err ? 'center' : 'left'));
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
    if (filter) {
      var fg = parseRange(filter.range);
      if (fg && r === fg.r1 && c >= fg.c1 && c <= fg.c2) {
        var on = filter.crit && filter.crit[c];
        td.insertAdjacentHTML('beforeend', '<span class="ss-filter-btn' + (on ? ' on' : '') + '" data-fc="' + c + '"><i class="fas fa-' + (on ? 'filter' : 'caret-down') + '"></i></span>');
      }
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
    if (rc.y - 28 < wrap.scrollTop) wrap.scrollTop = rc.y - 28;
    else if (rc.y + rc.h > wrap.scrollTop + wrap.clientHeight) wrap.scrollTop = rc.y + rc.h - wrap.clientHeight;
  }

  // ------------------------------------------------------------------ sparklines (=SPARKLINE(range,"type","#colour"), as in Webix)
  function parseSparkline(raw) {
    var m = /^=\s*SPARKLINE\s*\(\s*([^,)]+)\s*(?:,\s*"?([A-Za-z]+)"?\s*)?(?:,\s*"?(#[0-9a-fA-F]{3,6})"?\s*)?\)/i.exec(raw || '');
    if (!m) return null;
    return { range: m[1], type: (m[2] || 'line').toLowerCase(), color: m[3] || '#6666FF' };
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
      var bw = W / vals.length;
      vals.forEach(function (v, i) { var y = H - (v - min) / span * H; svg += '<rect x="' + (i * bw + 1) + '" y="' + y + '" width="' + Math.max(1, bw - 2) + '" height="' + (H - y) + '" fill="' + col + '"/>'; });
    } else if (p.type === 'pie') {
      var tot = vals.reduce(function (a, b) { return a + Math.abs(b); }, 0) || 1, ang = -Math.PI / 2, cx = H / 2, cy = H / 2, rad = H / 2 - 1;
      var pal = [col, '#e1251b', '#00a650', '#ff9900', '#7030a0', '#00b0f0'];
      vals.forEach(function (v, i) { var a2 = ang + Math.abs(v) / tot * Math.PI * 2; var large = a2 - ang > Math.PI ? 1 : 0; svg += '<path d="M' + cx + ',' + cy + ' L' + (cx + rad * Math.cos(ang)) + ',' + (cy + rad * Math.sin(ang)) + ' A' + rad + ',' + rad + ' 0 ' + large + ' 1 ' + (cx + rad * Math.cos(a2)) + ',' + (cy + rad * Math.sin(a2)) + ' Z" fill="' + pal[i % pal.length] + '"/>'; ang = a2; });
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
    Object.keys(raws).forEach(function (k) {
      var v = raws[k], st = styles[k] || {};
      if (st.fmt || v[0] === '=') return;
      if (/^\s*-?[\d,]*\.?\d+\s*%\s*$/.test(v)) { st.fmt = 'percent'; styles[k] = st; }
      else if (/^\s*-?\$\s*[\d,]*\.?\d+\s*$/.test(v)) { st.fmt = 'currency'; styles[k] = st; }
    });
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
  }
  var drag = null;
  grid.addEventListener('mousedown', function (e) {
    if (e.button !== 0) return;
    var tog = e.target.closest('.grp-tog');
    if (tog) { e.preventDefault(); e.stopPropagation(); if (!readOnly) toggleGroup(tog.getAttribute('data-gk'), +tog.getAttribute('data-gi')); return; }
    var lnk = e.target.closest('a.ss-link');
    if (lnk && !editing) { e.preventDefault(); window.open(lnk.getAttribute('href'), '_blank', 'noopener'); }
    var fb = e.target.closest('.ss-filter-btn');
    if (fb) { e.preventDefault(); e.stopPropagation(); if (!readOnly) openFilterMenu(+fb.getAttribute('data-fc'), fb); return; }
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
    // dropdown cells: clicking the arrow area opens the list
    var st = styles[key(cell.r, cell.c)];
    if (st && st.dd && !readOnly) { var td = tds[cell.r][cell.c], b = td.getBoundingClientRect(); if (e.clientX > b.right - 22) { e.preventDefault(); openDropdownList(cell.r, cell.c); return; } }
    drag = { mode: 'select' };
    focusKeys();
    e.preventDefault();
  });
  grid.addEventListener('dblclick', function (e) { var cell = cellFromEvent(e); if (!cell || readOnly) return; setSelection(cell.r, cell.c, cell.r, cell.c); if ((styles[key(cell.r, cell.c)] || {}).dd) openDropdownList(cell.r, cell.c); else beginEdit(false); });
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
  grid.addEventListener('mouseover', function (e) {
    var cell = cellFromEvent(e), tip = $('tooltip');
    if (cell && comments[key(cell.r, cell.c)]) { tip.textContent = comments[key(cell.r, cell.c)]; tip.classList.remove('hidden'); var b = e.target.getBoundingClientRect(); tip.style.left = Math.min(b.right + 4, window.innerWidth - 270) + 'px'; tip.style.top = b.top + 'px'; }
    else tip.classList.add('hidden');
  });
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
    var start = isCol ? e.clientX : e.clientY, orig = isCol ? (colW[idx] || DEF_W) : (rowH[idx] || DEF_H), snap = snapshot();
    function mv(ev) {
      var n = Math.max(isCol ? 24 : 18, orig + (isCol ? ev.clientX : ev.clientY) - start);
      if (isCol) { colW[idx] = n; grid.querySelector('colgroup').children[idx + 1].style.width = n + 'px'; var w = 40; for (var c = 0; c < COLS; c++) w += (colW[c] || DEF_W); grid.style.width = w + 'px'; }
      else { rowH[idx] = n; grid.tBodies[0].rows[idx].style.height = n + 'px'; }
      renderSelection(); renderCharts();
    }
    function up() { document.removeEventListener('mousemove', mv); document.removeEventListener('mouseup', up); undoStack.push(snap); redoStack = []; endChange(false); }
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
  }
  function autoSizeEditor() {
    var rc = cellRect(editing ? editing.r : act.r, editing ? editing.c : act.c);
    editor.style.width = rc.w + 'px';
    editor.style.width = Math.max(rc.w, Math.min(600, editor.scrollWidth + 8)) + 'px';
    editor.style.height = rc.h + 'px';
    editor.style.height = Math.max(rc.h, editor.scrollHeight) + 'px';
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
    if (val !== getRaw(r, c)) {
      var before = getRaw(r, c);
      beginChange();
      if (val && val[0] === '=') val = tidyFormula(val);
      setRawNoRender(r, c, val);
      // data validation: reject values that break the cell's rule (like Webix)
      var vr = (styles[key(r, c)] || {}).vr;
      if (vr && !isValidValue(r, c)) {
        setRawNoRender(r, c, before); undoStack.pop();
        renderCells();
        validationError(vr, r, c);
        if (move) moveActive(0, 0, false); else renderSelection();
        return true;
      }
      endChange(false);
    }
    if (move) moveActive(move[0], move[1], false); else renderSelection();
    editor.focus({ preventScroll: true });
    return true;
  }
  function cancelEdit() {
    if (!editing) return;
    editing = null; point = null; $('pointbox').classList.add('hidden');
    editor.classList.remove('editing'); editor.value = '';
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
    var pb = $('pointbox'); pb.classList.remove('hidden'); place(pb, rangeRect(g));
    if (inp === editor) autoSizeEditor();
  }

  editor.addEventListener('input', function () {
    if (!editing && editor.value) { var ch = editor.value; beginEdit(true, ch); return; }
    if (editing) { fx.value = editor.value; autoSizeEditor(); point = null; $('pointbox').classList.add('hidden'); }
  });
  fx.addEventListener('focus', function () {
    if (readOnly) { fx.blur(); return; }
    if (!editing) {
      if (isLocked(act.r, act.c)) { flash('This cell is locked.'); fx.blur(); return; }
      editing = { r: act.r, c: act.c, input: fx }; fx.value = getRaw(act.r, act.c);
    } else if (editing.input !== fx) { editing.input = fx; editor.classList.remove('editing'); }
  });
  fx.addEventListener('input', function () { if (editing) { editor.value = fx.value; point = null; $('pointbox').classList.add('hidden'); } });
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
    if (what === 'filters' || what === 'all') filter = null;
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
  function sortSelection(desc) {
    if (readOnly) return; commitEdit();
    var g = norm(sel);
    if (g.r1 === g.r2) { flash('Select the rows (range) you want to sort first.'); return; }
    beginChange();
    var col = act.c, rows = [];
    for (var r = g.r1; r <= g.r2; r++) { var row = { v: cellValue(r, col), src: r, cells: [] }; for (var c = g.c1; c <= g.c2; c++) row.cells.push({ raw: getRaw(r, c), st: styles[key(r, c)] }); rows.push(row); }
    rows.sort(function (a, b) {
      var x = a.v, y = b.v, ex = x == null || x === '', ey = y == null || y === '';
      if (ex && ey) return 0; if (ex) return 1; if (ey) return -1;
      var res = (typeof x === 'number' && typeof y === 'number') ? x - y : String(x).localeCompare(String(y), undefined, { numeric: true, sensitivity: 'base' });
      return desc ? -res : res;
    });
    // like Excel, relative references in moved formulas follow their row
    hf.batch(function () { rows.forEach(function (row, i) { row.cells.forEach(function (cell, j) { var r = g.r1 + i, c = g.c1 + j; setRawNoRender(r, c, shiftFormula(cell.raw, r - row.src, 0)); if (cell.st) styles[key(r, c)] = cell.st; else delete styles[key(r, c)]; }); }); });
    endChange(false);
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

  // ------------------------------------------------------------------ links
  function linkDialog() {
    if (readOnly) return; commitEdit();
    var r = act.r, c = act.c, cur = parseLink(raws[key(r, c)]);
    if (isLocked(r, c)) { flash('This cell is locked.'); return; }
    dialog('Add link', '<label>Name</label><input id="lkn" placeholder="Text to show"><label>URL</label><input id="lku" placeholder="https://"><div class="btns">' + (cur ? '<button class="danger" id="lkd">Remove link</button>' : '') + '<span style="flex:1"></span><button class="sec" id="lkc">Cancel</button><button id="lks">Save</button></div>', function (d, close) {
      var n = d.querySelector('#lkn'), u = d.querySelector('#lku');
      n.value = cur ? cur.text : (getRaw(r, c)[0] === '=' ? '' : getRaw(r, c)); u.value = cur ? cur.url : '';
      (cur ? u : (n.value ? u : n)).focus();
      d.querySelector('#lkc').onclick = close;
      if (cur) d.querySelector('#lkd').onclick = function () { close(); beginChange(); setRawNoRender(r, c, cur.text); endChange(false); };
      d.querySelector('#lks').onclick = function () {
        var url = u.value.trim(); if (!url) { u.focus(); return; }
        if (!/^[a-z][a-z0-9+.-]*:/i.test(url)) url = 'https://' + url;
        var name = n.value.trim() || url;
        close(); beginChange();
        setRawNoRender(r, c, '=HYPERLINK("' + url.replace(/"/g, '""') + '","' + name.replace(/"/g, '""') + '")');
        endChange(false);
      };
    });
  }

  // ------------------------------------------------------------------ data validation
  var VAL_TYPES = [['integer', 'Whole number'], ['decimal', 'Decimal'], ['list', 'List'], ['date', 'Date'], ['length', 'Text length']];
  var VAL_OPS = [['between', 'between'], ['notbetween', 'not between'], ['=', 'equal to'], ['!=', 'not equal to'], ['>', 'greater than'], ['<', 'less than'], ['>=', 'greater than or equal to'], ['<=', 'less than or equal to']];
  function valNumber(s, type) {
    if (s == null || s === '') return NaN;
    if (type === 'date') { var p = parseA1(s); if (p) { var v = cellValue(p.r, p.c); return typeof v === 'number' ? v : NaN; } var m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(String(s).trim()); if (m) return Math.round((Date.UTC(+m[3], +m[2] - 1, +m[1]) - Date.UTC(1899, 11, 30)) / 86400000); }
    var ref = parseA1(String(s)); if (ref) { var rv = cellValue(ref.r, ref.c); return typeof rv === 'number' ? rv : NaN; }
    return +s;
  }
  function listOptions(src) {
    var g = parseRange(String(src || '').toUpperCase()), opts = [];
    if (g && /^\$?[A-Z]+\$?\d+(:\$?[A-Z]+\$?\d+)?$/i.test(String(src).trim())) { for (var r = g.r1; r <= g.r2; r++) for (var c = g.c1; c <= g.c2; c++) { var t = displayText(r, c); if (t !== '') opts.push(t); } }
    else opts = String(src || '').split(',').map(function (s) { return s.trim(); }).filter(Boolean);
    return opts;
  }
  function isValidValue(r, c) {
    var vr = (styles[key(r, c)] || {}).vr; if (!vr) return true;
    var v = cellValue(r, c);
    if (v == null || v === '') return vr.ignoreBlank !== false;
    if (isError(v)) return false;
    if (vr.type === 'list') return listOptions(vr.source).some(function (o) { return o.toLowerCase() === String(displayText(r, c)).toLowerCase(); });
    var n;
    if (vr.type === 'length') n = String(displayText(r, c)).length;
    else { if (typeof v !== 'number') return false; n = v; if (vr.type === 'integer' && Math.floor(n) !== n) return false; }
    var a = valNumber(vr.v1, vr.type), b = valNumber(vr.v2, vr.type);
    switch (vr.op) {
      case 'between': return n >= Math.min(a, b) && n <= Math.max(a, b);
      case 'notbetween': return !(n >= Math.min(a, b) && n <= Math.max(a, b));
      case '=': return n === a; case '!=': return n !== a;
      case '>': return n > a; case '<': return n < a; case '>=': return n >= a; case '<=': return n <= a;
    }
    return true;
  }
  function describeRule(vr) {
    var t = (VAL_TYPES.filter(function (x) { return x[0] === vr.type; })[0] || ['', ''])[1].toLowerCase();
    if (vr.type === 'list') return 'a value from the list: ' + listOptions(vr.source).join(', ');
    var op = (VAL_OPS.filter(function (x) { return x[0] === vr.op; })[0] || ['', ''])[1];
    return (vr.type === 'length' ? 'text with a length ' : 'a ' + t + ' ') + op + ' ' + vr.v1 + (/between/.test(vr.op) ? ' and ' + vr.v2 : '');
  }
  function validationError(vr, r, c) {
    dialog('Invalid value', '<p>The value you entered in ' + a1(r, c) + ' is not valid.</p><p class="muted">' + escapeHtml(vr.message || ('This cell only accepts ' + describeRule(vr) + '.')) + '</p><div class="btns"><button id="vok">OK</button></div>', function (d, close) {
      var ok = d.querySelector('#vok'); ok.focus(); ok.onclick = close;
    });
  }
  function validationDialog() {
    if (readOnly) return; commitEdit();
    var g = norm(sel), cur = (styles[key(act.r, act.c)] || {}).vr || { type: 'integer', op: 'between', v1: '', v2: '', ignoreBlank: true };
    dialog('Data validation', '<p class="muted">Cells ' + rangeStr(g) + '</p>' +
      '<label>Allow</label><select id="vt">' + VAL_TYPES.map(function (x) { return '<option value="' + x[0] + '">' + x[1] + '</option>'; }).join('') + '</select>' +
      '<div id="vnum"><label>Data</label><select id="vo">' + VAL_OPS.map(function (x) { return '<option value="' + x[0] + '">' + x[1] + '</option>'; }).join('') + '</select>' +
      '<div class="row2"><div><label id="vl1">Minimum</label><input id="v1"></div><div id="v2w"><label>Maximum</label><input id="v2"></div></div></div>' +
      '<div id="vlist"><label>Source (a range such as H2:H5, or values separated by commas)</label><input id="vs"></div>' +
      '<label class="chk"><input type="checkbox" id="vib"> Ignore blank</label>' +
      '<label>Error message (optional)</label><input id="vm" placeholder="Shown when an invalid value is entered">' +
      '<div class="btns"><span style="flex:1"></span><button class="sec" id="vc">Cancel</button><button id="vsv">Save</button></div>', function (d, close) {
      var vt = d.querySelector('#vt'), vo = d.querySelector('#vo');
      vt.value = cur.type; vo.value = cur.op || 'between';
      d.querySelector('#v1').value = cur.v1 == null ? '' : cur.v1; d.querySelector('#v2').value = cur.v2 == null ? '' : cur.v2;
      d.querySelector('#vs').value = cur.source || ''; d.querySelector('#vib').checked = cur.ignoreBlank !== false; d.querySelector('#vm').value = cur.message || '';
      function sync() {
        var list = vt.value === 'list', between = /between/.test(vo.value);
        d.querySelector('#vnum').style.display = list ? 'none' : ''; d.querySelector('#vlist').style.display = list ? '' : 'none';
        d.querySelector('#v2w').style.visibility = between ? '' : 'hidden'; d.querySelector('#vl1').textContent = between ? 'Minimum' : 'Value';
      }
      vt.onchange = sync; vo.onchange = sync; sync();
      d.querySelector('#vc').onclick = close;
      d.querySelector('#vsv').onclick = function () {
        var rule = { type: vt.value, ignoreBlank: d.querySelector('#vib').checked };
        if (rule.type === 'list') { rule.source = d.querySelector('#vs').value.trim(); if (!rule.source) { d.querySelector('#vs').focus(); return; } }
        else { rule.op = vo.value; rule.v1 = d.querySelector('#v1').value.trim(); rule.v2 = d.querySelector('#v2').value.trim(); if (rule.v1 === '' || (/between/.test(rule.op) && rule.v2 === '')) { d.querySelector(rule.v1 === '' ? '#v1' : '#v2').focus(); return; } }
        var msg = d.querySelector('#vm').value.trim(); if (msg) rule.message = msg;
        close(); applyStyle({ vr: rule });
      };
    });
  }
  function removeValidation() { applyStyle({ vr: null }); }
  function setHighlightInvalid(on) { highlightInvalid = on; renderCells(); schedulePost(); }

  // ------------------------------------------------------------------ find and replace
  var findState = { r: -1, c: -1 };
  function findDialog() {
    if (readOnly) return; commitEdit();
    dialog('Find and Replace', '<label>Find</label><input id="fw"><label>Replace with</label><input id="rw">' +
      '<label class="chk"><input type="checkbox" id="fcase"> Match case</label><label class="chk"><input type="checkbox" id="fwhole"> Match entire cell contents</label><label class="chk"><input type="checkbox" id="fform"> Search in formulas</label>' +
      '<p class="muted" id="fmsg">&nbsp;</p><div class="btns"><button class="sec" id="frall">Replace all</button><button class="sec" id="fr">Replace</button><span style="flex:1"></span><button class="sec" id="fclose">Close</button><button id="fnext">Find next</button></div>', function (d, close) {
      var fw = d.querySelector('#fw'), rw = d.querySelector('#rw'), msg = d.querySelector('#fmsg');
      fw.focus();
      function opts() { return { q: fw.value, cs: d.querySelector('#fcase').checked, whole: d.querySelector('#fwhole').checked, form: d.querySelector('#fform').checked }; }
      function textOf(r, c, o) { var raw = getRaw(r, c); return o.form && raw[0] === '=' ? raw : displayText(r, c); }
      function hit(r, c, o) {
        var t = textOf(r, c, o), q = o.q; if (!q || t === '') return false;
        if (!o.cs) { t = t.toLowerCase(); q = q.toLowerCase(); }
        return o.whole ? t === q : t.indexOf(q) >= 0;
      }
      function next() {
        var o = opts(); if (!o.q) { fw.focus(); return false; }
        var start = (act.r * COLS + act.c), total = ROWS * COLS;
        for (var k = 1; k <= total; k++) {
          var idx = (start + k) % total, r = Math.floor(idx / COLS), c = idx % COLS;
          if (isRowHidden(r) || hiddenCols[c]) continue;
          if (hit(r, c, o)) { setSelection(r, c, r, c); scrollIntoViewCell(r, c); msg.textContent = 'Found in ' + a1(r, c); return true; }
        }
        msg.textContent = 'No matches found.'; return false;
      }
      function replaceIn(r, c, o) {
        var raw = getRaw(r, c), isF = raw[0] === '=';
        if (isF && !o.form) return false;
        var src = isF ? raw : raw, re = new RegExp(o.q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), o.cs ? 'g' : 'gi');
        var out = o.whole ? (o.cs ? (src === o.q ? rw.value : src) : (src.toLowerCase() === o.q.toLowerCase() ? rw.value : src)) : src.replace(re, rw.value);
        if (out === src || isLocked(r, c)) return false;
        setRawNoRender(r, c, out); return true;
      }
      d.querySelector('#fnext').onclick = next;
      fw.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); next(); } });
      d.querySelector('#fr').onclick = function () {
        var o = opts(); if (!o.q) return;
        if (hit(act.r, act.c, o)) { beginChange(); var done = replaceIn(act.r, act.c, o); if (done) endChange(false); else undoStack.pop(); }
        next();
      };
      d.querySelector('#frall').onclick = function () {
        var o = opts(); if (!o.q) return;
        beginChange(); var n = 0;
        // find the matches first: values can't be read while the engine is batching changes
        var hits = []; for (var r = 0; r < ROWS; r++) for (var c = 0; c < COLS; c++) if (hit(r, c, o)) hits.push([r, c]);
        hf.batch(function () { hits.forEach(function (h) { if (replaceIn(h[0], h[1], o)) n++; }); });
        if (n) endChange(false); else undoStack.pop();
        msg.textContent = n ? 'Replaced ' + n + ' cell' + (n === 1 ? '' : 's') + '.' : 'No matches found.';
      };
      d.querySelector('#fclose').onclick = close;
    });
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
  function resizeDialog(isRow) {
    if (readOnly) return; commitEdit();
    var g = norm(sel), idx = isRow ? g.r1 : g.c1, cur = isRow ? (rowH[idx] || DEF_H) : (colW[idx] || DEF_W);
    dialog(isRow ? 'Resize row' : 'Resize column', '<label>' + (isRow ? 'Row height' : 'Column width') + ' (pixels)</label><input id="rsz" type="number" min="10" max="800"><div class="btns"><span style="flex:1"></span><button class="sec" id="rszc">Cancel</button><button id="rszs">Save</button></div>', function (d, close) {
      var inp = d.querySelector('#rsz'); inp.value = cur; inp.focus(); inp.select();
      function save() { var n = Math.round(Math.max(isRow ? 16 : 20, Math.min(800, +inp.value || cur))); close(); beginChange(); for (var i = (isRow ? g.r1 : g.c1); i <= (isRow ? g.r2 : g.c2); i++) { if (isRow) rowH[i] = n; else colW[i] = n; } endChange(true); }
      inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') save(); });
      d.querySelector('#rszc').onclick = close; d.querySelector('#rszs').onclick = save;
    });
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
      ['Create/remove filters', null, toggleFilter], ['Named ranges', null, namedRangesDialog], ['Conditional format', null, condDialog], ['Lock/unlock cell', null, toggleLock],
      ['Add link', null, linkDialog], ['Add dropdown', null, dropdownDialog],
      ['Clear', null, null, clearEntries()],
      ['Validation', null, null, [['Add data validation', null, validationDialog], ['Remove data validation', null, removeValidation], ['Highlight invalid data', null, function () { setHighlightInvalid(true); }], ['Remove highlighting of invalid data', null, function () { setHighlightInvalid(false); }]]],
      ['Find and Replace', null, findDialog],
    ];
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
  function syncRawsFromEngine() { Object.keys(raws).forEach(function (k) { var p = k.split(','); try { if (hf.doesCellHaveFormula(addr(+p[0], +p[1]))) raws[k] = mapBooleans(hf.getCellFormula(addr(+p[0], +p[1])), false); } catch (e) { } }); syncNamed(); }

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
  function openDropdownList(r, c) {
    var st = styles[key(r, c)] || {}; if (!st.dd) return;
    if (isLocked(r, c)) { flash('This cell is locked.'); return; }
    var opts = [], g = parseRange(st.dd);
    if (g) { for (var rr = g.r1; rr <= g.r2; rr++) for (var cc = g.c1; cc <= g.c2; cc++) { var t = displayText(rr, cc); if (t !== '' && opts.indexOf(t) < 0) opts.push(t); } }
    else opts = String(st.dd).split(',').map(function (s) { return s.trim(); }).filter(Boolean);
    var b = tds[r][c].getBoundingClientRect();
    openMenu(b.left, b.bottom, opts.map(function (o) { return [escapeHtml(o), null, function () { beginChange(); setRawNoRender(r, c, o); endChange(false); }]; }).concat(opts.length ? [] : [['<em>(list is empty)</em>', null, function () { }]]));
  }
  function openFilterMenu(col, btn) {
    var g = parseRange(filter.range), values = [];
    for (var r = g.r1 + 1; r <= g.r2; r++) { var t = displayText(r, col); if (values.indexOf(t) < 0) values.push(t); }
    values.sort(function (a, b) { return a.localeCompare(b, undefined, { numeric: true }); });
    var allowed = filter.crit && filter.crit[col];
    closeMenu();
    menuEl = document.createElement('div'); menuEl.className = 'menu filter-menu';
    menuEl.innerHTML = '<div class="fm-title">Filter ' + colName(col) + '</div><label class="fm-all"><input type="checkbox" checked> (Select all)</label><div class="fm-list"></div><div class="fm-btns"><button class="sec">Clear</button><button>OK</button></div>';
    var list = menuEl.querySelector('.fm-list');
    values.forEach(function (v) { var l = document.createElement('label'); l.innerHTML = '<input type="checkbox"> ' + (v === '' ? '<em>(blank)</em>' : escapeHtml(v)); var cb = l.querySelector('input'); cb.checked = !allowed || allowed.indexOf(v) >= 0; cb.value = v; list.appendChild(l); });
    var all = menuEl.querySelector('.fm-all input');
    all.checked = !allowed;
    all.addEventListener('change', function () { list.querySelectorAll('input').forEach(function (x) { x.checked = all.checked; }); });
    var btns = menuEl.querySelectorAll('.fm-btns button');
    btns[0].addEventListener('click', function () { closeMenu(); beginChange(); if (filter.crit) delete filter.crit[col]; endChange(false); });
    btns[1].addEventListener('click', function () {
      var chosen = Array.prototype.filter.call(list.querySelectorAll('input'), function (x) { return x.checked; }).map(function (x) { return x.value; });
      closeMenu(); beginChange(); filter.crit = filter.crit || {};
      if (chosen.length === values.length) delete filter.crit[col]; else filter.crit[col] = chosen;
      endChange(false);
    });
    document.body.appendChild(menuEl);
    var b = btn.getBoundingClientRect(); positionMenu(b.left, b.bottom + 2);
  }
  function toggleFilter() {
    if (readOnly) return; commitEdit(); beginChange();
    if (filter) { filter = null; endChange(false); return; }
    var g = norm(sel);
    if (g.r1 === g.r2 && g.c1 === g.c2) {
      // like Webix: use the block of data around the active cell
      var r1 = g.r1, r2 = g.r1, c1 = g.c1, c2 = g.c1;
      while (r2 + 1 < ROWS && getRaw(r2 + 1, g.c1) !== '') r2++;
      while (c2 + 1 < COLS && getRaw(r1, c2 + 1) !== '') c2++;
      while (c1 - 1 >= 0 && getRaw(r1, c1 - 1) !== '') c1--;
      g = { r1: r1, c1: c1, r2: r2, c2: c2 };
    }
    filter = { range: rangeStr(g), crit: {} };
    endChange(false);
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
  var FORMATS = [['common', 'Common', ''], ['currency', 'Currency', '$98.20'], ['number', 'Number', '2,120.02'], ['percent', 'Percent', '50%'], ['date', 'Date', '15/03/2023'], ['text', 'Text', '012345'], ['custom', 'Custom', '']];
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
  function flash(msg) { var s = $('status'); s.innerHTML = '<span style="color:#b81237">' + escapeHtml(msg) + '</span><span></span>'; clearTimeout(flash.t); flash.t = setTimeout(updateStatus, 3500); }

  // ------------------------------------------------------------------ dialogs
  function dialog(title, bodyHtml, onReady, wide) {
    var bg = document.createElement('div'); bg.className = 'dlg-bg';
    bg.innerHTML = '<div class="dlg' + (wide ? ' wide' : '') + '"><div class="dlg-head">' + title + '<span class="dlg-x">&times;</span></div><div class="dlg-body">' + bodyHtml + '</div></div>';
    document.body.appendChild(bg);
    function close() { bg.remove(); editor.focus({ preventScroll: true }); }
    bg.querySelector('.dlg-x').onclick = close;
    bg.addEventListener('mousedown', function (e) { if (e.target === bg) close(); });
    onReady(bg.querySelector('.dlg-body'), close);
  }
  function commentDialog() {
    if (readOnly) return; commitEdit();
    var k = key(act.r, act.c);
    dialog('Comment — ' + a1(act.r, act.c), '<textarea id="cm"></textarea><div class="btns"><button class="danger" id="cdel">Delete</button><span style="flex:1"></span><button class="sec" id="ccancel">Cancel</button><button id="csave">Save</button></div>', function (d, close) {
      var ta = d.querySelector('#cm'); ta.value = comments[k] || ''; ta.focus();
      d.querySelector('#ccancel').onclick = close;
      d.querySelector('#cdel').onclick = function () { beginChange(); delete comments[k]; endChange(false); close(); };
      d.querySelector('#csave').onclick = function () { beginChange(); if (ta.value.trim()) comments[k] = ta.value; else delete comments[k]; endChange(false); close(); };
    });
  }
  function opOptions(sel) {
    var h = '<option value="" hidden>Operator</option>', grp = null;
    COND_OPS.forEach(function (o) {
      if (o[1] === null) { if (grp) h += '</optgroup>'; h += '<optgroup label="' + o[0] + '">'; grp = o[0]; return; }
      h += '<option value="' + o[1] + '"' + (o[1] === sel ? ' selected' : '') + '>' + o[0] + '</option>';
    });
    return h + '</optgroup>';
  }
  function condDialog() {
    if (readOnly) return; commitEdit();
    var g = norm(sel), range = rangeStr(g);
    var existing = conds.filter(function (r) { var rg = parseRange(r.range); return rg && overlaps(rg, g); });
    dialog('Conditional Format', '<p class="muted">Applies to <b>' + range + '</b></p><table class="cf-table"><thead><tr><th>Display</th><th>Condition</th><th>Value</th><th><span class="cf-add" title="Add condition"><i class="fas fa-plus-circle"></i></span></th></tr></thead><tbody></tbody></table><div class="btns"><span style="flex:1"></span><button class="sec" id="cfc">Cancel</button><button id="cfs">Save</button></div>', function (d, close) {
      var tbody = d.querySelector('tbody');
      function addRow(rule) {
        rule = rule || {};
        var tr = document.createElement('tr');
        var styleName = typeof rule.style === 'string' ? rule.style : '';
        tr.innerHTML = '<td><select class="cf-style"><option value="" hidden>Style</option>' + ['normal', 'neutral', 'bad', 'good'].map(function (s) { return '<option value="' + s + '" class="cf-' + s + '"' + (s === styleName ? ' selected' : '') + '>' + s + '</option>'; }).join('') + '</select></td>' +
          '<td><select class="cf-op">' + opOptions(rule.op) + '</select></td><td class="cf-vals"><input class="cf-v1" placeholder="Value"><input class="cf-v2" placeholder="and" style="display:none"></td><td><span class="cf-del" title="Delete"><i class="fas fa-trash-alt"></i></span></td>';
        var op = tr.querySelector('.cf-op'), v2 = tr.querySelector('.cf-v2');
        tr.querySelector('.cf-v1').value = rule.v1 == null ? '' : rule.v1; v2.value = rule.v2 == null ? '' : rule.v2;
        function sync() { v2.style.display = /between/.test(op.value) ? '' : 'none'; var s = tr.querySelector('.cf-style'); s.className = 'cf-style cf-' + s.value; }
        op.onchange = sync; tr.querySelector('.cf-style').onchange = sync; sync();
        tr.querySelector('.cf-del').onclick = function () { tr.remove(); };
        tbody.appendChild(tr);
      }
      existing.forEach(addRow);
      for (var i = existing.length; i < 3; i++) addRow();
      d.querySelector('.cf-add').onclick = function () { addRow(); };
      d.querySelector('#cfc').onclick = close;
      d.querySelector('#cfs').onclick = function () {
        beginChange();
        conds = conds.filter(function (r) { return existing.indexOf(r) < 0; });
        Array.prototype.forEach.call(tbody.rows, function (tr) {
          var st = tr.querySelector('.cf-style').value, op = tr.querySelector('.cf-op').value;
          if (!st || !op) return;
          conds.push({ range: range, style: st, op: op, v1: tr.querySelector('.cf-v1').value, v2: tr.querySelector('.cf-v2').value });
        });
        endChange(false); close();
      };
    }, true);
  }
  function namedRangesDialog() {
    if (readOnly) return; commitEdit();
    var g = norm(sel);
    dialog('Named ranges', '<div class="rules" id="nlist"></div><div class="row2"><div><label>Name</label><input id="nname" placeholder="e.g. RateTable"></div><div><label>Range</label><input id="nrange"></div></div><div class="btns"><span style="flex:1"></span><button class="sec" id="nclose">Close</button><button id="nadd">Add</button></div>', function (d, close) {
      d.querySelector('#nrange').value = rangeStr(g);
      function list() {
        var box = d.querySelector('#nlist'); box.innerHTML = Object.keys(named).length ? '' : '<div><em>No named ranges yet</em></div>';
        Object.keys(named).forEach(function (n) {
          var row = document.createElement('div'); row.innerHTML = '<span><b>' + escapeHtml(n) + '</b> = ' + escapeHtml(named[n]) + '</span>';
          var del = document.createElement('button'); del.className = 'danger'; del.textContent = 'Delete';
          del.onclick = function () { beginChange(); delete named[n]; syncNamed(); endChange(false); list(); };
          row.appendChild(del); box.appendChild(row);
        });
      }
      list();
      d.querySelector('#nclose').onclick = close;
      d.querySelector('#nadd').onclick = function () {
        var n = d.querySelector('#nname').value.trim(), rg = parseRange(d.querySelector('#nrange').value.toUpperCase());
        if (!/^[A-Za-z_][A-Za-z0-9_.]*$/.test(n) || parseA1(n)) { alert('Names must start with a letter, contain no spaces and must not look like a cell reference.'); return; }
        if (!rg) { alert('Enter a valid range, e.g. A1:B5'); return; }
        beginChange(); named[n] = rangeStr(rg); syncNamed(); endChange(false); list(); d.querySelector('#nname').value = '';
      };
    });
  }
  function dropdownDialog() {
    if (readOnly) return; commitEdit();
    var g = norm(sel);
    dialog('Add dropdown', '<p class="muted">Cells ' + rangeStr(g) + ' will show a dropdown list.</p><label>Range of values (e.g. H2:H5), or a comma-separated list</label><input id="ddr"><div class="btns"><span style="flex:1"></span><button class="sec" id="ddc">Cancel</button><button id="dds">Save</button></div>', function (d, close) {
      d.querySelector('#ddr').value = (styles[key(act.r, act.c)] || {}).dd || '';
      d.querySelector('#ddr').focus();
      d.querySelector('#ddc').onclick = close;
      d.querySelector('#dds').onclick = function () {
        var v = d.querySelector('#ddr').value.trim(); if (!v) { close(); return; }
        var rg = parseRange(v.toUpperCase());
        close(); applyStyle({ dd: rg ? rangeStr(rg) : v });
      };
    });
  }
  function customFormatDialog() {
    dialog('Custom format', '<label>Format pattern</label><input id="cfp" placeholder="e.g. $#,##0.00  or  0.0%  or  #,##0  or  0 &quot;kg&quot;"><p class="muted">0 = digit, # = optional digit, , = thousands separator, % = percent. Text before/after the number is shown as typed.</p><div class="btns"><span style="flex:1"></span><button class="sec" id="cfpc">Cancel</button><button id="cfps">Apply</button></div>', function (d, close) {
      var inp = d.querySelector('#cfp'); inp.value = (styles[key(act.r, act.c)] || {}).pattern || '#,##0.00'; inp.focus();
      d.querySelector('#cfpc').onclick = function () { close(); updateToolbarState(); };
      d.querySelector('#cfps').onclick = function () { close(); applyStyle({ fmt: 'custom', pattern: inp.value, dec: null }); };
    });
  }
  function sparklineDialog() {
    if (readOnly) return; commitEdit();
    var target = { r: act.r, c: act.c };
    var cur = parseSparkline(raws[key(target.r, target.c)]) || { type: 'line', range: '', color: '#6666FF' };
    dialog('Add sparkline', '<label>Type</label><select id="spt"><option value="line">Line</option><option value="area">Area</option><option value="bar">Bar</option><option value="pie">Pie</option></select><label>Range</label><input id="spr" placeholder="e.g. B2:F2"><label>Color</label><input id="spc" type="color"><div class="btns"><span style="flex:1"></span><button class="sec" id="spx">Cancel</button><button id="sps">Save</button></div>', function (d, close) {
      d.querySelector('#spt').value = cur.type; d.querySelector('#spr').value = cur.range; d.querySelector('#spc').value = cur.color.length === 7 ? cur.color : '#6666ff';
      d.querySelector('#spr').focus();
      d.querySelector('#spx').onclick = close;
      d.querySelector('#sps').onclick = function () {
        var rg = parseRange(d.querySelector('#spr').value.toUpperCase()); if (!rg) { alert('Enter the range of numbers to graph, e.g. B2:F2'); return; }
        close(); beginChange();
        setRawNoRender(target.r, target.c, '=SPARKLINE(' + rangeStr(rg) + ',"' + d.querySelector('#spt').value + '","' + d.querySelector('#spc').value + '")');
        endChange(false);
      };
    });
  }
  var FUNCS = [
    ['SUM', 'SUM(number1, [number2], …) — adds numbers or a range'], ['AVERAGE', 'AVERAGE(range) — mean of the values'], ['MIN', 'MIN(range) — smallest value'], ['MAX', 'MAX(range) — largest value'],
    ['COUNT', 'COUNT(range) — counts cells containing numbers'], ['COUNTA', 'COUNTA(range) — counts non-empty cells'], ['COUNTBLANK', 'COUNTBLANK(range) — counts empty cells'], ['COUNTIF', 'COUNTIF(range, criteria) — e.g. COUNTIF(B2:B9,">50")'],
    ['COUNTIFS', 'COUNTIFS(range1, criteria1, range2, criteria2, …)'], ['SUMIF', 'SUMIF(range, criteria, [sum_range])'], ['SUMIFS', 'SUMIFS(sum_range, range1, criteria1, …)'], ['AVERAGEIF', 'AVERAGEIF(range, criteria, [average_range])'],
    ['IF', 'IF(logical_test, value_if_true, value_if_false)'], ['IFS', 'IFS(test1, value1, test2, value2, …)'], ['AND', 'AND(logical1, logical2, …)'], ['OR', 'OR(logical1, logical2, …)'], ['NOT', 'NOT(logical)'],
    ['VLOOKUP', 'VLOOKUP(lookup_value, table_array, col_index, [range_lookup]) — TRUE/omitted = approximate match on a sorted first column, FALSE = exact match'],
    ['HLOOKUP', 'HLOOKUP(lookup_value, table_array, row_index, [range_lookup])'], ['XLOOKUP', 'XLOOKUP(lookup_value, lookup_array, return_array)'], ['LOOKUP', 'LOOKUP(lookup_value, lookup_vector, result_vector)'], ['INDEX', 'INDEX(range, row, [column])'], ['MATCH', 'MATCH(lookup_value, range, [match_type])'],
    ['ROUND', 'ROUND(number, digits)'], ['ROUNDUP', 'ROUNDUP(number, digits)'], ['ROUNDDOWN', 'ROUNDDOWN(number, digits)'], ['INT', 'INT(number)'], ['ABS', 'ABS(number)'], ['SQRT', 'SQRT(number)'], ['POWER', 'POWER(number, power)'], ['MOD', 'MOD(number, divisor)'],
    ['MEDIAN', 'MEDIAN(range)'], ['MODE', 'MODE(range)'], ['STDEV', 'STDEV(range) — sample standard deviation'], ['RANK', 'RANK(number, range, [order])'], ['LARGE', 'LARGE(range, k)'], ['SMALL', 'SMALL(range, k)'],
    ['CONCATENATE', 'CONCATENATE(text1, text2, …) — or use &'], ['LEFT', 'LEFT(text, n)'], ['RIGHT', 'RIGHT(text, n)'], ['MID', 'MID(text, start, n)'], ['LEN', 'LEN(text)'], ['UPPER', 'UPPER(text)'], ['LOWER', 'LOWER(text)'], ['PROPER', 'PROPER(text)'], ['TRIM', 'TRIM(text)'], ['TEXT', 'TEXT(value, format)'],
    ['TODAY', 'TODAY() — current date'], ['NOW', 'NOW()'], ['DATE', 'DATE(year, month, day)'], ['YEAR', 'YEAR(date)'], ['MONTH', 'MONTH(date)'], ['DAY', 'DAY(date)'], ['DATEDIF', 'DATEDIF(start, end, unit)'], ['WEEKDAY', 'WEEKDAY(date)'],
    ['PMT', 'PMT(rate, nper, pv)'], ['IFERROR', 'IFERROR(value, value_if_error)'], ['ISBLANK', 'ISBLANK(cell)'], ['ISNUMBER', 'ISNUMBER(value)'], ['SPARKLINE', 'SPARKLINE(range, "line|area|bar|pie", "#colour") — small graph inside a cell'],
  ];
  $('fxbtn').addEventListener('click', function () {
    if (readOnly) return;
    var target = { r: act.r, c: act.c };
    dialog('Insert function', '<input id="fsearch" placeholder="Search functions"><div class="fnlist" id="flist" style="margin-top:8px"></div><div class="fnhelp" id="fhelp"></div><div class="btns"><span style="flex:1"></span><button class="sec" id="fcancel">Cancel</button><button id="fins">Insert</button></div>', function (d, close) {
      var list = d.querySelector('#flist'), help = d.querySelector('#fhelp'), cur = null;
      function draw(q) {
        list.innerHTML = '';
        FUNCS.filter(function (f) { return !q || f[0].indexOf(q.toUpperCase()) >= 0; }).forEach(function (f) {
          var e = document.createElement('div'); e.textContent = f[0];
          e.onclick = function () { cur = f[0]; help.textContent = f[1]; Array.prototype.forEach.call(list.children, function (x) { x.classList.toggle('on', x === e); }); };
          e.ondblclick = insert; list.appendChild(e);
        });
      }
      function insert() {
        if (!cur) return; close();
        setSelection(target.r, target.c, target.r, target.c);
        if (!editing) beginEdit(false);
        if (!editing) return;
        var inp = editing.input, t = inp.value || '';
        if (!t) t = '='; else if (t[0] !== '=') t = '=' + t;
        inp.value = t + cur + '('; (inp === editor ? fx : editor).value = inp.value;
        inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length); if (inp === editor) autoSizeEditor();
      }
      draw(''); d.querySelector('#fsearch').oninput = function (e) { draw(e.target.value); }; d.querySelector('#fsearch').focus();
      d.querySelector('#fcancel').onclick = close; d.querySelector('#fins').onclick = insert;
    });
  });

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
          css.push('text-align:' + (st.ha || (d.num ? 'right' : 'left')));
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

  // ------------------------------------------------------------------ host messages
  function applyConfig(d) {
    readOnly = !!d.readOnly;
    $('ss').classList.toggle('readonly', readOnly);
    fx.readOnly = readOnly;
    if (readOnly) { cancelEdit(); closeChartPanel(); closeMenu(); }
    document.documentElement.style.setProperty('--cell-font', Math.round(15 * (d.fontScale || 1)) + 'px');
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
  window.__sheet = { serialize: serialize, load: load, getRaw: getRaw, cellValue: cellValue, exportSnapshot: exportSnapshot }; // debugging aid
})();
