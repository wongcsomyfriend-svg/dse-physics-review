/*
 * Figures for structured questions whose text describes a set-up. SQFIG[id] is an SVG string,
 * attached to the question by id if it has no figure yet. Loaded after the bank/sq-*.js files.
 * Some reuse a figure drawn for a multiple-choice question (window.HFIG) when the numbers match.
 * Any English word drawn in a figure must also be listed in I18N.figure.zh (i18n.js).
 */
(function () {
  'use strict';
  const { r1, range, svg, line, arrow, text, dot, circ, box } = window.draw;
  const H = window.HFIG || {};
  const L = (x, y, t, o) => text(x, y, t, Object.assign({ size: 12 }, o));
  const LS = (x, y, t) => L(x, y, t, { anchor: 'start' });
  const LE = (x, y, t) => L(x, y, t, { anchor: 'end' });
  const shade = (x, y, w, h, op) => `<rect x="${r1(x)}" y="${r1(y)}" width="${r1(w)}" height="${r1(h)}" fill="currentColor" fill-opacity="${op || 0.1}"/>`;
  const dash = (d, w) => line(d, w || 1.2, true);
  const dim = (x1, y1, x2, y2, t, lx, ly, o) => {
    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
    return arrow(mx, my, x1, y1, 1) + arrow(mx, my, x2, y2, 1) + L(lx == null ? mx : lx, ly == null ? my - 6 : ly, t, o);
  };
  const cellH = (x, y) => line(`M${x - 5} ${y - 12} V${y + 12}`, 2) + line(`M${x + 5} ${y - 6} V${y + 6}`, 4);
  const resH = (x1, x2, y) => box(x1, y - 7, x2 - x1, 14);
  const meter = (x, y, t) => circ(x, y, 11) + L(x, y + 4, t, { bold: true });
  const heater = (x, y1, y2) => line(`M${x} ${y1} V${y2 - 22}`, 3) + line(`M${x} ${y2 - 22} l-7 4 l14 4 l-14 4 l14 4 l-7 4`, 1.6);
  const thermo = (x, y1, y2) => line(`M${x} ${y1} V${y2}`, 2.5) + dot(x, y2 + 4, 5);
  const speaker = (x, y) => box(x - 16, y - 10, 12, 20, 1.5) + line(`M${x - 4} ${y - 10} L${x + 10} ${y - 20} V${y + 20} L${x - 4} ${y + 10} Z`, 1.5);
  const cart = (x, y, w, h) => box(x, y - h - 12, w, h) + circ(x + 14, y - 6, 6) + circ(x + w - 14, y - 6, 6);
  const crosses = (x1, x2, y1, y2, n) => line(range(x1, x2, n).flatMap(x => range(y1, y2, n).map(y => `M${r1(x - 4)} ${r1(y - 4)} l8 8 m0 -8 l-8 8`)).join(' '), 1);

  const SQFIG = {
    /* ---------- Heat and Gases ---------- */
    SH01: svg(380, 205, 'An aluminium block with an immersion heater and a thermometer, and the circuit: a 12 V supply, an ammeter in series with the heater and a voltmeter across it',
      box(20, 100, 130, 80) + shade(20, 100, 130, 80, 0.06) + heater(60, 60, 170) + thermo(115, 60, 160) + L(85, 196, 'aluminium') +
      line('M200 40 H275 M285 40 H360 V84 M360 106 V150 H310 M250 150 H200 V40 M240 150 V180 H269 M291 180 H320 V150', 1.5) + cellH(280, 40) + resH(250, 310, 150) +
      meter(360, 95, 'A') + meter(280, 180, 'V') + dot(240, 150, 3) + dot(320, 150, 3) + L(280, 24, '12 V') + L(280, 138, 'heater', { size: 11 })),
    SH02: H.H13 ? H.H13.replace('2.0 kW', '1.20 kW').replace('150 s: −0.12 kg', '') : '',
    SH03: svg(380, 180, 'Ice cubes at 0 degrees being added to water at 25 degrees in an insulated cup',
      line('M120 60 V165 H260 V60', 3) + shade(123, 85, 134, 77) + line('M123 85 H257', 1.2) + box(150, 18, 18, 18, 1.4) + box(178, 26, 18, 18, 1.4) + arrow(176, 48, 176, 75, 1.5) +
      LS(205, 34, '0 °C') + L(190, 130, '0.30 kg, 25 °C')),
    SH04: H.H8 || '',
    SH05: H.H61 || '',
    SH06: svg(380, 175, 'A gas molecule moving at speed u between two opposite walls of a cubical box of side L',
      line('M70 30 H310 V140 H70 Z', 2) + line('M70 30 L100 15 H340 L310 30 M340 15 V125 L310 140', 1.2) + dot(170, 85, 6) + arrow(178, 85, 240, 85, 1.8) +
      L(209, 75, 'u') + L(170, 108, 'm') + dim(70, 158, 310, 158, 'L', null, 152)),
    SH07: svg(380, 190, 'A cylinder of helium gas',
      line('M150 170 V60 Q150 40 170 36 H210 Q230 40 230 60 V170 Z') + box(180, 20, 20, 16, 1.5) + L(190, 110, 'He', { bold: true, size: 15 }) +
      LS(250, 80, '0.050 m³') + LS(250, 106, '1.5 × 10⁶ Pa') + LS(250, 132, '27 °C')),
    SH08: svg(380, 190, 'An open cup of hot tea with a thermometer, losing energy as it cools',
      line('M120 70 L130 165 H250 L260 70', 2.5) + shade(124, 90, 132, 73) + line('M124 90 H256', 1.2) + line('M260 95 q35 0 30 30 q-5 25 -36 22', 2) +
      thermo(170, 30, 140) + line('M200 60 q-8 -10 0 -20 t0 -20 M225 60 q-8 -10 0 -20 t0 -20', 1.3) + L(190, 183, '0.50 kg, 80 °C')),

    /* ---------- Force and Motion ---------- */
    SM02: svg(380, 195, 'A stone thrown horizontally at 12 m/s from a cliff 45 m above the sea',
      box(60, 40, 70, 130) + line('M130 168 q10 -6 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0', 1.3) + dot(130, 32, 6) + arrow(136, 32, 196, 32) + L(166, 22, '12 m s⁻¹') +
      dash('M' + range(130, 330, 30).map(x => r1(x) + ' ' + r1(32 + 136 * ((x - 130) / 200) ** 2)).join(' L'), 1.4) + dim(45, 32, 45, 168, '45 m', 40, 104, { anchor: 'end' })),
    SM03: svg(380, 190, 'A block on a smooth table joined by a string over a pulley to a hanging mass',
      line('M40 90 H262', 3) + line('M60 90 V180 M240 90 V180', 2) + box(110, 50, 80, 40) + L(150, 75, '3.0 kg') + line('M190 70 H270 M280 80 V140', 1.5) +
      circ(270, 80, 10) + dot(270, 80, 2.5) + line('M262 90 L270 80', 1.5) + box(262, 140, 36, 30) + L(280, 160, '1.0 kg', { size: 10 })),
    SM04: svg(380, 160, 'Trolley A moving at 2.5 m/s towards trolley B at rest',
      line('M20 145 H360', 1.5) + cart(40, 145, 100, 40) + cart(220, 145, 100, 40) + L(90, 118, 'A: 0.80 kg') + L(270, 118, 'B: 1.2 kg') + arrow(60, 70, 130, 70) + L(95, 60, '2.5 m s⁻¹')),
    SM05: svg(380, 195, 'A crane lifting a 500 kg load through 20 m',
      line('M60 185 V30 H300 M60 60 L100 30 M300 30 V75', 3) + line('M40 185 H340', 1.5) + box(278, 125, 44, 34) + line('M300 75 V125', 1.5) +
      `<rect x="278" y="35" width="44" height="34" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/>` + L(300, 147, '500 kg', { size: 10 }) +
      dim(345, 159, 345, 69, '20 m', 340, 118, { anchor: 'end' }) + L(180, 110, '25 s')),
    SM06: svg(380, 190, 'Top view of a car going round a flat circular bend of radius 50 m at 15 m/s',
      line('M260 95 A85 85 0 1 0 260 95.01', 1.2, true) + dot(175, 95, 3) + line('M175 95 H253', 1, true) + L(214, 88, '50 m') + box(252, 80, 16, 30) + arrow(260, 78, 260, 40, 1.8) + LS(268, 52, '15 m s⁻¹') + LS(20, 30, '1000 kg')),
    SM07: svg(380, 190, 'A space station in a circular orbit 400 km above the surface of the Earth (not to scale)',
      circ(170, 95, 55) + L(170, 128, 'Earth') + line('M260 95 A90 90 0 1 0 260 95.01', 1.2, true) + dot(260, 95, 5) + dim(225, 95, 260, 95, '', null, null) + LS(266, 99, '400 km') + dash('M170 95 H225', 1) + L(197, 88, '6370 km', { size: 10 })),

    /* ---------- Wave Motion ---------- */
    SW02: H.W14 || '',
    SW03: svg(380, 170, 'An object 4.0 cm tall, 20 cm from a convex lens of focal length 15 cm',
      line('M15 100 H370', 1.2) + line('M230 30 Q244 100 230 170 Q216 100 230 30 Z', 1.8) + arrow(130, 100, 130, 60, 2) + LE(122, 82, '4.0 cm') +
      [155, 305].map(x => line(`M${x} 95 V105`, 1.5) + L(x, 118, 'F')).join('') + dim(130, 140, 230, 140, '20 cm', null, 156) + L(300, 30, 'f = 15 cm')),
    SW04: svg(400, 185, "Young's double-slit set-up with the slit separation, the slit-to-screen distance and the fringe pattern",
      arrow(20, 95, 90, 95, 1.8) + line('M110 30 V88 M110 92 V98 M110 102 V160', 3) + line('M300 25 V165', 3) + LE(102, 122, '0.40 mm') + dim(112, 175, 298, 175, '0.80 m', null, 170) +
      range(-5, 5, 10).map(k => `<rect x="310" y="${r1(95 + 12 * k - 3)}" width="26" height="6" fill="currentColor" fill-opacity="0.5"/>`).join('') +
      dim(350, 35, 350, 155, '', null, null) + LS(356, 99, '12.0 mm')),
    SW05: svg(380, 190, 'White light falling on a diffraction grating spreads into spectra on either side of the central white maximum',
      line('M120 20 V170', 3) + line(range(24, 166, 18).map(y => `M114 ${r1(y)} H126`).join(' '), 1) + arrow(20, 95, 110, 95, 1.8) + L(60, 85, '400–700 nm', { size: 11 }) +
      line('M120 95 H330', 1.8) + [1, -1].map(sg => line(`M120 95 L330 ${95 - sg * 62} M120 95 L330 ${95 - sg * 120}`, 1.2) + `<path d="M330 ${95 - sg * 62} L330 ${95 - sg * 120}" stroke="currentColor" stroke-width="6" stroke-opacity="0.4"/>`).join('') +
      L(120, 186, '500 mm⁻¹')),
    SW06: svg(380, 180, 'A stationary wave with three loops on a string 0.90 m long driven at 60 Hz',
      box(20, 80, 26, 30, 1.5) + L(33, 70, '60 Hz') + line('M330 50 V140', 4) +
      line('M' + range(46, 330, 90).map(x => r1(x) + ' ' + r1(95 - 26 * Math.sin(3 * Math.PI * (x - 46) / 284))).join(' L'), 1.8) +
      line('M' + range(46, 330, 90).map(x => r1(x) + ' ' + r1(95 + 26 * Math.sin(3 * Math.PI * (x - 46) / 284))).join(' L'), 1.2, true) + dim(46, 150, 330, 150, '0.90 m', null, 168)),
    SW07: svg(380, 185, 'A ship sends 40 kHz ultrasound pulses down to the sea bed and detects the echoes',
      line('M20 40 q10 -5 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0', 1.3) + line('M140 40 L150 55 H230 L240 40 Z') + box(165, 25, 40, 15, 1.5) +
      line('M20 170 H360', 3) + line(range(30, 350, 16).map(x => `M${r1(x)} 170 l-8 10`).join(' '), 1) + arrow(180, 60, 180, 165, 1.4) + arrow(200, 165, 200, 60, 1.4) +
      LS(212, 110, '40 kHz') + dim(300, 40, 300, 170, 'd = ?', 306, 108, { anchor: 'start' })),
    SW08: svg(380, 185, 'Two loudspeakers emitting sound in phase, and points P and Q at different distances from them',
      speaker(50, 55) + speaker(50, 135) + dot(290, 70, 4) + dot(300, 125, 4) + LS(298, 66, 'P') + LS(308, 129, 'Q') +
      dash('M64 55 L290 70 M64 135 L290 70', 1) + dash('M64 55 L300 125 M64 135 L300 125', 1) + L(190, 175, '680 Hz')),

    /* ---------- Electricity and Magnetism ---------- */
    SE01: svg(380, 175, 'A battery of e.m.f. 6.0 V connected to a 4.0 ohm resistor and an ammeter',
      `<rect x="125" y="22" width="130" height="36" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/>` +
      line('M60 40 H155 M165 40 H200 M240 40 H320 V79 M320 101 V140 H220 M160 140 H60 V40') + cellH(160, 40) + resH(200, 240, 40) + resH(160, 220, 140) + meter(320, 90, 'A') +
      L(160, 76, '6.0 V') + L(220, 76, 'r') + L(190, 164, '4.0 Ω') + LS(336, 94, '1.2 A')),
    SE02: svg(380, 180, 'An electric kettle with a metal casing connected to the mains by a three-pin plug',
      line('M130 60 H240 L252 150 H118 Z') + line('M150 60 Q185 38 220 60') + line('M240 85 L282 62 L287 68 L246 100') + line('M252 140 H320 V120', 1.5) +
      box(305, 95, 30, 25, 1.5) + line('M313 95 V85 M327 95 V85 M320 120 V128', 2) + L(185, 112, '220 V, 2200 W')),
    SE03: svg(380, 185, 'A charged oil drop held stationary between two horizontal plates 5.0 cm apart connected to a 2000 V supply',
      line('M100 40 H300 M100 150 H300', 4) + line('M100 40 H50 V83 M50 97 V150 H100', 1.5) + line('M38 83 H62', 2) + line('M44 97 H56', 4) +
      LS(66, 94, '2000 V') + dot(200, 95, 5) + L(200, 82, '−3.2 × 10⁻¹⁹ C', { size: 11 }) + dim(320, 42, 320, 148, '5.0 cm', 328, 99, { anchor: 'start' })),
    SE04: svg(380, 190, 'A wire carrying current into the page between magnetic poles; the field points from left to right',
      box(40, 50, 50, 90) + L(65, 100, 'N', { bold: true, size: 14 }) + box(290, 50, 50, 90) + L(315, 100, 'S', { bold: true, size: 14 }) +
      [70, 120].map(y => arrow(92, y, 288, y, 1)).join('') + circ(190, 95, 10) + line('M183 88 L197 102 M197 88 L183 102', 1.8) + L(190, 170, '0.30 T, 2.0 A, 5.0 cm')),
    SE05: svg(380, 185, 'A metal rod sliding along two parallel rails joined by a 1.5 ohm resistor in a uniform vertical magnetic field',
      crosses(90, 150, 75, 125, 2) + crosses(270, 340, 75, 125, 2) + line('M60 60 H350 M60 140 H350', 2) + line('M60 60 V80 M60 120 V140', 2) + box(53, 80, 14, 40) + LE(46, 104, '1.5 Ω') +
      line('M230 50 V150', 4) + arrow(240, 40, 300, 40, 2) + LS(304, 44, '3.0 m s⁻¹') + dim(215, 60, 215, 140, '0.20 m', 209, 104, { anchor: 'end' }) + L(190, 175, 'B = 0.50 T')),
    SE06: svg(380, 180, 'A power station at 11 kV, a step-up transformer to 132 kV, and transmission cables of total resistance 4.0 ohms',
      box(15, 70, 55, 50) + box(48, 40, 12, 30, 1.5) + L(42, 140, '11 kV') + line('M70 95 H100', 1.5) + box(100, 75, 40, 40) + line('M112 75 V115 M128 75 V115', 1.5) +
      line('M140 85 H200 M250 85 H310 M140 105 H310', 1.5) + resH(200, 250, 85) + L(225, 70, '4.0 Ω') + L(120, 140, '132 kV') + L(225, 140, '66 MW') +
      line('M310 120 V95 L328 80 L346 95 V120 Z M346 120 V100 L360 88 L374 100 V120 Z', 1.5)),
    SE07: svgGraph({
      aria: 'Mains voltage against time: a sine wave with peak 311 V and period 20 ms',
      x: { max: 44, label: 't / ms', ticks: [[10, '10'], [20, '20'], [30, '30'], [40, '40']] }, y: { min: -400, max: 400, label: 'V / V', ticks: [[311, '311'], [-311, '−311']] },
      lines: [{ f: t => 311 * Math.cos(2 * Math.PI * t / 20), from: 0, to: 40, n: 120 }]
    }),
    SE08: svg(380, 175, 'A long solenoid 0.40 m long with 800 turns carrying 2.5 A, with a Hall probe inside',
      box(70, 70, 240, 40, 1.5) + line(range(74, 300, 24).map(x => `M${r1(x)} 64 L${r1(x + 8)} 116`).join(' '), 1.2) + line('M70 110 L50 140 M310 110 L330 140', 1.5) +
      line('M190 90 H360', 2) + box(178, 84, 14, 12, 1.5) + dim(70, 140, 310, 140, '0.40 m', null, 158) + L(190, 50, 'N = 800') + LS(336, 146, '2.5 A')),

    /* ---------- Radioactivity and Nuclear Energy ---------- */
    SN01: H.N11 || '',
    SN02: svgGraph({
      aria: 'Plotted points of corrected count rate against time: 800, 566, 400, 283 and 200 per minute at 0, 2, 4, 6 and 8 minutes',
      x: { max: 9.5, label: 't / min', ticks: [2, 4, 6, 8].map(v => [v, String(v)]) }, y: { max: 900, label: 'C / min⁻¹', ticks: [200, 400, 600, 800].map(v => [v, String(v)]) },
      dots: [[0, 800], [2, 566], [4, 400], [6, 283], [8, 200]]
    }),
    SN05: svg(380, 150, 'Fusion of a deuterium nucleus and a tritium nucleus into a helium nucleus and a neutron',
      circ(50, 75, 14) + L(50, 79, '²H', { size: 11 }) + L(80, 80, '+', { size: 16 }) + circ(110, 75, 16) + L(110, 79, '³H', { size: 11 }) + arrow(140, 75, 200, 75, 2) +
      circ(240, 75, 18) + L(240, 79, '⁴He', { size: 11 }) + L(272, 80, '+', { size: 16 }) + dot(305, 75, 7) + L(305, 100, 'n') + LS(320, 79, '+ energy')),
    SN06: svg(380, 190, 'A simplified nuclear reactor: fuel rods, control rods and moderator in the core, with a coolant pipe',
      line('M60 30 H300 V170 H60 Z') + shade(60, 30, 240, 140, 0.08) + [95, 165, 235].map(x => line(`M${x} 170 V70 H${x + 14} V170`, 2)).join('') +
      [130, 200, 270].map(x => `<rect x="${x}" y="12" width="10" height="90" fill="currentColor"/>`).join('') + line('M300 60 H350 M300 140 H350', 6) +
      L(102, 186, 'fuel rod', { size: 11 }) + L(205, 8, 'control rods', { size: 11 }) + L(340, 100, 'coolant', { size: 11 })),
    SN07: H.N19 || ''
  };

  const byId = {};
  (window.STRUCTURED || []).forEach(q => { byId[q.id] = q; });
  Object.keys(SQFIG).forEach(id => { if (SQFIG[id] && byId[id] && !byId[id].figure) byId[id].figure = SQFIG[id]; });
  window.SQFIG = SQFIG;
})();
