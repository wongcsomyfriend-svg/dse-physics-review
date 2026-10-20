/* Force and Motion — additional hand-written questions (M34 onwards). Fields: see questions.js and bank/core.js. */
addBank([
  {
    id: 'M34', topic: 'force', level: 2, sub: 'Scalars and vectors',
    stem: 'Which of the following quantities is/are vector(s)?',
    statements: ['Displacement', 'Momentum', 'Kinetic energy'],
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: 0,
    explain: 'A vector has both magnitude and direction.<br>(1) ✓ Displacement has a direction.<br>(2) ✓ Momentum = mass × velocity, so it has the direction of the velocity.<br>(3) ✗ Kinetic energy (½mv²) has magnitude only; it is a scalar.',
    zh: {
      sub: '標量和矢量',
      stem: '下列哪個／哪些物理量是矢量？',
      statements: ['位移', '動量', '動能'],
      explain: '矢量既有大小也有方向。<br>(1) ✓ 位移有方向。<br>(2) ✓ 動量 = 質量 × 速度，所以方向與速度相同。<br>(3) ✗ 動能（½mv²）只有大小，是標量。'
    }
  },
  {
    id: 'M35', topic: 'force', level: 2, sub: 'Speed and velocity',
    stem: 'A runner completes exactly one lap of a 400 m track in 80 s, finishing where she started. What are her average speed and average velocity for the lap?',
    options: [
      'Average speed 5 m s⁻¹; average velocity 5 m s⁻¹',
      'Average speed 5 m s⁻¹; average velocity 0',
      'Average speed 0; average velocity 5 m s⁻¹',
      'Average speed 0; average velocity 0'
    ],
    answer: 1,
    explain: 'Average speed = distance / time = 400 / 80 = 5 m s⁻¹.<br>Average velocity = displacement / time. She ends where she started, so her displacement is zero and her average velocity is zero.',
    zh: {
      sub: '速率和速度',
      stem: '一名跑手用 80 s 跑完一圈 400 m 的跑道，並在起點完成。她跑這一圈的平均速率和平均速度是多少？',
      options: ['平均速率 5 m s⁻¹；平均速度 5 m s⁻¹', '平均速率 5 m s⁻¹；平均速度 0', '平均速率 0；平均速度 5 m s⁻¹', '平均速率 0；平均速度 0'],
      explain: '平均速率 = 距離 / 時間 = 400 / 80 = 5 m s⁻¹。<br>平均速度 = 位移 / 時間。她回到起點，位移為零，所以平均速度為零。'
    }
  },
  {
    id: 'M36', topic: 'force', level: 3, sub: 'Displacement–time graph',
    stem: 'The displacement–time graph of an object moving along a straight line is shown. Which of the following statements is/are correct?',
    figure: '<svg viewBox="0 0 380 200" role="img" aria-label="Displacement-time graph rising from 0 to 20 m at 4 s, flat until 8 s, falling back to 0 at 12 s"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M50 170 V20 M50 170 H345"/><path d="M50 170 L150 70 L250 70 L350 170" stroke-width="2.5"/></g><g fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"><path d="M50 70 H150 M150 70 V170 M250 70 V170"/></g><g fill="currentColor" font-size="13" font-family="inherit" text-anchor="middle"><text x="50" y="186">0</text><text x="150" y="186">4</text><text x="250" y="186">8</text><text x="350" y="186">12</text><text x="40" y="74" text-anchor="end">20</text><text x="58" y="16" text-anchor="start">s / m</text><text x="352" y="164" text-anchor="start">t / s</text></g></svg>',
    statements: [
      'The velocity from 0 to 4 s is 5 m s⁻¹.',
      'The object is at rest from 4 s to 8 s.',
      'The velocity from 8 s to 12 s is +5 m s⁻¹.'
    ],
    options: STMT_OPTS,
    answer: 2,
    explain: 'Velocity = gradient of the s–t graph.<br>(1) ✓ 20 / 4 = 5 m s⁻¹.<br>(2) ✓ The graph is flat, so the displacement does not change.<br>(3) ✗ The gradient is (0 − 20) / 4 = −5 m s⁻¹: the object moves back towards its starting point.',
    zh: {
      sub: '位移－時間關係線圖',
      stem: '下圖顯示一個沿直線運動的物體的位移－時間關係線圖。下列哪項／哪些敘述是正確的？',
      statements: ['由 0 至 4 s 的速度為 5 m s⁻¹。', '物體由 4 s 至 8 s 靜止。', '由 8 s 至 12 s 的速度為 +5 m s⁻¹。'],
      explain: '速度 = s–t 線圖的斜率。<br>(1) ✓ 20 / 4 = 5 m s⁻¹。<br>(2) ✓ 線圖平坦，位移不變。<br>(3) ✗ 斜率為 (0 − 20) / 4 = −5 m s⁻¹：物體向起點方向返回。'
    }
  },
  {
    id: 'M37', topic: 'force', level: 3, sub: 'Kinematics',
    stem: 'The velocity of a car increases uniformly from 5 m s⁻¹ to 25 m s⁻¹ in 4 s. What are its acceleration and the distance it travels in this time?',
    options: [
      'Acceleration 6.25 m s⁻²; distance 100 m',
      'Acceleration 5 m s⁻²; distance 100 m',
      'Acceleration 6.25 m s⁻²; distance 60 m',
      'Acceleration 5 m s⁻²; distance 60 m'
    ],
    answer: 3,
    explain: 'a = (v − u) / t = (25 − 5) / 4 = 5 m s⁻².<br>s = ½ (u + v) t = ½ × (5 + 25) × 4 = 60 m.<br>6.25 m s⁻² forgets the initial velocity (25 / 4); 100 m uses the final velocity for the whole time.',
    zh: {
      sub: '運動學',
      stem: '一輛汽車的速度在 4 s 內由 5 m s⁻¹ 均勻地增至 25 m s⁻¹。它的加速度和在這段時間內行駛的距離是多少？',
      options: ['加速度 6.25 m s⁻²；距離 100 m', '加速度 5 m s⁻²；距離 100 m', '加速度 6.25 m s⁻²；距離 60 m', '加速度 5 m s⁻²；距離 60 m'],
      explain: 'a = (v − u) / t = (25 − 5) / 4 = 5 m s⁻²。<br>s = ½ (u + v) t = ½ × (5 + 25) × 4 = 60 m。<br>6.25 m s⁻² 忘記了初速度（25 / 4）；100 m 用了末速度計算整段時間。'
    }
  },
  {
    id: 'M38', topic: 'force', level: 3, sub: 'Acceleration',
    stem: 'An object starts from rest. It accelerates at 2.0 m s⁻² for 5.0 s, and then at −1.0 m s⁻² (deceleration) for 4.0 s, moving along a straight line. What is its final velocity?',
    options: ['6.0 m s⁻¹', '10 m s⁻¹', '14 m s⁻¹', '18 m s⁻¹'],
    answer: 0,
    explain: 'Change in velocity = acceleration × time (the area under an a–t graph).<br>First stage: +2.0 × 5.0 = +10 m s⁻¹. Second stage: −1.0 × 4.0 = −4.0 m s⁻¹.<br>Final velocity = 0 + 10 − 4.0 = 6.0 m s⁻¹.<br>14 m s⁻¹ adds the two changes as if both were positive.',
    zh: {
      sub: '加速度',
      stem: '一個物體由靜止開始沿直線運動。它以 2.0 m s⁻² 加速 5.0 s，然後以 −1.0 m s⁻²（減速）運動 4.0 s。它的末速度是多少？',
      explain: '速度的變化 = 加速度 × 時間（即 a–t 線圖下的面積）。<br>第一階段：+2.0 × 5.0 = +10 m s⁻¹。第二階段：−1.0 × 4.0 = −4.0 m s⁻¹。<br>末速度 = 0 + 10 − 4.0 = 6.0 m s⁻¹。<br>14 m s⁻¹ 把兩個變化都當作正值相加。'
    }
  },
  {
    id: 'M39', topic: 'force', level: 4, sub: 'Motion under gravity',
    stem: 'A stone is dropped from rest from a high cliff. Neglecting air resistance, how far does it fall during the third second of its motion (from t = 2 s to t = 3 s)?<br>(g = 9.81 m s⁻²)',
    options: ['14.7 m', '24.5 m', '29.4 m', '44.1 m'],
    answer: 1,
    explain: 'Distance fallen in time t: s = ½ gt².<br>s(3) − s(2) = ½ × 9.81 × (3² − 2²) = ½ × 9.81 × 5 = 24.5 m.<br>44.1 m is the total distance in 3 s; 14.7 m is the distance in the second second; 29.4 is the speed (m s⁻¹) at t = 3 s.',
    zh: {
      sub: '重力下的運動',
      stem: '讓一塊石從高崖頂由靜止下墜。忽略空氣阻力，它在運動的第三秒內（由 t = 2 s 至 t = 3 s）下墜了多遠？<br>（g = 9.81 m s⁻²）',
      explain: '在時間 t 內下墜的距離：s = ½ gt²。<br>s(3) − s(2) = ½ × 9.81 × (3² − 2²) = ½ × 9.81 × 5 = 24.5 m。<br>44.1 m 是 3 s 內的總距離；14.7 m 是第二秒內的距離；29.4 是 t = 3 s 時的速率（m s⁻¹）。'
    }
  },
  {
    id: 'M40', topic: 'force', level: 3, sub: 'Motion under gravity',
    stem: 'A ball is thrown vertically upwards at 15 m s⁻¹ and caught at the same height. Neglecting air resistance, how long is it in the air?<br>(g = 9.81 m s⁻²)',
    options: ['1.53 s', '2.17 s', '3.06 s', '6.12 s'],
    answer: 2,
    explain: 'Taking up as positive: s = ut − ½ gt² = 0 when it returns to the same height ⇒ t = 2u / g = 2 × 15 / 9.81 = 3.06 s.<br>1.53 s is the time to reach the top only; the journey down takes the same time.',
    zh: {
      sub: '重力下的運動',
      stem: '以 15 m s⁻¹ 把一個球垂直向上拋，並在同一高度接住。忽略空氣阻力，球在空中停留多久？<br>（g = 9.81 m s⁻²）',
      explain: '取向上為正：回到同一高度時 s = ut − ½ gt² = 0 ⇒ t = 2u / g = 2 × 15 / 9.81 = 3.06 s。<br>1.53 s 只是到達最高點的時間；下降所需的時間相同。'
    }
  },
  {
    id: 'M41', topic: 'force', level: 3, sub: 'Terminal velocity',
    stem: 'A skydiver falls at a steady terminal velocity before opening her parachute. Which of the following statements is/are correct at this stage?',
    statements: ['The skydiver has no weight.', 'The air resistance on her equals her weight.', 'Her acceleration is zero.'],
    options: STMT_OPTS,
    answer: 3,
    explain: '(1) ✗ Her weight (mg) is unchanged.<br>(2) ✓ The air resistance has grown with speed until it balances the weight.<br>(3) ✓ The net force is zero, so the acceleration is zero and the velocity stays constant.',
    zh: {
      sub: '終端速度',
      stem: '一名跳傘員在打開降落傘前以穩定的終端速度下墜。在這階段，下列哪項／哪些敘述是正確的？',
      statements: ['跳傘員沒有重量。', '她所受的空氣阻力等於她的重量。', '她的加速度為零。'],
      explain: '(1) ✗ 她的重量（mg）不變。<br>(2) ✓ 空氣阻力隨速率增加，直至與重量平衡。<br>(3) ✓ 淨力為零，所以加速度為零，速度保持不變。'
    }
  },
  {
    id: 'M42', topic: 'force', level: 3, sub: 'Mass and weight',
    stem: 'An astronaut has a mass of 70 kg on the Earth. What are her mass and weight on the Moon, where the acceleration due to gravity is 1.6 m s⁻²?',
    options: ['Mass 70 kg; weight 112 N', 'Mass 70 kg; weight 687 N', 'Mass 11.4 kg; weight 112 N', 'Mass 11.4 kg; weight 687 N'],
    answer: 0,
    explain: 'Mass is the amount of matter and does not change from place to place: still 70 kg.<br>Weight = mg = 70 × 1.6 = 112 N on the Moon (compared with 687 N on the Earth).',
    zh: {
      sub: '質量和重量',
      stem: '一名太空人在地球上的質量為 70 kg。在重力加速度為 1.6 m s⁻² 的月球上，她的質量和重量是多少？',
      options: ['質量 70 kg；重量 112 N', '質量 70 kg；重量 687 N', '質量 11.4 kg；重量 112 N', '質量 11.4 kg；重量 687 N'],
      explain: '質量是物質的多少，不會因地點而改變：仍是 70 kg。<br>在月球上重量 = mg = 70 × 1.6 = 112 N（在地球上則為 687 N）。'
    }
  },
  {
    id: 'M43', topic: 'force', level: 2, sub: "Newton's first law",
    stem: 'When a car stops suddenly, a passenger who is not wearing a seat belt moves forward. Why?',
    options: [
      'A forward force acts on the passenger when the car stops.',
      'The passenger tends to keep moving forward because of inertia.',
      'Gravity pulls the passenger forward.',
      'The seat pushes the passenger forward.'
    ],
    answer: 1,
    explain: "By Newton's first law, the passenger keeps moving at the original velocity unless a force acts. The car is slowed by the brakes, but nothing slows the passenger until the seat belt (or the dashboard!) supplies a backward force. No forward force is needed.",
    zh: {
      sub: '牛頓第一定律',
      stem: '汽車突然停下時，沒有繫上安全帶的乘客會向前衝。為甚麼？',
      options: ['汽車停下時有向前的力作用於乘客。', '由於慣性，乘客傾向保持向前運動。', '重力把乘客拉向前。', '座椅把乘客推向前。'],
      explain: '根據牛頓第一定律，除非受力，乘客會保持原來的速度運動。剎車使汽車減速，但在安全帶（或儀錶板！）提供向後的力之前，沒有東西使乘客減速。這並不需要向前的力。'
    }
  },
  {
    id: 'M44', topic: 'force', level: 3, sub: "Newton's first law",
    stem: 'A car moves at constant velocity along a straight, level road. Which of the following statements is/are correct?',
    statements: ['The net force on the car is zero.', 'The driving force equals the total resistive force.', 'No forces act on the car.'],
    options: STMT_OPTS,
    answer: 2,
    explain: '(1) ✓ Constant velocity means zero acceleration, so the net force is zero.<br>(2) ✓ Horizontally, the forward driving force balances friction and air resistance.<br>(3) ✗ Several forces act (weight, normal reaction, driving force, resistance); they simply balance.',
    zh: {
      sub: '牛頓第一定律',
      stem: '一輛汽車以恆定速度沿一條平直的道路行駛。下列哪項／哪些敘述是正確的？',
      statements: ['作用於汽車的淨力為零。', '驅動力等於總阻力。', '沒有力作用於汽車。'],
      explain: '(1) ✓ 速度恆定即加速度為零，所以淨力為零。<br>(2) ✓ 在水平方向，向前的驅動力與摩擦力和空氣阻力平衡。<br>(3) ✗ 有多個力作用（重量、法向反作用力、驅動力、阻力），只是互相平衡。'
    }
  },
  {
    id: 'M45', topic: 'force', level: 2, sub: 'Resultant force',
    stem: 'Two forces of 6 N and 8 N act on an object at right angles to each other. What is the size of the resultant force?',
    options: ['2 N', '6 N', '8 N', '10 N'],
    answer: 3,
    explain: 'For perpendicular forces, use Pythagoras: F = √(6² + 8²) = √100 = 10 N.<br>Forces add as vectors, so the answer is not 6 + 8 = 14 N unless they act in the same direction.',
    zh: {
      sub: '合力',
      stem: '兩個分別為 6 N 和 8 N 的力互相垂直地作用於一個物體上。合力的大小是多少？',
      explain: '兩力互相垂直，用畢氏定理：F = √(6² + 8²) = √100 = 10 N。<br>力以矢量相加，除非方向相同，否則答案不是 6 + 8 = 14 N。'
    }
  },
  {
    id: 'M46', topic: 'force', level: 3, sub: 'Resultant force',
    stem: 'Two forces of 5 N and 12 N act on the same point. The angle between them can be changed. What is the smallest possible size of their resultant?',
    options: ['7 N', '8.5 N', '13 N', '17 N'],
    answer: 0,
    explain: 'The resultant is smallest when the forces act in opposite directions: 12 − 5 = 7 N, and largest when they act in the same direction: 12 + 5 = 17 N. 13 N is the resultant when they are perpendicular.',
    zh: {
      sub: '合力',
      stem: '兩個分別為 5 N 和 12 N 的力作用於同一點，兩力之間的夾角可以改變。它們合力的最小可能大小是多少？',
      explain: '兩力方向相反時合力最小：12 − 5 = 7 N；方向相同時最大：12 + 5 = 17 N。13 N 是兩力互相垂直時的合力。'
    }
  },
  {
    id: 'M47', topic: 'force', level: 3, sub: 'Resolving forces',
    stem: 'A rope pulls a box with a force of 50 N at 30° above the horizontal. What is the horizontal component of the force?',
    options: ['25.0 N', '43.3 N', '50.0 N', '57.7 N'],
    answer: 1,
    explain: 'Horizontal component = F cos θ = 50 cos 30° = 43.3 N. (The vertical component is F sin θ = 25.0 N.)<br>57.7 N divides by cos 30°; a component can never be larger than the force itself.',
    zh: {
      sub: '力的分解',
      stem: '一條繩以 50 N、與水平成 30° 向上的力拉動一個箱子。這個力的水平分量是多少？',
      explain: '水平分量 = F cos θ = 50 cos 30° = 43.3 N。（垂直分量為 F sin θ = 25.0 N。）<br>57.7 N 是除以 cos 30° 所得；分量永遠不會大於力本身。'
    }
  },
  {
    id: 'M48', topic: 'force', level: 4, sub: 'Equilibrium of forces',
    stem: 'A 40 N weight hangs at rest from two strings. One string makes 30° with the horizontal and the other makes 60° with the horizontal. What is the tension in the string at 60° to the horizontal?',
    options: ['20.0 N', '23.1 N', '34.6 N', '40.0 N'],
    answer: 2,
    explain: 'Let T₁ (at 30°) and T₂ (at 60°).<br>Horizontally: T₁ cos 30° = T₂ cos 60° ⇒ T₂ = √3 T₁.<br>Vertically: T₁ sin 30° + T₂ sin 60° = 40 ⇒ 0.5T₁ + 1.5T₁ = 40 ⇒ T₁ = 20.0 N, T₂ = 34.6 N.<br>The steeper string carries more of the weight.',
    zh: {
      sub: '力的平衡',
      stem: '一個 40 N 的重物以兩條繩靜止懸掛。一條繩與水平成 30°，另一條與水平成 60°。與水平成 60° 的繩的張力是多少？',
      explain: '設 T₁（30°）和 T₂（60°）。<br>水平方向：T₁ cos 30° = T₂ cos 60° ⇒ T₂ = √3 T₁。<br>垂直方向：T₁ sin 30° + T₂ sin 60° = 40 ⇒ 0.5T₁ + 1.5T₁ = 40 ⇒ T₁ = 20.0 N，T₂ = 34.6 N。<br>較陡的繩承受較多重量。'
    }
  },
  {
    id: 'M49', topic: 'force', level: 4, sub: 'Resolving forces',
    stem: 'A box of mass 10 kg rests on a level floor. It is pulled by a rope with a force of 50 N at 30° above the horizontal, but does not leave the floor. What is the normal reaction from the floor on the box?<br>(g = 9.81 m s⁻²)',
    options: ['25.0 N', '49.1 N', '56.8 N', '73.1 N'],
    answer: 3,
    explain: 'Vertically: R + F sin 30° = mg ⇒ R = 10 × 9.81 − 50 × 0.5 = 98.1 − 25.0 = 73.1 N.<br>The upward pull of the rope takes part of the weight, so R is less than mg. 56.8 N wrongly uses F cos 30°.',
    zh: {
      sub: '力的分解',
      stem: '一個質量為 10 kg 的箱子放在水平地面上。一條繩以 50 N、與水平成 30° 向上的力拉它，但箱子沒有離開地面。地面對箱子的法向反作用力是多少？<br>（g = 9.81 m s⁻²）',
      explain: '垂直方向：R + F sin 30° = mg ⇒ R = 10 × 9.81 − 50 × 0.5 = 98.1 − 25.0 = 73.1 N。<br>繩向上的拉力承受了部分重量，所以 R 小於 mg。56.8 N 錯用了 F cos 30°。'
    }
  },
  {
    id: 'M50', topic: 'force', level: 3, sub: "Newton's second law",
    stem: 'A man stands on a weighing scale inside a lift. The lift cable breaks and the lift falls freely. Neglecting air resistance, what does the scale read while the lift falls?',
    options: ['Zero', 'Less than his weight, but not zero', 'His weight', 'More than his weight'],
    answer: 0,
    explain: 'The man and the scale both fall with acceleration g. For the man: mg − R = mg ⇒ R = 0. The scale does not need to push on him at all, so it reads zero: he feels weightless, although his weight is unchanged.',
    zh: {
      sub: '牛頓第二定律',
      stem: '一名男子站在升降機內的磅秤上。升降機的鋼纜斷裂，升降機自由下墜。忽略空氣阻力，升降機下墜期間磅秤的讀數是多少？',
      options: ['零', '小於他的重量，但不是零', '他的重量', '大於他的重量'],
      explain: '男子和磅秤都以加速度 g 下墜。對男子：mg − R = mg ⇒ R = 0。磅秤完全不需要推他，所以讀數為零：他感到失重，雖然他的重量不變。'
    }
  },
  {
    id: 'M51', topic: 'force', level: 3, sub: "Newton's second law",
    stem: 'On a smooth horizontal surface, a 4.0 kg block is pulled by a horizontal force of 12 N. It tows a 2.0 kg block behind it by a light string. What is the tension in the string?',
    options: ['2.0 N', '4.0 N', '8.0 N', '12 N'],
    answer: 1,
    explain: 'Whole system: a = F / (total mass) = 12 / 6.0 = 2.0 m s⁻².<br>The string alone accelerates the 2.0 kg block: T = 2.0 × 2.0 = 4.0 N.<br>(Check on the 4.0 kg block: 12 − 4.0 = 4.0 × 2.0 ✓.) 8.0 N is the net force on the front block.',
    zh: {
      sub: '牛頓第二定律',
      stem: '在光滑的水平面上，一個 4.0 kg 的木塊受 12 N 的水平力拉動，並以一條輕繩拖着後面一個 2.0 kg 的木塊。繩的張力是多少？',
      explain: '整個系統：a = F / 總質量 = 12 / 6.0 = 2.0 m s⁻²。<br>只有繩使 2.0 kg 的木塊加速：T = 2.0 × 2.0 = 4.0 N。<br>（以 4.0 kg 木塊驗算：12 − 4.0 = 4.0 × 2.0 ✓。）8.0 N 是前面木塊所受的淨力。'
    }
  },
  {
    id: 'M52', topic: 'force', level: 4, sub: "Newton's second law",
    stem: 'A 4.0 kg block on a rough horizontal table is connected by a light string over a smooth pulley at the edge of the table to a 2.0 kg block hanging freely. The friction on the 4.0 kg block is 6.0 N. What is the acceleration of the blocks?<br>(g = 9.81 m s⁻²)',
    options: ['1.50 m s⁻²', '1.96 m s⁻²', '2.27 m s⁻²', '3.27 m s⁻²'],
    answer: 2,
    explain: 'Treat both blocks as one system of mass 6.0 kg.<br>Net force = weight of hanging block − friction = 2.0 × 9.81 − 6.0 = 13.6 N.<br>a = 13.6 / 6.0 = 2.27 m s⁻².<br>3.27 m s⁻² ignores the friction.',
    zh: {
      sub: '牛頓第二定律',
      stem: '一個放在粗糙水平桌面上的 4.0 kg 木塊，以一條跨過桌邊光滑滑輪的輕繩連接一個自由懸掛的 2.0 kg 木塊。4.0 kg 木塊所受的摩擦力為 6.0 N。兩木塊的加速度是多少？<br>（g = 9.81 m s⁻²）',
      explain: '把兩木塊當作一個質量為 6.0 kg 的系統。<br>淨力 = 懸掛木塊的重量 − 摩擦力 = 2.0 × 9.81 − 6.0 = 13.6 N。<br>a = 13.6 / 6.0 = 2.27 m s⁻²。<br>3.27 m s⁻² 忽略了摩擦力。'
    }
  },
  {
    id: 'M53', topic: 'force', level: 4, sub: "Newton's second law",
    stem: 'Two masses of 3.0 kg and 1.0 kg hang on either side of a smooth pulley, joined by a light inextensible string. They are released from rest. What is the size of their acceleration?<br>(g = 9.81 m s⁻²)',
    options: ['1.96 m s⁻²', '2.45 m s⁻²', '3.27 m s⁻²', '4.91 m s⁻²'],
    answer: 3,
    explain: 'Net driving force = (3.0 − 1.0) × 9.81 = 19.6 N; total mass moved = 3.0 + 1.0 = 4.0 kg.<br>a = 19.6 / 4.0 = 4.91 m s⁻² (= g / 2).<br>2.45 m s⁻² divides the weight of only one kilogram by the total mass.',
    zh: {
      sub: '牛頓第二定律',
      stem: '質量分別為 3.0 kg 和 1.0 kg 的兩個物體以一條輕質不可伸長的繩連接，懸掛在一個光滑滑輪的兩邊。把它們由靜止釋放，它們加速度的大小是多少？<br>（g = 9.81 m s⁻²）',
      explain: '淨驅動力 = (3.0 − 1.0) × 9.81 = 19.6 N；被推動的總質量 = 3.0 + 1.0 = 4.0 kg。<br>a = 19.6 / 4.0 = 4.91 m s⁻²（= g / 2）。<br>2.45 m s⁻² 只用了一千克的重量除以總質量。'
    }
  },
  {
    id: 'M54', topic: 'force', level: 4, sub: 'Impulse',
    stem: 'A 0.50 kg ball is at rest. A force of 20 N acts on it for 0.20 s, and then decreases uniformly to zero over the next 0.20 s. What is the final speed of the ball?',
    options: ['12 m s⁻¹', '16 m s⁻¹', '24 m s⁻¹', '32 m s⁻¹'],
    answer: 0,
    explain: 'Impulse = area under the F–t graph = rectangle + triangle = 20 × 0.20 + ½ × 20 × 0.20 = 4.0 + 2.0 = 6.0 N s.<br>Impulse = change in momentum ⇒ v = 6.0 / 0.50 = 12 m s⁻¹.<br>16 m s⁻¹ treats the force as 20 N for the whole 0.40 s.',
    zh: {
      sub: '衝量',
      stem: '一個 0.50 kg 的球原本靜止。一個 20 N 的力作用於它 0.20 s，然後在接着的 0.20 s 內均勻地減至零。球的末速率是多少？',
      explain: '衝量 = F–t 線圖下的面積 = 長方形 + 三角形 = 20 × 0.20 + ½ × 20 × 0.20 = 4.0 + 2.0 = 6.0 N s。<br>衝量 = 動量的變化 ⇒ v = 6.0 / 0.50 = 12 m s⁻¹。<br>16 m s⁻¹ 把力當作在整段 0.40 s 內都是 20 N。'
    }
  },
  {
    id: 'M55', topic: 'force', level: 3, sub: 'Momentum',
    stem: 'A rifle of mass 4.0 kg fires a bullet of mass 0.020 kg horizontally at 400 m s⁻¹. What is the recoil speed of the rifle, assuming it is free to move?',
    options: ['0.50 m s⁻¹', '2.0 m s⁻¹', '8.0 m s⁻¹', '80 m s⁻¹'],
    answer: 1,
    explain: 'Total momentum is zero before firing, so it is zero afterwards:<br>0.020 × 400 = 4.0 × V ⇒ V = 8.0 / 4.0 = 2.0 m s⁻¹ (backwards).<br>8.0 is the bullet\'s momentum in kg m s⁻¹, not a speed.',
    zh: {
      sub: '動量',
      stem: '一枝質量為 4.0 kg 的步槍以 400 m s⁻¹ 水平射出一粒質量為 0.020 kg 的子彈。假設步槍可自由移動，它的反衝速率是多少？',
      explain: '開槍前總動量為零，所以開槍後亦為零：<br>0.020 × 400 = 4.0 × V ⇒ V = 8.0 / 4.0 = 2.0 m s⁻¹（向後）。<br>8.0 是子彈的動量（kg m s⁻¹），並非速率。'
    }
  },
  {
    id: 'M56', topic: 'force', level: 4, sub: 'Collisions',
    stem: 'Trolley X moving at speed v collides head-on with an identical trolley Y at rest. The collision is perfectly elastic. What happens after the collision?',
    options: [
      'Both trolleys move at v/2 in the original direction.',
      'X rebounds at speed v and Y stays at rest.',
      'X stops and Y moves off at speed v.',
      'Both trolleys stop.'
    ],
    answer: 2,
    explain: 'Both momentum and kinetic energy must be conserved. For equal masses the only solution (other than no collision) is that the velocities are exchanged: X stops and Y moves off at v.<br>Check A: momentum is conserved but KE = 2 × ½m(v/2)² = ¼mv², only half the original — that would be an inelastic collision.',
    zh: {
      sub: '碰撞',
      stem: '以速率 v 運動的手推車 X 與一輛相同、靜止的手推車 Y 正面相撞。碰撞是完全彈性的。碰撞後會怎樣？',
      options: ['兩車都以 v/2 沿原方向運動。', 'X 以速率 v 反彈，Y 保持靜止。', 'X 停下，Y 以速率 v 移開。', '兩車都停下。'],
      explain: '動量和動能都必須守恆。對質量相同的物體，唯一的解（除不相撞外）是互換速度：X 停下，Y 以 v 移開。<br>檢查 A：動量守恆，但動能 = 2 × ½m(v/2)² = ¼mv²，只有原來的一半 — 那是非彈性碰撞。'
    }
  },
  {
    id: 'M57', topic: 'force', level: 4, sub: 'Collisions',
    stem: 'A 2.0 kg trolley moving to the right at 3.0 m s⁻¹ collides with a 1.0 kg trolley moving to the left at 4.0 m s⁻¹. They stick together. What is their velocity just after the collision?',
    options: ['0.67 m s⁻¹ to the left', '0.67 m s⁻¹ to the right', '3.3 m s⁻¹ to the left', '3.3 m s⁻¹ to the right'],
    answer: 1,
    explain: 'Take right as positive. Total momentum = 2.0 × 3.0 + 1.0 × (−4.0) = 6.0 − 4.0 = +2.0 kg m s⁻¹.<br>v = 2.0 / 3.0 = +0.67 m s⁻¹, i.e. to the right.<br>3.3 m s⁻¹ adds the momenta as if both trolleys moved the same way (10 / 3).',
    zh: {
      sub: '碰撞',
      stem: '一輛 2.0 kg、以 3.0 m s⁻¹ 向右運動的手推車與一輛 1.0 kg、以 4.0 m s⁻¹ 向左運動的手推車相撞，兩車黏在一起。碰撞剛完結時它們的速度是多少？',
      options: ['0.67 m s⁻¹ 向左', '0.67 m s⁻¹ 向右', '3.3 m s⁻¹ 向左', '3.3 m s⁻¹ 向右'],
      explain: '取向右為正。總動量 = 2.0 × 3.0 + 1.0 × (−4.0) = 6.0 − 4.0 = +2.0 kg m s⁻¹。<br>v = 2.0 / 3.0 = +0.67 m s⁻¹，即向右。<br>3.3 m s⁻¹ 把動量當作同方向相加（10 / 3）。'
    }
  },
  {
    id: 'M58', topic: 'force', level: 4, sub: 'Momentum',
    stem: 'An object at rest explodes into two pieces of unequal mass. Which of the following statements is/are correct?',
    statements: [
      'The total momentum of the two pieces just after the explosion is zero.',
      'The two pieces move off in opposite directions.',
      'The total kinetic energy is conserved in the explosion.'
    ],
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: 0,
    explain: '(1) ✓ Momentum is conserved and was zero before.<br>(2) ✓ For the momenta to cancel they must point in opposite directions (the lighter piece moves faster).<br>(3) ✗ Kinetic energy increases: chemical (or other stored) energy is converted to KE.',
    zh: {
      sub: '動量',
      stem: '一個靜止的物體爆炸成質量不同的兩塊。下列哪項／哪些敘述是正確的？',
      statements: ['爆炸剛完結時，兩塊碎片的總動量為零。', '兩塊碎片向相反方向飛開。', '爆炸中總動能守恆。'],
      explain: '(1) ✓ 動量守恆，而爆炸前為零。<br>(2) ✓ 兩者的動量要互相抵消，方向必須相反（較輕的一塊較快）。<br>(3) ✗ 動能增加：化學能（或其他儲存的能量）轉化為動能。'
    }
  },
  {
    id: 'M59', topic: 'force', level: 3, sub: 'Impulse',
    stem: 'A 0.20 kg ball hits a wall at 10 m s⁻¹ and rebounds along the same line at 8.0 m s⁻¹. It is in contact with the wall for 0.050 s. What is the average force on the ball?',
    options: ['8.0 N', '72 N', '360 N', '720 N'],
    answer: 1,
    explain: 'Take the rebound direction as positive. Change in momentum = 0.20 × 8.0 − 0.20 × (−10) = 1.6 + 2.0 = 3.6 kg m s⁻¹.<br>Average force = Δp / Δt = 3.6 / 0.050 = 72 N.<br>8.0 N uses the difference of the speeds (10 − 8.0), forgetting that the direction reverses.',
    zh: {
      sub: '衝量',
      stem: '一個 0.20 kg 的球以 10 m s⁻¹ 撞向牆，並沿同一直線以 8.0 m s⁻¹ 反彈。它與牆接觸了 0.050 s。球所受的平均力是多少？',
      explain: '取反彈方向為正。動量的變化 = 0.20 × 8.0 − 0.20 × (−10) = 1.6 + 2.0 = 3.6 kg m s⁻¹。<br>平均力 = Δp / Δt = 3.6 / 0.050 = 72 N。<br>8.0 N 用了兩個速率之差（10 − 8.0），忘記了方向已反轉。'
    }
  },
  {
    id: 'M60', topic: 'force', level: 3, sub: 'Impulse',
    stem: 'When catching a fast-moving ball, a cricket player draws the hands back with the ball. Why does this reduce the force on the hands?',
    options: [
      'It reduces the change in momentum of the ball.',
      'It reduces the impulse on the ball.',
      'It increases the time taken to stop the ball.',
      'It increases the speed of the ball before it is caught.'
    ],
    answer: 2,
    explain: 'The ball must lose the same momentum whatever the player does, so the impulse FΔt is fixed. Moving the hands back makes Δt longer, so the average force F = Δp / Δt is smaller.',
    zh: {
      sub: '衝量',
      stem: '接住高速飛來的球時，板球員會隨球把雙手向後收。為甚麼這能減少手所受的力？',
      options: ['它減少了球動量的變化。', '它減少了球所受的衝量。', '它增加了使球停下所需的時間。', '它增加了球被接住前的速率。'],
      explain: '無論球員怎樣做，球都必須失去相同的動量，所以衝量 FΔt 是固定的。把手向後收使 Δt 變長，於是平均力 F = Δp / Δt 較小。'
    }
  },
  {
    id: 'M61', topic: 'force', level: 4, sub: 'Impulse',
    stem: 'In a crash, an inflated airbag protects the driver. Which of the following statements is/are correct?',
    statements: [
      'The airbag reduces the driver\'s change in momentum.',
      'The airbag increases the time taken for the driver to stop.',
      'The airbag spreads the stopping force over a larger area of the body.'
    ],
    options: STMT_OPTS,
    answer: 3,
    explain: '(1) ✗ The driver goes from the same speed to rest either way, so the change in momentum is the same.<br>(2) ✓ A longer stopping time means a smaller average force (F = Δp / Δt).<br>(3) ✓ A larger contact area means a smaller pressure on any one part of the body.',
    zh: {
      sub: '衝量',
      stem: '撞車時，脹起的安全氣袋保護司機。下列哪項／哪些敘述是正確的？',
      statements: ['安全氣袋減少了司機動量的變化。', '安全氣袋增加了司機停下所需的時間。', '安全氣袋把使司機停下的力分佈在身體較大的面積上。'],
      explain: '(1) ✗ 無論如何，司機都由同一速率變為靜止，所以動量的變化相同。<br>(2) ✓ 停下的時間較長，平均力便較小（F = Δp / Δt）。<br>(3) ✓ 接觸面積較大，身體任何一部分所受的壓強便較小。'
    }
  },
  {
    id: 'M62', topic: 'force', level: 3, sub: 'Work and energy',
    stem: 'A car of mass 1200 kg travelling at 20 m s⁻¹ brakes and stops in a distance of 40 m. What is the average braking force?',
    options: ['6000 N', '12000 N', '24000 N', '2.4 × 10⁵ N'],
    answer: 0,
    explain: 'Work done by the braking force = loss of KE: F × d = ½ mv².<br>F = ½ × 1200 × 20² / 40 = 2.4 × 10⁵ / 40 = 6000 N.<br>2.4 × 10⁵ is the kinetic energy in joules; 12 000 N forgets the ½.',
    zh: {
      sub: '功和能量',
      stem: '一輛質量為 1200 kg、以 20 m s⁻¹ 行駛的汽車剎車，在 40 m 內停下。平均剎車力是多少？',
      explain: '剎車力所做的功 = 失去的動能：F × d = ½ mv²。<br>F = ½ × 1200 × 20² / 40 = 2.4 × 10⁵ / 40 = 6000 N。<br>2.4 × 10⁵ 是以焦耳計的動能；12 000 N 漏了 ½。'
    }
  },
  {
    id: 'M63', topic: 'force', level: 4, sub: 'Work and energy',
    stem: 'A 2.0 kg block is released from rest at the top of a rough slope 5.0 m long, inclined at 30° to the horizontal. The friction on the block is a constant 4.0 N. What is its speed at the bottom of the slope?<br>(g = 9.81 m s⁻²)',
    options: ['4.43 m s⁻¹', '5.39 m s⁻¹', '7.00 m s⁻¹', '9.90 m s⁻¹'],
    answer: 1,
    explain: 'Vertical drop = 5.0 sin 30° = 2.5 m. Loss of PE = 2.0 × 9.81 × 2.5 = 49.1 J.<br>Work done against friction = 4.0 × 5.0 = 20 J.<br>KE at bottom = 49.1 − 20 = 29.1 J = ½ × 2.0 × v² ⇒ v = 5.39 m s⁻¹.<br>7.00 m s⁻¹ ignores friction; 9.90 m s⁻¹ uses the slope length as the height.',
    zh: {
      sub: '功和能量',
      stem: '把一個 2.0 kg 的木塊在一個長 5.0 m、與水平成 30° 的粗糙斜面頂部由靜止釋放。木塊所受的摩擦力恆為 4.0 N。木塊到達斜面底部時的速率是多少？<br>（g = 9.81 m s⁻²）',
      explain: '垂直下降 = 5.0 sin 30° = 2.5 m。失去的勢能 = 2.0 × 9.81 × 2.5 = 49.1 J。<br>克服摩擦力所做的功 = 4.0 × 5.0 = 20 J。<br>底部的動能 = 49.1 − 20 = 29.1 J = ½ × 2.0 × v² ⇒ v = 5.39 m s⁻¹。<br>7.00 m s⁻¹ 忽略了摩擦力；9.90 m s⁻¹ 把斜面長度當作高度。'
    }
  },
  {
    id: 'M64', topic: 'force', level: 2, sub: 'Power',
    stem: 'A car moves at a constant speed of 25 m s⁻¹ along a level road. The total resistive force on it is 800 N. What is the output power of its engine?',
    options: ['32 W', '800 W', '2.0 × 10⁴ W', '4.0 × 10⁴ W'],
    answer: 2,
    explain: 'At constant speed, driving force = resistive force = 800 N.<br>P = Fv = 800 × 25 = 2.0 × 10⁴ W (20 kW).',
    zh: {
      sub: '功率',
      stem: '一輛汽車以 25 m s⁻¹ 的恆定速率沿水平道路行駛，所受的總阻力為 800 N。引擎的輸出功率是多少？',
      explain: '速率恆定時，驅動力 = 阻力 = 800 N。<br>P = Fv = 800 × 25 = 2.0 × 10⁴ W（20 kW）。'
    }
  },
  {
    id: 'M65', topic: 'force', level: 3, sub: 'Efficiency',
    stem: 'An electric motor takes 500 W of electrical power and lifts a 40 kg load at a steady 0.80 m s⁻¹. What is the efficiency of the motor?<br>(g = 9.81 m s⁻²)',
    options: ['31 %', '37 %', '50 %', '63 %'],
    answer: 3,
    explain: 'Useful output power = Fv = mgv = 40 × 9.81 × 0.80 = 314 W.<br>Efficiency = 314 / 500 = 0.63 = 63 %.<br>37 % is the fraction wasted (as heat and sound).',
    zh: {
      sub: '效率',
      stem: '一部電動機消耗 500 W 的電功率，以穩定的 0.80 m s⁻¹ 提起一件 40 kg 的重物。電動機的效率是多少？<br>（g = 9.81 m s⁻²）',
      explain: '有用輸出功率 = Fv = mgv = 40 × 9.81 × 0.80 = 314 W。<br>效率 = 314 / 500 = 0.63 = 63 %。<br>37 % 是浪費掉（變為熱和聲音）的部分。'
    }
  },
  {
    id: 'M66', topic: 'force', level: 2, sub: 'Kinetic energy',
    stem: 'The speed of a car is doubled. Its kinetic energy becomes',
    options: ['4 times the original value.', '2 times the original value.', '√2 times the original value.', 'unchanged.'],
    answer: 0,
    explain: 'KE = ½ mv² ∝ v². Doubling v multiplies KE by 2² = 4. This is why braking distance at constant braking force rises four-fold when speed doubles.',
    zh: {
      sub: '動能',
      stem: '一輛汽車的速率加倍，它的動能會變成',
      options: ['原來數值的 4 倍。', '原來數值的 2 倍。', '原來數值的 √2 倍。', '不變。'],
      explain: '動能 = ½ mv² ∝ v²。v 加倍，動能變為 2² = 4 倍。這就是剎車力不變時，速率加倍會使剎車距離增至四倍的原因。'
    }
  },
  {
    id: 'M67', topic: 'force', level: 3, sub: 'Conservation of energy',
    stem: 'A simple pendulum bob is released from rest at a height of 0.20 m above its lowest point. Neglecting air resistance, what is its speed at the lowest point?<br>(g = 9.81 m s⁻²)',
    options: ['1.40 m s⁻¹', '1.98 m s⁻¹', '3.92 m s⁻¹', '4.43 m s⁻¹'],
    answer: 1,
    explain: 'Loss of PE = gain in KE: mgh = ½ mv² ⇒ v = √(2gh) = √(2 × 9.81 × 0.20) = 1.98 m s⁻¹.<br>The tension does no work because it is always perpendicular to the motion. 1.40 m s⁻¹ forgets the factor 2.',
    zh: {
      sub: '能量守恆',
      stem: '把一個單擺的擺錘在比最低點高 0.20 m 處由靜止釋放。忽略空氣阻力，擺錘在最低點的速率是多少？<br>（g = 9.81 m s⁻²）',
      explain: '失去的勢能 = 獲得的動能：mgh = ½ mv² ⇒ v = √(2gh) = √(2 × 9.81 × 0.20) = 1.98 m s⁻¹。<br>張力始終與運動方向垂直，所以不做功。1.40 m s⁻¹ 漏了因子 2。'
    }
  },
  {
    id: 'M68', topic: 'force', level: 3, sub: 'Projectile motion',
    stem: 'A ball is kicked from level ground at 25 m s⁻¹ at 40° above the horizontal. Neglecting air resistance, how long is the ball in the air?<br>(g = 9.81 m s⁻²)',
    options: ['1.64 s', '1.95 s', '3.28 s', '3.90 s'],
    answer: 2,
    explain: 'Only the vertical motion decides the time: u<sub>y</sub> = 25 sin 40° = 16.1 m s⁻¹.<br>Time of flight = 2u<sub>y</sub> / g = 2 × 16.1 / 9.81 = 3.28 s.<br>1.64 s is the time to the highest point; 3.90 s wrongly uses 25 cos 40°.',
    zh: {
      sub: '拋體運動',
      stem: '從水平地面以 25 m s⁻¹、與水平成 40° 向上踢出一個球。忽略空氣阻力，球在空中停留多久？<br>（g = 9.81 m s⁻²）',
      explain: '只有垂直運動決定時間：u<sub>y</sub> = 25 sin 40° = 16.1 m s⁻¹。<br>飛行時間 = 2u<sub>y</sub> / g = 2 × 16.1 / 9.81 = 3.28 s。<br>1.64 s 是到達最高點的時間；3.90 s 錯用了 25 cos 40°。'
    }
  },
  {
    id: 'M69', topic: 'force', level: 3, sub: 'Projectile motion',
    stem: 'A ball is projected at an angle above the horizontal. Neglecting air resistance, which of the following statements is/are correct during its flight?',
    statements: [
      'Its acceleration changes direction during the flight.',
      'The horizontal component of its velocity stays constant.',
      'The vertical component of its velocity is zero at the highest point.'
    ],
    options: STMT_OPTS,
    answer: 3,
    explain: '(1) ✗ The only force is the weight, so the acceleration is g, vertically downwards, throughout.<br>(2) ✓ No horizontal force acts.<br>(3) ✓ At the top the ball stops rising before it starts falling; it still moves horizontally.',
    zh: {
      sub: '拋體運動',
      stem: '把一個球以與水平成某角度向上拋出。忽略空氣阻力，在飛行期間下列哪項／哪些敘述是正確的？',
      statements: ['它的加速度在飛行期間改變方向。', '它速度的水平分量保持不變。', '它速度的垂直分量在最高點為零。'],
      explain: '(1) ✗ 唯一的力是重量，所以加速度始終是 g，垂直向下。<br>(2) ✓ 沒有水平力作用。<br>(3) ✓ 在最高點，球停止上升然後開始下降；它仍在水平方向運動。'
    }
  },
  {
    id: 'M70', topic: 'force', level: 4, sub: 'Projectile motion',
    stem: 'Two identical balls are kicked from level ground with the same speed, one at 30° and the other at 60° above the horizontal. Neglecting air resistance, which statement is correct?',
    options: [
      'They land the same distance away.',
      'The ball kicked at 60° lands first.',
      'The ball kicked at 30° rises higher.',
      'They are in the air for the same time.'
    ],
    answer: 0,
    explain: 'Range = u² sin 2θ / g, and sin 60° = sin 120°, so 30° and 60° (complementary angles) give the same range.<br>The 60° ball has a larger vertical component, so it rises higher and stays in the air longer; the 30° ball travels faster horizontally for a shorter time.',
    zh: {
      sub: '拋體運動',
      stem: '從水平地面以相同的速率踢出兩個相同的球，一個與水平成 30°，另一個成 60°。忽略空氣阻力，哪項敘述是正確的？',
      options: ['它們落在相同的距離。', '以 60° 踢出的球較早落地。', '以 30° 踢出的球升得較高。', '它們在空中停留的時間相同。'],
      explain: '射程 = u² sin 2θ / g，而 sin 60° = sin 120°，所以 30° 和 60°（互為餘角）的射程相同。<br>60° 的球垂直分量較大，所以升得較高、停留得較久；30° 的球則以較快的水平速度飛行較短的時間。'
    }
  },
  {
    id: 'M71', topic: 'force', level: 3, sub: 'Projectile motion',
    stem: 'From the same height and at the same instant, ball X is dropped from rest and ball Y is thrown horizontally. The ground is level. Neglecting air resistance, which ball lands first?',
    options: ['X', 'Both land at the same time.', 'Y', 'It depends on how fast Y is thrown.'],
    answer: 1,
    explain: 'The vertical motions are identical: both start with zero vertical velocity and fall with acceleration g through the same height. The horizontal velocity of Y does not affect its vertical motion, so both land together.',
    zh: {
      sub: '拋體運動',
      stem: '在同一高度、同一時刻，讓球 X 由靜止下墜，並把球 Y 水平拋出。地面水平。忽略空氣阻力，哪個球先落地？',
      options: ['X', '兩球同時落地。', 'Y', '視乎 Y 被拋出的速率而定。'],
      explain: '兩球的垂直運動完全相同：都以零垂直速度開始，以加速度 g 落下相同的高度。Y 的水平速度不影響其垂直運動，所以兩球同時落地。'
    }
  },
  {
    id: 'M72', topic: 'force', level: 3, sub: 'Projectile motion',
    stem: 'A ball is projected at 20 m s⁻¹ at 60° above the horizontal. Neglecting air resistance, what is its speed at the highest point of its path?',
    options: ['0', '5.0 m s⁻¹', '10 m s⁻¹', '17.3 m s⁻¹'],
    answer: 2,
    explain: 'At the highest point the vertical velocity is zero, but the horizontal velocity is unchanged: 20 cos 60° = 10 m s⁻¹.<br>The speed is not zero at the top. 17.3 m s⁻¹ is the initial vertical component.',
    zh: {
      sub: '拋體運動',
      stem: '以 20 m s⁻¹、與水平成 60° 向上拋出一個球。忽略空氣阻力，球在路徑最高點的速率是多少？',
      explain: '在最高點，垂直速度為零，但水平速度不變：20 cos 60° = 10 m s⁻¹。<br>在最高點速率並不是零。17.3 m s⁻¹ 是初始的垂直分量。'
    }
  },
  {
    id: 'M73', topic: 'force', level: 2, sub: 'Moments',
    stem: 'It is easier to loosen a tight nut with a long spanner than with a short one. Why?',
    options: [
      'A long spanner reduces the friction on the nut.',
      'A long spanner increases the force applied by the hand.',
      'A long spanner reduces the moment needed to turn the nut.',
      'The same force gives a larger moment about the nut.'
    ],
    answer: 3,
    explain: 'Moment = force × perpendicular distance from the pivot. The nut needs a certain moment to turn; a longer handle increases the distance, so a smaller force provides that moment.',
    zh: {
      sub: '力矩',
      stem: '用長扳手比用短扳手更容易鬆開一顆很緊的螺帽。為甚麼？',
      options: ['長扳手減少了螺帽所受的摩擦力。', '長扳手增加了手施加的力。', '長扳手減少了轉動螺帽所需的力矩。', '相同的力對螺帽產生較大的力矩。'],
      explain: '力矩 = 力 × 與支點的垂直距離。轉動螺帽需要某一大小的力矩；較長的手柄增加距離，所以較小的力便能提供該力矩。'
    }
  },
  {
    id: 'M74', topic: 'force', level: 2, sub: 'Moments',
    stem: 'A 30 kg child sits 2.0 m from the pivot of a see-saw. How far from the pivot, on the other side, must a 40 kg child sit to balance the see-saw? Neglect the weight of the see-saw.',
    options: ['1.5 m', '2.0 m', '2.7 m', '3.0 m'],
    answer: 0,
    explain: 'Principle of moments: 30g × 2.0 = 40g × d ⇒ d = 60 / 40 = 1.5 m.<br>The heavier child sits closer to the pivot. 2.7 m swaps the masses.',
    zh: {
      sub: '力矩',
      stem: '一名 30 kg 的小孩坐在翹翹板支點一邊 2.0 m 處。一名 40 kg 的小孩須坐在支點另一邊多遠處，翹翹板才能平衡？忽略翹翹板的重量。',
      explain: '力矩原理：30g × 2.0 = 40g × d ⇒ d = 60 / 40 = 1.5 m。<br>較重的小孩坐得較接近支點。2.7 m 把兩人的質量對調了。'
    }
  },
  {
    id: 'M75', topic: 'force', level: 4, sub: 'Moments',
    stem: 'A uniform plank 6.0 m long and of weight 300 N rests horizontally on two supports, P at 1.0 m from the left end and Q at 1.0 m from the right end. A man of weight 600 N stands 2.0 m from the left end. What is the upward force from support P?',
    options: ['300 N', '600 N', '675 N', '900 N'],
    answer: 1,
    explain: 'Take moments about Q (5.0 m from the left end). The plank\'s weight acts at 3.0 m, i.e. 2.0 m from Q; the man is 3.0 m from Q; P is 4.0 m from Q.<br>F<sub>P</sub> × 4.0 = 300 × 2.0 + 600 × 3.0 = 2400 ⇒ F<sub>P</sub> = 600 N.<br>Then F<sub>Q</sub> = 900 − 600 = 300 N, which is option A.',
    zh: {
      sub: '力矩',
      stem: '一塊長 6.0 m、重 300 N 的均勻木板水平地放在兩個支架上：P 在距左端 1.0 m 處，Q 在距右端 1.0 m 處。一名重 600 N 的男子站在距左端 2.0 m 處。支架 P 施加的向上力是多少？',
      explain: '對 Q（距左端 5.0 m）取力矩。木板的重量作用於 3.0 m 處，即距 Q 2.0 m；男子距 Q 3.0 m；P 距 Q 4.0 m。<br>F<sub>P</sub> × 4.0 = 300 × 2.0 + 600 × 3.0 = 2400 ⇒ F<sub>P</sub> = 600 N。<br>於是 F<sub>Q</sub> = 900 − 600 = 300 N，即選項 A。'
    }
  },
  {
    id: 'M76', topic: 'force', level: 3, sub: 'Stability',
    stem: 'Which of the following would make a vase less likely to topple over when it is tilted?',
    statements: ['Lowering its centre of gravity', 'Making its base wider', 'Making it taller with the same base'],
    options: STMT_OPTS,
    answer: 2,
    explain: 'An object topples when the vertical line through its centre of gravity falls outside its base.<br>(1) ✓ (2) ✓ A low centre of gravity and a wide base let it tilt further before this happens.<br>(3) ✗ A taller vase usually has a higher centre of gravity and is less stable.',
    zh: {
      sub: '穩定性',
      stem: '下列哪項會使花瓶在傾側時較不容易翻倒？',
      statements: ['降低其重心', '加闊其底部', '底部不變而把它加高'],
      explain: '當通過重心的鉛垂線落在底部之外時，物體便會翻倒。<br>(1) ✓ (2) ✓ 重心低、底部闊，物體可傾側得較多才翻倒。<br>(3) ✗ 較高的花瓶重心一般較高，較不穩定。'
    }
  },
  {
    id: 'M77', topic: 'force', level: 3, sub: 'Moments',
    stem: 'A driver turns a steering wheel of diameter 0.40 m by pushing with equal and opposite forces of 15 N at opposite ends of a diameter, each tangent to the rim. What is the total turning moment (torque)?',
    options: ['1.5 N m', '3.0 N m', '4.5 N m', '6.0 N m'],
    answer: 3,
    explain: 'The two forces form a couple. Each force is 0.20 m from the centre and turns the wheel the same way:<br>torque = 15 × 0.20 + 15 × 0.20 = 6.0 N m (= one force × the distance between the forces, 0.40 m).<br>3.0 N m counts only one of the forces.',
    zh: {
      sub: '力矩',
      stem: '一名司機在直徑為 0.40 m 的軚盤上，於一條直徑的兩端各施加 15 N、大小相等方向相反且與輪緣相切的力。總轉動力矩（轉矩）是多少？',
      explain: '兩個力組成力偶。每個力距中心 0.20 m，而且使軚盤向同一方向轉動：<br>轉矩 = 15 × 0.20 + 15 × 0.20 = 6.0 N m（= 一個力 × 兩力之間的距離 0.40 m）。<br>3.0 N m 只計算了其中一個力。'
    }
  },
  {
    id: 'M78', topic: 'force', level: 5, sub: 'Equilibrium',
    stem: 'A uniform ladder 5.0 m long and of weight 200 N leans against a smooth vertical wall. Its foot rests on rough ground 3.0 m from the wall, so its top is 4.0 m up the wall. What is the friction force on the foot of the ladder?',
    options: ['75 N', '100 N', '150 N', '200 N'],
    answer: 0,
    explain: 'The smooth wall pushes horizontally with force R; friction at the foot must balance R.<br>Moments about the foot: R × 4.0 (its perpendicular distance) = 200 × 1.5 (the weight acts at the midpoint, 1.5 m horizontally from the foot).<br>R = 300 / 4.0 = 75 N ⇒ friction = 75 N.',
    zh: {
      sub: '平衡',
      stem: '一把長 5.0 m、重 200 N 的均勻梯子斜靠在光滑的垂直牆上。梯腳放在距牆 3.0 m 的粗糙地面上，所以梯頂在牆上 4.0 m 高處。梯腳所受的摩擦力是多少？',
      explain: '光滑的牆以水平力 R 推梯子；梯腳的摩擦力必須與 R 平衡。<br>對梯腳取力矩：R × 4.0（其垂直距離）= 200 × 1.5（重量作用於中點，與梯腳的水平距離為 1.5 m）。<br>R = 300 / 4.0 = 75 N ⇒ 摩擦力 = 75 N。'
    }
  },
  {
    id: 'M79', topic: 'force', level: 5, sub: 'Circular motion',
    stem: 'A car drives over the top of a hump-back bridge whose surface forms an arc of radius 20 m. What is the greatest speed at which the car can pass over the top without losing contact with the road?<br>(g = 9.81 m s⁻²)',
    options: ['9.90 m s⁻¹', '14.0 m s⁻¹', '19.8 m s⁻¹', '196 m s⁻¹'],
    answer: 1,
    explain: 'At the top: mg − R = mv² / r. The car just loses contact when R = 0, so mg = mv² / r ⇒ v = √(gr) = √(9.81 × 20) = 14.0 m s⁻¹.<br>Faster than this, gravity alone cannot provide the centripetal force and the car leaves the road.',
    zh: {
      sub: '圓周運動',
      stem: '一輛汽車駛過一座拱橋的頂部，橋面是半徑 20 m 的圓弧。汽車能在不離開路面的情況下駛過橋頂的最大速率是多少？<br>（g = 9.81 m s⁻²）',
      explain: '在橋頂：mg − R = mv² / r。汽車剛好離開路面時 R = 0，所以 mg = mv² / r ⇒ v = √(gr) = √(9.81 × 20) = 14.0 m s⁻¹。<br>若比這更快，單靠重力不足以提供向心力，汽車便會離開路面。'
    }
  },
  {
    id: 'M80', topic: 'force', level: 4, sub: 'Circular motion',
    stem: 'A 0.50 kg ball on a string 0.80 m long is whirled in a vertical circle. At the lowest point its speed is 4.0 m s⁻¹. What is the tension in the string at the lowest point?<br>(g = 9.81 m s⁻²)',
    options: ['5.10 N', '10.0 N', '14.9 N', '20.0 N'],
    answer: 2,
    explain: 'At the lowest point the tension acts up and the weight down; their difference provides the centripetal force:<br>T − mg = mv² / r ⇒ T = 0.50 × 9.81 + 0.50 × 4.0² / 0.80 = 4.91 + 10.0 = 14.9 N.<br>10.0 N is mv²/r alone; 5.10 N subtracts the weight, as would apply at the top.',
    zh: {
      sub: '圓周運動',
      stem: '一個 0.50 kg 的球繫於一條長 0.80 m 的繩上，在鉛垂面上作圓周運動。在最低點時它的速率為 4.0 m s⁻¹。繩在最低點的張力是多少？<br>（g = 9.81 m s⁻²）',
      explain: '在最低點，張力向上，重量向下；兩者之差提供向心力：<br>T − mg = mv² / r ⇒ T = 0.50 × 9.81 + 0.50 × 4.0² / 0.80 = 4.91 + 10.0 = 14.9 N。<br>10.0 N 只是 mv²/r；5.10 N 減去了重量，那是在最高點的情況。'
    }
  },
  {
    id: 'M81', topic: 'force', level: 5, sub: 'Circular motion',
    stem: 'A road curve of radius 60 m is banked at 20° to the horizontal. At what speed can a car go round the curve without needing any sideways friction?<br>(g = 9.81 m s⁻²)',
    options: ['4.67 m s⁻¹', '10.3 m s⁻¹', '14.2 m s⁻¹', '14.6 m s⁻¹'],
    answer: 3,
    explain: 'With no friction, the normal reaction R provides everything: vertically R cos θ = mg; horizontally R sin θ = mv² / r.<br>Dividing: tan θ = v² / (rg) ⇒ v = √(rg tan θ) = √(60 × 9.81 × tan 20°) = 14.6 m s⁻¹.<br>14.2 m s⁻¹ uses sin θ instead of tan θ.',
    zh: {
      sub: '圓周運動',
      stem: '一段半徑 60 m 的彎路以 20° 傾斜（彎道外高內低）。汽車以甚麼速率轉彎時不需要任何側向摩擦力？<br>（g = 9.81 m s⁻²）',
      explain: '沒有摩擦力時，一切由法向反作用力 R 提供：垂直方向 R cos θ = mg；水平方向 R sin θ = mv² / r。<br>兩式相除：tan θ = v² / (rg) ⇒ v = √(rg tan θ) = √(60 × 9.81 × tan 20°) = 14.6 m s⁻¹。<br>14.2 m s⁻¹ 用了 sin θ 而非 tan θ。'
    }
  },
  {
    id: 'M82', topic: 'force', level: 2, sub: 'Circular motion',
    stem: 'A stone whirled in a horizontal circle on a string is released when the string snaps. Viewed from above, in which direction does the stone move just after release?',
    options: ['Along the tangent to the circle at that point', 'Towards the centre of the circle', 'Directly away from the centre of the circle', 'In a spiral path outwards'],
    answer: 0,
    explain: 'Once the string snaps there is no centripetal force, so (seen from above) the stone keeps the velocity it had at that instant — along the tangent to the circle — in line with Newton\'s first law.',
    zh: {
      sub: '圓周運動',
      stem: '一塊石以繩繫着在水平面上作圓周運動。繩突然斷裂，石被釋放。從上方看，石在剛被釋放後向哪個方向運動？',
      options: ['沿該點的圓切線方向', '指向圓心', '直接遠離圓心', '向外沿螺旋路徑'],
      explain: '繩斷後再沒有向心力，所以（從上方看）石會保持那一刻的速度 — 即沿圓的切線方向 — 符合牛頓第一定律。'
    }
  },
  {
    id: 'M83', topic: 'force', level: 2, sub: 'Circular motion',
    stem: 'What is the angular speed of the second hand of a clock?',
    options: ['0.0167 rad s⁻¹', '0.105 rad s⁻¹', '6.28 rad s⁻¹', '60 rad s⁻¹'],
    answer: 1,
    explain: 'The second hand turns through 2π rad in 60 s: ω = 2π / 60 = 0.105 rad s⁻¹.<br>0.0167 is 1/60 — revolutions per second, not radians per second.',
    zh: {
      sub: '圓周運動',
      stem: '時鐘秒針的角速率是多少？',
      explain: '秒針在 60 s 內轉過 2π rad：ω = 2π / 60 = 0.105 rad s⁻¹。<br>0.0167 是 1/60 — 每秒轉數，而不是每秒弧度。'
    }
  },
  {
    id: 'M84', topic: 'force', level: 4, sub: 'Circular motion',
    stem: 'Because of the Earth\'s rotation, an object on the Equator moves in a circle of radius 6.37 × 10⁶ m once every 24 hours. What is its centripetal acceleration?',
    options: ['5.29 × 10⁻⁹ m s⁻²', '7.27 × 10⁻⁵ m s⁻²', '3.37 × 10⁻² m s⁻²', '463 m s⁻²'],
    answer: 2,
    explain: 'ω = 2π / (24 × 3600) = 7.27 × 10⁻⁵ rad s⁻¹.<br>a = ω²r = (7.27 × 10⁻⁵)² × 6.37 × 10⁶ = 3.37 × 10⁻² m s⁻².<br>This is tiny compared with g, so the Earth\'s spin hardly affects our weight. 463 is the speed (m s⁻¹), ωr.',
    zh: {
      sub: '圓周運動',
      stem: '由於地球自轉，赤道上的物體每 24 小時沿半徑 6.37 × 10⁶ m 的圓周運動一圈。它的向心加速度是多少？',
      explain: 'ω = 2π / (24 × 3600) = 7.27 × 10⁻⁵ rad s⁻¹。<br>a = ω²r = (7.27 × 10⁻⁵)² × 6.37 × 10⁶ = 3.37 × 10⁻² m s⁻²。<br>與 g 相比這極小，所以地球自轉幾乎不影響我們的重量。463 是速率（m s⁻¹），即 ωr。'
    }
  },
  {
    id: 'M85', topic: 'force', level: 3, sub: 'Gravitation',
    stem: 'Two lead spheres, each of mass 1000 kg, have their centres 2.0 m apart. What is the gravitational force between them?<br>(G = 6.67 × 10⁻¹¹ N m² kg⁻²)',
    options: ['3.34 × 10⁻⁸ N', '4.17 × 10⁻⁶ N', '8.34 × 10⁻⁶ N', '1.67 × 10⁻⁵ N'],
    answer: 3,
    explain: 'F = Gm₁m₂ / r² = 6.67 × 10⁻¹¹ × 1000 × 1000 / 2.0² = 1.67 × 10⁻⁵ N.<br>Gravitational forces between everyday objects are extremely small. 3.34 × 10⁻⁸ N adds the masses instead of multiplying them.',
    zh: {
      sub: '萬有引力',
      stem: '兩個各重 1000 kg 的鉛球，球心相距 2.0 m。它們之間的引力是多少？<br>（G = 6.67 × 10⁻¹¹ N m² kg⁻²）',
      explain: 'F = Gm₁m₂ / r² = 6.67 × 10⁻¹¹ × 1000 × 1000 / 2.0² = 1.67 × 10⁻⁵ N。<br>日常物體之間的引力極小。3.34 × 10⁻⁸ N 把質量相加而非相乘。'
    }
  },
  {
    id: 'M86', topic: 'force', level: 4, sub: 'Gravitation',
    stem: 'A planet has twice the mass and twice the radius of the Earth. The acceleration due to gravity at the Earth\'s surface is 9.81 m s⁻². What is it at the planet\'s surface?',
    options: ['4.91 m s⁻²', '9.81 m s⁻²', '19.6 m s⁻²', '39.2 m s⁻²'],
    answer: 0,
    explain: 'g = GM / R². Doubling M doubles g; doubling R divides g by 4.<br>g = 9.81 × 2 / 4 = 4.91 m s⁻².<br>9.81 m s⁻² wrongly treats g as proportional to M / R.',
    zh: {
      sub: '萬有引力',
      stem: '某行星的質量和半徑都是地球的兩倍。地球表面的重力加速度為 9.81 m s⁻²。該行星表面的重力加速度是多少？',
      explain: 'g = GM / R²。M 加倍使 g 加倍；R 加倍使 g 變為 1/4。<br>g = 9.81 × 2 / 4 = 4.91 m s⁻²。<br>9.81 m s⁻² 錯誤地把 g 當作與 M / R 成正比。'
    }
  },
  {
    id: 'M87', topic: 'force', level: 4, sub: 'Satellites',
    stem: 'A satellite moves in a circular orbit of radius r round the Earth with speed v. What is the speed of a satellite in a circular orbit of radius 4r?',
    options: ['v / 4', 'v / 2', '2v', '4v'],
    answer: 1,
    explain: 'GMm / r² = mv² / r ⇒ v = √(GM / r), so v ∝ 1/√r.<br>Radius × 4 ⇒ speed × 1/√4 = v / 2. Satellites further out move more slowly.',
    zh: {
      sub: '人造衛星',
      stem: '一顆人造衛星以速率 v 沿半徑 r 的圓形軌道繞地球運行。軌道半徑為 4r 的人造衛星的速率是多少？',
      explain: 'GMm / r² = mv² / r ⇒ v = √(GM / r)，所以 v ∝ 1/√r。<br>半徑 × 4 ⇒ 速率 × 1/√4 = v / 2。軌道越遠的衛星運行越慢。'
    }
  },
  {
    id: 'M88', topic: 'force', level: 4, sub: 'Satellites',
    stem: 'Astronauts on board a space station orbiting the Earth feel weightless. Why?',
    options: [
      'There is no gravity in space.',
      'They are beyond the reach of the Earth\'s gravitational field.',
      'They and the station are both in free fall with the same acceleration.',
      'The centripetal force cancels their weight.'
    ],
    answer: 2,
    explain: 'At the station\'s height, g is still about 90 % of its surface value. Gravity provides the centripetal force: the astronauts and the station continuously fall around the Earth with the same acceleration, so the floor does not need to push on the astronauts — they feel weightless.',
    zh: {
      sub: '人造衛星',
      stem: '在環繞地球運行的太空站上，太空人感到失重。為甚麼？',
      options: ['太空中沒有重力。', '他們已在地球引力場的範圍以外。', '他們與太空站都以相同的加速度自由下墜。', '向心力抵銷了他們的重量。'],
      explain: '在太空站的高度，g 仍約為地面數值的 90 %。重力提供向心力：太空人與太空站以相同的加速度不斷繞地球「下墜」，地板不需要推太空人，所以他們感到失重。'
    }
  },
  {
    id: 'M89', topic: 'force', level: 5, sub: 'Satellites',
    stem: 'A geostationary satellite has an orbital period of 24 hours. What is the radius of its orbit, measured from the centre of the Earth?<br>(Mass of the Earth = 6.0 × 10²⁴ kg; G = 6.67 × 10⁻¹¹ N m² kg⁻²)',
    options: ['6.37 × 10⁶ m', '2.67 × 10⁷ m', '3.59 × 10⁷ m', '4.23 × 10⁷ m'],
    answer: 3,
    explain: 'GMm / r² = m(2π / T)² r ⇒ r³ = GMT² / (4π²).<br>r³ = 6.67 × 10⁻¹¹ × 6.0 × 10²⁴ × (86 400)² / (4π²) = 7.57 × 10²² m³ ⇒ r = 4.23 × 10⁷ m.<br>3.59 × 10⁷ m is the height above the Earth\'s surface (r minus the Earth\'s radius, 6.37 × 10⁶ m).',
    zh: {
      sub: '人造衛星',
      stem: '地球同步衛星的軌道週期為 24 小時。由地心量起，它的軌道半徑是多少？<br>（地球質量 = 6.0 × 10²⁴ kg；G = 6.67 × 10⁻¹¹ N m² kg⁻²）',
      explain: 'GMm / r² = m(2π / T)² r ⇒ r³ = GMT² / (4π²)。<br>r³ = 6.67 × 10⁻¹¹ × 6.0 × 10²⁴ × (86 400)² / (4π²) = 7.57 × 10²² m³ ⇒ r = 4.23 × 10⁷ m。<br>3.59 × 10⁷ m 是離地面的高度（r 減去地球半徑 6.37 × 10⁶ m）。'
    }
  },
  {
    id: 'M90', topic: 'force', level: 4, sub: 'Stopping distance',
    stem: 'Drinking alcohol increases a driver\'s reaction time. For the same initial speed and the same braking, which of the following is/are increased?',
    statements: ['The thinking distance', 'The overall stopping distance', 'The braking distance'],
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: 0,
    explain: '(1) ✓ Thinking distance = speed × reaction time, so it increases.<br>(2) ✓ Stopping distance = thinking distance + braking distance, so it increases.<br>(3) ✗ Braking distance = u² / (2a) depends on the speed and the deceleration, not on the reaction time.',
    zh: {
      sub: '停車距離',
      stem: '飲酒會增加司機的反應時間。在初速率和剎車情況相同下，下列哪項／哪些會增加？',
      statements: ['思考距離', '總停車距離', '剎車距離'],
      explain: '(1) ✓ 思考距離 = 速率 × 反應時間，所以會增加。<br>(2) ✓ 停車距離 = 思考距離 + 剎車距離，所以會增加。<br>(3) ✗ 剎車距離 = u² / (2a) 取決於速率和減速度，與反應時間無關。'
    }
  },
  {
    id: 'M91', topic: 'force', level: 3, sub: 'Stopping distance',
    stem: 'A car travels at 20 m s⁻¹. The driver\'s reaction time is 0.60 s, and the brakes then give a uniform deceleration of 8.0 m s⁻². What is the total stopping distance?',
    options: ['25 m', '37 m', '62 m', '74 m'],
    answer: 1,
    explain: 'Thinking distance = 20 × 0.60 = 12 m (constant speed during the reaction time).<br>Braking distance = u² / (2a) = 400 / 16 = 25 m.<br>Total = 12 + 25 = 37 m.<br>25 m leaves out the thinking distance; 62 m forgets the 2 in u² / (2a).',
    zh: {
      sub: '停車距離',
      stem: '一輛汽車以 20 m s⁻¹ 行駛。司機的反應時間為 0.60 s，之後剎車產生 8.0 m s⁻² 的均勻減速度。總停車距離是多少？',
      explain: '思考距離 = 20 × 0.60 = 12 m（反應期間速率不變）。<br>剎車距離 = u² / (2a) = 400 / 16 = 25 m。<br>總和 = 12 + 25 = 37 m。<br>25 m 漏了思考距離；62 m 忘記 u² / (2a) 中的 2。'
    }
  },
  {
    id: 'M92', topic: 'force', level: 4, sub: 'Friction',
    stem: 'A 3.0 kg block rests without sliding on a rough plane inclined at 25° to the horizontal. What is the friction acting on the block?<br>(g = 9.81 m s⁻²)',
    options: ['0', '6.21 N', '12.4 N', '26.7 N'],
    answer: 2,
    explain: 'The block is in equilibrium, so along the plane the friction balances the component of the weight down the slope:<br>f = mg sin 25° = 3.0 × 9.81 × 0.423 = 12.4 N (up the slope).<br>26.7 N is mg cos 25°, the component perpendicular to the plane, which is balanced by the normal reaction.',
    zh: {
      sub: '摩擦力',
      stem: '一個 3.0 kg 的木塊靜止（沒有滑動）在一個與水平成 25° 的粗糙斜面上。作用於木塊的摩擦力是多少？<br>（g = 9.81 m s⁻²）',
      explain: '木塊處於平衡，所以沿斜面方向摩擦力與重量沿斜面向下的分量平衡：<br>f = mg sin 25° = 3.0 × 9.81 × 0.423 = 12.4 N（沿斜面向上）。<br>26.7 N 是 mg cos 25°，即垂直於斜面的分量，它由法向反作用力平衡。'
    }
  },
  {
    id: 'M93', topic: 'force', level: 5, sub: "Newton's second law",
    stem: 'A 60 kg man stands on a weighing scale in a lift. Starting from rest, the lift accelerates uniformly upwards to 3.0 m s⁻¹ in 2.0 s, moves at constant speed, and then slows uniformly to rest in 3.0 s. What is the greatest reading of the scale during the journey?<br>(g = 9.81 m s⁻²)',
    options: ['90 N', '529 N', '589 N', '679 N'],
    answer: 3,
    explain: 'The reading R is largest when the acceleration is upwards (speeding up while going up): a = 3.0 / 2.0 = 1.5 m s⁻².<br>R − mg = ma ⇒ R = 60 × (9.81 + 1.5) = 679 N.<br>While slowing down, a = 1.0 m s⁻² downwards and R = 60 × (9.81 − 1.0) = 529 N; at constant speed R = mg = 589 N.',
    zh: {
      sub: '牛頓第二定律',
      stem: '一名 60 kg 的男子站在升降機內的磅秤上。升降機由靜止開始，在 2.0 s 內均勻地向上加速至 3.0 m s⁻¹，然後以恆定速率移動，最後在 3.0 s 內均勻地減速至靜止。整個過程中磅秤的最大讀數是多少？<br>（g = 9.81 m s⁻²）',
      explain: '加速度向上（向上行而加速）時讀數 R 最大：a = 3.0 / 2.0 = 1.5 m s⁻²。<br>R − mg = ma ⇒ R = 60 × (9.81 + 1.5) = 679 N。<br>減速時 a = 1.0 m s⁻² 向下，R = 60 × (9.81 − 1.0) = 529 N；速率恆定時 R = mg = 589 N。'
    }
  },
  {
    id: 'M94', topic: 'force', level: 4, sub: 'Momentum',
    stem: 'The gradient of a graph of momentum against time for an object is equal to',
    options: ['the net force on the object.', 'the kinetic energy of the object.', 'the velocity of the object.', 'the impulse on the object.'],
    answer: 0,
    explain: "Newton's second law in its general form: F = Δp / Δt. So the gradient of the p–t graph is the net force. (The area under an F–t graph is the impulse, which equals the change in momentum.)",
    zh: {
      sub: '動量',
      stem: '物體的動量對時間線圖的斜率等於',
      options: ['物體所受的淨力。', '物體的動能。', '物體的速度。', '物體所受的衝量。'],
      explain: '牛頓第二定律的一般形式：F = Δp / Δt。所以 p–t 線圖的斜率就是淨力。（F–t 線圖下的面積是衝量，等於動量的變化。）'
    }
  },
  {
    id: 'M95', topic: 'force', level: 4, sub: 'Conservation of energy',
    stem: 'A ball is dropped from a height of 2.0 m onto a hard floor. At each bounce it loses 20 % of its kinetic energy. Neglecting air resistance, how high does it rise after the third bounce?',
    options: ['0.80 m', '1.02 m', '1.28 m', '1.60 m'],
    answer: 1,
    explain: 'The height reached is proportional to the energy kept, and each bounce keeps 80 % of the energy.<br>After 3 bounces: 2.0 × 0.8³ = 2.0 × 0.512 = 1.02 m.<br>1.60 m and 1.28 m are the heights after the first and second bounces; 0.80 m subtracts 20 % of the original height three times.',
    zh: {
      sub: '能量守恆',
      stem: '讓一個球從 2.0 m 高處落在堅硬的地面上。每次反彈它都失去 20 % 的動能。忽略空氣阻力，第三次反彈後它升至多高？',
      explain: '升起的高度與保留的能量成正比，每次反彈保留 80 % 的能量。<br>3 次反彈後：2.0 × 0.8³ = 2.0 × 0.512 = 1.02 m。<br>1.60 m 和 1.28 m 是第一和第二次反彈後的高度；0.80 m 是把原來高度的 20 % 減去三次所得。'
    }
  },
  {
    id: 'M96', topic: 'force', level: 3, sub: 'Terminal velocity',
    stem: 'A skydiver falling at terminal velocity opens her parachute. Which of the following is correct just after the parachute opens?',
    options: [
      'She starts to move upwards.',
      'Her acceleration is zero.',
      'The air resistance is greater than her weight, so she slows down.',
      'Her weight decreases.'
    ],
    answer: 2,
    explain: 'The open parachute greatly increases the air resistance at the same speed. The net force is now upwards, so she decelerates (while still moving down) until the air resistance falls to equal her weight at a new, lower terminal velocity.',
    zh: {
      sub: '終端速度',
      stem: '一名以終端速度下墜的跳傘員打開降落傘。降落傘剛打開時，下列哪項是正確的？',
      options: ['她開始向上移動。', '她的加速度為零。', '空氣阻力大於她的重量，所以她減速。', '她的重量減少。'],
      explain: '在相同速率下，打開的降落傘大大增加空氣阻力。淨力變為向上，所以她減速（仍向下運動），直至空氣阻力減至與重量相等，達到一個新的、較低的終端速度。'
    }
  },
  {
    id: 'M97', topic: 'force', level: 3, sub: 'Conservation of energy',
    stem: 'A roller-coaster car is released from rest at the top of a frictionless track, 30 m above the lowest point. Which of the following statements is/are correct?',
    statements: [
      'Its kinetic energy is greatest at the lowest point of the track.',
      'It cannot rise higher than 30 m above the lowest point.',
      'Its speed at a point 10 m above the lowest point depends on its mass.'
    ],
    options: ['(1) only', '(2) only', '(3) only', '(1) and (2) only'],
    answer: 3,
    explain: 'With no friction, mechanical energy is conserved.<br>(1) ✓ PE is least at the lowest point, so KE is greatest there.<br>(2) ✓ To rise above 30 m it would need more energy than it started with.<br>(3) ✗ mgh = ½ mv² — the mass cancels, so v = √(2g × 20) whatever the mass.',
    zh: {
      sub: '能量守恆',
      stem: '一卡過山車從無摩擦路軌的頂部由靜止釋放，頂部比最低點高 30 m。下列哪項／哪些敘述是正確的？',
      statements: ['它的動能在路軌最低點最大。', '它不能升至比最低點高 30 m 以上。', '它在比最低點高 10 m 處的速率取決於其質量。'],
      explain: '沒有摩擦，機械能守恆。<br>(1) ✓ 最低點的勢能最少，所以動能最大。<br>(2) ✓ 要升至 30 m 以上，需要比開始時更多的能量。<br>(3) ✗ mgh = ½ mv² — 質量互相抵消，所以不論質量多少，v = √(2g × 20)。'
    }
  },
  {
    id: 'M98', topic: 'force', level: 5, sub: 'Satellites',
    stem: 'The Moon orbits the Earth at a radius of 3.84 × 10⁸ m with a period of 27.3 days. What is the period of a satellite in a circular orbit of radius 4.23 × 10⁷ m around the Earth?',
    options: ['1.00 day', '3.01 days', '9.06 days', '27.3 days'],
    answer: 0,
    explain: 'For orbits around the same body, T² ∝ r³ (from GMm/r² = m(2π/T)² r).<br>T = 27.3 × (4.23 × 10⁷ / 3.84 × 10⁸)^(3/2) = 27.3 × (0.110)^1.5 = 27.3 × 0.0366 = 1.00 day.<br>This is the geostationary orbit. 3.01 days wrongly takes T ∝ r.',
    zh: {
      sub: '人造衛星',
      stem: '月球以 3.84 × 10⁸ m 的半徑繞地球運行，週期為 27.3 天。一顆以半徑 4.23 × 10⁷ m 繞地球作圓周運動的人造衛星的週期是多少？',
      options: ['1.00 天', '3.01 天', '9.06 天', '27.3 天'],
      explain: '繞同一天體運行時，T² ∝ r³（由 GMm/r² = m(2π/T)² r 得出）。<br>T = 27.3 × (4.23 × 10⁷ / 3.84 × 10⁸)^(3/2) = 27.3 × (0.110)^1.5 = 27.3 × 0.0366 = 1.00 天。<br>這就是地球同步軌道。3.01 天錯誤地取 T ∝ r。'
    }
  },
  {
    id: 'M99', topic: 'force', level: 3, sub: 'Inclined plane',
    stem: 'A 5.0 kg box is pushed up a rough plane inclined at 30° to the horizontal at constant speed, by a force parallel to the plane. The friction on the box is 10 N. What is the pushing force?<br>(g = 9.81 m s⁻²)',
    options: ['14.5 N', '34.5 N', '49.1 N', '59.1 N'],
    answer: 1,
    explain: 'At constant speed the forces along the plane balance. Both the weight component and friction act down the slope (friction opposes the upward motion):<br>F = mg sin 30° + f = 5.0 × 9.81 × 0.5 + 10 = 24.5 + 10 = 34.5 N.<br>14.5 N takes friction as acting up the slope.',
    zh: {
      sub: '斜面',
      stem: '以一個平行於斜面的力，把一個 5.0 kg 的箱子以恆定速率推上一個與水平成 30° 的粗糙斜面。箱子所受的摩擦力為 10 N。推力是多少？<br>（g = 9.81 m s⁻²）',
      explain: '速率恆定時，沿斜面的力互相平衡。重量的分量和摩擦力都沿斜面向下（摩擦力阻礙向上的運動）：<br>F = mg sin 30° + f = 5.0 × 9.81 × 0.5 + 10 = 24.5 + 10 = 34.5 N。<br>14.5 N 把摩擦力當作沿斜面向上。'
    }
  },
  {
    id: 'M100', topic: 'force', level: 4, sub: 'Satellites',
    stem: 'A satellite moves in a circular orbit of radius 7.0 × 10⁶ m round the Earth. What is its orbital speed?<br>(Mass of the Earth = 6.0 × 10²⁴ kg; G = 6.67 × 10⁻¹¹ N m² kg⁻²)',
    options: ['3.78 × 10³ m s⁻¹', '5.35 × 10³ m s⁻¹', '7.56 × 10³ m s⁻¹', '1.07 × 10⁴ m s⁻¹'],
    answer: 2,
    explain: 'Gravity provides the centripetal force: GMm / r² = mv² / r ⇒ v = √(GM / r).<br>v = √(6.67 × 10⁻¹¹ × 6.0 × 10²⁴ / 7.0 × 10⁶) = √(5.72 × 10⁷) = 7.56 × 10³ m s⁻¹.<br>The mass of the satellite cancels.',
    zh: {
      sub: '人造衛星',
      stem: '一顆人造衛星以半徑 7.0 × 10⁶ m 的圓形軌道繞地球運行。它的軌道速率是多少？<br>（地球質量 = 6.0 × 10²⁴ kg；G = 6.67 × 10⁻¹¹ N m² kg⁻²）',
      explain: '引力提供向心力：GMm / r² = mv² / r ⇒ v = √(GM / r)。<br>v = √(6.67 × 10⁻¹¹ × 6.0 × 10²⁴ / 7.0 × 10⁶) = √(5.72 × 10⁷) = 7.56 × 10³ m s⁻¹。<br>衛星的質量互相抵消。'
    }
  },
  {
    id: 'M101', topic: 'force', level: 2, sub: 'Work, energy and power',
    stem: 'Which of the following is NOT a unit of energy?',
    options: ['J', 'kW h', 'eV', 'W'],
    answer: 3,
    explain: 'The watt (W = J s⁻¹) is a unit of power, the rate of transferring energy. The joule, the kilowatt-hour (3.6 × 10⁶ J) and the electronvolt (1.60 × 10⁻¹⁹ J) are all units of energy.',
    zh: {
      sub: '功、能量和功率',
      stem: '下列哪一個並不是能量的單位？',
      explain: '瓦特（W = J s⁻¹）是功率的單位，即轉移能量的速率。焦耳、千瓦小時（3.6 × 10⁶ J）和電子伏特（1.60 × 10⁻¹⁹ J）都是能量的單位。'
    }
  },
  {
    id: 'M102', topic: 'force', level: 4, sub: 'Work done',
    stem: 'A force acting on an object increases uniformly from 10 N to 30 N while the object moves 2.0 m in the direction of the force. How much work is done by the force?',
    options: ['40 J', '60 J', '80 J', '120 J'],
    answer: 0,
    explain: 'Work done = area under the force–displacement graph, here a trapezium:<br>W = ½ × (10 + 30) × 2.0 = 40 J (the average force, 20 N, times the distance).<br>60 J uses the final force for the whole distance.',
    zh: {
      sub: '所做的功',
      stem: '作用於物體的力由 10 N 均勻地增至 30 N，期間物體沿力的方向移動了 2.0 m。這個力做了多少功？',
      explain: '所做的功 = 力－位移線圖下的面積，這裏是一個梯形：<br>W = ½ × (10 + 30) × 2.0 = 40 J（即平均力 20 N 乘以距離）。<br>60 J 把整段距離都用了最後的力計算。'
    }
  },
  {
    id: 'M103', topic: 'force', level: 2, sub: 'Momentum',
    stem: 'Which of the following has the greatest momentum?',
    options: ['A 0.010 kg bullet moving at 500 m s⁻¹', 'A 60 kg runner moving at 8.0 m s⁻¹', 'A 0.15 kg ball moving at 40 m s⁻¹', 'A 2.0 kg bird flying at 10 m s⁻¹'],
    answer: 1,
    explain: 'p = mv: bullet 0.010 × 500 = 5.0; runner 60 × 8.0 = 480; ball 0.15 × 40 = 6.0; bird 2.0 × 10 = 20 kg m s⁻¹.<br>The fast bullet has a large speed but a tiny mass, so its momentum is small.',
    zh: {
      sub: '動量',
      stem: '下列哪一項的動量最大？',
      options: ['以 500 m s⁻¹ 運動的 0.010 kg 子彈', '以 8.0 m s⁻¹ 跑步的 60 kg 跑手', '以 40 m s⁻¹ 運動的 0.15 kg 球', '以 10 m s⁻¹ 飛行的 2.0 kg 雀鳥'],
      explain: 'p = mv：子彈 0.010 × 500 = 5.0；跑手 60 × 8.0 = 480；球 0.15 × 40 = 6.0；雀鳥 2.0 × 10 = 20 kg m s⁻¹。<br>高速的子彈速率雖大，但質量很小，所以動量很小。'
    }
  }
]);
