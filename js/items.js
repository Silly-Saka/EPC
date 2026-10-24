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
  // NESA's textbox toolbar also has a Σ formula composer and an ABC spell-check button.
  // CKEditor needs absolute icon URLs (it prefixes relative ones with its CDN path)
  var SIGMA_ICON = new URL('img/sigma.svg', location.href).href;
  var ABC_ICON = new URL('img/abc.svg', location.href).href;
  function loadMathQuill() {
    if (window.MathQuill) return Promise.resolve();
    return (window.jQuery ? Promise.resolve() : loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js'))
      .then(function () { return loadScript('https://cdnjs.cloudflare.com/ajax/libs/mathquill/0.10.1/mathquill.min.js'); });
  }
  function openMathDialog(editor) {
    var bookmarks = null;
    try { bookmarks = editor.getSelection().createBookmarks2(true); } catch (e) { }
    loadMathQuill().then(function () {
      var MQ = MathQuill.getInterface(2);
      var tools = [['a/b', '\\frac', 'cmd'], ['x²', '^', 'cmd'], ['xₙ', '_', 'cmd'], ['√', '\\sqrt', 'cmd'], ['×', '\\times', 'write'], ['÷', '\\div', 'write'], ['±', '\\pm', 'write'], ['≤', '\\le', 'write'], ['≥', '\\ge', 'write'], ['≠', '\\ne', 'write'], ['π', '\\pi', 'write'], ['Σ', '\\sum', 'cmd'], ['( )', '(', 'cmd'], ['°', '^\\circ', 'write']];
      var m = el('<div class="modal-bg"><div class="modal"><h3>Formula composer</h3><p style="margin:.2rem 0 .6rem;font-size:.9rem;color:#444">Type your formula. Use the buttons, or type / for a fraction and ^ for a power.</p><div class="mq-tools"></div><div class="mq-box"><span class="mq-field"></span></div><div class="modal-buttons"><button class="nsw-button nsw-button--dark-outline" data-a="cancel">Cancel</button><button class="nsw-button nsw-button--dark" data-a="ok">Insert</button></div></div></div>');
      document.body.appendChild(m);
      var mf = MQ.MathField(m.querySelector('.mq-field'), { spaceBehavesLikeTab: false, autoCommands: 'pi sqrt sum', autoOperatorNames: 'sin cos tan log' });
      var bar = m.querySelector('.mq-tools');
      tools.forEach(function (t) { var b = el('<button type="button" class="mq-btn"></button>'); b.textContent = t[0]; b.onclick = function () { mf[t[2]](t[1]); mf.focus(); }; bar.appendChild(b); });
      setTimeout(function () { mf.focus(); }, 50);
      m.addEventListener('click', function (e) {
        var a = e.target.closest('[data-a]'); if (!a) return;
        var latex = mf.latex();
        m.remove();
        if (a.getAttribute('data-a') !== 'ok' || !latex.trim()) { editor.focus(); return; }
        var holder = document.createElement('span'); holder.style.cssText = 'position:fixed;left:-9999px'; document.body.appendChild(holder);
        MQ.StaticMath(holder).latex(latex);
        var html = holder.innerHTML; holder.remove();
        editor.focus();
        try { if (bookmarks) editor.getSelection().selectBookmarks(bookmarks); } catch (e) { }
        editor.insertHtml('<span class="epc-math mq-math-mode" data-latex="' + escapeHtml(latex) + '">' + html.replace(/^<span[^>]*mq-math-mode[^>]*>|<\/span>$/g, '') + '</span>&nbsp;');
      });
    }).catch(function () { alert('The formula composer needs an internet connection.'); });
  }
  function registerCkePlugins() {
    if (!window.CKEDITOR || CKEDITOR.plugins.registered.epcmath) return;
    CKEDITOR.plugins.add('epcmath', { init: function (editor) {
      editor.addCommand('epcMath', { exec: function (ed) { openMathDialog(ed); }, canUndo: false, readOnly: 0 });
      editor.ui.addButton('EpcMath', { label: 'Formula composer', command: 'epcMath', icon: SIGMA_ICON });
    } });
    CKEDITOR.plugins.add('epcspell', { init: function (editor) {
      editor.addCommand('epcSpell', { canUndo: false, exec: function (ed) {
        var ed2 = ed.editable(), on = ed2.getAttribute('spellcheck') === 'true';
        ed2.setAttribute('spellcheck', on ? 'false' : 'true');
        this.setState(on ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_ON);
        ed2.$.blur(); ed2.focus();
      } });
      editor.ui.addButton('EpcSpell', { label: 'Spell-check (show spelling errors)', command: 'epcSpell', icon: ABC_ICON });
      editor.on('instanceReady', function () { editor.editable().setAttribute('spellcheck', 'false'); });
    } });
  }
  var CKE_CONFIG = {
    versionCheck: false,
    toolbar: [
      ['Bold', 'Underline', 'Italic'], ['BulletedList', 'NumberedList', 'Indent', 'Outdent'], ['Table'],
      ['Subscript', 'Superscript'], ['Cut', 'Copy', 'Paste'], ['Undo', 'Redo'], ['SpecialChar', 'EpcMath', 'EpcSpell'],
    ],
    allowedContent: true,
    extraPlugins: 'divarea,autogrow,epcmath,epcspell',
    removePlugins: 'elementspath,exportpdf',
    autoGrow_minHeight: 60, autoGrow_maxHeight: 600, autoGrow_onStartup: true,
    resize_enabled: true, resize_dir: 'vertical',
    disableNativeSpellChecker: false,
    removeDialogTabs: 'table:advanced',
    specialChars: ['&lsquo;', '&rsquo;', '&ldquo;', '&rdquo;', '&ndash;', '&mdash;', '&times;', '&divide;', '&plusmn;', '&le;', '&ge;', '&ne;', '&asymp;', '&infin;', '&sum;', '&radic;', '&pi;', '&deg;', '&micro;', '&rarr;', '&larr;', '&harr;', '&uarr;', '&darr;', '&rArr;', '&hArr;', '&and;', '&or;', '&not;', '&isin;', '&cap;', '&cup;', '&sube;', '&forall;', '&exist;', '&alpha;', '&beta;', '&gamma;', '&delta;', '&lambda;', '&sigma;', '&theta;', '&Omega;', '&sup2;', '&sup3;', '&frac12;', '&frac14;', '&frac34;', '&euro;', '&pound;', '&cent;', '&copy;', '&reg;', '&trade;', '&bull;', '&hellip;', '&sect;', '&para;'],
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
    var fallback = null;

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

  // ---------- embedded tools (spreadsheet / drawing) in iframes, like NESA ----------
  var embeds = {};
  window.addEventListener('message', function (e) {
    var d = e.data; if (!d || d.source !== 'epc-embed' || !embeds[d.id]) return;
    embeds[d.id].onMessage(d);
  });
  function embedItem(kind, item, ctx) {
    var id = 'embed-' + item.key.replace(/\W/g, '_');
    var src = 'tools/' + kind + '.html';
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
        iframe.style.height = (kind === 'drawing' ? 520 : 480) + 'px';
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
      ex.frame.src = 'tools/' + kind + '.html#id=' + id;
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
