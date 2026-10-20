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
