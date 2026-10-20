/*
 * Number-variant question families. Each template() call adds one family of 10 variants.
 * The answer and wrong options are computed from each parameter set (see bank/core.js).
 * Ids look like TH01-03: T + topic letter + family number + variant number.
 */
(function () {
  'use strict';
  const F = (x, sf) => fmt(x, sf || 3);
  const g = 9.81, R = 8.31, NA = 6.02e23, kB = 1.38e-23, e = 1.6e-19, me = 9.11e-31;
  const mu0 = 4 * Math.PI * 1e-7, kC = 8.99e9;
  const rad = d => d * Math.PI / 180, deg = r => r * 180 / Math.PI;
  const K = c => c + 273;
  // time units in both languages, with their length in seconds
  const TU = {
    s: ['s', '秒', 1], min: ['minutes', '分鐘', 60], h: ['hours', '小時', 3600],
    d: ['days', '天', 86400], y: ['years', '年', 3.16e7]
  };

  /* ================= Heat and Gases ================= */

  template({
    family: 'TH01', topic: 'heat', level: 2, sub: ['Specific heat capacity', '比熱容量'], unit: ' J kg⁻¹ °C⁻¹',
    params: [
      { P: 50, t: 5, m: 1.0, dT: 15 }, { P: 100, t: 4, m: 2.0, dT: 12 }, { P: 200, t: 3, m: 0.5, dT: 40 },
      { P: 60, t: 10, m: 1.5, dT: 20 }, { P: 500, t: 2, m: 2.5, dT: 24 }, { P: 80, t: 6, m: 0.8, dT: 30 },
      { P: 150, t: 5, m: 3.0, dT: 10 }, { P: 250, t: 2, m: 1.2, dT: 25 }, { P: 120, t: 8, m: 2.0, dT: 36 },
      { P: 40, t: 12, m: 0.6, dT: 32 }
    ],
    build: p => {
      const E = p.P * p.t * 60, c = E / (p.m * p.dT);
      return {
        answer: c, wrong: [p.P * p.t / (p.m * p.dT), E / p.m, (p.m * p.dT * 1e5) / E],
        stem: [`A ${p.P} W heater raises the temperature of a ${p.m} kg block by ${p.dT} °C in ${p.t} minutes. Assuming no heat loss, what is the specific heat capacity of the block?`,
          `一個 ${p.P} W 的電熱器在 ${p.t} 分鐘內使一塊 ${p.m} kg 的物體溫度上升 ${p.dT} °C。假設沒有熱散失，該物體的比熱容量是多少？`],
        explain: [`E = Pt = ${p.P} × (${p.t} × 60) = ${F(E)} J.<br>c = E / (mΔT) = ${F(E)} / (${p.m} × ${p.dT}) = ${F(c)} J kg⁻¹ °C⁻¹.<br>Remember to change minutes to seconds.`,
          `E = Pt = ${p.P} × (${p.t} × 60) = ${F(E)} J。<br>c = E / (mΔT) = ${F(E)} / (${p.m} × ${p.dT}) = ${F(c)} J kg⁻¹ °C⁻¹。<br>記得把分鐘轉換為秒。`]
      };
    }
  });

  const MAT = { al: ['aluminium', '鋁', 900], cu: ['copper', '銅', 390], fe: ['iron', '鐵', 450], pb: ['lead', '鉛', 130], ag: ['silver', '銀', 240] };
  template({
    family: 'TH02', topic: 'heat', level: 3, sub: ['Method of mixtures', '混合法'], unit: ' °C',
    params: [
      { m1: 0.2, mt: 'al', T1: 100, m2: 0.3, T2: 20 }, { m1: 0.5, mt: 'cu', T1: 90, m2: 0.4, T2: 15 },
      { m1: 0.3, mt: 'fe', T1: 120, m2: 0.5, T2: 25 }, { m1: 1.0, mt: 'pb', T1: 100, m2: 0.2, T2: 20 },
      { m1: 0.4, mt: 'al', T1: 80, m2: 0.6, T2: 10 }, { m1: 0.25, mt: 'cu', T1: 150, m2: 0.15, T2: 22 },
      { m1: 0.6, mt: 'fe', T1: 95, m2: 0.8, T2: 18 }, { m1: 0.8, mt: 'ag', T1: 100, m2: 0.25, T2: 20 },
      { m1: 0.15, mt: 'al', T1: 200, m2: 0.35, T2: 25 }, { m1: 0.5, mt: 'pb', T1: 300, m2: 0.1, T2: 30 }
    ],
    build: p => {
      const [en, zh, c1] = MAT[p.mt];
      const a = p.m1 * c1, b = p.m2 * 4200, T = (a * p.T1 + b * p.T2) / (a + b);
      return {
        answer: T, wrong: [(p.T1 + p.T2) / 2, (p.m1 * p.T1 + p.m2 * p.T2) / (p.m1 + p.m2), p.T2 + a * (p.T1 - p.T2) / b],
        stem: [`A ${p.m1} kg block of ${en} at ${p.T1} °C is dropped into ${p.m2} kg of water at ${p.T2} °C. Neglecting heat loss and the container, what is the final temperature?<br>(Specific heat capacity of ${en} = ${c1} J kg⁻¹ °C⁻¹; of water = 4200 J kg⁻¹ °C⁻¹)`,
          `把一塊 ${p.m1} kg、溫度為 ${p.T1} °C 的${zh}放進 ${p.m2} kg、溫度為 ${p.T2} °C 的水中。忽略熱散失和容器，最終溫度是多少？<br>（${zh}的比熱容量 = ${c1} J kg⁻¹ °C⁻¹；水的比熱容量 = 4200 J kg⁻¹ °C⁻¹）`],
        explain: [`Energy lost by the ${en} = energy gained by the water:<br>${p.m1} × ${c1} × (${p.T1} − T) = ${p.m2} × 4200 × (T − ${p.T2})<br>${F(a)}(${p.T1} − T) = ${F(b)}(T − ${p.T2}) ⇒ T = ${F(T)} °C.<br>The answer is not a simple average because the two bodies have different heat capacities (mc).`,
          `${zh}放出的能量 = 水吸收的能量：<br>${p.m1} × ${c1} × (${p.T1} − T) = ${p.m2} × 4200 × (T − ${p.T2})<br>${F(a)}(${p.T1} − T) = ${F(b)}(T − ${p.T2}) ⇒ T = ${F(T)} °C。<br>由於兩者的熱容量（mc）不同，答案並非簡單的平均值。`]
      };
    }
  });

  template({
    family: 'TH03', topic: 'heat', level: 3, sub: ['Latent heat', '潛熱'], unit: ' J',
    params: [0.1, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.75, 0.8, 1.0].map((m, i) => ({ m, th: [10, 20, 25, 30, 15, 40, 12, 20, 35, 50][i] })),
    build: p => {
      const L = p.m * 3.34e5, H = p.m * 4200 * p.th, E = L + H;
      return {
        answer: E, wrong: [L, H, 3.34e5 + 4200 * p.th, L - H],
        stem: [`How much energy is needed to change ${p.m} kg of ice at 0 °C into water at ${p.th} °C?<br>(Specific latent heat of fusion of ice = 3.34 × 10⁵ J kg⁻¹; specific heat capacity of water = 4200 J kg⁻¹ °C⁻¹)`,
          `要把 ${p.m} kg、溫度為 0 °C 的冰變成 ${p.th} °C 的水，需要多少能量？<br>（冰的熔解比潛熱 = 3.34 × 10⁵ J kg⁻¹；水的比熱容量 = 4200 J kg⁻¹ °C⁻¹）`],
        explain: [`Melting: mℓ = ${p.m} × 3.34 × 10⁵ = ${F(L)} J.<br>Warming the water: mcΔT = ${p.m} × 4200 × ${p.th} = ${F(H)} J.<br>Total = ${F(E)} J.`,
          `熔化：mℓ = ${p.m} × 3.34 × 10⁵ = ${F(L)} J。<br>加熱水：mcΔT = ${p.m} × 4200 × ${p.th} = ${F(H)} J。<br>總能量 = ${F(E)} J。`]
      };
    }
  });

  template({
    family: 'TH04', topic: 'heat', level: 3, sub: ['Latent heat', '潛熱'], unit: ' s',
    params: [[1000, 0.1, 80], [1500, 0.2, 90], [2000, 0.25, 75], [2200, 0.3, 85], [2400, 0.4, 95], [1200, 0.15, 80], [1800, 0.5, 90], [3000, 0.6, 70], [2500, 0.35, 85], [800, 0.05, 90]]
      .map(([P, m, eta]) => ({ P, m, eta })),
    build: p => {
      const E = p.m * 2.26e6, t = E / (p.eta / 100 * p.P);
      return {
        answer: t, wrong: [E / p.P, E * p.eta / 100 / p.P, p.m * 3.34e5 / (p.eta / 100 * p.P)],
        stem: [`A ${p.P} W kettle has an efficiency of ${p.eta} %. Its water is already boiling. How long does it take to boil away ${p.m} kg of the water?<br>(Specific latent heat of vaporization of water = 2.26 × 10⁶ J kg⁻¹)`,
          `一個 ${p.P} W 的電水壺效率為 ${p.eta} %，壺內的水已在沸騰。要把 ${p.m} kg 的水汽化需要多少時間？<br>（水的汽化比潛熱 = 2.26 × 10⁶ J kg⁻¹）`],
        explain: [`Energy needed = mℓ = ${p.m} × 2.26 × 10⁶ = ${F(E)} J.<br>Useful power = ${p.eta} % × ${p.P} = ${F(p.eta / 100 * p.P)} W.<br>t = ${F(E)} / ${F(p.eta / 100 * p.P)} = ${F(t)} s.`,
          `所需能量 = mℓ = ${p.m} × 2.26 × 10⁶ = ${F(E)} J。<br>有用功率 = ${p.eta} % × ${p.P} = ${F(p.eta / 100 * p.P)} W。<br>t = ${F(E)} / ${F(p.eta / 100 * p.P)} = ${F(t)} s。`]
      };
    }
  });

  template({
    family: 'TH05', topic: 'heat', level: 2, sub: ["Boyle's law", '波義耳定律'], unit: ' Pa',
    params: [[1.0, 300, 100], [1.2, 250, 200], [1.5, 400, 160], [0.8, 500, 125], [2.0, 200, 50], [1.0, 150, 60], [1.1, 600, 240], [0.9, 450, 150], [1.6, 320, 80], [2.5, 100, 40]]
      .map(([p1, V1, V2]) => ({ p1, V1, V2 })),
    build: p => {
      const p2 = p.p1 * 1e5 * p.V1 / p.V2;
      return {
        answer: p2, wrong: [p.p1 * 1e5 * p.V2 / p.V1, p.p1 * 1e5 * Math.pow(p.V1 / p.V2, 2), p.p1 * 1e5 * (p.V1 - p.V2) / p.V2],
        stem: [`A fixed mass of gas at ${F(p.p1 * 1e5)} Pa has a volume of ${p.V1} cm³. It is compressed slowly at constant temperature to ${p.V2} cm³. What is its new pressure?`,
          `一定質量的氣體在 ${F(p.p1 * 1e5)} Pa 時的體積為 ${p.V1} cm³。在恆溫下把它緩慢壓縮至 ${p.V2} cm³。它的新壓強是多少？`],
        explain: [`At constant temperature, p₁V₁ = p₂V₂:<br>p₂ = ${F(p.p1 * 1e5)} × ${p.V1} / ${p.V2} = ${F(p2)} Pa.<br>Smaller volume ⇒ larger pressure. The units of volume cancel, so cm³ need not be converted.`,
          `溫度不變時 p₁V₁ = p₂V₂：<br>p₂ = ${F(p.p1 * 1e5)} × ${p.V1} / ${p.V2} = ${F(p2)} Pa。<br>體積越小，壓強越大。體積單位互相抵消，所以不必轉換 cm³。`]
      };
    }
  });

  template({
    family: 'TH06', topic: 'heat', level: 2, sub: ['Pressure law', '壓強定律'], unit: ' Pa',
    params: [[1.0, 27, 127], [1.5, 20, 100], [2.0, 17, 77], [1.2, 0, 91], [3.0, 7, 147], [0.9, 27, 327], [2.5, 37, 187], [1.8, -23, 77], [1.1, 15, 75], [4.0, 27, 87]]
      .map(([p1, T1, T2]) => ({ p1, T1, T2 })),
    build: p => {
      const p2 = p.p1 * 1e5 * K(p.T2) / K(p.T1);
      return {
        answer: p2, wrong: [p.p1 * 1e5 * p.T2 / p.T1, p.p1 * 1e5 * K(p.T1) / K(p.T2), p.p1 * 1e5 * (p.T2 - p.T1) / K(p.T1)],
        stem: [`A sealed rigid container holds gas at ${F(p.p1 * 1e5)} Pa and ${p.T1} °C. The gas is heated to ${p.T2} °C. What is its new pressure?`,
          `一個密封的剛性容器載有壓強為 ${F(p.p1 * 1e5)} Pa、溫度為 ${p.T1} °C 的氣體。把氣體加熱至 ${p.T2} °C，它的新壓強是多少？`],
        explain: [`At constant volume p / T = constant, with T in kelvin:<br>p₂ = ${F(p.p1 * 1e5)} × ${K(p.T2)} / ${K(p.T1)} = ${F(p2)} Pa.<br>Using °C instead of K gives a wrong answer.`,
          `體積不變時 p / T = 常數，T 以開爾文為單位：<br>p₂ = ${F(p.p1 * 1e5)} × ${K(p.T2)} / ${K(p.T1)} = ${F(p2)} Pa。<br>若用 °C 代替 K 便會得出錯誤答案。`]
      };
    }
  });

  template({
    family: 'TH07', topic: 'heat', level: 3, sub: ['General gas law', '普通氣體定律'], unit: ' °C',
    params: [[1.0, 2.0, 27, 1.5, 1.6], [1.2, 3.0, 17, 1.6, 2.5], [2.0, 1.0, 27, 3.0, 0.9], [1.0, 5.0, 7, 0.8, 7.0], [1.5, 4.0, 27, 2.0, 3.5],
      [0.9, 2.4, 37, 1.2, 2.0], [1.1, 6.0, 20, 1.5, 5.0], [3.0, 1.5, 27, 4.0, 1.2], [1.0, 10.0, 0, 1.2, 9.0], [2.5, 2.0, 127, 2.0, 3.0]]
      .map(([p1, V1, T1, p2, V2]) => ({ p1, V1, T1, p2, V2 })),
    build: p => {
      const r = (p.p2 * p.V2) / (p.p1 * p.V1), TK = K(p.T1) * r, TC = TK - 273;
      return {
        answer: TC, wrong: [TK, p.T1 * r, K(p.T1) / r - 273],
        stem: [`A fixed mass of ideal gas has a pressure of ${F(p.p1 * 1e5)} Pa, a volume of ${p.V1} litres and a temperature of ${p.T1} °C. Its pressure changes to ${F(p.p2 * 1e5)} Pa and its volume to ${p.V2} litres. What is its new temperature?`,
          `一定質量的理想氣體的壓強為 ${F(p.p1 * 1e5)} Pa，體積為 ${p.V1} 升，溫度為 ${p.T1} °C。其壓強變為 ${F(p.p2 * 1e5)} Pa，體積變為 ${p.V2} 升。它的新溫度是多少？`],
        explain: [`p₁V₁ / T₁ = p₂V₂ / T₂ with T in kelvin:<br>T₂ = ${K(p.T1)} × (${F(p.p2 * 1e5)} × ${p.V2}) / (${F(p.p1 * 1e5)} × ${p.V1}) = ${F(TK)} K = ${F(TC)} °C.<br>${F(TK)} is the answer in kelvin — convert it back to °C.`,
          `p₁V₁ / T₁ = p₂V₂ / T₂，T 以開爾文為單位：<br>T₂ = ${K(p.T1)} × (${F(p.p2 * 1e5)} × ${p.V2}) / (${F(p.p1 * 1e5)} × ${p.V1}) = ${F(TK)} K = ${F(TC)} °C。<br>${F(TK)} 是以開爾文表示的答案 — 須轉換回 °C。`]
      };
    }
  });

  const GAS = { o2: ['oxygen', '氧氣'], n2: ['nitrogen', '氮氣'], he: ['helium', '氦氣'], co2: ['carbon dioxide', '二氧化碳'], h2: ['hydrogen', '氫氣'], ar: ['argon', '氬氣'], air: ['air', '空氣'], ne: ['neon', '氖氣'] };
  template({
    family: 'TH08', topic: 'heat', level: 3, sub: ['Ideal gas equation', '理想氣體方程'], unit: ' g',
    params: [[1.0, 0.024, 15, 32, 'o2'], [2.0, 0.010, 27, 28, 'n2'], [1.5, 0.050, 20, 4, 'he'], [3.0, 0.020, 27, 44, 'co2'], [1.0, 0.100, 0, 2, 'h2'],
      [5.0, 0.008, 17, 32, 'o2'], [1.2, 0.030, 37, 28, 'n2'], [2.5, 0.040, 7, 40, 'ar'], [8.0, 0.005, 27, 4, 'he'], [1.0, 0.250, 25, 29, 'air']]
      .map(([p, V, T, M, gas]) => ({ p, V, T, M, gas })),
    build: q => {
      const n = q.p * 1e5 * q.V / (R * K(q.T)), m = n * q.M;
      return {
        answer: m, wrong: [q.T ? q.p * 1e5 * q.V / (R * q.T) * q.M : 0, n, m * 1000, m / 1000],
        stem: [`A cylinder of volume ${q.V} m³ contains ${GAS[q.gas][0]} (molar mass ${q.M} g mol⁻¹) at ${F(q.p * 1e5)} Pa and ${q.T} °C. Treating it as an ideal gas, what is the mass of gas in the cylinder?<br>(R = 8.31 J mol⁻¹ K⁻¹)`,
          `一個體積為 ${q.V} m³ 的氣筒載有${GAS[q.gas][1]}（摩爾質量 ${q.M} g mol⁻¹），壓強為 ${F(q.p * 1e5)} Pa，溫度為 ${q.T} °C。把它當作理想氣體，氣筒內氣體的質量是多少？<br>（R = 8.31 J mol⁻¹ K⁻¹）`],
        explain: [`n = pV / RT = (${F(q.p * 1e5)} × ${q.V}) / (8.31 × ${K(q.T)}) = ${F(n)} mol.<br>Mass = nM = ${F(n)} × ${q.M} = ${F(m)} g.`,
          `n = pV / RT = (${F(q.p * 1e5)} × ${q.V}) / (8.31 × ${K(q.T)}) = ${F(n)} mol。<br>質量 = nM = ${F(n)} × ${q.M} = ${F(m)} g。`]
      };
    }
  });

  template({
    family: 'TH09', topic: 'heat', level: 4, sub: ['Kinetic theory', '分子運動論'], unit: ' m s⁻¹',
    params: [['he', 4, 27], ['n2', 28, 27], ['o2', 32, 0], ['h2', 2, 27], ['ar', 40, 127], ['co2', 44, 27], ['ne', 20, 0], ['o2', 32, 100], ['n2', 28, -73], ['he', 4, 227]]
      .map(([gas, M, T]) => ({ gas, M, T })),
    build: q => {
      const c = Math.sqrt(3 * R * K(q.T) / (q.M / 1000));
      return {
        answer: c, wrong: [Math.sqrt(3 * R * K(q.T) / q.M), Math.sqrt(R * K(q.T) / (q.M / 1000)), q.T > 0 ? Math.sqrt(3 * R * q.T / (q.M / 1000)) : 0],
        stem: [`What is the r.m.s. speed of the molecules of ${GAS[q.gas][0]} (molar mass ${q.M} g mol⁻¹) at ${q.T} °C?<br>(R = 8.31 J mol⁻¹ K⁻¹)`,
          `在 ${q.T} °C 時，${GAS[q.gas][1]}（摩爾質量 ${q.M} g mol⁻¹）分子的方均根速率是多少？<br>（R = 8.31 J mol⁻¹ K⁻¹）`],
        explain: [`½ m c̄² = (3/2) kT for one molecule, so for one mole: c_rms = √(3RT / M), with M in kg mol⁻¹.<br>c_rms = √(3 × 8.31 × ${K(q.T)} / ${F(q.M / 1000)}) = ${F(c)} m s⁻¹.<br>Using M in g mol⁻¹ makes the answer √1000 ≈ 32 times too small.`,
          `對一個分子 ½ m c̄² = (3/2) kT，所以對一摩爾：c_rms = √(3RT / M)，M 以 kg mol⁻¹ 為單位。<br>c_rms = √(3 × 8.31 × ${K(q.T)} / ${F(q.M / 1000)}) = ${F(c)} m s⁻¹。<br>若 M 以 g mol⁻¹ 代入，答案會小 √1000 ≈ 32 倍。`]
      };
    }
  });

  template({
    family: 'TH10', topic: 'heat', level: 3, sub: ['Kinetic theory', '分子運動論'], unit: ' J',
    params: [[1, 27], [2, 0], [0.5, 127], [3, -23], [1.5, 77], [0.2, 227], [4, 17], [2.5, 37], [0.8, 327], [5, 7]].map(([n, T]) => ({ n, T })),
    build: q => {
      const E = 1.5 * q.n * R * K(q.T);
      return {
        answer: E, wrong: [1.5 * R * K(q.T), q.n * R * K(q.T), q.T > 0 ? 1.5 * q.n * R * q.T : 0],
        stem: [`What is the total kinetic energy of the molecules in ${q.n} mol of an ideal gas at ${q.T} °C?<br>(R = 8.31 J mol⁻¹ K⁻¹)`,
          `在 ${q.T} °C 時，${q.n} mol 理想氣體分子的總動能是多少？<br>（R = 8.31 J mol⁻¹ K⁻¹）`],
        explain: [`Each molecule has average KE (3/2) kT, and there are nN<sub>A</sub> molecules, so total KE = (3/2) nRT.<br>= 1.5 × ${q.n} × 8.31 × ${K(q.T)} = ${F(E)} J.`,
          `每個分子的平均動能為 (3/2) kT，共有 nN<sub>A</sub> 個分子，所以總動能 = (3/2) nRT。<br>= 1.5 × ${q.n} × 8.31 × ${K(q.T)} = ${F(E)} J。`]
      };
    }
  });

  /* ================= Force and Motion ================= */

  template({
    family: 'TM01', topic: 'force', level: 2, sub: ['Kinematics', '運動學'], unit: ' m',
    params: [[0, 20, 8], [5, 25, 4], [10, 30, 5], [12, 0, 6], [20, 8, 3], [0, 15, 10], [4, 16, 6], [30, 10, 4], [6, 24, 5], [25, 5, 8]].map(([u, v, t]) => ({ u, v, t })),
    build: q => {
      const s = (q.u + q.v) * q.t / 2;
      return {
        answer: s, wrong: [q.v * q.t, q.u * q.t, Math.abs(q.v - q.u) * q.t / 2, (q.u + q.v) * q.t],
        stem: [`A car changes its velocity uniformly from ${q.u} m s⁻¹ to ${q.v} m s⁻¹ in ${q.t} s, moving in a straight line in one direction. How far does it travel in this time?`,
          `一輛汽車沿直線向同一方向行駛，在 ${q.t} s 內速度由 ${q.u} m s⁻¹ 均勻地變為 ${q.v} m s⁻¹。汽車在這段時間內行駛了多遠？`],
        explain: [`For uniform acceleration, s = ½ (u + v) t = ½ × (${q.u} + ${q.v}) × ${q.t} = ${F(s)} m.<br>This is the area under the v–t graph (a trapezium).`,
          `勻加速運動中，s = ½ (u + v) t = ½ × (${q.u} + ${q.v}) × ${q.t} = ${F(s)} m。<br>這就是 v–t 線圖下的面積（梯形）。`]
      };
    }
  });

  template({
    family: 'TM02', topic: 'force', level: 2, sub: ['Kinematics', '運動學'], unit: ' m',
    params: [[20, 5], [15, 3], [30, 6], [25, 4], [10, 2.5], [12, 4], [18, 3], [24, 8], [35, 7], [8, 2]].map(([u, a]) => ({ u, a })),
    build: q => {
      const s = q.u * q.u / (2 * q.a);
      return {
        answer: s, wrong: [q.u * q.u / q.a, q.u / (2 * q.a), q.u * q.u / (4 * q.a), q.u * q.u * q.a / 2],
        stem: [`A car moving at ${q.u} m s⁻¹ brakes with a uniform deceleration of ${q.a} m s⁻². What distance does it travel before stopping?`,
          `一輛以 ${q.u} m s⁻¹ 行駛的汽車以 ${q.a} m s⁻² 的均勻減速度剎車。汽車停下前行駛了多遠？`],
        explain: [`v² = u² + 2as with v = 0 and a = −${q.a} m s⁻²:<br>0 = ${q.u}² − 2 × ${q.a} × s ⇒ s = ${q.u * q.u} / ${2 * q.a} = ${F(s)} m.<br>Doubling the speed makes the braking distance four times as long.`,
          `v² = u² + 2as，其中 v = 0、a = −${q.a} m s⁻²：<br>0 = ${q.u}² − 2 × ${q.a} × s ⇒ s = ${q.u * q.u} / ${2 * q.a} = ${F(s)} m。<br>速率加倍，剎車距離變為四倍。`]
      };
    }
  });

  template({
    family: 'TM03', topic: 'force', level: 2, sub: ['Motion under gravity', '重力下的運動'], unit: ' s',
    params: [5, 10, 20, 45, 80, 1.5, 3.2, 12, 30, 60].map(h => ({ h })),
    build: q => {
      const t = Math.sqrt(2 * q.h / g);
      return {
        answer: t, wrong: [Math.sqrt(q.h / g), 2 * q.h / g, q.h / g],
        stem: [`A stone is dropped from rest from a height of ${q.h} m. Neglecting air resistance, how long does it take to reach the ground?<br>(g = 9.81 m s⁻²)`,
          `讓一塊石從 ${q.h} m 高處由靜止下墜。忽略空氣阻力，它需要多少時間才到達地面？<br>（g = 9.81 m s⁻²）`],
        explain: [`s = ½ gt² ⇒ t = √(2s / g) = √(2 × ${q.h} / 9.81) = ${F(t)} s.`,
          `s = ½ gt² ⇒ t = √(2s / g) = √(2 × ${q.h} / 9.81) = ${F(t)} s。`]
      };
    }
  });

  template({
    family: 'TM04', topic: 'force', level: 3, sub: ["Newton's second law", '牛頓第二定律'], unit: ' N',
    params: [[60, 1.5, 1], [50, 2, -1], [70, 1.2, 1], [45, 0.8, -1], [80, 2.5, 1], [55, 1.5, -1], [65, 0.5, 1], [75, 3, -1], [40, 2, 1], [90, 1, -1]].map(([m, a, d]) => ({ m, a, d })),
    build: q => {
      const Rn = q.m * (g + q.d * q.a);
      return {
        answer: Rn, wrong: [q.m * g, q.m * (g - q.d * q.a), q.m * q.a],
        stem: [`A person of mass ${q.m} kg stands on a weighing scale in a lift. The lift accelerates ${q.d > 0 ? 'upwards' : 'downwards'} at ${q.a} m s⁻². What is the reading of the scale?<br>(g = 9.81 m s⁻²)`,
          `一名質量為 ${q.m} kg 的人站在升降機內的磅秤上。升降機以 ${q.a} m s⁻² ${q.d > 0 ? '向上' : '向下'}加速。磅秤的讀數是多少？<br>（g = 9.81 m s⁻²）`],
        explain: [`Taking upwards as positive: R − mg = m(${q.d > 0 ? '' : '−'}${q.a})<br>R = ${q.m} × (9.81 ${q.d > 0 ? '+' : '−'} ${q.a}) = ${F(Rn)} N.<br>The scale reads the normal force, which is ${q.d > 0 ? 'more' : 'less'} than the weight when accelerating ${q.d > 0 ? 'upwards' : 'downwards'}.`,
          `取向上為正：R − mg = m(${q.d > 0 ? '' : '−'}${q.a})<br>R = ${q.m} × (9.81 ${q.d > 0 ? '+' : '−'} ${q.a}) = ${F(Rn)} N。<br>磅秤讀出的是法向反作用力，${q.d > 0 ? '向上' : '向下'}加速時它${q.d > 0 ? '大於' : '小於'}重量。`]
      };
    }
  });

  template({
    family: 'TM05', topic: 'force', level: 3, sub: ['Inclined plane', '斜面'], unit: ' m s⁻²',
    params: [[2, 30, 3], [5, 20, 8], [1.5, 25, 2], [4, 35, 10], [3, 15, 2], [10, 30, 20], [2.5, 40, 5], [6, 25, 9], [0.5, 30, 1], [8, 20, 12]].map(([m, th, f]) => ({ m, th, f })),
    build: q => {
      const a = g * Math.sin(rad(q.th)) - q.f / q.m;
      return {
        answer: a, wrong: [g * Math.sin(rad(q.th)), g * Math.cos(rad(q.th)) - q.f / q.m, g * Math.sin(rad(q.th)) + q.f / q.m],
        stem: [`A block of mass ${q.m} kg is released from rest on a rough plane inclined at ${q.th}° to the horizontal. The friction on the block is ${q.f} N. What is its acceleration down the plane?<br>(g = 9.81 m s⁻²)`,
          `把一個質量為 ${q.m} kg 的木塊在一個與水平成 ${q.th}° 的粗糙斜面上由靜止釋放，作用於木塊的摩擦力為 ${q.f} N。木塊沿斜面向下的加速度是多少？<br>（g = 9.81 m s⁻²）`],
        explain: [`Along the plane: mg sin θ − f = ma<br>a = 9.81 × sin ${q.th}° − ${q.f} / ${q.m} = ${F(g * Math.sin(rad(q.th)))} − ${F(q.f / q.m)} = ${F(a)} m s⁻².`,
          `沿斜面：mg sin θ − f = ma<br>a = 9.81 × sin ${q.th}° − ${q.f} / ${q.m} = ${F(g * Math.sin(rad(q.th)))} − ${F(q.f / q.m)} = ${F(a)} m s⁻²。`]
      };
    }
  });

  template({
    family: 'TM06', topic: 'force', level: 3, sub: ['Projectile motion', '拋體運動'], unit: ' m',
    params: [[10, 5], [15, 20], [8, 1.25], [20, 45], [12, 10], [5, 2], [25, 30], [18, 8], [6, 0.8], [30, 50]].map(([u, h]) => ({ u, h })),
    build: q => {
      const t = Math.sqrt(2 * q.h / g), x = q.u * t;
      return {
        answer: x, wrong: [q.u * Math.sqrt(q.h / g), 2 * x, q.u * 2 * q.h / g],
        stem: [`A ball is thrown horizontally at ${q.u} m s⁻¹ from a height of ${q.h} m above level ground. Neglecting air resistance, how far does it travel horizontally before hitting the ground?<br>(g = 9.81 m s⁻²)`,
          `從離水平地面 ${q.h} m 高處以 ${q.u} m s⁻¹ 水平拋出一個球。忽略空氣阻力，球落地前的水平距離是多少？<br>（g = 9.81 m s⁻²）`],
        explain: [`Vertical motion: ${q.h} = ½ × 9.81 × t² ⇒ t = ${F(t)} s.<br>Horizontal velocity is constant: x = ${q.u} × ${F(t)} = ${F(x)} m.`,
          `垂直運動：${q.h} = ½ × 9.81 × t² ⇒ t = ${F(t)} s。<br>水平速度不變：x = ${q.u} × ${F(t)} = ${F(x)} m。`]
      };
    }
  });

  template({
    family: 'TM07', topic: 'force', level: 3, sub: ['Collisions', '碰撞'], unit: ' J',
    params: [[2, 3, 1], [1, 4, 1], [3, 2, 1], [0.5, 6, 1.5], [4, 5, 1], [1.5, 4, 0.5], [2, 6, 2], [5, 2, 3], [0.8, 10, 0.2], [3, 4, 3]].map(([m1, u, m2]) => ({ m1, u, m2 })),
    build: q => {
      const v = q.m1 * q.u / (q.m1 + q.m2), K1 = 0.5 * q.m1 * q.u * q.u, K2 = 0.5 * (q.m1 + q.m2) * v * v;
      return {
        answer: K1 - K2, wrong: [K2, K1, 0.5 * q.m2 * v * v],
        stem: [`A trolley of mass ${q.m1} kg moving at ${q.u} m s⁻¹ collides with a stationary trolley of mass ${q.m2} kg. They stick together. How much kinetic energy is lost in the collision?`,
          `一輛質量為 ${q.m1} kg、以 ${q.u} m s⁻¹ 運動的手推車與一輛質量為 ${q.m2} kg 的靜止手推車相撞，兩車黏在一起。碰撞中損失了多少動能？`],
        explain: [`Momentum is conserved: ${q.m1} × ${q.u} = ${q.m1 + q.m2} v ⇒ v = ${F(v)} m s⁻¹.<br>KE before = ½ × ${q.m1} × ${q.u}² = ${F(K1)} J; KE after = ½ × ${q.m1 + q.m2} × ${F(v)}² = ${F(K2)} J.<br>Loss = ${F(K1 - K2)} J.`,
          `動量守恆：${q.m1} × ${q.u} = ${q.m1 + q.m2} v ⇒ v = ${F(v)} m s⁻¹。<br>碰撞前動能 = ½ × ${q.m1} × ${q.u}² = ${F(K1)} J；碰撞後動能 = ½ × ${q.m1 + q.m2} × ${F(v)}² = ${F(K2)} J。<br>損失 = ${F(K1 - K2)} J。`]
      };
    }
  });

  template({
    family: 'TM08', topic: 'force', level: 2, sub: ['Power', '功率'], unit: ' W',
    params: [[50, 4, 5], [20, 10, 8], [80, 3, 6], [15, 12, 4], [200, 2, 10], [60, 5, 3], [35, 6, 7], [120, 1.5, 2], [10, 20, 5], [70, 8, 14]].map(([m, h, t]) => ({ m, h, t })),
    build: q => {
      const P = q.m * g * q.h / q.t;
      return {
        answer: P, wrong: [q.m * q.h / q.t, q.m * g * q.h, q.m * g * q.t / q.h],
        stem: [`A motor lifts a load of mass ${q.m} kg through a height of ${q.h} m at constant speed in ${q.t} s. What is the useful output power of the motor?<br>(g = 9.81 m s⁻²)`,
          `一部電動機在 ${q.t} s 內以恆定速率把一件質量為 ${q.m} kg 的重物提升 ${q.h} m。電動機的有用輸出功率是多少？<br>（g = 9.81 m s⁻²）`],
        explain: [`Work done = gain in PE = mgh = ${q.m} × 9.81 × ${q.h} = ${F(q.m * g * q.h)} J.<br>P = W / t = ${F(q.m * g * q.h)} / ${q.t} = ${F(P)} W.`,
          `所做的功 = 勢能增加 = mgh = ${q.m} × 9.81 × ${q.h} = ${F(q.m * g * q.h)} J。<br>P = W / t = ${F(q.m * g * q.h)} / ${q.t} = ${F(P)} W。`]
      };
    }
  });

  template({
    family: 'TM09', topic: 'force', level: 3, sub: ['Circular motion', '圓周運動'], unit: ' N',
    params: [[0.2, 0.5, 1], [1, 2, 2], [0.5, 0.8, 0.5], [0.1, 0.3, 0.4], [2, 1.5, 3], [0.3, 1, 1.2], [5, 4, 4], [0.05, 0.2, 0.25], [1.5, 0.6, 0.8], [0.8, 1.2, 1.5]].map(([m, r, T]) => ({ m, r, T })),
    build: q => {
      const F0 = 4 * Math.PI * Math.PI * q.m * q.r / (q.T * q.T);
      return {
        answer: F0, wrong: [2 * Math.PI * q.m * q.r / (q.T * q.T), q.m * q.r / (q.T * q.T), 4 * Math.PI * Math.PI * q.m * q.r / q.T],
        stem: [`An object of mass ${q.m} kg moves in a horizontal circle of radius ${q.r} m with a period of ${q.T} s. What is the centripetal force on it?`,
          `一個質量為 ${q.m} kg 的物體以 ${q.T} s 的週期作半徑 ${q.r} m 的水平圓周運動。作用於它的向心力是多少？`],
        explain: [`ω = 2π / T = ${F(2 * Math.PI / q.T)} rad s⁻¹.<br>F = mω²r = ${q.m} × ${F(2 * Math.PI / q.T)}² × ${q.r} = ${F(F0)} N.`,
          `ω = 2π / T = ${F(2 * Math.PI / q.T)} rad s⁻¹。<br>F = mω²r = ${q.m} × ${F(2 * Math.PI / q.T)}² × ${q.r} = ${F(F0)} N。`]
      };
    }
  });

  template({
    family: 'TM10', topic: 'force', level: 4, sub: ['Gravitation', '萬有引力'], unit: ' m s⁻²',
    params: [300, 1000, 6370, 3000, 12740, 500, 20000, 35800, 2000, 9000].map(h => ({ h })),
    build: q => {
      const Re = 6370, gh = g * Math.pow(Re / (Re + q.h), 2);
      return {
        answer: gh, wrong: [g * Re / (Re + q.h), g * Math.pow(Re / q.h, 2), g],
        stem: [`The acceleration due to gravity at the Earth's surface is 9.81 m s⁻² and the radius of the Earth is 6370 km. What is the acceleration due to gravity at a height of ${q.h} km above the surface?`,
          `地球表面的重力加速度為 9.81 m s⁻²，地球半徑為 6370 km。在離地面 ${q.h} km 高處的重力加速度是多少？`],
        explain: [`g ∝ 1/r², where r is measured from the centre of the Earth: r = 6370 + ${q.h} = ${Re + q.h} km.<br>g′ = 9.81 × (6370 / ${Re + q.h})² = ${F(gh)} m s⁻².`,
          `g ∝ 1/r²，r 由地心量起：r = 6370 + ${q.h} = ${Re + q.h} km。<br>g′ = 9.81 × (6370 / ${Re + q.h})² = ${F(gh)} m s⁻²。`]
      };
    }
  });

  /* ================= Wave Motion ================= */

  template({
    family: 'TW01', topic: 'wave', level: 3, sub: ['Wave equation', '波動方程'], unit: ' m s⁻¹',
    params: [[5, 0.8, 10], [6, 1.5, 4], [4, 0.9, 12], [10, 2.7, 5], [3, 0.5, 20], [8, 3.5, 2], [7, 0.24, 50], [5, 0.06, 25], [11, 1.0, 15], [6, 2.0, 8]].map(([n, d, f]) => ({ n, d, f })),
    build: q => {
      const lam = q.d / (q.n - 1), v = q.f * lam;
      return {
        answer: v, wrong: [q.f * q.d / q.n, q.f * q.d, q.n > 2 ? q.f * q.d / (q.n - 2) : 0],
        stem: [`A water wave of frequency ${q.f} Hz travels across a tank. The distance from the 1st crest to the ${q.n}th crest is ${q.d} m. What is the speed of the wave?`,
          `一列頻率為 ${q.f} Hz 的水波在水槽中傳播。由第 1 個波峰至第 ${q.n} 個波峰的距離為 ${q.d} m。水波的速率是多少？`],
        explain: [`From the 1st to the ${q.n}th crest there are ${q.n - 1} wavelengths: λ = ${q.d} / ${q.n - 1} = ${F(lam)} m.<br>v = fλ = ${q.f} × ${F(lam)} = ${F(v)} m s⁻¹.<br>Dividing by ${q.n} instead of ${q.n - 1} is the usual slip.`,
          `由第 1 個至第 ${q.n} 個波峰共有 ${q.n - 1} 個波長：λ = ${q.d} / ${q.n - 1} = ${F(lam)} m。<br>v = fλ = ${q.f} × ${F(lam)} = ${F(v)} m s⁻¹。<br>常見錯誤是除以 ${q.n} 而非 ${q.n - 1}。`]
      };
    }
  });

  template({
    family: 'TW02', topic: 'wave', level: 2, sub: ['Refraction', '折射'], unit: '°',
    params: [[1.5, 40], [1.33, 30], [1.5, 60], [1.6, 45], [2.42, 50], [1.33, 55], [1.45, 35], [1.5, 20], [1.7, 70], [1.33, 80]].map(([n, i]) => ({ n, i })),
    build: q => {
      const r = deg(Math.asin(Math.sin(rad(q.i)) / q.n));
      return {
        answer: r, wrong: [q.i / q.n, 90 - r, q.i - r],
        stem: [`A ray of light passes from air into a medium of refractive index ${q.n}. The angle of incidence is ${q.i}°. What is the angle of refraction?`,
          `一條光線由空氣射進折射率為 ${q.n} 的介質，入射角為 ${q.i}°。折射角是多少？`],
        explain: [`Snell's law: sin i = n sin r ⇒ sin r = sin ${q.i}° / ${q.n} = ${F(Math.sin(rad(q.i)) / q.n)} ⇒ r = ${F(r)}°.<br>Divide the sines, not the angles.`,
          `斯涅耳定律：sin i = n sin r ⇒ sin r = sin ${q.i}° / ${q.n} = ${F(Math.sin(rad(q.i)) / q.n)} ⇒ r = ${F(r)}°。<br>要除的是正弦值，而不是角度。`]
      };
    }
  });

  template({
    family: 'TW03', topic: 'wave', level: 2, sub: ['Total internal reflection', '全內反射'], unit: '°',
    params: [1.33, 1.5, 1.6, 2.42, 1.45, 1.7, 1.25, 1.9, 1.38, 2.0].map(n => ({ n })),
    build: q => {
      const C = deg(Math.asin(1 / q.n));
      return {
        answer: C, wrong: [deg(Math.acos(1 / q.n)), deg(Math.atan(1 / q.n)), 90 / q.n],
        stem: [`A transparent material has a refractive index of ${q.n}. What is the critical angle for light travelling from the material to air?`,
          `某透明物料的折射率為 ${q.n}。光由該物料射向空氣時的臨界角是多少？`],
        explain: [`sin C = 1 / n = 1 / ${q.n} = ${F(1 / q.n)} ⇒ C = ${F(C)}°.<br>A larger refractive index gives a smaller critical angle.`,
          `sin C = 1 / n = 1 / ${q.n} = ${F(1 / q.n)} ⇒ C = ${F(C)}°。<br>折射率越大，臨界角越小。`]
      };
    }
  });

  template({
    family: 'TW04', topic: 'wave', level: 3, sub: ['Refraction', '折射'], unit: ' nm',
    params: [[600, 1.5], [500, 1.33], [650, 1.6], [450, 1.5], [700, 1.33], [550, 2.42], [589, 1.45], [400, 1.5], [632, 1.33], [480, 1.7]].map(([l, n]) => ({ l, n })),
    build: q => {
      const l2 = q.l / q.n;
      return {
        answer: l2, wrong: [q.l * q.n, q.l, q.l / (q.n * q.n)],
        stem: [`Light of wavelength ${q.l} nm in air enters glass of refractive index ${q.n}. What is its wavelength in the glass?`,
          `在空氣中波長為 ${q.l} nm 的光進入折射率為 ${q.n} 的玻璃。光在玻璃中的波長是多少？`],
        explain: [`The frequency stays the same and the speed falls by a factor n, so λ = λ₀ / n = ${q.l} / ${q.n} = ${F(l2)} nm.`,
          `頻率不變而速率減至 1/n，所以 λ = λ₀ / n = ${q.l} / ${q.n} = ${F(l2)} nm。`]
      };
    }
  });

  template({
    family: 'TW05', topic: 'wave', level: 3, sub: ['Lenses', '透鏡'], unit: ' cm',
    params: [[30, 20], [40, 15], [25, 10], [60, 40], [18, 12], [50, 25], [35, 30], [24, 8], [45, 20], [100, 50]].map(([u, f]) => ({ u, f })),
    build: q => {
      const v = q.u * q.f / (q.u - q.f);
      return {
        answer: v, wrong: [q.u - q.f, q.u * q.f / (q.u + q.f), q.u + q.f],
        stem: [`An object is placed ${q.u} cm in front of a convex lens of focal length ${q.f} cm. How far from the lens is the image?`,
          `把一個物體放在焦距為 ${q.f} cm 的凸透鏡前 ${q.u} cm 處。像與透鏡相距多遠？`],
        explain: [`1/u + 1/v = 1/f (real-is-positive): 1/v = 1/${q.f} − 1/${q.u} ⇒ v = ${F(v)} cm.<br>The image is real because the object is beyond the focal point.`,
          `1/u + 1/v = 1/f（實正虛負）：1/v = 1/${q.f} − 1/${q.u} ⇒ v = ${F(v)} cm。<br>物體在焦點以外，所以是實像。`]
      };
    }
  });

  template({
    family: 'TW06', topic: 'wave', level: 2, sub: ["Young's double-slit", '楊氏雙縫實驗'], unit: ' mm',
    params: [[600, 0.5, 2.0], [500, 0.25, 1.5], [650, 0.3, 1.2], [450, 0.2, 1.0], [700, 0.4, 2.5], [550, 0.5, 3.0], [589, 0.1, 0.8], [400, 0.2, 1.5], [632, 0.35, 2.0], [480, 0.3, 1.8]].map(([l, a, D]) => ({ l, a, D })),
    build: q => {
      const y = q.l * 1e-9 * q.D / (q.a * 1e-3) * 1000;
      return {
        answer: y, wrong: [q.l * 1e-9 * q.a * 1e-3 / q.D * 1e6, y / 2, y * 10],
        stem: [`In a Young's double-slit experiment, light of wavelength ${q.l} nm is used. The slit separation is ${q.a} mm and the screen is ${q.D} m from the slits. What is the separation of adjacent bright fringes?`,
          `在楊氏雙縫實驗中使用波長為 ${q.l} nm 的光。雙縫間距為 ${q.a} mm，屏幕與雙縫相距 ${q.D} m。相鄰亮紋的間距是多少？`],
        explain: [`Δy = λD / a = (${q.l} × 10⁻⁹ × ${q.D}) / (${q.a} × 10⁻³) = ${F(y / 1000)} m = ${F(y)} mm.`,
          `Δy = λD / a = (${q.l} × 10⁻⁹ × ${q.D}) / (${q.a} × 10⁻³) = ${F(y / 1000)} m = ${F(y)} mm。`]
      };
    }
  });

  template({
    family: 'TW07', topic: 'wave', level: 3, sub: ['Diffraction grating', '衍射光柵'], unit: '°',
    params: [[300, 600, 1], [500, 500, 1], [600, 450, 2], [200, 650, 2], [400, 550, 1], [250, 700, 3], [800, 400, 1], [300, 500, 2], [100, 600, 3], [450, 480, 1]].map(([N, l, n]) => ({ N, l, n })),
    build: q => {
      const d = 1e-3 / q.N, s = q.n * q.l * 1e-9 / d, th = deg(Math.asin(s));
      return {
        answer: th, wrong: [deg(Math.asin(q.l * 1e-9 / d)), deg(Math.atan(s)), deg(Math.acos(s))],
        stem: [`Light of wavelength ${q.l} nm falls normally on a diffraction grating with ${q.N} lines per mm. At what angle from the central maximum is the ${['', 'first', 'second', 'third'][q.n]}-order maximum?`,
          `波長為 ${q.l} nm 的光垂直照射一塊每毫米有 ${q.N} 條線的衍射光柵。第 ${q.n} 級最大強度與中央最大強度成多大角度？`],
        explain: [`d = 1 / (${q.N} × 10³) = ${F(d)} m.<br>d sin θ = nλ ⇒ sin θ = ${q.n} × ${q.l} × 10⁻⁹ / ${F(d)} = ${F(s)} ⇒ θ = ${F(th)}°.`,
          `d = 1 / (${q.N} × 10³) = ${F(d)} m。<br>d sin θ = nλ ⇒ sin θ = ${q.n} × ${q.l} × 10⁻⁹ / ${F(d)} = ${F(s)} ⇒ θ = ${F(th)}°。`]
      };
    }
  });

  template({
    family: 'TW08', topic: 'wave', level: 3, sub: ['Stationary waves', '駐波'], unit: ' m s⁻¹',
    params: [[1.2, 3, 150], [0.8, 2, 100], [1.5, 4, 200], [2.0, 5, 60], [0.6, 1, 250], [1.0, 2, 90], [1.8, 3, 120], [0.9, 3, 300], [2.4, 4, 50], [0.5, 2, 400]].map(([L, n, f]) => ({ L, n, f })),
    build: q => {
      const lam = 2 * q.L / q.n, v = q.f * lam;
      return {
        answer: v, wrong: [q.f * q.L / q.n, 2 * q.L * q.f, q.L * q.f],
        stem: [`A string of length ${q.L} m is fixed at both ends. It vibrates at ${q.f} Hz, forming a stationary wave with ${q.n} loop${q.n > 1 ? 's' : ''}. What is the speed of the waves on the string?`,
          `一條長 ${q.L} m 的弦線兩端固定。它以 ${q.f} Hz 振動，形成有 ${q.n} 個波環的駐波。弦線上波的速率是多少？`],
        explain: [`Each loop is half a wavelength: ${q.n} × λ/2 = ${q.L} ⇒ λ = ${F(lam)} m.<br>v = fλ = ${q.f} × ${F(lam)} = ${F(v)} m s⁻¹.`,
          `每個波環是半個波長：${q.n} × λ/2 = ${q.L} ⇒ λ = ${F(lam)} m。<br>v = fλ = ${q.f} × ${F(lam)} = ${F(v)} m s⁻¹。`]
      };
    }
  });

  template({
    family: 'TW09', topic: 'wave', level: 3, sub: ['Sound intensity level', '聲強級'], unit: ' dB',
    params: [[60, 10], [50, 100], [70, 2], [40, 1000], [65, 4], [80, 0.1], [55, 5], [90, 0.01], [45, 20], [72, 0.5]].map(([L, k]) => ({ L, k })),
    build: q => {
      const L2 = q.L + 10 * Math.log10(q.k);
      return {
        answer: L2, wrong: [q.L * q.k, q.L + 20 * Math.log10(q.k), q.L + Math.log10(q.k), q.L + q.k],
        stem: [`The sound intensity level at a point is ${q.L} dB. The sound intensity there is then multiplied by ${q.k}. What is the new sound intensity level?`,
          `某點的聲強級為 ${q.L} dB。其後該點的聲強變為原來的 ${q.k} 倍。新的聲強級是多少？`],
        explain: [`Intensity level = 10 log (I / I₀). Multiplying I by ${q.k} changes it by 10 log ${q.k} = ${F(10 * Math.log10(q.k))} dB.<br>New level = ${q.L} ${L2 >= q.L ? '+' : '−'} ${F(Math.abs(10 * Math.log10(q.k)))} = ${F(L2)} dB.`,
          `聲強級 = 10 log (I / I₀)。I 乘以 ${q.k}，聲強級改變 10 log ${q.k} = ${F(10 * Math.log10(q.k))} dB。<br>新聲強級 = ${q.L} ${L2 >= q.L ? '+' : '−'} ${F(Math.abs(10 * Math.log10(q.k)))} = ${F(L2)} dB。`]
      };
    }
  });

  template({
    family: 'TW10', topic: 'wave', level: 2, sub: ['Echoes', '回聲'], unit: ' m',
    params: [[0.4, 340], [2.0, 1500], [1.2, 340], [0.06, 1500], [3.0, 330], [0.8, 1480], [0.25, 340], [5.0, 1500], [1.5, 343], [0.02, 1540]].map(([t, v]) => ({ t, v })),
    build: q => {
      const d = q.v * q.t / 2;
      return {
        answer: d, wrong: [q.v * q.t, 2 * q.v * q.t, q.v / q.t],
        stem: [`A pulse of sound travelling at ${q.v} m s⁻¹ is sent towards a reflecting surface, and its echo returns ${q.t} s after it was sent. How far away is the surface?`,
          `一個以 ${q.v} m s⁻¹ 傳播的聲音脈衝射向一個反射面，發出後 ${q.t} s 收到回聲。反射面有多遠？`],
        explain: [`The sound travels to the surface and back: 2d = vt ⇒ d = ${q.v} × ${q.t} / 2 = ${F(d)} m.`,
          `聲音往返一次：2d = vt ⇒ d = ${q.v} × ${q.t} / 2 = ${F(d)} m。`]
      };
    }
  });

  /* ================= Electricity and Magnetism ================= */

  template({
    family: 'TE01', topic: 'elec', level: 2, sub: ['Current and charge', '電流和電荷'],
    params: [[0.2, 10], [2, 60], [0.5, 30], [1.5, 120], [3, 5], [0.1, 600], [0.8, 45], [4, 180], [0.25, 60], [1, 90]].map(([I, t]) => ({ I, t })),
    build: q => {
      const N = q.I * q.t / e;
      return {
        answer: N, wrong: [q.I / e, q.I * q.t * e * 1e38, q.I * q.t / e / 60],
        stem: [`A steady current of ${q.I} A flows in a wire for ${q.t} s. How many electrons pass any point in the wire in this time?<br>(Charge of electron = 1.60 × 10⁻¹⁹ C)`,
          `一條導線中有 ${q.I} A 的穩定電流流動了 ${q.t} s。在這段時間內，有多少個電子流經導線上任何一點？<br>（電子電荷 = 1.60 × 10⁻¹⁹ C）`],
        explain: [`Q = It = ${q.I} × ${q.t} = ${F(q.I * q.t)} C.<br>N = Q / e = ${F(q.I * q.t)} / 1.60 × 10⁻¹⁹ = ${F(N)}.`,
          `Q = It = ${q.I} × ${q.t} = ${F(q.I * q.t)} C。<br>N = Q / e = ${F(q.I * q.t)} / 1.60 × 10⁻¹⁹ = ${F(N)}。`]
      };
    }
  });

  template({
    family: 'TE02', topic: 'elec', level: 3, sub: ['Circuits', '電路'], unit: ' A',
    params: [[2, 3, 6, 12], [4, 6, 3, 9], [1, 4, 4, 6], [5, 10, 10, 20], [3, 6, 12, 14], [6, 3, 6, 16], [2, 2, 2, 6], [8, 12, 6, 24], [10, 20, 30, 44], [1, 1, 4, 3]].map(([R1, R2, R3, V]) => ({ R1, R2, R3, V })),
    build: q => {
      const Rp = q.R2 * q.R3 / (q.R2 + q.R3), I = q.V / (q.R1 + Rp);
      return {
        answer: I, wrong: [q.V / (q.R1 + q.R2 + q.R3), q.V / q.R1, q.V / (q.R1 + q.R2 + q.R3) * 2],
        stem: [`A ${q.R1} Ω resistor is connected in series with a parallel combination of ${q.R2} Ω and ${q.R3} Ω resistors, across a ${q.V} V supply of negligible internal resistance. What current is drawn from the supply?`,
          `一個 ${q.R1} Ω 電阻器與一組由 ${q.R2} Ω 和 ${q.R3} Ω 電阻器組成的並聯組合串聯，接到一個內阻可忽略的 ${q.V} V 電源。電源輸出的電流是多少？`],
        explain: [`Parallel part: ${q.R2} × ${q.R3} / (${q.R2} + ${q.R3}) = ${F(Rp)} Ω.<br>Total resistance = ${q.R1} + ${F(Rp)} = ${F(q.R1 + Rp)} Ω.<br>I = ${q.V} / ${F(q.R1 + Rp)} = ${F(I)} A.`,
          `並聯部分：${q.R2} × ${q.R3} / (${q.R2} + ${q.R3}) = ${F(Rp)} Ω。<br>總電阻 = ${q.R1} + ${F(Rp)} = ${F(q.R1 + Rp)} Ω。<br>I = ${q.V} / ${F(q.R1 + Rp)} = ${F(I)} A。`]
      };
    }
  });

  template({
    family: 'TE03', topic: 'elec', level: 4, sub: ['Resistivity', '電阻率'], unit: ' Ω',
    params: [[1.7e-8, 10, 1.0], [1.1e-6, 2.0, 0.5], [2.8e-8, 50, 2.0], [4.9e-7, 1.5, 0.3], [1.7e-8, 100, 1.5], [1.0e-6, 0.5, 0.2], [5.6e-8, 20, 0.8], [1.1e-6, 1.0, 0.4], [2.8e-8, 5, 0.5], [4.9e-7, 3, 0.6]].map(([rho, L, d]) => ({ rho, L, d })),
    build: q => {
      const r = q.d / 2 * 1e-3, A = Math.PI * r * r, Rw = q.rho * q.L / A;
      return {
        answer: Rw, wrong: [q.rho * q.L / (Math.PI * Math.pow(q.d * 1e-3, 2)), q.rho * q.L / (Math.PI * r), Rw * 1e-6],
        stem: [`A wire of length ${q.L} m and diameter ${q.d} mm is made of a material of resistivity ${F(q.rho)} Ω m. What is its resistance?`,
          `一條長 ${q.L} m、直徑 ${q.d} mm 的導線由電阻率為 ${F(q.rho)} Ω m 的物料製成。它的電阻是多少？`],
        explain: [`Radius = ${q.d / 2} mm = ${F(r)} m, so A = πr² = ${F(A)} m².<br>R = ρl / A = ${F(q.rho)} × ${q.L} / ${F(A)} = ${F(Rw)} Ω.<br>Using the diameter as the radius makes the area four times too big.`,
          `半徑 = ${q.d / 2} mm = ${F(r)} m，所以 A = πr² = ${F(A)} m²。<br>R = ρl / A = ${F(q.rho)} × ${q.L} / ${F(A)} = ${F(Rw)} Ω。<br>若把直徑當作半徑，面積會大四倍。`]
      };
    }
  });

  template({
    family: 'TE04', topic: 'elec', level: 3, sub: ['Internal resistance', '內阻'], unit: ' V',
    params: [[6, 1, 5], [12, 0.5, 5.5], [9, 2, 7], [1.5, 0.5, 2.5], [4.5, 1.5, 3], [24, 2, 10], [3, 0.2, 1.8], [9, 1, 2], [12, 3, 9], [6, 0.6, 2.4]].map(([E, r, Rl]) => ({ E, r, Rl })),
    build: q => {
      const I = q.E / (q.Rl + q.r), V = I * q.Rl;
      return {
        answer: V, wrong: [q.E, I * q.r, q.E + I * q.r],
        stem: [`A battery of e.m.f. ${q.E} V and internal resistance ${q.r} Ω is connected to a ${q.Rl} Ω resistor. What is the potential difference across the terminals of the battery?`,
          `一個電動勢為 ${q.E} V、內阻為 ${q.r} Ω 的電池連接到一個 ${q.Rl} Ω 的電阻器。電池兩端的電勢差是多少？`],
        explain: [`I = ε / (R + r) = ${q.E} / (${q.Rl} + ${q.r}) = ${F(I)} A.<br>Terminal p.d. V = IR = ${F(I)} × ${q.Rl} = ${F(V)} V (= ε − Ir).`,
          `I = ε / (R + r) = ${q.E} / (${q.Rl} + ${q.r}) = ${F(I)} A。<br>端電壓 V = IR = ${F(I)} × ${q.Rl} = ${F(V)} V（= ε − Ir）。`]
      };
    }
  });

  template({
    family: 'TE05', topic: 'elec', level: 2, sub: ['Cost of electricity', '電費'], prefix: '$',
    params: [[2000, 1, 30, 1.2], [1500, 8, 30, 1.1], [100, 5, 30, 1.3], [60, 10, 31, 1.2], [800, 2, 30, 1.0], [3000, 0.5, 30, 1.4], [1200, 3, 7, 1.2], [40, 24, 30, 1.15], [2400, 0.25, 30, 1.3], [500, 6, 90, 1.2]].map(([P, h, d, c]) => ({ P, h, d, c })),
    build: q => {
      const E = q.P / 1000 * q.h * q.d, cost = E * q.c;
      return {
        answer: cost, wrong: [q.P * q.h * q.d * q.c, q.P / 1000 * q.h * q.c, cost * 60],
        stem: [`An appliance rated ${q.P} W is used for ${q.h} hours a day for ${q.d} days. Electricity costs $${q.c} per kW h. What is the cost of the electricity used?`,
          `一件額定功率為 ${q.P} W 的電器每天使用 ${q.h} 小時，共使用 ${q.d} 天。電費為每 kW h $${q.c}。所用電力的費用是多少？`],
        explain: [`Energy = ${q.P / 1000} kW × ${q.h} h × ${q.d} = ${F(E)} kW h.<br>Cost = ${F(E)} × $${q.c} = $${F(cost)}.<br>Power must be in kW and time in hours when the price is per kW h.`,
          `能量 = ${q.P / 1000} kW × ${q.h} h × ${q.d} = ${F(E)} kW h。<br>電費 = ${F(E)} × $${q.c} = $${F(cost)}。<br>電價以 kW h 計算時，功率須用 kW，時間須用小時。`]
      };
    }
  });

  template({
    family: 'TE06', topic: 'elec', level: 3, sub: ["Coulomb's law", '庫侖定律'], unit: ' N',
    params: [[2, 3, 10], [1, 1, 5], [4, 5, 20], [0.5, 2, 3], [10, 10, 50], [3, 6, 15], [1.5, 2.5, 4], [8, 2, 40], [6, 6, 30], [0.2, 0.8, 1]].map(([q1, q2, r]) => ({ q1, q2, r })),
    build: q => {
      const Fc = kC * q.q1 * 1e-6 * q.q2 * 1e-6 / Math.pow(q.r / 100, 2);
      return {
        answer: Fc, wrong: [kC * q.q1 * 1e-6 * q.q2 * 1e-6 / (q.r / 100), Fc * 1e-4, Fc / 2],
        stem: [`Two point charges of +${q.q1} μC and +${q.q2} μC are ${q.r} cm apart in air. What is the size of the electrostatic force between them?<br>(1 / (4πε₀) = 8.99 × 10⁹ N m² C⁻²)`,
          `兩個分別為 +${q.q1} μC 和 +${q.q2} μC 的點電荷在空氣中相距 ${q.r} cm。它們之間的靜電力有多大？<br>（1 / (4πε₀) = 8.99 × 10⁹ N m² C⁻²）`],
        explain: [`F = Q₁Q₂ / (4πε₀ r²) = 8.99 × 10⁹ × (${q.q1} × 10⁻⁶)(${q.q2} × 10⁻⁶) / (${F(q.r / 100)})² = ${F(Fc)} N.<br>Convert μC to C and cm to m first.`,
          `F = Q₁Q₂ / (4πε₀ r²) = 8.99 × 10⁹ × (${q.q1} × 10⁻⁶)(${q.q2} × 10⁻⁶) / (${F(q.r / 100)})² = ${F(Fc)} N。<br>先把 μC 轉換為 C，cm 轉換為 m。`]
      };
    }
  });

  template({
    family: 'TE07', topic: 'elec', level: 2, sub: ['Electric field', '電場'], unit: ' N',
    params: [[100, 2], [500, 5], [2000, 4], [50, 1], [300, 1.5], [1200, 3], [800, 0.8], [240, 6], [5000, 10], [150, 0.5]].map(([V, d]) => ({ V, d })),
    build: q => {
      const E = q.V / (q.d / 100), Fe = e * E;
      return {
        answer: Fe, wrong: [e * q.V * q.d / 100, e * q.V / q.d, e * q.V],
        stem: [`Two parallel plates ${q.d} cm apart are connected to a ${q.V} V supply. What is the electric force on an electron between the plates?<br>(Charge of electron = 1.60 × 10⁻¹⁹ C)`,
          `兩塊相距 ${q.d} cm 的平行金屬板連接到 ${q.V} V 的電源。兩板之間的電子所受的電力是多少？<br>（電子電荷 = 1.60 × 10⁻¹⁹ C）`],
        explain: [`E = V / d = ${q.V} / ${F(q.d / 100)} = ${F(E)} V m⁻¹ (uniform between the plates).<br>F = eE = 1.60 × 10⁻¹⁹ × ${F(E)} = ${F(Fe)} N.`,
          `E = V / d = ${q.V} / ${F(q.d / 100)} = ${F(E)} V m⁻¹（兩板之間的電場均勻）。<br>F = eE = 1.60 × 10⁻¹⁹ × ${F(E)} = ${F(Fe)} N。`]
      };
    }
  });

  template({
    family: 'TE08', topic: 'elec', level: 2, sub: ['Magnetic field of a current', '電流的磁場'], unit: ' T',
    params: [[5, 2], [10, 5], [2, 1], [20, 4], [3, 0.5], [15, 3], [8, 10], [1, 0.2], [12, 6], [30, 15]].map(([I, r]) => ({ I, r })),
    build: q => {
      const B = mu0 * q.I / (2 * Math.PI * q.r / 100);
      return {
        answer: B, wrong: [mu0 * q.I / (q.r / 100), B / 100, B / 2],
        stem: [`A long straight wire carries a current of ${q.I} A. What is the magnetic field strength at a distance of ${q.r} cm from the wire?<br>(μ₀ = 4π × 10⁻⁷ H m⁻¹)`,
          `一條長直導線載有 ${q.I} A 的電流。距離導線 ${q.r} cm 處的磁場強度是多少？<br>（μ₀ = 4π × 10⁻⁷ H m⁻¹）`],
        explain: [`B = μ₀I / (2πr) = 4π × 10⁻⁷ × ${q.I} / (2π × ${F(q.r / 100)}) = ${F(B)} T.`,
          `B = μ₀I / (2πr) = 4π × 10⁻⁷ × ${q.I} / (2π × ${F(q.r / 100)}) = ${F(B)} T。`]
      };
    }
  });

  template({
    family: 'TE09', topic: 'elec', level: 3, sub: ['Transformers', '變壓器'], unit: ' A',
    params: [[1000, 50, 220, 6], [500, 100, 220, 22], [2000, 100, 240, 4], [1200, 60, 220, 11], [800, 200, 200, 25], [1500, 75, 230, 5], [400, 40, 110, 2], [600, 30, 240, 8], [1000, 250, 220, 55], [2200, 120, 220, 12]].map(([Np, Ns, Vp, Rl]) => ({ Np, Ns, Vp, Rl })),
    build: q => {
      const Vs = q.Vp * q.Ns / q.Np, Is = Vs / q.Rl, Ip = Is * Vs / q.Vp;
      return {
        answer: Ip, wrong: [Is, Is * q.Np / q.Ns, q.Vp / q.Rl],
        stem: [`An ideal transformer has ${q.Np} turns on its primary coil and ${q.Ns} turns on its secondary coil. The primary is connected to a ${q.Vp} V a.c. supply and the secondary to a ${q.Rl} Ω resistor. What is the current in the primary coil?`,
          `一個理想變壓器的原線圈有 ${q.Np} 匝，副線圈有 ${q.Ns} 匝。原線圈連接到 ${q.Vp} V 的交流電源，副線圈連接到一個 ${q.Rl} Ω 的電阻器。原線圈中的電流是多少？`],
        explain: [`V<sub>s</sub> = ${q.Vp} × ${q.Ns} / ${q.Np} = ${F(Vs)} V; I<sub>s</sub> = ${F(Vs)} / ${q.Rl} = ${F(Is)} A.<br>Ideal: V<sub>p</sub>I<sub>p</sub> = V<sub>s</sub>I<sub>s</sub> ⇒ I<sub>p</sub> = ${F(Vs)} × ${F(Is)} / ${q.Vp} = ${F(Ip)} A.`,
          `V<sub>s</sub> = ${q.Vp} × ${q.Ns} / ${q.Np} = ${F(Vs)} V；I<sub>s</sub> = ${F(Vs)} / ${q.Rl} = ${F(Is)} A。<br>理想變壓器：V<sub>p</sub>I<sub>p</sub> = V<sub>s</sub>I<sub>s</sub> ⇒ I<sub>p</sub> = ${F(Vs)} × ${F(Is)} / ${q.Vp} = ${F(Ip)} A。`]
      };
    }
  });

  template({
    family: 'TE10', topic: 'elec', level: 3, sub: ['Power transmission', '電力傳輸'], unit: ' W',
    params: [[100, 10, 5], [500, 25, 4], [50, 5, 2], [1000, 100, 10], [200, 11, 8], [400, 20, 3], [60, 2, 0.5], [800, 40, 6], [150, 15, 12], [2000, 132, 20]].map(([P, V, Rc]) => ({ P, V, Rc })),
    build: q => {
      const I = q.P / q.V, loss = I * I * q.Rc;
      return {
        answer: loss, wrong: [Math.pow(q.V * 1000, 2) / q.Rc, I * q.Rc, loss * 1000],
        stem: [`A power station transmits ${q.P} kW at ${q.V} kV through cables of total resistance ${q.Rc} Ω. What is the power lost in the cables?`,
          `一間發電廠以 ${q.V} kV 經總電阻為 ${q.Rc} Ω 的電纜輸送 ${q.P} kW 的電功率。電纜中損耗的功率是多少？`],
        explain: [`I = P / V = ${q.P * 1000} / ${q.V * 1000} = ${F(I)} A.<br>Loss = I²R = ${F(I)}² × ${q.Rc} = ${F(loss)} W.<br>V² / R is wrong here: ${q.V} kV is not the p.d. across the cables.`,
          `I = P / V = ${q.P * 1000} / ${q.V * 1000} = ${F(I)} A。<br>損耗 = I²R = ${F(I)}² × ${q.Rc} = ${F(loss)} W。<br>這裏用 V² / R 是錯的：${q.V} kV 並非電纜兩端的電勢差。`]
      };
    }
  });

  /* ================= Radioactivity and Nuclear Energy ================= */

  template({
    family: 'TN01', topic: 'nuc', level: 2, sub: ['Half-life', '半衰期'], unit: ' Bq',
    params: [[800, 5, 15, 'd'], [1200, 2, 6, 'h'], [640, 3, 12, 'min'], [2000, 8, 24, 'd'], [960, 10, 50, 's'], [4800, 6, 24, 'h'], [320, 1, 3, 'y'], [1600, 4, 16, 'min'], [5000, 12, 36, 'h'], [256, 2, 10, 'd']].map(([A, T, t, u]) => ({ A, T, t, u })),
    build: q => {
      const n = q.t / q.T, A = q.A / Math.pow(2, n), [en, zh] = TU[q.u];
      return {
        answer: A, wrong: [q.A / n, q.A / Math.pow(2, n - 1), q.A / (2 * n)],
        stem: [`A radioactive source has an activity of ${q.A} Bq and a half-life of ${q.T} ${en}. What is its activity after ${q.t} ${en}?`,
          `一個放射源的放射強度為 ${q.A} Bq，半衰期為 ${q.T} ${zh}。${q.t} ${zh}後它的放射強度是多少？`],
        explain: [`${q.t} ${en} = ${n} half-lives.<br>A = ${q.A} × (½)^${n} = ${F(A)} Bq.`,
          `${q.t} ${zh} = ${n} 個半衰期。<br>A = ${q.A} × (½)^${n} = ${F(A)} Bq。`]
      };
    }
  });

  template({
    family: 'TN02', topic: 'nuc', level: 3, sub: ['Half-life', '半衰期'],
    params: [[800, 100, 9, 'h'], [1200, 75, 20, 'min'], [640, 160, 8, 'd'], [960, 60, 12, 's'], [4000, 250, 2, 'h'], [3200, 200, 40, 'min'], [500, 125, 6, 'y'], [2048, 64, 25, 'd'], [1500, 375, 30, 'min'], [720, 45, 16, 'h']].map(([C1, C2, t, u]) => ({ C1, C2, t, u })),
    build: q => {
      const n = Math.log2(q.C1 / q.C2), T = q.t / n, [en, zh] = TU[q.u];
      return {
        answer: T, wrong: [q.t / (q.C1 / q.C2), q.t / 2, q.t * n],
        unit: ' ' + en, unitZh: ' ' + zh,
        stem: [`The corrected count rate from a radioactive source falls from ${q.C1} to ${q.C2} counts per minute in ${q.t} ${en}. What is the half-life of the source?`,
          `一個放射源的校正計數率在 ${q.t} ${zh}內由每分鐘 ${q.C1} 計數降至每分鐘 ${q.C2} 計數。放射源的半衰期是多少？`],
        explain: [`${q.C1} / ${q.C2} = ${F(q.C1 / q.C2)} = 2^${F(n)}, so ${F(n)} half-lives pass in ${q.t} ${en}.<br>Half-life = ${q.t} / ${F(n)} = ${F(T)} ${en}.`,
          `${q.C1} / ${q.C2} = ${F(q.C1 / q.C2)} = 2^${F(n)}，即 ${q.t} ${zh}內經過 ${F(n)} 個半衰期。<br>半衰期 = ${q.t} / ${F(n)} = ${F(T)} ${zh}。`]
      };
    }
  });

  template({
    family: 'TN03', topic: 'nuc', level: 4, sub: ['Decay law', '衰變定律'], unit: ' %',
    params: [[10, 5, 'd'], [8, 12, 'h'], [4, 10, 'min'], [20, 5, 'y'], [6, 21, 's'], [2, 2.5, 'h'], [12, 9, 'd'], [5, 11, 'min'], [10, 18, 'y'], [2, 9, 'd']].map(([T, t, u]) => ({ T, t, u })),
    build: q => {
      const x = q.t / q.T, pc = 100 * Math.pow(2, -x), [en, zh] = TU[q.u];
      return {
        answer: pc, wrong: [100 * (1 - x / 2), 100 / (1 + x), 100 * Math.pow(2, -Math.floor(x)), 100 * Math.exp(-x)],
        stem: [`A radioactive nuclide has a half-life of ${q.T} ${en}. What percentage of the original nuclei remains undecayed after ${q.t} ${en}?`,
          `某放射性核素的半衰期為 ${q.T} ${zh}。${q.t} ${zh}後，原來的原子核中有百分之幾仍未衰變？`],
        explain: [`N / N₀ = (½)^(t / t<sub>½</sub>) = (½)^${F(x)} = ${F(pc / 100)} = ${F(pc)} %.<br>Decay is exponential, so the fraction does not fall linearly between whole half-lives.`,
          `N / N₀ = (½)^(t / t<sub>½</sub>) = (½)^${F(x)} = ${F(pc / 100)} = ${F(pc)} %。<br>衰變是指數式的，所以在兩個完整半衰期之間，比例並非線性下降。`]
      };
    }
  });

  template({
    family: 'TN04', topic: 'nuc', level: 4, sub: ['Decay constant', '衰變常數'],
    params: [[2000, 5, 'd'], [5.0e4, 8, 'd'], [1.0e6, 6, 'h'], [800, 1, 'y'], [3.0e5, 2, 'h'], [1.2e4, 30, 'min'], [4.0e7, 14, 'd'], [500, 5730, 'y'], [9.0e3, 12, 'h'], [2.5e5, 3, 'min']].map(([A, T, u]) => ({ A, T, u })),
    build: q => {
      const Ts = q.T * TU[q.u][2], k = Math.LN2 / Ts, N = q.A / k, [en, zh] = TU[q.u];
      return {
        answer: N, wrong: [q.A * q.T / Math.LN2, q.A * Ts, q.A * Ts * Math.LN2],
        stem: [`A radioactive sample has an activity of ${F(q.A)} Bq. The half-life of the nuclide is ${q.T} ${en}. How many undecayed nuclei does the sample contain?${q.u === 'y' ? '<br>(1 year = 3.16 × 10⁷ s)' : ''}`,
          `一個放射性樣本的放射強度為 ${F(q.A)} Bq，核素的半衰期為 ${q.T} ${zh}。樣本含有多少個未衰變的原子核？${q.u === 'y' ? '<br>（1 年 = 3.16 × 10⁷ s）' : ''}`],
        explain: [`t<sub>½</sub> = ${q.T} ${en} = ${F(Ts)} s ⇒ k = ln 2 / t<sub>½</sub> = ${F(k)} s⁻¹.<br>A = kN ⇒ N = ${F(q.A)} / ${F(k)} = ${F(N)}.<br>The half-life must be in seconds because the becquerel is decays per second.`,
          `t<sub>½</sub> = ${q.T} ${zh} = ${F(Ts)} s ⇒ k = ln 2 / t<sub>½</sub> = ${F(k)} s⁻¹。<br>A = kN ⇒ N = ${F(q.A)} / ${F(k)} = ${F(N)}。<br>貝可是每秒衰變次數，所以半衰期必須用秒。`]
      };
    }
  });

  template({
    family: 'TN05', topic: 'nuc', level: 4, sub: ['Background radiation', '本底輻射'],
    params: [[520, 20, 2], [330, 30, 1], [850, 50, 3], [260, 20, 2], [1630, 30, 4], [440, 40, 2], [925, 25, 3], [180, 20, 1], [2015, 15, 5], [1240, 40, 3]].map(([R0, B, n]) => ({ R0, B, n })),
    build: q => {
      const src = (q.R0 - q.B) / Math.pow(2, q.n), Rn = src + q.B;
      return {
        answer: Rn, wrong: [q.R0 / Math.pow(2, q.n), src, q.R0 / Math.pow(2, q.n) + q.B],
        unit: ' counts/min', unitZh: ' 次／分鐘', sf: 3,
        stem: [`A GM counter near a radioactive source reads ${q.R0} counts per minute. The background count rate is ${q.B} counts per minute. What will the reading be after ${q.n} half-li${q.n > 1 ? 'ves' : 'fe'} of the source?`,
          `放在一個放射源附近的 GM 計數器讀數為每分鐘 ${q.R0} 次，本底計數率為每分鐘 ${q.B} 次。經過放射源 ${q.n} 個半衰期後，讀數是多少？`],
        explain: [`Source alone: ${q.R0} − ${q.B} = ${q.R0 - q.B} counts/min. After ${q.n} half-li${q.n > 1 ? 'ves' : 'fe'}: ${q.R0 - q.B} / ${Math.pow(2, q.n)} = ${F(src)} counts/min.<br>The background does not decay: reading = ${F(src)} + ${q.B} = ${F(Rn)} counts/min.`,
          `只計放射源：${q.R0} − ${q.B} = 每分鐘 ${q.R0 - q.B} 次。${q.n} 個半衰期後：${q.R0 - q.B} / ${Math.pow(2, q.n)} = 每分鐘 ${F(src)} 次。<br>本底輻射不會衰變：讀數 = ${F(src)} + ${q.B} = 每分鐘 ${F(Rn)} 次。`]
      };
    }
  });

  template({
    family: 'TN06', topic: 'nuc', level: 3, sub: ['Mass–energy', '質能關係'], unit: ' MeV',
    params: [0.0189, 0.215, 0.00239, 0.0304, 0.186, 0.0039, 0.0176, 0.1, 0.0085, 0.0249].map(dm => ({ dm })),
    build: q => {
      const E = q.dm * 931;
      return {
        answer: E, wrong: [q.dm / 931 * 1e3, q.dm * 931 / 1.6e-13 * 1e-13, E * 1000],
        stem: [`In a nuclear reaction the total mass decreases by ${q.dm} u. How much energy is released?<br>(1 u is equivalent to 931 MeV)`,
          `在一個核反應中，總質量減少了 ${q.dm} u。釋放了多少能量？<br>（1 u 相當於 931 MeV）`],
        explain: [`E = ${q.dm} u × 931 MeV u⁻¹ = ${F(E)} MeV.<br>(= ${F(E * 1.6e-13)} J, using 1 MeV = 1.60 × 10⁻¹³ J.)`,
          `E = ${q.dm} u × 931 MeV u⁻¹ = ${F(E)} MeV。<br>（= ${F(E * 1.6e-13)} J，因 1 MeV = 1.60 × 10⁻¹³ J。）`]
      };
    }
  });

  template({
    family: 'TN07', topic: 'nuc', level: 4, sub: ['Nuclear fission', '核裂變'], unit: ' J',
    params: [[200, 1], [200, 10], [190, 5], [210, 0.5], [200, 100], [180, 2], [205, 20], [195, 0.1], [200, 50], [185, 3]].map(([E, m]) => ({ E, m })),
    build: q => {
      const N = q.m / 235 * NA, J = N * q.E * 1.6e-13;
      return {
        answer: J, wrong: [N * q.E, J * 1000, J / 1000],
        stem: [`Each fission of a uranium-235 nucleus releases about ${q.E} MeV. Estimate the energy released by the complete fission of ${q.m} g of uranium-235.<br>(Molar mass = 235 g mol⁻¹; N<sub>A</sub> = 6.02 × 10²³ mol⁻¹; 1 MeV = 1.60 × 10⁻¹³ J)`,
          `每個鈾-235 原子核裂變時釋放約 ${q.E} MeV。估算 ${q.m} g 鈾-235 完全裂變時釋放的能量。<br>（摩爾質量 = 235 g mol⁻¹；N<sub>A</sub> = 6.02 × 10²³ mol⁻¹；1 MeV = 1.60 × 10⁻¹³ J）`],
        explain: [`Number of nuclei = (${q.m} / 235) × 6.02 × 10²³ = ${F(N)}.<br>E = ${F(N)} × ${q.E} × 1.60 × 10⁻¹³ = ${F(J)} J.`,
          `原子核數目 = (${q.m} / 235) × 6.02 × 10²³ = ${F(N)}。<br>E = ${F(N)} × ${q.E} × 1.60 × 10⁻¹³ = ${F(J)} J。`]
      };
    }
  });

  template({
    family: 'TN08', topic: 'nuc', level: 3, sub: ['Radioactive decay', '放射衰變'], int: true,
    params: [[238, 92, 1, 1], [232, 90, 2, 1], [226, 88, 3, 2], [210, 84, 1, 2], [238, 92, 8, 6], [222, 86, 4, 2], [211, 83, 1, 1], [231, 91, 2, 3], [239, 94, 5, 2], [227, 89, 3, 1]].map(([A, Z, a, b]) => ({ A, Z, a, b })),
    build: q => {
      const Z2 = q.Z - 2 * q.a + q.b;
      return {
        answer: Z2, wrong: [q.Z - 2 * q.a - q.b, q.Z - q.a + q.b, q.Z - 4 * q.a + q.b, q.Z + 2 * q.a - q.b],
        stem: [`A nucleus with nucleon number ${q.A} and atomic number ${q.Z} undergoes ${q.a} α decay${q.a > 1 ? 's' : ''} and ${q.b} β⁻ decay${q.b > 1 ? 's' : ''}. What is the atomic number of the final nucleus?`,
          `一個核子數為 ${q.A}、原子序為 ${q.Z} 的原子核經歷 ${q.a} 次 α 衰變和 ${q.b} 次 β⁻ 衰變。最後的原子核的原子序是多少？`],
        explain: [`Each α decay lowers Z by 2; each β⁻ decay raises Z by 1.<br>Z = ${q.Z} − 2 × ${q.a} + ${q.b} = ${Z2}. (The nucleon number becomes ${q.A} − 4 × ${q.a} = ${q.A - 4 * q.a}.)`,
          `每次 α 衰變使 Z 減少 2；每次 β⁻ 衰變使 Z 增加 1。<br>Z = ${q.Z} − 2 × ${q.a} + ${q.b} = ${Z2}。（核子數變為 ${q.A} − 4 × ${q.a} = ${q.A - 4 * q.a}。）`]
      };
    }
  });

  template({
    family: 'TN09', topic: 'nuc', level: 4, sub: ['Half-life', '半衰期'], int: true,
    params: [[8, 10, 'd'], [6, 20, 'h'], [2, 100, 'd'], [5, 50, 'y'], [12, 5, 'h'], [3, 30, 'min'], [30, 10, 'y'], [15, 1000, 'h'], [4, 3, 'd'], [1, 60, 'h']].map(([T, k, u]) => ({ T, k, u })),
    build: q => {
      const exact = q.T * Math.log2(q.k), t = Math.ceil(exact), [en, zh] = TU[q.u];
      return {
        answer: t, wrong: [q.T * q.k, q.T * q.k / 2, Math.floor(exact), q.T * Math.ceil(Math.log2(q.k))],
        unit: ' ' + en, unitZh: ' ' + zh,
        stem: [`A nuclide has a half-life of ${q.T} ${en}. What is the shortest whole number of ${en} after which the activity of a sample has fallen below 1/${q.k} of its initial value?`,
          `某核素的半衰期為 ${q.T} ${zh}。最少要經過多少整數${zh}，樣本的放射強度才會降至低於初始值的 1/${q.k}？`],
        explain: [`(½)^(t / ${q.T}) < 1/${q.k} ⇒ t > ${q.T} × log ${q.k} / log 2 = ${F(exact)} ${en}.<br>The shortest whole number is ${t} ${en}.`,
          `(½)^(t / ${q.T}) < 1/${q.k} ⇒ t > ${q.T} × log ${q.k} / log 2 = ${F(exact)} ${zh}。<br>最少的整數為 ${t} ${zh}。`]
      };
    }
  });

  template({
    family: 'TN10', topic: 'nuc', level: 4, sub: ['Radioactive dating', '放射性年代測定'],
    params: [60, 40, 30, 20, 15, 10, 70, 80, 35, 5].map(f => ({ f })),
    build: q => {
      const age = 5730 * Math.log2(100 / q.f);
      return {
        answer: age, wrong: [5730 * (100 - q.f) / 50, 5730 * Math.log(100 / q.f), 5730 * 100 / q.f / 2],
        unit: ' years', unitZh: ' 年',
        stem: [`The carbon-14 activity per gram of carbon in an old piece of wood is ${q.f} % of that in living wood. The half-life of carbon-14 is 5730 years. Estimate the age of the wood.`,
          `一塊舊木中每克碳的碳-14 放射強度是活樹的 ${q.f} %。碳-14 的半衰期為 5730 年。估算這塊木的年齡。`],
        explain: [`(½)^(t / 5730) = ${q.f / 100} ⇒ t = 5730 × log (100 / ${q.f}) / log 2 = ${F(age)} years.`,
          `(½)^(t / 5730) = ${q.f / 100} ⇒ t = 5730 × log (100 / ${q.f}) / log 2 = ${F(age)} 年。`]
      };
    }
  });
})();
