/* Item (question part) renderers. Each returns a controller:
 *   el, getValue(), setValue(v), isAnswered(v), setReadOnly(bool), onShow(), autoMark(v) -> {got,max,detail}|null, review(v)
 */
(function () {
  'use strict';
  var ITEMS = window.ITEMS = {};

  // ---------- helpers ----------
  function decodeHtml(s) { var t = document.createElement('textarea'); t.innerHTML = s; return t.value; }
  function plural(n) { return n === 1 ? 'mark' : 'marks'; }

  // Pulls the <code class="initial">…</code> block NESA embeds (SQL setup / spreadsheet seed) out of the question.
  ITEMS.extractInitial = function (html) {
    var m = /<code class="initial">([\s\S]*?)<\/code>/i.exec(html || '');
    if (!m) return { html: html, initial: null };
    return { html: html.replace(m[0], ''), initial: decodeHtml(m[1]) };
  };

  // Question text with optional part label and marks suffix (authored papers only; NESA HTML already has them).
  function questionHtml(item) {
    if (item.raw) return item.question || '';
    var q = item.question || '';
    if (item.part && item.marks != null) {
      var suffix = ' (' + item.marks + '&nbsp;' + plural(item.marks) + ')';
      if (/<\/p>\s*$/i.test(q)) q = q.replace(/<\/p>\s*$/i, suffix + '</p>');
      else q += suffix;
    }
    if (item.part) {
      var label = String(item.part).replace(/^\(?([a-z]+)\)?\s*\(?([ivx]+)?\)?$/i, function (_, a, b) { return '(' + a + ')' + (b ? ' (' + b + ')' : ''); });
      if (/^\(/.test(item.part)) label = item.part;
      return '<div class="q-part"><span class="q-part-label">' + label + '</span><div>' + q + '</div></div>';
    }
    return q;
  }
  ITEMS.questionHtml = questionHtml;

  function frame(item, buttons) {
    var wrap = el('<div class="item"><div class="item-header"><div class="item-buttons"></div><div class="item-question highlighter-text"></div></div><div class="item-control"></div><div class="item-extra"></div></div>');
    wrap.querySelector('.item-question').innerHTML = questionHtml(item);
    var bar = wrap.querySelector('.item-buttons');
    (buttons || []).forEach(function (b) { if (b) bar.appendChild(b); });
    return wrap;
  }
  function button(label, cls, onClick) {
    var b = el('<button type="button" class="nsw-button ' + (cls || 'nsw-button--dark') + '">' + label + '</button>');
    b.addEventListener('click', onClick);
    return b;
  }
  function hideButton(itemEl, ctx) {
    if (!ctx.multiItem) return null;
    var b = button('hide <i class="fas fa-angle-up"></i>', 'nsw-button--dark-outline', function () {
      var min = itemEl().classList.toggle('minimised');
      b.innerHTML = (min ? 'show <i class="fas fa-angle-down"></i>' : 'hide <i class="fas fa-angle-up"></i>');
    });
    return b;
  }
  function fullscreenButton(itemEl, after) {
    var b = button('Full screen', 'nsw-button--dark', function () {
      var on = itemEl().classList.toggle('fullscreen');
      document.body.classList.toggle('item-fs', !!document.querySelector('.item.fullscreen'));
      b.textContent = on ? 'Exit full screen' : 'Full screen';
      if (after) after(on);
    });
    return b;
  }

  // ---------- multiple choice (NESA item type 0) ----------
  ITEMS.mcq = function (item, ctx) {
    var name = 'mc-' + item.key;
    var wrap = frame(item, []);
    var rows = (item.options || []).map(function (opt, i) {
      return '<tr><td class="radio"><input type="radio" name="' + name + '" id="' + name + '-' + (i + 1) + '" value="' + (i + 1) + '"></td>' +
        '<td><label class="highlighter-text" for="' + name + '-' + (i + 1) + '">' + opt + '</label></td></tr>';
    }).join('');
    var table = el('<table class="mc-table ninja"><tbody>' + rows + '</tbody></table>');
    wrap.querySelector('.item-control').appendChild(table);
    var radios = table.querySelectorAll('input');
    Array.prototype.forEach.call(radios, function (r) { r.addEventListener('change', function () { ctx.save(api.getValue()); }); });
    var api = {
      el: wrap,
      getValue: function () { var c = table.querySelector('input:checked'); return c ? +c.value : null; },
      setValue: function (v) { Array.prototype.forEach.call(radios, function (r) { r.checked = (+r.value === v); }); },
      isAnswered: function (v) { return v != null; },
      setReadOnly: function (ro) { Array.prototype.forEach.call(radios, function (r) { r.disabled = ro; }); },
      autoMark: function (v) {
        if (item.answer == null) return null;
        return { got: v === item.answer ? (item.marks || 1) : 0, max: item.marks || 1 };
      },
      review: function (v) {
        if (item.answer == null) return;
        Array.prototype.forEach.call(table.rows, function (tr, i) {
          if (i + 1 === item.answer) tr.classList.add('is-answer');
          else if (i + 1 === v) tr.classList.add('is-wrong');
        });
      },
    };
    return api;
  };

  // ---------- inline inputs / dropdowns / checkboxes / sortable (NESA item types 3 & 4) ----------
  ITEMS.html = function (item, ctx) {
    var wrap = frame(item, [hideButton(function () { return wrap; }, ctx)]);
    // NESA puts everything (incl. inputs) in the question HTML; authored items may add generated controls.
    var host = wrap.querySelector('.item-question');
    if (item.controlHtml) wrap.querySelector('.item-control').innerHTML = item.controlHtml;
    var scope = wrap;
    var sortables = [];

    function inputs() { return scope.querySelectorAll('input[name], select[name], textarea[name]'); }
    function readValue() {
      var v = {};
      Array.prototype.forEach.call(inputs(), function (inp) {
        var n = inp.name;
        if (inp.type === 'radio') { if (inp.checked) v[n] = inp.value; else if (!(n in v)) v[n] = ''; }
        else if (inp.type === 'checkbox') { v[n] = v[n] || []; if (inp.checked) v[n].push(inp.value); }
        else v[n] = inp.value;
      });
      sortables.forEach(function (s) {
        v['sort:' + s.id] = Array.prototype.map.call(s.el.children, function (c) { return c.getAttribute('data-id'); });
      });
      return v;
    }
    var api = {
      el: wrap,
      getValue: readValue,
      setValue: function (v) {
        if (!v) return;
        Array.prototype.forEach.call(inputs(), function (inp) {
          var n = inp.name; if (!(n in v)) return;
          if (inp.type === 'radio') inp.checked = (v[n] === inp.value);
          else if (inp.type === 'checkbox') inp.checked = (v[n] || []).indexOf(inp.value) >= 0;
          else inp.value = v[n];
        });
        sortables.forEach(function (s) {
          var order = v['sort:' + s.id]; if (!order) return;
          order.forEach(function (id) { var c = s.el.querySelector(':scope > [data-id="' + id + '"]'); if (c) s.el.appendChild(c); });
        });
      },
      isAnswered: function (v) {
        if (!v) return false;
        return Object.keys(v).some(function (k) {
          if (k.indexOf('sort:') === 0) { var s = sortables.filter(function (x) { return 'sort:' + x.id === k; })[0]; return s && v[k].join(',') !== s.initial.join(','); }
          return Array.isArray(v[k]) ? v[k].length > 0 : !!v[k];
        });
      },
      setReadOnly: function (ro) {
        Array.prototype.forEach.call(inputs(), function (inp) { inp.disabled = ro; });
        sortables.forEach(function (s) { s.sortable && s.sortable.option('disabled', ro); });
      },
      autoMark: function (v) {
        var ans = item.answer; if (!ans || typeof ans !== 'object') return null;
        v = v || {};
        var units = 0, ok = 0, checkboxSet = false, anyChecked = false;
        Object.keys(ans).forEach(function (n) {
          var want = ans[n];
          var key = n, have = v[n];
          if (scope.querySelector('#' + cssEscape(n) + '.sortable')) { key = 'sort:' + n; have = v[key]; }
          if (Array.isArray(want)) {
            if (key.indexOf('sort:') === 0) {
              want.forEach(function (id, i) { units++; if (have && String(have[i]) === String(id)) ok++; });
            } else {
              // checkbox group: every option is a unit (checked when it should be, unchecked when it should not)
              var all = Array.prototype.map.call(scope.querySelectorAll('input[type=checkbox][name="' + n + '"]'), function (c) { return c.value; });
              if (!all.length) all = want;
              checkboxSet = true; if (have && have.length) anyChecked = true;
              all.forEach(function (val) { units++; var should = want.map(String).indexOf(String(val)) >= 0; var is = (have || []).map(String).indexOf(String(val)) >= 0; if (should === is) ok++; });
            }
          } else {
            units++;
            if (have != null && normalise(have) === normalise(want)) ok++;
          }
        });
        if (!units) return null;
        var max = item.marks || 1, got;
        if (checkboxSet) {
          // "select all that apply": all correct = full marks; one box wrong = partial credit (as in trial marking guidelines)
          if (!anyChecked) got = 0;
          else if (ok === units) got = max;
          else if (ok === units - 1 && max > 1) got = Math.floor(max / 2);
          else got = 0;
        } else got = ok === units ? max : Math.floor(max * ok / units);
        return { got: got, max: max, detail: ok + ' of ' + units + ' parts correct' };
      },
      review: function (v) {
        var ans = item.answer; if (!ans || typeof ans !== 'object') return;
        v = v || {};
        Object.keys(ans).forEach(function (n) {
          var want = ans[n];
          var els = scope.querySelectorAll('[name="' + n + '"]');
          if (!els.length) return;
          if (els[0].type === 'radio' || els[0].type === 'checkbox') {
            Array.prototype.forEach.call(els, function (inp) {
              var should = Array.isArray(want) ? want.map(String).indexOf(inp.value) >= 0 : String(want) === inp.value;
              if (should) inp.closest('td, li, label') && inp.closest('td, li, label').classList.add('is-answer-cell');
              if (should) inp.parentNode.style.background = '#d8f5df';
              else if (inp.checked) inp.parentNode.style.background = '#ffe0e6';
            });
          } else {
            var inp = els[0];
            var right = normalise(v[n]) === normalise(want);
            inp.classList.add(right ? 'input-correct' : 'input-wrong');
            if (!right) {
              var label = inp.tagName === 'SELECT' ? (Array.prototype.filter.call(inp.options, function (o) { return o.value === String(want); })[0] || {}).text : want;
              inp.title = 'Answer: ' + label;
              var tip = el('<div style="font-size:.8em;color:#00804f;font-weight:700">✔ ' + escapeHtml(label) + '</div>');
              inp.insertAdjacentElement('afterend', tip);
            }
          }
        });
      },
    };
    function normalise(x) { return String(x == null ? '' : x).trim().toLowerCase().replace(/\s+/g, ' '); }
    function cssEscape(s) { return (window.CSS && CSS.escape) ? CSS.escape(s) : s.replace(/[^\w-]/g, '\\$&'); }

    // wire up inputs
    setTimeout(function () {
      Array.prototype.forEach.call(inputs(), function (inp) {
        inp.addEventListener('change', function () { ctx.save(readValue()); });
        if (inp.type === 'text' || inp.tagName === 'TEXTAREA') inp.addEventListener('input', function () { ctx.save(readValue()); });
      });
    });
    // sortable lists (drag and drop)
    Array.prototype.forEach.call(scope.querySelectorAll('.sortable'), function (s, i) {
      var id = s.id || ('s' + i);
      var rec = { id: id, el: s, initial: Array.prototype.map.call(s.children, function (c) { return c.getAttribute('data-id'); }) };
      if (window.Sortable) rec.sortable = Sortable.create(s, { animation: 150, ghostClass: 'sortable-ghost', onSort: function () { ctx.save(readValue()); } });
      sortables.push(rec);
    });
    return api;
  };

  // authored helper types are converted to html items with generated controls
  ITEMS.prepareAuthored = function (item) {
    var key = item.key.replace(/\W/g, '_');
    if (item.type === 'multi') {
      item.controlHtml = '<p class="hoa-q-0em">Select all that apply.</p><ul class="hoa-q-mc-checkbox" style="margin-top:.5em">' +
        item.options.map(function (o, i) { return '<li><label><input class="hoa-checkbox" type="checkbox" name="' + key + '" value="' + (i + 1) + '">' + o + '</label></li>'; }).join('') + '</ul>';
      if (item.answer) { var a = {}; a[key] = item.answer.map(String); item.answer = a; }
      item.type = 'html'; item.kind = 'multi';
    } else if (item.type === 'grid') {
      var head = '<tr><th style="vertical-align:bottom">' + (item.rowHeader || '') + '</th>' + item.columns.map(function (c) { return '<th style="min-width:6em;text-align:center">' + c + '</th>'; }).join('') + '</tr>';
      var body = item.rows.map(function (r, ri) {
        return '<tr><td style="vertical-align:middle">' + r + '</td>' + item.columns.map(function (c, ci) {
          return '<td class="centre" style="vertical-align:middle"><input type="radio" name="' + key + '-' + (ri + 1) + '" value="' + (ci + 1) + '"></td>';
        }).join('') + '</tr>';
      }).join('');
      item.controlHtml = '<table class="hoa-table-multiselect"><thead>' + head + '</thead><tbody>' + body + '</tbody></table>';
      if (item.answer) { var g = {}; item.answer.forEach(function (c, ri) { g[key + '-' + (ri + 1)] = String(c); }); item.answer = g; }
      item.type = 'html'; item.kind = 'grid';
    } else if (item.type === 'order') {
      var hdr = (item.header || []).map(function (h) { return '<span class="order-cell">' + h + '</span>'; }).join('');
      var rows = item.rows.map(function (r, i) {
        var cells = (Array.isArray(r) ? r : [r]).map(function (c) { return '<span class="order-cell">' + c + '</span>'; }).join('');
        return '<div class="order-row" data-id="' + (i + 1) + '">' + cells + '</div>';
      }).join('');
      item.controlHtml = '<div class="order-list">' + (hdr ? '<div class="order-head"><span class="order-cell" style="flex:0 0 1.2em;border:none"></span>' + hdr + '</div>' : '') +
        '<div class="sortable" id="' + key + '-sort">' + rows + '</div></div>';
      if (item.answer) { var o = {}; o[key + '-sort'] = item.answer.map(String); item.answer = o; }
      item.type = 'html'; item.kind = 'order';
    }
  };

  // ---------- written response (NESA item type 2, CKEditor 4) ----------
  // Same toolbar, dialogs and menus as the NESA exam's text box: Σ opens NESA's "Formula" keypad panel,
  // ABC is a dropdown with "Enable/Disable Spell-check", and the Table dialog has NESA's six fields.
  // CKEditor needs absolute icon URLs (it prefixes relative ones with its CDN path)
  var SIGMA_ICON = new URL('img/sigma.svg', location.href).href;
  var ABC_ICON = new URL('img/abc.svg', location.href).href;
  function loadMathQuill() {
    if (window.MathQuill) return Promise.resolve();
    return (window.jQuery ? Promise.resolve() : loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js'))
      .then(function () { return loadScript('https://cdnjs.cloudflare.com/ajax/libs/mathquill/0.10.1/mathquill.min.js'); });
  }
  // NESA formula keypad: [label (LaTeX, or text for digits), action, argument, hover hint, colour]
  // actions: w = write LaTeX, c = cmd, k = keystroke, f = several steps
  var FORMULA_KEYS = [
    [['7', 'w', '7', 'Seven 7', 'y', 1], ['8', 'w', '8', 'Eight 8', 'y', 1], ['9', 'w', '9', 'Nine 9', 'y', 1], ['÷', 'w', '÷', 'Divided by ÷', 'g', 1],
      ['°', 'w', '°', 'Degree symbol °', 'b'], ['\\cdot', 'w', '\\cdot', 'Dot operator ·', 'b'], ['\\pm', 'w', '±', 'Plus or minus ±', 'b'], ['\\sqrt{ }', 'c', '\\sqrt', 'Square root', 'b'], ['\\sqrt[ ]{ }', 'w', '\\sqrt[]{}', 'Nth root', 'b'], ['<', 'w', '<', 'Less then <', 'b']],
    [['4', 'w', '4', 'Four 4', 'y', 1], ['5', 'w', '5', 'Five 5', 'y', 1], ['6', 'w', '6', 'Six 6', 'y', 1], ['×', 'w', '×', 'Multiplied by ×', 'g', 1],
      ['>', 'w', '>', 'Greater then >', 'b'], ['\\le', 'w', '\\le', 'Less then or equal to ≤', 'b'], ['\\ge', 'w', '\\ge', 'Greater then or equal to ≥', 'b'], ['\\ne', 'w', '\\neq', 'Not equal to ≠', 'b'], ['\\equiv', 'w', '\\equiv', 'Equivalent to ≡', 'b'], ['\\sim', 'w', '\\sim', 'Tilde ~', 'b']],
    [['1', 'w', '1', 'One 1', 'y', 1], ['2', 'w', '2', 'Two 2', 'y', 1], ['3', 'w', '3', 'Three 3', 'y', 1], ['-', 'w', '-', 'Minus -', 'g', 1],
      ['\\simeq', 'w', '\\simeq', 'Approximately equal to ≃', 'b'], ['\\infty', 'w', '\\infty', 'Infinity ∞', 'b'], ['\\propto', 'w', '\\propto', 'Proportional to ∝', 'b'], ['\\leftarrow', 'w', '\\leftarrow', 'Left arrow ←', 'b'], ['\\rightarrow', 'w', '\\rightarrow', 'Right arrow →', 'b'], ['<span class="sym">⇌</span>', 'f', function (mf) { mf.typedText('⇌'); }, 'Equilibrium arrow ⇌', 'b', 1]],
    [['0', 'w', '0', 'Zero 0', 'y', 1], ['.', 'w', '.', 'Decimal', 'y', 1], [',', 'w', ',', 'Comma', 'y', 1], ['+', 'w', '+', 'Plus +', 'g', 1],
      ['_{ }^{ }\\overline{ }', 'f', function (mf) { mf.write('_{}^{}'); mf.keystroke('Right'); mf.cmd('\\overline'); }, 'Atomic symbol', 'b'],
      ['\\overline{ }_{ }^{ }', 'f', function (mf) { mf.cmd('\\overline'); mf.keystroke('Right'); mf.write('_{}^{}'); ['Left', 'Left', 'Left', 'Left'].forEach(function (k) { mf.keystroke(k); }); }, 'Polyatomic ion', 'b'],
      ['\\overline{ }^{ }', 'f', function (mf) { mf.cmd('\\overline'); mf.keystroke('Right'); mf.cmd('^'); mf.keystroke('Left'); mf.keystroke('Left'); }, 'Exponent', 'b'],
      ['\\overline{ }_{ }', 'f', function (mf) { mf.cmd('\\overline'); mf.keystroke('Right'); mf.cmd('_'); mf.keystroke('Left'); mf.keystroke('Left'); }, 'Subscript', 'b'],
      ['\\frac{ }{ }', 'c', '\\frac', 'Fraction', 'b'], ['\\left|\\ \\right|', 'c', '|', 'Absolute value', 'b']],
    [['<i class="fas fa-caret-left"></i>', 'k', 'Left', 'Left', 'l', 1], ['<i class="fas fa-caret-right"></i>', 'k', 'Right', 'Right', 'l', 1], ['<i class="fas fa-backspace"></i>', 'k', 'Backspace', 'Backspace', 'l', 1], ['=', 'w', '=', 'Equals =', 'g', 1],
      ['\\overrightarrow{ }', 'c', '\\overrightarrow', 'Vector', 'b'], ['<span class="sym">∫</span>', 'w', '\\int', 'Integral', 'b', 1], ['\\int_{ }^{ }', 'w', '\\int_{}^{}', 'Integral with limits', 'b'], ['\\Sigma', 'w', '\\Sigma', 'Sigma', 'b'], ['\\sum_{ }^{ }', 'c', '\\sum', 'Sigma with limits', 'b'], ['', '', '', '', 'b', 1]],
  ];
  // "Show symbols": the same Greek letters as NESA's special characters (LaTeX where MathQuill has a command)
  var GREEK = 'Alpha,alpha,Beta,beta,Gamma,gamma,Delta,delta,Epsilon,epsilon,Zeta,zeta,Eta,eta,Theta,theta,Iota,iota,Kappa,kappa,Lambda,lambda,Mu,mu,Nu,nu,Xi,xi,Omicron,omicron,Pi,pi,Rho,rho,Sigma,sigma,Tau,tau,Upsilon,upsilon,Phi,phi,Chi,chi,Psi,psi,Omega,omega'.split(',');
  var GREEK_CHARS = 'ΑαΒβΓγΔδΕεΖζΗηΘθΙιΚκΛλΜμΝνΞξΟοΠπΡρΣσΤτΥυΦφΧχΨψΩω';
  var MQ_GREEK = { Gamma: 1, Delta: 1, Theta: 1, Lambda: 1, Xi: 1, Pi: 1, Sigma: 1, Upsilon: 1, Phi: 1, Psi: 1, Omega: 1 };
  var openFormula = null;
  function openMathDialog(editor, existing) {
    var bookmarks = null;
    try { bookmarks = editor.getSelection().createBookmarks2(true); } catch (e) { }
    loadMathQuill().then(function () {
      if (openFormula) openFormula.remove();
      var MQ = MathQuill.getInterface(2);
      var p = el('<div class="conc-formula" role="dialog" aria-label="Formula"><div class="conc-formula-header">Formula<div class="conc-formula-grip" title="Drag to move"><span></span><span></span><span></span><span></span></div><div class="close-btn" title="Close">×</div><div class="ok-btn" title="Insert">✓</div></div>' +
        '<div class="conc-formula-input"><span class="mf"></span></div><div class="conc-formula-hint"></div><div class="conc-formula-keyboard"></div>' +
        '<div class="conc-formula-symbols-toggle"><a href="#">Show symbols</a></div><div class="conc-formula-symbols" hidden></div>' +
        '<div class="conc-formula-footer"><div class="display-selector">Display: <span class="dval">inline</span> <label><input type="radio" name="fdisp" value="inline" checked> Inline</label><br><label><input type="radio" name="fdisp" value="block"> Block</label></div>' +
        '<div class="fbtns"><button type="button" class="f-ok">OK</button><button type="button" class="f-cancel">Cancel</button></div></div></div>');
      document.body.appendChild(p); openFormula = p;
      var mf = MQ.MathField(p.querySelector('.mf'), { spaceBehavesLikeTab: false, autoCommands: 'pi sqrt sum', autoOperatorNames: 'sin cos tan log ln' });
      if (existing && existing.latex) mf.latex(existing.latex);
      var hint = p.querySelector('.conc-formula-hint');
      function key(def, cls) {
        var b = el('<button type="button" class="fkey ' + cls + '"></button>');
        if (def[5] || !def[0]) b.innerHTML = def[0]; else { var s = document.createElement('span'); b.appendChild(s); try { MQ.StaticMath(s).latex(def[0]); } catch (e) { s.textContent = def[0]; } }
        if (def[3]) { b.addEventListener('mouseenter', function () { hint.textContent = def[3]; }); b.addEventListener('mouseleave', function () { hint.textContent = ''; }); }
        b.addEventListener('mousedown', function (e) { e.preventDefault(); });
        b.addEventListener('click', function () {
          if (!def[1]) return;
          if (def[1] === 'w') mf.write(def[2]); else if (def[1] === 'c') mf.cmd(def[2]); else if (def[1] === 'k') mf.keystroke(def[2]); else if (def[1] === 'f') def[2](mf);
          mf.focus();
        });
        return b;
      }
      var kb = p.querySelector('.conc-formula-keyboard');
      FORMULA_KEYS.forEach(function (row) { var r = el('<div class="conc-formula-row"></div>'); row.forEach(function (d) { r.appendChild(key(d, { y: 'yellow-btn', g: 'gray-btn', b: 'blue-btn', l: 'light-gray-btn' }[d[4]])); }); kb.appendChild(r); });
      var sym = p.querySelector('.conc-formula-symbols');
      GREEK.forEach(function (name, i) {
        var ch = GREEK_CHARS[i], latex = /^[a-z]/.test(name) ? (name === 'omicron' ? 'o' : '\\' + name) : (MQ_GREEK[name] ? '\\' + name : ch);
        var b = el('<button type="button" class="fkey symbol-btn gray-btn"></button>'); b.textContent = ch; b.title = 'Greek ' + (/^[A-Z]/.test(name) ? 'capital' : 'small') + ' letter ' + name;
        b.addEventListener('mousedown', function (e) { e.preventDefault(); });
        b.addEventListener('click', function () { if (latex === ch) mf.typedText(ch); else mf.write(latex); mf.focus(); });
        sym.appendChild(b);
      });
      var pl = el('<button type="button" class="fkey symbol-btn gray-btn" title="Plimsoll">⦵</button>');
      pl.addEventListener('mousedown', function (e) { e.preventDefault(); }); pl.addEventListener('click', function () { mf.typedText('⦵'); mf.focus(); }); sym.appendChild(pl);
      var tog = p.querySelector('.conc-formula-symbols-toggle a');
      tog.addEventListener('click', function (e) { e.preventDefault(); sym.hidden = !sym.hidden; tog.textContent = sym.hidden ? 'Show symbols' : 'Hide symbols'; place(); });
      var disp = existing && existing.block ? 'block' : 'inline';
      Array.prototype.forEach.call(p.querySelectorAll('input[name=fdisp]'), function (r) { r.checked = r.value === disp; r.addEventListener('change', function () { disp = r.value; p.querySelector('.dval').textContent = disp; }); });
      p.querySelector('.dval').textContent = disp;
      // place at the top of the window, centred; drag by the header
      function place() { var w = p.offsetWidth; if (!p._moved) { p.style.left = Math.max(4, (window.innerWidth - w) / 2) + 'px'; p.style.top = '4px'; } }
      place();
      p.querySelector('.conc-formula-header').addEventListener('mousedown', function (e) {
        if (e.target.closest('.close-btn, .ok-btn')) return;
        e.preventDefault(); var sx = e.clientX, sy = e.clientY, ox = p.offsetLeft, oy = p.offsetTop;
        function mv(ev) { p._moved = true; p.style.left = Math.max(0, Math.min(window.innerWidth - 60, ox + ev.clientX - sx)) + 'px'; p.style.top = Math.max(0, Math.min(window.innerHeight - 40, oy + ev.clientY - sy)) + 'px'; }
        function up() { document.removeEventListener('mousemove', mv); document.removeEventListener('mouseup', up); }
        document.addEventListener('mousemove', mv); document.addEventListener('mouseup', up);
      });
      function close() { p.remove(); openFormula = null; editor.focus(); }
      function insert() {
        var latex = mf.latex(); p.remove(); openFormula = null;
        editor.focus();
        if (!latex.trim()) return;
        var holder = document.createElement('span'); holder.style.cssText = 'position:fixed;left:-9999px'; document.body.appendChild(holder);
        MQ.StaticMath(holder).latex(latex);
        var inner = holder.innerHTML.replace(/^<span[^>]*mq-math-mode[^>]*>|<\/span>$/g, ''); holder.remove();
        var span = '<span class="epc-math mq-math-mode" data-latex="' + escapeHtml(latex) + '">' + inner + '</span>';
        if (existing && existing.element) {
          var target = existing.block ? existing.element.getAscendant('div', true) || existing.element : existing.element;
          var fresh = CKEDITOR.dom.element.createFromHtml(disp === 'block' ? '<div class="epc-math-block">' + span + '</div>' : span, editor.document);
          fresh.replace(target); editor.fire('change'); return;
        }
        try { if (bookmarks) editor.getSelection().selectBookmarks(bookmarks); } catch (e) { }
        editor.insertHtml(disp === 'block' ? '<div class="epc-math-block">' + span + '</div><p>&nbsp;</p>' : span + '&nbsp;');
      }
      p.querySelector('.close-btn').addEventListener('click', close); p.querySelector('.f-cancel').addEventListener('click', close);
      p.querySelector('.ok-btn').addEventListener('click', insert); p.querySelector('.f-ok').addEventListener('click', insert);
      p.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); else if (e.key === 'Enter') { e.preventDefault(); insert(); } });
      setTimeout(function () { mf.focus(); }, 50);
    }).catch(function () { alert('The formula tool needs an internet connection.'); });
  }
  // NESA trims the Table dialog to Rows, Columns, Headers / Width, Height, Align
  function trimTableDialog(ev) {
    var name = ev.data.name;
    if (name === 'specialchar') { ev.data.definition.minHeight = 90; return; }
    if (name !== 'table' && name !== 'tableProperties') return;
    var def = ev.data.definition, info = def.getContents('info'); if (!info || info._epcTrimmed) return;
    info._epcTrimmed = true;
    var rows = info.get('txtRows'), cols = info.get('txtCols'), hdr = info.get('selHeaders'), w = info.get('txtWidth'), h = info.get('txtHeight'), al = info.get('cmbAlign');
    if (rows) rows['default'] = 1; if (cols) cols['default'] = 1;
    if (al && al.items) al.items = [['<not set>', ''], ['Left', 'left'], ['Centre', 'center'], ['Right', 'right']];
    var hidden = ['txtBorder', 'txtCellSpace', 'txtCellPad', 'txtCaption', 'txtSummary'].map(function (id) { return info.get(id); }).filter(Boolean);
    hidden.forEach(function (e) { e.hidden = true; });
    var b = info.get('txtBorder'); if (b) b['default'] = 1;   // tables keep a visible border in the saved answer
    info.elements = [
      { type: 'hbox', widths: ['50%', '50%'], children: [
        { type: 'vbox', padding: 0, children: [rows, cols, { type: 'html', html: '&nbsp;' }, hdr].filter(Boolean) },
        { type: 'vbox', padding: 0, children: [w, h, { type: 'html', html: '&nbsp;' }, al].filter(Boolean) },
      ] },
      { type: 'vbox', hidden: true, children: hidden },
    ];
    def.minWidth = 240; def.minHeight = 140;
  }
  function registerCkePlugins() {
    if (!window.CKEDITOR || CKEDITOR.plugins.registered.epcmath) return;
    CKEDITOR.on('dialogDefinition', trimTableDialog);
    CKEDITOR.plugins.add('epcmath', { init: function (editor) {
      editor.addCommand('openMathFormula', { exec: function (ed) { openMathDialog(ed); }, canUndo: false, readOnly: 0 });
      editor.ui.addButton('Sigma', { label: 'Insert Formula', command: 'openMathFormula', icon: SIGMA_ICON });
      // double-click a formula to edit it
      editor.on('doubleclick', function (ev) {
        var t = ev.data.element, m = t && (t.hasClass && t.hasClass('epc-math') ? t : t.getAscendant(function (x) { return x.hasClass && x.hasClass('epc-math'); }));
        if (!m) return;
        ev.cancel();
        openMathDialog(editor, { latex: m.getAttribute('data-latex') || '', element: m, block: !!m.getAscendant(function (x) { return x.hasClass && x.hasClass('epc-math-block'); }) });
      }, null, null, 1);
    } });
    CKEDITOR.plugins.add('epcspell', { requires: 'menubutton', init: function (editor) {
      var on = false;
      editor.addCommand('epcSpell', { canUndo: false, readOnly: 0, exec: function (ed) {
        on = !on; var e2 = ed.editable(); e2.setAttribute('spellcheck', on ? 'true' : 'false');
        e2.$.blur(); e2.focus();
      } });
      editor.addMenuGroup('epcspell');
      editor.addMenuItems({ epcSpellToggle: { label: 'Enable Spell-check', group: 'epcspell', command: 'epcSpell', order: 1 } });
      editor.ui.add('Scayt', CKEDITOR.UI_MENUBUTTON, {
        label: 'Spell Check As You Type', icon: ABC_ICON, modes: { wysiwyg: 1 },
        onMenu: function () { editor.getMenuItem('epcSpellToggle').label = on ? 'Disable Spell-check' : 'Enable Spell-check'; return { epcSpellToggle: CKEDITOR.TRISTATE_OFF }; },
      });
      editor.on('contentDom', function () {
        var ed2 = editor.editable(); ed2.setAttribute('spellcheck', on ? 'true' : 'false');
        // with spell-check on, right-clicking text shows the browser's menu (with spelling suggestions); tables keep the editor's menu
        ed2.$.addEventListener('contextmenu', function (e) { if (on && !(e.target.closest && e.target.closest('table'))) e.stopImmediatePropagation(); }, true);
      });
    } });
  }
  // the same special characters as NESA (Greek letters and the Plimsoll symbol)
  var NESA_SPECIAL_CHARS = GREEK.map(function (n) { return ['&' + n + ';', 'Greek ' + (/^[A-Z]/.test(n) ? 'capital' : 'small') + ' letter ' + n.charAt(0).toUpperCase() + n.slice(1)]; }).concat([['&#10677;', 'Plimsoll']]);
  var CKE_CONFIG = {
    versionCheck: false,
    language: 'en-au',
    toolbar: [{ name: 'nesa', items: ['Bold', 'Underline', 'Italic', 'BulletedList', 'NumberedList', 'Indent', 'Outdent', 'Table', 'Subscript', 'Superscript', 'Cut', 'Copy', 'Paste', 'Undo', 'Redo', 'SpecialChar', 'Sigma', 'Scayt'] }],
    removeButtons: '',
    allowedContent: true,
    extraPlugins: 'divarea,autogrow,menubutton,tableresize,epcmath,epcspell',
    removePlugins: 'elementspath,exportpdf,scayt,wsc',
    autoGrow_minHeight: 50, autoGrow_maxHeight: 600, autoGrow_onStartup: true,
    resize_enabled: true, resize_dir: 'vertical',
    disableNativeSpellChecker: true,
    removeDialogTabs: 'table:advanced;tableProperties:advanced',
    specialChars: NESA_SPECIAL_CHARS,
  };
  function countWords(text) { var m = (text || '').replace(/ /g, ' ').trim().match(/\S+/g); return m ? m.length : 0; }
  ITEMS.text = function (item, ctx) {
    var wrap = frame(item, [hideButton(function () { return wrap; }, ctx)]);
    var control = wrap.querySelector('.item-control');
    var ta = el('<textarea class="text-fallback" placeholder="Write your response here" spellcheck="true"></textarea>');
    var limit = item.wordLimit || 0;
    var wc = el('<div class="word-count"></div>');
    control.appendChild(ta); control.appendChild(wc);
    var editor = null, pending = null, readOnly = false;
    function updateCount(html) {
      var n = countWords(html != null ? htmlToText(html) : ta.value);
      wc.textContent = limit ? n + ' / ' + limit + ' words' : n + ' words';
      wc.classList.toggle('over', limit && n > limit);
    }
    function htmlToText(h) { var d = document.createElement('div'); d.innerHTML = h.replace(/<\/(p|li|div|td)>/g, ' </$1>'); return d.textContent; }
    function emit() { var v = api.getValue(); updateCount(v); ctx.save(v); }
    ta.addEventListener('input', emit);
    function init() {
      if (editor || !window.CKEDITOR || !document.body.contains(ta)) return;
      registerCkePlugins();
      editor = CKEDITOR.replace(ta, CKE_CONFIG);
      editor.on('instanceReady', function () {
        if (pending != null) { editor.setData(pending); pending = null; }
        editor.setReadOnly(readOnly);
        updateCount(editor.getData());
      });
      editor.on('change', emit);
      editor.on('key', function () { setTimeout(emit, 0); });
    }
    var api = {
      el: wrap,
      getValue: function () { return editor ? editor.getData() : (ta.value ? '<p>' + escapeHtml(ta.value).replace(/\n/g, '<br>') + '</p>' : ''); },
      setValue: function (v) { v = v || ''; if (editor && editor.status === 'ready') editor.setData(v); else { pending = v; ta.value = htmlToText(v); } updateCount(v); },
      isAnswered: function (v) { return countWords(htmlToText(v || '')) > 0; },
      setReadOnly: function (ro) { readOnly = ro; ta.readOnly = ro; if (editor && editor.status === 'ready') editor.setReadOnly(ro); },
      onShow: init,
      autoMark: function () { return null; },
    };
    updateCount('');
    return api;
  };

  // ---------- SQL editor (NESA item type 9: ace + sql.js) ----------
  var sqlPromise = null;
  function getSql() {
    if (!sqlPromise) sqlPromise = window.initSqlJs({ locateFile: function (f) { return 'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/' + f; } });
    return sqlPromise;
  }
  ITEMS.sql = function (item, ctx) {
    var ex = ITEMS.extractInitial(item.question);
    if (ex.initial && !item.setup) item.setup = ex.initial;
    item.question = ex.html;
    var db = null, editor = null, pendingValue = '', readOnly = false;
    var runBtn = button('Run', 'nsw-button--dark', run);
    var resetBtn = button('Reset DB', 'nsw-button--dark', function () { db = null; out.innerHTML = '<span class="muted">Database reset to its original contents.</span>'; });
    var wrap = frame(item, [fullscreenButton(function () { return wrap; }, function () { editor && setTimeout(function () { editor.resize(); }, 50); }), runBtn, resetBtn, hideButton(function () { return wrap; }, ctx)]);
    var box = el('<div class="sql-wrap"><div class="sql-tab">Query</div><div class="sql-editor"></div><div class="sql-resizer" title="Drag to resize"></div><div class="sql-results"><span class="muted">No results to display</span></div></div>');
    wrap.querySelector('.item-control').appendChild(box);
    var edDiv = box.querySelector('.sql-editor'), out = box.querySelector('.sql-results');
    var fallback = null, tablesEl = null;
    // item.showTables: list the starting tables above the editor (so the question doesn't have to repeat them)
    if (item.showTables && item.setup && window.initSqlJs) {
      tablesEl = el('<div class="sql-tables"><span class="muted">Loading tables…</span></div>');
      box.parentNode.insertBefore(tablesEl, box);
      getSql().then(function (SQL) {
        var d = new SQL.Database(); d.run(item.setup);
        var names = (d.exec("SELECT name FROM sqlite_master WHERE type = 'table' ORDER BY rowid")[0] || { values: [] }).values.map(function (r) { return r[0]; });
        tablesEl.innerHTML = names.map(function (n) {
          var r = d.exec('SELECT * FROM "' + n.replace(/"/g, '""') + '"')[0];
          var cols = r ? r.columns : [], vals = r ? r.values : [];
          return '<p><strong>' + escapeHtml(n) + '</strong></p><table class="hoa-table-normal"><thead><tr>' + cols.map(function (c) { return '<th>' + escapeHtml(c) + '</th>'; }).join('') + '</tr></thead><tbody>' +
            vals.map(function (row) { return '<tr>' + row.map(function (c) { return '<td>' + escapeHtml(c == null ? 'NULL' : c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>';
        }).join('');
        d.close();
      }).catch(function () { tablesEl.innerHTML = '<span class="err">The tables could not be loaded (check your internet connection).</span>'; });
    }

    // drag to resize editor height
    box.querySelector('.sql-resizer').addEventListener('mousedown', function (e) {
      var startY = e.clientY, startH = edDiv.offsetHeight;
      function mv(ev) { edDiv.style.height = Math.max(60, startH + ev.clientY - startY) + 'px'; editor && editor.resize(); }
      function up() { document.removeEventListener('mousemove', mv); document.removeEventListener('mouseup', up); }
      document.addEventListener('mousemove', mv); document.addEventListener('mouseup', up); e.preventDefault();
    });

    function init() {
      if (editor || fallback) return;
      if (window.ace) {
        editor = ace.edit(edDiv, { mode: 'ace/mode/sql', showPrintMargin: false, fontSize: Math.round(15 * (ACCESS ? [1, 1.2, 1.4, 1.6][ACCESS.fontIndex] : 1)), wrap: true, useWorker: false });
        editor.setValue(pendingValue || '', 1);
        editor.setReadOnly(readOnly);
        editor.session.on('change', function () { ctx.save(editor.getValue()); });
        editor.commands.addCommand({ name: 'run', bindKey: { win: 'Ctrl-Enter', mac: 'Command-Enter' }, exec: run });
      } else {
        fallback = el('<textarea style="width:100%;height:100%;border:none;font-family:Consolas,monospace;padding:6px"></textarea>');
        fallback.value = pendingValue || ''; fallback.readOnly = readOnly;
        fallback.addEventListener('input', function () { ctx.save(fallback.value); });
        edDiv.appendChild(fallback);
      }
    }
    function query() { return editor ? editor.getValue() : fallback ? fallback.value : pendingValue; }
    function run() {
      var q = query();
      if (!q.trim()) { out.innerHTML = '<span class="muted">No results to display</span>'; return; }
      if (!window.initSqlJs) { out.innerHTML = '<span class="err">The SQL engine could not be loaded (check your internet connection).</span>'; return; }
      out.innerHTML = '<span class="muted">Running…</span>';
      getSql().then(function (SQL) {
        if (!db) { db = new SQL.Database(); if (item.setup) db.run(item.setup); }
        var res;
        try { res = db.exec(q); } catch (err) { out.innerHTML = '<div class="err">' + escapeHtml(err.message) + '</div>'; return; }
        if (!res.length) { out.innerHTML = '<span class="muted">Query ran successfully. No results to display.</span>'; return; }
        var r = res[res.length - 1];
        out.innerHTML = '<table><thead><tr>' + r.columns.map(function (c) { return '<th>' + escapeHtml(c) + '</th>'; }).join('') + '</tr></thead><tbody>' +
          r.values.map(function (row) { return '<tr>' + row.map(function (c) { return '<td>' + escapeHtml(c == null ? 'NULL' : c) + '</td>'; }).join('') + '</tr>'; }).join('') +
          '</tbody></table><div class="muted" style="margin-top:4px;font-size:.85em">' + r.values.length + ' row' + (r.values.length === 1 ? '' : 's') + '</div>';
      }).catch(function (err) { out.innerHTML = '<span class="err">' + escapeHtml(String(err)) + '</span>'; });
    }
    var api = {
      el: wrap,
      getValue: query,
      setValue: function (v) { pendingValue = v || ''; if (editor) editor.setValue(pendingValue, 1); if (fallback) fallback.value = pendingValue; },
      isAnswered: function (v) { return !!(v && v.trim()); },
      setReadOnly: function (ro) { readOnly = ro; editor && editor.setReadOnly(ro); if (fallback) fallback.readOnly = ro; },
      stimEl: tablesEl,
      onShow: function () { init(); editor && editor.resize(); },
      // Full marks only when the output matches the expected output; otherwise left for self-marking.
      autoMark: function (v) {
        var c = item._sqlCheck;
        if (!c || c.value !== v || !c.match) return null;
        return { got: item.marks || 0, max: item.marks || 0, detail: 'output matches the expected output' };
      },
      review: function (v) {
        var c = item._sqlCheck;
        if (!c || c.value !== v || c.match || !v || !String(v).trim()) return;
        var box = el('<div class="sql-check"><p><i class="fas fa-times-circle"></i> <strong>Output check:</strong> <span class="why"></span> Mark this one yourself using the marking guidelines.</p><div class="label">Expected output</div><div class="exp"></div></div>');
        box.querySelector('.why').textContent = c.reason + '.';
        box.querySelector('.exp').innerHTML = c.expectedHtml || '';
        wrap.querySelector('.item-extra').appendChild(box);
      },
    };
    return api;
  };

  // ---------- SQL output checking ----------
  // item.sqlAnswer = { queries: ['SELECT ...', ...], orderBy: [[col, 'asc'|'desc'], ...] }
  // Any of the queries is accepted. orderBy uses 0-based columns of the expected output; without it row order is ignored.
  // Column names/aliases and column order are ignored; the values in every row must match.
  function runQuery(SQL, setup, q) {
    var db = new SQL.Database();
    try {
      if (setup) db.run(setup);
      var res = db.exec(q);
      if (!res.length) return { error: 'the query did not return any rows or columns' };
      var r = res[res.length - 1];
      return { columns: r.columns, rows: r.values };
    } catch (err) { return { error: err.message }; }
    finally { db.close(); }
  }
  function normCell(c) {
    if (c == null) return '\u0000NULL';
    if (typeof c === 'number') return String(Math.round(c * 1e6) / 1e6);
    var s = String(c).trim();
    if (/^-?\d+(\.\d+)?$/.test(s)) return String(Math.round(parseFloat(s) * 1e6) / 1e6);
    return s;
  }
  function cmpCell(a, b) {
    if (a == null || b == null) return a == null ? (b == null ? 0 : -1) : 1;   // SQLite: NULLs sort first
    if (typeof a === 'number' && typeof b === 'number') return a - b;
    a = String(a); b = String(b); return a < b ? -1 : a > b ? 1 : 0;
  }
  function compareResults(exp, got, orderBy) {
    if (got.error) return { match: false, level: 0, reason: 'Your query gave an error (' + got.error + ')' };
    var ec = exp.columns.length, gc = got.columns.length;
    if (gc !== ec) return { match: false, level: 1, reason: 'Your output has ' + gc + ' column' + (gc === 1 ? '' : 's') + '; the expected output has ' + ec };
    if (got.rows.length !== exp.rows.length) return { match: false, level: 2, reason: 'Your output has ' + got.rows.length + ' row' + (got.rows.length === 1 ? '' : 's') + '; the expected output has ' + exp.rows.length };
    // match each expected column to one of the student's columns with the same values
    function colKey(rows, j) { return rows.map(function (r) { return normCell(r[j]); }).sort().join('\u0001'); }
    var used = [], map = [];
    for (var j = 0; j < ec; j++) {
      var k = colKey(exp.rows, j), found = -1;
      for (var g = 0; g < gc; g++) if (used.indexOf(g) < 0 && colKey(got.rows, g) === k) { found = g; break; }
      if (found < 0) return { match: false, level: 3, reason: 'The values in your output are different from the expected output (check the columns, conditions and joins)' };
      used.push(found); map.push(found);
    }
    var rows = got.rows.map(function (r) { return map.map(function (g) { return r[g]; }); });
    function rowKey(r) { return r.map(normCell).join('\u0001'); }
    var a = exp.rows.map(rowKey).sort(), b = rows.map(rowKey).sort();
    for (var i = 0; i < a.length; i++) if (a[i] !== b[i]) return { match: false, level: 4, reason: 'The rows in your output are different from the expected output (check the conditions and joins)' };
    // row order: the student's rows must be sorted by the required columns (ties may be in any order)
    if (orderBy && orderBy.length) {
      for (var n = 1; n < rows.length; n++) {
        for (var o = 0; o < orderBy.length; o++) {
          var col = orderBy[o][0], dir = /desc/i.test(orderBy[o][1] || '') ? -1 : 1;
          var c = cmpCell(rows[n - 1][col], rows[n][col]) * dir;
          if (c < 0) break;
          if (c > 0) return { match: false, level: 5, reason: 'Your output has the right rows but they are not in the required order (check ORDER BY)' };
        }
      }
    }
    return { match: true };
  }
  function resultTable(r) {
    return '<table class="hoa-table-normal"><thead><tr>' + r.columns.map(function (c) { return '<th>' + escapeHtml(c) + '</th>'; }).join('') + '</tr></thead><tbody>' +
      r.rows.map(function (row) { return '<tr>' + row.map(function (c) { return '<td>' + escapeHtml(c == null ? 'NULL' : c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>';
  }
  // Runs the student's query and the model answer(s); stores the outcome on item._sqlCheck for autoMark/review/report.
  ITEMS.checkSql = function (item, value) {
    var ans = item.sqlAnswer;
    if (item.type !== 'sql' || !ans || !ans.queries || !ans.queries.length || !value || !String(value).trim() || !window.initSqlJs) return Promise.resolve(null);
    if (!item.setup) item.setup = ITEMS.extractInitial(item.question).initial;   // NESA items keep their tables in the question HTML
    return getSql().then(function (SQL) {
      var got = runQuery(SQL, item.setup, value), best = null, firstExp = null;
      ans.queries.forEach(function (q) {
        if (best && best.match) return;
        var exp = runQuery(SQL, item.setup, q);
        if (exp.error) { console.warn('model answer failed', exp.error); return; }
        if (!firstExp) firstExp = exp;
        var r = compareResults(exp, got, ans.orderBy);
        if (!best || r.match || r.level > best.level) { best = r; best.exp = exp; }
      });
      if (!best) return null;
      item._sqlCheck = { value: value, match: best.match, reason: best.reason || '', expectedHtml: resultTable(best.exp) + (ans.queries.length > 1 ? '<p class="muted" style="font-size:.85em">Other correct answers may give slightly different output.</p>' : '') };
      return item._sqlCheck;
    }).catch(function (e) { console.warn(e); return null; });
  };

  // ---------- spreadsheet formula questions (auto-marked with HyperFormula) ----------
  // item.sheet = rows from A1 (numbers, strings, null, or '=formula'); item.sheets = { OtherSheet: rows } (optional)
  // item.cells = [{ cell: 'D2', fill: 'D2:D6' (optional), answer: '=B2*C2' }]; the response is { D2: '=...' }
  var hfPromise = null;
  function getHF() {
    if (window.HyperFormula) return Promise.resolve(window.HyperFormula);
    if (!hfPromise) hfPromise = loadScript('https://cdn.jsdelivr.net/npm/hyperformula@2.7.1/dist/hyperformula.full.min.js').then(function () { return window.HyperFormula; });
    return hfPromise;
  }
  function colName(c) { var s = ''; c++; while (c > 0) { var m = (c - 1) % 26; s = String.fromCharCode(65 + m) + s; c = Math.floor((c - 1) / 26); } return s; }
  function parseCell(a) { var m = /^\$?([A-Z]+)\$?(\d+)$/i.exec(String(a).trim()); if (!m) return null; var c = 0; m[1].toUpperCase().split('').forEach(function (ch) { c = c * 26 + ch.charCodeAt(0) - 64; }); return { col: c - 1, row: +m[2] - 1 }; }
  function parseRange(r) { var p = String(r).split(':'); var a = parseCell(p[0]), b = parseCell(p[1] || p[0]); return { c1: Math.min(a.col, b.col), c2: Math.max(a.col, b.col), r1: Math.min(a.row, b.row), r2: Math.max(a.row, b.row) }; }
  function engineFormula(f) {
    f = String(f || '').trim(); if (!f) return '';
    if (f[0] !== '=') f = '=' + f;
    f = f.replace(/[“”]/g, '"').replace(/[‘’]/g, "'");
    var out = '', inStr = false;   // bare TRUE/FALSE -> TRUE()/FALSE() for the engine
    for (var i = 0; i < f.length; i++) {
      var ch = f[i];
      if (ch === '"') { inStr = !inStr; out += ch; continue; }
      if (!inStr) { var m = /^(TRUE|FALSE)(?![\w(.])/i.exec(f.slice(i)); if (m && !/[\w.$]/.test(f[i - 1] || '')) { out += m[1].toUpperCase() + '()'; i += m[0].length - 1; continue; } }
      out += ch;
    }
    return out;
  }
  // Builds the sheet with the given formulas (filled down/across) and returns the values of every target cell.
  function evalFormulas(HF, item, formulas) {
    var sheets = { Sheet1: (item.sheet || []).map(function (r) { return r.slice(); }) };
    Object.keys(item.sheets || {}).forEach(function (n) { sheets[n] = item.sheets[n].map(function (r) { return r.slice(); }); });
    Object.keys(sheets).forEach(function (n) { sheets[n] = sheets[n].map(function (r) { return r.map(function (v) { return typeof v === 'string' && v[0] === '=' ? engineFormula(v) : v; }); }); });
    var hf = HF.buildFromSheets(sheets, { licenseKey: 'gpl-v3', thousandSeparator: '', decimalSeparator: '.', functionArgSeparator: ',', leapYear1900: false, precisionRounding: 10, smartRounding: true, dateFormats: ['DD/MM/YYYY', 'YYYY-MM-DD'] });
    var sid = hf.getSheetId('Sheet1'), out = {};
    try {
      (item.cells || []).forEach(function (t) {
        var a = parseCell(t.cell), f = engineFormula(formulas[t.cell]);
        hf.setCellContents({ sheet: sid, col: a.col, row: a.row }, [[f || null]]);
        if (t.fill && f) {
          var r = parseRange(t.fill);
          hf.copy({ start: { sheet: sid, col: a.col, row: a.row }, end: { sheet: sid, col: a.col, row: a.row } });
          for (var row = r.r1; row <= r.r2; row++) for (var col = r.c1; col <= r.c2; col++) if (row !== a.row || col !== a.col) hf.paste({ sheet: sid, col: col, row: row });
        }
      });
      (item.cells || []).forEach(function (t) {
        var r = parseRange(t.fill || t.cell), vals = [];
        for (var row = r.r1; row <= r.r2; row++) for (var col = r.c1; col <= r.c2; col++) vals.push({ cell: colName(col) + (row + 1), value: hf.getCellValue({ sheet: sid, col: col, row: row }) });
        out[t.cell] = vals;
      });
      out.__grid = hf.getSheetValues(sid);
    } finally { hf.destroy(); }
    return out;
  }
  function showVal(v) {
    if (v == null || v === '') return '';
    if (typeof v === 'object') return v.value || '#ERROR!';   // DetailedCellError
    if (typeof v === 'boolean') return v ? 'TRUE' : 'FALSE';
    if (typeof v === 'number') return String(Math.round(v * 1e9) / 1e9);
    return String(v);
  }
  function sameVal(a, b) {
    if (a && typeof a === 'object') return false;   // the student's formula gives an error
    if (typeof a === 'number' && typeof b === 'number') return Math.abs(a - b) < 1e-9;
    return showVal(a) === showVal(b);
  }
  ITEMS.checkFormula = function (item, value) {
    value = value || {};
    var key = JSON.stringify(value);
    if (item._formulaCheck && item._formulaCheck.key === key) return Promise.resolve(item._formulaCheck);
    return getHF().then(function (HF) {
      var model = {}; (item.cells || []).forEach(function (t) { model[t.cell] = t.answer; });
      var exp = evalFormulas(HF, item, model), got = evalFormulas(HF, item, value);
      var cells = (item.cells || []).map(function (t) {
        var e = exp[t.cell], g = got[t.cell];
        var ok = !!String(value[t.cell] || '').trim() && e.every(function (x, i) { return sameVal(g[i].value, x.value); });
        return { cell: t.cell, ok: ok, exp: e, got: g };
      });
      var rows = cells.map(function (c) {
        return c.exp.map(function (x, i) {
          var g = c.got[i].value, good = sameVal(g, x.value);
          return '<tr><td>' + x.cell + '</td><td>' + escapeHtml(showVal(g)) + '</td><td>' + escapeHtml(showVal(x.value)) + '</td><td>' + (good ? '<i class="fas fa-check" style="color:#00804f"></i>' : '<i class="fas fa-times" style="color:#b81237"></i>') + '</td></tr>';
        }).join('');
      }).join('');
      item._formulaCheck = {
        key: key, match: cells.every(function (c) { return c.ok; }), cells: cells,
        nRight: cells.filter(function (c) { return c.ok; }).length,
        detailHtml: '<table class="hoa-table-normal formula-results"><thead><tr><th>Cell</th><th>Your result</th><th>Expected</th><th></th></tr></thead><tbody>' + rows + '</tbody></table>',
      };
      return item._formulaCheck;
    }).catch(function (e) { console.warn(e); return null; });
  };
  ITEMS.formula = function (item, ctx) {
    var wrap = frame(item, []);
    var data = item.sheet || [];
    var targets = {}; (item.cells || []).forEach(function (t) { var a = parseCell(t.cell); targets[a.row + ':' + a.col] = t.cell; if (t.fill) { var r = parseRange(t.fill); for (var row = r.r1; row <= r.r2; row++) for (var col = r.c1; col <= r.c2; col++) if (!targets[row + ':' + col]) targets[row + ':' + col] = '~'; } });
    var nRows = data.length, nCols = data.reduce(function (m, r) { return Math.max(m, r.length); }, 0);
    Object.keys(targets).forEach(function (k) { var p = k.split(':'); nRows = Math.max(nRows, +p[0] + 1); nCols = Math.max(nCols, +p[1] + 1); });
    var html = '<div class="fx-sheet-wrap"><table class="fx-sheet"><thead><tr><th></th>';
    for (var c = 0; c < nCols; c++) html += '<th>' + colName(c) + '</th>';
    html += '</tr></thead><tbody>';
    for (var r = 0; r < nRows; r++) {
      html += '<tr><th>' + (r + 1) + '</th>';
      for (c = 0; c < nCols; c++) {
        var t = targets[r + ':' + c], v = (data[r] || [])[c];
        html += '<td data-rc="' + r + ':' + c + '" class="' + (t ? (t === '~' ? 'fx-fill' : 'fx-target') : '') + (typeof v === 'number' ? ' num' : '') + '">' + (t ? '' : escapeHtml(typeof v === 'string' && v[0] === '=' ? '' : showVal(v))) + '</td>';
      }
      html += '</tr>';
    }
    html += '</tbody></table></div><div class="fx-inputs"></div>';
    var box = el('<div class="fx-wrap">' + html + '</div>');
    wrap.querySelector('.item-control').appendChild(box);
    var inputsEl = box.querySelector('.fx-inputs'), inputs = {}, sheetWrap = box.querySelector('.fx-sheet-wrap');
    (item.cells || []).forEach(function (t) {
      var row = el('<label class="fx-row"><span class="fx-cell">' + t.cell + '</span><span class="fx-eq">fx</span><input type="text" class="fx-input" spellcheck="false" autocomplete="off" placeholder="=formula"><span class="fx-mark"></span>' + (t.fill ? '<span class="fx-note">filled ' + (parseRange(t.fill).r2 > parseRange(t.fill).r1 ? 'down' : 'across') + ' to ' + t.fill.split(':')[1] + '</span>' : '') + '</label>');
      var inp = row.querySelector('input');
      inp.addEventListener('input', function () { ctx.save(api.getValue()); schedulePreview(); });
      inputs[t.cell] = { input: inp, mark: row.querySelector('.fx-mark') };
      inputsEl.appendChild(row);
    });
    // live preview: show what the formulas calculate in the grid (formula cells in the sheet data are calculated too)
    var pv = null;
    function schedulePreview() { clearTimeout(pv); pv = setTimeout(preview, 250); }
    function preview() {
      getHF().then(function (HF) {
        var res = evalFormulas(HF, item, api.getValue()), grid = res.__grid || [];
        Array.prototype.forEach.call(sheetWrap.querySelectorAll('td[data-rc]'), function (td) {
          var p = td.getAttribute('data-rc').split(':'), v = (grid[+p[0]] || [])[+p[1]];
          var raw = (data[+p[0]] || [])[+p[1]];
          if (td.classList.contains('fx-target') || td.classList.contains('fx-fill') || (typeof raw === 'string' && raw[0] === '=')) {
            td.textContent = showVal(v); td.classList.toggle('num', typeof v === 'number'); td.classList.toggle('fx-err', !!v && typeof v === 'object');
          }
        });
      }).catch(function () { });
    }
    var api = {
      el: wrap,
      getValue: function () { var o = {}; Object.keys(inputs).forEach(function (k) { var s = inputs[k].input.value.trim(); if (s) o[k] = s; }); return o; },
      setValue: function (v) { v = v || {}; Object.keys(inputs).forEach(function (k) { inputs[k].input.value = v[k] || ''; }); schedulePreview(); },
      isAnswered: function (v) { return !!v && (item.cells || []).every(function (t) { return !!String(v[t.cell] || '').trim(); }); },
      setReadOnly: function (ro) { Object.keys(inputs).forEach(function (k) { inputs[k].input.readOnly = ro; }); },
      stimEl: sheetWrap,
      onShow: function () { schedulePreview(); },
      autoMark: function (v) {
        var c = item._formulaCheck; if (!c || c.key !== JSON.stringify(v || {})) return null;
        var n = (item.cells || []).length || 1, max = item.marks || n;
        return { got: Math.round(max * c.nRight / n * 100) / 100, max: max, detail: c.nRight + ' of ' + n + ' cell' + (n === 1 ? '' : 's') + ' correct' };
      },
      review: function (v) {
        var c = item._formulaCheck; if (!c || c.key !== JSON.stringify(v || {})) return;
        c.cells.forEach(function (x) { var i = inputs[x.cell]; if (i) { i.mark.innerHTML = x.ok ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-times-circle"></i>'; i.mark.className = 'fx-mark ' + (x.ok ? 'ok' : 'bad'); } });
        var extra = wrap.querySelector('.item-extra');
        if (!extra.querySelector('.check-box') && !extra.querySelector('.formula-results')) { var d = el('<div class="sql-check"></div>'); d.innerHTML = c.detailHtml; extra.appendChild(d); }
      },
    };
    schedulePreview();
    return api;
  };

  // ---------- embedded tools (spreadsheet / drawing) in iframes, like NESA ----------
  var embeds = {};
  window.addEventListener('message', function (e) {
    var d = e.data; if (!d || d.source !== 'epc-embed' || !embeds[d.id]) return;
    embeds[d.id].onMessage(d);
  });
  function embedItem(kind, item, ctx) {
    var id = 'embed-' + item.key.replace(/\W/g, '_');
    var src = 'tools/' + kind + '.html?v=20261101';   // version tag so browsers fetch the updated tool
    var seed = null;
    if (kind === 'spreadsheet') {
      var ex = ITEMS.extractInitial(item.question);
      item.question = ex.html;
      if (ex.initial) { try { seed = JSON.parse(ex.initial); } catch (err) { console.warn('bad seed', err); } }
      if (item.seed) seed = item.seed;
    }
    var value = null, readOnly = false, iframe = null, ready = false;
    var resetBtn = button('Reset', 'nsw-button--dark', function () {
      if (!confirm('Reset this ' + kind + '? Your work in it will be cleared.')) return;
      value = null; ctx.save(null); send({ type: 'value', value: seed, reset: true });
    });
    var wrap = frame(item, [fullscreenButton(function () { return wrap; }), resetBtn, hideButton(function () { return wrap; }, ctx)]);
    var holder = el('<div class="embed-wrap"><div class="embed-loading">Loading ' + kind + ' tool…</div></div>');
    wrap.querySelector('.item-control').appendChild(holder);
    function send(msg) {
      if (!iframe || !iframe.contentWindow) return;
      msg.source = 'epc-host'; msg.id = id;
      iframe.contentWindow.postMessage(msg, '*');
    }
    embeds[id] = {
      onMessage: function (d) {
        if (d.type === 'loaded') {
          ready = true;
          var loading = holder.querySelector('.embed-loading'); loading && loading.remove();
          send({ type: 'config', readOnly: readOnly, fontScale: [1, 1.2, 1.4, 1.6][ACCESS.fontIndex] || 1, colours: ACCESS.colours });
          send({ type: 'value', value: value != null ? value : seed });
        } else if (d.type === 'value') {
          value = d.value; ctx.save(value);
        }
      },
    };
    ACCESS.onChange(function () { if (ready) send({ type: 'config', readOnly: readOnly, fontScale: [1, 1.2, 1.4, 1.6][ACCESS.fontIndex] || 1, colours: ACCESS.colours }); });
    var api = {
      el: wrap,
      seed: seed,
      getValue: function () { return value; },
      setValue: function (v) { value = v; if (ready) send({ type: 'value', value: v != null ? v : seed }); },
      isAnswered: function (v) {
        if (!v) return false;
        if (kind === 'drawing') return (v.elements || []).some(function (e) { return !e.isDeleted; });
        return !!v.changed;
      },
      setReadOnly: function (ro) { readOnly = ro; resetBtn.disabled = ro; if (ready) send({ type: 'config', readOnly: ro, fontScale: [1, 1.2, 1.4, 1.6][ACCESS.fontIndex] || 1, colours: ACCESS.colours }); },
      onShow: function () {
        if (iframe) return;
        iframe = el('<iframe class="embed-frame" title="' + kind + ' tool"></iframe>');
        iframe.style.height = '500px';   // NESA: spreadsheet and drawing boxes are both 500px
        iframe.src = src + '#id=' + encodeURIComponent(id);
        holder.appendChild(iframe);
      },
      autoMark: function () { return null; },
    };
    return api;
  }
  // Hidden tool frames used to render saved drawings / spreadsheets for the downloadable report.
  var exporters = {};
  ITEMS.exportTool = function (kind, value) {
    var id = 'export-' + kind;
    var ex = exporters[kind];
    if (!ex) {
      ex = exporters[kind] = { ready: null, pending: {}, n: 0, queue: Promise.resolve() };
      ex.ready = new Promise(function (resolve) {
        embeds[id] = { onMessage: function (d) {
          if (d.type === 'loaded') resolve();
          else if (d.type === 'exported' && ex.pending[d.reqId]) { ex.pending[d.reqId](d.value); delete ex.pending[d.reqId]; }
        } };
      });
      ex.frame = el('<iframe title="export" style="position:fixed;left:-3000px;top:0;width:1200px;height:800px;border:0" tabindex="-1" aria-hidden="true"></iframe>');
      ex.frame.src = 'tools/' + kind + '.html?v=20261101#id=' + id;
      document.body.appendChild(ex.frame);
    }
    var job = ex.queue.then(function () {
      return Promise.race([ex.ready, new Promise(function (_, rej) { setTimeout(function () { rej(new Error('tool did not load')); }, 30000); })]).then(function () {
        return new Promise(function (resolve) {
          var reqId = 'r' + (++ex.n);
          ex.pending[reqId] = resolve;
          ex.frame.contentWindow.postMessage({ source: 'epc-host', id: id, type: 'export', value: value, reqId: reqId }, '*');
          setTimeout(function () { if (ex.pending[reqId]) { delete ex.pending[reqId]; resolve(null); } }, 20000);
        });
      });
    });
    ex.queue = job.catch(function () { });
    return job;
  };
  // Runs a student's SQL against the item's tables and returns the result as an HTML table (for the report).
  ITEMS.sqlResultHtml = function (setup, query) {
    if (!query || !query.trim()) return Promise.resolve('');
    if (!window.initSqlJs) return Promise.resolve('<p><em>(SQL engine not available)</em></p>');
    return getSql().then(function (SQL) {
      var db = new SQL.Database();
      try { if (setup) db.run(setup); } catch (e) { }
      var res;
      try { res = db.exec(query); } catch (err) { db.close(); return '<p class="err">Error: ' + escapeHtml(err.message) + '</p>'; }
      db.close();
      if (!res.length) return '<p><em>Query ran — no results to display.</em></p>';
      var r = res[res.length - 1];
      return '<table class="hoa-table-normal"><thead><tr>' + r.columns.map(function (c) { return '<th>' + escapeHtml(c) + '</th>'; }).join('') + '</tr></thead><tbody>' +
        r.values.map(function (row) { return '<tr>' + row.map(function (c) { return '<td>' + escapeHtml(c == null ? 'NULL' : c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>';
    }).catch(function () { return '<p><em>(SQL engine not available)</em></p>'; });
  };

  ITEMS.spreadsheet = function (item, ctx) { return embedItem('spreadsheet', item, ctx); };
  ITEMS.drawing = function (item, ctx) { return embedItem('drawing', item, ctx); };

  // ---------- stimulus enhancements ----------
  ITEMS.enhanceContent = function (root) {
    // NESA slideshow element
    Array.prototype.forEach.call(root.querySelectorAll('slideshow'), function (node) {
      var imgs = [];
      try { imgs = JSON.parse((node.getAttribute('images') || '[]').replace(/'/g, '"')); } catch (e) { }
      var ui = el('<div class="slideshow-ui"><div class="slideshow"><div class="slideshow-arrow slideshow-arrow-left"><i class="fa fa-angle-left"></i></div><div class="slideshow-arrow slideshow-arrow-right"><i class="fa fa-angle-right"></i></div><div class="slideshow-image"><img alt="slide"></div></div><ul class="slideshow-list"></ul></div>');
      var cur = 0, img = ui.querySelector('img'), list = ui.querySelector('.slideshow-list');
      function show(i) {
        cur = (i + imgs.length) % imgs.length; img.src = imgs[cur];
        list.innerHTML = imgs.map(function (_, j) { return '<li data-i="' + j + '"><i class="' + (j === cur ? 'fas' : 'far') + ' fa-circle"></i></li>'; }).join('');
      }
      ui.querySelector('.slideshow-arrow-left').addEventListener('click', function () { show(cur - 1); });
      ui.querySelector('.slideshow-arrow-right').addEventListener('click', function () { show(cur + 1); });
      list.addEventListener('click', function (e) { var li = e.target.closest('li'); if (li) show(+li.getAttribute('data-i')); });
      img.addEventListener('click', function () { lightbox(img.src); });
      node.replaceWith(ui);
      if (imgs.length) show(0);
    });
    // zoomable images (NESA zoom-window, lightbox links, and any figure image)
    Array.prototype.forEach.call(root.querySelectorAll('a[data-lightbox]'), function (a) {
      a.addEventListener('click', function (e) { e.preventDefault(); lightbox(a.getAttribute('href')); });
    });
    Array.prototype.forEach.call(root.querySelectorAll('img'), function (img) {
      if (img.style.display === 'none' || img.closest('a[data-lightbox]') || img.closest('.slideshow-ui') || img.closest('.mc-table td.radio')) return;
      if (/zoom-|magn-glass|line-\d\.svg/.test(img.getAttribute('src') || '')) return;
      img.classList.add('zoomable');
      img.addEventListener('click', function () { lightbox(img.src); });
    });
    // accordion (NESA)
    Array.prototype.forEach.call(root.querySelectorAll('.accordian .accordian-header'), function (h) {
      h.addEventListener('click', function () { h.parentNode.classList.toggle('active'); });
    });
  };
  function lightbox(src) {
    var lb = el('<div class="lightbox"><span class="lb-close">&times;</span><img alt=""></div>');
    lb.querySelector('img').src = src;
    lb.addEventListener('click', function () { lb.remove(); });
    document.body.appendChild(lb);
  }
  ITEMS.lightbox = lightbox;
})();
