/* Force and Motion — structured questions (Paper 1 Section B style). Format: see bank/core.js (addStructured). */
addStructured([
  {
    id: 'SM01', topic: 'force', level: 3, sub: 'Velocity–time graph',
    stem: 'The graph shows how the velocity of a car of mass 1200 kg changes during a journey along a straight road.',
    figure: svgGraph({
      aria: 'Velocity-time graph: rises from 0 to 20 m/s in 10 s, constant until 30 s, falls to 0 at 38 s',
      x: { max: 40, label: 't / s', ticks: [[0, '0'], [10, '10'], [30, '30'], [38, '38']] },
      y: { max: 25, label: 'v / m s⁻¹', ticks: [[20, '20']] },
      lines: [{ pts: [[0, 0], [10, 20], [30, 20], [38, 0]] }],
      guides: [[0, 20, 10, 20], [10, 20, 10, 0], [30, 20, 30, 0]]
    }),
    parts: [
      {
        label: '(a)', marks: 2, q: 'Find the acceleration of the car during the first 10 s.',
        answer: 'a = gradient = (20 − 0) / 10 = 2.0 m s⁻².',
        points: ['a = Δv / Δt = 20 / 10 [1M]', '2.0 m s⁻² [1A]'], num: { v: 2.0, unit: 'm s⁻²' }
      },
      {
        label: '(b)', marks: 2, q: 'Find the total distance travelled.',
        answer: 'Distance = area under the graph = ½ × 10 × 20 + 20 × 20 + ½ × 8 × 20 = 100 + 400 + 80 = 580 m.',
        points: ['Uses the area under the v–t graph [1M]', '580 m [1A]'], num: { v: 580, unit: 'm' }
      },
      {
        label: '(c)', marks: 1, q: 'Find the average speed for the whole journey.',
        answer: 'Average speed = 580 / 38 = 15.3 m s⁻¹.',
        points: ['15.3 m s⁻¹ [1]'], num: { v: 15.26, unit: 'm s⁻¹' }
      },
      {
        label: '(d)', marks: 2, q: 'Find the average braking force on the car during the last 8 s.',
        answer: 'Deceleration = 20 / 8 = 2.5 m s⁻²; F = ma = 1200 × 2.5 = 3000 N.',
        points: ['a = 20 / 8 = 2.5 m s⁻² [1M]', 'F = 3000 N [1A]'], num: { v: 3000, unit: 'N' }
      }
    ],
    zh: {
      sub: '速度－時間關係線圖',
      stem: '下圖顯示一輛質量為 1200 kg 的汽車沿直路行駛時速度的變化。',
      parts: [
        { q: '求汽車在首 10 s 內的加速度。', answer: 'a = 斜率 = (20 − 0) / 10 = 2.0 m s⁻²。', points: ['a = Δv / Δt = 20 / 10 [1M]', '2.0 m s⁻² [1A]'] },
        { q: '求行駛的總距離。', answer: '距離 = 線圖下的面積 = ½ × 10 × 20 + 20 × 20 + ½ × 8 × 20 = 100 + 400 + 80 = 580 m。', points: ['用 v–t 線圖下的面積 [1M]', '580 m [1A]'] },
        { q: '求整段旅程的平均速率。', answer: '平均速率 = 580 / 38 = 15.3 m s⁻¹。', points: ['15.3 m s⁻¹ [1]'] },
        { q: '求汽車在最後 8 s 內所受的平均剎車力。', answer: '減速度 = 20 / 8 = 2.5 m s⁻²；F = ma = 1200 × 2.5 = 3000 N。', points: ['a = 20 / 8 = 2.5 m s⁻² [1M]', 'F = 3000 N [1A]'] }
      ]
    }
  },
  {
    id: 'SM02', topic: 'force', level: 4, sub: 'Projectile motion',
    stem: 'A stone is thrown horizontally at 12 m s⁻¹ from the top of a cliff 45 m above the sea. Neglect air resistance unless stated. (g = 9.81 m s⁻²)',
    parts: [
      {
        label: '(a)', marks: 2, q: 'Find the time taken for the stone to reach the sea.',
        answer: 'Vertically: 45 = ½ × 9.81 × t² ⇒ t = √(90 / 9.81) = 3.03 s.',
        points: ['s = ½ gt² with u<sub>y</sub> = 0 [1M]', 't = 3.03 s [1A]'], num: { v: 3.029, unit: 's' }
      },
      {
        label: '(b)', marks: 1, q: 'Find how far from the foot of the cliff the stone lands.',
        answer: 'x = 12 × 3.03 = 36.3 m.',
        points: ['36.3 m [1]'], num: { v: 36.35, unit: 'm' }
      },
      {
        label: '(c)', marks: 3, q: 'Find the speed of the stone just before it hits the sea, and the angle its velocity makes with the horizontal.',
        answer: 'v<sub>y</sub> = gt = 9.81 × 3.03 = 29.7 m s⁻¹; v<sub>x</sub> = 12 m s⁻¹.<br>Speed = √(12² + 29.7²) = 32.1 m s⁻¹; angle = tan⁻¹(29.7 / 12) = 68° below the horizontal.',
        points: ['v<sub>y</sub> = 29.7 m s⁻¹ [1M]', 'Speed = 32.1 m s⁻¹ [1A]', 'Angle = 68° below the horizontal [1A]'], num: { v: 32.05, unit: 'm s⁻¹' }
      },
      {
        label: '(d)', marks: 1, q: 'If air resistance is not negligible, how is the horizontal distance in (b) affected? Explain briefly.',
        answer: 'It is shorter, because air resistance reduces the horizontal velocity during the fall.',
        points: ['Shorter, as the horizontal velocity decreases [1]']
      }
    ],
    zh: {
      sub: '拋體運動',
      stem: '從高出海面 45 m 的懸崖頂以 12 m s⁻¹ 水平拋出一塊石。除另有說明外，忽略空氣阻力。（g = 9.81 m s⁻²）',
      parts: [
        { q: '求石到達海面所需的時間。', answer: '垂直方向：45 = ½ × 9.81 × t² ⇒ t = √(90 / 9.81) = 3.03 s。', points: ['s = ½ gt²，u<sub>y</sub> = 0 [1M]', 't = 3.03 s [1A]'] },
        { q: '求石落海處與懸崖底相距多遠。', answer: 'x = 12 × 3.03 = 36.3 m。', points: ['36.3 m [1]'] },
        { q: '求石快將擊中海面時的速率，以及其速度與水平所成的角度。', answer: 'v<sub>y</sub> = gt = 9.81 × 3.03 = 29.7 m s⁻¹；v<sub>x</sub> = 12 m s⁻¹。<br>速率 = √(12² + 29.7²) = 32.1 m s⁻¹；角度 = tan⁻¹(29.7 / 12) = 水平以下 68°。', points: ['v<sub>y</sub> = 29.7 m s⁻¹ [1M]', '速率 = 32.1 m s⁻¹ [1A]', '角度 = 水平以下 68° [1A]'] },
        { q: '若空氣阻力不可忽略，(b) 的水平距離會受甚麼影響？簡單解釋。', answer: '距離較短，因為空氣阻力在下墜期間使水平速度減小。', points: ['較短，因水平速度減小 [1]'] }
      ]
    }
  },
  {
    id: 'SM03', topic: 'force', level: 4, sub: "Newton's second law",
    stem: 'A 3.0 kg block on a smooth horizontal table is joined by a light inextensible string, passing over a smooth pulley at the edge of the table, to a 1.0 kg mass hanging freely. The system is released from rest. (g = 9.81 m s⁻²)',
    parts: [
      {
        label: '(a)', marks: 1, q: 'Name the forces acting on the hanging mass while it falls.',
        answer: 'Its weight (downwards) and the tension in the string (upwards). (Air resistance is negligible.)',
        points: ['Weight and tension [1]']
      },
      {
        label: '(b)', marks: 2, q: 'Find the acceleration of the system.',
        answer: 'Only the weight of the hanging mass drives the system: a = 1.0 × 9.81 / (3.0 + 1.0) = 2.45 m s⁻².',
        points: ['a = m<sub>2</sub>g / (m<sub>1</sub> + m<sub>2</sub>) [1M]', '2.45 m s⁻² [1A]'], num: { v: 2.4525, unit: 'm s⁻²' }
      },
      {
        label: '(c)', marks: 1, q: 'Find the tension in the string.',
        answer: 'For the block: T = 3.0 × 2.45 = 7.36 N.',
        points: ['7.36 N [1]'], num: { v: 7.3575, unit: 'N' }
      },
      {
        label: '(d)', marks: 2, q: 'Find the speed of the hanging mass after it has fallen 0.50 m.',
        answer: 'v² = u² + 2as = 0 + 2 × 2.45 × 0.50 ⇒ v = 1.57 m s⁻¹.',
        points: ['v² = 2as [1M]', '1.57 m s⁻¹ [1A]'], num: { v: 1.566, unit: 'm s⁻¹' }
      },
      {
        label: '(e)', marks: 1, q: 'Explain why the tension is less than the weight of the hanging mass.',
        answer: 'The hanging mass accelerates downwards, so there must be a net downward force on it: its weight must be greater than the tension.',
        points: ['It accelerates downwards, so the net force on it is downwards [1]']
      }
    ],
    zh: {
      sub: '牛頓第二定律',
      stem: '光滑水平桌面上一個 3.0 kg 的木塊，以一條跨過桌邊光滑滑輪的輕質不可伸長的繩，連接一個自由懸掛的 1.0 kg 物體。把系統由靜止釋放。（g = 9.81 m s⁻²）',
      parts: [
        { q: '說出懸掛物體下墜期間所受的力。', answer: '它的重量（向下）和繩的張力（向上）。（空氣阻力可忽略。）', points: ['重量和張力 [1]'] },
        { q: '求系統的加速度。', answer: '只有懸掛物體的重量推動系統：a = 1.0 × 9.81 / (3.0 + 1.0) = 2.45 m s⁻²。', points: ['a = m<sub>2</sub>g / (m<sub>1</sub> + m<sub>2</sub>) [1M]', '2.45 m s⁻² [1A]'] },
        { q: '求繩的張力。', answer: '對木塊：T = 3.0 × 2.45 = 7.36 N。', points: ['7.36 N [1]'] },
        { q: '求懸掛物體下墜 0.50 m 後的速率。', answer: 'v² = u² + 2as = 0 + 2 × 2.45 × 0.50 ⇒ v = 1.57 m s⁻¹。', points: ['v² = 2as [1M]', '1.57 m s⁻¹ [1A]'] },
        { q: '解釋為甚麼張力小於懸掛物體的重量。', answer: '懸掛物體向下加速，所以它所受的淨力必須向下：重量必須大於張力。', points: ['它向下加速，所以淨力向下 [1]'] }
      ]
    }
  },
  {
    id: 'SM04', topic: 'force', level: 4, sub: 'Collisions',
    stem: 'On a smooth track, trolley A of mass 0.80 kg moving at 2.5 m s⁻¹ collides with trolley B of mass 1.2 kg at rest. After the collision A continues in the same direction at 0.50 m s⁻¹.',
    parts: [
      {
        label: '(a)', marks: 2, q: 'Find the velocity of B after the collision.',
        answer: 'Momentum is conserved: 0.80 × 2.5 = 0.80 × 0.50 + 1.2v ⇒ 2.0 = 0.40 + 1.2v ⇒ v = 1.33 m s⁻¹ in the original direction.',
        points: ['Conservation of momentum equation [1M]', 'v = 1.33 m s⁻¹ [1A]'], num: { v: 1.3333, unit: 'm s⁻¹' }
      },
      {
        label: '(b)', marks: 2, q: 'Is the collision elastic? Support your answer with a calculation.',
        answer: 'KE before = ½ × 0.80 × 2.5² = 2.50 J. KE after = ½ × 0.80 × 0.50² + ½ × 1.2 × 1.33² = 0.10 + 1.07 = 1.17 J. KE is not conserved, so the collision is inelastic.',
        points: ['Calculates KE before (2.50 J) and after (1.17 J) [1M]', 'KE decreases, so inelastic [1A]']
      },
      {
        label: '(c)', marks: 2, q: 'The trolleys are in contact for 0.040 s. Find the average force on B.',
        answer: 'F = Δp / Δt = 1.2 × 1.33 / 0.040 = 40 N.',
        points: ['F = change in momentum of B / time [1M]', '40 N [1A]'], num: { v: 40, unit: 'N' }
      }
    ],
    zh: {
      sub: '碰撞',
      stem: '在光滑路軌上，質量為 0.80 kg、以 2.5 m s⁻¹ 運動的手推車 A 與質量為 1.2 kg、靜止的手推車 B 相撞。碰撞後 A 以 0.50 m s⁻¹ 繼續沿原方向運動。',
      parts: [
        { q: '求碰撞後 B 的速度。', answer: '動量守恆：0.80 × 2.5 = 0.80 × 0.50 + 1.2v ⇒ 2.0 = 0.40 + 1.2v ⇒ v = 1.33 m s⁻¹，沿原方向。', points: ['動量守恆方程 [1M]', 'v = 1.33 m s⁻¹ [1A]'] },
        { q: '碰撞是否彈性？以計算支持你的答案。', answer: '碰撞前動能 = ½ × 0.80 × 2.5² = 2.50 J。碰撞後動能 = ½ × 0.80 × 0.50² + ½ × 1.2 × 1.33² = 0.10 + 1.07 = 1.17 J。動能不守恆，所以是非彈性碰撞。', points: ['計算碰撞前（2.50 J）和碰撞後（1.17 J）的動能 [1M]', '動能減少，所以是非彈性 [1A]'] },
        { q: '兩車接觸了 0.040 s。求 B 所受的平均力。', answer: 'F = Δp / Δt = 1.2 × 1.33 / 0.040 = 40 N。', points: ['F = B 的動量變化 / 時間 [1M]', '40 N [1A]'] }
      ]
    }
  },
  {
    id: 'SM05', topic: 'force', level: 3, sub: 'Work, energy and power',
    stem: 'A crane lifts a 500 kg load vertically through 20 m at constant speed in 25 s. (g = 9.81 m s⁻²)',
    parts: [
      {
        label: '(a)', marks: 2, q: 'Find the gain in gravitational potential energy of the load.',
        answer: 'ΔPE = mgh = 500 × 9.81 × 20 = 9.81 × 10⁴ J.',
        points: ['mgh [1M]', '9.81 × 10⁴ J [1A]'], num: { v: 98100, unit: 'J' }
      },
      {
        label: '(b)', marks: 1, q: 'Find the useful output power of the crane.',
        answer: 'P = 9.81 × 10⁴ / 25 = 3.92 × 10³ W.',
        points: ['3.92 × 10³ W [1]'], num: { v: 3924, unit: 'W' }
      },
      {
        label: '(c)', marks: 2, q: 'The crane\'s motor takes 6.0 kW of electrical power. Find its efficiency.',
        answer: 'Efficiency = 3924 / 6000 = 0.654 = 65.4 %.',
        points: ['useful output ÷ input [1M]', '65.4 % [1A]'], num: { v: 65.4, unit: '%' }
      },
      {
        label: '(d)', marks: 1, q: 'State one form in which the wasted energy appears.',
        answer: 'Internal energy (heat) in the motor and moving parts, or sound.',
        points: ['Heat (internal energy) or sound [1]']
      }
    ],
    zh: {
      sub: '功、能量和功率',
      stem: '一部起重機在 25 s 內以恆定速率把一件 500 kg 的重物垂直提升 20 m。（g = 9.81 m s⁻²）',
      parts: [
        { q: '求重物獲得的重力勢能。', answer: 'ΔPE = mgh = 500 × 9.81 × 20 = 9.81 × 10⁴ J。', points: ['mgh [1M]', '9.81 × 10⁴ J [1A]'] },
        { q: '求起重機的有用輸出功率。', answer: 'P = 9.81 × 10⁴ / 25 = 3.92 × 10³ W。', points: ['3.92 × 10³ W [1]'] },
        { q: '起重機的電動機消耗 6.0 kW 的電功率。求其效率。', answer: '效率 = 3924 / 6000 = 0.654 = 65.4 %。', points: ['有用輸出 ÷ 輸入 [1M]', '65.4 % [1A]'] },
        { q: '指出浪費的能量以哪一種形式出現。', answer: '電動機和活動部件的內能（熱），或聲音。', points: ['熱（內能）或聲音 [1]'] }
      ]
    }
  },
  {
    id: 'SM06', topic: 'force', level: 5, sub: 'Circular motion',
    stem: 'A car of mass 1000 kg travels round a flat circular bend of radius 50 m at a constant speed of 15 m s⁻¹.',
    parts: [
      {
        label: '(a)', marks: 1, q: 'Find the centripetal acceleration of the car.',
        answer: 'a = v² / r = 15² / 50 = 4.5 m s⁻².',
        points: ['4.5 m s⁻² [1]'], num: { v: 4.5, unit: 'm s⁻²' }
      },
      {
        label: '(b)', marks: 1, q: 'What force provides the centripetal force, and how large is it?',
        answer: 'The sideways friction between the tyres and the road: F = ma = 1000 × 4.5 = 4500 N.',
        points: ['Friction, 4500 N [1]'], num: { v: 4500, unit: 'N' }
      },
      {
        label: '(c)', marks: 2, q: 'The greatest sideways friction the road can provide is 6000 N. Find the maximum speed at which the car can take the bend.',
        answer: 'mv² / r = 6000 ⇒ v = √(6000 × 50 / 1000) = √300 = 17.3 m s⁻¹.',
        points: ['mv²/r = maximum friction [1M]', '17.3 m s⁻¹ [1A]'], num: { v: 17.32, unit: 'm s⁻¹' }
      },
      {
        label: '(d)', marks: 2, q: 'Explain how banking the road (tilting it towards the centre of the bend) allows cars to take the bend faster.',
        answer: 'On a banked road the normal reaction is tilted towards the centre. Its horizontal component provides part (or all) of the centripetal force, so less friction is needed and a higher speed is possible.',
        points: ['The normal reaction has a horizontal component towards the centre [1]', 'which supplies centripetal force, so less friction is needed [1]']
      }
    ],
    zh: {
      sub: '圓周運動',
      stem: '一輛質量為 1000 kg 的汽車以 15 m s⁻¹ 的恆定速率駛過一段半徑為 50 m 的平坦圓形彎路。',
      parts: [
        { q: '求汽車的向心加速度。', answer: 'a = v² / r = 15² / 50 = 4.5 m s⁻²。', points: ['4.5 m s⁻² [1]'] },
        { q: '哪個力提供向心力？它有多大？', answer: '輪胎與路面之間的側向摩擦力：F = ma = 1000 × 4.5 = 4500 N。', points: ['摩擦力，4500 N [1]'] },
        { q: '路面最多能提供 6000 N 的側向摩擦力。求汽車轉彎的最大速率。', answer: 'mv² / r = 6000 ⇒ v = √(6000 × 50 / 1000) = √300 = 17.3 m s⁻¹。', points: ['mv²/r = 最大摩擦力 [1M]', '17.3 m s⁻¹ [1A]'] },
        { q: '解釋為甚麼把路面傾斜（向彎道中心傾側）可讓汽車以較快速率轉彎。', answer: '在傾斜路面上，法向反作用力向彎道中心傾側，其水平分量提供部分（或全部）向心力，所需的摩擦力較少，因此可以較快速率轉彎。', points: ['法向反作用力有指向中心的水平分量 [1]', '提供向心力，所需摩擦力較少 [1]'] }
      ]
    }
  },
  {
    id: 'SM07', topic: 'force', level: 5, sub: 'Satellites',
    stem: 'A space station orbits the Earth in a circular orbit 400 km above the Earth\'s surface.<br>(Radius of the Earth = 6370 km; mass of the Earth = 5.97 × 10²⁴ kg; G = 6.67 × 10⁻¹¹ N m² kg⁻²)',
    parts: [
      {
        label: '(a)', marks: 2, q: 'Show that the orbital speed of a satellite in a circular orbit of radius r is v = √(GM / r).',
        answer: 'Gravity provides the centripetal force: GMm / r² = mv² / r ⇒ v² = GM / r ⇒ v = √(GM / r).',
        points: ['GMm / r² = mv² / r [1]', 'Rearranges to v = √(GM/r) [1]']
      },
      {
        label: '(b)', marks: 2, q: 'Calculate the orbital speed of the station.',
        answer: 'r = 6370 + 400 = 6770 km = 6.77 × 10⁶ m.<br>v = √(6.67 × 10⁻¹¹ × 5.97 × 10²⁴ / 6.77 × 10⁶) = 7.67 × 10³ m s⁻¹.',
        points: ['r = 6.77 × 10⁶ m (adds the height) [1M]', '7.67 × 10³ m s⁻¹ [1A]'], num: { v: 7669, unit: 'm s⁻¹' }
      },
      {
        label: '(c)', marks: 2, q: 'Calculate the period of the orbit in minutes.',
        answer: 'T = 2πr / v = 2π × 6.77 × 10⁶ / 7669 = 5547 s = 92.4 minutes.',
        points: ['T = 2πr / v [1M]', '92.4 minutes [1A]'], num: { v: 92.45, unit: 'min' }
      },
      {
        label: '(d)', marks: 1, q: 'Explain why astronauts on the station feel weightless even though gravity acts on them.',
        answer: 'The astronauts and the station are both in free fall, accelerating towards the Earth at the same rate, so the floor exerts no normal force on the astronauts.',
        points: ['Both in free fall with the same acceleration, so no normal reaction [1]']
      }
    ],
    zh: {
      sub: '人造衛星',
      stem: '一個太空站在離地面 400 km 高的圓形軌道上繞地球運行。<br>（地球半徑 = 6370 km；地球質量 = 5.97 × 10²⁴ kg；G = 6.67 × 10⁻¹¹ N m² kg⁻²）',
      parts: [
        { q: '證明在半徑為 r 的圓形軌道上運行的人造衛星，其軌道速率為 v = √(GM / r)。', answer: '引力提供向心力：GMm / r² = mv² / r ⇒ v² = GM / r ⇒ v = √(GM / r)。', points: ['GMm / r² = mv² / r [1]', '整理得 v = √(GM/r) [1]'] },
        { q: '計算太空站的軌道速率。', answer: 'r = 6370 + 400 = 6770 km = 6.77 × 10⁶ m。<br>v = √(6.67 × 10⁻¹¹ × 5.97 × 10²⁴ / 6.77 × 10⁶) = 7.67 × 10³ m s⁻¹。', points: ['r = 6.77 × 10⁶ m（加上高度）[1M]', '7.67 × 10³ m s⁻¹ [1A]'] },
        { q: '計算軌道週期（以分鐘為單位）。', answer: 'T = 2πr / v = 2π × 6.77 × 10⁶ / 7669 = 5547 s = 92.4 分鐘。', points: ['T = 2πr / v [1M]', '92.4 分鐘 [1A]'] },
        { q: '解釋為甚麼雖然重力作用於太空站上的太空人，他們仍感到失重。', answer: '太空人與太空站都在自由下墜，以相同的加速度向地球加速，所以地板不對太空人施加法向反作用力。', points: ['兩者以相同加速度自由下墜，所以沒有法向反作用力 [1]'] }
      ]
    }
  },
  {
    id: 'SM08', topic: 'force', level: 3, sub: 'Moments',
    stem: 'A uniform horizontal beam 4.0 m long and of weight 200 N is hinged to a wall at one end. It is held horizontal by a vertical rope attached 3.0 m from the hinge. A load of 300 N hangs from the free end of the beam.',
    figure: '<svg viewBox="0 0 380 180" role="img" aria-label="Beam hinged to a wall, vertical rope 3.0 m from the hinge, 300 N load at the free end"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M30 20 V170"/><path d="M30 30 l-10 -10 M30 60 l-10 -10 M30 90 l-10 -10 M30 120 l-10 -10 M30 150 l-10 -10" stroke-width="1"/><rect x="30" y="92" width="300" height="12"/><circle cx="34" cy="98" r="4"/><path d="M255 20 V92" stroke-width="1.5"/><path d="M40 20 H330" stroke-width="1" stroke-dasharray="3 3"/><path d="M326 104 V140"/><rect x="310" y="140" width="32" height="22"/><path d="M30 125 H255 M30 120 v10 M255 120 v10" stroke-width="1"/></g><g fill="currentColor" font-size="13" font-family="inherit" text-anchor="middle"><text x="140" y="140">3.0 m</text><text x="326" y="155">300 N</text><text x="270" y="60" text-anchor="start">rope</text><text x="40" y="84" text-anchor="start">hinge</text></g></svg>',
    parts: [
      {
        label: '(a)', marks: 2, q: 'Find the tension in the rope.',
        answer: 'Take moments about the hinge (the beam\'s weight acts at 2.0 m):<br>T × 3.0 = 200 × 2.0 + 300 × 4.0 = 1600 ⇒ T = 533 N.',
        points: ['Moments about the hinge with the weight at 2.0 m [1M]', 'T = 533 N [1A]'], num: { v: 533.3, unit: 'N' }
      },
      {
        label: '(b)', marks: 2, q: 'Find the size and direction of the vertical force exerted by the hinge on the beam.',
        answer: 'Vertically: T + F = 200 + 300 ⇒ F = 500 − 533 = −33 N, i.e. 33 N downwards.',
        points: ['Upward forces = downward forces [1M]', '33 N downwards [1A]'], num: { v: 33.3, unit: 'N' }
      },
      {
        label: '(c)', marks: 2, q: 'State the two conditions for the beam to be in equilibrium.',
        answer: 'The resultant force on it is zero, and the sum of the moments about any point is zero.',
        points: ['Zero resultant (net) force [1]', 'Zero resultant moment about any point [1]']
      }
    ],
    zh: {
      sub: '力矩',
      stem: '一根長 4.0 m、重 200 N 的均勻水平樑，一端以鉸鏈連接牆壁，並以一條繫在距鉸鏈 3.0 m 處的垂直繩保持水平。樑的自由端掛着一件 300 N 的重物。',
      parts: [
        { q: '求繩的張力。', answer: '對鉸鏈取力矩（樑的重量作用於 2.0 m 處）：<br>T × 3.0 = 200 × 2.0 + 300 × 4.0 = 1600 ⇒ T = 533 N。', points: ['對鉸鏈取力矩，重量作用於 2.0 m 處 [1M]', 'T = 533 N [1A]'] },
        { q: '求鉸鏈對樑施加的垂直力的大小和方向。', answer: '垂直方向：T + F = 200 + 300 ⇒ F = 500 − 533 = −33 N，即 33 N 向下。', points: ['向上的力 = 向下的力 [1M]', '33 N 向下 [1A]'] },
        { q: '指出樑處於平衡的兩個條件。', answer: '它所受的合力為零，以及對任何一點的力矩總和為零。', points: ['合（淨）力為零 [1]', '對任何一點的合力矩為零 [1]'] }
      ]
    }
  }
]);

