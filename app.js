(function () {
  'use strict';

  const Q = window.QUESTIONS;
  const TOPICS = window.TOPICS;
  const byId = Object.fromEntries(Q.map(q => [q.id, q]));
  const LETTERS = ['A', 'B', 'C', 'D'];
  const KEY = 'dsephys.v1';
  const MOCK_MINUTES = 60;   // suggested time for Section A within the 2 h 30 min Paper 1
  const MASTER_STREAK = 2;   // correct in a row needed to clear a wrong-book item

  const app = document.getElementById('app');
  let S = load();
  let session = null;
  let timerId = null;

  /* ---------- storage ---------- */
  function blank() { return { progress: {}, wrong: {}, history: [] }; }
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
  const pct = (a, b) => b ? Math.round(100 * a / b) : 0;
  function shuffle(a) {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  const activeWrong = () => Object.keys(S.wrong).filter(id => byId[id] && !S.wrong[id].mastered);
  function fmtTime(sec) {
    sec = Math.max(0, Math.round(sec));
    return String(Math.floor(sec / 60)).padStart(2, '0') + ':' + String(sec % 60).padStart(2, '0');
  }
  const fmtDate = t => new Date(t).toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

  function updateBadge() {
    const n = activeWrong().length, b = document.getElementById('wrongCount');
    b.hidden = !n; b.textContent = n;
  }

  /* ---------- question rendering ---------- */
  function questionHTML(q, o) {
    // o: { chosen, reveal, clickable, num, total }
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
      const head = o.chosen == null ? `Not answered — the answer is ${LETTERS[q.answer]}`
        : ok ? `Correct — ${LETTERS[q.answer]}` : `Incorrect — you chose ${LETTERS[o.chosen]}, the answer is ${LETTERS[q.answer]}`;
      exp = `<div class="explain ${ok ? '' : 'bad'}"><h3>${head}</h3>${q.explain}</div>`;
    }
    const t = topic(q.topic);
    const num = o.num != null ? `<span class="qnum">${o.num}.</span>` : '';
    const of = o.total ? `<span>of ${o.total}</span>` : '';
    return `<div class="qhead">${num}${of}<span class="tag">${esc(t.name)}</span><span>${esc(q.sub)}</span></div>
      <div class="stem">${q.stem}</div>${stmts}${fig}<div class="opts">${opts}</div>${exp}`;
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
    const resume = session && !session.done
      ? `<div class="card row"><div><b>Unfinished ${session.mode === 'mock' ? 'mock paper' : 'practice'}</b><div class="muted">Question ${session.idx + 1} of ${session.qs.length}</div></div><span class="spacer"></span><button class="btn primary" data-go="quiz">Resume</button></div>` : '';

    const topicRows = TOPICS.map(t => {
      const qs = Q.filter(q => q.topic === t.id);
      let ta = 0, tc = 0, seen = 0;
      qs.forEach(q => { const p = S.progress[q.id]; if (p) { seen++; ta += p.a; tc += p.c; } });
      const acc = ta ? pct(tc, ta) + '%' : '—';
      return `<div class="topicrow"><div>${esc(t.name)}<span class="zh">${t.zh}</span><div class="muted" style="font-size:.85rem">${seen}/${qs.length} questions tried</div></div>
        <div style="text-align:right"><b>${acc}</b><div class="muted" style="font-size:.8rem">accuracy</div></div>
        <div class="bar"><i style="width:${ta ? pct(tc, ta) : 0}%"></i></div></div>`;
    }).join('');

    const hist = mocks.slice(-5).reverse().map(h =>
      `<tr><td>${fmtDate(h.date)}</td><td>${h.score} / ${h.total}</td><td>${pct(h.score, h.total)}%</td><td>${fmtTime(h.secs)}</td></tr>`).join('');

    app.innerHTML = `
      <h1>HKDSE Physics Revision</h1>
      <p class="muted">Paper 1 Section A style multiple-choice practice for the compulsory part. ${Q.length} questions in the bank.</p>
      ${resume}
      <div class="grid stats" style="margin-bottom:16px">
        <div class="stat"><b>${ids.length}<small class="muted" style="font-size:.9rem">/${Q.length}</small></b><span>questions tried</span></div>
        <div class="stat"><b>${a ? pct(c, a) + '%' : '—'}</b><span>overall accuracy</span></div>
        <div class="stat"><b>${activeWrong().length}</b><span>in wrong book</span></div>
        <div class="stat"><b>${best}</b><span>best mock score</span></div>
      </div>
      <div class="card row">
        <button class="btn primary" data-go="practice">Start practice</button>
        <button class="btn" data-go="mock">Take a mock paper</button>
        <button class="btn" data-go="wrong">Review wrong book</button>
      </div>
      <div class="card"><h2>By topic</h2>${topicRows}</div>
      ${hist ? `<div class="card"><h2>Recent mock papers</h2><table><tr><th>Date</th><th>Score</th><th>%</th><th>Time used</th></tr>${hist}</table></div>` : ''}
      <div class="card"><h2>Your data</h2>
        <p class="muted">Progress is stored in this browser. Export it to move to another device.</p>
        <div class="row"><button class="btn" id="exp">Export progress</button>
        <label class="btn">Import progress<input type="file" id="imp" accept="application/json" hidden></label>
        <span class="spacer"></span><button class="btn danger" id="reset">Reset all progress</button></div>
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
      }).catch(() => alert('That file is not a valid progress export.'));
    };
    document.getElementById('reset').onclick = () => {
      if (confirm('Delete all progress, mock history and the wrong book on this browser?')) { S = blank(); session = null; save(); renderHome(); }
    };
  }

  /* ---------- practice setup ---------- */
  function renderPractice() {
    const chips = TOPICS.map(t =>
      `<label class="chip on"><input type="checkbox" value="${t.id}" checked>${esc(t.name)}<span class="zh">${t.zh}</span></label>`).join('');
    app.innerHTML = `
      <h1>Topic practice</h1>
      <p class="muted">Answer one question at a time and see the worked solution immediately. Wrong answers go into your wrong book automatically.</p>
      <div class="card">
        <h2>Topics</h2><div class="chips" id="chips">${chips}</div>
        <div class="row" style="margin-top:18px">
          <label>Number of questions
            <select id="n"><option>5</option><option selected>10</option><option>20</option><option value="999">All</option></select></label>
          <label class="row" style="gap:6px"><input type="checkbox" id="unseen" checked> Unseen questions first</label>
        </div>
        <div class="row" style="margin-top:18px"><button class="btn primary" id="start">Start</button><span id="msg" class="muted"></span></div>
      </div>`;
    const chipsEl = document.getElementById('chips');
    chipsEl.addEventListener('change', e => e.target.closest('.chip').classList.toggle('on', e.target.checked));
    document.getElementById('start').onclick = () => {
      const sel = [...chipsEl.querySelectorAll('input:checked')].map(i => i.value);
      if (!sel.length) { document.getElementById('msg').textContent = 'Pick at least one topic.'; return; }
      let pool = shuffle(Q.filter(q => sel.includes(q.topic)).map(q => q.id));
      if (document.getElementById('unseen').checked) {
        pool.sort((a, b) => (S.progress[a] ? 1 : 0) - (S.progress[b] ? 1 : 0));
      }
      startSession('practice', pool.slice(0, +document.getElementById('n').value));
    };
  }

  /* ---------- mock setup ---------- */
  function renderMock() {
    const total = TOPICS.reduce((s, t) => s + t.mock, 0);
    const rows = TOPICS.map(t => `<tr><td>${esc(t.name)}<span class="zh">${t.zh}</span></td><td>${t.mock}</td></tr>`).join('');
    app.innerHTML = `
      <h1>Mock paper — Paper 1 Section A</h1>
      <div class="card">
        <p>${total} multiple-choice questions drawn across the compulsory part, arranged in syllabus order like the real paper. Each question has one correct answer out of A–D; there is no penalty for wrong answers, so answer every question.</p>
        <p class="muted">Timer: ${MOCK_MINUTES} minutes (a typical share of the 2 h 30 min Paper 1 for Section A). Answers and solutions are shown only after you hand in.</p>
        <table><tr><th>Topic</th><th>Questions</th></tr>${rows}</table>
        <div class="row" style="margin-top:18px"><button class="btn primary" id="start">Start mock paper</button></div>
      </div>`;
    document.getElementById('start').onclick = () => {
      const ids = [];
      TOPICS.forEach(t => ids.push(...shuffle(Q.filter(q => q.topic === t.id).map(q => q.id)).slice(0, t.mock)));
      startSession('mock', ids);
    };
  }

  /* ---------- quiz session ---------- */
  function startSession(mode, ids) {
    session = { mode, qs: ids, idx: 0, answers: {}, flags: {}, start: Date.now(), done: false };
    if (mode === 'mock') session.deadline = Date.now() + MOCK_MINUTES * 60000;
    go('quiz');
  }

  function stopTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }
  function tick() {
    const el = document.getElementById('timer');
    const left = (session.deadline - Date.now()) / 1000;
    if (left <= 0) { stopTimer(); alert('Time is up. Your paper has been handed in.'); finish(); return; }
    if (el) { el.textContent = fmtTime(left); el.classList.toggle('low', left < 300); }
  }

  function renderQuiz() {
    const s = session;
    if (s.done) { go('result'); return; }
    const mock = s.mode === 'mock';
    const id = s.qs[s.idx], q = byId[id], chosen = s.answers[id];
    const reveal = !mock && chosen != null;
    const answered = Object.keys(s.answers).length;
    const last = s.idx === s.qs.length - 1;

    const title = mock ? 'Mock paper' : s.mode === 'redo' ? 'Wrong book redo' : 'Practice';
    const bubbles = s.qs.map((qid, i) => {
      let cls = '';
      if (mock) cls = s.answers[qid] != null ? 'ans' : '';
      else if (s.answers[qid] != null) cls = s.answers[qid] === byId[qid].answer ? 'right' : 'wrong';
      if (s.flags[qid]) cls += ' flag';
      if (i === s.idx) cls += ' cur';
      const lbl = mock && s.answers[qid] != null ? `${i + 1}${LETTERS[s.answers[qid]]}` : i + 1;
      return `<button class="${cls}" data-jump="${i}">${lbl}</button>`;
    }).join('');

    app.innerHTML = `
      <div class="row" style="margin-bottom:12px"><h1 style="margin:0">${title}</h1><span class="spacer"></span>
        <span class="muted">${answered} / ${s.qs.length} answered</span></div>
      <div class="qwrap">
        <div class="card">
          ${questionHTML(q, { chosen, reveal, clickable: mock || chosen == null, num: s.idx + 1, total: s.qs.length })}
          <div class="row qnav">
            <button class="btn" id="prev" ${s.idx === 0 ? 'disabled' : ''}>← Previous</button>
            ${mock ? `<button class="btn small" id="flag">${s.flags[id] ? 'Unflag' : 'Flag for review'}</button>` : ''}
            <span class="spacer"></span>
            ${last ? (mock ? '' : `<button class="btn primary" id="end" ${chosen == null ? 'disabled' : ''}>See summary</button>`)
                   : `<button class="btn ${mock || reveal ? 'primary' : ''}" id="next">Next →</button>`}
          </div>
        </div>
        <aside class="card sheet">
          ${mock ? `<div class="muted" style="font-size:.85rem">Time left</div><div class="timer" id="timer">${fmtTime((s.deadline - Date.now()) / 1000)}</div>` : '<b>Questions</b>'}
          <div class="bubbles">${bubbles}</div>
          <div class="legend">${mock ? 'Blue = answered · orange line = flagged' : 'Green = correct · red = wrong'}<br>Keys: A–D to answer, ← → to move</div>
          ${mock ? '<button class="btn primary" id="submit" style="width:100%;justify-content:center;margin-top:12px">Hand in paper</button>'
                 : '<button class="btn small" id="quit" style="margin-top:12px">End session</button>'}
        </aside>
      </div>`;

    app.querySelectorAll('[data-opt]').forEach(b => b.onclick = () => choose(+b.dataset.opt));
    app.querySelectorAll('[data-jump]').forEach(b => b.onclick = () => { s.idx = +b.dataset.jump; renderQuiz(); });
    const on = (sel, fn) => { const el = document.getElementById(sel); if (el) el.onclick = fn; };
    on('prev', () => move(-1));
    on('next', () => move(1));
    on('end', finish);
    on('quit', () => { if (Object.keys(s.answers).length) finish(); else { session = null; go('home'); } });
    on('flag', () => { s.flags[id] = !s.flags[id]; renderQuiz(); });
    on('submit', () => {
      const blank = s.qs.length - Object.keys(s.answers).length;
      if (confirm(blank ? `You have ${blank} unanswered question(s). Hand in anyway?` : 'Hand in your paper?')) finish();
    });

    if (mock && !timerId) { timerId = setInterval(tick, 1000); tick(); }
  }

  function choose(i) {
    const s = session, id = s.qs[s.idx];
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
    else s.qs = s.qs.filter(id => s.answers[id] != null); // practice: summarise only what was attempted
    s.done = true;
    s.secs = (Date.now() - s.start) / 1000;
    s.score = s.qs.filter(id => s.answers[id] === byId[id].answer).length;
    S.history.push({ date: Date.now(), mode: s.mode, score: s.score, total: s.qs.length, secs: s.secs });
    if (S.history.length > 200) S.history = S.history.slice(-200);
    save();
    go('result');
  }

  /* ---------- result ---------- */
  function renderResult() {
    const s = session;
    const rows = TOPICS.map(t => {
      const ids = s.qs.filter(id => byId[id].topic === t.id);
      if (!ids.length) return '';
      const c = ids.filter(id => s.answers[id] === byId[id].answer).length;
      return `<tr><td>${esc(t.name)}</td><td>${c} / ${ids.length}</td><td style="width:40%"><div class="bar"><i style="width:${pct(c, ids.length)}%"></i></div></td></tr>`;
    }).join('');
    const wrongN = s.qs.length - s.score;
    app.innerHTML = `
      <h1>${s.mode === 'mock' ? 'Mock paper result' : 'Session summary'}</h1>
      <div class="card row">
        <div><div class="score">${s.score} / ${s.qs.length}</div><div class="muted">${pct(s.score, s.qs.length)}% · time used ${fmtTime(s.secs)}</div></div>
        <span class="spacer"></span>
        <div class="row">
          ${wrongN ? `<button class="btn" data-go="wrong">Open wrong book (${activeWrong().length})</button>` : ''}
          <button class="btn primary" data-go="${s.mode === 'mock' ? 'mock' : s.mode === 'redo' ? 'wrong' : 'practice'}">${s.mode === 'mock' ? 'New mock paper' : 'Practise again'}</button>
        </div>
      </div>
      ${s.qs.length ? `<div class="card"><h2>By topic</h2><table>${rows}</table></div>` : ''}
      <div class="row" style="margin:8px 0 12px"><h2 style="margin:0">Review</h2><span class="spacer"></span>
        <label class="row" style="gap:6px"><input type="checkbox" id="onlyWrong" ${wrongN ? 'checked' : ''}> Show wrong answers only</label></div>
      <div id="review"></div>`;
    const draw = () => {
      const only = document.getElementById('onlyWrong').checked;
      const html = s.qs.map((id, i) => {
        const q = byId[id], ok = s.answers[id] === q.answer;
        if (only && ok) return '';
        return `<div class="card">${questionHTML(q, { chosen: s.answers[id] ?? null, reveal: true, clickable: false, num: i + 1 })}</div>`;
      }).join('');
      document.getElementById('review').innerHTML = html || '<div class="card empty">All correct — nothing to review.</div>';
    };
    document.getElementById('onlyWrong').onchange = draw;
    draw();
  }

  /* ---------- wrong book ---------- */
  let wrongTab = 'active', wrongTopic = 'all';
  function renderWrong() {
    const all = Object.keys(S.wrong).filter(id => byId[id]);
    const list = all
      .filter(id => (wrongTab === 'active') === !S.wrong[id].mastered)
      .filter(id => wrongTopic === 'all' || byId[id].topic === wrongTopic)
      .sort((a, b) => S.wrong[b].count - S.wrong[a].count || (S.wrong[b].last || 0) - (S.wrong[a].last || 0));
    const nActive = all.filter(id => !S.wrong[id].mastered).length;
    const topicOpts = ['<option value="all">All topics</option>'].concat(TOPICS.map(t =>
      `<option value="${t.id}" ${wrongTopic === t.id ? 'selected' : ''}>${esc(t.name)}</option>`)).join('');

    const cards = list.map(id => {
      const q = byId[id], w = S.wrong[id];
      const chose = w.chosen == null ? 'left blank' : `chose ${LETTERS[w.chosen]}`;
      const plain = q.stem.replace(/<[^>]+>/g, ' ');
      return `<div class="card wcard" data-id="${id}">
        <details><summary>
          <div class="row"><span class="tag">${esc(topic(q.topic).name)}</span><span class="muted" style="font-size:.85rem">${esc(q.sub)}</span></div>
          <div class="preview" style="margin-top:6px">${esc(plain)}</div>
          <div class="wmeta"><span class="badge bad">Wrong ${w.count}×</span><span class="badge warn">Last: ${chose}</span>
            ${w.mastered ? '<span class="badge ok">Mastered</span>' : `<span class="badge ok">Streak ${w.streak || 0}/${MASTER_STREAK}</span>`}
            ${w.last ? `<span class="muted">${fmtDate(w.last)}</span>` : ''}
            <span class="spacer"></span><a class="muted" style="font-size:.85rem">Show question &amp; solution ▾</a></div>
        </summary>
        <div style="margin-top:14px">${questionHTML(q, { chosen: w.chosen ?? null, reveal: true, clickable: false })}</div>
        </details>
        <div style="margin-top:12px"><label class="muted" style="font-size:.85rem">My notes (why I got it wrong)</label>
          <textarea data-note placeholder="e.g. forgot to convert °C to K"></textarea></div>
        <div class="row" style="margin-top:8px">
          <button class="btn small" data-redo>Redo this question</button>
          <span class="spacer"></span>
          ${w.mastered ? '<button class="btn small" data-unmaster>Move back to active</button>' : '<button class="btn small" data-master>Mark as mastered</button>'}
          <button class="btn small danger" data-del>Remove</button>
        </div></div>`;
    }).join('');

    app.innerHTML = `
      <h1>Wrong question book <span class="zh">錯題簿</span></h1>
      <p class="muted">Every question you get wrong is collected here. Get it right ${MASTER_STREAK} times in a row and it moves to Mastered.</p>
      <div class="tabs"><button data-tab="active" class="${wrongTab === 'active' ? 'on' : ''}">Active (${nActive})</button>
        <button data-tab="mastered" class="${wrongTab === 'mastered' ? 'on' : ''}">Mastered (${all.length - nActive})</button></div>
      <div class="row" style="margin-bottom:16px"><select id="wt">${topicOpts}</select><span class="spacer"></span>
        ${wrongTab === 'active' ? `<button class="btn primary" id="redoAll" ${list.length ? '' : 'disabled'}>Redo ${list.length ? 'these ' + list.length : ''} questions</button>` : ''}</div>
      ${cards || `<div class="card empty">${wrongTab === 'active' ? 'No wrong questions here. Keep practising!' : 'Nothing mastered yet.'}</div>`}`;

    app.querySelectorAll('[data-tab]').forEach(b => b.onclick = () => { wrongTab = b.dataset.tab; renderWrong(); });
    document.getElementById('wt').onchange = e => { wrongTopic = e.target.value; renderWrong(); };
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
        if (confirm('Remove this question from the wrong book? Your note will be lost.')) { delete S.wrong[id]; save(); renderWrong(); }
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
    ].map(r => `<tr><td>${r[0]}</td><td><i>${r[1]}</i></td><td>${r[2]}</td></tr>`).join('');
    const tips = [
      'For "(1) (2) (3)" questions, judge each statement separately, then eliminate options — one false statement removes every option containing it.',
      'Always convert to SI units (cm → m, °C → K in gas laws, kW h → J) before substituting.',
      'There is no negative marking: never leave a question blank.',
      'Spend about 1.5–2 minutes per question; flag hard ones and come back.'
    ].map(t => `<li>${t}</li>`).join('');
    app.innerHTML = `
      <h1>List of data</h1>
      <div class="card"><table><tr><th>Quantity</th><th>Symbol</th><th>Value</th></tr>${rows}</table></div>
      <div class="card"><h2>Section A tips</h2><ul>${tips}</ul></div>`;
  }

  /* ---------- global events ---------- */
  document.addEventListener('click', e => {
    const g = e.target.closest('[data-go]');
    if (g) { e.preventDefault(); go(g.dataset.go); }
  });
  document.addEventListener('keydown', e => {
    if (location.hash !== '#/quiz' || !session || session.done) return;
    if (e.target.matches('input, textarea, select') || e.ctrlKey || e.metaKey || e.altKey) return;
    const k = e.key.toLowerCase();
    const i = 'abcd'.indexOf(k);
    if (i >= 0 && k.length === 1) {
      const id = session.qs[session.idx];
      if (session.mode === 'mock' || session.answers[id] == null) choose(i);
    } else if (e.key === 'ArrowRight') move(1);
    else if (e.key === 'ArrowLeft') move(-1);
  });
  window.addEventListener('hashchange', route);

  updateBadge();
  route();
})();
