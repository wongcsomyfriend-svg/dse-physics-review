/*
 * Figures for hand-written questions that describe an experiment or a situation.
 * HFIG[id] is an SVG string; at the end each figure is attached to its question by id.
 * Loaded after every hand-written bank file. Diagrams are schematic (not to scale) unless they are graphs.
 * Any English word drawn in a figure must also be listed in I18N.figure.zh (i18n.js).
 */
(function () {
  'use strict';
  const { r1, range, svg, line, arrow, text, dot, circ, box } = window.draw;
  const L = (x, y, t, o) => text(x, y, t, Object.assign({ size: 12 }, o));
  const LS = (x, y, t) => L(x, y, t, { anchor: 'start' });
  const LE = (x, y, t) => L(x, y, t, { anchor: 'end' });
  const shade = (x, y, w, h, op) => `<rect x="${r1(x)}" y="${r1(y)}" width="${r1(w)}" height="${r1(h)}" fill="currentColor" fill-opacity="${op || 0.1}"/>`;
  const dash = (d, w) => line(d, w || 1.2, true);
  const dim = (x1, y1, x2, y2, t, lx, ly, o) => {
    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
    return arrow(mx, my, x1, y1, 1) + arrow(mx, my, x2, y2, 1) + L(lx == null ? mx : lx, ly == null ? my - 6 : ly, t, o);
  };
  // Apparatus
  const beaker = (x, y, w, h, lvl) => line(`M${x} ${y} V${y + h} H${x + w} V${y}`) + (lvl != null ? line(`M${x} ${y + lvl} H${x + w}`, 1.2) + shade(x, y + lvl, w, h - lvl) : '');
  const thermo = (x, y1, y2) => line(`M${x} ${y1} V${y2}`, 2.5) + dot(x, y2 + 4, 5);
  const heater = (x, y1, y2) => line(`M${x} ${y1} V${y2 - 22}`, 3) + line(`M${x} ${y2 - 22} l-7 4 l14 4 l-14 4 l14 4 l-7 4`, 1.6);
  const flame = (x, y) => line(`M${x} ${y} q-11 -12 0 -28 q11 16 0 28 Z`, 1.5);
  const sun = (x, y) => circ(x, y, 13) + line(range(0, 7, 7).map(k => { const a = k * Math.PI / 4; return `M${r1(x + 18 * Math.cos(a))} ${r1(y + 18 * Math.sin(a))} L${r1(x + 26 * Math.cos(a))} ${r1(y + 26 * Math.sin(a))}`; }).join(' '), 1.5);
  const ice = pts => pts.map(([x, y]) => box(x, y, 18, 18, 1.4)).join('');
  // A vertical cylinder of gas closed by a piston; gas height H above the base y.
  const cylinder = (x, y, w, H, top) => line(`M${x} ${y - (top || H + 22)} V${y} H${x + w} V${y - (top || H + 22)}`) + shade(x, y - H, w, H) + line(`M${x} ${y - H} H${x + w}`, 5) + line(`M${x + w / 2} ${y - H} V${y - H - 24}`, 3);
  const bottle = (x, y) => line(`M${x} ${y - 110} Q${x} ${y - 130} ${x + 20} ${y - 134} H${x + 60} Q${x + 80} ${y - 130} ${x + 80} ${y - 110} V${y} H${x} Z`) + box(x + 30, y - 150, 20, 16, 1.5);
  const gauge = (x, y) => circ(x, y, 15) + line(`M${x} ${y} L${x + 9} ${y - 8}`, 2);
  const roundFlask = (x, y, r) => line(`M${x - 7} ${y - r - 30} V${y - r + 2} A${r} ${r} 0 1 0 ${x + 7} ${y - r + 2} V${y - r - 30}`);
  const block = (x, y, w, h) => box(x, y, w, h, 2) + shade(x, y, w, h, 0.06);
  const molecules = (x, y, w, h, n, seed) => {
    let s = seed; const R = () => (s = s * 16807 % 2147483647) / 2147483647; let out = '';
    for (let i = 0; i < 6; i++) R();
    for (let i = 0; i < n; i++) out += dot(x + 8 + R() * (w - 16), y + 8 + R() * (h - 16), 3);
    return out;
  };
  const cart = (x, y, w, h) => box(x, y - h - 12, w, h) + circ(x + 14, y - 6, 6) + circ(x + w - 14, y - 6, 6);
  const RAD = Math.PI / 180;
  // A slope rising to the right at th degrees with a block on it. at(s, k) gives a point s along the
  // slope (up is positive) and k out from its surface, measured from the middle of the block's base.
  const slope = (th, o) => {
    o = o || {};
    const t = th * RAD, B = Math.min(300, 125 / Math.tan(t)), H = B * Math.tan(t);
    const P = [40 + 0.55 * B, 170 - 0.55 * H], u = [Math.cos(t), -Math.sin(t)], n = [-Math.sin(t), -Math.cos(t)];
    const at = (s, k) => [P[0] + u[0] * s + n[0] * k, P[1] + u[1] * s + n[1] * k];
    const lab = at(0, 16);
    let s = line(`M40 170 H${r1(40 + B)} V${r1(170 - H)} Z`) + `<g transform="rotate(${-th} ${r1(P[0])} ${r1(P[1])})">${box(P[0] - 26, P[1] - 30, 52, 30)}</g>` +
      line(`M85 170 A45 45 0 0 0 ${r1(40 + 45 * Math.cos(t))} ${r1(170 - 45 * Math.sin(t))}`, 1.2) + LS(40 + 60 * Math.cos(t / 2), 175 - 60 * Math.sin(t / 2), o.angle || `${th}°`);
    if (o.mass) s += L(lab[0], lab[1] + 4, o.mass, { size: 11 });
    const along = (s1, s2, k, t2, kl) => { const a = at(s1, k), b = at(s2, k), c = at(s2 + Math.sign(s2 - s1) * 12, kl == null ? k + 10 : kl); return arrow(a[0], a[1], b[0], b[1], 1.8) + L(c[0], c[1] + 4, t2); };
    if (o.up) s += along(32, 85, 8, o.up);
    if (o.down) s += along(-32, -85, 8, o.down);
    if (o.upLow) s += along(32, 85, -10, o.upLow, -22);
    if (o.downLow) s += along(-32, -85, -10, o.downLow, -22);
    return s;
  };
  // A projectile path from (x0, y0) launched at th degrees, drawn to land on y = yg.
  const projectile = (x0, y0, th, yg, scale) => {
    const t = th * RAD, ux = Math.cos(t), uy = Math.sin(t), k = scale || 1;
    const pts = []; for (let i = 0; i <= 60; i++) { const T = i / 60 * 4; const x = x0 + k * 60 * ux * T, y = y0 - k * (60 * uy * T - 15 * T * T); if (y > yg) { pts.push([x, yg]); break; } pts.push([x, y]); }
    return dash('M' + pts.map(([x, y]) => r1(x) + ' ' + r1(y)).join(' L'), 1.4) + arrow(x0, y0, x0 + 50 * ux, y0 - 50 * uy, 2) + line(`M${x0} ${y0} H${x0 + 40}`, 1, true);
  };
  const lift = (accDown, a, m) => box(140, 20, 110, 150) + line('M195 0 V20', 1.5) + box(165, 150, 60, 12, 1.5) + circ(195, 72, 10) +
    line('M195 82 V120 M195 120 L183 150 M195 120 L207 150 M195 92 L178 110 M195 92 L212 110') + (accDown ? arrow(290, 60, 290, 120) : arrow(290, 120, 290, 60)) + LS(300, 95, a) + LE(130, 95, m);
  const pulley = (x, y, r) => circ(x, y, r) + dot(x, y, 2.5);
  // Optics and waves
  const lensV = (x, y, h) => line(`M${x} ${y - h} Q${x + 14} ${y} ${x} ${y + h} Q${x - 14} ${y} ${x} ${y - h} Z`, 1.8);
  const lensC = (x, y, h) => line(`M${x - 9} ${y - h} H${x + 9} Q${x + 2} ${y} ${x + 9} ${y + h} H${x - 9} Q${x - 2} ${y} ${x - 9} ${y - h} Z`, 1.8);
  const fMarks = (cx, y, d, lab) => [cx - d, cx + d].map(x => line(`M${r1(x)} ${y - 5} V${y + 5}`, 1.5) + L(x, y - 9, lab || 'F')).join('');
  const speaker = (x, y) => box(x - 16, y - 10, 12, 20, 1.5) + line(`M${x - 4} ${y - 10} L${x + 10} ${y - 20} V${y + 20} L${x - 4} ${y + 10} Z`, 1.5);
  const wave = (x0, x1, y, A, lam, ph) => 'M' + range(x0, x1, 120).map(x => r1(x) + ' ' + r1(y - A * Math.sin(2 * Math.PI * (x - x0) / lam + (ph || 0)))).join(' L');
  const eye = (x, y) => line(`M${x - 12} ${y} Q${x} ${y - 9} ${x + 12} ${y} Q${x} ${y + 9} ${x - 12} ${y}`, 1.5) + dot(x, y, 3);
  const mirrorV = (x, y1, y2) => line(`M${x} ${y1} V${y2}`, 3) + line(range(y1 + 8, y2, Math.floor((y2 - y1 - 8) / 10)).map(y => `M${x} ${r1(y)} l9 -8`).join(' '), 1);
  const slits = (x) => line(`M${x} 30 V88 M${x} 92 V98 M${x} 102 V160`, 3);
  const grating = (x) => line(`M${x} 20 V170`, 3) + line(range(24, 166, 18).map(y => `M${x - 6} ${r1(y)} H${x + 6}`).join(' '), 1);
  const ray = (x0, y0, deg, len, w) => { const a = deg * RAD; return line(`M${x0} ${y0} L${r1(x0 + len * Math.cos(a))} ${r1(y0 - len * Math.sin(a))}`, w || 1.5); };
  // Circuits and fields
  const cellH = (x, y) => line(`M${x - 5} ${y - 12} V${y + 12}`, 2) + line(`M${x + 5} ${y - 6} V${y + 6}`, 4);
  const resH = (x1, x2, y) => box(x1, y - 7, x2 - x1, 14);
  const resV = (x, y1, y2) => box(x - 7, y1, 14, y2 - y1);
  const lamp = (x, y) => circ(x, y, 10) + line(`M${x - 7} ${y - 7} L${x + 7} ${y + 7} M${x + 7} ${y - 7} L${x - 7} ${y + 7}`, 1.5);
  const meter = (x, y, t) => circ(x, y, 11) + L(x, y + 4, t, { bold: true });
  const jn = (x, y) => dot(x, y, 3);
  const acSrc = (x, y) => circ(x, y, 12, 1.5) + L(x, y + 5, '~', { size: 16 });
  const crosses = (x1, x2, y1, y2, n) => line(range(x1, x2, n).flatMap(x => range(y1, y2, n).map(y => `M${r1(x - 4)} ${r1(y - 4)} l8 8 m0 -8 l-8 8`)).join(' '), 1);
  const fieldArrows = (ys, x1, x2) => ys.map(y => arrow(x1, y, x2, y, 1)).join('');
  const coilT = (x, many) => line((many ? range(64, 116, 13) : range(66, 114, 6)).map(y => `M${x} ${r1(y)} L${x + 46} ${r1(y + 4)}`).join(' '), 1.5);
  const loopTop = 'M60 40 H185 M195 40 H320 V140 H280 M220 140 H160 M100 140 H60 V40'; // cell at top, two series gaps at the bottom
  // Radioactivity
  const decayGraph = (aria, A0, T, xmax, xl, yl, xt, yt) => svgGraph({
    aria, x: { max: xmax, label: xl, ticks: xt.map(v => [v, String(v)]) }, y: { max: A0 * 1.15, label: yl, ticks: yt.map(v => [v, String(v)]) },
    lines: [{ f: t => A0 * Math.pow(2, -t / T), from: 0, to: xmax * 0.95, n: 60 }]
  });
  const gmSetup = (reading) => box(30, 70, 30, 40) + dot(60, 90, 4) + line('M110 78 H230 M110 102 H230 M110 78 V102', 2) +
    `<ellipse cx="230" cy="90" rx="5" ry="12" fill="none" stroke="currentColor" stroke-width="2"/>` + line('M235 90 H270', 1.5) + box(270, 60, 90, 60) + box(282, 72, 66, 26, 1.2) +
    (reading ? text(315, 91, reading, { size: 15, bold: true }) + L(315, 113, 'min⁻¹', { size: 11 }) : '');
  const person = (x, y) => circ(x, y - 50, 8) + line(`M${x} ${y - 42} V${y - 18} M${x} ${y - 18} L${x - 8} ${y} M${x} ${y - 18} L${x + 8} ${y} M${x} ${y - 36} L${x - 12} ${y - 24} M${x} ${y - 36} L${x + 12} ${y - 24}`, 1.6);

  const HFIG = {
    /* ================= Heat and Gases ================= */
    H1: svg(380, 185, 'A hot metal block is put into water in a beaker',
      block(160, 15, 44, 32) + arrow(182, 52, 182, 84) + beaker(110, 70, 170, 100, 26) + thermo(250, 50, 150) +
      LE(150, 28, '0.5 kg') + LE(150, 45, '100 °C') + L(175, 130, '0.2 kg') + L(175, 150, '20 °C')),
    H2: svg(380, 185, 'An immersion heater in a beaker of ice',
      beaker(120, 50, 150, 120) + ice([[135, 110], [160, 128], [190, 112], [215, 132], [240, 114], [150, 148], [205, 150], [240, 148]]) + heater(195, 30, 140) +
      LS(205, 35, '1 kW') + L(195, 182, '0.5 kg, 0 °C')),
    H4: svg(380, 175, 'A sealed rigid container of gas with a pressure gauge, heated from 27 to 127 degrees Celsius',
      `<rect x="110" y="50" width="160" height="105" rx="10" fill="none" stroke="currentColor" stroke-width="3"/>` + gauge(190, 28) + line('M190 43 V50') +
      L(190, 98, '1.2 × 10⁵ Pa') + L(190, 125, '27 °C → 127 °C')),
    H8: svg(380, 220, 'Section of a vacuum flask with the stopper, silvered surfaces and vacuum labelled',
      line('M135 60 V185 Q135 195 145 195 H235 Q245 195 245 185 V60 M150 60 V175 Q150 182 157 182 H223 Q230 182 230 175 V60') + box(150, 30, 80, 32, 2) +
      line('M230 46 H290 M245 120 H290 M140 150 H75', 1) + LS(296, 50, 'stopper') + LS(296, 124, 'silvered surfaces') + LE(70, 154, 'vacuum')),
    H9: svgGraph({
      aria: 'Temperature against time: rises at 4 degrees per minute, stays constant while melting, then rises at 2 degrees per minute',
      x: { max: 20, label: 't / min' }, y: { max: 70, label: 'θ / °C' },
      lines: [{ pts: [[0, 10], [5, 30], [11, 30], [19, 46]] }], text: [[2, 26, '4 °C min⁻¹', 'end'], [15.5, 30, '2 °C min⁻¹', 'start']]
    }),
    H10: svg(400, 170, 'A liquid-in-glass thermometer: thread lengths 4.0 cm at the ice point, 24.0 cm at the steam point and 13.0 cm in the liquid',
      dot(30, 60, 10) + line('M40 55 H380 M40 65 H380 M380 55 V65', 1.5) + line('M40 60 H214', 4) +
      line('M87 70 V150 M214 70 V125 M370 70 V100', 1, true) +
      dim(30, 95, 370, 95, '24.0 cm (100 °C)', null, 89) + dim(30, 120, 214, 120, '13.0 cm', null, 114) + dim(30, 145, 87, 145, '', null, 139) + LS(93, 150, '4.0 cm (0 °C)')),
    H12: svg(380, 180, 'A metal block heated by a heater, with a thermometer',
      block(110, 70, 160, 90) + heater(160, 40, 140) + thermo(230, 45, 130) + LS(170, 45, '500 W') + L(190, 176, '20 °C → 50 °C, 2 min')),
    H13: svg(380, 190, 'A boiling kettle standing on an electronic balance',
      line('M130 60 H250 L260 140 H120 Z') + line('M150 60 Q190 38 230 60') + line('M250 85 L292 62 L297 68 L256 100') + line(range(0, 2, 2).map(k => `M${290 + k * 12} 50 q-7 -9 0 -18 t0 -18`).join(' '), 1.3) +
      box(100, 140, 180, 26) + box(160, 146, 60, 14, 1.2) + L(190, 105, '2.0 kW') + L(190, 184, '150 s: −0.12 kg')),
    H14: svg(380, 185, 'A piece of ice is dropped into warm water',
      ice([[175, 20]]) + arrow(184, 44, 184, 76) + beaker(110, 65, 170, 105, 30) + LE(166, 32, '0.05 kg, 0 °C') + L(195, 140, '0.3 kg, 30 °C')),
    H15: svg(380, 175, 'A sunny day at the coast: land on the left, sea on the right, and a breeze blowing from the sea to the land near the ground',
      sun(60, 35) + line('M20 120 H190 L215 140 H360') + line('M215 150 q12 -8 24 0 t24 0 t24 0 t24 0 t24 0 t24 0', 1.5) +
      L(100, 150, 'land') + L(290, 128, 'sea') + arrow(300, 105, 200, 105, 1.8) + L(250, 96, 'breeze')),
    H17: svg(380, 190, 'An air bubble rising from the bottom of a lake 20 m deep',
      line('M40 30 H340', 2) + line('M40 30 q10 -6 20 0 t20 0', 1) + line('M40 170 H340', 3) + circ(190, 158, 8) + circ(190, 44, 12, 1.5) + dash('M190 148 V60') + arrow(190, 100, 190, 80, 1.5) +
      dim(260, 30, 260, 170, '20 m', 268, 104, { anchor: 'start' }) + LS(202, 162, '2.00 cm³') + LS(208, 48, '?')),
    H18: svg(400, 175, 'Gas in a cylinder compressed by a piston from 3.0 litres to 1.0 litre',
      cylinder(40, 160, 70, 120) + cylinder(230, 160, 70, 40, 142) +
      [['3.0 L', '27 °C', '1.0 × 10⁵ Pa'], ['1.0 L', '87 °C', 'p = ?']].map((ls, j) => ls.map((t, i) => text(120 + j * 190, 110 + i * 20, t, { size: 11, anchor: 'start' })).join('')).join('')),
    H21: svg(380, 180, 'A gas cylinder', bottle(150, 165) + LS(250, 80, '0.020 m³') + LS(250, 106, '2.0 × 10⁵ Pa') + LS(250, 132, '27 °C')),
    H23: svg(400, 175, 'The same gas molecules in a cylinder before and after it is compressed to half its volume',
      box(40, 30, 110, 130) + molecules(40, 30, 110, 130, 14, 77) + line('M40 30 H150', 5) +
      box(240, 95, 110, 65) + molecules(240, 95, 110, 65, 14, 77) + line('M240 95 H350', 5) + arrow(165, 95, 225, 95, 1.5) + L(95, 175, 'V') + L(295, 175, 'V/2')),
    H27: svg(380, 190, 'Measuring specific heat capacity: an aluminium block with an immersion heater and thermometer, connected through a joulemeter to a power supply',
      block(70, 80, 130, 90) + heater(110, 50, 150) + thermo(165, 50, 140) + box(250, 40, 100, 40) + box(250, 120, 100, 40) +
      line('M110 50 V30 H300 V40 M300 80 V120', 1.5) + L(300, 64, 'joulemeter') + L(300, 145, 'power supply') + L(135, 186, 'aluminium')),
    H28: svg(380, 180, 'A gas in a syringe is heated at constant pressure from 0 degrees Celsius',
      box(60, 30, 240, 40) + shade(60, 30, 140, 40) + line('M200 30 V70', 5) + line('M200 50 H345', 3) + L(130, 55, '273 cm³') + L(180, 88, '0 °C') +
      box(60, 110, 240, 40) + shade(60, 110, 154, 40) + line('M214 110 V150', 5) + line('M214 130 H345', 3) + L(137, 135, '300 cm³') + L(180, 168, 'θ = ?')),
    H29: svg(380, 180, 'A rigid gas cylinder with a pressure gauge, from which some gas leaks',
      bottle(80, 165) + gauge(120, 20) + line('M120 35 V31') + line('M170 50 q8 -6 16 0 t16 0 M170 62 q8 -6 16 0 t16 0', 1.3) +
      LS(200, 80, '6.0 × 10⁵ Pa, 27 °C') + LS(200, 108, '↓') + LS(200, 136, '4.0 × 10⁵ Pa, 17 °C')),
    H31: svg(380, 205, 'Two identical flasks joined by a narrow tube; one stands in a hot water bath',
      roundFlask(110, 125, 35) + roundFlask(270, 125, 35) + line('M103 60 V40 H263 V60 M117 60 V48 H277 V60', 1.5) +
      beaker(55, 80, 110, 95, 20) + flame(110, 205) + L(110, 129, '127 °C') + L(270, 129, '27 °C')),
    H34: svg(380, 185, 'Steam passed into water in a beaker through a tube',
      line('M60 30 H190 V150 M70 40 H180 V150', 1.5) + beaker(110, 70, 170, 100, 26) + L(80, 25, 'steam', { anchor: 'start' }) + L(235, 130, '0.50 kg') + L(235, 150, '20 °C → 50 °C')),
    H40: svgGraph({
      aria: 'Temperature of coffee against time: falls from 80 to 60 degrees Celsius in 5 minutes',
      x: { max: 7, label: 't / min', ticks: [[5, '5']] }, y: { max: 95, label: 'θ / °C', ticks: [[80, '80'], [60, '60']] },
      lines: [{ f: t => 20 + 60 * Math.exp(-t * Math.log(60 / 40) / 5), from: 0, to: 6.5 }], guides: [[5, 0, 5, 60], [0, 60, 5, 60]]
    }),
    H41: svg(380, 185, 'An electric kettle heating water',
      line('M130 70 H250 L262 160 H118 Z') + line('M150 70 Q190 45 230 70') + line('M250 95 L295 70 L300 76 L258 110') + line('M262 150 H340', 1.5) +
      L(190, 108, '2.0 kW') + L(190, 128, '1.5 kg') + L(190, 148, '20 °C → 100 °C')),
    H47: svg(380, 190, 'Two funnels of crushed ice: X contains a switched-on immersion heater, Y has a heater that is not switched on; beakers collect the water',
      [80, 260].map((x, i) => line(`M${x - 50} 30 L${x - 8} 90 V110 M${x + 50} 30 L${x + 8} 90 V110`) + ice([[x - 30, 38], [x - 8, 44], [x + 14, 38], [x - 18, 58], [x + 2, 62]]) + heater(x, 15, 75) +
        beaker(x - 30, 125, 60, 50, 32) + L(x + 62, 30, 'XY'[i], { bold: true, size: 14 })).join('')),
    H48: svg(380, 190, 'Two funnels of crushed ice: X is heated by a 500 W heater, Y is a control; beakers collect the water',
      [80, 260].map((x, i) => line(`M${x - 50} 30 L${x - 8} 90 V110 M${x + 50} 30 L${x + 8} 90 V110`) + ice([[x - 30, 38], [x - 8, 44], [x + 14, 38], [x - 18, 58], [x + 2, 62]]) + heater(x, 15, 75) +
        beaker(x - 30, 125, 60, 50, 32) + L(x + 62, 30, 'XY'[i], { bold: true, size: 14 })).join('') + L(80, 12, '500 W')),
    H51: svg(380, 192, 'Two identical cans of hot water, one dull black and one shiny, each with a thermometer',
      `<rect x="70" y="70" width="80" height="95" fill="currentColor" fill-opacity="0.4"/>` + box(230, 70, 80, 95) + thermo(110, 30, 120) + thermo(270, 30, 120) + L(110, 182, 'dull black') + L(270, 182, 'shiny')),
    H52: svg(380, 180, 'Sunlight falling on a greenhouse',
      sun(60, 35) + line('M110 160 V100 L210 50 L310 100 V160 Z') + line('M110 100 H310', 1) + line('M80 160 H340', 1.5) + arrow(80, 60, 150, 110, 1.5) + arrow(100, 45, 190, 105, 1.5)),
    H53: svg(380, 170, 'Section through a double-glazed window: two panes of glass with a thin layer of air between them',
      shade(150, 20, 16, 130, 0.35) + box(150, 20, 16, 130, 1.5) + shade(214, 20, 16, 130, 0.35) + box(214, 20, 16, 130, 1.5) +
      L(190, 90, 'air') + L(158, 166, 'glass') + L(222, 166, 'glass') + L(80, 90, 'inside', { size: 13 }) + L(300, 90, 'outside', { size: 13 })),
    H56: svg(380, 180, 'Hot water poured from a jug into a cup',
      line('M60 40 H140 V110 H60 Z M60 40 L48 30') + shade(60, 60, 80, 50) + arrow(150, 70, 200, 110, 1.5) + line('M210 100 V165 H290 V100 M290 115 q22 0 22 20 q0 20 -22 20', 2) +
      L(100, 130, '0.20 kg, 80 °C') + L(250, 180, '20 °C, 100 J °C⁻¹')),
    H57: svg(380, 175, 'Equal masses of water at 90 degrees and liquid X at 30 degrees are mixed',
      beaker(50, 40, 90, 100, 30) + beaker(240, 40, 90, 100, 30) + arrow(155, 90, 225, 90, 1.5) + L(95, 160, 'water, 90 °C') + L(285, 160, 'X, 30 °C')),
    H58: svgGraph({
      aria: 'Temperature of the block against time: a straight line rising 20 degrees per minute',
      x: { max: 4, label: 't / min', ticks: [[1, '1'], [2, '2'], [3, '3']] }, y: { max: 100, label: 'θ / °C', ticks: [[20, '20'], [40, '40'], [60, '60'], [80, '80']] },
      lines: [{ pts: [[0, 20], [3.5, 90]] }]
    }),
    H61: svg(380, 190, "Boyle's law apparatus: a sealed syringe of air connected to a pressure gauge",
      box(120, 40, 50, 130) + shade(120, 90, 50, 80) + line('M120 90 H170', 5) + line('M145 90 V20 M130 20 H160', 3) + line('M145 170 V180 H250 V150', 1.5) + gauge(250, 135) +
      line(range(100, 165, 13).map(y => `M170 ${y} h8`).join(' '), 1)),
    H63: svg(380, 160, 'A molecule moving back and forth between two parallel walls a distance L apart',
      line('M70 30 V130 M310 30 V130', 4) + dot(170, 80, 6) + arrow(178, 80, 235, 80, 1.8) + L(206, 70, 'u') + L(170, 104, 'm') + dim(70, 145, 310, 145, 'L', null, 139)),
    H70: svg(380, 175, 'Two flasks of gas joined by a tube with a closed tap',
      roundFlask(100, 120, 40) + roundFlask(280, 115, 48) + line('M93 50 V25 H287 V37 M107 50 V33 H273 V37', 1.5) + circ(190, 29, 8, 1.5) + line('M184 23 L196 35', 2) +
      L(100, 116, '2.0 L') + L(100, 134, '1.0 × 10⁵ Pa') + L(280, 110, '3.0 L') + L(280, 128, '2.0 × 10⁵ Pa')),
    H72: svgGraph({
      aria: 'Temperature against time: rises, stays constant for 8.0 minutes while melting, then rises again',
      x: { max: 14, label: 't / min', ticks: [[2, '2.0'], [10, '10.0']] }, y: { max: 100, label: 'θ / °C' },
      lines: [{ pts: [[0, 20], [2, 60], [10, 60], [12.5, 85]] }], guides: [[2, 0, 2, 60], [10, 0, 10, 60]]
    }),
    H74: svg(380, 180, 'A tank of water kept at 50 degrees by a 60 W heater in a room at 20 degrees',
      beaker(120, 50, 140, 115, 15) + heater(160, 30, 150) + thermo(225, 35, 140) + LS(170, 35, '60 W') + L(190, 120, '50 °C') + L(330, 90, 'room 20 °C')),
    H76: svg(380, 185, 'A beaker of water heated gently under one side, with a purple crystal at the bottom near that side',
      beaker(100, 40, 180, 120, 12) + `<rect x="236" y="150" width="14" height="10" fill="currentColor"/>` + flame(243, 186) +
      dash('M243 145 V70 Q243 60 230 60 H140 Q125 60 125 75 V135 Q125 145 140 145 H225', 1.4) + arrow(243, 110, 243, 90, 1.4)),
    H77: svg(380, 180, 'A hollow metal cube of hot water seen from above, with faces dull black, shiny silver, matt white and dull grey, and an infra-red detector',
      box(140, 50, 100, 100) + `<rect x="140" y="146" width="100" height="6" fill="currentColor"/>` + L(190, 40, 'shiny silver') + LE(132, 104, 'matt white') + LS(248, 104, 'dull grey') + L(190, 168, 'dull black') +
      box(320, 85, 40, 24) + line('M320 97 H300', 2) + L(340, 125, 'detector')),
    H80: svg(380, 190, 'A hot-air balloon whose air is heated by a burner',
      line('M190 20 C120 20 110 90 160 130 L175 150 H205 L220 130 C270 90 260 20 190 20 Z') + flame(190, 150) + line('M175 150 L172 165 M205 150 L208 165', 1.2) + box(168, 165, 44, 20) +
      LS(270, 80, '300 K → 360 K')),
    H81: svg(380, 190, 'A weather balloon at ground level and at a height where the pressure and temperature are lower',
      circ(90, 135, 22) + line('M90 157 V180', 1) + circ(280, 70, 38) + line('M280 108 V140', 1) + dash('M110 125 L245 85') + line('M20 182 H360', 1.5) +
      L(90, 100, '4.0 m³') + L(90, 82, '27 °C') + L(90, 64, '1.0 × 10⁵ Pa') + L(280, 165, '4.0 × 10⁴ Pa, −33 °C')),
    H84: svg(380, 190, 'Water falling 50 m down a waterfall',
      line('M30 40 H150 V175 H360') + line('M150 40 q20 0 26 40 t12 130', 1.5) + line('M158 40 q22 0 28 40 t10 130', 1.2) + dim(110, 40, 110, 175, '50 m', 104, 110, { anchor: 'end' })),
    H85: svg(380, 180, 'Lead shot falls the length of a long cardboard tube closed at both ends; the tube is inverted many times',
      box(170, 20, 40, 150) + range(0, 5, 5).map(k => dot(180 + (k % 3) * 9, 160 - Math.floor(k / 3) * 7, 3)).join('') + dim(240, 20, 240, 170, 'L', 248, 99, { anchor: 'start' }) +
      line('M130 60 A40 40 0 1 1 130 130', 1.5) + arrow(132, 124, 136, 132, 1.5)),
    H86: svg(380, 160, 'A bicycle pump with its outlet blocked; the handle is pushed in quickly',
      box(80, 60, 220, 40) + shade(80, 60, 120, 40) + line('M200 60 V100', 5) + line('M200 80 H340 M340 62 V98', 3) + line('M80 80 H50', 3) + line('M42 72 L58 88 M58 72 L42 88', 2.5) + arrow(370, 80, 350, 80, 2)),
    H87: svg(380, 190, 'An aluminium block heated through a joulemeter; the reading changes from 12.4 kJ to 30.4 kJ as the temperature rises from 20.0 to 40.0 degrees',
      block(60, 80, 130, 90) + heater(100, 50, 150) + thermo(155, 50, 140) + box(240, 50, 110, 50) + line('M100 50 V30 H295 V50', 1.5) +
      L(295, 72, '12.4 kJ → 30.4 kJ') + L(295, 92, 'joulemeter', { size: 11 }) + L(125, 186, '1.0 kg, 20.0 °C → 40.0 °C')),
    H90: svg(380, 150, 'A lead bullet moving at 300 m/s towards a sandbag',
      line('M60 75 H90 Q100 75 104 80 Q100 85 90 85 H60 Z', 1.8) + arrow(115, 80, 190, 80, 1.8) + L(150, 70, '300 m s⁻¹') + L(80, 105, '10 g') +
      line('M230 30 Q280 20 320 35 V125 Q280 140 230 128 Z')),
    H94: svg(380, 170, 'A pump pushing air into a tyre',
      box(40, 70, 130, 30) + line('M170 85 H230', 2) + line('M40 85 H15 M15 72 V98', 3) + `<ellipse cx="290" cy="85" rx="60" ry="60" fill="none" stroke="currentColor" stroke-width="10"/>` +
      L(105, 120, '0.25 L per stroke') + L(290, 89, '2.0 L')),
    H96: svg(380, 185, 'A mixture of ice and water in a beaker, heated gently and stirred, with a thermometer',
      beaker(120, 50, 140, 115, 30) + ice([[140, 82], [170, 90], [215, 86], [190, 120]]) + thermo(235, 30, 140) + line('M150 30 V140 M138 140 H162', 2) + flame(190, 185)),
    H102: svg(380, 170, 'A copper block and an aluminium block in contact inside an insulated box',
      box(60, 30, 260, 120, 5) + block(110, 70, 80, 60) + block(190, 70, 80, 60) + L(150, 96, '0.50 kg') + L(150, 114, '100 °C') + L(230, 96, '0.20 kg') + L(230, 114, '20 °C') +
      L(150, 145, 'copper') + L(230, 145, 'aluminium')),
    H104: svg(380, 185, 'A clay jar of water wrapped in a wet cloth',
      line('M150 40 H230 Q280 70 270 130 Q260 170 190 172 Q120 170 110 130 Q100 70 150 40 Z') + shade(115, 80, 150, 88) + line('M115 80 H265', 1.2) +
      line('M260 70 q10 -8 0 -16 t0 -16 M285 100 q10 -8 0 -16 t0 -16', 1.2) + L(190, 182, 'wet cloth')),

    /* ================= Force and Motion ================= */
    M3: svg(380, 185, 'A man standing on a scale in a lift that accelerates downwards', lift(true, '2 m s⁻²', '60 kg')),
    M4: svg(380, 195, 'A stone thrown horizontally from the top of a 20 m cliff',
      box(60, 60, 70, 110) + line('M20 170 H360', 1.5) + dot(130, 52, 6) + arrow(136, 52, 196, 52) + L(166, 42, '15 m s⁻¹') +
      dash('M' + range(130, 330, 30).map(x => r1(x) + ' ' + r1(52 + 118 * ((x - 130) / 200) ** 2)).join(' L'), 1.4) + dim(45, 52, 45, 170, '20 m', 40, 115, { anchor: 'end' }) + dim(130, 184, 330, 184, '?', null, 180)),
    M5: svg(380, 160, 'A moving trolley about to hit a stationary trolley',
      line('M20 145 H360', 1.5) + cart(40, 145, 100, 40) + cart(220, 145, 80, 40) + L(90, 118, '2 kg') + L(260, 118, '1 kg') + arrow(60, 70, 130, 70) + L(95, 60, '3 m s⁻¹')),
    M8: svg(380, 185, 'A motor lifting a load at constant speed',
      box(150, 18, 80, 30) + L(190, 38, 'M', { size: 14, bold: true }) + line('M190 48 V110', 1.5) + box(165, 110, 50, 35) + L(190, 132, '50 kg', { size: 11 }) +
      line('M100 175 H300', 1.5) + arrow(250, 150, 250, 95, 1.8) + LS(258, 126, '0.4 m s⁻¹')),
    M10: svg(380, 185, 'A block sliding down a rough slope at constant velocity', slope(30, { angle: 'θ', down: 'v' })),
    M12: svg(380, 185, 'A stone dropped from a bridge into the water below',
      line('M30 45 H350', 4) + box(80, 45, 16, 123, 1.5) + box(284, 45, 16, 123, 1.5) + line('M30 168 q10 -6 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0', 1.3) +
      dot(170, 56, 5) + dash('M170 64 V160') + LS(178, 110, '2.5 s') + dim(240, 45, 240, 166, 'h = ?', 248, 140, { anchor: 'start' })),
    M15: svg(380, 170, 'A box pushed along a horizontal floor',
      line('M30 150 H350', 1.5) + box(170, 90, 90, 60) + L(215, 125, '20 kg') + arrow(90, 120, 166, 120, 2) + L(128, 108, '80 N → 120 N')),
    M16: svg(380, 185, 'A block on a rough slope inclined at 30 degrees, with the friction acting up the slope', slope(30, { mass: '2.0 kg', up: '4.0 N' })),
    M18: svg(380, 180, 'A non-uniform rod PQ resting on supports at its two ends',
      box(60, 80, 260, 12) + line('M66 92 L56 112 H76 Z M314 92 L304 112 H324 Z', 1.5) + arrow(66, 155, 66, 118, 1.8) + arrow(314, 155, 314, 118, 1.8) +
      L(66, 170, '40 N') + L(314, 170, '20 N') + L(60, 74, 'P', { size: 14, bold: true }) + L(320, 74, 'Q', { size: 14, bold: true }) + dim(60, 50, 320, 50, '2.0 m', null, 44)),
    M19: svg(380, 190, 'A sledge pulled along level ground by a rope at 30 degrees to the horizontal',
      line('M30 155 H350', 1.5) + line('M90 150 H200 Q215 150 215 140', 2) + box(95, 120, 100, 25) + arrow(195, 125, 290, 70, 2) + LS(296, 70, '40 N') +
      line('M230 125 A35 35 0 0 0 225.3 107.5', 1.2) + LS(238, 118, '30°') + dash('M195 125 H245') + arrow(95, 175, 195, 175, 1.5) + L(145, 188, '5.0 m')),
    M20: svg(380, 185, 'A ball dropped from 5.0 m above the ground, passing a point 1.0 m above the ground',
      dot(190, 30, 6) + dash('M190 40 V135') + circ(190, 142, 6, 1.2) + line('M40 170 H340', 1.5) + dim(120, 30, 120, 170, '5.0 m', 112, 104, { anchor: 'end' }) + dim(250, 142, 250, 170, '1.0 m', 258, 160, { anchor: 'start' })),
    M21: svg(380, 185, 'A car travelling up a slope at constant speed (not to scale)', slope(10, { angle: '5°', mass: '1000 kg', up: '20 m s⁻¹', down: '500 N' })),
    M22: svg(380, 175, 'An object at rest explodes into two pieces moving in opposite directions',
      box(160, 25, 60, 30) + L(190, 45, '2.0 kg') + dash('M190 62 V90') + box(110, 105, 50, 36) + L(135, 128, '1.5 kg') + box(225, 108, 34, 30) + L(242, 128, '0.5 kg', { size: 10 }) +
      arrow(262, 123, 330, 123) + L(296, 112, '12 m s⁻¹') + arrow(108, 123, 50, 123) + L(78, 112, '?') + line('M30 145 H350', 1.5)),
    M25: svg(380, 180, 'A ball kicked from level ground at 20 m/s at 30 degrees above the horizontal',
      line('M20 160 H360', 1.5) + projectile(60, 160, 30, 160, 2.5) + L(95, 125, '20 m s⁻¹') + LS(106, 155, '30°') + dash('M190 160 V123') + LS(196, 145, 'H = ?')),
    M26: svg(380, 190, 'Top view of a ball on a string whirled in a horizontal circle on a smooth table',
      line('M260 95 A70 70 0 1 0 260 95.01', 1.4, true) + dot(190, 95, 4) + line('M190 95 H253', 1.5) + dot(260, 95, 7) + L(222, 87, '0.5 m') + LS(270, 100, '0.2 kg') + L(190, 184, 'f = 3 Hz')),
    M30: svg(380, 170, 'A metre rule pivoted at its 40 cm mark with a 1.2 N weight hung at the 10 cm mark',
      box(40, 70, 300, 12) + line('M160 82 L150 102 H170 Z', 1.5) + arrow(70, 82, 70, 130, 1.8) + L(70, 146, '1.2 N') + arrow(190, 82, 190, 130, 1.8) + L(190, 146, 'W = ?') +
      [[40, '0'], [70, '10'], [160, '40'], [190, '50'], [340, '100']].map(([x, t]) => line(`M${x} 64 V70`, 1) + L(x, 58, t, { size: 11 })).join('') + LS(356, 58, 'cm')),
    M31: svg(380, 175, 'A conical pendulum: a bob on a 0.50 m string moving in a horizontal circle, with the string at 30 degrees to the vertical',
      line('M140 25 H240', 3) + line('M190 25 L250 129', 1.8) + dot(250, 129, 7) + dash('M190 25 V140') + `<ellipse cx="190" cy="129" rx="60" ry="14" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>` +
      LS(228, 72, '0.50 m') + L(198, 66, '30°', { size: 11 })),
    M32: svg(380, 185, 'A bullet fired into a block hanging from strings; the block swings up through 0.20 m',
      line('M150 20 H290', 3) + line('M180 20 V120 M260 20 V120', 1.2) + box(170, 120, 100, 40) + L(220, 145, '0.99 kg') + `<rect x="205" y="80" width="100" height="40" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>` +
      line('M180 20 L215 80 M260 20 L295 80', 1, true) + box(60, 136, 16, 8, 1.5) + arrow(82, 140, 150, 140, 1.8) + L(68, 128, '0.010 kg') + L(116, 160, 'v = ?') + dim(330, 120, 330, 160, '0.20 m', 336, 144, { anchor: 'start' })),
    M33: svg(380, 185, 'A ball thrown from the top of a 10 m building at 15 m/s at 30 degrees above the horizontal',
      box(60, 90, 60, 80) + line('M20 170 H370', 1.5) + projectile(120, 90, 30, 170, 1.4) + L(138, 62, '15 m s⁻¹') + LS(160, 86, '30°') + dim(45, 90, 45, 170, '10 m', 40, 134, { anchor: 'end' }) + dim(60, 182, 348, 182, '?', null, 178)),
    M38: svgGraph({
      aria: 'Acceleration against time: 2.0 metres per second squared for 5.0 s, then minus 1.0 for 4.0 s',
      x: { max: 10.5, label: 't / s', ticks: [[5, '5.0'], [9, '9.0']] }, y: { min: -1.6, max: 2.6, label: 'a / m s⁻²', ticks: [[2, '2.0'], [-1, '−1.0']] },
      lines: [{ pts: [[0, 2], [5, 2], [5, -1], [9, -1], [9, 0]] }]
    }),
    M47: svg(380, 175, 'A box pulled by a rope with a 50 N force at 30 degrees above the horizontal',
      line('M30 160 H350', 1.5) + box(120, 110, 80, 50) + arrow(200, 125, 304, 65, 2) + LS(310, 64, '50 N') + dash('M200 125 H304 V65') + line('M235 125 A35 35 0 0 0 230.3 107.5', 1.2) + LS(240, 118, '30°')),
    M48: svg(380, 185, 'A 40 N weight hanging from two strings attached to a ceiling at 30 and 60 degrees to the horizontal',
      line('M30 30 H350', 3) + line(range(40, 340, 15).map(x => `M${x} 30 l-8 -8`).join(' '), 1) + line('M190 110 L51.4 30 M190 110 L236.2 30 M190 110 V140', 1.8) + box(170, 140, 40, 30) + L(190, 160, '40 N', { size: 11 }) +
      LS(88, 44, '30°') + LE(225, 44, '60°')),
    M49: svg(380, 175, 'A box on a level floor pulled by a rope at 30 degrees above the horizontal',
      line('M30 160 H350', 1.5) + box(120, 110, 80, 50) + L(160, 140, '10 kg') + arrow(200, 125, 304, 65, 2) + LS(310, 64, '50 N') + dash('M200 125 H250') + LS(240, 118, '30°')),
    M51: svg(380, 160, 'A 4.0 kg block pulled by a 12 N force tows a 2.0 kg block by a string on a smooth surface',
      line('M30 145 H350', 1.5) + box(60, 100, 60, 45) + L(90, 127, '2.0 kg') + line('M120 122 H180', 1.5) + box(180, 95, 80, 50) + L(220, 125, '4.0 kg') + arrow(260, 120, 335, 120, 2) + L(298, 110, '12 N')),
    M52: svg(380, 190, 'A block on a rough table connected by a string over a pulley to a hanging block',
      line('M40 90 H262', 3) + line('M60 90 V180 M240 90 V180', 2) + box(110, 50, 80, 40) + L(150, 75, '4.0 kg') + line('M190 70 H270 M280 80 V140', 1.5) + pulley(270, 80, 10) + line('M262 90 L270 80', 1.5) +
      box(262, 140, 36, 30) + L(280, 160, '2.0 kg', { size: 10 }) + arrow(108, 84, 66, 84, 1.6) + L(87, 76, '6.0 N', { size: 11 })),
    M53: svg(380, 185, 'Two masses of 3.0 kg and 1.0 kg hanging on either side of a pulley',
      line('M150 5 H230 M190 5 V20', 2) + pulley(190, 40, 20) + line('M170 40 V110 M210 40 V80', 1.5) + box(150, 110, 40, 40) + L(170, 135, '3.0 kg', { size: 11 }) + box(195, 80, 30, 30) + L(210, 100, '1.0 kg', { size: 9 })),
    M54: svgGraph({
      aria: 'Force against time: 20 N for 0.20 s, then decreasing uniformly to zero at 0.40 s',
      x: { max: 0.5, label: 't / s', ticks: [[0.2, '0.20'], [0.4, '0.40']] }, y: { max: 26, label: 'F / N', ticks: [[20, '20']] },
      lines: [{ pts: [[0, 20], [0.2, 20], [0.4, 0]] }], guides: [[0.2, 0, 0.2, 20]]
    }),
    M55: svg(380, 160, 'A rifle firing a bullet horizontally',
      line('M60 90 H200 V104 H120 L80 125 H55 L60 104 Z', 2) + box(222, 92, 14, 8, 1.5) + arrow(244, 96, 320, 96, 1.8) + L(282, 86, '400 m s⁻¹') + L(229, 84, '0.020 kg', { size: 10 }) +
      L(120, 145, '4.0 kg') + arrow(50, 70, 20, 70, 1.5) + L(36, 62, '?')),
    M57: svg(380, 160, 'Two trolleys moving towards each other',
      line('M20 145 H360', 1.5) + cart(40, 145, 100, 40) + cart(230, 145, 80, 40) + L(90, 118, '2.0 kg') + L(270, 118, '1.0 kg') +
      arrow(60, 70, 130, 70) + L(95, 60, '3.0 m s⁻¹') + arrow(300, 70, 230, 70) + L(265, 60, '4.0 m s⁻¹')),
    M59: svg(380, 170, 'A ball hits a wall at 10 m/s and rebounds at 8.0 m/s',
      line('M300 20 V150', 4) + line(range(30, 140, 11).map(y => `M300 ${y} l10 -10`).join(' '), 1) + dot(230, 90, 10) + arrow(140, 60, 220, 60, 1.8) + L(180, 50, '10 m s⁻¹') +
      arrow(220, 122, 150, 122, 1.8) + L(185, 140, '8.0 m s⁻¹') + L(230, 112, '0.20 kg', { size: 10 })),
    M62: svg(380, 170, 'A braking car comes to rest in 40 m',
      line('M20 140 H360', 1.5) + box(40, 108, 90, 22) + line('M55 108 L68 92 H102 L115 108') + circ(60, 132, 8) + circ(110, 132, 8) + L(85, 124, '1200 kg', { size: 10 }) +
      arrow(140, 80, 210, 80) + L(175, 70, '20 m s⁻¹') + dim(85, 158, 330, 158, '40 m', null, 152)),
    M63: svg(380, 185, 'A block released at the top of a rough slope 5.0 m long inclined at 30 degrees', slope(30, { mass: '2.0 kg', up: '4.0 N' }) + L(222, 104, '5.0 m')),
    M67: svg(380, 175, 'A pendulum bob released from 0.20 m above its lowest point',
      line('M150 20 H230', 3) + dash('M190 20 V150') + circ(190, 150, 7, 1.2) + line('M190 20 L264.6 126.5', 1.8) + dot(264.6, 126.5, 7) + dash('M264.6 126.5 H320 M197 150 H320', 1) + dim(310, 126.5, 310, 150, '0.20 m', 316, 146, { anchor: 'start' })),
    M68: svg(380, 180, 'A ball kicked from level ground at 25 m/s at 40 degrees above the horizontal',
      line('M20 160 H360', 1.5) + projectile(50, 160, 40, 160, 2.2) + L(80, 112, '25 m s⁻¹') + LS(95, 155, '40°')),
    M74: svg(380, 185, 'Two children on a see-saw balanced on a central pivot',
      line('M40 140 H340', 4) + line('M190 142 L178 168 H202 Z', 1.5) + box(75, 108, 30, 30) + L(90, 100, '30 kg') + box(247, 102, 36, 36) + L(265, 94, '40 kg') +
      dim(90, 180, 190, 180, '2.0 m', null, 175) + dim(190, 180, 265, 180, '?', null, 175)),
    M75: svg(380, 190, 'A man stands on a uniform plank resting on two supports P and Q',
      box(40, 100, 300, 10) + line('M90 110 L80 130 H100 Z M290 110 L280 130 H300 Z', 1.5) + L(90, 145, 'P', { bold: true, size: 14 }) + L(290, 145, 'Q', { bold: true, size: 14 }) +
      person(140, 100) + LS(152, 70, '600 N') + arrow(190, 110, 190, 160, 1.5) + L(190, 175, '300 N') +
      dim(40, 30, 140, 30, '2.0 m', null, 24) + dim(40, 165, 90, 165, '1.0 m', null, 182) + dim(290, 165, 340, 165, '1.0 m', null, 182)),
    M77: svg(380, 190, 'A steering wheel of diameter 0.40 m turned by two equal and opposite forces at opposite ends of a diameter',
      circ(190, 95, 70, 4) + dash('M190 25 V165') + dot(190, 95, 3) + arrow(190, 25, 260, 25, 2) + LS(266, 30, '15 N') + arrow(190, 165, 120, 165, 2) + LE(114, 170, '15 N') + LS(198, 70, '0.40 m')),
    M78: svg(380, 190, 'A uniform ladder leaning against a smooth wall with its foot on rough ground',
      line('M300 15 V170') + line(range(25, 165, 14).map(y => `M300 ${y} l10 -10`).join(' '), 1) + line('M40 170 H300') + line('M195 170 L300 30', 5) +
      arrow(247.5, 100, 247.5, 140, 1.5) + LS(254, 140, '200 N') + dim(195, 182, 300, 182, '3.0 m', null, 178) + dim(325, 30, 325, 170, '4.0 m', 331, 104, { anchor: 'start' }) + LE(235, 80, '5.0 m')),
    M79: svg(380, 185, 'A car on top of a hump-back bridge whose surface is an arc of radius 20 m',
      line('M30 150 H60 A200 200 0 0 1 320 150 H350') + box(170, 80, 40, 20) + circ(178, 101, 4, 1.5) + circ(202, 101, 4, 1.5) + dash('M190 106 V180') + LS(196, 160, 'r = 20 m')),
    M80: svg(380, 185, 'A ball on a string moving in a vertical circle, at its lowest point',
      line('M260 90 A70 70 0 1 0 260 90.01', 1.2, true) + dot(190, 90, 4) + line('M190 90 V153', 1.8) + dot(190, 160, 7) + arrow(200, 160, 260, 160, 1.8) + LS(266, 164, '4.0 m s⁻¹') +
      LS(196, 125, '0.80 m') + LE(180, 178, '0.50 kg')),
    M81: svg(380, 185, 'Cross-section of a road banked at 20 degrees, with a car on it; the centre of the curve is to the left',
      slope(20) + arrow(120, 60, 50, 60, 1.5) + L(85, 50, 'to centre')),
    M91: svgGraph({
      aria: 'Velocity against time: 20 m/s for the reaction time of 0.60 s, then decreasing uniformly to zero',
      x: { max: 3.6, label: 't / s', ticks: [[0.6, '0.60'], [3.1, '3.1']] }, y: { max: 25, label: 'v / m s⁻¹', ticks: [[20, '20']] },
      lines: [{ pts: [[0, 20], [0.6, 20], [3.1, 0]] }], guides: [[0.6, 0, 0.6, 20]]
    }),
    M92: svg(380, 185, 'A block resting without sliding on a rough plane inclined at 25 degrees', slope(25, { mass: '3.0 kg' })),
    M93: svgGraph({
      aria: 'Velocity of a lift against time: rises to 3.0 m/s in 2.0 s, constant, then falls to zero in 3.0 s',
      x: { max: 12.5, label: 't / s', ticks: [[2, '2.0'], [8, '8.0'], [11, '11.0']] }, y: { max: 4, label: 'v / m s⁻¹', ticks: [[3, '3.0']] },
      lines: [{ pts: [[0, 0], [2, 3], [8, 3], [11, 0]] }], guides: [[2, 0, 2, 3], [8, 0, 8, 3]]
    }),
    M99: svg(380, 185, 'A box pushed up a rough slope at constant speed by a force parallel to the slope', slope(30, { mass: '5.0 kg', up: 'F', down: '10 N' })),
    M102: svgGraph({
      aria: 'Force against displacement: increases uniformly from 10 N to 30 N over 2.0 m',
      x: { max: 2.6, label: 's / m', ticks: [[1, '1.0'], [2, '2.0']] }, y: { max: 36, label: 'F / N', ticks: [[10, '10'], [30, '30']] },
      lines: [{ pts: [[0, 10], [2, 30]] }], guides: [[2, 0, 2, 30], [0, 30, 2, 30]]
    }),

    /* ================= Wave Motion ================= */
    W1: svg(380, 175, 'Top view of straight water waves; adjacent crests are 0.4 m apart',
      line('M30 30 V140', 5) + L(30, 22, '50 Hz') + line(range(70, 320, 5).map(x => `M${r1(x)} 40 V140`).join(' '), 1.6) + dim(120, 155, 170, 155, '0.4 m', null, 170)),
    W5: svg(380, 180, "Young's double-slit set-up with the wavelength, slit separation and slit-to-screen distance marked",
      arrow(20, 95, 95, 95, 1.8) + L(55, 85, '600 nm') + slits(110) + line('M330 30 V160', 3) + LE(102, 122, '0.5 mm') + dim(112, 172, 328, 172, '2.0 m', null, 166)),
    W6: svg(380, 190, 'Light of wavelength 600 nm falling on a diffraction grating, with the central and first-order beams',
      grating(120) + arrow(20, 95, 110, 95, 1.8) + L(60, 85, '600 nm') + ray(120, 95, 0, 200, 1.8) + ray(120, 95, 17.5, 200) + ray(120, 95, -17.5, 200) +
      L(334, 99, '0') + L(330, 35, '1') + L(330, 163, '1') + L(120, 186, '500 mm⁻¹')),
    W7: svg(380, 175, 'An object 15 cm in front of a convex lens of focal length 10 cm',
      line('M20 100 H370', 1.2) + lensV(230, 100, 70) + arrow(95, 100, 95, 65) + fMarks(230, 100, 90) + dim(95, 135, 230, 135, '15 cm', null, 128) + L(320, 40, 'f = 10 cm')),
    W12: svg(400, 150, 'A sound wave shown as compressions and rarefactions; a compression and the nearest rarefaction are 0.85 m apart',
      line(range(8, 392, 64).map(u => r1(u + 10 * Math.sin(2 * Math.PI * u / 100))).map(x => `M${x} 45 V105`).join(' '), 1.5) +
      LE(150, 30, 'compression') + LS(200, 30, 'rarefaction') + line('M150 34 V42 M200 34 V42', 1) + dim(150, 122, 200, 122, '0.85 m', null, 142)),
    W13: svg(380, 195, 'A girl standing 2.0 m in front of a plane mirror walks 0.5 m towards it',
      mirrorV(300, 30, 170) + line('M40 170 H300', 1.5) + person(100, 170) + arrow(115, 115, 165, 115, 1.5) + L(140, 107, '0.5 m') + dim(100, 185, 300, 185, '2.0 m', null, 180)),
    W14: svg(380, 180, 'A ray of light passes from air into glass; the angle of incidence is 50 degrees and the angle of refraction is 30 degrees',
      shade(40, 95, 300, 75) + line('M40 95 H340', 1.5) + dash('M190 18 V172', 1) + line('M121.1 37.1 L190 95 L230 164.3', 2) + arrow(121.1, 37.1, 155, 65.5, 2) +
      LE(178, 64, '50°') + LS(200, 138, '30°') + L(70, 80, 'air') + L(70, 135, 'glass')),
    W17: svg(380, 180, 'An optical fibre: a core of refractive index 1.50 surrounded by cladding of refractive index 1.40, with a ray zig-zagging along the core',
      box(30, 50, 330, 90, 1.5) + shade(30, 72, 330, 46) + line('M30 72 H360 M30 118 H360', 1.5) + line('M30 110 L95 76 L160 114 L225 76 L290 114 L355 80', 1.8) +
      line('M300 100 L318 156', 1) + L(318, 170, 'core, n = 1.50') + line('M250 60 L268 34', 1) + L(268, 26, 'cladding, n = 1.40')),
    W18: svg(380, 175, 'An object 30 cm in front of a convex lens of focal length 20 cm',
      line('M20 100 H370', 1.2) + lensV(230, 100, 70) + arrow(80, 100, 80, 65) + fMarks(230, 100, 100) + dim(80, 135, 230, 135, '30 cm', null, 128) + L(320, 40, 'f = 20 cm')),
    W22: svg(380, 180, 'Two coherent sources and a point P, 12 cm from S1 and 17 cm from S2',
      dot(60, 50, 5) + dot(60, 140, 5) + dot(300, 80, 5) + line('M60 50 L300 80 M60 140 L300 80', 1.2, true) + LE(52, 54, 'S₁') + LE(52, 144, 'S₂') + LS(308, 84, 'P') +
      L(180, 54, '12 cm') + L(180, 130, '17 cm')),
    W24: svg(380, 190, 'A diffraction grating with the second-order maximum at 21.1 degrees from the central maximum',
      grating(120) + arrow(20, 95, 110, 95, 1.8) + ray(120, 95, 0, 200, 1.8) + ray(120, 95, 21.1, 200) +
      L(334, 99, '0') + L(326, 18, '2') + line('M190 95 A70 70 0 0 0 185.3 69.8', 1.2) + LS(196, 84, '21.1°') + L(120, 186, '300 mm⁻¹')),
    W30: svg(380, 185, 'A ship sends an ultrasound pulse down to the sea bed 450 m below',
      line('M20 40 q10 -5 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0', 1.3) + line('M140 40 L150 55 H230 L240 40 Z') + box(165, 25, 40, 15, 1.5) +
      line('M20 170 H360', 3) + line(range(30, 350, 16).map(x => `M${r1(x)} 170 l-8 10`).join(' '), 1) + arrow(180, 60, 180, 165, 1.4) + arrow(200, 165, 200, 60, 1.4) + dim(300, 40, 300, 170, '450 m', 306, 108, { anchor: 'start' })),
    W31: svg(380, 180, 'Two loudspeakers emitting sound in phase, and a point P 4.0 m from one and 4.6 m from the other',
      speaker(60, 60) + speaker(60, 130) + dot(300, 108, 5) + LS(308, 112, 'P') + dash('M74 60 L300 108 M74 130 L300 108', 1.2) + L(190, 72, '4.6 m') + L(190, 136, '4.0 m')),
    W32: svg(380, 175, 'An object 20 cm in front of a convex lens',
      line('M20 100 H370', 1.2) + lensV(230, 100, 70) + arrow(130, 100, 130, 65) + dim(130, 135, 230, 135, '20 cm', null, 128)),
    W33: svg(380, 190, 'A right-angled isosceles glass prism in water; a ray enters a short face normally and meets the long face at 45 degrees',
      `<path d="M20 20 H360 V180 H20 Z M100 40 V160 L220 40 Z" fill="currentColor" fill-opacity="0.1" fill-rule="evenodd"/>` + line('M100 40 V160 L220 40 Z') +
      arrow(30, 80, 95, 80, 1.8) + line('M95 80 H180', 1.8) + dash('M150 50 L215 115', 1) + LS(186, 74, '45°') + L(300, 150, 'water') + L(128, 66, 'glass')),
    W39: svgGraph({
      aria: 'Displacement against time for one particle: one complete oscillation every 0.04 s',
      x: { max: 0.095, label: 't / s', ticks: [[0.02, '0.02'], [0.04, '0.04'], [0.06, '0.06'], [0.08, '0.08']] }, y: { min: -1.5, max: 1.5, label: 'y' },
      lines: [{ f: t => Math.cos(2 * Math.PI * t / 0.04), from: 0, to: 0.08, n: 80 }]
    }),
    W43: svg(380, 192, 'Top view of a ripple tank: wavefronts 1.5 cm apart in the deep region become closer together in the shallow region',
      line(range(40, 160, 4).map(x => `M${r1(x)} 40 V140`).join(' '), 1.6) + line(range(196, 336, 7).map(x => `M${r1(x)} 40 V140`).join(' '), 1.6) + dash('M180 25 V155', 1.2) +
      L(100, 28, 'deep') + L(270, 28, 'shallow') + dim(70, 150, 100, 150, '1.5 cm', null, 168) + L(100, 184, '0.30 m s⁻¹') + L(270, 165, '0.20 m s⁻¹')),
    W44: svg(380, 180, 'Straight water waves travelling towards a straight barrier at an angle',
      line('M40 160 H340', 5) + [0, 1, 2, 3].map(k => { const cx = 90 + k * 24, cy = 40 + k * 24; return line(`M${r1(cx - 25)} ${r1(cy + 25)} L${r1(cx + 25)} ${r1(cy - 25)}`, 1.6); }).join('') + arrow(60, 100, 100, 140, 1.5)),
    W45: svg(380, 180, 'A radio and TV transmitter on one side of a range of hills, with a house in the valley behind them',
      line('M40 170 L50 60 L60 170 M44 120 H56 M42 145 H58', 1.8) + line('M66 70 a14 14 0 0 1 0 22 M72 62 a24 24 0 0 1 0 38', 1.3) +
      line('M100 170 Q170 30 240 170', 2) + line('M20 170 H360', 1.5) + box(285, 145, 30, 25, 1.5) + line('M282 145 L300 130 L318 145', 1.5)),
    W46: svg(380, 180, 'Two dippers vibrating in phase produce overlapping circular waves in a ripple tank',
      dot(150, 30, 5) + dot(230, 30, 5) + line('M150 30 H230', 3) + [150, 230].map(cx => [22, 44, 66, 88, 110, 132].map(rr => `<path d="M${cx - rr} 30 A${rr} ${rr} 0 0 0 ${cx + rr} 30" fill="none" stroke="currentColor" stroke-width="1.1"/>`).join('')).join('')),
    W52: svg(380, 196, 'An electric bell inside a glass bell jar on a base plate connected to a vacuum pump',
      line('M120 160 V80 Q120 30 190 30 Q260 30 260 80 V160') + line('M100 160 H280', 4) + circ(190, 100, 18) + line('M190 118 V130', 1.5) + dot(190, 133, 4) + line('M190 50 V82', 1.5) +
      line('M190 162 V176 H330', 1.5) + L(290, 191, 'to vacuum pump')),
    W57: svg(380, 185, 'A block of flats next to a busy road',
      box(40, 40, 110, 130) + [55, 95].map(x => [55, 95, 135].map(y => box(x, y, 25, 22, 1.2)).join('')).join('') + line('M20 170 H370', 1.5) + dash('M190 150 H370', 1.2) +
      box(250, 120, 70, 18) + line('M262 120 L272 108 H300 L310 120', 1.5) + circ(265, 140, 6, 1.5) + circ(305, 140, 6, 1.5)),
    W63: svg(380, 175, 'A ray reflected from a plane mirror; the mirror is then rotated through 10 degrees',
      line('M100 140 H300', 4) + dash('M101.5 157.4 L298.5 122.6', 1.4) + dash('M200 140 V40', 1) + arrow(100, 40, 150, 90, 1.8) + line('M150 90 L200 140 L300 40', 1.8) + LS(306, 128, '10°')),
    W64: svg(380, 185, 'Looking straight down into a swimming pool 2.0 m deep',
      eye(190, 25) + shade(60, 60, 260, 110) + line('M60 60 H320', 1.5) + line('M60 170 H320', 3) + dash('M190 35 V168', 1) + dash('M60 143 H320', 1.2) +
      dim(340, 60, 340, 170, '2.0 m', 346, 120, { anchor: 'start' }) + LE(55, 147, '?')),
    W66: svg(380, 190, 'A periscope with two right-angled glass prisms; light enters at the top, is turned down, then turned again to the eye',
      line('M150 30 V70 H190 Z M150 130 H190 V170 Z') + box(140, 20, 60, 160, 1) + arrow(40, 50, 145, 50, 1.6) + line('M145 50 H170 V150 H240', 1.6) + arrow(220, 150, 245, 150, 1.6) + eye(262, 150) + arrow(60, 70, 60, 34, 2)),
    W70: svg(380, 175, 'A projector: a lamp, a slide 10.5 cm from a convex lens, and a distant screen (not to scale)',
      circ(40, 95, 14, 1.5) + line('M90 70 V120', 4) + line('M20 95 H360', 1, true) + lensV(174, 95, 50) + line('M360 30 V160', 4) +
      dim(90, 140, 174, 140, '10.5 cm', null, 158) + L(174, 30, 'f = 10 cm') + L(90, 60, 'slide') + L(345, 175, 'screen')),
    W71: svg(380, 175, 'An object 30 cm in front of a concave lens of focal length 20 cm',
      line('M20 100 H370', 1.2) + lensC(230, 100, 60) + arrow(80, 100, 80, 65) + fMarks(230, 100, 100) + dim(80, 135, 230, 135, '30 cm', null, 128) + L(320, 40, 'f = 20 cm')),
    W74: svg(380, 185, "Young's double-slit apparatus immersed in water",
      shade(15, 15, 350, 165) + box(15, 15, 350, 165, 1.2) + arrow(25, 95, 95, 95, 1.8) + slits(110) + line('M330 30 V160', 3) + L(220, 50, 'water')),
    W77: svg(380, 190, 'A diffraction grating; the two first-order maxima are 40 degrees apart',
      grating(120) + arrow(20, 95, 110, 95, 1.8) + L(60, 85, '500 nm') + ray(120, 95, 0, 200, 1.8) + ray(120, 95, 20, 200) + ray(120, 95, -20, 200) +
      line('M176.4 74.5 A60 60 0 0 1 176.4 115.5', 1.2) + LS(184, 99, '40°') + L(330, 26, '1') + L(330, 172, '1')),
    W79: svgGraph({
      aria: 'Displacement against distance: a wave with wavelength 0.40 m', w: 400, h: 125,
      x: { max: 0.9, label: 'x / m', ticks: [[0.2, '0.20'], [0.4, '0.40'], [0.6, '0.60'], [0.8, '0.80']] }, y: { min: -1.5, max: 1.5, label: 'y' },
      lines: [{ f: x => Math.cos(2 * Math.PI * x / 0.4), from: 0, to: 0.8, n: 80 }]
    }) + svgGraph({
      aria: 'Displacement against time for one particle: period 0.020 s', w: 400, h: 125,
      x: { max: 0.045, label: 't / s', ticks: [[0.01, '0.010'], [0.02, '0.020'], [0.03, '0.030'], [0.04, '0.040']] }, y: { min: -1.5, max: 1.5, label: 'y' },
      lines: [{ f: t => Math.cos(2 * Math.PI * t / 0.02), from: 0, to: 0.04, n: 80 }]
    }),
    W81: svgGraph({
      aria: 'Displacement against distance for a wave of wavelength 60 cm, with points P and Q 7.5 cm apart',
      x: { max: 70, label: 'x / cm', ticks: [[30, '30'], [60, '60']] }, y: { min: -1.5, max: 1.5, label: 'y' },
      lines: [{ f: x => Math.cos(2 * Math.PI * x / 60), from: 0, to: 66, n: 80 }], dots: [[0, 1, 'P', 10, -4], [7.5, Math.cos(2 * Math.PI * 7.5 / 60), 'Q', 10, -4]]
    }),
    W83: svg(380, 180, 'A ray passes from medium X into medium Y; it makes 30 degrees with the normal in X and 45 degrees in Y',
      shade(40, 95, 300, 75) + line('M40 95 H340', 1.5) + dash('M190 18 V172', 1) + line('M150 25.7 L190 95 L246.6 151.6', 2) + arrow(150, 25.7, 170, 60.4, 2) +
      LE(182, 64, '30°') + LS(204, 136, '45°') + L(70, 70, 'X', { size: 14, bold: true }) + L(70, 140, 'Y', { size: 14, bold: true })),
    W86: svg(380, 175, 'A convex lens used as a magnifying glass: an object 5.0 cm from a lens of focal length 10 cm, viewed by an eye on the other side',
      line('M20 100 H370', 1.2) + lensV(200, 100, 60) + fMarks(200, 100, 80) + arrow(160, 100, 160, 75) + eye(330, 95) + dim(160, 135, 200, 135, '5.0 cm', null, 152) + L(200, 28, 'f = 10 cm')),
    W88: svg(380, 190, 'A student 85 m from a large wall claps once and hears the echo',
      person(60, 170) + line('M20 170 H330', 1.5) + mirrorV(330, 30, 170) + line('M80 100 a14 14 0 0 1 0 24 M88 92 a24 24 0 0 1 0 40', 1.3) +
      arrow(100, 90, 320, 90, 1.2) + arrow(320, 120, 100, 120, 1.2) + dim(60, 184, 330, 184, '85 m', null, 180)),
    W90: svg(380, 160, 'Two coherent sources and a table of the distances of points P and Q from them',
      dot(40, 50, 5) + dot(40, 110, 5) + LS(52, 54, 'S₁') + LS(52, 114, 'S₂') + line('M130 30 H360 M130 56 H360 M200 30 V130 M280 30 V130', 1) +
      L(165, 49, 'point', { size: 13 }) + L(240, 49, 'S₁ / cm', { size: 13 }) + L(320, 49, 'S₂ / cm', { size: 13 }) +
      [['P', '20', '26'], ['Q', '30', '34.5']].map(([p, a, b], i) => L(165, 82 + i * 30, p, { bold: true, size: 14 }) + L(240, 82 + i * 30, a, { size: 14 }) + L(320, 82 + i * 30, b, { size: 14 })).join('')),
    W94: svg(380, 180, 'A stationary wave on a string between a vibrator and a pulley',
      box(20, 80, 26, 30, 1.5) + L(33, 70, '120 Hz') + pulley(340, 95, 10) + line('M350 95 V150', 1.5) + box(338, 150, 24, 20, 1.5) +
      line(wave(46, 330, 95, 26, 2 * 284 / 3, 0), 1.8) + line(wave(46, 330, 95, -26, 2 * 284 / 3, 0), 1.2, true) + dim(140.7, 140, 235.3, 140, '?', null, 156) + L(190, 30, '48 m s⁻¹')),
    W99: svg(380, 175, 'An object 40 cm in front of a convex lens forms a sharp real image 40 cm behind it',
      line('M20 100 H370', 1.2) + lensV(190, 100, 70) + arrow(50, 100, 50, 65) + arrow(330, 100, 330, 135) + dim(50, 150, 190, 150, '40 cm', null, 144) + dim(190, 160, 330, 160, '40 cm', null, 174)),
    W100: svg(380, 190, 'A person 1.70 m tall standing in front of a vertical plane mirror',
      circ(140, 32, 10) + line('M140 42 V115 M140 115 L128 170 M140 115 L152 170 M140 60 L122 95 M140 60 L158 95', 1.8) + line('M40 170 H330', 1.5) +
      mirrorV(300, 60, 130) + dim(80, 22, 80, 170, '1.70 m', 74, 100, { anchor: 'end' }) + LS(314, 100, '?')),
    W102: svg(380, 170, 'A spring carrying a wave: exactly three complete waves fit into 1.2 m',
      line(wave(40, 340, 85, 25, 100, 0), 1.8) + dim(40, 140, 340, 140, '1.2 m', null, 158) + L(190, 30, '6.0 m s⁻¹')),
    W106: svg(380, 180, 'An ultrasound probe on the skin sends a pulse to the boundary of an organ and receives the echo',
      line('M20 50 Q190 40 360 50', 1.5) + box(165, 20, 50, 28, 1.5) + line('M60 140 Q190 110 320 140', 2) + arrow(180, 55, 180, 120, 1.4) + arrow(200, 120, 200, 55, 1.4) +
      LS(212, 90, '65 μs') + L(80, 175, '1540 m s⁻¹')),

    /* ================= Electricity and Magnetism ================= */
    E5: svg(380, 185, 'Two parallel plates 2 cm apart connected to a 400 V supply, with an electron between them',
      line('M100 40 H300 M100 150 H300', 4) + line('M100 40 H50 V83 M50 97 V150 H100', 1.5) + line('M38 83 H62', 2) + line('M44 97 H56', 4) +
      LS(66, 94, '400 V') + dot(200, 95, 4) + L(200, 85, 'e⁻') + dim(320, 42, 320, 148, '2 cm', 328, 99, { anchor: 'start' })),
    E7: svg(380, 190, 'A straight wire carrying a current at right angles to the magnetic field between two magnetic poles',
      box(40, 50, 50, 90) + L(65, 100, 'N', { size: 14, bold: true }) + box(290, 50, 50, 90) + L(315, 100, 'S', { size: 14, bold: true }) + fieldArrows([65, 125], 92, 288) +
      line('M190 20 V170', 3) + arrow(190, 120, 190, 80, 3) + LS(198, 32, '5 A') + dim(225, 50, 225, 140, '0.2 m', 231, 99, { anchor: 'start' }) + L(190, 186, 'B = 0.3 T')),
    E8: svg(380, 185, 'An ideal transformer with 200 turns on the primary and 20 turns on the secondary, connected to a 220 V a.c. supply and a load',
      line('M120 30 H260 V150 H120 Z M150 60 H230 V120 H150 Z', 2) + coilT(112, true) + coilT(222, false) + line('M112 66 H40 V80 M40 104 V119 H112 M268 64 H340 V75 M340 109 V119 H268', 1.5) +
      acSrc(40, 92) + box(333, 75, 14, 34, 1.5) + arrow(285, 56, 320, 56, 1.4) + L(302, 48, '2 A') + L(135, 170, '200') + L(245, 170, '20') + L(30, 140, '220 V')),
    E9: svg(380, 185, 'A bar magnet falling towards a horizontal copper ring',
      box(178, 25, 24, 64) + shade(178, 57, 24, 32, 0.35) + L(190, 47, 'S') + L(190, 80, 'N') + dash('M190 95 V170', 1.2) + arrow(220, 60, 220, 100, 1.5) +
      `<ellipse cx="190" cy="132" rx="60" ry="14" fill="none" stroke="currentColor" stroke-width="4"/>` + LS(256, 140, 'copper')),
    E14: svg(380, 175, 'A battery of e.m.f. 6.0 V and internal resistance 1.0 ohm connected to a 5.0 ohm resistor',
      `<rect x="125" y="22" width="130" height="36" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>` +
      line('M60 40 H155 M165 40 H200 M240 40 H320 V140 H220 M160 140 H60 V40') + cellH(160, 40) + resH(200, 240, 40) + resH(160, 220, 140) +
      L(160, 76, '6.0 V') + L(220, 76, '1.0 Ω') + L(190, 164, '5.0 Ω')),
    E16: svg(380, 200, 'A 2 ohm resistor and a 4 ohm resistor connected in parallel across a 12 V supply',
      line('M60 40 H185 M195 40 H320 V140 H260 M60 40 V140 H120 M120 110 V170 M260 110 V170 M120 110 H160 M220 110 H260 M120 170 H160 M220 170 H260') + cellH(190, 40) +
      resH(160, 220, 110) + resH(160, 220, 170) + jn(120, 140) + jn(260, 140) + L(190, 24, '12 V') + L(190, 98, '2 Ω') + L(190, 194, '4 Ω')),
    E18: svg(380, 175, 'Charges +Q at X and +4Q at Y, 0.60 m apart',
      line('M30 105 H350', 1) + dot(60, 105, 7) + dot(330, 105, 9) + L(60, 88, '+Q') + L(330, 86, '+4Q') + L(60, 130, 'X', { bold: true }) + L(330, 130, 'Y', { bold: true }) + dim(60, 150, 330, 150, '0.60 m', null, 168)),
    E21: svg(380, 175, 'A long solenoid 0.25 m long with 500 turns carrying a current of 2.0 A',
      box(90, 70, 200, 40, 1.5) + line(range(94, 280, 23).map(x => `M${r1(x)} 64 L${r1(x + 8)} 116`).join(' '), 1.2) + line('M90 110 L70 140 M290 110 L310 140', 1.5) +
      dim(90, 140, 290, 140, '0.25 m', null, 158) + L(190, 50, 'N = 500') + LS(316, 146, '2.0 A')),
    E24: svg(380, 185, 'A metal rod moving at right angles to a uniform magnetic field directed into the page',
      crosses(80, 320, 30, 150, 6) + line('M200 25 V155', 4) + arrow(210, 90, 270, 90, 2) + LS(276, 94, '4.0 m s⁻¹') + dim(178, 25, 178, 155, '0.50 m', 172, 94, { anchor: 'end' }) + L(200, 178, 'B = 0.20 T')),
    E25: svg(380, 185, 'A flat coil with its plane perpendicular to a uniform magnetic field directed into the page',
      crosses(60, 320, 30, 150, 6) + box(140, 50, 100, 80, 3) + L(190, 22, 'N = 200') + L(190, 178, 'A = 0.010 m², B: 0.50 T → 0, 0.10 s')),
    E29: svg(380, 180, 'A power station sends power through cables of total resistance 5.0 ohms to a village',
      box(20, 70, 60, 50) + box(55, 40, 12, 30, 1.5) + line('M80 85 H170 M220 85 H300 M80 105 H300', 1.5) + resH(170, 220, 85) +
      line('M300 120 V95 L318 80 L336 95 V120 Z M336 120 V100 L352 87 L368 100 V120 Z', 1.5) + L(50, 140, '100 kW') + L(50, 158, '10 kV') + L(195, 70, '5.0 Ω')),
    E31: svg(380, 205, 'Two 10 kilo-ohm resistors in series across a 12 V supply, with a 10 kilo-ohm voltmeter across one of them',
      line(loopTop) + cellH(190, 40) + resH(100, 160, 140) + resH(220, 280, 140) + line('M205 140 V175 H239 M261 175 H295 V140') + meter(250, 175, 'V') + jn(205, 140) + jn(295, 140) +
      L(190, 24, '12 V') + L(130, 126, '10 kΩ') + L(250, 126, '10 kΩ') + L(250, 200, '10 kΩ')),
    E32: svg(380, 200, 'A battery connected to a resistor R and an ammeter',
      line('M60 40 H185 M195 40 H320 V79 M320 101 V140 H160 M100 140 H60 V40') + cellH(190, 40) + resH(100, 160, 140) + meter(320, 90, 'A') + L(130, 126, 'R') +
      L(190, 172, 'R = 5.0 Ω: I = 1.0 A') + L(190, 192, 'R = 11 Ω: I = 0.50 A')),
    E33: svg(380, 175, 'An electron enters the field between two parallel plates 5.0 cm long, moving parallel to them',
      line('M80 50 H300 M80 150 H300', 4) + arrow(15, 100, 75, 100, 1.8) + L(40, 90, 'e⁻') + dash('M80 100 H340', 1) + dim(80, 30, 300, 30, '5.0 cm', null, 24) +
      L(190, 128, 'E = 2000 V m⁻¹') + L(46, 125, '2.0 × 10⁷ m s⁻¹', { size: 11 })),
    E34: svg(380, 180, 'Two long parallel wires 0.10 m apart carrying currents of 5.0 A and 10 A in the same direction',
      line('M150 15 V165 M230 15 V165', 3) + arrow(150, 110, 150, 60, 2) + arrow(230, 110, 230, 60, 2) + LE(140, 90, '5.0 A') + LS(240, 90, '10 A') + dim(150, 150, 230, 150, '0.10 m', null, 172)),
    E35: svg(380, 175, 'A 12 V a.c. source connected through leads of total resistance 1.0 ohm to a lamp rated 12 V, 24 W',
      acSrc(50, 95) + line('M50 83 V40 H150 M210 40 H290 V85 M290 105 V150 H50 V107') + resH(150, 210, 40) + lamp(290, 95) +
      LE(34, 99, '12 V') + L(180, 26, '1.0 Ω') + LS(306, 99, '12 V, 24 W')),
    E37: svg(380, 180, 'A rectangular coil being pulled out of a uniform magnetic field directed into the page',
      crosses(40, 145, 30, 150, 4) + dash('M200 20 V160', 1.2) + box(160, 70, 80, 40, 2.5) + arrow(250, 90, 305, 90, 2) + LS(310, 94, '2.0 m s⁻¹') +
      dim(160, 56, 240, 56, '0.20 m', null, 50) + dim(252, 70, 252, 110, '', null, null) + LS(256, 122, '0.10 m') + L(100, 172, 'B = 0.40 T') + L(200, 135, 'N = 50')),
    E39: svg(380, 185, 'A positively charged rod brought near an uncharged metal sphere on an insulating stand',
      box(40, 85, 120, 20) + L(100, 100, '+ + + + + +') + circ(250, 95, 40) + line('M250 135 V172', 4) + line('M220 175 H280', 3)),
    E45: svg(380, 185, 'An electron travelling horizontally into the space between two horizontal plates; the upper plate is positive',
      line('M80 40 H300 M80 150 H300', 4) + LE(72, 45, '+') + LE(72, 155, '−') + arrow(20, 95, 75, 95, 1.8) + L(40, 85, 'e⁻') + dash('M80 95 H340', 1)),
    E51: svg(380, 180, 'A light-dependent resistor in series with a fixed resistor across a battery, with a voltmeter across the fixed resistor',
      line(loopTop) + cellH(190, 40) + resH(100, 160, 140) + circ(130, 140, 36, 1.2) + arrow(80, 92, 104, 116, 1.3) + arrow(96, 84, 120, 108, 1.3) +
      resH(220, 280, 140) + line('M205 140 V170 H239 M261 170 H295 V140') + meter(250, 170, 'V') + jn(205, 140) + jn(295, 140)),
    E52: svg(380, 175, 'A thermistor in series with a lamp and a battery',
      line('M60 40 H185 M195 40 H320 V80 M320 100 V140 H160 M100 140 H60 V40') + cellH(190, 40) + resH(100, 160, 140) + line('M90 156 H100 L168 124', 1.2) + lamp(320, 90)),
    E54: svgGraph({
      aria: 'Terminal p.d. against current for a battery: a straight line from 6.0 V at zero current to zero at 3.0 A',
      x: { max: 3.6, label: 'I / A', ticks: [[1, '1.0'], [2, '2.0'], [3, '3.0']] }, y: { max: 7.5, label: 'V / V', ticks: [[2, '2.0'], [4, '4.0'], [6, '6.0']] },
      lines: [{ pts: [[0, 6], [3, 0]] }]
    }),
    E56: svg(380, 180, 'A 60 W lamp and a 100 W lamp, both rated 220 V, connected in series across a 220 V supply',
      line('M60 40 H178 M202 40 H320 V140 H250 M230 140 H150 M130 140 H60 V40') + acSrc(190, 40) + lamp(140, 140) + lamp(240, 140) +
      L(190, 22, '220 V') + L(140, 166, '220 V, 60 W') + L(240, 166, '220 V, 100 W')),
    E61: svg(380, 180, 'A kettle and a toaster plugged into one adaptor in a 220 V socket',
      box(25, 70, 40, 50) + L(45, 140, '220 V') + line('M65 95 H110', 2) + box(110, 75, 60, 40) + line('M170 85 Q210 85 250 50 M170 105 Q210 105 250 140', 1.5) +
      box(250, 30, 100, 40) + L(300, 55, '1200 W') + box(250, 120, 100, 40) + L(300, 145, '800 W')),
    E64: svg(380, 185, 'A straight wire carrying a current at 30 degrees to a uniform magnetic field',
      fieldArrows([40, 80, 120, 160], 30, 350) + line('M100 150 L273.2 50', 3) + arrow(160, 115.4, 205, 89.4, 3) + line('M140 150 A40 40 0 0 0 134.6 130', 1.2) +
      LS(146, 142, '30°') + LS(230, 66, '4.0 A') + LS(282, 46, '0.50 m') + L(330, 178, 'B = 0.20 T')),
    E80: svg(380, 212, 'A battery with internal resistance connected to lamp L1; a second identical lamp L2 can be connected in parallel by closing a switch',
      `<rect x="125" y="22" width="130" height="36" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>` +
      line('M60 40 H155 M165 40 H200 M240 40 H320 V140 H200 M180 140 H60 V40 M120 140 V180 H140 M160 180 H180 M200 180 H260 V140') + cellH(160, 40) + resH(200, 240, 40) +
      lamp(190, 140) + lamp(190, 180) + line('M140 180 L158 170', 2) + jn(120, 140) + jn(260, 140) + L(190, 124, 'L₁') + L(190, 205, 'L₂')),
    E81: svg(380, 175, 'A 2.0 kilo-ohm resistor and a 4.0 kilo-ohm resistor in series across a 12 V supply',
      line(loopTop) + cellH(190, 40) + resH(100, 160, 140) + resH(220, 280, 140) + L(190, 24, '12 V') + L(130, 164, '2.0 kΩ') + L(250, 164, '4.0 kΩ')),
    E86: svg(380, 185, 'A small charged ball hangs from a thread at 30 degrees to the vertical in a uniform horizontal electric field',
      fieldArrows([60, 100, 140], 40, 340) + line('M150 15 H230', 3) + line('M190 15 L240 101.6', 1.5) + dot(240, 101.6, 8) + dash('M190 15 V120', 1) +
      L(200, 60, '30°', { size: 11 }) + LS(254, 106, '2.0 g') + L(190, 172, 'E = 5.0 × 10⁴ V m⁻¹')),
    E88: svg(380, 200, 'A 3.0 ohm resistor and a 6.0 ohm resistor in parallel across a 12 V supply, with an ammeter in the main circuit',
      line('M60 40 H185 M195 40 H320 V140 H260 M60 40 V79 M60 101 V140 H120 M120 110 V170 M260 110 V170 M120 110 H160 M220 110 H260 M120 170 H160 M220 170 H260') + cellH(190, 40) + meter(60, 90, 'A') +
      resH(160, 220, 110) + resH(160, 220, 170) + jn(120, 140) + jn(260, 140) + L(190, 24, '12 V') + L(190, 98, '3.0 Ω') + L(190, 194, '6.0 Ω')),
    E96: svg(380, 175, 'A cell of e.m.f. 1.5 V and internal resistance 0.50 ohm short-circuited by a thick copper wire',
      `<rect x="125" y="22" width="130" height="36" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>` +
      line('M155 40 H140 M165 40 H200') + line('M240 40 H320 V140 H60 V40 H140', 5) + cellH(160, 40) + resH(200, 240, 40) + L(160, 76, '1.5 V') + L(220, 76, '0.50 Ω') + L(190, 162, 'copper')),
    E101: svg(380, 185, 'A metal rod sliding along two parallel rails joined by a 2.0 ohm resistor, in a uniform vertical magnetic field',
      crosses(90, 150, 75, 125, 2) + crosses(270, 340, 75, 125, 2) + line('M60 60 H350 M60 140 H350', 2) + line('M60 60 V80 M60 120 V140', 2) + resV(60, 80, 120) + LE(48, 104, '2.0 Ω') +
      line('M230 50 V150', 4) + arrow(240, 40, 300, 40, 2) + LS(304, 44, '5.0 m s⁻¹') + dim(215, 60, 215, 140, '0.40 m', 209, 104, { anchor: 'end' }) + L(190, 175, 'B = 0.50 T')),
    E106: svg(380, 180, 'Two identical cells in series with a 4.0 ohm resistor',
      line('M60 40 H145 M155 40 H225 M235 40 H320 V140 H220 M160 140 H60 V40') + cellH(150, 40) + cellH(230, 40) + resH(160, 220, 140) +
      L(150, 72, '1.5 V, 0.50 Ω', { size: 11 }) + L(230, 20, '1.5 V, 0.50 Ω', { size: 11 }) + L(190, 164, '4.0 Ω')),
    E77: svg(380, 185, 'A flat coil seen edge-on, turned through 90 degrees from perpendicular to the field to parallel with it',
      fieldArrows([35, 155], 30, 350) + line('M190 55 V135', 5) + dash('M150 95 H230', 2) + line('M215 62 A40 40 0 0 1 230 92', 1.4) + arrow(229, 86, 230, 94, 1.4) +
      LS(236, 74, '90°') + LS(40, 80, 'N = 50') + LS(40, 100, '0.020 m²') + LS(40, 120, '0.10 s') + LE(345, 100, 'B = 0.60 T')),
    E76: svg(380, 185, 'A copper plate swinging as a pendulum between the poles of a strong magnet',
      line('M150 15 H230', 3) + line('M190 15 V110', 2) + box(165, 110, 50, 40) + shade(165, 110, 50, 40, 0.3) + dash('M120 120 Q190 175 260 120', 1.2) +
      box(110, 105, 30, 50) + L(125, 135, 'N', { bold: true }) + box(240, 105, 30, 50) + L(255, 135, 'S', { bold: true }) + L(190, 178, 'copper')),
    E90: svg(380, 185, 'A strong magnet falling down a long vertical copper tube',
      shade(170, 15, 40, 165, 0.12) + line('M170 15 V180 M210 15 V180', 3) + box(180, 55, 20, 44, 1.5) + L(190, 72, 'N', { size: 11 }) + L(190, 94, 'S', { size: 11 }) + arrow(230, 60, 230, 110, 1.5) + LS(220, 160, 'copper')),
    E98: svg(380, 185, 'A long straight vertical wire carrying a current passes through a horizontal card',
      line('M80 125 L300 125 L340 85 L120 85 Z', 1.8) + line('M210 15 V105', 3) + line('M210 105 V125', 3, true) + line('M210 125 V175', 3) + arrow(210, 70, 210, 30, 3) + LS(218, 40, 'I')),

    /* ================= Radioactivity and Nuclear Energy ================= */
    N1: decayGraph('Activity of a sample against time: 800 Bq at the start, halving every 5 days', 800, 5, 23, 't / days', 'A / Bq', [5, 10, 15, 20], [800, 400, 200]),
    N7: svgGraph({
      aria: 'Count rate against time: falls from 640 to 40 counts per minute in 12 hours',
      x: { max: 14, label: 't / h', ticks: [[12, '12']] }, y: { max: 720, label: 'R / min⁻¹', ticks: [[640, '640'], [40, '40']] },
      lines: [{ f: t => 640 * Math.pow(2, -t / 3), from: 0, to: 13 }], dots: [[0, 640], [12, 40]], guides: [[12, 0, 12, 40]]
    }),
    N10: svg(380, 170, 'A radioactive source in front of a GM tube connected to a counter reading 80 counts per minute', gmSetup('80')),
    N11: svg(380, 170, 'A radioactive source, an absorber and a GM tube connected to a counter',
      gmSetup('') + `<rect x="74" y="62" width="10" height="56" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/>` + L(79, 140, 'absorber')),
    N18: svg(380, 170, 'Paper passing between rollers, with a radioactive source on one side and a detector on the other',
      line('M20 85 H360', 3) + circ(80, 72, 12) + circ(80, 98, 12) + circ(300, 72, 12) + circ(300, 98, 12) + box(175, 120, 30, 25) + box(172, 25, 36, 30) +
      arrow(190, 118, 190, 92, 1.2) + LS(215, 138, 'source') + LS(215, 40, 'detector') + L(340, 112, 'paper')),
    N19: svg(380, 180, 'A patient lying on a bed with a gamma camera above, after a radioactive tracer is injected',
      line('M40 140 H340', 3) + line('M60 140 V170 M320 140 V170', 2) + circ(80, 120, 14) + line('M94 125 Q200 105 310 128 L310 140 H94 Z', 1.8) +
      box(150, 25, 120, 40) + line(range(160, 260, 10).map(x => `M${x} 65 V75`).join(' '), 1) + L(210, 50, 'camera')),
    N25: decayGraph('Mass of a radioactive isotope against time: 64 g at the start, halving every 2 years', 64, 2, 11.5, 't / years', 'm / g', [2, 4, 6, 8, 10], [64, 32, 16]),
    N26: svgGraph({
      aria: 'Carbon-14 activity as a percentage of that in living wood against age, with a dashed line at 12.5 percent',
      x: { max: 21000, label: 'age', ticks: [[5730, '5730'], [11460, '11460'], [17190, '17190']] }, y: { max: 115, label: '%', ticks: [[100, '100'], [50, '50'], [25, '25'], [12.5, '12.5']] },
      lines: [{ f: t => 100 * Math.pow(2, -t / 5730), from: 0, to: 19500, n: 60 }], guides: [[0, 12.5, 19500, 12.5]]
    }),
    N27: svg(380, 180, 'Short, thick, straight tracks of alpha particles fanning out from a source in a cloud chamber',
      `<rect x="22" y="80" width="18" height="20" fill="currentColor"/>` + line(range(-35, 35, 7).map(d => { const a = d * RAD; return `M${r1(40 + 14 * Math.cos(a))} ${r1(90 + 14 * Math.sin(a))} L${r1(40 + 120 * Math.cos(a))} ${r1(90 + 120 * Math.sin(a))}`; }).join(' '), 3.5) +
      L(31, 120, 'source')),
    N31: svgGraph({
      aria: 'Activity against time for nuclides X (half-life 2 hours) and Y (half-life 4 hours), each starting at 800 Bq',
      x: { max: 9, label: 't / h', ticks: [[2, '2'], [4, '4'], [6, '6'], [8, '8']] }, y: { max: 900, label: 'A / Bq', ticks: [[800, '800'], [400, '400'], [200, '200']] },
      lines: [{ f: t => 800 * Math.pow(2, -t / 2), from: 0, to: 8.5 }, { f: t => 800 * Math.pow(2, -t / 4), from: 0, to: 8.5, dash: true }], text: [[2.6, 330, 'X', 'start'], [6.5, 270, 'Y', 'start']]
    }),
    N35: svgGraph({
      aria: 'Measured count rate against time: 340 per minute at the start and 100 per minute after 30 minutes, with a background of 20 per minute',
      x: { max: 50, label: 't / min', ticks: [[30, '30']] }, y: { max: 380, label: 'R / min⁻¹', ticks: [[340, '340'], [100, '100'], [20, '20']] },
      lines: [{ f: t => 20 + 320 * Math.pow(0.25, t / 30), from: 0, to: 46 }], dots: [[0, 340], [30, 100]], guides: [[30, 0, 30, 100], [0, 20, 46, 20]]
    }),
    N37: svgGraph({
      aria: 'Activity of iodine-131 as a fraction of its initial value against time, halving every 8 days, with a dashed line at one-tenth',
      x: { max: 36, label: 't / days', ticks: [[8, '8'], [16, '16'], [24, '24'], [32, '32']] }, y: { max: 1.15, label: 'A / A₀', ticks: [[1, '1'], [0.5, '0.5'], [0.1, '0.1']] },
      lines: [{ f: t => Math.pow(2, -t / 8), from: 0, to: 34, n: 60 }], guides: [[0, 0.1, 34, 0.1]]
    }),
    N45: svg(380, 185, 'A beam of alpha, beta and gamma radiation entering the field between two charged parallel plates',
      line('M100 40 H320 M100 150 H320', 4) + LE(92, 45, '+') + LE(92, 155, '−') + box(20, 85, 24, 20) + arrow(44, 95, 95, 95, 1.8) + L(70, 85, 'α, β, γ', { size: 11 }) + dash('M100 95 H360', 1)),
    N47: svg(380, 190, 'Bar chart of counts recorded in four successive minutes: 152, 139, 147 and 160',
      line('M50 20 V160 H340', 1.5) + [152, 139, 147, 160].map((c, i) => { const h = c * 0.8, x = 80 + i * 65; return box(x, 160 - h, 40, h, 1.5) + shade(x, 160 - h, 40, h, 0.2) + L(x + 20, 154 - h, String(c)) + L(x + 20, 176, String(i + 1)); }).join('') +
      L(195, 190, 't / min', { size: 11 }) + LS(56, 18, 'counts')),
    N51: svg(380, 160, 'A small gamma source with points 1 m and 2 m away',
      dot(50, 80, 6) + line('M56 80 H340', 1, true) + dot(190, 80, 4) + dot(330, 80, 4) + L(190, 70, 'X') + L(330, 70, '?') + dim(50, 110, 190, 110, '1 m', null, 128) + dim(50, 135, 330, 135, '2 m', null, 153)),
    N56: decayGraph('Activity against time: 4000 Bq at the start, halving every 6 hours', 4000, 6, 22, 't / h', 'A / Bq', [6, 12, 18], [4000, 2000, 1000]),
    N57: svgGraph({
      aria: 'Corrected count rate against time: falls from 960 to 240 counts per minute in 40 minutes',
      x: { max: 50, label: 't / min', ticks: [[40, '40']] }, y: { max: 1080, label: 'R / min⁻¹', ticks: [[960, '960'], [240, '240']] },
      lines: [{ f: t => 960 * Math.pow(2, -t / 20), from: 0, to: 46 }], dots: [[0, 960], [40, 240]], guides: [[40, 0, 40, 240], [0, 240, 40, 240]]
    }),
    N61: svg(380, 175, 'A smoke detector: a radioactive source ionizes the air between two plates connected to a battery and a meter',
      line('M120 50 H260 M120 130 H260', 3) + box(110, 80, 12, 20) + L(116, 72, 'source', { size: 11 }) + line('M260 50 H320 V80 M320 100 V130 H260', 1.5) + meter(320, 90, 'A') +
      line('M120 50 H70 V85 M70 95 V130 H120', 1.5) + line('M58 85 H82', 2) + line('M64 95 H76', 4) + line(range(150, 240, 6).map(x => `M${r1(x)} ${r1(70 + (x * 7) % 40)} h3`).join(' '), 1.5)),
    N62: svg(380, 175, 'Sealed packs of syringes on a conveyor belt passing under a radioactive source',
      box(170, 20, 40, 26) + L(190, 37, 'source', { size: 11 }) + line('M190 46 V70 M180 46 L160 75 M200 46 L220 75', 1.2, true) +
      [80, 160, 240].map(x => box(x, 85, 60, 40, 1.5) + line(`M${x + 10} 95 H${x + 50} M${x + 10} 105 H${x + 50} M${x + 10} 115 H${x + 50}`, 1)).join('') +
      line('M40 128 H340 M40 148 H340', 2) + circ(50, 138, 10) + circ(330, 138, 10) + arrow(260, 165, 320, 165, 1.5)),
    N63: svg(380, 180, 'A water pipe buried 1 m underground with a leak; a detector is moved along the surface',
      line('M20 50 H360', 2) + line(range(30, 350, 20).map(x => `M${x} 50 l-8 8`).join(' '), 1) + line('M20 130 H360 M20 150 H360', 2) +
      range(0, 8, 8).map(k => dot(200 + 30 * Math.cos(k * 0.8), 118 - 22 * Math.abs(Math.sin(k * 0.8)), 2.5)).join('') + box(185, 20, 30, 22) + line('M200 42 V50', 1.5) +
      dim(330, 50, 330, 140, '1 m', 336, 99, { anchor: 'start' })),
    N77: svg(380, 175, 'A film badge: film in a holder behind windows of different materials',
      `<rect x="80" y="30" width="220" height="110" rx="8" fill="none" stroke="currentColor" stroke-width="2"/>` + [0, 1, 2, 3].map(i => box(100 + i * 50, 60, 40, 50, 1.5)).join('') +
      shade(150, 60, 40, 50, 0.15) + shade(200, 60, 40, 50, 0.3) + shade(250, 60, 40, 50, 0.55) +
      L(120, 130, 'open window', { size: 9 }) + L(170, 52, 'plastic', { size: 10 }) + L(220, 130, 'aluminium', { size: 10 }) + L(270, 52, 'lead', { size: 10 }) + L(190, 165, 'film')),
    N81: svg(380, 160, 'A gamma source a distance d from a GM tube connected to a counter',
      gmSetup('', true) + dim(60, 140, 110, 140, 'd', null, 156)),
    N88: svgGraph({
      aria: 'Activity as a fraction of its initial value against time, falling to one-eighth after 30 days',
      x: { max: 65, label: 't / days', ticks: [[10, '10'], [20, '20'], [30, '30']] }, y: { max: 1.15, label: 'A / A₀', ticks: [[1, '1'], [0.5, '1/2'], [0.125, '1/8']] },
      lines: [{ f: t => Math.pow(2, -t / 10), from: 0, to: 60, n: 60 }], guides: [[30, 0, 30, 0.125], [0, 0.125, 30, 0.125]]
    }),
    N90: svg(380, 180, 'Alpha and beta particles entering a magnetic field directed into the page are deflected in opposite directions',
      crosses(140, 340, 30, 150, 6) + arrow(20, 90, 138, 90, 1.8) + line('M140 90 A300 300 0 0 0 320 30', 2.2) + line('M140 90 A80 80 0 0 1 215 142.2', 2.2) + LS(326, 32, 'α') + LS(222, 160, 'β')),
    N104: decayGraph('Fraction of tritium remaining against time, halving every 12.3 years', 1, 12.3, 30, 't / years', 'N / N₀', [12.3, 24.6], [1, 0.5, 0.25])
  };

  // Attach each figure to its question.
  const byId = {};
  window.QUESTIONS.forEach(q => { byId[q.id] = q; });
  Object.keys(HFIG).forEach(id => { if (byId[id] && !byId[id].figure) byId[id].figure = HFIG[id]; });
  window.HFIG = HFIG;
})();
