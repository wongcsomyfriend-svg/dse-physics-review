/*
 * Graph-reading template families: the data needed for each variant is read from its graph,
 * as in HKDSE questions. Ids look like GH01-03: G + topic letter + family number + variant number.
 * Each spec has figure(p) drawing that variant's graph (see template() in bank/core.js).
 */
(function () {
  'use strict';
  const F = (x, sf) => fmt(x, sf || 3);
  const { r1, range, svg, line, text } = window.draw;
  const deg = r => r * 180 / Math.PI;
  const nice = v => String(+v.toPrecision(4));
  const tk = vs => vs.map(v => [v, nice(v)]);

  /* ================= Heat and Gases ================= */

  template({
    family: 'GH01', topic: 'heat', level: 3, sub: ['Specific heat capacity', '比熱容量'], unit: ' J kg⁻¹ °C⁻¹',
    params: [[50, 0.5, 20, 50, 600], [100, 0.8, 20, 40, 400], [60, 0.3, 25, 55, 480], [200, 1.0, 20, 44, 500], [150, 0.6, 18, 48, 480],
      [80, 0.4, 22, 52, 600], [120, 0.5, 20, 36, 300], [250, 1.2, 15, 45, 600], [90, 0.25, 20, 60, 500], [40, 0.2, 25, 45, 450]]
      .map(([P, m, th0, th1, t1]) => ({ P, m, th0, th1, t1 })),
    figure: p => svgGraph({
      aria: `Temperature against time: a straight line from ${p.th0} degrees at t = 0 to ${p.th1} degrees at ${p.t1} s`,
      x: { max: p.t1 * 1.3, label: 't / s', ticks: tk([p.t1 / 2, p.t1]) }, y: { max: p.th1 * 1.25, label: 'θ / °C', ticks: tk([p.th0, p.th1]) },
      lines: [{ pts: [[0, p.th0], [p.t1 * 1.15, p.th0 + 1.15 * (p.th1 - p.th0)]] }], guides: [[p.t1, 0, p.t1, p.th1], [0, p.th1, p.t1, p.th1]]
    }),
    build: p => {
      const d = p.th1 - p.th0, E = p.P * p.t1, c = E / (p.m * d);
      return {
        answer: c, wrong: [E / (p.m * p.th1), E / 60 / (p.m * d), E * p.m / d],
        stem: [`A ${p.P} W immersion heater is used to heat ${p.m} kg of a liquid. The graph shows how the temperature θ of the liquid varies with time t. Assuming no energy is lost, what is the specific heat capacity of the liquid?`,
          `用一個 ${p.P} W 的浸沒式電熱器加熱 ${p.m} kg 的液體。下圖顯示液體溫度 θ 隨時間 t 的變化。假設沒有能量散失，液體的比熱容量是多少？`],
        explain: [`From the graph, the temperature rises from ${p.th0} °C to ${p.th1} °C (Δθ = ${d} °C) in ${p.t1} s.<br>E = Pt = ${p.P} × ${p.t1} = ${F(E)} J.<br>c = E / (mΔθ) = ${F(E)} / (${p.m} × ${d}) = ${F(c)} J kg⁻¹ °C⁻¹.<br>Use the temperature rise, not the final temperature.`,
          `從線圖可見，溫度在 ${p.t1} s 內由 ${p.th0} °C 升至 ${p.th1} °C（Δθ = ${d} °C）。<br>E = Pt = ${p.P} × ${p.t1} = ${F(E)} J。<br>c = E / (mΔθ) = ${F(E)} / (${p.m} × ${d}) = ${F(c)} J kg⁻¹ °C⁻¹。<br>要用溫度的上升值，而非最終溫度。`]
      };
    }
  });

  template({
    family: 'GH02', topic: 'heat', level: 3, sub: ['Latent heat', '潛熱'], unit: ' J kg⁻¹',
    params: [[100, 0.2, 2, 12, 80], [50, 0.1, 3, 13, 54], [200, 0.5, 1, 15, 62], [150, 0.3, 2, 10, 44], [120, 0.25, 1, 9, 80],
      [60, 0.08, 2, 10, 54], [250, 0.6, 2, 14, 70], [80, 0.15, 1, 11, 62], [300, 0.9, 3, 18, 80], [100, 0.12, 2, 8, 44]]
      .map(([P, m, t1, t2, th]) => ({ P, m, t1, t2, th })),
    figure: p => {
      const t3 = p.t2 + (p.t2 - p.t1) * 0.35;
      return svgGraph({
        aria: `Temperature against time: rises to ${p.th} degrees at ${p.t1} minutes, stays constant until ${p.t2} minutes, then rises again`,
        x: { max: t3 * 1.15, label: 't / min', ticks: tk([p.t1, p.t2]) }, y: { max: p.th + 35, label: 'θ / °C', ticks: tk([p.th]) },
        lines: [{ pts: [[0, p.th - 25], [p.t1, p.th], [p.t2, p.th], [t3, p.th + 18]] }], guides: [[p.t1, 0, p.t1, p.th], [p.t2, 0, p.t2, p.th]]
      });
    },
    build: p => {
      const dt = p.t2 - p.t1, E = p.P * dt * 60, L = E / p.m;
      return {
        answer: L, wrong: [p.P * dt / p.m, p.P * p.t2 * 60 / p.m, p.P * p.t1 * 60 / p.m],
        stem: [`A ${p.P} W heater is used to heat ${p.m} kg of a solid until it has completely melted. The graph shows how the temperature θ of the substance varies with time t. Assuming no energy is lost, what is the specific latent heat of fusion of the substance?`,
          `用一個 ${p.P} W 的電熱器加熱 ${p.m} kg 的固體，直至它完全熔化。下圖顯示物質溫度 θ 隨時間 t 的變化。假設沒有能量散失，該物質的熔解比潛熱是多少？`],
        explain: [`The substance melts while the temperature stays constant: from ${p.t1} min to ${p.t2} min, i.e. ${dt} min = ${dt * 60} s.<br>Energy supplied while melting = ${p.P} × ${dt * 60} = ${F(E)} J.<br>ℓ = E / m = ${F(E)} / ${p.m} = ${F(L)} J kg⁻¹.`,
          `物質在溫度不變期間熔化：由 ${p.t1} min 至 ${p.t2} min，即 ${dt} min = ${dt * 60} s。<br>熔化期間供應的能量 = ${p.P} × ${dt * 60} = ${F(E)} J。<br>ℓ = E / m = ${F(E)} / ${p.m} = ${F(L)} J kg⁻¹。`]
      };
    }
  });

  template({
    family: 'GH03', topic: 'heat', level: 2, sub: ["Boyle's law", '波義耳定律'], unit: ' kPa',
    params: [[100, 120, 40], [200, 90, 60], [150, 100, 50], [50, 200, 20], [300, 80, 100], [120, 150, 48], [250, 100, 80], [80, 250, 32], [400, 60, 150], [160, 110, 40]]
      .map(([V1, p1, V2]) => ({ V1, p1, V2 })),
    figure: p => svgGraph({
      aria: `Pressure against volume at constant temperature: a curve through ${p.V1} cubic centimetres and ${p.p1} kPa`,
      x: { max: p.V1 * 1.7, label: 'V / cm³', ticks: tk([p.V1]) }, y: { max: p.p1 * 3.6, label: 'p / kPa', ticks: tk([p.p1]) },
      lines: [{ f: V => p.p1 * p.V1 / V, from: p.V1 * 0.3, to: p.V1 * 1.6, n: 50 }], dots: [[p.V1, p.p1]], guides: [[p.V1, 0, p.V1, p.p1], [0, p.p1, p.V1, p.p1]]
    }),
    build: p => {
      const p2 = p.p1 * p.V1 / p.V2;
      return {
        answer: p2, wrong: [p.p1 * p.V2 / p.V1, p.p1 * p.V1 / (p.V1 - p.V2), p.p1 + (p.V1 - p.V2)],
        stem: [`The graph shows how the pressure p of a fixed mass of gas varies with its volume V at constant temperature. What is the pressure of the gas when its volume is ${p.V2} cm³?`,
          `下圖顯示一定質量的氣體在溫度不變時，壓強 p 隨體積 V 的變化。氣體體積為 ${p.V2} cm³ 時，其壓強是多少？`],
        explain: [`Read a point from the graph: ${p.p1} kPa at ${p.V1} cm³.<br>Boyle's law: p₁V₁ = p₂V₂ ⇒ p₂ = ${p.p1} × ${p.V1} / ${p.V2} = ${F(p2)} kPa.`,
          `從線圖讀取一點：${p.V1} cm³ 時為 ${p.p1} kPa。<br>波義耳定律：p₁V₁ = p₂V₂ ⇒ p₂ = ${p.p1} × ${p.V1} / ${p.V2} = ${F(p2)} kPa。`]
      };
    }
  });

  /* ================= Force and Motion ================= */

  template({
    family: 'GM01', topic: 'force', level: 2, sub: ['Motion graphs', '運動線圖'], unit: ' m',
    params: [[10, 4, 10, 14], [20, 5, 15, 20], [8, 2, 8, 12], [12, 3, 9, 15], [15, 5, 12, 16], [6, 2, 10, 13], [25, 5, 10, 20], [16, 4, 12, 14], [30, 6, 16, 20], [9, 3, 7, 13]]
      .map(([v, t1, t2, t3]) => ({ v, t1, t2, t3 })),
    figure: p => svgGraph({
      aria: `Velocity against time: rises from 0 to ${p.v} m/s in ${p.t1} s, constant until ${p.t2} s, falls to 0 at ${p.t3} s`,
      x: { max: p.t3 * 1.15, label: 't / s', ticks: tk([p.t1, p.t2, p.t3]) }, y: { max: p.v * 1.3, label: 'v / m s⁻¹', ticks: tk([p.v]) },
      lines: [{ pts: [[0, 0], [p.t1, p.v], [p.t2, p.v], [p.t3, 0]] }], guides: [[p.t1, 0, p.t1, p.v], [p.t2, 0, p.t2, p.v], [0, p.v, p.t1, p.v]]
    }),
    build: p => {
      const a = p.v * p.t1 / 2, b = p.v * (p.t2 - p.t1), c = p.v * (p.t3 - p.t2) / 2, s = a + b + c;
      return {
        answer: s, wrong: [p.v * p.t3, p.v * p.t3 / 2, b],
        stem: [`The graph shows how the velocity v of a car moving along a straight road varies with time t. What is the total distance travelled by the car?`,
          `下圖顯示一輛沿直路行駛的汽車的速度 v 隨時間 t 的變化。汽車行走的總距離是多少？`],
        explain: [`Distance = area under the v–t graph.<br>0–${p.t1} s: ½ × ${p.t1} × ${p.v} = ${F(a)} m.<br>${p.t1}–${p.t2} s: ${p.t2 - p.t1} × ${p.v} = ${F(b)} m.<br>${p.t2}–${p.t3} s: ½ × ${p.t3 - p.t2} × ${p.v} = ${F(c)} m.<br>Total = ${F(s)} m.`,
          `距離 = v–t 線圖下的面積。<br>0–${p.t1} s：½ × ${p.t1} × ${p.v} = ${F(a)} m。<br>${p.t1}–${p.t2} s：${p.t2 - p.t1} × ${p.v} = ${F(b)} m。<br>${p.t2}–${p.t3} s：½ × ${p.t3 - p.t2} × ${p.v} = ${F(c)} m。<br>總距離 = ${F(s)} m。`]
      };
    }
  });

  template({
    family: 'GM02', topic: 'force', level: 3, sub: ['Elastic potential energy', '彈性勢能'], unit: ' J',
    params: [[10, 5, 3], [20, 8, 4], [6, 3, 2], [15, 10, 6], [8, 4, 4], [12, 6, 3], [25, 5, 2], [30, 12, 8], [5, 2, 1.5], [18, 9, 6]]
      .map(([F1, x1, x2]) => ({ F1, x1, x2 })),
    figure: p => svgGraph({
      aria: `Force against extension for a spring: a straight line through the origin and ${p.F1} N at ${p.x1} cm`,
      x: { max: p.x1 * 1.4, label: 'x / cm', ticks: tk([p.x1]) }, y: { max: p.F1 * 1.4, label: 'F / N', ticks: tk([p.F1]) },
      lines: [{ pts: [[0, 0], [p.x1 * 1.25, p.F1 * 1.25]] }], dots: [[p.x1, p.F1]], guides: [[p.x1, 0, p.x1, p.F1], [0, p.F1, p.x1, p.F1]]
    }),
    build: p => {
      const k = p.F1 / (p.x1 / 100), x = p.x2 / 100, E = 0.5 * k * x * x;
      return {
        answer: E, wrong: [k * x * x, 0.5 * k * p.x2 * p.x2, 0.5 * p.F1 * p.x1 / 100],
        stem: [`The graph shows how the force F needed to stretch a spring varies with its extension x. How much elastic potential energy is stored in the spring when its extension is ${p.x2} cm?`,
          `下圖顯示拉伸一條彈簧所需的力 F 隨其伸長 x 的變化。彈簧伸長 ${p.x2} cm 時，儲存了多少彈性勢能？`],
        explain: [`Spring constant k = gradient = ${p.F1} / ${F(p.x1 / 100)} = ${F(k)} N m⁻¹.<br>At x = ${p.x2} cm = ${F(x)} m, energy = area under the graph = ½kx² = ½ × ${F(k)} × ${F(x)}² = ${F(E)} J.<br>Change cm to m first.`,
          `彈簧常數 k = 斜率 = ${p.F1} / ${F(p.x1 / 100)} = ${F(k)} N m⁻¹。<br>在 x = ${p.x2} cm = ${F(x)} m 時，能量 = 線圖下的面積 = ½kx² = ½ × ${F(k)} × ${F(x)}² = ${F(E)} J。<br>先把 cm 轉換為 m。`]
      };
    }
  });

  template({
    family: 'GM03', topic: 'force', level: 3, sub: ['Impulse', '衝量'], unit: ' m s⁻¹',
    params: [[0.05, 100, 4], [0.1, 200, 6], [0.2, 500, 4], [0.06, 150, 2], [0.4, 800, 5], [0.15, 300, 3], [0.5, 1000, 6], [0.08, 160, 5], [0.3, 900, 4], [0.045, 90, 10]]
      .map(([m, Fp, te]) => ({ m, Fp, te })),
    figure: p => svgGraph({
      aria: `Force against time: a triangle rising to ${p.Fp} N at ${p.te / 2} ms and falling to zero at ${p.te} ms`,
      x: { max: p.te * 1.3, label: 't / ms', ticks: tk([p.te / 2, p.te]) }, y: { max: p.Fp * 1.3, label: 'F / N', ticks: tk([p.Fp]) },
      lines: [{ pts: [[0, 0], [p.te / 2, p.Fp], [p.te, 0]] }], guides: [[0, p.Fp, p.te / 2, p.Fp]]
    }),
    build: p => {
      const J = 0.5 * p.Fp * p.te / 1000, v = J / p.m;
      return {
        answer: v, wrong: [2 * v, 0.5 * p.Fp * p.te / p.m, J * p.m],
        stem: [`A ball of mass ${p.m} kg at rest is hit by a bat. The graph shows how the force F on the ball varies with time t during the impact. With what speed does the ball leave the bat?`,
          `一個質量為 ${p.m} kg 的靜止球被球棒擊打。下圖顯示撞擊期間球所受的力 F 隨時間 t 的變化。球離開球棒時的速率是多少？`],
        explain: [`Impulse = area under the F–t graph = ½ × ${p.te} × 10⁻³ × ${p.Fp} = ${F(J)} N s.<br>Impulse = change in momentum: ${F(J)} = ${p.m} × v ⇒ v = ${F(v)} m s⁻¹.`,
          `衝量 = F–t 線圖下的面積 = ½ × ${p.te} × 10⁻³ × ${p.Fp} = ${F(J)} N s。<br>衝量 = 動量的改變：${F(J)} = ${p.m} × v ⇒ v = ${F(v)} m s⁻¹。`]
      };
    }
  });

  /* ================= Wave Motion ================= */

  template({
    family: 'GW01', topic: 'wave', level: 2, sub: ['Wave equation', '波動方程'], unit: ' m s⁻¹',
    params: [[5, 20, 3], [10, 8, 2], [4, 50, 5], [20, 6, 1], [2, 40, 4], [50, 4, 1.5], [8, 15, 2], [3, 60, 6], [25, 12, 2], [12, 30, 3]]
      .map(([f, l, A]) => ({ f, l, A })),
    figure: p => svgGraph({
      aria: `Displacement against distance for a wave of wavelength ${p.l} cm and amplitude ${p.A} cm`,
      x: { max: p.l * 2.2, label: 'x / cm', ticks: tk([p.l / 2, p.l, 1.5 * p.l, 2 * p.l]) }, y: { min: -p.A * 1.5, max: p.A * 1.5, label: 'y / cm', ticks: [[p.A, nice(p.A)], [-p.A, '−' + nice(p.A)]] },
      lines: [{ f: x => p.A * Math.cos(2 * Math.PI * x / p.l), from: 0, to: 2 * p.l, n: 80 }]
    }),
    build: p => {
      const lm = p.l / 100, v = p.f * lm;
      return {
        answer: v, wrong: [v / 2, 2 * v, p.f * p.l, lm / p.f],
        stem: [`The graph shows the displacement y of the particles of a transverse wave against distance x at one instant. The frequency of the wave is ${p.f} Hz. What is the speed of the wave?`,
          `下圖顯示某一刻橫波中質點的位移 y 對距離 x 的關係。波的頻率是 ${p.f} Hz。波速是多少？`],
        explain: [`One complete wave (crest to crest) spans ${p.l} cm, so λ = ${F(lm)} m.<br>v = fλ = ${p.f} × ${F(lm)} = ${F(v)} m s⁻¹.`,
          `一個完整的波（波峰至波峰）跨越 ${p.l} cm，所以 λ = ${F(lm)} m。<br>v = fλ = ${p.f} × ${F(lm)} = ${F(v)} m s⁻¹。`]
      };
    }
  });

  template({
    family: 'GW02', topic: 'wave', level: 2, sub: ['Wave equation', '波動方程'], unit: ' m s⁻¹',
    params: [[20, 0.5], [5, 0.1], [40, 1.2], [2, 0.68], [10, 3.4], [25, 0.8], [4, 1.36], [50, 2], [8, 0.2], [16, 4.8]].map(([T, l]) => ({ T, l })),
    figure: p => svgGraph({
      aria: `Displacement against time for one particle: a wave with period ${p.T} ms`,
      x: { max: p.T * 2.2, label: 't / ms', ticks: tk([p.T / 2, p.T, 1.5 * p.T, 2 * p.T]) }, y: { min: -3, max: 3, label: 'y / mm', ticks: [[2, '2'], [-2, '−2']] },
      lines: [{ f: t => 2 * Math.cos(2 * Math.PI * t / p.T), from: 0, to: 2 * p.T, n: 80 }]
    }),
    build: p => {
      const Ts = p.T / 1000, v = p.l / Ts;
      return {
        answer: v, wrong: [p.l * Ts, 2 * v, p.l / p.T],
        stem: [`The graph shows how the displacement y of one particle in a wave varies with time t. The wavelength of the wave is ${p.l} m. What is the speed of the wave?`,
          `下圖顯示波中一粒質點的位移 y 隨時間 t 的變化。波長是 ${p.l} m。波速是多少？`],
        explain: [`One complete oscillation takes T = ${p.T} ms = ${F(Ts)} s, so f = 1/T = ${F(1 / Ts)} Hz.<br>v = fλ = λ/T = ${p.l} / ${F(Ts)} = ${F(v)} m s⁻¹.`,
          `完成一次全振動需時 T = ${p.T} ms = ${F(Ts)} s，所以 f = 1/T = ${F(1 / Ts)} Hz。<br>v = fλ = λ/T = ${p.l} / ${F(Ts)} = ${F(v)} m s⁻¹。`]
      };
    }
  });

  template({
    family: 'GW03', topic: 'wave', level: 4, sub: ['Total internal reflection', '全內反射'], unit: '°',
    params: [1.25, 1.33, 1.4, 1.5, 1.6, 1.75, 1.8, 2.0, 1.45, 1.55].map(n => ({ n })),
    figure: p => {
      const si = +(0.4 * p.n).toFixed(3), xm = Math.min(0.6, 0.95 / p.n);
      return svgGraph({
        aria: `sin i against sin r: a straight line through the origin and the point sin r = 0.4, sin i = ${si}`,
        x: { max: 0.68, label: 'sin r', ticks: [[0.2, '0.2'], [0.4, '0.4'], [0.6, '0.6']] }, y: { max: 1.05, label: 'sin i', ticks: [[si, nice(si)], [1, '1.0']] },
        lines: [{ pts: [[0, 0], [xm, xm * p.n]] }], dots: [[0.4, si]], guides: [[0.4, 0, 0.4, si], [0, si, 0.4, si]]
      });
    },
    build: p => {
      const si = 0.4 * p.n, C = deg(Math.asin(1 / p.n));
      return {
        answer: C, wrong: [deg(Math.atan(1 / p.n)), 90 - C, deg(Math.asin(0.4)), deg(Math.asin(si / 2))],
        stem: [`Light travels from air into a transparent material. The graph shows sin i against sin r, where i is the angle of incidence and r is the angle of refraction. What is the critical angle of the material?`,
          `光由空氣射入一種透明物料。下圖顯示 sin i 對 sin r 的關係，其中 i 是入射角，r 是折射角。該物料的臨界角是多少？`],
        explain: [`The gradient of the graph is the refractive index: n = sin i / sin r = ${nice(si)} / 0.4 = ${p.n}.<br>sin C = 1/n = 1/${p.n} ⇒ C = ${F(C)}°.`,
          `線圖的斜率是折射率：n = sin i / sin r = ${nice(si)} / 0.4 = ${p.n}。<br>sin C = 1/n = 1/${p.n} ⇒ C = ${F(C)}°。`]
      };
    }
  });

  /* ================= Electricity and Magnetism ================= */

  template({
    family: 'GE01', topic: 'elec', level: 3, sub: ['I–V characteristics', 'I–V 特性'], unit: ' Ω',
    params: [[6, 0.3], [12, 0.5], [2, 0.2], [3, 0.25], [9, 0.6], [4, 0.8], [12, 2], [6, 1.5], [2.5, 0.5], [24, 1.2]].map(([V1, I1]) => ({ V1, I1 })),
    figure: p => svgGraph({
      aria: `Current against voltage for a filament lamp: a curve whose gradient decreases, passing through ${p.V1} V and ${p.I1} A`,
      x: { max: p.V1 * 1.45, label: 'V / V', ticks: tk([p.V1]) }, y: { max: p.I1 * 1.4, label: 'I / A', ticks: tk([p.I1]) },
      lines: [{ f: V => p.I1 * Math.pow(V / p.V1, 0.6), from: 0, to: p.V1 * 1.3, n: 60 }], dots: [[p.V1, p.I1]], guides: [[p.V1, 0, p.V1, p.I1], [0, p.I1, p.V1, p.I1]]
    }),
    build: p => {
      const R = p.V1 / p.I1;
      return {
        answer: R, wrong: [R / 0.6, p.I1 / p.V1, p.V1 * p.I1],
        stem: [`The graph shows the I–V characteristic of a filament lamp. What is the resistance of the lamp when the potential difference across it is ${p.V1} V?`,
          `下圖顯示燈絲燈泡的 I–V 特性。燈泡兩端的電勢差為 ${p.V1} V 時，其電阻是多少？`],
        explain: [`At ${p.V1} V the graph gives I = ${p.I1} A.<br>R = V / I = ${p.V1} / ${p.I1} = ${F(R)} Ω.<br>Use the ratio V/I at that point, not the gradient of the curve.`,
          `在 ${p.V1} V 時，線圖顯示 I = ${p.I1} A。<br>R = V / I = ${p.V1} / ${p.I1} = ${F(R)} Ω。<br>要用該點的 V/I 比值，而非曲線的斜率。`]
      };
    }
  });

  template({
    family: 'GE02', topic: 'elec', level: 3, sub: ['Internal resistance', '內阻'], unit: ' Ω',
    params: [[1.5, 0.5, 1], [3, 1, 1.2], [6, 2, 1], [9, 1.5, 2], [4.5, 0.5, 3], [12, 0.8, 5], [1.5, 1.25, 0.4], [2, 0.4, 2.5], [6, 0.6, 4], [3, 2.5, 0.6]]
      .map(([E, r, I1]) => ({ E, r, I1 })),
    figure: p => {
      const V1 = +(p.E - p.r * p.I1).toFixed(3);
      return svgGraph({
        aria: `Terminal voltage against current: a straight line falling from ${p.E} V at zero current to ${V1} V at ${p.I1} A`,
        x: { max: p.I1 * 1.45, label: 'I / A', ticks: tk([p.I1]) }, y: { max: p.E * 1.3, label: 'V / V', ticks: tk([p.E, V1]) },
        lines: [{ pts: [[0, p.E], [p.I1 * 1.3, p.E - p.r * p.I1 * 1.3]] }], dots: [[p.I1, V1]], guides: [[p.I1, 0, p.I1, V1], [0, V1, p.I1, V1]]
      });
    },
    build: p => {
      const V1 = p.E - p.r * p.I1;
      return {
        answer: p.r, wrong: [V1 / p.I1, p.E / p.I1, (p.E - V1) * p.I1],
        stem: [`The graph shows how the terminal voltage V of a cell varies with the current I it supplies. What is the internal resistance of the cell?`,
          `下圖顯示一個電池的端電壓 V 如何隨其供應的電流 I 改變。電池的內阻是多少？`],
        explain: [`V = ε − Ir. At I = 0, V = ε = ${p.E} V. At I = ${p.I1} A, V = ${nice(V1)} V.<br>r = (ε − V) / I = (${p.E} − ${nice(V1)}) / ${p.I1} = ${F(p.r)} Ω, the magnitude of the gradient.`,
          `V = ε − Ir。在 I = 0 時，V = ε = ${p.E} V。在 I = ${p.I1} A 時，V = ${nice(V1)} V。<br>r = (ε − V) / I = (${p.E} − ${nice(V1)}) / ${p.I1} = ${F(p.r)} Ω，即斜率的大小。`]
      };
    }
  });

  template({
    family: 'GE03', topic: 'elec', level: 2, sub: ['Alternating current', '交流電'], unit: ' Hz',
    params: [[1, 4], [2, 5], [5, 4], [0.5, 2.5], [10, 5], [0.2, 4], [2, 2.5], [20, 4], [0.1, 5], [5, 2]].map(([tb, k]) => ({ tb, k })),
    figure: p => {
      const s = 24, x0 = 30, y0 = 10, cy = y0 + 4 * s;
      const grid = range(0, 10, 10).map(i => `M${x0 + i * s} ${y0} V${y0 + 8 * s}`).join(' ') + ' ' + range(0, 8, 8).map(j => `M${x0} ${y0 + j * s} H${x0 + 10 * s}`).join(' ');
      const wave = 'M' + range(0, 10, 200).map(d => r1(x0 + d * s) + ' ' + r1(cy - 2.5 * s * Math.sin(2 * Math.PI * d / p.k))).join(' L');
      return svg(300, 226, `CRO screen with a grid of 10 by 8 divisions showing a sine wave whose period is ${p.k} divisions`,
        line(grid, 0.6) + line(`M${x0} ${cy} H${x0 + 10 * s} M${x0 + 5 * s} ${y0} V${y0 + 8 * s}`, 1.2) + line(wave, 2.2) + text(150, 221, `${p.tb} ms div⁻¹`, { size: 12 }));
    },
    build: p => {
      const T = p.k * p.tb / 1000, f = 1 / T;
      return {
        answer: f, wrong: [1000 / p.tb, 1 / (p.k * p.tb), f / 2, 2 * f],
        stem: [`The trace shows an a.c. signal on a CRO screen. Each square is one division and the time base is set at ${p.tb} ms per division. What is the frequency of the signal?`,
          `波形顯示示波器屏幕上的交流訊號。每一小格為一格，時基設定為每格 ${p.tb} ms。訊號的頻率是多少？`],
        explain: [`One complete cycle spans ${p.k} divisions, so T = ${p.k} × ${p.tb} ms = ${F(T)} s.<br>f = 1/T = ${F(f)} Hz.`,
          `一個完整周期跨越 ${p.k} 格，所以 T = ${p.k} × ${p.tb} ms = ${F(T)} s。<br>f = 1/T = ${F(f)} Hz。`]
      };
    }
  });

  /* ================= Radioactivity and Nuclear Energy ================= */

  template({
    family: 'GN01', topic: 'nuc', level: 3, sub: ['Half-life', '半衰期'], unit: ' Bq',
    params: [[800, 4, 20], [640, 5, 30], [1200, 3, 15], [1600, 10, 40], [960, 6, 30], [400, 2, 10], [2000, 8, 32], [3200, 15, 75], [512, 4, 24], [720, 12, 48]]
      .map(([A0, T, t3]) => ({ A0, T, t3 })),
    figure: p => svgGraph({
      aria: `Activity against time: a decay curve starting at ${p.A0} Bq and halving every ${p.T} minutes`,
      x: { max: p.T * 2.8, label: 't / min', ticks: tk([p.T, 2 * p.T]) }, y: { max: p.A0 * 1.2, label: 'A / Bq', ticks: tk([p.A0, p.A0 / 2, p.A0 / 4]) },
      lines: [{ f: t => p.A0 * Math.pow(2, -t / p.T), from: 0, to: p.T * 2.6, n: 60 }]
    }),
    build: p => {
      const n = p.t3 / p.T, A = p.A0 * Math.pow(0.5, n);
      return {
        answer: A, wrong: [p.A0 / (2 * n), A * 2, A / 2],
        stem: [`The graph shows how the activity A of a radioactive sample varies with time t. What will the activity of the sample be at t = ${p.t3} min?`,
          `下圖顯示一個放射性樣本的放射強度 A 隨時間 t 的變化。在 t = ${p.t3} min 時，樣本的放射強度是多少？`],
        explain: [`From the graph, A falls from ${p.A0} Bq to ${p.A0 / 2} Bq in ${p.T} min, so the half-life is ${p.T} min.<br>${p.t3} min = ${n} half-lives ⇒ A = ${p.A0} × (½)^${n} = ${F(A)} Bq.`,
          `從線圖可見，A 在 ${p.T} min 內由 ${p.A0} Bq 降至 ${p.A0 / 2} Bq，所以半衰期是 ${p.T} min。<br>${p.t3} min = ${n} 個半衰期 ⇒ A = ${p.A0} × (½)^${n} = ${F(A)} Bq。`]
      };
    }
  });

  template({
    family: 'GN02', topic: 'nuc', level: 4, sub: ['Background radiation', '本底輻射'], unit: ' min', sf: 2,
    params: [[520, 20, 4], [330, 30, 6], [440, 40, 5], [860, 60, 8], [250, 50, 3], [1030, 30, 10], [700, 100, 4], [380, 20, 12], [620, 20, 6], [460, 60, 2]]
      .map(([C0, B, T]) => ({ C0, B, T })),
    figure: p => svgGraph({
      aria: `Measured count rate against time: falls from ${p.C0} per minute and levels off at the background of ${p.B} per minute`,
      x: { max: p.T * 5.4, label: 't / min', ticks: tk([1, 2, 3, 4, 5].map(k => k * p.T)) }, y: { max: p.C0 * 1.2, label: 'R / min⁻¹', ticks: tk([p.C0, (p.C0 + p.B) / 2, p.B]) },
      lines: [{ f: t => p.B + (p.C0 - p.B) * Math.pow(2, -t / p.T), from: 0, to: p.T * 5.2, n: 80 }]
    }),
    build: p => {
      const wrongT = p.T * Math.log2((p.C0 - p.B) / (p.C0 / 2 - p.B));
      return {
        answer: p.T, wrong: [wrongT, 2 * p.T, p.T / 2],
        stem: [`A GM counter is placed near a radioactive source. The graph shows how the measured count rate R varies with time t; it levels off at the background count rate. What is the half-life of the source?`,
          `把一個 GM 計數器放在放射源附近。下圖顯示量得的計數率 R 隨時間 t 的變化，最後趨於本底計數率。放射源的半衰期是多少？`],
        explain: [`Background = ${p.B} min⁻¹ (where the graph levels off). Corrected count rate at t = 0: ${p.C0} − ${p.B} = ${p.C0 - p.B} min⁻¹.<br>Half of this is ${(p.C0 - p.B) / 2} min⁻¹, i.e. a measured rate of ${(p.C0 - p.B) / 2} + ${p.B} = ${(p.C0 + p.B) / 2} min⁻¹, reached at t = ${p.T} min.<br>Half-life = ${p.T} min. (Taking half of ${p.C0} without subtracting the background gives the wrong time.)`,
          `本底 = ${p.B} min⁻¹（線圖趨於平坦之處）。t = 0 時經校正的計數率：${p.C0} − ${p.B} = ${p.C0 - p.B} min⁻¹。<br>其一半是 ${(p.C0 - p.B) / 2} min⁻¹，即量得的計數率為 ${(p.C0 - p.B) / 2} + ${p.B} = ${(p.C0 + p.B) / 2} min⁻¹，在 t = ${p.T} min 時達到。<br>半衰期 = ${p.T} min。（若不扣除本底而取 ${p.C0} 的一半，會得出錯誤的時間。）`]
      };
    }
  });

  template({
    family: 'GN03', topic: 'nuc', level: 3, sub: ['Penetrating power', '穿透能力'], unit: ' mm',
    params: [[400, 10, 8], [800, 12, 4], [640, 8, 16], [1000, 15, 8], [300, 6, 4], [480, 20, 8], [960, 9, 16], [200, 12, 4], [720, 5, 8], [560, 25, 4]]
      .map(([C0, dh, k]) => ({ C0, dh, k })),
    figure: p => svgGraph({
      aria: `Corrected count rate against thickness of lead: falls from ${p.C0} and halves every ${p.dh} mm`,
      x: { max: p.dh * 2.8, label: 'x / mm', ticks: tk([p.dh, 2 * p.dh]) }, y: { max: p.C0 * 1.2, label: 'C / min⁻¹', ticks: tk([p.C0, p.C0 / 2]) },
      lines: [{ f: x => p.C0 * Math.pow(2, -x / p.dh), from: 0, to: p.dh * 2.6, n: 60 }]
    }),
    build: p => {
      const n = Math.log2(p.k), x = n * p.dh;
      return {
        answer: x, wrong: [p.dh * p.k, p.dh * (n - 1), p.dh * p.k / 2],
        stem: [`The graph shows how the corrected count rate C from a γ source varies with the thickness x of lead placed in front of the detector. What thickness of lead reduces the corrected count rate to 1/${p.k} of its value with no lead?`,
          `下圖顯示來自 γ 放射源、經校正的計數率 C 如何隨放在探測器前的鉛厚度 x 改變。需要多厚的鉛，才能把經校正的計數率減至沒有鉛時的 1/${p.k}？`],
        explain: [`From the graph, every ${p.dh} mm of lead halves the count rate (${p.C0} → ${p.C0 / 2}).<br>1/${p.k} = (½)^${n}, so ${n} × ${p.dh} = ${F(x)} mm of lead is needed.`,
          `從線圖可見，每 ${p.dh} mm 的鉛使計數率減半（${p.C0} → ${p.C0 / 2}）。<br>1/${p.k} = (½)^${n}，所以需要 ${n} × ${p.dh} = ${F(x)} mm 的鉛。`]
      };
    }
  });
})();
