/* Heat and Gases — structured questions (Paper 1 Section B style). Format: see bank/core.js (addStructured). */
addStructured([
  {
    id: 'SH01', topic: 'heat', level: 3, sub: 'Specific heat capacity',
    stem: 'A student finds the specific heat capacity of aluminium using a 1.0 kg aluminium block, an immersion heater, a thermometer, a voltmeter, an ammeter and a stop-watch.',
    parts: [
      {
        label: '(a)', marks: 2,
        q: 'Explain how the student can find the electrical energy supplied by the heater.',
        answer: 'Measure the p.d. V across the heater with the voltmeter, the current I with the ammeter and the heating time t with the stop-watch. Energy supplied E = VIt.',
        points: ['Measures V, I and the time t [1]', 'E = VIt [1]']
      },
      {
        label: '(b)', marks: 2,
        q: 'The heater works at 12 V and 4.0 A for 10 minutes. The temperature of the block rises from 22.0 °C to 52.0 °C. Calculate the specific heat capacity of aluminium given by this experiment.',
        answer: 'E = VIt = 12 × 4.0 × 600 = 28 800 J.<br>c = E / (mΔT) = 28 800 / (1.0 × 30.0) = 960 J kg⁻¹ °C⁻¹.',
        points: ['E = 12 × 4.0 × 600 = 28 800 J [1M]', 'c = 960 J kg⁻¹ °C⁻¹ [1A]'],
        num: { v: 960, unit: 'J kg⁻¹ °C⁻¹' }
      },
      {
        label: '(c)', marks: 2,
        q: 'The accepted value is 900 J kg⁻¹ °C⁻¹. Explain why the experimental value is higher, and suggest one improvement to the experiment.',
        answer: 'Some energy is lost from the block to the surroundings, so not all the energy supplied raises the temperature of the block: ΔT is smaller than it should be for the E measured, giving a larger c. Improvement: wrap the block in insulating material (or put oil in the holes for the heater and thermometer for good thermal contact).',
        points: ['Heat loss to the surroundings, so ΔT is too small for the E measured [1]', 'Wrap the block with insulation / use oil for good thermal contact [1]']
      }
    ],
    zh: {
      sub: '比熱容量',
      stem: '一名學生利用一塊 1.0 kg 的鋁、浸沒式電熱器、溫度計、伏特計、安培計和停錶，求鋁的比熱容量。',
      parts: [
        {
          q: '解釋學生怎樣求得電熱器供應的電能。',
          answer: '用伏特計量度電熱器兩端的電勢差 V，用安培計量度電流 I，用停錶量度加熱時間 t。供應的能量 E = VIt。',
          points: ['量度 V、I 和時間 t [1]', 'E = VIt [1]']
        },
        {
          q: '電熱器在 12 V、4.0 A 下運作 10 分鐘，鋁塊的溫度由 22.0 °C 升至 52.0 °C。計算這實驗得出的鋁的比熱容量。',
          answer: 'E = VIt = 12 × 4.0 × 600 = 28 800 J。<br>c = E / (mΔT) = 28 800 / (1.0 × 30.0) = 960 J kg⁻¹ °C⁻¹。',
          points: ['E = 12 × 4.0 × 600 = 28 800 J [1M]', 'c = 960 J kg⁻¹ °C⁻¹ [1A]']
        },
        {
          q: '公認數值為 900 J kg⁻¹ °C⁻¹。解釋為何實驗數值較高，並提出一項改善實驗的方法。',
          answer: '部分能量由鋁塊散失到周圍環境，供應的能量並非全部用來使鋁塊升溫：相對於量得的 E，ΔT 太小，所以 c 偏大。改善方法：用隔熱物料包裹鋁塊（或在放電熱器和溫度計的孔內加油，確保良好熱接觸）。',
          points: ['熱散失到周圍環境，相對於量得的 E，ΔT 太小 [1]', '用隔熱物料包裹鋁塊／加油確保良好熱接觸 [1]']
        }
      ]
    }
  },
  {
    id: 'SH02', topic: 'heat', level: 4, sub: 'Latent heat',
    stem: 'To measure the specific latent heat of vaporization of water, an electric kettle containing water is placed on an electronic balance and switched on.',
    parts: [
      {
        label: '(a)', marks: 1,
        q: 'Why should the student wait until the water is boiling before starting to take readings?',
        answer: 'So that the energy supplied during the measurement is used to turn water into steam, not to raise the temperature of the water.',
        points: ['Energy then goes into vaporization only, not into heating the water [1]']
      },
      {
        label: '(b)', marks: 2,
        q: 'With the kettle working at 1.20 kW, the balance reading falls from 0.850 kg to 0.790 kg in 120 s. Calculate the specific latent heat of vaporization of water, assuming no heat loss.',
        answer: 'Energy = Pt = 1200 × 120 = 1.44 × 10⁵ J; mass boiled away = 0.060 kg.<br>ℓ = 1.44 × 10⁵ / 0.060 = 2.40 × 10⁶ J kg⁻¹.',
        points: ['Pt = mℓ with m = 0.060 kg [1M]', 'ℓ = 2.40 × 10⁶ J kg⁻¹ [1A]'],
        num: { v: 2.40e6, unit: 'J kg⁻¹' }
      },
      {
        label: '(c)', marks: 3,
        q: 'The experiment is repeated with the kettle working at 2.00 kW. This time 0.103 kg of water boils away in 120 s. Assuming the rate of heat loss is the same in both runs, use both results to find a better value for the specific latent heat.',
        answer: 'For each run: Pt = mℓ + (heat lost in time t). The heat lost is the same, so subtracting:<br>(P₂ − P₁) t = (m₂ − m₁) ℓ ⇒ (2000 − 1200) × 120 = (0.103 − 0.060) ℓ<br>ℓ = 96 000 / 0.043 = 2.23 × 10⁶ J kg⁻¹.',
        points: ['Same heat loss in both runs, so it cancels on subtracting [1]', '(P₂ − P₁)t = (m₂ − m₁)ℓ [1M]', 'ℓ = 2.23 × 10⁶ J kg⁻¹ [1A]'],
        num: { v: 2.233e6, unit: 'J kg⁻¹' }
      },
      {
        label: '(d)', marks: 1,
        q: 'Why is the value in (c) closer to the accepted value (2.26 × 10⁶ J kg⁻¹) than the value in (b)?',
        answer: 'The method in (c) eliminates the effect of the (constant) heat loss to the surroundings, which made the value in (b) too large.',
        points: ['It removes the effect of heat loss [1]']
      }
    ],
    zh: {
      sub: '潛熱',
      stem: '為量度水的汽化比潛熱，把一個盛水的電水壺放在電子天秤上並開啟。',
      parts: [
        {
          q: '為甚麼學生應等到水沸騰才開始讀數？',
          answer: '這樣量度期間供應的能量便用來把水變成蒸汽，而不是提高水的溫度。',
          points: ['此時能量只用於汽化，而非加熱水 [1]']
        },
        {
          q: '電水壺以 1.20 kW 運作時，天秤讀數在 120 s 內由 0.850 kg 降至 0.790 kg。假設沒有熱散失，計算水的汽化比潛熱。',
          answer: '能量 = Pt = 1200 × 120 = 1.44 × 10⁵ J；汽化的質量 = 0.060 kg。<br>ℓ = 1.44 × 10⁵ / 0.060 = 2.40 × 10⁶ J kg⁻¹。',
          points: ['Pt = mℓ，m = 0.060 kg [1M]', 'ℓ = 2.40 × 10⁶ J kg⁻¹ [1A]']
        },
        {
          q: '以 2.00 kW 運作電水壺重做實驗，這次在 120 s 內有 0.103 kg 的水汽化。假設兩次實驗的熱散失速率相同，利用兩組結果求出一個較準確的汽化比潛熱。',
          answer: '每次實驗：Pt = mℓ + (時間 t 內散失的熱)。散失的熱相同，兩式相減：<br>(P₂ − P₁) t = (m₂ − m₁) ℓ ⇒ (2000 − 1200) × 120 = (0.103 − 0.060) ℓ<br>ℓ = 96 000 / 0.043 = 2.23 × 10⁶ J kg⁻¹。',
          points: ['兩次熱散失相同，相減時抵消 [1]', '(P₂ − P₁)t = (m₂ − m₁)ℓ [1M]', 'ℓ = 2.23 × 10⁶ J kg⁻¹ [1A]']
        },
        {
          q: '為甚麼 (c) 的數值比 (b) 的更接近公認數值（2.26 × 10⁶ J kg⁻¹）？',
          answer: '(c) 的方法消除了（恆定的）熱散失的影響，而熱散失使 (b) 的數值偏大。',
          points: ['消除了熱散失的影響 [1]']
        }
      ]
    }
  },
  {
    id: 'SH03', topic: 'heat', level: 4, sub: 'Latent heat',
    stem: '0.30 kg of water at 25 °C is in an insulated cup of negligible heat capacity. Ice at 0 °C is added until the final temperature of the drink is 5.0 °C, with all the ice melted.<br>(Specific heat capacity of water = 4200 J kg⁻¹ °C⁻¹; specific latent heat of fusion of ice = 3.34 × 10⁵ J kg⁻¹)',
    parts: [
      {
        label: '(a)', marks: 2,
        q: 'Calculate the energy given out by the original water as it cools from 25 °C to 5.0 °C.',
        answer: 'E = mcΔT = 0.30 × 4200 × (25 − 5.0) = 25 200 J.',
        points: ['E = 0.30 × 4200 × 20 [1M]', 'E = 25 200 J [1A]'],
        num: { v: 25200, unit: 'J' }
      },
      {
        label: '(b)', marks: 3,
        q: 'Find the mass of ice added.',
        answer: 'The ice first melts, then the melted ice warms from 0 °C to 5.0 °C:<br>m (3.34 × 10⁵ + 4200 × 5.0) = 25 200 ⇒ m = 25 200 / 355 000 = 0.0710 kg (71 g).',
        points: ['Energy to melt the ice: m × 3.34 × 10⁵ [1M]', 'Energy to warm the melted ice to 5.0 °C: m × 4200 × 5.0 [1M]', 'm = 0.0710 kg [1A]'],
        num: { v: 0.0710, unit: 'kg' }
      },
      {
        label: '(c)', marks: 2,
        q: 'Explain why ice at 0 °C cools a drink much more than the same mass of water at 0 °C.',
        answer: 'Ice must first absorb a large amount of latent heat to melt, at constant temperature, before it absorbs energy to warm up. Water at 0 °C absorbs only the energy needed to warm up.',
        points: ['Ice absorbs latent heat of fusion while melting [1]', 'in addition to the energy needed to warm the melted water [1]']
      }
    ],
    zh: {
      sub: '潛熱',
      stem: '一個熱容量可忽略的隔熱杯內有 0.30 kg、溫度為 25 °C 的水。加入 0 °C 的冰，直至冰全部熔化後飲品的最終溫度為 5.0 °C。<br>（水的比熱容量 = 4200 J kg⁻¹ °C⁻¹；冰的熔解比潛熱 = 3.34 × 10⁵ J kg⁻¹）',
      parts: [
        {
          q: '計算原來的水由 25 °C 冷卻至 5.0 °C 時放出的能量。',
          answer: 'E = mcΔT = 0.30 × 4200 × (25 − 5.0) = 25 200 J。',
          points: ['E = 0.30 × 4200 × 20 [1M]', 'E = 25 200 J [1A]']
        },
        {
          q: '求加入的冰的質量。',
          answer: '冰先熔化，然後熔成的水由 0 °C 升溫至 5.0 °C：<br>m (3.34 × 10⁵ + 4200 × 5.0) = 25 200 ⇒ m = 25 200 / 355 000 = 0.0710 kg（71 g）。',
          points: ['熔化冰所需能量：m × 3.34 × 10⁵ [1M]', '把熔成的水加熱至 5.0 °C 所需能量：m × 4200 × 5.0 [1M]', 'm = 0.0710 kg [1A]']
        },
        {
          q: '解釋為甚麼 0 °C 的冰使飲品冷卻的效果遠比相同質量的 0 °C 的水好。',
          answer: '冰須先在恆溫下吸收大量熔解潛熱才能熔化，之後才吸收能量升溫。0 °C 的水則只吸收升溫所需的能量。',
          points: ['冰熔化時吸收熔解潛熱 [1]', '另外還要吸收熔成的水升溫所需的能量 [1]']
        }
      ]
    }
  },
  {
    id: 'SH04', topic: 'heat', level: 3, sub: 'Heat transfer',
    stem: 'A vacuum flask has double glass walls with a vacuum between them. The facing surfaces of the walls are silvered, and the flask is closed with a plastic stopper.',
    parts: [
      {
        label: '(a)', marks: 2,
        q: 'Explain how the vacuum reduces energy transfer.',
        answer: 'Conduction and convection both need particles. The vacuum contains (almost) no particles, so energy cannot be conducted or carried by convection across the gap.',
        points: ['Conduction and convection need a medium / particles [1]', 'so neither can occur across the vacuum [1]']
      },
      {
        label: '(b)', marks: 2,
        q: 'Explain why the walls are silvered.',
        answer: 'Shiny silvered surfaces are poor emitters of radiation, and they reflect radiation back. So energy transfer by radiation across the vacuum is reduced.',
        points: ['Silvered surfaces are poor emitters / good reflectors of radiation [1]', 'reducing energy transfer by radiation [1]']
      },
      {
        label: '(c)', marks: 1,
        q: 'Hot coffee in the flask still cools slowly. State the main way energy escapes.',
        answer: 'By conduction through the stopper and the glass at the neck of the flask (and by convection/evaporation into the air at the top).',
        points: ['Conduction through the stopper / neck of the flask [1]']
      }
    ],
    zh: {
      sub: '熱轉移',
      stem: '真空瓶有雙層玻璃壁，兩壁之間是真空。兩壁相對的表面鍍了銀，瓶口以塑膠瓶塞封閉。',
      parts: [
        {
          q: '解釋真空怎樣減少能量轉移。',
          answer: '傳導和對流都需要粒子。真空中（幾乎）沒有粒子，所以能量不能經傳導或對流越過空隙。',
          points: ['傳導和對流需要介質／粒子 [1]', '所以兩者都不能越過真空 [1]']
        },
        {
          q: '解釋為甚麼瓶壁要鍍銀。',
          answer: '光亮的鍍銀表面是不良的輻射放射體，並會把輻射反射回去，所以減少了經輻射越過真空的能量轉移。',
          points: ['鍍銀表面是不良放射體／良好反射體 [1]', '減少經輻射的能量轉移 [1]']
        },
        {
          q: '瓶內的熱咖啡仍會慢慢冷卻。指出能量散失的主要途徑。',
          answer: '經瓶塞和瓶頸處的玻璃傳導（以及經瓶頂空氣的對流／蒸發）。',
          points: ['經瓶塞／瓶頸傳導 [1]']
        }
      ]
    }
  },
  {
    id: 'SH05', topic: 'heat', level: 4, sub: "Boyle's law",
    stem: 'A student traps air in a sealed syringe connected to a pressure gauge, compresses it slowly and records these readings:<br><table class="dtable"><tr><th>p / kPa</th><td>100</td><td>120</td><td>150</td><td>200</td><td>300</td></tr><tr><th>V / cm³</th><td>30</td><td>25</td><td>20</td><td>15</td><td>10</td></tr></table>',
    parts: [
      {
        label: '(a)', marks: 2,
        q: 'Use the data to show that the results obey Boyle\'s law.',
        answer: 'pV for each pair: 100 × 30 = 120 × 25 = 150 × 20 = 200 × 15 = 300 × 10 = 3000 kPa cm³. pV is constant, as Boyle\'s law requires.',
        points: ['Calculates pV for at least three pairs (3000 kPa cm³) [1]', 'States pV is constant [1]']
      },
      {
        label: '(b)', marks: 1,
        q: 'Which graph of these quantities gives a straight line through the origin?',
        answer: 'A graph of p against 1/V (or V against 1/p).',
        points: ['p against 1/V [1]']
      },
      {
        label: '(c)', marks: 2,
        q: 'Find the volume of the air when the pressure is 250 kPa.',
        answer: 'V = 3000 / 250 = 12 cm³.',
        points: ['V = pV / p = 3000 / 250 [1M]', '12 cm³ [1A]'],
        num: { v: 12, unit: 'cm³' }
      },
      {
        label: '(d)', marks: 2,
        q: 'State two conditions that must be kept constant for Boyle\'s law to apply, and how the student can ensure one of them.',
        answer: 'The mass of gas and its temperature. Keep the temperature constant by pushing the plunger in slowly and waiting before each reading (the seal keeps the mass fixed).',
        points: ['Fixed mass and constant temperature [1]', 'Compress slowly / wait before reading (or seal the syringe) [1]']
      }
    ],
    zh: {
      sub: '波義耳定律',
      stem: '一名學生把空氣困在連接壓強計的密封注射筒內，緩慢壓縮並記錄以下讀數：<br><table class="dtable"><tr><th>p / kPa</th><td>100</td><td>120</td><td>150</td><td>200</td><td>300</td></tr><tr><th>V / cm³</th><td>30</td><td>25</td><td>20</td><td>15</td><td>10</td></tr></table>',
      parts: [
        {
          q: '利用數據證明結果遵從波義耳定律。',
          answer: '每組數據的 pV：100 × 30 = 120 × 25 = 150 × 20 = 200 × 15 = 300 × 10 = 3000 kPa cm³。pV 不變，符合波義耳定律。',
          points: ['計算最少三組數據的 pV（3000 kPa cm³）[1]', '指出 pV 不變 [1]']
        },
        {
          q: '這些物理量的哪個線圖是一條通過原點的直線？',
          answer: 'p 對 1/V 的線圖（或 V 對 1/p）。',
          points: ['p 對 1/V [1]']
        },
        {
          q: '求壓強為 250 kPa 時空氣的體積。',
          answer: 'V = 3000 / 250 = 12 cm³。',
          points: ['V = pV / p = 3000 / 250 [1M]', '12 cm³ [1A]']
        },
        {
          q: '指出波義耳定律成立所需保持不變的兩個條件，以及學生可怎樣確保其中一個。',
          answer: '氣體的質量和溫度。緩慢推入活塞並在每次讀數前稍等，以保持溫度不變（密封注射筒則保持質量固定）。',
          points: ['質量固定和溫度不變 [1]', '緩慢壓縮／讀數前稍等（或密封注射筒）[1]']
        }
      ]
    }
  },
  {
    id: 'SH06', topic: 'heat', level: 5, sub: 'Kinetic theory',
    stem: 'A single gas molecule of mass m moves with speed u perpendicular to two opposite walls of a cubical box of side L. It collides elastically with the walls.',
    parts: [
      {
        label: '(a)', marks: 1,
        q: 'Find the change in momentum of the molecule each time it hits a wall.',
        answer: 'Its velocity changes from +u to −u, so the change in momentum is 2mu (in size).',
        points: ['2mu [1]']
      },
      {
        label: '(b)', marks: 1,
        q: 'Find the time between successive collisions with the same wall.',
        answer: 'The molecule travels 2L (there and back) at speed u: t = 2L / u.',
        points: ['2L / u [1]']
      },
      {
        label: '(c)', marks: 1,
        q: 'Hence show that the average force on that wall is mu² / L.',
        answer: 'Average force = rate of change of momentum = 2mu / (2L / u) = mu² / L.',
        points: ['F = 2mu ÷ (2L/u) = mu²/L [1]']
      },
      {
        label: '(d)', marks: 2,
        q: 'The box contains N molecules moving at random. Explain how this leads to p = Nm c̄² / (3V), where c̄² is the mean square speed and V = L³.',
        answer: 'For N molecules the total force on the wall is Nm × (mean of u²) / L. With random motion in three dimensions, the mean of u² in any one direction is one-third of c̄². Pressure = force / L², so p = Nm c̄² / (3L³) = Nm c̄² / (3V).',
        points: ['Random motion: mean square speed in one direction = c̄² / 3 [1]', 'p = F / L² = Nm c̄² / (3L³) [1]']
      },
      {
        label: '(e)', marks: 2,
        q: 'Use the result ½ m c̄² = (3/2) kT, or otherwise, to calculate the r.m.s. speed of nitrogen molecules at 300 K. (Molar mass of nitrogen = 0.028 kg mol⁻¹; R = 8.31 J mol⁻¹ K⁻¹)',
        answer: 'c_rms = √(3RT / M) = √(3 × 8.31 × 300 / 0.028) = 517 m s⁻¹.',
        points: ['c_rms = √(3RT/M) with M in kg mol⁻¹ [1M]', '517 m s⁻¹ [1A]'],
        num: { v: 516.8, unit: 'm s⁻¹' }
      }
    ],
    zh: {
      sub: '分子運動論',
      stem: '一個質量為 m 的氣體分子以速率 u 在一個邊長為 L 的立方體箱內，垂直於兩塊相對的器壁運動，並與器壁作彈性碰撞。',
      parts: [
        {
          q: '求分子每次撞擊器壁時動量的變化。',
          answer: '速度由 +u 變為 −u，所以動量變化的大小為 2mu。',
          points: ['2mu [1]']
        },
        {
          q: '求分子連續兩次撞擊同一器壁之間的時間。',
          answer: '分子以速率 u 走了 2L（來回）：t = 2L / u。',
          points: ['2L / u [1]']
        },
        {
          q: '由此證明該器壁所受的平均力為 mu² / L。',
          answer: '平均力 = 動量變化率 = 2mu / (2L / u) = mu² / L。',
          points: ['F = 2mu ÷ (2L/u) = mu²/L [1]']
        },
        {
          q: '箱內有 N 個作無規運動的分子。解釋怎樣由此得出 p = Nm c̄² / (3V)，其中 c̄² 是方均速率，V = L³。',
          answer: 'N 個分子對器壁的總力為 Nm × (u² 的平均值) / L。分子在三維空間中作無規運動，任何一個方向的 u² 平均值是 c̄² 的三分之一。壓強 = 力 / L²，所以 p = Nm c̄² / (3L³) = Nm c̄² / (3V)。',
          points: ['無規運動：一個方向的方均速率 = c̄² / 3 [1]', 'p = F / L² = Nm c̄² / (3L³) [1]']
        },
        {
          q: '利用 ½ m c̄² = (3/2) kT 或其他方法，計算氮分子在 300 K 時的方均根速率。（氮的摩爾質量 = 0.028 kg mol⁻¹；R = 8.31 J mol⁻¹ K⁻¹）',
          answer: 'c_rms = √(3RT / M) = √(3 × 8.31 × 300 / 0.028) = 517 m s⁻¹。',
          points: ['c_rms = √(3RT/M)，M 以 kg mol⁻¹ 為單位 [1M]', '517 m s⁻¹ [1A]']
        }
      ]
    }
  },
  {
    id: 'SH07', topic: 'heat', level: 4, sub: 'Ideal gas equation',
    stem: 'A cylinder of volume 0.050 m³ contains helium at a pressure of 1.5 × 10⁶ Pa and a temperature of 27 °C. Treat helium as an ideal gas.<br>(R = 8.31 J mol⁻¹ K⁻¹; molar mass of helium = 4.0 g mol⁻¹)',
    parts: [
      {
        label: '(a)', marks: 2,
        q: 'Calculate the number of moles of helium in the cylinder.',
        answer: 'n = pV / RT = (1.5 × 10⁶ × 0.050) / (8.31 × 300) = 30.1 mol.',
        points: ['n = pV / RT with T = 300 K [1M]', '30.1 mol [1A]'],
        num: { v: 30.08, unit: 'mol' }
      },
      {
        label: '(b)', marks: 1,
        q: 'Find the mass of helium in the cylinder, in grams.',
        answer: 'm = nM = 30.1 × 4.0 = 120 g.',
        points: ['120 g [1]'],
        num: { v: 120.3, unit: 'g' }
      },
      {
        label: '(c)', marks: 3,
        q: 'The helium is used to fill balloons, each of volume 0.010 m³ at 1.0 × 10⁵ Pa and 27 °C. The cylinder cannot be emptied below 1.0 × 10⁵ Pa. How many balloons can be filled?',
        answer: 'At 1.0 × 10⁵ Pa (same temperature) the helium would occupy V = 1.5 × 10⁶ × 0.050 / 1.0 × 10⁵ = 0.75 m³ (Boyle\'s law).<br>0.050 m³ of this stays in the cylinder, so 0.70 m³ is available ⇒ 0.70 / 0.010 = 70 balloons.',
        points: ['Uses Boyle\'s law: total volume at 1.0 × 10⁵ Pa = 0.75 m³ [1M]', 'Subtracts the 0.050 m³ left in the cylinder [1M]', '70 balloons [1A]'],
        num: { v: 70, unit: '' }
      }
    ],
    zh: {
      sub: '理想氣體方程',
      stem: '一個體積為 0.050 m³ 的氣筒載有壓強為 1.5 × 10⁶ Pa、溫度為 27 °C 的氦氣。把氦氣當作理想氣體。<br>（R = 8.31 J mol⁻¹ K⁻¹；氦的摩爾質量 = 4.0 g mol⁻¹）',
      parts: [
        {
          q: '計算氣筒內氦氣的摩爾數。',
          answer: 'n = pV / RT = (1.5 × 10⁶ × 0.050) / (8.31 × 300) = 30.1 mol。',
          points: ['n = pV / RT，T = 300 K [1M]', '30.1 mol [1A]']
        },
        {
          q: '求氣筒內氦氣的質量（以克為單位）。',
          answer: 'm = nM = 30.1 × 4.0 = 120 g。',
          points: ['120 g [1]']
        },
        {
          q: '用這些氦氣為氣球充氣，每個氣球在 1.0 × 10⁵ Pa 和 27 °C 下的體積為 0.010 m³。氣筒內的壓強不能低於 1.0 × 10⁵ Pa。可以為多少個氣球充氣？',
          answer: '在 1.0 × 10⁵ Pa（溫度相同）下，氦氣的體積為 V = 1.5 × 10⁶ × 0.050 / 1.0 × 10⁵ = 0.75 m³（波義耳定律）。<br>其中 0.050 m³ 留在氣筒內，所以可用的有 0.70 m³ ⇒ 0.70 / 0.010 = 70 個氣球。',
          points: ['用波義耳定律：在 1.0 × 10⁵ Pa 下的總體積 = 0.75 m³ [1M]', '減去留在氣筒內的 0.050 m³ [1M]', '70 個氣球 [1A]']
        }
      ]
    }
  },
  {
    id: 'SH08', topic: 'heat', level: 5, sub: 'Heat loss',
    stem: '0.50 kg of tea at 80 °C is left in an open cup. At 80 °C its temperature is falling at 0.60 °C per minute.<br>(Take the specific heat capacity of the tea as 4200 J kg⁻¹ °C⁻¹ and its specific latent heat of vaporization as 2.26 × 10⁶ J kg⁻¹.)',
    parts: [
      {
        label: '(a)', marks: 2,
        q: 'Calculate the rate at which the tea is losing energy at 80 °C.',
        answer: 'Rate = mc × (rate of fall of temperature) = 0.50 × 4200 × (0.60 / 60) = 21 W.',
        points: ['Uses mc × ΔT/Δt with the rate in °C per second [1M]', '21 W [1A]'],
        num: { v: 21, unit: 'W' }
      },
      {
        label: '(b)', marks: 1,
        q: 'What heater power would keep the tea at a steady 80 °C?',
        answer: '21 W — the heater must replace the energy lost at the same rate.',
        points: ['21 W [1]'],
        num: { v: 21, unit: 'W' }
      },
      {
        label: '(c)', marks: 2,
        q: 'When a lid is placed on the cup, the rate of cooling at 80 °C falls to 0.40 °C per minute. Explain why.',
        answer: 'The lid stops water vapour escaping and stops warm air rising away from the surface, so energy loss by evaporation and convection is reduced.',
        points: ['Reduces evaporation [1]', 'Reduces convection from the surface [1]']
      },
      {
        label: '(d)', marks: 2,
        q: 'Assume that, without the lid, half of the energy loss at 80 °C is due to evaporation. Estimate the mass of tea that evaporates per minute.',
        answer: 'Energy lost by evaporation per minute = ½ × 21 × 60 = 630 J.<br>Mass = 630 / 2.26 × 10⁶ = 2.8 × 10⁻⁴ kg = 0.28 g per minute.',
        points: ['Energy for evaporation per minute = 630 J [1M]', 'm = 630 / 2.26 × 10⁶ = 2.8 × 10⁻⁴ kg [1A]'],
        num: { v: 2.788e-4, unit: 'kg', tol: 0.03 }
      }
    ],
    zh: {
      sub: '熱散失',
      stem: '把 0.50 kg、溫度為 80 °C 的茶放在敞口杯中。在 80 °C 時，茶的溫度每分鐘下降 0.60 °C。<br>（取茶的比熱容量為 4200 J kg⁻¹ °C⁻¹，汽化比潛熱為 2.26 × 10⁶ J kg⁻¹。）',
      parts: [
        {
          q: '計算茶在 80 °C 時散失能量的速率。',
          answer: '速率 = mc × (溫度下降率) = 0.50 × 4200 × (0.60 / 60) = 21 W。',
          points: ['用 mc × ΔT/Δt，速率以每秒 °C 計 [1M]', '21 W [1A]']
        },
        {
          q: '要使茶穩定保持在 80 °C，電熱器的功率須為多少？',
          answer: '21 W — 電熱器須以相同速率補充散失的能量。',
          points: ['21 W [1]']
        },
        {
          q: '在杯上加蓋後，茶在 80 °C 時的冷卻速率降至每分鐘 0.40 °C。解釋原因。',
          answer: '杯蓋阻止水汽逸出，亦阻止暖空氣從茶的表面上升離開，所以經蒸發和對流散失的能量減少。',
          points: ['減少蒸發 [1]', '減少表面的對流 [1]']
        },
        {
          q: '假設沒有杯蓋時，茶在 80 °C 時散失的能量有一半是由蒸發造成。估算每分鐘蒸發的茶的質量。',
          answer: '每分鐘經蒸發散失的能量 = ½ × 21 × 60 = 630 J。<br>質量 = 630 / 2.26 × 10⁶ = 2.8 × 10⁻⁴ kg = 每分鐘 0.28 g。',
          points: ['每分鐘用於蒸發的能量 = 630 J [1M]', 'm = 630 / 2.26 × 10⁶ = 2.8 × 10⁻⁴ kg [1A]']
        }
      ]
    }
  }
]);

