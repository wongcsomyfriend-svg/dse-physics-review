/*
 * Figures for the number-variant template families in bank/templates.js.
 * TFIG[family](p, b) receives one parameter set p (and the build result b) and returns an SVG string
 * drawn from that variant's own numbers. Loaded before templates.js; core.js template() picks it up.
 * Diagrams are schematic (not to scale) unless they are graphs.
 */
(function () {
  'use strict';
  const { r1, range, svg, line, arrow, text, dot, circ, box } = window.draw;
  const F = x => fmt(x, 3);
  const RAD = Math.PI / 180;
  const FORMULA = { o2: 'O₂', n2: 'N₂', he: 'He', co2: 'CO₂', h2: 'H₂', ar: 'Ar', air: 'air', ne: 'Ne' };
  const sm = { size: 12 }, sms = { size: 12, anchor: 'start' }, sme = { size: 12, anchor: 'end' };

  // A two-headed dimension line with its label.
  const dim = (x1, y1, x2, y2, label, lx, ly, o) => {
    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
    return arrow(mx, my, x1, y1, 1) + arrow(mx, my, x2, y2, 1) + text(lx == null ? mx : lx, ly == null ? my - 6 : ly, label, o || sm);
  };
  // Simple seeded random numbers, so the same variant always gets the same picture.
  const rnd = seed => { let s = seed % 2147483647 || 1; return () => (s = s * 16807 % 2147483647) / 2147483647; };
  const shade = (x, y, w, h) => `<rect x="${r1(x)}" y="${r1(y)}" width="${r1(w)}" height="${r1(h)}" fill="currentColor" fill-opacity="0.1"/>`;
  // Circuit pieces: a cell across a gap on a horizontal wire, and resistor boxes.
  const cellH = (x, y) => line(`M${x - 5} ${y - 12} V${y + 12}`, 2) + line(`M${x + 5} ${y - 6} V${y + 6}`, 4);
  const resH = (x1, x2, y) => box(x1, y - 7, x2 - x1, 14);
  const molecules = (seed, n) => {
    const R = rnd(seed * 7919 + 13); let s = ''; for (let i = 0; i < 8; i++) R();
    for (let i = 0; i < n; i++) {
      const x = 112 + R() * 156, y = 42 + R() * 106, a = R() * 2 * Math.PI;
      s += dot(x, y, 3) + arrow(x, y, x + 16 * Math.cos(a), y + 16 * Math.sin(a), 1);
    }
    return s;
  };
  const car = (x, y) => box(x, y - 32, 90, 22) + line(`M${x + 15} ${y - 32} L${x + 28} ${y - 48} H${x + 62} L${x + 75} ${y - 32}`) + circ(x + 20, y - 8, 8) + circ(x + 70, y - 8, 8);
  // Transformer coil wound on a core limb: more lines for the coil with more turns.
  const coil = (x, many) => line((many ? range(64, 116, 13) : range(66, 114, 6)).map(y => `M${x} ${r1(y)} L${x + 46} ${r1(y + 4)}`).join(' '), 1.5);
  const decay = (A0, T, xmax) => ({ f: t => A0 * Math.pow(2, -t / T), from: 0, to: xmax / 1.1, n: 60 });
  const multiples = (T, xmax) => range(1, Math.floor(xmax / T), Math.floor(xmax / T) - 1).filter(v => v * T <= xmax).map(k => [k * T, String(+(k * T).toPrecision(4))]);

  window.TFIG = {
    /* ---------- Heat and Gases ---------- */
    TH01: p => svgGraph({
      aria: `Temperature against time: rises steadily from 20 to ${20 + p.dT} degrees in ${p.t} minutes`,
      x: { max: p.t * 1.3, label: 't / min', ticks: [[p.t, String(p.t)]] }, y: { max: (20 + p.dT) * 1.25, label: 'θ / °C', ticks: [[20, '20'], [20 + p.dT, String(20 + p.dT)]] },
      lines: [{ pts: [[0, 20], [p.t, 20 + p.dT]] }], guides: [[p.t, 0, p.t, 20 + p.dT], [0, 20 + p.dT, p.t, 20 + p.dT]]
    }),
    TH02: p => svg(380, 180, 'A hot block is dropped into a beaker of water',
      box(150, 18, 40, 30) + arrow(170, 52, 170, 84) + line('M110 70 V165 H290 V70') + line('M110 96 H290', 1.2) + shade(110, 96, 180, 69) +
      text(140, 30, `${p.m1} kg`, { anchor: 'end' }) + text(140, 48, `${p.T1} °C`, { anchor: 'end' }) + text(200, 128, `${p.m2} kg`) + text(200, 150, `${p.T2} °C`)),
    TH03: p => svg(380, 190, 'Ice at 0 degrees in a beaker becomes water at a higher temperature',
      line('M40 60 V160 H150 V60') + [[55, 120], [85, 128], [115, 118], [70, 96], [100, 100]].map(([x, y]) => box(x, y, 22, 22, 1.5)).join('') +
      arrow(170, 110, 220, 110) + line('M240 60 V160 H350 V60') + line('M240 92 H350', 1.2) + shade(240, 92, 110, 68) +
      text(95, 182, `${p.m} kg, 0 °C`) + text(295, 182, `${p.th} °C`)),
    TH04: p => svg(380, 190, 'An electric kettle with steam coming from the spout',
      line('M130 70 H250 L262 160 H118 Z') + line('M150 70 Q190 45 230 70') + line('M250 95 L295 70 L300 76 L258 110') + line('M126 85 Q92 105 121 140') +
      line('M262 150 H340', 1.5) + [0, 14, 28].map(d => line(`M${292 + d} 62 q-8 -10 0 -20 t0 -20`, 1.3)).join('') +
      text(190, 115, `${p.P} W`) + text(190, 140, `η = ${p.eta} %`)),
    TH05: p => {
      const row = (y, V, lab) => {
        const L = 230 * V / p.V1;
        return box(60, y - 20, 240, 40) + shade(60, y - 20, L, 40) + line(`M${r1(60 + L)} ${y - 20} V${y + 20}`, 5) + line(`M${r1(60 + L)} ${y} H345 M345 ${y - 14} V${y + 14}`, 3) +
          box(48, y - 6, 12, 12, 1.5) + text(60 + L / 2, y + 5, `${V} cm³`, sm) + text(180, y + 38, lab, sm);
      };
      return svg(380, 190, 'A sealed syringe of gas before and after it is compressed', row(50, p.V1, `${F(p.p1 * 1e5)} Pa`) + row(135, p.V2, 'p = ?'));
    },
    TH06: p => svg(380, 180, 'A sealed rigid container of gas with a pressure gauge and a thermometer',
      `<rect x="110" y="50" width="160" height="110" rx="10" fill="none" stroke="currentColor" stroke-width="3"/>` + circ(190, 28, 16) + line('M190 44 V50 M190 28 L201 19', 2) +
      line('M245 70 V140', 2) + dot(245, 145, 5) + text(178, 100, `${F(p.p1 * 1e5)} Pa`, sm) + text(178, 128, `${p.T1} °C → ${p.T2} °C`, sm)),
    TH07: p => {
      const cyl = (x, V, labs) => {
        const H = 120 * V / Math.max(p.V1, p.V2);
        return line(`M${x} ${r1(160 - H - 20)} V160 H${x + 70} V${r1(160 - H - 20)}`) + shade(x, 160 - H, 70, H) + line(`M${x} ${r1(160 - H)} H${x + 70}`, 5) +
          line(`M${x + 35} ${r1(160 - H)} V${r1(160 - H - 22)}`, 3) + labs.map((t, i) => text(x + 80, 110 + i * 20, t, { size: 11, anchor: 'start' })).join('');
      };
      return svg(400, 175, 'A gas in a cylinder with a piston, before and after a change',
        cyl(30, p.V1, [`${F(p.p1 * 1e5)} Pa`, `${p.V1} L`, `${p.T1} °C`]) + cyl(220, p.V2, [`${F(p.p2 * 1e5)} Pa`, `${p.V2} L`, 'T = ?']));
    },
    TH08: q => svg(380, 185, 'A gas cylinder with its volume, pressure and temperature',
      line('M150 60 Q150 40 170 36 H210 Q230 40 230 60 V170 H150 Z') + box(180, 20, 20, 16, 1.5) + line('M190 20 V12 H206', 1.5) +
      text(250, 70, FORMULA[q.gas], { anchor: 'start', bold: true }) + text(250, 98, `${q.V} m³`, sms) + text(250, 124, `${F(q.p * 1e5)} Pa`, sms) + text(250, 150, `${q.T} °C`, sms)),
    TH09: q => svg(380, 175, 'Gas molecules moving randomly in a box', box(100, 30, 180, 130) + molecules(q.M * 31 + q.T + 300, 16) +
      text(296, 70, FORMULA[q.gas], { anchor: 'start', bold: true }) + text(296, 96, `${q.T} °C`, sms)),
    TH10: q => svg(380, 175, 'Gas molecules moving randomly in a box', box(100, 30, 180, 130) + molecules(q.n * 97 + q.T + 300, 16) +
      text(296, 70, `${q.n} mol`, sms) + text(296, 96, `${q.T} °C`, sms)),

    /* ---------- Force and Motion ---------- */
    TM01: q => {
      const vm = Math.max(q.u, q.v);
      return svgGraph({
        aria: `Velocity against time: a straight line from ${q.u} to ${q.v} metres per second in ${q.t} seconds`,
        x: { max: q.t * 1.3, label: 't / s', ticks: [[q.t, String(q.t)]] }, y: { max: vm * 1.3, label: 'v / m s⁻¹', ticks: [q.u, q.v].filter(v => v > 0).map(v => [v, String(v)]) },
        lines: [{ pts: [[0, q.u], [q.t, q.v]] }], guides: [[q.t, 0, q.t, q.v], [0, q.v, q.t, q.v]].filter(g => q.v > 0)
      });
    },
    TM02: q => svg(380, 160, 'A car moving to the right while braking',
      line('M20 140 H360', 1.5) + car(60, 140) + arrow(170, 70, 250, 70) + text(210, 60, `${q.u} m s⁻¹`, sm) + arrow(250, 105, 170, 105) + text(210, 125, `${q.a} m s⁻²`, sm)),
    TM03: q => svg(380, 185, 'A stone dropped from rest from the top of a building',
      box(40, 40, 90, 130) + line('M20 170 H360', 1.5) + dot(160, 40, 6) + line('M160 50 V165', 1.2, true) + dim(210, 40, 210, 170, `${q.h} m`, 220, 110, sms)),
    TM04: q => svg(380, 185, 'A person standing on a scale in an accelerating lift',
      box(140, 20, 110, 150) + line('M195 0 V20', 1.5) + box(165, 150, 60, 12, 1.5) + circ(195, 72, 10) + line('M195 82 V120 M195 120 L183 150 M195 120 L207 150 M195 92 L178 110 M195 92 L212 110') +
      (q.d > 0 ? arrow(290, 120, 290, 60) : arrow(290, 60, 290, 120)) + text(300, 95, `${q.a} m s⁻²`, sms) + text(130, 95, `${q.m} kg`, { anchor: 'end' })),
    TM05: q => {
      const t = q.th * RAD, B = Math.min(300, 130 / Math.tan(t)), H = B * Math.tan(t);
      const P = [40 + 0.5 * B, 170 - 0.5 * H], u = [Math.cos(t), -Math.sin(t)], n = [-Math.sin(t), -Math.cos(t)];
      const at = (s, k) => [P[0] + u[0] * s + n[0] * k, P[1] + u[1] * s + n[1] * k];
      const a1 = at(30, 8), a2 = at(82, 8), lab = at(92, 18), ml = at(0, 15);
      return svg(380, 185, `A block on a rough slope inclined at ${q.th} degrees`,
        line(`M40 170 H${r1(40 + B)} V${r1(170 - H)} Z`) + `<g transform="rotate(${-q.th} ${r1(P[0])} ${r1(P[1])})">${box(P[0] - 25, P[1] - 30, 50, 30)}</g>` +
        arrow(a1[0], a1[1], a2[0], a2[1], 1.8) + text(lab[0], lab[1], `${q.f} N`, sm) + text(ml[0], ml[1] + 4, `${q.m} kg`, { size: 11 }) +
        line(`M80 170 A40 40 0 0 0 ${r1(40 + 40 * Math.cos(t))} ${r1(170 - 40 * Math.sin(t))}`, 1.2) +
        text(40 + 56 * Math.cos(t / 2), 174 - 56 * Math.sin(t / 2), `${q.th}°`, sms));
    },
    TM06: q => svg(380, 190, 'A ball thrown horizontally from the top of a cliff',
      box(60, 60, 70, 110) + line('M20 170 H360', 1.5) + dot(130, 52, 6) + arrow(136, 52, 196, 52) + text(166, 42, `${q.u} m s⁻¹`, sm) +
      line('M' + range(130, 330, 30).map(x => r1(x) + ' ' + r1(52 + 118 * ((x - 130) / 200) ** 2)).join(' L'), 1.4, true) + dim(45, 52, 45, 170, `${q.h} m`, 40, 115, sme)),
    TM07: q => svg(380, 160, 'A moving trolley about to hit a stationary trolley',
      line('M20 145 H360', 1.5) + box(40, 90, 100, 40) + circ(62, 137, 7) + circ(118, 137, 7) + box(220, 90, 80, 40) + circ(238, 137, 7) + circ(282, 137, 7) +
      text(90, 115, `${q.m1} kg`, sm) + text(260, 115, `${q.m2} kg`, sm) + arrow(60, 70, 130, 70) + text(95, 60, `${q.u} m s⁻¹`, sm)),
    TM08: q => svg(380, 190, 'A motor raising a load through a height',
      box(150, 18, 80, 30) + text(190, 38, 'M', { bold: true }) + line('M190 48 V140', 1.5) + box(165, 140, 50, 35) + `<rect x="165" y="70" width="50" height="35" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>` +
      line('M100 175 H300', 1.5) + text(190, 162, `${q.m} kg`, { size: 11 }) + dim(250, 105, 250, 175, `${q.h} m`, 258, 144, sms) + text(110, 120, `${q.t} s`, sm) + arrow(130, 150, 130, 90, 1.5)),
    TM09: q => {
      const fx = 190 + 70 * Math.cos(-30 * RAD), fy = 95 + 70 * Math.sin(-30 * RAD);
      return svg(380, 190, 'Top view of an object moving in a horizontal circle',
        line('M260 95 A70 70 0 1 0 260 95.01', 1.5, true) + dot(190, 95, 3) + line(`M190 95 L${r1(fx)} ${r1(fy)}`, 1.5) + dot(fx, fy, 7) +
        arrow(fx, fy, fx - 22, fy - 39, 1.8) + text(226, 98, `${q.r} m`, sm) + text(fx + 12, fy + 4, `${q.m} kg`, sms) + text(190, 184, `T = ${q.T} s`, sm));
    },
    TM10: q => svg(380, 190, 'The Earth with a point at a height above its surface (not to scale)',
      circ(120, 100, 60) + text(120, 95, 'Earth', sm) + line('M120 100 H180', 1.2, true) + text(150, 118, '6370 km', { size: 11 }) +
      dot(290, 100, 5) + dim(180, 100, 290, 100, `${q.h} km`, null, 90)),

    /* ---------- Wave Motion ---------- */
    TW01: q => {
      const xs = range(50, 340, q.n - 1);
      return svg(380, 190, `Top view of straight water waves: ${q.n} crests across a distance`,
        line('M28 30 V150', 5) + text(28, 22, `${q.f} Hz`, sm) + line(xs.map(x => `M${r1(x)} 40 V140`).join(' '), 1.6) +
        text(50, 34, '1', sm) + text(340, 34, String(q.n), sm) + dim(50, 160, 340, 160, `${q.d} m`, null, 180));
    },
    TW02: q => {
      const i = q.i * RAD, r = Math.asin(Math.sin(i) / q.n);
      return svg(380, 180, `A ray of light passing from air into a medium at an angle of incidence of ${q.i} degrees`,
        shade(40, 95, 300, 75) + line('M40 95 H340', 1.5) + line('M190 18 V172', 1, true) +
        arrow(190 - 85 * Math.sin(i), 95 - 85 * Math.cos(i), 190 - 40 * Math.sin(i), 95 - 40 * Math.cos(i)) + line(`M${r1(190 - 85 * Math.sin(i))} ${r1(95 - 85 * Math.cos(i))} L190 95 L${r1(190 + 75 * Math.sin(r))} ${r1(95 + 75 * Math.cos(r))}`) +
        text(190 - 30 * Math.sin(i / 2) - 4, 95 - 30 * Math.cos(i / 2) + 2, `${q.i}°`, { size: 12, anchor: 'end' }) + text(198 + 30 * Math.sin(r / 2), 104 + 30 * Math.cos(r / 2), 'r', sms) +
        text(70, 80, 'air', sm) + text(300, 150, `n = ${q.n}`, sm));
    },
    TW03: q => {
      const C = Math.asin(1 / q.n), sx = 190 - 135 * Math.sin(C), sy = 60 + 135 * Math.cos(C);
      return svg(380, 175, 'A ray inside a semicircular block meets the flat face at the critical angle and travels along the face',
        line('M90 60 H290 A100 100 0 0 1 90 60 Z') + line('M190 15 V165', 1, true) + line(`M${r1(sx)} ${r1(sy)} L190 60`, 2.2) + arrow(190, 60, 320, 60, 2) +
        text(180, 112, 'C', { size: 13, anchor: 'end' }) + text(250, 120, `n = ${q.n}`, sm) + text(250, 40, 'air', sm));
    },
    TW04: q => {
      const lp = 40 / q.n;
      const air = range(20, 190, 68).map(x => [x, 95 - 15 * Math.sin(2 * Math.PI * (x - 20) / 40)]);
      const gl = range(190, 340, 75).map(x => [x, 95 - 15 * Math.sin(2 * Math.PI * (170 / 40 + (x - 190) / lp))]);
      return svg(380, 175, 'Light waves in air entering a glass block, where the wavelength is shorter',
        shade(190, 40, 150, 110) + box(190, 40, 150, 110, 1.5) + line('M' + air.concat(gl).map(([x, y]) => r1(x) + ' ' + r1(y)).join(' L'), 1.8) +
        dim(70, 66, 110, 66, `${q.l} nm`, null, 58) + text(100, 140, 'air', sm) + text(265, 140, `n = ${q.n}`, sm));
    },
    TW05: q => {
      const k = 150 / Math.max(q.u, q.f * 1.1), ox = 200 - q.u * k;
      return svg(380, 175, 'An object in front of a convex lens, with the principal foci marked',
        line('M15 100 H370', 1.2) + line('M200 30 Q215 100 200 170 Q185 100 200 30 Z', 1.8) + arrow(ox, 100, ox, 62) +
        [200 - q.f * k, 200 + q.f * k].map(x => line(`M${r1(x)} 95 V105`, 1.5) + text(x, 90, 'F', sm)).join('') +
        dim(ox, 135, 200, 135, `${q.u} cm`, null, 128) + text(300, 30, `f = ${q.f} cm`, sm));
    },
    TW06: q => svg(380, 180, 'Young double-slit set-up with the slit separation and slit-to-screen distance marked',
      arrow(20, 95, 95, 95, 1.8) + text(55, 85, `${q.l} nm`, sm) + line('M110 30 V88 M110 92 V98 M110 102 V160', 3) + line('M330 30 V160', 3) +
      text(102, 122, `${q.a} mm`, sme) + dim(112, 172, 328, 172, `${q.D} m`, null, 166)),
    TW07: q => {
      const s = k => k * q.l * q.N * 1e-6, ks = [0, 1, 2, 3].filter(k => s(k) < 0.98);
      const ray = (k, sg) => { const a = Math.asin(s(k)) * sg; return line(`M120 95 L${r1(120 + 200 * Math.cos(a))} ${r1(95 - 200 * Math.sin(a))}`, k ? 1.4 : 1.8) + text(120 + 214 * Math.cos(a), 99 - 214 * Math.sin(a), String(k), sm); };
      const an = Math.asin(s(q.n));
      return svg(380, 190, 'Light passing through a diffraction grating and spreading into several orders',
        line('M120 20 V170', 3) + line(range(24, 166, 18).map(y => `M114 ${r1(y)} H126`).join(' '), 1) + arrow(20, 95, 110, 95, 1.8) + text(60, 85, `${q.l} nm`, sm) +
        ks.map(k => ray(k, 1) + (k ? ray(k, -1) : '')).join('') + line(`M180 95 A60 60 0 0 0 ${r1(120 + 60 * Math.cos(an))} ${r1(95 - 60 * Math.sin(an))}`, 1.2) +
        text(190, 80, 'θ', sms) + text(120, 186, `${q.N} mm⁻¹`, sm));
    },
    TW08: q => {
      const env = sg => 'M' + range(40, 340, 120).map(x => r1(x) + ' ' + r1(90 - sg * 28 * Math.sin(q.n * Math.PI * (x - 40) / 300))).join(' L');
      return svg(380, 175, `A stationary wave with ${q.n} loops on a string fixed at both ends`,
        line('M40 50 V130 M340 50 V130', 4) + line(env(1), 2) + line(env(-1), 1.5, true) + dim(40, 150, 340, 150, `${q.L} m`, null, 168) + text(40, 40, `${q.f} Hz`, sm));
    },
    TW10: q => svg(380, 170, 'A sound pulse travels to a reflecting surface and its echo returns',
      box(30, 75, 34, 40) + line('M64 85 L80 72 V118 L64 105', 1.5) + line('M330 30 V150', 4) + line(range(40, 140, 5).map(y => `M330 ${r1(y)} l10 -10`).join(' '), 1) +
      arrow(85, 82, 322, 82, 1.5) + arrow(322, 108, 85, 108, 1.5) + text(200, 72, `${q.v} m s⁻¹`, sm) + dim(64, 140, 328, 140, '?', null, 160)),

    /* ---------- Electricity and Magnetism ---------- */
    TE01: q => svg(380, 170, 'A current flowing in a wire',
      line('M60 70 H320 M60 110 H320') + `<ellipse cx="60" cy="90" rx="7" ry="20" fill="none" stroke="currentColor" stroke-width="2"/><ellipse cx="320" cy="90" rx="7" ry="20" fill="none" stroke="currentColor" stroke-width="1.5"/>` +
      [100, 150, 200, 250, 290].map((x, i) => dot(x, 82 + (i % 2) * 16, 3)).join('') + arrow(120, 140, 260, 140) + text(190, 160, `${q.I} A`, sm) + text(190, 50, `${q.t} s`, sm)),
    TE02: q => svg(380, 200, 'A resistor in series with two resistors in parallel, connected to a supply',
      line('M50 30 H183 M197 30 H330 V150 H300 M200 150 H140 M80 150 H50 V30 M200 130 V170 M300 130 V170 M200 130 H225 M275 130 H300 M200 170 H225 M275 170 H300') + cellH(190, 30) +
      resH(80, 140, 150) + resH(225, 275, 130) + resH(225, 275, 170) + dot(200, 150, 3) + dot(300, 150, 3) +
      text(190, 16, `${q.V} V`, sm) + text(110, 136, `${q.R1} Ω`, sm) + text(250, 116, `${q.R2} Ω`, sm) + text(250, 194, `${q.R3} Ω`, sm)),
    TE03: q => svg(380, 160, 'A cylindrical wire with its length and diameter marked',
      line('M40 80 H290 M40 100 H290') + `<ellipse cx="40" cy="90" rx="4" ry="10" fill="none" stroke="currentColor" stroke-width="2"/><ellipse cx="290" cy="90" rx="4" ry="10" fill="none" stroke="currentColor" stroke-width="1.5"/>` +
      dim(40, 125, 290, 125, `${q.L} m`, null, 145) + arrow(306, 90, 306, 79, 1) + arrow(306, 90, 306, 101, 1) + text(314, 95, `${q.d} mm`, sms) + text(190, 62, `${F(q.rho)} Ω m`, sm)),
    TE04: q => svg(380, 190, 'A battery with internal resistance connected to a resistor, with a voltmeter across the battery terminals',
      `<rect x="125" y="42" width="130" height="36" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>` +
      line('M60 60 H155 M165 60 H200 M240 60 H320 V150 H220 M160 150 H60 V60 M110 60 V22 H178 M202 22 H280 V60') + cellH(160, 60) + resH(200, 240, 60) + resH(160, 220, 150) +
      circ(190, 22, 12) + text(190, 27, 'V', { size: 13 }) + text(160, 96, `${q.E} V`, sm) + text(220, 96, `${q.r} Ω`, sm) + text(190, 174, `${q.Rl} Ω`, sm)),
    TE06: q => svg(380, 160, 'Two positive point charges a distance apart',
      dot(100, 80, 10) + dot(280, 80, 10) + text(100, 55, `+${q.q1} μC`, sm) + text(280, 55, `+${q.q2} μC`, sm) + dim(100, 115, 280, 115, `${q.r} cm`, null, 135)),
    TE07: q => svg(380, 185, 'Two parallel plates connected to a supply, with an electron between them',
      line('M100 40 H300 M100 150 H300', 4) + line('M100 40 H50 V83 M50 97 V150 H100', 1.5) + line('M38 83 H62', 2) + line('M44 97 H56', 4) +
      text(66, 94, `${q.V} V`, sms) + dot(200, 95, 4) + text(200, 85, 'e⁻', sm) + dim(320, 42, 320, 148, `${q.d} cm`, 328, 99, sms)),
    TE08: q => svg(380, 190, 'A long straight wire carrying current out of the page, with circular field lines and a point P',
      circ(140, 95, 10) + dot(140, 95, 3) + [35, 60, 85].map(r => circ(140, 95, r, 1.2)).join('') +
      [35, 60, 85].map(r => arrow(140 + r, 97, 140 + r, 91, 1.2)).join('') + dot(280, 95, 4) + text(288, 90, 'P', { anchor: 'start', bold: true }) +
      line('M140 160 H280 M140 106 V166 M280 100 V166', 1, true) + text(215, 178, `${q.r} cm`, sm) + text(140, 125, `${q.I} A`, sm)),
    TE09: q => svg(380, 185, 'An ideal transformer connected to an a.c. supply, with a resistor across the secondary coil',
      line('M120 30 H260 V150 H120 Z M150 60 H230 V120 H150 Z', 2) +
      coil(112, q.Np >= q.Ns) + coil(222, q.Ns > q.Np) +
      line('M112 66 H40 V80 M40 104 V119 H112 M268 64 H340 V75 M340 109 V119 H268', 1.5) + circ(40, 92, 12, 1.5) + text(40, 97, '~', { size: 16 }) +
      box(333, 75, 14, 34, 1.5) + text(135, 170, String(q.Np), sm) + text(245, 170, String(q.Ns), sm) + text(30, 140, `${q.Vp} V`, sm) + text(345, 135, `${q.Rl} Ω`, sm)),
    TE10: q => svg(380, 180, 'A power station sends power through transmission cables to a town',
      box(20, 70, 60, 50) + box(55, 40, 12, 30, 1.5) + line('M80 85 H170 M220 85 H300 M80 105 H300', 1.5) + resH(170, 220, 85) +
      line('M300 120 V95 L318 80 L336 95 V120 Z M336 120 V100 L352 87 L368 100 V120 Z', 1.5) +
      text(50, 140, `${q.P} kW`, sm) + text(50, 158, `${q.V} kV`, sm) + text(195, 70, `${q.Rc} Ω`, sm)),

    /* ---------- Radioactivity and Nuclear Energy ---------- */
    TN01: q => {
      const xm = Math.max(q.t, 3 * q.T) * 1.15;
      return svgGraph({
        aria: `Decay curve of activity against time, starting at ${q.A} Bq and halving every ${q.T} time units`,
        x: { max: xm, label: 't', ticks: multiples(q.T, xm) }, y: { max: q.A * 1.2, label: 'A / Bq', ticks: [[q.A, String(q.A)], [q.A / 2, String(q.A / 2)]] },
        lines: [decay(q.A, q.T, xm)], guides: [[0, q.A / 2, q.T, q.A / 2], [q.T, 0, q.T, q.A / 2]]
      });
    },
    TN02: q => svgGraph({
      aria: `Corrected count rate against time, falling from ${q.C1} to ${q.C2} per minute`,
      x: { max: q.t * 1.25, label: 't', ticks: [[q.t, String(q.t)]] }, y: { max: q.C1 * 1.2, label: 'R / min⁻¹', ticks: [[q.C1, String(q.C1)], [q.C2, String(q.C2)]] },
      lines: [{ f: x => q.C1 * Math.pow(q.C2 / q.C1, x / q.t), from: 0, to: q.t * 1.1, n: 60 }], dots: [[0, q.C1], [q.t, q.C2]], guides: [[0, q.C2, q.t, q.C2], [q.t, 0, q.t, q.C2]]
    }),
    TN03: q => {
      const xm = Math.max(q.t, 3 * q.T) * 1.15;
      return svgGraph({
        aria: `Percentage of nuclei remaining against time, halving every ${q.T} time units`,
        x: { max: xm, label: 't', ticks: multiples(q.T, xm) }, y: { max: 115, label: '%', ticks: [[100, '100'], [50, '50'], [25, '25']] },
        lines: [decay(100, q.T, xm)]
      });
    },
    TN05: q => svg(380, 170, 'A radioactive source in front of a GM tube connected to a counter',
      box(30, 70, 30, 40) + dot(60, 90, 4) + line('M100 78 H230 M100 102 H230 M100 78 V102', 2) + `<ellipse cx="230" cy="90" rx="5" ry="12" fill="none" stroke="currentColor" stroke-width="2"/>` +
      line('M235 90 H270', 1.5) + box(270, 60, 90, 60) + box(282, 72, 66, 26, 1.2) + text(315, 91, String(q.R0), { size: 15, bold: true }) + text(315, 113, 'min⁻¹', { size: 11 })),
    TN09: q => {
      const n = Math.ceil(Math.log2(q.k)), xm = (n + 1) * q.T * 1.05;
      return svgGraph({
        aria: `Activity as a fraction of its initial value against time, halving every ${q.T} time units, with a dashed line at 1/${q.k}`,
        x: { max: xm, label: 't', ticks: multiples(q.T, xm).filter((_, i, a) => a.length < 8 || i % 2 === 1) }, y: { max: 1.15, label: 'A / A₀', ticks: [[1, '1'], [1 / q.k, `1/${q.k}`]] },
        lines: [decay(1, q.T, xm)], guides: [[0, 1 / q.k, xm / 1.05, 1 / q.k]]
      });
    },
    TN10: q => {
      const age = 5730 * Math.log2(100 / q.f), xm = Math.max(20000, age * 1.2);
      return svgGraph({
        aria: `Carbon-14 activity as a percentage of that in living wood against age, with a dashed line at ${q.f} percent`,
        x: { max: xm, label: 'age', ticks: [[5730, '5730'], [11460, '11460']] }, y: { max: 115, label: '%', ticks: [[100, '100'], [q.f, String(q.f)]].concat(Math.abs(q.f - 50) > 15 ? [[50, '50']] : []) },
        lines: [decay(100, 5730, xm)], guides: [[0, q.f, xm / 1.1, q.f]]
      });
    }
  };
})();
