/* Radioactivity and Nuclear Energy — structured questions (Paper 1 Section B style). Format: see bank/core.js (addStructured). */
addStructured([
  {
    id: 'SN01', topic: 'nuc', level: 3, sub: 'Radiation properties',
    stem: 'A GM counter is placed a few centimetres from a radioactive source. Different absorbers are placed between them. The background count rate is 30 counts per minute.<br><table class="dtable"><tr><th>Absorber</th><td>none</td><td>paper</td><td>3 mm aluminium</td><td>2 cm lead</td></tr><tr><th>Count rate / min⁻¹</th><td>860</td><td>850</td><td>300</td><td>40</td></tr></table>',
    parts: [
      { label: '(a)', marks: 1, q: 'Why should the background count rate be subtracted from each reading?', answer: 'The counter also detects background radiation, which does not come from the source; subtracting it leaves the count rate due to the source alone.', points: ['To find the count rate due to the source alone [1]'] },
      { label: '(b)', marks: 3, q: 'Deduce which type(s) of radiation the source emits. Explain your reasoning.', answer: 'Paper reduces the reading only slightly (860 → 850), so there is little or no α.<br>3 mm aluminium reduces it greatly (850 → 300), so the source emits β.<br>A large count rate remains through aluminium and is reduced by lead, so it also emits γ.',
        points: ['Little or no α: paper hardly changes the reading [1]', 'β: aluminium reduces the reading greatly [1]', 'γ: radiation passes through aluminium and is reduced by lead [1]'] },
      { label: '(c)', marks: 1, q: 'State one precaution for storing this source safely.', answer: 'Keep it in a lead-lined box, away from people, when not in use.', points: ['Lead-lined container (or similar) [1]'] }
    ],
    zh: {
      sub: '輻射的性質',
      stem: '把一個 GM 計數器放在距放射源數厘米處，並在兩者之間放置不同的吸收物。本底計數率為每分鐘 30 次。<br><table class="dtable"><tr><th>吸收物</th><td>沒有</td><td>紙</td><td>3 mm 鋁</td><td>2 cm 鉛</td></tr><tr><th>計數率 / min⁻¹</th><td>860</td><td>850</td><td>300</td><td>40</td></tr></table>',
      parts: [
        { q: '為甚麼每個讀數都應減去本底計數率？', answer: '計數器亦會探測到並非來自放射源的本底輻射；減去它後才得出只來自放射源的計數率。', points: ['求出只由放射源引起的計數率 [1]'] },
        { q: '推斷放射源發出哪種／哪些輻射，並解釋你的推理。', answer: '紙只使讀數稍為下降（860 → 850），所以 α 很少或沒有。<br>3 mm 鋁使讀數大幅下降（850 → 300），所以放射源發出 β。<br>穿過鋁片後仍有大量計數，並被鉛減弱，所以亦發出 γ。', points: ['很少或沒有 α：紙幾乎不改變讀數 [1]', 'β：鋁使讀數大幅下降 [1]', 'γ：輻射穿過鋁並被鉛減弱 [1]'] },
        { q: '指出一項安全存放這放射源的措施。', answer: '不使用時把它放在鉛襯盒內，遠離人群。', points: ['鉛襯容器（或類似措施）[1]'] }
      ]
    }
  },
  {
    id: 'SN02', topic: 'nuc', level: 4, sub: 'Half-life',
    stem: 'The corrected count rate from a radioactive sample is measured every 2 minutes:<br><table class="dtable"><tr><th>t / min</th><td>0</td><td>2</td><td>4</td><td>6</td><td>8</td></tr><tr><th>Count rate / min⁻¹</th><td>800</td><td>566</td><td>400</td><td>283</td><td>200</td></tr></table>',
    parts: [
      { label: '(a)', marks: 1, q: 'Find the half-life of the sample.', answer: 'The count rate halves from 800 to 400 in 4 min (and from 400 to 200 in the next 4 min): half-life = 4 min.', points: ['4 min [1]'], num: { v: 4, unit: 'min' } },
      { label: '(b)', marks: 1, q: 'Predict the corrected count rate at t = 12 min.', answer: '12 min = 3 half-lives: 800 / 8 = 100 counts per minute.', points: ['100 counts per minute [1]'], num: { v: 100, unit: 'min⁻¹' } },
      { label: '(c)', marks: 2, q: 'Calculate the decay constant in s⁻¹.', answer: 'k = ln 2 / t<sub>½</sub> = 0.693 / 240 s = 2.89 × 10⁻³ s⁻¹.', points: ['k = ln 2 / t<sub>½</sub> with t<sub>½</sub> in seconds [1M]', '2.89 × 10⁻³ s⁻¹ [1A]'], num: { v: 2.888e-3, unit: 's⁻¹' } },
      { label: '(d)', marks: 1, q: 'At t = 0 the sample contains 1.0 × 10⁶ undecayed nuclei. Find its activity at that time.', answer: 'A = kN = 2.89 × 10⁻³ × 1.0 × 10⁶ = 2.89 × 10³ Bq.', points: ['2.89 × 10³ Bq [1]'], num: { v: 2888, unit: 'Bq' } },
      { label: '(e)', marks: 1, q: 'Why are the measured count rates scattered about a smooth curve?', answer: 'Radioactive decay is random, so the number of decays in each interval fluctuates.', points: ['Decay is random [1]'] }
    ],
    zh: {
      sub: '半衰期',
      stem: '每 2 分鐘量度一次放射性樣本的校正計數率：<br><table class="dtable"><tr><th>t / min</th><td>0</td><td>2</td><td>4</td><td>6</td><td>8</td></tr><tr><th>計數率 / min⁻¹</th><td>800</td><td>566</td><td>400</td><td>283</td><td>200</td></tr></table>',
      parts: [
        { q: '求樣本的半衰期。', answer: '計數率在 4 min 內由 800 減半至 400（再過 4 min 由 400 減至 200）：半衰期 = 4 min。', points: ['4 min [1]'] },
        { q: '預測 t = 12 min 時的校正計數率。', answer: '12 min = 3 個半衰期：800 / 8 = 每分鐘 100 次。', points: ['每分鐘 100 次 [1]'] },
        { q: '計算以 s⁻¹ 為單位的衰變常數。', answer: 'k = ln 2 / t<sub>½</sub> = 0.693 / 240 s = 2.89 × 10⁻³ s⁻¹。', points: ['k = ln 2 / t<sub>½</sub>，t<sub>½</sub> 以秒為單位 [1M]', '2.89 × 10⁻³ s⁻¹ [1A]'] },
        { q: '在 t = 0 時樣本含有 1.0 × 10⁶ 個未衰變的原子核。求它當時的放射強度。', answer: 'A = kN = 2.89 × 10⁻³ × 1.0 × 10⁶ = 2.89 × 10³ Bq。', points: ['2.89 × 10³ Bq [1]'] },
        { q: '為甚麼量得的計數率散佈在一條平滑曲線的兩旁？', answer: '放射衰變是隨機的，所以每段時間內的衰變次數會起伏。', points: ['衰變是隨機的 [1]'] }
      ]
    }
  },
  {
    id: 'SN03', topic: 'nuc', level: 4, sub: 'Radioactive decay',
    stem: 'Radon-222 (²²²₈₆Rn) is a radioactive gas that seeps out of rocks and building materials. It decays by α emission to polonium (Po), which also decays by α emission to lead (Pb). This lead nuclide then decays by β⁻ emission to bismuth (Bi).',
    parts: [
      { label: '(a)', marks: 2, q: 'Write the nuclear equations for the two α decays.', answer: '²²²₈₆Rn → ²¹⁸₈₄Po + ⁴₂He<br>²¹⁸₈₄Po → ²¹⁴₈₂Pb + ⁴₂He', points: ['²²²₈₆Rn → ²¹⁸₈₄Po + ⁴₂He [1]', '²¹⁸₈₄Po → ²¹⁴₈₂Pb + ⁴₂He [1]'] },
      { label: '(b)', marks: 2, q: 'Write the nuclear equation for the β⁻ decay, and state the number of neutrons in the bismuth nucleus.', answer: '²¹⁴₈₂Pb → ²¹⁴₈₃Bi + ⁰₋₁e. Bismuth-214 has 214 − 83 = 131 neutrons.', points: ['²¹⁴₈₂Pb → ²¹⁴₈₃Bi + ⁰₋₁e [1]', '131 neutrons [1]'], num: { v: 131, unit: '' } },
      { label: '(c)', marks: 2, q: 'Radon emits α particles, which cannot penetrate skin. Explain why radon is still a health hazard.', answer: 'Radon is a gas, so it is breathed into the lungs. There the α particles (and those of its decay products, which stick to lung tissue) are emitted right next to living cells, and their strong ionizing power damages the cells, increasing the risk of lung cancer.', points: ['It is breathed in, so the source is inside the body [1]', 'Strongly ionizing α particles damage nearby lung tissue [1]'] }
    ],
    zh: {
      sub: '放射衰變',
      stem: '氡-222（²²²₈₆Rn）是從岩石和建築材料滲出的放射性氣體。它以 α 衰變成釙（Po），釙亦以 α 衰變成鉛（Pb）。這種鉛核素再以 β⁻ 衰變成鉍（Bi）。',
      parts: [
        { q: '寫出兩次 α 衰變的核方程。', answer: '²²²₈₆Rn → ²¹⁸₈₄Po + ⁴₂He<br>²¹⁸₈₄Po → ²¹⁴₈₂Pb + ⁴₂He', points: ['²²²₈₆Rn → ²¹⁸₈₄Po + ⁴₂He [1]', '²¹⁸₈₄Po → ²¹⁴₈₂Pb + ⁴₂He [1]'] },
        { q: '寫出 β⁻ 衰變的核方程，並指出鉍原子核中的中子數目。', answer: '²¹⁴₈₂Pb → ²¹⁴₈₃Bi + ⁰₋₁e。鉍-214 有 214 − 83 = 131 個中子。', points: ['²¹⁴₈₂Pb → ²¹⁴₈₃Bi + ⁰₋₁e [1]', '131 個中子 [1]'] },
        { q: '氡發出不能穿透皮膚的 α 粒子。解釋為甚麼氡仍危害健康。', answer: '氡是氣體，會被吸入肺部。α 粒子（以及附在肺組織上的衰變產物所發出的 α 粒子）在活細胞旁邊射出，其強大的電離本領會損害細胞，增加患肺癌的風險。', points: ['被吸入，放射源在體內 [1]', '電離作用強的 α 粒子損害附近的肺組織 [1]'] }
      ]
    }
  },
  {
    id: 'SN04', topic: 'nuc', level: 5, sub: 'Radioactive dating',
    stem: 'The carbon-14 activity of carbon from living wood is 0.25 Bq per gram. Carbon from a wooden tool found at an ancient site has an activity of 0.080 Bq per gram. The half-life of carbon-14 is 5730 years.',
    parts: [
      { label: '(a)', marks: 1, q: 'How many half-lives have passed since the tree was cut down?', answer: '(½)ⁿ = 0.080 / 0.25 = 0.32 ⇒ n = log (1 / 0.32) / log 2 = 1.64.', points: ['n = 1.64 [1]'], num: { v: 1.644, unit: '' } },
      { label: '(b)', marks: 2, q: 'Estimate the age of the tool.', answer: 'Age = 1.64 × 5730 = 9.42 × 10³ years.', points: ['age = n × t<sub>½</sub> [1M]', 'about 9400 years [1A]'], num: { v: 9420, unit: 'years', tol: 0.03 } },
      { label: '(c)', marks: 1, q: 'State one assumption made in this method.', answer: 'The proportion of carbon-14 in living things (and in the atmosphere) was the same when the tree was alive as it is now.', points: ['C-14 proportion in living things has stayed constant [1]'] },
      { label: '(d)', marks: 1, q: 'Why is carbon dating not useful for wood that is only 50 years old?', answer: 'Only a tiny fraction (under 1 %) of the carbon-14 would have decayed, too small a change to measure reliably against the random fluctuations.', points: ['The change in activity is too small to measure [1]'] }
    ],
    zh: {
      sub: '放射性年代測定',
      stem: '活樹的碳的碳-14 放射強度為每克 0.25 Bq。在古代遺址發現的一件木製工具，其碳的放射強度為每克 0.080 Bq。碳-14 的半衰期為 5730 年。',
      parts: [
        { q: '自樹被砍下以來經過了多少個半衰期？', answer: '(½)ⁿ = 0.080 / 0.25 = 0.32 ⇒ n = log (1 / 0.32) / log 2 = 1.64。', points: ['n = 1.64 [1]'] },
        { q: '估算這件工具的年齡。', answer: '年齡 = 1.64 × 5730 = 9.42 × 10³ 年。', points: ['年齡 = n × t<sub>½</sub> [1M]', '約 9400 年 [1A]'] },
        { q: '指出這方法所作的一個假設。', answer: '樹木存活時，生物（及大氣）中碳-14 的比例與現在相同。', points: ['生物中碳-14 的比例一直不變 [1]'] },
        { q: '為甚麼碳年代測定法不適用於只有 50 年歷史的木材？', answer: '只有極少部分（不足 1 %）的碳-14 已經衰變，變化太小，難以在隨機起伏中可靠地量度。', points: ['放射強度的變化太小，無法量度 [1]'] }
      ]
    }
  },
  {
    id: 'SN05', topic: 'nuc', level: 4, sub: 'Mass–energy',
    stem: 'In a fusion reactor, deuterium and tritium fuse: ²₁H + ³₁H → ⁴₂He + ¹₀n.<br>(Masses: ²₁H = 2.01410 u, ³₁H = 3.01605 u, ⁴₂He = 4.00260 u, ¹₀n = 1.00867 u; 1 u = 1.661 × 10⁻²⁷ kg ≡ 931 MeV; 1 MeV = 1.60 × 10⁻¹³ J)',
    parts: [
      { label: '(a)', marks: 1, q: 'Find the mass defect of the reaction in u.', answer: 'Δm = (2.01410 + 3.01605) − (4.00260 + 1.00867) = 0.01888 u.', points: ['0.01888 u [1]'], num: { v: 0.01888, unit: 'u' } },
      { label: '(b)', marks: 1, q: 'Find the energy released per reaction in MeV.', answer: 'E = 0.01888 × 931 = 17.6 MeV.', points: ['17.6 MeV [1]'], num: { v: 17.58, unit: 'MeV' } },
      { label: '(c)', marks: 1, q: 'Convert this energy to joules.', answer: 'E = 17.6 × 1.60 × 10⁻¹³ = 2.81 × 10⁻¹² J.', points: ['2.81 × 10⁻¹² J [1]'], num: { v: 2.813e-12, unit: 'J' } },
      { label: '(d)', marks: 2, q: 'Estimate the energy released per kilogram of deuterium–tritium fuel.', answer: 'Mass of reactants per reaction = 5.03015 u = 5.03015 × 1.661 × 10⁻²⁷ = 8.36 × 10⁻²⁷ kg.<br>Energy per kg = 2.81 × 10⁻¹² / 8.36 × 10⁻²⁷ = 3.37 × 10¹⁴ J kg⁻¹ (about four times that of uranium fission).', points: ['Mass of reactants in kg (8.36 × 10⁻²⁷ kg) [1M]', '3.37 × 10¹⁴ J kg⁻¹ [1A]'], num: { v: 3.37e14, unit: 'J kg⁻¹' } }
    ],
    zh: {
      sub: '質能關係',
      stem: '在聚變反應堆中，氘和氚聚變：²₁H + ³₁H → ⁴₂He + ¹₀n。<br>（質量：²₁H = 2.01410 u，³₁H = 3.01605 u，⁴₂He = 4.00260 u，¹₀n = 1.00867 u；1 u = 1.661 × 10⁻²⁷ kg，相當於 931 MeV；1 MeV = 1.60 × 10⁻¹³ J）',
      parts: [
        { q: '求反應的質量虧損（以 u 為單位）。', answer: 'Δm = (2.01410 + 3.01605) − (4.00260 + 1.00867) = 0.01888 u。', points: ['0.01888 u [1]'] },
        { q: '求每次反應釋放的能量（以 MeV 為單位）。', answer: 'E = 0.01888 × 931 = 17.6 MeV。', points: ['17.6 MeV [1]'] },
        { q: '把這能量換算為焦耳。', answer: 'E = 17.6 × 1.60 × 10⁻¹³ = 2.81 × 10⁻¹² J。', points: ['2.81 × 10⁻¹² J [1]'] },
        { q: '估算每千克氘－氚燃料釋放的能量。', answer: '每次反應的反應物質量 = 5.03015 u = 5.03015 × 1.661 × 10⁻²⁷ = 8.36 × 10⁻²⁷ kg。<br>每千克能量 = 2.81 × 10⁻¹² / 8.36 × 10⁻²⁷ = 3.37 × 10¹⁴ J kg⁻¹（約為鈾裂變的四倍）。', points: ['反應物質量以 kg 計（8.36 × 10⁻²⁷ kg）[1M]', '3.37 × 10¹⁴ J kg⁻¹ [1A]'] }
      ]
    }
  },
  {
    id: 'SN06', topic: 'nuc', level: 4, sub: 'Nuclear reactor',
    stem: 'In a nuclear power station, uranium-235 undergoes fission in the reactor core, for example: ²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + x ¹₀n.',
    parts: [
      { label: '(a)', marks: 1, q: 'Find x.', answer: 'Nucleon number: 235 + 1 = 141 + 92 + x ⇒ x = 3.', points: ['x = 3 [1]'], num: { v: 3, unit: '' } },
      { label: '(b)', marks: 3, q: 'State the function of (i) the moderator, (ii) the control rods and (iii) the coolant.', answer: '(i) The moderator slows the fast neutrons down so that they are more likely to cause fission.<br>(ii) The control rods absorb neutrons to control the rate of the chain reaction.<br>(iii) The coolant carries thermal energy from the core to the heat exchanger (to make steam).', points: ['Moderator slows neutrons down [1]', 'Control rods absorb neutrons to control the rate [1]', 'Coolant carries heat away from the core [1]'] },
      { label: '(c)', marks: 2, q: 'Explain what is meant by a chain reaction, and why a minimum (critical) mass of uranium is needed for it.', answer: 'Neutrons released by one fission go on to cause further fissions, so the reaction can sustain itself. In a small piece too many neutrons escape through the surface before causing fission, so at least a critical mass is needed for, on average, one neutron per fission to cause another fission.', points: ['Neutrons from each fission cause further fissions [1]', 'Below the critical mass too many neutrons escape [1]'] }
    ],
    zh: {
      sub: '核反應堆',
      stem: '在核電廠中，鈾-235 在反應堆堆芯內發生裂變，例如：²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + x ¹₀n。',
      parts: [
        { q: '求 x。', answer: '核子數：235 + 1 = 141 + 92 + x ⇒ x = 3。', points: ['x = 3 [1]'] },
        { q: '指出 (i) 減速劑、(ii) 控制棒和 (iii) 冷卻劑的作用。', answer: '(i) 減速劑使快中子減速，令它們更有可能引發裂變。<br>(ii) 控制棒吸收中子以控制鏈式反應的速率。<br>(iii) 冷卻劑把熱能由堆芯帶到熱交換器（產生蒸汽）。', points: ['減速劑使中子減速 [1]', '控制棒吸收中子以控制速率 [1]', '冷卻劑把熱從堆芯帶走 [1]'] },
        { q: '解釋甚麼是鏈式反應，以及為甚麼需要最低（臨界）質量的鈾。', answer: '一次裂變釋放的中子繼續引發更多裂變，使反應可以自行維持。在細小的鈾塊中，太多中子在引發裂變前已從表面逸出，所以最少需要臨界質量，才能使平均每次裂變有一個中子引發另一次裂變。', points: ['每次裂變的中子引發更多裂變 [1]', '低於臨界質量時太多中子逸出 [1]'] }
      ]
    }
  },
  {
    id: 'SN07', topic: 'nuc', level: 3, sub: 'Uses of radioisotopes',
    stem: 'Technetium-99m is injected into patients as a medical tracer. It emits only γ rays and has a half-life of 6.0 hours.',
    parts: [
      { label: '(a)', marks: 2, q: 'Give one reason why a γ emitter is used, and one reason why a half-life of a few hours is suitable.', answer: 'γ rays pass out of the body to the detector (and cause little ionization inside). A half-life of a few hours is long enough to complete the scan, but short enough that the patient\'s dose is small and the activity soon dies away.', points: ['γ rays escape the body to the detector [1]', 'Long enough for the scan, short enough for a small dose [1]'] },
      { label: '(b)', marks: 2, q: 'A patient is given a dose of activity 400 MBq. Find the activity remaining after 24 hours (ignore removal from the body).', answer: '24 h = 4 half-lives: 400 × (½)⁴ = 25 MBq.', points: ['24 h = 4 half-lives [1M]', '25 MBq [1A]'], num: { v: 25, unit: 'MBq' } },
      { label: '(c)', marks: 2, q: 'State two precautions taken by hospital staff who prepare the injections.', answer: 'Any two: handle the source with tongs or behind lead shielding; keep the time near the source short; keep as far away as practicable; wear a film badge to monitor the dose.', points: ['First valid precaution [1]', 'Second valid precaution [1]'] }
    ],
    zh: {
      sub: '放射性同位素的應用',
      stem: '鍀-99m 被注射入病人體內作醫學示蹤劑。它只發出 γ 射線，半衰期為 6.0 小時。',
      parts: [
        { q: '給出使用 γ 放射體的一個原因，以及半衰期為數小時適合的一個原因。', answer: 'γ 射線能穿出身體到達探測器（而且在體內造成的電離很少）。數小時的半衰期足夠完成掃描，又短得令病人接收的劑量很小，放射強度很快消減。', points: ['γ 射線能穿出身體到達探測器 [1]', '足夠時間掃描，又能使劑量細小 [1]'] },
        { q: '病人接受了放射強度為 400 MBq 的劑量。求 24 小時後剩下的放射強度（不計身體排出）。', answer: '24 h = 4 個半衰期：400 × (½)⁴ = 25 MBq。', points: ['24 h = 4 個半衰期 [1M]', '25 MBq [1A]'] },
        { q: '指出醫院職員準備注射劑時所採取的兩項預防措施。', answer: '任何兩項：用長鉗或在鉛屏蔽後處理放射源；縮短在放射源附近的時間；盡量保持距離；佩戴菲林章監察劑量。', points: ['第一項正確措施 [1]', '第二項正確措施 [1]'] }
      ]
    }
  },
  {
    id: 'SN08', topic: 'nuc', level: 5, sub: 'Decay constant',
    stem: 'A sample contains 1.0 μg of strontium-90, which has a half-life of 28.8 years and a molar mass of 90 g mol⁻¹.<br>(N<sub>A</sub> = 6.02 × 10²³ mol⁻¹; 1 year = 3.16 × 10⁷ s)',
    parts: [
      { label: '(a)', marks: 1, q: 'Find the number of strontium-90 nuclei in the sample.', answer: 'N = (1.0 × 10⁻⁶ / 90) × 6.02 × 10²³ = 6.69 × 10¹⁵.', points: ['6.69 × 10¹⁵ [1]'], num: { v: 6.689e15, unit: '' } },
      { label: '(b)', marks: 2, q: 'Find the decay constant in s⁻¹.', answer: 'k = ln 2 / (28.8 × 3.16 × 10⁷ s) = 7.62 × 10⁻¹⁰ s⁻¹.', points: ['Half-life converted to seconds [1M]', '7.62 × 10⁻¹⁰ s⁻¹ [1A]'], num: { v: 7.616e-10, unit: 's⁻¹' } },
      { label: '(c)', marks: 1, q: 'Find the activity of the sample.', answer: 'A = kN = 7.62 × 10⁻¹⁰ × 6.69 × 10¹⁵ = 5.09 × 10⁶ Bq.', points: ['5.09 × 10⁶ Bq [1]'], num: { v: 5.094e6, unit: 'Bq' } },
      { label: '(d)', marks: 2, q: 'How long will it take for the activity to fall to one-tenth of this value?', answer: '(½)^(t / 28.8) = 1/10 ⇒ t = 28.8 × log 10 / log 2 = 95.7 years.', points: ['(½)^(t/t<sub>½</sub>) = 0.1 [1M]', '95.7 years [1A]'], num: { v: 95.67, unit: 'years' } }
    ],
    zh: {
      sub: '衰變常數',
      stem: '一個樣本含有 1.0 μg 的鍶-90，其半衰期為 28.8 年，摩爾質量為 90 g mol⁻¹。<br>（N<sub>A</sub> = 6.02 × 10²³ mol⁻¹；1 年 = 3.16 × 10⁷ s）',
      parts: [
        { q: '求樣本中鍶-90 原子核的數目。', answer: 'N = (1.0 × 10⁻⁶ / 90) × 6.02 × 10²³ = 6.69 × 10¹⁵。', points: ['6.69 × 10¹⁵ [1]'] },
        { q: '求以 s⁻¹ 為單位的衰變常數。', answer: 'k = ln 2 / (28.8 × 3.16 × 10⁷ s) = 7.62 × 10⁻¹⁰ s⁻¹。', points: ['把半衰期換算為秒 [1M]', '7.62 × 10⁻¹⁰ s⁻¹ [1A]'] },
        { q: '求樣本的放射強度。', answer: 'A = kN = 7.62 × 10⁻¹⁰ × 6.69 × 10¹⁵ = 5.09 × 10⁶ Bq。', points: ['5.09 × 10⁶ Bq [1]'] },
        { q: '放射強度需要多久才降至這數值的十分之一？', answer: '(½)^(t / 28.8) = 1/10 ⇒ t = 28.8 × log 10 / log 2 = 95.7 年。', points: ['(½)^(t/t<sub>½</sub>) = 0.1 [1M]', '95.7 年 [1A]'] }
      ]
    }
  }
]);

