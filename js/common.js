/* Shared helpers: exam registry, local storage, accessibility (font size / colour) and toolbar dropdowns. */
(function () {
  'use strict';

  // ---------- catalogue of exams shown on the home page ----------
  window.CATALOG = [
    { section: 'HSC past examinations', exams: [
      { id: 'hsc2025', title: '2025 HSC Enterprise Computing' },
    ] },
    { section: 'HSC familiarisation questions', exams: [
      { id: 'fam', title: 'HSC Enterprise Computing Familiarisation' },
    ] },
    { section: 'Trial HSC examinations', exams: [
      { id: 'cssa2026', title: 'CSSA 2026 Trial HSC Enterprise Computing' },
      { id: 'ite2026', title: 'ITE 2026 Trial HSC Enterprise Computing' },
      { id: 'pem2026', title: 'PEM 2026 Trial HSC Enterprise Computing' },
      { id: 'cssa2025', title: 'CSSA 2025 Trial HSC Enterprise Computing' },
      { id: 'ind2025', title: 'Independent 2025 Trial HSC Enterprise Computing' },
    ] },
    { section: 'Preliminary (Year 11) examinations', exams: [
      { id: 'pem2025', title: 'PEM 2025 Preliminary Enterprise Computing' },
    ] },
    { section: 'Textbook MCQ', exams: [
      { id: 'tb-m1', title: 'Module 1 — Enterprise project' },
      { id: 'tb-m2', title: 'Module 2 — Data science' },
      { id: 'tb-m3', title: 'Module 3 — Data visualisation' },
      { id: 'tb-m4', title: 'Module 4 — Intelligent systems' },
    ] },
    { section: 'Ec.eforge MCQ', exams: [
      { id: 'ef-ds', title: 'Data Science' },
      { id: 'ef-dv', title: 'Data Visualisation' },
      { id: 'ef-is', title: 'Intelligent Systems' },
    ] },
  ];

  // ---------- data registration (paper files call these) ----------
  window.EXAMS = window.EXAMS || {};
  window.GUIDES = window.GUIDES || {};
  window.registerExam = function (exam) { window.EXAMS[exam.id] = exam; };
  window.registerGuide = function (id, guide) { window.GUIDES[id] = guide; };

  window.loadScript = function (src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src; s.onload = resolve; s.onerror = function () { reject(new Error('Could not load ' + src)); };
      document.head.appendChild(s);
    });
  };
  window.loadCss = function (href) {
    var l = document.createElement('link'); l.rel = 'stylesheet'; l.href = href; document.head.appendChild(l);
  };

  // ---------- storage (localStorage, safe) ----------
  var PREFIX = 'epc-practice:';
  window.store = {
    get: function (key, fallback) {
      try { var v = localStorage.getItem(PREFIX + key); return v == null ? fallback : JSON.parse(v); } catch (e) { return fallback; }
    },
    set: function (key, value) {
      try { localStorage.setItem(PREFIX + key, JSON.stringify(value)); return true; } catch (e) { console.warn('save failed', e); return false; }
    },
    remove: function (key) { try { localStorage.removeItem(PREFIX + key); } catch (e) { } },
    // Everything this site has saved (for backing up / moving progress to another device)
    exportAll: function () {
      var out = {};
      try { for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (k.indexOf(PREFIX) === 0) out[k.slice(PREFIX.length)] = JSON.parse(localStorage.getItem(k)); } } catch (e) { }
      return out;
    },
    importAll: function (obj) {
      var n = 0;
      Object.keys(obj || {}).forEach(function (k) { if (store.set(k, obj[k])) n++; });
      return n;
    },
    available: function () { try { localStorage.setItem(PREFIX + '__test', '1'); localStorage.removeItem(PREFIX + '__test'); return true; } catch (e) { return false; } },
  };

  // ---------- accessibility: font size + colours ----------
  var FONT_SIZES = [{ label: 'Regular', scale: 1 }, { label: 'Large', scale: 1.2 }, { label: 'Extra Large', scale: 1.4 }, { label: 'XX Large', scale: 1.6 }];
  var DEFAULT_COLOURS = { fg: '#000000', bg: '#ffffff' };
  window.ACCESS = {
    fontIndex: store.get('fontIndex', 0),
    colours: store.get('colours', DEFAULT_COLOURS),
    listeners: [],
    apply: function () {
      var root = document.documentElement;
      root.style.setProperty('--ui-scale', FONT_SIZES[this.fontIndex].scale);
      root.style.setProperty('--fg', this.colours.fg);
      root.style.setProperty('--bg', this.colours.bg);
      document.body && document.body.classList.toggle('custom-colours', this.colours.fg !== DEFAULT_COLOURS.fg || this.colours.bg !== DEFAULT_COLOURS.bg);
      this.listeners.forEach(function (fn) { fn(); });
    },
    setFont: function (i) { this.fontIndex = i; store.set('fontIndex', i); this.apply(); },
    setColours: function (c) { this.colours = c; store.set('colours', c); this.apply(); },
    resetColours: function () { this.setColours({ fg: DEFAULT_COLOURS.fg, bg: DEFAULT_COLOURS.bg }); },
    onChange: function (fn) { this.listeners.push(fn); },
  };

  // ---------- toolbar dropdown buttons ----------
  function el(html) { var d = document.createElement('div'); d.innerHTML = html.trim(); return d.firstChild; }
  window.el = el;

  var openDropdown = null;
  function closeDropdowns() {
    if (openDropdown) { openDropdown.dropdown.classList.add('hidden'); openDropdown.top.classList.remove('expanded'); setChevron(openDropdown.top, false); openDropdown = null; }
  }
  function setChevron(top, up) { var c = top.querySelector('.chev'); if (c) c.className = 'fas chev ' + (up ? 'fa-angle-up' : 'fa-angle-down'); }
  document.addEventListener('mousedown', function (e) {
    if (openDropdown && !openDropdown.root.contains(e.target)) closeDropdowns();
  });
  window.closeDropdowns = closeDropdowns;

  function makeDropdownButton(cls, icon, label, buildContent) {
    var root = el('<div class="tb ' + cls + '"><div class="tb-top" tabindex="0" title="' + label + '"><i class="' + icon + '"></i><span>' + label.toUpperCase() + '</span><i class="fas fa-angle-down chev"></i></div><div class="tb-dropdown hidden"></div></div>');
    var top = root.querySelector('.tb-top'), dropdown = root.querySelector('.tb-dropdown');
    buildContent(dropdown, closeDropdowns);
    function toggle() {
      var isOpen = !dropdown.classList.contains('hidden');
      closeDropdowns();
      if (!isOpen) { dropdown.classList.remove('hidden'); top.classList.add('expanded'); setChevron(top, true); openDropdown = { root: root, top: top, dropdown: dropdown }; }
    }
    top.addEventListener('click', toggle);
    top.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
    return root;
  }
  window.makeDropdownButton = makeDropdownButton;

  window.makeFontSizeButton = function () {
    return makeDropdownButton('tb-font', 'fas fa-font', 'Font size', function (dd, close) {
      var ul = el('<ul class="font-opts"></ul>');
      FONT_SIZES.forEach(function (f, i) {
        var li = el('<li tabindex="0">' + f.label + '</li>');
        li.addEventListener('click', function () { ACCESS.setFont(i); refresh(); close(); });
        ul.appendChild(li);
      });
      function refresh() { Array.prototype.forEach.call(ul.children, function (li, i) { li.classList.toggle('on', i === ACCESS.fontIndex); }); }
      refresh(); dd.appendChild(ul);
    });
  };

  window.makeColourButton = function () {
    return makeDropdownButton('tb-colour', 'fas fa-adjust', 'Colour', function (dd) {
      var box = el('<div class="colour-opts"><label for="fgc">Font colour:</label><input id="fgc" type="color"><label for="bgc">Background colour:</label><input id="bgc" type="color"><a href="#" class="colour-reset"><i class="fas fa-redo-alt"></i> reset to default settings</a></div>');
      var fg = box.querySelector('#fgc'), bg = box.querySelector('#bgc');
      function sync() { fg.value = ACCESS.colours.fg; bg.value = ACCESS.colours.bg; }
      fg.addEventListener('input', function () { ACCESS.setColours({ fg: fg.value, bg: bg.value }); });
      bg.addEventListener('input', function () { ACCESS.setColours({ fg: fg.value, bg: bg.value }); });
      box.querySelector('.colour-reset').addEventListener('click', function (e) { e.preventDefault(); ACCESS.resetColours(); sync(); });
      sync(); dd.appendChild(box);
    });
  };

  // ---------- misc ----------
  window.escapeHtml = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; });
  };
  window.formatTime = function (sec) {
    sec = Math.max(0, Math.round(sec));
    var h = Math.floor(sec / 3600), m = Math.floor(sec % 3600 / 60), s = sec % 60;
    return [h, m, s].map(function (n) { return String(n).padStart(2, '0'); }).join(':');
  };
  window.qs = function (name) { return new URLSearchParams(location.search).get(name); };

  document.addEventListener('DOMContentLoaded', function () { ACCESS.apply(); });
})();
