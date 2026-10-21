(function () {
  'use strict';

  const Q = window.QUESTIONS;
  const TOPICS = window.TOPICS;
  const LEVELS = window.LEVELS;
  const byId = Object.fromEntries(Q.map(q => [q.id, q]));
  // Structured (Paper 1 Section B style) questions: a separate list with parts and marking points.
  const SQ = window.STRUCTURED || [];
  const SZQ = window.STRUCTURED_ZH || {};
  const sqById = Object.fromEntries(SQ.map(q => [q.id, q]));
  const isSQ = id => !!sqById[id];
  const item = id => byId[id] || sqById[id];
  const LETTERS = ['A', 'B', 'C', 'D'];
  const KEY = 'dsephys.v1';
  const MOCK_MINUTES = 60;   // suggested time for Section A within the 2 h 30 min Paper 1
  const MASTER_STREAK = 2;   // correct in a row needed to clear a wrong-book item
  const LANG_KEY = 'dsephys.lang';
  const I18N = window.I18N;
  const ZH = window.QUESTIONS_ZH || {};
  let lang = (() => {
    try { const v = localStorage.getItem(LANG_KEY); if (v === 'en' || v === 'zh') return v; } catch (e) { /* storage unavailable */ }
    return /^zh/i.test(navigator.language || '') ? 'zh' : 'en';
  })();

  const app = document.getElementById('app');
  let S = load();
  let session = null;
  let timerId = null;

  /* ---------- storage ---------- */
  function blank() { return { progress: {}, wrong: {}, history: [], sq: {} }; }
  function load() {
    try {
      const s = JSON.parse(localStorage.getItem(KEY));
      if (s && s.progress) return Object.assign(blank(), s);
    } catch (e) { /* storage unavailable */ }
    return blank();
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignore */ }
    updateBadge();
  }

  // Record one answer and keep the wrong-question book in sync.
  function record(id, chosen) {
    const ok = chosen === byId[id].answer;
    const p = S.progress[id] || (S.progress[id] = { a: 0, c: 0 });
    p.a++; if (ok) p.c++;
    let w = S.wrong[id];
    if (!ok) {
      w = w || (S.wrong[id] = { count: 0, note: '', added: Date.now() });
      w.count++; w.last = Date.now(); w.chosen = chosen; w.streak = 0; w.mastered = false;
    } else if (w && !w.mastered) {
      w.streak = (w.streak || 0) + 1;
      if (w.streak >= MASTER_STREAK) w.mastered = true;
    }
    return ok;
  }

  /* ---------- helpers ---------- */
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const topic = id => TOPICS.find(t => t.id === id);

  // Interface text in the current language; {name} placeholders are filled from v.
  function T(en, v) {
    const s = (lang === 'zh' && I18N.zh[en]) || en;
    return v ? s.replace(/\{(\w+)\}/g, (_, k) => v[k]) : s;
  }
  // Topic name in the current language, plus the other language as a muted label.
  const tname = t => lang === 'zh' ? t.zh : t.name;
  const tother = t => lang === 'zh' ? t.name : t.zh;
  // HKDSE grade band of a question, e.g. "Lv 4" / "第 4 級".
  const level = id => LEVELS.find(l => l.id === id);
  const lname = l => lang === 'zh' ? l.zh : l.name;
  const lbadge = l => `<span class="lv lv${l.id}">${esc(lname(l))}</span>`;
  // Questions tried, total and accuracy for a group of questions.
  function groupStats(qs) {
    let a = 0, c = 0, seen = 0;
    qs.forEach(q => { const p = S.progress[q.id]; if (p) { seen++; a += p.a; c += p.c; } });
    return { a, c, seen, n: qs.length };
  }
  const statRow = (label, sub, st) => `<div class="topicrow"><div>${label}<div class="muted" style="font-size:.85rem">${sub ? sub + ' · ' : ''}${T('{seen}/{n} questions tried', st)}</div></div>
        <div style="text-align:right"><b>${st.a ? pct(st.c, st.a) + '%' : '—'}</b><div class="muted" style="font-size:.8rem">${T('accuracy')}</div></div>
        <div class="bar"><i style="width:${st.a ? pct(st.c, st.a) : 0}%"></i></div></div>`;
  // A question with its text swapped for the Chinese version when one exists.
  function loc(q) {
    if (lang !== 'zh') return q;
    const z = ZH[q.id] || {};
    let fig = q.figure;
    if (fig) for (const [a, b] of Object.entries(I18N.figure.zh)) fig = fig.split(a).join(b);
    return Object.assign({}, q, {
      sub: z.sub || q.sub,
      stem: z.stem || q.stem,
      statements: z.statements || q.statements,
      options: z.options || q.options.map(I18N.stmtOption.zh),
      explain: z.explain || q.explain,
      figure: fig
    });
  }
  const pct = (a, b) => b ? Math.round(100 * a / b) : 0;
  function shuffle(a) {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  // Number variants of one template share a family. Keep one of each family first and push the
  // repeats to the end, so a session doesn't serve the same idea twice before it runs out of others.
  function spreadFamilies(ids) {
    const used = new Set(), first = [], rest = [];
    ids.forEach(id => { const f = item(id).family || id; (used.has(f) ? rest : first).push(id); used.add(f); });
    return first.concat(rest);
  }
  const activeWrong = () => Object.keys(S.wrong).filter(id => byId[id] && !S.wrong[id].mastered);
  function fmtTime(sec) {
    sec = Math.max(0, Math.round(sec));
    return String(Math.floor(sec / 60)).padStart(2, '0') + ':' + String(sec % 60).padStart(2, '0');
  }
  const fmtDate = t => new Date(t).toLocaleString(lang === 'zh' ? 'zh-HK' : undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

  function updateBadge() {
    const n = activeWrong().length, b = document.getElementById('wrongCount');
    b.hidden = !n; b.textContent = n;
  }

  /* ---------- question rendering ---------- */
  function questionHTML(q, o) {
    // o: { chosen, reveal, clickable, num, total }
    q = loc(q);
    const stmts = q.statements
      ? '<ol class="stmts">' + q.statements.map((s, i) => `<li><b>(${i + 1})</b><span>${s}</span></li>`).join('') + '</ol>' : '';
    const fig = q.figure ? `<div class="figure">${q.figure}</div>` : '';
    const opts = q.options.map((t, i) => {
      let cls = 'opt';
      if (o.reveal) {
        if (i === q.answer) cls += ' right';
        else if (i === o.chosen) cls += ' wrong';
      } else if (i === o.chosen) cls += ' chosen';
      return `<button class="${cls}" data-opt="${i}" ${o.clickable ? '' : 'disabled'}><span class="L">${LETTERS[i]}.</span><span>${t}</span></button>`;
    }).join('');
    let exp = '';
    if (o.reveal) {
      const ok = o.chosen === q.answer;
      const a = LETTERS[q.answer];
      const head = o.chosen == null ? T('Not answered — the answer is {a}', { a })
        : ok ? T('Correct — {a}', { a }) : T('Incorrect — you chose {c}, the answer is {a}', { c: LETTERS[o.chosen], a });
      exp = `<div class="explain ${ok ? '' : 'bad'}"><h3>${head}</h3>${q.explain}</div>`;
    }
    const t = topic(q.topic);
    const num = o.num != null ? `<span class="qnum">${o.num}.</span>` : '';
    const of = o.total ? `<span>${T('of {n}', { n: o.total })}</span>` : '';
    return `<div class="qhead">${num}${of}<span class="tag">${esc(tname(t))}</span><span>${esc(q.sub)}</span>${lbadge(level(q.level))}</div>
      <div class="stem">${q.stem}</div>${stmts}${fig}<div class="opts">${opts}</div>${exp}`;
  }

  /* ---------- structured questions ---------- */
  function locSQ(q) {
    if (lang !== 'zh') return q;
    const z = SZQ[q.id] || {};
    const swap = str => { if (str) for (const [a, b] of Object.entries(I18N.figure.zh)) str = str.split(a).join(b); return str; };
    return Object.assign({}, q, {
      sub: z.sub || q.sub, stem: z.stem || q.stem, figure: swap(q.figure),
      parts: q.parts.map((p, i) => Object.assign({}, p, (z.parts || [])[i] || {},
        p.draw ? { draw: Object.assign({}, p.draw, { base: swap(p.draw.base), answer: swap(p.draw.answer) }) } : {}))
    });
  }
  const sqMax = q => q.parts.reduce((t, p) => t + p.marks, 0);
  const sqGot = st => (st.ticks || []).reduce((t, a) => t + (a || []).filter(Boolean).length, 0);
  const newSQState = () => ({ texts: [], ticks: [], revealed: false, draws: [], tools: [] });

  /* ---------- drawing on diagrams ----------
   * A part with draw: { w, h, base, answer, tools?, snap?, aria? } shows an SVG the student can draw on.
   * base and answer are SVG markup in a w × h viewBox; answer (the model drawing) is overlaid after
   * the marking scheme is shown, for the student to compare. Strokes are kept in st.draws[part].
   */
  const DRAW_TOOLS = { line: 'Line', ray: 'Ray', arrow: 'Arrow', pen: 'Freehand' };
  const rr = n => Math.round(n * 10) / 10;
  function strokeSVG(k) {
    const p = k.pts;
    if (k.t === 'pen') return `<path d="M${p.map(q => q.join(' ')).join(' L')}" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`;
    if (p.length < 2) return '';
    let out = `<path d="M${p[0].join(' ')} L${p[1].join(' ')}" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>`;
    if (k.t === 'arrow') {
      const a = Math.atan2(p[1][1] - p[0][1], p[1][0] - p[0][0]), h = 11;
      const e = s => rr(p[1][0] - h * Math.cos(a + s)) + ' ' + rr(p[1][1] - h * Math.sin(a + s));
      out += `<path d="M${p[1].join(' ')} L${e(0.4)} L${e(-0.4)} Z" fill="currentColor"/>`;
    }
    return out;
  }
  function drawHTML(p, i, st, readonly) {
    const d = p.draw, tools = d.tools || Object.keys(DRAW_TOOLS), cur = (st.tools && st.tools[i]) || tools[0];
    const strokes = ((st.draws || [])[i] || []).map(strokeSVG).join('');
    const bar = readonly || st.revealed ? '' : `<div class="drawtools">${tools.map(t =>
      `<button type="button" class="btn small${t === cur ? ' on' : ''}" data-tool="${i}:${t}">${T(DRAW_TOOLS[t])}</button>`).join('')}
      <button type="button" class="btn small" data-undo="${i}">${T('Undo')}</button><button type="button" class="btn small" data-clear="${i}">${T('Clear')}</button></div>`;
    const note = st.revealed
      ? `<div class="drawkey"><span class="k mine"></span>${T('Your drawing')}<span class="k model"></span>${T('Model answer')}</div>`
      : (readonly ? '' : `<div class="muted drawhint">${T('Draw on the diagram: choose a tool, then drag.')}</div>`);
    return `<div class="drawpad">${bar}<svg class="drawsvg${readonly || st.revealed ? ' locked' : ''}" data-draw="${i}" viewBox="0 0 ${d.w} ${d.h}" role="img" aria-label="${esc(d.aria || '')}">${d.base}<g class="modeldraw">${st.revealed ? d.answer : ''}</g><g class="mine">${strokes}</g></svg>${note}</div>`;
  }
  // Make one drawing area interactive. Line ends snap to the part's snap points; a ray runs on to the edge.
  function bindDraw(svgEl, d, st, i) {
    const g = svgEl.querySelector('g.mine');
    const list = () => (st.draws[i] || (st.draws[i] = []));
    const redraw = cur => { g.innerHTML = list().map(strokeSVG).join('') + (cur ? strokeSVG(cur) : ''); };
    const at = e => {
      const P = new DOMPoint(e.clientX, e.clientY).matrixTransform(svgEl.getScreenCTM().inverse());
      for (const sp of d.snap || []) if (Math.hypot(sp[0] - P.x, sp[1] - P.y) < 9) return [sp[0], sp[1]];
      return [rr(P.x), rr(P.y)];
    };
    const toEdge = (a, b) => {
      const dx = b[0] - a[0], dy = b[1] - a[1];
      let t = Infinity;
      if (dx > 0) t = Math.min(t, (d.w - a[0]) / dx); if (dx < 0) t = Math.min(t, -a[0] / dx);
      if (dy > 0) t = Math.min(t, (d.h - a[1]) / dy); if (dy < 0) t = Math.min(t, -a[1] / dy);
      return isFinite(t) ? [rr(a[0] + dx * t), rr(a[1] + dy * t)] : b;
    };
    let cur = null;
    svgEl.onpointerdown = e => {
      e.preventDefault(); svgEl.setPointerCapture(e.pointerId);
      cur = { t: (st.tools && st.tools[i]) || (d.tools || Object.keys(DRAW_TOOLS))[0], pts: [at(e)] };
    };
    svgEl.onpointermove = e => {
      if (!cur) return;
      const P = at(e);
      if (cur.t === 'pen') { const L = cur.pts[cur.pts.length - 1]; if (Math.hypot(P[0] - L[0], P[1] - L[1]) > 2) cur.pts.push(P); }
      else cur.pts[1] = cur.t === 'ray' ? toEdge(cur.pts[0], P) : P;
      redraw(cur);
    };
    svgEl.onpointerup = svgEl.onpointercancel = () => {
      if (!cur) return;
      const p = cur.pts, far = p.length > 1 && Math.hypot(p[p.length - 1][0] - p[0][0], p[p.length - 1][1] - p[0][1]) > 4;
      if (far) list().push(cur);
      cur = null; redraw();
    };
  }
  // Read the last number a student typed, e.g. "2.4e5", "2.4 x 10^5", "2.4 × 10⁵" or "240000".
  function parseNum(text) {
    const sup = { '⁻': '-', '⁰': 0, '¹': 1, '²': 2, '³': 3, '⁴': 4, '⁵': 5, '⁶': 6, '⁷': 7, '⁸': 8, '⁹': 9 };
    const t = String(text).replace(/[⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, m => '^' + [...m].map(c => sup[c]).join('')).replace(/−/g, '-').replace(/,/g, '');
    const re = /(-?\d+(?:\.\d+)?)(?:\s*(?:[x×*]\s*10\s*\^\s*\(?(-?\d+)\)?|e(-?\d+)))?/gi;
    let m, last = null;
    while ((m = re.exec(t))) {
      if (m.index > 0 && t[m.index - 1] === '^') continue;   // a unit's power such as s⁻¹, not a value
      last = Number(m[1]) * Math.pow(10, Number(m[2] || m[3] || 0));
    }
    return last;
  }
  const fmtNum = v => window.fmt ? window.fmt(v, 3) : String(Number(v.toPrecision(3)));
  const markWord = n => T(n === 1 ? '{n} mark' : '{n} marks', { n });

  function sqHTML(q, o) {
    // o: { st, readonly, num, total }
    q = locSQ(q);
    const st = o.st, reveal = st.revealed;
    const parts = q.parts.map((p, i) => {
      const ticks = st.ticks[i] || [];
      let check = '';
      if (reveal && p.num) {
        const v = parseNum(st.texts[i] || '');
        if (v != null) {
          const ok = Math.abs(v - p.num.v) <= (p.num.tol || 0.02) * Math.abs(p.num.v);
          check = `<div class="numcheck ${ok ? 'ok' : 'bad'}">${T(ok ? 'Your final value {v} agrees with the answer.' : 'Your final value {v} does not agree with the answer.', { v: esc(fmtNum(v)) })}</div>`;
        }
      }
      const scheme = reveal ? `<div class="scheme"><div class="model"><b>${T('Suggested answer')}</b><div>${p.answer}</div></div>${check}
          <div class="points"><b>${T('Marking points — tick each one your answer contains')}</b>${p.points.map((pt, j) =>
            `<label class="pt"><input type="checkbox" data-tick="${i}.${j}" ${ticks[j] ? 'checked' : ''} ${o.readonly ? 'disabled' : ''}><span>${pt}</span></label>`).join('')}</div>
          <div class="muted partscore">${T('{a} / {b} marks', { a: ticks.filter(Boolean).length, b: p.marks })}</div></div>` : '';
      return `<div class="part"><div class="partq"><b>${p.label}</b><span>${p.q}</span><span class="marks">(${markWord(p.marks)})</span></div>
        ${p.draw ? drawHTML(p, i, st, o.readonly) : ''}<textarea data-part="${i}" rows="3" placeholder="${esc(T('Write your answer and working here'))}" ${o.readonly ? 'readonly' : ''}>${esc(st.texts[i] || '')}</textarea>${scheme}</div>`;
    }).join('');
    const t = topic(q.topic), max = sqMax(q);
    const num = o.num != null ? `<span class="qnum">${o.num}.</span>` : '';
    const of = o.total ? `<span>${T('of {n}', { n: o.total })}</span>` : '';
    const foot = reveal
      ? `<div class="sqtotal">${T('Your total: {a} / {b} marks', { a: sqGot(st), b: max })}</div>`
      : (o.readonly ? '' : `<div class="row" style="margin-top:14px"><button class="btn primary" id="reveal">${T('Show marking scheme')}</button><span class="muted">${markWord(max)}</span></div>`);
    return `<div class="qhead">${num}${of}<span class="tag sqtag">${T('Structured question')}</span>${q.kind === 'exp' ? `<span class="tag exptag">${T('Experiment')}</span>` : ''}<span class="tag">${esc(tname(t))}</span><span>${esc(q.sub)}</span>${lbadge(level(q.level))}</div>
      <div class="stem">${q.stem}</div>${q.figure ? `<div class="figure">${q.figure}</div>` : ''}<div class="parts">${parts}</div>${foot}`;
  }
  // Save a structured attempt into the stored progress.
  function recordSQ(id, st, isNew) {
    const p = S.sq[id] || (S.sq[id] = { a: 0, best: 0, last: 0, max: sqMax(sqById[id]) });
    if (isNew) p.a++;
    p.last = sqGot(st); p.best = Math.max(p.best, p.last); p.max = sqMax(sqById[id]);
  }
  // Interleave structured questions evenly among multiple-choice ones.
  function interleave(mc, sq) {
    const n = mc.length + sq.length, out = [];
    let mi = 0, si = 0;
    for (let i = 0; i < n; i++) {
      if (si < sq.length && (si < Math.floor((i + 1) * sq.length / n) || mi >= mc.length)) out.push(sq[si++]);
      else out.push(mc[mi++]);
    }
    return out;
  }

  /* ---------- router ---------- */
  function route() {
    stopTimer();
    const r = location.hash.replace(/^#\/?/, '') || 'home';
    document.querySelectorAll('#nav a').forEach(a => a.classList.toggle('on', a.dataset.r === r ||
      (r === 'quiz' || r === 'result') && session && a.dataset.r === (session.mode === 'mock' ? 'mock' : session.mode === 'redo' ? 'wrong' : 'practice')));
    if (r === 'quiz' && session) renderQuiz();
    else if (r === 'result' && session && session.done) renderResult();
    else (({ home: renderHome, practice: renderPractice, mock: renderMock, wrong: renderWrong, data: renderData })[r] || renderHome)();
    window.scrollTo(0, 0);
  }
  const go = r => { if (location.hash === '#/' + r) route(); else location.hash = '#/' + r; };

  /* ---------- home ---------- */
  function renderHome() {
    const ids = Object.keys(S.progress).filter(id => byId[id]);
    let a = 0, c = 0;
    ids.forEach(id => { a += S.progress[id].a; c += S.progress[id].c; });
    const mocks = S.history.filter(h => h.mode === 'mock');
    const best = mocks.length ? Math.max(...mocks.map(h => pct(h.score, h.total))) + '%' : '—';
    const sqTried = Object.keys(S.sq || {}).filter(id => sqById[id] && S.sq[id].a);
    const sqBest = sqTried.reduce((t, id) => t + S.sq[id].best, 0), sqMaxAll = sqTried.reduce((t, id) => t + S.sq[id].max, 0);
    const resume = session && !session.done
      ? `<div class="card row"><div><b>${T(session.mode === 'mock' ? 'Unfinished mock paper' : 'Unfinished practice')}</b><div class="muted">${T('Question {i} of {n}', { i: session.idx + 1, n: session.qs.length })}</div></div><span class="spacer"></span><button class="btn primary" data-go="quiz">${T('Resume')}</button></div>` : '';

    const topicRows = TOPICS.map(t =>
      statRow(`${esc(tname(t))}<span class="zh">${esc(tother(t))}</span>`, '', groupStats(Q.filter(q => q.topic === t.id)))).join('');
    const levelRows = LEVELS.map(l =>
      statRow(lbadge(l), esc(T(l.about)), groupStats(Q.filter(q => q.level === l.id)))).join('');

    const hist = mocks.slice(-5).reverse().map(h =>
      `<tr><td>${fmtDate(h.date)}</td><td>${h.score} / ${h.total}</td><td>${pct(h.score, h.total)}%</td><td>${fmtTime(h.secs)}</td></tr>`).join('');

    app.innerHTML = `
      <h1>${T('HKDSE Physics Revision')}</h1>
      <p class="muted">${T('Multiple-choice and structured-question practice for the HKDSE Physics compulsory part: {n} multiple-choice and {s} structured questions.', { n: Q.length, s: SQ.length })}</p>
      ${resume}
      <div class="grid stats" style="margin-bottom:16px">
        <div class="stat"><b>${ids.length}<small class="muted" style="font-size:.9rem">/${Q.length}</small></b><span>${T('questions tried')}</span></div>
        <div class="stat"><b>${a ? pct(c, a) + '%' : '—'}</b><span>${T('overall accuracy')}</span></div>
        <div class="stat"><b>${activeWrong().length}</b><span>${T('in wrong book')}</span></div>
        <div class="stat"><b>${best}</b><span>${T('best mock score')}</span></div>
        <div class="stat"><b>${sqTried.length}<small class="muted" style="font-size:.9rem">/${SQ.length}</small></b><span>${T('structured questions tried')}</span></div>
        <div class="stat"><b>${sqTried.length ? pct(sqBest, sqMaxAll) + '%' : '—'}</b><span>${T('structured best marks')}</span></div>
      </div>
      <div class="card row">
        <button class="btn primary" data-go="practice" data-type="mc">${T('Start practice')}</button>
        <button class="btn" data-go="practice" data-type="sq">${T('Practise structured questions')}</button>
        <button class="btn" data-go="practice" data-type="mix">${T('Mixed practice')}</button>
        <button class="btn" data-go="mock">${T('Take a mock paper')}</button>
        <button class="btn" data-go="wrong">${T('Review wrong book')}</button>
      </div>
      <div class="card"><h2>${T('By topic')}</h2>${topicRows}</div>
      <div class="card"><h2>${T('By level')}</h2>${levelRows}<p class="muted" style="font-size:.85rem;margin:12px 0 0">${T('Levels are the setter’s estimate of the HKDSE grade at which a student would usually answer the question correctly, not an official HKEAA classification.')}</p></div>
      ${hist ? `<div class="card"><h2>${T('Recent mock papers')}</h2><table><tr><th>${T('Date')}</th><th>${T('Score')}</th><th>%</th><th>${T('Time used')}</th></tr>${hist}</table></div>` : ''}
      <div class="card"><h2>${T('Your data')}</h2>
        <p class="muted">${T('Progress is stored in this browser. Export it to move to another device.')}</p>
        <div class="row"><button class="btn" id="exp">${T('Export progress')}</button>
        <label class="btn">${T('Import progress')}<input type="file" id="imp" accept="application/json" hidden></label>
        <span class="spacer"></span><button class="btn danger" id="reset">${T('Reset all progress')}</button></div>
      </div>`;

    document.getElementById('exp').onclick = () => {
      const blob = new Blob([JSON.stringify(S, null, 1)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob); a.download = 'dse-physics-progress.json'; a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    };
    document.getElementById('imp').onchange = e => {
      const f = e.target.files[0]; if (!f) return;
      f.text().then(t => {
        const d = JSON.parse(t);
        if (!d || typeof d.progress !== 'object') throw new Error('bad file');
        S = Object.assign(blank(), d); save(); renderHome();
      }).catch(() => alert(T('That file is not a valid progress export.')));
    };
    document.getElementById('reset').onclick = () => {
      if (confirm(T('Delete all progress, mock history and the wrong book on this browser?'))) { S = blank(); session = null; save(); renderHome(); }
    };
  }

  /* ---------- practice setup ---------- */
  let practiceType = 'mc';   // 'mc' | 'sq' | 'mix'
  const TYPES = [
    ['mc', 'Multiple choice', 'Multiple-choice questions one at a time, with the solution after each.'],
    ['sq', 'Structured', 'Paper 1 Section B style questions in several parts. Write your answers, then mark them yourself against the marking scheme.'],
    ['mix', 'Mixed', 'About one structured question for every three multiple-choice questions, as in a real paper.']
  ];
  function renderPractice() {
    const chips = TOPICS.map(t =>
      `<label class="chip on"><input type="checkbox" value="${t.id}" checked>${esc(tname(t))}<span class="zh">${esc(tother(t))}</span></label>`).join('');
    const lchips = LEVELS.map(l =>
      `<label class="chip on" title="${esc(T(l.about))}"><input type="checkbox" value="${l.id}" checked>${esc(lname(l))}</label>`).join('');
    app.innerHTML = `
      <h1>${T('Topic practice')}</h1>
      <p class="muted">${T('Answer one question at a time and see the worked solution immediately. Wrong answers go into your wrong book automatically.')}</p>
      <div class="card">
        <h2>${T('Question type')}</h2>
        <div class="tabs" id="qtype">${TYPES.map(([k, n]) => `<button data-qt="${k}" class="${practiceType === k ? 'on' : ''}">${T(n)}</button>`).join('')}</div>
        <p class="muted" id="qtypeAbout" style="margin-top:-6px">${T(TYPES.find(t => t[0] === practiceType)[2])}</p>
        <h2>${T('Topics')}</h2><div class="chips" id="chips">${chips}</div>
        <h2 style="margin-top:18px">${T('Levels')}</h2><div class="chips" id="lchips">${lchips}</div>
        <ul class="muted lvlist">${LEVELS.map(l => `<li><b>${esc(lname(l))}</b> ${esc(T(l.about))}</li>`).join('')}</ul>
        <div class="row" style="margin-top:18px">
          <label>${T('Number of questions')}
            <select id="n"><option>5</option><option selected>10</option><option>20</option><option value="999">${T('All')}</option></select></label>
          <label class="row" style="gap:6px"><input type="checkbox" id="unseen" checked> ${T('Unseen questions first')}</label>
        </div>
        <div class="row" style="margin-top:18px"><button class="btn primary" id="start">${T('Start')}</button><span id="msg" class="muted"></span></div>
      </div>`;
    const chipsEl = document.getElementById('chips'), lchipsEl = document.getElementById('lchips'), msg = document.getElementById('msg');
    const picked = el => [...el.querySelectorAll('input:checked')].map(i => i.value);
    const pick = list => {
      const tsel = picked(chipsEl), lsel = picked(lchipsEl).map(Number);
      return list.filter(q => tsel.includes(q.topic) && lsel.includes(q.level));
    };
    const matching = () => pick(Q);
    const showCount = () => {
      msg.textContent = practiceType === 'mc' ? T('{n} questions match', { n: matching().length })
        : practiceType === 'sq' ? T('{n} questions match', { n: pick(SQ).length })
        : T('{m} multiple-choice and {s} structured questions match', { m: matching().length, s: pick(SQ).length });
    };
    app.querySelectorAll('[data-qt]').forEach(b => b.onclick = () => {
      practiceType = b.dataset.qt;
      app.querySelectorAll('[data-qt]').forEach(x => x.classList.toggle('on', x === b));
      document.getElementById('qtypeAbout').textContent = T(TYPES.find(t => t[0] === practiceType)[2]);
      showCount();
    });
    [chipsEl, lchipsEl].forEach(el => el.addEventListener('change', e => {
      e.target.closest('.chip').classList.toggle('on', e.target.checked);
      showCount();
    }));
    showCount();
    document.getElementById('start').onclick = () => {
      if (!picked(chipsEl).length) { msg.textContent = T('Pick at least one topic.'); return; }
      if (!picked(lchipsEl).length) { msg.textContent = T('Pick at least one level.'); return; }
      const n = +document.getElementById('n').value, unseen = document.getElementById('unseen').checked;
      let mc = shuffle(matching().map(q => q.id)), sq = shuffle(pick(SQ).map(q => q.id));
      if (unseen) {
        mc.sort((a, b) => (S.progress[a] ? 1 : 0) - (S.progress[b] ? 1 : 0));
        sq.sort((a, b) => (S.sq[a] && S.sq[a].a ? 1 : 0) - (S.sq[b] && S.sq[b].a ? 1 : 0));
      }
      mc = spreadFamilies(mc);
      let ids;
      if (practiceType === 'mc') ids = mc.slice(0, n);
      else if (practiceType === 'sq') ids = sq.slice(0, n);
      else {
        const ns = n >= 999 ? sq.length : Math.min(sq.length, Math.max(1, Math.round(n / 4)));
        ids = interleave(mc.slice(0, n >= 999 ? mc.length : n - ns), sq.slice(0, ns));
      }
      if (!ids.length) { msg.textContent = T('No questions match. Choose more topics or levels.'); return; }
      startSession('practice', ids);
    };
  }

  /* ---------- mock setup ---------- */
  function renderMock() {
    const total = TOPICS.reduce((s, t) => s + t.mock, 0);
    const rows = TOPICS.map(t => `<tr><td>${esc(tname(t))}<span class="zh">${esc(tother(t))}</span></td><td>${t.mock}</td></tr>`).join('');
    app.innerHTML = `
      <h1>${T('Mock paper — Paper 1 Section A')}</h1>
      <div class="card">
        <p>${T('{n} multiple-choice questions drawn across the compulsory part, arranged in syllabus order like the real paper. Each question has one correct answer out of A–D; there is no penalty for wrong answers, so answer every question.', { n: total })}</p>
        <p class="muted">${T('Timer: {m} minutes (a typical share of the 2 h 30 min Paper 1 for Section A). Answers and solutions are shown only after you hand in.', { m: MOCK_MINUTES })}</p>
        <table><tr><th>${T('Topic')}</th><th>${T('Questions')}</th></tr>${rows}</table>
        <div class="row" style="margin-top:18px"><button class="btn primary" id="start">${T('Start mock paper')}</button></div>
      </div>`;
    document.getElementById('start').onclick = () => {
      const ids = [];
      TOPICS.forEach(t => ids.push(...spreadFamilies(shuffle(Q.filter(q => q.topic === t.id).map(q => q.id))).slice(0, t.mock)));
      startSession('mock', ids);
    };
  }

  /* ---------- quiz session ---------- */
  function startSession(mode, ids) {
    session = { mode, qs: ids, idx: 0, answers: {}, sq: {}, flags: {}, start: Date.now(), done: false };
    if (mode === 'mock') session.deadline = Date.now() + MOCK_MINUTES * 60000;
    go('quiz');
  }

  function stopTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }
  function tick() {
    const el = document.getElementById('timer');
    const left = (session.deadline - Date.now()) / 1000;
    if (left <= 0) { stopTimer(); alert(T('Time is up. Your paper has been handed in.')); finish(); return; }
    if (el) { el.textContent = fmtTime(left); el.classList.toggle('low', left < 300); }
  }

  function renderQuiz() {
    const s = session;
    if (s.done) { go('result'); return; }
    const mock = s.mode === 'mock';
    const id = s.qs[s.idx], q = item(id), chosen = s.answers[id], sqMode = isSQ(id);
    const st = sqMode ? (s.sq[id] || (s.sq[id] = newSQState())) : null;
    const reveal = !mock && chosen != null;
    const done = qid => isSQ(qid) ? !!(s.sq[qid] && s.sq[qid].revealed) : s.answers[qid] != null;
    const answered = s.qs.filter(done).length;
    const hasSQ = s.qs.some(isSQ);
    const last = s.idx === s.qs.length - 1;

    const title = T(mock ? 'Mock paper' : s.mode === 'redo' ? 'Wrong book redo' : 'Practice');
    const bubbles = s.qs.map((qid, i) => {
      let cls = '';
      if (mock) cls = s.answers[qid] != null ? 'ans' : '';
      else if (isSQ(qid)) {
        const x = s.sq[qid];
        if (x && x.revealed) { const g = sqGot(x), m = sqMax(sqById[qid]); cls = g === m ? 'right' : g * 2 >= m ? 'part' : 'wrong'; }
        cls += ' sq';
      }
      else if (s.answers[qid] != null) cls = s.answers[qid] === byId[qid].answer ? 'right' : 'wrong';
      if (s.flags[qid]) cls += ' flag';
      if (i === s.idx) cls += ' cur';
      const lbl = mock && s.answers[qid] != null ? `${i + 1}${LETTERS[s.answers[qid]]}` : i + 1;
      return `<button class="${cls}" data-jump="${i}">${lbl}</button>`;
    }).join('');

    app.innerHTML = `
      <div class="row" style="margin-bottom:12px"><h1 style="margin:0">${title}</h1><span class="spacer"></span>
        <span class="muted">${T('{a} / {n} answered', { a: answered, n: s.qs.length })}</span></div>
      <div class="qwrap">
        <div class="card">
          ${sqMode ? sqHTML(q, { st, num: s.idx + 1, total: s.qs.length }) : questionHTML(q, { chosen, reveal, clickable: mock || chosen == null, num: s.idx + 1, total: s.qs.length })}
          <div class="row qnav">
            <button class="btn" id="prev" ${s.idx === 0 ? 'disabled' : ''}>${T('← Previous')}</button>
            ${mock ? `<button class="btn small" id="flag">${T(s.flags[id] ? 'Unflag' : 'Flag for review')}</button>` : ''}
            <span class="spacer"></span>
            ${last ? (mock ? '' : `<button class="btn primary" id="end" ${answered ? '' : 'disabled'}>${T('See summary')}</button>`)
                   : `<button class="btn ${mock || reveal ? 'primary' : ''}" id="next">${T('Next →')}</button>`}
          </div>
        </div>
        <aside class="card sheet">
          ${mock ? `<div class="muted" style="font-size:.85rem">${T('Time left')}</div><div class="timer" id="timer">${fmtTime((s.deadline - Date.now()) / 1000)}</div>` : `<b>${T('Questions')}</b>`}
          <div class="bubbles">${bubbles}</div>
          <div class="legend">${T(mock ? 'Blue = answered · orange line = flagged' : hasSQ ? 'Green = correct or full marks · orange = at least half marks · red = wrong' : 'Green = correct · red = wrong')}${hasSQ ? '<br>' + T('Dashed = structured question') : ''}<br>${T('Keys: A–D to answer, ← → to move')}</div>
          ${mock ? `<button class="btn primary" id="submit" style="width:100%;justify-content:center;margin-top:12px">${T('Hand in paper')}</button>`
                 : `<button class="btn small" id="quit" style="margin-top:12px">${T('End session')}</button>`}
        </aside>
      </div>`;

    app.querySelectorAll('[data-opt]').forEach(b => b.onclick = () => choose(+b.dataset.opt));
    app.querySelectorAll('[data-jump]').forEach(b => b.onclick = () => { s.idx = +b.dataset.jump; renderQuiz(); });
    const on = (sel, fn) => { const el = document.getElementById(sel); if (el) el.onclick = fn; };
    on('prev', () => move(-1));
    on('next', () => move(1));
    on('end', finish);
    on('quit', () => { if (answered) finish(); else { session = null; go('home'); } });
    if (sqMode) {
      app.querySelectorAll('[data-part]').forEach(t => t.oninput = () => { st.texts[+t.dataset.part] = t.value; });
      st.draws = st.draws || []; st.tools = st.tools || [];
      if (!st.revealed) app.querySelectorAll('svg[data-draw]').forEach(el => bindDraw(el, q.parts[+el.dataset.draw].draw, st, +el.dataset.draw));
      app.querySelectorAll('[data-tool]').forEach(b => b.onclick = () => {
        const [i, t] = b.dataset.tool.split(':'); st.tools[+i] = t;
        b.parentNode.querySelectorAll('[data-tool]').forEach(x => x.classList.toggle('on', x === b));
      });
      const redrawPart = i => { const el = app.querySelector(`svg[data-draw="${i}"] g.mine`); if (el) el.innerHTML = (st.draws[i] || []).map(strokeSVG).join(''); };
      app.querySelectorAll('[data-undo]').forEach(b => b.onclick = () => { const i = +b.dataset.undo; (st.draws[i] || []).pop(); redrawPart(i); });
      app.querySelectorAll('[data-clear]').forEach(b => b.onclick = () => { const i = +b.dataset.clear; st.draws[i] = []; redrawPart(i); });
      on('reveal', () => { st.revealed = true; recordSQ(id, st, true); save(); renderQuiz(); });
      app.querySelectorAll('[data-tick]').forEach(c => c.onchange = () => {
        const [i, j] = c.dataset.tick.split('.').map(Number);
        (st.ticks[i] || (st.ticks[i] = []))[j] = c.checked;
        recordSQ(id, st, false); save();
        const y = window.scrollY; renderQuiz(); window.scrollTo(0, y);
      });
    }
    on('flag', () => { s.flags[id] = !s.flags[id]; renderQuiz(); });
    on('submit', () => {
      const blank = s.qs.length - Object.keys(s.answers).length;
      if (confirm(blank ? T('You have {n} unanswered question(s). Hand in anyway?', { n: blank }) : T('Hand in your paper?'))) finish();
    });

    if (mock && !timerId) { timerId = setInterval(tick, 1000); tick(); }
  }

  function choose(i) {
    const s = session, id = s.qs[s.idx];
    if (isSQ(id)) return;
    if (s.mode === 'mock') { s.answers[id] = i; renderQuiz(); return; }
    if (s.answers[id] != null) return;
    s.answers[id] = i; record(id, i); save(); renderQuiz();
  }
  function move(d) {
    const s = session, n = s.idx + d;
    if (n < 0 || n >= s.qs.length) return;
    s.idx = n; renderQuiz(); window.scrollTo(0, 0);
  }

  function finish() {
    const s = session;
    if (!s || s.done) return;
    stopTimer();
    if (s.mode === 'mock') s.qs.forEach(id => record(id, s.answers[id] ?? null));
    else s.qs = s.qs.filter(id => isSQ(id) ? s.sq[id] && s.sq[id].revealed : s.answers[id] != null); // practice: summarise only what was attempted
    s.done = true;
    s.secs = (Date.now() - s.start) / 1000;
    s.mcIds = s.qs.filter(id => !isSQ(id));
    s.sqIds = s.qs.filter(isSQ);
    s.score = s.mcIds.filter(id => s.answers[id] === byId[id].answer).length;
    s.sqGot = s.sqIds.reduce((t, id) => t + sqGot(s.sq[id]), 0);
    s.sqMax = s.sqIds.reduce((t, id) => t + sqMax(sqById[id]), 0);
    S.history.push({ date: Date.now(), mode: s.mode, score: s.score, total: s.mcIds.length, sqGot: s.sqGot, sqMax: s.sqMax, secs: s.secs });
    if (S.history.length > 200) S.history = S.history.slice(-200);
    save();
    go('result');
  }

  /* ---------- result ---------- */
  function renderResult() {
    const s = session;
    const row = (label, ids) => {
      if (!ids.length) return '';
      const c = ids.filter(id => s.answers[id] === byId[id].answer).length;
      return `<tr><td>${label}</td><td>${c} / ${ids.length}</td><td style="width:40%"><div class="bar"><i style="width:${pct(c, ids.length)}%"></i></div></td></tr>`;
    };
    const mcIds = s.mcIds || s.qs, sqIds = s.sqIds || [];
    const rows = TOPICS.map(t => row(esc(tname(t)), mcIds.filter(id => byId[id].topic === t.id))).join('');
    const lrows = LEVELS.map(l => row(lbadge(l), mcIds.filter(id => byId[id].level === l.id))).join('');
    const sqFull = id => sqGot(s.sq[id]) === sqMax(sqById[id]);
    const wrongN = mcIds.length - s.score + sqIds.filter(id => !sqFull(id)).length;
    const sqRows = sqIds.map(id => { const g = sqGot(s.sq[id]), m = sqMax(sqById[id]);
      return `<tr><td>${esc(locSQ(sqById[id]).sub)} ${lbadge(level(sqById[id].level))}</td><td>${g} / ${m}</td><td style="width:40%"><div class="bar"><i style="width:${pct(g, m)}%"></i></div></td></tr>`; }).join('');
    const scoreLine = [mcIds.length ? T('Multiple choice: {a} / {n}', { a: s.score, n: mcIds.length }) : '',
      sqIds.length ? T('Structured: {a} / {b} marks', { a: s.sqGot, b: s.sqMax }) : ''].filter(Boolean).join(' · ');
    const mainScore = mcIds.length ? `${s.score} / ${mcIds.length}` : `${s.sqGot} / ${s.sqMax}`;
    const mainPct = mcIds.length ? pct(s.score, mcIds.length) : pct(s.sqGot, s.sqMax);
    app.innerHTML = `
      <h1>${T(s.mode === 'mock' ? 'Mock paper result' : 'Session summary')}</h1>
      <div class="card row">
        <div><div class="score">${mainScore}</div><div class="muted">${T('{p}% · time used {t}', { p: mainPct, t: fmtTime(s.secs) })}</div>${mcIds.length && sqIds.length ? `<div class="muted">${scoreLine}</div>` : ''}</div>
        <span class="spacer"></span>
        <div class="row">
          ${mcIds.length - s.score ? `<button class="btn" data-go="wrong">${T('Open wrong book ({n})', { n: activeWrong().length })}</button>` : ''}
          <button class="btn primary" data-go="${s.mode === 'mock' ? 'mock' : s.mode === 'redo' ? 'wrong' : 'practice'}">${T(s.mode === 'mock' ? 'New mock paper' : 'Practise again')}</button>
        </div>
      </div>
      ${mcIds.length ? `<div class="grid two"><div class="card"><h2>${T('By topic')}</h2><table>${rows}</table></div>
        <div class="card"><h2>${T('By level')}</h2><table>${lrows}</table></div></div>` : ''}
      ${sqIds.length ? `<div class="card"><h2>${T('Structured questions')}</h2><table>${sqRows}</table></div>` : ''}
      <div class="row" style="margin:8px 0 12px"><h2 style="margin:0">${T('Review')}</h2><span class="spacer"></span>
        <label class="row" style="gap:6px"><input type="checkbox" id="onlyWrong" ${wrongN ? 'checked' : ''}> ${T('Show wrong answers only')}</label></div>
      <div id="review"></div>`;
    const draw = () => {
      const only = document.getElementById('onlyWrong').checked;
      const html = s.qs.map((id, i) => {
        if (isSQ(id)) {
          if (only && sqFull(id)) return '';
          return `<div class="card">${sqHTML(sqById[id], { st: s.sq[id], readonly: true, num: i + 1 })}</div>`;
        }
        const q = byId[id], ok = s.answers[id] === q.answer;
        if (only && ok) return '';
        return `<div class="card">${questionHTML(q, { chosen: s.answers[id] ?? null, reveal: true, clickable: false, num: i + 1 })}</div>`;
      }).join('');
      document.getElementById('review').innerHTML = html || `<div class="card empty">${T('All correct — nothing to review.')}</div>`;
    };
    document.getElementById('onlyWrong').onchange = draw;
    draw();
  }

  /* ---------- wrong book ---------- */
  let wrongTab = 'active', wrongTopic = 'all', wrongLevel = 'all';
  function renderWrong() {
    const all = Object.keys(S.wrong).filter(id => byId[id]);
    const list = all
      .filter(id => (wrongTab === 'active') === !S.wrong[id].mastered)
      .filter(id => wrongTopic === 'all' || byId[id].topic === wrongTopic)
      .filter(id => wrongLevel === 'all' || byId[id].level === +wrongLevel)
      .sort((a, b) => S.wrong[b].count - S.wrong[a].count || (S.wrong[b].last || 0) - (S.wrong[a].last || 0));
    const nActive = all.filter(id => !S.wrong[id].mastered).length;
    const topicOpts = [`<option value="all">${T('All topics')}</option>`].concat(TOPICS.map(t =>
      `<option value="${t.id}" ${wrongTopic === t.id ? 'selected' : ''}>${esc(tname(t))}</option>`)).join('');
    const levelOpts = [`<option value="all">${T('All levels')}</option>`].concat(LEVELS.map(l =>
      `<option value="${l.id}" ${String(wrongLevel) === String(l.id) ? 'selected' : ''}>${esc(lname(l))}</option>`)).join('');

    const cards = list.map(id => {
      const q = byId[id], w = S.wrong[id];
      const chose = w.chosen == null ? T('left blank') : T('chose {c}', { c: LETTERS[w.chosen] });
      const plain = loc(q).stem.replace(/<[^>]+>/g, ' ');
      return `<div class="card wcard" data-id="${id}">
        <details><summary>
          <div class="row"><span class="tag">${esc(tname(topic(q.topic)))}</span><span class="muted" style="font-size:.85rem">${esc(loc(q).sub)}</span>${lbadge(level(q.level))}</div>
          <div class="preview" style="margin-top:6px">${esc(plain)}</div>
          <div class="wmeta"><span class="badge bad">${T('Wrong {n}×', { n: w.count })}</span><span class="badge warn">${T('Last: {x}', { x: chose })}</span>
            ${w.mastered ? `<span class="badge ok">${T('Mastered')}</span>` : `<span class="badge ok">${T('Streak {s}/{m}', { s: w.streak || 0, m: MASTER_STREAK })}</span>`}
            ${w.last ? `<span class="muted">${fmtDate(w.last)}</span>` : ''}
            <span class="spacer"></span><a class="muted" style="font-size:.85rem">${T('Show question &amp; solution ▾')}</a></div>
        </summary>
        <div style="margin-top:14px">${questionHTML(q, { chosen: w.chosen ?? null, reveal: true, clickable: false })}</div>
        </details>
        <div style="margin-top:12px"><label class="muted" style="font-size:.85rem">${T('My notes (why I got it wrong)')}</label>
          <textarea data-note placeholder="${T('e.g. forgot to convert °C to K')}"></textarea></div>
        <div class="row" style="margin-top:8px">
          <button class="btn small" data-redo>${T('Redo this question')}</button>
          <span class="spacer"></span>
          ${w.mastered ? `<button class="btn small" data-unmaster>${T('Move back to active')}</button>` : `<button class="btn small" data-master>${T('Mark as mastered')}</button>`}
          <button class="btn small danger" data-del>${T('Remove')}</button>
        </div></div>`;
    }).join('');

    app.innerHTML = `
      <h1>${T('Wrong question book')}${lang === 'zh' ? '' : ' <span class="zh">錯題簿</span>'}</h1>
      <p class="muted">${T('Every question you get wrong is collected here. Get it right {m} times in a row and it moves to Mastered.', { m: MASTER_STREAK })}</p>
      <div class="tabs"><button data-tab="active" class="${wrongTab === 'active' ? 'on' : ''}">${T('Active ({n})', { n: nActive })}</button>
        <button data-tab="mastered" class="${wrongTab === 'mastered' ? 'on' : ''}">${T('Mastered ({n})', { n: all.length - nActive })}</button></div>
      <div class="row" style="margin-bottom:16px"><select id="wt">${topicOpts}</select><select id="wl">${levelOpts}</select><span class="spacer"></span>
        ${wrongTab === 'active' ? `<button class="btn primary" id="redoAll" ${list.length ? '' : 'disabled'}>${list.length ? T('Redo these {n} questions', { n: list.length }) : T('Redo questions')}</button>` : ''}</div>
      ${cards || `<div class="card empty">${T(wrongTab === 'active' ? 'No wrong questions here. Keep practising!' : 'Nothing mastered yet.')}</div>`}`;

    app.querySelectorAll('[data-tab]').forEach(b => b.onclick = () => { wrongTab = b.dataset.tab; renderWrong(); });
    document.getElementById('wt').onchange = e => { wrongTopic = e.target.value; renderWrong(); };
    document.getElementById('wl').onchange = e => { wrongLevel = e.target.value; renderWrong(); };
    const ra = document.getElementById('redoAll');
    if (ra) ra.onclick = () => startSession('redo', shuffle(list));
    app.querySelectorAll('.wcard').forEach(card => {
      const id = card.dataset.id, w = S.wrong[id];
      const ta = card.querySelector('[data-note]');
      ta.value = w.note || '';
      ta.oninput = () => { w.note = ta.value; save(); };
      card.querySelector('[data-redo]').onclick = () => startSession('redo', [id]);
      const m = card.querySelector('[data-master]'); if (m) m.onclick = () => { w.mastered = true; save(); renderWrong(); };
      const u = card.querySelector('[data-unmaster]'); if (u) u.onclick = () => { w.mastered = false; w.streak = 0; save(); renderWrong(); };
      card.querySelector('[data-del]').onclick = () => {
        if (confirm(T('Remove this question from the wrong book? Your note will be lost.'))) { delete S.wrong[id]; save(); renderWrong(); }
      };
    });
  }

  /* ---------- data list ---------- */
  function renderData() {
    const rows = [
      ['acceleration due to gravity', 'g', '9.81 m s⁻² (close to the Earth)'],
      ['universal gravitational constant', 'G', '6.67 × 10⁻¹¹ N m² kg⁻²'],
      ['speed of light in vacuum', 'c', '3.00 × 10⁸ m s⁻¹'],
      ['charge of electron', 'e', '1.60 × 10⁻¹⁹ C'],
      ['electron rest mass', 'mₑ', '9.11 × 10⁻³¹ kg'],
      ['permittivity of free space', 'ε₀', '8.85 × 10⁻¹² C² N⁻¹ m⁻²'],
      ['permeability of free space', 'μ₀', '4π × 10⁻⁷ H m⁻¹'],
      ['atomic mass unit', 'u', '1.661 × 10⁻²⁷ kg (1 u ≡ 931 MeV)'],
      ['Avogadro constant', 'N_A', '6.02 × 10²³ mol⁻¹'],
      ['universal gas constant', 'R', '8.31 J mol⁻¹ K⁻¹'],
      ['Boltzmann constant', 'k', '1.38 × 10⁻²³ J K⁻¹'],
      ['Planck constant', 'h', '6.63 × 10⁻³⁴ J s'],
      ['Coulomb constant', '1/(4πε₀)', '8.99 × 10⁹ N m² C⁻²']
    ].map(r => `<tr><td>${T(r[0])}</td><td><i>${r[1]}</i></td><td>${T(r[2])}</td></tr>`).join('');
    const tips = [
      'For "(1) (2) (3)" questions, judge each statement separately, then eliminate options — one false statement removes every option containing it.',
      'Always convert to SI units (cm → m, °C → K in gas laws, kW h → J) before substituting.',
      'There is no negative marking: never leave a question blank.',
      'Spend about 1.5–2 minutes per question; flag hard ones and come back.'
    ].map(t => `<li>${T(t)}</li>`).join('');
    app.innerHTML = `
      <h1>${T('List of data')}</h1>
      <div class="card"><table><tr><th>${T('Quantity')}</th><th>${T('Symbol')}</th><th>${T('Value')}</th></tr>${rows}</table></div>
      <div class="card"><h2>${T('Section A tips')}</h2><ul>${tips}</ul></div>`;
  }

  /* ---------- global events ---------- */
  document.addEventListener('click', e => {
    const g = e.target.closest('[data-go]');
    if (g) { e.preventDefault(); if (g.dataset.type) practiceType = g.dataset.type; go(g.dataset.go); }
  });
  document.addEventListener('keydown', e => {
    if (document.querySelector('.qr-overlay')) { if (e.key === 'Escape') closeQR(); return; }
    if (location.hash !== '#/quiz' || !session || session.done) return;
    if (e.target.matches('input, textarea, select') || e.ctrlKey || e.metaKey || e.altKey) return;
    if (isSQ(session.qs[session.idx]) && !/^Arrow/.test(e.key)) return;
    const k = e.key.toLowerCase();
    const i = 'abcd'.indexOf(k);
    if (i >= 0 && k.length === 1) {
      const id = session.qs[session.idx];
      if (session.mode === 'mock' || session.answers[id] == null) choose(i);
    } else if (e.key === 'ArrowRight') move(1);
    else if (e.key === 'ArrowLeft') move(-1);
  });
  window.addEventListener('hashchange', route);

  // Text outside #app: page language, title, brand, nav, footer and the toggle button.
  function applyChrome() {
    document.documentElement.lang = lang === 'zh' ? 'zh-Hant-HK' : 'en';
    document.title = T('DSE Physics Review');
    document.querySelector('.brand').innerHTML = lang === 'zh' ? 'DSE 物理<span>溫習</span>' : 'DSE Physics <span>Review</span>';
    document.querySelectorAll('[data-t]').forEach(el => {
      if (!el.dataset.en) el.dataset.en = el.textContent.trim();
      el.textContent = T(el.dataset.en);
    });
    const b = document.getElementById('langBtn');
    b.textContent = lang === 'zh' ? 'English' : '中文';
    b.lang = lang === 'zh' ? 'en' : 'zh-Hant-HK';
    b.title = lang === 'zh' ? 'Switch to English' : '切換至繁體中文';
  }
  /* ---------- QR code for sharing the site in class ----------
   * The QR library (qrcode-generator 1.4.4, MIT) is loaded from cdnjs only when the panel is opened.
   */
  const QR_LIB = 'https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js';
  let qrLoading = null;
  const loadQR = () => window.qrcode ? Promise.resolve() : (qrLoading = qrLoading || new Promise((ok, fail) => {
    const s = document.createElement('script');
    s.src = QR_LIB; s.onload = ok; s.onerror = () => { qrLoading = null; fail(); };
    document.head.appendChild(s);
  }));
  // Black modules on a white background with a 4-module quiet zone, whatever the page theme.
  function qrSVG(text) {
    const q = window.qrcode(0, 'M'); q.addData(text); q.make();
    const n = q.getModuleCount(), m = 4; let d = '';
    for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (q.isDark(r, c)) d += `M${c + m} ${r + m}h1v1h-1z`;
    return `<svg viewBox="0 0 ${n + 2 * m} ${n + 2 * m}" shape-rendering="crispEdges" role="img" aria-label="${esc(T('QR code'))}"><rect width="100%" height="100%" fill="#fff"/><path d="${d}" fill="#000"/></svg>`;
  }
  function closeQR() { const o = document.querySelector('.qr-overlay'); if (o) o.remove(); document.getElementById('qrBtn').focus(); }
  function showQR() {
    if (document.querySelector('.qr-overlay')) return;
    const url = location.origin + location.pathname;
    const o = document.createElement('div');
    o.className = 'qr-overlay';
    o.innerHTML = `<div class="qr-card" role="dialog" aria-modal="true" aria-labelledby="qrTitle">
      <h2 id="qrTitle">${T('Scan to open this site')}</h2>
      <div class="qr-code">${T('Loading…')}</div>
      <p class="qr-url">${esc(url)}</p>
      <p class="muted qr-note">${T('No sign-up needed. Each student’s progress is saved on their own device.')}</p>
      <button class="btn primary" id="qrClose" type="button">${T('Close')}</button></div>`;
    o.onclick = e => { if (e.target === o) closeQR(); };
    document.body.appendChild(o);
    const btn = document.getElementById('qrClose');
    btn.onclick = closeQR; btn.focus();
    loadQR().then(() => { o.querySelector('.qr-code').innerHTML = qrSVG(url); })
      .catch(() => { o.querySelector('.qr-code').textContent = T('Could not load the QR code. Please type the address below.'); });
  }
  document.getElementById('qrBtn').onclick = showQR;

  document.getElementById('langBtn').onclick = () => {
    lang = lang === 'zh' ? 'en' : 'zh';
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }
    applyChrome();
    route();
  };

  applyChrome();
  updateBadge();
  route();
})();
