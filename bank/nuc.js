/* Radioactivity and Nuclear Energy — additional hand-written questions (N38 onwards). Fields: see questions.js and bank/core.js. */
addBank([
  {
    id: 'N38', topic: 'nuc', level: 2, sub: 'Atomic structure',
    stem: 'What does the nucleus of uranium-238 (²³⁸₉₂U) contain?',
    options: ['92 protons and 146 neutrons', '92 protons and 238 neutrons', '146 protons and 92 neutrons', '238 protons and 92 neutrons'],
    answer: 0,
    explain: 'The atomic number (lower number, 92) is the number of protons. The nucleon number (upper number, 238) is protons + neutrons, so the number of neutrons is 238 − 92 = 146.',
    zh: {
      sub: '原子結構',
      stem: '鈾-238（²³⁸₉₂U）的原子核含有甚麼？',
      options: ['92 個質子和 146 個中子', '92 個質子和 238 個中子', '146 個質子和 92 個中子', '238 個質子和 92 個中子'],
      explain: '原子序（下方的數字 92）是質子數。核子數（上方的數字 238）是質子數加中子數，所以中子數 = 238 − 92 = 146。'
    }
  },
  {
    id: 'N39', topic: 'nuc', level: 2, sub: 'Atomic structure',
    stem: 'Which particle has a charge of −e and a mass much smaller than that of a proton?',
    options: ['Proton', 'Electron', 'Neutron', 'α particle'],
    answer: 1,
    explain: 'The electron carries charge −e and its mass is about 1/1840 of a proton\'s. The proton carries +e, the neutron is uncharged, and the α particle (+2e) is about four times as heavy as a proton.',
    zh: {
      sub: '原子結構',
      stem: '哪一種粒子帶 −e 電荷，而質量遠比質子小？',
      options: ['質子', '電子', '中子', 'α 粒子'],
      explain: '電子帶 −e 電荷，質量約為質子的 1/1840。質子帶 +e，中子不帶電，α 粒子（+2e）的質量約為質子的四倍。'
    }
  },
  {
    id: 'N40', topic: 'nuc', level: 3, sub: 'Isotopes',
    stem: 'Carbon-12 (¹²₆C) and carbon-14 (¹⁴₆C) are isotopes. Which of the following statements is/are correct?',
    statements: [
      'Their nuclei contain the same number of protons.',
      'They have the same chemical properties.',
      'Their nuclei contain the same number of neutrons.'
    ],
    options: STMT_OPTS,
    answer: 2,
    explain: '(1) ✓ Both have atomic number 6.<br>(2) ✓ Chemical properties depend on the electrons, and both atoms have 6 electrons.<br>(3) ✗ Carbon-12 has 6 neutrons and carbon-14 has 8.',
    zh: {
      sub: '同位素',
      stem: '碳-12（¹²₆C）和碳-14（¹⁴₆C）是同位素。下列哪項／哪些敘述是正確的？',
      statements: ['它們的原子核含有相同數目的質子。', '它們的化學性質相同。', '它們的原子核含有相同數目的中子。'],
      explain: '(1) ✓ 兩者的原子序都是 6。<br>(2) ✓ 化學性質取決於電子，而兩種原子都有 6 個電子。<br>(3) ✗ 碳-12 有 6 個中子，碳-14 有 8 個。'
    }
  },
  {
    id: 'N41', topic: 'nuc', level: 2, sub: 'Radiation properties',
    stem: 'What is γ radiation?',
    options: ['Helium nuclei', 'Fast-moving electrons', 'Neutrons', 'Electromagnetic waves of very short wavelength'],
    answer: 3,
    explain: 'γ rays are high-energy electromagnetic waves emitted by an unstable nucleus. α particles are helium nuclei and β⁻ particles are fast electrons from the nucleus.',
    zh: {
      sub: '輻射的性質',
      stem: 'γ 輻射是甚麼？',
      options: ['氦原子核', '高速運動的電子', '中子', '波長極短的電磁波'],
      explain: 'γ 射線是不穩定原子核發出的高能電磁波。α 粒子是氦原子核，β⁻ 粒子是來自原子核的高速電子。'
    }
  },
  {
    id: 'N42', topic: 'nuc', level: 3, sub: 'Radiation properties',
    stem: 'Which of the following best describes the typical ranges of α, β and γ radiation in air?',
    options: [
      'α: a few cm; β: about a metre; γ: very long, with intensity falling off with distance',
      'α: about a metre; β: a few cm; γ: a few mm',
      'α, β and γ: all a few cm',
      'α: very long; β: about a metre; γ: a few cm'
    ],
    answer: 0,
    explain: 'The more strongly a radiation ionizes, the faster it loses energy and the shorter its range. α particles (strongly ionizing) travel only a few cm in air; β particles reach up to about a metre; γ rays ionize weakly and are never completely stopped by air.',
    zh: {
      sub: '輻射的性質',
      stem: '下列哪項最能描述 α、β 和 γ 輻射在空氣中的一般射程？',
      options: ['α：數厘米；β：約一米；γ：很遠，強度隨距離減弱', 'α：約一米；β：數厘米；γ：數毫米', 'α、β 和 γ：都是數厘米', 'α：很遠；β：約一米；γ：數厘米'],
      explain: '輻射的電離作用越強，失去能量越快，射程越短。α 粒子（電離作用強）在空氣中只能走數厘米；β 粒子可達約一米；γ 射線電離作用弱，空氣永遠不能把它完全阻擋。'
    }
  },
  {
    id: 'N43', topic: 'nuc', level: 4, sub: 'Ionization',
    stem: 'Why do α particles cause much more ionization per centimetre of path than β particles?',
    options: [
      'α particles travel faster than β particles.',
      'α particles have a larger charge and move relatively slowly, so they interact with many more atoms along their path.',
      'α particles are electromagnetic waves.',
      'α particles have a smaller mass than β particles.'
    ],
    answer: 1,
    explain: 'An α particle carries charge +2e and, being heavy, moves much more slowly than a β particle of similar energy. It therefore exerts strong electric forces on nearby electrons for longer, knocking out many electrons per cm. This uses up its energy quickly, giving a short range.',
    zh: {
      sub: '電離',
      stem: '為甚麼 α 粒子每厘米路徑造成的電離比 β 粒子多得多？',
      options: ['α 粒子運動得比 β 粒子快。', 'α 粒子電荷較大而運動相對較慢，所以沿途與更多原子相互作用。', 'α 粒子是電磁波。', 'α 粒子的質量比 β 粒子小。'],
      explain: 'α 粒子帶 +2e 電荷，而且質量大，運動比能量相若的 β 粒子慢得多。因此它對附近電子施加強大的電力，作用時間較長，每厘米撞出很多電子。這樣很快便用盡能量，所以射程短。'
    }
  },
  {
    id: 'N44', topic: 'nuc', level: 2, sub: 'Radiation properties',
    stem: 'Which of the following can stop most β particles?',
    options: ['A sheet of paper', 'A few centimetres of air', 'A few millimetres of aluminium', 'Nothing; β particles cannot be stopped'],
    answer: 2,
    explain: 'β particles pass through paper and up to about a metre of air, but a few millimetres of aluminium absorb them. α particles are stopped by paper; γ rays need thick lead or concrete to reduce them greatly.',
    zh: {
      sub: '輻射的性質',
      stem: '下列哪項可阻擋大部分 β 粒子？',
      options: ['一張紙', '數厘米空氣', '數毫米鋁片', '甚麼都不能；β 粒子不能被阻擋'],
      explain: 'β 粒子可穿過紙張和約一米的空氣，但數毫米的鋁片能把它們吸收。α 粒子會被紙阻擋；γ 射線則需厚鉛板或混凝土才能大幅減弱。'
    }
  },
  {
    id: 'N45', topic: 'nuc', level: 4, sub: 'Radiation properties',
    stem: 'A beam containing α, β and γ radiation passes between two parallel plates with a strong electric field between them (in a vacuum). Which of the following statements is/are correct?',
    statements: [
      'The α particles are deflected towards the positive plate.',
      'The β particles are deflected towards the positive plate.',
      'The γ rays pass through undeflected.'
    ],
    options: STMT_OPTS,
    answer: 3,
    explain: '(1) ✗ α particles are positive, so they are attracted towards the negative plate.<br>(2) ✓ β⁻ particles are negative; being much lighter they are also deflected far more than α particles.<br>(3) ✓ γ rays carry no charge.',
    zh: {
      sub: '輻射的性質',
      stem: '一束含有 α、β 和 γ 輻射的射線（在真空中）穿過兩塊平行金屬板之間，板間有強電場。下列哪項／哪些敘述是正確的？',
      statements: ['α 粒子偏向正板。', 'β 粒子偏向正板。', 'γ 射線不偏轉地通過。'],
      explain: '(1) ✗ α 粒子帶正電，所以被吸向負板。<br>(2) ✓ β⁻ 粒子帶負電；由於輕得多，偏轉亦比 α 粒子大得多。<br>(3) ✓ γ 射線不帶電。'
    }
  },
  {
    id: 'N46', topic: 'nuc', level: 3, sub: 'Detection of radiation',
    stem: 'Which of the following statements about a Geiger–Müller (GM) tube is/are correct?',
    statements: [
      'Radiation entering the tube ionizes the gas inside, producing a pulse of current.',
      'Each ionizing particle detected is recorded as one count.',
      'The tube measures the energy of each particle detected.'
    ],
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: 0,
    explain: '(1) ✓ (2) ✓ The ions produced trigger an avalanche of ionization, giving a pulse that the counter records as one count.<br>(3) ✗ Every detected particle gives a similar pulse, so the GM tube counts particles but cannot measure their energies.',
    zh: {
      sub: '輻射的探測',
      stem: '下列有關蓋革－彌勒（GM）管的敘述，哪項／哪些是正確的？',
      statements: ['進入管內的輻射使管內氣體電離，產生電流脈衝。', '每探測到一粒電離粒子便記錄為一次計數。', 'GM 管能量度每粒被探測粒子的能量。'],
      explain: '(1) ✓ (2) ✓ 產生的離子引發雪崩式電離，形成一個脈衝，計數器把它記為一次計數。<br>(3) ✗ 每粒被探測的粒子產生相似的脈衝，所以 GM 管能計算粒子數目，但不能量度其能量。'
    }
  },
  {
    id: 'N47', topic: 'nuc', level: 3, sub: 'Radioactive decay',
    stem: 'A GM counter placed near a long-lived source records 152, 139, 147 and 160 counts in four successive minutes. Why do the readings vary?',
    options: [
      'The source is getting weaker quickly.',
      'Radioactive decay is a random process.',
      'The GM tube is faulty.',
      'Background radiation is stopped for part of the time.'
    ],
    answer: 1,
    explain: 'It is impossible to predict when a particular nucleus will decay; only the probability is fixed. So the number of decays in equal time intervals fluctuates about an average. For a long-lived source the average itself hardly changes over a few minutes.',
    zh: {
      sub: '放射衰變',
      stem: '放在一個長壽命放射源附近的 GM 計數器在連續四分鐘內分別錄得 152、139、147 和 160 次計數。為甚麼讀數會改變？',
      options: ['放射源迅速減弱。', '放射衰變是隨機的過程。', 'GM 管出現故障。', '本底輻射在部分時間被阻擋。'],
      explain: '無法預測某一個原子核何時衰變，只有衰變的概率是固定的。所以在相等時間內的衰變次數會在平均值附近起伏。對長壽命放射源，平均值在數分鐘內幾乎不變。'
    }
  },
  {
    id: 'N48', topic: 'nuc', level: 3, sub: 'Half-life',
    stem: 'A radioactive sample is heated strongly and placed under high pressure. What happens to its half-life?',
    options: ['It decreases.', 'It increases.', 'It stays the same.', 'It becomes zero.'],
    answer: 2,
    explain: 'Radioactive decay is a nuclear process. It is not affected by physical conditions such as temperature and pressure, or by chemical combination, so the half-life is unchanged.',
    zh: {
      sub: '半衰期',
      stem: '把一個放射性樣本強烈加熱並置於高壓下。它的半衰期會怎樣？',
      options: ['縮短。', '增長。', '不變。', '變為零。'],
      explain: '放射衰變是原子核內的過程，不受溫度、壓強等物理條件或化學結合影響，所以半衰期不變。'
    }
  },
  {
    id: 'N49', topic: 'nuc', level: 2, sub: 'Background radiation',
    stem: 'Which of the following is usually the largest contributor to the background radiation received by people in Hong Kong?',
    options: ['Nuclear power stations', 'Microwave ovens', 'Mobile phones', 'Radon gas from rocks and building materials'],
    answer: 3,
    explain: 'Radon is a radioactive gas released by uranium in granite, soil and building materials such as concrete. It collects indoors and is the largest natural source of radiation dose for most people. Microwave ovens and mobile phones emit non-ionizing radiation, and nuclear power stations contribute very little.',
    zh: {
      sub: '本底輻射',
      stem: '下列哪項通常是香港市民所受本底輻射的最大來源？',
      options: ['核電廠', '微波爐', '手提電話', '來自岩石和建築材料的氡氣'],
      explain: '氡是花崗岩、泥土及混凝土等建築材料中的鈾所釋出的放射性氣體。它積聚在室內，是大多數人所受輻射劑量的最大天然來源。微波爐和手提電話發出非電離輻射，核電廠的貢獻則很少。'
    }
  },
  {
    id: 'N50', topic: 'nuc', level: 4, sub: 'Radiation safety',
    stem: 'An α source is relatively safe outside the body but very dangerous if swallowed or breathed in. Why?',
    options: [
      'Outside the body the α particles are stopped by the dead outer layer of skin, but inside they deposit all their energy in living tissue nearby.',
      'α particles become γ rays inside the body.',
      'The half-life is shorter inside the body.',
      'α particles can pass through the whole body.'
    ],
    answer: 0,
    explain: 'α particles have a very short range: outside the body they are stopped by air or the dead outer skin. Inside the body, the source sits next to living cells, and the strongly ionizing α particles give up all their energy in a very small volume of tissue, causing severe damage.',
    zh: {
      sub: '輻射安全',
      stem: 'α 放射源在體外相對安全，但若被吞下或吸入便非常危險。為甚麼？',
      options: ['在體外 α 粒子被皮膚外層的死細胞阻擋，但在體內它們把全部能量傳給附近的活組織。', 'α 粒子在體內變成 γ 射線。', '在體內半衰期較短。', 'α 粒子能穿過整個身體。'],
      explain: 'α 粒子射程極短：在體外會被空氣或皮膚外層的死細胞阻擋。在體內，放射源緊貼活細胞，電離作用強的 α 粒子在極小範圍的組織內釋出全部能量，造成嚴重損害。'
    }
  },
  {
    id: 'N51', topic: 'nuc', level: 3, sub: 'Radiation safety',
    stem: 'The γ radiation from a small source gives a dose rate X at a distance of 1 m. Neglecting absorption by the air, what is the dose rate at 2 m?',
    options: ['X / 8', 'X / 4', 'X / 2', '2X'],
    answer: 1,
    explain: 'γ rays from a point source spread out over a sphere of area 4πr², so the intensity follows an inverse-square law. Doubling the distance gives X / 2² = X / 4. This is why keeping your distance is an effective safety measure.',
    zh: {
      sub: '輻射安全',
      stem: '一個細小放射源的 γ 輻射在 1 m 處的劑量率為 X。忽略空氣的吸收，在 2 m 處的劑量率是多少？',
      explain: '點源發出的 γ 射線散佈在面積為 4πr² 的球面上，所以強度遵從平方反比定律。距離加倍，劑量率變為 X / 2² = X / 4。這就是保持距離是有效安全措施的原因。'
    }
  },
  {
    id: 'N52', topic: 'nuc', level: 3, sub: 'Radiation safety',
    stem: 'The sievert (Sv) is a unit used to measure',
    options: ['the activity of a radioactive source.', 'the number of undecayed nuclei.', 'the equivalent dose, which takes account of the biological effect of radiation.', 'the energy released in a single decay.'],
    answer: 2,
    explain: 'The equivalent dose measures the likely biological harm from absorbed radiation, allowing for the fact that some types (such as α) do more damage per joule. Its unit is the sievert. Activity is measured in becquerels.',
    zh: {
      sub: '輻射安全',
      stem: '希沃特（Sv）是用來量度',
      options: ['放射源的放射強度。', '未衰變原子核的數目。', '等效劑量，它考慮了輻射對生物的影響。', '一次衰變釋放的能量。'],
      explain: '等效劑量量度吸收輻射可能造成的生物損害，並考慮到某些輻射（例如 α）每焦耳造成的損害較大。它的單位是希沃特。放射強度則以貝可量度。'
    }
  },
  {
    id: 'N53', topic: 'nuc', level: 3, sub: 'Radioactive decay',
    stem: 'What happens inside a nucleus when it emits a β⁻ particle?',
    options: [
      'A proton changes into a neutron.',
      'An electron orbiting the nucleus is ejected.',
      'Two protons and two neutrons are emitted together.',
      'A neutron changes into a proton and an electron, and the electron is emitted.'
    ],
    answer: 3,
    explain: 'In β⁻ decay a neutron in the nucleus changes into a proton, which stays, and an electron, which is emitted at high speed. So Z increases by 1 and the nucleon number is unchanged. The β particle does not come from the electron shells.',
    zh: {
      sub: '放射衰變',
      stem: '原子核放出 β⁻ 粒子時，核內發生了甚麼？',
      options: ['一個質子變為中子。', '一個繞原子核運行的電子被射出。', '兩個質子和兩個中子一起被射出。', '一個中子變為一個質子和一個電子，電子被射出。'],
      explain: '在 β⁻ 衰變中，原子核內的一個中子變為一個質子（留在核內）和一個電子（以高速射出）。所以 Z 增加 1，核子數不變。β 粒子並非來自電子殼層。'
    }
  },
  {
    id: 'N54', topic: 'nuc', level: 3, sub: 'Radioactive decay',
    stem: 'An excited nucleus emits a γ ray. What happens to its nucleon number and atomic number?',
    options: ['Both stay the same.', 'The nucleon number decreases by 4; the atomic number decreases by 2.', 'The nucleon number is unchanged; the atomic number increases by 1.', 'Both decrease by 1.'],
    answer: 0,
    explain: 'A γ ray is a packet of electromagnetic energy with no mass and no charge. Emitting it lowers the energy of the nucleus but changes neither the number of protons nor the number of neutrons. (B describes α decay and C β⁻ decay.)',
    zh: {
      sub: '放射衰變',
      stem: '一個受激的原子核放出一條 γ 射線。它的核子數和原子序會怎樣？',
      options: ['兩者都不變。', '核子數減少 4；原子序減少 2。', '核子數不變；原子序增加 1。', '兩者都減少 1。'],
      explain: 'γ 射線是一束電磁能量，沒有質量也沒有電荷。放出它降低了原子核的能量，但不改變質子數或中子數。（B 描述 α 衰變，C 描述 β⁻ 衰變。）'
    }
  },
  {
    id: 'N55', topic: 'nuc', level: 4, sub: 'Radioactive decay',
    stem: 'Thorium-232 (²³²₉₀Th) decays through a series of α and β⁻ decays to lead-208 (²⁰⁸₈₂Pb). How many α and β⁻ decays are involved?',
    options: ['4 α and 6 β⁻', '6 α and 4 β⁻', '6 α and 8 β⁻', '8 α and 4 β⁻'],
    answer: 1,
    explain: 'Only α decay changes the nucleon number: (232 − 208) / 4 = 6 α decays.<br>These lower Z by 12, to 78. To reach 82, Z must rise by 4: 4 β⁻ decays.',
    zh: {
      sub: '放射衰變',
      stem: '釷-232（²³²₉₀Th）經一連串 α 衰變和 β⁻ 衰變變成鉛-208（²⁰⁸₈₂Pb）。當中涉及多少次 α 衰變和 β⁻ 衰變？',
      options: ['4 次 α 衰變和 6 次 β⁻ 衰變', '6 次 α 衰變和 4 次 β⁻ 衰變', '6 次 α 衰變和 8 次 β⁻ 衰變', '8 次 α 衰變和 4 次 β⁻ 衰變'],
      explain: '只有 α 衰變改變核子數：(232 − 208) / 4 = 6 次 α 衰變。<br>這使 Z 減少 12，降至 78。要達到 82，Z 須增加 4：4 次 β⁻ 衰變。'
    }
  },
  {
    id: 'N56', topic: 'nuc', level: 2, sub: 'Half-life',
    stem: 'A radioactive source has an activity of 4000 Bq and a half-life of 6 hours. What is its activity after 18 hours?',
    options: ['125 Bq', '250 Bq', '500 Bq', '1333 Bq'],
    answer: 2,
    explain: '18 h = 3 half-lives ⇒ A = 4000 × (½)³ = 500 Bq.<br>1333 Bq divides by 3 instead of by 2³.',
    zh: {
      sub: '半衰期',
      stem: '一個放射源的放射強度為 4000 Bq，半衰期為 6 小時。18 小時後它的放射強度是多少？',
      explain: '18 h = 3 個半衰期 ⇒ A = 4000 × (½)³ = 500 Bq。<br>1333 Bq 是除以 3 而非除以 2³。'
    }
  },
  {
    id: 'N57', topic: 'nuc', level: 3, sub: 'Half-life',
    stem: 'The corrected count rate from a radioactive source falls from 960 counts per minute to 240 counts per minute in 40 minutes. What is the half-life?',
    options: ['5 min', '10 min', '13.3 min', '20 min'],
    answer: 3,
    explain: '960 → 480 → 240 is two halvings, i.e. two half-lives in 40 min ⇒ half-life = 20 min.<br>10 min divides 40 by the ratio 960 / 240 = 4 instead of by the number of half-lives.',
    zh: {
      sub: '半衰期',
      stem: '一個放射源的校正計數率在 40 分鐘內由每分鐘 960 次降至每分鐘 240 次。半衰期是多少？',
      explain: '960 → 480 → 240 是減半兩次，即 40 分鐘內經過兩個半衰期 ⇒ 半衰期 = 20 min。<br>10 min 是把 40 除以比值 960 / 240 = 4，而非除以半衰期的數目。'
    }
  },
  {
    id: 'N58', topic: 'nuc', level: 3, sub: 'Decay constant',
    stem: 'A sample contains 5.0 × 10¹² undecayed nuclei of a nuclide whose decay constant is 2.0 × 10⁻⁵ s⁻¹. What is the activity of the sample?',
    options: ['1.0 × 10⁸ Bq', '3.5 × 10¹² Bq', '5.0 × 10¹² Bq', '2.5 × 10¹⁷ Bq'],
    answer: 0,
    explain: 'A = kN = 2.0 × 10⁻⁵ × 5.0 × 10¹² = 1.0 × 10⁸ Bq (decays per second).<br>2.5 × 10¹⁷ divides N by k instead of multiplying.',
    zh: {
      sub: '衰變常數',
      stem: '一個樣本含有 5.0 × 10¹² 個未衰變的原子核，該核素的衰變常數為 2.0 × 10⁻⁵ s⁻¹。樣本的放射強度是多少？',
      explain: 'A = kN = 2.0 × 10⁻⁵ × 5.0 × 10¹² = 1.0 × 10⁸ Bq（每秒衰變次數）。<br>2.5 × 10¹⁷ 是把 N 除以 k 而非相乘。'
    }
  },
  {
    id: 'N59', topic: 'nuc', level: 3, sub: 'Decay constant',
    stem: 'A nuclide has a half-life of 10 minutes. What is its decay constant?',
    options: ['1.93 × 10⁻⁵ s⁻¹', '1.16 × 10⁻³ s⁻¹', '6.93 × 10⁻² s⁻¹', '0.100 s⁻¹'],
    answer: 1,
    explain: 'k = ln 2 / t<sub>½</sub> = 0.693 / (10 × 60 s) = 1.16 × 10⁻³ s⁻¹.<br>6.93 × 10⁻² is the value per minute, not per second; 0.100 is 1/t<sub>½</sub> without ln 2.',
    zh: {
      sub: '衰變常數',
      stem: '某核素的半衰期為 10 分鐘。它的衰變常數是多少？',
      explain: 'k = ln 2 / t<sub>½</sub> = 0.693 / (10 × 60 s) = 1.16 × 10⁻³ s⁻¹。<br>6.93 × 10⁻² 是每分鐘的數值，而非每秒；0.100 是 1/t<sub>½</sub>，漏了 ln 2。'
    }
  },
  {
    id: 'N60', topic: 'nuc', level: 5, sub: 'Decay law',
    stem: 'A radioactive nuclide has a decay constant of 0.10 h⁻¹. What percentage of the original nuclei remains undecayed after 5.0 hours?',
    options: ['39.3 %', '50.0 %', '60.7 %', '95.1 %'],
    answer: 2,
    explain: 'N / N₀ = e^(−kt) = e^(−0.10 × 5.0) = e^(−0.50) = 0.607 = 60.7 %.<br>39.3 % is the percentage that has decayed; 50.0 % assumes 10 % decays each hour.',
    zh: {
      sub: '衰變定律',
      stem: '某放射性核素的衰變常數為 0.10 h⁻¹。5.0 小時後，原來的原子核中有百分之幾仍未衰變？',
      explain: 'N / N₀ = e^(−kt) = e^(−0.10 × 5.0) = e^(−0.50) = 0.607 = 60.7 %。<br>39.3 % 是已衰變的百分比；50.0 % 假設每小時衰變 10 %。'
    }
  },
  {
    id: 'N61', topic: 'nuc', level: 3, sub: 'Uses of radioisotopes',
    stem: 'A household smoke detector contains a small radioactive source that ionizes the air in a chamber, so that a small current flows. Which source is most suitable?',
    options: ['A γ source, because γ rays penetrate smoke', 'A β source with a half-life of a few days', 'An α source with a half-life of a few hours', 'An α source with a half-life of several hundred years'],
    answer: 3,
    explain: 'α particles ionize air strongly, giving a measurable current, and their short range means they do not escape from the detector. Smoke particles absorb the α particles and the current drops, triggering the alarm. A long half-life (americium-241: 432 years) means the source lasts the life of the detector.',
    zh: {
      sub: '放射性同位素的應用',
      stem: '家用煙霧探測器內有一個細小的放射源，使一個小室內的空氣電離，從而有微弱電流流動。哪一種放射源最適合？',
      options: ['γ 放射源，因為 γ 射線能穿過煙霧', '半衰期為數天的 β 放射源', '半衰期為數小時的 α 放射源', '半衰期為數百年的 α 放射源'],
      explain: 'α 粒子使空氣強烈電離，產生可量度的電流，而且射程短，不會從探測器漏出。煙粒吸收 α 粒子，電流下降，便觸發警報。半衰期長（鎇-241：432 年）使放射源可用至探測器報廢。'
    }
  },
  {
    id: 'N62', topic: 'nuc', level: 3, sub: 'Uses of radioisotopes',
    stem: 'Sealed packs of syringes are sterilized by exposing them to radiation. Which radiation is used, and why?',
    options: [
      'γ rays, because they kill bacteria and can penetrate the sealed packaging',
      'α particles, because they are the most penetrating',
      'β particles, because they make the syringes radioactive',
      'Infra-red, because it heats the syringes'
    ],
    answer: 0,
    explain: 'γ rays pass through the packaging and the syringes and kill microorganisms by ionizing their molecules. The items are sterilized after sealing, so they stay sterile. Irradiation by γ rays does not make objects radioactive.',
    zh: {
      sub: '放射性同位素的應用',
      stem: '把一包包已密封的注射器暴露於輻射中以作消毒。使用哪一種輻射？為甚麼？',
      options: ['γ 射線，因為它能殺死細菌並能穿透密封包裝', 'α 粒子，因為它的穿透力最強', 'β 粒子，因為它會使注射器帶放射性', '紅外線，因為它會加熱注射器'],
      explain: 'γ 射線能穿過包裝和注射器，令微生物的分子電離而殺死它們。物件在密封後才消毒，所以保持無菌。γ 射線照射不會使物件帶放射性。'
    }
  },
  {
    id: 'N63', topic: 'nuc', level: 4, sub: 'Uses of radioisotopes',
    stem: 'Engineers want to find a leak in a pipe buried 1 m underground by adding a radioisotope to the water and checking for radiation at the surface. Which radioisotope is most suitable?',
    options: ['An α emitter with a half-life of a few hours', 'A γ emitter with a half-life of a few hours', 'A γ emitter with a half-life of several years', 'A β emitter with a half-life of several years'],
    answer: 1,
    explain: 'The radiation must pass through about a metre of soil to reach the detector, so it must be γ. A half-life of a few hours is long enough for the test, but the tracer soon decays so it does not contaminate the area for long.',
    zh: {
      sub: '放射性同位素的應用',
      stem: '工程師要找出埋在地下 1 m 的水管的漏水處，方法是在水中加入放射性同位素，然後在地面檢查輻射。哪一種放射性同位素最適合？',
      options: ['半衰期為數小時的 α 放射體', '半衰期為數小時的 γ 放射體', '半衰期為數年的 γ 放射體', '半衰期為數年的 β 放射體'],
      explain: '輻射須穿過約一米的泥土才能到達探測器，所以必須是 γ。數小時的半衰期足夠進行測試，而示蹤劑很快衰變，不會長期污染該區。'
    }
  },
  {
    id: 'N64', topic: 'nuc', level: 4, sub: 'Radioactive dating',
    stem: 'Which of the following statements about dating rocks using a radioactive parent nuclide that decays to a stable daughter nuclide is/are correct?',
    statements: [
      'The age is found from the ratio of daughter nuclei to parent nuclei in the rock.',
      'The method assumes that the rock contained none of the daughter nuclide when it formed.',
      'Carbon-14 is the most suitable nuclide for dating rocks that are millions of years old.'
    ],
    options: STMT_OPTS,
    answer: 2,
    explain: '(1) ✓ The more daughter relative to parent, the more half-lives have passed.<br>(2) ✓ Any daughter present from the start (or escaping later) would give a wrong age.<br>(3) ✗ Carbon-14 has a half-life of only 5730 years, so after millions of years none would be left. Rocks are dated with long-lived nuclides such as uranium-238 or potassium-40.',
    zh: {
      sub: '放射性年代測定',
      stem: '利用衰變成穩定子核素的放射性母核素測定岩石年代，下列哪項／哪些敘述是正確的？',
      statements: ['年齡由岩石中子核與母核的比例求出。', '這方法假設岩石形成時不含子核素。', '碳-14 是測定數百萬年岩石年代最適合的核素。'],
      explain: '(1) ✓ 子核相對母核越多，經過的半衰期越多。<br>(2) ✓ 若一開始已有子核（或其後逸出），所得年齡便不正確。<br>(3) ✗ 碳-14 的半衰期只有 5730 年，數百萬年後已全部衰變。岩石年代須用長壽命核素如鈾-238 或鉀-40 測定。'
    }
  },
  {
    id: 'N65', topic: 'nuc', level: 3, sub: 'Radioactive dating',
    stem: 'Why can carbon-14 dating NOT be used to find the age of a 65-million-year-old dinosaur bone?',
    options: [
      'Dinosaur bones do not contain carbon.',
      'Carbon-14 decays faster in bone.',
      'Background radiation affects old bones more.',
      'After so many half-lives (5730 years each), practically no carbon-14 remains to be measured.'
    ],
    answer: 3,
    explain: '65 million years is more than 11 000 half-lives of carbon-14, so the fraction remaining, (½)^11 000, is far too small to measure. Carbon dating works for organic materials up to about 50 000 years old.',
    zh: {
      sub: '放射性年代測定',
      stem: '為甚麼不能用碳-14 測定一塊 6500 萬年的恐龍骨的年代？',
      options: ['恐龍骨不含碳。', '碳-14 在骨中衰變得較快。', '本底輻射對古老骨骼的影響較大。', '經過這麼多個半衰期（每個 5730 年），幾乎沒有碳-14 剩下可供量度。'],
      explain: '6500 萬年超過碳-14 的 11 000 個半衰期，剩下的比例 (½)^11 000 小得無法量度。碳年代測定法只適用於約 50 000 年以內的有機物料。'
    }
  },
  {
    id: 'N66', topic: 'nuc', level: 3, sub: 'Mass–energy',
    stem: 'What is the energy equivalent of 1.0 g of mass?<br>(Speed of light c = 3.0 × 10⁸ m s⁻¹)',
    options: ['9.0 × 10¹³ J', '9.0 × 10¹⁴ J', '9.0 × 10¹⁶ J', '9.0 × 10¹⁹ J'],
    answer: 0,
    explain: 'E = mc² = 1.0 × 10⁻³ × (3.0 × 10⁸)² = 9.0 × 10¹³ J — roughly the energy released by 20 000 tonnes of TNT.<br>9.0 × 10¹⁶ J is the value for 1 kg.',
    zh: {
      sub: '質能關係',
      stem: '1.0 g 質量相當於多少能量？<br>（光速 c = 3.0 × 10⁸ m s⁻¹）',
      explain: 'E = mc² = 1.0 × 10⁻³ × (3.0 × 10⁸)² = 9.0 × 10¹³ J — 約相當於 20 000 噸 TNT 釋放的能量。<br>9.0 × 10¹⁶ J 是 1 kg 的數值。'
    }
  },
  {
    id: 'N67', topic: 'nuc', level: 3, sub: 'Mass–energy',
    stem: 'In a fission reaction the total mass of the products is 0.20 u less than that of the reactants. How much energy is released?<br>(1 u is equivalent to 931 MeV)',
    options: ['2.15 × 10⁻⁴ MeV', '186 MeV', '931 MeV', '4660 MeV'],
    answer: 1,
    explain: 'E = 0.20 × 931 = 186 MeV — typical of a single uranium fission.<br>2.15 × 10⁻⁴ MeV divides 0.20 by 931; 4660 MeV divides 931 by 0.20.',
    zh: {
      sub: '質能關係',
      stem: '在一個裂變反應中，生成物的總質量比反應物少 0.20 u。釋放了多少能量？<br>（1 u 相當於 931 MeV）',
      explain: 'E = 0.20 × 931 = 186 MeV — 這是單次鈾裂變的典型數值。<br>2.15 × 10⁻⁴ MeV 是 0.20 除以 931；4660 MeV 是 931 除以 0.20。'
    }
  },
  {
    id: 'N68', topic: 'nuc', level: 3, sub: 'Nuclear fission',
    stem: 'Which of the following statements about a chain reaction in uranium-235 is/are correct?',
    statements: [
      'Each fission releases two or three neutrons.',
      'These neutrons can cause further fissions.',
      'A chain reaction can be sustained in a piece of uranium-235 of any size.'
    ],
    options: STMT_OPTS,
    answer: 2,
    explain: '(1) ✓ (2) ✓ This is what allows the reaction to sustain itself.<br>(3) ✗ In a small piece too many neutrons escape through the surface before causing fission. A minimum (critical) mass is needed for a self-sustaining chain reaction.',
    zh: {
      sub: '核裂變',
      stem: '下列有關鈾-235 鏈式反應的敘述，哪項／哪些是正確的？',
      statements: ['每次裂變釋放兩至三個中子。', '這些中子可引發更多裂變。', '任何大小的鈾-235 都能維持鏈式反應。'],
      explain: '(1) ✓ (2) ✓ 這使反應可以自行維持。<br>(3) ✗ 在細小的鈾塊中，太多中子在引發裂變前已從表面逸出。要維持鏈式反應，需要達到最低（臨界）質量。'
    }
  },
  {
    id: 'N69', topic: 'nuc', level: 3, sub: 'Nuclear reactor',
    stem: 'Which part of a nuclear fission reactor absorbs neutrons in order to control the rate of the reaction?',
    options: ['The moderator', 'The coolant', 'The fuel rods', 'The control rods'],
    answer: 3,
    explain: 'Control rods (made of boron or cadmium) absorb neutrons; lowering them further into the core slows the chain reaction. The moderator slows neutrons down, the coolant carries heat away, and the fuel rods contain the uranium.',
    zh: {
      sub: '核反應堆',
      stem: '核裂變反應堆中，哪一部分吸收中子以控制反應的速率？',
      options: ['減速劑', '冷卻劑', '燃料棒', '控制棒'],
      explain: '控制棒（由硼或鎘製成）吸收中子；把它們進一步插入堆芯可減慢鏈式反應。減速劑使中子減速，冷卻劑把熱帶走，燃料棒則載有鈾。'
    }
  },
  {
    id: 'N70', topic: 'nuc', level: 4, sub: 'Nuclear reactor',
    stem: 'What is the purpose of the moderator in a nuclear fission reactor?',
    options: [
      'To slow the neutrons down so that they are more likely to cause fission of uranium-235',
      'To absorb neutrons and stop the reaction',
      'To carry thermal energy from the core to the boilers',
      'To shield workers from γ radiation'
    ],
    answer: 0,
    explain: 'Fission releases fast neutrons, but uranium-235 is much more likely to absorb slow (thermal) neutrons. The moderator (such as water or graphite) slows the neutrons by collisions without absorbing many of them.',
    zh: {
      sub: '核反應堆',
      stem: '核裂變反應堆中減速劑的作用是甚麼？',
      options: ['使中子減速，令它們更有可能引發鈾-235 裂變', '吸收中子以停止反應', '把熱能由堆芯帶到鍋爐', '保護工作人員免受 γ 輻射'],
      explain: '裂變釋放的是快中子，但鈾-235 更容易吸收慢（熱）中子。減速劑（例如水或石墨）透過碰撞使中子減速，而不會吸收太多中子。'
    }
  },
  {
    id: 'N71', topic: 'nuc', level: 2, sub: 'Nuclear fusion',
    stem: 'Which process releases the energy that powers the Sun?',
    options: ['Fission of uranium nuclei', 'Fusion of hydrogen nuclei to form helium', 'Radioactive decay of carbon-14', 'Burning of hydrogen gas in oxygen'],
    answer: 1,
    explain: 'In the Sun\'s core, the extremely high temperature and pressure allow hydrogen nuclei to fuse into helium. The products have less mass than the reactants, and the difference is released as energy (E = Δmc²).',
    zh: {
      sub: '核聚變',
      stem: '哪一個過程釋放推動太陽的能量？',
      options: ['鈾原子核的裂變', '氫原子核聚變成氦', '碳-14 的放射衰變', '氫氣在氧氣中燃燒'],
      explain: '在太陽核心，極高的溫度和壓強使氫原子核聚變成氦。生成物的質量比反應物少，差額以能量形式釋放（E = Δmc²）。'
    }
  },
  {
    id: 'N72', topic: 'nuc', level: 4, sub: 'Nuclear fusion',
    stem: 'Why does nuclear fusion need an extremely high temperature?',
    options: [
      'To make the nuclei radioactive',
      'To melt the fuel',
      'So that the positively charged nuclei have enough kinetic energy to overcome their electrostatic repulsion and get close enough to fuse',
      'To produce neutrons for a chain reaction'
    ],
    answer: 2,
    explain: 'Nuclei are positively charged and repel each other strongly. Only at temperatures of millions of kelvin do they move fast enough to get close enough for the short-range nuclear force to make them fuse.',
    zh: {
      sub: '核聚變',
      stem: '為甚麼核聚變需要極高的溫度？',
      options: ['使原子核帶放射性', '使燃料熔化', '使帶正電的原子核有足夠動能克服彼此的靜電斥力，靠得夠近而聚變', '產生中子以維持鏈式反應'],
      explain: '原子核帶正電，彼此強烈排斥。只有在數百萬開爾文的溫度下，它們才運動得夠快，靠得夠近，讓短程的核力使它們聚變。'
    }
  },
  {
    id: 'N73', topic: 'nuc', level: 3, sub: 'Nuclear energy',
    stem: 'Which of the following statements about nuclear fission power stations is/are correct?',
    statements: [
      'They release large amounts of carbon dioxide while generating electricity.',
      'They produce radioactive waste that stays dangerous for a very long time.',
      'A small mass of fuel releases a very large amount of energy.'
    ],
    options: STMT_OPTS,
    answer: 3,
    explain: '(1) ✗ Fission does not involve burning, so very little CO₂ is released in operation.<br>(2) ✓ Some fission products and spent fuel have long half-lives and must be stored safely for thousands of years.<br>(3) ✓ About 8 × 10¹³ J is released per kg of uranium-235, millions of times more than burning a fuel.',
    zh: {
      sub: '核能',
      stem: '下列有關核裂變發電廠的敘述，哪項／哪些是正確的？',
      statements: ['發電時會釋放大量二氧化碳。', '產生的放射性廢料在很長時間內仍然危險。', '少量燃料便能釋放極大量的能量。'],
      explain: '(1) ✗ 裂變不涉及燃燒，運作時釋放的二氧化碳極少。<br>(2) ✓ 部分裂變產物和用過的燃料半衰期很長，必須安全貯存數千年。<br>(3) ✓ 每千克鈾-235 釋放約 8 × 10¹³ J，比燃燒燃料多數百萬倍。'
    }
  },
  {
    id: 'N74', topic: 'nuc', level: 3, sub: 'X-rays',
    stem: 'How are X-rays produced in an X-ray tube?',
    options: [
      'Fast-moving electrons strike a heavy-metal target.',
      'A radioactive source emits them.',
      'A hot filament glows very brightly.',
      'Protons are accelerated through a magnetic field.'
    ],
    answer: 0,
    explain: 'Electrons from a hot cathode are accelerated through a high p.d. (tens of kV) and hit a heavy-metal target such as tungsten. As they are suddenly stopped, a small fraction of their energy is emitted as X-rays; most becomes heat in the target.',
    zh: {
      sub: 'X 射線',
      stem: 'X 射線管怎樣產生 X 射線？',
      options: ['高速運動的電子撞擊重金屬靶。', '放射源發出 X 射線。', '熾熱的燈絲發出強光。', '質子在磁場中被加速。'],
      explain: '熱陰極發出的電子經高電勢差（數十 kV）加速，撞擊鎢等重金屬靶。電子突然停下時，小部分能量以 X 射線形式發出；大部分則變為靶的熱。'
    }
  },
  {
    id: 'N75', topic: 'nuc', level: 3, sub: 'X-rays',
    stem: 'Why do bones show up clearly on a medical X-ray image?',
    options: [
      'Bones emit X-rays.',
      'Bones absorb X-rays much more than soft tissue does.',
      'X-rays are reflected by bones.',
      'X-rays travel faster through bone.'
    ],
    answer: 1,
    explain: 'Bone contains heavier elements such as calcium and is denser, so it absorbs more X-rays than muscle or fat. Fewer X-rays reach the detector behind the bone, leaving a clear "shadow" of the skeleton.',
    zh: {
      sub: 'X 射線',
      stem: '為甚麼骨骼在醫學 X 光片上清晰可見？',
      options: ['骨骼發出 X 射線。', '骨骼吸收 X 射線的程度遠比軟組織大。', 'X 射線被骨骼反射。', 'X 射線在骨中傳播得較快。'],
      explain: '骨骼含鈣等較重的元素，而且密度較大，所以吸收的 X 射線比肌肉或脂肪多。到達骨後探測器的 X 射線較少，便形成骨骼清晰的「影子」。'
    }
  },
  {
    id: 'N76', topic: 'nuc', level: 4, sub: 'X-rays',
    stem: 'Which of the following statements about X-rays and γ rays is/are correct?',
    statements: [
      'Both are electromagnetic waves.',
      'Both can ionize atoms.',
      'X-rays are emitted by unstable nuclei.'
    ],
    options: STMT_OPTS,
    answer: 2,
    explain: '(1) ✓ Both are short-wavelength electromagnetic radiation, travelling at the speed of light.<br>(2) ✓ Both carry enough energy per photon to ionize atoms, so exposure must be limited.<br>(3) ✗ X-rays are produced when fast electrons are decelerated (outside the nucleus); γ rays come from unstable nuclei.',
    zh: {
      sub: 'X 射線',
      stem: '下列有關 X 射線和 γ 射線的敘述，哪項／哪些是正確的？',
      statements: ['兩者都是電磁波。', '兩者都能使原子電離。', 'X 射線由不穩定的原子核發出。'],
      explain: '(1) ✓ 兩者都是短波長的電磁輻射，以光速傳播。<br>(2) ✓ 兩者每個光子都有足夠能量使原子電離，所以必須限制照射。<br>(3) ✗ X 射線是高速電子減速時（在原子核外）產生的；γ 射線則來自不穩定的原子核。'
    }
  },
  {
    id: 'N77', topic: 'nuc', level: 2, sub: 'Radiation safety',
    stem: 'Workers in a hospital radiology department wear film badges. What is the purpose of a film badge?',
    options: [
      'To shield the worker from radiation',
      'To show the activity of the sources in use',
      'To absorb radiation and make it harmless',
      'To record the dose of radiation the worker has received'
    ],
    answer: 3,
    explain: 'Photographic film darkens when exposed to ionizing radiation. Windows of different absorbers in the badge show which types of radiation were received, and the degree of darkening shows the dose, which is checked regularly. The badge does not protect the wearer.',
    zh: {
      sub: '輻射安全',
      stem: '醫院放射科的工作人員佩戴菲林章。菲林章的作用是甚麼？',
      options: ['保護工作人員免受輻射', '顯示所用放射源的放射強度', '吸收輻射使之無害', '記錄工作人員接收的輻射劑量'],
      explain: '感光菲林受電離輻射照射後會變黑。章內不同吸收物的窗口顯示接收了哪些類型的輻射，變黑的程度則顯示劑量，並定期檢查。菲林章並不能保護佩戴者。'
    }
  },
  {
    id: 'N78', topic: 'nuc', level: 3, sub: 'Radiation safety',
    stem: 'Which of the following reduce(s) the dose received by a person working with a γ source?',
    statements: [
      'Working further away from the source',
      'Reducing the time spent near the source',
      'Looking directly at the source to check it is still there'
    ],
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: 0,
    explain: 'The three basic rules are distance, time and shielding.<br>(1) ✓ The dose rate falls rapidly with distance.<br>(2) ✓ Dose = dose rate × time.<br>(3) ✗ This only increases exposure (and the eyes are sensitive tissue).',
    zh: {
      sub: '輻射安全',
      stem: '下列哪項／哪些能減少處理 γ 放射源的人所接收的劑量？',
      statements: ['在距放射源較遠處工作', '減少在放射源附近逗留的時間', '直接注視放射源以確定它仍在原位'],
      explain: '三個基本原則是距離、時間和屏蔽。<br>(1) ✓ 劑量率隨距離迅速下降。<br>(2) ✓ 劑量 = 劑量率 × 時間。<br>(3) ✗ 這只會增加照射（而且眼睛是敏感的組織）。'
    }
  },
  {
    id: 'N79', topic: 'nuc', level: 5, sub: 'Half-life',
    stem: 'Samples of nuclide X (half-life 2 days) and nuclide Y (half-life 6 days) initially contain the same number of undecayed nuclei. What is the ratio (activity of X) : (activity of Y) after 6 days?',
    options: ['0.25', '0.75', '1.0', '3.0'],
    answer: 1,
    explain: 'A = kN with k = ln 2 / t<sub>½</sub>, so k<sub>X</sub> = 3k<sub>Y</sub>.<br>After 6 days: X has passed 3 half-lives (N/8), Y one half-life (N/2).<br>A<sub>X</sub> / A<sub>Y</sub> = 3 × (1/8) / (1/2) = 0.75.<br>3.0 is the ratio at the start; X\'s faster decay has since reduced its share.',
    zh: {
      sub: '半衰期',
      stem: '核素 X（半衰期 2 天）和核素 Y（半衰期 6 天）的樣本起初含有相同數目的未衰變原子核。6 天後（X 的放射強度）:（Y 的放射強度）之比是多少？',
      explain: 'A = kN，k = ln 2 / t<sub>½</sub>，所以 k<sub>X</sub> = 3k<sub>Y</sub>。<br>6 天後：X 經過 3 個半衰期（N/8），Y 經過一個半衰期（N/2）。<br>A<sub>X</sub> / A<sub>Y</sub> = 3 × (1/8) / (1/2) = 0.75。<br>3.0 是開始時的比值；X 衰變較快，其後所佔的比例已減少。'
    }
  },
  {
    id: 'N80', topic: 'nuc', level: 2, sub: 'Activity',
    stem: 'An activity of 1 becquerel (Bq) means',
    options: ['one decay per minute.', 'one decay per hour.', 'one decay per second.', 'one undecayed nucleus per gram.'],
    answer: 2,
    explain: 'Activity is the number of nuclei decaying per unit time; 1 Bq = 1 decay per second.',
    zh: {
      sub: '放射強度',
      stem: '放射強度為 1 貝可（Bq）表示',
      options: ['每分鐘一次衰變。', '每小時一次衰變。', '每秒一次衰變。', '每克有一個未衰變的原子核。'],
      explain: '放射強度是每單位時間衰變的原子核數目；1 Bq = 每秒一次衰變。'
    }
  },
  {
    id: 'N81', topic: 'nuc', level: 3, sub: 'Detection of radiation',
    stem: 'Which of the following would increase the count rate recorded by a GM counter from a γ source?',
    options: ['Heating the source', 'Moving the GM tube further from the source', 'Putting a sheet of paper between the source and the tube', 'Moving the GM tube closer to the source'],
    answer: 3,
    explain: 'γ intensity increases as the detector moves closer (inverse-square law). Heating does not affect decay; moving away reduces the count rate; paper hardly affects γ rays.',
    zh: {
      sub: '輻射的探測',
      stem: '下列哪項會增加 GM 計數器從一個 γ 放射源錄得的計數率？',
      options: ['加熱放射源', '把 GM 管移離放射源', '在放射源和 GM 管之間放一張紙', '把 GM 管移近放射源'],
      explain: '探測器移近時 γ 強度增加（平方反比定律）。加熱不影響衰變；移遠會使計數率下降；紙張對 γ 射線幾乎沒有影響。'
    }
  },
  {
    id: 'N82', topic: 'nuc', level: 3, sub: 'Uses of radioisotopes',
    stem: 'Iodine-131 can be used to study or treat the thyroid gland. Why does it collect in the thyroid?',
    options: [
      'It is chemically identical to stable iodine, which the thyroid absorbs.',
      'Its γ rays are attracted to the thyroid.',
      'It has a very long half-life.',
      'It is heavier than stable iodine.'
    ],
    answer: 0,
    explain: 'Isotopes of an element have the same chemical properties. The thyroid takes up iodine from the blood and cannot tell iodine-131 from stable iodine, so the radioactive iodine collects there, where its radiation can be detected or used to destroy diseased tissue.',
    zh: {
      sub: '放射性同位素的應用',
      stem: '碘-131 可用來研究或治療甲狀腺。為甚麼它會積聚在甲狀腺？',
      options: ['它的化學性質與穩定的碘相同，而甲狀腺會吸收碘。', '它的 γ 射線被甲狀腺吸引。', '它的半衰期很長。', '它比穩定的碘重。'],
      explain: '同一元素的同位素化學性質相同。甲狀腺從血液中吸收碘，不能分辨碘-131 和穩定的碘，所以放射性碘積聚在那裏，其輻射可被探測或用來摧毀病變組織。'
    }
  },
  {
    id: 'N83', topic: 'nuc', level: 5, sub: 'Mass–energy',
    stem: 'Polonium-210 decays by α emission: ²¹⁰₈₄Po → ²⁰⁶₈₂Pb + ⁴₂He. How much energy is released in each decay?<br>(Masses: ²¹⁰Po = 209.98287 u, ²⁰⁶Pb = 205.97446 u, ⁴He = 4.00260 u; 1 u is equivalent to 931 MeV)',
    options: ['0.00581 MeV', '5.41 MeV', '931 MeV', '3730 MeV'],
    answer: 1,
    explain: 'Mass of products = 205.97446 + 4.00260 = 209.97706 u.<br>Δm = 209.98287 − 209.97706 = 0.00581 u ⇒ E = 0.00581 × 931 = 5.41 MeV.<br>0.00581 is the mass defect in u, not yet converted to MeV.',
    zh: {
      sub: '質能關係',
      stem: '釙-210 以 α 衰變：²¹⁰₈₄Po → ²⁰⁶₈₂Pb + ⁴₂He。每次衰變釋放多少能量？<br>（質量：²¹⁰Po = 209.98287 u，²⁰⁶Pb = 205.97446 u，⁴He = 4.00260 u；1 u 相當於 931 MeV）',
      explain: '生成物的質量 = 205.97446 + 4.00260 = 209.97706 u。<br>Δm = 209.98287 − 209.97706 = 0.00581 u ⇒ E = 0.00581 × 931 = 5.41 MeV。<br>0.00581 是以 u 計的質量差，尚未換算為 MeV。'
    }
  },
  {
    id: 'N84', topic: 'nuc', level: 3, sub: 'Radioactive decay',
    stem: 'Polonium-210 (²¹⁰₈₄Po) emits an α particle. What is the daughter nucleus?',
    options: ['²¹⁰₈₅At', '²⁰⁶₈₄Po', '²⁰⁶₈₂Pb', '²¹⁴₈₆Rn'],
    answer: 2,
    explain: 'α emission removes 2 protons and 2 neutrons: A = 210 − 4 = 206, Z = 84 − 2 = 82, which is lead: ²⁰⁶₈₂Pb. ²¹⁴₈₆Rn adds the α particle instead of removing it.',
    zh: {
      sub: '放射衰變',
      stem: '釙-210（²¹⁰₈₄Po）放出一粒 α 粒子。子核是甚麼？',
      explain: 'α 衰變移走 2 個質子和 2 個中子：A = 210 − 4 = 206，Z = 84 − 2 = 82，即鉛：²⁰⁶₈₂Pb。²¹⁴₈₆Rn 是錯誤地加上而非減去 α 粒子。'
    }
  },
  {
    id: 'N85', topic: 'nuc', level: 4, sub: 'Nuclear reactions',
    stem: 'In the first artificial nuclear transformation, nitrogen was bombarded with α particles: ¹⁴₇N + ⁴₂He → ¹⁷₈O + X. What is X?',
    options: ['A neutron', 'An electron', 'An α particle', 'A proton'],
    answer: 3,
    explain: 'Nucleon number: 14 + 4 = 17 + A ⇒ A = 1. Atomic number: 7 + 2 = 8 + Z ⇒ Z = 1. A particle with A = 1 and Z = 1 is a proton, ¹₁H.',
    zh: {
      sub: '核反應',
      stem: '在第一次人工核嬗變中，以 α 粒子轟擊氮：¹⁴₇N + ⁴₂He → ¹⁷₈O + X。X 是甚麼？',
      options: ['中子', '電子', 'α 粒子', '質子'],
      explain: '核子數：14 + 4 = 17 + A ⇒ A = 1。原子序：7 + 2 = 8 + Z ⇒ Z = 1。A = 1、Z = 1 的粒子是質子 ¹₁H。'
    }
  },
  {
    id: 'N86', topic: 'nuc', level: 4, sub: 'Nuclear fission',
    stem: 'In what form does most of the energy released in the fission of a uranium-235 nucleus first appear?',
    options: ['Kinetic energy of the fission fragments', 'Energy of the γ rays emitted', 'Kinetic energy of the released neutrons', 'Electrical energy'],
    answer: 0,
    explain: 'The two positively charged fragments repel strongly and fly apart; their kinetic energy is the largest share (about 80 %) of the roughly 200 MeV released. As they collide with surrounding atoms this becomes internal energy, which heats the coolant.',
    zh: {
      sub: '核裂變',
      stem: '鈾-235 原子核裂變時釋放的能量，大部分最初以甚麼形式出現？',
      options: ['裂變碎片的動能', '放出的 γ 射線的能量', '釋放的中子的動能', '電能'],
      explain: '兩塊帶正電的碎片強烈互相排斥而飛開；它們的動能佔釋放的約 200 MeV 中最大部分（約 80 %）。碎片與周圍原子碰撞，這些能量變為內能，加熱冷卻劑。'
    }
  },
  {
    id: 'N87', topic: 'nuc', level: 2, sub: 'Half-life',
    stem: 'What fraction of a radioactive sample remains undecayed after five half-lives?',
    options: ['1/64', '1/32', '1/16', '1/10'],
    answer: 1,
    explain: 'Each half-life halves the number remaining: (½)⁵ = 1/32.<br>1/10 assumes a fifth disappears each half-life, i.e. that decay is linear.',
    zh: {
      sub: '半衰期',
      stem: '經過五個半衰期後，放射性樣本中有幾分之幾仍未衰變？',
      explain: '每經過一個半衰期，剩下的數目減半：(½)⁵ = 1/32。<br>1/10 假設衰變是線性的。'
    }
  },
  {
    id: 'N88', topic: 'nuc', level: 4, sub: 'Half-life',
    stem: 'After 30 days the activity of a radioactive sample has fallen to 1/8 of its initial value. How many MORE days will it take to fall to 1/64 of the initial value?',
    options: ['10 days', '20 days', '30 days', '60 days'],
    answer: 2,
    explain: '1/8 = (½)³, so 3 half-lives take 30 days and the half-life is 10 days.<br>From 1/8 to 1/64 is a further factor of 8 = 3 more half-lives = 30 more days.<br>60 days is the total time from the start.',
    zh: {
      sub: '半衰期',
      stem: '30 天後，一個放射性樣本的放射強度降至初始值的 1/8。還要多少天，它才會降至初始值的 1/64？',
      options: ['10 天', '20 天', '30 天', '60 天'],
      explain: '1/8 = (½)³，所以 3 個半衰期需時 30 天，半衰期為 10 天。<br>由 1/8 降至 1/64 再減少 8 倍 = 再經過 3 個半衰期 = 再過 30 天。<br>60 天是由開始起計的總時間。'
    }
  },
  {
    id: 'N89', topic: 'nuc', level: 3, sub: 'Atomic model',
    stem: 'In Rutherford\'s α-scattering experiment, most α particles passed straight through a thin gold foil. What did this show?',
    options: ['Gold atoms are very heavy.', 'α particles have no charge.', 'The nucleus is positively charged.', 'Most of the atom is empty space.'],
    answer: 3,
    explain: 'If the atom\'s mass and charge were spread evenly, every α particle would be deflected a little. Most passing straight through shows that the atom is mostly empty space; the rare large deflections show a tiny, dense, positively charged nucleus.',
    zh: {
      sub: '原子模型',
      stem: '在盧瑟福的 α 粒子散射實驗中，大部分 α 粒子直線穿過薄金箔。這顯示了甚麼？',
      options: ['金原子很重。', 'α 粒子不帶電。', '原子核帶正電。', '原子的大部分是空的。'],
      explain: '若原子的質量和電荷均勻分佈，每粒 α 粒子都會偏轉少許。大部分直線穿過，顯示原子的大部分是空的；極少數的大角度偏轉，則顯示有一個細小、密度極高、帶正電的原子核。'
    }
  },
  {
    id: 'N90', topic: 'nuc', level: 3, sub: 'Radiation properties',
    stem: 'α and β⁻ particles are deflected in opposite directions by a magnetic field. Why?',
    options: [
      'They carry charges of opposite sign.',
      'They have very different masses.',
      'They travel at different speeds.',
      'Only one of them is affected by magnetic fields.'
    ],
    answer: 0,
    explain: 'The magnetic force F = BQv depends on the sign of the charge: α particles are positive and β⁻ particles negative, so the forces on them are opposite. The difference in mass explains why the β particles are deflected much more, not why the directions differ.',
    zh: {
      sub: '輻射的性質',
      stem: 'α 粒子和 β⁻ 粒子在磁場中向相反方向偏轉。為甚麼？',
      options: ['它們帶異號電荷。', '它們的質量相差很大。', '它們的速率不同。', '只有其中一種受磁場影響。'],
      explain: '磁力 F = BQv 取決於電荷的正負：α 粒子帶正電，β⁻ 粒子帶負電，所以所受的力方向相反。質量不同只解釋 β 粒子為何偏轉得多得多，而不是方向為何不同。'
    }
  },
  {
    id: 'N91', topic: 'nuc', level: 3, sub: 'Detection of radiation',
    stem: 'What do the tracks of β particles in a cloud chamber usually look like?',
    options: ['Short, thick and straight', 'Thin, longer and twisted', 'No tracks are visible.', 'Short and thick, curving sharply'],
    answer: 1,
    explain: 'β particles ionize weakly, so their tracks are thin; their range in air is longer, so the tracks are longer; and being very light they are easily deflected by collisions with electrons, so the tracks twist about. α tracks are short, thick and straight.',
    zh: {
      sub: '輻射的探測',
      stem: 'β 粒子在雲室中的徑跡通常是怎樣的？',
      options: ['短、粗而直', '幼、較長而彎曲', '看不見徑跡。', '短而粗，急劇彎曲'],
      explain: 'β 粒子電離作用弱，所以徑跡幼；在空氣中射程較長，所以徑跡較長；它們非常輕，容易因與電子碰撞而偏轉，所以徑跡彎彎曲曲。α 粒子的徑跡則短、粗而直。'
    }
  },
  {
    id: 'N92', topic: 'nuc', level: 2, sub: 'Atomic structure',
    stem: 'How many neutrons are there in a nucleus of cobalt-60 (⁶⁰₂₇Co)?',
    options: ['27', '30', '33', '60'],
    answer: 2,
    explain: 'Number of neutrons = nucleon number − atomic number = 60 − 27 = 33.',
    zh: {
      sub: '原子結構',
      stem: '鈷-60（⁶⁰₂₇Co）的原子核中有多少個中子？',
      explain: '中子數 = 核子數 − 原子序 = 60 − 27 = 33。'
    }
  },
  {
    id: 'N93', topic: 'nuc', level: 3, sub: 'Activity',
    stem: 'A second sample of the same radioactive nuclide has twice the mass of the first. Compared with the first sample, the second sample has',
    options: ['twice the activity and twice the half-life.', 'the same activity and twice the half-life.', 'the same activity and the same half-life.', 'twice the activity and the same half-life.'],
    answer: 3,
    explain: 'Twice the mass contains twice as many nuclei, and A = kN, so the activity doubles. The half-life is a property of the nuclide and does not depend on how much is present.',
    zh: {
      sub: '放射強度',
      stem: '同一放射性核素的第二個樣本，質量是第一個的兩倍。與第一個樣本相比，第二個樣本的',
      options: ['放射強度和半衰期都是兩倍。', '放射強度相同，半衰期是兩倍。', '放射強度和半衰期都相同。', '放射強度是兩倍，半衰期相同。'],
      explain: '質量加倍，原子核數目亦加倍，而 A = kN，所以放射強度加倍。半衰期是核素的性質，與數量多少無關。'
    }
  },
  {
    id: 'N94', topic: 'nuc', level: 5, sub: 'Half-life',
    stem: 'A radioactive sample has half-life T. What fraction of the ORIGINAL number of nuclei decays between t = 2T and t = 3T?',
    options: ['12.5 %', '25 %', '37.5 %', '87.5 %'],
    answer: 0,
    explain: 'At t = 2T, N₀/4 remain; at t = 3T, N₀/8 remain.<br>Number decaying in between = N₀/4 − N₀/8 = N₀/8 = 12.5 % of the original.<br>25 % is the amount left at t = 2T; 87.5 % is the total decayed by t = 3T.',
    zh: {
      sub: '半衰期',
      stem: '一個放射性樣本的半衰期為 T。在 t = 2T 至 t = 3T 之間衰變的原子核佔「原來」數目的百分之幾？',
      explain: 't = 2T 時剩下 N₀/4；t = 3T 時剩下 N₀/8。<br>期間衰變的數目 = N₀/4 − N₀/8 = N₀/8 = 原來的 12.5 %。<br>25 % 是 t = 2T 時剩下的數量；87.5 % 是到 t = 3T 時已衰變的總數。'
    }
  },
  {
    id: 'N95', topic: 'nuc', level: 2, sub: 'Radiation properties',
    stem: 'Which type of radiation needs thick lead or concrete to reduce it to a safe level?',
    options: ['α particles', 'γ rays', 'β particles', 'All three are stopped by a sheet of paper.'],
    answer: 1,
    explain: 'γ rays are weakly ionizing and highly penetrating; thick lead or concrete is needed to reduce them greatly. α particles are stopped by paper and β particles by a few mm of aluminium.',
    zh: {
      sub: '輻射的性質',
      stem: '哪一種輻射需要厚鉛板或混凝土才能減弱至安全水平？',
      options: ['α 粒子', 'γ 射線', 'β 粒子', '三者都會被一張紙阻擋。'],
      explain: 'γ 射線電離作用弱而穿透力強，需要厚鉛板或混凝土才能大幅減弱。α 粒子會被紙阻擋，β 粒子則會被數毫米的鋁片阻擋。'
    }
  },
  {
    id: 'N96', topic: 'nuc', level: 3, sub: 'Nuclear fission',
    stem: 'In a nuclear reactor, what normally starts the fission of a uranium-235 nucleus?',
    options: ['A very high temperature', 'A collision with a fast proton', 'The absorption of a slow neutron', 'A strong magnetic field'],
    answer: 2,
    explain: 'A uranium-235 nucleus that absorbs a slow neutron becomes the very unstable uranium-236, which splits into two smaller nuclei, releasing energy and two or three more neutrons. A neutron, being uncharged, is not repelled by the nucleus.',
    zh: {
      sub: '核裂變',
      stem: '在核反應堆中，通常是甚麼引發鈾-235 原子核裂變？',
      options: ['極高的溫度', '與高速質子碰撞', '吸收一個慢中子', '強磁場'],
      explain: '鈾-235 原子核吸收一個慢中子後變成極不穩定的鈾-236，然後分裂成兩個較小的原子核，釋放能量和兩至三個中子。中子不帶電，所以不會被原子核排斥。'
    }
  },
  {
    id: 'N97', topic: 'nuc', level: 5, sub: 'Nuclear fission',
    stem: 'In the fission ²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3 ¹₀n, how much energy is released?<br>(Masses: ²³⁵U = 235.0439 u, ¹⁴¹Ba = 140.9144 u, ⁹²Kr = 91.9262 u, ¹n = 1.0087 u; 1 u is equivalent to 931 MeV)',
    options: ['0.186 MeV', '1.86 MeV', '17.3 MeV', '173 MeV'],
    answer: 3,
    explain: 'Mass before = 235.0439 + 1.0087 = 236.0526 u.<br>Mass after = 140.9144 + 91.9262 + 3 × 1.0087 = 235.8667 u.<br>Δm = 0.1859 u ⇒ E = 0.1859 × 931 = 173 MeV.<br>Remember to count all three neutrons on the right.',
    zh: {
      sub: '核裂變',
      stem: '在裂變反應 ²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3 ¹₀n 中，釋放了多少能量？<br>（質量：²³⁵U = 235.0439 u，¹⁴¹Ba = 140.9144 u，⁹²Kr = 91.9262 u，¹n = 1.0087 u；1 u 相當於 931 MeV）',
      explain: '反應前質量 = 235.0439 + 1.0087 = 236.0526 u。<br>反應後質量 = 140.9144 + 91.9262 + 3 × 1.0087 = 235.8667 u。<br>Δm = 0.1859 u ⇒ E = 0.1859 × 931 = 173 MeV。<br>記住要計算右方全部三個中子。'
    }
  },
  {
    id: 'N98', topic: 'nuc', level: 3, sub: 'Nuclear fusion',
    stem: 'Which of the following equations represents nuclear fusion?',
    options: [
      '²₁H + ²₁H → ³₂He + ¹₀n',
      '²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3 ¹₀n',
      '²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He',
      '¹⁴₆C → ¹⁴₇N + ⁰₋₁e'
    ],
    answer: 0,
    explain: 'Fusion joins two light nuclei to make a heavier one: two deuterium nuclei form helium-3. B is fission (a heavy nucleus splits), C is α decay and D is β⁻ decay.',
    zh: {
      sub: '核聚變',
      stem: '下列哪一條方程代表核聚變？',
      explain: '聚變是把兩個輕原子核結合成一個較重的原子核：兩個氘核結合成氦-3。B 是裂變（重原子核分裂），C 是 α 衰變，D 是 β⁻ 衰變。'
    }
  },
  {
    id: 'N99', topic: 'nuc', level: 3, sub: 'Nuclear energy',
    stem: 'Why must some radioactive waste from nuclear power stations be stored safely for thousands of years?',
    options: [
      'It becomes more radioactive with time.',
      'It contains nuclides with very long half-lives, so it remains radioactive for a very long time.',
      'It can explode like a nuclear bomb.',
      'Its half-life increases while it is stored.'
    ],
    answer: 1,
    explain: 'Some fission products and the plutonium in spent fuel have half-lives of thousands of years or more. Their activity falls only very slowly, so the waste must be isolated from people and water supplies for a very long time.',
    zh: {
      sub: '核能',
      stem: '為甚麼核電廠的部分放射性廢料必須安全貯存數千年？',
      options: ['它的放射性隨時間增強。', '它含有半衰期很長的核素，所以在很長時間內仍帶放射性。', '它可能像核彈一樣爆炸。', '它的半衰期在貯存期間增長。'],
      explain: '部分裂變產物和用過燃料中的鈈半衰期長達數千年或以上。它們的放射強度下降得非常慢，所以廢料必須長時間與人和水源隔離。'
    }
  },
  {
    id: 'N100', topic: 'nuc', level: 4, sub: 'Radioactive decay',
    stem: 'Which of the following statements about a single unstable nucleus is correct?',
    options: [
      'It will decay exactly one half-life after it was formed.',
      'It decays sooner if it is heated.',
      'It has a 50 % chance of decaying within the next half-life.',
      'It decays only when it is struck by background radiation.'
    ],
    answer: 2,
    explain: 'Decay is random: we cannot say when a particular nucleus will decay, only the probability. The half-life is the time in which half of a large number of nuclei decay, so any one nucleus has a 50 % chance of decaying in that time — whatever its age. The probability is not affected by temperature.',
    zh: {
      sub: '放射衰變',
      stem: '下列有關一個不穩定原子核的敘述，哪項是正確的？',
      options: ['它會在形成後剛好一個半衰期時衰變。', '加熱會使它較早衰變。', '它在接下來一個半衰期內衰變的機會是 50 %。', '它只在被本底輻射擊中時才會衰變。'],
      explain: '衰變是隨機的：我們不能說某個原子核何時衰變，只能說衰變的概率。半衰期是大量原子核中一半衰變所需的時間，所以任何一個原子核在這段時間內衰變的機會都是 50 % — 不論它存在了多久。這個概率不受溫度影響。'
    }
  },
  {
    id: 'N101', topic: 'nuc', level: 2, sub: 'Radiation properties',
    stem: 'Which of the following lists the radiations in order of INCREASING penetrating power?',
    options: ['γ, β, α', 'β, α, γ', 'α, γ, β', 'α, β, γ'],
    answer: 3,
    explain: 'α particles are the least penetrating (stopped by paper), β particles more so (stopped by a few mm of aluminium), and γ rays the most (reduced only by thick lead). Penetrating power runs opposite to ionizing power.',
    zh: {
      sub: '輻射的性質',
      stem: '下列哪項按穿透力「遞增」的次序排列輻射？',
      explain: 'α 粒子穿透力最弱（被紙阻擋），β 粒子較強（被數毫米鋁片阻擋），γ 射線最強（只有厚鉛板才能減弱）。穿透力的次序與電離本領相反。'
    }
  },
  {
    id: 'N102', topic: 'nuc', level: 5, sub: 'Decay constant',
    stem: 'Radium-226 has a half-life of 1600 years and a molar mass of 226 g mol⁻¹. What is the activity of 1.0 μg of radium-226?<br>(1 year = 3.16 × 10⁷ s; N<sub>A</sub> = 6.02 × 10²³ mol⁻¹)',
    options: ['3.65 × 10⁴ Bq', '5.27 × 10⁴ Bq', '3.65 × 10⁷ Bq', '1.15 × 10¹² Bq'],
    answer: 0,
    explain: 'N = (1.0 × 10⁻⁶ / 226) × 6.02 × 10²³ = 2.66 × 10¹⁵.<br>k = ln 2 / (1600 × 3.16 × 10⁷ s) = 1.37 × 10⁻¹¹ s⁻¹.<br>A = kN = 3.65 × 10⁴ Bq.<br>1.15 × 10¹² uses the half-life in years, giving decays per year; 5.27 × 10⁴ leaves out ln 2.',
    zh: {
      sub: '衰變常數',
      stem: '鐳-226 的半衰期為 1600 年，摩爾質量為 226 g mol⁻¹。1.0 μg 鐳-226 的放射強度是多少？<br>（1 年 = 3.16 × 10⁷ s；N<sub>A</sub> = 6.02 × 10²³ mol⁻¹）',
      explain: 'N = (1.0 × 10⁻⁶ / 226) × 6.02 × 10²³ = 2.66 × 10¹⁵。<br>k = ln 2 / (1600 × 3.16 × 10⁷ s) = 1.37 × 10⁻¹¹ s⁻¹。<br>A = kN = 3.65 × 10⁴ Bq。<br>1.15 × 10¹² 用了以年計的半衰期，得出的是每年衰變次數；5.27 × 10⁴ 漏了 ln 2。'
    }
  },
  {
    id: 'N103', topic: 'nuc', level: 2, sub: 'Radiation properties',
    stem: 'Which of the following has the greatest mass?',
    options: ['An electron', 'An α particle', 'A proton', 'A neutron'],
    answer: 1,
    explain: 'An α particle is a helium nucleus of 2 protons and 2 neutrons, so its mass is about 4 u. A proton or neutron is about 1 u, and an electron about 1/1840 u.',
    zh: {
      sub: '輻射的性質',
      stem: '下列哪一項的質量最大？',
      options: ['電子', 'α 粒子', '質子', '中子'],
      explain: 'α 粒子是由 2 個質子和 2 個中子組成的氦原子核，質量約為 4 u。質子或中子約為 1 u，電子約為 1/1840 u。'
    }
  },
  {
    id: 'N104', topic: 'nuc', level: 3, sub: 'Half-life',
    stem: 'Tritium (hydrogen-3) has a half-life of 12.3 years. What fraction of a sample of tritium remains after 24.6 years?',
    options: ['1/16', '1/8', '1/4', '1/2'],
    answer: 2,
    explain: '24.6 years = 2 half-lives ⇒ fraction remaining = (½)² = 1/4.',
    zh: {
      sub: '半衰期',
      stem: '氚（氫-3）的半衰期為 12.3 年。24.6 年後，氚樣本剩下幾分之幾？',
      explain: '24.6 年 = 2 個半衰期 ⇒ 剩下的比例 = (½)² = 1/4。'
    }
  },
  {
    id: 'N105', topic: 'nuc', level: 3, sub: 'Background radiation',
    stem: 'In an experiment to measure the half-life of a source with a GM counter, how should background radiation be dealt with?',
    options: [
      'Add the background count rate to each reading.',
      'Ignore it, because it is always very small.',
      'Double each reading to allow for it.',
      'Measure the count rate with the source removed, and subtract it from each reading.'
    ],
    answer: 3,
    explain: 'The counter detects background radiation as well as radiation from the source. The background (measured over a long time without the source) does not decay, so it must be subtracted from every reading to give the corrected count rate due to the source alone.',
    zh: {
      sub: '本底輻射',
      stem: '在用 GM 計數器量度放射源半衰期的實驗中，應怎樣處理本底輻射？',
      options: ['把本底計數率加到每個讀數上。', '不理會它，因為它總是很小。', '把每個讀數加倍以作補償。', '移走放射源後量度計數率，再從每個讀數中減去。'],
      explain: '計數器同時探測到本底輻射和放射源的輻射。本底輻射（在沒有放射源時長時間量度）不會衰變，所以必須從每個讀數中減去，才得出只來自放射源的校正計數率。'
    }
  },
  {
    id: 'N106', topic: 'nuc', level: 4, sub: 'Radiation safety',
    stem: 'A worker is exposed to an average dose rate of 2.0 μSv per hour for 8 hours a day on 250 working days a year. What is the worker\'s annual dose from this work?',
    options: ['4.0 mSv', '17.5 mSv', '40 mSv', '4000 mSv'],
    answer: 0,
    explain: 'Hours of exposure = 8 × 250 = 2000 h.<br>Dose = 2.0 μSv h⁻¹ × 2000 h = 4000 μSv = 4.0 mSv.<br>17.5 mSv assumes exposure 24 hours a day all year; 4000 mSv forgets to convert μSv to mSv.',
    zh: {
      sub: '輻射安全',
      stem: '一名工作人員在每年 250 個工作天、每天 8 小時內受平均 2.0 μSv 每小時的劑量率照射。這份工作令他每年接收多少劑量？',
      explain: '受照射時數 = 8 × 250 = 2000 h。<br>劑量 = 2.0 μSv h⁻¹ × 2000 h = 4000 μSv = 4.0 mSv。<br>17.5 mSv 假設全年每天 24 小時受照射；4000 mSv 忘記把 μSv 換算為 mSv。'
    }
  },
  {
    id: 'N107', topic: 'nuc', level: 4, sub: 'Nuclear fusion',
    stem: 'Why is nuclear fusion not yet used to generate electricity commercially?',
    options: [
      'Fusion releases less energy per kilogram of fuel than fission.',
      'It is very difficult to heat and contain the fuel at the extremely high temperatures needed.',
      'Fusion fuel is too rare on Earth.',
      'Fusion produces large amounts of carbon dioxide.'
    ],
    answer: 1,
    explain: 'Fusion needs temperatures of about 10⁸ K. At these temperatures the fuel is a plasma that would destroy any container, so it must be held by strong magnetic fields, and so far more energy has been needed to run the process than it gives out reliably. Fusion fuel (deuterium from sea water) is plentiful and the process releases more energy per kg than fission.',
    zh: {
      sub: '核聚變',
      stem: '為甚麼核聚變尚未用於商業發電？',
      options: ['以每千克燃料計，聚變釋放的能量比裂變少。', '要把燃料加熱並約束在所需的極高溫度非常困難。', '地球上的聚變燃料太稀少。', '聚變會產生大量二氧化碳。'],
      explain: '聚變需要約 10⁸ K 的溫度。在這溫度下燃料是等離子體，會毀壞任何容器，所以須以強磁場約束，而至今運作這過程所需的能量仍未能穩定地少於它輸出的能量。聚變燃料（海水中的氘）十分充足，而且以每千克計釋放的能量比裂變多。'
    }
  }
]);