/* Batch 2: questions with figures and drawing parts (see drawHTML in app.js). */
(function () {
  const { svg, line, arrow, text, box, range } = window.draw;
  const decay = graphFrame({
    aria: 'Empty grid for plotting corrected count rate against time', w: 400, h: 250,
    x: { max: 62, label: 't / min', ticks: [10, 20, 30, 40, 50, 60].map(v => [v, String(v)]) },
    y: { max: 450, label: 'C / min⁻¹', ticks: [100, 200, 300, 400].map(v => [v, String(v)]) },
    grid: { x: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60], y: [50, 100, 150, 200, 250, 300, 350, 400] }
  });
  const pts = [[0, 400], [10, 252], [20, 159], [30, 100], [40, 63], [50, 40]];
  const decayAnswer = pts.map(([x, y]) => `<path d="M${decay.X(x) - 5} ${decay.Y(y) - 5} l10 10 m0 -10 l-10 10" stroke="currentColor" stroke-width="2"/>`).join('') +
    decay.path(range(0, 55, 55).map(t => [t, 400 * Math.pow(2, -t / 15)]));
  const plates = line('M100 40 H330 M100 180 H330', 4) + text(92, 45, '+', { anchor: 'end' }) + text(92, 185, '−', { anchor: 'end' }) +
    box(20, 100, 26, 20) + arrow(46, 110, 98, 110, 2) + text(72, 98, 'α, β, γ', { size: 11 });
  const curve = f => 'M' + range(100, 340, 30).map(x => Math.round(x) + ' ' + Math.round(f(x) * 10) / 10).join(' L');
  const platesAnswer = line('M100 110 H370', 2.2) + text(376, 114, 'γ', { anchor: 'start' }) +
    line(curve(x => 110 + 22 * ((x - 100) / 240) ** 2), 2.2) + text(376, 140, 'α', { anchor: 'start' }) +
    line('M' + range(100, 340, 80).map(x => [x, 110 - 120 * ((x - 100) / 240) ** 2]).filter(([, y]) => y >= 43).map(([x, y]) => Math.round(x) + ' ' + Math.round(y * 10) / 10).join(' L'), 2.2) + text(250, 56, 'β', { anchor: 'start' });
  addStructured([
    {
      id: 'SN09', topic: 'nuc', level: 3, sub: 'Half-life',
      stem: 'A GM counter is used to measure the count rate from a radioactive source. The background count rate is 20 counts per minute.<br><table class="dtable"><tr><th>t / min</th><td>0</td><td>10</td><td>20</td><td>30</td><td>40</td><td>50</td></tr><tr><th>Measured count rate / min⁻¹</th><td>420</td><td>272</td><td>179</td><td>120</td><td>83</td><td>60</td></tr></table>',
      parts: [
        { label: '(a)', marks: 1, q: 'Find the corrected count rate C for each reading.', answer: 'Subtract the background of 20 min⁻¹: C = 400, 252, 159, 100, 63 and 40 min⁻¹.', points: ['All six corrected values [1]'] },
        {
          label: '(b)', marks: 2, q: 'On the grid, plot C against t and draw a smooth best-fit curve.',
          answer: 'The six points lie on a smooth exponential decay curve, falling from 400 min⁻¹ and halving every 15 min.',
          points: ['Corrected points plotted correctly [1]', 'Smooth curve (not straight lines joining the points) [1]'],
          draw: { w: decay.w, h: decay.h, base: decay.base, tools: ['pen', 'line'], aria: 'Grid for plotting the decay curve', answer: decayAnswer }
        },
        {
          label: '(c)', marks: 2, q: 'Use your graph to find the half-life of the source.',
          answer: 'C falls from 400 to 200 min⁻¹ in about 15 min (and from 200 to 100 min⁻¹ in another 15 min). Half-life ≈ 15 min.',
          points: ['Reads the time for C to halve from the corrected curve [1M]', 'About 15 min [1A]'], num: { v: 15, unit: 'min', tol: 0.07 }
        },
        {
          label: '(d)', marks: 2, q: 'Predict the measured count rate at t = 60 min.',
          answer: '60 min = 4 half-lives, so C = 400 / 2⁴ = 25 min⁻¹. Measured count rate = 25 + 20 = 45 min⁻¹.',
          points: ['Corrected rate 25 min⁻¹ [1M]', 'Adds back the background: 45 min⁻¹ [1A]'], num: { v: 45, unit: 'min⁻¹' }
        }
      ],
      zh: {
        sub: '半衰期',
        stem: '用 GM 計數器量度一個放射源的計數率。本底計數率為每分鐘 20 次。<br><table class="dtable"><tr><th>t / min</th><td>0</td><td>10</td><td>20</td><td>30</td><td>40</td><td>50</td></tr><tr><th>量得的計數率 / min⁻¹</th><td>420</td><td>272</td><td>179</td><td>120</td><td>83</td><td>60</td></tr></table>',
        parts: [
          { q: '求每個讀數經校正的計數率 C。', answer: '減去本底 20 min⁻¹：C = 400、252、159、100、63 和 40 min⁻¹。', points: ['六個校正值都正確 [1]'] },
          { q: '在方格上描繪 C 對 t 的關係，並畫出一條平滑的最佳擬合曲線。', answer: '六點都在一條平滑的指數衰減曲線上，由 400 min⁻¹ 開始，每 15 min 減半。', points: ['經校正的點描繪正確 [1]', '平滑曲線（不是把各點以直線連起）[1]'] },
          { q: '利用你的線圖，求放射源的半衰期。', answer: 'C 由 400 降至 200 min⁻¹ 約需 15 min（再過 15 min 由 200 降至 100 min⁻¹）。半衰期 ≈ 15 min。', points: ['從經校正的曲線讀出 C 減半所需的時間 [1M]', '約 15 min [1A]'] },
          { q: '預測 t = 60 min 時量得的計數率。', answer: '60 min = 4 個半衰期，所以 C = 400 / 2⁴ = 25 min⁻¹。量得的計數率 = 25 + 20 = 45 min⁻¹。', points: ['經校正的計數率 25 min⁻¹ [1M]', '加回本底：45 min⁻¹ [1A]'] }
        ]
      }
    },
    {
      id: 'SN10', topic: 'nuc', level: 4, sub: 'Radiation in fields',
      stem: 'A narrow beam containing α particles, β particles and γ rays passes in a vacuum between two parallel plates with a strong electric field between them. The upper plate is positive.',
      figure: svg(390, 200, 'A beam of alpha, beta and gamma radiation enters the field between two charged parallel plates', plates),
      parts: [
        {
          label: '(a)', marks: 3, q: 'On the diagram, sketch and label the paths of the α particles, the β particles and the γ rays.',
          answer: 'γ rays are uncharged and go straight on. α particles (positive) curve slightly towards the negative (lower) plate. β particles (negative) curve much more strongly towards the positive (upper) plate.',
          points: ['γ undeflected [1]', 'α bends slightly towards the negative plate [1]', 'β bends more strongly towards the positive plate [1]'],
          draw: { w: 390, h: 200, base: plates, tools: ['pen', 'line'], aria: 'Plates for sketching the paths of the radiation', answer: platesAnswer }
        },
        {
          label: '(b)', marks: 2, q: 'Explain why the β particles are deflected much more than the α particles, although the α particles carry twice as much charge.',
          answer: 'The acceleration across the field is a = qE / m. An α particle has about 7000 times the mass of a β particle but only twice the charge, so its sideways acceleration (and deflection) is much smaller.',
          points: ['Acceleration a = qE/m depends on the charge-to-mass ratio [1]', 'α mass is thousands of times larger; charge only twice [1]']
        },
        {
          label: '(c)', marks: 2, q: 'An α particle has a kinetic energy of 5.0 MeV. Find its speed. (Mass of α particle = 6.64 × 10⁻²⁷ kg; 1 MeV = 1.60 × 10⁻¹³ J)',
          answer: 'KE = 5.0 × 1.60 × 10⁻¹³ = 8.0 × 10⁻¹³ J. ½mv² = KE ⇒ v = √(2 × 8.0 × 10⁻¹³ / 6.64 × 10⁻²⁷) = 1.55 × 10⁷ m s⁻¹.',
          points: ['KE = 8.0 × 10⁻¹³ J and ½mv² = KE [1M]', '1.55 × 10⁷ m s⁻¹ [1A]'], num: { v: 1.552e7, unit: 'm s⁻¹' }
        }
      ],
      zh: {
        sub: '輻射在場中',
        stem: '一束含有 α 粒子、β 粒子和 γ 射線的窄輻射束，在真空中穿過兩塊平行板之間的強電場。上板帶正電。',
        parts: [
          { q: '在圖上繪畫並標示 α 粒子、β 粒子和 γ 射線的路徑。', answer: 'γ 射線不帶電，直線前進。α 粒子（帶正電）稍為向負（下）板彎曲。β 粒子（帶負電）較強烈地向正（上）板彎曲。', points: ['γ 不偏轉 [1]', 'α 稍為向負板彎曲 [1]', 'β 較強烈地向正板彎曲 [1]'] },
          { q: '雖然 α 粒子所帶的電荷是 β 粒子的兩倍，解釋為甚麼 β 粒子的偏轉比 α 粒子大得多。', answer: '橫越電場的加速度 a = qE / m。α 粒子的質量約為 β 粒子的 7000 倍，但電荷只是兩倍，所以它的橫向加速度（及偏轉）小得多。', points: ['加速度 a = qE/m，取決於荷質比 [1]', 'α 的質量大數千倍，電荷只是兩倍 [1]'] },
          { q: '一粒 α 粒子的動能是 5.0 MeV。求它的速率。（α 粒子質量 = 6.64 × 10⁻²⁷ kg；1 MeV = 1.60 × 10⁻¹³ J）', answer: 'KE = 5.0 × 1.60 × 10⁻¹³ = 8.0 × 10⁻¹³ J。½mv² = KE ⇒ v = √(2 × 8.0 × 10⁻¹³ / 6.64 × 10⁻²⁷) = 1.55 × 10⁷ m s⁻¹。', points: ['KE = 8.0 × 10⁻¹³ J 及 ½mv² = KE [1M]', '1.55 × 10⁷ m s⁻¹ [1A]'] }
        ]
      }
    }
  ]);
})();

