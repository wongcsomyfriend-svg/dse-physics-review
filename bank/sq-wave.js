/* Wave Motion — structured questions (Paper 1 Section B style). Format: see bank/core.js (addStructured). */
addStructured([
  {
    id: 'SW01', topic: 'wave', level: 3, sub: 'Wave graphs',
    stem: 'The graph shows the displacement of the particles along a rope at one instant. A transverse wave of frequency 5.0 Hz is travelling along the rope to the right.',
    figure: svgGraph({
      aria: 'Displacement-distance graph: sine wave of amplitude 3 cm and wavelength 0.8 m from x = 0 to 1.2 m; point P at x = 0.4 m',
      x: { max: 1.2, label: 'x / m', ticks: [[0.4, '0.4'], [0.8, '0.8'], [1.2, '1.2']] },
      y: { min: -4, max: 4, label: 'y / cm', ticks: [[3, '3'], [-3, '−3']] },
      lines: [{ f: x => 3 * Math.sin(2 * Math.PI * x / 0.8), from: 0, to: 1.2, n: 60 }],
      guides: [[0, 3, 0.2, 3], [0, -3, 0.6, -3]],
      dots: [[0.4, 0, 'P', 8, -8]]
    }),
    parts: [
      {
        label: '(a)', marks: 2, q: 'State the amplitude and the wavelength of the wave.',
        answer: 'Amplitude = 3 cm (0.03 m); wavelength = 0.8 m.',
        points: ['Amplitude 3 cm [1]', 'Wavelength 0.8 m [1]']
      },
      {
        label: '(b)', marks: 1, q: 'Find the speed of the wave.',
        answer: 'v = fλ = 5.0 × 0.8 = 4.0 m s⁻¹.',
        points: ['4.0 m s⁻¹ [1]'], num: { v: 4.0, unit: 'm s⁻¹' }
      },
      {
        label: '(c)', marks: 1, q: 'How long does a particle take to move from a crest to the next trough?',
        answer: 'Half a period: T / 2 = 1 / (2 × 5.0) = 0.10 s.',
        points: ['0.10 s [1]'], num: { v: 0.10, unit: 's' }
      },
      {
        label: '(d)', marks: 1, q: 'In which direction is particle P moving at this instant?',
        answer: 'Upwards. For a wave travelling to the right, P will next take the displacement of the particle just to its left, which is above it.',
        points: ['Upwards [1]']
      }
    ],
    zh: {
      sub: '波的線圖',
      stem: '下圖顯示某一刻繩上各質點的位移。一列頻率為 5.0 Hz 的橫波正沿繩向右傳播。',
      parts: [
        { q: '指出波的振幅和波長。', answer: '振幅 = 3 cm（0.03 m）；波長 = 0.8 m。', points: ['振幅 3 cm [1]', '波長 0.8 m [1]'] },
        { q: '求波速。', answer: 'v = fλ = 5.0 × 0.8 = 4.0 m s⁻¹。', points: ['4.0 m s⁻¹ [1]'] },
        { q: '一個質點由波峰移至下一個波谷需要多少時間？', answer: '半個週期：T / 2 = 1 / (2 × 5.0) = 0.10 s。', points: ['0.10 s [1]'] },
        { q: '在這一刻，質點 P 向哪個方向運動？', answer: '向上。對於向右傳播的波，P 稍後會重複其左邊質點的位移，而那質點在它上方。', points: ['向上 [1]'] }
      ]
    }
  },
  {
    id: 'SW02', topic: 'wave', level: 4, sub: 'Refraction',
    stem: 'A ray of light in air strikes the surface of a glass block at an angle of incidence of 50°. The angle of refraction is 30°. (Speed of light in air = 3.00 × 10⁸ m s⁻¹)',
    parts: [
      {
        label: '(a)', marks: 2, q: 'Find the refractive index of the glass.',
        answer: 'n = sin 50° / sin 30° = 0.766 / 0.500 = 1.53.',
        points: ['n = sin i / sin r [1M]', '1.53 [1A]'], num: { v: 1.532, unit: '' }
      },
      {
        label: '(b)', marks: 1, q: 'Find the speed of light in the glass.',
        answer: 'v = c / n = 3.00 × 10⁸ / 1.53 = 1.96 × 10⁸ m s⁻¹.',
        points: ['1.96 × 10⁸ m s⁻¹ [1]'], num: { v: 1.958e8, unit: 'm s⁻¹' }
      },
      {
        label: '(c)', marks: 2, q: 'Find the critical angle for light travelling from the glass to air.',
        answer: 'sin C = 1 / n = 1 / 1.53 = 0.653 ⇒ C = 40.7°.',
        points: ['sin C = 1 / n [1M]', '40.7° [1A]'], num: { v: 40.74, unit: '°' }
      },
      {
        label: '(d)', marks: 2, q: 'State the two conditions needed for total internal reflection.',
        answer: 'Light must travel from an optically denser medium towards a less dense one, and the angle of incidence must be greater than the critical angle.',
        points: ['From denser to less dense medium [1]', 'Angle of incidence greater than the critical angle [1]']
      }
    ],
    zh: {
      sub: '折射',
      stem: '空氣中一條光線以 50° 的入射角射到玻璃塊表面，折射角為 30°。（光在空氣中的速率 = 3.00 × 10⁸ m s⁻¹）',
      parts: [
        { q: '求玻璃的折射率。', answer: 'n = sin 50° / sin 30° = 0.766 / 0.500 = 1.53。', points: ['n = sin i / sin r [1M]', '1.53 [1A]'] },
        { q: '求光在玻璃中的速率。', answer: 'v = c / n = 3.00 × 10⁸ / 1.53 = 1.96 × 10⁸ m s⁻¹。', points: ['1.96 × 10⁸ m s⁻¹ [1]'] },
        { q: '求光由玻璃射向空氣時的臨界角。', answer: 'sin C = 1 / n = 1 / 1.53 = 0.653 ⇒ C = 40.7°。', points: ['sin C = 1 / n [1M]', '40.7° [1A]'] },
        { q: '指出發生全內反射所需的兩個條件。', answer: '光必須由光密介質射向光疏介質，而且入射角必須大於臨界角。', points: ['由光密射向光疏介質 [1]', '入射角大於臨界角 [1]'] }
      ]
    }
  },
  {
    id: 'SW03', topic: 'wave', level: 4, sub: 'Lenses',
    stem: 'An object 4.0 cm tall stands upright on the principal axis, 20 cm from a convex lens of focal length 15 cm.',
    parts: [
      {
        label: '(a)', marks: 2, q: 'Find the distance of the image from the lens.',
        answer: '1/u + 1/v = 1/f ⇒ 1/v = 1/15 − 1/20 = 1/60 ⇒ v = 60 cm.',
        points: ['Lens formula with correct values [1M]', 'v = 60 cm [1A]'], num: { v: 60, unit: 'cm' }
      },
      {
        label: '(b)', marks: 1, q: 'Find the height of the image.',
        answer: 'Magnification m = v / u = 60 / 20 = 3 ⇒ image height = 3 × 4.0 = 12 cm.',
        points: ['12 cm [1]'], num: { v: 12, unit: 'cm' }
      },
      {
        label: '(c)', marks: 2, q: 'Describe the nature of the image.',
        answer: 'Real (it can be formed on a screen), inverted and magnified.',
        points: ['Real and inverted [1]', 'Magnified [1]']
      },
      {
        label: '(d)', marks: 1, q: 'The object is moved to 10 cm from the lens. What kind of optical device does the lens now act as?',
        answer: 'A magnifying glass: the object is inside the focal length, so the image is virtual, upright and magnified.',
        points: ['Magnifying glass (virtual, upright, magnified image) [1]']
      }
    ],
    zh: {
      sub: '透鏡',
      stem: '一個高 4.0 cm 的物體直立在主軸上，與焦距為 15 cm 的凸透鏡相距 20 cm。',
      parts: [
        { q: '求像與透鏡的距離。', answer: '1/u + 1/v = 1/f ⇒ 1/v = 1/15 − 1/20 = 1/60 ⇒ v = 60 cm。', points: ['代入正確數值的透鏡公式 [1M]', 'v = 60 cm [1A]'] },
        { q: '求像的高度。', answer: '放大率 m = v / u = 60 / 20 = 3 ⇒ 像高 = 3 × 4.0 = 12 cm。', points: ['12 cm [1]'] },
        { q: '描述像的性質。', answer: '實像（可投射在屏幕上）、倒立、放大。', points: ['實像和倒立 [1]', '放大 [1]'] },
        { q: '把物體移至距透鏡 10 cm 處。透鏡現在起甚麼光學儀器的作用？', answer: '放大鏡：物體在焦距以內，所以像是虛像、正立和放大的。', points: ['放大鏡（虛像、正立、放大）[1]'] }
      ]
    }
  },
  {
    id: 'SW04', topic: 'wave', level: 4, sub: "Young's double-slit",
    stem: 'In a Young\'s double-slit experiment the slit separation is 0.40 mm and the screen is 0.80 m from the slits. The distance spanned by 10 fringe separations (from the 1st bright fringe to the 11th) is 12.0 mm.',
    parts: [
      {
        label: '(a)', marks: 1, q: 'Find the fringe separation.',
        answer: 'Δy = 12.0 / 10 = 1.20 mm.',
        points: ['1.20 mm [1]'], num: { v: 1.20, unit: 'mm' }
      },
      {
        label: '(b)', marks: 2, q: 'Find the wavelength of the light.',
        answer: 'λ = aΔy / D = (0.40 × 10⁻³ × 1.20 × 10⁻³) / 0.80 = 6.0 × 10⁻⁷ m = 600 nm.',
        points: ['λ = aΔy / D in SI units [1M]', '6.0 × 10⁻⁷ m [1A]'], num: { v: 6.0e-7, unit: 'm' }
      },
      {
        label: '(c)', marks: 1, q: 'State one change that would increase the fringe separation.',
        answer: 'Move the screen further away, use slits closer together, or use light of longer wavelength (e.g. red).',
        points: ['Larger D, smaller a or longer λ [1]']
      },
      {
        label: '(d)', marks: 2, q: 'Why must the light from the two slits be coherent, and how is this usually achieved?',
        answer: 'A stable interference pattern needs sources with a constant phase difference (and the same frequency). This is achieved by lighting both slits from a single source — a laser, or a lamp with a single slit in front.',
        points: ['Constant phase difference needed for a stable pattern [1]', 'Both slits lit by one source (laser / single slit) [1]']
      }
    ],
    zh: {
      sub: '楊氏雙縫實驗',
      stem: '在楊氏雙縫實驗中，雙縫間距為 0.40 mm，屏幕與雙縫相距 0.80 m。10 個條紋間距（由第 1 條至第 11 條亮紋）所跨的距離為 12.0 mm。',
      parts: [
        { q: '求條紋間距。', answer: 'Δy = 12.0 / 10 = 1.20 mm。', points: ['1.20 mm [1]'] },
        { q: '求光的波長。', answer: 'λ = aΔy / D = (0.40 × 10⁻³ × 1.20 × 10⁻³) / 0.80 = 6.0 × 10⁻⁷ m = 600 nm。', points: ['λ = aΔy / D，以國際單位計算 [1M]', '6.0 × 10⁻⁷ m [1A]'] },
        { q: '指出一項能增加條紋間距的改變。', answer: '把屏幕移遠、使用間距較小的雙縫，或使用波長較長的光（例如紅光）。', points: ['較大的 D、較小的 a 或較長的 λ [1]'] },
        { q: '為甚麼兩縫發出的光必須相干？通常怎樣做到？', answer: '穩定的干涉圖樣需要相位差恆定（而且頻率相同）的波源。方法是用同一光源照亮兩條縫 — 例如雷射，或在燈前放一條單縫。', points: ['穩定圖樣需要恆定的相位差 [1]', '用同一光源照亮兩縫（雷射／單縫）[1]'] }
      ]
    }
  },
  {
    id: 'SW05', topic: 'wave', level: 5, sub: 'Diffraction grating',
    stem: 'White light containing wavelengths from 400 nm to 700 nm falls normally on a diffraction grating with 500 lines per mm.',
    parts: [
      {
        label: '(a)', marks: 1, q: 'Find the grating spacing d.',
        answer: 'd = 1 / (500 × 10³) = 2.0 × 10⁻⁶ m.',
        points: ['2.0 × 10⁻⁶ m [1]'], num: { v: 2.0e-6, unit: 'm' }
      },
      {
        label: '(b)', marks: 2, q: 'Find the angle of the first-order maximum for 700 nm light.',
        answer: 'sin θ = λ / d = 700 × 10⁻⁹ / 2.0 × 10⁻⁶ = 0.35 ⇒ θ = 20.5°.',
        points: ['d sin θ = nλ with n = 1 [1M]', '20.5° [1A]'], num: { v: 20.49, unit: '°' }
      },
      {
        label: '(c)', marks: 3, q: 'Show that the second-order spectrum overlaps the third-order spectrum.',
        answer: 'The second-order spectrum ends with red: sin θ = 2 × 700 × 10⁻⁹ / 2.0 × 10⁻⁶ = 0.70 ⇒ θ = 44.4°.<br>The third-order spectrum starts with violet: sin θ = 3 × 400 × 10⁻⁹ / 2.0 × 10⁻⁶ = 0.60 ⇒ θ = 36.9°.<br>Since 36.9° < 44.4°, the third order begins before the second order ends: they overlap.',
        points: ['2nd order, 700 nm: 44.4° [1]', '3rd order, 400 nm: 36.9° [1]', 'Compares: 36.9° < 44.4°, so they overlap [1]']
      }
    ],
    zh: {
      sub: '衍射光柵',
      stem: '含 400 nm 至 700 nm 各種波長的白光垂直照射一塊每毫米有 500 條線的衍射光柵。',
      parts: [
        { q: '求光柵間距 d。', answer: 'd = 1 / (500 × 10³) = 2.0 × 10⁻⁶ m。', points: ['2.0 × 10⁻⁶ m [1]'] },
        { q: '求 700 nm 光第一級最大強度的角度。', answer: 'sin θ = λ / d = 700 × 10⁻⁹ / 2.0 × 10⁻⁶ = 0.35 ⇒ θ = 20.5°。', points: ['d sin θ = nλ，n = 1 [1M]', '20.5° [1A]'] },
        { q: '證明第二級光譜與第三級光譜重疊。', answer: '第二級光譜以紅光結束：sin θ = 2 × 700 × 10⁻⁹ / 2.0 × 10⁻⁶ = 0.70 ⇒ θ = 44.4°。<br>第三級光譜以紫光開始：sin θ = 3 × 400 × 10⁻⁹ / 2.0 × 10⁻⁶ = 0.60 ⇒ θ = 36.9°。<br>由於 36.9° < 44.4°，第三級在第二級結束前已開始：兩者重疊。', points: ['第二級，700 nm：44.4° [1]', '第三級，400 nm：36.9° [1]', '比較：36.9° < 44.4°，所以重疊 [1]'] }
      ]
    }
  },
  {
    id: 'SW06', topic: 'wave', level: 4, sub: 'Stationary waves',
    stem: 'A string 0.90 m long is fixed at both ends. When it is driven by a vibrator at 60 Hz, a stationary wave with three loops is formed.',
    parts: [
      {
        label: '(a)', marks: 1, q: 'Find the wavelength of the progressive waves on the string.',
        answer: 'Each loop is λ/2: 3 × λ/2 = 0.90 m ⇒ λ = 0.60 m.',
        points: ['0.60 m [1]'], num: { v: 0.60, unit: 'm' }
      },
      {
        label: '(b)', marks: 1, q: 'Find the speed of the waves on the string.',
        answer: 'v = fλ = 60 × 0.60 = 36 m s⁻¹.',
        points: ['36 m s⁻¹ [1]'], num: { v: 36, unit: 'm s⁻¹' }
      },
      {
        label: '(c)', marks: 2, q: 'With the tension unchanged, at what frequency would a stationary wave with four loops form?',
        answer: 'Four loops: λ = 2 × 0.90 / 4 = 0.45 m. The speed is unchanged, so f = 36 / 0.45 = 80 Hz.',
        points: ['λ = 0.45 m with the same speed [1M]', '80 Hz [1A]'], num: { v: 80, unit: 'Hz' }
      },
      {
        label: '(d)', marks: 2, q: 'State two differences between a stationary wave and a progressive wave.',
        answer: 'Any two: a stationary wave does not transfer energy along the string; its amplitude varies from zero (nodes) to a maximum (antinodes), whereas in a progressive wave all particles have the same amplitude; in a stationary wave all particles between two nodes vibrate in phase, whereas in a progressive wave the phase changes continuously along the wave.',
        points: ['First valid difference [1]', 'Second valid difference [1]']
      }
    ],
    zh: {
      sub: '駐波',
      stem: '一條長 0.90 m 的弦線兩端固定。以 60 Hz 的振動器驅動時，形成一個有三個波環的駐波。',
      parts: [
        { q: '求弦線上行波的波長。', answer: '每個波環為 λ/2：3 × λ/2 = 0.90 m ⇒ λ = 0.60 m。', points: ['0.60 m [1]'] },
        { q: '求弦線上波的速率。', answer: 'v = fλ = 60 × 0.60 = 36 m s⁻¹。', points: ['36 m s⁻¹ [1]'] },
        { q: '張力不變，在甚麼頻率下會形成四個波環的駐波？', answer: '四個波環：λ = 2 × 0.90 / 4 = 0.45 m。波速不變，所以 f = 36 / 0.45 = 80 Hz。', points: ['λ = 0.45 m，波速不變 [1M]', '80 Hz [1A]'] },
        { q: '指出駐波與行波的兩項分別。', answer: '任何兩項：駐波不沿弦線轉移能量；駐波的振幅由零（波節）變化至最大（波腹），行波則所有質點振幅相同；駐波兩波節之間所有質點同相振動，行波的相位則沿波連續變化。', points: ['第一項正確分別 [1]', '第二項正確分別 [1]'] }
      ]
    }
  },
  {
    id: 'SW07', topic: 'wave', level: 3, sub: 'Ultrasound',
    stem: 'A ship uses sonar to measure the depth of the sea. It sends pulses of ultrasound of frequency 40 kHz straight down and detects the echoes. (Speed of sound in sea water = 1500 m s⁻¹)',
    parts: [
      {
        label: '(a)', marks: 1, q: 'Why can people not hear the pulses?',
        answer: 'Their frequency (40 kHz) is above the upper limit of human hearing (about 20 kHz).',
        points: ['Frequency above about 20 kHz [1]']
      },
      {
        label: '(b)', marks: 2, q: 'An echo is received 0.80 s after a pulse is sent. Find the depth of the sea.',
        answer: 'The pulse travels down and back: depth = vt / 2 = 1500 × 0.80 / 2 = 600 m.',
        points: ['Uses half the time (or twice the depth) [1M]', '600 m [1A]'], num: { v: 600, unit: 'm' }
      },
      {
        label: '(c)', marks: 1, q: 'Over a shallow region the echo returns after 0.30 s. How deep is the water there?',
        answer: 'Depth = 1500 × 0.30 / 2 = 225 m.',
        points: ['225 m [1]'], num: { v: 225, unit: 'm' }
      },
      {
        label: '(d)', marks: 2, q: 'Find the wavelength of the ultrasound in sea water, and explain why a short wavelength helps to detect small objects such as fish.',
        answer: 'λ = v / f = 1500 / 40 000 = 0.0375 m (3.75 cm). Waves are reflected well (and diffract little) when the object is larger than the wavelength, so short-wavelength ultrasound can detect smaller objects.',
        points: ['λ = 0.0375 m [1]', 'Objects larger than λ reflect the waves well (little diffraction) [1]'], num: { v: 0.0375, unit: 'm' }
      }
    ],
    zh: {
      sub: '超聲波',
      stem: '一艘船利用聲納量度海的深度。它向正下方發出頻率為 40 kHz 的超聲波脈衝，並探測回聲。（聲音在海水中的速率 = 1500 m s⁻¹）',
      parts: [
        { q: '為甚麼人聽不到這些脈衝？', answer: '它們的頻率（40 kHz）高於人類聽覺的上限（約 20 kHz）。', points: ['頻率高於約 20 kHz [1]'] },
        { q: '發出脈衝後 0.80 s 收到回聲。求海的深度。', answer: '脈衝往返一次：深度 = vt / 2 = 1500 × 0.80 / 2 = 600 m。', points: ['用一半時間（或兩倍深度）[1M]', '600 m [1A]'] },
        { q: '在一處淺水區，回聲在 0.30 s 後返回。該處水深多少？', answer: '深度 = 1500 × 0.30 / 2 = 225 m。', points: ['225 m [1]'] },
        { q: '求超聲波在海水中的波長，並解釋為甚麼波長短有助探測細小物體（例如魚）。', answer: 'λ = v / f = 1500 / 40 000 = 0.0375 m（3.75 cm）。當物體比波長大時，波會被有效反射（而且衍射很少），所以短波長的超聲波可探測較小的物體。', points: ['λ = 0.0375 m [1]', '比 λ 大的物體能有效反射波（衍射少）[1]'] }
      ]
    }
  },
  {
    id: 'SW08', topic: 'wave', level: 5, sub: 'Interference',
    stem: 'Two loudspeakers connected to the same signal generator emit sound of frequency 680 Hz in phase. (Speed of sound in air = 340 m s⁻¹)',
    parts: [
      {
        label: '(a)', marks: 1, q: 'Find the wavelength of the sound.',
        answer: 'λ = v / f = 340 / 680 = 0.50 m.',
        points: ['0.50 m [1]'], num: { v: 0.50, unit: 'm' }
      },
      {
        label: '(b)', marks: 2, q: 'Point P is 4.00 m from one speaker and 4.50 m from the other. Is the sound at P loud or quiet? Explain.',
        answer: 'Path difference = 0.50 m = 1λ. The waves arrive in phase, so there is constructive interference: the sound is loud.',
        points: ['Path difference = 0.50 m = λ [1]', 'In phase ⇒ constructive ⇒ loud [1]']
      },
      {
        label: '(c)', marks: 1, q: 'Point Q is 4.25 m from one speaker and 4.50 m from the other. Describe the sound at Q.',
        answer: 'Path difference = 0.25 m = λ/2: the waves arrive in antiphase (destructive interference), so the sound is quiet.',
        points: ['λ/2 path difference ⇒ destructive ⇒ quiet [1]']
      },
      {
        label: '(d)', marks: 2, q: 'Explain why the sound at Q is quiet but not completely silent.',
        answer: 'The two waves arriving at Q have different amplitudes, because Q is at different distances from the speakers (and sound reflected from walls also arrives), so they cannot cancel completely.',
        points: ['The two waves have unequal amplitudes at Q [1]', 'because of different distances / reflections [1]']
      }
    ],
    zh: {
      sub: '干涉',
      stem: '兩個連接到同一訊號產生器的揚聲器同相地發出頻率為 680 Hz 的聲音。（空氣中的聲速 = 340 m s⁻¹）',
      parts: [
        { q: '求聲音的波長。', answer: 'λ = v / f = 340 / 680 = 0.50 m。', points: ['0.50 m [1]'] },
        { q: 'P 點與其中一個揚聲器相距 4.00 m，與另一個相距 4.50 m。P 點的聲音是響還是弱？解釋。', answer: '程差 = 0.50 m = 1λ。兩列波同相到達，發生相長干涉：聲音響亮。', points: ['程差 = 0.50 m = λ [1]', '同相 ⇒ 相長 ⇒ 響亮 [1]'] },
        { q: 'Q 點與其中一個揚聲器相距 4.25 m，與另一個相距 4.50 m。描述 Q 點的聲音。', answer: '程差 = 0.25 m = λ/2：兩列波反相到達（相消干涉），所以聲音微弱。', points: ['程差 λ/2 ⇒ 相消 ⇒ 微弱 [1]'] },
        { q: '解釋為甚麼 Q 點的聲音微弱但並非完全寂靜。', answer: '到達 Q 點的兩列波振幅不同，因為 Q 與兩個揚聲器的距離不同（而且還有牆壁反射的聲音到達），所以不能完全抵消。', points: ['兩列波在 Q 點的振幅不相等 [1]', '因距離不同／反射 [1]'] }
      ]
    }
  }
]);

