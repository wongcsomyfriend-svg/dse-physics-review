/* Heat and Gases — additional hand-written questions (H35 onwards). Fields: see questions.js and bank/core.js. */
addBank([
  {
    id: 'H35', topic: 'heat', level: 2, sub: 'Thermometers',
    stem: 'Which of the following is the thermometric property used in a liquid-in-glass thermometer?',
    options: ['The length of the liquid column', 'The mass of the liquid', 'The colour of the liquid', 'The pressure of the air above the liquid'],
    answer: 0,
    explain: 'A thermometric property must change steadily and measurably with temperature. The liquid expands as it warms, so the length of the thread in the narrow capillary tube changes. Its mass does not change.',
    zh: {
      sub: '溫度計',
      stem: '液體玻璃溫度計所用的測溫性質是下列哪一項？',
      options: ['液柱的長度', '液體的質量', '液體的顏色', '液體上方空氣的壓強'],
      explain: '測溫性質必須隨溫度穩定而可量度地改變。液體受熱膨脹，所以幼毛細管內液柱的長度會改變。液體的質量則不變。'
    }
  },
  {
    id: 'H36', topic: 'heat', level: 2, sub: 'Temperature scales',
    stem: 'A temperature rise of 25 °C is equal to a temperature rise of',
    options: ['−248 K', '25 K', '248 K', '298 K'],
    answer: 1,
    explain: 'One kelvin is the same size as one degree Celsius; only the zero points differ. So a temperature <i>difference</i> has the same value on both scales: 25 °C rise = 25 K rise.<br>298 K is the kelvin temperature of 25 °C, not of a rise of 25 °C.',
    zh: {
      sub: '溫標',
      stem: '溫度上升 25 °C 等於溫度上升',
      explain: '一開爾文與一攝氏度的大小相同，只是零點不同。所以溫度<i>差</i>在兩種溫標上數值相同：上升 25 °C = 上升 25 K。<br>298 K 是 25 °C 這個溫度的開爾文值，而非上升 25 °C。'
    }
  },
  {
    id: 'H37', topic: 'heat', level: 3, sub: 'Absolute zero',
    stem: 'Which of the following statements about absolute zero is correct?',
    options: [
      'It is the temperature at which pure water freezes.',
      'It is the temperature at which molecules move fastest.',
      'It is the temperature at which the pressure of an ideal gas at constant volume would become zero.',
      'It is about −100 °C.'
    ],
    answer: 2,
    explain: 'Absolute zero (0 K ≈ −273 °C) is found by extrapolating the straight-line p–θ graph of a gas at constant volume back to p = 0. At that temperature the molecules would have the least possible kinetic energy, not the most.',
    zh: {
      sub: '絕對零度',
      stem: '下列有關絕對零度的敘述，哪項是正確的？',
      options: ['它是純水凝固的溫度。', '它是分子運動最快的溫度。', '它是體積不變的理想氣體的壓強會變為零的溫度。', '它約為 −100 °C。'],
      explain: '把體積不變的氣體的 p–θ 直線圖外推至 p = 0，便得出絕對零度（0 K ≈ −273 °C）。在這溫度下分子的動能最少，而非最多。'
    }
  },
  {
    id: 'H38', topic: 'heat', level: 3, sub: 'Heat capacity',
    stem: 'The same amount of energy is given to two objects X and Y. The temperature rise of Y is twice that of X. What is the ratio (heat capacity of X) : (heat capacity of Y)?',
    options: ['1 : 4', '1 : 2', '1 : 1', '2 : 1'],
    answer: 3,
    explain: 'E = CΔT, so for the same E, C ∝ 1 / ΔT.<br>ΔT<sub>Y</sub> = 2ΔT<sub>X</sub> ⇒ C<sub>X</sub> = 2C<sub>Y</sub> ⇒ C<sub>X</sub> : C<sub>Y</sub> = 2 : 1.<br>The object whose temperature rises less has the larger heat capacity.',
    zh: {
      sub: '熱容量',
      stem: '把相同的能量分別給予物體 X 和 Y。Y 的溫度上升是 X 的兩倍。（X 的熱容量）:（Y 的熱容量）之比是多少？',
      explain: 'E = CΔT，所以 E 相同時 C ∝ 1 / ΔT。<br>ΔT<sub>Y</sub> = 2ΔT<sub>X</sub> ⇒ C<sub>X</sub> = 2C<sub>Y</sub> ⇒ C<sub>X</sub> : C<sub>Y</sub> = 2 : 1。<br>溫度上升較少的物體熱容量較大。'
    }
  },
  {
    id: 'H39', topic: 'heat', level: 3, sub: 'Specific heat capacity',
    stem: 'Equal masses of water and cooking oil are heated by identical heaters. The temperature of the oil rises faster. Which of the following statements is/are correct?',
    statements: [
      'The oil has a lower specific heat capacity than the water.',
      'In the same time, the water and the oil receive the same amount of energy.',
      'The oil has a larger heat capacity than the water.'
    ],
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: 0,
    explain: '(2) ✓ Identical heaters supply energy at the same rate.<br>(1) ✓ ΔT = E / (mc); with the same E and m, the faster rise means a smaller c.<br>(3) ✗ Heat capacity = mc; with equal masses, the oil has the smaller heat capacity.',
    zh: {
      sub: '比熱容量',
      stem: '用相同的電熱器加熱質量相同的水和食油，食油的溫度上升得較快。下列哪項／哪些敘述是正確的？',
      statements: ['食油的比熱容量比水低。', '在相同時間內，水和食油吸收相同的能量。', '食油的熱容量比水大。'],
      explain: '(2) ✓ 相同的電熱器以相同的速率供應能量。<br>(1) ✓ ΔT = E / (mc)；E 和 m 相同，溫度上升較快即 c 較小。<br>(3) ✗ 熱容量 = mc；質量相同時，食油的熱容量較小。'
    }
  },
  {
    id: 'H40', topic: 'heat', level: 3, sub: 'Heat loss',
    stem: '0.25 kg of coffee cools from 80 °C to 60 °C in 5 minutes. Taking the specific heat capacity of the coffee as 4200 J kg⁻¹ °C⁻¹, what is the average rate at which it loses energy?',
    options: ['35 W', '70 W', '4200 W', '21000 W'],
    answer: 1,
    explain: 'Energy lost = mcΔT = 0.25 × 4200 × (80 − 60) = 21 000 J.<br>Rate = 21 000 / (5 × 60) = 70 W.<br>4200 W divides by 5 without changing minutes to seconds; 21 000 W is the energy, not the rate.',
    zh: {
      sub: '熱散失',
      stem: '0.25 kg 的咖啡在 5 分鐘內由 80 °C 冷卻至 60 °C。取咖啡的比熱容量為 4200 J kg⁻¹ °C⁻¹，它散失能量的平均速率是多少？',
      explain: '散失的能量 = mcΔT = 0.25 × 4200 × (80 − 60) = 21 000 J。<br>速率 = 21 000 / (5 × 60) = 70 W。<br>4200 W 是除以 5 而沒有把分鐘轉換為秒；21 000 W 是能量而非速率。'
    }
  },
  {
    id: 'H41', topic: 'heat', level: 4, sub: 'Efficiency',
    stem: 'A 2.0 kW electric kettle heats 1.5 kg of water from 20 °C to 100 °C in 320 s. What is the efficiency of the kettle?<br>(Specific heat capacity of water = 4200 J kg⁻¹ °C⁻¹)',
    options: ['21 %', '63 %', '79 %', '127 %'],
    answer: 2,
    explain: 'Useful energy = mcΔT = 1.5 × 4200 × 80 = 5.04 × 10⁵ J.<br>Energy supplied = Pt = 2000 × 320 = 6.40 × 10⁵ J.<br>Efficiency = 5.04 / 6.40 = 0.79 = 79 %.<br>127 % inverts the ratio — an efficiency can never exceed 100 %. 21 % is the fraction wasted.',
    zh: {
      sub: '效率',
      stem: '一個 2.0 kW 的電水壺在 320 s 內把 1.5 kg 的水由 20 °C 加熱至 100 °C。電水壺的效率是多少？<br>（水的比熱容量 = 4200 J kg⁻¹ °C⁻¹）',
      explain: '有用能量 = mcΔT = 1.5 × 4200 × 80 = 5.04 × 10⁵ J。<br>供應的能量 = Pt = 2000 × 320 = 6.40 × 10⁵ J。<br>效率 = 5.04 / 6.40 = 0.79 = 79 %。<br>127 % 把比例倒轉了 — 效率不可能超過 100 %。21 % 是浪費掉的部分。'
    }
  },
  {
    id: 'H42', topic: 'heat', level: 2, sub: 'Evaporation',
    stem: 'Which of the following would NOT increase the rate of evaporation of water from a wet towel?',
    options: [
      'Raising the temperature of the towel',
      'Spreading the towel out to increase its exposed surface area',
      'Blowing air across the towel',
      'Increasing the humidity of the surrounding air'
    ],
    answer: 3,
    explain: 'Evaporation is faster when more molecules have enough energy to escape (higher temperature), when more surface is exposed, and when vapour is carried away (wind). Humid air already holds a lot of water vapour, so more molecules return to the towel and the net rate of evaporation falls.',
    zh: {
      sub: '蒸發',
      stem: '下列哪項並不會增加濕毛巾上水分的蒸發速率？',
      options: ['提高毛巾的溫度', '把毛巾攤開以增加暴露的表面面積', '把空氣吹過毛巾', '增加周圍空氣的濕度'],
      explain: '當更多分子有足夠能量逸出（溫度較高）、暴露的表面較多、以及水汽被帶走（有風）時，蒸發較快。潮濕的空氣已含有大量水汽，更多分子會返回毛巾，所以淨蒸發速率下降。'
    }
  },
  {
    id: 'H43', topic: 'heat', level: 3, sub: 'Boiling and evaporation',
    stem: 'Which of the following statements is/are correct?',
    statements: [
      'Boiling takes place at a definite temperature for a given pressure.',
      'Water evaporates only at 100 °C.',
      'Bubbles of vapour form inside a liquid that is evaporating.'
    ],
    options: STMT_OPTS,
    answer: 0,
    explain: '(1) ✓ At a given pressure a pure liquid boils at a fixed temperature (water: 100 °C at standard atmospheric pressure).<br>(2) ✗ Evaporation happens at any temperature.<br>(3) ✗ Evaporation happens only at the surface; bubbles form throughout the liquid only when it boils.',
    zh: {
      sub: '沸騰和蒸發',
      stem: '下列哪項／哪些敘述是正確的？',
      statements: ['在某一壓強下，沸騰在一個確定的溫度發生。', '水只在 100 °C 時才會蒸發。', '正在蒸發的液體內部會形成蒸氣泡。'],
      explain: '(1) ✓ 在某一壓強下，純液體在固定溫度沸騰（水在標準大氣壓下為 100 °C）。<br>(2) ✗ 蒸發在任何溫度都會發生。<br>(3) ✗ 蒸發只在表面發生；液體沸騰時才會在內部各處形成氣泡。'
    }
  },
  {
    id: 'H44', topic: 'heat', level: 3, sub: 'Latent heat',
    stem: 'During a long run, an athlete loses 1.2 × 10⁶ J of energy by the evaporation of sweat. Taking the specific latent heat of vaporization of sweat as 2.4 × 10⁶ J kg⁻¹, what mass of sweat evaporates?',
    options: ['0.05 kg', '0.50 kg', '2.0 kg', '5.0 kg'],
    answer: 1,
    explain: 'E = mℓ ⇒ m = E / ℓ = 1.2 × 10⁶ / 2.4 × 10⁶ = 0.50 kg.<br>The large latent heat is why sweating is such an effective way to cool the body. 2.0 kg inverts the division.',
    zh: {
      sub: '潛熱',
      stem: '在一次長跑中，一名運動員透過汗水蒸發失去 1.2 × 10⁶ J 的能量。取汗水的汽化比潛熱為 2.4 × 10⁶ J kg⁻¹，蒸發了多少質量的汗水？',
      explain: 'E = mℓ ⇒ m = E / ℓ = 1.2 × 10⁶ / 2.4 × 10⁶ = 0.50 kg。<br>汽化潛熱很大，所以出汗是有效的散熱方法。2.0 kg 把除法倒轉了。'
    }
  },
  {
    id: 'H45', topic: 'heat', level: 2, sub: 'Change of state',
    stem: 'While a solid is melting, its temperature stays constant even though it is being heated. Why?',
    options: [
      'All the energy supplied is lost to the surroundings.',
      'The specific heat capacity of the substance becomes zero.',
      'The energy absorbed increases the potential energy of the molecules, not their kinetic energy.',
      'The molecules stop moving while the solid melts.'
    ],
    answer: 2,
    explain: 'During melting the energy (latent heat) is used to overcome the forces holding the molecules in fixed positions, so their potential energy increases. Their average kinetic energy — and hence the temperature — stays the same.',
    zh: {
      sub: '物態的改變',
      stem: '固體熔化時，雖然不斷被加熱，溫度卻保持不變。為甚麼？',
      options: ['供應的能量全部散失到周圍環境。', '物質的比熱容量變為零。', '吸收的能量增加分子的勢能，而非動能。', '固體熔化時分子停止運動。'],
      explain: '熔化期間，能量（潛熱）用來克服把分子固定在位置上的作用力，所以分子的勢能增加。分子的平均動能 — 亦即溫度 — 保持不變。'
    }
  },
  {
    id: 'H46', topic: 'heat', level: 3, sub: 'Cooling curve',
    stem: 'The graph shows the cooling curve of a liquid that solidifies. During which part(s) does the substance give out energy?',
    figure: '<svg viewBox="0 0 400 200" role="img" aria-label="Cooling curve: temperature falls from P to Q, stays constant from Q to R, then falls from R to S"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M50 180 V20 M50 180 H350"/><path d="M60 40 L140 100 L260 100 L340 160" stroke-width="2.5"/></g><g fill="currentColor"><circle cx="60" cy="40" r="3.5"/><circle cx="140" cy="100" r="3.5"/><circle cx="260" cy="100" r="3.5"/><circle cx="340" cy="160" r="3.5"/></g><g fill="currentColor" font-size="13" font-family="inherit" text-anchor="middle"><text x="70" y="34">P</text><text x="140" y="90">Q</text><text x="260" y="90">R</text><text x="352" y="158">S</text><text x="58" y="16" text-anchor="start">temperature</text><text x="355" y="184" text-anchor="start">time</text></g></svg>',
    options: ['QR only', 'PQ and RS only', 'PQ and QR only', 'PQ, QR and RS'],
    answer: 3,
    explain: 'PQ: the liquid cools, giving out energy. QR: the substance solidifies at constant temperature, giving out latent heat. RS: the solid cools, giving out energy.<br>A constant temperature does not mean no energy is being transferred.',
    zh: {
      sub: '冷卻曲線',
      stem: '下圖顯示一種液體凝固時的冷卻曲線。物質在哪段／哪些段時間放出能量？',
      options: ['只有 QR', '只有 PQ 和 RS', '只有 PQ 和 QR', 'PQ、QR 和 RS'],
      explain: 'PQ：液體冷卻，放出能量。QR：物質在恆溫下凝固，放出潛熱。RS：固體冷卻，放出能量。<br>溫度不變並不表示沒有能量轉移。'
    }
  },
  {
    id: 'H47', topic: 'heat', level: 3, sub: 'Latent heat',
    stem: 'To measure the specific latent heat of fusion of ice, crushed ice in funnel X is heated by an immersion heater, and the melted water is collected. Funnel Y is identical and contains the same amount of ice, but has no heater switched on. Water from Y is collected over the same time. Why is funnel Y used?',
    options: [
      'To find the mass of ice melted by energy from the surroundings',
      'To check the power of the heater',
      'To keep the ice in X at 0 °C',
      'To measure the temperature of the melted water'
    ],
    answer: 0,
    explain: 'Some ice in X melts because of energy from the warmer room, not from the heater. Funnel Y, under the same conditions without the heater, measures that mass. Subtracting it gives the mass melted by the heater alone.',
    zh: {
      sub: '潛熱',
      stem: '為量度冰的熔解比潛熱，用浸沒式電熱器加熱漏斗 X 中的碎冰，並收集熔化的水。漏斗 Y 與 X 相同，載有相同分量的冰，但電熱器沒有開啟；在同一段時間內亦收集 Y 熔化的水。為甚麼要用漏斗 Y？',
      options: ['找出由周圍環境的能量熔化的冰的質量', '檢查電熱器的功率', '使 X 中的冰保持在 0 °C', '量度熔化的水的溫度'],
      explain: 'X 中有些冰是由較暖的室內環境的能量而非電熱器熔化的。漏斗 Y 在相同情況下但沒有電熱器，可量出這部分的質量。把它減去，便得出只由電熱器熔化的冰的質量。'
    }
  },
  {
    id: 'H48', topic: 'heat', level: 4, sub: 'Latent heat',
    stem: 'To measure the specific latent heat of fusion of ice, a 500 W heater is switched on in a funnel X of crushed ice for 4.0 minutes. In this time 0.30 kg of water is collected from X, and 0.05 kg from an identical control funnel Y of ice with no heater. What is the specific latent heat of fusion of ice given by these results?',
    options: ['4.0 × 10⁵ J kg⁻¹', '4.8 × 10⁵ J kg⁻¹', '2.4 × 10⁶ J kg⁻¹', '2.9 × 10⁷ J kg⁻¹'],
    answer: 1,
    explain: 'Energy from the heater = 500 × 4.0 × 60 = 1.2 × 10⁵ J.<br>Mass melted by the heater = 0.30 − 0.05 = 0.25 kg.<br>ℓ = 1.2 × 10⁵ / 0.25 = 4.8 × 10⁵ J kg⁻¹.<br>4.0 × 10⁵ J kg⁻¹ ignores the control funnel; 2.4 × 10⁶ J kg⁻¹ divides by the control mass instead.',
    zh: {
      sub: '潛熱',
      stem: '為量度冰的熔解比潛熱，把盛有碎冰的漏斗 X 中的 500 W 電熱器開啟 4.0 分鐘。在這段時間內，從 X 收集到 0.30 kg 的水，從一個相同但沒有電熱器的對照漏斗 Y 收集到 0.05 kg。這些結果得出的冰的熔解比潛熱是多少？',
      explain: '電熱器供應的能量 = 500 × 4.0 × 60 = 1.2 × 10⁵ J。<br>由電熱器熔化的質量 = 0.30 − 0.05 = 0.25 kg。<br>ℓ = 1.2 × 10⁵ / 0.25 = 4.8 × 10⁵ J kg⁻¹。<br>4.0 × 10⁵ J kg⁻¹ 忽略了對照漏斗；2.4 × 10⁶ J kg⁻¹ 錯誤地除以對照漏斗的質量。'
    }
  },
  {
    id: 'H49', topic: 'heat', level: 2, sub: 'Conduction',
    stem: 'Metals are good conductors of heat mainly because',
    options: ['their atoms are far apart.', 'their surfaces are shiny.', 'they contain free electrons that carry energy quickly.', 'they have high specific heat capacities.'],
    answer: 2,
    explain: 'In all solids, energy is passed on by vibrating atoms. Metals also have free (delocalized) electrons that move quickly through the metal and carry energy from hot to cold regions, which makes conduction much faster.',
    zh: {
      sub: '傳導',
      stem: '金屬是良好的熱導體，主要是因為',
      options: ['它們的原子相距很遠。', '它們的表面光亮。', '它們含有能迅速攜帶能量的自由電子。', '它們的比熱容量很高。'],
      explain: '在所有固體中，能量都可經振動的原子傳遞。金屬還有自由（離域）電子，它們在金屬中迅速移動，把能量由熱處帶到冷處，因此傳導快得多。'
    }
  },
  {
    id: 'H50', topic: 'heat', level: 3, sub: 'Convection',
    stem: 'Which of the following statements is/are correct?',
    statements: [
      'Convection can take place in solids.',
      'The heating element of an electric kettle is placed near the bottom so that convection currents can heat all the water.',
      'The freezer compartment of a refrigerator is placed near the top so that cold air sinks and circulates.'
    ],
    options: STMT_OPTS,
    answer: 3,
    explain: '(1) ✗ Convection needs a fluid that can flow; solids transfer energy by conduction (and radiation).<br>(2) ✓ Heated water at the bottom becomes less dense and rises, and cooler water sinks to be heated.<br>(3) ✓ Air cooled at the top becomes denser and sinks, setting up a convection current through the cabinet.',
    zh: {
      sub: '對流',
      stem: '下列哪項／哪些敘述是正確的？',
      statements: ['對流可以在固體中發生。', '電水壺的發熱元件安裝在接近底部的位置，使對流可加熱所有的水。', '雪櫃的冷藏格安裝在接近頂部的位置，使冷空氣下沉並循環。'],
      explain: '(1) ✗ 對流需要可流動的流體；固體以傳導（和輻射）轉移能量。<br>(2) ✓ 底部受熱的水密度變小而上升，較冷的水下沉並被加熱。<br>(3) ✓ 在頂部冷卻的空氣密度變大而下沉，在櫃內形成對流。'
    }
  },
  {
    id: 'H51', topic: 'heat', level: 3, sub: 'Radiation',
    stem: 'Two identical metal cans are filled with the same mass of hot water at the same temperature. One can is painted dull black and the other is polished and shiny. Which can cools faster, and why?',
    options: [
      'The black can, because a dull black surface is a better emitter of radiation.',
      'The shiny can, because a shiny surface is a better emitter of radiation.',
      'The black can, because black paint is a better conductor of heat.',
      'Both cool at the same rate, because they contain the same water.'
    ],
    answer: 0,
    explain: 'Dull black surfaces are good emitters (and good absorbers) of thermal radiation; shiny surfaces are poor emitters. The black can loses energy by radiation faster, so it cools faster.',
    zh: {
      sub: '輻射',
      stem: '兩個相同的金屬罐盛有質量和溫度都相同的熱水。一個罐塗上暗黑色，另一個經打磨而光亮。哪一個罐冷卻得較快？為甚麼？',
      options: ['黑色罐，因為暗黑色表面是較佳的輻射放射體。', '光亮罐，因為光亮表面是較佳的輻射放射體。', '黑色罐，因為黑色油漆是較佳的熱導體。', '兩者冷卻速率相同，因為所盛的水相同。'],
      explain: '暗黑色表面是熱輻射的良好放射體（和吸收體）；光亮表面是不良放射體。黑色罐經輻射散失能量較快，所以冷卻得較快。'
    }
  },
  {
    id: 'H52', topic: 'heat', level: 4, sub: 'Radiation',
    stem: 'On a sunny day, the air inside a greenhouse becomes much warmer than the air outside. Which of the following help(s) to explain this?',
    statements: [
      'Glass lets most of the short-wavelength radiation from the Sun pass through.',
      'Glass is a good conductor of heat, so energy flows in from the outside.',
      'Much of the long-wavelength infra-red emitted by objects inside is absorbed or reflected by the glass.'
    ],
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: 1,
    explain: '(1) ✓ Visible and short infra-red radiation from the very hot Sun passes through glass and is absorbed inside.<br>(3) ✓ The cooler objects inside re-emit long-wavelength infra-red, which glass does not let through easily, so energy is trapped. The closed glass also stops warm air escaping by convection.<br>(2) ✗ Glass is a poor conductor.',
    zh: {
      sub: '輻射',
      stem: '在晴天，溫室內的空氣比室外暖得多。下列哪項／哪些有助解釋這現象？',
      statements: ['玻璃讓太陽發出的大部分短波長輻射通過。', '玻璃是良好的熱導體，所以能量由外面流入。', '室內物體發出的長波長紅外線大多被玻璃吸收或反射。'],
      explain: '(1) ✓ 極熱的太陽發出的可見光和短波紅外線穿過玻璃，被室內物體吸收。<br>(3) ✓ 室內較冷的物體再發出長波長的紅外線，玻璃不易讓它通過，於是能量被困住。關閉的玻璃亦阻止暖空氣經對流逸出。<br>(2) ✗ 玻璃是不良導體。'
    }
  },
  {
    id: 'H53', topic: 'heat', level: 2, sub: 'Conduction',
    stem: 'Double-glazed windows have a thin layer of air (or a vacuum) trapped between two panes of glass. This mainly reduces energy transfer by',
    options: ['radiation.', 'convection.', 'conduction.', 'evaporation.'],
    answer: 2,
    explain: 'Trapped air is a very poor conductor, and a vacuum cannot conduct at all, so the gap greatly reduces conduction through the window. The gap is kept thin so that convection currents in the air are small. Radiation passes through glass and gaps.',
    zh: {
      sub: '傳導',
      stem: '雙層玻璃窗在兩塊玻璃之間困住一層薄空氣（或真空）。這主要減少經哪種方式的能量轉移？',
      options: ['輻射', '對流', '傳導', '蒸發'],
      explain: '被困的空氣是極差的導體，而真空完全不能傳導，所以空隙大大減少經窗戶的傳導。空隙保持很薄，使空氣中的對流很小。輻射則可穿過玻璃和空隙。'
    }
  },
  {
    id: 'H54', topic: 'heat', level: 3, sub: 'Boiling point',
    stem: 'Food cooks faster in a pressure cooker than in an open pan of boiling water. Why?',
    options: [
      'Less energy is needed to boil the water.',
      'Steam has a lower specific latent heat at high pressure.',
      'Energy loss by radiation is reduced.',
      'The water boils at a temperature higher than 100 °C.'
    ],
    answer: 3,
    explain: 'Raising the pressure above the water raises its boiling point (to about 120 °C in a typical cooker). The food is surrounded by water and steam at this higher temperature, so it cooks faster.',
    zh: {
      sub: '沸點',
      stem: '用壓力鍋煮食物比用一鍋敞開的沸水快。為甚麼？',
      options: ['把水煮沸所需的能量較少。', '在高壓下蒸汽的比潛熱較低。', '經輻射散失的能量減少。', '水在高於 100 °C 的溫度才沸騰。'],
      explain: '提高水面上的壓強會提高水的沸點（一般壓力鍋約為 120 °C）。食物被這較高溫度的水和蒸汽包圍，所以煮得較快。'
    }
  },
  {
    id: 'H55', topic: 'heat', level: 2, sub: 'Latent heat',
    stem: 'What is the SI unit of specific latent heat?',
    options: ['J kg⁻¹', 'J', 'J kg⁻¹ °C⁻¹', 'J °C⁻¹'],
    answer: 0,
    explain: 'Specific latent heat ℓ = E / m (energy per unit mass), so its unit is J kg⁻¹. There is no temperature unit because the temperature does not change during a change of state. J kg⁻¹ °C⁻¹ is the unit of specific heat capacity and J °C⁻¹ that of heat capacity.',
    zh: {
      sub: '潛熱',
      stem: '比潛熱的國際單位是甚麼？',
      explain: '比潛熱 ℓ = E / m（每單位質量的能量），所以單位是 J kg⁻¹。由於物態改變期間溫度不變，所以單位中沒有溫度單位。J kg⁻¹ °C⁻¹ 是比熱容量的單位，J °C⁻¹ 是熱容量的單位。'
    }
  },
  {
    id: 'H56', topic: 'heat', level: 4, sub: 'Heat capacity',
    stem: '0.20 kg of water at 80 °C is poured into a cup at 20 °C. The heat capacity of the cup is 100 J °C⁻¹. Neglecting heat loss to the surroundings, what is the final temperature of the water?<br>(Specific heat capacity of water = 4200 J kg⁻¹ °C⁻¹)',
    options: ['50.0 °C', '73.6 °C', '76.9 °C', '80.0 °C'],
    answer: 1,
    explain: 'Energy lost by water = energy gained by cup:<br>0.20 × 4200 × (80 − T) = 100 × (T − 20)<br>840(80 − T) = 100(T − 20) ⇒ 69 200 = 940T ⇒ T = 73.6 °C.<br>The cup has a much smaller heat capacity (100 J °C⁻¹) than the water (840 J °C⁻¹), so the water cools only a little. 50.0 °C is the simple average.',
    zh: {
      sub: '熱容量',
      stem: '把 0.20 kg、溫度為 80 °C 的水倒進一個溫度為 20 °C 的杯中。杯的熱容量為 100 J °C⁻¹。忽略散失到周圍環境的熱，水的最終溫度是多少？<br>（水的比熱容量 = 4200 J kg⁻¹ °C⁻¹）',
      explain: '水放出的能量 = 杯吸收的能量：<br>0.20 × 4200 × (80 − T) = 100 × (T − 20)<br>840(80 − T) = 100(T − 20) ⇒ 69 200 = 940T ⇒ T = 73.6 °C。<br>杯的熱容量（100 J °C⁻¹）比水的（840 J °C⁻¹）小得多，所以水只冷卻少許。50.0 °C 是簡單平均值。'
    }
  },
  {
    id: 'H57', topic: 'heat', level: 3, sub: 'Method of mixtures',
    stem: 'Equal masses of water at 90 °C and liquid X at 30 °C are mixed. The specific heat capacity of X is 2100 J kg⁻¹ °C⁻¹ and that of water is 4200 J kg⁻¹ °C⁻¹. Neglecting heat loss, what is the final temperature?',
    options: ['50 °C', '60 °C', '70 °C', '80 °C'],
    answer: 2,
    explain: 'm × 4200 × (90 − T) = m × 2100 × (T − 30). The masses cancel:<br>2(90 − T) = T − 30 ⇒ 210 = 3T ⇒ T = 70 °C.<br>The water has twice the specific heat capacity, so its temperature changes half as much (20 °C against 40 °C). 60 °C is the simple average.',
    zh: {
      sub: '混合法',
      stem: '把質量相同、溫度為 90 °C 的水和溫度為 30 °C 的液體 X 混合。X 的比熱容量為 2100 J kg⁻¹ °C⁻¹，水的為 4200 J kg⁻¹ °C⁻¹。忽略熱散失，最終溫度是多少？',
      explain: 'm × 4200 × (90 − T) = m × 2100 × (T − 30)。質量互相抵消：<br>2(90 − T) = T − 30 ⇒ 210 = 3T ⇒ T = 70 °C。<br>水的比熱容量是 X 的兩倍，所以溫度變化只有 X 的一半（20 °C 對 40 °C）。60 °C 是簡單平均值。'
    }
  },
  {
    id: 'H58', topic: 'heat', level: 3, sub: 'Specific heat capacity',
    stem: 'A 0.40 kg solid block is heated by a 200 W heater. Its temperature rises steadily at 20 °C per minute. Assuming no heat loss, what is the specific heat capacity of the block?',
    options: ['2.5 J kg⁻¹ °C⁻¹', '25 J kg⁻¹ °C⁻¹', '600 J kg⁻¹ °C⁻¹', '1500 J kg⁻¹ °C⁻¹'],
    answer: 3,
    explain: 'P = mc (ΔT / Δt), with the rate in °C per second: ΔT / Δt = 20 / 60 = 0.333 °C s⁻¹.<br>c = P / (m × ΔT/Δt) = 200 / (0.40 × 0.333) = 1500 J kg⁻¹ °C⁻¹.<br>25 J kg⁻¹ °C⁻¹ uses the rate per minute; 600 J kg⁻¹ °C⁻¹ leaves out the mass.',
    zh: {
      sub: '比熱容量',
      stem: '用一個 200 W 的電熱器加熱一塊 0.40 kg 的固體，其溫度以每分鐘 20 °C 穩定上升。假設沒有熱散失，該固體的比熱容量是多少？',
      explain: 'P = mc (ΔT / Δt)，速率以每秒計：ΔT / Δt = 20 / 60 = 0.333 °C s⁻¹。<br>c = P / (m × ΔT/Δt) = 200 / (0.40 × 0.333) = 1500 J kg⁻¹ °C⁻¹。<br>25 J kg⁻¹ °C⁻¹ 用了每分鐘的速率；600 J kg⁻¹ °C⁻¹ 漏了質量。'
    }
  },
  {
    id: 'H59', topic: 'heat', level: 3, sub: 'Pressure law',
    stem: 'For a fixed mass of gas at constant volume, a graph of pressure p against temperature θ in °C is a straight line. If the line is extended, it',
    options: ['meets the θ-axis at about −273 °C.', 'passes through the origin.', 'is parallel to the θ-axis.', 'meets the θ-axis at 0 °C.'],
    answer: 0,
    explain: 'p ∝ T where T = θ + 273 (in kelvin). Plotted against θ in °C, the line does not pass through the origin; extrapolating it to p = 0 gives θ ≈ −273 °C, absolute zero. Against T in kelvin it would pass through the origin.',
    zh: {
      sub: '壓強定律',
      stem: '一定質量的氣體在體積不變時，壓強 p 對溫度 θ（以 °C 為單位）的線圖是一條直線。若把直線延長，它會',
      options: ['在約 −273 °C 處與 θ 軸相交。', '通過原點。', '與 θ 軸平行。', '在 0 °C 處與 θ 軸相交。'],
      explain: 'p ∝ T，其中 T = θ + 273（開爾文）。以 °C 的 θ 作圖時，直線並不通過原點；把它外推至 p = 0 得 θ ≈ −273 °C，即絕對零度。若以開爾文的 T 作圖，直線便會通過原點。'
    }
  },
  {
    id: 'H60', topic: 'heat', level: 3, sub: "Boyle's law",
    stem: 'For a fixed mass of ideal gas at constant temperature, which of the following graphs is a straight line passing through the origin?',
    options: ['p against V', 'p against 1/V', 'pV against V', 'p against V²'],
    answer: 1,
    explain: "Boyle's law: pV = constant, so p = constant × (1/V). A graph of p against 1/V is a straight line through the origin.<br>p against V is a curve (hyperbola); pV against V is a horizontal line.",
    zh: {
      sub: '波義耳定律',
      stem: '一定質量的理想氣體在溫度不變時，下列哪個線圖是一條通過原點的直線？',
      options: ['p 對 V', 'p 對 1/V', 'pV 對 V', 'p 對 V²'],
      explain: '波義耳定律：pV = 常數，所以 p = 常數 × (1/V)。p 對 1/V 的線圖是一條通過原點的直線。<br>p 對 V 是一條曲線（雙曲線）；pV 對 V 是一條水平線。'
    }
  },
  {
    id: 'H61', topic: 'heat', level: 3, sub: "Boyle's law",
    stem: "A student investigates Boyle's law by compressing air in a sealed syringe and reading its pressure and volume. Which of the following are good practices?",
    statements: [
      'Push the plunger in slowly so that the temperature of the air stays constant.',
      'Wait a short time before each reading so that the air returns to room temperature.',
      'Let some air out between readings so that the mass of gas changes.'
    ],
    options: STMT_OPTS,
    answer: 2,
    explain: "Boyle's law applies to a fixed mass of gas at constant temperature.<br>(1) ✓ (2) ✓ Compressing a gas quickly warms it, so slow compression and waiting keep T constant.<br>(3) ✗ The mass of gas must stay fixed.",
    zh: {
      sub: '波義耳定律',
      stem: '一名學生把空氣密封在注射筒內加以壓縮，並讀取其壓強和體積，以研究波義耳定律。下列哪些是良好的做法？',
      statements: ['緩慢推入活塞，使空氣溫度保持不變。', '每次讀數前稍等片刻，讓空氣回復室溫。', '每次讀數之間放走一些空氣，使氣體質量改變。'],
      explain: '波義耳定律適用於溫度不變、質量固定的氣體。<br>(1) ✓ (2) ✓ 快速壓縮氣體會使它變暖，所以緩慢壓縮和稍等可保持 T 不變。<br>(3) ✗ 氣體的質量必須保持固定。'
    }
  },
  {
    id: 'H62', topic: 'heat', level: 4, sub: 'Kinetic theory',
    stem: 'Which of the following statements about the molecules of an ideal gas is/are correct?',
    statements: [
      'At a given temperature, all the molecules move with the same speed.',
      'The pressure of the gas is due to the molecules colliding with the walls of the container.',
      'The average kinetic energy of the molecules is proportional to the absolute temperature.'
    ],
    options: STMT_OPTS,
    answer: 3,
    explain: '(1) ✗ The molecules have a wide range of speeds; only the average kinetic energy is fixed by the temperature.<br>(2) ✓ Each collision changes a molecule\'s momentum, so the walls receive a force; force per unit area is the pressure.<br>(3) ✓ Average KE = (3/2) kT.',
    zh: {
      sub: '分子運動論',
      stem: '下列有關理想氣體分子的敘述，哪項／哪些是正確的？',
      statements: ['在某一溫度下，所有分子都以相同的速率運動。', '氣體的壓強是由分子撞擊容器壁所產生。', '分子的平均動能與絕對溫度成正比。'],
      explain: '(1) ✗ 分子的速率分佈很廣；溫度決定的只是平均動能。<br>(2) ✓ 每次碰撞都改變分子的動量，器壁因而受力；每單位面積的力就是壓強。<br>(3) ✓ 平均動能 = (3/2) kT。'
    }
  },
  {
    id: 'H63', topic: 'heat', level: 5, sub: 'Kinetic theory',
    stem: 'A single molecule of mass m moves back and forth at speed u between two parallel walls a distance L apart, colliding elastically with each wall in turn. What is the average force it exerts on one wall?',
    options: ['mu² / L', '2mu² / L', 'mu / L', 'mu² / (2L)'],
    answer: 0,
    explain: 'Each collision with the wall reverses the velocity: change of momentum = mu − (−mu) = 2mu.<br>The molecule returns to the same wall after travelling 2L, i.e. every 2L / u.<br>Average force = rate of change of momentum = 2mu / (2L / u) = mu² / L.<br>This is the first step in deriving pV = ⅓ Nm c̄².',
    zh: {
      sub: '分子運動論',
      stem: '一個質量為 m 的分子以速率 u 在兩塊相距 L 的平行器壁之間來回運動，並依次與每塊器壁發生彈性碰撞。它對其中一塊器壁施加的平均力是多少？',
      explain: '每次撞擊器壁都使速度反向：動量的變化 = mu − (−mu) = 2mu。<br>分子走了 2L 後回到同一器壁，即每隔 2L / u 撞擊一次。<br>平均力 = 動量變化率 = 2mu / (2L / u) = mu² / L。<br>這是推導 pV = ⅓ Nm c̄² 的第一步。'
    }
  },
  {
    id: 'H64', topic: 'heat', level: 4, sub: 'Kinetic theory',
    stem: 'An ideal gas occupies 0.030 m³ at a pressure of 2.0 × 10⁵ Pa. What is the total kinetic energy of its molecules?',
    options: ['6000 J', '9000 J', '12000 J', '18000 J'],
    answer: 1,
    explain: 'pV = ⅓ Nm c̄², and total KE = ½ Nm c̄² = (3/2) pV.<br>Total KE = 1.5 × 2.0 × 10⁵ × 0.030 = 9000 J.<br>(Equivalently, total KE = (3/2) NkT = (3/2) pV.) 6000 J is just pV.',
    zh: {
      sub: '分子運動論',
      stem: '某理想氣體在 2.0 × 10⁵ Pa 的壓強下佔 0.030 m³。其分子的總動能是多少？',
      explain: 'pV = ⅓ Nm c̄²，而總動能 = ½ Nm c̄² = (3/2) pV。<br>總動能 = 1.5 × 2.0 × 10⁵ × 0.030 = 9000 J。<br>（亦可寫成總動能 = (3/2) NkT = (3/2) pV。）6000 J 只是 pV。'
    }
  },
  {
    id: 'H65', topic: 'heat', level: 3, sub: 'Brownian motion',
    stem: 'Smoke particles in air are viewed through a microscope. They move about in a random, jerky way. Why?',
    options: [
      'The smoke particles attract one another.',
      'Convection currents in the air carry them along.',
      'They are hit unevenly by fast-moving air molecules.',
      'They are heated by the light from the microscope.'
    ],
    answer: 2,
    explain: 'This is Brownian motion. The tiny smoke particles are bombarded on all sides by invisible air molecules moving at high speed in random directions. At any instant the hits do not balance, so each particle is pushed in a random direction. It is evidence that air molecules are in constant random motion.',
    zh: {
      sub: '布朗運動',
      stem: '用顯微鏡觀察空氣中的煙粒，看見它們作無規則的急促運動。為甚麼？',
      options: ['煙粒之間互相吸引。', '空氣中的對流把它們帶動。', '它們受到高速運動的空氣分子不均勻的撞擊。', '它們被顯微鏡的光加熱。'],
      explain: '這是布朗運動。細小的煙粒四方八面受到肉眼看不見、以高速向任意方向運動的空氣分子撞擊。在任何一刻撞擊都不平衡，所以每粒煙粒被推向隨機的方向。這證明空氣分子在不斷作無規運動。'
    }
  },
  {
    id: 'H66', topic: 'heat', level: 4, sub: 'General gas law',
    stem: 'The air in a car tyre is at 20 °C and 2.40 × 10⁵ Pa. After a long drive, the air is at 40 °C and the volume of the tyre has increased by 2 %. What is the new pressure of the air? Assume no air leaks out.',
    options: ['2.35 × 10⁵ Pa', '2.40 × 10⁵ Pa', '2.45 × 10⁵ Pa', '2.51 × 10⁵ Pa'],
    answer: 3,
    explain: 'p₂ = p₁ × (T₂ / T₁) × (V₁ / V₂) = 2.40 × 10⁵ × (313 / 293) × (1 / 1.02) = 2.51 × 10⁵ Pa.<br>The rise in temperature increases the pressure more than the small increase in volume reduces it. 2.35 × 10⁵ Pa allows for the volume only.',
    zh: {
      sub: '普通氣體定律',
      stem: '汽車輪胎內的空氣溫度為 20 °C，壓強為 2.40 × 10⁵ Pa。長途駕駛後，空氣溫度為 40 °C，輪胎的體積增加了 2 %。空氣的新壓強是多少？假設沒有空氣漏出。',
      explain: 'p₂ = p₁ × (T₂ / T₁) × (V₁ / V₂) = 2.40 × 10⁵ × (313 / 293) × (1 / 1.02) = 2.51 × 10⁵ Pa。<br>溫度上升使壓強增加的程度，大於體積少許增加使壓強減少的程度。2.35 × 10⁵ Pa 只考慮了體積。'
    }
  },
  {
    id: 'H67', topic: 'heat', level: 5, sub: 'Kinetic theory',
    stem: 'Helium (molar mass 4 g mol⁻¹) and oxygen (molar mass 32 g mol⁻¹) are kept in two separate containers at the same temperature and the same pressure. Which of the following statements is/are correct?',
    statements: [
      'The r.m.s. speed of the helium molecules is √8 times that of the oxygen molecules.',
      'The two gases have the same number of molecules per unit volume.',
      'The two gases have the same density.'
    ],
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: 0,
    explain: '(1) ✓ Same T ⇒ same average KE ⇒ c_rms ∝ 1/√m ⇒ ratio = √(32 / 4) = √8.<br>(2) ✓ p = (N/V) kT, so the same p and T give the same N/V.<br>(3) ✗ Same N/V but each oxygen molecule is 8 times heavier, so oxygen is 8 times denser.',
    zh: {
      sub: '分子運動論',
      stem: '把氦氣（摩爾質量 4 g mol⁻¹）和氧氣（摩爾質量 32 g mol⁻¹）分別存放在兩個容器中，溫度和壓強都相同。下列哪項／哪些敘述是正確的？',
      statements: ['氦分子的方均根速率是氧分子的 √8 倍。', '兩種氣體每單位體積的分子數目相同。', '兩種氣體的密度相同。'],
      explain: '(1) ✓ T 相同 ⇒ 平均動能相同 ⇒ c_rms ∝ 1/√m ⇒ 比值 = √(32 / 4) = √8。<br>(2) ✓ p = (N/V) kT，所以 p 和 T 相同時 N/V 相同。<br>(3) ✗ N/V 相同，但每個氧分子重 8 倍，所以氧氣的密度是氦氣的 8 倍。'
    }
  },
  {
    id: 'H68', topic: 'heat', level: 2, sub: 'Ideal gas equation',
    stem: 'What is the unit of the universal gas constant R in the equation pV = nRT?',
    options: ['J K⁻¹', 'J mol⁻¹ K⁻¹', 'J mol⁻¹', 'J kg⁻¹ K⁻¹'],
    answer: 1,
    explain: 'R = pV / (nT). pV has the unit Pa × m³ = N m⁻² × m³ = N m = J, n is in mol and T in K, so R is in J mol⁻¹ K⁻¹. (J K⁻¹ is the unit of the Boltzmann constant k, which is per molecule.)',
    zh: {
      sub: '理想氣體方程',
      stem: '在方程 pV = nRT 中，普適氣體常數 R 的單位是甚麼？',
      explain: 'R = pV / (nT)。pV 的單位是 Pa × m³ = N m⁻² × m³ = N m = J，n 的單位是 mol，T 的單位是 K，所以 R 的單位是 J mol⁻¹ K⁻¹。（J K⁻¹ 是玻耳茲曼常數 k 的單位，k 是對每個分子而言的。）'
    }
  },
  {
    id: 'H69', topic: 'heat', level: 4, sub: 'Kinetic theory',
    stem: 'How many molecules are there in 1.0 m³ of an ideal gas at a pressure of 1.01 × 10⁵ Pa and a temperature of 273 K?<br>(Boltzmann constant k = 1.38 × 10⁻²³ J K⁻¹)',
    options: ['6.02 × 10²³', '2.68 × 10²⁴', '2.68 × 10²⁵', '2.68 × 10²⁶'],
    answer: 2,
    explain: 'pV = NkT ⇒ N = pV / (kT) = (1.01 × 10⁵ × 1.0) / (1.38 × 10⁻²³ × 273) = 2.68 × 10²⁵.<br>6.02 × 10²³ is the number in one mole, which occupies only about 0.0224 m³ under these conditions.',
    zh: {
      sub: '分子運動論',
      stem: '在壓強 1.01 × 10⁵ Pa、溫度 273 K 時，1.0 m³ 的理想氣體中有多少個分子？<br>（玻耳茲曼常數 k = 1.38 × 10⁻²³ J K⁻¹）',
      explain: 'pV = NkT ⇒ N = pV / (kT) = (1.01 × 10⁵ × 1.0) / (1.38 × 10⁻²³ × 273) = 2.68 × 10²⁵。<br>6.02 × 10²³ 是一摩爾的分子數目，在這情況下一摩爾只佔約 0.0224 m³。'
    }
  },
  {
    id: 'H70', topic: 'heat', level: 5, sub: "Boyle's law",
    stem: 'A 2.0-litre flask of gas at 1.0 × 10⁵ Pa is joined by a tube of negligible volume to a 3.0-litre flask of the same gas at 2.0 × 10⁵ Pa. The tap between them is opened and the temperature stays constant. What is the final pressure?',
    options: ['1.2 × 10⁵ Pa', '1.4 × 10⁵ Pa', '1.5 × 10⁵ Pa', '1.6 × 10⁵ Pa'],
    answer: 3,
    explain: 'At constant temperature the amount of gas is proportional to pV, and the total is conserved:<br>p(2.0 + 3.0) = 1.0 × 10⁵ × 2.0 + 2.0 × 10⁵ × 3.0 ⇒ p = 8.0 × 10⁵ / 5.0 = 1.6 × 10⁵ Pa.<br>1.5 × 10⁵ Pa is the simple average, which ignores the different volumes; 1.4 × 10⁵ Pa swaps the volumes.',
    zh: {
      sub: '波義耳定律',
      stem: '一個 2.0 升、盛有 1.0 × 10⁵ Pa 氣體的燒瓶，以一條體積可忽略的管連接到一個 3.0 升、盛有同一種氣體、壓強為 2.0 × 10⁵ Pa 的燒瓶。打開兩者之間的活塞，溫度保持不變。最終壓強是多少？',
      explain: '溫度不變時，氣體的分量與 pV 成正比，而總量守恆：<br>p(2.0 + 3.0) = 1.0 × 10⁵ × 2.0 + 2.0 × 10⁵ × 3.0 ⇒ p = 8.0 × 10⁵ / 5.0 = 1.6 × 10⁵ Pa。<br>1.5 × 10⁵ Pa 是簡單平均值，忽略了體積不同；1.4 × 10⁵ Pa 把兩個體積對調了。'
    }
  },
  {
    id: 'H71', topic: 'heat', level: 3, sub: 'Thermal equilibrium',
    stem: 'A hot metal block is placed in cold water inside an insulated container. Which of the following is correct once they reach thermal equilibrium?',
    options: [
      'There is no net transfer of energy between the block and the water.',
      'The block and the water have the same internal energy.',
      'The block has given out all of its internal energy.',
      'The molecules of the block and of the water have stopped moving.'
    ],
    answer: 0,
    explain: 'At thermal equilibrium the block and the water are at the same temperature, so there is no net energy flow between them. Their internal energies are generally different (they depend on mass and material), and the molecules are still moving.',
    zh: {
      sub: '熱平衡',
      stem: '把一塊熱金屬放進隔熱容器內的冷水中。兩者達到熱平衡時，下列哪項是正確的？',
      options: ['金屬塊與水之間沒有淨能量轉移。', '金屬塊與水的內能相同。', '金屬塊已放出它全部的內能。', '金屬塊和水的分子都已停止運動。'],
      explain: '達到熱平衡時，金屬塊與水的溫度相同，所以兩者之間沒有淨能量流動。它們的內能一般並不相同（取決於質量和物料），而分子仍在運動。'
    }
  },
  {
    id: 'H72', topic: 'heat', level: 3, sub: 'Latent heat',
    stem: 'A 0.50 kg sample of a solid is heated at a constant rate of 250 W. It melts completely in 8.0 minutes, during which its temperature stays constant. Assuming no heat loss, what is the specific latent heat of fusion of the substance?',
    options: ['1.2 × 10⁵ J kg⁻¹', '2.4 × 10⁵ J kg⁻¹', '4.8 × 10⁵ J kg⁻¹', '1.4 × 10⁷ J kg⁻¹'],
    answer: 1,
    explain: 'Energy supplied while melting = Pt = 250 × 8.0 × 60 = 1.2 × 10⁵ J.<br>ℓ = E / m = 1.2 × 10⁵ / 0.50 = 2.4 × 10⁵ J kg⁻¹.<br>1.2 × 10⁵ J kg⁻¹ forgets to divide by the mass.',
    zh: {
      sub: '潛熱',
      stem: '以 250 W 的恆定速率加熱 0.50 kg 的固體樣本。它在 8.0 分鐘內完全熔化，期間溫度保持不變。假設沒有熱散失，該物質的熔解比潛熱是多少？',
      explain: '熔化期間供應的能量 = Pt = 250 × 8.0 × 60 = 1.2 × 10⁵ J。<br>ℓ = E / m = 1.2 × 10⁵ / 0.50 = 2.4 × 10⁵ J kg⁻¹。<br>1.2 × 10⁵ J kg⁻¹ 忘記除以質量。'
    }
  },
  {
    id: 'H73', topic: 'heat', level: 4, sub: 'Specific heat capacity',
    stem: 'Two blocks X and Y of equal mass are heated. A graph of temperature against energy supplied is a straight line for each, and the gradient for X is twice that for Y. What is the ratio (specific heat capacity of X) : (specific heat capacity of Y)?',
    options: ['1 : 8', '1 : 4', '1 : 2', '2 : 1'],
    answer: 2,
    explain: 'ΔT = E / (mc), so the gradient ΔT / E = 1 / (mc).<br>With equal masses, gradient ∝ 1/c. X has twice the gradient ⇒ c<sub>X</sub> = ½ c<sub>Y</sub> ⇒ c<sub>X</sub> : c<sub>Y</sub> = 1 : 2.<br>A steeper temperature–energy graph means a smaller specific heat capacity.',
    zh: {
      sub: '比熱容量',
      stem: '加熱兩塊質量相同的物體 X 和 Y。每塊物體的溫度對供應能量的線圖都是直線，而 X 的斜率是 Y 的兩倍。（X 的比熱容量）:（Y 的比熱容量）之比是多少？',
      explain: 'ΔT = E / (mc)，所以斜率 ΔT / E = 1 / (mc)。<br>質量相同時，斜率 ∝ 1/c。X 的斜率是兩倍 ⇒ c<sub>X</sub> = ½ c<sub>Y</sub> ⇒ c<sub>X</sub> : c<sub>Y</sub> = 1 : 2。<br>溫度－能量線圖越陡，比熱容量越小。'
    }
  },
  {
    id: 'H74', topic: 'heat', level: 5, sub: 'Heat loss',
    stem: 'In a room at 20 °C, a 60 W heater keeps a tank of water at a steady 50 °C. Assume the rate of heat loss from the tank is proportional to the difference between its temperature and the room temperature. What heater power would keep the water at a steady 80 °C?',
    options: ['60 W', '96 W', '100 W', '120 W'],
    answer: 3,
    explain: 'At a steady temperature, heater power = rate of heat loss ∝ (θ − 20 °C).<br>At 50 °C the excess is 30 °C and the loss is 60 W. At 80 °C the excess is 60 °C, twice as much, so the power needed is 120 W.<br>96 W wrongly takes the loss as proportional to the temperature itself (80 / 50 × 60).',
    zh: {
      sub: '熱散失',
      stem: '在 20 °C 的房間內，一個 60 W 的電熱器使一缸水穩定地保持在 50 °C。假設水缸散失熱的速率與水溫和室溫之差成正比。要使水穩定地保持在 80 °C，電熱器的功率須為多少？',
      explain: '溫度穩定時，電熱器功率 = 熱散失速率 ∝ (θ − 20 °C)。<br>在 50 °C 時溫差為 30 °C，散失 60 W。在 80 °C 時溫差為 60 °C，是兩倍，所以所需功率為 120 W。<br>96 W 錯誤地把散失速率當作與溫度本身成正比（80 / 50 × 60）。'
    }
  },
  {
    id: 'H75', topic: 'heat', level: 2, sub: 'Specific heat capacity',
    stem: 'Water is used as the coolant in car engines mainly because',
    options: ['it has a high specific heat capacity.', 'it has a low boiling point.', 'it is a good conductor of electricity.', 'it has a low density.'],
    answer: 0,
    explain: 'A high specific heat capacity means each kilogram of water absorbs a lot of energy for a small rise in temperature, so it can carry a lot of energy away from the engine.',
    zh: {
      sub: '比熱容量',
      stem: '汽車引擎用水作冷卻劑，主要是因為',
      options: ['水的比熱容量高。', '水的沸點低。', '水是良好的電導體。', '水的密度低。'],
      explain: '比熱容量高，表示每千克水吸收大量能量而溫度只上升少許，所以水能把大量能量從引擎帶走。'
    }
  },
  {
    id: 'H76', topic: 'heat', level: 3, sub: 'Convection',
    stem: 'A purple crystal is placed at the bottom of a beaker of water, near one side, and that side is gently heated. Purple streaks rise above the flame, spread across the top and sink down the other side. Which of the following best explains this?',
    options: [
      'The purple dye is a good conductor of heat.',
      'Water above the flame expands, becomes less dense and rises, while cooler water sinks.',
      'The purple dye is less dense than water at all temperatures.',
      'Radiation from the flame pushes the dye upwards.'
    ],
    answer: 1,
    explain: 'This shows a convection current. Heated water expands and becomes less dense, so it rises; cooler, denser water sinks to take its place. The dye simply makes the circulating water visible.',
    zh: {
      sub: '對流',
      stem: '把一粒紫色晶體放在一燒杯水的底部、靠近一邊的位置，並輕輕加熱該邊。紫色條紋在火焰上方上升，在頂部散開，再沿另一邊下沉。下列哪項最能解釋這現象？',
      options: ['紫色染料是良好的熱導體。', '火焰上方的水膨脹、密度變小而上升，較冷的水則下沉。', '紫色染料在任何溫度下的密度都比水小。', '火焰的輻射把染料推向上。'],
      explain: '這顯示了對流。受熱的水膨脹、密度變小而上升；較冷、較密的水下沉補充。染料只是令循環流動的水變得可見。'
    }
  },
  {
    id: 'H77', topic: 'heat', level: 4, sub: 'Radiation',
    stem: 'A hollow metal cube is filled with hot water. Its four vertical faces are dull black, shiny silver, matt white and dull grey. An infra-red detector is placed the same distance from each face in turn. Which of the following statements is/are correct?',
    statements: [
      'The shiny silver face gives the highest reading.',
      'All four faces are at about the same temperature.',
      'The dull black face gives the highest reading.'
    ],
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: 2,
    explain: '(2) ✓ The faces are all in contact with the same hot water.<br>(3) ✓ A dull black surface is the best emitter of infra-red radiation.<br>(1) ✗ A shiny silver surface is the poorest emitter, so it gives the lowest reading. The surface, not just the temperature, decides how much is emitted.',
    zh: {
      sub: '輻射',
      stem: '一個中空的金屬立方體盛滿熱水，它的四個垂直面分別是暗黑色、光亮銀色、啞白色和暗灰色。把一個紅外線探測器依次放在與每個面距離相同之處。下列哪項／哪些敘述是正確的？',
      statements: ['光亮銀色面的讀數最高。', '四個面的溫度大致相同。', '暗黑色面的讀數最高。'],
      explain: '(2) ✓ 四個面都與同一缸熱水接觸。<br>(3) ✓ 暗黑色表面是最佳的紅外線放射體。<br>(1) ✗ 光亮銀色表面是最差的放射體，所以讀數最低。放射多少輻射不只取決於溫度，亦取決於表面。'
    }
  },
  {
    id: 'H78', topic: 'heat', level: 5, sub: 'Latent heat',
    stem: 'How much energy is needed to change 0.10 kg of ice at −10 °C completely into steam at 100 °C?<br>(Specific heat capacity: ice = 2100 J kg⁻¹ °C⁻¹, water = 4200 J kg⁻¹ °C⁻¹; specific latent heat: fusion = 3.34 × 10⁵ J kg⁻¹, vaporization = 2.26 × 10⁶ J kg⁻¹)',
    options: ['7.75 × 10⁴ J', '2.70 × 10⁵ J', '3.01 × 10⁵ J', '3.04 × 10⁵ J'],
    answer: 3,
    explain: 'Four stages:<br>warm the ice −10 → 0 °C: 0.10 × 2100 × 10 = 2100 J<br>melt it: 0.10 × 3.34 × 10⁵ = 33 400 J<br>warm the water 0 → 100 °C: 0.10 × 4200 × 100 = 42 000 J<br>boil it: 0.10 × 2.26 × 10⁶ = 226 000 J<br>Total = 303 500 J ≈ 3.04 × 10⁵ J. Vaporization needs by far the most energy. The other options each leave out one stage.',
    zh: {
      sub: '潛熱',
      stem: '要把 0.10 kg、溫度為 −10 °C 的冰完全變成 100 °C 的蒸汽，需要多少能量？<br>（比熱容量：冰 = 2100 J kg⁻¹ °C⁻¹，水 = 4200 J kg⁻¹ °C⁻¹；比潛熱：熔解 = 3.34 × 10⁵ J kg⁻¹，汽化 = 2.26 × 10⁶ J kg⁻¹）',
      explain: '共四個階段：<br>把冰由 −10 °C 加熱至 0 °C：0.10 × 2100 × 10 = 2100 J<br>熔化：0.10 × 3.34 × 10⁵ = 33 400 J<br>把水由 0 °C 加熱至 100 °C：0.10 × 4200 × 100 = 42 000 J<br>汽化：0.10 × 2.26 × 10⁶ = 226 000 J<br>總和 = 303 500 J ≈ 3.04 × 10⁵ J。汽化所需的能量遠比其他階段多。其他選項各漏了一個階段。'
    }
  },
  {
    id: 'H79', topic: 'heat', level: 4, sub: 'Kinetic theory',
    stem: 'The absolute temperature of a fixed mass of ideal gas in a rigid container is doubled. Which of the following statements is/are correct?',
    statements: [
      'The pressure of the gas doubles.',
      'The average kinetic energy of the molecules doubles.',
      'The r.m.s. speed of the molecules doubles.'
    ],
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: 0,
    explain: '(1) ✓ At constant volume p ∝ T.<br>(2) ✓ Average KE = (3/2) kT ∝ T.<br>(3) ✗ KE ∝ c², so c_rms ∝ √T: it rises by a factor √2 ≈ 1.41, not 2.',
    zh: {
      sub: '分子運動論',
      stem: '剛性容器內一定質量的理想氣體的絕對溫度加倍。下列哪項／哪些敘述是正確的？',
      statements: ['氣體的壓強加倍。', '分子的平均動能加倍。', '分子的方均根速率加倍。'],
      explain: '(1) ✓ 體積不變時 p ∝ T。<br>(2) ✓ 平均動能 = (3/2) kT ∝ T。<br>(3) ✗ 動能 ∝ c²，所以 c_rms ∝ √T：只增至 √2 ≈ 1.41 倍，而非 2 倍。'
    }
  },
  {
    id: 'H80', topic: 'heat', level: 3, sub: "Charles' law",
    stem: 'The air in an open hot-air balloon is heated from 300 K to 360 K at constant pressure. What is the ratio (new density of the air) : (original density)?',
    options: ['0.69', '0.83', '1.20', '1.44'],
    answer: 1,
    explain: 'At constant pressure V ∝ T, so a fixed mass of air expands by a factor 360 / 300 = 1.2.<br>Density = mass / volume ⇒ new density / old density = 300 / 360 = 0.83.<br>Hotter air is less dense, which is why the balloon rises. 1.20 inverts the ratio.',
    zh: {
      sub: '查理定律',
      stem: '一個開口熱氣球內的空氣在恆壓下由 300 K 加熱至 360 K。（空氣的新密度）:（原來的密度）之比是多少？',
      explain: '壓強不變時 V ∝ T，所以一定質量的空氣膨脹至 360 / 300 = 1.2 倍。<br>密度 = 質量 / 體積 ⇒ 新密度 / 原密度 = 300 / 360 = 0.83。<br>較熱的空氣密度較小，所以氣球會上升。1.20 把比例倒轉了。'
    }
  },
  {
    id: 'H81', topic: 'heat', level: 5, sub: 'General gas law',
    stem: 'A weather balloon is filled with 4.0 m³ of helium at ground level, where the pressure is 1.0 × 10⁵ Pa and the temperature is 27 °C. At a certain height the pressure is 4.0 × 10⁴ Pa and the temperature is −33 °C. Assuming the balloon does not burst and its skin exerts no extra pressure, what is the volume of the helium there?',
    options: ['1.6 m³', '3.2 m³', '8.0 m³', '10 m³'],
    answer: 2,
    explain: 'V₂ = V₁ × (p₁ / p₂) × (T₂ / T₁) = 4.0 × (1.0 × 10⁵ / 4.0 × 10⁴) × (240 / 300) = 4.0 × 2.5 × 0.8 = 8.0 m³.<br>The fall in pressure makes the gas expand; the fall in temperature partly offsets this. 10 m³ ignores the temperature change.',
    zh: {
      sub: '普通氣體定律',
      stem: '一個氣象氣球在地面注入 4.0 m³ 的氦氣，地面的壓強為 1.0 × 10⁵ Pa，溫度為 27 °C。在某高度，壓強為 4.0 × 10⁴ Pa，溫度為 −33 °C。假設氣球沒有爆破，而球皮不施加額外壓強，氦氣在該處的體積是多少？',
      explain: 'V₂ = V₁ × (p₁ / p₂) × (T₂ / T₁) = 4.0 × (1.0 × 10⁵ / 4.0 × 10⁴) × (240 / 300) = 4.0 × 2.5 × 0.8 = 8.0 m³。<br>壓強下降使氣體膨脹；溫度下降則抵銷了部分膨脹。10 m³ 忽略了溫度變化。'
    }
  },
  {
    id: 'H82', topic: 'heat', level: 3, sub: 'Pressure law',
    stem: 'A sealed rigid container holds gas at 27 °C. To what temperature must the gas be heated to double its pressure?',
    options: ['54 °C', '273 °C', '300 °C', '327 °C'],
    answer: 3,
    explain: 'At constant volume p ∝ T (kelvin). 27 °C = 300 K, so doubling p needs T = 600 K = 600 − 273 = 327 °C.<br>54 °C doubles the Celsius value, which does not double the pressure.',
    zh: {
      sub: '壓強定律',
      stem: '一個密封的剛性容器載有 27 °C 的氣體。要使氣體的壓強加倍，須把它加熱至甚麼溫度？',
      explain: '體積不變時 p ∝ T（開爾文）。27 °C = 300 K，所以壓強加倍需要 T = 600 K = 600 − 273 = 327 °C。<br>54 °C 只是把攝氏數值加倍，並不能使壓強加倍。'
    }
  },
  {
    id: 'H83', topic: 'heat', level: 3, sub: 'Kinetic theory',
    stem: 'What is the ratio (average kinetic energy of the molecules of an ideal gas at 127 °C) : (average kinetic energy at −73 °C)?',
    options: ['2 : 1', '1 : 2', '√2 : 1', '−1.7 : 1'],
    answer: 0,
    explain: 'Average KE = (3/2) kT, with T in kelvin: 127 °C = 400 K and −73 °C = 200 K.<br>Ratio = 400 : 200 = 2 : 1.<br>√2 : 1 would be the ratio of the r.m.s. speeds; −1.7 : 1 wrongly uses °C.',
    zh: {
      sub: '分子運動論',
      stem: '（理想氣體在 127 °C 時分子的平均動能）:（在 −73 °C 時的平均動能）之比是多少？',
      explain: '平均動能 = (3/2) kT，T 以開爾文為單位：127 °C = 400 K，−73 °C = 200 K。<br>比值 = 400 : 200 = 2 : 1。<br>√2 : 1 是方均根速率之比；−1.7 : 1 錯用了攝氏溫度。'
    }
  },
  {
    id: 'H84', topic: 'heat', level: 4, sub: 'Energy conversion',
    stem: 'Water falls 50 m down a waterfall. If all its loss of gravitational potential energy became internal energy of the water, by how much would its temperature rise?<br>(g = 9.81 m s⁻²; specific heat capacity of water = 4200 J kg⁻¹ °C⁻¹)',
    options: ['0.0117 °C', '0.117 °C', '1.17 °C', '490 °C'],
    answer: 1,
    explain: 'For mass m: mgh = mcΔT, so the mass cancels:<br>ΔT = gh / c = 9.81 × 50 / 4200 = 0.117 °C.<br>The rise is tiny because water has such a large specific heat capacity. 490 is gh, before dividing by c.',
    zh: {
      sub: '能量轉換',
      stem: '水從瀑布落下 50 m。若水所失去的重力勢能全部變為水的內能，水溫會上升多少？<br>（g = 9.81 m s⁻²；水的比熱容量 = 4200 J kg⁻¹ °C⁻¹）',
      explain: '對質量 m：mgh = mcΔT，質量互相抵消：<br>ΔT = gh / c = 9.81 × 50 / 4200 = 0.117 °C。<br>由於水的比熱容量很大，溫度上升極少。490 是未除以 c 的 gh。'
    }
  },
  {
    id: 'H85', topic: 'heat', level: 5, sub: 'Energy conversion',
    stem: 'Lead shot is placed in a long cardboard tube closed at both ends. The tube is inverted many times so that the lead falls the length of the tube each time, and the rise in temperature of the lead is measured. Which of the following statements is/are correct?',
    statements: [
      'The temperature rise does not depend on the mass of lead used.',
      'A longer tube gives a larger temperature rise for the same number of inversions.',
      'Using twice the mass of lead doubles the temperature rise.'
    ],
    options: STMT_OPTS,
    answer: 2,
    explain: 'For N falls of height h: N mgh = mcΔT ⇒ ΔT = Ngh / c.<br>(1) ✓ The mass cancels.<br>(2) ✓ ΔT ∝ h.<br>(3) ✗ More lead gains more energy but also needs more energy to warm up, so ΔT is unchanged.',
    zh: {
      sub: '能量轉換',
      stem: '把鉛粒放進一條兩端封閉的長紙管中。把紙管反覆倒轉多次，使鉛粒每次都下墜整條管的長度，然後量度鉛粒溫度的上升。下列哪項／哪些敘述是正確的？',
      statements: ['溫度上升與所用鉛粒的質量無關。', '倒轉次數相同時，較長的紙管會使溫度上升較多。', '鉛粒質量加倍，溫度上升亦加倍。'],
      explain: '下墜 N 次，每次高度 h：N mgh = mcΔT ⇒ ΔT = Ngh / c。<br>(1) ✓ 質量互相抵消。<br>(2) ✓ ΔT ∝ h。<br>(3) ✗ 較多鉛粒獲得較多能量，但升溫亦需要較多能量，所以 ΔT 不變。'
    }
  },
  {
    id: 'H86', topic: 'heat', level: 4, sub: 'Internal energy',
    stem: 'The outlet of a bicycle pump is blocked, and the air inside is compressed quickly by pushing the handle in. Which of the following statements is/are correct?',
    statements: [
      'Work is done on the air.',
      'The internal energy of the air increases.',
      'The temperature of the air decreases.'
    ],
    options: ['(1) only', '(2) only', '(3) only', '(1) and (2) only'],
    answer: 3,
    explain: '(1) ✓ A force pushes the piston through a distance, doing work on the air.<br>(2) ✓ With no time for heat to escape, this work becomes internal energy of the air.<br>(3) ✗ The molecules gain kinetic energy, so the temperature rises — the pump feels warm.',
    zh: {
      sub: '內能',
      stem: '堵塞單車泵的出氣口，然後快速推入手柄壓縮泵內的空氣。下列哪項／哪些敘述是正確的？',
      statements: ['對空氣做了功。', '空氣的內能增加。', '空氣的溫度下降。'],
      explain: '(1) ✓ 力推動活塞移動一段距離，對空氣做功。<br>(2) ✓ 熱來不及散失，所做的功變為空氣的內能。<br>(3) ✗ 分子獲得動能，所以溫度上升 — 打氣筒摸起來會變暖。'
    }
  },
  {
    id: 'H87', topic: 'heat', level: 4, sub: 'Specific heat capacity',
    stem: 'A 1.0 kg aluminium block is heated by an immersion heater connected through a joulemeter. The joulemeter reading changes from 12.4 kJ to 30.4 kJ while the temperature of the block rises from 20.0 °C to 40.0 °C. Neglecting heat loss, what is the specific heat capacity of aluminium given by this experiment?',
    options: ['900 J kg⁻¹ °C⁻¹', '1520 J kg⁻¹ °C⁻¹', '18000 J kg⁻¹ °C⁻¹', '9.0 × 10⁵ J kg⁻¹ °C⁻¹'],
    answer: 0,
    explain: 'Energy supplied = change in joulemeter reading = 30.4 − 12.4 = 18.0 kJ = 18 000 J.<br>c = E / (mΔT) = 18 000 / (1.0 × 20.0) = 900 J kg⁻¹ °C⁻¹.<br>1520 J kg⁻¹ °C⁻¹ uses the final reading instead of the change; 18 000 forgets to divide by ΔT.',
    zh: {
      sub: '比熱容量',
      stem: '用一個經焦耳計連接的浸沒式電熱器加熱一塊 1.0 kg 的鋁。焦耳計的讀數由 12.4 kJ 變為 30.4 kJ，期間鋁塊的溫度由 20.0 °C 升至 40.0 °C。忽略熱散失，這實驗得出的鋁的比熱容量是多少？',
      explain: '供應的能量 = 焦耳計讀數的變化 = 30.4 − 12.4 = 18.0 kJ = 18 000 J。<br>c = E / (mΔT) = 18 000 / (1.0 × 20.0) = 900 J kg⁻¹ °C⁻¹。<br>1520 J kg⁻¹ °C⁻¹ 用了最後讀數而非讀數的變化；18 000 忘記除以 ΔT。'
    }
  },
  {
    id: 'H88', topic: 'heat', level: 5, sub: 'Evaporation',
    stem: '0.50 kg of water in an insulated open bowl cools from 30 °C to 20 °C only because some of it evaporates. Taking the specific latent heat of vaporization of water at these temperatures as 2.4 × 10⁶ J kg⁻¹, and assuming the mass evaporated is small compared with 0.50 kg, about what mass of water evaporates?<br>(Specific heat capacity of water = 4200 J kg⁻¹ °C⁻¹)',
    options: ['0.88 g', '8.8 g', '88 g', '500 g'],
    answer: 1,
    explain: 'Energy given out by the cooling water = mcΔT = 0.50 × 4200 × 10 = 21 000 J.<br>This supplies the latent heat of the evaporated water: m<sub>e</sub> = 21 000 / 2.4 × 10⁶ = 8.75 × 10⁻³ kg ≈ 8.8 g.<br>Evaporating under 2 % of the water cools the rest by 10 °C — the reason evaporation cools so effectively.',
    zh: {
      sub: '蒸發',
      stem: '隔熱敞口碗內 0.50 kg 的水只因部分水蒸發而由 30 °C 冷卻至 20 °C。取水在這些溫度下的汽化比潛熱為 2.4 × 10⁶ J kg⁻¹，並假設蒸發的質量遠小於 0.50 kg，約有多少質量的水蒸發？<br>（水的比熱容量 = 4200 J kg⁻¹ °C⁻¹）',
      explain: '冷卻的水放出的能量 = mcΔT = 0.50 × 4200 × 10 = 21 000 J。<br>這些能量供應蒸發的水所需的潛熱：m<sub>e</sub> = 21 000 / 2.4 × 10⁶ = 8.75 × 10⁻³ kg ≈ 8.8 g。<br>只蒸發不到 2 % 的水，便使其餘的水冷卻 10 °C — 這是蒸發冷卻效果顯著的原因。'
    }
  },
  {
    id: 'H89', topic: 'heat', level: 2, sub: 'Conduction',
    stem: 'A down jacket filled with feathers keeps a person warm mainly because the feathers',
    options: ['are good conductors of heat.', 'reflect infra-red radiation back to the body.', 'trap air, which is a poor conductor of heat.', 'produce heat when they are compressed.'],
    answer: 2,
    explain: 'Still air is a very poor conductor. Feathers trap a thick layer of air and also stop it moving, which reduces both conduction and convection away from the body.',
    zh: {
      sub: '傳導',
      stem: '羽絨外套能使人保暖，主要是因為羽毛',
      options: ['是良好的熱導體。', '把紅外線反射回身體。', '困住空氣，而空氣是不良的熱導體。', '受壓時會產生熱。'],
      explain: '靜止的空氣是極差的導體。羽毛困住一厚層空氣並使它不能流動，從而減少身體經傳導和對流散失的熱。'
    }
  },
  {
    id: 'H90', topic: 'heat', level: 4, sub: 'Energy conversion',
    stem: 'A lead bullet of mass 10 g moving at 300 m s⁻¹ is stopped by a sandbag. Half of its kinetic energy becomes internal energy of the bullet. What is the rise in temperature of the bullet?<br>(Specific heat capacity of lead = 130 J kg⁻¹ °C⁻¹)',
    options: ['1.73 °C', '17.3 °C', '86.5 °C', '173 °C'],
    answer: 3,
    explain: 'KE = ½ mv² = ½ × 0.010 × 300² = 450 J; half of it = 225 J.<br>ΔT = E / (mc) = 225 / (0.010 × 130) = 173 °C.<br>(Equivalently ΔT = ¼ v² / c — the mass cancels.) 86.5 °C halves the energy twice.',
    zh: {
      sub: '能量轉換',
      stem: '一粒質量為 10 g、以 300 m s⁻¹ 運動的鉛彈被沙包擋停。它一半的動能變為子彈的內能。子彈的溫度上升多少？<br>（鉛的比熱容量 = 130 J kg⁻¹ °C⁻¹）',
      explain: '動能 = ½ mv² = ½ × 0.010 × 300² = 450 J；一半 = 225 J。<br>ΔT = E / (mc) = 225 / (0.010 × 130) = 173 °C。<br>（亦可寫成 ΔT = ¼ v² / c — 質量互相抵消。）86.5 °C 把能量減半了兩次。'
    }
  },
  {
    id: 'H91', topic: 'heat', level: 4, sub: 'Kinetic theory',
    stem: 'Under which conditions does a real gas behave least like an ideal gas?',
    options: ['High pressure and low temperature', 'Low pressure and high temperature', 'Low pressure and low temperature', 'High pressure and high temperature'],
    answer: 0,
    explain: 'The ideal-gas model assumes the molecules take up negligible volume and do not attract one another. At high pressure the molecules are packed close together, so their own volume matters; at low temperature they move slowly, so attractions matter. Both assumptions fail most under high pressure and low temperature.',
    zh: {
      sub: '分子運動論',
      stem: '在甚麼情況下，真實氣體的表現最不像理想氣體？',
      options: ['高壓和低溫', '低壓和高溫', '低壓和低溫', '高壓和高溫'],
      explain: '理想氣體模型假設分子的體積可忽略，而且分子之間沒有吸引力。高壓時分子緊密地擠在一起，分子本身的體積便不可忽略；低溫時分子運動緩慢，吸引力便變得重要。所以在高壓和低溫下，兩個假設最不成立。'
    }
  },
  {
    id: 'H92', topic: 'heat', level: 4, sub: 'Ideal gas equation',
    stem: 'For two samples X and Y of ideal gas, graphs of pV against absolute temperature T are straight lines through the origin. The gradient for X is twice that for Y. What can be deduced?',
    options: ['X is at twice the pressure of Y.', 'X contains twice as many moles of gas as Y.', 'The molecules of X are twice as heavy as those of Y.', 'X is at twice the temperature of Y.'],
    answer: 1,
    explain: 'pV = nRT, so the gradient of pV against T is nR. Twice the gradient means twice the number of moles. The graph says nothing about the pressure, temperature or molecular mass of either sample on its own.',
    zh: {
      sub: '理想氣體方程',
      stem: '兩個理想氣體樣本 X 和 Y 的 pV 對絕對溫度 T 線圖都是通過原點的直線，而 X 的斜率是 Y 的兩倍。由此可推斷甚麼？',
      options: ['X 的壓強是 Y 的兩倍。', 'X 所含的氣體摩爾數是 Y 的兩倍。', 'X 的分子比 Y 的重一倍。', 'X 的溫度是 Y 的兩倍。'],
      explain: 'pV = nRT，所以 pV 對 T 的斜率是 nR。斜率加倍即摩爾數加倍。線圖本身並不能顯示任何一個樣本的壓強、溫度或分子質量。'
    }
  },
  {
    id: 'H93', topic: 'heat', level: 5, sub: 'Kinetic theory',
    stem: 'An ideal gas is kept in a sealed container at constant temperature. Which of the following statements is/are correct?',
    statements: [
      'The speed of an individual molecule keeps changing.',
      'The average kinetic energy of the molecules stays constant.',
      'The total momentum of all the molecules is large and constant.'
    ],
    options: STMT_OPTS,
    answer: 2,
    explain: '(1) ✓ Collisions with other molecules and the walls keep changing each molecule\'s speed and direction.<br>(2) ✓ The temperature is constant, so the average KE is constant.<br>(3) ✗ The molecules move randomly in all directions, so their total momentum (a vector) averages to zero.',
    zh: {
      sub: '分子運動論',
      stem: '理想氣體被存放在一個溫度保持不變的密封容器中。下列哪項／哪些敘述是正確的？',
      statements: ['個別分子的速率不斷改變。', '分子的平均動能保持不變。', '所有分子的總動量很大而且不變。'],
      explain: '(1) ✓ 與其他分子及器壁的碰撞不斷改變每個分子的速率和方向。<br>(2) ✓ 溫度不變，所以平均動能不變。<br>(3) ✗ 分子向各方向作無規運動，所以總動量（矢量）平均為零。'
    }
  },
  {
    id: 'H94', topic: 'heat', level: 5, sub: "Boyle's law",
    stem: 'A tyre has a fixed volume of 2.0 litres and contains air at 1.0 × 10⁵ Pa. Each stroke of a pump pushes 0.25 litre of air, taken in at 1.0 × 10⁵ Pa, into the tyre. Assuming the temperature stays constant, how many strokes are needed to raise the pressure in the tyre to 3.0 × 10⁵ Pa?',
    options: ['6', '8', '12', '16'],
    answer: 3,
    explain: 'At constant temperature the amount of air is proportional to pV.<br>Needed: final pV − initial pV = (3.0 − 1.0) × 10⁵ × 2.0 L = 4.0 × 10⁵ Pa L.<br>Each stroke adds 1.0 × 10⁵ × 0.25 = 0.25 × 10⁵ Pa L ⇒ 4.0 / 0.25 = 16 strokes.<br>8 strokes would only raise the pressure to 2.0 × 10⁵ Pa.',
    zh: {
      sub: '波義耳定律',
      stem: '一個體積固定為 2.0 升的輪胎內有 1.0 × 10⁵ Pa 的空氣。打氣筒每次把 0.25 升、在 1.0 × 10⁵ Pa 下吸入的空氣推進輪胎。假設溫度保持不變，要把輪胎內的壓強提升至 3.0 × 10⁵ Pa，需要打氣多少次？',
      explain: '溫度不變時，空氣的分量與 pV 成正比。<br>所需：最終 pV − 初始 pV = (3.0 − 1.0) × 10⁵ × 2.0 L = 4.0 × 10⁵ Pa L。<br>每次加入 1.0 × 10⁵ × 0.25 = 0.25 × 10⁵ Pa L ⇒ 4.0 / 0.25 = 16 次。<br>打氣 8 次只能把壓強提升至 2.0 × 10⁵ Pa。'
    }
  },
  {
    id: 'H95', topic: 'heat', level: 4, sub: 'Ideal gas equation',
    stem: 'Air has a mean molar mass of 29 g mol⁻¹. Treating it as an ideal gas, what is the density of air at 1.0 × 10⁵ Pa and 27 °C?<br>(R = 8.31 J mol⁻¹ K⁻¹)',
    options: ['1.16 kg m⁻³', '12.9 kg m⁻³', '1160 kg m⁻³', '12900 kg m⁻³'],
    answer: 0,
    explain: 'pV = (m/M) RT ⇒ density ρ = m / V = pM / (RT), with M in kg mol⁻¹.<br>ρ = 1.0 × 10⁵ × 0.029 / (8.31 × 300) = 1.16 kg m⁻³.<br>12.9 kg m⁻³ uses T = 27; 1160 kg m⁻³ uses M = 29 (in g mol⁻¹).',
    zh: {
      sub: '理想氣體方程',
      stem: '空氣的平均摩爾質量為 29 g mol⁻¹。把空氣當作理想氣體，在 1.0 × 10⁵ Pa 和 27 °C 時空氣的密度是多少？<br>（R = 8.31 J mol⁻¹ K⁻¹）',
      explain: 'pV = (m/M) RT ⇒ 密度 ρ = m / V = pM / (RT)，M 以 kg mol⁻¹ 為單位。<br>ρ = 1.0 × 10⁵ × 0.029 / (8.31 × 300) = 1.16 kg m⁻³。<br>12.9 kg m⁻³ 用了 T = 27；1160 kg m⁻³ 用了 M = 29（g mol⁻¹）。'
    }
  },
  {
    id: 'H96', topic: 'heat', level: 3, sub: 'Change of state',
    stem: 'A mixture of ice and water at 0 °C is heated gently and stirred. While some ice remains, the temperature of the mixture',
    options: ['rises steadily.', 'stays at 0 °C.', 'falls below 0 °C.', 'rises at first and then falls.'],
    answer: 1,
    explain: 'The energy supplied is used as latent heat to melt the ice, so the temperature stays at the melting point, 0 °C, until all the ice has melted. Only then does the temperature of the water start to rise.',
    zh: {
      sub: '物態的改變',
      stem: '輕輕加熱並攪拌一個 0 °C 的冰水混合物。只要仍有冰存在，混合物的溫度會',
      options: ['穩定上升。', '保持在 0 °C。', '降至低於 0 °C。', '先上升然後下降。'],
      explain: '供應的能量用作熔化冰的潛熱，所以溫度保持在熔點 0 °C，直至所有冰都熔化。之後水溫才開始上升。'
    }
  },
  {
    id: 'H97', topic: 'heat', level: 3, sub: 'Radiation',
    stem: 'The rate at which an object emits thermal radiation depends on',
    statements: [
      'the temperature of its surface.',
      'the nature (colour and texture) of its surface.',
      'its mass only.'
    ],
    options: STMT_OPTS,
    answer: 2,
    explain: '(1) ✓ Hotter objects emit much more radiation.<br>(2) ✓ Dull black surfaces emit more than shiny ones at the same temperature.<br>(3) ✗ Mass does not decide the emission rate; the surface area matters, and so do (1) and (2).',
    zh: {
      sub: '輻射',
      stem: '物體放出熱輻射的速率取決於',
      statements: ['其表面的溫度。', '其表面的性質（顏色和質地）。', '只取決於其質量。'],
      explain: '(1) ✓ 較熱的物體放出多得多的輻射。<br>(2) ✓ 溫度相同時，暗黑色表面放出的輻射比光亮表面多。<br>(3) ✗ 質量並不決定放射速率；表面面積以及 (1) 和 (2) 才是相關因素。'
    }
  },
  {
    id: 'H98', topic: 'heat', level: 3, sub: 'Specific heat capacity',
    stem: 'A student finds the specific heat capacity of a liquid by heating it electrically in a copper container, but ignores the energy absorbed by the container. How does this affect the result?',
    options: ['It has no effect.', 'The value found is too small.', 'The effect depends on the room temperature.', 'The value found is too large.'],
    answer: 3,
    explain: 'Some of the energy supplied heats the container, but the student counts all of it as heating the liquid. For the measured ΔT, the energy credited to the liquid is too large, so c = E / (mΔT) comes out too large.',
    zh: {
      sub: '比熱容量',
      stem: '一名學生在銅容器內用電加熱某液體以求出其比熱容量，但忽略了容器吸收的能量。這對結果有何影響？',
      options: ['沒有影響。', '求得的數值太小。', '影響視乎室溫而定。', '求得的數值太大。'],
      explain: '供應的能量有部分用來加熱容器，但學生把它全部算作加熱液體。對量得的 ΔT 而言，歸於液體的能量太大，所以 c = E / (mΔT) 會太大。'
    }
  },
  {
    id: 'H99', topic: 'heat', level: 4, sub: 'Kinetic theory',
    stem: 'What is the ratio (r.m.s. speed of oxygen molecules at 127 °C) : (r.m.s. speed of helium molecules at −73 °C)?<br>(Molar masses: oxygen = 32 g mol⁻¹, helium = 4 g mol⁻¹)',
    options: ['0.50', '0.71', '1.41', '2.0'],
    answer: 0,
    explain: 'c_rms = √(3RT / M) ∝ √(T / M). With T in kelvin (400 K and 200 K):<br>ratio = √((400 / 32) / (200 / 4)) = √(12.5 / 50) = √0.25 = 0.50.<br>The oxygen is hotter, but its molecules are 8 times heavier, so they are still slower.',
    zh: {
      sub: '分子運動論',
      stem: '（在 127 °C 時氧分子的方均根速率）:（在 −73 °C 時氦分子的方均根速率）之比是多少？<br>（摩爾質量：氧 = 32 g mol⁻¹，氦 = 4 g mol⁻¹）',
      explain: 'c_rms = √(3RT / M) ∝ √(T / M)。T 以開爾文為單位（400 K 和 200 K）：<br>比值 = √((400 / 32) / (200 / 4)) = √(12.5 / 50) = √0.25 = 0.50。<br>氧氣雖然較熱，但其分子重 8 倍，所以仍然較慢。'
    }
  },
  {
    id: 'H100', topic: 'heat', level: 3, sub: 'Ideal gas equation',
    stem: 'What is the volume of 2.0 mol of an ideal gas at 1.0 × 10⁵ Pa and 27 °C?<br>(R = 8.31 J mol⁻¹ K⁻¹)',
    options: ['4.49 × 10⁻³ m³', '4.99 × 10⁻² m³', '9.97 × 10⁻² m³', '4.99 m³'],
    answer: 1,
    explain: 'V = nRT / p = 2.0 × 8.31 × 300 / (1.0 × 10⁵) = 4.99 × 10⁻² m³ (about 50 litres).<br>4.49 × 10⁻³ m³ uses T = 27.',
    zh: {
      sub: '理想氣體方程',
      stem: '2.0 mol 的理想氣體在 1.0 × 10⁵ Pa 和 27 °C 時的體積是多少？<br>（R = 8.31 J mol⁻¹ K⁻¹）',
      explain: 'V = nRT / p = 2.0 × 8.31 × 300 / (1.0 × 10⁵) = 4.99 × 10⁻² m³（約 50 升）。<br>4.49 × 10⁻³ m³ 用了 T = 27。'
    }
  },
  {
    id: 'H101', topic: 'heat', level: 2, sub: 'Radiation',
    stem: 'Which of the following reduces the energy lost by radiation from a teapot full of hot tea?',
    options: ['Painting the teapot dull black', 'Standing the teapot on a cork mat', 'Giving the teapot a shiny silver surface', 'Putting a lid on the teapot'],
    answer: 2,
    explain: 'A shiny silver surface is a poor emitter of radiation. A cork mat reduces conduction, a lid reduces convection and evaporation, and a dull black surface would increase radiation.',
    zh: {
      sub: '輻射',
      stem: '下列哪項能減少一壺熱茶經輻射散失的能量？',
      options: ['把茶壺塗成暗黑色', '把茶壺放在軟木墊上', '使茶壺有光亮的銀色表面', '為茶壺蓋上蓋子'],
      explain: '光亮的銀色表面是不良的輻射放射體。軟木墊減少的是傳導，蓋子減少的是對流和蒸發，而暗黑色表面會增加輻射。'
    }
  },
  {
    id: 'H102', topic: 'heat', level: 4, sub: 'Method of mixtures',
    stem: 'A 0.50 kg copper block at 100 °C is placed in contact with a 0.20 kg aluminium block at 20 °C inside an insulated box. What is their common final temperature?<br>(Specific heat capacity: copper = 390 J kg⁻¹ °C⁻¹, aluminium = 900 J kg⁻¹ °C⁻¹)',
    options: ['40.0 °C', '44.2 °C', '60.0 °C', '61.6 °C'],
    answer: 3,
    explain: 'Heat capacities: copper 0.50 × 390 = 195 J °C⁻¹; aluminium 0.20 × 900 = 180 J °C⁻¹.<br>195 (100 − T) = 180 (T − 20) ⇒ 23 100 = 375T ⇒ T = 61.6 °C.<br>60.0 °C is the simple average; 44.2 °C uses the specific heat capacities without the masses.',
    zh: {
      sub: '混合法',
      stem: '在一個隔熱箱內，一塊 0.50 kg、溫度為 100 °C 的銅與一塊 0.20 kg、溫度為 20 °C 的鋁互相接觸。它們最後的共同溫度是多少？<br>（比熱容量：銅 = 390 J kg⁻¹ °C⁻¹，鋁 = 900 J kg⁻¹ °C⁻¹）',
      explain: '熱容量：銅 0.50 × 390 = 195 J °C⁻¹；鋁 0.20 × 900 = 180 J °C⁻¹。<br>195 (100 − T) = 180 (T − 20) ⇒ 23 100 = 375T ⇒ T = 61.6 °C。<br>60.0 °C 是簡單平均值；44.2 °C 只用了比熱容量而沒有計及質量。'
    }
  },
  {
    id: 'H103', topic: 'heat', level: 2, sub: 'Temperature scales',
    stem: 'What is −40 °C on the kelvin scale?',
    options: ['233 K', '253 K', '273 K', '313 K'],
    answer: 0,
    explain: 'T (K) = θ (°C) + 273 = −40 + 273 = 233 K.<br>313 K treats −40 °C as +40 °C.',
    zh: {
      sub: '溫標',
      stem: '−40 °C 以開爾文溫標表示是多少？',
      explain: 'T (K) = θ (°C) + 273 = −40 + 273 = 233 K。<br>313 K 把 −40 °C 誤當作 +40 °C。'
    }
  },
  {
    id: 'H104', topic: 'heat', level: 4, sub: 'Evaporation',
    stem: 'In hot, dry places, water is kept cool in a porous clay jar, or in a jar wrapped in a wet cloth. Which of the following statements is/are correct?',
    statements: [
      'Water evaporating from the outer surface takes energy from the jar and the water inside.',
      'The wet cloth works mainly by reducing convection around the jar.',
      'The cooling is greater on a windy, dry day than on a still, humid day.'
    ],
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: 1,
    explain: '(1) ✓ Evaporation needs latent heat, which comes from the jar and its contents, so they cool.<br>(3) ✓ Wind and dry air carry the vapour away and speed up evaporation.<br>(2) ✗ The cooling comes from evaporation, not from any change in convection.',
    zh: {
      sub: '蒸發',
      stem: '在炎熱乾燥的地方，人們把水放在多孔陶瓦罐內，或用濕布包着水罐，以保持水的清涼。下列哪項／哪些敘述是正確的？',
      statements: ['從外表面蒸發的水從罐和罐內的水取走能量。', '濕布主要透過減少罐四周的對流起作用。', '在有風而乾燥的日子，冷卻效果比無風而潮濕的日子大。'],
      explain: '(1) ✓ 蒸發需要潛熱，潛熱來自罐和罐內的水，所以它們冷卻。<br>(3) ✓ 風和乾燥空氣把水汽帶走，加快蒸發。<br>(2) ✗ 冷卻來自蒸發，而不是對流有任何改變。'
    }
  }
]);