/* Batch 2: questions with figures and drawing parts (see drawHTML in app.js). */
(function () {
  const { svg, line, box, arrow, text, dot, range } = window.draw;
  // A block resting on a 30° slope; P is the middle of its base, G its centre.
  const t = 30 * Math.PI / 180, P = [190, 200 - 150 * Math.tan(t)];
  const n = [-Math.sin(t), -Math.cos(t)], u = [Math.cos(t), -Math.sin(t)];
  const G = [P[0] + 18 * n[0], P[1] + 18 * n[1]];
  const r = v => Math.round(v * 10) / 10;
  const slopeBase = line(`M40 200 H340 V${r(200 - 300 * Math.tan(t))} Z`) +
    `<g transform="rotate(-30 ${r(P[0])} ${r(P[1])})">${box(P[0] - 30, P[1] - 36, 60, 36)}</g>` +
    line('M90 200 A50 50 0 0 0 83.3 175', 1.2) + text(100, 192, '30°', { size: 12, anchor: 'start' });
  const fbd = arrow(G[0], G[1], G[0], G[1] + 75, 2.5) + text(G[0] + 8, G[1] + 72, 'W', { anchor: 'start' }) +
    arrow(P[0], P[1], P[0] + 70 * n[0], P[1] + 70 * n[1], 2.5) + text(P[0] + 78 * n[0], P[1] + 78 * n[1], 'R') +
    arrow(P[0] + 30 * u[0], P[1] + 30 * u[1], P[0] + 95 * u[0], P[1] + 95 * u[1], 2.5) + text(P[0] + 104 * u[0], P[1] + 104 * u[1] - 4, 'f');
  const cliff = graphFrame({
    aria: 'Grid of height against horizontal distance with the ball starting at a height of 20 m', w: 400, h: 240,
    x: { max: 42, label: 'x / m', ticks: [10, 20, 30, 40].map(v => [v, String(v)]) },
    y: { max: 25, label: 'h / m', ticks: [5, 10, 15, 20].map(v => [v, String(v)]) },
    grid: { x: [5, 10, 15, 20, 25, 30, 35, 40], y: [5, 10, 15, 20] }, dots: [[0, 20]]
  });
  const T = Math.sqrt(2 * 20 / 9.81);
  addStructured([
    {
      id: 'SM09', topic: 'force', level: 3, sub: 'Forces on a slope',
      stem: 'A block of mass 2.0 kg rests without sliding on a rough plane inclined at 30° to the horizontal. (g = 9.81 m s⁻²)',
      figure: svg(380, 215, 'A block resting on a rough slope inclined at 30 degrees', slopeBase),
      parts: [
        {
          label: '(a)', marks: 3, q: 'On the diagram, draw and label arrows to show all the forces acting on the block.',
          answer: 'Three forces: the weight W acting vertically downwards from the centre of the block; the normal reaction R perpendicular to the slope, away from it; and the friction f acting up the slope, along the surface.',
          points: ['Weight W vertically downwards [1]', 'Normal reaction R perpendicular to the slope [1]', 'Friction f up the slope, parallel to the surface [1]'],
          draw: { w: 380, h: 215, base: slopeBase, tools: ['arrow', 'line', 'pen'], aria: 'Slope and block for drawing the forces', snap: [G, P].map(p => p.map(r)), answer: fbd }
        },
        {
          label: '(b)', marks: 2, q: 'Find the size of the friction acting on the block.',
          answer: 'The block is in equilibrium, so friction balances the component of the weight along the slope:<br>f = mg sin 30° = 2.0 × 9.81 × 0.5 = 9.81 N.',
          points: ['f = mg sin θ [1M]', '9.81 N [1A]'], num: { v: 9.81, unit: 'N' }
        },
        {
          label: '(c)', marks: 1, q: 'Find the size of the normal reaction on the block.',
          answer: 'R = mg cos 30° = 2.0 × 9.81 × 0.866 = 17.0 N.', points: ['17.0 N [1]'], num: { v: 16.99, unit: 'N' }
        },
        {
          label: '(d)', marks: 2, q: 'The slope is tilted to 40°. The block now slides down with a constant friction of 8.0 N. Find its acceleration.',
          answer: 'Resultant force down the slope = mg sin 40° − f = 2.0 × 9.81 × 0.643 − 8.0 = 4.61 N.<br>a = F / m = 4.61 / 2.0 = 2.31 m s⁻².',
          points: ['Resultant force = mg sin 40° − 8.0 [1M]', '2.31 m s⁻² [1A]'], num: { v: 2.306, unit: 'm s⁻²' }
        }
      ],
      zh: {
        sub: '斜面上的力',
        stem: '一塊質量為 2.0 kg 的木塊靜止於一個與水平成 30° 的粗糙斜面上，沒有滑動。（g = 9.81 m s⁻²）',
        parts: [
          { q: '在圖上畫出並標示箭號，表示作用於木塊的所有力。', answer: '三個力：由木塊重心豎直向下的重量 W；垂直於斜面、指離斜面的法向反作用力 R；以及沿斜面表面向上的摩擦力 f。', points: ['重量 W 豎直向下 [1]', '法向反作用力 R 垂直於斜面 [1]', '摩擦力 f 沿斜面向上，與表面平行 [1]'] },
          { q: '求作用於木塊的摩擦力的大小。', answer: '木塊處於平衡，所以摩擦力與重量沿斜面的分量平衡：<br>f = mg sin 30° = 2.0 × 9.81 × 0.5 = 9.81 N。', points: ['f = mg sin θ [1M]', '9.81 N [1A]'] },
          { q: '求作用於木塊的法向反作用力的大小。', answer: 'R = mg cos 30° = 2.0 × 9.81 × 0.866 = 17.0 N。', points: ['17.0 N [1]'] },
          { q: '把斜面傾斜至 40°。木塊現在沿斜面滑下，所受摩擦力恆為 8.0 N。求木塊的加速度。', answer: '沿斜面向下的合力 = mg sin 40° − f = 2.0 × 9.81 × 0.643 − 8.0 = 4.61 N。<br>a = F / m = 4.61 / 2.0 = 2.31 m s⁻²。', points: ['合力 = mg sin 40° − 8.0 [1M]', '2.31 m s⁻² [1A]'] }
        ]
      }
    },
    {
      id: 'SM10', topic: 'force', level: 4, sub: 'Projectile motion',
      stem: 'A ball is thrown horizontally at 15 m s⁻¹ from the top of a cliff 20 m above level ground. Neglect air resistance. (g = 9.81 m s⁻²)',
      figure: svg(380, 190, 'A ball thrown horizontally at 15 m/s from the top of a 20 m cliff',
        box(60, 60, 70, 110) + line('M20 170 H360', 1.5) + dot(130, 52, 6) + arrow(136, 52, 196, 52) + text(166, 42, '15 m s⁻¹', { size: 12 }) +
        arrow(45, 111, 45, 54, 1) + arrow(45, 111, 45, 168, 1) + text(40, 115, '20 m', { size: 12, anchor: 'end' })),
      parts: [
        {
          label: '(a)', marks: 2, q: 'How long does the ball take to reach the ground?',
          answer: 'Vertically the ball starts from rest: 20 = ½ × 9.81 × t² ⇒ t = 2.02 s.',
          points: ['s = ½gt² with u_y = 0 [1M]', '2.02 s [1A]'], num: { v: T, unit: 's' }
        },
        {
          label: '(b)', marks: 1, q: 'How far from the foot of the cliff does it land?',
          answer: 'x = 15 × 2.02 = 30.3 m (the horizontal velocity is constant).', points: ['30.3 m [1]'], num: { v: 15 * T, unit: 'm' }
        },
        {
          label: '(c)', marks: 2, q: 'On the grid, sketch the path of the ball from the top of the cliff (x = 0, h = 20 m) to the ground.',
          answer: 'A parabola that starts horizontally at (0, 20 m), curves downwards more and more steeply, and meets the ground at about x = 30 m.',
          points: ['Curved path starting horizontally at (0, 20 m) [1]', 'Reaches the ground at about x = 30 m [1]'],
          draw: {
            w: cliff.w, h: cliff.h, base: cliff.base, tools: ['pen', 'line'], aria: 'Grid for sketching the path of the ball',
            answer: cliff.path(range(0, 15 * T, 30).map(x => [x, Math.max(0, 20 - 4.905 * (x / 15) ** 2)]))
          }
        },
        {
          label: '(d)', marks: 2, q: 'Find the speed of the ball just before it hits the ground.',
          answer: 'v_y = gt = 9.81 × 2.02 = 19.8 m s⁻¹; v_x = 15 m s⁻¹.<br>v = √(15² + 19.8²) = 24.8 m s⁻¹.',
          points: ['v_y = gt = 19.8 m s⁻¹ [1M]', '24.8 m s⁻¹ [1A]'], num: { v: Math.hypot(15, 9.81 * T), unit: 'm s⁻¹' }
        }
      ],
      zh: {
        sub: '拋體運動',
        stem: '一個球從高出平地 20 m 的懸崖頂以 15 m s⁻¹ 水平拋出。忽略空氣阻力。（g = 9.81 m s⁻²）',
        parts: [
          { q: '球需時多久到達地面？', answer: '在豎直方向，球由靜止開始：20 = ½ × 9.81 × t² ⇒ t = 2.02 s。', points: ['s = ½gt²，u_y = 0 [1M]', '2.02 s [1A]'] },
          { q: '球落在離懸崖底多遠的地方？', answer: 'x = 15 × 2.02 = 30.3 m（水平速度不變）。', points: ['30.3 m [1]'] },
          { q: '在方格上繪畫球由懸崖頂（x = 0，h = 20 m）至地面的路徑。', answer: '一條拋物線：在 (0, 20 m) 處起初水平，然後愈來愈陡地向下彎，在約 x = 30 m 處到達地面。', points: ['在 (0, 20 m) 處水平開始的曲線路徑 [1]', '在約 x = 30 m 處到達地面 [1]'] },
          { q: '求球即將撞擊地面時的速率。', answer: 'v_y = gt = 9.81 × 2.02 = 19.8 m s⁻¹；v_x = 15 m s⁻¹。<br>v = √(15² + 19.8²) = 24.8 m s⁻¹。', points: ['v_y = gt = 19.8 m s⁻¹ [1M]', '24.8 m s⁻¹ [1A]'] }
        ]
      }
    }
  ]);
})();