/* Batch 2: questions with figures and drawing parts (see drawHTML in app.js). */
(function () {
  const { svg, line, arrow, text, dot } = window.draw;
  // Ray diagram drawn to scale: 1 cm = 5 units; lens at x = 190, axis at y = 110, f = 10 cm, object 30 cm away and 6 cm tall.
  const lensBase = line('M10 110 H370', 1.2) + line('M190 40 Q204 110 190 180 Q176 110 190 40 Z', 1.8) + arrow(40, 110, 40, 80, 2.2) +
    [140, 240].map(x => line(`M${x} 105 V115`, 1.5) + text(x, 128, 'F', { size: 12 })).join('') + text(40, 128, 'O', { size: 12 }) +
    line('M40 140 H190', 1, true) + text(115, 152, '30 cm', { size: 12 }) + line('M190 140 H240', 1, true) + text(215, 152, '10 cm', { size: 12 });
  const lensAnswer = line('M40 80 H190 L330 164', 2.2) + line('M40 80 L330 138', 2.2) + arrow(265, 110, 265, 125, 2.5) + text(272, 140, 'I', { size: 13, anchor: 'start' });
  // Semicircular glass block: flat face along y = 90, centre O at (190, 90), radius 90.
  const s30 = Math.sin(Math.PI / 6), c30 = Math.cos(Math.PI / 6), r = Math.asin(1.5 * s30);
  const rnd = v => Math.round(v * 10) / 10;
  const blockBase = line('M100 90 H280 A90 90 0 0 1 100 90 Z') + line('M190 10 V195', 1, true) +
    line(`M${rnd(190 - 115 * s30)} ${rnd(90 + 115 * c30)} L190 90`, 2.2) + arrow(190 - 115 * s30, 90 + 115 * c30, 190 - 85 * s30, 90 + 85 * c30, 2.2) +
    text(178, 140, '30°', { size: 12, anchor: 'end' }) + text(196, 102, 'O', { size: 12, anchor: 'start' }) +
    text(320, 60, 'air', { size: 12 }) + text(234, 120, 'glass', { size: 12 });
  const blockAnswer = line(`M190 90 L${rnd(190 + 100 * Math.sin(r))} ${rnd(90 - 100 * Math.cos(r))}`, 2.4) +
    `<path d="M190 90 L${rnd(190 + 80 * s30)} ${rnd(90 + 80 * c30)}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="6 4"/>` +
    text(212, 52, '49°', { size: 12, anchor: 'start' });
  addStructured([
    {
      id: 'SW09', topic: 'wave', level: 4, sub: 'Lenses',
      stem: 'An object O, 6 cm tall, stands on the principal axis 30 cm from a convex lens of focal length 10 cm. The diagram is drawn to scale; F marks the principal foci.',
      figure: svg(380, 165, 'An object 30 cm from a convex lens of focal length 10 cm, drawn to scale', lensBase),
      parts: [
        {
          label: '(a)', marks: 3, q: 'On the diagram, draw two rays from the top of the object to locate the image, and draw the image.',
          answer: 'Ray 1 leaves the top of the object parallel to the axis and is refracted through the principal focus F on the far side. Ray 2 passes straight through the optical centre. They cross 15 cm behind the lens, 3 cm below the axis: the image is there.',
          points: ['Ray parallel to the axis, refracted through F on the far side [1]', 'Ray through the optical centre, undeviated [1]', 'Image drawn where the rays cross, inverted, about 15 cm from the lens [1]'],
          draw: { w: 380, h: 165, base: lensBase, tools: ['ray', 'line', 'arrow'], aria: 'Ray diagram to complete', snap: [[40, 80], [190, 80], [190, 110], [140, 110], [240, 110]], answer: lensAnswer }
        },
        { label: '(b)', marks: 1, q: 'State the nature of the image.', answer: 'Real, inverted and diminished.', points: ['Real, inverted and diminished (all three) [1]'] },
        {
          label: '(c)', marks: 2, q: 'Use the lens formula to find the image distance.',
          answer: '1/u + 1/v = 1/f ⇒ 1/30 + 1/v = 1/10 ⇒ 1/v = 1/15 ⇒ v = 15 cm.',
          points: ['1/u + 1/v = 1/f with u = 30 cm, f = 10 cm [1M]', 'v = 15 cm [1A]'], num: { v: 15, unit: 'cm' }
        },
        { label: '(d)', marks: 1, q: 'Find the height of the image.', answer: 'Magnification m = v/u = 15/30 = 0.5, so the image is 0.5 × 6 = 3 cm tall.', points: ['3 cm [1]'], num: { v: 3, unit: 'cm' } }
      ],
      zh: {
        sub: '透鏡',
        stem: '一個高 6 cm 的物體 O 豎立在主軸上，與一塊焦距為 10 cm 的凸透鏡相距 30 cm。圖按比例繪畫；F 標示主焦點。',
        parts: [
          { q: '在圖上從物體頂端畫出兩條光線以確定像的位置，並畫出像。', answer: '光線 1 從物體頂端平行於主軸射出，折射後通過另一邊的主焦點 F。光線 2 直線通過光心。兩線在透鏡後 15 cm、主軸下 3 cm 處相交：像就在那裏。', points: ['平行於主軸的光線折射後通過另一邊的 F [1]', '通過光心的光線不偏折 [1]', '在兩線相交處畫出倒立的像，離透鏡約 15 cm [1]'] },
          { q: '指出像的性質。', answer: '實像、倒立、縮小。', points: ['實像、倒立、縮小（三項都要）[1]'] },
          { q: '利用透鏡公式求像距。', answer: '1/u + 1/v = 1/f ⇒ 1/30 + 1/v = 1/10 ⇒ 1/v = 1/15 ⇒ v = 15 cm。', points: ['1/u + 1/v = 1/f，其中 u = 30 cm、f = 10 cm [1M]', 'v = 15 cm [1A]'] },
          { q: '求像的高度。', answer: '放大率 m = v/u = 15/30 = 0.5，所以像高 0.5 × 6 = 3 cm。', points: ['3 cm [1]'] }
        ]
      }
    },
    {
      id: 'SW10', topic: 'wave', level: 4, sub: 'Total internal reflection',
      stem: 'A ray of light travels along a radius of a semicircular glass block of refractive index 1.50 and meets the flat face at its centre O. The angle of incidence at O is 30°.',
      figure: svg(380, 200, 'A ray inside a semicircular glass block meets the flat face at the centre O at 30 degrees to the normal', blockBase),
      parts: [
        {
          label: '(a)', marks: 2, q: 'Find the critical angle of the glass.',
          answer: 'sin C = 1 / n = 1 / 1.50 ⇒ C = 41.8°.', points: ['sin C = 1/n [1M]', '41.8° [1A]'], num: { v: 41.81, unit: '°' }
        },
        {
          label: '(b)', marks: 3, q: 'On the diagram, complete the path of the light after it reaches O.',
          answer: '30° is less than the critical angle, so most of the light is refracted out into the air, bending away from the normal: sin r = 1.50 × sin 30° = 0.75, so r = 49°. A weak reflected ray also returns into the glass at 30° on the other side of the normal, leaving along a radius.',
          points: ['Refracted ray into the air, bending away from the normal [1]', 'Angle of refraction about 49° [1]', 'Weak partially reflected ray at 30° inside the glass [1]'],
          draw: { w: 380, h: 200, base: blockBase, tools: ['ray', 'line', 'arrow'], aria: 'Semicircular block for completing the ray', snap: [[190, 90]], answer: blockAnswer }
        },
        {
          label: '(c)', marks: 2, q: 'The ray is moved so that the angle of incidence at O becomes 50°. Describe and explain what happens to the light at O.',
          answer: '50° is greater than the critical angle (41.8°) and the light is going from glass (optically denser) towards air, so no light is refracted out: it is totally internally reflected at 50°.',
          points: ['Total internal reflection occurs [1]', 'Because 50° > critical angle, going from the denser medium [1]']
        }
      ],
      zh: {
        sub: '全內反射',
        stem: '一道光線沿一塊折射率為 1.50 的半圓形玻璃塊的半徑傳播，射到平面的中心 O。在 O 處的入射角是 30°。',
        parts: [
          { q: '求玻璃的臨界角。', answer: 'sin C = 1 / n = 1 / 1.50 ⇒ C = 41.8°。', points: ['sin C = 1/n [1M]', '41.8° [1A]'] },
          { q: '在圖上完成光線到達 O 後的路徑。', answer: '30° 小於臨界角，所以大部分光折射進入空氣，偏離法線：sin r = 1.50 × sin 30° = 0.75，所以 r = 49°。另有一道較弱的反射光以 30° 在法線另一邊返回玻璃，沿半徑射出。', points: ['折射光進入空氣，偏離法線 [1]', '折射角約 49° [1]', '在玻璃內以 30° 反射的較弱光線 [1]'] },
          { q: '移動光線，使在 O 處的入射角變為 50°。描述並解釋光在 O 處的情況。', answer: '50° 大於臨界角（41.8°），而且光由玻璃（光密介質）射向空氣，所以沒有光折射出去：光在 O 處以 50° 全內反射。', points: ['發生全內反射 [1]', '因為 50° > 臨界角，且由光密介質射出 [1]'] }
        ]
      }
    }
  ]);
})();

