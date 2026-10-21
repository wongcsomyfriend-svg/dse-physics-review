/* Electricity and Magnetism — structured questions (Paper 1 Section B style). Format: see bank/core.js (addStructured). */
addStructured([
  {
    id: 'SE01', topic: 'elec', level: 3, sub: 'Internal resistance',
    stem: 'A battery of e.m.f. 6.0 V is connected to a 4.0 Ω resistor. The current is 1.2 A.',
    parts: [
      { label: '(a)', marks: 1, q: 'Find the terminal p.d. of the battery.', answer: 'V = IR = 1.2 × 4.0 = 4.8 V.', points: ['4.8 V [1]'], num: { v: 4.8, unit: 'V' } },
      { label: '(b)', marks: 2, q: 'Find the internal resistance of the battery.', answer: 'ε = V + Ir ⇒ r = (6.0 − 4.8) / 1.2 = 1.0 Ω.', points: ['ε = V + Ir (lost volts = 1.2 V) [1M]', 'r = 1.0 Ω [1A]'], num: { v: 1.0, unit: 'Ω' } },
      { label: '(c)', marks: 1, q: 'Find the power delivered to the 4.0 Ω resistor.', answer: 'P = I²R = 1.2² × 4.0 = 5.76 W.', points: ['5.76 W [1]'], num: { v: 5.76, unit: 'W' } },
      { label: '(d)', marks: 2, q: 'A second 4.0 Ω resistor is connected in parallel with the first. Find the new terminal p.d.', answer: 'External resistance = 2.0 Ω, so I = 6.0 / (2.0 + 1.0) = 2.0 A and V = 6.0 − 2.0 × 1.0 = 4.0 V.', points: ['I = 6.0 / 3.0 = 2.0 A [1M]', 'V = 4.0 V [1A]'], num: { v: 4.0, unit: 'V' } }
    ],
    zh: {
      sub: '內阻',
      stem: '一個電動勢為 6.0 V 的電池連接到一個 4.0 Ω 的電阻器，電流為 1.2 A。',
      parts: [
        { q: '求電池的端電壓。', answer: 'V = IR = 1.2 × 4.0 = 4.8 V。', points: ['4.8 V [1]'] },
        { q: '求電池的內阻。', answer: 'ε = V + Ir ⇒ r = (6.0 − 4.8) / 1.2 = 1.0 Ω。', points: ['ε = V + Ir（損失電壓 = 1.2 V）[1M]', 'r = 1.0 Ω [1A]'] },
        { q: '求 4.0 Ω 電阻器得到的功率。', answer: 'P = I²R = 1.2² × 4.0 = 5.76 W。', points: ['5.76 W [1]'] },
        { q: '把第二個 4.0 Ω 電阻器與第一個並聯。求新的端電壓。', answer: '外電阻 = 2.0 Ω，所以 I = 6.0 / (2.0 + 1.0) = 2.0 A，V = 6.0 − 2.0 × 1.0 = 4.0 V。', points: ['I = 6.0 / 3.0 = 2.0 A [1M]', 'V = 4.0 V [1A]'] }
      ]
    }
  },
  {
    id: 'SE02', topic: 'elec', level: 3, sub: 'Domestic electricity',
    stem: 'An electric kettle is rated "220 V, 2200 W". It has a metal casing and is connected to the mains by a three-pin plug.',
    parts: [
      { label: '(a)', marks: 1, q: 'Find the current in the kettle when it works normally.', answer: 'I = P / V = 2200 / 220 = 10 A.', points: ['10 A [1]'], num: { v: 10, unit: 'A' } },
      { label: '(b)', marks: 1, q: 'Which of the fuses 3 A, 5 A, 13 A is the most suitable? Why?', answer: '13 A: the fuse rating must be a little above the normal current (10 A), otherwise the fuse would blow in normal use.', points: ['13 A, just above the normal current [1]'] },
      { label: '(c)', marks: 2, q: 'The kettle is used for 15 minutes a day for 30 days. Electricity costs $1.2 per kW h. Find the cost.', answer: 'Energy = 2.2 kW × 0.25 h × 30 = 16.5 kW h. Cost = 16.5 × $1.2 = $19.8.', points: ['Energy = 16.5 kW h [1M]', '$19.8 [1A]'], num: { v: 19.8, unit: '$' } },
      { label: '(d)', marks: 2, q: 'Explain how the earth wire protects the user if the live wire touches the metal casing.', answer: 'The earth wire connects the casing to the ground through a very low resistance. A large current flows to earth, which blows the fuse and cuts off the live supply, so the casing does not stay live.', points: ['Low-resistance path to earth gives a large current [1]', 'Fuse blows, disconnecting the live wire [1]'] }
    ],
    zh: {
      sub: '家居用電',
      stem: '一個電水壺的額定值為「220 V, 2200 W」。它有金屬外殼，以三腳插頭連接電源。',
      parts: [
        { q: '求電水壺正常運作時的電流。', answer: 'I = P / V = 2200 / 220 = 10 A。', points: ['10 A [1]'] },
        { q: '3 A、5 A、13 A 的保險絲中哪一個最適合？為甚麼？', answer: '13 A：保險絲的額定值應略高於正常電流（10 A），否則正常使用時便會熔斷。', points: ['13 A，略高於正常電流 [1]'] },
        { q: '電水壺每天使用 15 分鐘，共 30 天。電費為每 kW h $1.2。求電費。', answer: '能量 = 2.2 kW × 0.25 h × 30 = 16.5 kW h。電費 = 16.5 × $1.2 = $19.8。', points: ['能量 = 16.5 kW h [1M]', '$19.8 [1A]'] },
        { q: '解釋若火線碰到金屬外殼，地線怎樣保護使用者。', answer: '地線以極低的電阻把外殼連接到大地。大電流流向大地，令保險絲熔斷，切斷火線電源，所以外殼不會一直帶電。', points: ['通往大地的低電阻通路產生大電流 [1]', '保險絲熔斷，切斷火線 [1]'] }
      ]
    }
  },
  {
    id: 'SE03', topic: 'elec', level: 4, sub: 'Electric field',
    stem: 'Two horizontal parallel plates 5.0 cm apart are connected to a 2000 V supply. A tiny charged oil drop carrying a charge of −3.2 × 10⁻¹⁹ C is held stationary between them. (g = 9.81 m s⁻²)',
    parts: [
      { label: '(a)', marks: 1, q: 'Find the electric field strength between the plates.', answer: 'E = V / d = 2000 / 0.050 = 4.0 × 10⁴ V m⁻¹.', points: ['4.0 × 10⁴ V m⁻¹ [1]'], num: { v: 4.0e4, unit: 'V m⁻¹' } },
      { label: '(b)', marks: 1, q: 'Find the size of the electric force on the drop.', answer: 'F = qE = 3.2 × 10⁻¹⁹ × 4.0 × 10⁴ = 1.28 × 10⁻¹⁴ N.', points: ['1.28 × 10⁻¹⁴ N [1]'], num: { v: 1.28e-14, unit: 'N' } },
      { label: '(c)', marks: 2, q: 'Find the mass of the drop.', answer: 'The electric force balances the weight: mg = qE ⇒ m = 1.28 × 10⁻¹⁴ / 9.81 = 1.30 × 10⁻¹⁵ kg.', points: ['mg = qE [1M]', '1.30 × 10⁻¹⁵ kg [1A]'], num: { v: 1.305e-15, unit: 'kg' } },
      { label: '(d)', marks: 2, q: 'Which plate is positive? Explain.', answer: 'The upper plate. The electric force on the drop must be upwards to balance its weight; a negative charge is pulled towards the positive plate.', points: ['Upper plate [1]', 'Force on the negative drop must be upwards, towards the positive plate [1]'] }
    ],
    zh: {
      sub: '電場',
      stem: '兩塊相距 5.0 cm 的水平平行金屬板連接到 2000 V 的電源。一粒帶 −3.2 × 10⁻¹⁹ C 電荷的微小油滴靜止在兩板之間。（g = 9.81 m s⁻²）',
      parts: [
        { q: '求兩板之間的電場強度。', answer: 'E = V / d = 2000 / 0.050 = 4.0 × 10⁴ V m⁻¹。', points: ['4.0 × 10⁴ V m⁻¹ [1]'] },
        { q: '求油滴所受電力的大小。', answer: 'F = qE = 3.2 × 10⁻¹⁹ × 4.0 × 10⁴ = 1.28 × 10⁻¹⁴ N。', points: ['1.28 × 10⁻¹⁴ N [1]'] },
        { q: '求油滴的質量。', answer: '電力與重量平衡：mg = qE ⇒ m = 1.28 × 10⁻¹⁴ / 9.81 = 1.30 × 10⁻¹⁵ kg。', points: ['mg = qE [1M]', '1.30 × 10⁻¹⁵ kg [1A]'] },
        { q: '哪一塊板帶正電？解釋。', answer: '上板。油滴所受的電力必須向上，才能與重量平衡；負電荷被吸向正板。', points: ['上板 [1]', '負電油滴所受的力須向上，即指向正板 [1]'] }
      ]
    }
  },
  {
    id: 'SE04', topic: 'elec', level: 4, sub: 'Magnetic force',
    stem: 'A straight wire 5.0 cm long carrying a current of 2.0 A lies between the poles of a magnet, at right angles to a uniform magnetic field of 0.30 T. (Charge of electron = 1.60 × 10⁻¹⁹ C)',
    parts: [
      { label: '(a)', marks: 2, q: 'Find the magnetic force on the wire.', answer: 'F = BIL = 0.30 × 2.0 × 0.050 = 0.030 N.', points: ['F = BIL with L in metres [1M]', '0.030 N [1A]'], num: { v: 0.030, unit: 'N' } },
      { label: '(b)', marks: 1, q: 'The field points from left to right and the current flows into the page. In which direction is the force?', answer: 'Downwards (Fleming\'s left-hand rule).', points: ['Downwards [1]'] },
      { label: '(c)', marks: 1, q: 'An electron moves at 2.0 × 10⁶ m s⁻¹ at right angles to the same field. Find the magnetic force on it.', answer: 'F = BQv = 0.30 × 1.60 × 10⁻¹⁹ × 2.0 × 10⁶ = 9.6 × 10⁻¹⁴ N.', points: ['9.6 × 10⁻¹⁴ N [1]'], num: { v: 9.6e-14, unit: 'N' } },
      { label: '(d)', marks: 2, q: 'Explain why this force does not change the speed of the electron.', answer: 'The magnetic force is always perpendicular to the electron\'s velocity, so it does no work on the electron. Its kinetic energy, and hence its speed, stay the same; only the direction changes (it moves in a circle).', points: ['Force always perpendicular to the velocity [1]', 'No work done, so KE (speed) unchanged [1]'] }
    ],
    zh: {
      sub: '磁力',
      stem: '一條長 5.0 cm、載有 2.0 A 電流的直導線放在磁鐵兩極之間，與 0.30 T 的均勻磁場垂直。（電子電荷 = 1.60 × 10⁻¹⁹ C）',
      parts: [
        { q: '求導線所受的磁力。', answer: 'F = BIL = 0.30 × 2.0 × 0.050 = 0.030 N。', points: ['F = BIL，L 以米為單位 [1M]', '0.030 N [1A]'] },
        { q: '磁場由左指向右，電流流入紙面。力的方向是怎樣的？', answer: '向下（弗林明左手定則）。', points: ['向下 [1]'] },
        { q: '一個電子以 2.0 × 10⁶ m s⁻¹ 垂直於同一磁場運動。求它所受的磁力。', answer: 'F = BQv = 0.30 × 1.60 × 10⁻¹⁹ × 2.0 × 10⁶ = 9.6 × 10⁻¹⁴ N。', points: ['9.6 × 10⁻¹⁴ N [1]'] },
        { q: '解釋為甚麼這個力不會改變電子的速率。', answer: '磁力總是垂直於電子的速度，所以不對電子做功。它的動能以至速率保持不變；只有方向改變（作圓周運動）。', points: ['力總是垂直於速度 [1]', '不做功，所以動能（速率）不變 [1]'] }
      ]
    }
  },
  {
    id: 'SE05', topic: 'elec', level: 5, sub: 'Electromagnetic induction',
    stem: 'A metal rod 0.20 m long slides at a steady 3.0 m s⁻¹ along two parallel horizontal rails joined by a 1.5 Ω resistor. A uniform vertical magnetic field of 0.50 T acts. Ignore friction and the resistance of the rod and rails.',
    parts: [
      { label: '(a)', marks: 1, q: 'Find the induced e.m.f.', answer: 'ε = Blv = 0.50 × 0.20 × 3.0 = 0.30 V.', points: ['0.30 V [1]'], num: { v: 0.30, unit: 'V' } },
      { label: '(b)', marks: 1, q: 'Find the induced current.', answer: 'I = ε / R = 0.30 / 1.5 = 0.20 A.', points: ['0.20 A [1]'], num: { v: 0.20, unit: 'A' } },
      { label: '(c)', marks: 1, q: 'Find the magnetic force on the rod.', answer: 'F = BIL = 0.50 × 0.20 × 0.20 = 0.020 N, opposing the motion.', points: ['0.020 N [1]'], num: { v: 0.020, unit: 'N' } },
      { label: '(d)', marks: 2, q: 'Find the power needed to keep the rod moving, and show that it equals the power dissipated in the resistor.', answer: 'Mechanical power = Fv = 0.020 × 3.0 = 0.060 W. Electrical power = I²R = 0.20² × 1.5 = 0.060 W. They are equal.', points: ['Fv = 0.060 W [1]', 'I²R = 0.060 W, the same [1]'], num: { v: 0.060, unit: 'W' } },
      { label: '(e)', marks: 1, q: 'Explain, in terms of energy, why a force is needed to keep the rod moving at constant speed.', answer: 'Electrical energy is continuously converted to heat in the resistor, so work must be done on the rod to supply this energy (Lenz\'s law: the induced current opposes the motion).', points: ['Work must be done to supply the electrical energy dissipated (Lenz\'s law) [1]'] }
    ],
    zh: {
      sub: '電磁感應',
      stem: '一根長 0.20 m 的金屬棒以穩定的 3.0 m s⁻¹ 沿兩條平行的水平路軌滑動，路軌以一個 1.5 Ω 的電阻器連接。均勻的垂直磁場為 0.50 T。忽略摩擦力以及棒和路軌的電阻。',
      parts: [
        { q: '求感生電動勢。', answer: 'ε = Blv = 0.50 × 0.20 × 3.0 = 0.30 V。', points: ['0.30 V [1]'] },
        { q: '求感生電流。', answer: 'I = ε / R = 0.30 / 1.5 = 0.20 A。', points: ['0.20 A [1]'] },
        { q: '求棒所受的磁力。', answer: 'F = BIL = 0.50 × 0.20 × 0.20 = 0.020 N，方向阻礙運動。', points: ['0.020 N [1]'] },
        { q: '求保持棒移動所需的功率，並證明它等於電阻器消耗的功率。', answer: '機械功率 = Fv = 0.020 × 3.0 = 0.060 W。電功率 = I²R = 0.20² × 1.5 = 0.060 W。兩者相等。', points: ['Fv = 0.060 W [1]', 'I²R = 0.060 W，兩者相同 [1]'] },
        { q: '從能量角度解釋為甚麼需要施力才能使棒保持等速移動。', answer: '電能不斷在電阻器中轉化為熱，所以必須對棒做功以供應這些能量（楞次定律：感生電流阻礙運動）。', points: ['須做功以供應消耗的電能（楞次定律）[1]'] }
      ]
    }
  },
  {
    id: 'SE06', topic: 'elec', level: 5, sub: 'Power transmission',
    stem: 'A power station generates electricity at 11 kV. A transformer steps this up to 132 kV, and 66 MW is sent along transmission cables of total resistance 4.0 Ω.',
    parts: [
      { label: '(a)', marks: 1, q: 'Find the turns ratio N<sub>p</sub> : N<sub>s</sub> of the step-up transformer (assume it is ideal).', answer: 'N<sub>p</sub> / N<sub>s</sub> = 11 / 132 = 1 : 12.', points: ['1 : 12 [1]'] },
      { label: '(b)', marks: 1, q: 'Find the current in the cables.', answer: 'I = P / V = 66 × 10⁶ / 132 × 10³ = 500 A.', points: ['500 A [1]'], num: { v: 500, unit: 'A' } },
      { label: '(c)', marks: 2, q: 'Find the power lost in the cables.', answer: 'P<sub>loss</sub> = I²R = 500² × 4.0 = 1.0 × 10⁶ W (1.0 MW, about 1.5 %).', points: ['I²R [1M]', '1.0 × 10⁶ W [1A]'], num: { v: 1.0e6, unit: 'W' } },
      { label: '(d)', marks: 2, q: 'Explain why it would be impossible to send the same power at 11 kV through these cables.', answer: 'At 11 kV the current would be 66 × 10⁶ / 11 × 10³ = 6000 A, giving a loss of 6000² × 4.0 = 1.44 × 10⁸ W — more than the 66 MW being sent. The voltage drop across the cables (6000 × 4.0 = 24 kV) would also exceed the supply voltage.', points: ['Current would be 6000 A [1]', 'Loss (144 MW) would exceed the power sent [1]'] }
    ],
    zh: {
      sub: '電力傳輸',
      stem: '一間發電廠以 11 kV 發電，變壓器把電壓升至 132 kV，再經總電阻為 4.0 Ω 的輸電纜輸送 66 MW 的電功率。',
      parts: [
        { q: '求升壓變壓器的匝數比 N<sub>p</sub> : N<sub>s</sub>（假設變壓器是理想的）。', answer: 'N<sub>p</sub> / N<sub>s</sub> = 11 / 132 = 1 : 12。', points: ['1 : 12 [1]'] },
        { q: '求電纜中的電流。', answer: 'I = P / V = 66 × 10⁶ / 132 × 10³ = 500 A。', points: ['500 A [1]'] },
        { q: '求電纜中損耗的功率。', answer: 'P<sub>損耗</sub> = I²R = 500² × 4.0 = 1.0 × 10⁶ W（1.0 MW，約 1.5 %）。', points: ['I²R [1M]', '1.0 × 10⁶ W [1A]'] },
        { q: '解釋為甚麼不可能以 11 kV 經這些電纜輸送相同的功率。', answer: '在 11 kV 下電流將是 66 × 10⁶ / 11 × 10³ = 6000 A，損耗為 6000² × 4.0 = 1.44 × 10⁸ W — 比輸送的 66 MW 還多。電纜兩端的電壓降（6000 × 4.0 = 24 kV）亦會超過電源電壓。', points: ['電流會是 6000 A [1]', '損耗（144 MW）會超過輸送的功率 [1]'] }
      ]
    }
  },
  {
    id: 'SE07', topic: 'elec', level: 3, sub: 'Alternating current',
    stem: 'The mains supply is sinusoidal with a peak voltage of 311 V and a frequency of 50 Hz. A lamp rated "220 V, 100 W" is connected to it.',
    parts: [
      { label: '(a)', marks: 1, q: 'Find the r.m.s. voltage of the supply.', answer: 'V<sub>rms</sub> = 311 / √2 = 220 V.', points: ['220 V [1]'], num: { v: 219.9, unit: 'V' } },
      { label: '(b)', marks: 1, q: 'Find the period of the supply.', answer: 'T = 1 / f = 1 / 50 = 0.020 s.', points: ['0.020 s [1]'], num: { v: 0.020, unit: 's' } },
      { label: '(c)', marks: 2, q: 'Find the r.m.s. current in the lamp.', answer: 'I<sub>rms</sub> = P / V<sub>rms</sub> = 100 / 220 = 0.455 A.', points: ['I = P / V using r.m.s. values [1M]', '0.455 A [1A]'], num: { v: 0.4545, unit: 'A' } },
      { label: '(d)', marks: 1, q: 'Find the peak current.', answer: 'I₀ = √2 × 0.455 = 0.643 A.', points: ['0.643 A [1]'], num: { v: 0.643, unit: 'A' } },
      { label: '(e)', marks: 1, q: 'The current falls to zero 100 times a second. Why does the lamp not appear to flicker?', answer: 'The filament stays hot (it cannot cool down in such a short time), and the eye cannot follow changes this fast.', points: ['Filament stays hot / changes too fast for the eye [1]'] }
    ],
    zh: {
      sub: '交流電',
      stem: '市電是峰值電壓為 311 V、頻率為 50 Hz 的正弦交流電。一盞額定值為「220 V, 100 W」的燈連接到市電。',
      parts: [
        { q: '求電源的方均根電壓。', answer: 'V<sub>rms</sub> = 311 / √2 = 220 V。', points: ['220 V [1]'] },
        { q: '求電源的週期。', answer: 'T = 1 / f = 1 / 50 = 0.020 s。', points: ['0.020 s [1]'] },
        { q: '求燈的方均根電流。', answer: 'I<sub>rms</sub> = P / V<sub>rms</sub> = 100 / 220 = 0.455 A。', points: ['用方均根值計算 I = P / V [1M]', '0.455 A [1A]'] },
        { q: '求峰值電流。', answer: 'I₀ = √2 × 0.455 = 0.643 A。', points: ['0.643 A [1]'] },
        { q: '電流每秒降至零 100 次。為甚麼燈看來沒有閃爍？', answer: '燈絲保持灼熱（在這麼短的時間內來不及冷卻），而且眼睛跟不上這麼快的變化。', points: ['燈絲保持灼熱／變化太快，眼睛跟不上 [1]'] }
      ]
    }
  },
  {
    id: 'SE08', topic: 'elec', level: 5, sub: 'Magnetic field of a current',
    stem: 'A long solenoid 0.40 m long has 800 turns and carries a current of 2.5 A. A Hall probe is used to measure the field inside it. (μ₀ = 4π × 10⁻⁷ H m⁻¹)',
    parts: [
      { label: '(a)', marks: 2, q: 'Calculate the magnetic field strength near the centre of the solenoid.', answer: 'B = μ₀NI / l = 4π × 10⁻⁷ × 800 × 2.5 / 0.40 = 6.28 × 10⁻³ T.', points: ['B = μ₀NI / l [1M]', '6.28 × 10⁻³ T [1A]'], num: { v: 6.283e-3, unit: 'T' } },
      { label: '(b)', marks: 2, q: 'Why is the slice in a Hall probe usually made of a semiconductor rather than a metal?', answer: 'V<sub>H</sub> = BI / (nQt). A semiconductor has far fewer charge carriers per unit volume (smaller n), so for the same current the carriers drift faster and the Hall voltage is much larger and easier to measure.', points: ['Fewer charge carriers per unit volume (smaller n) [1]', 'so a larger, measurable Hall voltage [1]'] },
      { label: '(c)', marks: 1, q: 'What is the Hall voltage if the probe is turned so that the field is parallel to the face of the slice?', answer: 'Zero: there is no field component perpendicular to the slice, so no sideways magnetic force on the carriers.', points: ['Zero [1]'] },
      { label: '(d)', marks: 1, q: 'How does the field at one end of the solenoid compare with the field at the centre?', answer: 'It is about half the field at the centre.', points: ['About half [1]'] }
    ],
    zh: {
      sub: '電流的磁場',
      stem: '一個長 0.40 m 的長螺線管有 800 匝，載有 2.5 A 的電流。用霍爾探測器量度管內的磁場。（μ₀ = 4π × 10⁻⁷ H m⁻¹）',
      parts: [
        { q: '計算螺線管中央附近的磁場強度。', answer: 'B = μ₀NI / l = 4π × 10⁻⁷ × 800 × 2.5 / 0.40 = 6.28 × 10⁻³ T。', points: ['B = μ₀NI / l [1M]', '6.28 × 10⁻³ T [1A]'] },
        { q: '為甚麼霍爾探測器的薄片通常用半導體而不是金屬製成？', answer: 'V<sub>H</sub> = BI / (nQt)。半導體每單位體積的載流子少得多（n 較小），同一電流下載流子漂移得較快，霍爾電壓大得多，較容易量度。', points: ['每單位體積載流子較少（n 較小）[1]', '霍爾電壓較大、可量度 [1]'] },
        { q: '若把探測器轉動，使磁場與薄片表面平行，霍爾電壓是多少？', answer: '零：沒有垂直於薄片的磁場分量，載流子不受側向磁力。', points: ['零 [1]'] },
        { q: '螺線管一端的磁場與中央的磁場相比如何？', answer: '約為中央磁場的一半。', points: ['約一半 [1]'] }
      ]
    }
  }
]);

