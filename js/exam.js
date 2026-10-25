/* Exam runner: intro screen, question navigation, toolbar (flag / highlight / font size / colour / info),
 * reading + working time, autosave, and review / marking mode after the exam. */
(function () {
  'use strict';
  var examId = qs('id') || 'hsc2025';
  var exam, model, state, ctrls = {}, groupEls = [], timerHandle = null;
  var app = document.getElementById('app');
  var highlighter = null; // 'yellow' | 'blue' | 'red' | 'none' | null

  // ---------------------------------------------------------------- loading
  loadScript('papers/' + examId + '.js').then(function () {
    return loadScript('papers/' + examId + '-guide.js').catch(function () { /* optional */ });
  }).then(function () {
    exam = EXAMS[examId];
    if (!exam) throw new Error('Exam "' + examId + '" not found.');
    model = normalise(exam, GUIDES[examId]);
    state = store.get('exam:' + examId, null);
    if (state && !state.checked) state.checked = {};   // saves from before "Check answer" existed
    document.title = model.title + ' — HSC Online Exam Practice';
    if (state && state.finished) startReview(); else showIntro();
  }).catch(function (err) {
    app.innerHTML = '<div class="results"><h2>Could not open this exam</h2><p>' + escapeHtml(err.message) + '</p><p><a href="index.html">Back to exam list</a></p></div>';
    console.error(err);
  });

  // ---------------------------------------------------------------- model
  function marksFromHtml(h) {
    var m = /\((\d+)\s*marks?\)/i.exec(String(h || '').replace(/&nbsp;/g, ' ').replace(/<[^>]+>/g, ''));
    return m ? +m[1] : null;
  }
  function normalise(exam, guide) {
    var groups = [];
    if (exam.nesaGroups) {
      exam.nesaGroups.forEach(function (g, gi) {
        var number = String(gi + 1);
        var gMarks = marksFromHtml(g.title) || 0;
        var gGuide = guide && guide[number] || [];
        var items = g.items.map(function (it, ii) {
          var type = { 0: 'mcq', 2: 'text', 3: 'html', 4: 'html', 6: 'spreadsheet', 9: 'sql', 11: 'drawing' }[it.nesaType] || 'html';
          var opts = {}; try { opts = JSON.parse(it.options || '{}'); } catch (e) { }
          var item = { type: type, raw: true, question: it.question, nesaType: it.nesaType };
          if (type === 'mcq') item.options = Array.isArray(opts) ? opts : [];
          if (type === 'text' && opts && opts.word_limit) item.wordLimit = opts.word_limit;
          item.marks = g.items.length === 1 ? gMarks : marksFromHtml(it.question);
          var gi2 = gGuide[ii] || {};
          if (gi2.answer != null) item.answer = gi2.answer;
          if (gi2.guide) item.guide = gi2.guide;
          if (gi2.sql) item.sqlAnswer = gi2.sql;
          return item;
        });
        // distribute missing part marks
        var known = items.reduce(function (s, x) { return s + (x.marks || 0); }, 0);
        var unknown = items.filter(function (x) { return x.marks == null; });
        unknown.forEach(function (x) { x.marks = Math.max(0, Math.round((gMarks - known) / unknown.length)); });
        groups.push({ number: number, marks: gMarks, titleHtml: g.title, layout: +g.layout || 0, stimulus: g.stimulus || '', items: items });
      });
    } else {
      exam.groups.forEach(function (g) {
        var items = g.items.map(function (it) { var c = {}; for (var k in it) c[k] = it[k]; if (c.marks == null && g.items.length === 1) c.marks = g.marks; return c; });
        groups.push({
          number: String(g.number), marks: g.marks, layout: g.stimulus ? (g.layout == null ? 3 : +g.layout) : (+g.layout || 0),
          titleHtml: '<h3>Question ' + g.number + ' (' + g.marks + '&nbsp;' + (g.marks === 1 ? 'mark' : 'marks') + ')</h3>' +
            (g.section ? '<span class="q-section">' + escapeHtml(g.section) + '</span>' : ''),
          stimulus: g.stimulus || '', items: items,
        });
      });
    }
    groups.forEach(function (g, gi) {
      g.index = gi;
      // tools need room: give drawing/spreadsheet questions the wide right-hand column
      if (g.layout === 1 && g.items.some(function (it) { return it.type === 'drawing' || it.type === 'spreadsheet'; })) g.layout = 3;
      g.items.forEach(function (it, ii) { it.key = gi + '.' + ii; if (!it.raw) ITEMS.prepareAuthored(it); });
    });
    var objective = 0, total = 0;
    groups.forEach(function (g) {
      total += g.marks || 0;
      g.items.forEach(function (it) { if (it.type === 'mcq' || it.type === 'formula' || it.nesaType === 0 || it.kind === 'multi' || it.kind === 'grid' || it.kind === 'order' || (it.raw && it.type === 'html')) objective += it.marks || 0; });
    });
    return {
      id: exam.id, title: exam.title, groups: groups, totalMarks: exam.totalMarks || total, objectiveMarks: objective,
      readingMinutes: exam.readingMinutes == null ? 10 : exam.readingMinutes, workingMinutes: exam.workingMinutes || 0,
      coverNotes: exam.coverNotes || '', kind: exam.kind,
    };
  }

  function newState(mode) {
    return {
      mode: mode, phase: mode === 'timed' && model.readingMinutes ? 'reading' : 'working',
      readingLeft: model.readingMinutes * 60, workingLeft: (model.workingMinutes || 140) * 60, elapsed: 0,
      responses: {}, flags: {}, checked: {}, current: 0, selfMarks: {}, finished: false, startedAt: Date.now(),
    };
  }
  var saveTimer = null, saveWarned = false;
  function save() {
    if (model.kind === 'textbook') state.score = scoreSoFar();   // shown on the home page
    if (!store.set('exam:' + examId, state) && !saveWarned) {
      saveWarned = true;
      alertModal('Your answers are not being saved', 'This browser is blocking or out of storage for this site (private/incognito windows and some school settings do this). You can keep working, but use "Download answers" at the end before closing the page.');
    }
  }
  function persist(now) {
    if (now) { save(); return; }
    clearTimeout(saveTimer); saveTimer = setTimeout(save, 300);
  }

  // ---------------------------------------------------------------- intro
  function header(right) {
    return '<div class="exam-header"><div class="exam-header-title">' + escapeHtml(model.title) + '</div><div class="exam-header-right">' + (right || '') + '</div></div>';
  }
  function showIntro() {
    var nGroups = model.groups.length;
    var multiPart = model.groups.some(function (g) { return g.items.length > 1; });
    var sa = model.totalMarks - model.objectiveMarks;
    var workMin = model.workingMinutes || 140;
    var workText = Math.floor(workMin / 60) + ' hour' + (Math.floor(workMin / 60) === 1 ? '' : 's') + (workMin % 60 ? ' ' + (workMin % 60) + ' minutes' : '');
    var hasSaved = state && !state.finished && Object.keys(state.responses || {}).length;
    app.innerHTML = header('') +
      '<div class="access-bar" id="intro-access"></div>' +
      '<div class="intro"><div>' +
      '<h2>General Instructions</h2>' +
      '<h3>Reading time</h3><p>' + (model.readingMinutes ? 'In <strong>exam conditions</strong> mode you have ' + model.readingMinutes + ' minutes reading time. During reading time you will not be able to answer questions. You can move freely between the questions, and you can flag questions. Highlighting of text is also permitted.' : 'There is no reading time.') + ' In <strong>practice</strong> mode there is no reading time.</p>' +
      '<h3>Working time</h3><p>' + (model.workingMinutes ? 'In exam conditions mode you will be given ' + workText + ' to attempt the questions. A countdown timer is shown at the top right of the screen.' : 'There is no time limit for these questions.') + ' Practice mode is untimed.</p>' +
      '<h3>Permitted equipment</h3><ul><li>Pen and paper are permitted for planning.</li><li>Use headphones while viewing video content or listening to audio.</li></ul>' +
      '<p><strong>The number of words that is provided for each short-answer item gives an indication of the length of response.</strong></p>' +
      (model.coverNotes ? '<h3>From the exam cover</h3>' + model.coverNotes : '') +
      '<h3>Exam navigation and tool bar functionality</h3><p>During reading and working time, you can access information about the exam, navigation and tools by clicking on the ‘Info’ button at the top right-hand side of the screen.</p>' +
      '</div><div class="intro-right"><div class="feature aqua"><h3>Total marks: ' + model.totalMarks + '</h3><ul>' +
      '<li>There ' + (nGroups === 1 ? 'is 1 question' : 'are ' + nGroups + ' questions') + '.</li>' +
      (multiPart ? '<li>Some questions have multiple parts.</li>' : '') +
      (model.objectiveMarks ? '<li>Objective-response items total ' + model.objectiveMarks + ' marks.</li>' : '') +
      (sa > 0 ? '<li>Short-answer items total ' + sa + ' marks.</li>' : '') +
      '</ul></div><div class="intro-actions">' +
      '<div class="mode-choice">' +
      '<label><input type="radio" name="mode" value="untimed" checked><span><strong>Practice</strong> — untimed, no reading time<small>Like the NESA past-exam viewer.</small></span></label>' +
      (model.workingMinutes ? '<label><input type="radio" name="mode" value="timed"><span><strong>Exam conditions</strong> — ' + (model.readingMinutes ? model.readingMinutes + ' min reading time + ' : '') + workText + ' working time<small>Answers lock during reading time; the exam ends when time runs out.</small></span></label>' : '') +
      '</div>' +
      (hasSaved ? '<p class="resume-note"><i class="fas fa-save"></i> You have saved answers for this exam (' + Object.keys(state.responses).length + (Object.keys(state.responses).length === 1 ? ' response' : ' responses') + ').</p><div style="display:flex;gap:1rem;flex-wrap:wrap"><button class="nsw-button nsw-button--dark" id="resume">RESUME <i class="fas fa-angle-right"></i></button><button class="nsw-button nsw-button--dark-outline" id="restart">Start again</button></div>' :
        '<button class="nsw-button nsw-button--dark" id="start">START <i class="fas fa-angle-right"></i></button>') +
      '<a href="index.html">&larr; Back to exam list</a>' +
      '</div></div></div>';
    document.getElementById('intro-access').append(makeFontSizeButton(), makeColourButton());
    function chosenMode() { var r = app.querySelector('input[name=mode]:checked'); return r ? r.value : 'untimed'; }
    var start = document.getElementById('start');
    if (start) start.addEventListener('click', function () { state = newState(chosenMode()); persist(true); startExam(); });
    var resume = document.getElementById('resume');
    if (resume) {
      if (state.mode) { var r = app.querySelector('input[name=mode][value=' + state.mode + ']'); if (r) r.checked = true; }
      resume.addEventListener('click', function () { var m = chosenMode(); if (m !== state.mode) { var keep = state.responses, flags = state.flags, checked = state.checked; state = newState(m); state.responses = keep; state.flags = flags; state.checked = checked || {}; } persist(true); startExam(); });
      document.getElementById('restart').addEventListener('click', function () {
        if (!confirm('Delete your saved answers for this exam and start again?')) return;
        state = newState(chosenMode()); persist(true); startExam();
      });
    }
  }

  // ---------------------------------------------------------------- exam shell
  function buildShell(review) {
    app.innerHTML = header('<span class="phase-label" id="phase-label"></span><span class="timer-chip" id="timer"><i class="far fa-clock"></i> <span></span></span>' +
      (review || state.mode === 'timed' ? '' : '<button class="hdr-exit" id="hdr-exit" title="Save your answers and go back to the exam list (you can resume later)">Exit exam <i class="fas fa-sign-out-alt"></i></button>')) +
      '<div class="nav-bar"><button class="nav-arrow" id="nav-left" title="Previous questions"><i class="fas fa-angle-left"></i></button><div class="nav-wrapper" id="nav-wrapper"><div class="nav-elems" id="nav-elems"></div></div><button class="nav-arrow" id="nav-right" title="More questions"><i class="fas fa-angle-right"></i></button><div class="nav-toolbar" id="toolbar"></div></div>' +
      (review ? '<div class="review-bar" id="review-bar"></div>' : '') +
      '<div class="exam-main" id="main"></div>';
    var nav = document.getElementById('nav-elems');
    model.groups.forEach(function (g, i) {
      var b = el('<div class="nav-elem" tabindex="0" title="Question ' + g.number + '">' + g.number + '<i class="fas fa-flag nav-flagged hidden"></i><i class="fas fa-check-circle nav-answered hidden"></i>' +
        (model.kind === 'textbook' ? '<i class="fas fa-times-circle nav-wrong hidden"></i><i class="fas fa-circle nav-dot hidden"></i>' : '') + '</div>');
      b.addEventListener('click', function () { go(i); });
      b.addEventListener('keydown', function (e) { if (e.key === 'Enter') go(i); });
      nav.appendChild(b);
    });
    var wrapper = document.getElementById('nav-wrapper');
    document.getElementById('nav-left').addEventListener('click', function () { wrapper.scrollBy({ left: -wrapper.clientWidth * 0.8, behavior: 'smooth' }); });
    document.getElementById('nav-right').addEventListener('click', function () { wrapper.scrollBy({ left: wrapper.clientWidth * 0.8, behavior: 'smooth' }); });
    wrapper.addEventListener('scroll', updateArrows);
    window.addEventListener('resize', function () { updateArrows(); positionMain(); });
    buildToolbar(review);
    var hdrExit = document.getElementById('hdr-exit');
    if (hdrExit) hdrExit.addEventListener('click', saveAndLeave);
    positionMain();
  }
  function positionMain() {
    var main = document.getElementById('main'); if (!main) return;
    var top = 0; Array.prototype.forEach.call(app.children, function (c) { if (c !== main) top += c.offsetHeight; });
    main.style.top = top + 'px';
  }
  function updateArrows() {
    var w = document.getElementById('nav-wrapper'); if (!w) return;
    var overflow = w.scrollWidth > w.clientWidth + 2;
    var l = document.getElementById('nav-left'), r = document.getElementById('nav-right');
    l.classList.toggle('hidden', !overflow); r.classList.toggle('hidden', !overflow);
    l.disabled = w.scrollLeft <= 0; r.disabled = w.scrollLeft + w.clientWidth >= w.scrollWidth - 2;
  }

  function buildToolbar(review) {
    var tb = document.getElementById('toolbar');
    var flag = el('<div class="tb tb-flag"><div class="tb-top" tabindex="0" title="Flag"><i class="fas fa-flag"></i><span>FLAG</span></div></div>');
    flag.querySelector('.tb-top').addEventListener('click', function () {
      var g = state.current; state.flags[g] = !state.flags[g]; persist(); refreshNav();
    });
    var hl = makeDropdownButton('tb-highlight', 'fas fa-highlighter', 'Highlight', function (dd, close) {
      var box = el('<div><p>Choose colour:</p><div class="hl-colours"><div class="hl-btn hl-yellow" data-c="yellow" tabindex="0"></div><div class="hl-btn hl-blue" data-c="blue" tabindex="0"></div><div class="hl-btn hl-red" data-c="red" tabindex="0"></div></div><div class="hl-none" data-c="none" tabindex="0">No colour</div></div>');
      box.addEventListener('click', function (e) {
        var t = e.target.closest('[data-c]'); if (!t) return;
        var c = t.getAttribute('data-c');
        highlighter = (highlighter === c) ? null : c;
        Array.prototype.forEach.call(box.querySelectorAll('[data-c]'), function (x) { x.classList.toggle('selected', x.getAttribute('data-c') === highlighter); });
        document.body.classList.toggle('hl-on', !!highlighter);
        hl.querySelector('.tb-top').classList.toggle('expanded', !!highlighter);
        close();
        hl.querySelector('.tb-top').classList.toggle('expanded', !!highlighter);
      });
      dd.appendChild(box);
    });
    var info = el('<div class="tb tb-info"><div class="tb-top" tabindex="0" title="Info"><i class="fas fa-key"></i><span>INFO</span></div></div>');
    info.querySelector('.tb-top').addEventListener('click', showInfo);
    if (!review) tb.appendChild(flag);
    tb.append(hl, makeFontSizeButton(), makeColourButton(), info);
  }

  // ---------------------------------------------------------------- groups
  function renderGroup(i, review) {
    var g = model.groups[i];
    var groupEl = el('<div class="group layout-' + g.layout + '"></div>');
    var title = el('<div class="group-title"></div>'); title.innerHTML = g.titleHtml;
    var stim = el('<div class="stimulus highlighter-text"></div>'); stim.innerHTML = g.stimulus || '';
    var items = el('<div class="items"></div>');
    var actions = el('<div class="action-bar"></div>');
    var prev = el('<button class="nsw-button nsw-button--dark-outline"><i class="fas fa-angle-left"></i> Previous question</button>');
    prev.disabled = i === 0;
    prev.addEventListener('click', function () { go(i - 1); });
    actions.appendChild(prev);
    // textbook quizzes in practice mode: Check answer first, then Next question
    var checkItems = !review && model.kind === 'textbook' && state.mode !== 'timed' && g.items.length && g.items.every(checkable) ? g.items : null;
    var allChecked = checkItems && checkItems.every(function (it) { return state.checked[it.key]; });
    var checkBtn = null, afterCheck = null;
    if (checkItems) {
      checkBtn = el('<button class="nsw-button nsw-button--dark">Check answer <i class="fas fa-check"></i></button>');
      checkBtn.addEventListener('click', function () {
        var missing = checkItems.filter(function (it) { var v = state.responses[it.key]; return v == null || v === '' || (ctrls[it.key] && !ctrls[it.key].isAnswered(v)); });
        if (missing.length) { toast(missing[0].type === 'mcq' ? 'Choose an answer first.' : checkItems.length > 1 ? 'Answer every part first.' : 'Write your answer first.'); return; }
        checkBtn.disabled = true;
        Promise.all(checkItems.map(runCheck)).then(function (results) {
          checkBtn.disabled = false;
          if (results.some(function (r) { return r == null; })) { toast('Your answer could not be checked (the checking engine did not load — check your internet connection).'); return; }
          checkItems.forEach(function (it, k) { state.checked[it.key] = results[k] ? 'right' : 'wrong'; });
          persist(true);
          checkItems.forEach(showCheck); refreshNav();
          checkBtn.remove(); actions.appendChild(afterCheck);
          afterCheck.focus();
        });
      });
      if (i < model.groups.length - 1) {
        afterCheck = el('<button class="nsw-button nsw-button--dark">Next question <i class="fas fa-angle-right"></i></button>');
        afterCheck.addEventListener('click', function () { go(i + 1); });
      } else {
        afterCheck = el('<button class="nsw-button nsw-button--dark">Finish and mark <i class="fas fa-check"></i></button>');
        afterCheck.addEventListener('click', confirmExit);
      }
      actions.appendChild(allChecked ? afterCheck : checkBtn);
    }
    else if (i < model.groups.length - 1) {
      var next = el('<button class="nsw-button nsw-button--dark">Next question <i class="fas fa-angle-right"></i></button>');
      next.addEventListener('click', function () { go(i + 1); });
      actions.appendChild(next);
    } else if (!review) {
      var exit = el(state.mode === 'timed'
        ? '<button class="nsw-button nsw-button--dark">Exit exam <i class="fas fa-sign-out-alt"></i></button>'
        : '<button class="nsw-button nsw-button--dark">Finish and mark <i class="fas fa-check"></i></button>');
      exit.addEventListener('click', confirmExit);
      actions.appendChild(exit);
    } else {
      var res = el('<button class="nsw-button nsw-button--dark">Results summary <i class="fas fa-list"></i></button>');
      res.addEventListener('click', showResults);
      actions.appendChild(res);
      actions.appendChild(el('<a class="nsw-button nsw-button--dark-outline" href="index.html"><i class="fas fa-arrow-left"></i> Back to exams</a>'));
    }

    g.items.forEach(function (item) {
      var ctl = (ITEMS[item.type] || ITEMS.html)(item, {
        multiItem: g.items.length > 1,
        save: function (v) { if (state.finished) return; state.responses[item.key] = v; persist(); refreshNav(); },
      });
      ctrls[item.key] = ctl;
      items.appendChild(ctl.el);
      var saved = state.responses[item.key];
      if (saved !== undefined) ctl.setValue(saved);
      else Array.prototype.forEach.call(ctl.el.querySelectorAll('select'), function (s) { if (!Array.prototype.some.call(s.options, function (o) { return o.value === ''; })) s.selectedIndex = -1; });
      if (review) addReview(item, ctl);
    });
    if (allChecked) checkItems.forEach(showCheck);

    if (g.layout === 0) {
      var one = el('<div class="group-onecol"></div>');
      one.appendChild(title);
      if (g.stimulus) one.appendChild(stim);
      one.appendChild(items); one.appendChild(actions);
      groupEl.appendChild(one);
    } else {
      groupEl.classList.add('group-twocol');
      var left = el('<div class="col-left"></div>'), right = el('<div class="col-right"></div>'), divider = el('<div class="col-divider" title="Drag to resize"></div>');
      left.appendChild(title); left.appendChild(stim);
      right.appendChild(items); right.appendChild(actions);
      groupEl.append(left, divider, right);
      divider.addEventListener('mousedown', function (e) {
        var startX = e.clientX, startW = left.offsetWidth, total = groupEl.offsetWidth;
        function mv(ev) { var w = Math.min(total - 250, Math.max(200, startW + ev.clientX - startX)); left.style.flexBasis = w + 'px'; }
        function up() { document.removeEventListener('mousemove', mv); document.removeEventListener('mouseup', up); document.body.style.userSelect = ''; }
        document.body.style.userSelect = 'none';
        document.addEventListener('mousemove', mv); document.addEventListener('mouseup', up); e.preventDefault();
      });
    }
    ITEMS.enhanceContent(groupEl);
    groupEl.addEventListener('mouseup', onHighlightMouseUp);
    document.getElementById('main').appendChild(groupEl);
    groupEls[i] = groupEl;
    applyReadOnly();
  }

  // Shows right/wrong, highlights the correct option and the explanation; the answer is then locked.
  // ---- textbook-style "Check answer" (MCQ, SQL with a model answer, spreadsheet formulas)
  function checkable(it) {
    return (it.type === 'mcq' && it.answer != null) || (it.type === 'sql' && !!it.sqlAnswer) || it.type === 'formula';
  }
  // resolves true / false, or null when the answer could not be checked
  function runCheck(item) {
    var v = state.responses[item.key], ctl = ctrls[item.key];
    if (item.type === 'sql') return ITEMS.checkSql(item, v).then(function (c) { return c ? c.match : null; });
    if (item.type === 'formula') return ITEMS.checkFormula(item, v).then(function (c) { return c ? c.match : null; });
    return Promise.resolve(v === item.answer);
  }
  // 'right' | 'wrong' | null (not checked / not marked)
  function itemResult(it) {
    var c = state.checked && state.checked[it.key];
    if (c === 'right' || c === 'wrong') return c;
    if (c && it.type === 'mcq') return state.responses[it.key] === it.answer ? 'right' : 'wrong';   // saves from before right/wrong was stored
    if (state.finished && state.responses[it.key] != null && state.responses[it.key] !== '') {
      var m = itemMark(it);
      if (m.self != null) return m.self >= m.max ? 'right' : 'wrong';
      if (m.auto) return m.auto.got >= m.auto.max ? 'right' : 'wrong';
      if (checkable(it)) return 'wrong';
    }
    return null;
  }
  function groupResult(g) {
    var r = g.items.map(itemResult);
    if (!r.length || r.some(function (x) { return !x; })) return null;
    return r.every(function (x) { return x === 'right'; }) ? 'right' : 'wrong';
  }
  function scoreSoFar() {
    var right = 0, wrong = 0;
    model.groups.forEach(function (g) { var r = groupResult(g); if (r === 'right') right++; else if (r === 'wrong') wrong++; });
    return { correct: right, wrong: wrong };
  }
  // Shows right/wrong, the correct answer and the explanation; the answer is then locked.
  function showCheck(item) {
    var ctl = ctrls[item.key]; if (!ctl) return;
    var v = state.responses[item.key], right = itemResult(item) === 'right';
    ctl.setReadOnly(true);
    var extra = ctl.el.querySelector('.item-extra');
    var old = extra.querySelector('.check-box'); if (old) old.remove();
    var oldSql = extra.querySelector('.sql-check'); if (oldSql) oldSql.remove();
    var s = scoreSoFar();
    var head = right ? 'Correct!' : item.type === 'mcq' ? 'Incorrect — the correct answer is ' + 'ABCDEFGH'[item.answer - 1] + '.' : 'Incorrect — compare your answer with the sample answer below.';
    var box = el('<div class="check-box ' + (right ? 'correct' : 'wrong') + '"><div class="check-head"><i class="fas ' + (right ? 'fa-check-circle' : 'fa-times-circle') + '"></i> ' + head +
      '<span class="check-score">Score so far: ' + s.correct + ' / ' + (s.correct + s.wrong) + '</span></div><div class="check-detail"></div><div class="check-guide"></div></div>');
    box.querySelector('.check-guide').innerHTML = item.guide || '';
    extra.appendChild(box);
    // details: MCQ highlights, SQL expected output, formula expected values (may need the engines first)
    var detail = box.querySelector('.check-detail');
    if (item.type === 'mcq') ctl.review && ctl.review(v);
    else if (item.type === 'sql' && !right) ITEMS.checkSql(item, v).then(function () { if (!item._sqlCheck || item._sqlCheck.match) return; detail.innerHTML = '<p>' + escapeHtml(item._sqlCheck.reason) + '.</p><div class="label">Expected output</div>' + item._sqlCheck.expectedHtml; });
    else if (item.type === 'formula') ITEMS.checkFormula(item, v).then(function (c) { if (c) { detail.innerHTML = c.detailHtml; ctl.review && ctl.review(v); } });
  }

  function go(i) {
    if (i < 0 || i >= model.groups.length) return;
    closeDropdowns();
    Array.prototype.forEach.call(document.querySelectorAll('.item.fullscreen'), function (it) { var b = it.querySelector('.item-buttons .nsw-button--dark'); if (b) b.click(); });
    var review = state.finished;
    if (!groupEls[i]) renderGroup(i, review);
    groupEls.forEach(function (g, j) { if (g) g.classList.toggle('active', j === i); });
    state.current = i; persist();
    model.groups[i].items.forEach(function (it) { var c = ctrls[it.key]; c && c.onShow && c.onShow(); });
    refreshNav();
    var cur = document.querySelectorAll('.nav-elem')[i];
    if (cur) cur.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    updateArrows();
    var scrollers = groupEls[i].querySelectorAll('.group-onecol, .col-left, .col-right');
    Array.prototype.forEach.call(scrollers, function (s) { s.scrollTop = 0; });
  }

  function groupAnswered(g) {
    return g.items.every(function (it) {
      var v = state.responses[it.key];
      var c = ctrls[it.key];
      if (v === undefined || v === null) return false;
      return c ? c.isAnswered(v) : true;
    });
  }
  function refreshNav() {
    var navs = document.querySelectorAll('.nav-elem');
    model.groups.forEach(function (g, i) {
      var n = navs[i]; if (!n) return;
      n.classList.toggle('nav-elem-current', i === state.current);
      n.querySelector('.nav-flagged').classList.toggle('hidden', !state.flags[i]);
      var answered = groupAnsweredLoose(g);
      if (model.kind === 'textbook') {
        // textbook quizzes: tick = correct, cross = wrong, dot = answered but not checked yet
        var res = groupResult(g);
        n.querySelector('.nav-answered').classList.toggle('hidden', res !== 'right');
        n.querySelector('.nav-wrong').classList.toggle('hidden', res !== 'wrong');
        n.querySelector('.nav-dot').classList.toggle('hidden', !(answered && !res));
      } else n.querySelector('.nav-answered').classList.toggle('hidden', !answered);
    });
    var flagTop = document.querySelector('.tb-flag .tb-top');
    if (flagTop) flagTop.classList.toggle('flagged', !!state.flags[state.current]);
    if (state.finished) updateReviewBar();
  }
  // Answered check that works for groups not rendered yet (uses stored values only).
  function groupAnsweredLoose(g) {
    return g.items.every(function (it) {
      var v = state.responses[it.key];
      if (v === undefined || v === null || v === '') return false;
      var c = ctrls[it.key]; if (c) return c.isAnswered(v);
      if (typeof v === 'object' && !Array.isArray(v)) {
        if (v.elements) return v.elements.length > 0;
        if ('changed' in v) return !!v.changed;
        return Object.keys(v).some(function (k) { return Array.isArray(v[k]) ? v[k].length && k.indexOf('sort:') !== 0 : !!v[k]; });
      }
      return true;
    });
  }

  // ---------------------------------------------------------------- reading/working time
  function applyReadOnly() {
    var ro = state.finished || state.phase === 'reading';
    Object.keys(ctrls).forEach(function (k) { ctrls[k].setReadOnly(ro || !!(state.checked && state.checked[k])); });
    groupEls.forEach(function (g) {
      if (!g) return;
      var banner = g.querySelector('.reading-banner');
      if (state.phase === 'reading' && !state.finished) {
        if (!banner) { banner = el('<div class="reading-banner"><i class="fas fa-book-reader"></i> Reading time — you can read, navigate, flag and highlight, but you cannot answer yet.</div>'); var host = g.querySelector('.col-right, .group-onecol'); host.insertBefore(banner, host.firstChild); }
      } else if (banner) banner.remove();
    });
  }
  function tick() {
    if (state.finished) return;
    if (state.mode === 'timed') {
      if (state.phase === 'reading') {
        state.readingLeft -= 1;
        if (state.readingLeft <= 0) { state.phase = 'working'; applyReadOnly(); toast('Reading time has finished. You may now answer the questions.'); }
      } else {
        state.workingLeft -= 1;
        if (state.workingLeft === 300) toast('5 minutes remaining.');
        if (state.workingLeft <= 0) { state.workingLeft = 0; persist(true); alertModal('Time is up', 'Working time has finished. Your answers have been saved.', function () { finishExam(); }); clearInterval(timerHandle); }
      }
    } else state.elapsed = (state.elapsed || 0) + 1;
    if (state.mode !== 'timed' || state.readingLeft % 5 === 0 || state.workingLeft % 5 === 0) persist();
    renderTimer();
  }
  function renderTimer() {
    var t = document.getElementById('timer'), label = document.getElementById('phase-label');
    if (!t) return;
    var span = t.querySelector('span');
    if (state.finished) { t.classList.add('hidden'); label.textContent = 'Review mode'; return; }
    if (state.mode === 'timed') {
      var left = state.phase === 'reading' ? state.readingLeft : state.workingLeft;
      label.textContent = state.phase === 'reading' ? 'Reading time' : '';
      span.textContent = 'Time left: ' + formatTime(left);
      t.classList.toggle('warn', state.phase === 'working' && left <= 300);
    } else {
      label.textContent = 'Practice (untimed)';
      span.textContent = 'Time used: ' + formatTime(state.elapsed || 0);
    }
  }
  function toast(msg) {
    var t = el('<div style="position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#002664;color:#fff;padding:.8rem 1.4rem;z-index:30000;border-radius:4px;box-shadow:0 4px 16px rgba(0,0,0,.3);font-weight:600"></div>');
    t.textContent = msg; document.body.appendChild(t); setTimeout(function () { t.remove(); }, 5000);
  }

  function startExam() {
    ctrls = {}; groupEls = [];
    buildShell(false);
    go(Math.min(state.current || 0, model.groups.length - 1));
    renderTimer();
    clearInterval(timerHandle); timerHandle = setInterval(tick, 1000);
    window.addEventListener('beforeunload', function () { if (state && !state.finished) store.set('exam:' + examId, state); });
    // the same exam open in another tab would overwrite these answers
    var tabWarned = false;
    window.addEventListener('storage', function (e) {
      if (tabWarned || state.finished || e.key !== 'epc-practice:exam:' + examId) return;
      tabWarned = true;
      alertModal('This exam is open in another tab', 'Answers from the two tabs will overwrite each other. Close the other tab and keep working in this one.');
    });
  }

  // ---------------------------------------------------------------- exit / finish
  function confirmExit() {
    var unattempted = model.groups.filter(function (g) { return !groupAnsweredLoose(g); }).length;
    var flagged = Object.keys(state.flags).filter(function (k) { return state.flags[k]; }).length;
    var label = state.mode === 'timed' ? 'Exit exam' : 'Finish and mark';
    var m = el('<div class="modal-bg"><div class="modal"><h3>' + label + '</h3><p>You have <strong>' + unattempted + '</strong> question' + (unattempted === 1 ? '' : 's') + ' not fully attempted and <strong>' + flagged + '</strong> flagged question' + (flagged === 1 ? '' : 's') + '.</p><p>Once you exit, your answers are locked and you can review them against the marking guidelines.</p><div class="modal-buttons"><button class="nsw-button nsw-button--dark-outline" data-a="back"><i class="fas fa-angle-left"></i> Return to exam</button><button class="nsw-button nsw-button--dark" data-a="exit">' + label + ' <i class="fas fa-sign-out-alt"></i></button></div></div></div>');
    m.addEventListener('click', function (e) {
      var a = e.target.closest('[data-a]'); if (!a) return;
      m.remove(); if (a.getAttribute('data-a') === 'exit') finishExam();
    });
    document.body.appendChild(m);
  }
  function alertModal(title, msg, cb) {
    var m = el('<div class="modal-bg"><div class="modal"><h3></h3><p></p><div class="modal-buttons"><span></span><button class="nsw-button nsw-button--dark">OK</button></div></div></div>');
    m.querySelector('h3').textContent = title; m.querySelector('p').textContent = msg;
    m.querySelector('button').addEventListener('click', function () { m.remove(); cb && cb(); });
    document.body.appendChild(m);
  }
  // capture latest values from rendered controls
  function captureResponses() {
    Object.keys(ctrls).forEach(function (k) { try { var v = ctrls[k].getValue(); if (v !== undefined && v !== null && v !== '') state.responses[k] = v; } catch (e) { } });
  }
  // practice mode: keep the exam in progress, save, and go back to the exam list
  function saveAndLeave() {
    clearInterval(timerHandle);
    captureResponses();
    persist(true);
    location.href = 'index.html';
  }
  function finishExam() {
    clearInterval(timerHandle);
    captureResponses();
    state.finished = true; state.finishedAt = Date.now();
    persist(true);
    startReview(true);
  }

  // ---------------------------------------------------------------- review / marking
  function itemMark(item) {
    var v = state.responses[item.key];
    var c = ctrls[item.key];
    var auto = null;
    if (c && c.autoMark) auto = c.autoMark(v);
    else if (item.type === 'mcq' && item.answer != null) auto = { got: v === item.answer ? (item.marks || 1) : 0, max: item.marks || 1 };
    var self = state.selfMarks[item.key];
    return { auto: auto, self: self, max: item.marks || 0 };
  }
  function computeResult() {
    var got = 0, total = 0, pending = 0, objectiveGot = 0;
    model.groups.forEach(function (g) {
      g.items.forEach(function (it) {
        var m = itemMark(it);
        total += m.max;
        if (m.self != null) got += m.self;
        else if (m.auto) { got += m.auto.got; objectiveGot += m.auto.got; }
        else pending += m.max;
      });
    });
    return { got: got, total: total, pending: pending };
  }
  function startReview(justFinished) {
    // compare SQL answers' output with the model answers first (async: the SQL engine may need to load)
    var checks = [];
    model.groups.forEach(function (g) {
      g.items.forEach(function (it) {
        if (it.type === 'sql' && it.sqlAnswer && state.responses[it.key]) checks.push(ITEMS.checkSql(it, state.responses[it.key]));
        if (it.type === 'formula' && state.responses[it.key]) checks.push(ITEMS.checkFormula(it, state.responses[it.key]));
      });
    });
    if (checks.length) {
      app.innerHTML = '<div class="results"><h2><i class="fas fa-spinner fa-spin"></i> Marking your answers…</h2></div>';
      var timeout = new Promise(function (r) { setTimeout(r, 8000); });
      Promise.race([Promise.all(checks), timeout]).then(function () { showReview(justFinished); });
    } else showReview(justFinished);
  }
  function showReview(justFinished) {
    ctrls = {}; groupEls = [];
    buildShell(true);
    // render every group so auto-marking can use the controls
    model.groups.forEach(function (g, i) { renderGroup(i, true); });
    state.result = computeResult(); persist(true);
    go(0);
    renderTimer();
    if (justFinished) showResults();
  }
  function addReview(item, ctl) {
    var extra = ctl.el.querySelector('.item-extra');
    var v = state.responses[item.key];
    try { ctl.review && ctl.review(v); } catch (e) { console.warn(e); }
    var m = itemMark(item);
    if (m.auto) extra.appendChild(el('<div class="auto-mark ' + (m.auto.got === m.auto.max ? 'correct' : 'wrong') + '"><i class="fas ' + (m.auto.got === m.auto.max ? 'fa-check-circle' : 'fa-times-circle') + '"></i> Auto-marked: ' + m.auto.got + ' / ' + m.auto.max + (m.auto.detail ? ' (' + m.auto.detail + ')' : '') + '</div>'));
    var guide = item.guide || '';
    if (item.type === 'mcq' && item.answer != null && !/answer/i.test(guide)) guide = '<p>Correct answer: <strong>' + 'ABCDEFGH'[item.answer - 1] + '</strong></p>' + guide;
    var details = el('<details class="guide-box" open><summary>Marking guidelines</summary><div class="guide-body"></div></details>');
    details.querySelector('.guide-body').innerHTML = guide || '<p><em>No marking guideline is available for this item.</em></p>';
    extra.appendChild(details);
    if (m.max > 0) {
      var opts = '<option value="">' + (m.auto ? 'Use auto mark (' + m.auto.got + ')' : '— not marked —') + '</option>';
      for (var i = 0; i <= m.max; i++) opts += '<option value="' + i + '">' + i + '</option>';
      var sm = el('<label class="self-mark">' + (m.auto ? 'Override mark:' : 'Your mark:') + ' <select>' + opts + '</select> / ' + m.max + '</label>');
      var sel = sm.querySelector('select');
      if (m.self != null) sel.value = String(m.self);
      sel.addEventListener('change', function () {
        if (sel.value === '') delete state.selfMarks[item.key]; else state.selfMarks[item.key] = +sel.value;
        state.result = computeResult(); persist(); updateReviewBar();
      });
      extra.appendChild(sm);
    }
    if (!state.responses.hasOwnProperty(item.key) && (item.type === 'text' || item.type === 'sql')) {
      extra.insertBefore(el('<p style="font-weight:700;color:#b81237;margin:0 0 .5rem">No response was given.</p>'), extra.firstChild);
    }
  }
  function updateReviewBar() {
    var bar = document.getElementById('review-bar'); if (!bar) return;
    var r = computeResult();
    bar.innerHTML = '<strong><i class="fas fa-clipboard-check"></i> Review mode</strong><span>Marks so far: <strong>' + r.got + ' / ' + r.total + '</strong>' + (r.pending ? ' — ' + r.pending + ' marks still to self-mark using the marking guidelines' : '') + '</span>' +
      '<button class="nsw-button nsw-button--dark nsw-button--small" id="rb-results">Results summary</button>' +
      '<button class="nsw-button nsw-button--dark nsw-button--small" id="rb-download"><i class="fas fa-download"></i> Download answers + marking guidelines</button>' +
      '<button class="nsw-button nsw-button--dark-outline nsw-button--small" id="rb-print"><i class="fas fa-print"></i> Print / save as PDF</button>' +
      '<button class="nsw-button nsw-button--dark-outline nsw-button--small" id="rb-retake">Retake exam</button>' +
      '<a class="nsw-button nsw-button--dark-outline nsw-button--small" href="index.html"><i class="fas fa-arrow-left"></i> Back to exams</a>';
    bar.querySelector('#rb-results').addEventListener('click', showResults);
    bar.querySelector('#rb-download').addEventListener('click', function () { exportReport(false); });
    bar.querySelector('#rb-print').addEventListener('click', function () { exportReport(true); });
    bar.querySelector('#rb-retake').addEventListener('click', function () {
      if (!confirm('Clear your answers and marks for this exam and start again?')) return;
      store.remove('exam:' + examId); location.reload();
    });
    positionMain();
  }
  function showResults() {
    var r = computeResult();
    var rows = model.groups.map(function (g, gi) {
      var got = 0, max = 0, pend = 0;
      g.items.forEach(function (it) { var m = itemMark(it); max += m.max; if (m.self != null) got += m.self; else if (m.auto) got += m.auto.got; else pend += m.max; });
      var status = !groupAnsweredLoose(g) ? '<span style="color:#b81237">Not fully attempted</span>' : 'Attempted';
      return '<tr data-g="' + gi + '" class="clickable"><td>Question ' + g.number + '</td><td>' + status + '</td><td class="num">' + (pend === max ? '–' : got) + '</td><td class="num">' + max + '</td><td>' + (pend ? pend + ' to self-mark' : '<i class="fas fa-check" style="color:#00804f"></i>') + '</td></tr>';
    }).join('');
    var objective = 0, objectiveMax = 0;
    model.groups.forEach(function (g) { g.items.forEach(function (it) { var m = itemMark(it); if (m.auto) { objective += m.auto.got; objectiveMax += m.auto.max; } }); });
    var ov = el('<div class="info-modal"><button class="close-x">Close this screen X</button><div class="results"><h2>Results — ' + escapeHtml(model.title) + '</h2>' +
      '<div class="results-summary"><div class="stat">Total so far<b>' + r.got + ' / ' + r.total + '</b></div><div class="stat">Auto-marked items<b>' + objective + ' / ' + objectiveMax + '</b></div><div class="stat">Still to self-mark<b>' + r.pending + ' marks</b></div></div>' +
      '<p>Click a question to review it. Written answers, drawings, spreadsheets and SQL show the marking guidelines underneath your response — choose a mark for each one to complete your score.</p>' +
      '<p style="display:flex;gap:1rem;flex-wrap:wrap"><button class="nsw-button nsw-button--dark" data-x="download"><i class="fas fa-download"></i> Download answers + marking guidelines</button><button class="nsw-button nsw-button--dark-outline" data-x="print"><i class="fas fa-print"></i> Print / save as PDF</button><a class="nsw-button nsw-button--dark-outline" href="index.html"><i class="fas fa-arrow-left"></i> Back to exams</a></p>' +
      '<table><thead><tr><th>Question</th><th>Status</th><th>Mark</th><th>Out of</th><th>Marking</th></tr></thead><tbody>' + rows + '</tbody></table></div></div>');
    ov.querySelector('.close-x').addEventListener('click', function () { ov.remove(); });
    ov.querySelector('tbody').addEventListener('click', function (e) { var tr = e.target.closest('tr[data-g]'); if (tr) { ov.remove(); go(+tr.getAttribute('data-g')); } });
    ov.querySelector('[data-x=download]').addEventListener('click', function () { exportReport(false); });
    ov.querySelector('[data-x=print]').addEventListener('click', function () { exportReport(true); });
    document.body.appendChild(ov);
  }

  // ---------------------------------------------------------------- download / print answers with marking guidelines
  var exporting = false;
  function exportReport(print) {
    if (exporting) return; exporting = true;
    var win = print ? window.open('', '_blank') : null;
    if (win) win.document.write('<p style="font:16px Arial;padding:2rem">Preparing your answers…</p>');
    var m = el('<div class="modal-bg"><div class="modal"><h3><i class="fas fa-spinner fa-spin"></i> Preparing your answers…</h3><p class="prog">Rendering questions, drawings and spreadsheets.</p></div></div>');
    document.body.appendChild(m);
    REPORT.build({
      model: model, state: state, ctrls: ctrls, itemMark: itemMark, result: computeResult(),
      onProgress: function (i, n) { var p = m.querySelector('.prog'); if (p) p.textContent = 'Question ' + i + ' of ' + n + '…'; },
    }).then(function (html) {
      m.remove(); exporting = false;
      if (print) {
        if (!win) { alertModal('Pop-up blocked', 'Allow pop-ups for this page to print, or use the Download button and print the downloaded file.'); return; }
        win.document.open(); win.document.write(html); win.document.close();
        setTimeout(function () { try { win.focus(); win.print(); } catch (e) { } }, 1200);
      } else {
        var name = model.title.replace(/[^\w\- ]+/g, '').trim() + ' - my answers and marking guidelines.html';
        var a = document.createElement('a');
        a.href = URL.createObjectURL(new Blob([html], { type: 'text/html' }));
        a.download = name; document.body.appendChild(a); a.click();
        setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 4000);
        toast('Downloaded: ' + name);
      }
    }).catch(function (err) {
      m.remove(); exporting = false; if (win) win.close();
      alertModal('Could not create the download', String(err && err.message || err));
      console.error(err);
    });
  }

  // ---------------------------------------------------------------- highlighter
  function onHighlightMouseUp(e) {
    if (!highlighter) return;
    var sel = window.getSelection(); if (!sel || sel.isCollapsed || !sel.rangeCount) return;
    var range = sel.getRangeAt(0);
    var container = range.commonAncestorContainer.nodeType === 1 ? range.commonAncestorContainer : range.commonAncestorContainer.parentNode;
    var hlRoot = container.closest('.highlighter-text') || (container.querySelector && container.querySelector('.highlighter-text') ? container : null);
    if (!hlRoot || container.closest('.cke, .sql-wrap, .embed-wrap, input, select, textarea')) return;
    var nodes = [];
    var walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (!range.intersectsNode(n)) return NodeFilter.FILTER_REJECT;
        if (!n.parentNode.closest('.highlighter-text') || n.parentNode.closest('.cke, .sql-wrap, .embed-wrap, button, select, option, style, script')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    while (walker.nextNode()) nodes.push(walker.currentNode);
    if (container.nodeType === 3) nodes = [container];
    nodes.forEach(function (n) {
      var start = n === range.startContainer ? range.startOffset : 0;
      var end = n === range.endContainer ? range.endOffset : n.nodeValue.length;
      if (end <= start) return;
      var existing = n.parentNode.classList && n.parentNode.classList.contains('highlighted') ? n.parentNode : null;
      if (highlighter === 'none') {
        if (existing) unwrap(existing);
        return;
      }
      var target = n;
      if (end < target.nodeValue.length) target.splitText(end);
      if (start > 0) target = target.splitText(start);
      if (existing) { existing.className = 'highlighted ' + highlighter; return; }
      var span = document.createElement('span'); span.className = 'highlighted ' + highlighter;
      target.parentNode.insertBefore(span, target); span.appendChild(target);
    });
    sel.removeAllRanges();
  }
  function unwrap(span) { var p = span.parentNode; while (span.firstChild) p.insertBefore(span.firstChild, span); p.removeChild(span); p.normalize(); }

  // ---------------------------------------------------------------- info screen
  function showInfo() {
    closeDropdowns();
    var timed = state && state.mode === 'timed';
    var ov = el('<div class="info-modal"><button class="close-x">Close this screen X</button><div class="info-grid"><div>' +
      '<h2>Exam information</h2>' +
      '<h4>Reading time</h4><p>' + (timed && model.readingMinutes ? 'You have ' + model.readingMinutes + ' minutes reading time. During reading time you will not be able to answer questions. You can move freely between the questions, and you can flag questions. Highlighting of text is also permitted.' : 'There is no reading time in practice mode.') + '</p>' +
      '<h4>Working time</h4><p>' + (timed ? 'You have ' + (model.workingMinutes || 140) + ' minutes to attempt the questions.' : 'There is no time limit in practice mode.') + '</p>' +
      '<h4>Permitted equipment</h4><ul><li>You <strong>must</strong> use headphones while viewing video content or listening to audio.</li><li>Pen and paper are permitted for planning.</li></ul>' +
      '<h4>Word count</h4><p><strong>The number of words that is provided for each short-answer item gives an indication of the length of response.</strong> <span style="float:right;color:#4d4d4d">0 / 500 words</span></p>' +
      '<h2 style="margin-top:1.2rem">Navigation and toolbar</h2><p><strong>The navigation bar</strong> contains the question numbers, and access to this information page.</p>' +
      '<div class="info-legend">' +
      '<div class="nav-elem">6<i class="fas fa-flag nav-flagged"></i></div><div>A question you have flagged to come back to later</div>' +
      '<div class="nav-elem">2<i class="fas fa-check-circle nav-answered"></i></div><div>A question for which you have attempted all parts</div>' +
      '<div class="nav-elem nav-elem-current">5</div><div>The question you are on now</div>' +
      '<div><button class="nav-arrow"><i class="fas fa-angle-left"></i></button><button class="nav-arrow"><i class="fas fa-angle-right"></i></button></div><div>‘Next’ and ‘previous’ buttons for when there are more questions than the navigation bar has space to display</div>' +
      '<div><span class="timer-chip" style="background:#002664;color:#fff;font-size:.8em"><i class="far fa-clock"></i>&nbsp;Time left</span></div><div>A countdown timer which is displayed at the top right (exam conditions mode)</div>' +
      '</div>' +
      '<h4>Toolbar</h4><p>A toolbar at the top of the screen provides the following functions.</p>' +
      '<div class="info-tool"><div class="tb"><div class="tb-top"><i class="fas fa-flag"></i><span>FLAG</span></div></div><div>To flag a question to come back to later</div>' +
      '<div class="tb"><div class="tb-top"><i class="fas fa-highlighter"></i><span>HIGHLIGHT</span></div></div><div>To highlight text or remove a highlight: choose a colour, then select text in the question. Choose “No colour” and select highlighted text to remove it. Click the chosen colour again to stop highlighting.</div>' +
      '<div class="tb"><div class="tb-top"><i class="fas fa-adjust"></i><span>COLOUR</span></div></div><div>To change the colours of the foreground text and the background</div>' +
      '<div class="tb"><div class="tb-top"><i class="fas fa-font"></i><span>FONT SIZE</span></div></div><div>To increase text size</div></div>' +
      '<h4>Zoom functions</h4><p><strong>Browser/screen zoom:</strong> the size of all elements can be increased or decreased using <em>control +</em> or <em>control −</em> (Windows) or <em>command +</em> / <em>command −</em> (Mac).</p>' +
      '<p><strong>Zoom-window:</strong> images can be expanded to a full-screen view by clicking on them. Click again to close.</p>' +
      '</div><div>' +
      '<h4>Textbox tools</h4><p>The response textboxes have standard text styling functions (bold, underline, italic, lists, indent, table, subscript, superscript, cut/copy/paste, undo/redo) and a <strong>Ω special characters</strong> palette. Your browser’s spell-checker underlines spelling errors.</p>' +
      '<h4>Copy and paste</h4><p>You can copy text using <em>control c</em> (Windows) or <em>command c</em> (Mac) and paste using <em>control v</em> or <em>command v</em>.</p>' +
      '<h4>Sort – Drag and Drop</h4><p>Questions may require you to place elements on the screen in sequence. Select elements by clicking on them, and then drag them to target areas. Drag-and-drop does not work in highlighting mode: turn highlighting off first.</p>' +
      '<h4>Drawing tool</h4><p>Drawing questions provide a drawing canvas with a toolbar: lock, hand (pan), selection, rectangle, diamond, ellipse, arrow, line, draw (pencil), text and eraser. The <strong>Library</strong> button (top right of the canvas) contains Enterprise Computing symbols for system flowcharts and data flow diagrams — drag a symbol onto the canvas. Double-click a shape to add text to it. Use <strong>Full screen</strong> for more room and <strong>Reset</strong> to clear the canvas.</p>' +
      '<h4>Spreadsheet tool</h4><ul><li>Basic text editing functions are available in the toolbar including bold, italics, underline and strikethrough, changing font and cell colours, borders, alignment, merging and number formats.</li><li>Formulae can be added in the f(x) bar and cell ranges can be selected with the mouse while typing a formula. Drag the small square at the bottom-right of a selection to fill down or across.</li><li>You can create graphs using the ‘Graph’ button, add comments, sort, and apply conditional formatting.</li><li>Click the ‘Full screen’ button to view the spreadsheet full screen.</li></ul>' +
      '<h4>SQL editor</h4><p>Type your query in the Query box and click <strong>Run</strong> (or press <em>Ctrl+Enter</em>) to execute it against the database shown in the question. <strong>Reset DB</strong> restores the original tables.</p>' +
      '<p style="margin-top:1.5rem">You can choose to exit the exam by using the ‘Exit exam’ button at the bottom of the last question. After exiting you can review your answers against the marking guidelines.</p>' +
      '</div></div></div>');
    ov.querySelector('.close-x').addEventListener('click', function () { ov.remove(); });
    document.body.appendChild(ov);
  }

  // keep answered ticks fresh when tools report values
  ACCESS.onChange(function () { setTimeout(positionMain, 50); });
})();