/* Batch 3: an experiment question (kind: 'exp') and questions with drawing parts. */
(function () {
  const { svg, line, box, arrow, text, dot, range } = window.draw;
  const cross = (f, x, y) => `<path d="M${f.X(x) - 5} ${f.Y(y) - 5} l10 10 m0 -10 l-10 10" stroke="currentColor" stroke-width="2"/>`;
  const eye = (x, y) => line(`M${x - 12} ${y} Q${x} ${y - 9} ${x + 12} ${y} Q${x} ${y + 9} ${x - 12} ${y}`, 1.5) + dot(x, y, 3);
  // Plane mirror on x = 200; object O at (120, 60); eye at (100, 150). Image I at (280, 60); the ray reflects at M (200, 100).
  const mirrorBase = line('M60 20 H340 M60 40 H340 M60 60 H340 M60 80 H340 M60 100 H340 M60 120 H340 M60 140 H340 M60 160 H340 M60 180 H340 ' +
      'M60 20 V180 M80 20 V180 M100 20 V180 M120 20 V180 M140 20 V180 M160 20 V180 M180 20 V180 M220 20 V180 M240 20 V180 M260 20 V180 M280 20 V180 M300 20 V180 M320 20 V180 M340 20 V180', 0.5, true) +
    line('M200 15 V185', 3.5) + line(range(22, 182, 10).map(y => `M200 ${y} l8 -7`).join(' '), 1) + dot(120, 60, 5) + text(112, 52, 'O', { anchor: 'end' }) + eye(100, 150);
  const mirrorAnswer = line('M120 60 H280', 1.2, true) + dot(280, 60, 5) + text(288, 56, 'I', { anchor: 'start' }) + line('M200 100 L280 60', 1.5, true) +
    arrow(120, 60, 160, 80, 2.2) + line('M160 80 L200 100', 2.2) + arrow(200, 100, 150, 125, 2.2) + line('M150 125 L112 144', 2.2);
  // Refractive index: n = 1.50
  const iv = [20, 30, 40, 50, 60], rv = iv.map(i => Math.asin(Math.sin(i * Math.PI / 180) / 1.5) * 180 / Math.PI);
  const sn = graphFrame({
    aria: 'Empty grid for plotting sin i against sin r', w: 400, h: 240,
    x: { max: 0.68, label: 'sin r', ticks: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6].map(v => [v, v.toFixed(1)]) },
    y: { max: 1.0, label: 'sin i', ticks: [0.2, 0.4, 0.6, 0.8, 1.0].map(v => [v, v.toFixed(1)]) },
    grid: { x: [0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65], y: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0] }
  });
  const snAnswer = iv.map(i => { const s = Math.sin(i * Math.PI / 180); return cross(sn, s / 1.5, s); }).join('') + sn.path([[0, 0], [0.65, 0.975]]);
  // Concave lens: 1 cm = 5 units; lens at x = 220, f = 15 cm; object 30 cm away and 6 cm tall; image 10 cm from the lens, 2 cm tall.
  const concBase = line('M10 110 H380', 1.2) + line('M211 45 H229 Q222 110 229 175 H211 Q218 110 211 45 Z', 1.8) + arrow(70, 110, 70, 80, 2.2) + text(70, 128, 'O', { size: 12 }) +
    [145, 295].map(x => line(`M${x} 105 V115`, 1.5) + text(x, 128, 'F', { size: 12 })).join('') +
    line('M70 145 H220', 1, true) + text(145, 158, '30 cm', { size: 12 }) + line('M220 160 H295', 1, true) + text(258, 172, '15 cm', { size: 12 });
  const concAnswer = line('M70 80 H220 L360 24', 2.2) + line('M220 80 L145 110', 1.4, true) + line('M70 80 L360 138', 2.2) + arrow(170, 110, 170, 100, 2.5) + text(164, 96, 'I', { size: 13, anchor: 'end' });
  addStructured([
    {
      id: 'SW11', topic: 'wave', level: 3, sub: 'Plane mirrors',
      stem: 'An object O is in front of a vertical plane mirror, drawn on a grid of 1 cm squares. An eye looks into the mirror.',
      parts: [
        {
          label: '(a)', marks: 3, q: 'On the diagram, mark the position of the image I of O, and draw a ray from O that reflects off the mirror into the eye.',
          answer: 'I is 4 squares behind the mirror, level with O (as far behind the mirror as O is in front). Join I to the eye: the line crosses the mirror at the point where the ray reflects. The ray goes from O to that point, then to the eye.',
          points: ['Image as far behind the mirror as O is in front, on the normal through O [1]', 'Reflected ray drawn along the line from I to the eye [1]', 'Incident ray from O to the same point on the mirror, with arrows [1]'],
          draw: { w: 380, h: 200, base: mirrorBase, tools: ['line', 'arrow'], aria: 'Grid with a plane mirror, an object and an eye', snap: [[120, 60], [100, 150], [280, 60], [200, 100]], answer: mirrorAnswer }
        },
        { label: '(b)', marks: 1, q: 'State two properties of the image.', answer: 'Any two: virtual; upright; the same size as the object; laterally inverted; as far behind the mirror as the object is in front.', points: ['Any two correct properties [1]'] },
        {
          label: '(c)', marks: 2, q: 'A boy walks towards the mirror at 0.50 m s⁻¹. At what speed does his image approach him?',
          answer: 'The image moves towards the mirror at 0.50 m s⁻¹ too, in the opposite direction, so the image approaches the boy at 0.50 + 0.50 = 1.0 m s⁻¹.',
          points: ['Image also moves at 0.50 m s⁻¹ towards the mirror [1M]', '1.0 m s⁻¹ [1A]'], num: { v: 1.0, unit: 'm s⁻¹' }
        }
      ],
      zh: {
        sub: '平面鏡',
        stem: '一個物體 O 放在豎直平面鏡前，畫在 1 cm 方格紙上。一隻眼睛望向鏡子。',
        parts: [
          { q: '在圖上標出 O 的像 I 的位置，並畫出一條由 O 發出、經鏡子反射後進入眼睛的光線。', answer: 'I 在鏡後 4 格，與 O 同一水平（像與鏡的距離等於物與鏡的距離）。把 I 與眼睛連起：該線與鏡子相交處就是光線的反射點。光線由 O 射到該點，再射入眼睛。', points: ['像在鏡後的距離等於 O 在鏡前的距離，在通過 O 的法線上 [1]', '反射光線沿 I 至眼睛的直線畫出 [1]', '入射光線由 O 射到鏡上同一點，並標示箭號 [1]'] },
          { q: '指出像的兩個特性。', answer: '任何兩項：虛像；正立；與物體大小相同；左右倒置；像與鏡的距離等於物與鏡的距離。', points: ['任何兩項正確的特性 [1]'] },
          { q: '一名男孩以 0.50 m s⁻¹ 走向鏡子。他的像以多快的速率接近他？', answer: '像亦以 0.50 m s⁻¹ 向鏡子移動，方向相反，所以像以 0.50 + 0.50 = 1.0 m s⁻¹ 接近男孩。', points: ['像亦以 0.50 m s⁻¹ 移向鏡子 [1M]', '1.0 m s⁻¹ [1A]'] }
        ]
      }
    },
    {
      id: 'SW12', topic: 'wave', level: 4, kind: 'exp', sub: 'Experiment: refractive index',
      stem: 'You are given a rectangular glass block, a ray box that gives a narrow ray of light, a protractor, a sharp pencil and a sheet of white paper. You are asked to find the refractive index of the glass.',
      figure: svg(380, 200, 'A ray box shines a narrow ray into a rectangular glass block on white paper; a normal is drawn at the point where the ray enters',
        '<rect x="130" y="80" width="170" height="90" fill="currentColor" fill-opacity="0.1"/>' + box(130, 80, 170, 90, 1.8) + box(30, 10, 50, 30, 1.8) +
        line('M80 30 L170 80', 2) + line('M170 40 V190', 1, true) + line('M170 80 L200 170', 1.5, true) + text(160, 62, 'i', { size: 13, anchor: 'end' }) + text(186, 112, 'r', { size: 13, anchor: 'start' }) +
        text(55, 56, 'ray box', { size: 11 }) + text(255, 130, 'glass', { size: 12 })),
      parts: [
        {
          label: '(a)', marks: 3, q: 'Describe how you would find one pair of values of the angle of incidence i and the angle of refraction r, and how you would complete the experiment.',
          answer: 'Draw round the block on the paper. Draw a normal where the ray enters and shine the ray at the point of entry at a measured angle i. Mark the emergent ray with two crosses far apart, remove the block and join the point of exit to the point of entry: this is the refracted ray. Measure r with the protractor. Repeat for several values of i (e.g. 20° to 60°).',
          points: ['Outline of the block and the normal at the point of incidence drawn [1]', 'Refracted ray found by marking the emergent ray and joining the points of entry and exit [1]', 'i and r measured with the protractor for several values of i [1]']
        },
        {
          label: '(b)', marks: 1, q: 'Which graph would you plot to find the refractive index, and how?',
          answer: 'Plot sin i against sin r. It is a straight line through the origin, and its gradient is the refractive index n (Snell\'s law, sin i = n sin r).',
          points: ['sin i against sin r; gradient = n [1]']
        },
        {
          label: '(c)', marks: 3, q: 'These results were obtained:<br><table class="dtable"><tr><th>i / °</th>' + iv.map(i => `<td>${i}</td>`).join('') + '</tr><tr><th>r / °</th>' + rv.map(r => `<td>${r.toFixed(1)}</td>`).join('') + '</tr></table>Calculate sin i and sin r, then plot sin i against sin r and draw the best-fit line.',
          answer: 'sin i = 0.342, 0.500, 0.643, 0.766, 0.866; sin r = 0.228, 0.333, 0.428, 0.511, 0.577. The points lie on a straight line through the origin.',
          points: ['sin i and sin r calculated correctly [1]', 'Points plotted correctly [1]', 'Straight best-fit line through the origin [1]'],
          draw: { w: sn.w, h: sn.h, base: sn.base, tools: ['line', 'pen'], aria: 'Grid for plotting sin i against sin r', answer: snAnswer }
        },
        {
          label: '(d)', marks: 2, q: 'Use the gradient of your graph to find the refractive index of the glass.',
          answer: 'Gradient = 0.975 / 0.65 = 1.50, so n = 1.50.', points: ['n = gradient [1M]', '1.50 (1.45 to 1.55) [1A]'], num: { v: 1.5, unit: '', tol: 0.034 }
        },
        {
          label: '(e)', marks: 1, q: 'State one precaution that would improve the accuracy of the result.',
          answer: 'For example: use a narrow ray and mark points far apart along it; use large angles of incidence so that the angles are measured with a smaller percentage error.',
          points: ['A valid precaution, e.g. narrow ray / marks far apart / large angles [1]']
        }
      ],
      zh: {
        sub: '實驗：折射率',
        stem: '你獲提供一塊長方形玻璃塊、一個能發出窄光線的光箱、一個量角器、一枝尖鉛筆和一張白紙。你需要求玻璃的折射率。',
        parts: [
          { q: '描述你會怎樣求得一組入射角 i 和折射角 r 的數值，以及怎樣完成實驗。', answer: '在紙上沿玻璃塊畫出輪廓。在光線射入處畫一條法線，並以量度好的入射角 i 把光線射向入射點。在射出的光線上標記兩個相距較遠的交叉，移走玻璃塊，把出射點與入射點連起：這就是折射光線。用量角器量度 r。用數個不同的 i（例如 20° 至 60°）重複實驗。', points: ['畫出玻璃塊輪廓及入射點的法線 [1]', '標記出射光線並連接入射點和出射點，以找出折射光線 [1]', '用量角器為數個不同的 i 量度 i 和 r [1]'] },
          { q: '你會描繪哪個線圖來求折射率？怎樣求？', answer: '描繪 sin i 對 sin r 的關係。它是一條通過原點的直線，斜率就是折射率 n（斯涅爾定律，sin i = n sin r）。', points: ['sin i 對 sin r；斜率 = n [1]'] },
          { q: '得到以下結果：<br><table class="dtable"><tr><th>i / °</th>' + iv.map(i => `<td>${i}</td>`).join('') + '</tr><tr><th>r / °</th>' + rv.map(r => `<td>${r.toFixed(1)}</td>`).join('') + '</tr></table>計算 sin i 和 sin r，然後描繪 sin i 對 sin r 的關係並畫出最佳擬合線。', answer: 'sin i = 0.342、0.500、0.643、0.766、0.866；sin r = 0.228、0.333、0.428、0.511、0.577。各點在一條通過原點的直線上。', points: ['sin i 和 sin r 計算正確 [1]', '各點描繪正確 [1]', '通過原點的最佳擬合直線 [1]'] },
          { q: '利用線圖的斜率求玻璃的折射率。', answer: '斜率 = 0.975 / 0.65 = 1.50，所以 n = 1.50。', points: ['n = 斜率 [1M]', '1.50（1.45 至 1.55）[1A]'] },
          { q: '指出一項可提高結果準確度的預防措施。', answer: '例如：使用窄光線，並在光線上相距較遠處標記；使用較大的入射角，使量度角度的百分誤差較小。', points: ['合理的預防措施，例如窄光線／標記相距較遠／使用較大的角度 [1]'] }
        ]
      }
    },
    {
      id: 'SW13', topic: 'wave', level: 4, sub: 'Lenses',
      stem: 'An object O, 6 cm tall, stands on the principal axis 30 cm from a concave (diverging) lens of focal length 15 cm. The diagram is drawn to scale; F marks the principal foci.',
      parts: [
        {
          label: '(a)', marks: 3, q: 'On the diagram, draw two rays from the top of the object to locate the image, and draw the image.',
          answer: 'Ray 1 leaves the top of O parallel to the axis and is refracted away from the axis, as if it came from F on the object side (dashed back-extension). Ray 2 passes straight through the optical centre. The back-extension of ray 1 meets ray 2 at the top of the image, 10 cm from the lens on the object side, 2 cm tall and upright.',
          points: ['Ray parallel to the axis diverges as if from F on the object side, with a dashed extension [1]', 'Ray through the optical centre, undeviated [1]', 'Upright virtual image where the extension meets the second ray [1]'],
          draw: { w: 380, h: 180, base: concBase, tools: ['ray', 'line', 'arrow'], aria: 'Ray diagram for a concave lens to complete', snap: [[70, 80], [220, 80], [220, 110], [145, 110], [295, 110]], answer: concAnswer }
        },
        { label: '(b)', marks: 1, q: 'State the nature of the image.', answer: 'Virtual, upright and diminished.', points: ['Virtual, upright and diminished (all three) [1]'] },
        {
          label: '(c)', marks: 2, q: 'Use the lens formula to find the image distance.',
          answer: 'With f = −15 cm for a diverging lens: 1/30 + 1/v = −1/15 ⇒ 1/v = −1/10 ⇒ v = −10 cm. The image is 10 cm from the lens, on the same side as the object.',
          points: ['1/u + 1/v = 1/f with f negative [1M]', '10 cm, on the same side as the object [1A]'], num: { v: 10, unit: 'cm' }
        },
        { label: '(d)', marks: 1, q: 'Give one use of a concave lens.', answer: 'For example: spectacles to correct short sight; a door viewer (peephole).', points: ['A correct use, e.g. correcting short sight [1]'] }
      ],
      zh: {
        sub: '透鏡',
        stem: '一個高 6 cm 的物體 O 豎立在主軸上，與一塊焦距為 15 cm 的凹透鏡（發散透鏡）相距 30 cm。圖按比例繪畫；F 標示主焦點。',
        parts: [
          { q: '在圖上從物體頂端畫出兩條光線以確定像的位置，並畫出像。', answer: '光線 1 從 O 的頂端平行於主軸射出，折射後偏離主軸，好像從物體那邊的 F 射出（以虛線向後延長）。光線 2 直線通過光心。光線 1 的反向延長線與光線 2 相交於像的頂端：像在物體那邊離透鏡 10 cm 處，高 2 cm，正立。', points: ['平行於主軸的光線折射後發散，好像從物體那邊的 F 射出，並畫出虛線延長線 [1]', '通過光心的光線不偏折 [1]', '在延長線與第二條光線相交處畫出正立的虛像 [1]'] },
          { q: '指出像的性質。', answer: '虛像、正立、縮小。', points: ['虛像、正立、縮小（三項都要）[1]'] },
          { q: '利用透鏡公式求像距。', answer: '發散透鏡的 f = −15 cm：1/30 + 1/v = −1/15 ⇒ 1/v = −1/10 ⇒ v = −10 cm。像在物體那邊，離透鏡 10 cm。', points: ['1/u + 1/v = 1/f，f 取負值 [1M]', '10 cm，在物體那邊 [1A]'] },
          { q: '舉出凹透鏡的一項用途。', answer: '例如：矯正近視的眼鏡；防盜眼（門鏡）。', points: ['正確的用途，例如矯正近視 [1]'] }
        ]
      }
    }
  ]);
})();