/* Batch 2: questions with figures and drawing parts (see drawHTML in app.js). */
(function () {
  const { svg, line, arrow, text, dot, circ, range } = window.draw;
  const crosses = line(range(140, 340, 5).flatMap(x => range(35, 205, 5).map(y => `M${x - 4} ${y - 4} l8 8 m0 -8 l-8 8`)).join(' '), 1);
  const fieldBase = '<rect x="120" y="20" width="240" height="200" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/>' + crosses +
    arrow(50, 80, 118, 80, 2) + dot(50, 80, 5) + text(50, 68, 'e⁻', { size: 13 }) + text(240, 236, 'magnetic field into page', { size: 12 });
  const fieldAnswer = '<path d="M120 80 A60 60 0 0 1 120 200" fill="none" stroke="currentColor" stroke-width="2.5"/>' +
    arrow(180, 135, 180, 150, 2.5) + arrow(125, 200, 95, 200, 2.5);
  // A wire carrying current into the page at W; P is 4.0 cm (80 units) to its right.
  const wireBase = circ(190, 115, 10) + line('M183 108 L197 122 M197 108 L183 122', 1.8) + dot(270, 115, 4) + text(278, 110, 'P', { size: 13, anchor: 'start' }) +
    line('M190 140 H270 M270 120 V146', 1, true) + text(230, 158, '4.0 cm', { size: 12 }) + text(190, 90, '10 A', { size: 12 });
  const wireAnswer = [30, 55, 80].map(R => `<circle cx="190" cy="115" r="${R}" fill="none" stroke="currentColor" stroke-width="2"/>` + arrow(186, 115 - R, 196, 115 - R, 2)).join('');
  addStructured([
    {
      id: 'SE09', topic: 'elec', level: 4, sub: 'Charged particles in magnetic fields',
      stem: 'An electron moving at 2.0 × 10⁷ m s⁻¹ enters a region of uniform magnetic field of 2.0 × 10⁻³ T directed into the page, moving at right angles to the field. (Mass of electron = 9.11 × 10⁻³¹ kg; charge of electron = 1.60 × 10⁻¹⁹ C)',
      figure: svg(380, 245, 'An electron enters a region of uniform magnetic field directed into the page', fieldBase),
      parts: [
        {
          label: '(a)', marks: 2, q: 'On the diagram, sketch the path of the electron in the field.',
          answer: 'The magnetic force on the (negative) electron is at first towards the bottom of the page (Fleming\'s left-hand rule, with the conventional current opposite to the electron\'s velocity). The electron moves clockwise in a semicircle and leaves the field moving to the left.',
          points: ['Circular arc curving towards the bottom of the page [1]', 'A semicircle, leaving the field moving to the left [1]'],
          draw: { w: 380, h: 245, base: fieldBase, tools: ['pen', 'arrow'], aria: 'Magnetic field region for sketching the electron path', answer: fieldAnswer }
        },
        {
          label: '(b)', marks: 2, q: 'Explain why the path is circular.',
          answer: 'The magnetic force is always perpendicular to the velocity, so it does no work and the speed stays constant. A force of constant size always at right angles to the motion provides a centripetal force, giving circular motion.',
          points: ['Force always perpendicular to the velocity / speed constant [1]', 'Constant-size force provides the centripetal force [1]']
        },
        {
          label: '(c)', marks: 2, q: 'Find the radius of the path.',
          answer: 'evB = mv² / r ⇒ r = mv / (eB) = 9.11 × 10⁻³¹ × 2.0 × 10⁷ / (1.60 × 10⁻¹⁹ × 2.0 × 10⁻³) = 0.057 m (5.7 cm).',
          points: ['evB = mv²/r [1M]', '0.057 m [1A]'], num: { v: 0.05694, unit: 'm' }
        },
        {
          label: '(d)', marks: 2, q: 'A proton enters the field in the same way at the same speed. State two differences between its path and that of the electron.',
          answer: 'The proton is positive, so it curves the opposite way (towards the top of the page, anticlockwise). Its mass is about 1840 times larger, so (with the same size of charge) its radius is about 1840 times larger.',
          points: ['Curves the opposite way (towards the top of the page) [1]', 'Much larger radius (about 1840 times) [1]']
        }
      ],
      zh: {
        sub: '帶電粒子在磁場中',
        stem: '一粒以 2.0 × 10⁷ m s⁻¹ 運動的電子，以垂直於磁場的方向進入一個 2.0 × 10⁻³ T、指入紙面的均勻磁場區域。（電子質量 = 9.11 × 10⁻³¹ kg；電子電荷 = 1.60 × 10⁻¹⁹ C）',
        parts: [
          { q: '在圖上繪畫電子在磁場中的路徑。', answer: '作用於（帶負電的）電子的磁力起初指向紙的下方（用弗林明左手定則，慣用電流方向與電子速度相反）。電子沿順時針方向作半圓運動，然後向左離開磁場。', points: ['向紙的下方彎曲的圓弧 [1]', '半圓，向左離開磁場 [1]'] },
          { q: '解釋為甚麼路徑是圓形的。', answer: '磁力總是垂直於速度，所以不做功，速率保持不變。大小不變而總是垂直於運動方向的力提供向心力，形成圓周運動。', points: ['力總是垂直於速度／速率不變 [1]', '大小不變的力提供向心力 [1]'] },
          { q: '求路徑的半徑。', answer: 'evB = mv² / r ⇒ r = mv / (eB) = 9.11 × 10⁻³¹ × 2.0 × 10⁷ / (1.60 × 10⁻¹⁹ × 2.0 × 10⁻³) = 0.057 m（5.7 cm）。', points: ['evB = mv²/r [1M]', '0.057 m [1A]'] },
          { q: '一粒質子以相同的方式和速率進入磁場。指出它的路徑與電子的路徑有哪兩點不同。', answer: '質子帶正電，所以向相反方向彎曲（向紙的上方，逆時針）。它的質量約大 1840 倍，所以（電荷大小相同）半徑約大 1840 倍。', points: ['向相反方向（紙的上方）彎曲 [1]', '半徑大得多（約 1840 倍）[1]'] }
        ]
      }
    },
    {
      id: 'SE10', topic: 'elec', level: 3, sub: 'Magnetic field of a current',
      stem: 'A long straight vertical wire carries a current of 10 A into the page. Point P is 4.0 cm from the wire. (μ₀ = 4π × 10⁻⁷ H m⁻¹)',
      figure: svg(380, 230, 'A wire carrying 10 A into the page, with point P 4.0 cm away', wireBase),
      parts: [
        {
          label: '(a)', marks: 2, q: 'On the diagram, draw three field lines to show the magnetic field pattern around the wire, with their direction.',
          answer: 'Concentric circles centred on the wire, getting further apart further out. By the right-hand grip rule (current into the page) the field lines go clockwise.',
          points: ['Concentric circles centred on the wire [1]', 'Clockwise direction [1]'],
          draw: { w: 380, h: 230, base: wireBase, tools: ['pen', 'arrow'], aria: 'Wire for drawing the field pattern', answer: wireAnswer }
        },
        {
          label: '(b)', marks: 2, q: 'Find the magnetic field strength at P.',
          answer: 'B = μ₀I / (2πr) = 4π × 10⁻⁷ × 10 / (2π × 0.040) = 5.0 × 10⁻⁵ T.',
          points: ['B = μ₀I / (2πr) with r = 0.040 m [1M]', '5.0 × 10⁻⁵ T [1A]'], num: { v: 5.0e-5, unit: 'T' }
        },
        { label: '(c)', marks: 1, q: 'State the direction of the magnetic field at P.', answer: 'Towards the bottom of the page (tangent to the clockwise circle through P).', points: ['Towards the bottom of the page [1]'] },
        {
          label: '(d)', marks: 2, q: 'A second long wire is placed through P, parallel to the first, carrying 10 A out of the page. Find the force on each metre of the second wire, and state its direction.',
          answer: 'F = BIL = 5.0 × 10⁻⁵ × 10 × 1 = 5.0 × 10⁻⁴ N per metre. The currents are in opposite directions, so the wires repel: the force on the second wire is away from the first (to the right).',
          points: ['5.0 × 10⁻⁴ N (per metre) [1]', 'Repulsion: away from the first wire [1]']
        }
      ],
      zh: {
        sub: '電流的磁場',
        stem: '一條長直豎直導線載有流入紙面的 10 A 電流。P 點與導線相距 4.0 cm。（μ₀ = 4π × 10⁻⁷ H m⁻¹）',
        parts: [
          { q: '在圖上畫出三條磁場線以顯示導線周圍的磁場圖樣，並標示方向。', answer: '以導線為圓心的同心圓，愈外愈疏。根據右手握拳定則（電流流入紙面），磁場線沿順時針方向。', points: ['以導線為圓心的同心圓 [1]', '順時針方向 [1]'] },
          { q: '求 P 點的磁場強度。', answer: 'B = μ₀I / (2πr) = 4π × 10⁻⁷ × 10 / (2π × 0.040) = 5.0 × 10⁻⁵ T。', points: ['B = μ₀I / (2πr)，其中 r = 0.040 m [1M]', '5.0 × 10⁻⁵ T [1A]'] },
          { q: '指出 P 點磁場的方向。', answer: '指向紙的下方（與通過 P 的順時針圓相切）。', points: ['指向紙的下方 [1]'] },
          { q: '把第二條長導線放在通過 P 點、與第一條平行的位置，載有流出紙面的 10 A 電流。求第二條導線每米所受的力，並指出其方向。', answer: 'F = BIL = 5.0 × 10⁻⁵ × 10 × 1 = 每米 5.0 × 10⁻⁴ N。兩電流方向相反，所以兩導線互相排斥：第二條導線所受的力指離第一條導線（向右）。', points: ['5.0 × 10⁻⁴ N（每米）[1]', '互相排斥：指離第一條導線 [1]'] }
        ]
      }
    }
  ]);
})();

