/*
 * Question bank helpers, loaded after questions.js and questions.zh.js.
 *
 * addBank(list)  adds hand-written questions. Each object uses the fields documented in
 *                questions.js, plus `zh: { sub, stem, statements?, options?, explain }`
 *                holding the Traditional Chinese text (options only when they contain words).
 *
 * template(spec) adds a family of number-variant questions. The answer, the wrong options
 *                (worked out from common mistakes) and the worked solution are all computed,
 *                in English and Chinese, from each parameter set. Variants share a `family`
 *                so the app can avoid serving two of them close together.
 */
(function () {
  'use strict';
  const QZ = window.QUESTIONS_ZH = window.QUESTIONS_ZH || {};

  window.addBank = function (list) {
    list.forEach(q => {
      if (q.zh) { QZ[q.id] = q.zh; delete q.zh; }
      window.QUESTIONS.push(q);
    });
  };

  /*
   * Structured (Paper 1 Section B style) questions live in their own list.
   *   { id, topic, level, sub, stem, figure?, parts: [part, ...], zh: { sub, stem, parts: [{ q, answer, points }] } }
   *   part = { q, marks, answer, points: [one marking point per mark], num?: { v, unit, tol } }
   * `num` lets the app check a numerical final answer typed by the student (relative tolerance tol, default 2 %).
   */
  window.STRUCTURED = window.STRUCTURED || [];
  const SZ = window.STRUCTURED_ZH = window.STRUCTURED_ZH || {};
  window.addStructured = function (list) {
    list.forEach(q => {
      if (q.zh) { SZ[q.id] = q.zh; delete q.zh; }
      window.STRUCTURED.push(q);
    });
  };

  /*
   * Draw a graph as an inline SVG string, using currentColor so it suits light and dark themes.
   *   x, y:    { min = 0, max, label, ticks: [[value, 'text'], ...] }
   *   lines:   [{ pts: [[x, y], ...] } or { f: x => y, from, to, n }, plus dash: true / w: width]
   *   guides:  [[x1, y1, x2, y2], ...]  thin dashed construction lines
   *   dots:    [[x, y, 'label', dx, dy], ...]
   *   text:    [[x, y, 'text', 'start' | 'middle' | 'end'], ...]
   */
  window.svgGraph = function (o) {
    const w = o.w || 400, h = o.h || 220;
    const L = 52, Rr = w - 56, Tp = 22, B = h - 30;
    const xs = Object.assign({ min: 0 }, o.x), ys = Object.assign({ min: 0 }, o.y);
    const X = x => L + (x - xs.min) / (xs.max - xs.min) * (Rr - L);
    const Y = y => B - (y - ys.min) / (ys.max - ys.min) * (B - Tp);
    const r = n => Math.round(n * 10) / 10;
    const ax = ys.min < 0 ? Y(0) : B;
    const path = pts => 'M' + pts.map(([x, y]) => r(X(x)) + ' ' + r(Y(y))).join(' L');
    let s = `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${o.aria || 'graph'}"><g fill="none" stroke="currentColor" stroke-width="2">`;
    s += `<path d="M${L} ${B} V${Tp - 6} M${L} ${r(ax)} H${Rr + 6}"/>`;
    (o.lines || []).forEach(l => {
      let pts = l.pts;
      if (l.f) { pts = []; const n = l.n || 40; for (let i = 0; i <= n; i++) { const x = l.from + (l.to - l.from) * i / n; pts.push([x, l.f(x)]); } }
      s += `<path d="${path(pts)}" stroke-width="${l.w || 2.5}"${l.dash ? ' stroke-dasharray="6 4"' : ''}/>`;
    });
    s += '</g>';
    if (o.guides) s += `<g fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"><path d="${o.guides.map(([a, b, c, d]) => `M${r(X(a))} ${r(Y(b))} L${r(X(c))} ${r(Y(d))}`).join(' ')}"/></g>`;
    s += '<g fill="currentColor">' + (o.dots || []).map(([x, y]) => `<circle cx="${r(X(x))}" cy="${r(Y(y))}" r="3.5"/>`).join('') + '</g>';
    s += '<g fill="currentColor" font-size="13" font-family="inherit" text-anchor="middle">';
    (xs.ticks || []).forEach(([v, t]) => { s += `<text x="${r(X(v))}" y="${r(ax + 16)}">${t}</text>`; });
    (ys.ticks || []).forEach(([v, t]) => { s += `<text x="${L - 7}" y="${r(Y(v) + 4)}" text-anchor="end">${t}</text>`; });
    if (ys.label) s += `<text x="${L + 8}" y="${Tp - 8}" text-anchor="start">${ys.label}</text>`;
    if (xs.label) s += `<text x="${Rr + 9}" y="${r(ax + 4)}" text-anchor="start">${xs.label}</text>`;
    (o.dots || []).forEach(([x, y, t, dx, dy]) => { if (t) s += `<text x="${r(X(x) + (dx || 0))}" y="${r(Y(y) + (dy == null ? -9 : dy))}">${t}</text>`; });
    (o.text || []).forEach(([x, y, t, a]) => { s += `<text x="${r(X(x))}" y="${r(Y(y))}"${a ? ` text-anchor="${a}"` : ''}>${t}</text>`; });
    return s + '</g></svg>';
  };

  /*
   * Four small sketch graphs labelled A–D, for "which graph shows…" questions.
   *   panels: [{ f: x => y } or { pts: [[x, y], ...] }, ...] with x and y running from 0 to 1
   *           (y from −1 to 1 when o.mid is true, so the x-axis is drawn across the middle)
   *   o: { x: 'x-axis label', y: 'y-axis label', mid: false, aria }
   */
  window.svgPanels = function (panels, o) {
    const r = n => Math.round(n * 10) / 10;
    let s = `<svg viewBox="0 0 420 140" role="img" aria-label="${o.aria || 'four sketch graphs labelled A to D'}"><g fill="none" stroke="currentColor" stroke-width="1.6">`;
    const txt = [];
    panels.forEach((p, i) => {
      const x0 = 22 + i * 102, y0 = o.mid ? 62 : 104, w = 74, h = o.mid ? 40 : 80;
      const X = x => x0 + x * w, Y = y => y0 - y * h;
      s += `<path d="M${x0} ${o.mid ? 18 : 18} V${o.mid ? 106 : y0} M${x0} ${y0} H${x0 + w + 6}"/>`;
      let pts = p.pts;
      if (p.f) { pts = []; for (let k = 0; k <= 30; k++) { const x = k / 30; pts.push([x, p.f(x)]); } }
      s += `<path d="M${pts.map(([x, y]) => r(X(x)) + ' ' + r(Y(y))).join(' L')}" stroke-width="2.2"${p.dash ? ' stroke-dasharray="5 3"' : ''}/>`;
      txt.push(`<text x="${x0 + 38}" y="130" font-weight="700">${'ABCD'[i]}</text>`);
      if (o.y) txt.push(`<text x="${x0 + 4}" y="14" text-anchor="start" font-size="11">${o.y}</text>`);
      if (o.x) txt.push(`<text x="${x0 + w + 8}" y="${y0 + 4}" text-anchor="start" font-size="11">${o.x}</text>`);
    });
    return s + `</g><g fill="currentColor" font-size="13" font-family="inherit" text-anchor="middle">${txt.join('')}</g></svg>`;
  };

  /* ---------- number formatting ---------- */
  const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
  const sup = n => String(n).split('').map(c => SUP[c]).join('');
  // Format to `sf` significant figures, switching to "a × 10ⁿ" for very large or small values.
  function fmt(x, sf) {
    sf = sf || 3;
    if (x === 0) return '0';
    const r = Number(x.toPrecision(sf));
    const e = Math.floor(Math.log10(Math.abs(r)));
    if (e >= 5 || e < -3) return (r / Math.pow(10, e)).toPrecision(sf) + ' × 10' + sup(e);
    if (e >= sf - 1) return String(Math.round(r));
    return r.toPrecision(sf);
  }
  window.fmt = fmt;

  /*
   * Choose three wrong values so the correct one lands at position `target` (0–3) once the
   * four options are sorted ascending. Mistake-based values in `wrong` are preferred; plain
   * multiples of the answer fill any gap. Returns { values, answer }.
   */
  function pickOptions(correct, wrong, target, f) {
    const key = f(correct);
    const seen = new Set([key]);
    const cand = [];
    const add = v => { if (!isFinite(v) || v <= 0) return; const k = f(v); if (!seen.has(k)) { seen.add(k); cand.push({ v, k }); } };
    wrong.forEach(add);
    [2, 0.5, 4, 0.25, 1.5, 0.75, 3, 1 / 3, 10, 0.1, 1.25, 0.8].forEach(m => add(correct * m));
    const below = cand.filter(c => c.v < correct), above = cand.filter(c => c.v > correct);
    let nb = Math.min(target, below.length);
    let na = 3 - nb;
    if (na > above.length) { na = above.length; nb = 3 - na; }
    const chosen = below.slice(0, nb).concat(above.slice(0, na));
    const all = chosen.concat([{ v: correct, k: key, ok: true }]).sort((a, b) => a.v - b.v);
    return { values: all.map(c => c.k), answer: all.findIndex(c => c.ok) };
  }

  /*
   * spec = {
   *   family: 'TH01', topic: 'heat', level: 3, sub: ['English', '中文'],
   *   sf: 3,              significant figures for the options (optional)
   *   unit: ' J',         appended to every option (optional)
   *   params: [ {...}, ... ],
   *   build: p => ({ answer, wrong: [numbers], stem: [en, zh], explain: [en, zh], unit?: ' J' })
   * }
   */
  window.template = function (spec) {
    spec.params.forEach((p, i) => {
      const b = spec.build(p);
      const f = v => b.int || spec.int ? String(Math.round(v)) : fmt(v, b.sf || spec.sf);
      const unit = b.unit != null ? b.unit : (spec.unit || '');
      const prefix = b.prefix || spec.prefix || '';
      // Rotate the answer position through A–D, offset per family so families don't all start at A.
      const offset = spec.family.split('').reduce((s, ch) => s + ch.charCodeAt(0), 0);
      const pick = pickOptions(b.answer, b.wrong, (i + offset) % 4, f);
      const id = spec.family + '-' + String(i + 1).padStart(2, '0');
      const options = pick.values.map(v => prefix + v + unit);
      window.QUESTIONS.push({
        id, topic: spec.topic, level: b.level || spec.level, family: spec.family,
        sub: spec.sub[0], stem: b.stem[0], options, answer: pick.answer, explain: b.explain[0]
      });
      QZ[id] = { sub: spec.sub[1], stem: b.stem[1], explain: b.explain[1] };
      if (b.unitZh) QZ[id].options = pick.values.map(v => prefix + v + b.unitZh);
      if (window.__CAPTURE_PARAMS) window.__CAPTURE_PARAMS[id] = { family: spec.family, p, answer: b.answer };
    });
  };
})();
