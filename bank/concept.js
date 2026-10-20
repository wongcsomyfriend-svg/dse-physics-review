/*
 * Concept questions built around graphs and diagrams (multiple choice).
 * Figures are drawn with svgGraph / svgPanels from bank/core.js, or as inline SVG, using currentColor.
 */
(function () {
  'use strict';
  const { range, r1, svg, line, arrow, text, dot, circ } = window.draw;
  const sines = (a, n) => ({ f: x => a * Math.sin(2 * Math.PI * n * x) });

  /* ================= Heat and Gases (H105–H120) ================= */
  addBank([
    {
      id: 'H105', topic: 'heat', level: 2, sub: 'Heating curve',
      stem: 'A solid is heated steadily until it boils. The graph shows how its temperature changes with time. During which part of the graph is the substance entirely liquid?',
      figure: svgGraph({
        aria: 'Heating curve with points P, Q, R, S, T: rise PQ, flat QR, rise RS, flat ST',
        x: { max: 10, label: 'time' }, y: { max: 10, label: 'temperature' },
        lines: [{ pts: [[0, 1], [2, 3.5], [4, 3.5], [6.5, 7], [9, 7], [10, 9]] }],
        dots: [[0, 1, 'P', 12, 12], [2, 3.5, 'Q'], [4, 3.5, 'R'], [6.5, 7, 'S'], [9, 7, 'T']]
      }),
      options: ['RS', 'QR', 'ST', 'PQ'],
      answer: 0,
      explain: 'PQ: solid warming. QR: melting (solid and liquid together, constant temperature). RS: liquid warming — the substance is entirely liquid. ST: boiling (liquid and gas together).',
      zh: {
        sub: '加熱曲線', stem: '穩定地加熱一塊固體直至它沸騰。下圖顯示其溫度隨時間的變化。物質在線圖哪一部分時完全是液態？',
        explain: 'PQ：固體升溫。QR：熔化（固液共存，溫度不變）。RS：液體升溫 — 物質完全是液態。ST：沸騰（液氣共存）。'
      }
    },
    {
      id: 'H106', topic: 'heat', level: 3, sub: 'Cooling curve',
      stem: 'Equal masses of two liquids X and Y, starting at the same temperature, cool in identical containers in the same surroundings, so at any given temperature they lose energy at the same rate. The graph shows their cooling curves. Which statement is correct?',
      figure: svgGraph({
        aria: 'Two cooling curves from 100 degrees: X falls faster than Y',
        x: { max: 10, label: 't / min' }, y: { max: 110, label: 'θ / °C', ticks: [[100, '100'], [20, '20']] },
        lines: [{ f: t => 20 + 80 * Math.exp(-t / 2.5), from: 0, to: 10 }, { f: t => 20 + 80 * Math.exp(-t / 6), from: 0, to: 10, dash: true }],
        text: [[2.6, 52, 'X'], [6.6, 68, 'Y']]
      }),
      options: [
        'X has the higher specific heat capacity.',
        'X has the lower specific heat capacity.',
        'Y loses energy faster than X at the same temperature.',
        'X and Y have the same specific heat capacity.'
      ],
      answer: 1,
      explain: 'At the same temperature both lose energy at the same rate P. Rate of fall of temperature = P / (mc). X cools faster with the same m, so X has the smaller c.',
      zh: {
        sub: '冷卻曲線', stem: '質量相同、起始溫度相同的兩種液體 X 和 Y，放在相同的容器中於相同環境下冷卻，所以在任何相同溫度下它們散失能量的速率相同。下圖顯示它們的冷卻曲線。哪項敘述是正確的？',
        options: ['X 的比熱容量較高。', 'X 的比熱容量較低。', '在相同溫度下，Y 散失能量比 X 快。', 'X 和 Y 的比熱容量相同。'],
        explain: '在相同溫度下兩者以相同的速率 P 散失能量。溫度下降率 = P / (mc)。m 相同而 X 冷卻得較快，所以 X 的 c 較小。'
      }
    },
    {
      id: 'H107', topic: 'heat', level: 2, sub: "Boyle's law",
      stem: 'Which graph shows how the pressure p of a fixed mass of ideal gas varies with its volume V at constant temperature?',
      figure: svgPanels([
        { f: x => x }, { f: () => 0.5 }, { pts: range(0.1, 1, 30).map(x => [x, 0.1 / x]) }, { f: x => 1 - x }
      ], { x: 'V', y: 'p', aria: 'Four sketch graphs of p against V: A straight line through origin, B horizontal line, C falling curve, D falling straight line' }),
      options: ['A', 'B', 'C', 'D'],
      answer: 2,
      explain: 'pV = constant, so p = constant / V: a curve (hyperbola) that falls steeply at small V and levels off at large V. The straight line D would reach p = 0 at a finite volume, which Boyle\'s law does not allow.',
      zh: {
        sub: '波義耳定律', stem: '哪一個線圖顯示一定質量的理想氣體在溫度不變時，壓強 p 隨體積 V 的變化？',
        explain: 'pV = 常數，所以 p = 常數 / V：一條在 V 小時急降、V 大時趨於平坦的曲線（雙曲線）。直線 D 會在有限體積時到達 p = 0，波義耳定律並不容許這情況。'
      }
    },
    {
      id: 'H108', topic: 'heat', level: 4, sub: "Charles' law",
      stem: 'Lines X and Y show how the volumes of two gas samples, each at a constant pressure, vary with temperature θ in °C. The lines are extended (dashed) to zero volume. What can be deduced?',
      figure: svgGraph({
        aria: 'Two straight lines of V against temperature in Celsius, both extrapolated to zero volume at minus 273 degrees',
        x: { min: -300, max: 130, label: 'θ / °C', ticks: [[-273, '−273'], [0, '0'], [100, '100']] }, y: { max: 4, label: 'V' },
        lines: [{ pts: [[0, 2.73], [100, 3.73]] }, { pts: [[0, 1.37], [100, 1.87]] }, { pts: [[-273, 0], [0, 2.73]], dash: true, w: 1.5 }, { pts: [[-273, 0], [0, 1.37]], dash: true, w: 1.5 }],
        text: [[110, 3.6, 'X'], [110, 1.75, 'Y']]
      }),
      options: [
        'Sample X contains less gas than sample Y.',
        'Both gases turn into liquids at −273 °C.',
        'The two lines cross at 0 °C.',
        'Both lines extrapolate to zero volume at the same temperature, absolute zero.'
      ],
      answer: 3,
      explain: 'For any fixed mass of ideal gas at constant pressure, V ∝ T in kelvin, so every such line meets V = 0 at T = 0 K ≈ −273 °C, whatever its slope. (Real gases liquefy before this, so the lines are only extrapolations.) X is steeper, so it contains more gas (or is at a lower pressure).',
      zh: {
        sub: '查理定律', stem: 'X 和 Y 兩線顯示兩個各自保持恆壓的氣體樣本，其體積隨攝氏溫度 θ 的變化。兩線（以虛線）延長至體積為零。由此可推斷甚麼？',
        options: ['樣本 X 所含的氣體比 Y 少。', '兩種氣體在 −273 °C 時都變成液體。', '兩線在 0 °C 相交。', '兩線都外推至同一溫度 — 絕對零度 — 時體積為零。'],
        explain: '任何一定質量、恆壓的理想氣體，V 與開爾文溫度 T 成正比，所以不論斜率如何，這類直線都在 T = 0 K ≈ −273 °C 時到達 V = 0。（真實氣體在此之前已液化，所以只是外推。）X 較陡，所以它含有較多氣體（或壓強較低）。'
      }
    },
    {
      id: 'H109', topic: 'heat', level: 3, sub: "Boyle's law",
      stem: 'For a fixed mass of ideal gas at constant temperature, which graph shows how the product pV varies with the pressure p?',
      figure: svgPanels([{ f: () => 0.55 }, { f: x => 0.1 + 0.85 * x }, { f: x => 0.95 - 0.85 * x }, { pts: range(0.1, 1, 30).map(x => [x, 0.1 / x]) }],
        { x: 'p', y: 'pV', aria: 'Four sketch graphs of pV against p: A horizontal, B rising, C falling line, D falling curve' }),
      options: ['A', 'B', 'C', 'D'],
      answer: 0,
      explain: 'Boyle\'s law says pV is constant at constant temperature, so pV does not change as p changes: a horizontal line.',
      zh: { sub: '波義耳定律', stem: '對一定質量、溫度不變的理想氣體，哪一個線圖顯示乘積 pV 隨壓強 p 的變化？', explain: '波義耳定律指出在溫度不變時 pV 是常數，所以 p 改變時 pV 不變：一條水平線。' }
    },
    {
      id: 'H110', topic: 'heat', level: 3, sub: 'Specific heat capacity',
      stem: 'Equal masses of two substances X and Y are heated. The graph shows how the temperature rise of each depends on the energy supplied. Which statement is correct?',
      figure: svgGraph({
        aria: 'Two straight lines from the origin of temperature rise against energy; X is steeper than Y',
        x: { max: 10, label: 'E / kJ' }, y: { max: 10, label: 'ΔT / °C' },
        lines: [{ pts: [[0, 0], [5.5, 9]] }, { pts: [[0, 0], [10, 6.5]], dash: true }],
        text: [[4.6, 8.8, 'X'], [9.4, 7.2, 'Y']]
      }),
      options: ['X has the larger specific heat capacity.', 'X has the smaller specific heat capacity.', 'X has the larger mass.', 'X has the larger heat capacity.'],
      answer: 1,
      explain: 'ΔT = E / (mc), so the gradient is 1 / (mc). With equal masses, the steeper line (X) has the smaller c: X warms up more for the same energy.',
      zh: {
        sub: '比熱容量', stem: '加熱質量相同的兩種物質 X 和 Y。下圖顯示兩者的溫度上升如何隨供應的能量改變。哪項敘述是正確的？',
        options: ['X 的比熱容量較大。', 'X 的比熱容量較小。', 'X 的質量較大。', 'X 的熱容量較大。'],
        explain: 'ΔT = E / (mc)，所以斜率是 1 / (mc)。質量相同時，較陡的線（X）的 c 較小：相同能量下 X 升溫較多。'
      }
    },
    {
      id: 'H111', topic: 'heat', level: 2, sub: 'Thermometers',
      stem: 'A thermometer is calibrated by marking the length l of its liquid thread at the ice point and the steam point. The graph shows the calibration line. What temperature corresponds to a thread length of 12.0 cm?',
      figure: svgGraph({
        aria: 'Straight calibration line of thread length against temperature from 2.0 cm at 0 degrees to 22.0 cm at 100 degrees',
        x: { max: 110, label: 'θ / °C', ticks: [[0, '0'], [100, '100']] }, y: { max: 25, label: 'l / cm', ticks: [[2, '2.0'], [12, '12.0'], [22, '22.0']] },
        lines: [{ pts: [[0, 2], [100, 22]] }], guides: [[0, 22, 100, 22], [100, 22, 100, 0]]
      }),
      options: ['40 °C', '45 °C', '50 °C', '60 °C'],
      answer: 2,
      explain: 'The thread grows by 22.0 − 2.0 = 20.0 cm over 100 °C. At 12.0 cm it has grown 10.0 cm, which is half of 20.0 cm, so θ = 50 °C.',
      zh: { sub: '溫度計', stem: '標記溫度計液柱在冰點和汽點的長度 l，以校準溫度計。下圖顯示校準線。液柱長度為 12.0 cm 時對應的溫度是多少？', explain: '液柱在 100 °C 內增長 22.0 − 2.0 = 20.0 cm。在 12.0 cm 時增長了 10.0 cm，即 20.0 cm 的一半，所以 θ = 50 °C。' }
    },
    {
      id: 'H112', topic: 'heat', level: 3, sub: 'Convection',
      stem: 'Two identical kettles X and Y contain the same amount of cold water. The heating element of X is near the bottom; that of Y is near the top of the water. Which statement best describes what happens when both are switched on?',
      figure: '<svg viewBox="0 0 380 190" role="img" aria-label="Two containers of water: X has a heating coil near the bottom, Y has a heating coil near the top"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M40 30 V160 H150 V30 M230 30 V160 H340 V30"/><path d="M40 50 H150 M230 50 H340" stroke-width="1" stroke-dasharray="5 4"/><path d="M55 145 l8 -10 l8 10 l8 -10 l8 10 l8 -10 l8 10 l8 -10 l8 10 l8 -10 l8 10"/><path d="M245 70 l8 -10 l8 10 l8 -10 l8 10 l8 -10 l8 10 l8 -10 l8 10 l8 -10 l8 10"/></g><g fill="currentColor" font-size="14" font-family="inherit" text-anchor="middle"><text x="95" y="182" font-weight="700">X</text><text x="285" y="182" font-weight="700">Y</text></g></svg>',
      options: [
        'X takes longer to heat all the water, because heat rises away from its element.',
        'Both heat all the water in the same time, because the elements are identical.',
        'Y heats all the water faster, because hot water stays near its element.',
        'Y takes much longer, because the heated water stays at the top and convection cannot carry energy down to the rest.'
      ],
      answer: 3,
      explain: 'In X, water heated at the bottom becomes less dense and rises, and cooler water sinks to the element: convection heats all the water. In Y the heated water is already at the top and stays there; water is a poor conductor, so the lower water warms very slowly.',
      zh: {
        sub: '對流', stem: '兩個相同的電水壺 X 和 Y 載有相同分量的冷水。X 的發熱元件接近底部，Y 的則接近水面頂部。兩者開啟後，哪項敘述最能描述所發生的事？',
        options: ['X 需時較長才能加熱所有的水，因為熱從元件向上散去。', '元件相同，所以兩者加熱所有的水所需時間相同。', 'Y 較快加熱所有的水，因為熱水留在元件附近。', 'Y 需時長得多，因為受熱的水留在頂部，對流不能把能量帶到下方的水。'],
        explain: '在 X 中，底部受熱的水密度變小而上升，較冷的水下沉到元件：對流使所有的水受熱。在 Y 中受熱的水已在頂部並留在那裏；水是不良導體，所以下層的水升溫極慢。'
      }
    },
    {
      id: 'H113', topic: 'heat', level: 2, sub: 'Heat transfer',
      stem: 'The diagram shows a section through a vacuum flask. Which labelled part mainly reduces energy transfer by radiation?',
      figure: '<svg viewBox="0 0 380 220" role="img" aria-label="Section of a vacuum flask with labels P stopper, Q silvered surfaces, R vacuum, S outer case"><g fill="none" stroke="currentColor" stroke-width="2"><rect x="120" y="40" width="130" height="165" rx="10"/><path d="M135 60 V185 Q135 192 142 192 H228 Q235 192 235 185 V60"/><path d="M148 60 V178 Q148 182 152 182 H218 Q222 182 222 178 V60"/><rect x="145" y="22" width="80" height="34" rx="4"/><path d="M135 60 H148 M222 60 H235" stroke-width="1.5"/><path d="M225 35 H300 M222 120 H300 M229 160 H300 M250 90 H300" stroke-width="1"/></g><g fill="currentColor" font-size="13" font-family="inherit"><text x="306" y="34">P</text><text x="306" y="124">Q</text><text x="306" y="164">R</text><text x="306" y="94">S</text></g></svg>',
      options: ['Q (the silvered surfaces of the walls)', 'R (the vacuum between the walls)', 'P (the stopper)', 'S (the outer case)'],
      answer: 0,
      explain: 'Shiny silvered surfaces are poor emitters and good reflectors of radiation. The vacuum (R) stops conduction and convection but not radiation; the stopper (P) reduces conduction and convection at the top; the case (S) mainly protects the fragile glass.',
      zh: {
        sub: '熱轉移', stem: '下圖顯示真空瓶的剖面。哪一個標示的部分主要減少經輻射的能量轉移？',
        options: ['Q（瓶壁的鍍銀表面）', 'R（兩壁之間的真空）', 'P（瓶塞）', 'S（外殼）'],
        explain: '光亮的鍍銀表面是不良的輻射放射體和良好的反射體。真空（R）阻止傳導和對流，但不能阻止輻射；瓶塞（P）減少頂部的傳導和對流；外殼（S）主要保護易碎的玻璃。'
      }
    },
    {
      id: 'H114', topic: 'heat', level: 4, sub: 'Pressure law',
      stem: 'The same amount of an ideal gas is sealed in each of two rigid containers. Lines X and Y show how the pressure of each varies with absolute temperature T. Which statement is correct?',
      figure: svgGraph({
        aria: 'Two straight lines through the origin of p against T; X steeper than Y',
        x: { max: 10, label: 'T / K' }, y: { max: 10, label: 'p' },
        lines: [{ pts: [[0, 0], [6, 9]] }, { pts: [[0, 0], [10, 5]], dash: true }], text: [[5.2, 8.8, 'X'], [9.4, 5.6, 'Y']]
      }),
      options: ['Gas X is at a higher temperature.', 'Container X has the smaller volume.', 'The molecules of X are heavier.', 'Container X has the larger volume.'],
      answer: 1,
      explain: 'p = (nR / V) T, so the gradient is nR / V. With the same n, the steeper line (X) belongs to the smaller volume: the same molecules are packed into less space and hit the walls more often.',
      zh: {
        sub: '壓強定律', stem: '兩個剛性容器各密封了相同分量的理想氣體。X 和 Y 兩線顯示兩者的壓強如何隨絕對溫度 T 改變。哪項敘述是正確的？',
        options: ['氣體 X 的溫度較高。', '容器 X 的體積較小。', 'X 的分子較重。', '容器 X 的體積較大。'],
        explain: 'p = (nR / V) T，所以斜率是 nR / V。n 相同時，較陡的線（X）的體積較小：相同的分子擠在較小的空間內，撞擊器壁更頻密。'
      }
    },
    {
      id: 'H115', topic: 'heat', level: 3, sub: 'Heating curve',
      stem: 'Ice at −20 °C is heated at a constant rate until it has melted and the water reaches 20 °C. The graph shows the temperature against time. Why is the graph steeper for the ice than for the water?',
      figure: svgGraph({
        aria: 'Temperature against time: rises steeply from -20 to 0, flat while melting, then rises less steeply to 20',
        x: { max: 10, label: 't / min' }, y: { min: -30, max: 30, label: 'θ / °C', ticks: [[20, '20'], [-20, '−20']] },
        lines: [{ pts: [[0, -20], [1, 0], [6, 0], [8, 20]] }]
      }),
      options: [
        'The ice gains less energy per minute.',
        'Ice has a higher specific heat capacity than water.',
        'Ice has a lower specific heat capacity than water.',
        'More energy is lost to the surroundings while the ice is warming.'
      ],
      answer: 2,
      explain: 'The heater supplies energy at the same rate throughout, and the mass is unchanged. Rate of rise = P / (mc), so the steeper slope for ice means ice has the smaller specific heat capacity (about 2100 J kg⁻¹ °C⁻¹, half that of water).',
      zh: {
        sub: '加熱曲線', stem: '以恆定速率加熱 −20 °C 的冰，直至冰熔化，水溫升至 20 °C。下圖顯示溫度對時間的關係。為甚麼冰那一段比水那一段陡？',
        options: ['冰每分鐘獲得的能量較少。', '冰的比熱容量比水高。', '冰的比熱容量比水低。', '冰升溫期間散失到周圍環境的能量較多。'],
        explain: '電熱器始終以相同速率供應能量，質量亦不變。升溫率 = P / (mc)，所以冰那段較陡，表示冰的比熱容量較小（約 2100 J kg⁻¹ °C⁻¹，是水的一半）。'
      }
    },
    {
      id: 'H116', topic: 'heat', level: 2, sub: 'Brownian motion',
      stem: 'The diagram shows the path of one smoke particle in air, observed through a microscope and marked every few seconds. What does this observation show?',
      figure: '<svg viewBox="0 0 380 180" role="img" aria-label="Random zig-zag path of a smoke particle"><g fill="none" stroke="currentColor" stroke-width="1.8"><path d="M60 120 L95 70 L130 105 L118 150 L170 128 L190 60 L225 92 L210 135 L262 118 L280 52 L320 84 L300 140"/></g><g fill="currentColor">' + [[60, 120], [95, 70], [130, 105], [118, 150], [170, 128], [190, 60], [225, 92], [210, 135], [262, 118], [280, 52], [320, 84], [300, 140]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3"/>`).join('') + '</g></svg>',
      options: [
        'The smoke particles are alive.',
        'The smoke particles are pushed by convection currents.',
        'The smoke particles attract one another.',
        'Air molecules are moving randomly and colliding with the smoke particles.'
      ],
      answer: 3,
      explain: 'This random, jerky movement is Brownian motion. The smoke particle is hit unevenly by fast, randomly moving air molecules, which are far too small to see. It is evidence for the kinetic model of gases.',
      zh: {
        sub: '布朗運動', stem: '下圖顯示透過顯微鏡觀察並每隔數秒標記一次的一粒煙粒在空氣中的路徑。這觀察顯示了甚麼？',
        options: ['煙粒是有生命的。', '煙粒被對流推動。', '煙粒之間互相吸引。', '空氣分子在作無規運動，並與煙粒碰撞。'],
        explain: '這種無規則的急促運動是布朗運動。煙粒受到小得看不見、高速作無規運動的空氣分子不均勻的撞擊。這是氣體分子運動模型的證據。'
      }
    },
    {
      id: 'H117', topic: 'heat', level: 4, sub: "Boyle's law",
      stem: 'For a fixed mass of ideal gas at constant temperature, a graph of p against 1/V is a straight line through the origin. The experiment is repeated with the same gas at a higher temperature. How does the new line compare?',
      figure: svgGraph({ aria: 'Straight line through the origin of p against 1/V', x: { max: 10, label: '1/V' }, y: { max: 10, label: 'p' }, lines: [{ pts: [[0, 0], [9, 7]] }] }),
      options: ['It is steeper.', 'It is less steep.', 'It is no longer a straight line.', 'It no longer passes through the origin.'],
      answer: 0,
      explain: 'pV = nRT ⇒ p = nRT × (1/V). The graph is still a straight line through the origin, with gradient nRT. A higher T gives a larger gradient, so the line is steeper.',
      zh: { sub: '波義耳定律', stem: '對一定質量、溫度不變的理想氣體，p 對 1/V 的線圖是一條通過原點的直線。用同一氣體在較高溫度下重做實驗。新的線與原來的相比如何？', options: ['較陡。', '較平。', '不再是直線。', '不再通過原點。'], explain: 'pV = nRT ⇒ p = nRT × (1/V)。線圖仍是通過原點的直線，斜率為 nRT。T 較高，斜率較大，所以線較陡。' }
    },
    {
      id: 'H118', topic: 'heat', level: 2, sub: 'Radiation',
      stem: 'Two identical cans of water, one painted dull black and the other shiny silver, are left in sunlight. The graph shows the temperature of the water in each. Which explanation is correct?',
      figure: svgGraph({
        aria: 'Temperature against time for two cans: black rises faster than silver',
        x: { max: 10, label: 't / min' }, y: { max: 50, label: 'θ / °C', ticks: [[20, '20']] },
        lines: [{ f: t => 20 + 25 * (1 - Math.exp(-t / 5)), from: 0, to: 10 }, { f: t => 20 + 10 * (1 - Math.exp(-t / 5)), from: 0, to: 10, dash: true }],
        text: [[8.6, 44, 'black'], [8.6, 24, 'silver']]
      }),
      options: [
        'Shiny silver is a better absorber of radiation.',
        'A dull black surface is a better absorber of radiation.',
        'Black paint is a better conductor of heat.',
        'The silver can loses more energy by convection.'
      ],
      answer: 1,
      explain: 'Both cans receive the same radiation from the Sun. The dull black surface absorbs most of it, while the shiny silver surface reflects most of it, so the water in the black can warms faster.',
      zh: {
        sub: '輻射', stem: '把兩個相同、盛水的罐放在陽光下，一個塗成暗黑色，另一個是光亮銀色。下圖顯示兩罐水的溫度。哪項解釋是正確的？',
        options: ['光亮銀色是較佳的輻射吸收體。', '暗黑色表面是較佳的輻射吸收體。', '黑色油漆是較佳的熱導體。', '銀色罐經對流散失的能量較多。'],
        explain: '兩罐接收相同的太陽輻射。暗黑色表面吸收大部分輻射，光亮銀色表面則反射大部分輻射，所以黑罐內的水升溫較快。'
      }
    },
    {
      id: 'H119', topic: 'heat', level: 3, sub: 'Latent heat',
      stem: 'In an experiment, the energy needed to melt different masses of ice at 0 °C is measured. The graph of energy supplied E against mass melted m is a straight line through the origin. What does the gradient of the graph represent?',
      figure: svgGraph({ aria: 'Straight line through the origin of energy E against mass melted m', x: { max: 10, label: 'm / kg' }, y: { max: 10, label: 'E / J' }, lines: [{ pts: [[0, 0], [9, 8]] }] }),
      options: ['The specific heat capacity of ice', 'The heat capacity of the ice', 'The specific latent heat of fusion of ice', 'The melting point of ice'],
      answer: 2,
      explain: 'E = mℓ, so E / m = ℓ: the gradient is the energy needed per kilogram to melt ice at constant temperature — the specific latent heat of fusion.',
      zh: { sub: '潛熱', stem: '在一個實驗中，量度熔化不同質量的 0 °C 冰所需的能量。供應的能量 E 對熔化質量 m 的線圖是一條通過原點的直線。線圖的斜率代表甚麼？', options: ['冰的比熱容量', '冰的熱容量', '冰的熔解比潛熱', '冰的熔點'], explain: 'E = mℓ，所以 E / m = ℓ：斜率是在恆溫下熔化每千克冰所需的能量 — 即熔解比潛熱。' }
    },
    {
      id: 'H120', topic: 'heat', level: 3, sub: 'Convection',
      stem: 'The diagram shows the coast on a clear night. In which direction does the breeze near the ground usually blow, and why?',
      figure: '<svg viewBox="0 0 380 170" role="img" aria-label="Coast at night: land on the left, sea on the right, moon in the sky"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M20 120 H190 L215 140 H360"/><path d="M215 150 q12 -8 24 0 t24 0 t24 0 t24 0 t24 0 t24 0" stroke-width="1.5"/><path d="M300 40 a18 18 0 1 0 14 30 a14 14 0 1 1 -14 -30 Z"/></g><g fill="currentColor" font-size="14" font-family="inherit" text-anchor="middle"><text x="100" y="150">land</text><text x="290" y="125">sea</text></g></svg>',
      options: [
        'From sea to land, because the land is warmer at night.',
        'From sea to land, because the sea cools faster at night.',
        'From land to sea, because the sea cools faster at night.',
        'From land to sea, because the land cools faster and the warmer air over the sea rises.'
      ],
      answer: 3,
      explain: 'The land has a lower specific heat capacity, so at night it cools faster than the sea. Air over the relatively warm sea rises (convection), and cooler air from over the land flows out to replace it: a land breeze.',
      zh: {
        sub: '對流', stem: '下圖顯示晴朗夜晚的海岸。近地面的微風通常吹向哪個方向？為甚麼？',
        options: ['由海吹向陸地，因為晚上陸地較暖。', '由海吹向陸地，因為晚上海水冷卻得較快。', '由陸地吹向海，因為晚上海水冷卻得較快。', '由陸地吹向海，因為陸地冷卻得較快，海面上較暖的空氣上升。'],
        explain: '陸地的比熱容量較低，所以晚上冷卻得比海快。相對溫暖的海面上的空氣上升（對流），陸地上較冷的空氣流出補充：形成陸風。'
      }
    }
  ]);

  /* ================= Force and Motion (M104–M119) ================= */

  // Four tall blocks tilted about their bottom-right corner; the dashed line drops from the centre of gravity.
  const topple = [10, 45, 15, 20].map((deg, i) => {
    const px = 70 + i * 90, py = 130, th = deg * Math.PI / 180;
    const cx = px - 15 * Math.cos(th) + 35 * Math.sin(th), cy = py - 15 * Math.sin(th) - 35 * Math.cos(th);
    return `<rect x="${px - 30}" y="${py - 70}" width="30" height="70" fill="none" stroke="currentColor" stroke-width="2" transform="rotate(${deg} ${px} ${py})"/>` +
      dot(cx, cy, 3) + line(`M${r1(cx)} ${r1(cy)} V${py}`, 1.2, true) + text(px - 10, 156, 'ABCD'[i], { bold: true });
  }).join('');
  const parab = (x0, x1, f) => 'M' + range(x0, x1, 30).map(x => r1(x) + ' ' + r1(f(x))).join(' L');

  addBank([
    {
      id: 'M104', topic: 'force', level: 2, sub: 'Motion graphs',
      stem: 'Which displacement–time graph shows an object moving in a straight line with increasing speed?',
      figure: svgPanels([{ f: x => 0.9 * x * x }, { f: x => 0.9 * Math.sqrt(x) }, { f: x => 0.9 * x }, { f: () => 0.6 }],
        { x: 't', y: 's', aria: 'Four sketch graphs of s against t: A curving upwards, B curving and levelling off, C straight line, D horizontal' }),
      options: ['A', 'B', 'C', 'D'],
      answer: 0,
      explain: 'The gradient of an s–t graph is the velocity. In A the gradient keeps increasing, so the speed increases. B is slowing down, C has constant speed and D is at rest.',
      zh: { sub: '運動線圖', stem: '哪一個位移－時間線圖顯示物體沿直線運動而速率不斷增加？', explain: 's–t 線圖的斜率是速度。A 的斜率不斷增加，所以速率增加。B 在減速，C 的速率不變，D 處於靜止。' }
    },
    {
      id: 'M105', topic: 'force', level: 3, sub: 'Motion graphs',
      stem: 'A ball is thrown vertically upwards and caught again at the same height. Taking upwards as positive and ignoring air resistance, which graph shows how its velocity v varies with time t?',
      figure: svgPanels([{ f: x => Math.abs(0.8 - 1.6 * x) }, { f: x => 0.8 - 1.6 * x }, { f: x => -0.8 + 1.6 * x }, { f: x => 0.8 * Math.cos(Math.PI * x) }],
        { x: 't', y: 'v', mid: true, aria: 'Four sketch graphs of v against t: A V-shape above the axis, B straight line falling through zero, C straight line rising through zero, D cosine curve' }),
      options: ['A', 'B', 'C', 'D'],
      answer: 1,
      explain: 'The only force is the weight, so the acceleration is constant at −g: v–t is a straight line with negative gradient. v starts positive, passes zero at the top and ends equally negative. A shows speed, not velocity.',
      zh: { sub: '運動線圖', stem: '把球豎直向上拋出，然後在相同高度接回。以向上為正並忽略空氣阻力，哪一個線圖顯示其速度 v 隨時間 t 的變化？', explain: '唯一的力是重量，所以加速度恆為 −g：v–t 是負斜率的直線。v 由正值開始，在最高點為零，最後是大小相同的負值。A 顯示的是速率而非速度。' }
    },
    {
      id: 'M106', topic: 'force', level: 2, sub: 'Newton\'s first law',
      stem: 'A car moves along a straight level road at constant velocity. The diagram shows the forces on it: driving force F, resistive force f, weight W and normal force N. Which statement is correct?',
      figure: svg(380, 190, 'Car with four force arrows: F forward, f backward, W down, N up',
        line('M150 70 H250 V118 H150 Z') + circ(172, 124, 9) + circ(228, 124, 9) +
        arrow(250, 95, 330, 95) + arrow(150, 95, 70, 95) + arrow(200, 118, 200, 178) + arrow(200, 70, 200, 12) +
        text(336, 100, 'F', { anchor: 'start' }) + text(64, 100, 'f', { anchor: 'end' }) + text(210, 180, 'W', { anchor: 'start' }) + text(210, 24, 'N', { anchor: 'start' }) +
        arrow(270, 40, 340, 40, 1.5) + text(305, 30, 'velocity')),
      options: [
        'F is greater than f, otherwise the car would slow down.',
        'N is greater than W.',
        'F = f and N = W, so the resultant force is zero.',
        'There is a resultant force in the direction of motion.'
      ],
      answer: 2,
      explain: 'Constant velocity means zero acceleration, so by Newton\'s first law the resultant force is zero: forwards and backwards forces balance (F = f) and so do the vertical forces (N = W). No resultant force is needed to keep moving.',
      zh: {
        sub: '牛頓第一定律', stem: '汽車在平直的路上以恆定速度行駛。圖中顯示作用於汽車的力：驅動力 F、阻力 f、重量 W 和法向力 N。哪項敘述是正確的？',
        options: ['F 大於 f，否則汽車會減速。', 'N 大於 W。', 'F = f 且 N = W，所以合力為零。', '有一個沿運動方向的合力。'],
        explain: '速度恆定即加速度為零，根據牛頓第一定律合力為零：向前和向後的力平衡（F = f），豎直方向的力亦平衡（N = W）。保持運動並不需要合力。'
      }
    },
    {
      id: 'M107', topic: 'force', level: 3, sub: 'Terminal velocity',
      stem: 'The graph shows the velocity of a skydiver from the moment she leaves the aircraft. During which stage is the air resistance on her greater than her weight?',
      figure: svgGraph({
        aria: 'Velocity against time for a skydiver: rises from O to a steady value at P, steady until Q, falls sharply to R, then steady at a lower value to S',
        x: { max: 18, label: 't' }, y: { max: 60, label: 'v' },
        lines: [{ pts: range(0, 8, 24).map(t => [t, 50 * (1 - Math.exp(-t / 1.8))]).concat([[11, 50]], range(11, 14, 15).map(t => [t, 8 + 42 * Math.exp(-(t - 11) / 0.7)]), [[18, 8.6]]) }],
        dots: [[0, 0, 'O', -10, 4], [8, 49.4, 'P'], [11, 50, 'Q'], [14, 8.6, 'R'], [18, 8.5, 'S']]
      }),
      options: ['OP', 'PQ', 'RS', 'QR'],
      answer: 3,
      explain: 'OP: she speeds up, so air resistance < weight. PQ and RS: terminal velocity, so air resistance = weight. QR: after the parachute opens she slows down, so the upward air resistance must be greater than her weight.',
      zh: {
        sub: '終端速度', stem: '下圖顯示跳傘員離開飛機後的速度。在哪一階段，她所受的空氣阻力大於她的重量？',
        explain: 'OP：她在加速，所以空氣阻力 < 重量。PQ 和 RS：終端速度，所以空氣阻力 = 重量。QR：打開降落傘後她在減速，所以向上的空氣阻力必定大於她的重量。'
      }
    },
    {
      id: 'M108', topic: 'force', level: 4, sub: 'Impulse',
      stem: 'Two identical balls at rest are struck. The graphs show how the force on each ball varies with time during the impact. Which statement is correct?',
      figure: svgGraph({
        aria: 'Force against time: X is a tall narrow triangle peaking at 8 N at 1 ms; Y is a low wide triangle peaking at 4 N at 2 ms',
        x: { max: 5, label: 't / ms', ticks: [[1, '1'], [2, '2'], [4, '4']] }, y: { max: 9, label: 'F / N', ticks: [[4, '4'], [8, '8']] },
        lines: [{ pts: [[0, 0], [1, 8], [2, 0]] }, { pts: [[0, 0], [2, 4], [4, 0]], dash: true }],
        text: [[1.25, 7.5, 'X', 'start'], [3.2, 3, 'Y', 'start']]
      }),
      options: [
        'Both balls leave with the same momentum.',
        'X leaves with the greater momentum, because its peak force is larger.',
        'Y leaves with the greater momentum, because the force acts for longer.',
        'X leaves with the greater momentum, because it is hit for a shorter time.'
      ],
      answer: 0,
      explain: 'Change in momentum = impulse = area under the F–t graph. X: ½ × 2 ms × 8 N = 8 × 10⁻³ N s. Y: ½ × 4 ms × 4 N = 8 × 10⁻³ N s. The areas are equal, so both balls gain the same momentum.',
      zh: {
        sub: '衝量', stem: '兩個相同的靜止球被擊打。下圖顯示撞擊期間每個球所受的力隨時間的變化。哪項敘述是正確的？',
        options: ['兩球離開時的動量相同。', 'X 離開時的動量較大，因為它所受的最大力較大。', 'Y 離開時的動量較大，因為力作用的時間較長。', 'X 離開時的動量較大，因為它被擊打的時間較短。'],
        explain: '動量的改變 = 衝量 = F–t 線圖下的面積。X：½ × 2 ms × 8 N = 8 × 10⁻³ N s。Y：½ × 4 ms × 4 N = 8 × 10⁻³ N s。兩面積相等，所以兩球獲得相同的動量。'
      }
    },
    {
      id: 'M109', topic: 'force', level: 3, sub: 'Conservation of momentum',
      stem: 'Two trolleys at rest on a smooth track are pushed apart by a compressed spring released between them. The 2.0 kg trolley moves off to the left at 1.0 m s⁻¹. What is the velocity of the 1.0 kg trolley?',
      figure: svg(380, 160, 'A 2.0 kg trolley and a 1.0 kg trolley with a compressed spring between them; the 2.0 kg trolley moves left at 1.0 m/s',
        line('M60 80 H170 V120 H60 Z') + line('M210 80 H290 V120 H210 Z') + line('M170 100 l5 -8 l5 16 l5 -16 l5 16 l5 -16 l5 16 l5 -8', 1.8) +
        circ(80, 127, 7) + circ(150, 127, 7) + circ(225, 127, 7) + circ(275, 127, 7) + line('M30 135 H350', 1.5) +
        text(115, 105, '2.0 kg') + text(250, 105, '1.0 kg') + arrow(140, 55, 70, 55) + text(105, 45, '1.0 m s⁻¹')),
      options: ['0.5 m s⁻¹ to the right', '2.0 m s⁻¹ to the right', '2.0 m s⁻¹ to the left', '4.0 m s⁻¹ to the right'],
      answer: 1,
      explain: 'Total momentum before = 0, so after the push the two momenta are equal and opposite: 2.0 × 1.0 = 1.0 × v ⇒ v = 2.0 m s⁻¹, to the right.',
      zh: {
        sub: '動量守恆', stem: '兩部靜止於光滑軌道上的小車，被它們之間一條釋放的壓縮彈簧推開。2.0 kg 的小車以 1.0 m s⁻¹ 向左移動。1.0 kg 小車的速度是多少？',
        options: ['向右 0.5 m s⁻¹', '向右 2.0 m s⁻¹', '向左 2.0 m s⁻¹', '向右 4.0 m s⁻¹'],
        explain: '之前的總動量 = 0，所以推開後兩者的動量大小相等、方向相反：2.0 × 1.0 = 1.0 × v ⇒ v = 2.0 m s⁻¹，向右。'
      }
    },
    {
      id: 'M110', topic: 'force', level: 2, sub: 'Projectile motion',
      stem: 'A ball is thrown and follows the path shown. Ignoring air resistance, which arrow shows the direction of its acceleration at the highest point?',
      figure: svg(380, 180, 'Parabolic path of a ball with four arrows at the highest point: A horizontal forward, B up, C down, D diagonally forward and down',
        line(parab(30, 350, x => 78 + 92 * ((x - 190) / 160) ** 2), 1.8, true) + dot(190, 78, 6) +
        arrow(190, 78, 248, 78) + arrow(190, 78, 190, 22) + arrow(190, 78, 190, 140) + arrow(190, 78, 232, 120) +
        text(256, 83, 'A', { anchor: 'start', bold: true }) + text(200, 26, 'B', { anchor: 'start', bold: true }) + text(178, 150, 'C', { anchor: 'end', bold: true }) + text(240, 132, 'D', { anchor: 'start', bold: true })),
      options: ['A', 'B', 'C', 'D'],
      answer: 2,
      explain: 'The only force is the weight, so the acceleration is g vertically downwards at every point of the path — including the top, where the velocity is horizontal.',
      zh: { sub: '拋體運動', stem: '一個被拋出的球沿圖示路徑運動。忽略空氣阻力，哪一個箭號顯示球在最高點時加速度的方向？', explain: '唯一的力是重量，所以在路徑上每一點加速度都是豎直向下的 g — 包括速度為水平的最高點。' }
    },
    {
      id: 'M111', topic: 'force', level: 3, sub: 'Circular motion',
      stem: 'Viewed from above, a car travels anticlockwise round a circular track at constant speed. Which arrow shows the direction of the resultant force on the car at the position shown?',
      figure: svg(380, 200, 'Circular track seen from above with a car at the right-hand side and four arrows: A up along the track, B outwards, C down along the track, D towards the centre',
        circ(180, 100, 75, 1.8) + dot(180, 100, 2.5) + line('M247 92 H263 V108 H247 Z', 2) +
        arrow(255, 92, 255, 40) + arrow(263, 100, 325, 100) + arrow(255, 108, 255, 162) + arrow(247, 100, 195, 100) +
        text(265, 46, 'A', { anchor: 'start', bold: true }) + text(332, 105, 'B', { anchor: 'start', bold: true }) + text(265, 166, 'C', { anchor: 'start', bold: true }) + text(205, 92, 'D', { bold: true })),
      options: ['A', 'B', 'C', 'D'],
      answer: 3,
      explain: 'At constant speed in a circle the velocity keeps changing direction, so there is a centripetal acceleration towards the centre. The resultant force (here friction on the tyres) points towards the centre.',
      zh: { sub: '圓周運動', stem: '從上方看，一輛汽車以恆定速率沿圓形跑道逆時針行駛。哪一個箭號顯示汽車在圖示位置時所受合力的方向？', explain: '以恆定速率作圓周運動時，速度方向不斷改變，所以有指向圓心的向心加速度。合力（這裏是輪胎所受的摩擦力）指向圓心。' }
    },
    {
      id: 'M112', topic: 'force', level: 2, sub: 'Moments',
      stem: 'A uniform metre rule is balanced at its centre. A 4.0 N weight hangs 30 cm to the left of the pivot. What downward force F, applied 20 cm to the right of the pivot, keeps the rule balanced?',
      figure: svg(380, 170, 'Metre rule balanced at its centre with 4.0 N hanging 30 cm left of the pivot and force F 20 cm right of the pivot',
        line('M40 90 H340 V100 H40 Z') + line('M190 100 L178 122 H202 Z') + arrow(100, 100, 100, 150) + arrow(250, 100, 250, 150) +
        text(108, 150, '4.0 N', { anchor: 'start' }) + text(258, 150, 'F', { anchor: 'start' }) +
        line('M100 70 H190 M190 70 H250', 1) + line('M100 64 V76 M190 64 V76 M250 64 V76', 1) + text(145, 62, '30 cm') + text(220, 62, '20 cm')),
      options: ['6.0 N', '8.0 N', '10 N', '12 N'],
      answer: 0,
      explain: 'Taking moments about the pivot (the rule\'s weight acts at the pivot): 4.0 × 0.30 = F × 0.20 ⇒ F = 6.0 N.',
      zh: { sub: '力矩', stem: '一把均勻的米尺在其中點平衡。一個 4.0 N 的重物掛在支點左方 30 cm 處。在支點右方 20 cm 處需施加多大的向下的力 F，才能使米尺保持平衡？', explain: '取支點的力矩（米尺的重量作用於支點）：4.0 × 0.30 = F × 0.20 ⇒ F = 6.0 N。' }
    },
    {
      id: 'M113', topic: 'force', level: 3, sub: 'Stability',
      stem: 'Four identical tall blocks are tilted about their bottom right-hand edge and released. The dot marks each block\'s centre of gravity, with a vertical dashed line below it. Which block will topple over?',
      figure: svg(380, 165, 'Four identical blocks tilted by different angles; in B the vertical line from the centre of gravity falls outside the base', line('M20 130 H360', 1.5) + topple),
      options: ['A', 'B', 'C', 'D'],
      answer: 1,
      explain: 'A block topples when the vertical line through its centre of gravity falls outside its base (beyond the pivot edge). The weight then has a moment that turns it further over. Only in B does the line fall outside the base.',
      zh: { sub: '穩定性', stem: '四塊相同的高木塊繞其右下方的邊傾側後放手。圓點標示每塊木塊的重心，其下方畫有豎直虛線。哪一塊木塊會翻倒？', explain: '當通過重心的豎直線落在底面以外（越過支點邊）時，木塊會翻倒，因為重量產生使它繼續翻轉的力矩。只有 B 的豎直線落在底面以外。' }
    },
    {
      id: 'M114', topic: 'force', level: 3, sub: 'Energy',
      stem: 'An object is dropped from rest. Ignoring air resistance, which graph shows how its kinetic energy KE varies with the distance d it has fallen?',
      figure: svgPanels([{ f: x => 0.9 * x * x }, { f: x => 0.9 * Math.sqrt(x) }, { f: x => 0.9 * x }, { f: () => 0.6 }],
        { x: 'd', y: 'KE', aria: 'Four sketch graphs of KE against d: A curving upwards, B curving and levelling off, C straight line through origin, D horizontal' }),
      options: ['A', 'B', 'C', 'D'],
      answer: 2,
      explain: 'Loss of PE = gain in KE, so KE = mgd: directly proportional to the distance fallen, a straight line through the origin. (KE against time would curve upwards, as in A.)',
      zh: { sub: '能量', stem: '一物體由靜止釋放。忽略空氣阻力，哪一個線圖顯示其動能 KE 隨下墜距離 d 的變化？', explain: '勢能的減少 = 動能的增加，所以 KE = mgd：與下墜距離成正比，是一條通過原點的直線。（KE 對時間的線圖才會向上彎，如 A。）' }
    },
    {
      id: 'M115', topic: 'force', level: 4, sub: 'Gravitation',
      stem: 'Two satellites X and Y move in circular orbits around the Earth, as shown. Which statement is correct?',
      figure: svg(380, 200, 'Earth with two circular orbits; satellite X on the inner orbit and Y on the outer orbit',
        circ(190, 100, 22) + text(190, 105, 'Earth', { size: 11 }) + line('M245 100 A55 55 0 1 0 245 100.01', 1.5, true) + line('M280 100 A90 90 0 1 0 280 100.01', 1.5, true) +
        dot(229, 61, 5) + dot(254, 36, 5) + text(222, 52, 'X', { bold: true }) + text(266, 30, 'Y', { anchor: 'start', bold: true })),
      options: ['Y moves faster than X.', 'Y has the larger centripetal acceleration.', 'X and Y have the same period.', 'Y has the longer period.'],
      answer: 3,
      explain: 'Gravity provides the centripetal force: GMm/r² = mv²/r ⇒ v = √(GM/r), so the outer satellite is slower, and its acceleration GM/r² is smaller. It also has further to go, so its period T = 2πr/v (∝ r^1.5) is longer.',
      zh: {
        sub: '萬有引力', stem: '兩顆人造衞星 X 和 Y 如圖所示環繞地球作圓周運動。哪項敘述是正確的？',
        options: ['Y 的速率比 X 快。', 'Y 的向心加速度較大。', 'X 和 Y 的周期相同。', 'Y 的周期較長。'],
        explain: '引力提供向心力：GMm/r² = mv²/r ⇒ v = √(GM/r)，所以外層的衞星較慢，其加速度 GM/r² 亦較小。它要走的路程亦較長，所以周期 T = 2πr/v（∝ r^1.5）較長。'
      }
    },
    {
      id: 'M116', topic: 'force', level: 3, sub: 'Resultant force',
      stem: 'Two forces of 3 N and 4 N act at right angles on the same point, as shown. What is their resultant?',
      figure: svg(380, 190, 'A 3 N force to the right and a 4 N force upwards acting on point O',
        dot(110, 160, 4) + arrow(110, 160, 200, 160) + arrow(110, 160, 110, 40) + line('M200 160 V40 H110', 1, true) +
        text(155, 180, '3 N') + text(100, 100, '4 N', { anchor: 'end' }) + text(100, 172, 'O', { anchor: 'end' })),
      options: ['5 N at 53° to the 3 N force', '5 N at 37° to the 3 N force', '7 N at 53° to the 3 N force', '1 N along the 4 N force'],
      answer: 0,
      explain: 'Add the forces as vectors: the resultant is the diagonal of the rectangle. Size = √(3² + 4²) = 5 N; angle to the 3 N force = tan⁻¹(4/3) ≈ 53°.',
      zh: {
        sub: '合力', stem: '大小為 3 N 和 4 N 的兩個力互成直角作用於同一點，如圖所示。它們的合力是甚麼？',
        options: ['5 N，與 3 N 的力成 53°', '5 N，與 3 N 的力成 37°', '7 N，與 3 N 的力成 53°', '1 N，沿 4 N 的力的方向'],
        explain: '以向量方式相加：合力是長方形的對角線。大小 = √(3² + 4²) = 5 N；與 3 N 的力的夾角 = tan⁻¹(4/3) ≈ 53°。'
      }
    },
    {
      id: 'M117', topic: 'force', level: 3, sub: 'Newton\'s second law',
      stem: 'A girl stands on bathroom scales in a lift. The graph shows the lift\'s velocity as it travels upwards. During which stage does the scale reading exceed her weight?',
      figure: svgGraph({
        aria: 'Velocity against time for a lift: rises from O to A, constant from A to B, falls to zero from B to C, at rest from C to D',
        x: { max: 13, label: 't' }, y: { max: 3, label: 'v' },
        lines: [{ pts: [[0, 0], [2, 2], [8, 2], [10, 0], [12, 0]] }],
        dots: [[0, 0, 'O', -10, 4], [2, 2, 'A'], [8, 2, 'B'], [10, 0, 'C', 0, -9], [12, 0, 'D', 0, -9]]
      }),
      options: ['AB', 'OA', 'BC', 'CD'],
      answer: 1,
      explain: 'The scale reading is the normal force R. With upwards positive, R − mg = ma. R > mg only when the acceleration is upwards: stage OA, where the upward velocity increases. In AB and CD a = 0 (R = mg); in BC a is downwards (R < mg).',
      zh: { sub: '牛頓第二定律', stem: '一名女孩站在升降機內的磅上。下圖顯示升降機上升時的速度。在哪一階段，磅的讀數大於她的重量？', explain: '磅的讀數是法向力 R。以向上為正，R − mg = ma。只有加速度向上時 R > mg：即向上速度增加的 OA 階段。在 AB 和 CD，a = 0（R = mg）；在 BC，a 向下（R < mg）。' }
    },
    {
      id: 'M118', topic: 'force', level: 3, sub: 'Inclined plane',
      stem: 'A block of mass m is at rest on a slope inclined at θ to the horizontal. What is the size of the normal force from the slope on the block?',
      figure: svg(380, 190, 'A block resting on a slope inclined at angle theta',
        line('M40 170 H340 V60 Z') + `<g transform="rotate(-20.1 200 111.3)">${line('M172 111.3 H228 V75.3 H172 Z')}</g>` + line('M95 170 A55 55 0 0 0 91.6 151.3', 1.5) + text(110, 163, 'θ', { anchor: 'start' })),
      options: ['mg', 'mg sin θ', 'mg cos θ', 'mg tan θ'],
      answer: 2,
      explain: 'Resolve the weight along and perpendicular to the slope. There is no acceleration perpendicular to the slope, so the normal force balances the perpendicular component: N = mg cos θ. (Friction balances mg sin θ along the slope.)',
      zh: { sub: '斜面', stem: '質量為 m 的木塊靜止於與水平成 θ 角的斜面上。斜面對木塊的法向力有多大？', explain: '把重量分解為沿斜面和垂直於斜面的分量。垂直於斜面沒有加速度，所以法向力與垂直分量平衡：N = mg cos θ。（摩擦力與沿斜面的 mg sin θ 平衡。）' }
    },
    {
      id: 'M119', topic: 'force', level: 2, sub: 'Newton\'s third law',
      stem: 'A horse pulls a cart forwards with a force F, as shown. According to Newton\'s third law, which force forms an action–reaction pair with F?',
      figure: svg(380, 160, 'A horse pulling a cart with a rope; force F on the cart points forwards',
        line('M40 70 H170 V115 H40 Z') + circ(70, 124, 11) + circ(140, 124, 11) + line('M170 92 H225', 1.5) + line('M225 60 H325 V105 H225 Z') +
        line('M240 105 V140 M310 105 V140') + arrow(172, 50, 220, 50) + text(196, 40, 'F') + text(105, 98, 'cart') + text(275, 88, 'horse')),
      options: [
        'The friction of the ground on the cart',
        'The weight of the cart',
        'The forward push of the ground on the horse',
        'The backward pull of the cart on the horse'
      ],
      answer: 3,
      explain: 'A third-law pair acts on two different bodies, is the same type of force and is equal and opposite. The horse pulls the cart forwards, so the cart pulls the horse backwards with an equal force.',
      zh: {
        sub: '牛頓第三定律', stem: '一匹馬以力 F 向前拉動一輛車，如圖所示。根據牛頓第三定律，哪一個力與 F 組成作用力和反作用力？',
        options: ['地面對車的摩擦力', '車的重量', '地面對馬向前的推力', '車對馬向後的拉力'],
        explain: '第三定律的一對力作用於兩個不同物體上，屬同一類力，大小相等、方向相反。馬向前拉車，所以車以相等的力向後拉馬。'
      }
    }
  ]);

  /* ================= Wave Motion (W107–W122) ================= */

  // A longitudinal wave: coils displaced by 10 sin(ku), giving compressions at u = 50, 150, 250, 350.
  const coils = range(8, 392, 64).map(u => r1(u + 10 * Math.sin(2 * Math.PI * u / 100))).map(x => `M${x} 40 V100`).join(' ');
  // Straight waves meeting a gap, with four versions of what happens beyond it.
  const gapPanel = (i, kind) => {
    const x0 = 10 + i * 102, cx = x0 + 40, cy = 65;
    let s = line(`M${cx} 15 V55 M${cx} 75 V115`, 3) + line([4, 16, 28].map(d => `M${x0 + d} 22 V108`).join(' '), 1.5);
    const arcs = rs => line(rs.map(rr => `M${cx} ${cy - rr} A${rr} ${rr} 0 0 1 ${cx} ${cy + rr}`).join(' '), 1.5);
    if (kind === 'ok') s += arcs([12, 24, 36]);
    if (kind === 'straight') s += line([12, 24, 36].map(d => `M${cx + d} 57 V73`).join(' '), 1.5);
    if (kind === 'short') s += arcs([7, 14, 21, 28, 35]);
    if (kind === 'long') s += arcs([20, 40]);
    return s + text(x0 + 46, 136, 'ABCD'[i], { bold: true });
  };
  // Light meeting an air–glass boundary, with four possible refracted rays.
  const rayPanel = (i, end) => {
    const x0 = 10 + i * 102, cx = x0 + 46;
    return `<rect x="${x0}" y="62" width="92" height="56" fill="currentColor" fill-opacity="0.1"/>` + line(`M${x0} 62 H${x0 + 92}`, 1.5) +
      line(`M${cx} 15 V115`, 1, true) + line(`M${cx - 34} 18 L${cx} 62 L${cx + end[0]} ${end[1]}`, 2) + text(cx, 138, 'ABCD'[i], { bold: true });
  };
  const emBand = ['P', 'X-rays', 'Q', 'visible', 'R', 'S', 'radio'];

  addBank([
    {
      id: 'W107', topic: 'wave', level: 2, sub: 'Wave graphs',
      stem: 'The graph shows how the displacement y of one particle in a wave varies with time t. What are the amplitude and frequency of the wave?',
      figure: svgGraph({
        aria: 'Displacement against time: sine wave of amplitude 3 cm and period 0.4 s',
        x: { max: 0.9, label: 't / s', ticks: [[0.2, '0.2'], [0.4, '0.4'], [0.6, '0.6'], [0.8, '0.8']] }, y: { min: -4, max: 4, label: 'y / cm', ticks: [[3, '3'], [-3, '−3']] },
        lines: [{ f: t => 3 * Math.cos(2 * Math.PI * t / 0.4), from: 0, to: 0.8, n: 80 }]
      }),
      options: ['3 cm, 2.5 Hz', '6 cm, 2.5 Hz', '3 cm, 5.0 Hz', '6 cm, 0.4 Hz'],
      answer: 0,
      explain: 'The amplitude is the maximum displacement from equilibrium: 3 cm (not the peak-to-peak 6 cm). One complete cycle takes T = 0.4 s, so f = 1/T = 2.5 Hz.',
      zh: { sub: '波的線圖', stem: '下圖顯示波中一粒質點的位移 y 隨時間 t 的變化。該波的振幅和頻率是多少？', explain: '振幅是離開平衡位置的最大位移：3 cm（不是峰至峰的 6 cm）。完成一個周期需時 T = 0.4 s，所以 f = 1/T = 2.5 Hz。' }
    },
    {
      id: 'W108', topic: 'wave', level: 3, sub: 'Transverse waves',
      stem: 'The graph shows a transverse wave on a rope at one instant. The wave travels to the right. In which direction is particle P moving at this instant?',
      figure: svgGraph({
        aria: 'Snapshot of a sine wave travelling to the right; P is where the rope crosses the axis going upwards',
        x: { max: 2.2, label: 'x' }, y: { min: -1.7, max: 1.7, label: 'y' },
        lines: [{ f: x => Math.sin(2 * Math.PI * x), from: 0, to: 2, n: 80 }, { pts: [[1.35, 1.4], [1.8, 1.4]], w: 1.5 }, { pts: [[1.72, 1.52], [1.8, 1.4], [1.72, 1.28]], w: 1.5 }],
        dots: [[1, 0, 'P', -10, -8]], text: [[1.3, 1.33, 'direction of travel', 'end']]
      }),
      options: ['Upwards', 'Downwards', 'To the right', 'To the left'],
      answer: 1,
      explain: 'Particles on a transverse wave move only up and down. Shift the waveform slightly to the right: the trough just to the left of P moves to where P is, so P is about to move down. (Each particle copies the motion of the particle on its left.)',
      zh: {
        sub: '橫波', stem: '下圖顯示某一刻繩上的橫波。波向右傳播。此刻質點 P 向哪個方向運動？',
        options: ['向上', '向下', '向右', '向左'],
        explain: '橫波上的質點只會上下運動。把波形稍為向右移：P 左方的波谷移到 P，所以 P 即將向下運動。（每粒質點重複其左方質點的運動。）'
      }
    },
    {
      id: 'W109', topic: 'wave', level: 3, sub: 'Longitudinal waves',
      stem: 'The diagram shows the coils of a slinky spring carrying a longitudinal wave. The distance between the centres of compressions P and Q is 1.2 m. What is the wavelength?',
      figure: svg(400, 150, 'Coils of a spring bunched into four compressions; P is the first compression and Q the fourth, 1.2 m apart',
        line(coils, 1.6) + text(50, 30, 'P', { bold: true }) + text(350, 30, 'Q', { bold: true }) +
        arrow(200, 122, 52, 122, 1.2) + arrow(200, 122, 348, 122, 1.2) + line('M50 112 V132 M350 112 V132', 1) + text(200, 145, '1.2 m')),
      options: ['0.24 m', '0.30 m', '0.40 m', '0.60 m'],
      answer: 2,
      explain: 'Adjacent compressions are one wavelength apart. From P to Q there are four compressions, so three wavelengths: λ = 1.2 / 3 = 0.40 m.',
      zh: { sub: '縱波', stem: '下圖顯示傳送着縱波的「彈弓狀」彈簧的線圈。疏密波中密部 P 和 Q 中心之間的距離為 1.2 m。波長是多少？', explain: '相鄰的密部相距一個波長。由 P 到 Q 共有四個密部，即三個波長：λ = 1.2 / 3 = 0.40 m。' }
    },
    {
      id: 'W110', topic: 'wave', level: 2, sub: 'Refraction of water waves',
      stem: 'Straight water waves in a ripple tank pass from region X into region Y. The diagram shows the wavefronts seen from above. Which statement is correct?',
      figure: svg(380, 170, 'Wavefronts seen from above: widely spaced in region X on the left, closer together in region Y on the right',
        line(range(30, 150, 4).map(x => `M${x} 30 V130`).join(' ')) + line(range(198, 342, 8).map(x => `M${r1(x)} 30 V130`).join(' ')) +
        line('M184 20 V140', 1.2, true) + text(100, 18, 'X', { bold: true }) + text(270, 18, 'Y', { bold: true }) +
        arrow(150, 158, 230, 158, 1.5) + text(145, 162, 'direction of travel', { anchor: 'end', size: 12 })),
      options: [
        'Y is deeper, so the waves travel faster there.',
        'The frequency of the waves is lower in Y.',
        'The frequency of the waves is higher in Y.',
        'Y is shallower, so the waves travel more slowly there.'
      ],
      answer: 3,
      explain: 'The frequency is set by the source and does not change. The wavelength is shorter in Y, so v = fλ is smaller: water waves travel more slowly in shallower water.',
      zh: {
        sub: '水波的折射', stem: '水波槽中的直線水波由區域 X 進入區域 Y。下圖顯示從上方看到的波陣面。哪項敘述是正確的？',
        options: ['Y 較深，所以水波在那裏傳播得較快。', '水波在 Y 的頻率較低。', '水波在 Y 的頻率較高。', 'Y 較淺，所以水波在那裏傳播得較慢。'],
        explain: '頻率由波源決定，不會改變。Y 的波長較短，所以 v = fλ 較小：水波在較淺的水中傳播得較慢。'
      }
    },
    {
      id: 'W111', topic: 'wave', level: 3, sub: 'Diffraction',
      stem: 'Straight water waves meet a gap whose width is about the same as their wavelength. Which diagram correctly shows the waves after they pass through the gap?',
      figure: svg(420, 145, 'Four diagrams of waves passing through a gap: A circular waves with the same spacing, B straight waves not spreading, C circular waves closer together, D circular waves further apart',
        ['ok', 'straight', 'short', 'long'].map((k, i) => gapPanel(i, k)).join('')),
      options: ['A', 'B', 'C', 'D'],
      answer: 0,
      explain: 'A gap about one wavelength wide makes the waves spread out strongly as circular wavefronts. Speed and frequency are unchanged, so the wavelength (spacing) stays the same as before the gap.',
      zh: { sub: '衍射', stem: '直線水波遇到一個闊度與其波長相若的空隙。哪一個圖正確顯示水波穿過空隙後的情況？', explain: '闊度約為一個波長的空隙使水波大幅散開成圓形波陣面。波速和頻率不變，所以波長（間距）與穿過空隙前相同。' }
    },
    {
      id: 'W112', topic: 'wave', level: 4, sub: 'Interference',
      stem: 'Two dippers S₁ and S₂ vibrate in phase, producing water waves of wavelength 2.0 cm. The table gives the distances of points P, Q, R and S from the two sources. At which point is there destructive interference?',
      figure: svg(380, 160, 'Two sources and a table of distances: P 10 and 10 cm, Q 12 and 13 cm, R 14 and 10 cm, S 9 and 13 cm',
        dot(40, 55, 5) + dot(40, 105, 5) + text(55, 60, 'S₁', { anchor: 'start' }) + text(55, 110, 'S₂', { anchor: 'start' }) +
        line('M130 18 H360 M130 44 H360 M200 18 V148 M280 18 V148', 1) +
        text(165, 37, 'point', { size: 13 }) + text(240, 37, 'S₁ / cm', { size: 13 }) + text(320, 37, 'S₂ / cm', { size: 13 }) +
        [['P', 10, 10], ['Q', 12, 13], ['R', 14, 10], ['S', 9, 13]].map(([p, a, b], i) => text(165, 66 + i * 25, p, { bold: true }) + text(240, 66 + i * 25, a) + text(320, 66 + i * 25, b)).join('')),
      options: ['P', 'Q', 'R', 'S'],
      answer: 1,
      explain: 'Path differences: P 0, Q 1 cm, R 4 cm, S 4 cm. With λ = 2.0 cm these are 0, ½λ, 2λ and 2λ. Destructive interference needs a path difference of a half-odd number of wavelengths, so only Q.',
      zh: { sub: '干涉', stem: '兩個浸入器 S₁ 和 S₂ 同相振動，產生波長為 2.0 cm 的水波。表中列出 P、Q、R 和 S 各點與兩波源的距離。在哪一點發生相消干涉？', explain: '程差：P 0，Q 1 cm，R 4 cm，S 4 cm。λ = 2.0 cm，即 0、½λ、2λ 和 2λ。相消干涉需要程差為半波長的奇數倍，所以只有 Q。' }
    },
    {
      id: 'W113', topic: 'wave', level: 2, sub: 'Stationary waves',
      stem: 'A stationary wave is set up on a string. The diagram shows the string at its two extreme positions. Which point on the string is always at rest?',
      figure: svgGraph({
        aria: 'Stationary wave with three loops; P and S at antinodes, Q between, R at a node',
        x: { max: 3.2, label: 'x' }, y: { min: -1.5, max: 1.5, label: 'y' },
        lines: [{ f: x => Math.sin(Math.PI * x), from: 0, to: 3, n: 90 }, { f: x => -Math.sin(Math.PI * x), from: 0, to: 3, n: 90, dash: true }],
        dots: [[0.5, 1, 'P'], [1.3, -0.809, 'Q', 0, 20], [2, 0, 'R', 0, -10], [2.5, 1, 'S']]
      }),
      options: ['P', 'Q', 'R', 'S'],
      answer: 2,
      explain: 'R is at a node, where the two travelling waves always cancel, so it never moves. P and S are at antinodes (largest amplitude); Q oscillates with a smaller amplitude.',
      zh: { sub: '駐波', stem: '在弦線上產生了駐波。圖中顯示弦線的兩個極端位置。弦線上哪一點總是靜止的？', explain: 'R 位於波節，兩列行波在那裏總是互相抵消，所以它永不移動。P 和 S 位於波腹（振幅最大）；Q 以較小的振幅振動。' }
    },
    {
      id: 'W114', topic: 'wave', level: 2, sub: 'Refraction of light',
      stem: 'A ray of light travels from air into a glass block (shaded). The dashed line is the normal. Which diagram correctly shows the refracted ray?',
      figure: svg(420, 145, 'Four ray diagrams at an air–glass boundary: A ray bends away from the normal, B ray goes straight on, C ray crosses to the same side as the incident ray, D ray bends towards the normal',
        [[60, 108], [38.6, 112], [-22, 112], [22, 112]].map((e, i) => rayPanel(i, e)).join('')),
      options: ['A', 'B', 'C', 'D'],
      answer: 3,
      explain: 'Light slows down entering glass, so it bends towards the normal: the angle of refraction is smaller than the angle of incidence, and the ray continues on the other side of the normal.',
      zh: { sub: '光的折射', stem: '一道光線由空氣進入玻璃塊（陰影部分）。虛線是法線。哪一個圖正確顯示折射光線？', explain: '光進入玻璃時減速，所以偏向法線：折射角小於入射角，光線在法線的另一邊繼續前進。' }
    },
    {
      id: 'W115', topic: 'wave', level: 3, sub: 'Total internal reflection',
      stem: 'A ray of light enters a semicircular glass block along a radius and meets the flat face at the centre at an angle of incidence of 50°. The critical angle of the glass is 42°. What happens to the ray at the flat face?',
      figure: svg(380, 175, 'Semicircular glass block with flat face at the top; a ray travels along a radius to the centre, meeting the flat face at 50 degrees to the normal',
        line('M90 60 H290 A100 100 0 0 1 90 60 Z') + line('M190 15 V165', 1, true) + line('M82.8 150 L190 60', 2.2) + arrow(120, 118.8, 150, 93.6, 2.2) +
        text(178, 112, '50°', { anchor: 'end', size: 13 }) + text(250, 120, 'glass') + text(250, 40, 'air')),
      options: [
        'It is totally internally reflected.',
        'It is refracted out of the glass, bending away from the normal.',
        'It travels along the flat face.',
        'It passes straight out without bending.'
      ],
      answer: 0,
      explain: 'The ray goes from the denser medium (glass) towards air, and the angle of incidence, 50°, is greater than the critical angle, 42°. So no light is refracted out: it is totally internally reflected at 50° on the other side of the normal.',
      zh: {
        sub: '全內反射', stem: '一道光線沿半徑進入半圓形玻璃塊，在中心以 50° 的入射角射到平面。玻璃的臨界角是 42°。光線在平面上會怎樣？',
        options: ['發生全內反射。', '折射離開玻璃，偏離法線。', '沿平面前進。', '直線射出，沒有偏折。'],
        explain: '光線由光密介質（玻璃）射向空氣，入射角 50° 大於臨界角 42°，所以沒有光折射出去：光線在法線另一邊以 50° 全內反射。'
      }
    },
    {
      id: 'W116', topic: 'wave', level: 3, sub: 'Lenses',
      stem: 'An object O is placed beyond 2F in front of a convex lens. F and 2F mark one and two focal lengths from the lens. At which position is the image formed?',
      figure: svg(380, 160, 'Convex lens on a principal axis with F and 2F marked on both sides; object beyond 2F on the left; positions P at F, Q between F and 2F, R at 2F and S beyond 2F on the right',
        line('M20 95 H365', 1.2) + line('M190 30 Q205 95 190 160 Q175 95 190 30 Z', 1.8) + arrow(40, 95, 40, 62) + text(40, 112, 'O') +
        [[90, '2F'], [140, 'F'], [240, 'F'], [290, '2F']].map(([x, t]) => line(`M${x} 90 V100`, 1.5) + text(x, 84, t, { size: 12 })).join('') +
        [[240, 'P'], [265, 'Q'], [290, 'R'], [330, 'S']].map(([x, t]) => dot(x, 95, 3) + text(x, 120, t, { bold: true })).join('')),
      options: ['P', 'Q', 'R', 'S'],
      answer: 1,
      explain: 'For an object beyond 2F, a convex lens forms a real, inverted, diminished image between F and 2F on the other side. (E.g. u = 3f gives 1/v = 1/f − 1/(3f), so v = 1.5f.)',
      zh: { sub: '透鏡', stem: '把物體 O 放在凸透鏡前 2F 以外。F 和 2F 標示離透鏡一倍和兩倍焦距的位置。像在哪個位置形成？', explain: '物體在 2F 以外時，凸透鏡在另一邊的 F 與 2F 之間形成實像、倒立、縮小的像。（例如 u = 3f 時 1/v = 1/f − 1/(3f)，所以 v = 1.5f。）' }
    },
    {
      id: 'W117', topic: 'wave', level: 2, sub: 'Electromagnetic spectrum',
      stem: 'The diagram shows the electromagnetic spectrum in order of increasing wavelength, with four regions labelled P, Q, R and S. Which region is detected by a thermal imaging camera?',
      figure: svg(400, 120, 'Electromagnetic spectrum bar: P, X-rays, Q, visible, R, S, radio, in order of increasing wavelength',
        line('M15 25 H385 V65 H15 Z') + line(range(15, 385, 7).slice(1, 7).map(x => `M${r1(x)} 25 V65`).join(' '), 1.5) +
        emBand.map((t, i) => text(15 + (i + 0.5) * 370 / 7, 50, t, { size: t.length > 1 ? 11 : 14, bold: t.length === 1 })).join('') +
        arrow(60, 92, 340, 92, 1.5) + text(200, 112, 'increasing wavelength', { size: 12 })),
      options: ['P', 'Q', 'R', 'S'],
      answer: 2,
      explain: 'In order of increasing wavelength: γ-rays (P), X-rays, ultraviolet (Q), visible light, infrared (R), microwaves (S), radio waves. Warm objects emit mainly infrared, which thermal imaging cameras detect.',
      zh: { sub: '電磁波譜', stem: '下圖按波長遞增的次序顯示電磁波譜，其中四個區域標示為 P、Q、R 和 S。熱成像攝影機探測的是哪一個區域？', explain: '按波長遞增的次序：γ 射線（P）、X 射線、紫外線（Q）、可見光、紅外線（R）、微波（S）、無線電波。溫暖物體主要放出紅外線，熱成像攝影機探測的正是紅外線。' }
    },
    {
      id: 'W118', topic: 'wave', level: 3, sub: 'Sound',
      stem: 'Trace X shows a note on a CRO. The settings are not changed. Which trace shows a note that is both louder and higher in pitch?',
      figure: svgGraph({ aria: 'Trace X: a sine wave with two cycles', w: 400, h: 110, x: { max: 1.1, label: 't' }, y: { min: -1, max: 1 }, lines: [{ f: x => 0.5 * Math.sin(4 * Math.PI * x), from: 0, to: 1, n: 80 }], text: [[1.05, 0.55, 'X']] }) +
        svgPanels([sines(0.5, 3), sines(0.9, 2), sines(0.3, 4), sines(0.9, 4)], { mid: true, aria: 'Traces A to D: A same height, more waves; B taller, same number of waves; C shorter, more waves; D taller, more waves' }),
      options: ['A', 'B', 'C', 'D'],
      answer: 3,
      explain: 'Louder means a larger amplitude (taller trace); higher pitch means a higher frequency (more waves across the same screen). Only D has both.',
      zh: { sub: '聲音', stem: '波形 X 顯示示波器上的一個音。示波器的設定不變。哪一個波形顯示一個較響亮且音調較高的音？', explain: '較響亮即振幅較大（波形較高）；音調較高即頻率較高（同一屏幕上波數較多）。只有 D 兩者兼備。' }
    },
    {
      id: 'W119', topic: 'wave', level: 2, sub: 'Plane mirrors',
      stem: 'An object O is placed in front of a plane mirror M, as shown on the grid. Where is its image?',
      figure: svg(380, 175, 'Grid with a vertical plane mirror; object O two squares to the left; points A two squares right, B four squares right, C one square right, D two squares right and two squares up',
        line(range(90, 290, 10).map(x => `M${x} 30 V150`).join(' ') + ' ' + range(30, 150, 6).map(y => `M90 ${y} H290`).join(' '), 0.6, true) +
        line('M190 25 V155', 4) + text(190, 170, 'M') + dot(150, 90, 5) + text(150, 80, 'O') +
        [[230, 90, 'A', 0, 20], [270, 90, 'B', 0, -9], [210, 90, 'C', 0, -9], [230, 50, 'D', 0, -9]].map(([x, y, t, dx, dy]) => dot(x, y, 3.5) + text(x + dx, y + dy, t, { bold: true })).join('')),
      options: ['A', 'B', 'C', 'D'],
      answer: 0,
      explain: 'The image in a plane mirror is as far behind the mirror as the object is in front, on the line through the object perpendicular to the mirror: two squares behind M, level with O.',
      zh: { sub: '平面鏡', stem: '物體 O 放在平面鏡 M 前，如方格所示。它的像在哪裏？', explain: '平面鏡的像在鏡後的距離等於物體在鏡前的距離，並位於通過物體而垂直於鏡面的直線上：在 M 後兩格，與 O 同一水平。' }
    },
    {
      id: 'W120', topic: 'wave', level: 3, sub: "Young's double slit",
      stem: 'Red light passes through a double slit, producing a pattern of bright and dark fringes on a screen. Which change makes the fringes wider apart?',
      figure: svg(380, 180, 'Double-slit set-up: light from the left passes through two slits a apart and forms fringes on a screen a distance D away',
        arrow(20, 95, 95, 95, 1.8) + line('M110 30 V88 M110 92 V98 M110 102 V160', 3) + line('M330 30 V160', 3) +
        range(-3, 3, 6).map(k => line(`M338 ${95 + 16 * k - 4} H352 V${95 + 16 * k + 4} H338 Z`, 1)).join('') +
        `<path d="${range(-3, 3, 6).map(k => `M338 ${95 + 16 * k - 4} H352 V${95 + 16 * k + 4} H338 Z`).join(' ')}" fill="currentColor" fill-opacity="0.35"/>` +
        text(100, 70, 'a', { anchor: 'end' }) + arrow(220, 172, 112, 172, 1) + arrow(220, 172, 328, 172, 1) + text(220, 166, 'D') +
        text(110, 22, 'double slit', { size: 12 }) + text(330, 22, 'screen', { size: 12 })),
      options: ['Use blue light instead of red light.', 'Move the screen further from the slits.', 'Use slits that are further apart.', 'Move the screen closer to the slits.'],
      answer: 1,
      explain: 'Fringe separation Δy = λD / a. It increases with a longer wavelength, a larger slit-to-screen distance D, or a smaller slit separation a. Blue light (shorter λ), slits further apart and a closer screen all make the fringes closer together.',
      zh: {
        sub: '楊氏雙縫實驗', stem: '紅光穿過雙縫，在屏幕上形成明暗相間的條紋。哪項改變會使條紋的間距增大？',
        options: ['改用藍光代替紅光。', '把屏幕移離雙縫遠一些。', '改用間距較大的雙縫。', '把屏幕移近雙縫。'],
        explain: '條紋間距 Δy = λD / a。波長較長、雙縫至屏幕的距離 D 較大，或雙縫間距 a 較小，都會使它增大。藍光（λ 較短）、雙縫間距較大和屏幕較近，都會使條紋靠得較近。'
      }
    },
    {
      id: 'W121', topic: 'wave', level: 2, sub: 'Dispersion',
      stem: 'White light passes through a glass prism and splits into a spectrum. Rays P, Q and R are three of the emerging colours; R is deviated the most. What colour is ray R?',
      figure: svg(380, 170, 'A ray of white light enters a prism and emerges as a fan of rays P, Q and R, with R bent the most',
        line('M120 150 L260 150 L190 30 Z') + line('M20 112 L156 90 L222 96', 2) + line('M222 96 L360 88 M222 96 L360 112 M222 96 L360 136', 1.6) +
        text(366, 92, 'P', { anchor: 'start', bold: true }) + text(366, 116, 'Q', { anchor: 'start', bold: true }) + text(366, 140, 'R', { anchor: 'start', bold: true }) +
        text(60, 96, 'white light', { size: 12 })),
      options: ['Red', 'Green', 'Violet', 'White'],
      answer: 2,
      explain: 'The refractive index of glass is greatest for violet light, which travels most slowly in glass, so violet is bent (deviated) the most and red the least.',
      zh: {
        sub: '色散', stem: '白光穿過玻璃三稜鏡後分成光譜。P、Q 和 R 是其中三種射出的顏色；R 的偏向最大。光線 R 是甚麼顏色？',
        options: ['紅色', '綠色', '紫色', '白色'],
        explain: '玻璃對紫光的折射率最大，紫光在玻璃中傳播得最慢，所以紫光的偏折（偏向）最大，紅光最小。'
      }
    },
    {
      id: 'W122', topic: 'wave', level: 4, sub: 'Longitudinal waves',
      stem: 'The graph shows the displacement y of particles against their equilibrium position x for a longitudinal wave at one instant. Displacement to the right is positive. Which point is at the centre of a compression?',
      figure: svgGraph({
        aria: 'Sine curve of displacement against position: P at the origin, Q at a crest, R at a trough, S where the curve crosses the axis going down',
        x: { max: 2.2, label: 'x' }, y: { min: -1.5, max: 1.5, label: 'y' },
        lines: [{ f: x => Math.sin(2 * Math.PI * x), from: 0, to: 2, n: 80 }],
        dots: [[0, 0, 'P', 10, -8], [0.25, 1, 'Q'], [0.75, -1, 'R', 0, 20], [1.5, 0, 'S', 10, -8]]
      }),
      options: ['P', 'Q', 'R', 'S'],
      answer: 3,
      explain: 'At S, particles just to its left have positive displacement (moved right, towards S) and particles just to its right have negative displacement (moved left, towards S): they crowd together, a compression. At P they move apart (a rarefaction). Q and R are particles with maximum displacement, at normal spacing.',
      zh: {
        sub: '縱波', stem: '下圖顯示某一刻縱波中質點的位移 y 對其平衡位置 x 的關係。向右的位移為正。哪一點位於密部的中心？',
        explain: '在 S 點，其左方的質點位移為正（向右移，即移向 S），右方的質點位移為負（向左移，即移向 S）：質點聚在一起，形成密部。在 P 點質點互相散開（疏部）。Q 和 R 是位移最大的質點，附近的間距正常。'
      }
    }
  ]);

  /* ================= Electricity and Magnetism (E108–E123) ================= */

  // Electric field lines of two equal positive charges, traced numerically from each charge.
  const fieldLines = (() => {
    const Qs = [[125, 90], [255, 90]];
    let s = '';
    Qs.forEach(([qx, qy], qi) => {
      for (let k = 0; k < 12; k++) {
        const a = (15 + 30 * k) * Math.PI / 180;
        let x = qx + 13 * Math.cos(a), y = qy + 13 * Math.sin(a);
        const pts = [[x, y]];
        for (let n = 0; n < 200; n++) {
          let ex = 0, ey = 0;
          Qs.forEach(([cx, cy]) => { const dx = x - cx, dy = y - cy, r3 = Math.pow(dx * dx + dy * dy, 1.5); ex += dx / r3; ey += dy / r3; });
          const m = Math.hypot(ex, ey);
          if (m < 1e-12) break;
          x += 3 * ex / m; y += 3 * ey / m;
          if (x < 4 || x > 376 || y < 4 || y > 176) break;
          pts.push([x, y]);
        }
        s += line('M' + pts.map(([px, py]) => r1(px) + ' ' + r1(py)).join(' L'), 1.3);
        if (pts.length > 9) s += arrow(pts[7][0], pts[7][1], pts[9][0], pts[9][1], 1.3);
      }
    });
    return s + Qs.map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="9" fill="currentColor"/>` + text(x, y + 28, 'XY'[i], { bold: true })).join('');
  })();
  // Two field lines and a thick line (a coil or Hall plate seen edge-on) at a given angle to the field.
  const edgePanel = (i, deg) => {
    const x0 = 10 + i * 102, cx = x0 + 46, cy = 65, a = deg * Math.PI / 180, L = 28;
    const dx = L * Math.cos(a), dy = L * Math.sin(a);
    return arrow(x0 + 2, 22, x0 + 90, 22, 1) + arrow(x0 + 2, 108, x0 + 90, 108, 1) +
      line(`M${r1(cx - dx)} ${r1(cy + dy)} L${r1(cx + dx)} ${r1(cy - dy)}`, 5) + text(cx, 136, 'ABCD'[i], { bold: true });
  };
  const pulse = (x, c, w) => Math.exp(-(((x - c) / w) ** 2));

  addBank([
    {
      id: 'E108', topic: 'elec', level: 2, sub: 'Electric fields',
      stem: 'The diagram shows the electric field lines around two small charged spheres X and Y. What are the signs of the charges?',
      figure: svg(380, 180, 'Field lines starting on both X and Y with arrows pointing away from each, curving apart between them', fieldLines),
      options: ['X and Y are both positive.', 'X is positive and Y is negative.', 'X and Y are both negative.', 'X is negative and Y is positive.'],
      answer: 0,
      explain: 'Field lines point away from positive charges and towards negative ones. Here the arrows point away from both X and Y, and the lines between them curve apart (with a neutral point midway), as for two like charges.',
      zh: {
        sub: '電場', stem: '下圖顯示兩個帶電小球 X 和 Y 周圍的電場線。兩者所帶電荷的正負是甚麼？',
        options: ['X 和 Y 都帶正電。', 'X 帶正電，Y 帶負電。', 'X 和 Y 都帶負電。', 'X 帶負電，Y 帶正電。'],
        explain: '電場線由正電荷指出、指向負電荷。圖中箭號由 X 和 Y 都向外指，兩者之間的電場線互相避開（中間有一個中性點），這是兩個同種電荷的情況。'
      }
    },
    {
      id: 'E109', topic: 'elec', level: 2, sub: 'I–V characteristics',
      stem: 'Which graph shows how the current I through a filament lamp varies with the potential difference V across it?',
      figure: svgPanels([{ f: x => 0.85 * x }, { f: x => 0.9 * Math.tanh(1.8 * x) / Math.tanh(1.8) }, { f: x => 0.9 * x ** 2.5 }, { f: () => 0.5 }],
        { x: 'V', y: 'I', aria: 'Four sketch graphs of I against V: A straight line through origin, B curve whose gradient decreases, C curve whose gradient increases, D horizontal line' }),
      options: ['A', 'B', 'C', 'D'],
      answer: 1,
      explain: 'As the current increases the filament gets hotter and its resistance rises, so each extra volt gives less extra current: the gradient I/V falls and the graph bends towards the V-axis. A is an ohmic conductor at constant temperature.',
      zh: { sub: 'I–V 特性', stem: '哪一個線圖顯示通過燈絲燈泡的電流 I 隨其兩端電勢差 V 的變化？', explain: '電流增加時燈絲變熱，電阻上升，所以每增加一伏特所增加的電流較少：I/V 減小，線圖向 V 軸彎曲。A 是溫度不變的歐姆導體。' }
    },
    {
      id: 'E110', topic: 'elec', level: 2, sub: 'Meters',
      stem: 'Meters X and Y are connected to measure the current through the lamp and the potential difference across it. What are X and Y?',
      figure: svg(380, 190, 'Circuit: cell, meter X in series on the left, lamp at the bottom with meter Y connected in parallel across it',
        line('M60 30 H183 M197 30 H320 V130 H201 M179 130 H60 V92 M60 68 V30') + line('M183 18 V42', 2.5) + line('M197 24 V36', 4) +
        circ(60, 80, 12) + text(60, 85, 'X', { bold: true }) + circ(190, 130, 11) + line('M182.2 122.2 L197.8 137.8 M197.8 122.2 L182.2 137.8', 1.5) +
        line('M150 130 V165 H178 M202 165 H230 V130') + circ(190, 165, 12) + text(190, 170, 'Y', { bold: true }) + dot(150, 130, 3) + dot(230, 130, 3)),
      options: ['X is a voltmeter and Y is an ammeter.', 'X and Y are both ammeters.', 'X is an ammeter and Y is a voltmeter.', 'X and Y are both voltmeters.'],
      answer: 2,
      explain: 'An ammeter must carry the same current as the lamp, so it goes in series (X). A voltmeter measures the p.d. between two points, so it goes in parallel across the lamp (Y).',
      zh: {
        sub: '電錶', stem: '接上電錶 X 和 Y 以量度通過燈泡的電流及其兩端的電勢差。X 和 Y 分別是甚麼？',
        options: ['X 是伏特計，Y 是安培計。', 'X 和 Y 都是安培計。', 'X 是安培計，Y 是伏特計。', 'X 和 Y 都是伏特計。'],
        explain: '安培計必須通過與燈泡相同的電流，所以要串聯（X）。伏特計量度兩點間的電勢差，所以要與燈泡並聯（Y）。'
      }
    },
    {
      id: 'E111', topic: 'elec', level: 3, sub: 'Potential divider',
      stem: 'A fixed resistor R and a light-dependent resistor (LDR) form a potential divider across a 6 V supply. The output voltage V_out is taken across the LDR. What happens to V_out when the light on the LDR gets brighter?',
      figure: svg(380, 190, 'Potential divider: resistor R at the top and LDR at the bottom between +6 V and 0 V; output taken across the LDR',
        line('M110 20 H200 V40 M200 90 V112 M200 158 V175 H110 M200 100 H300 M200 175 H300') + line('M190 40 H210 V90 H190 Z') + line('M190 112 H210 V158 H190 Z') + circ(200, 135, 30, 1.5) +
        arrow(262, 100, 232, 120, 1.5) + arrow(275, 115, 245, 135, 1.5) + circ(304, 100, 4, 1.5) + circ(304, 175, 4, 1.5) + dot(200, 100, 3) +
        text(100, 25, '+6 V', { anchor: 'end' }) + text(100, 180, '0 V', { anchor: 'end' }) + text(180, 70, 'R', { anchor: 'end' }) + text(160, 140, 'LDR', { anchor: 'end', size: 12 }) +
        arrow(330, 150, 330, 108, 1) + arrow(330, 150, 330, 170, 1) + text(338, 145, 'V<tspan font-size="10" dy="3">out</tspan>', { anchor: 'start' })),
      options: [
        'It increases, because the resistance of the LDR increases.',
        'It increases, because the current in the circuit decreases.',
        'It stays the same, because the supply voltage does not change.',
        'It decreases, because the resistance of the LDR falls and it takes a smaller share of the 6 V.'
      ],
      answer: 3,
      explain: 'Brighter light lowers the resistance of an LDR. In a potential divider the p.d. is shared in proportion to the resistances: V_out = 6 × R_LDR / (R + R_LDR), which falls as R_LDR falls.',
      zh: {
        sub: '分壓器', stem: '定值電阻器 R 與光敏電阻器（LDR）組成分壓器，接在 6 V 電源上。輸出電壓 V_out 取自 LDR 兩端。當照射 LDR 的光變強時，V_out 會怎樣？',
        options: ['增加，因為 LDR 的電阻增加。', '增加，因為電路中的電流減少。', '不變，因為電源電壓沒有改變。', '減少，因為 LDR 的電阻下降，分得 6 V 中較小的份額。'],
        explain: '光越強，LDR 的電阻越低。在分壓器中電勢差按電阻的比例分配：V_out = 6 × R_LDR / (R + R_LDR)，R_LDR 下降時它亦下降。'
      }
    },
    {
      id: 'E112', topic: 'elec', level: 4, sub: 'Internal resistance',
      stem: 'The graph shows how the terminal voltage V of two cells X and Y varies with the current I they supply. Which statement is correct?',
      figure: svgGraph({
        aria: 'Terminal voltage against current: both lines start at 1.5 V; X falls more steeply than Y',
        x: { max: 6.5, label: 'I / A' }, y: { max: 2, label: 'V / V', ticks: [[1.5, '1.5']] },
        lines: [{ pts: [[0, 1.5], [3, 0]] }, { pts: [[0, 1.5], [6, 0.3]], dash: true }], text: [[2.2, 0.75, 'X', 'start'], [5, 0.75, 'Y', 'start']]
      }),
      options: [
        'X and Y have the same e.m.f., but X has the larger internal resistance.',
        'X has the larger e.m.f.',
        'X and Y have the same internal resistance.',
        'X and Y have the same e.m.f., but X has the smaller internal resistance.'
      ],
      answer: 0,
      explain: 'V = ε − Ir. The intercept on the V-axis (I = 0) is the e.m.f.: 1.5 V for both. The magnitude of the gradient is the internal resistance r; X is steeper, so X has the larger r.',
      zh: {
        sub: '內電阻', stem: '下圖顯示兩個電池 X 和 Y 的端電壓 V 如何隨其供應的電流 I 改變。哪項敘述是正確的？',
        options: ['X 和 Y 的電動勢相同，但 X 的內電阻較大。', 'X 的電動勢較大。', 'X 和 Y 的內電阻相同。', 'X 和 Y 的電動勢相同，但 X 的內電阻較小。'],
        explain: 'V = ε − Ir。V 軸上的截距（I = 0）是電動勢：兩者都是 1.5 V。斜率的大小是內電阻 r；X 較陡，所以 X 的 r 較大。'
      }
    },
    {
      id: 'E113', topic: 'elec', level: 2, sub: 'Magnetic field of a solenoid',
      stem: 'The diagram shows the magnetic field pattern of a current-carrying solenoid. At which point is the magnetic field strongest?',
      figure: svg(380, 190, 'Solenoid with uniform field lines inside and loops outside; P above the solenoid, Q at the centre inside, R on the axis beyond one end, S below',
        line('M110 75 H270 V115 H110 Z', 1.5) + line(range(114, 258, 9).map(x => `M${r1(x)} 70 L${r1(x + 8)} 120`).join(' '), 1.2) +
        line('M50 95 A140 52 0 0 1 330 95 A140 52 0 0 1 50 95 M30 95 A160 78 0 0 1 350 95 A160 78 0 0 1 30 95', 1.2) +
        arrow(125, 85, 255, 85, 1.2) + arrow(125, 105, 255, 105, 1.2) +
        dot(190, 30, 4) + text(200, 26, 'P', { anchor: 'start', bold: true }) + dot(190, 95, 4) + text(190, 90, 'Q', { bold: true }) +
        dot(305, 95, 4) + text(305, 88, 'R', { bold: true }) + dot(190, 182, 4) + text(200, 186, 'S', { anchor: 'start', bold: true })),
      options: ['P', 'Q', 'R', 'S'],
      answer: 1,
      explain: 'Inside a long solenoid the field is strong and uniform: the field lines are closest together there. Outside, the lines spread out, so the field is much weaker.',
      zh: { sub: '螺線管的磁場', stem: '下圖顯示載流螺線管的磁場圖樣。在哪一點磁場最強？', explain: '長螺線管內的磁場強而均勻：那裏的磁場線最密。管外的磁場線散開，所以磁場弱得多。' }
    },
    {
      id: 'E114', topic: 'elec', level: 3, sub: 'Motor effect',
      stem: 'A straight wire carrying a current into the page is placed between the poles of a magnet, as shown. In which direction is the magnetic force on the wire?',
      figure: svg(380, 190, 'North pole above and south pole below; a wire between them carries current into the page',
        line('M150 15 H230 V45 H150 Z') + line('M150 145 H230 V175 H150 Z') + text(190, 36, 'N', { bold: true }) + text(190, 166, 'S', { bold: true }) +
        arrow(160, 50, 160, 140, 1) + arrow(220, 50, 220, 140, 1) + circ(190, 95, 10) + line('M183 88 L197 102 M197 88 L183 102', 1.8) +
        text(250, 100, 'current into page', { anchor: 'start', size: 12 })),
      options: ['Upwards', 'Downwards', 'To the left', 'To the right'],
      answer: 2,
      explain: 'The field points from N to S, i.e. down the page. Fleming\'s left-hand rule (first finger: field down; second finger: current into the page) gives a thrust to the left.',
      zh: {
        sub: '電動機效應', stem: '一條載有流入紙面電流的直導線放在磁鐵兩極之間，如圖所示。導線所受磁力的方向是甚麼？',
        options: ['向上', '向下', '向左', '向右'],
        explain: '磁場由 N 指向 S，即沿紙面向下。用弗林明左手定則（食指：磁場向下；中指：電流流入紙面），得出推力向左。'
      }
    },
    {
      id: 'E115', topic: 'elec', level: 2, sub: 'Alternating current',
      stem: 'Trace X shows an a.c. supply on a CRO. The frequency of the supply is doubled while its peak voltage stays the same. The CRO settings are not changed. Which trace is now seen?',
      figure: svgGraph({ aria: 'Trace X: a sine wave with two cycles', w: 400, h: 110, x: { max: 1.1, label: 't' }, y: { min: -1, max: 1 }, lines: [{ f: x => 0.6 * Math.sin(4 * Math.PI * x), from: 0, to: 1, n: 80 }], text: [[1.05, 0.6, 'X']] }) +
        svgPanels([sines(0.6, 1), sines(0.95, 2), sines(0.3, 4), sines(0.6, 4)], { mid: true, aria: 'Traces A to D: A same height, half as many waves; B taller, same number; C half height, twice as many; D same height, twice as many waves' }),
      options: ['A', 'B', 'C', 'D'],
      answer: 3,
      explain: 'The peak voltage is unchanged, so the trace has the same height. Doubling the frequency halves the period, so twice as many cycles fit across the screen: D.',
      zh: { sub: '交流電', stem: '波形 X 顯示示波器上的交流電源。電源的頻率加倍，而峰值電壓不變。示波器的設定不變。現在看到的是哪一個波形？', explain: '峰值電壓不變，所以波形高度相同。頻率加倍即周期減半，屏幕上的周期數加倍：D。' }
    },
    {
      id: 'E116', topic: 'elec', level: 2, sub: 'Transformers',
      stem: 'The diagram shows an ideal transformer connected to an a.c. supply. Which change would increase the output voltage?',
      figure: svg(380, 180, 'Transformer: primary coil on the left limb of an iron core, secondary coil on the right limb',
        line('M110 30 H270 V150 H110 Z M140 60 H240 V120 H140 Z', 2) +
        line(range(66, 114, 6).map(y => `M102 ${y} L148 ${y + 5}`).join(' '), 1.5) + line(range(64, 116, 4).map(y => `M232 ${y} L278 ${y + 3}`).join(' '), 1.5) +
        line('M102 66 H40 M102 119 H40 M278 64 H340 M278 119 H340', 1.5) + circ(40, 66, 3.5, 1.5) + circ(40, 119, 3.5, 1.5) + circ(340, 64, 3.5, 1.5) + circ(340, 119, 3.5, 1.5) +
        text(80, 170, 'primary', { size: 12 }) + text(300, 170, 'secondary', { size: 12 }) + text(190, 22, 'iron core', { size: 12 })),
      options: [
        'Increase the number of turns on the secondary coil.',
        'Increase the number of turns on the primary coil.',
        'Use a d.c. supply of the same voltage.',
        'Replace the iron core with a wooden one.'
      ],
      answer: 0,
      explain: 'Vs / Vp = Ns / Np, so more secondary turns give a larger output voltage. More primary turns reduce it. A steady d.c. produces no changing flux, so no output; a wooden core links far less flux.',
      zh: {
        sub: '變壓器', stem: '下圖顯示一個接上交流電源的理想變壓器。哪項改變會使輸出電壓增加？',
        options: ['增加次級線圈的匝數。', '增加初級線圈的匝數。', '改用相同電壓的直流電源。', '以木芯代替鐵芯。'],
        explain: 'Vs / Vp = Ns / Np，所以次級線圈匝數越多，輸出電壓越大。增加初級線圈匝數會使它減少。穩定的直流電不產生變化的磁通量，所以沒有輸出；木芯連繫的磁通量少得多。'
      }
    },
    {
      id: 'E117', topic: 'elec', level: 5, sub: 'Electromagnetic induction',
      stem: 'A bar magnet is dropped from rest through a vertical coil connected to a data logger. Which graph best shows the induced e.m.f. ε against time t?',
      figure: svgPanels([
        { f: x => 0.6 * pulse(x, 0.5, 0.1) },
        { f: x => 0.5 * pulse(x, 0.3, 0.07) - 0.85 * pulse(x, 0.62, 0.045) },
        { f: x => 0.6 * pulse(x, 0.3, 0.07) - 0.6 * pulse(x, 0.7, 0.07) },
        { f: () => 0.5 }
      ], { x: 't', y: 'ε', mid: true, aria: 'Four sketch graphs of e.m.f. against time: A one positive pulse, B a positive pulse then a taller, narrower negative pulse, C equal positive and negative pulses, D constant' }),
      options: ['A', 'B', 'C', 'D'],
      answer: 1,
      explain: 'As the magnet enters, the flux increases and an e.m.f. is induced; as it leaves, the flux decreases and the e.m.f. reverses (Lenz\'s law). The magnet speeds up while falling, so it leaves faster than it enters: the second pulse is larger and shorter. (Both pulses have equal area, since the total flux change is the same.)',
      zh: { sub: '電磁感應', stem: '一枝條形磁鐵由靜止落下，穿過一個接上數據記錄器的豎直線圈。哪一個線圖最能顯示感生電動勢 ε 對時間 t 的關係？', explain: '磁鐵進入線圈時磁通量增加，產生感生電動勢；離開時磁通量減少，電動勢反向（楞次定律）。磁鐵下落時加速，所以離開時比進入時快：第二個脈衝較高而較短。（兩個脈衝的面積相等，因為磁通量的總改變相同。）' }
    },
    {
      id: 'E118', topic: 'elec', level: 2, sub: 'Domestic electricity',
      stem: 'The diagram shows the inside of a three-pin plug with its cover removed. To which labelled part should the green-and-yellow (earth) wire be connected?',
      figure: svg(380, 190, 'Inside a three-pin plug: P bottom-left terminal, Q bottom-right terminal next to the fuse, R top terminal, S cable grip',
        line('M120 15 H260 Q280 15 280 35 V165 Q280 180 260 180 H120 Q100 180 100 165 V35 Q100 15 120 15 Z') +
        line('M180 35 H200 V55 H180 Z M128 115 H148 V135 H128 Z M232 115 H252 V135 H232 Z', 2) + line('M234 62 H250 V106 H234 Z', 1.5) + line('M165 160 H215 V170 H165 Z', 1.5) +
        line('M190 160 Q190 100 190 55 M180 160 Q140 150 138 135 M200 160 Q240 150 242 135', 1.2) +
        line('M128 125 H60 M232 125 H252 L320 150 M200 45 H320 M165 165 H60', 1) +
        text(54, 130, 'P', { anchor: 'end', bold: true }) + text(326, 155, 'Q', { anchor: 'start', bold: true }) + text(326, 50, 'R', { anchor: 'start', bold: true }) + text(54, 170, 'S', { anchor: 'end', bold: true }) +
        text(242, 87, 'fuse', { size: 10 })),
      options: ['P', 'Q', 'R', 'S'],
      answer: 2,
      explain: 'Looking into the back of the plug: the earth wire goes to the top (largest) pin R, the live (brown) wire goes to the bottom-right pin through the fuse (Q), and the neutral (blue) wire to the bottom-left pin (P). S is the cable grip.',
      zh: { sub: '家居用電', stem: '下圖顯示一個除去外蓋的三腳插頭的內部。綠黃色（接地）的電線應接到哪一個標示的部分？', explain: '從插頭背面看：接地線接到頂部（最大）的插腳 R，火線（啡色）經保險絲接到右下方的插腳（Q），中線（藍色）接到左下方的插腳（P）。S 是電線夾。' }
    },
    {
      id: 'E119', topic: 'elec', level: 4, sub: 'Charged particles in fields',
      stem: 'An electron enters the uniform electric field between two parallel plates, moving at right angles to the field. The top plate is positive. Which path does the electron follow?',
      figure: svg(380, 190, 'Parallel plates, top positive and bottom negative; an electron enters from the left; paths P straight, Q curving down, R a circular arc curving up sharply, S a gentle parabola curving up',
        line('M80 35 H300 M80 155 H300', 4) + text(70, 40, '+', { anchor: 'end' }) + text(70, 160, '−', { anchor: 'end' }) + arrow(20, 95, 70, 95, 1.8) + text(40, 85, 'e⁻') +
        line('M80 95 H360', 1.4, true) + line(parab(80, 300, x => 95 + 40 * ((x - 80) / 220) ** 2) + ' L360 156.8', 1.6) + line('M80 95 A70 70 0 0 0 147 45', 1.6) +
        line(parab(80, 300, x => 95 - 40 * ((x - 80) / 220) ** 2) + ' L360 33.2', 1.6) +
        text(366, 100, 'P', { anchor: 'start', bold: true }) + text(366, 162, 'Q', { anchor: 'start', bold: true }) + text(150, 60, 'R', { anchor: 'start', bold: true }) + text(366, 36, 'S', { anchor: 'start', bold: true })),
      options: ['P', 'Q', 'R', 'S'],
      answer: 3,
      explain: 'The electron is attracted towards the positive plate by a constant force at right angles to its initial velocity, like a projectile under gravity: its path is a parabola curving upwards (S). It keeps its horizontal speed and leaves the field in a straight line. A circular path (R) needs a force always perpendicular to the velocity, as in a magnetic field.',
      zh: { sub: '帶電粒子在場中', stem: '一粒電子以垂直於電場的方向進入兩塊平行板之間的均勻電場。上板帶正電。電子沿哪一條路徑運動？', explain: '電子受到一個指向正板、與初速度垂直的恆力吸引，就像在重力下的拋體：它的路徑是向上彎的拋物線（S）。它的水平速率不變，離開電場後沿直線前進。圓形路徑（R）需要一個總是垂直於速度的力，例如在磁場中。' }
    },
    {
      id: 'E120', topic: 'elec', level: 4, sub: 'Generators',
      stem: 'A rectangular coil rotates at a steady rate in a uniform magnetic field (arrows). The diagrams show the coil edge-on, as a thick line, at four instants. In which position is the induced e.m.f. greatest?',
      figure: svg(420, 145, 'Four diagrams of a coil seen edge-on in a field pointing right: A coil parallel to the field, B perpendicular, C at 45 degrees, D at 60 degrees to the field',
        [0, 90, 45, 60].map((d, i) => edgePanel(i, d)).join('')),
      options: ['A', 'B', 'C', 'D'],
      answer: 0,
      explain: 'The e.m.f. depends on the rate of change of flux linkage. When the plane of the coil is parallel to the field, the flux through it is zero but changing fastest: its sides cut the field lines at right angles. When the coil is perpendicular to the field (B), the flux is greatest but momentarily not changing, so ε = 0.',
      zh: { sub: '發電機', stem: '一個長方形線圈在均勻磁場（箭號）中穩定地轉動。下圖以粗線顯示線圈在四個時刻的側視圖。在哪個位置感生電動勢最大？', explain: '電動勢取決於磁通量鏈的變化率。當線圈平面與磁場平行時，通過它的磁通量為零，但變化得最快：線圈兩邊以直角切割磁場線。線圈與磁場垂直時（B），磁通量最大但在那一刻沒有變化，所以 ε = 0。' }
    },
    {
      id: 'E121', topic: 'elec', level: 2, sub: 'Thermistors',
      stem: 'Which graph shows how the resistance R of a thermistor (of the usual NTC type) varies with temperature T?',
      figure: svgPanels([{ f: x => 0.1 + 0.8 * x }, { f: x => 0.05 + 0.9 * Math.exp(-2.5 * x) }, { f: x => 0.1 + 0.8 * x * x }, { f: () => 0.5 }],
        { x: 'T', y: 'R', aria: 'Four sketch graphs of R against T: A rising line, B falling curve, C rising curve, D horizontal line' }),
      options: ['A', 'B', 'C', 'D'],
      answer: 1,
      explain: 'In an NTC thermistor, more charge carriers are freed as it warms up, so its resistance falls — steeply at first, then more gradually — as the temperature rises.',
      zh: { sub: '熱敏電阻器', stem: '哪一個線圖顯示熱敏電阻器（常見的負溫度係數型）的電阻 R 隨溫度 T 的變化？', explain: '負溫度係數熱敏電阻器受熱時釋出更多載流子，所以溫度上升時電阻下降 — 起初下降得快，其後漸慢。' }
    },
    {
      id: 'E122', topic: 'elec', level: 3, sub: 'Force between currents',
      stem: 'Two long parallel wires carry currents in the same direction, as shown. What is the effect of the magnetic forces between them?',
      figure: svg(380, 170, 'Two vertical parallel wires, both carrying current I upwards',
        line('M150 15 V160 M230 15 V160', 3) + arrow(150, 110, 150, 60, 2) + arrow(230, 110, 230, 60, 2) + text(138, 90, 'I', { anchor: 'end' }) + text(242, 90, 'I', { anchor: 'start' })),
      options: [
        'The wires repel each other.',
        'There is no force, because the currents are equal.',
        'The wires attract each other.',
        'Only the wire that carries the larger current feels a force.'
      ],
      answer: 2,
      explain: 'Each wire lies in the magnetic field of the other. Using the right-hand grip rule and Fleming\'s left-hand rule, currents in the same direction attract and opposite currents repel. By Newton\'s third law the forces on the two wires are equal and opposite.',
      zh: {
        sub: '電流之間的力', stem: '兩條長的平行導線載有方向相同的電流，如圖所示。它們之間的磁力有甚麼效果？',
        options: ['兩條導線互相排斥。', '沒有力，因為電流相等。', '兩條導線互相吸引。', '只有載有較大電流的導線受力。'],
        explain: '每條導線都處於另一條導線的磁場中。用右手握拳定則和弗林明左手定則，可知同向電流互相吸引，反向電流互相排斥。根據牛頓第三定律，兩條導線所受的力大小相等、方向相反。'
      }
    },
    {
      id: 'E123', topic: 'elec', level: 3, sub: 'Hall probe',
      stem: 'A Hall probe is used to measure a uniform magnetic field (arrows). The diagrams show the Hall plate edge-on, as a thick line, in four orientations. In which orientation is the reading largest?',
      figure: svg(420, 145, 'Four diagrams of a Hall plate seen edge-on in a field pointing right: A parallel to the field, B at 45 degrees, C at 30 degrees, D perpendicular to the field',
        [0, 45, 30, 90].map((d, i) => edgePanel(i, d)).join('')),
      options: ['A', 'B', 'C', 'D'],
      answer: 3,
      explain: 'The Hall voltage depends on the component of the field perpendicular to the face of the plate. It is greatest when the field passes straight through the plate (plate perpendicular to the field, D) and zero when the plate is parallel to the field (A).',
      zh: { sub: '霍爾探測器', stem: '用霍爾探測器量度均勻磁場（箭號）。下圖以粗線顯示霍爾片在四個方向的側視圖。在哪個方向讀數最大？', explain: '霍爾電壓取決於與霍爾片表面垂直的磁場分量。當磁場垂直穿過霍爾片時（霍爾片與磁場垂直，D）讀數最大；霍爾片與磁場平行時（A）讀數為零。' }
    }
  ]);

  /* ================= Radioactivity and Nuclear Energy (N108–N123) ================= */

  const crosses = range(160, 340, 6).flatMap(x => range(35, 155, 4).map(y => `M${x - 4} ${y - 4} L${x + 4} ${y + 4} M${x + 4} ${y - 4} L${x - 4} ${y + 4}`)).join(' ');
  // Pie chart sectors: [percentage, label]
  const pie = (() => {
    const parts = [[50, 'S'], [14, 'P'], [12, 'Q'], [11, 'R'], [13, '']];
    let a0 = -Math.PI / 2, s = '';
    const cx = 150, cy = 95, R = 75;
    parts.forEach(([p, t]) => {
      const a1 = a0 + p / 100 * 2 * Math.PI, am = (a0 + a1) / 2;
      s += line(`M${cx} ${cy} L${r1(cx + R * Math.cos(a0))} ${r1(cy + R * Math.sin(a0))} A${R} ${R} 0 ${p > 50 ? 1 : 0} 1 ${r1(cx + R * Math.cos(a1))} ${r1(cy + R * Math.sin(a1))} Z`, 1.5);
      if (t) s += text(cx + 0.62 * R * Math.cos(am), cy + 0.62 * R * Math.sin(am) + 5, t, { bold: true });
      a0 = a1;
    });
    return s;
  })();
  const fanTracks = range(-40, 40, 8).map((d, i) => {
    const a = d * Math.PI / 180, L = [125, 128, 122, 127, 130, 124, 128, 121, 126][i];
    return `M${r1(40 + 14 * Math.cos(a))} ${r1(95 + 14 * Math.sin(a))} L${r1(40 + L * Math.cos(a))} ${r1(95 + L * Math.sin(a))}`;
  }).join(' ');
  const counts = [52, 47, 55, 44, 50, 58, 46, 51, 42, 53, 49, 56];

  addBank([
    {
      id: 'N108', topic: 'nuc', level: 2, sub: 'Half-life',
      stem: 'The graph shows how the activity A of a radioactive sample varies with time t. What is the half-life of the sample?',
      figure: svgGraph({
        aria: 'Decay curve of activity against time, falling from 800 Bq to 400 Bq in 4 hours and to 200 Bq in 8 hours',
        x: { max: 17, label: 't / h', ticks: [2, 4, 6, 8, 10, 12, 14, 16].map(v => [v, String(v)]) }, y: { max: 900, label: 'A / Bq', ticks: [200, 400, 600, 800].map(v => [v, String(v)]) },
        lines: [{ f: t => 800 * Math.pow(2, -t / 4), from: 0, to: 16, n: 60 }]
      }),
      options: ['4 h', '6 h', '8 h', '12 h'],
      answer: 0,
      explain: 'The half-life is the time for the activity to halve. From 800 Bq it falls to 400 Bq at t = 4 h (and to 200 Bq at 8 h), so the half-life is 4 h.',
      zh: { sub: '半衰期', stem: '下圖顯示一個放射性樣本的放射強度 A 隨時間 t 的變化。樣本的半衰期是多少？', explain: '半衰期是放射強度減半所需的時間。由 800 Bq 在 t = 4 h 時降至 400 Bq（在 8 h 時降至 200 Bq），所以半衰期是 4 h。' }
    },
    {
      id: 'N109', topic: 'nuc', level: 4, sub: 'Radiation in magnetic fields',
      stem: 'Radiation from a source enters a uniform magnetic field directed into the page. Which path could be taken by a β particle?',
      figure: svg(380, 190, 'Region of magnetic field into the page; paths P curving gently up, Q curving sharply down, R straight on, S curving sharply up',
        line(crosses, 1) + arrow(20, 95, 138, 95, 1.8) + line('M140 95 A300 300 0 0 0 320 35', 2.2) + line('M140 95 A80 80 0 0 1 215 147.2', 2.2) +
        line('M140 95 H360', 2.2) + line('M140 95 A80 80 0 0 0 215 42.8', 2.2) +
        text(326, 32, 'P', { anchor: 'start', bold: true }) + text(222, 160, 'Q', { anchor: 'start', bold: true }) + text(366, 100, 'R', { anchor: 'start', bold: true }) + text(208, 34, 'S', { anchor: 'end', bold: true }) +
        text(250, 185, 'magnetic field into page', { size: 12 })),
      options: ['P', 'Q', 'R', 'S'],
      answer: 1,
      explain: 'Fleming\'s left-hand rule with the conventional current opposite to the electron\'s motion shows that negative β particles are pushed downwards. Being light, they are deflected strongly (Q). α particles (positive, much heavier) curve gently the other way (P); γ rays are uncharged and go straight on (R).',
      zh: { sub: '輻射在磁場中', stem: '從放射源發出的輻射進入一個指入紙面的均勻磁場。β 粒子可能沿哪一條路徑運動？', explain: '用弗林明左手定則（慣用電流方向與電子運動方向相反），可知帶負電的 β 粒子被推向下。它們質量很小，所以偏轉得很厲害（Q）。α 粒子（帶正電、重得多）向另一方向輕微彎曲（P）；γ 射線不帶電，直線前進（R）。' }
    },
    {
      id: 'N110', topic: 'nuc', level: 2, sub: 'Penetrating power',
      stem: 'Three types of radiation X, Y and Z are directed at sheets of paper, aluminium (a few mm thick) and lead (a few cm thick). The diagram shows how far each one gets. What is radiation Y?',
      figure: svg(380, 180, 'X is stopped by paper, Y passes paper but is stopped by aluminium, Z passes aluminium and is reduced by lead',
        line('M20 50 H50 V140 H20 Z') + line('M110 30 V160', 2) + line('M186 30 H196 V160 H186 Z', 1.5) + line('M280 30 H306 V160 H280 Z', 1.5) +
        arrow(50, 60, 106, 60, 1.6) + arrow(50, 95, 184, 95, 1.6) + line('M50 130 H340', 1.6) + line('M308 130 H360', 1.2, true) +
        text(60, 54, 'X', { anchor: 'start', bold: true }) + text(60, 89, 'Y', { anchor: 'start', bold: true }) + text(60, 124, 'Z', { anchor: 'start', bold: true }) +
        text(110, 22, 'paper', { size: 12 }) + text(191, 22, 'aluminium', { size: 12 }) + text(293, 22, 'lead', { size: 12 })),
      options: ['α particles', 'γ rays', 'β particles', 'Visible light'],
      answer: 2,
      explain: 'α particles are stopped by paper (X). β particles pass through paper but are stopped by a few mm of aluminium (Y). γ rays pass through aluminium and are only reduced by several cm of lead (Z).',
      zh: { sub: '穿透能力', stem: '把 X、Y 和 Z 三種輻射射向紙、鋁（數毫米厚）和鉛（數厘米厚）。下圖顯示每種輻射能到達多遠。輻射 Y 是甚麼？', options: ['α 粒子', 'γ 射線', 'β 粒子', '可見光'], explain: 'α 粒子被紙阻擋（X）。β 粒子穿過紙，但被數毫米厚的鋁阻擋（Y）。γ 射線穿過鋁，只被數厘米厚的鉛減弱（Z）。' }
    },
    {
      id: 'N111', topic: 'nuc', level: 3, sub: 'Alpha particles',
      stem: 'The diagram shows the tracks of α particles from a source in a cloud chamber. What can be deduced from the tracks?',
      figure: svg(380, 190, 'Straight, thick tracks of almost equal length fanning out from a source on the left',
        `<rect x="22" y="85" width="18" height="20" fill="currentColor"/>` + line(fanTracks, 3.5) + text(31, 125, 'source', { size: 12 })),
      options: [
        'α particles are often deflected by collisions with air molecules.',
        'α particles are only weakly ionising.',
        'α particles have an unlimited range in air.',
        'The α particles from this source all have about the same energy.'
      ],
      answer: 3,
      explain: 'The tracks are thick (strong ionisation), straight (the heavy α particles are hardly deflected by electrons) and nearly all the same length: each α particle loses energy at a similar rate, so equal ranges mean they started with about the same energy.',
      zh: {
        sub: 'α 粒子', stem: '下圖顯示雲室中從放射源發出的 α 粒子的徑跡。從徑跡可推斷甚麼？',
        options: ['α 粒子經常因與空氣分子碰撞而偏轉。', 'α 粒子的電離能力很弱。', 'α 粒子在空氣中的射程無限。', '從這放射源發出的 α 粒子的能量大致相同。'],
        explain: '徑跡粗（電離能力強）、直（沉重的 α 粒子幾乎不受電子影響而偏轉），而且長度幾乎相同：每粒 α 粒子損失能量的速率相若，射程相同即表示它們的初始能量大致相同。'
      }
    },
    {
      id: 'N112', topic: 'nuc', level: 3, sub: 'Background radiation',
      stem: 'A source that emits only β particles is placed in front of a GM counter. Sheets of aluminium of increasing thickness d are placed between them. The graph shows the count rate. What is the background count rate?',
      figure: svgGraph({
        aria: 'Count rate against aluminium thickness: falls from 300 per minute and levels off at about 25 per minute beyond 4 mm',
        x: { max: 8.5, label: 'd / mm', ticks: [2, 4, 6, 8].map(v => [v, String(v)]) }, y: { max: 320, label: 'count rate / min⁻¹', ticks: [[25, '25'], [100, '100'], [200, '200'], [300, '300']] },
        lines: [{ f: x => 25 + 275 * Math.exp(-x / 0.8), from: 0, to: 8, n: 60 }]
      }),
      options: ['25 counts per minute', '50 counts per minute', '150 counts per minute', '300 counts per minute'],
      answer: 0,
      explain: 'Once the aluminium is thick enough to stop all the β particles (about 4 mm), the count rate stops falling. What remains, about 25 counts per minute, comes from background radiation.',
      zh: {
        sub: '本底輻射', stem: '把一個只放出 β 粒子的放射源放在 GM 計數器前，並在兩者之間放入厚度 d 遞增的鋁片。下圖顯示計數率。本底計數率是多少？',
        options: ['每分鐘 25 次計數', '每分鐘 50 次計數', '每分鐘 150 次計數', '每分鐘 300 次計數'],
        explain: '當鋁片厚得足以阻擋所有 β 粒子（約 4 mm）時，計數率不再下降。餘下約每分鐘 25 次計數，來自本底輻射。'
      }
    },
    {
      id: 'N113', topic: 'nuc', level: 2, sub: 'Half-life',
      stem: 'Samples of two radioisotopes X and Y start with the same number of undecayed nuclei N. The graph shows how N changes with time. Which statement is correct?',
      figure: svgGraph({
        aria: 'Two decay curves starting at the same value; X falls much faster than Y',
        x: { max: 10, label: 't' }, y: { max: 1.1, label: 'N' },
        lines: [{ f: t => Math.exp(-t / 1.5), from: 0, to: 10 }, { f: t => Math.exp(-t / 5), from: 0, to: 10, dash: true }],
        text: [[1.6, 0.42, 'X', 'start'], [5.5, 0.45, 'Y', 'start']]
      }),
      options: [
        'X has the longer half-life.',
        'X has the shorter half-life.',
        'X and Y have the same half-life, because they start with the same number of nuclei.',
        'All the nuclei of Y will have decayed after a fixed time.'
      ],
      answer: 1,
      explain: 'N halves more quickly for X, so X has the shorter half-life. Half-life does not depend on how many nuclei there are, and decay is exponential: N never reaches exactly zero at a fixed time.',
      zh: {
        sub: '半衰期', stem: '兩種放射性同位素 X 和 Y 的樣本，起初未衰變的原子核數目 N 相同。下圖顯示 N 如何隨時間改變。哪項敘述是正確的？',
        options: ['X 的半衰期較長。', 'X 的半衰期較短。', 'X 和 Y 的半衰期相同，因為它們起初的原子核數目相同。', 'Y 的所有原子核會在一段固定時間後全部衰變。'],
        explain: 'X 的 N 減半得較快，所以 X 的半衰期較短。半衰期與原子核的數目無關，而且衰變是指數式的：N 不會在一段固定時間後剛好變成零。'
      }
    },
    {
      id: 'N114', topic: 'nuc', level: 2, sub: 'Random decay',
      stem: 'A source with a half-life of 30 years is placed in front of a GM counter, and the number of counts in 10 s is recorded 12 times. The results are plotted below. Why do the readings vary?',
      figure: svgGraph({
        aria: 'Twelve readings scattered randomly between about 42 and 58 counts around a mean of 50',
        x: { max: 13, label: 'reading', ticks: [[1, '1'], [6, '6'], [12, '12']] }, y: { max: 70, label: 'counts', ticks: [[50, '50']] },
        guides: [[0, 50, 12.5, 50]], dots: counts.map((c, i) => [i + 1, c])
      }),
      options: [
        'The source is decaying quickly.',
        'The GM counter is faulty.',
        'Radioactive decay is a random process.',
        'The temperature of the source keeps changing.'
      ],
      answer: 2,
      explain: 'Decay is random: we cannot predict when a nucleus will decay, so the number of decays in a fixed time fluctuates about a mean. A 30-year half-life means the activity hardly changes over the experiment, and decay is unaffected by temperature.',
      zh: {
        sub: '隨機衰變', stem: '把一個半衰期為 30 年的放射源放在 GM 計數器前，記錄 12 次 10 s 內的計數，結果繪於下圖。為甚麼讀數會有變化？',
        options: ['放射源衰變得很快。', 'GM 計數器有故障。', '放射性衰變是隨機過程。', '放射源的溫度不斷改變。'],
        explain: '衰變是隨機的：我們無法預測原子核何時衰變，所以固定時間內的衰變數目會在平均值附近起伏。半衰期為 30 年，即放射強度在實驗期間幾乎不變；而衰變不受溫度影響。'
      }
    },
    {
      id: 'N115', topic: 'nuc', level: 3, sub: 'Rutherford scattering',
      stem: 'α particles are fired at a gold nucleus N. Which of the paths shown is NOT possible?',
      figure: svg(380, 180, 'Alpha particle paths near a nucleus: P passes far away almost undeflected, Q bends away from the nucleus, R bounces back, S bends towards the nucleus',
        dot(220, 90, 6) + text(228, 108, 'N', { anchor: 'start', bold: true }) +
        line('M20 12 C150 12 260 11 360 7', 1.6) + line('M20 64 C150 64 190 62 300 26', 1.6) + line('M20 88 L194 88 Q204 90 194 93 L20 96', 1.6) + line('M20 125 C150 125 200 112 340 62', 1.6) +
        text(366, 12, 'P', { anchor: 'start', bold: true }) + text(306, 32, 'Q', { anchor: 'start', bold: true }) + text(14, 96, 'R', { anchor: 'end', bold: true }) + text(346, 62, 'S', { anchor: 'start', bold: true })),
      options: ['P', 'Q', 'R', 'S'],
      answer: 3,
      explain: 'The α particle and the nucleus are both positive, so the force is always repulsive: paths bend away from the nucleus. Far-off particles are barely deflected (P), closer ones more (Q), and a near head-on approach turns back (R). S bends towards the nucleus, which would need attraction.',
      zh: { sub: '盧瑟福散射', stem: '把 α 粒子射向金原子核 N。圖中哪一條路徑是不可能的？', explain: 'α 粒子和原子核都帶正電，所以力總是排斥力：路徑向遠離原子核的方向彎曲。遠離原子核的粒子幾乎不偏轉（P），較近的偏轉較多（Q），近乎正面接近的會被彈回（R）。S 向原子核彎曲，需要吸引力才可能出現。' }
    },
    {
      id: 'N116', topic: 'nuc', level: 3, sub: 'Nuclear equations',
      stem: 'On the chart of mass number A against atomic number Z, nuclide X decays to one of the nuclides P, Q, R or S. Which one is formed if X emits an α particle?',
      figure: svgGraph({
        aria: 'Chart of A against Z: X at Z 90, A 232; P at 88, 228; Q at 91, 232; R at 89, 232; S at 90, 228',
        x: { min: 85, max: 93, label: 'Z', ticks: [86, 87, 88, 89, 90, 91, 92].map(v => [v, String(v)]) }, y: { min: 226, max: 234, label: 'A', ticks: [228, 229, 230, 231, 232].map(v => [v, String(v)]) },
        guides: [[90, 232, 88, 228], [90, 232, 91, 232], [90, 232, 89, 232], [90, 232, 90, 228]],
        dots: [[90, 232, 'X'], [88, 228, 'P', -12, 4], [91, 232, 'Q'], [89, 232, 'R'], [90, 228, 'S', 12, 4]]
      }),
      options: ['P', 'Q', 'R', 'S'],
      answer: 0,
      explain: 'An α particle is a helium nucleus, ⁴₂He. Emitting it lowers the mass number by 4 and the atomic number by 2: from (Z, A) = (90, 232) to (88, 228), point P. (Q is β⁻ decay: Z rises by 1, A unchanged.)',
      zh: { sub: '核方程', stem: '在質量數 A 對原子序 Z 的圖上，核素 X 衰變成 P、Q、R 或 S 其中一種核素。如果 X 放出一粒 α 粒子，會形成哪一種？', explain: 'α 粒子是氦原子核 ⁴₂He。放出它使質量數減 4、原子序減 2：由 (Z, A) = (90, 232) 變成 (88, 228)，即 P 點。（Q 是 β⁻ 衰變：Z 增加 1，A 不變。）' }
    },
    {
      id: 'N117', topic: 'nuc', level: 3, sub: 'Chain reaction',
      stem: 'The diagram shows the start of a chain reaction in uranium-235. What condition is needed for the chain reaction to keep going?',
      figure: svg(380, 190, 'A neutron hits a uranium-235 nucleus, which splits into two fragments and three neutrons; the neutrons go on to hit three more uranium nuclei',
        dot(22, 95, 4) + text(22, 85, 'n', { size: 12 }) + arrow(28, 95, 60, 95, 1.4) + circ(80, 95, 18) + text(80, 100, 'U', { size: 13 }) +
        circ(128, 52, 10, 1.5) + circ(128, 138, 12, 1.5) + arrow(94, 84, 118, 60, 1.2) + arrow(94, 106, 118, 128, 1.2) +
        [40, 95, 150].map(y => arrow(100, 95, 205, y, 1.4) + dot(150, 95 + (y - 95) * 50 / 105, 3.5) + circ(225, y, 16) + text(225, y + 5, 'U', { size: 13 }) +
          arrow(242, y, 290, y - 18, 1.2) + arrow(242, y, 290, y, 1.2) + arrow(242, y, 290, y + 18, 1.2)).join('') +
        text(80, 130, 'U-235', { size: 11 }) + text(330, 100, '…', { size: 20 })),
      options: [
        'Each fission must release exactly three neutrons.',
        'On average, at least one neutron from each fission must cause another fission.',
        'The fission fragments must split further nuclei.',
        'The uranium must be heated to a very high temperature.'
      ],
      answer: 1,
      explain: 'Each fission is started by absorbing a neutron and releases 2–3 neutrons. The reaction continues as long as, on average, at least one of these goes on to cause another fission (in a reactor, exactly one). The fragments are not what spreads the reaction; high temperature is needed for fusion, not fission.',
      zh: {
        sub: '連鎖反應', stem: '下圖顯示鈾-235 中連鎖反應的開始。要使連鎖反應持續，需要甚麼條件？',
        options: ['每次裂變必須剛好放出三粒中子。', '平均來說，每次裂變放出的中子中至少有一粒引發另一次裂變。', '裂變碎片必須令更多原子核分裂。', '鈾必須被加熱至極高溫度。'],
        explain: '每次裂變由吸收一粒中子開始，並放出 2–3 粒中子。只要平均有至少一粒中子引發另一次裂變（在反應堆中剛好是一粒），反應便會持續。使反應擴散的不是碎片；極高溫度是核聚變而非裂變所需的條件。'
      }
    },
    {
      id: 'N118', topic: 'nuc', level: 2, sub: 'Nuclear reactors',
      stem: 'The diagram shows a simplified nuclear reactor. Which labelled part absorbs neutrons so that the rate of fission can be controlled?',
      figure: svg(380, 190, 'Reactor core: fuel rods rise from the bottom, control rods hang from the top between them, surrounded by moderator, with a coolant pipe at the side; labels P, Q, R and S',
        line('M60 30 H300 V170 H60 Z') + `<rect x="60" y="30" width="240" height="140" fill="currentColor" fill-opacity="0.08"/>` +
        [95, 165, 235].map(x => line(`M${x} 170 V70 H${x + 14} V170`, 2)).join('') +
        [130, 200, 270].map(x => `<rect x="${x}" y="12" width="10" height="90" fill="currentColor"/>`).join('') +
        line('M300 60 H350 M300 140 H350', 6) +
        line('M102 120 L30 120 M150 160 L30 175 M205 50 L345 20 M330 140 L345 165', 1) +
        text(24, 125, 'P', { anchor: 'end', bold: true }) + text(24, 180, 'Q', { anchor: 'end', bold: true }) + text(352, 22, 'R', { anchor: 'start', bold: true }) + text(352, 172, 'S', { anchor: 'start', bold: true })),
      options: ['P', 'Q', 'R', 'S'],
      answer: 2,
      explain: 'The control rods (R, e.g. boron or cadmium) absorb neutrons; lowering them slows the chain reaction. The fuel rods (P) contain uranium, the moderator (Q) slows neutrons down so they can cause fission, and the coolant (S) carries the energy away.',
      zh: { sub: '核反應堆', stem: '下圖顯示一個簡化的核反應堆。哪一個標示的部分吸收中子，使裂變的速率可以受到控制？', explain: '控制棒（R，例如硼或鎘）吸收中子；把它們插深可減慢連鎖反應。燃料棒（P）含鈾，減速劑（Q）使中子減速以引起裂變，冷卻劑（S）把能量帶走。' }
    },
    {
      id: 'N119', topic: 'nuc', level: 2, sub: 'Background radiation',
      stem: 'The pie chart shows the typical sources of the background radiation dose received by people in many places. Which sector most likely represents radon gas from the ground and buildings?',
      figure: svg(380, 190, 'Pie chart with a large sector S of half the chart and smaller sectors P, Q and R', pie),
      options: ['P', 'Q', 'R', 'S'],
      answer: 3,
      explain: 'Radon, a radioactive gas that seeps out of rocks, soil and building materials, is usually the largest single source of background radiation — around half of the average dose. The smaller sectors include medical use, rocks and buildings (γ), food and cosmic rays.',
      zh: { sub: '本底輻射', stem: '圓形圖顯示很多地方的人所接受的本底輻射劑量的典型來源。哪一部分最可能代表從地面和建築物釋出的氡氣？', explain: '氡是從岩石、泥土和建築材料滲出的放射性氣體，通常是本底輻射最大的單一來源 — 約佔平均劑量的一半。較小的部分包括醫療用途、岩石和建築物（γ）、食物和宇宙射線。' }
    },
    {
      id: 'N120', topic: 'nuc', level: 2, sub: 'Uses of radiation',
      stem: 'An X-ray photograph of an arm is taken with the film behind the arm. Why do the bones show up clearly as light areas on the developed film?',
      figure: svg(380, 190, 'X-rays from a tube pass through an arm containing a bone and fall on a film; the film behind the bone receives fewer X-rays',
        line('M160 10 H220 V30 H160 Z') + text(240, 24, 'X-rays', { anchor: 'start', size: 12 }) + line('M175 30 L110 165 M190 30 V165 M205 30 L270 165', 1, true) +
        `<ellipse cx="190" cy="105" rx="70" ry="22" fill="none" stroke="currentColor" stroke-width="2"/><ellipse cx="190" cy="105" rx="50" ry="8" fill="currentColor" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>` +
        line('M90 170 H290', 5) + line('M260 105 L330 90 M285 170 L330 178', 1) + text(336, 94, 'bone', { anchor: 'start', size: 12 }) + text(336, 182, 'film', { anchor: 'start', size: 12 })),
      options: [
        'Bone absorbs X-rays much more than soft tissue does, so fewer X-rays reach the film behind it.',
        'Bone emits X-rays of its own.',
        'Soft tissue reflects the X-rays back towards the tube.',
        'X-rays pass through bone more easily than through soft tissue.'
      ],
      answer: 0,
      explain: 'X-rays pass fairly easily through soft tissue but are strongly absorbed by the denser bone. The film behind the bone receives fewer X-rays, so after developing it stays lighter, forming a "shadow" of the bone.',
      zh: {
        sub: '輻射的應用', stem: '拍攝手臂的 X 光照片，菲林放在手臂後面。為甚麼骨骼在沖曬後的菲林上清楚地顯示為淺色區域？',
        options: ['骨骼吸收 X 射線遠多於軟組織，所以到達其後菲林的 X 射線較少。', '骨骼本身會放出 X 射線。', '軟組織把 X 射線反射回 X 光管。', 'X 射線穿過骨骼比穿過軟組織容易。'],
        explain: 'X 射線頗容易穿過軟組織，但被密度較大的骨骼強烈吸收。骨骼後的菲林接收較少 X 射線，沖曬後保持淺色，形成骨骼的「影子」。'
      }
    },
    {
      id: 'N121', topic: 'nuc', level: 3, sub: 'Inverse-square law',
      stem: 'A small γ source gives a count rate (corrected for background) of 80 counts s⁻¹ when the detector is 20 cm away. Assuming the γ rays spread out evenly and are not absorbed by the air, what is the corrected count rate when the detector is moved to 40 cm?',
      figure: svg(380, 140, 'A gamma source and a detector at 20 cm, then moved to 40 cm',
        dot(40, 70, 6) + line('M48 70 L130 40 M48 70 L130 100 M48 70 L230 22 M48 70 L230 118', 1, true) +
        line('M130 58 H160 V82 H130 Z', 1.5) + line('M230 58 H260 V82 H230 Z', 1.5, true) +
        arrow(85, 118, 42, 118, 1) + arrow(85, 118, 128, 118, 1) + text(85, 134, '20 cm', { size: 12 }) +
        arrow(135, 100, 42, 100, 1) + arrow(135, 100, 228, 100, 1) + text(190, 94, '40 cm', { size: 12 })),
      options: ['10 counts s⁻¹', '20 counts s⁻¹', '40 counts s⁻¹', '60 counts s⁻¹'],
      answer: 1,
      explain: 'The γ rays spread over a sphere, so the intensity ∝ 1/d². Doubling the distance reduces the count rate to (½)² = ¼ of its value: 80 / 4 = 20 counts s⁻¹. (40 counts s⁻¹ would mean ∝ 1/d.)',
      zh: {
        sub: '平方反比定律', stem: '當探測器與一個細小的 γ 放射源相距 20 cm 時，計數率（已扣除本底）為每秒 80 次計數。假設 γ 射線均勻散開且不被空氣吸收，把探測器移至 40 cm 時，扣除本底後的計數率是多少？',
        options: ['每秒 10 次計數', '每秒 20 次計數', '每秒 40 次計數', '每秒 60 次計數'],
        explain: 'γ 射線散佈在球面上，所以強度 ∝ 1/d²。距離加倍，計數率減至原來的 (½)² = ¼：80 / 4 = 每秒 20 次計數。（每秒 40 次計數即誤以為 ∝ 1/d。）'
      }
    },
    {
      id: 'N122', topic: 'nuc', level: 4, sub: 'Uses of radiation',
      stem: 'In a paper mill, a radioactive source below the moving paper and a detector above it are used to monitor the paper\'s thickness. The count rate suddenly increases. What does this show, and why is a β source used?',
      figure: svg(380, 170, 'Paper passes between rollers; a source below the paper and a detector above it',
        line('M20 85 H360', 3) + circ(80, 72, 12) + circ(80, 98, 12) + circ(300, 72, 12) + circ(300, 98, 12) +
        line('M175 120 H205 V145 H175 Z') + line('M172 25 H208 V55 H172 Z') + arrow(190, 118, 190, 92, 1.2) + arrow(190, 80, 190, 58, 1.2) +
        text(215, 138, 'source', { anchor: 'start', size: 12 }) + text(215, 40, 'detector', { anchor: 'start', size: 12 }) + text(360, 116, 'paper', { anchor: 'end', size: 12 })),
      options: [
        'The paper has become thicker; β is used because it is completely stopped by paper.',
        'The paper has become thinner; γ would work better because it is more penetrating.',
        'The paper has become thinner; β is used because α would be stopped completely and γ would hardly be affected by the paper.',
        'The source is running out; a source with a short half-life is used.'
      ],
      answer: 2,
      explain: 'A higher count rate means less radiation is absorbed, so the paper is thinner. β particles are partly absorbed by paper, so their count rate is sensitive to small changes in thickness. α would be stopped by any paper, and γ would pass almost unaffected. The source needs a long half-life.',
      zh: {
        sub: '輻射的應用', stem: '造紙廠利用移動中的紙下方的放射源和上方的探測器，監察紙的厚度。計數率突然增加。這表示甚麼？為甚麼使用 β 放射源？',
        options: ['紙變厚了；使用 β 是因為它會完全被紙阻擋。', '紙變薄了；γ 較適合，因為它的穿透能力較強。', '紙變薄了；使用 β 是因為 α 會完全被阻擋，而 γ 幾乎不受紙影響。', '放射源快將耗盡；所用放射源的半衰期很短。'],
        explain: '計數率上升表示被吸收的輻射較少，所以紙變薄了。β 粒子會部分被紙吸收，其計數率對厚度的微小變化很敏感。任何紙都會阻擋 α，而 γ 幾乎不受影響地穿過。放射源需要有長的半衰期。'
      }
    },
    {
      id: 'N123', topic: 'nuc', level: 2, sub: 'Half-life',
      stem: 'The graph shows the percentage of a radioactive sample remaining against the number of half-lives that have passed. What is the minimum whole number of half-lives before less than 10% of the sample remains?',
      figure: svgGraph({
        aria: 'Decay curve of percentage remaining against number of half-lives: 100, 50, 25, 12.5, 6.25; a dashed line marks 10 percent',
        x: { max: 5.5, label: 'half-lives', ticks: [1, 2, 3, 4, 5].map(v => [v, String(v)]) }, y: { max: 110, label: '% remaining', ticks: [[100, '100'], [50, '50'], [25, '25'], [10, '10']] },
        lines: [{ f: x => 100 * Math.pow(2, -x), from: 0, to: 5, n: 60 }], guides: [[0, 10, 5.2, 10]]
      }),
      options: ['1', '2', '3', '4'],
      answer: 3,
      explain: 'After each half-life the amount halves: 100% → 50% → 25% → 12.5% → 6.25%. After 3 half-lives 12.5% (still above 10%) remains; after 4, 6.25%. So 4 half-lives are needed.',
      zh: { sub: '半衰期', stem: '下圖顯示放射性樣本剩餘的百分率對已經過的半衰期數目。至少要經過多少個（整數）半衰期，樣本剩餘的量才會少於 10%？', explain: '每過一個半衰期，數量減半：100% → 50% → 25% → 12.5% → 6.25%。3 個半衰期後剩 12.5%（仍高於 10%）；4 個後剩 6.25%。所以需要 4 個半衰期。' }
    }
  ]);
})();