/* Batch 3: an experiment question (kind: 'exp') and questions with drawing parts. */
(function () {
  const { svg, line, box, arrow, text, dot, circ } = window.draw;
  const cross = (f, x, y) => `<path d="M${f.X(x) - 5} ${f.Y(y) - 5} l10 10 m0 -10 l-10 10" stroke="currentColor" stroke-width="2"/>`;
  const meter = (x, y, t) => circ(x, y, 11) + text(x, y + 4, t, { size: 12, bold: true });
  const charge = (x, y, s) => circ(x, y, 12) + text(x, y + 5, s, { size: 15, bold: true });
  // Field of +Q and −Q
  const dipoleBase = charge(120, 110, '+') + charge(260, 110, '−');
  const dipoleAnswer = line('M132 110 H248', 2) + arrow(185, 110, 197, 110, 2) +
    [[60, 1], [110, 1], [60, -1], [110, -1]].map(([h, s]) => `<path d="M128 ${110 - s * 8} Q190 ${110 - s * h} 252 ${110 - s * 8}" fill="none" stroke="currentColor" stroke-width="2"/>` + arrow(184, 110 - s * h / 2 - s * 0.5 * 0, 196, 110 - s * h / 2, 2)).join('') +
    line('M108 110 H40 M272 110 H340', 2) + arrow(70, 110, 58, 110, 2) + arrow(310, 110, 298, 110, 2);
  // Parallel plates: + on top, − below
  const platesBase = line('M80 50 H300', 4) + line('M80 170 H300', 4) + text(70, 55, '+', { size: 15, anchor: 'end' }) + text(70, 175, '−', { size: 15, anchor: 'end' });
  const platesAnswer = [110, 150, 190, 230, 270].map(x => line(`M${x} 54 V166`, 2) + arrow(x, 104, x, 116, 2)).join('') +
    '<path d="M84 54 Q66 110 84 166 M296 54 Q314 110 296 166" fill="none" stroke="currentColor" stroke-width="1.6"/>';
  // e.m.f. and internal resistance: V = 1.50 − 0.80 I
  const parts = circ(190, 20, 11) + text(190, 24, 'V', { size: 12, bold: true }) + line('M185 48 V72', 2) + line('M195 54 V66', 4) + line('M150 60 H185 M195 60 H230', 2) +
    meter(320, 110, 'A') + box(160, 143, 60, 14) + line('M165 170 L215 130', 1.5) + text(190, 190, 'rheostat', { size: 11 }) +
    [[150, 60], [230, 60], [160, 150], [220, 150], [320, 99], [320, 121], [179, 20], [201, 20]].map(([x, y]) => dot(x, y, 2.5)).join('');
  const circuitAnswer = line('M150 60 H60 V150 H160 M220 150 H320 V121 M320 99 V60 H230 M150 60 V20 H179 M201 20 H230 V60', 2);
  const vi = graphFrame({
    aria: 'Empty grid for plotting terminal voltage against current', w: 400, h: 240,
    x: { max: 0.6, label: 'I / A', ticks: [0.1, 0.2, 0.3, 0.4, 0.5].map(v => [v, v.toFixed(1)]) },
    y: { max: 1.6, label: 'V / V', ticks: [0.4, 0.8, 1.2, 1.6].map(v => [v, v.toFixed(1)]) },
    grid: { x: [0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55], y: [0.2, 0.4, 0.6, 0.8, 1.0, 1.2, 1.4, 1.6] }
  });
  const Is = [0.1, 0.2, 0.3, 0.4, 0.5], Vs = Is.map(I => 1.5 - 0.8 * I);
  const viAnswer = Is.map((I, k) => cross(vi, I, Vs[k])).join('') + vi.path([[0, 1.5], [0.55, 1.5 - 0.8 * 0.55]]);
  // Motor coil seen end-on: side P (left, current into page), side Q (right, current out of page); field left to right.
  const coilBase = line('M20 30 H60 V190 H20 M360 30 H320 V190 H360', 2) + text(40, 115, 'N', { size: 15, bold: true }) + text(340, 115, 'S', { size: 15, bold: true }) +
    [50, 170].map(y => arrow(70, y, 310, y, 1)).join('') + line('M130 110 H250', 1.2, true) + dot(190, 110, 3) +
    circ(130, 110, 10) + line('M123 103 L137 117 M137 103 L123 117', 1.8) + circ(250, 110, 10) + dot(250, 110, 3) +
    text(130, 92, 'P', { size: 13, bold: true }) + text(250, 92, 'Q', { size: 13, bold: true });
  const coilAnswer = arrow(130, 122, 130, 165, 2.5) + text(138, 160, 'F', { anchor: 'start' }) + arrow(250, 98, 250, 55, 2.5) + text(258, 62, 'F', { anchor: 'start' });
  addStructured([
    {
      id: 'SE11', topic: 'elec', level: 3, sub: 'Electric fields',
      stem: 'This question is about electric field patterns.',
      parts: [
        {
          label: '(a)', marks: 2, q: 'Two point charges +Q and −Q are fixed near each other. Draw the electric field pattern around them, with directions.',
          answer: 'Field lines start on +Q and end on −Q, curving round between them, with arrows pointing from + to −. The lines are closest together between the charges.',
          points: ['Lines start on +Q and end on −Q, curving between them [1]', 'Arrows from + towards − [1]'],
          draw: { w: 380, h: 220, base: dipoleBase, tools: ['pen', 'arrow'], aria: 'A positive and a negative charge', answer: dipoleAnswer }
        },
        {
          label: '(b)', marks: 2, q: 'Two parallel metal plates are connected to a d.c. supply; the upper plate is positive. Draw the electric field pattern between the plates.',
          answer: 'Parallel, evenly spaced straight lines between the plates (a uniform field), with arrows from the positive plate to the negative plate; the lines curve outwards slightly at the edges.',
          points: ['Parallel, evenly spaced lines between the plates [1]', 'Arrows from + to −, with some curving at the edges [1]'],
          draw: { w: 380, h: 220, base: platesBase, tools: ['line', 'arrow', 'pen'], aria: 'Two parallel plates', answer: platesAnswer }
        },
        {
          label: '(c)', marks: 1, q: 'The plates are 4.0 cm apart and the p.d. between them is 600 V. Find the electric field strength between the plates.',
          answer: 'E = V / d = 600 / 0.040 = 1.5 × 10⁴ V m⁻¹.', points: ['1.5 × 10⁴ V m⁻¹ [1]'], num: { v: 1.5e4, unit: 'V m⁻¹' }
        },
        {
          label: '(d)', marks: 2, q: 'Find the size and direction of the electric force on an electron between the plates. (Charge of electron = 1.60 × 10⁻¹⁹ C)',
          answer: 'F = eE = 1.60 × 10⁻¹⁹ × 1.5 × 10⁴ = 2.4 × 10⁻¹⁵ N, towards the positive (upper) plate.',
          points: ['2.4 × 10⁻¹⁵ N [1]', 'Towards the positive plate [1]'], num: { v: 2.4e-15, unit: 'N' }
        }
      ],
      zh: {
        sub: '電場',
        stem: '本題有關電場圖樣。',
        parts: [
          { q: '兩個點電荷 +Q 和 −Q 固定在彼此附近。畫出它們周圍的電場圖樣，並標示方向。', answer: '電場線由 +Q 出發，終止於 −Q，在兩者之間彎曲，箭號由 + 指向 −。兩電荷之間的電場線最密。', points: ['電場線由 +Q 出發、終止於 −Q，在兩者之間彎曲 [1]', '箭號由 + 指向 − [1]'] },
          { q: '兩塊平行金屬板接上直流電源；上板帶正電。畫出兩板之間的電場圖樣。', answer: '兩板之間是平行而間距均勻的直線（均勻電場），箭號由正板指向負板；在邊緣處電場線稍為向外彎曲。', points: ['兩板之間平行而間距均勻的直線 [1]', '箭號由 + 指向 −，邊緣處稍為彎曲 [1]'] },
          { q: '兩板相距 4.0 cm，兩板之間的電勢差為 600 V。求兩板之間的電場強度。', answer: 'E = V / d = 600 / 0.040 = 1.5 × 10⁴ V m⁻¹。', points: ['1.5 × 10⁴ V m⁻¹ [1]'] },
          { q: '求兩板之間一粒電子所受電力的大小和方向。（電子電荷 = 1.60 × 10⁻¹⁹ C）', answer: 'F = eE = 1.60 × 10⁻¹⁹ × 1.5 × 10⁴ = 2.4 × 10⁻¹⁵ N，指向正（上）板。', points: ['2.4 × 10⁻¹⁵ N [1]', '指向正板 [1]'] }
        ]
      }
    },
    {
      id: 'SE12', topic: 'elec', level: 4, kind: 'exp', sub: 'Experiment: e.m.f. and internal resistance',
      stem: 'You are given a cell, a voltmeter, an ammeter, a rheostat (variable resistor), a switch and connecting wires. You are asked to find the e.m.f. ε and the internal resistance r of the cell.',
      parts: [
        {
          label: '(a)', marks: 2, q: 'On the diagram, join the components with wires to make a suitable circuit.',
          answer: 'The cell, the ammeter and the rheostat are connected in series in one loop. The voltmeter is connected directly across the terminals of the cell.',
          points: ['Ammeter in series with the rheostat and the cell [1]', 'Voltmeter connected across the cell terminals [1]'],
          draw: { w: 380, h: 200, base: parts, tools: ['line'], aria: 'Circuit components to be joined: a cell, a voltmeter, an ammeter and a rheostat', snap: [[150, 60], [230, 60], [160, 150], [220, 150], [320, 99], [320, 121], [179, 20], [201, 20], [60, 60], [60, 150], [320, 60], [320, 150], [150, 20], [230, 20]], answer: circuitAnswer }
        },
        {
          label: '(b)', marks: 2, q: 'Describe how you would take your readings.',
          answer: 'Adjust the rheostat to give different currents and record the ammeter reading I and the voltmeter reading V each time, taking at least five sets. Keep the currents small and switch off between readings, so the cell does not run down or heat up.',
          points: ['Vary the rheostat and record pairs of V and I (at least five sets) [1]', 'Keep currents small / switch off between readings [1]']
        },
        {
          label: '(c)', marks: 1, q: 'Explain how a graph of V against I gives ε and r.',
          answer: 'V = ε − Ir, so V against I is a straight line: the intercept on the V-axis (I = 0) is ε, and the gradient is −r.',
          points: ['V = ε − Ir: intercept = ε, gradient = −r [1]']
        },
        {
          label: '(d)', marks: 3, q: 'These results were obtained:<br><table class="dtable"><tr><th>I / A</th>' + Is.map(I => `<td>${I.toFixed(2)}</td>`).join('') + '</tr><tr><th>V / V</th>' + Vs.map(V => `<td>${V.toFixed(2)}</td>`).join('') + '</tr></table>Plot V against I and draw the best-fit line, extended to I = 0.',
          answer: 'The points lie on a straight line falling 0.08 V for every 0.10 A; extended to I = 0 it meets the V-axis at 1.50 V.',
          points: ['Points plotted correctly [1]', 'Straight best-fit line [1]', 'Line extended to I = 0 [1]'],
          draw: { w: vi.w, h: vi.h, base: vi.base, tools: ['line', 'pen'], aria: 'Grid for plotting V against I', answer: viAnswer }
        },
        { label: '(e)', marks: 1, q: 'Use your graph to find the e.m.f. of the cell.', answer: 'Intercept on the V-axis: ε = 1.50 V.', points: ['1.50 V [1]'], num: { v: 1.5, unit: 'V' } },
        {
          label: '(f)', marks: 2, q: 'Use your graph to find the internal resistance of the cell.',
          answer: 'Gradient = (1.10 − 1.42) / (0.50 − 0.10) = −0.80 V A⁻¹, so r = 0.80 Ω.',
          points: ['r = −gradient [1M]', '0.80 Ω [1A]'], num: { v: 0.8, unit: 'Ω', tol: 0.04 }
        }
      ],
      zh: {
        sub: '實驗：電動勢和內阻',
        stem: '你獲提供一個電池、一個伏特計、一個安培計、一個變阻器、一個開關和連接導線。你需要求電池的電動勢 ε 和內阻 r。',
        parts: [
          { q: '在圖上用導線連接各元件，組成合適的電路。', answer: '電池、安培計和變阻器串聯成一個迴路。伏特計直接接在電池的兩極之間。', points: ['安培計與變阻器和電池串聯 [1]', '伏特計接在電池兩極之間 [1]'] },
          { q: '描述你會怎樣取得讀數。', answer: '調節變阻器以得到不同的電流，每次記錄安培計讀數 I 和伏特計讀數 V，至少取五組。保持電流細小，並在讀數之間關掉開關，使電池不會耗盡或變熱。', points: ['調節變阻器並記錄 V 和 I（至少五組）[1]', '保持電流細小／讀數之間關掉開關 [1]'] },
          { q: '解釋 V 對 I 的線圖怎樣給出 ε 和 r。', answer: 'V = ε − Ir，所以 V 對 I 是一條直線：V 軸上的截距（I = 0）是 ε，斜率是 −r。', points: ['V = ε − Ir：截距 = ε，斜率 = −r [1]'] },
          { q: '得到以下結果：<br><table class="dtable"><tr><th>I / A</th>' + Is.map(I => `<td>${I.toFixed(2)}</td>`).join('') + '</tr><tr><th>V / V</th>' + Vs.map(V => `<td>${V.toFixed(2)}</td>`).join('') + '</tr></table>描繪 V 對 I 的關係，畫出最佳擬合線並延長至 I = 0。', answer: '各點在一條直線上，每 0.10 A 下降 0.08 V；延長至 I = 0 時與 V 軸相交於 1.50 V。', points: ['各點描繪正確 [1]', '最佳擬合直線 [1]', '把直線延長至 I = 0 [1]'] },
          { q: '利用線圖求電池的電動勢。', answer: 'V 軸上的截距：ε = 1.50 V。', points: ['1.50 V [1]'] },
          { q: '利用線圖求電池的內阻。', answer: '斜率 = (1.10 − 1.42) / (0.50 − 0.10) = −0.80 V A⁻¹，所以 r = 0.80 Ω。', points: ['r = −斜率 [1M]', '0.80 Ω [1A]'] }
        ]
      }
    },
    {
      id: 'SE13', topic: 'elec', level: 4, sub: 'Motor effect',
      stem: 'The diagram shows the coil of a simple d.c. motor seen end-on, with its plane parallel to the magnetic field. In side P the current flows into the page; in side Q it flows out of the page. The coil has 50 turns; each side is 5.0 cm long in the field, and P and Q are 4.0 cm apart. The current is 2.0 A and the field is 0.20 T.',
      figure: svg(380, 220, 'A motor coil seen end-on between magnetic poles: side P carries current into the page and side Q carries current out of the page', coilBase),
      parts: [
        {
          label: '(a)', marks: 2, q: 'On the diagram, draw arrows to show the magnetic forces on sides P and Q.',
          answer: 'By Fleming\'s left-hand rule (field to the right): the force on P is downwards and the force on Q is upwards, equal in size.',
          points: ['Force on P downwards [1]', 'Force on Q upwards, equal and opposite [1]'],
          draw: { w: 380, h: 220, base: coilBase, tools: ['arrow'], aria: 'Motor coil for drawing the forces', snap: [[130, 110], [250, 110]], answer: coilAnswer }
        },
        { label: '(b)', marks: 1, q: 'In which direction does the coil start to turn, as seen in the diagram?', answer: 'Anticlockwise (P moves down, Q moves up).', points: ['Anticlockwise [1]'] },
        {
          label: '(c)', marks: 2, q: 'Find the size of the force on side P.',
          answer: 'F = NBIL = 50 × 0.20 × 2.0 × 0.050 = 1.0 N.', points: ['F = NBIL [1M]', '1.0 N [1A]'], num: { v: 1.0, unit: 'N' }
        },
        {
          label: '(d)', marks: 2, q: 'Find the torque on the coil in this position.',
          answer: 'The two forces form a couple: torque = F × (perpendicular distance between them) = 1.0 × 0.040 = 0.040 N m.',
          points: ['Torque = F × separation of the forces [1M]', '0.040 N m [1A]'], num: { v: 0.04, unit: 'N m' }
        },
        {
          label: '(e)', marks: 1, q: 'What is the purpose of the commutator in the motor?',
          answer: 'It reverses the current in the coil every half turn, so that the torque keeps turning the coil in the same direction.',
          points: ['Reverses the current every half turn so the coil keeps turning the same way [1]']
        }
      ],
      zh: {
        sub: '電動機效應',
        stem: '圖中顯示從一端看一個簡單直流電動機的線圈，線圈平面與磁場平行。在 P 邊電流流入紙面；在 Q 邊電流流出紙面。線圈有 50 匝；每邊在磁場中的長度為 5.0 cm，P 和 Q 相距 4.0 cm。電流為 2.0 A，磁場為 0.20 T。',
        parts: [
          { q: '在圖上畫出箭號，表示作用於 P 邊和 Q 邊的磁力。', answer: '根據弗林明左手定則（磁場向右）：P 所受的力向下，Q 所受的力向上，大小相等。', points: ['P 所受的力向下 [1]', 'Q 所受的力向上，大小相等、方向相反 [1]'] },
          { q: '從圖中看，線圈開始時向哪個方向轉動？', answer: '逆時針（P 向下移，Q 向上移）。', points: ['逆時針 [1]'] },
          { q: '求作用於 P 邊的力的大小。', answer: 'F = NBIL = 50 × 0.20 × 2.0 × 0.050 = 1.0 N。', points: ['F = NBIL [1M]', '1.0 N [1A]'] },
          { q: '求線圈在這位置所受的轉矩。', answer: '兩個力組成力偶：轉矩 = F ×（兩力之間的垂直距離）= 1.0 × 0.040 = 0.040 N m。', points: ['轉矩 = F × 兩力之間的距離 [1M]', '0.040 N m [1A]'] },
          { q: '電動機中換向器的作用是甚麼？', answer: '它每半轉把線圈中的電流反向一次，使轉矩一直使線圈沿同一方向轉動。', points: ['每半轉把電流反向，使線圈持續沿同一方向轉動 [1]'] }
        ]
      }
    }
  ]);
})();