/* Batch 3: an experiment question (kind: 'exp') and questions with drawing parts. */
(function () {
  const { svg, line, box, arrow, text, dot, range } = window.draw;
  const H = window.HFIG || {};
  const cross = (f, x, y) => `<path d="M${f.X(x) - 5} ${f.Y(y) - 5} l10 10 m0 -10 l-10 10" stroke="currentColor" stroke-width="2"/>`;
  // Chart of neutron number N against proton number Z
  const nz = graphFrame({
    aria: 'Grid of neutron number N against proton number Z with uranium-238 marked at Z = 92, N = 146', w: 400, h: 260,
    x: { min: 87, max: 94, label: 'Z', ticks: [88, 89, 90, 91, 92, 93].map(v => [v, String(v)]) },
    y: { min: 139, max: 148, label: 'N', ticks: [140, 141, 142, 143, 144, 145, 146, 147].map(v => [v, String(v)]) },
    grid: { x: [88, 89, 90, 91, 92, 93], y: [140, 141, 142, 143, 144, 145, 146, 147] }, dots: [[92, 146, '²³⁸U', 0, -10]]
  });
  const chain = [[92, 146], [90, 144], [91, 143], [92, 142]];
  const nzArrow = (a, b) => arrow(nz.X(a[0]), nz.Y(a[1]), nz.X(b[0]), nz.Y(b[1]), 2.2);
  const nzAnswer = nzArrow(chain[0], chain[1]) + nzArrow(chain[1], chain[2]) + nzArrow(chain[2], chain[3]) +
    chain.slice(1).map(([z, n]) => `<circle cx="${nz.X(z)}" cy="${nz.Y(n)}" r="4" fill="currentColor"/>`).join('') +
    text(nz.X(90) - 6, nz.Y(144) + 4, 'Th', { size: 11, anchor: 'end' }) + text(nz.X(91) + 6, nz.Y(143) + 4, 'Pa', { size: 11, anchor: 'start' }) + text(nz.X(92) + 6, nz.Y(142) + 4, '²³⁴U', { size: 11, anchor: 'start' });
  // Inverse-square law: C = 9.0 × 10⁴ / d² (d in cm)
  const ds = [10, 15, 20, 25, 30], Cs = ds.map(d => 9e4 / (d * d));
  const inv = graphFrame({
    aria: 'Empty grid for plotting corrected count rate against 1/d squared', w: 400, h: 240,
    x: { max: 0.0112, label: '1/d² / cm⁻²', ticks: [0.002, 0.004, 0.006, 0.008, 0.010].map(v => [v, v.toFixed(3)]) },
    y: { max: 1000, label: 'C / min⁻¹', ticks: [200, 400, 600, 800, 1000].map(v => [v, String(v)]) },
    grid: { x: [0.001, 0.002, 0.003, 0.004, 0.005, 0.006, 0.007, 0.008, 0.009, 0.010, 0.011], y: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000] }
  });
  const invAnswer = ds.map((d, k) => cross(inv, 1 / (d * d), Cs[k])).join('') + inv.path([[0, 0], [0.011, 990]]);
  addStructured([
    {
      id: 'SN11', topic: 'nuc', level: 3, sub: 'Radioactive decay',
      stem: 'Uranium-238 (²³⁸₉₂U) decays by emitting an α particle to form thorium (Th). The thorium then emits a β⁻ particle to form protactinium (Pa), which emits another β⁻ particle to form uranium-234. The grid shows the neutron number N against the proton number Z.',
      parts: [
        {
          label: '(a)', marks: 3, q: 'On the grid, draw arrows to show the three decays, starting from uranium-238.',
          answer: 'α decay: Z falls by 2 and N by 2, from (92, 146) to (90, 144). Each β⁻ decay: Z rises by 1 and N falls by 1, to (91, 143) and then to (92, 142).',
          points: ['α decay to Z = 90, N = 144 [1]', 'β⁻ decay to Z = 91, N = 143 [1]', 'Second β⁻ decay to Z = 92, N = 142 [1]'],
          draw: { w: nz.w, h: nz.h, base: nz.base, tools: ['arrow', 'line'], aria: 'N–Z grid for drawing the decays', snap: [88, 89, 90, 91, 92, 93].flatMap(z => range(140, 147, 7).map(n => [nz.X(z), nz.Y(n)])), answer: nzAnswer }
        },
        {
          label: '(b)', marks: 2, q: 'Write the nuclear equation for the α decay.',
          answer: '²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He', points: ['Correct products ²³⁴Th and ⁴He [1]', 'Nucleon and proton numbers balanced [1]']
        },
        { label: '(c)', marks: 1, q: 'Uranium-234 and uranium-238 are isotopes. What does this mean?', answer: 'They have the same number of protons (92) but different numbers of neutrons (142 and 146).', points: ['Same proton number, different neutron number [1]'] },
        { label: '(d)', marks: 1, q: 'What change happens inside a nucleus when it emits a β⁻ particle?', answer: 'A neutron changes into a proton and an electron; the electron is emitted as the β⁻ particle.', points: ['A neutron changes into a proton (and an electron) [1]'] }
      ],
      zh: {
        sub: '放射衰變',
        stem: '鈾-238（²³⁸₉₂U）放出一粒 α 粒子衰變成釷（Th）。釷隨後放出一粒 β⁻ 粒子變成鏷（Pa），鏷再放出一粒 β⁻ 粒子變成鈾-234。方格顯示中子數 N 對質子數 Z 的關係。',
        parts: [
          { q: '在方格上由鈾-238 開始畫出箭號，表示這三次衰變。', answer: 'α 衰變：Z 減 2、N 減 2，由 (92, 146) 至 (90, 144)。每次 β⁻ 衰變：Z 加 1、N 減 1，先至 (91, 143)，再至 (92, 142)。', points: ['α 衰變至 Z = 90、N = 144 [1]', 'β⁻ 衰變至 Z = 91、N = 143 [1]', '第二次 β⁻ 衰變至 Z = 92、N = 142 [1]'] },
          { q: '寫出 α 衰變的核方程。', answer: '²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He', points: ['生成物 ²³⁴Th 和 ⁴He 正確 [1]', '核子數和質子數平衡 [1]'] },
          { q: '鈾-234 和鈾-238 是同位素。這是甚麼意思？', answer: '它們的質子數相同（92），但中子數不同（142 和 146）。', points: ['質子數相同，中子數不同 [1]'] },
          { q: '原子核放出 β⁻ 粒子時，核內發生甚麼變化？', answer: '一粒中子變成一粒質子和一粒電子；電子以 β⁻ 粒子的形式放出。', points: ['一粒中子變成一粒質子（和一粒電子）[1]'] }
        ]
      }
    },
    {
      id: 'SN12', topic: 'nuc', level: 4, kind: 'exp', sub: 'Experiment: half-life',
      stem: 'You are given a GM tube connected to a counter, a stop-watch, a pair of tongs and a sealed radioactive source whose half-life is a few minutes. You are asked to measure the half-life of the source.',
      figure: H.N81 || '',
      parts: [
        {
          label: '(a)', marks: 2, q: 'How would you find the background count rate?',
          answer: 'With the source removed (kept far away in its lead box), record the counts over a long time, e.g. 5 minutes, and divide to get the count rate per minute.',
          points: ['Measure the counts with the source removed / far away [1]', 'Over a long time (several minutes), giving a rate per minute [1]']
        },
        {
          label: '(b)', marks: 3, q: 'Describe how you would then take your measurements and find the half-life.',
          answer: 'Place the source at a fixed distance in front of the GM tube. Record the counts in equal intervals (e.g. every 30 s) for several half-lives. Subtract the background from each count rate, plot the corrected count rate against time, and read off the time for the rate to halve; repeat from several starting points and take the average.',
          points: ['Source and GM tube kept at a fixed distance [1]', 'Counts recorded in equal time intervals over several half-lives [1]', 'Background subtracted; corrected rate plotted against time and the halving time read (averaged) [1]']
        },
        {
          label: '(c)', marks: 2, q: 'State two safety precautions you would take when handling the source.',
          answer: 'Any two: handle it with tongs, never with the hands; keep it pointed away from the body; keep the time the source is out of its lead box short; return it to the lead box straight after use; wash hands afterwards.',
          points: ['First correct precaution [1]', 'Second correct precaution [1]']
        },
        {
          label: '(d)', marks: 2, q: 'The corrected count rate falls from 520 to 65 counts per minute in 6.0 minutes. Find the half-life.',
          answer: '520 → 260 → 130 → 65 is three halvings, so 3 half-lives = 6.0 min and the half-life = 2.0 min.',
          points: ['520 to 65 is three half-lives [1M]', '2.0 min [1A]'], num: { v: 2.0, unit: 'min' }
        },
        {
          label: '(e)', marks: 1, q: 'Why do the count rates not fall smoothly but scatter about a curve?',
          answer: 'Radioactive decay is random, so the number of decays in each interval fluctuates.', points: ['Radioactive decay is random [1]']
        }
      ],
      zh: {
        sub: '實驗：半衰期',
        stem: '你獲提供一個連接計數器的 GM 管、一個秒錶、一把鉗子和一個半衰期為數分鐘的密封放射源。你需要量度放射源的半衰期。',
        parts: [
          { q: '你會怎樣求本底計數率？', answer: '移走放射源（放在遠處的鉛盒內），記錄一段較長時間（例如 5 分鐘）內的計數，再除以時間得出每分鐘的計數率。', points: ['移走放射源／放在遠處時量度計數 [1]', '量度一段較長時間（數分鐘），得出每分鐘的計數率 [1]'] },
          { q: '描述你之後會怎樣量度並求出半衰期。', answer: '把放射源放在 GM 管前一個固定距離處。在數個半衰期內，每隔相等的時間（例如每 30 s）記錄計數。把每個計數率減去本底，描繪經校正的計數率對時間的線圖，讀出計數率減半所需的時間；從數個不同起點重複並取平均值。', points: ['放射源與 GM 管保持固定距離 [1]', '在數個半衰期內每隔相等時間記錄計數 [1]', '減去本底，描繪經校正的計數率對時間的線圖並讀出減半時間（取平均）[1]'] },
          { q: '指出處理放射源時你會採取的兩項安全措施。', answer: '任何兩項：用鉗子處理，切勿用手；放射源不要指向身體；盡量縮短放射源離開鉛盒的時間；使用後立即放回鉛盒；事後洗手。', points: ['第一項正確的措施 [1]', '第二項正確的措施 [1]'] },
          { q: '經校正的計數率在 6.0 分鐘內由每分鐘 520 次降至 65 次。求半衰期。', answer: '520 → 260 → 130 → 65 是減半三次，所以 3 個半衰期 = 6.0 min，半衰期 = 2.0 min。', points: ['由 520 至 65 是三個半衰期 [1M]', '2.0 min [1A]'] },
          { q: '為甚麼計數率不是平滑地下降，而是分散在一條曲線附近？', answer: '放射衰變是隨機的，所以每段時間內的衰變數目會起伏。', points: ['放射衰變是隨機的 [1]'] }
        ]
      }
    },
    {
      id: 'SN13', topic: 'nuc', level: 4, sub: 'Inverse-square law',
      stem: 'A small γ source is placed at different distances d from a GM tube. The corrected count rate C is recorded:<br><table class="dtable"><tr><th>d / cm</th>' + ds.map(d => `<td>${d}</td>`).join('') + '</tr><tr><th>C / min⁻¹</th>' + Cs.map(C => `<td>${Math.round(C)}</td>`).join('') + '</tr></table>',
      figure: H.N81 || '',
      parts: [
        { label: '(a)', marks: 1, q: 'Calculate 1/d² for each distance.', answer: '1/d² = 0.0100, 0.00444, 0.00250, 0.00160 and 0.00111 cm⁻².', points: ['All five values correct [1]'] },
        {
          label: '(b)', marks: 3, q: 'On the grid, plot C against 1/d² and draw the best-fit line.',
          answer: 'The five points lie on a straight line through the origin.',
          points: ['Points plotted correctly [1]', 'Straight best-fit line [1]', 'Line passes through the origin [1]'],
          draw: { w: inv.w, h: inv.h, base: inv.base, tools: ['line', 'pen'], aria: 'Grid for plotting C against 1/d squared', answer: invAnswer }
        },
        { label: '(c)', marks: 1, q: 'What does the graph show?', answer: 'C is directly proportional to 1/d²: the γ radiation obeys the inverse-square law (it is not absorbed by the air).', points: ['C ∝ 1/d² (inverse-square law) [1]'] },
        {
          label: '(d)', marks: 2, q: 'Predict the corrected count rate at d = 40 cm.',
          answer: 'C d² is constant = 900 × 10² = 9.0 × 10⁴. At 40 cm: C = 9.0 × 10⁴ / 40² = 56 min⁻¹.',
          points: ['C d² constant (or reads gradient) [1M]', '56 min⁻¹ [1A]'], num: { v: 56.25, unit: 'min⁻¹', tol: 0.03 }
        },
        { label: '(e)', marks: 1, q: 'Why could this method not be used to study α particles?', answer: 'α particles are absorbed by a few centimetres of air, so the count rate would fall far faster than the inverse-square law.', points: ['α absorbed by a few cm of air [1]'] }
      ],
      zh: {
        sub: '平方反比定律',
        stem: '把一個細小的 γ 放射源放在與 GM 管相距 d 的不同位置，記錄經校正的計數率 C：<br><table class="dtable"><tr><th>d / cm</th>' + ds.map(d => `<td>${d}</td>`).join('') + '</tr><tr><th>C / min⁻¹</th>' + Cs.map(C => `<td>${Math.round(C)}</td>`).join('') + '</tr></table>',
        parts: [
          { q: '計算每個距離的 1/d²。', answer: '1/d² = 0.0100、0.00444、0.00250、0.00160 和 0.00111 cm⁻²。', points: ['五個數值都正確 [1]'] },
          { q: '在方格上描繪 C 對 1/d² 的關係，並畫出最佳擬合線。', answer: '五點都在一條通過原點的直線上。', points: ['各點描繪正確 [1]', '最佳擬合直線 [1]', '直線通過原點 [1]'] },
          { q: '線圖顯示甚麼？', answer: 'C 與 1/d² 成正比：γ 輻射遵守平方反比定律（不被空氣吸收）。', points: ['C ∝ 1/d²（平方反比定律）[1]'] },
          { q: '預測 d = 40 cm 時經校正的計數率。', answer: 'C d² 不變 = 900 × 10² = 9.0 × 10⁴。在 40 cm 時：C = 9.0 × 10⁴ / 40² = 56 min⁻¹。', points: ['C d² 不變（或讀取斜率）[1M]', '56 min⁻¹ [1A]'] },
          { q: '為甚麼這方法不能用來研究 α 粒子？', answer: 'α 粒子會被數厘米的空氣吸收，所以計數率下降得比平方反比定律快得多。', points: ['α 被數厘米的空氣吸收 [1]'] }
        ]
      }
    }
  ]);
})();
