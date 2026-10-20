/* Wave Motion — additional hand-written questions (W37 onwards). Fields: see questions.js and bank/core.js. */
addBank([
  {
    id: 'W37', topic: 'wave', level: 2, sub: 'Wave terminology',
    stem: 'The amplitude of a wave is',
    options: [
      'the maximum displacement of a particle from its equilibrium position.',
      'the vertical distance between a crest and a trough.',
      'the distance between two neighbouring crests.',
      'the number of waves passing a point per second.'
    ],
    answer: 0,
    explain: 'Amplitude is measured from the equilibrium (rest) position to a crest or trough, so it is half the crest-to-trough distance. The distance between neighbouring crests is the wavelength, and the number of waves per second is the frequency.',
    zh: {
      sub: '波的術語',
      stem: '波的振幅是',
      options: ['質點偏離平衡位置的最大位移。', '波峰與波谷之間的垂直距離。', '兩個相鄰波峰之間的距離。', '每秒通過某點的波數。'],
      explain: '振幅由平衡（靜止）位置量至波峰或波谷，所以是波峰至波谷距離的一半。相鄰波峰之間的距離是波長，每秒的波數是頻率。'
    }
  },
  {
    id: 'W38', topic: 'wave', level: 2, sub: 'Transverse waves',
    stem: 'A transverse wave travels along a rope. How do the particles of the rope move?',
    options: [
      'They vibrate along the direction of travel of the wave.',
      'They vibrate perpendicular to the direction of travel of the wave.',
      'They move in circles.',
      'They travel along the rope with the wave.'
    ],
    answer: 1,
    explain: 'In a transverse wave the particles vibrate at right angles to the direction in which the wave (and its energy) travels. The particles only oscillate about their equilibrium positions; they are not carried along with the wave.',
    zh: {
      sub: '橫波',
      stem: '一列橫波沿繩傳播。繩上的質點怎樣運動？',
      options: ['沿波的傳播方向振動。', '垂直於波的傳播方向振動。', '作圓周運動。', '隨波沿繩移動。'],
      explain: '在橫波中，質點的振動方向與波（及其能量）的傳播方向垂直。質點只在平衡位置附近振動，不會隨波移走。'
    }
  },
  {
    id: 'W39', topic: 'wave', level: 3, sub: 'Wave graphs',
    stem: 'The displacement–time graph of one particle in a progressive wave shows that the particle completes one oscillation every 0.04 s. The wave travels at 2.0 m s⁻¹. What is the wavelength?',
    options: ['0.02 m', '0.04 m', '0.08 m', '50 m'],
    answer: 2,
    explain: 'The period of each particle equals the period of the wave: T = 0.04 s, so f = 25 Hz.<br>λ = v / f = vT = 2.0 × 0.04 = 0.08 m.<br>50 m comes from dividing v by T.',
    zh: {
      sub: '波的線圖',
      stem: '一列行波中某質點的位移－時間線圖顯示，該質點每 0.04 s 完成一次振動。波以 2.0 m s⁻¹ 傳播。波長是多少？',
      explain: '每個質點的週期等於波的週期：T = 0.04 s，所以 f = 25 Hz。<br>λ = v / f = vT = 2.0 × 0.04 = 0.08 m。<br>50 m 是把 v 除以 T 所得。'
    }
  },
  {
    id: 'W40', topic: 'wave', level: 3, sub: 'Phase',
    stem: 'Two points on a progressive wave are half a wavelength apart along the direction of travel. How do they move relative to each other?',
    options: [
      'They are always in phase.',
      'They are a quarter of a cycle out of phase.',
      'They always have the same displacement.',
      'They are in antiphase: they always move in opposite directions.'
    ],
    answer: 3,
    explain: 'A distance of λ corresponds to a phase difference of one whole cycle (360°), so λ/2 corresponds to 180°. The points are in antiphase: when one is at a crest the other is at a trough, and their velocities are always opposite.',
    zh: {
      sub: '相位',
      stem: '沿傳播方向，一列行波上兩點相距半個波長。它們的運動有甚麼關係？',
      options: ['兩者總是同相。', '兩者相差四分之一個週期。', '兩者的位移總是相同。', '兩者反相：運動方向總是相反。'],
      explain: '相距 λ 對應一整個週期（360°）的相位差，所以 λ/2 對應 180°。兩點反相：一點在波峰時另一點在波谷，兩者的速度總是方向相反。'
    }
  },
  {
    id: 'W41', topic: 'wave', level: 4, sub: 'Wave graphs',
    stem: 'The figure shows part of a rope at one instant as a transverse wave travels along it to the LEFT. Which particle is moving upwards at this instant?',
    figure: '<svg viewBox="0 0 380 160" role="img" aria-label="Transverse wave travelling to the left with particles P at equilibrium, Q at a crest, R at equilibrium and S at a trough"><g fill="none" stroke="currentColor"><path d="M30 80 H350" stroke-width="1" stroke-dasharray="4 3"/><path d="M40 80 L48.3 69.6 L56.7 60 L65 51.7 L73.3 45.4 L81.7 41.4 L90 40 L98.3 41.4 L106.7 45.4 L115 51.7 L123.3 60 L131.7 69.6 L140 80 L148.3 90.4 L156.7 100 L165 108.3 L173.3 114.6 L181.7 118.6 L190 120 L198.3 118.6 L206.7 114.6 L215 108.3 L223.3 100 L231.7 90.4 L240 80 L248.3 69.6 L256.7 60 L265 51.7 L273.3 45.4 L281.7 41.4 L290 40 L298.3 41.4 L306.7 45.4 L315 51.7 L323.3 60 L331.7 69.6 L340 80" stroke-width="2"/><path d="M330 140 H270 M278 134 L270 140 L278 146" stroke-width="1.5"/></g><g fill="currentColor"><circle cx="40" cy="80" r="4"/><circle cx="90" cy="40" r="4"/><circle cx="140" cy="80" r="4"/><circle cx="190" cy="120" r="4"/></g><g fill="currentColor" font-size="13" font-family="inherit" text-anchor="middle"><text x="40" y="100">P</text><text x="90" y="30">Q</text><text x="154" y="72">R</text><text x="190" y="140">S</text><text x="300" y="128">direction of travel</text></g></svg>',
    options: ['P', 'Q', 'R', 'S'],
    answer: 0,
    explain: 'For a wave travelling to the left, each particle soon copies the displacement of the particle just to its right.<br>P: the particle to its right is above it ⇒ P moves up. R: the particle to its right is below it ⇒ R moves down.<br>Q (crest) and S (trough) are momentarily at rest. Reversing the direction of travel reverses every particle\'s motion.',
    zh: {
      sub: '波的線圖',
      stem: '下圖顯示一列橫波沿繩向左傳播時，繩某部分在某一刻的形狀。在這一刻，哪一個質點正在向上運動？',
      explain: '對於向左傳播的波，每個質點稍後會重複其右邊質點的位移。<br>P：右邊的質點在它上方 ⇒ P 向上運動。R：右邊的質點在它下方 ⇒ R 向下運動。<br>Q（波峰）和 S（波谷）瞬間靜止。傳播方向反轉，每個質點的運動方向亦會反轉。'
    }
  },
  {
    id: 'W42', topic: 'wave', level: 3, sub: 'Refraction of water waves',
    stem: 'Water waves pass from deep water into shallow water. Which of the following is correct?',
    options: [
      'Their speed increases.',
      'Their wavelength decreases and their frequency is unchanged.',
      'Their frequency decreases.',
      'Their wavelength increases.'
    ],
    answer: 1,
    explain: 'Water waves travel more slowly in shallow water. The frequency is fixed by the source, so λ = v / f decreases. If the waves meet the boundary at an angle, they also change direction — refraction.',
    zh: {
      sub: '水波的折射',
      stem: '水波由深水進入淺水。下列哪項是正確的？',
      options: ['波速增加。', '波長減小而頻率不變。', '頻率減小。', '波長增加。'],
      explain: '水波在淺水中傳播得較慢。頻率由波源決定，所以 λ = v / f 減小。若水波以某角度到達界線，還會改變方向 — 即折射。'
    }
  },
  {
    id: 'W43', topic: 'wave', level: 4, sub: 'Refraction of water waves',
    stem: 'In a ripple tank, water waves of wavelength 1.5 cm travel at 0.30 m s⁻¹ in the deep region. In the shallow region they travel at 0.20 m s⁻¹. What is their wavelength in the shallow region?',
    options: ['0.44 cm', '0.67 cm', '1.0 cm', '2.25 cm'],
    answer: 2,
    explain: 'The frequency is unchanged: f = 0.30 / 0.015 = 20 Hz.<br>In the shallow region λ = v / f = 0.20 / 20 = 0.010 m = 1.0 cm (i.e. λ ∝ v).<br>2.25 cm multiplies by 0.30 / 0.20 instead of 0.20 / 0.30.',
    zh: {
      sub: '水波的折射',
      stem: '在水波槽中，波長為 1.5 cm 的水波在深水區以 0.30 m s⁻¹ 傳播，在淺水區則以 0.20 m s⁻¹ 傳播。它們在淺水區的波長是多少？',
      explain: '頻率不變：f = 0.30 / 0.015 = 20 Hz。<br>在淺水區 λ = v / f = 0.20 / 20 = 0.010 m = 1.0 cm（即 λ ∝ v）。<br>2.25 cm 是乘以 0.30 / 0.20 而非 0.20 / 0.30 所得。'
    }
  },
  {
    id: 'W44', topic: 'wave', level: 2, sub: 'Reflection',
    stem: 'Straight water waves are reflected by a straight barrier. Which of the following is correct?',
    options: [
      'The speed of the waves changes on reflection.',
      'The frequency of the waves changes on reflection.',
      'The wavelength of the waves changes on reflection.',
      'The angle of reflection equals the angle of incidence.'
    ],
    answer: 3,
    explain: 'The reflected waves travel in the same medium, so their speed, frequency and wavelength are all unchanged. Only the direction changes, following the law of reflection: angle of reflection = angle of incidence.',
    zh: {
      sub: '反射',
      stem: '直線水波被一道直的障礙物反射。下列哪項是正確的？',
      options: ['反射時波速改變。', '反射時頻率改變。', '反射時波長改變。', '反射角等於入射角。'],
      explain: '反射波在同一介質中傳播，所以波速、頻率和波長都不變。只有方向改變，並遵從反射定律：反射角 = 入射角。'
    }
  },
  {
    id: 'W45', topic: 'wave', level: 4, sub: 'Diffraction',
    stem: 'In a valley behind a range of hills, long-wave radio broadcasts can be received but the shorter-wavelength TV signals from the same transmitter cannot. Which of the following help(s) to explain this?',
    statements: [
      'Waves of longer wavelength diffract more around obstacles.',
      'Diffraction is significant when the obstacle is comparable in size to the wavelength.',
      'Long-wave radio waves travel faster than TV signals.'
    ],
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: 0,
    explain: '(1) ✓ (2) ✓ Long radio waves (hundreds of metres to kilometres) are comparable to the size of hills, so they bend around them; TV waves (under a metre) hardly diffract and the hills cast a "shadow".<br>(3) ✗ All electromagnetic waves travel at the same speed in air.',
    zh: {
      sub: '衍射',
      stem: '在山脈後面的山谷中，可以接收到長波電台的廣播，卻接收不到同一發射站發出、波長較短的電視訊號。下列哪項／哪些有助解釋這現象？',
      statements: ['波長較長的波繞過障礙物時衍射較多。', '障礙物的大小與波長相若時，衍射較明顯。', '長波無線電波比電視訊號傳播得快。'],
      explain: '(1) ✓ (2) ✓ 長的無線電波（數百米至數千米）與山的大小相若，所以能繞過山；電視波（不足一米）幾乎不衍射，山便形成「陰影」。<br>(3) ✗ 所有電磁波在空氣中的速率都相同。'
    }
  },
  {
    id: 'W46', topic: 'wave', level: 3, sub: 'Interference',
    stem: 'Two dippers vibrating in phase produce an interference pattern in a ripple tank. The frequency of the dippers is increased. What happens to the pattern?',
    options: [
      'The nodal lines move further apart.',
      'The nodal lines move closer together.',
      'The pattern disappears.',
      'The pattern does not change.'
    ],
    answer: 1,
    explain: 'A higher frequency gives a shorter wavelength (the speed in the tank is unchanged). Nodal lines lie where the path difference is (n + ½)λ; with a smaller λ these positions are closer together, so there are more, more closely spaced nodal lines.',
    zh: {
      sub: '干涉',
      stem: '在水波槽中，兩個同相振動的浸入器產生干涉圖樣。若增加浸入器的頻率，圖樣會怎樣？',
      options: ['節線距離增加。', '節線靠得更近。', '圖樣消失。', '圖樣不變。'],
      explain: '頻率較高，波長便較短（水槽中的波速不變）。節線位於程差為 (n + ½)λ 之處；λ 較小時這些位置更接近，所以節線更多、更密。'
    }
  },
  {
    id: 'W47', topic: 'wave', level: 4, sub: 'Interference',
    stem: 'Two coherent sources vibrate in phase. At a point X the path difference between the two waves is exactly one wavelength. Which of the following statements about X is/are correct?',
    statements: [
      'Constructive interference occurs at X.',
      'The amplitude of vibration at X is a maximum.',
      'The water surface at X is always still.'
    ],
    options: STMT_OPTS,
    answer: 2,
    explain: 'A path difference of a whole number of wavelengths means the waves arrive in phase.<br>(1) ✓ (2) ✓ Crest meets crest and trough meets trough, giving the largest amplitude.<br>(3) ✗ The surface is still only at points of destructive interference, where the path difference is (n + ½)λ.',
    zh: {
      sub: '干涉',
      stem: '兩個相干波源同相振動。在 X 點，兩列波的程差剛好是一個波長。下列有關 X 點的敘述，哪項／哪些是正確的？',
      statements: ['X 點出現相長干涉。', 'X 點的振幅最大。', 'X 點的水面總是靜止的。'],
      explain: '程差為波長的整數倍，表示兩列波同相到達。<br>(1) ✓ (2) ✓ 波峰遇波峰、波谷遇波谷，振幅最大。<br>(3) ✗ 只有在程差為 (n + ½)λ 的相消干涉點，水面才靜止。'
    }
  },
  {
    id: 'W48', topic: 'wave', level: 5, sub: 'Interference',
    stem: 'Two coherent sources S₁ and S₂ vibrate in antiphase (half a cycle out of step). A point P is the same distance from S₁ and from S₂. What kind of interference occurs at P?',
    options: [
      'Constructive interference',
      'Constructive interference only if the distance is a whole number of wavelengths',
      'It depends on the wavelength',
      'Destructive interference'
    ],
    answer: 3,
    explain: 'The path difference at P is zero, so the waves arrive with the same phase difference they left with: half a cycle. A crest from one source meets a trough from the other, so the interference is destructive whatever the wavelength. (For sources in antiphase, the usual conditions for constructive and destructive interference swap.)',
    zh: {
      sub: '干涉',
      stem: '兩個相干波源 S₁ 和 S₂ 反相振動（相差半個週期）。P 點與 S₁ 和 S₂ 的距離相等。P 點出現哪種干涉？',
      options: ['相長干涉', '只有在距離為波長的整數倍時才是相長干涉', '視乎波長而定', '相消干涉'],
      explain: 'P 點的程差為零，所以兩列波到達時保持出發時的相位差：半個週期。一個波源的波峰遇上另一個的波谷，所以不論波長多少，都是相消干涉。（對反相波源，相長和相消干涉的條件互換。）'
    }
  },
  {
    id: 'W49', topic: 'wave', level: 3, sub: 'Stationary waves',
    stem: 'Which of the following statements about a stationary wave is/are correct?',
    statements: [
      'Nodes are points where the amplitude is zero.',
      'Neighbouring antinodes are half a wavelength apart.',
      'All points between two nodes have the same amplitude.'
    ],
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: 0,
    explain: '(1) ✓ Nodes never move.<br>(2) ✓ Like nodes, neighbouring antinodes are λ/2 apart.<br>(3) ✗ The amplitude varies from zero at the nodes to a maximum at the antinode in between.',
    zh: {
      sub: '駐波',
      stem: '下列有關駐波的敘述，哪項／哪些是正確的？',
      statements: ['波節是振幅為零的點。', '相鄰的波腹相距半個波長。', '兩個波節之間所有點的振幅相同。'],
      explain: '(1) ✓ 波節永不移動。<br>(2) ✓ 與波節一樣，相鄰波腹相距 λ/2。<br>(3) ✗ 振幅由波節處的零變化至中間波腹處的最大值。'
    }
  },
  {
    id: 'W50', topic: 'wave', level: 4, sub: 'Stationary waves',
    stem: 'How is a stationary wave formed on a stretched string?',
    options: [
      'Two identical waves travel in the same direction and add together.',
      'Two identical waves travelling in opposite directions superpose.',
      'A wave is refracted as it passes into a thicker part of the string.',
      'A wave is diffracted around the end of the string.'
    ],
    answer: 1,
    explain: 'A wave sent along the string reflects from the fixed end, and the incident and reflected waves (same frequency, wavelength and amplitude) travel in opposite directions and superpose. At certain frequencies this produces a steady pattern of nodes and antinodes.',
    zh: {
      sub: '駐波',
      stem: '拉緊的弦線上的駐波是怎樣形成的？',
      options: ['兩列相同的波沿同一方向傳播並疊加。', '兩列相同的波沿相反方向傳播並疊加。', '波進入弦線較粗的部分時發生折射。', '波在弦線末端發生衍射。'],
      explain: '沿弦線傳出的波在固定端反射，入射波和反射波（頻率、波長和振幅相同）沿相反方向傳播並疊加。在某些頻率下便形成穩定的波節和波腹圖樣。'
    }
  },
  {
    id: 'W51', topic: 'wave', level: 4, sub: 'Stationary waves',
    stem: 'Points X and Y on a string carrying a stationary wave are in neighbouring loops (on opposite sides of a node). How do X and Y vibrate relative to each other?',
    options: ['In phase', 'A quarter of a cycle out of phase', 'In antiphase', 'Always with the same displacement'],
    answer: 2,
    explain: 'In a stationary wave all points within one loop move together (in phase), and points in neighbouring loops move in opposite directions (antiphase). Unlike a progressive wave, the phase changes in jumps of 180° at each node.',
    zh: {
      sub: '駐波',
      stem: '弦線上有一個駐波，X 和 Y 兩點位於相鄰的波環中（在一個波節的兩側）。X 和 Y 的振動有甚麼關係？',
      options: ['同相', '相差四分之一個週期', '反相', '位移總是相同'],
      explain: '在駐波中，同一波環內的所有點一起運動（同相），相鄰波環的點則向相反方向運動（反相）。與行波不同，相位在每個波節處突變 180°。'
    }
  },
  {
    id: 'W52', topic: 'wave', level: 2, sub: 'Sound',
    stem: 'An electric bell rings inside a glass jar. As the air is pumped out of the jar, the sound becomes fainter even though the bell can still be seen vibrating. Why?',
    options: [
      'The bell vibrates less strongly.',
      'Light is needed to carry the sound.',
      'The glass absorbs more sound.',
      'Sound needs a medium to travel through.'
    ],
    answer: 3,
    explain: 'Sound is a mechanical wave carried by the vibration of particles. With less air there are fewer particles to pass on the vibrations, so less sound reaches the glass. Light, an electromagnetic wave, still crosses the vacuum, so the bell can be seen.',
    zh: {
      sub: '聲音',
      stem: '玻璃罩內的電鈴在響。把罩內的空氣抽走時，雖然仍看見電鈴在振動，聲音卻變得越來越弱。為甚麼？',
      options: ['電鈴振動得較弱。', '聲音需要靠光傳送。', '玻璃吸收了更多聲音。', '聲音需要介質傳播。'],
      explain: '聲音是靠質點振動傳遞的機械波。空氣越少，傳遞振動的質點越少，到達玻璃的聲音便越少。光是電磁波，仍可穿過真空，所以仍看見電鈴。'
    }
  },
  {
    id: 'W53', topic: 'wave', level: 3, sub: 'Sound',
    stem: 'In which order does the speed of sound decrease?',
    options: ['Steel, water, air', 'Air, water, steel', 'Water, steel, air', 'Steel, air, water'],
    answer: 0,
    explain: 'Sound generally travels fastest in solids and slowest in gases: roughly 5000 m s⁻¹ in steel, 1500 m s⁻¹ in water and 340 m s⁻¹ in air. (Light, by contrast, is fastest in a vacuum.)',
    zh: {
      sub: '聲音',
      stem: '聲速由快至慢的次序是甚麼？',
      options: ['鋼、水、空氣', '空氣、水、鋼', '水、鋼、空氣', '鋼、空氣、水'],
      explain: '聲音一般在固體中最快，在氣體中最慢：在鋼中約 5000 m s⁻¹，在水中約 1500 m s⁻¹，在空氣中約 340 m s⁻¹。（相反，光在真空中最快。）'
    }
  },
  {
    id: 'W54', topic: 'wave', level: 3, sub: 'Pitch and loudness',
    stem: 'Which of the following changes would make a musical note louder?',
    statements: ['Increasing its frequency', 'Decreasing its amplitude', 'Increasing its amplitude'],
    options: STMT_OPTS,
    answer: 1,
    explain: 'Loudness depends on the amplitude of the sound wave: a larger amplitude gives a louder sound.<br>(1) ✗ A higher frequency gives a higher pitch, not a louder note.<br>(2) ✗ This makes the note quieter.<br>(3) ✓',
    zh: {
      sub: '音調和響度',
      stem: '下列哪項改變會使一個樂音更響亮？',
      statements: ['增加其頻率', '減小其振幅', '增加其振幅'],
      explain: '響度取決於聲波的振幅：振幅越大，聲音越響。<br>(1) ✗ 頻率較高使音調較高，而非更響亮。<br>(2) ✗ 這使樂音更輕。<br>(3) ✓'
    }
  },
  {
    id: 'W55', topic: 'wave', level: 3, sub: 'Sound',
    stem: 'Humans can hear sounds with frequencies from about 20 Hz to 20 kHz. Taking the speed of sound in air as 340 m s⁻¹, what is the longest wavelength of sound in air that humans can hear?',
    options: ['0.017 m', '1.7 m', '17 m', '6800 m'],
    answer: 2,
    explain: 'The longest wavelength goes with the lowest frequency: λ = v / f = 340 / 20 = 17 m.<br>0.017 m (1.7 cm) is the shortest audible wavelength, at 20 kHz; 6800 m multiplies v by f.',
    zh: {
      sub: '聲音',
      stem: '人類可聽見頻率約由 20 Hz 至 20 kHz 的聲音。取空氣中的聲速為 340 m s⁻¹，人類能聽見的空氣中聲波的最長波長是多少？',
      explain: '最長的波長對應最低的頻率：λ = v / f = 340 / 20 = 17 m。<br>0.017 m（1.7 cm）是在 20 kHz 時最短的可聽波長；6800 m 是把 v 乘以 f。'
    }
  },
  {
    id: 'W56', topic: 'wave', level: 4, sub: 'Ultrasound',
    stem: 'Which of the following statements about the use of ultrasound in medical scanning is/are correct?',
    statements: [
      'Ultrasound is an electromagnetic wave, like X-rays.',
      'Part of the ultrasound is reflected at boundaries between different tissues.',
      'Its high frequency gives a short wavelength, so fine detail can be seen.'
    ],
    options: STMT_OPTS,
    answer: 3,
    explain: '(1) ✗ Ultrasound is a sound wave — a longitudinal mechanical wave — and is not ionizing, which is why it is used to scan unborn babies.<br>(2) ✓ The echoes from tissue boundaries are timed to build up the image.<br>(3) ✓ Waves cannot resolve details much smaller than their wavelength.',
    zh: {
      sub: '超聲波',
      stem: '下列有關以超聲波作醫學掃描的敘述，哪項／哪些是正確的？',
      statements: ['超聲波與 X 射線一樣是電磁波。', '部分超聲波在不同組織之間的界面反射。', '頻率高使波長短，所以能看到細微的細節。'],
      explain: '(1) ✗ 超聲波是聲波 — 縱向的機械波 — 不會電離，所以用來掃描胎兒。<br>(2) ✓ 量度組織界面回聲的時間便可建構影像。<br>(3) ✓ 波不能分辨比其波長小得多的細節。'
    }
  },
  {
    id: 'W57', topic: 'wave', level: 3, sub: 'Noise',
    stem: 'A flat is next to a busy road. Which of the following would reduce the traffic noise reaching the ears of the people inside?',
    statements: ['Wearing ear muffs', 'Installing double-glazed windows', 'Increasing the amplitude of the sound reaching the windows'],
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: 0,
    explain: '(1) ✓ Ear muffs absorb sound before it reaches the ear.<br>(2) ✓ The gap between the panes reduces the sound transmitted through the window.<br>(3) ✗ A larger amplitude means a louder sound.',
    zh: {
      sub: '噪音',
      stem: '一個住宅單位鄰近繁忙的馬路。下列哪項能減少到達屋內人士耳朵的交通噪音？',
      statements: ['戴上耳罩', '安裝雙層玻璃窗', '增加到達窗戶的聲音的振幅'],
      explain: '(1) ✓ 耳罩在聲音到達耳朵前把它吸收。<br>(2) ✓ 兩層玻璃之間的空隙減少經窗戶傳入的聲音。<br>(3) ✗ 振幅越大，聲音越響。'
    }
  },
  {
    id: 'W58', topic: 'wave', level: 4, sub: 'Sound intensity level',
    stem: 'The sound intensity level near a machine is 85 dB. After a noise barrier is put up, the sound intensity at the same point falls to 1/100 of its original value. What is the new sound intensity level?',
    options: ['45 dB', '65 dB', '83 dB', '85 dB'],
    answer: 1,
    explain: 'Intensity level = 10 log (I / I₀). Dividing I by 100 lowers the level by 10 log 100 = 20 dB.<br>New level = 85 − 20 = 65 dB.<br>45 dB uses 20 log 100 = 40 dB; 83 dB subtracts only log 100 = 2.',
    zh: {
      sub: '聲強級',
      stem: '一部機器附近的聲強級為 85 dB。豎立隔音屏障後，同一點的聲強降至原來的 1/100。新的聲強級是多少？',
      explain: '聲強級 = 10 log (I / I₀)。I 除以 100，聲強級降低 10 log 100 = 20 dB。<br>新聲強級 = 85 − 20 = 65 dB。<br>45 dB 用了 20 log 100 = 40 dB；83 dB 只減去了 log 100 = 2。'
    }
  },
  {
    id: 'W59', topic: 'wave', level: 3, sub: 'Electromagnetic spectrum',
    stem: 'An FM radio station broadcasts at 100 MHz. What is the wavelength of its radio waves?<br>(Speed of light = 3.00 × 10⁸ m s⁻¹)',
    options: ['0.33 m', '1.0 m', '3.0 m', '30 m'],
    answer: 2,
    explain: 'λ = c / f = 3.00 × 10⁸ / (100 × 10⁶) = 3.0 m.<br>Remember that 1 MHz = 10⁶ Hz. 0.33 m inverts the division.',
    zh: {
      sub: '電磁波譜',
      stem: '一個調頻電台以 100 MHz 廣播。它的無線電波的波長是多少？<br>（光速 = 3.00 × 10⁸ m s⁻¹）',
      explain: 'λ = c / f = 3.00 × 10⁸ / (100 × 10⁶) = 3.0 m。<br>記住 1 MHz = 10⁶ Hz。0.33 m 把除法倒轉了。'
    }
  },
  {
    id: 'W60', topic: 'wave', level: 2, sub: 'Electromagnetic spectrum',
    stem: 'Which type of electromagnetic radiation is used by most TV remote controls?',
    options: ['Ultraviolet', 'X-rays', 'Microwaves', 'Infra-red'],
    answer: 3,
    explain: 'Remote controls use pulses of infra-red from a light-emitting diode. Microwaves are used for cooking and satellite links, ultraviolet for detecting forged bank notes, and X-rays for medical imaging.',
    zh: {
      sub: '電磁波譜',
      stem: '大部分電視遙控器使用哪一種電磁輻射？',
      options: ['紫外線', 'X 射線', '微波', '紅外線'],
      explain: '遙控器利用發光二極管發出的紅外線脈衝。微波用於煮食和衛星通訊，紫外線用於鑑別偽鈔，X 射線用於醫學造影。'
    }
  },
  {
    id: 'W61', topic: 'wave', level: 4, sub: 'Electromagnetic spectrum',
    stem: 'Which of the following statements about the dangers of electromagnetic radiation is/are correct?',
    statements: [
      'Too much ultraviolet radiation can damage skin cells and cause skin cancer.',
      'X-rays are ionizing radiation.',
      'Radio waves are ionizing radiation.'
    ],
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: 0,
    explain: '(1) ✓ Ultraviolet damages skin cells (sunburn, skin cancer) and eyes.<br>(2) ✓ X-rays have enough energy to ionize atoms, so exposure is kept as low as possible.<br>(3) ✗ Radio waves have long wavelengths and low energy; they are not ionizing.',
    zh: {
      sub: '電磁波譜',
      stem: '下列有關電磁輻射危險的敘述，哪項／哪些是正確的？',
      statements: ['過量的紫外線會損害皮膚細胞並導致皮膚癌。', 'X 射線是電離輻射。', '無線電波是電離輻射。'],
      explain: '(1) ✓ 紫外線會損害皮膚細胞（曬傷、皮膚癌）和眼睛。<br>(2) ✓ X 射線有足夠能量使原子電離，所以要盡量減少照射。<br>(3) ✗ 無線電波波長長、能量低，不會電離。'
    }
  },
  {
    id: 'W62', topic: 'wave', level: 2, sub: 'Plane mirror',
    stem: 'Which of the following describes the image of a person formed by a plane mirror?',
    options: [
      'Real, inverted and the same size',
      'Virtual, upright, the same size and laterally inverted',
      'Virtual, upright and magnified',
      'Real, upright and the same size'
    ],
    answer: 1,
    explain: 'A plane mirror forms a virtual image (light only appears to come from behind the mirror), upright and the same size, as far behind the mirror as the object is in front, and laterally inverted (left and right swapped).',
    zh: {
      sub: '平面鏡',
      stem: '下列哪項描述平面鏡所成的人像？',
      options: ['實像、倒立、大小相同', '虛像、正立、大小相同、左右倒轉', '虛像、正立、放大', '實像、正立、大小相同'],
      explain: '平面鏡形成虛像（光只是看似來自鏡後），正立、大小相同，像在鏡後的距離等於物體在鏡前的距離，而且左右倒轉。'
    }
  },
  {
    id: 'W63', topic: 'wave', level: 4, sub: 'Plane mirror',
    stem: 'A ray of light is reflected from a plane mirror. Keeping the incident ray fixed, the mirror is rotated through 10°. Through what angle does the reflected ray turn?',
    options: ['5°', '10°', '20°', '40°'],
    answer: 2,
    explain: 'Rotating the mirror by 10° rotates the normal by 10°, so the angle of incidence changes by 10° and so does the angle of reflection. The reflected ray therefore turns through 10° + 10° = 20°, twice the mirror\'s rotation.',
    zh: {
      sub: '平面鏡',
      stem: '一條光線被平面鏡反射。入射光線保持不變，把平面鏡轉動 10°。反射光線轉過多大的角度？',
      explain: '平面鏡轉動 10°，法線亦轉動 10°，所以入射角改變 10°，反射角亦改變 10°。反射光線因而轉過 10° + 10° = 20°，是平面鏡轉角的兩倍。'
    }
  },
  {
    id: 'W64', topic: 'wave', level: 3, sub: 'Refraction',
    stem: 'A swimming pool is 2.0 m deep. Viewed from directly above, how deep does it appear? (Refractive index of water = 1.33)',
    options: ['0.67 m', '1.00 m', '1.13 m', '1.50 m'],
    answer: 3,
    explain: 'For viewing from directly above, apparent depth = real depth / n = 2.0 / 1.33 = 1.50 m.<br>Light from the bottom bends away from the normal as it leaves the water, so the bottom appears raised. 1.13 m divides by n².',
    zh: {
      sub: '折射',
      stem: '一個游泳池深 2.0 m。從正上方看，池看起來有多深？（水的折射率 = 1.33）',
      explain: '從正上方看時，視深 = 實深 / n = 2.0 / 1.33 = 1.50 m。<br>池底的光離開水面時偏離法線，所以池底看似升高了。1.13 m 是除以 n² 所得。'
    }
  },
  {
    id: 'W65', topic: 'wave', level: 3, sub: 'Dispersion',
    stem: 'When white light passes through a glass prism, violet light is deviated more than red light. Why?',
    options: [
      'Glass has a larger refractive index for violet light than for red light.',
      'Violet light travels faster in glass than red light.',
      'Violet light has a longer wavelength than red light.',
      'Red light is absorbed by the glass.'
    ],
    answer: 0,
    explain: 'The refractive index of glass depends slightly on the colour (frequency) of light. Violet light travels more slowly in glass than red light, so the glass has a larger refractive index for violet and bends it more. This spreading into colours is dispersion. Violet has the shorter wavelength.',
    zh: {
      sub: '色散',
      stem: '白光穿過玻璃三稜鏡時，紫光的偏向比紅光大。為甚麼？',
      options: ['玻璃對紫光的折射率比對紅光大。', '紫光在玻璃中比紅光快。', '紫光的波長比紅光長。', '紅光被玻璃吸收。'],
      explain: '玻璃的折射率稍為隨光的顏色（頻率）而變。紫光在玻璃中比紅光慢，所以玻璃對紫光的折射率較大，使它偏折較多。這種分開成各種顏色的現象就是色散。紫光的波長較短。'
    }
  },
  {
    id: 'W66', topic: 'wave', level: 4, sub: 'Total internal reflection',
    stem: 'A periscope uses two right-angled isosceles glass prisms (critical angle about 42°) instead of mirrors. Light enters a short face normally and is turned through 90°. Why does this work?',
    options: [
      'The light is refracted through 45° at the long face.',
      'The light meets the long face at 45°, which is greater than the critical angle, so it is totally internally reflected.',
      'Glass absorbs less light than air.',
      'The light meets the long face at less than the critical angle, so it is reflected.'
    ],
    answer: 1,
    explain: 'Entering normally, the light is not deviated and meets the hypotenuse at 45°. Since 45° > 42°, the light is totally internally reflected and leaves through the other short face, turned through 90°. Total internal reflection reflects almost 100 % of the light, better than a silvered mirror.',
    zh: {
      sub: '全內反射',
      stem: '潛望鏡用兩個直角等腰玻璃稜鏡（臨界角約 42°）代替平面鏡。光沿法線射入一個短面，並被轉向 90°。為甚麼可以這樣做？',
      options: ['光在長面被折射 45°。', '光以 45° 射到長面，大於臨界角，所以發生全內反射。', '玻璃吸收的光比空氣少。', '光以小於臨界角的角度射到長面，所以被反射。'],
      explain: '光沿法線射入，不會偏折，並以 45° 射到斜邊。由於 45° > 42°，光發生全內反射，從另一個短面射出，轉向 90°。全內反射幾乎反射 100 % 的光，比鍍銀的鏡子更好。'
    }
  },
  {
    id: 'W67', topic: 'wave', level: 4, sub: 'Optical fibres',
    stem: 'Which of the following statements about an optical fibre is/are correct?',
    statements: [
      'Light is guided along the fibre by total internal reflection at the core–cladding boundary.',
      'The core has a higher refractive index than the cladding.',
      'Light travels faster in the core than in the cladding.'
    ],
    options: STMT_OPTS,
    answer: 2,
    explain: '(1) ✓ (2) ✓ Total internal reflection needs light travelling from a higher to a lower refractive index, so the core must be optically denser than the cladding.<br>(3) ✗ A higher refractive index means light is slower in the core.',
    zh: {
      sub: '光纖',
      stem: '下列有關光纖的敘述，哪項／哪些是正確的？',
      statements: ['光在纖芯與包層的界面發生全內反射，被引導沿光纖傳播。', '纖芯的折射率比包層高。', '光在纖芯中比在包層中快。'],
      explain: '(1) ✓ (2) ✓ 全內反射需要光由較高折射率射向較低折射率，所以纖芯的光密度必須比包層大。<br>(3) ✗ 折射率較高表示光在纖芯中較慢。'
    }
  },
  {
    id: 'W68', topic: 'wave', level: 5, sub: 'Total internal reflection',
    stem: 'Diamond has a refractive index of 2.42, much higher than that of glass (about 1.5). Which of the following statements is/are correct?',
    statements: [
      'Diamond has a larger critical angle than glass.',
      'Light entering a well-cut diamond is likely to be totally internally reflected several times before it leaves, which makes the diamond sparkle.',
      'The critical angle of diamond is about 24°.'
    ],
    options: STMT_OPTS,
    answer: 3,
    explain: '(3) ✓ sin C = 1 / 2.42 ⇒ C = 24.4°.<br>(1) ✗ A larger refractive index gives a smaller critical angle (glass: about 42°).<br>(2) ✓ With such a small critical angle, most rays inside meet a face at more than 24° and are totally internally reflected, bouncing around before escaping through the top.',
    zh: {
      sub: '全內反射',
      stem: '鑽石的折射率為 2.42，遠高於玻璃（約 1.5）。下列哪項／哪些敘述是正確的？',
      statements: ['鑽石的臨界角比玻璃大。', '射入切割良好的鑽石的光，離開前很可能發生多次全內反射，使鑽石閃閃生光。', '鑽石的臨界角約為 24°。'],
      explain: '(3) ✓ sin C = 1 / 2.42 ⇒ C = 24.4°。<br>(1) ✗ 折射率越大，臨界角越小（玻璃約 42°）。<br>(2) ✓ 臨界角這麼小，鑽石內大部分光線以大於 24° 的角度射到表面而發生全內反射，在內部反覆反射後才從頂部射出。'
    }
  },
  {
    id: 'W69', topic: 'wave', level: 3, sub: 'Lenses',
    stem: 'A camera uses a convex lens to form an image of a distant building on the sensor. What kind of image is formed?',
    options: ['Real, inverted and diminished', 'Real, upright and magnified', 'Virtual, upright and diminished', 'Virtual, inverted and magnified'],
    answer: 0,
    explain: 'The building is much further than 2f from the lens, so the image forms just beyond the focal point: real (it can be formed on the sensor), inverted and much smaller than the object.',
    zh: {
      sub: '透鏡',
      stem: '相機用凸透鏡在感光元件上形成一幢遠處建築物的像。所成的是甚麼像？',
      options: ['實像、倒立、縮小', '實像、正立、放大', '虛像、正立、縮小', '虛像、倒立、放大'],
      explain: '建築物與透鏡的距離遠大於 2f，所以像形成在焦點稍外：實像（可投射在感光元件上）、倒立，而且比物體小得多。'
    }
  },
  {
    id: 'W70', topic: 'wave', level: 4, sub: 'Lenses',
    stem: 'In a projector, a slide is placed 10.5 cm from a convex lens of focal length 10 cm, and a sharp image is formed on a screen. What is the magnification of the image?',
    options: ['1.05', '20', '21', '210'],
    answer: 1,
    explain: '1/u + 1/v = 1/f ⇒ 1/v = 1/10 − 1/10.5 = 0.5 / 105 ⇒ v = 210 cm.<br>Magnification m = v / u = 210 / 10.5 = 20.<br>Placing the slide just outside f gives a large, real, inverted image — so slides are put in upside down.',
    zh: {
      sub: '透鏡',
      stem: '在投影機中，幻燈片放在焦距為 10 cm 的凸透鏡前 10.5 cm 處，並在屏幕上形成清晰的像。像的放大率是多少？',
      explain: '1/u + 1/v = 1/f ⇒ 1/v = 1/10 − 1/10.5 = 0.5 / 105 ⇒ v = 210 cm。<br>放大率 m = v / u = 210 / 10.5 = 20。<br>把幻燈片放在焦點稍外，便得到又大又倒立的實像 — 所以幻燈片要倒轉放入。'
    }
  },
  {
    id: 'W71', topic: 'wave', level: 4, sub: 'Lenses',
    stem: 'An object is placed 30 cm in front of a concave (diverging) lens of focal length 20 cm. Where is the image, and what kind of image is it?',
    options: ['12 cm from the lens, real', '12 cm from the lens, virtual', '60 cm from the lens, real', '60 cm from the lens, virtual'],
    answer: 1,
    explain: 'With real-is-positive, a diverging lens has f = −20 cm: 1/30 + 1/v = −1/20 ⇒ 1/v = −5/60 ⇒ v = −12 cm.<br>The negative sign means a virtual image 12 cm from the lens on the same side as the object (upright, magnification 12/30 = 0.4).<br>60 cm comes from treating the lens as converging.',
    zh: {
      sub: '透鏡',
      stem: '把一個物體放在焦距為 20 cm 的凹（發散）透鏡前 30 cm 處。像在哪裏？是甚麼像？',
      options: ['距透鏡 12 cm，實像', '距透鏡 12 cm，虛像', '距透鏡 60 cm，實像', '距透鏡 60 cm，虛像'],
      explain: '按實正虛負，發散透鏡的 f = −20 cm：1/30 + 1/v = −1/20 ⇒ 1/v = −5/60 ⇒ v = −12 cm。<br>負號表示虛像，位於透鏡與物體同側 12 cm 處（正立，放大率 12/30 = 0.4）。<br>60 cm 是把透鏡當作會聚透鏡所得。'
    }
  },
  {
    id: 'W72', topic: 'wave', level: 5, sub: 'Lenses',
    stem: 'A convex lens of focal length 15 cm is used to form a REAL image that is three times the size of the object. How far from the lens must the object be placed?',
    options: ['5 cm', '10 cm', '15 cm', '20 cm'],
    answer: 3,
    explain: 'For a real image of magnification 3, v = 3u. Then 1/u + 1/(3u) = 1/15 ⇒ 4/(3u) = 1/15 ⇒ u = 20 cm (and v = 60 cm).<br>10 cm gives a VIRTUAL image three times the size (v = −3u: 1/u − 1/(3u) = 1/15), as in a magnifying glass.',
    zh: {
      sub: '透鏡',
      stem: '用一塊焦距為 15 cm 的凸透鏡形成一個大小為物體三倍的實像。物體須放在距透鏡多遠處？',
      explain: '放大率為 3 的實像，v = 3u。於是 1/u + 1/(3u) = 1/15 ⇒ 4/(3u) = 1/15 ⇒ u = 20 cm（v = 60 cm）。<br>10 cm 會形成三倍大的虛像（v = −3u：1/u − 1/(3u) = 1/15），就像放大鏡一樣。'
    }
  },
  {
    id: 'W73', topic: 'wave', level: 3, sub: "Young's double-slit",
    stem: "In a Young's double-slit experiment, the monochromatic light is replaced by white light. Which of the following describes the pattern on the screen?",
    options: [
      'The central bright fringe is white and the other fringes are coloured.',
      'All the fringes are white.',
      'Red light forms the fringes nearest the centre in each order.',
      'No fringes are formed because white light is not coherent.'
    ],
    answer: 0,
    explain: 'At the centre the path difference is zero for every wavelength, so all colours interfere constructively there: the central fringe is white. Elsewhere the fringe spacing λD/a differs for each colour, so the side fringes are coloured, with violet (shortest λ) nearest the centre in each order. Light from the same single slit is coherent enough to form fringes.',
    zh: {
      sub: '楊氏雙縫實驗',
      stem: '在楊氏雙縫實驗中，把單色光換成白光。下列哪項描述屏幕上的圖樣？',
      options: ['中央亮紋是白色的，其他條紋是彩色的。', '所有條紋都是白色的。', '每一級中，紅光的條紋最接近中央。', '白光不相干，所以不會形成條紋。'],
      explain: '在中央，每種波長的程差都是零，所以所有顏色在該處都相長干涉：中央條紋是白色的。在其他地方，各顏色的條紋間距 λD/a 不同，所以旁邊的條紋是彩色的，而每一級中紫光（λ 最短）最接近中央。來自同一單縫的光足夠相干，可以形成條紋。'
    }
  },
  {
    id: 'W74', topic: 'wave', level: 5, sub: "Young's double-slit",
    stem: "A Young's double-slit apparatus gives bright fringes 2.40 mm apart in air. The whole apparatus is then immersed in water of refractive index 1.33. What is the new fringe separation?",
    options: ['1.36 mm', '1.80 mm', '2.40 mm', '3.19 mm'],
    answer: 1,
    explain: 'In water the frequency is unchanged but the speed falls by a factor 1.33, so the wavelength becomes λ / 1.33.<br>Δy = λD / a ∝ λ ⇒ new Δy = 2.40 / 1.33 = 1.80 mm.<br>3.19 mm multiplies by n instead of dividing.',
    zh: {
      sub: '楊氏雙縫實驗',
      stem: '一套楊氏雙縫儀器在空氣中產生相距 2.40 mm 的亮紋。然後把整套儀器浸在折射率為 1.33 的水中。新的條紋間距是多少？',
      explain: '在水中頻率不變而速率降至 1/1.33，所以波長變為 λ / 1.33。<br>Δy = λD / a ∝ λ ⇒ 新的 Δy = 2.40 / 1.33 = 1.80 mm。<br>3.19 mm 是乘以而非除以 n。'
    }
  },
  {
    id: 'W75', topic: 'wave', level: 4, sub: "Young's double-slit",
    stem: "Which of the following statements about Young's double-slit experiment is/are correct?",
    statements: [
      'The two slits act as coherent sources.',
      'Bright fringes occur where the path difference from the two slits is a whole number of wavelengths.',
      'Covering one slit makes the bright fringes closer together.'
    ],
    options: STMT_OPTS,
    answer: 2,
    explain: '(1) ✓ Both slits are lit by the same wavefront, so they emit waves with a constant phase difference.<br>(2) ✓ The waves then arrive in phase.<br>(3) ✗ With one slit covered there is no second source to interfere with, so the double-slit fringes disappear; only a broad single-slit diffraction pattern remains.',
    zh: {
      sub: '楊氏雙縫實驗',
      stem: '下列有關楊氏雙縫實驗的敘述，哪項／哪些是正確的？',
      statements: ['雙縫作為相干波源。', '在與兩縫的程差為波長整數倍之處出現亮紋。', '遮蓋其中一條縫會使亮紋靠得更近。'],
      explain: '(1) ✓ 兩縫被同一波前照亮，所以發出的波有恆定的相位差。<br>(2) ✓ 波在那些地方同相到達。<br>(3) ✗ 遮蓋一條縫後再沒有第二個波源與之干涉，雙縫條紋便消失，只剩下闊的單縫衍射圖樣。'
    }
  },
  {
    id: 'W76', topic: 'wave', level: 4, sub: 'Diffraction grating',
    stem: 'Light of wavelength 600 nm falls normally on a diffraction grating with slit separation 2.0 μm. How many bright maxima can be seen in total (including the central one)?',
    options: ['3', '4', '6', '7'],
    answer: 3,
    explain: 'd sin θ = nλ with sin θ < 1 ⇒ n < d / λ = 2.0 × 10⁻⁶ / 600 × 10⁻⁹ = 3.33, so the highest order is 3.<br>Orders 1, 2 and 3 appear on both sides of the central maximum: total = 2 × 3 + 1 = 7.<br>3 is only the highest order.',
    zh: {
      sub: '衍射光柵',
      stem: '波長為 600 nm 的光垂直照射一塊縫距為 2.0 μm 的衍射光柵。總共可看見多少個亮的最大強度（包括中央的一個）？',
      explain: 'd sin θ = nλ，而 sin θ < 1 ⇒ n < d / λ = 2.0 × 10⁻⁶ / 600 × 10⁻⁹ = 3.33，所以最高級數為 3。<br>第 1、2、3 級在中央最大強度兩旁都會出現：總數 = 2 × 3 + 1 = 7。<br>3 只是最高的級數。'
    }
  },
  {
    id: 'W77', topic: 'wave', level: 5, sub: 'Diffraction grating',
    stem: 'Light of wavelength 500 nm falls normally on a diffraction grating. The angle between the two first-order maxima (one on each side of the centre) is 40°. How many lines per millimetre does the grating have?',
    options: ['684', '1290', '1460', '6.84 × 10⁵'],
    answer: 0,
    explain: 'Each first-order maximum is at θ = 40° / 2 = 20° from the centre.<br>d = λ / sin θ = 500 × 10⁻⁹ / sin 20° = 1.46 × 10⁻⁶ m.<br>Lines per mm = 1 / (1.46 × 10⁻³ mm) = 684.<br>1290 uses 40° as θ; 6.84 × 10⁵ is the number of lines per metre.',
    zh: {
      sub: '衍射光柵',
      stem: '波長為 500 nm 的光垂直照射一塊衍射光柵。兩個第一級最大強度（中央兩旁各一）之間的夾角為 40°。光柵每毫米有多少條線？',
      explain: '每個第一級最大強度與中央成 θ = 40° / 2 = 20°。<br>d = λ / sin θ = 500 × 10⁻⁹ / sin 20° = 1.46 × 10⁻⁶ m。<br>每毫米線數 = 1 / (1.46 × 10⁻³ mm) = 684。<br>1290 用了 40° 作 θ；6.84 × 10⁵ 是每米的線數。'
    }
  },
  {
    id: 'W78', topic: 'wave', level: 2, sub: 'Wave equation',
    stem: 'A wave has a period of 5.0 ms. What is its frequency?',
    options: ['0.20 Hz', '200 Hz', '500 Hz', '5000 Hz'],
    answer: 1,
    explain: 'f = 1 / T = 1 / (5.0 × 10⁻³ s) = 200 Hz.<br>0.20 Hz forgets that 1 ms = 10⁻³ s.',
    zh: {
      sub: '波動方程',
      stem: '某波的週期為 5.0 ms。它的頻率是多少？',
      explain: 'f = 1 / T = 1 / (5.0 × 10⁻³ s) = 200 Hz。<br>0.20 Hz 忘記了 1 ms = 10⁻³ s。'
    }
  },
  {
    id: 'W79', topic: 'wave', level: 4, sub: 'Wave graphs',
    stem: 'For a progressive wave, the displacement–distance graph shows a wavelength of 0.40 m, and the displacement–time graph of one particle shows a period of 0.020 s. What is the speed of the wave?',
    options: ['0.008 m s⁻¹', '0.05 m s⁻¹', '20 m s⁻¹', '50 m s⁻¹'],
    answer: 2,
    explain: 'The displacement–distance graph gives λ; the displacement–time graph gives T.<br>v = λ / T = 0.40 / 0.020 = 20 m s⁻¹.<br>50 m s⁻¹ is 1 / T, the frequency in Hz.',
    zh: {
      sub: '波的線圖',
      stem: '一列行波的位移－距離線圖顯示波長為 0.40 m，而某質點的位移－時間線圖顯示週期為 0.020 s。波的速率是多少？',
      explain: '位移－距離線圖給出 λ；位移－時間線圖給出 T。<br>v = λ / T = 0.40 / 0.020 = 20 m s⁻¹。<br>50 m s⁻¹ 其實是 1 / T，即以 Hz 計的頻率。'
    }
  },
  {
    id: 'W80', topic: 'wave', level: 3, sub: 'Longitudinal waves',
    stem: 'Which of the following statements about longitudinal waves is/are correct?',
    statements: [
      'The particles vibrate perpendicular to the direction of travel of the wave.',
      'The wave consists of compressions and rarefactions.',
      'Sound in air is an example of a longitudinal wave.'
    ],
    options: STMT_OPTS,
    answer: 3,
    explain: '(1) ✗ In a longitudinal wave the particles vibrate parallel to the direction of travel (perpendicular vibration describes a transverse wave).<br>(2) ✓ Regions where particles crowd together (compressions) and spread apart (rarefactions) travel along.<br>(3) ✓',
    zh: {
      sub: '縱波',
      stem: '下列有關縱波的敘述，哪項／哪些是正確的？',
      statements: ['質點的振動方向垂直於波的傳播方向。', '縱波由密部和疏部組成。', '空氣中的聲音是縱波的例子。'],
      explain: '(1) ✗ 縱波的質點沿傳播方向振動（垂直振動是橫波的特徵）。<br>(2) ✓ 質點聚集的區域（密部）和散開的區域（疏部）沿傳播方向移動。<br>(3) ✓'
    }
  },
  {
    id: 'W81', topic: 'wave', level: 4, sub: 'Phase',
    stem: 'A progressive wave has a wavelength of 60 cm. What is the phase difference between two points on the wave that are 7.5 cm apart along the direction of travel?',
    options: ['45°', '90°', '135°', '180°'],
    answer: 0,
    explain: 'A distance of one wavelength corresponds to a phase difference of 360°.<br>Phase difference = (7.5 / 60) × 360° = 45°.',
    zh: {
      sub: '相位',
      stem: '一列行波的波長為 60 cm。沿傳播方向相距 7.5 cm 的兩點之間的相位差是多少？',
      explain: '相距一個波長對應 360° 的相位差。<br>相位差 = (7.5 / 60) × 360° = 45°。'
    }
  },
  {
    id: 'W82', topic: 'wave', level: 3, sub: 'Refraction',
    stem: 'Light of frequency 5.0 × 10¹⁴ Hz in air enters glass of refractive index 1.5. What is its frequency in the glass?',
    options: ['3.3 × 10¹⁴ Hz', '5.0 × 10¹⁴ Hz', '7.5 × 10¹⁴ Hz', '1.0 × 10¹⁵ Hz'],
    answer: 1,
    explain: 'Frequency is set by the source and does not change when light passes into another medium. Its speed and wavelength both fall by a factor of 1.5, so f = v / λ stays the same.',
    zh: {
      sub: '折射',
      stem: '在空氣中頻率為 5.0 × 10¹⁴ Hz 的光進入折射率為 1.5 的玻璃。它在玻璃中的頻率是多少？',
      explain: '頻率由光源決定，光進入另一介質時不會改變。光速和波長都降至 1/1.5，所以 f = v / λ 不變。'
    }
  },
  {
    id: 'W83', topic: 'wave', level: 4, sub: 'Refraction',
    stem: 'A ray of light passes from medium X into medium Y. The angle between the ray and the normal is 30° in X and 45° in Y. What is the ratio (speed of light in X) : (speed of light in Y)?',
    options: ['0.50', '0.67', '0.71', '1.41'],
    answer: 2,
    explain: 'Snell\'s law in terms of speed: sin θ<sub>X</sub> / sin θ<sub>Y</sub> = v<sub>X</sub> / v<sub>Y</sub>.<br>v<sub>X</sub> / v<sub>Y</sub> = sin 30° / sin 45° = 0.50 / 0.707 = 0.71.<br>The ray is closer to the normal in X, so light is slower in X. 0.67 uses the angles themselves (30 / 45).',
    zh: {
      sub: '折射',
      stem: '一條光線由介質 X 射進介質 Y。光線與法線的夾角在 X 中為 30°，在 Y 中為 45°。（光在 X 中的速率）:（光在 Y 中的速率）之比是多少？',
      explain: '以速率表示的斯涅耳定律：sin θ<sub>X</sub> / sin θ<sub>Y</sub> = v<sub>X</sub> / v<sub>Y</sub>。<br>v<sub>X</sub> / v<sub>Y</sub> = sin 30° / sin 45° = 0.50 / 0.707 = 0.71。<br>光線在 X 中較接近法線，所以光在 X 中較慢。0.67 直接用了角度（30 / 45）。'
    }
  },
  {
    id: 'W84', topic: 'wave', level: 3, sub: 'Total internal reflection',
    stem: 'Which of the following is/are conditions for total internal reflection to occur?',
    statements: [
      'Light must travel from an optically less dense medium to a denser one.',
      'The angle of incidence must be greater than the critical angle.',
      'No refracted ray leaves the boundary.'
    ],
    options: STMT_OPTS,
    answer: 3,
    explain: '(1) ✗ The light must travel from the optically denser medium towards the less dense one (e.g. glass to air).<br>(2) ✓ At angles above the critical angle no refraction is possible.<br>(3) ✓ All the light is reflected — that is what "total" means.',
    zh: {
      sub: '全內反射',
      stem: '下列哪項／哪些是發生全內反射的條件？',
      statements: ['光必須由光疏介質射向光密介質。', '入射角必須大於臨界角。', '沒有折射光線離開界面。'],
      explain: '(1) ✗ 光必須由光密介質射向光疏介質（例如由玻璃到空氣）。<br>(2) ✓ 入射角大於臨界角時不可能折射。<br>(3) ✓ 所有光都被反射 — 這就是「全」的意思。'
    }
  },
  {
    id: 'W85', topic: 'wave', level: 2, sub: 'Lenses',
    stem: 'The principal focus (focal point) of a convex lens is the point',
    options: [
      'where rays parallel to the principal axis converge after passing through the lens.',
      'at the optical centre of the lens.',
      'where an object must be placed to form a real image of the same size.',
      'where rays from an object at the focal length meet.'
    ],
    answer: 0,
    explain: 'Rays parallel to the principal axis are refracted by a convex lens to meet at the principal focus F, a distance f (the focal length) from the optical centre. An object at 2F, not F, gives a real image of the same size.',
    zh: {
      sub: '透鏡',
      stem: '凸透鏡的主焦點是',
      options: ['平行於主軸的光線穿過透鏡後會聚之點。', '透鏡的光心。', '物體須放在該處才能形成大小相同實像之點。', '來自放在焦距處的物體的光線會合之點。'],
      explain: '平行於主軸的光線經凸透鏡折射後會聚於主焦點 F，與光心相距 f（焦距）。放在 2F（而非 F）處的物體才會形成大小相同的實像。'
    }
  },
  {
    id: 'W86', topic: 'wave', level: 3, sub: 'Lenses',
    stem: 'A convex lens of focal length 10 cm is used as a magnifying glass, with the object 5.0 cm from the lens. What is the magnification of the image?',
    options: ['1.0', '2.0', '3.0', '5.0'],
    answer: 1,
    explain: '1/u + 1/v = 1/f ⇒ 1/5.0 + 1/v = 1/10 ⇒ 1/v = −1/10 ⇒ v = −10 cm (a virtual image on the same side as the object).<br>Magnification = |v| / u = 10 / 5.0 = 2.0.',
    zh: {
      sub: '透鏡',
      stem: '把一塊焦距為 10 cm 的凸透鏡用作放大鏡，物體與透鏡相距 5.0 cm。像的放大率是多少？',
      explain: '1/u + 1/v = 1/f ⇒ 1/5.0 + 1/v = 1/10 ⇒ 1/v = −1/10 ⇒ v = −10 cm（與物體同側的虛像）。<br>放大率 = |v| / u = 10 / 5.0 = 2.0。'
    }
  },
  {
    id: 'W87', topic: 'wave', level: 4, sub: 'Lenses',
    stem: 'An object is moved along the principal axis of a convex lens from a distance of 3f to a distance of 2f from the lens. What happens to the real image?',
    options: [
      'It moves towards the lens and becomes smaller.',
      'It becomes virtual.',
      'It moves away from the lens and becomes larger.',
      'It stays at the same place and size.'
    ],
    answer: 2,
    explain: 'As a real object moves towards F, its real image moves further from the lens and grows. At u = 3f the image is at 1.5f and half-size; at u = 2f it is at 2f and the same size as the object. The image becomes virtual only when u < f.',
    zh: {
      sub: '透鏡',
      stem: '沿凸透鏡的主軸把物體由距透鏡 3f 處移至 2f 處。實像會怎樣？',
      options: ['移近透鏡並變小。', '變為虛像。', '移離透鏡並變大。', '位置和大小不變。'],
      explain: '實物移近 F 時，實像會移離透鏡並變大。u = 3f 時像在 1.5f 處，大小為一半；u = 2f 時像在 2f 處，大小與物體相同。只有 u < f 時像才變為虛像。'
    }
  },
  {
    id: 'W88', topic: 'wave', level: 3, sub: 'Echoes',
    stem: 'A student stands 85 m from a large wall and claps once. The echo is heard 0.50 s after the clap. What value does this give for the speed of sound?',
    options: ['42.5 m s⁻¹', '85 m s⁻¹', '170 m s⁻¹', '340 m s⁻¹'],
    answer: 3,
    explain: 'The sound travels to the wall and back: distance = 2 × 85 = 170 m in 0.50 s.<br>v = 170 / 0.50 = 340 m s⁻¹.<br>170 m s⁻¹ uses the one-way distance.',
    zh: {
      sub: '回聲',
      stem: '一名學生站在距一道大牆 85 m 處拍掌一次，拍掌後 0.50 s 聽見回聲。這得出的聲速是多少？',
      explain: '聲音往返牆壁一次：0.50 s 內走了 2 × 85 = 170 m。<br>v = 170 / 0.50 = 340 m s⁻¹。<br>170 m s⁻¹ 只用了單程的距離。'
    }
  },
  {
    id: 'W89', topic: 'wave', level: 4, sub: 'Interference',
    stem: 'Two loudspeakers connected to the same signal generator emit the same note. A student walking in a line in front of them hears the sound alternately loud and soft. Why?',
    options: [
      'The sound waves from the two loudspeakers interfere.',
      'The loudspeakers are switched on and off by the generator.',
      'The sound is diffracted by the student\'s head.',
      'The sound is reflected from the walls of the room.'
    ],
    answer: 0,
    explain: 'The speakers are coherent sources. Where the path difference is a whole number of wavelengths the waves arrive in phase (loud); where it is an odd number of half-wavelengths they arrive in antiphase (soft). Walking across the room passes through these regions in turn.',
    zh: {
      sub: '干涉',
      stem: '兩個連接到同一訊號產生器的揚聲器發出同一個音。一名學生在它們前面沿直線行走，聽到聲音時響時弱。為甚麼？',
      options: ['兩個揚聲器發出的聲波發生干涉。', '訊號產生器把揚聲器反覆開關。', '聲音被學生的頭部衍射。', '聲音被房間的牆壁反射。'],
      explain: '兩個揚聲器是相干波源。在程差為波長整數倍之處，波同相到達（響）；在程差為半波長奇數倍之處，波反相到達（弱）。學生橫過房間時便依次經過這些區域。'
    }
  },
  {
    id: 'W90', topic: 'wave', level: 5, sub: 'Interference',
    stem: 'Two coherent sources vibrate in phase and produce waves of wavelength 3.0 cm. Point P is 20 cm from one source and 26 cm from the other. Point Q is 30 cm from one source and 34.5 cm from the other. What kind of interference occurs at P and at Q?',
    options: [
      'Constructive at both P and Q',
      'Constructive at P, destructive at Q',
      'Destructive at P, constructive at Q',
      'Destructive at both P and Q'
    ],
    answer: 1,
    explain: 'P: path difference = 26 − 20 = 6.0 cm = 2λ ⇒ constructive.<br>Q: path difference = 34.5 − 30 = 4.5 cm = 1.5λ ⇒ destructive.<br>Only the path difference matters, not the distances themselves.',
    zh: {
      sub: '干涉',
      stem: '兩個相干波源同相振動，產生波長為 3.0 cm 的波。P 點與兩個波源分別相距 20 cm 和 26 cm；Q 點則分別相距 30 cm 和 34.5 cm。P 點和 Q 點分別出現哪種干涉？',
      options: ['P 和 Q 都是相長干涉', 'P 是相長干涉，Q 是相消干涉', 'P 是相消干涉，Q 是相長干涉', 'P 和 Q 都是相消干涉'],
      explain: 'P：程差 = 26 − 20 = 6.0 cm = 2λ ⇒ 相長干涉。<br>Q：程差 = 34.5 − 30 = 4.5 cm = 1.5λ ⇒ 相消干涉。<br>決定干涉的只是程差，而不是距離本身。'
    }
  },
  {
    id: 'W91', topic: 'wave', level: 3, sub: 'Electromagnetic spectrum',
    stem: 'Which of the following lists electromagnetic waves in order of increasing frequency?',
    options: [
      'γ-rays, X-rays, visible light, radio waves',
      'Radio waves, visible light, microwaves, X-rays',
      'Radio waves, microwaves, infra-red, ultraviolet',
      'Microwaves, radio waves, ultraviolet, infra-red'
    ],
    answer: 2,
    explain: 'In order of increasing frequency (decreasing wavelength): radio waves, microwaves, infra-red, visible light, ultraviolet, X-rays, γ-rays.<br>A is in decreasing order; B and D each have two types swapped.',
    zh: {
      sub: '電磁波譜',
      stem: '下列哪項按頻率遞增的次序排列電磁波？',
      options: ['γ 射線、X 射線、可見光、無線電波', '無線電波、可見光、微波、X 射線', '無線電波、微波、紅外線、紫外線', '微波、無線電波、紫外線、紅外線'],
      explain: '按頻率遞增（波長遞減）：無線電波、微波、紅外線、可見光、紫外線、X 射線、γ 射線。<br>A 是遞減次序；B 和 D 各有兩項對調了。'
    }
  },
  {
    id: 'W92', topic: 'wave', level: 4, sub: 'Electromagnetic spectrum',
    stem: 'A microwave oven uses microwaves of wavelength 12 cm. What is their frequency?<br>(Speed of light = 3.0 × 10⁸ m s⁻¹)',
    options: ['2.5 × 10⁷ Hz', '3.6 × 10⁷ Hz', '2.5 × 10⁸ Hz', '2.5 × 10⁹ Hz'],
    answer: 3,
    explain: 'f = c / λ = 3.0 × 10⁸ / 0.12 = 2.5 × 10⁹ Hz (2.5 GHz).<br>2.5 × 10⁷ Hz uses λ = 12 without converting cm to m; 3.6 × 10⁷ multiplies c by λ.',
    zh: {
      sub: '電磁波譜',
      stem: '微波爐使用波長為 12 cm 的微波。它們的頻率是多少？<br>（光速 = 3.0 × 10⁸ m s⁻¹）',
      explain: 'f = c / λ = 3.0 × 10⁸ / 0.12 = 2.5 × 10⁹ Hz（2.5 GHz）。<br>2.5 × 10⁷ Hz 用了 λ = 12 而沒有把 cm 轉換為 m；3.6 × 10⁷ 是把 c 乘以 λ。'
    }
  },
  {
    id: 'W93', topic: 'wave', level: 3, sub: 'Diffraction',
    stem: 'Straight water waves meet a barrier with a gap whose width is about equal to the wavelength. Which of the following describes the waves beyond the gap?',
    options: [
      'Nearly semicircular wavefronts with the same wavelength',
      'Straight wavefronts with a shorter wavelength',
      'Semicircular wavefronts with a longer wavelength',
      'No waves pass through the gap'
    ],
    answer: 0,
    explain: 'When the gap is comparable to the wavelength, diffraction is strong and the waves spread out in nearly semicircular wavefronts. The speed in the same water is unchanged, so the wavelength and frequency are unchanged.',
    zh: {
      sub: '衍射',
      stem: '直線水波遇到一道障礙物上的缺口，缺口闊度約等於波長。下列哪項描述缺口後面的波？',
      options: ['近乎半圓形的波前，波長不變', '直線波前，波長較短', '半圓形波前，波長較長', '沒有波通過缺口'],
      explain: '缺口與波長相若時，衍射很明顯，波以近乎半圓形的波前散開。在同一水域中波速不變，所以波長和頻率都不變。'
    }
  },
  {
    id: 'W94', topic: 'wave', level: 4, sub: 'Stationary waves',
    stem: 'Waves travel at 48 m s⁻¹ on a stretched string. A stationary wave of frequency 120 Hz is formed. What is the distance between neighbouring nodes?',
    options: ['0.10 m', '0.20 m', '0.40 m', '2.5 m'],
    answer: 1,
    explain: 'λ = v / f = 48 / 120 = 0.40 m. Neighbouring nodes are half a wavelength apart: 0.20 m.<br>0.40 m is a whole wavelength (the length of two loops).',
    zh: {
      sub: '駐波',
      stem: '波在一條拉緊的弦線上以 48 m s⁻¹ 傳播，形成頻率為 120 Hz 的駐波。相鄰波節之間的距離是多少？',
      explain: 'λ = v / f = 48 / 120 = 0.40 m。相鄰波節相距半個波長：0.20 m。<br>0.40 m 是一個完整波長（兩個波環的長度）。'
    }
  },
  {
    id: 'W95', topic: 'wave', level: 3, sub: 'Sound',
    stem: 'A tuning fork vibrates at 512 Hz. What is the wavelength of the sound it produces in air, where sound travels at 340 m s⁻¹?',
    options: ['0.332 m', '0.500 m', '0.664 m', '1.51 m'],
    answer: 2,
    explain: 'λ = v / f = 340 / 512 = 0.664 m.<br>1.51 inverts the division (512 / 340).',
    zh: {
      sub: '聲音',
      stem: '一枝音叉以 512 Hz 振動。它在空氣中產生的聲音的波長是多少？聲音在空氣中以 340 m s⁻¹ 傳播。',
      explain: 'λ = v / f = 340 / 512 = 0.664 m。<br>1.51 把除法倒轉了（512 / 340）。'
    }
  },
  {
    id: 'W96', topic: 'wave', level: 3, sub: 'Musical notes',
    stem: 'A note is one octave higher than another note. Compared with the lower note, it has',
    options: ['the same frequency and a larger amplitude.', 'half the frequency.', 'the same wavelength.', 'twice the frequency.'],
    answer: 3,
    explain: 'Going up one octave doubles the frequency (for example from 440 Hz to 880 Hz). In the same medium the wavelength is therefore halved. Pitch depends on frequency, not amplitude.',
    zh: {
      sub: '樂音',
      stem: '一個音比另一個音高一個八度。與較低的音相比，它的',
      options: ['頻率相同而振幅較大。', '頻率是一半。', '波長相同。', '頻率是兩倍。'],
      explain: '升高一個八度即頻率加倍（例如由 440 Hz 至 880 Hz）。在同一介質中波長因而減半。音調取決於頻率，而不是振幅。'
    }
  },
  {
    id: 'W97', topic: 'wave', level: 5, sub: 'Sound intensity level',
    stem: 'One machine produces a sound intensity level of 80 dB at a point. What is the sound intensity level at that point when three identical machines run together, each the same distance away?',
    options: ['84.8 dB', '86.0 dB', '90.0 dB', '240 dB'],
    answer: 0,
    explain: 'The intensities (not the decibel levels) add: total intensity = 3I.<br>Level = 80 + 10 log 3 = 80 + 4.8 = 84.8 dB.<br>240 dB adds the levels; 90.0 dB would need ten machines.',
    zh: {
      sub: '聲強級',
      stem: '一部機器在某點產生 80 dB 的聲強級。若三部相同的機器在相同距離處同時運作，該點的聲強級是多少？',
      explain: '相加的是聲強（而非分貝數）：總聲強 = 3I。<br>聲強級 = 80 + 10 log 3 = 80 + 4.8 = 84.8 dB。<br>240 dB 把聲強級相加；90.0 dB 需要十部機器。'
    }
  },
  {
    id: 'W98', topic: 'wave', level: 3, sub: 'Refraction',
    stem: 'A ray of light passes from air into water at an angle of incidence of 40° and bends towards the normal. Why does it bend?',
    options: ['Its frequency decreases.', 'Its speed decreases.', 'Its wavelength increases.', 'Its amplitude decreases.'],
    answer: 1,
    explain: 'Light travels more slowly in water than in air. The part of each wavefront that enters the water first slows down first, so the wavefront swings round and the ray bends towards the normal. The frequency is unchanged and the wavelength decreases.',
    zh: {
      sub: '折射',
      stem: '一條光線以 40° 的入射角由空氣射進水中，並偏向法線。為甚麼它會偏折？',
      options: ['頻率減小。', '速率減小。', '波長增加。', '振幅減小。'],
      explain: '光在水中比在空氣中慢。每個波前先進入水的部分先減速，於是波前轉向，光線偏向法線。頻率不變，波長則減小。'
    }
  },
  {
    id: 'W99', topic: 'wave', level: 4, sub: 'Lenses',
    stem: 'An object 40 cm from a convex lens forms a sharp real image 40 cm from the lens on the other side. What is the focal length of the lens?',
    options: ['10 cm', '15 cm', '20 cm', '40 cm'],
    answer: 2,
    explain: '1/f = 1/u + 1/v = 1/40 + 1/40 = 1/20 ⇒ f = 20 cm.<br>When u = v the object and image are both at 2f, and the image is the same size as the object.',
    zh: {
      sub: '透鏡',
      stem: '物體在凸透鏡前 40 cm 處，在透鏡另一邊 40 cm 處形成清晰的實像。透鏡的焦距是多少？',
      explain: '1/f = 1/u + 1/v = 1/40 + 1/40 = 1/20 ⇒ f = 20 cm。<br>u = v 時物體和像都在 2f 處，像與物體大小相同。'
    }
  },
  {
    id: 'W100', topic: 'wave', level: 3, sub: 'Plane mirror',
    stem: 'A person 1.70 m tall stands in front of a vertical plane mirror. What is the shortest mirror in which she can see her whole body?',
    options: ['0.43 m', '0.57 m', '0.68 m', '0.85 m'],
    answer: 3,
    explain: 'Light from her feet reflects to her eyes from a point on the mirror halfway between the heights of her feet and eyes; light from the top of her head reflects from halfway between her eyes and the top of her head. So the mirror needs to be half her height: 0.85 m, wherever she stands.',
    zh: {
      sub: '平面鏡',
      stem: '一名身高 1.70 m 的人站在一塊垂直的平面鏡前。她要看見全身，平面鏡最短須多長？',
      explain: '腳發出的光在鏡上位於腳與眼睛高度中間的一點反射到眼睛；頭頂的光則在眼睛與頭頂中間的一點反射。所以鏡子須是她身高的一半：0.85 m，不論她站在甚麼位置。'
    }
  },
  {
    id: 'W101', topic: 'wave', level: 4, sub: 'Total internal reflection',
    stem: 'Light travels at 2.0 × 10⁸ m s⁻¹ in a certain plastic. What is the critical angle for light passing from this plastic to air?<br>(Speed of light in air = 3.0 × 10⁸ m s⁻¹)',
    options: ['41.8°', '48.2°', '56.3°', '60.0°'],
    answer: 0,
    explain: 'Refractive index n = c / v = 3.0 / 2.0 = 1.5.<br>sin C = 1 / n = 0.667 ⇒ C = 41.8°.<br>48.2° uses cos C = 1 / n instead.',
    zh: {
      sub: '全內反射',
      stem: '光在某種塑膠中以 2.0 × 10⁸ m s⁻¹ 傳播。光由這種塑膠射向空氣時的臨界角是多少？<br>（光在空氣中的速率 = 3.0 × 10⁸ m s⁻¹）',
      explain: '折射率 n = c / v = 3.0 / 2.0 = 1.5。<br>sin C = 1 / n = 0.667 ⇒ C = 41.8°。<br>48.2° 錯用了 cos C = 1 / n。'
    }
  },
  {
    id: 'W102', topic: 'wave', level: 3, sub: 'Wave equation',
    stem: 'A wave travels at 6.0 m s⁻¹ along a spring. Exactly three complete waves fit into a length of 1.2 m. What is the frequency of the wave?',
    options: ['5.0 Hz', '15 Hz', '20 Hz', '45 Hz'],
    answer: 1,
    explain: 'λ = 1.2 / 3 = 0.40 m.<br>f = v / λ = 6.0 / 0.40 = 15 Hz.<br>5.0 Hz uses the whole 1.2 m as one wavelength.',
    zh: {
      sub: '波動方程',
      stem: '一列波以 6.0 m s⁻¹ 沿彈簧傳播。剛好有三個完整的波佔了 1.2 m 的長度。波的頻率是多少？',
      explain: 'λ = 1.2 / 3 = 0.40 m。<br>f = v / λ = 6.0 / 0.40 = 15 Hz。<br>5.0 Hz 把整段 1.2 m 當作一個波長。'
    }
  },
  {
    id: 'W103', topic: 'wave', level: 5, sub: "Young's double-slit",
    stem: "In a Young's double-slit experiment the fringe separation is Δy. The wavelength of the light is doubled, the distance from the slits to the screen is halved, and the slit separation is halved. What is the new fringe separation?",
    options: ['Δy / 2', 'Δy', '2Δy', '4Δy'],
    answer: 2,
    explain: 'Δy = λD / a. New value = (2λ)(D/2) / (a/2) = 2λD / a = 2Δy.<br>Doubling λ doubles Δy, halving D halves it, and halving a doubles it: overall × 2.',
    zh: {
      sub: '楊氏雙縫實驗',
      stem: '在楊氏雙縫實驗中，條紋間距為 Δy。把光的波長加倍，雙縫至屏幕的距離減半，雙縫間距亦減半。新的條紋間距是多少？',
      explain: 'Δy = λD / a。新數值 = (2λ)(D/2) / (a/2) = 2λD / a = 2Δy。<br>λ 加倍使 Δy 加倍，D 減半使它減半，a 減半使它加倍：整體為 2 倍。'
    }
  },
  {
    id: 'W104', topic: 'wave', level: 4, sub: 'Diffraction grating',
    stem: 'A diffraction grating has 600 lines per mm. What is the longest wavelength of light for which a second-order maximum can be observed?',
    options: ['417 nm', '556 nm', '667 nm', '833 nm'],
    answer: 3,
    explain: 'd = 1 / (600 × 10³) m = 1.67 × 10⁻⁶ m.<br>A second-order maximum exists if 2λ = d sin θ with sin θ < 1, i.e. λ < d / 2 = 833 nm.<br>(Strictly, light just shorter than 833 nm; red light at 700 nm gives a second order, near-infra-red at 850 nm does not.)',
    zh: {
      sub: '衍射光柵',
      stem: '一塊衍射光柵每毫米有 600 條線。能觀察到第二級最大強度的光，其最長波長是多少？',
      explain: 'd = 1 / (600 × 10³) m = 1.67 × 10⁻⁶ m。<br>若 2λ = d sin θ 而 sin θ < 1，即 λ < d / 2 = 833 nm，便會出現第二級最大強度。<br>（嚴格來說是略短於 833 nm 的光；700 nm 的紅光有第二級，850 nm 的近紅外線則沒有。）'
    }
  },
  {
    id: 'W105', topic: 'wave', level: 3, sub: 'Diffraction',
    stem: 'You can hear people talking in the next room through an open doorway even though you cannot see them. Which of the following best explains this?',
    options: [
      'Sound waves have wavelengths comparable to the width of the doorway, so they diffract strongly; light waves do not.',
      'Sound travels faster than light.',
      'Sound waves are transverse and light waves are longitudinal.',
      'Light cannot pass through the doorway.'
    ],
    answer: 0,
    explain: 'Speech has wavelengths of tens of centimetres to a few metres, similar to the doorway, so sound spreads around the edges. Light has wavelengths below a millionth of a metre, so it hardly diffracts at the doorway and travels in straight lines. (Sound is longitudinal; light is transverse and much faster.)',
    zh: {
      sub: '衍射',
      stem: '雖然看不見隔鄰房間的人，你卻可以透過敞開的門口聽見他們說話。下列哪項最能解釋這現象？',
      options: ['聲波的波長與門口的闊度相若，所以衍射明顯；光波則不然。', '聲音比光傳播得快。', '聲波是橫波而光波是縱波。', '光不能通過門口。'],
      explain: '說話聲的波長由數十厘米至數米，與門口相若，所以聲音能繞過門邊散開。光的波長不足百萬分之一米，在門口幾乎不衍射，沿直線傳播。（聲音是縱波；光是橫波，而且快得多。）'
    }
  },
  {
    id: 'W106', topic: 'wave', level: 4, sub: 'Ultrasound',
    stem: 'An ultrasound pulse is sent into the body. The echo from the boundary of an organ returns 65 μs later. Taking the speed of ultrasound in body tissue as 1540 m s⁻¹, how deep is the boundary?',
    options: ['2.5 cm', '5.0 cm', '10 cm', '100 cm'],
    answer: 1,
    explain: 'The pulse travels to the boundary and back: depth = vt / 2 = 1540 × 65 × 10⁻⁶ / 2 = 0.050 m = 5.0 cm.<br>10 cm uses the total distance travelled.',
    zh: {
      sub: '超聲波',
      stem: '把一個超聲波脈衝射入人體。由某器官界面反射的回聲在 65 μs 後返回。取超聲波在人體組織中的速率為 1540 m s⁻¹，界面有多深？',
      explain: '脈衝往返界面一次：深度 = vt / 2 = 1540 × 65 × 10⁻⁶ / 2 = 0.050 m = 5.0 cm。<br>10 cm 用了全程的距離。'
    }
  }
]);
