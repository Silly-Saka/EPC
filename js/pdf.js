/* Turns the answers report (an HTML document) into an A4 PDF and downloads it.
 * The report is laid out in a hidden iframe, split into pages at question / paragraph / table-row boundaries,
 * drawn with html2canvas (in strips, so very long quizzes don't hit canvas size limits) and saved with jsPDF. */
(function () {
  'use strict';
  var JSPDF = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
  var H2C = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
  var PAGE_W_MM = 210, PAGE_H_MM = 297, MARGIN_MM = 12, FOOTER_MM = 6;
  var CSS_W = 760;                       // layout width of the report in CSS px
  var SCALE = 1.6;                       // canvas pixels per CSS px (sharpness vs file size)
  var STRIP_MAX = 5000;                  // CSS px per html2canvas call

  function loadIn(doc, src) {
    return new Promise(function (resolve, reject) {
      var s = doc.createElement('script'); s.src = src; s.onload = resolve; s.onerror = function () { reject(new Error('Could not load ' + src)); };
      doc.head.appendChild(s);
    });
  }
  function wait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }

  // y positions (CSS px from the top of the body) where a page may break, best first by kind
  // (a few px above each element's top, so a break never slices the previous line)
  function breakCandidates(doc) {
    var bodyTop = doc.body.getBoundingClientRect().top;
    function tops(sel) { return Array.prototype.map.call(doc.querySelectorAll(sel), function (el) { return el.getBoundingClientRect().top - bodyTop - 3; }); }
    return [
      { ys: tops('.wrap > *'), min: 0.4 },                       // before a whole question (or the summary table)
      { ys: tops('section.q .item, section.q .guide, section.q .stim'), min: 0.4 },   // before a part / its marking guidelines
      { ys: tops('tr, p, li, pre, h3, h4, .opt, img, svg, .label, .marks, .qtext > *, .stim > *, .guide > *'), min: 0.25 },   // between lines
    ];
  }
  function pageBreaks(total, pageH, levels) {
    var pages = [], start = 0;
    while (start < total - 1) {
      var limit = start + pageH;
      if (limit >= total) { pages.push([start, total]); break; }
      var best = -1;
      for (var l = 0; l < levels.length && best < 0; l++) {
        levels[l].ys.forEach(function (y) { if (y > start + pageH * levels[l].min && y <= limit && y > best) best = y; });
      }
      if (best < 0) best = limit;   // nothing suitable (e.g. one huge image): hard cut
      pages.push([start, best]); start = best;
    }
    return pages;
  }

  // ---------- text PDF for multiple-choice quizzes ----------
  // Standard PDF fonts only cover Windows-1252, so swap anything else for a plain equivalent.
  var CP1252_EXTRA = '€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ';
  var SWAP = { '→': '->', '←': '<-', '↔': '<->', '⇒': '=>', '≤': '<=', '≥': '>=', '≠': '!=', '−': '-', '≈': '~', '√': 'sqrt', 'π': 'pi', '✓': 'Yes', '✔': 'Yes', '✗': 'x', '✘': 'x', '′': "'", '″': '"', '‑': '-', '‐': '-', ' ': ' ', '​': '', '­': '' };
  function clean(s) {
    return String(s == null ? '' : s).replace(/[^\x00-\xFF]/g, function (ch) {
      if (CP1252_EXTRA.indexOf(ch) >= 0) return ch;
      if (SWAP[ch] != null) return SWAP[ch];
      var n = ch.normalize ? ch.normalize('NFKD').replace(/[^\x00-\xFF]/g, '') : '';
      return n || '?';
    });
  }
  window.makeMcqPdf = function (data, filename, onProgress) {
    return (window.jspdf ? Promise.resolve() : loadScript(JSPDF)).then(function () {
      var pdf = new window.jspdf.jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait', compress: true });
      var L = MARGIN_MM, R = PAGE_W_MM - MARGIN_MM, W = R - L, BOTTOM = PAGE_H_MM - MARGIN_MM - FOOTER_MM;
      var y = MARGIN_MM, PT = 0.3528;   // mm per point
      var NAVY = [0, 38, 100], GREEN = [0, 128, 79], RED = [184, 18, 55], GREY = [95, 95, 95], BLACK = [20, 20, 20];
      function font(size, style, color) { pdf.setFontSize(size); pdf.setFont('helvetica', style || 'normal'); pdf.setTextColor.apply(pdf, color || BLACK); }
      function lineH(size) { return size * PT * 1.28; }
      function lines(text, width, size, style) { font(size, style); return pdf.splitTextToSize(clean(text), width); }
      function newPage() { pdf.addPage(); y = MARGIN_MM; }
      function write(ls, x, size, style, color) { font(size, style, color); ls.forEach(function (t) { pdf.text(t, x, y + size * PT * 0.85); y += lineH(size); }); }
      // header
      write(lines(data.title, W, 16, 'bold'), L, 16, 'bold', NAVY);
      write(lines(data.subtitle, W, 11), L, 11, 'normal', NAVY);
      y += 1;
      write(lines(data.meta, W, 9), L, 9, 'normal', GREY);
      write(lines(data.score, W, 10, 'bold'), L, 10, 'bold', BLACK);
      y += 2; pdf.setDrawColor(0, 38, 100); pdf.setLineWidth(0.5); pdf.line(L, y, R, y); y += 4;
      var n = data.questions.length;
      data.questions.forEach(function (q, qi) {
        var answered = q.response != null, right = answered && q.response === q.answer;
        var status = !answered ? 'Not answered' : right ? 'Correct' : 'Incorrect';
        var statusColor = !answered ? GREY : right ? GREEN : RED;
        // measure the block so a question is never split across pages
        var qLines = lines(q.question, W, 10, 'bold');
        var optLines = (q.options || []).map(function (o, i) {
          var tag = (i + 1 === q.answer ? '  (correct answer)' : '') + (i + 1 === q.response && i + 1 !== q.answer ? '  (your answer)' : '') + (i + 1 === q.response && i + 1 === q.answer ? '  (your answer)' : '');
          return lines(o + tag, W - 10, 9.5, (i + 1 === q.answer || i + 1 === q.response) ? 'bold' : 'normal');
        });
        var gLines = lines(q.guide, W - 4, 8.8);
        var h = lineH(10) + 1 + qLines.length * lineH(10) + 1 + optLines.reduce(function (s, l) { return s + l.length * lineH(9.5) + 0.6; }, 0) + 1.5 + gLines.length * lineH(8.8) + 5;
        if (y + Math.min(h, BOTTOM - MARGIN_MM) > BOTTOM) newPage();
        // heading: Question N · section ............ status
        font(10.5, 'bold', NAVY); pdf.text('Question ' + q.number, L, y + 10.5 * PT * 0.85);
        var qw = pdf.getTextWidth('Question ' + q.number + '  ');
        if (q.section) { font(8.5, 'normal', GREY); pdf.text(clean(q.section), L + qw, y + 10.5 * PT * 0.85); }
        font(9.5, 'bold', statusColor); pdf.text(status, R, y + 10.5 * PT * 0.85, { align: 'right' });
        y += lineH(10.5) + 1;
        write(qLines, L, 10, 'bold', BLACK); y += 1;
        optLines.forEach(function (ls, i) {
          if (y + ls.length * lineH(9.5) > BOTTOM) newPage();
          var isAns = i + 1 === q.answer, isMine = i + 1 === q.response;
          var color = isAns ? GREEN : isMine ? RED : BLACK;
          font(9.5, isAns || isMine ? 'bold' : 'normal', color);
          pdf.text(String.fromCharCode(65 + i), L + 2, y + 9.5 * PT * 0.85);
          // radio-style marker: filled = your answer
          pdf.setDrawColor.apply(pdf, color); pdf.setLineWidth(0.25);
          if (isMine) { pdf.setFillColor.apply(pdf, color); pdf.circle(L + 7, y + 9.5 * PT * 0.55, 1.1, 'FD'); } else pdf.circle(L + 7, y + 9.5 * PT * 0.55, 1.1, 'S');
          write(ls, L + 10, 9.5, isAns || isMine ? 'bold' : 'normal', color);
          y += 0.6;
        });
        y += 1.5;
        gLines.forEach(function (t) {
          if (y + lineH(8.8) > BOTTOM) newPage();
          font(8.8, 'normal', GREY); pdf.text(t, L + 4, y + 8.8 * PT * 0.85); y += lineH(8.8);
        });
        y += 2; pdf.setDrawColor(210); pdf.setLineWidth(0.2); pdf.line(L, y, R, y); y += 3;
        if (onProgress && (qi % 25 === 0 || qi === n - 1)) onProgress(qi + 1, n);
      });
      var pages = pdf.getNumberOfPages();
      for (var p = 1; p <= pages; p++) {
        pdf.setPage(p); font(8, 'normal', [120, 120, 120]);
        pdf.text(clean(data.title) + '   ·   Page ' + p + ' of ' + pages, PAGE_W_MM / 2, PAGE_H_MM - MARGIN_MM / 2 - 1, { align: 'center' });
      }
      pdf.save(filename);
      return pages;
    });
  };

  window.makePdf = function (html, filename, onProgress) {
    var frame = document.createElement('iframe');
    frame.setAttribute('aria-hidden', 'true');
    frame.style.cssText = 'position:fixed;left:-10000px;top:0;width:' + CSS_W + 'px;height:1200px;border:0;visibility:hidden';
    document.body.appendChild(frame);
    var cleanup = function () { frame.remove(); };
    return (window.jspdf ? Promise.resolve() : loadScript(JSPDF)).then(function () {
      return new Promise(function (resolve) {
        frame.onload = resolve;
        frame.srcdoc = html.replace('</head>', '<style>html,body{margin:0;background:#fff}.wrap{max-width:none!important;margin:0!important;padding:0 2px!important}.noprint{display:none!important}' +
          'section.q{break-inside:auto}</style></head>');
      });
    }).then(function () {
      var doc = frame.contentDocument, win = frame.contentWindow;
      var imgs = Array.prototype.map.call(doc.images, function (im) { return im.complete ? null : new Promise(function (r) { im.onload = im.onerror = r; }); }).filter(Boolean);
      return Promise.all([loadIn(doc, H2C), doc.fonts ? doc.fonts.ready : null, Promise.all(imgs)]).then(function () { return wait(150); }).then(function () {
        var total = Math.ceil(doc.body.scrollHeight);
        var contentWmm = PAGE_W_MM - 2 * MARGIN_MM, mmPerPx = contentWmm / CSS_W;
        var pageH = Math.floor((PAGE_H_MM - 2 * MARGIN_MM - FOOTER_MM) / mmPerPx);
        var pages = pageBreaks(total, pageH, breakCandidates(doc));
        var pdf = new window.jspdf.jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait', compress: true });
        // group pages into strips that are each drawn with one html2canvas call
        var strips = [], cur = null;
        pages.forEach(function (p, i) {
          if (!cur || p[1] - cur.y0 > STRIP_MAX) { cur = { y0: p[0], y1: p[1], pages: [] }; strips.push(cur); }
          cur.y1 = p[1]; cur.pages.push(i);
        });
        var done = 0;
        return strips.reduce(function (chain, s) {
          return chain.then(function () {
            return win.html2canvas(doc.body, {
              x: 0, y: s.y0, width: CSS_W, height: s.y1 - s.y0, windowWidth: CSS_W, windowHeight: Math.max(1200, s.y1 - s.y0),
              scrollX: 0, scrollY: 0, scale: SCALE, backgroundColor: '#ffffff', useCORS: true, logging: false,
            }).then(function (canvas) {
              s.pages.forEach(function (pi) {
                var p = pages[pi], h = p[1] - p[0];
                var c = document.createElement('canvas'); c.width = Math.round(CSS_W * SCALE); c.height = Math.max(1, Math.round(h * SCALE));
                var cx = c.getContext('2d'); cx.fillStyle = '#fff'; cx.fillRect(0, 0, c.width, c.height);
                cx.drawImage(canvas, 0, Math.round((p[0] - s.y0) * SCALE), c.width, c.height, 0, 0, c.width, c.height);
                if (pi > 0) pdf.addPage();
                pdf.addImage(c.toDataURL('image/jpeg', 0.85), 'JPEG', MARGIN_MM, MARGIN_MM, contentWmm, h * mmPerPx, undefined, 'FAST');
                pdf.setFontSize(8); pdf.setTextColor(120);
                pdf.text('Page ' + (pi + 1) + ' of ' + pages.length, PAGE_W_MM / 2, PAGE_H_MM - MARGIN_MM / 2 - 1, { align: 'center' });
                done++; if (onProgress) onProgress(done, pages.length);
              });
              canvas.width = canvas.height = 0;   // free the strip's memory
            });
          });
        }, Promise.resolve()).then(function () { pdf.save(filename); return pages.length; });
      });
    }).then(function (n) { cleanup(); return n; }, function (err) { cleanup(); throw err; });
  };
})();
