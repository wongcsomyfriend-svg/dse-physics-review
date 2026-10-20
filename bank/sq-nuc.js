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