/* Batch 2: questions with figures and drawing parts (see drawHTML in app.js). */
(function () {
  const { svg, line, box, circ, text } = window.draw;
  const heat = graphFrame({
    aria: 'Axes for temperature against time with the original heating curve dashed', w: 400, h: 240,
    x: { max: 32, label: 't / min', ticks: [5, 10, 15, 20, 25, 30].map(v => [v, String(v)]) },
    y: { max: 120, label: 'θ / °C', ticks: [20, 40, 60, 80, 100].map(v => [v, String(v)]) },
    grid: { x: [5, 10, 15, 20, 25, 30], y: [20, 40, 60, 80, 100] },
    lines: [{ pts: [[0, 20], [2, 80], [12, 80], [14, 100]], dash: true, w: 1.5 }]
  });
  const boyle = graphFrame({
    aria: 'Empty axes for pressure against 1/V', w: 400, h: 240,
    x: { max: 0.062, label: '1/V / cm⁻³', ticks: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06].map(v => [v, String(v)]) },
    y: { max: 300, label: 'p / kPa', ticks: [50, 100, 150, 200, 250, 300].map(v => [v, String(v)]) },
    grid: { x: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06], y: [50, 100, 150, 200, 250, 300] }
  });
  const plotted = [[0.05, 250], [0.04, 200], [0.025, 125], [0.02, 100]];
  addStructured([
    {
      id: 'SH09', topic: 'heat', level: 4, sub: 'Heating curve',
      stem: 'A 100 W heater is used to heat 0.20 kg of a solid in an insulated container. The graph shows how the temperature θ of the substance varies with time t. Assume all the energy from the heater is absorbed by the substance.',
      figure: svgGraph({
        aria: 'Temperature against time: rises from 20 to 80 degrees in 2 minutes, constant at 80 degrees until 12 minutes, then rises to 100 degrees at 14 minutes',
        x: { max: 16, label: 't / min', ticks: [[2, '2'], [12, '12'], [14, '14']] }, y: { max: 115, label: 'θ / °C', ticks: [[20, '20'], [80, '80'], [100, '100']] },
        lines: [{ pts: [[0, 20], [2, 80], [12, 80], [14, 100]] }], guides: [[2, 0, 2, 80], [12, 0, 12, 80], [14, 0, 14, 100], [0, 100, 14, 100]]
      }),
      parts: [
        { label: '(a)', marks: 1, q: 'What is the melting point of the substance?', answer: '80 °C (the temperature of the flat part of the graph).', points: ['80 °C [1]'] },
        {
          label: '(b)', marks: 2, q: 'Explain why the temperature stays constant between t = 2 min and t = 12 min although the heater is still on.',
          answer: 'The substance is melting. The energy supplied is used to overcome the attractions between the molecules (increasing their potential energy), not to increase their kinetic energy, so the temperature does not rise.',
          points: ['The substance is melting / changing state [1]', 'Energy increases the potential energy of the molecules, not their kinetic energy [1]']
        },
        {
          label: '(c)', marks: 2, q: 'Find the specific heat capacity of the substance in the solid state.',
          answer: 'In 2 min = 120 s the solid warms from 20 °C to 80 °C.<br>c = Pt / (mΔθ) = 100 × 120 / (0.20 × 60) = 1000 J kg⁻¹ °C⁻¹.',
          points: ['c = Pt / (mΔθ) with t = 120 s and Δθ = 60 °C [1M]', '1000 J kg⁻¹ °C⁻¹ [1A]'], num: { v: 1000, unit: 'J kg⁻¹ °C⁻¹' }
        },
        {
          label: '(d)', marks: 2, q: 'Find the specific latent heat of fusion of the substance.',
          answer: 'Melting takes 12 − 2 = 10 min = 600 s.<br>ℓ = Pt / m = 100 × 600 / 0.20 = 3.0 × 10⁵ J kg⁻¹.',
          points: ['ℓ = Pt / m with t = 600 s [1M]', '3.0 × 10⁵ J kg⁻¹ [1A]'], num: { v: 3.0e5, unit: 'J kg⁻¹' }
        },
        {
          label: '(e)', marks: 2, q: 'The experiment is repeated with 0.40 kg of the same solid and the same heater. On the axes, sketch the graph you would expect. (The original graph is dashed.)',
          answer: 'With twice the mass, every stage takes twice as long: the solid reaches 80 °C at 4 min, melting lasts 20 min (until 24 min), and the liquid reaches 100 °C at 28 min.',
          points: ['Reaches 80 °C at 4 min (half the original gradient) [1]', 'Flat part at 80 °C lasting 20 min, until 24 min [1]'],
          draw: {
            w: heat.w, h: heat.h, base: heat.base, tools: ['line', 'pen'], aria: 'Axes for sketching the new heating curve',
            snap: [[0, 20], [4, 80], [24, 80], [28, 100]].map(([x, y]) => [heat.X(x), heat.Y(y)]),
            answer: heat.path([[0, 20], [4, 80], [24, 80], [28, 100]])
          }
        }
      ],
      zh: {
        sub: '加熱曲線',
        stem: '用一個 100 W 的電熱器加熱放在隔熱容器內 0.20 kg 的固體。下圖顯示物質的溫度 θ 隨時間 t 的變化。假設電熱器的能量全部被物質吸收。',
        parts: [
          { q: '該物質的熔點是多少？', answer: '80 °C（線圖平坦部分的溫度）。', points: ['80 °C [1]'] },
          { q: '解釋為甚麼電熱器仍然開着，溫度卻在 t = 2 min 至 t = 12 min 期間保持不變。', answer: '物質正在熔化。所供應的能量用來克服分子之間的吸引力（增加分子的勢能），而不是增加分子的動能，所以溫度不上升。', points: ['物質正在熔化／改變物態 [1]', '能量增加分子的勢能，而非動能 [1]'] },
          { q: '求該物質在固態時的比熱容量。', answer: '在 2 min = 120 s 內，固體由 20 °C 升至 80 °C。<br>c = Pt / (mΔθ) = 100 × 120 / (0.20 × 60) = 1000 J kg⁻¹ °C⁻¹。', points: ['c = Pt / (mΔθ)，其中 t = 120 s、Δθ = 60 °C [1M]', '1000 J kg⁻¹ °C⁻¹ [1A]'] },
          { q: '求該物質的熔解比潛熱。', answer: '熔化需時 12 − 2 = 10 min = 600 s。<br>ℓ = Pt / m = 100 × 600 / 0.20 = 3.0 × 10⁵ J kg⁻¹。', points: ['ℓ = Pt / m，其中 t = 600 s [1M]', '3.0 × 10⁵ J kg⁻¹ [1A]'] },
          { q: '用 0.40 kg 的同一種固體和同一個電熱器重做實驗。在坐標軸上繪畫你預期的線圖。（原來的線圖以虛線表示。）', answer: '質量加倍，每個階段所需時間都加倍：固體在 4 min 時達到 80 °C，熔化持續 20 min（直至 24 min），液體在 28 min 時達到 100 °C。', points: ['在 4 min 時達到 80 °C（斜率為原來的一半）[1]', '在 80 °C 的平坦部分持續 20 min，直至 24 min [1]'] }
        ]
      }
    },
    {
      id: 'SH10', topic: 'heat', level: 4, sub: "Boyle's law",
      stem: 'A student traps some air in a syringe connected to a pressure gauge. The air is compressed slowly so that its temperature stays at 27 °C. The readings are:<br><table class="dtable"><tr><th>V / cm³</th><td>20</td><td>25</td><td>40</td><td>50</td></tr><tr><th>p / kPa</th><td>250</td><td>200</td><td>125</td><td>100</td></tr></table>(R = 8.31 J mol⁻¹ K⁻¹)',
      figure: svg(380, 190, 'A syringe of air connected to a pressure gauge',
        box(120, 40, 50, 130) + '<rect x="120" y="90" width="50" height="80" fill="currentColor" fill-opacity="0.1"/>' + line('M120 90 H170', 5) + line('M145 90 V20 M130 20 H160', 3) +
        line('M145 170 V180 H250 V150', 1.5) + circ(250, 135, 15) + line('M250 135 L259 127', 2) + text(250, 112, 'kPa', { size: 11 })),
      parts: [
        { label: '(a)', marks: 1, q: 'Calculate 1/V for each reading.', answer: '1/V = 0.050, 0.040, 0.025 and 0.020 cm⁻³.', points: ['All four values correct [1]'] },
        {
          label: '(b)', marks: 2, q: 'On the axes, plot p against 1/V and draw the best-fit line.',
          answer: 'The four points (0.050, 250), (0.040, 200), (0.025, 125) and (0.020, 100) lie on a straight line through the origin.',
          points: ['All four points plotted correctly [1]', 'Straight best-fit line through the origin [1]'],
          draw: {
            w: boyle.w, h: boyle.h, base: boyle.base, tools: ['line', 'pen'], aria: 'Axes for plotting p against 1/V',
            answer: plotted.map(([x, y]) => `<path d="M${boyle.X(x) - 5} ${boyle.Y(y) - 5} l10 10 m0 -10 l-10 10" stroke="currentColor" stroke-width="2"/>`).join('') + boyle.path([[0, 0], [0.06, 300]])
          }
        },
        {
          label: '(c)', marks: 1, q: 'What does the graph show about the pressure and volume of the air?',
          answer: "A straight line through the origin shows that p ∝ 1/V: at constant temperature the pressure is inversely proportional to the volume (Boyle's law).",
          points: ['p is inversely proportional to V (p ∝ 1/V) [1]']
        },
        {
          label: '(d)', marks: 2, q: 'Use the gradient of the graph to find the number of moles of air in the syringe.',
          answer: 'Gradient = pV = 250 kPa ÷ 0.050 cm⁻³ = 5000 kPa cm³ = 5.0 × 10³ × 10³ Pa × 10⁻⁶ m³ = 5.0 J.<br>n = pV / (RT) = 5.0 / (8.31 × 300) = 2.0 × 10⁻³ mol.',
          points: ['pV = 5.0 J (gradient, in SI units) [1M]', '2.0 × 10⁻³ mol [1A]'], num: { v: 2.006e-3, unit: 'mol', tol: 0.03 }
        }
      ],
      zh: {
        sub: '波義耳定律',
        stem: '一名學生把一些空氣困在連接壓強計的注射器內，慢慢壓縮空氣，使其溫度保持在 27 °C。讀數如下：<br><table class="dtable"><tr><th>V / cm³</th><td>20</td><td>25</td><td>40</td><td>50</td></tr><tr><th>p / kPa</th><td>250</td><td>200</td><td>125</td><td>100</td></tr></table>（R = 8.31 J mol⁻¹ K⁻¹）',
        parts: [
          { q: '計算每個讀數的 1/V。', answer: '1/V = 0.050、0.040、0.025 和 0.020 cm⁻³。', points: ['四個數值都正確 [1]'] },
          { q: '在坐標軸上描繪 p 對 1/V 的關係，並畫出最佳擬合線。', answer: '(0.050, 250)、(0.040, 200)、(0.025, 125) 和 (0.020, 100) 四點都在一條通過原點的直線上。', points: ['四點都描繪正確 [1]', '通過原點的最佳擬合直線 [1]'] },
          { q: '線圖顯示空氣的壓強和體積有甚麼關係？', answer: '通過原點的直線顯示 p ∝ 1/V：在溫度不變時，壓強與體積成反比（波義耳定律）。', points: ['p 與 V 成反比（p ∝ 1/V）[1]'] },
          { q: '利用線圖的斜率，求注射器內空氣的摩爾數。', answer: '斜率 = pV = 250 kPa ÷ 0.050 cm⁻³ = 5000 kPa cm³ = 5.0 × 10³ × 10³ Pa × 10⁻⁶ m³ = 5.0 J。<br>n = pV / (RT) = 5.0 / (8.31 × 300) = 2.0 × 10⁻³ mol。', points: ['pV = 5.0 J（斜率，用國際單位）[1M]', '2.0 × 10⁻³ mol [1A]'] }
        ]
      }
    }
  ]);
})();
