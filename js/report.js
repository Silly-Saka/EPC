/* Builds a self-contained HTML document with every question, the student's answers and the marking guidelines,
 * for downloading / printing at the end of an exam. */
(function () {
  'use strict';

  var REPORT_CSS = [
    'body{font-family:"Public Sans",Arial,sans-serif;color:#000;margin:0;background:#fff;line-height:1.45;font-size:15px}',
    '.wrap{max-width:1000px;margin:0 auto;padding:24px 28px 60px}',
    'h1{color:#002664;font-size:1.6rem;margin:0 0 .3rem}h2{color:#002664;font-size:1.25rem;margin:0 0 .6rem}h3{color:#002664;font-size:1.1rem;margin:0}',
    '.meta{color:#444;margin-bottom:1rem}.meta span{display:inline-block;margin-right:1.5rem}',
    '.howto{background:#eef6ff;border-left:4px solid #146cfd;padding:.6rem .9rem;margin:1rem 0}',
    'table{border-collapse:collapse}.summary{width:100%;margin:1rem 0 2rem}.summary th,.summary td{border:1px solid #c9d3dd;padding:4px 8px;text-align:left}.summary th{background:#eef2f6}.summary td.n{text-align:right}',
    '.q{border-top:3px solid #002664;padding-top:14px;margin-top:26px}',
    '.stim{background:#fafafa;border:1px solid #e3e3e3;padding:10px 14px;margin-bottom:12px}',
    '.item{border-left:6px solid #002664;background:#f6f6f6;padding:10px 14px;margin:12px 0;page-break-inside:avoid}',
    '.qtext{font-weight:700}.qtext table,.qtext ul:not(.hoa-ul),.qtext pre{font-weight:400}',
    '.label{font-size:.8rem;text-transform:uppercase;letter-spacing:.05em;color:#555;margin:.8rem 0 .25rem;font-weight:700}',
    '.answer{background:#fff;border:2px solid #146cfd;padding:8px 12px}.answer.none{border-style:dashed;color:#888}',
    '.marks{margin-top:8px;font-weight:700}.marks .box{display:inline-block;min-width:3em;border-bottom:1.5px solid #000;text-align:center}',
    '.auto-ok{color:#00804f}.auto-bad{color:#b81237}',
    '.guide{background:#fff;border:2px solid #00804f;padding:8px 12px;margin-top:8px}.guide h4{margin:0 0 .3rem;color:#00804f}',
    '.opt{display:flex;gap:.6rem;padding:2px 0}.opt .mk{width:1.4em}.opt.sel{font-weight:700}.opt.correct{color:#00804f}',
    '.boxed{display:inline-block;border:1.5px solid #146cfd;border-radius:3px;padding:0 .4em;min-width:2.5em;background:#fff;font-weight:700}',
    '.tick{font-family:Arial,sans-serif;font-size:1.05em}',
    'img{max-width:100%;height:auto}.figure img,.figure svg{max-width:100%;height:auto;border:1px solid #ddd;background:#fff}',
    'pre,code.q{font-family:Consolas,"Courier New",monospace}pre{white-space:pre-wrap;background:#fff;border:1px solid #ddd;padding:6px 8px}',
    '.err{color:#b81237}.muted{color:#666}',
    '.sheet-export{border-collapse:collapse;font-size:13px;background:#fff}.sheet-export th{background:#ebf0f4;color:#475466;font-weight:400;border:1px solid #d3dbe2;padding:2px 6px}.sheet-export td{border:1px solid #e3e7eb;padding:2px 6px;white-space:nowrap}',
    '.formulas td,.formulas th{border:1px solid #d3dbe2;padding:2px 8px;font-size:13px;text-align:left}.formulas th{background:#eef2f6}.formulas td:nth-child(2){font-family:Consolas,monospace}',
    /* NESA question classes */
    '.hoa-q,.hoa-q-1em,.hoa-q-0em{font-weight:700;margin-top:0}.hoa-q{margin-bottom:.5em}.hoa-q-1em{margin-bottom:1em}.hoa-q-0em{margin-bottom:0}',
    '.hoa-table-normal,.hoa-table-multiselect{border-collapse:collapse;margin:8px 0;font-weight:400}',
    '.hoa-table-normal th,.hoa-table-multiselect th{border:1px solid #000;background:rgba(95,204,245,.3);padding:3px 6px;text-align:left}',
    '.hoa-table-normal td,.hoa-table-multiselect td{border:1px solid #000;padding:3px 6px;vertical-align:top}.centre{text-align:center}',
    'ul.hoa-ul{margin:0;padding-inline-start:.8em}ul.hoa-ul li{font-weight:700}span.hoa-li-span{position:relative;left:1em}',
    'ul.hoa-q-mc-checkbox{list-style:none;padding-left:0;font-weight:400}ul.hoa-q-mc-checkbox li{list-style:none}',
    '.hoa-table-multiselect img{max-width:150px;max-height:80px}.zoom-window-border2,.zoom-box{display:inline-block;max-width:100%}',
    '.q-part{display:flex;gap:.9em}.order-list{display:inline-block;border:1px solid #000;font-weight:400}.order-row,.order-head{display:flex;border-bottom:1px solid #000}.order-cell{padding:3px 8px;flex:1;border-right:1px solid #000}',
    '.sortable>div{border-bottom:1px solid #000;background:#fff}.table-cell,.table-cell-left{display:inline-block;padding:3px 6px;width:4.5em}',
    '.box{position:relative;display:inline-block}',
    '@media print{.noprint{display:none}.q{page-break-before:auto}.item{break-inside:avoid}body{font-size:12.5px}}',
  ].join('\n');

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function stripTags(h) { var d = document.createElement('div'); d.innerHTML = h || ''; return d.textContent || ''; }
  function wordCount(h) { var m = stripTags(String(h || '').replace(/<\/(p|li|div|td)>/g, ' </$1>')).trim().match(/\S+/g); return m ? m.length : 0; }

  // Stimulus HTML for print: slideshow -> list of images, drop hidden helper images, video -> note
  function printableStimulus(html) {
    var d = document.createElement('div'); d.innerHTML = html || '';
    Array.prototype.forEach.call(d.querySelectorAll('slideshow'), function (s) {
      var imgs = []; try { imgs = JSON.parse((s.getAttribute('images') || '[]').replace(/'/g, '"')); } catch (e) { }
      var box = document.createElement('div'); box.className = 'figure';
      box.innerHTML = imgs.map(function (src, i) { return '<p class="muted">Slide ' + (i + 1) + '</p><img src="' + src + '">'; }).join('');
      s.replaceWith(box);
    });
    Array.prototype.forEach.call(d.querySelectorAll('img'), function (im) { if (/display\s*:\s*none/.test(im.getAttribute('style') || '')) im.remove(); });
    Array.prototype.forEach.call(d.querySelectorAll('video'), function (v) { var p = document.createElement('p'); p.className = 'muted'; p.textContent = '[Video stimulus — watch it in the exam site]'; v.replaceWith(p); });
    return d.innerHTML;
  }

  // Clone a rendered question area and turn every form control into static text showing the student's answer.
  function staticClone(nodes) {
    var out = document.createElement('div');
    nodes.forEach(function (src) {
      if (!src) return;
      var clone = src.cloneNode(true);
      var a = src.querySelectorAll('input, select, textarea'), b = clone.querySelectorAll('input, select, textarea');
      for (var i = 0; i < a.length; i++) {
        var o = a[i], c = b[i], span = document.createElement('span');
        if (o.type === 'radio') { span.className = 'tick'; span.textContent = o.checked ? '◉' : '○'; }
        else if (o.type === 'checkbox') { span.className = 'tick'; span.textContent = o.checked ? '☑' : '☐'; }
        else if (o.tagName === 'SELECT') { span.className = 'boxed'; var opt = o.selectedIndex >= 0 ? o.options[o.selectedIndex] : null; span.textContent = opt && opt.value !== '' ? opt.text.trim() : '—'; }
        else { span.className = 'boxed'; span.textContent = o.value || '—'; }
        if (c && c.parentNode) c.parentNode.replaceChild(span, c);
      }
      Array.prototype.forEach.call(clone.querySelectorAll('.item-buttons, .item-extra, iframe, script, .cke, .reading-banner, .word-count'), function (x) { x.remove(); });
      out.appendChild(clone);
    });
    return out.innerHTML;
  }

  async function toDataUrl(url) {
    try {
      var r = await fetch(url); if (!r.ok) throw new Error(r.status);
      var blob = await r.blob();
      return await new Promise(function (res) { var f = new FileReader(); f.onload = function () { res(f.result); }; f.readAsDataURL(blob); });
    } catch (e) { return null; }
  }
  async function inlineImages(root) {
    var imgs = Array.prototype.slice.call(root.querySelectorAll('img[src]'));
    var cache = {};
    for (var i = 0; i < imgs.length; i++) {
      var src = imgs[i].getAttribute('src');
      if (/^data:/.test(src)) continue;
      var abs = new URL(src, location.href).href;
      if (!(abs in cache)) cache[abs] = await toDataUrl(abs);
      imgs[i].setAttribute('src', cache[abs] || abs); // falls back to the image inside the exam folder
    }
  }

  async function answerHtml(item, ctl, value) {
    var none = '<div class="answer none">No response</div>';
    if (item.type === 'mcq') {
      return '<div class="answer">' + (item.options || []).map(function (o, i) {
        var selected = value === i + 1, correct = item.answer === i + 1;
        return '<div class="opt' + (selected ? ' sel' : '') + (correct ? ' correct' : '') + '"><span class="mk tick">' + (selected ? '◉' : '○') + '</span><span>(' + 'ABCDEFGH'[i] + ') ' + o + (correct ? ' &nbsp;✓' : '') + '</span></div>';
      }).join('') + (value == null ? '<p class="muted">No option selected.</p>' : '') + '</div>';
    }
    if (item.type === 'text') {
      if (!value || !wordCount(value)) return none;
      return '<div class="answer">' + value + '<p class="muted" style="text-align:right;margin:4px 0 0">' + wordCount(value) + (item.wordLimit ? ' / ' + item.wordLimit : '') + ' words</p></div>';
    }
    if (item.type === 'sql') {
      if (!value || !String(value).trim()) return none;
      var result = await ITEMS.sqlResultHtml(item.setup, value);
      var chk = item._sqlCheck && item._sqlCheck.value === value ? item._sqlCheck : null;
      var expected = chk && !chk.match ? '<p class="auto-bad">Output check: ' + esc(chk.reason) + '.</p><div class="label">Expected output</div>' + chk.expectedHtml : '';
      return '<div class="answer"><pre>' + esc(value) + '</pre>' + (result ? '<div class="label">Output when run</div>' + result : '') + expected + '</div>';
    }
    if (item.type === 'formula') {
      var given = ITEMS.formulaAnswers(item, value);
      if (!Object.keys(given).length) return none;
      var fc = await ITEMS.checkFormula(item, value);
      return '<div class="answer">' + (fc ? fc.detailHtml : '<table class="formulas"><thead><tr><th>Cell</th><th>Your formula</th></tr></thead><tbody>' +
        (item.cells || []).map(function (t) { return '<tr><td>' + t.cell + '</td><td>' + esc(given[t.cell] || '') + '</td></tr>'; }).join('') + '</tbody></table>') + '</div>';
    }
    if (item.type === 'drawing') {
      if (!value || !(value.elements || []).length) return none;
      var d = await ITEMS.exportTool('drawing', value);
      return '<div class="answer figure">' + (d && d.svg ? d.svg : '<p class="muted">(The drawing could not be rendered — check your internet connection.)</p>') + '</div>';
    }
    if (item.type === 'spreadsheet') {
      var v = value != null ? value : (ctl && ctl.seed);
      if (!value || !value.changed) {
        if (!v) return none;
      }
      var s = await ITEMS.exportTool('spreadsheet', v);
      if (!s) return '<div class="answer"><p class="muted">(The spreadsheet could not be rendered — check your internet connection.)</p></div>';
      var h = '<div class="answer">' + (!value || !value.changed ? '<p class="muted">Not changed from the starting spreadsheet.</p>' : '') + (s.html || '<p class="muted">Empty spreadsheet.</p>');
      if (s.formulas && s.formulas.length) h += '<div class="label">Formulas</div><table class="formulas"><thead><tr><th>Cell</th><th>Formula</th><th>Shows</th></tr></thead><tbody>' + s.formulas.map(function (f) { return '<tr><td>' + f[0] + '</td><td>' + esc(f[1]) + '</td><td>' + esc(f[2]) + '</td></tr>'; }).join('') + '</tbody></table>';
      if (s.conds && s.conds.length) h += '<div class="label">Conditional formatting</div><ul>' + s.conds.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('') + '</ul>';
      if (s.named && s.named.length) h += '<div class="label">Named ranges</div><ul>' + s.named.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('') + '</ul>';
      if (s.comments && s.comments.length) h += '<div class="label">Comments</div><ul>' + s.comments.map(function (c) { return '<li><b>' + c[0] + ':</b> ' + esc(c[1]) + '</li>'; }).join('') + '</ul>';
      (s.charts || []).forEach(function (src, i) { h += '<div class="label">Graph ' + (i + 1) + '</div><img src="' + src + '" style="max-width:520px">'; });
      return h + '</div>';
    }
    return '';
  }

  function marksLine(m) {
    if (!m.max) return '';
    if (m.self != null) return '<div class="marks">Mark: <span class="box">' + m.self + '</span> / ' + m.max + (m.auto ? ' <span class="muted">(auto-mark was ' + m.auto.got + ')</span>' : ' <span class="muted">(self-marked)</span>') + '</div>';
    if (m.auto) return '<div class="marks ' + (m.auto.got === m.auto.max ? 'auto-ok' : 'auto-bad') + '">Auto-marked: <span class="box">' + m.auto.got + '</span> / ' + m.auto.max + (m.auto.detail ? ' <span class="muted">(' + esc(m.auto.detail) + ')</span>' : '') + '</div>';
    return '<div class="marks">Mark: <span class="box">&nbsp;</span> / ' + m.max + '</div>';
  }

  window.REPORT = {
    build: async function (o) {
      var model = o.model, state = o.state, ctrls = o.ctrls;
      var res = o.result;
      var when = new Date(state.finishedAt || Date.now());
      var parts = [];
      parts.push('<h1>' + esc(model.title) + '</h1><h2 style="font-weight:400">My answers and marking guidelines</h2>');
      parts.push('<div class="meta"><span>Name: ________________________</span><span>Completed: ' + when.toLocaleString('en-AU') + '</span><span>Mode: ' + (state.mode === 'timed' ? 'Exam conditions' : 'Practice (untimed)') + '</span>' +
        (state.mode !== 'timed' && state.elapsed ? '<span>Time used: ' + formatTime(state.elapsed) + '</span>' : '') + '</div>');
      parts.push('<div class="howto noprint">Each question shows your response, then the marking guidelines. Multiple-choice and other objective items are already marked. For the others, compare your answer with the criteria and write your mark in the box.</div>');
      // summary
      var rows = model.groups.map(function (g) {
        var got = 0, max = 0, pend = 0;
        g.items.forEach(function (it) { var m = o.itemMark(it); max += m.max; if (m.self != null) got += m.self; else if (m.auto) got += m.auto.got; else pend += m.max; });
        return '<tr><td>Question ' + g.number + '</td><td class="n">' + (pend === max ? '____' : got + (pend ? ' + ____' : '')) + '</td><td class="n">' + max + '</td></tr>';
      }).join('');
      parts.push('<table class="summary"><thead><tr><th>Question</th><th>Mark</th><th>Out of</th></tr></thead><tbody>' + rows +
        '<tr><th>Total</th><th class="n">' + res.got + (res.pending ? ' + ____ (' + res.pending + ' marks to mark)' : '') + '</th><th class="n">' + res.total + '</th></tr></tbody></table>');

      for (var gi = 0; gi < model.groups.length; gi++) {
        var g = model.groups[gi];
        if (o.onProgress) o.onProgress(gi + 1, model.groups.length);
        var sec = '<section class="q"><div>' + (g.titleHtml || '<h3>Question ' + g.number + '</h3>') + '</div>';
        if (g.stimulus) sec += '<div class="stim">' + printableStimulus(g.stimulus) + '</div>';
        for (var ii = 0; ii < g.items.length; ii++) {
          var item = g.items[ii], ctl = ctrls[item.key], value = state.responses[item.key];
          var m = o.itemMark(item);
          var body = '';
          if (item.type === 'html' && ctl) {
            body = '<div class="label">Question and your response</div><div class="qtext">' + staticClone([ctl.el.querySelector(':scope > .item-header > .item-question'), ctl.el.querySelector(':scope > .item-control')]) + '</div>';
          } else {
            var qHtml = ctl ? staticClone([ctl.el.querySelector(':scope > .item-header > .item-question')]) : ITEMS.questionHtml(item);
            body = '<div class="qtext">' + qHtml + '</div><div class="label">Your response</div>' + await answerHtml(item, ctl, value);
          }
          var guide = item.guide || '';
          if (item.type === 'mcq' && item.answer != null && !/answer/i.test(stripTags(guide))) guide = '<p>Correct answer: <strong>' + 'ABCDEFGH'[item.answer - 1] + '</strong></p>' + guide;
          sec += '<div class="item">' + body + marksLine(m) + '<div class="guide"><h4>Marking guidelines</h4>' + (guide || '<p class="muted">No marking guideline available for this item.</p>') + '</div></div>';
        }
        parts.push(sec + '</section>');
      }

      var doc = document.implementation.createHTMLDocument(model.title);
      var holder = doc.createElement('div'); holder.className = 'wrap'; holder.innerHTML = parts.join('\n');
      await inlineImages(holder);
      return '<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>' + esc(model.title) + ' — my answers</title>' +
        '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;700&display=swap"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mathquill/0.10.1/mathquill.min.css"><style>' + REPORT_CSS + '</style></head><body>' + holder.outerHTML + '</body></html>';
    },
  };
})();
