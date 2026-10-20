/* Electricity and Magnetism — additional hand-written questions (E38 onwards). Fields: see questions.js and bank/core.js. */
addBank([
  {
    id: 'E38', topic: 'elec', level: 2, sub: 'Electrostatics',
    stem: 'A polythene rod becomes negatively charged when it is rubbed with a cloth. Why?',
    options: [
      'Electrons are transferred from the cloth to the rod.',
      'Protons are transferred from the rod to the cloth.',
      'Positive charge in the rod is destroyed by friction.',
      'Electrons are created in the rod by friction.'
    ],
    answer: 0,
    explain: 'Only electrons move in charging by friction; protons are held in the nuclei. The rod gains electrons from the cloth, so the rod becomes negative and the cloth becomes equally positive. Charge is neither created nor destroyed.',
    zh: {
      sub: '靜電學',
      stem: '用布擦拭聚乙烯棒後，棒帶負電。為甚麼？',
      options: ['電子由布轉移到棒上。', '質子由棒轉移到布上。', '棒內的正電荷被摩擦消滅了。', '摩擦在棒內產生了電子。'],
      explain: '摩擦起電時只有電子移動；質子被束縛在原子核內。棒從布獲得電子，所以棒帶負電，布則帶等量的正電。電荷既不會產生，也不會消滅。'
    }
  },
  {
    id: 'E39', topic: 'elec', level: 3, sub: 'Electrostatics',
    stem: 'A positively charged rod is brought close to (but does not touch) an uncharged metal sphere on an insulating stand. What happens to the side of the sphere nearer the rod?',
    options: ['It becomes positively charged.', 'It becomes negatively charged.', 'It stays uncharged.', 'The whole sphere gains a net negative charge.'],
    answer: 1,
    explain: 'This is charging by induction. Free electrons in the metal are attracted towards the positive rod, so the near side becomes negative and the far side positive. The sphere as a whole is still neutral, because no charge has been added or removed.',
    zh: {
      sub: '靜電學',
      stem: '把一枝帶正電的棒移近（但不接觸）一個放在絕緣座上、不帶電的金屬球。球較接近棒的一邊會怎樣？',
      options: ['帶正電。', '帶負電。', '保持不帶電。', '整個球獲得淨負電荷。'],
      explain: '這是感應起電。金屬中的自由電子被帶正電的棒吸引，所以近邊帶負電，遠邊帶正電。整個球仍然中性，因為沒有加入或移走電荷。'
    }
  },
  {
    id: 'E40', topic: 'elec', level: 3, sub: 'Electrostatics',
    stem: 'Which of the following statements is/are correct?',
    statements: [
      'Like charges repel each other.',
      'When two objects are charged by rubbing, the total charge is conserved.',
      'Charge flows easily through an insulator.'
    ],
    options: STMT_OPTS,
    answer: 2,
    explain: '(1) ✓ Like charges repel; unlike charges attract.<br>(2) ✓ Electrons are only transferred, so the two objects gain equal and opposite charges.<br>(3) ✗ Insulators have very few free charges, so charge does not flow through them easily — which is why they can be charged by rubbing.',
    zh: {
      sub: '靜電學',
      stem: '下列哪項／哪些敘述是正確的？',
      statements: ['同種電荷互相排斥。', '兩個物體互相摩擦起電時，總電荷守恆。', '電荷容易在絕緣體中流動。'],
      explain: '(1) ✓ 同種電荷互相排斥；異種電荷互相吸引。<br>(2) ✓ 電子只是轉移了，所以兩個物體獲得等量而異號的電荷。<br>(3) ✗ 絕緣體的自由電荷極少，電荷不易在其中流動 — 這正是絕緣體能摩擦起電的原因。'
    }
  },
  {
    id: 'E41', topic: 'elec', level: 3, sub: 'Electric field',
    stem: 'The electric field strength at a distance r from a point charge is E₀. What is the field strength at a distance 3r from the charge?',
    options: ['3E₀', 'E₀ / 3', 'E₀ / 6', 'E₀ / 9'],
    answer: 3,
    explain: 'E = Q / (4πε₀ r²), so E ∝ 1/r². Tripling the distance divides the field strength by 3² = 9.<br>E₀ / 3 wrongly takes E ∝ 1/r.',
    zh: {
      sub: '電場',
      stem: '在距點電荷 r 處的電場強度為 E₀。在距該電荷 3r 處的電場強度是多少？',
      explain: 'E = Q / (4πε₀ r²)，所以 E ∝ 1/r²。距離變為三倍，電場強度變為 1/3² = 1/9。<br>E₀ / 3 錯誤地取 E ∝ 1/r。'
    }
  },
  {
    id: 'E42', topic: 'elec', level: 3, sub: 'Electric field',
    stem: 'Two parallel metal plates are connected to a d.c. supply. Which of the following statements about the electric field between the plates (away from their edges) is/are correct?',
    statements: [
      'The field is uniform.',
      'The field lines are perpendicular to the plates, pointing from the positive plate to the negative plate.',
      'The field is stronger near the positive plate than near the negative plate.'
    ],
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: 0,
    explain: '(1) ✓ (2) ✓ Between parallel plates the field lines are parallel, equally spaced and perpendicular to the plates, so E = V/d is the same everywhere.<br>(3) ✗ A uniform field has the same strength at every point.',
    zh: {
      sub: '電場',
      stem: '兩塊平行金屬板連接到直流電源。下列有關兩板之間（遠離板邊）電場的敘述，哪項／哪些是正確的？',
      statements: ['電場是均勻的。', '電場線垂直於金屬板，由正板指向負板。', '近正板處的電場比近負板處強。'],
      explain: '(1) ✓ (2) ✓ 平行板之間的電場線互相平行、間距相等並垂直於金屬板，所以 E = V/d 處處相同。<br>(3) ✗ 均勻電場在每一點的強度都相同。'
    }
  },
  {
    id: 'E43', topic: 'elec', level: 3, sub: 'Electric potential',
    stem: 'How much work is done in moving a charge of 2.0 μC through a potential difference of 300 V?',
    options: ['6.7 × 10⁻⁹ J', '6.0 × 10⁻⁴ J', '150 J', '600 J'],
    answer: 1,
    explain: 'W = QV = 2.0 × 10⁻⁶ × 300 = 6.0 × 10⁻⁴ J.<br>600 J forgets that 1 μC = 10⁻⁶ C.',
    zh: {
      sub: '電勢',
      stem: '把 2.0 μC 的電荷移過 300 V 的電勢差，需做多少功？',
      explain: 'W = QV = 2.0 × 10⁻⁶ × 300 = 6.0 × 10⁻⁴ J。<br>600 J 忘記了 1 μC = 10⁻⁶ C。'
    }
  },
  {
    id: 'E44', topic: 'elec', level: 3, sub: 'Electric potential',
    stem: 'An electron is accelerated from rest through a potential difference of 500 V. How much kinetic energy does it gain?<br>(Charge of electron = 1.60 × 10⁻¹⁹ C)',
    options: ['3.2 × 10⁻²² J', '1.6 × 10⁻¹⁹ J', '8.0 × 10⁻¹⁷ J', '500 J'],
    answer: 2,
    explain: 'Gain in KE = work done by the field = eV = 1.60 × 10⁻¹⁹ × 500 = 8.0 × 10⁻¹⁷ J.<br>This is 500 eV: one electronvolt is the energy gained by an electron through 1 V.',
    zh: {
      sub: '電勢',
      stem: '一個電子由靜止開始經 500 V 的電勢差加速。它獲得多少動能？<br>（電子電荷 = 1.60 × 10⁻¹⁹ C）',
      explain: '獲得的動能 = 電場所做的功 = eV = 1.60 × 10⁻¹⁹ × 500 = 8.0 × 10⁻¹⁷ J。<br>即 500 eV：一電子伏特是電子經 1 V 加速所獲得的能量。'
    }
  },
  {
    id: 'E45', topic: 'elec', level: 4, sub: 'Electric field',
    stem: 'An electron travels horizontally into the space between two horizontal parallel plates. The upper plate is positive and the lower plate is negative. Which way is the electron deflected?',
    options: ['Downwards', 'Into the page', 'It is not deflected.', 'Upwards, towards the positive plate'],
    answer: 3,
    explain: 'The field points from the positive (upper) plate to the negative (lower) plate, i.e. downwards. An electron is negative, so the force on it is opposite to the field: upwards. It follows a parabolic path towards the positive plate.',
    zh: {
      sub: '電場',
      stem: '一個電子水平地進入兩塊水平平行金屬板之間的空間。上板帶正電，下板帶負電。電子向哪個方向偏轉？',
      options: ['向下', '射入紙面', '不會偏轉。', '向上，即偏向正板'],
      explain: '電場由正（上）板指向負（下）板，即向下。電子帶負電，所受的力與電場方向相反：向上。它沿拋物線路徑偏向正板。'
    }
  },
  {
    id: 'E46', topic: 'elec', level: 3, sub: 'I–V characteristics',
    stem: 'For which of the following is the current–voltage (I–V) graph a straight line passing through the origin?',
    options: ['A metal resistor kept at constant temperature', 'A filament lamp', 'A semiconductor diode', 'A thermistor that warms up as current flows'],
    answer: 0,
    explain: 'A metal at constant temperature obeys Ohm\'s law: I ∝ V, so its resistance is constant. The filament lamp\'s resistance rises as it heats up; a diode conducts mainly in one direction; a thermistor\'s resistance changes with temperature.',
    zh: {
      sub: 'I–V 特性',
      stem: '下列哪一項的電流－電壓（I–V）線圖是一條通過原點的直線？',
      options: ['保持恆溫的金屬電阻器', '燈絲燈泡', '半導體二極管', '電流通過時會變暖的熱敏電阻器'],
      explain: '恆溫的金屬遵從歐姆定律：I ∝ V，所以電阻不變。燈絲燈泡的電阻隨受熱而增加；二極管主要只向一個方向導電；熱敏電阻器的電阻隨溫度改變。'
    }
  },
  {
    id: 'E47', topic: 'elec', level: 4, sub: 'I–V characteristics',
    stem: 'The I–V graph of a filament lamp curves so that the current rises more slowly at higher voltages. Why?',
    options: [
      'The filament becomes shorter as it warms up.',
      'The temperature of the filament rises, and the resistance of the metal increases.',
      'Fewer electrons are available at high voltage.',
      'The lamp converts more energy into light.'
    ],
    answer: 1,
    explain: 'A larger current heats the filament. In a hotter metal the ions vibrate more and the electrons collide with them more often, so the resistance increases. Each extra volt then produces a smaller increase in current.',
    zh: {
      sub: 'I–V 特性',
      stem: '燈絲燈泡的 I–V 線圖是彎曲的，在較高電壓時電流上升得較慢。為甚麼？',
      options: ['燈絲變暖時會變短。', '燈絲溫度上升，金屬的電阻增加。', '在高電壓下可用的電子較少。', '燈泡把較多能量轉化為光。'],
      explain: '較大的電流使燈絲變熱。較熱的金屬中離子振動更劇烈，電子與它們碰撞更頻繁，所以電阻增加。每增加一伏特，電流的增加便較少。'
    }
  },
  {
    id: 'E48', topic: 'elec', level: 4, sub: 'I–V characteristics',
    stem: 'Which of the following statements about a semiconductor diode is/are correct?',
    statements: [
      'It allows current to flow easily in one direction only.',
      'It has a very high resistance in the reverse direction.',
      'It obeys Ohm\'s law.'
    ],
    options: STMT_OPTS,
    answer: 2,
    explain: '(1) ✓ (2) ✓ In the forward direction it conducts once the p.d. exceeds about 0.6 V; in reverse almost no current flows.<br>(3) ✗ Its I–V graph is not a straight line through the origin, so it does not obey Ohm\'s law.',
    zh: {
      sub: 'I–V 特性',
      stem: '下列有關半導體二極管的敘述，哪項／哪些是正確的？',
      statements: ['它只讓電流容易地向一個方向流動。', '它在反向時的電阻極高。', '它遵從歐姆定律。'],
      explain: '(1) ✓ (2) ✓ 正向時，電勢差超過約 0.6 V 便導電；反向時幾乎沒有電流。<br>(3) ✗ 它的 I–V 線圖並非通過原點的直線，所以不遵從歐姆定律。'
    }
  },
  {
    id: 'E49', topic: 'elec', level: 2, sub: 'Resistance',
    stem: 'Three 6.0 Ω resistors are connected in parallel. What is their combined resistance?',
    options: ['0.17 Ω', '0.50 Ω', '1.0 Ω', '2.0 Ω'],
    answer: 3,
    explain: '1/R = 1/6 + 1/6 + 1/6 = 3/6 ⇒ R = 2.0 Ω.<br>0.50 Ω is 1/R, forgetting to take the reciprocal. The combined resistance of resistors in parallel is always less than the smallest one.',
    zh: {
      sub: '電阻',
      stem: '三個 6.0 Ω 的電阻器並聯。它們的總電阻是多少？',
      explain: '1/R = 1/6 + 1/6 + 1/6 = 3/6 ⇒ R = 2.0 Ω。<br>0.50 Ω 是 1/R，忘記了取倒數。並聯電阻器的總電阻總是小於其中最小的一個。'
    }
  },
  {
    id: 'E50', topic: 'elec', level: 3, sub: 'Circuits',
    stem: 'Several resistors are connected in parallel across a battery. Which of the following statements is/are correct?',
    statements: [
      'The potential difference across each branch is the same.',
      'The total current equals the sum of the branch currents.',
      'The combined resistance is larger than the largest single resistance.'
    ],
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: 0,
    explain: '(1) ✓ Each branch is connected directly across the same two points.<br>(2) ✓ Charge is conserved at the junctions.<br>(3) ✗ Adding branches gives the current more paths, so the combined resistance is smaller than the smallest resistor.',
    zh: {
      sub: '電路',
      stem: '數個電阻器並聯在一個電池兩端。下列哪項／哪些敘述是正確的？',
      statements: ['每條支路兩端的電勢差相同。', '總電流等於各支路電流之和。', '總電阻大於其中最大的電阻。'],
      explain: '(1) ✓ 每條支路都直接接在相同的兩點之間。<br>(2) ✓ 電荷在接點守恆。<br>(3) ✗ 增加支路給電流更多通路，所以總電阻比最小的電阻器還要小。'
    }
  },
  {
    id: 'E51', topic: 'elec', level: 4, sub: 'Potential divider',
    stem: 'A light-dependent resistor (LDR) is connected in series with a fixed resistor across a battery, and a voltmeter is connected across the fixed resistor. The light falling on the LDR becomes brighter. What happens to the voltmeter reading?',
    options: ['It decreases.', 'It increases.', 'It stays the same.', 'It falls to zero.'],
    answer: 1,
    explain: 'Brighter light lowers the resistance of the LDR. The fixed resistor now has a larger share of the total resistance, so it takes a larger share of the battery\'s p.d. (Equivalently, the current increases, so IR across the fixed resistor increases.)',
    zh: {
      sub: '分壓器',
      stem: '一個光敏電阻器（LDR）與一個定值電阻器串聯接在電池兩端，伏特計接在定值電阻器兩端。照射 LDR 的光變強。伏特計的讀數會怎樣？',
      options: ['減小。', '增加。', '不變。', '降至零。'],
      explain: '光較強時 LDR 的電阻減小。定值電阻器佔總電阻的比例增加，所以分得電池電勢差的比例亦增加。（亦即電流增加，定值電阻器兩端的 IR 增加。）'
    }
  },
  {
    id: 'E52', topic: 'elec', level: 4, sub: 'Thermistors',
    stem: 'A thermistor whose resistance falls as its temperature rises is connected in series with a lamp and a battery. The thermistor is warmed. What happens?',
    options: [
      'Its resistance increases and the lamp becomes dimmer.',
      'The current decreases.',
      'Its resistance decreases, the current increases and the lamp becomes brighter.',
      'Nothing changes, because the battery p.d. is fixed.'
    ],
    answer: 2,
    explain: 'For this (NTC) thermistor, a higher temperature releases more charge carriers, so its resistance falls. The total resistance of the series circuit falls, the current rises, and the lamp becomes brighter.',
    zh: {
      sub: '熱敏電阻器',
      stem: '一個電阻隨溫度上升而減小的熱敏電阻器，與一盞燈和一個電池串聯。把熱敏電阻器加熱，會發生甚麼？',
      options: ['它的電阻增加，燈變暗。', '電流減小。', '它的電阻減小，電流增加，燈變亮。', '沒有變化，因為電池的電勢差固定。'],
      explain: '對這種（負溫度係數）熱敏電阻器，溫度較高時釋出更多載流子，所以電阻減小。串聯電路的總電阻減小，電流增加，燈變亮。'
    }
  },
  {
    id: 'E53', topic: 'elec', level: 2, sub: 'Meters',
    stem: 'What are the resistances of an ideal ammeter and an ideal voltmeter?',
    options: [
      'Both zero',
      'Both infinite',
      'Ammeter infinite; voltmeter zero',
      'Ammeter zero; voltmeter infinite'
    ],
    answer: 3,
    explain: 'An ammeter is connected in series, so it should add no resistance to the circuit: ideally zero. A voltmeter is connected in parallel, so it should draw no current: ideally infinite resistance. Either way, the meter does not change what it measures.',
    zh: {
      sub: '電錶',
      stem: '理想的安培計和理想的伏特計的電阻分別是多少？',
      options: ['兩者都是零', '兩者都是無限大', '安培計無限大；伏特計零', '安培計零；伏特計無限大'],
      explain: '安培計串聯在電路中，不應增加電路的電阻：理想值為零。伏特計並聯，不應抽取電流：理想電阻為無限大。這樣電錶便不會改變它所量度的量。'
    }
  },
  {
    id: 'E54', topic: 'elec', level: 4, sub: 'Internal resistance',
    stem: 'A graph of the terminal p.d. V of a battery against the current I it supplies is a straight line. V is 6.0 V when I = 0, and falls to 0 when I = 3.0 A. What are the e.m.f. and internal resistance of the battery?',
    options: ['e.m.f. 6.0 V; internal resistance 2.0 Ω', 'e.m.f. 6.0 V; internal resistance 0.5 Ω', 'e.m.f. 3.0 V; internal resistance 2.0 Ω', 'e.m.f. 3.0 V; internal resistance 0.5 Ω'],
    answer: 0,
    explain: 'V = ε − Ir. When I = 0, V = ε = 6.0 V (the intercept on the V-axis).<br>The magnitude of the gradient is r: 6.0 / 3.0 = 2.0 Ω. (3.0 A is the short-circuit current ε / r.)<br>0.5 Ω inverts the gradient.',
    zh: {
      sub: '內阻',
      stem: '電池的端電壓 V 對其輸出電流 I 的線圖是一條直線。I = 0 時 V 為 6.0 V，I = 3.0 A 時 V 降至 0。電池的電動勢和內阻分別是多少？',
      options: ['電動勢 6.0 V；內阻 2.0 Ω', '電動勢 6.0 V；內阻 0.5 Ω', '電動勢 3.0 V；內阻 2.0 Ω', '電動勢 3.0 V；內阻 0.5 Ω'],
      explain: 'V = ε − Ir。I = 0 時 V = ε = 6.0 V（V 軸上的截距）。<br>斜率的大小就是 r：6.0 / 3.0 = 2.0 Ω。（3.0 A 是短路電流 ε / r。）<br>0.5 Ω 把斜率倒轉了。'
    }
  },
  {
    id: 'E55', topic: 'elec', level: 2, sub: 'Electrical power',
    stem: 'A current of 2.0 A flows through a 5.0 Ω resistor. What power is dissipated in the resistor?',
    options: ['10 W', '20 W', '40 W', '50 W'],
    answer: 1,
    explain: 'P = I²R = 2.0² × 5.0 = 20 W.<br>10 W is IR, which is the p.d. in volts, not the power.',
    zh: {
      sub: '電功率',
      stem: '2.0 A 的電流流經一個 5.0 Ω 的電阻器。電阻器消耗的功率是多少？',
      explain: 'P = I²R = 2.0² × 5.0 = 20 W。<br>10 W 其實是 IR，即以伏特計的電勢差，並非功率。'
    }
  },
  {
    id: 'E56', topic: 'elec', level: 4, sub: 'Electrical power',
    stem: 'A "220 V, 60 W" lamp and a "220 V, 100 W" lamp are connected in series across a 220 V supply. Assuming their resistances are constant, which lamp is brighter?',
    options: ['The 100 W lamp', 'Both are equally bright.', 'The 60 W lamp', 'Neither lights up.'],
    answer: 2,
    explain: 'R = V² / P: the 60 W lamp has R = 220² / 60 = 807 Ω and the 100 W lamp R = 484 Ω.<br>In series the same current flows, so P = I²R is larger for the larger resistance: the 60 W lamp is brighter. (In parallel at 220 V, the 100 W lamp would be brighter.)',
    zh: {
      sub: '電功率',
      stem: '把一盞「220 V, 60 W」的燈和一盞「220 V, 100 W」的燈串聯接到 220 V 電源。假設它們的電阻不變，哪一盞燈較亮？',
      options: ['100 W 的燈', '兩盞一樣亮。', '60 W 的燈', '兩盞都不亮。'],
      explain: 'R = V² / P：60 W 燈的 R = 220² / 60 = 807 Ω，100 W 燈的 R = 484 Ω。<br>串聯時電流相同，所以電阻較大的 P = I²R 較大：60 W 的燈較亮。（若在 220 V 下並聯，則 100 W 的燈較亮。）'
    }
  },
  {
    id: 'E57', topic: 'elec', level: 2, sub: 'Cost of electricity',
    stem: 'How many joules are there in 1 kW h?',
    options: ['1000 J', '3600 J', '6.0 × 10⁴ J', '3.6 × 10⁶ J'],
    answer: 3,
    explain: '1 kW h is the energy transferred at 1000 W for one hour (3600 s): 1000 × 3600 = 3.6 × 10⁶ J.',
    zh: {
      sub: '電費',
      stem: '1 kW h 等於多少焦耳？',
      explain: '1 kW h 是以 1000 W 的功率運作一小時（3600 s）所轉移的能量：1000 × 3600 = 3.6 × 10⁶ J。'
    }
  },
  {
    id: 'E58', topic: 'elec', level: 2, sub: 'Domestic electricity',
    stem: 'In a three-pin plug, to which wire is the fuse connected?',
    options: ['The live wire (brown)', 'The neutral wire (blue)', 'The earth wire (green and yellow)', 'All three wires'],
    answer: 0,
    explain: 'The fuse is in the live wire, so that when it blows the appliance is cut off from the high-potential live wire and is safe to touch.',
    zh: {
      sub: '家居用電',
      stem: '三腳插頭中的保險絲連接在哪一條電線上？',
      options: ['火線（棕色）', '中性線（藍色）', '地線（綠黃色）', '三條電線'],
      explain: '保險絲接在火線上，熔斷時電器便與高電勢的火線隔斷，觸摸時才安全。'
    }
  },
  {
    id: 'E59', topic: 'elec', level: 4, sub: 'Domestic electricity',
    stem: 'In a correctly wired and earthed appliance with a metal casing, a fault makes the live wire touch the casing. What happens?',
    options: [
      'The casing becomes live and a user touching it gets a shock.',
      'A large current flows through the earth wire and the fuse blows.',
      'Nothing happens, because the appliance is switched on.',
      'The appliance works better because of the extra path.'
    ],
    answer: 1,
    explain: 'The earth wire gives a very low-resistance path from the casing to the ground. A large current flows through it, which blows the fuse (or trips the breaker) and disconnects the live supply, so the casing does not stay at a dangerous potential.',
    zh: {
      sub: '家居用電',
      stem: '一件接線正確並已接地、有金屬外殼的電器發生故障，火線碰到外殼。會發生甚麼？',
      options: ['外殼帶電，觸摸它的使用者會觸電。', '大電流經地線流走，保險絲熔斷。', '沒有事發生，因為電器已開啟。', '多了一條通路，電器運作得更好。'],
      explain: '地線為外殼提供一條電阻極低、通往大地的通路。大電流經它流走，令保險絲熔斷（或斷路器跳掣），切斷火線電源，所以外殼不會一直處於危險的電勢。'
    }
  },
  {
    id: 'E60', topic: 'elec', level: 3, sub: 'Domestic electricity',
    stem: 'Which of the following statements is/are correct?',
    statements: [
      'A fuse melts when the current through it exceeds its rating for long enough.',
      'A double-insulated appliance does not need an earth wire.',
      'A fuse should be connected in the neutral wire.'
    ],
    options: STMT_OPTS,
    answer: 2,
    explain: '(1) ✓ The fuse wire heats up and melts, breaking the circuit.<br>(2) ✓ Its casing is made of an insulator, and live parts cannot touch any part the user can touch.<br>(3) ✗ The fuse must be in the live wire.',
    zh: {
      sub: '家居用電',
      stem: '下列哪項／哪些敘述是正確的？',
      statements: ['電流超過保險絲的額定值一段時間，保險絲便會熔斷。', '雙重絕緣的電器不需要地線。', '保險絲應連接在中性線上。'],
      explain: '(1) ✓ 保險絲受熱熔斷，令電路斷開。<br>(2) ✓ 它的外殼由絕緣體製成，帶電部分不會碰到使用者可接觸的部分。<br>(3) ✗ 保險絲必須接在火線上。'
    }
  },
  {
    id: 'E61', topic: 'elec', level: 3, sub: 'Domestic electricity',
    stem: 'A 1200 W kettle and an 800 W toaster are both plugged into one adaptor and used at the same time on a 220 V supply. What total current flows through the adaptor?',
    options: ['3.6 A', '5.5 A', '6.8 A', '9.1 A'],
    answer: 3,
    explain: 'The appliances are in parallel, so their powers add: 1200 + 800 = 2000 W.<br>I = P / V = 2000 / 220 = 9.1 A.<br>Plugging several high-power appliances into one adaptor can overload the socket — a common cause of electrical fires.',
    zh: {
      sub: '家居用電',
      stem: '一個 1200 W 的電水壺和一個 800 W 的多士爐插在同一個轉插上，在 220 V 電源下同時使用。流經轉插的總電流是多少？',
      explain: '電器並聯，所以功率相加：1200 + 800 = 2000 W。<br>I = P / V = 2000 / 220 = 9.1 A。<br>把多件高功率電器插在同一轉插上可能令插座過載 — 這是電線起火的常見原因。'
    }
  },
  {
    id: 'E62', topic: 'elec', level: 2, sub: 'Magnetic field of a current',
    stem: 'The right-hand grip rule is used to find the direction of',
    options: [
      'the magnetic field around a current-carrying wire or solenoid.',
      'the force on a current-carrying wire in a magnetic field.',
      'the induced current in a moving conductor.',
      'the motion of electrons in a wire.'
    ],
    answer: 0,
    explain: 'Grip the wire with the right hand, thumb along the conventional current: the fingers curl in the direction of the magnetic field lines. (For a solenoid, fingers along the current in the turns give the thumb pointing to the N end.) The force on a current is given by Fleming\'s left-hand rule.',
    zh: {
      sub: '電流的磁場',
      stem: '右手螺旋定則用來找出',
      options: ['載流導線或螺線管周圍磁場的方向。', '磁場中載流導線所受的力的方向。', '移動導體中感生電流的方向。', '導線中電子運動的方向。'],
      explain: '用右手握着導線，拇指指向常規電流方向：手指彎曲的方向就是磁場線的方向。（對螺線管，手指沿線圈中的電流方向，拇指便指向 N 極端。）電流所受的力則由弗林明左手定則求出。'
    }
  },
  {
    id: 'E63', topic: 'elec', level: 3, sub: 'Magnetic field of a current',
    stem: 'Which of the following would increase the magnetic field strength inside a long solenoid?',
    statements: [
      'Stretching the solenoid to a greater length, keeping the same number of turns',
      'Decreasing the current',
      'Inserting a soft-iron core'
    ],
    options: STMT_OPTS,
    answer: 1,
    explain: 'B = μ₀NI / l for an air-cored solenoid.<br>(1) ✗ A larger l with the same N means fewer turns per metre, so B decreases.<br>(2) ✗ B ∝ I.<br>(3) ✓ Soft iron becomes strongly magnetized and greatly increases the field.',
    zh: {
      sub: '電流的磁場',
      stem: '下列哪項會增加長螺線管內的磁場強度？',
      statements: ['匝數不變而把螺線管拉長', '減小電流', '插入軟鐵心'],
      explain: '空心螺線管的 B = μ₀NI / l。<br>(1) ✗ N 不變而 l 增加，即每米匝數減少，所以 B 減小。<br>(2) ✗ B ∝ I。<br>(3) ✓ 軟鐵被強烈磁化，大大增強磁場。'
    }
  },
  {
    id: 'E64', topic: 'elec', level: 4, sub: 'Magnetic force',
    stem: 'A straight wire 0.50 m long carrying a current of 4.0 A lies at 30° to a uniform magnetic field of 0.20 T. What is the magnetic force on the wire?',
    options: ['0.050 N', '0.10 N', '0.20 N', '0.40 N'],
    answer: 2,
    explain: 'F = BIL sin θ = 0.20 × 4.0 × 0.50 × sin 30° = 0.40 × 0.5 = 0.20 N.<br>0.40 N assumes the wire is perpendicular to the field. A wire parallel to the field feels no force.',
    zh: {
      sub: '磁力',
      stem: '一條長 0.50 m、載有 4.0 A 電流的直導線與 0.20 T 的均勻磁場成 30°。導線所受的磁力是多少？',
      explain: 'F = BIL sin θ = 0.20 × 4.0 × 0.50 × sin 30° = 0.40 × 0.5 = 0.20 N。<br>0.40 N 假設了導線與磁場垂直。與磁場平行的導線不受力。'
    }
  },
  {
    id: 'E65', topic: 'elec', level: 4, sub: 'Motor effect',
    stem: 'Which of the following would make a simple d.c. motor turn faster (for the same load)?',
    statements: ['Reversing the direction of the current', 'Increasing the current', 'Using a stronger magnet'],
    options: STMT_OPTS,
    answer: 3,
    explain: 'The turning effect on the coil depends on BIN (and the coil\'s area).<br>(1) ✗ Reversing the current only reverses the direction of rotation.<br>(2) ✓ (3) ✓ A larger current or a stronger field gives a larger force on each side of the coil.',
    zh: {
      sub: '電動機效應',
      stem: '在負載相同的情況下，下列哪項會使簡單直流電動機轉得更快？',
      statements: ['把電流方向反轉', '增加電流', '使用較強的磁鐵'],
      explain: '線圈所受的轉動效應取決於 BIN（及線圈面積）。<br>(1) ✗ 反轉電流只會反轉轉動方向。<br>(2) ✓ (3) ✓ 較大的電流或較強的磁場使線圈每邊所受的力較大。'
    }
  },
  {
    id: 'E66', topic: 'elec', level: 4, sub: 'Magnetic force on moving charges',
    stem: 'An electron enters a uniform magnetic field moving perpendicular to the field lines. Neglecting gravity, how does it move in the field?',
    options: ['In a circle at constant speed', 'In a straight line while speeding up', 'In a straight line at constant speed', 'Along a parabola, like a projectile'],
    answer: 0,
    explain: 'The magnetic force BQv is always perpendicular to the velocity, so it changes the direction of motion but does no work: the speed stays constant. A constant-size force always at right angles to the velocity produces circular motion.',
    zh: {
      sub: '磁場對移動電荷的力',
      stem: '一個電子垂直於磁場線進入均勻磁場。忽略重力，它在磁場中怎樣運動？',
      options: ['以恆定速率作圓周運動', '沿直線加速運動', '以恆定速率沿直線運動', '像拋體一樣沿拋物線運動'],
      explain: '磁力 BQv 總是垂直於速度，所以它改變運動方向但不做功：速率保持不變。大小不變、總是與速度垂直的力產生圓周運動。'
    }
  },
  {
    id: 'E67', topic: 'elec', level: 5, sub: 'Magnetic force on moving charges',
    stem: 'A proton and an electron enter the same uniform magnetic field with the same speed, both moving perpendicular to the field. Which particle\'s path curves more sharply, and do they curve the same way?',
    options: [
      'The proton; they curve the same way.',
      'The electron; they curve in opposite directions.',
      'The proton; they curve in opposite directions.',
      'Their paths have the same radius.'
    ],
    answer: 1,
    explain: 'Both carry charge of size e, so at the same speed they feel the same size of force BQv. The electron\'s mass is about 1/1840 of the proton\'s, so its acceleration is far larger and its path much more sharply curved (r = mv / BQ). Their charges have opposite signs, so the forces — and the curving — are in opposite directions.',
    zh: {
      sub: '磁場對移動電荷的力',
      stem: '一個質子和一個電子以相同的速率垂直於磁場進入同一個均勻磁場。哪個粒子的路徑彎曲得較厲害？兩者是否向同一方向彎曲？',
      options: ['質子；兩者向同一方向彎曲。', '電子；兩者向相反方向彎曲。', '質子；兩者向相反方向彎曲。', '兩者路徑的半徑相同。'],
      explain: '兩者的電荷大小都是 e，速率相同時所受的力 BQv 大小相同。電子的質量約為質子的 1/1840，所以加速度大得多，路徑彎曲得厲害得多（r = mv / BQ）。兩者電荷異號，所以受力 — 以及彎曲 — 方向相反。'
    }
  },
  {
    id: 'E68', topic: 'elec', level: 3, sub: 'Electromagnetic induction',
    stem: 'A bar magnet is pushed into a coil connected to a galvanometer. The magnet is now pushed in faster. What happens?',
    options: ['A smaller e.m.f. is induced.', 'There is no change.', 'A larger e.m.f. is induced.', 'The induced current reverses direction.'],
    answer: 2,
    explain: 'By Faraday\'s law, the induced e.m.f. is proportional to the rate of change of flux linkage. Moving the magnet faster changes the flux more quickly, so a larger e.m.f. (and current) is induced, for a shorter time. The direction depends on whether the magnet moves in or out, not on its speed.',
    zh: {
      sub: '電磁感應',
      stem: '把一根條形磁鐵推入一個連接電流計的線圈。現在把磁鐵更快地推入。會發生甚麼？',
      options: ['感生的電動勢較小。', '沒有變化。', '感生的電動勢較大。', '感生電流的方向反轉。'],
      explain: '根據法拉第定律，感生電動勢與磁通量鏈的變化率成正比。磁鐵移動得較快，磁通量變化較快，所以感生較大的電動勢（和電流），但持續時間較短。方向取決於磁鐵是移入還是移出，與速率無關。'
    }
  },
  {
    id: 'E69', topic: 'elec', level: 4, sub: "Lenz's law",
    stem: "Which of the following statements about Lenz's law is/are correct?",
    statements: [
      'The induced current always flows clockwise.',
      'The induced current flows in a direction that opposes the change producing it.',
      'Lenz\'s law is a consequence of the conservation of energy.'
    ],
    options: STMT_OPTS,
    answer: 3,
    explain: '(1) ✗ The direction depends on the change, e.g. on whether a magnet approaches or leaves.<br>(2) ✓ This is the statement of Lenz\'s law.<br>(3) ✓ If the induced current helped the change, energy would be produced from nothing; work must be done against the opposing force.',
    zh: {
      sub: '楞次定律',
      stem: '下列有關楞次定律的敘述，哪項／哪些是正確的？',
      statements: ['感生電流總是順時針方向流動。', '感生電流的方向總是阻礙產生它的變化。', '楞次定律是能量守恆的結果。'],
      explain: '(1) ✗ 方向取決於變化，例如磁鐵是接近還是離開。<br>(2) ✓ 這就是楞次定律的內容。<br>(3) ✓ 若感生電流助長變化，便會無中生有地產生能量；必須克服阻力做功。'
    }
  },
  {
    id: 'E70', topic: 'elec', level: 4, sub: 'Generators',
    stem: 'The coil of a simple a.c. generator is made to rotate twice as fast. What happens to its output?',
    options: [
      'Both the peak e.m.f. and the frequency double.',
      'Only the peak e.m.f. doubles.',
      'Only the frequency doubles.',
      'Neither changes.'
    ],
    answer: 0,
    explain: 'Each revolution gives one cycle, so doubling the rotation rate doubles the frequency. The flux linkage also changes twice as fast, so by Faraday\'s law the peak e.m.f. doubles too.',
    zh: {
      sub: '發電機',
      stem: '使簡單交流發電機的線圈以兩倍的速率轉動。它的輸出會怎樣？',
      options: ['峰值電動勢和頻率都加倍。', '只有峰值電動勢加倍。', '只有頻率加倍。', '兩者都不變。'],
      explain: '每轉一圈產生一個週期，所以轉速加倍，頻率便加倍。磁通量鏈的變化亦快了一倍，所以根據法拉第定律，峰值電動勢亦加倍。'
    }
  },
  {
    id: 'E71', topic: 'elec', level: 3, sub: 'Alternating current',
    stem: 'A sinusoidal a.c. voltage has a peak value of 340 V. What is its r.m.s. value?',
    options: ['170 V', '240 V', '340 V', '481 V'],
    answer: 1,
    explain: 'V<sub>rms</sub> = V₀ / √2 = 340 / 1.414 = 240 V.<br>481 V multiplies by √2; 170 V divides by 2.',
    zh: {
      sub: '交流電',
      stem: '一個正弦交流電壓的峰值為 340 V。它的方均根值是多少？',
      explain: 'V<sub>rms</sub> = V₀ / √2 = 340 / 1.414 = 240 V。<br>481 V 是乘以 √2；170 V 是除以 2。'
    }
  },
  {
    id: 'E72', topic: 'elec', level: 4, sub: 'Transformers',
    stem: 'An ideal transformer steps 220 V down to 11 V. Its primary coil has 2000 turns. How many turns does the secondary coil have?',
    options: ['10', '50', '100', '40000'],
    answer: 2,
    explain: 'V<sub>s</sub> / V<sub>p</sub> = N<sub>s</sub> / N<sub>p</sub> ⇒ N<sub>s</sub> = 2000 × 11 / 220 = 100.<br>40 000 inverts the ratio, which would step the voltage up.',
    zh: {
      sub: '變壓器',
      stem: '一個理想變壓器把 220 V 降至 11 V，原線圈有 2000 匝。副線圈有多少匝？',
      explain: 'V<sub>s</sub> / V<sub>p</sub> = N<sub>s</sub> / N<sub>p</sub> ⇒ N<sub>s</sub> = 2000 × 11 / 220 = 100。<br>40 000 把比例倒轉了，那會把電壓升高。'
    }
  },
  {
    id: 'E73', topic: 'elec', level: 4, sub: 'Transformers',
    stem: 'Why does a transformer not work with a steady d.c. supply?',
    options: [
      'The d.c. current would be too large.',
      'The coils would overheat.',
      'The iron core would lose its magnetism.',
      'A steady current gives a constant flux, so no e.m.f. is induced in the secondary coil.'
    ],
    answer: 3,
    explain: 'A transformer relies on electromagnetic induction: the primary current must keep changing so that the flux in the core, and hence through the secondary, keeps changing. A steady current makes a steady flux and induces nothing (apart from a brief pulse when it is switched on or off).',
    zh: {
      sub: '變壓器',
      stem: '為甚麼變壓器不能用穩定的直流電源運作？',
      options: ['直流電流會太大。', '線圈會過熱。', '鐵心會失去磁性。', '穩定的電流產生恆定的磁通量，副線圈中不會感生電動勢。'],
      explain: '變壓器依靠電磁感應：原線圈的電流必須不斷改變，鐵心以至副線圈的磁通量才會不斷改變。穩定的電流產生穩定的磁通量，便不會感生任何電動勢（除了開關一刻的短暫脈衝）。'
    }
  },
  {
    id: 'E74', topic: 'elec', level: 4, sub: 'Power transmission',
    stem: 'Electrical power is transmitted over long distances at very high voltages. Which of the following explain(s) why?',
    statements: [
      'For the same power, a higher voltage means a smaller current in the cables.',
      'A smaller current means less energy is wasted as heat in the cables.',
      'High voltages are safer to use in homes.'
    ],
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: 0,
    explain: '(1) ✓ P = IV, so I = P / V.<br>(2) ✓ Power loss = I²R, so reducing I by a factor k cuts the loss by k².<br>(3) ✗ High voltages are dangerous; transformers step the voltage down before it reaches homes.',
    zh: {
      sub: '電力傳輸',
      stem: '電力以極高的電壓作長距離傳輸。下列哪項／哪些可解釋原因？',
      statements: ['功率相同時，電壓越高，電纜中的電流越小。', '電流越小，電纜中以熱形式浪費的能量越少。', '高電壓在家中使用較安全。'],
      explain: '(1) ✓ P = IV，所以 I = P / V。<br>(2) ✓ 功率損耗 = I²R，所以電流減至 1/k，損耗便減至 1/k²。<br>(3) ✗ 高電壓很危險；電力送到家居前會先由變壓器降壓。'
    }
  },
  {
    id: 'E75', topic: 'elec', level: 5, sub: 'Power transmission',
    stem: '20 kW of electrical power is to be sent through cables of total resistance 0.50 Ω. What percentage of the power is lost in the cables if it is sent at 2000 V?',
    options: ['0.025 %', '0.25 %', '2.5 %', '25 %'],
    answer: 1,
    explain: 'I = P / V = 20 000 / 2000 = 10 A. Power lost = I²R = 10² × 0.50 = 50 W.<br>Percentage = 50 / 20 000 × 100 % = 0.25 %.<br>At 200 V the current would be 100 A and the loss 5000 W = 25 % — ten times the voltage cuts the loss a hundredfold.',
    zh: {
      sub: '電力傳輸',
      stem: '要經總電阻為 0.50 Ω 的電纜輸送 20 kW 的電功率。若以 2000 V 輸送，電纜中損耗的功率佔百分之幾？',
      explain: 'I = P / V = 20 000 / 2000 = 10 A。損耗的功率 = I²R = 10² × 0.50 = 50 W。<br>百分比 = 50 / 20 000 × 100 % = 0.25 %。<br>若以 200 V 輸送，電流為 100 A，損耗為 5000 W = 25 % — 電壓提高十倍，損耗減至百分之一。'
    }
  },
  {
    id: 'E76', topic: 'elec', level: 4, sub: 'Eddy currents',
    stem: 'A copper plate swinging as a pendulum between the poles of a strong magnet comes to rest much more quickly than when the magnet is removed. Why?',
    options: [
      'The magnet increases the air resistance on the plate.',
      'The magnet increases the weight of the plate.',
      'Eddy currents induced in the plate produce forces that oppose its motion.',
      'The magnet attracts the copper plate.'
    ],
    answer: 2,
    explain: 'As the plate moves through the field, the flux through parts of it changes, inducing circulating (eddy) currents. By Lenz\'s law these currents interact with the field to oppose the motion, and the plate\'s kinetic energy becomes internal energy. Copper is not attracted by a magnet. This is the principle of magnetic braking.',
    zh: {
      sub: '渦電流',
      stem: '一塊在強磁鐵兩極之間擺動的銅板，比移走磁鐵時快得多停下來。為甚麼？',
      options: ['磁鐵增加了銅板所受的空氣阻力。', '磁鐵增加了銅板的重量。', '銅板中感生的渦電流產生阻礙其運動的力。', '磁鐵吸引銅板。'],
      explain: '銅板在磁場中移動時，穿過它各部分的磁通量改變，感生出環流（渦電流）。根據楞次定律，這些電流與磁場相互作用而阻礙運動，銅板的動能變為內能。銅不會被磁鐵吸引。這就是磁力剎車的原理。'
    }
  },
  {
    id: 'E77', topic: 'elec', level: 5, sub: "Faraday's law",
    stem: 'A flat coil of 50 turns and area 0.020 m² is in a uniform magnetic field of 0.60 T, with its plane perpendicular to the field. It is turned through 90° in 0.10 s, so that its plane becomes parallel to the field. What is the average induced e.m.f.?',
    options: ['0.12 V', '0.60 V', '3.0 V', '6.0 V'],
    answer: 3,
    explain: 'The flux through each turn changes from BA = 0.60 × 0.020 = 0.012 Wb to 0 (field parallel to the plane).<br>ε = N ΔΦ / Δt = 50 × 0.012 / 0.10 = 6.0 V.<br>0.12 V is the e.m.f. for a single turn.',
    zh: {
      sub: '法拉第定律',
      stem: '一個 50 匝、面積為 0.020 m² 的平面線圈放在 0.60 T 的均勻磁場中，線圈平面與磁場垂直。在 0.10 s 內把它轉動 90°，使線圈平面與磁場平行。平均感生電動勢是多少？',
      explain: '穿過每匝的磁通量由 BA = 0.60 × 0.020 = 0.012 Wb 變為 0（磁場與平面平行）。<br>ε = N ΔΦ / Δt = 50 × 0.012 / 0.10 = 6.0 V。<br>0.12 V 只是一匝的電動勢。'
    }
  },
  {
    id: 'E78', topic: 'elec', level: 3, sub: 'Hall effect',
    stem: 'A Hall probe is mainly used to measure',
    options: ['magnetic field strength.', 'electric current.', 'electrical resistance.', 'the speed of electrons in a vacuum.'],
    answer: 0,
    explain: 'When a current flows through the probe\'s slice in a magnetic field, a Hall voltage V<sub>H</sub> = BI / (nQt) appears across it. With I fixed and the probe calibrated, V<sub>H</sub> ∝ B, so the probe measures the field strength.',
    zh: {
      sub: '霍爾效應',
      stem: '霍爾探測器主要用來量度',
      options: ['磁場強度。', '電流。', '電阻。', '電子在真空中的速率。'],
      explain: '電流在磁場中流過探測器的薄片時，薄片兩邊出現霍爾電壓 V<sub>H</sub> = BI / (nQt)。I 固定並經校準後，V<sub>H</sub> ∝ B，所以探測器量度的是磁場強度。'
    }
  },
  {
    id: 'E79', topic: 'elec', level: 3, sub: 'Force between currents',
    stem: 'Two long parallel wires carry currents in opposite directions. What is the effect of the force between them?',
    options: ['They attract each other.', 'They repel each other.', 'There is no force between them.', 'They twist about each other.'],
    answer: 1,
    explain: 'Each wire lies in the magnetic field of the other and so feels a force (BIL). For currents in opposite directions the forces push the wires apart; currents in the same direction attract.',
    zh: {
      sub: '電流之間的作用力',
      stem: '兩條長平行導線載有方向相反的電流。它們之間的作用力有甚麼效果？',
      options: ['互相吸引。', '互相排斥。', '兩者之間沒有作用力。', '兩者互相扭轉。'],
      explain: '每條導線都處於另一條導線的磁場中，所以受力（BIL）。電流方向相反時，作用力把導線推開；電流方向相同時則互相吸引。'
    }
  },
  {
    id: 'E80', topic: 'elec', level: 5, sub: 'Internal resistance',
    stem: 'A lamp is connected to a battery that has significant internal resistance. A second, identical lamp is then connected in parallel with the first. What happens to the brightness of the first lamp?',
    options: [
      'It becomes brighter.',
      'It stays the same, because lamps in parallel are independent.',
      'It becomes dimmer, because the terminal p.d. of the battery falls.',
      'It goes out.'
    ],
    answer: 2,
    explain: 'Adding the second lamp lowers the external resistance, so the battery supplies a larger current. More p.d. is "lost" across the internal resistance (Ir), so the terminal p.d. V = ε − Ir falls. The first lamp now has a smaller p.d. across it and becomes dimmer. With an ideal battery (r = 0) its brightness would not change.',
    zh: {
      sub: '內阻',
      stem: '一盞燈連接到一個內阻不可忽略的電池。然後把另一盞相同的燈與第一盞並聯。第一盞燈的亮度會怎樣？',
      options: ['變亮。', '不變，因為並聯的燈互不影響。', '變暗，因為電池的端電壓下降。', '熄滅。'],
      explain: '加上第二盞燈使外電阻減小，電池輸出的電流增加。內阻上「損失」的電壓（Ir）增加，所以端電壓 V = ε − Ir 下降。第一盞燈兩端的電勢差減小，於是變暗。若電池是理想的（r = 0），亮度便不會改變。'
    }
  },
  {
    id: 'E81', topic: 'elec', level: 3, sub: 'Potential divider',
    stem: 'A 2.0 kΩ resistor and a 4.0 kΩ resistor are connected in series across a 12 V supply of negligible internal resistance. What is the p.d. across the 4.0 kΩ resistor?',
    options: ['2.0 V', '4.0 V', '6.0 V', '8.0 V'],
    answer: 3,
    explain: 'The current is the same through both, so the p.d. divides in proportion to the resistances:<br>V = 12 × 4.0 / (2.0 + 4.0) = 8.0 V.<br>4.0 V is the p.d. across the 2.0 kΩ resistor.',
    zh: {
      sub: '分壓器',
      stem: '一個 2.0 kΩ 的電阻器和一個 4.0 kΩ 的電阻器串聯，接到一個內阻可忽略的 12 V 電源。4.0 kΩ 電阻器兩端的電勢差是多少？',
      explain: '兩者的電流相同，所以電勢差按電阻的比例分配：<br>V = 12 × 4.0 / (2.0 + 4.0) = 8.0 V。<br>4.0 V 是 2.0 kΩ 電阻器兩端的電勢差。'
    }
  },
  {
    id: 'E82', topic: 'elec', level: 4, sub: 'Resistivity',
    stem: 'Wire B is made of the same metal as wire A. It is twice as long and has twice the diameter. What is the ratio (resistance of B) / (resistance of A)?',
    options: ['0.5', '1.0', '2.0', '4.0'],
    answer: 0,
    explain: 'R = ρl / A, and A ∝ d². Twice the diameter gives 4 times the cross-sectional area.<br>R<sub>B</sub> / R<sub>A</sub> = 2 / 4 = 0.5.<br>1.0 forgets that area depends on the square of the diameter.',
    zh: {
      sub: '電阻率',
      stem: '導線 B 與導線 A 由同一種金屬製成，B 的長度和直徑都是 A 的兩倍。（B 的電阻）/（A 的電阻）之比是多少？',
      explain: 'R = ρl / A，而 A ∝ d²。直徑加倍，截面面積變為 4 倍。<br>R<sub>B</sub> / R<sub>A</sub> = 2 / 4 = 0.5。<br>1.0 忘記了面積與直徑的平方成正比。'
    }
  },
  {
    id: 'E83', topic: 'elec', level: 3, sub: 'Electrical energy',
    stem: 'A heater connected to a 220 V supply takes a current of 5.0 A. How much electrical energy does it use in 10 minutes?',
    options: ['1.1 × 10⁴ J', '6.6 × 10⁵ J', '1.3 × 10⁶ J', '4.0 × 10⁷ J'],
    answer: 1,
    explain: 'E = VIt = 220 × 5.0 × (10 × 60) = 6.6 × 10⁵ J.<br>1.1 × 10⁴ J uses t = 10 (minutes not converted to seconds).',
    zh: {
      sub: '電能',
      stem: '一個連接到 220 V 電源的電暖爐的電流為 5.0 A。它在 10 分鐘內消耗多少電能？',
      explain: 'E = VIt = 220 × 5.0 × (10 × 60) = 6.6 × 10⁵ J。<br>1.1 × 10⁴ J 用了 t = 10（沒有把分鐘轉換為秒）。'
    }
  },
  {
    id: 'E84', topic: 'elec', level: 3, sub: 'Current and charge',
    stem: 'A current of 2.0 A flows in a circuit for 30 s, and then a current of 1.0 A flows for another 30 s. How much charge passes a point in the circuit in total?',
    options: ['45 C', '60 C', '90 C', '180 C'],
    answer: 2,
    explain: 'Q = It for each part (the area under the I–t graph): 2.0 × 30 + 1.0 × 30 = 60 + 30 = 90 C.<br>60 C counts only the first part; 45 C uses the average current over only 30 s.',
    zh: {
      sub: '電流和電荷',
      stem: '電路中有 2.0 A 的電流流動了 30 s，然後有 1.0 A 的電流再流動 30 s。總共有多少電荷流經電路中某一點？',
      explain: '每部分 Q = It（即 I–t 線圖下的面積）：2.0 × 30 + 1.0 × 30 = 60 + 30 = 90 C。<br>60 C 只計算了第一部分；45 C 只把平均電流乘以 30 s。'
    }
  },
  {
    id: 'E85', topic: 'elec', level: 4, sub: 'Electric field',
    stem: 'Charges +Q and −Q are fixed a short distance apart. What is the direction of the electric field at the point midway between them?',
    options: ['There is no field there.', 'Towards +Q', 'Perpendicular to the line joining the charges', 'Towards −Q'],
    answer: 3,
    explain: 'The field of +Q points away from +Q, i.e. towards −Q; the field of −Q points towards −Q. At the midpoint both point the same way, so they add: the resultant field points towards −Q. (Midway between two equal like charges, the field would be zero.)',
    zh: {
      sub: '電場',
      stem: '電荷 +Q 和 −Q 相隔一小段距離固定。在兩者正中間的點，電場的方向是怎樣的？',
      options: ['該處沒有電場。', '指向 +Q', '垂直於兩電荷的連線', '指向 −Q'],
      explain: '+Q 的電場由 +Q 向外指，即指向 −Q；−Q 的電場指向 −Q。在中點兩者方向相同，所以相加：合電場指向 −Q。（在兩個等量同種電荷的正中間，電場才是零。）'
    }
  },
  {
    id: 'E86', topic: 'elec', level: 5, sub: 'Electric field',
    stem: 'A small charged ball of mass 2.0 g hangs from an insulating thread in a uniform horizontal electric field of 5.0 × 10⁴ V m⁻¹. It hangs at rest with the thread at 30° to the vertical. What is the size of the charge on the ball?<br>(g = 9.81 m s⁻²)',
    options: ['2.27 × 10⁻⁷ C', '3.92 × 10⁻⁷ C', '4.53 × 10⁻⁷ C', '6.80 × 10⁻⁷ C'],
    answer: 0,
    explain: 'Three forces balance: weight mg (down), electric force qE (horizontal) and tension T along the thread.<br>T cos 30° = mg and T sin 30° = qE ⇒ qE = mg tan 30°.<br>q = 2.0 × 10⁻³ × 9.81 × tan 30° / 5.0 × 10⁴ = 2.27 × 10⁻⁷ C.<br>6.80 × 10⁻⁷ C divides by tan 30° instead of multiplying.',
    zh: {
      sub: '電場',
      stem: '一個質量為 2.0 g 的帶電小球以絕緣線懸掛在 5.0 × 10⁴ V m⁻¹ 的均勻水平電場中。小球靜止時，懸線與鉛垂線成 30°。小球所帶電荷的大小是多少？<br>（g = 9.81 m s⁻²）',
      explain: '三個力平衡：重量 mg（向下）、電力 qE（水平）和沿懸線的張力 T。<br>T cos 30° = mg 及 T sin 30° = qE ⇒ qE = mg tan 30°。<br>q = 2.0 × 10⁻³ × 9.81 × tan 30° / 5.0 × 10⁴ = 2.27 × 10⁻⁷ C。<br>6.80 × 10⁻⁷ C 是除以而非乘以 tan 30°。'
    }
  },
  {
    id: 'E87', topic: 'elec', level: 3, sub: 'Electrical power',
    stem: 'A heating element of constant resistance dissipates power P when connected to its rated voltage. What power does it dissipate when connected to half the rated voltage?',
    options: ['P / 8', 'P / 4', 'P / 2', 'P'],
    answer: 1,
    explain: 'P = V² / R with R constant, so P ∝ V². Halving V gives (½)² = ¼ of the power.<br>P / 2 forgets that the current also halves.',
    zh: {
      sub: '電功率',
      stem: '一個電阻不變的發熱元件接到額定電壓時消耗功率 P。若接到額定電壓的一半，它消耗的功率是多少？',
      explain: 'P = V² / R，R 不變，所以 P ∝ V²。V 減半，功率變為 (½)² = ¼。<br>P / 2 忘記了電流亦會減半。'
    }
  },
  {
    id: 'E88', topic: 'elec', level: 3, sub: 'Circuits',
    stem: 'A 3.0 Ω resistor and a 6.0 Ω resistor are connected in parallel across a 12 V supply of negligible internal resistance. What current is drawn from the supply?',
    options: ['1.33 A', '4.0 A', '6.0 A', '18 A'],
    answer: 2,
    explain: 'Each branch has the full 12 V: I₃ = 12 / 3.0 = 4.0 A and I₆ = 12 / 6.0 = 2.0 A.<br>Total = 4.0 + 2.0 = 6.0 A (combined resistance 2.0 Ω).<br>1.33 A treats the resistors as if they were in series.',
    zh: {
      sub: '電路',
      stem: '一個 3.0 Ω 電阻器和一個 6.0 Ω 電阻器並聯，接到一個內阻可忽略的 12 V 電源。電源輸出的電流是多少？',
      explain: '每條支路都有整個 12 V：I₃ = 12 / 3.0 = 4.0 A，I₆ = 12 / 6.0 = 2.0 A。<br>總和 = 4.0 + 2.0 = 6.0 A（總電阻 2.0 Ω）。<br>1.33 A 把電阻器當作串聯。'
    }
  },
  {
    id: 'E89', topic: 'elec', level: 4, sub: 'Domestic electricity',
    stem: 'Which of the following statements about a miniature circuit breaker (MCB) is/are correct?',
    statements: [
      'It must be replaced after it has tripped.',
      'It can be reset once the fault has been cleared.',
      'It cuts off an excessive current faster than a fuse.'
    ],
    options: STMT_OPTS,
    answer: 3,
    explain: '(1) ✗ Unlike a fuse, an MCB is not destroyed when it operates.<br>(2) ✓ It is simply switched back on.<br>(3) ✓ It uses an electromagnet (and a bimetallic strip) and acts very quickly, whereas a fuse wire must first heat up and melt.',
    zh: {
      sub: '家居用電',
      stem: '下列有關微型斷路器（MCB）的敘述，哪項／哪些是正確的？',
      statements: ['它跳掣後必須更換。', '排除故障後可以把它復位。', '它切斷過大電流的速度比保險絲快。'],
      explain: '(1) ✗ 與保險絲不同，MCB 運作後不會損毀。<br>(2) ✓ 只需重新開啟即可。<br>(3) ✓ 它利用電磁鐵（和雙金屬片）運作，反應很快；保險絲則須先受熱熔斷。'
    }
  },
  {
    id: 'E90', topic: 'elec', level: 5, sub: "Lenz's law",
    stem: 'A strong magnet is dropped down a long vertical copper tube. It falls much more slowly than an unmagnetized piece of metal of the same size and mass. Why?',
    options: [
      'Currents induced in the tube produce a magnetic field that opposes the magnet\'s motion.',
      'The magnet is attracted to the copper.',
      'Air trapped in the tube slows the magnet.',
      'The magnet loses its magnetism as it falls.'
    ],
    answer: 0,
    explain: 'As the magnet falls, the flux through each ring of the tube changes, inducing circulating currents. By Lenz\'s law they repel the magnet as it approaches a section and attract it as it leaves, so there is an upward force. The magnet quickly reaches a low terminal speed, and its lost PE becomes internal energy of the tube. Copper is not magnetic.',
    zh: {
      sub: '楞次定律',
      stem: '把一塊強磁鐵投入一條長的垂直銅管中。它比一塊大小和質量相同、沒有磁性的金屬下墜得慢得多。為甚麼？',
      options: ['管中感生的電流產生阻礙磁鐵運動的磁場。', '磁鐵被銅吸引。', '困在管中的空氣使磁鐵減速。', '磁鐵下墜時失去磁性。'],
      explain: '磁鐵下墜時，穿過銅管每一圈的磁通量改變，感生出環流。根據楞次定律，磁鐵接近某段時被排斥，離開時被吸引，所以受向上的力。磁鐵很快達到一個很低的終端速率，失去的勢能變為銅管的內能。銅並不帶磁性。'
    }
  },
  {
    id: 'E91', topic: 'elec', level: 4, sub: 'Transformers',
    stem: 'A transformer takes 0.50 A from a 240 V supply. Its secondary coil delivers 9.0 A at 12 V. What is its efficiency?',
    options: ['80 %', '90 %', '95 %', '111 %'],
    answer: 1,
    explain: 'Input power = 240 × 0.50 = 120 W. Output power = 12 × 9.0 = 108 W.<br>Efficiency = 108 / 120 = 0.90 = 90 %.<br>111 % inverts the ratio; no transformer can give out more energy than it takes in.',
    zh: {
      sub: '變壓器',
      stem: '一個變壓器從 240 V 電源抽取 0.50 A 的電流，副線圈以 12 V 輸出 9.0 A。它的效率是多少？',
      explain: '輸入功率 = 240 × 0.50 = 120 W。輸出功率 = 12 × 9.0 = 108 W。<br>效率 = 108 / 120 = 0.90 = 90 %。<br>111 % 把比例倒轉了；變壓器輸出的能量不可能多於輸入。'
    }
  },
  {
    id: 'E92', topic: 'elec', level: 3, sub: "Coulomb's law",
    stem: 'Two point charges exert a force F on each other. The distance between them is halved, and the charges are unchanged. What is the new force?',
    options: ['F / 2', '2F', '4F', '8F'],
    answer: 2,
    explain: 'F ∝ 1 / r². Halving r multiplies F by 1 / (½)² = 4.<br>2F wrongly takes F ∝ 1 / r.',
    zh: {
      sub: '庫侖定律',
      stem: '兩個點電荷互相施加力 F。把兩者的距離減半，而電荷不變。新的力是多少？',
      explain: 'F ∝ 1 / r²。r 減半，F 變為 1 / (½)² = 4 倍。<br>2F 錯誤地取 F ∝ 1 / r。'
    }
  },
  {
    id: 'E93', topic: 'elec', level: 4, sub: 'Electric field',
    stem: 'What is the electric field strength at a distance of 0.20 m from a point charge of +4.0 nC in air?<br>(1 / (4πε₀) = 8.99 × 10⁹ N m² C⁻²)',
    options: ['180 N C⁻¹', '225 N C⁻¹', '450 N C⁻¹', '899 N C⁻¹'],
    answer: 3,
    explain: 'E = Q / (4πε₀ r²) = 8.99 × 10⁹ × 4.0 × 10⁻⁹ / 0.20² = 899 N C⁻¹, pointing away from the charge.<br>180 N C⁻¹ forgets to square r.',
    zh: {
      sub: '電場',
      stem: '在空氣中距一個 +4.0 nC 點電荷 0.20 m 處的電場強度是多少？<br>（1 / (4πε₀) = 8.99 × 10⁹ N m² C⁻²）',
      explain: 'E = Q / (4πε₀ r²) = 8.99 × 10⁹ × 4.0 × 10⁻⁹ / 0.20² = 899 N C⁻¹，方向背離電荷。<br>180 N C⁻¹ 忘記把 r 平方。'
    }
  },
  {
    id: 'E94', topic: 'elec', level: 4, sub: 'Electric potential',
    stem: 'In a uniform electric field of strength 2000 V m⁻¹, what is the potential difference between two points 3.0 cm apart along a field line?',
    options: ['60 V', '600 V', '6.0 × 10⁴ V', '6.7 × 10⁴ V'],
    answer: 0,
    explain: 'In a uniform field V = Ed = 2000 × 0.030 = 60 V.<br>6.0 × 10⁴ V uses d = 3.0 cm without converting to metres; 6.7 × 10⁴ V divides by d.',
    zh: {
      sub: '電勢',
      stem: '在強度為 2000 V m⁻¹ 的均勻電場中，沿一條電場線相距 3.0 cm 的兩點之間的電勢差是多少？',
      explain: '在均勻電場中 V = Ed = 2000 × 0.030 = 60 V。<br>6.0 × 10⁴ V 用了 d = 3.0 cm 而沒有轉換為米；6.7 × 10⁴ V 是除以 d。'
    }
  },
  {
    id: 'E95', topic: 'elec', level: 2, sub: 'Resistance',
    stem: 'What happens to the resistance of a metal wire when its temperature rises?',
    options: ['It decreases.', 'It increases.', 'It stays the same.', 'It becomes zero.'],
    answer: 1,
    explain: 'In a hotter metal the ions vibrate more, so the free electrons collide with them more often and the resistance increases. (The resistance of a semiconductor thermistor, by contrast, usually decreases.)',
    zh: {
      sub: '電阻',
      stem: '金屬導線的溫度上升時，它的電阻會怎樣？',
      options: ['減小。', '增加。', '不變。', '變為零。'],
      explain: '金屬越熱，離子振動越劇烈，自由電子與它們碰撞越頻繁，所以電阻增加。（相反，半導體熱敏電阻器的電阻通常會減小。）'
    }
  },
  {
    id: 'E96', topic: 'elec', level: 4, sub: 'Internal resistance',
    stem: 'A cell of e.m.f. 1.5 V and internal resistance 0.50 Ω is short-circuited by a thick copper wire of negligible resistance. What current flows?',
    options: ['0.33 A', '0.75 A', '3.0 A', '4.5 A'],
    answer: 2,
    explain: 'With no external resistance, I = ε / r = 1.5 / 0.50 = 3.0 A. The internal resistance alone limits the current — and all the energy is dissipated inside the cell, which can make it hot.',
    zh: {
      sub: '內阻',
      stem: '用一條電阻可忽略的粗銅線把一個電動勢為 1.5 V、內阻為 0.50 Ω 的電池短路。流過的電流是多少？',
      explain: '沒有外電阻時，I = ε / r = 1.5 / 0.50 = 3.0 A。只有內阻限制電流 — 而且所有能量都在電池內部消耗，可能令電池發熱。'
    }
  },
  {
    id: 'E97', topic: 'elec', level: 3, sub: 'Electrical power',
    stem: 'A heater is rated "230 V, 1000 W". What is its resistance when operating normally?',
    options: ['0.23 Ω', '4.35 Ω', '23 Ω', '52.9 Ω'],
    answer: 3,
    explain: 'P = V² / R ⇒ R = V² / P = 230² / 1000 = 52.9 Ω.<br>4.35 is P / V, which is the current in amperes.',
    zh: {
      sub: '電功率',
      stem: '一個電暖爐的額定值為「230 V, 1000 W」。正常運作時它的電阻是多少？',
      explain: 'P = V² / R ⇒ R = V² / P = 230² / 1000 = 52.9 Ω。<br>4.35 是 P / V，即以安培計的電流。'
    }
  },
  {
    id: 'E98', topic: 'elec', level: 2, sub: 'Magnetic field of a current',
    stem: 'A long straight vertical wire carrying a current passes through a horizontal card. Iron filings sprinkled on the card form a pattern. What shape is the pattern?',
    options: ['Concentric circles centred on the wire', 'Straight lines radiating out from the wire', 'Parallel straight lines', 'A pattern like that of a bar magnet'],
    answer: 0,
    explain: 'The magnetic field lines around a long straight wire are concentric circles centred on the wire, getting further apart with distance as the field weakens (B ∝ 1/r). Their direction is given by the right-hand grip rule.',
    zh: {
      sub: '電流的磁場',
      stem: '一條載有電流的長直垂直導線穿過一張水平卡紙。撒在卡紙上的鐵屑形成圖樣。圖樣是甚麼形狀？',
      options: ['以導線為圓心的同心圓', '由導線向外輻射的直線', '平行直線', '與條形磁鐵相似的圖樣'],
      explain: '長直導線周圍的磁場線是以導線為圓心的同心圓，隨距離增加而越來越疏，因為磁場減弱（B ∝ 1/r）。其方向由右手螺旋定則決定。'
    }
  },
  {
    id: 'E99', topic: 'elec', level: 3, sub: 'Magnetic force',
    stem: 'A straight wire carrying a current lies parallel to the field lines of a uniform magnetic field. What is the magnetic force on the wire?',
    options: ['It is the largest possible.', 'It is zero.', 'It is half the largest possible value.', 'It depends only on the current.'],
    answer: 1,
    explain: 'F = BIL sin θ, where θ is the angle between the wire and the field. For a wire parallel to the field θ = 0, so F = 0. The force is largest when the wire is perpendicular to the field.',
    zh: {
      sub: '磁力',
      stem: '一條載流直導線與均勻磁場的磁場線平行。導線所受的磁力是多少？',
      options: ['最大。', '零。', '最大值的一半。', '只取決於電流。'],
      explain: 'F = BIL sin θ，θ 是導線與磁場的夾角。導線與磁場平行時 θ = 0，所以 F = 0。導線與磁場垂直時力最大。'
    }
  },
  {
    id: 'E100', topic: 'elec', level: 4, sub: 'Motor effect',
    stem: 'Which of the following statements about the coil of a simple d.c. motor is/are correct?',
    statements: [
      'The turning effect is greatest when the plane of the coil is parallel to the magnetic field.',
      'The commutator keeps the coil turning in the same direction.',
      'The coil keeps turning at the same speed even if the current is switched off.'
    ],
    options: STMT_OPTS,
    answer: 2,
    explain: '(1) ✓ The forces on the sides of the coil then have the largest perpendicular distance from the axis.<br>(2) ✓ It reverses the current every half turn so the torque is always in the same sense.<br>(3) ✗ Without current there is no magnetic force; friction slows the coil down.',
    zh: {
      sub: '電動機效應',
      stem: '下列有關簡單直流電動機線圈的敘述，哪項／哪些是正確的？',
      statements: ['線圈平面與磁場平行時，轉動效應最大。', '換向器使線圈保持向同一方向轉動。', '即使截斷電流，線圈仍會以相同速率轉動。'],
      explain: '(1) ✓ 這時線圈兩邊所受的力與轉軸的垂直距離最大。<br>(2) ✓ 它每半轉把電流反轉一次，使轉矩總是同一方向。<br>(3) ✗ 沒有電流便沒有磁力；摩擦力會使線圈減速。'
    }
  },
  {
    id: 'E101', topic: 'elec', level: 5, sub: 'Electromagnetic induction',
    stem: 'A metal rod of length 0.40 m slides at a steady 5.0 m s⁻¹ along two parallel horizontal rails joined by a 2.0 Ω resistor. A uniform vertical magnetic field of 0.50 T acts. Ignoring friction and the resistance of the rod and rails, what force is needed to keep the rod moving at constant speed?',
    options: ['0.025 N', '0.050 N', '0.080 N', '0.10 N'],
    answer: 3,
    explain: 'ε = Blv = 0.50 × 0.40 × 5.0 = 1.0 V; I = ε / R = 1.0 / 2.0 = 0.50 A.<br>The current in the rod feels a magnetic force BIL = 0.50 × 0.50 × 0.40 = 0.10 N opposing the motion (Lenz\'s law), so a 0.10 N pull is needed.<br>Check: mechanical power 0.10 × 5.0 = 0.50 W = electrical power I²R = 0.50² × 2.0 ✓.',
    zh: {
      sub: '電磁感應',
      stem: '一根長 0.40 m 的金屬棒以穩定的 5.0 m s⁻¹ 沿兩條平行的水平路軌滑動，路軌以一個 2.0 Ω 的電阻器連接。均勻的垂直磁場為 0.50 T。忽略摩擦力以及棒和路軌的電阻，要使棒保持等速運動需要多大的力？',
      explain: 'ε = Blv = 0.50 × 0.40 × 5.0 = 1.0 V；I = ε / R = 1.0 / 2.0 = 0.50 A。<br>棒中的電流受磁力 BIL = 0.50 × 0.50 × 0.40 = 0.10 N，方向阻礙運動（楞次定律），所以需要 0.10 N 的拉力。<br>驗算：機械功率 0.10 × 5.0 = 0.50 W = 電功率 I²R = 0.50² × 2.0 ✓。'
    }
  },
  {
    id: 'E102', topic: 'elec', level: 4, sub: 'Alternating current',
    stem: 'A sinusoidal a.c. supply of peak voltage 10 V heats a resistor. What steady d.c. voltage would produce the same heating effect in the same resistor?',
    options: ['7.1 V', '10 V', '14 V', '20 V'],
    answer: 0,
    explain: 'The r.m.s. value of an a.c. supply is the d.c. value that gives the same average power. V<sub>rms</sub> = V₀ / √2 = 10 / 1.414 = 7.1 V.',
    zh: {
      sub: '交流電',
      stem: '一個峰值電壓為 10 V 的正弦交流電源加熱一個電阻器。在同一電阻器中，多大的穩定直流電壓會產生相同的熱效應？',
      explain: '交流電的方均根值就是產生相同平均功率的直流值。V<sub>rms</sub> = V₀ / √2 = 10 / 1.414 = 7.1 V。'
    }
  },
  {
    id: 'E103', topic: 'elec', level: 3, sub: 'Transformers',
    stem: 'An ideal transformer is used to step a 220 V supply up to 11 kV. What is the turns ratio N<sub>p</sub> : N<sub>s</sub>?',
    options: ['1 : 5', '1 : 50', '1 : 500', '50 : 1'],
    answer: 1,
    explain: 'N<sub>s</sub> / N<sub>p</sub> = V<sub>s</sub> / V<sub>p</sub> = 11 000 / 220 = 50, so N<sub>p</sub> : N<sub>s</sub> = 1 : 50. A step-up transformer has more turns on the secondary. 50 : 1 would step the voltage down.',
    zh: {
      sub: '變壓器',
      stem: '用一個理想變壓器把 220 V 的電源升至 11 kV。匝數比 N<sub>p</sub> : N<sub>s</sub> 是多少？',
      explain: 'N<sub>s</sub> / N<sub>p</sub> = V<sub>s</sub> / V<sub>p</sub> = 11 000 / 220 = 50，所以 N<sub>p</sub> : N<sub>s</sub> = 1 : 50。升壓變壓器的副線圈匝數較多。50 : 1 會把電壓降低。'
    }
  },
  {
    id: 'E104', topic: 'elec', level: 4, sub: 'Electrostatics',
    stem: 'A charged plastic comb picks up small pieces of uncharged paper. Which of the following best explains this?',
    options: [
      'The comb gives the paper a charge of the opposite sign before it touches.',
      'The paper is attracted by gravity towards the comb.',
      'Charges are induced in the paper; the opposite charge is nearer the comb, so the attraction is stronger than the repulsion.',
      'Uncharged objects are always attracted to one another.'
    ],
    answer: 2,
    explain: 'The comb\'s charge slightly separates the charges in the paper (induction): unlike charge gathers on the near side and like charge on the far side. Since the force falls off with distance, the attraction to the near side is stronger than the repulsion from the far side, so there is a net attraction even though the paper stays neutral overall.',
    zh: {
      sub: '靜電學',
      stem: '一把帶電的塑膠梳子能吸起不帶電的小紙碎。下列哪項最能解釋這現象？',
      options: ['梳子在接觸前已令紙碎帶異號電荷。', '紙碎被重力拉向梳子。', '紙碎中感應出電荷；異號電荷較接近梳子，所以吸引力大於排斥力。', '不帶電的物體總是互相吸引。'],
      explain: '梳子的電荷使紙碎內的電荷稍為分開（感應）：異號電荷聚集在近邊，同號電荷在遠邊。由於力隨距離減弱，近邊所受的吸引力大於遠邊所受的排斥力，所以即使紙碎整體仍是中性，也受到淨吸引力。'
    }
  },
  {
    id: 'E105', topic: 'elec', level: 3, sub: 'Current and charge',
    stem: 'In a metal wire connected to a battery, which of the following is correct about the direction of the conventional current and the flow of electrons in the external circuit?',
    options: [
      'Both go from the positive terminal to the negative terminal.',
      'Both go from the negative terminal to the positive terminal.',
      'The current goes from negative to positive; electrons go from positive to negative.',
      'The current goes from positive to negative; electrons go from negative to positive.'
    ],
    answer: 3,
    explain: 'Conventional current is defined as the direction in which positive charge would flow: from the positive terminal round to the negative terminal. In a metal the moving charges are electrons, which are negative, so they actually drift the opposite way, from the negative terminal to the positive terminal.',
    zh: {
      sub: '電流和電荷',
      stem: '在連接電池的金屬導線中，有關外電路中常規電流方向和電子流動方向，下列哪項是正確的？',
      options: ['兩者都由正極流向負極。', '兩者都由負極流向正極。', '電流由負極流向正極；電子由正極流向負極。', '電流由正極流向負極；電子由負極流向正極。'],
      explain: '常規電流定義為正電荷流動的方向：由正極經外電路流向負極。金屬中移動的電荷是帶負電的電子，所以它們實際上向相反方向漂移，由負極流向正極。'
    }
  },
  {
    id: 'E106', topic: 'elec', level: 5, sub: 'Internal resistance',
    stem: 'Two identical cells, each of e.m.f. 1.5 V and internal resistance 0.50 Ω, are connected in series with a 4.0 Ω resistor. What current flows?',
    options: ['0.60 A', '0.67 A', '0.75 A', '1.5 A'],
    answer: 0,
    explain: 'In series the e.m.f.s add (3.0 V) and so do the internal resistances (1.0 Ω).<br>I = 3.0 / (4.0 + 1.0) = 0.60 A.<br>0.67 A includes only one internal resistance; 0.75 A ignores internal resistance altogether.',
    zh: {
      sub: '內阻',
      stem: '兩個相同的電池，各自的電動勢為 1.5 V、內阻為 0.50 Ω，與一個 4.0 Ω 的電阻器串聯。流過的電流是多少？',
      explain: '串聯時電動勢相加（3.0 V），內阻亦相加（1.0 Ω）。<br>I = 3.0 / (4.0 + 1.0) = 0.60 A。<br>0.67 A 只計算了一個內阻；0.75 A 完全忽略了內阻。'
    }
  },
  {
    id: 'E107', topic: 'elec', level: 3, sub: 'Magnetic field of a current',
    stem: 'Which of the following changes would double the magnetic field strength inside a long air-cored solenoid?',
    options: [
      'Doubling its length, keeping the same number of turns',
      'Doubling the current',
      'Doubling its diameter',
      'Halving the number of turns, keeping the same length'
    ],
    answer: 1,
    explain: 'B = μ₀NI / l, so B ∝ I and B ∝ N / l. Doubling I doubles B. Doubling l or halving N halves B, and the diameter does not appear in the formula for a long solenoid.',
    zh: {
      sub: '電流的磁場',
      stem: '下列哪項改變會使一個長空心螺線管內的磁場強度加倍？',
      options: ['匝數不變而把長度加倍', '把電流加倍', '把直徑加倍', '長度不變而把匝數減半'],
      explain: 'B = μ₀NI / l，所以 B ∝ I，B ∝ N / l。電流加倍使 B 加倍。長度加倍或匝數減半會使 B 減半，而長螺線管的公式中沒有直徑。'
    }
  }
]);
