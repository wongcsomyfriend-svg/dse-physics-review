/*
 * HKDSE Physics — Paper 1 Section A style question bank (compulsory part).
 * All questions are original, written in the HKDSE MC format.
 *
 * To add a question, append an object to QUESTIONS:
 *   id          unique string, e.g. "M11"
 *   topic       one of the TOPICS ids below
 *   sub         sub-topic label shown on the card
 *   stem        question text (simple HTML allowed)
 *   statements  optional array for "(1) (2) (3)" style questions
 *   figure      optional inline SVG string (use currentColor so it works in dark mode)
 *   options     exactly four options, in the order A, B, C, D
 *   answer      index of the correct option (0 = A, 1 = B, 2 = C, 3 = D)
 *   explain     worked solution shown after answering
 */

window.TOPICS = [
  { id: 'heat',  name: 'Heat and Gases',                     zh: '熱和氣體',     mock: 5 },
  { id: 'force', name: 'Force and Motion',                   zh: '力和運動',     mock: 9 },
  { id: 'wave',  name: 'Wave Motion',                        zh: '波動',         mock: 8 },
  { id: 'elec',  name: 'Electricity and Magnetism',          zh: '電和磁',       mock: 8 },
  { id: 'nuc',   name: 'Radioactivity and Nuclear Energy',   zh: '放射現象和核能', mock: 3 }
];

const STMT_OPTS = ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'];

window.QUESTIONS = [
  /* ---------------- Heat and Gases ---------------- */
  {
    id: 'H1', topic: 'heat', sub: 'Specific heat capacity',
    stem: 'A metal block of mass 0.5 kg at 100 °C is put into 0.2 kg of water at 20 °C. The final temperature of the mixture is 30 °C. Find the specific heat capacity of the metal. Neglect heat loss to the surroundings and the container.<br>(Specific heat capacity of water = 4200 J kg⁻¹ °C⁻¹)',
    options: ['120 J kg⁻¹ °C⁻¹', '168 J kg⁻¹ °C⁻¹', '240 J kg⁻¹ °C⁻¹', '480 J kg⁻¹ °C⁻¹'],
    answer: 2,
    explain: 'Energy gained by water = 0.2 × 4200 × (30 − 20) = 8400 J.<br>Energy lost by metal = 0.5 × c × (100 − 30) = 35c.<br>35c = 8400 ⇒ c = 240 J kg⁻¹ °C⁻¹.'
  },
  {
    id: 'H2', topic: 'heat', sub: 'Latent heat',
    stem: 'A 1 kW immersion heater is used to melt 0.5 kg of ice at 0 °C. Assume all the energy supplied is absorbed by the ice. How long does it take to melt all the ice?<br>(Specific latent heat of fusion of ice = 3.34 × 10⁵ J kg⁻¹)',
    options: ['83.5 s', '167 s', '334 s', '668 s'],
    answer: 1,
    explain: 'Energy needed = mℓ = 0.5 × 3.34 × 10⁵ = 1.67 × 10⁵ J.<br>t = E / P = 1.67 × 10⁵ / 1000 = 167 s.'
  },
  {
    id: 'H3', topic: 'heat', sub: 'Evaporation',
    stem: 'Which of the following statements about evaporation is/are correct?',
    statements: [
      'Evaporation takes place only at the boiling point of the liquid.',
      'Evaporation takes place only at the surface of the liquid.',
      'Evaporation causes the remaining liquid to cool down.'
    ],
    options: STMT_OPTS,
    answer: 3,
    explain: '(1) ✗ Evaporation occurs at any temperature.<br>(2) ✓ Only surface molecules with enough kinetic energy can escape.<br>(3) ✓ The faster molecules escape, so the average kinetic energy (temperature) of the remaining liquid drops.'
  },
  {
    id: 'H4', topic: 'heat', sub: 'Gas laws',
    stem: 'A fixed mass of ideal gas is sealed in a rigid container at 27 °C and its pressure is 1.2 × 10⁵ Pa. The gas is heated to 127 °C. What is the new pressure of the gas?',
    options: ['0.9 × 10⁵ Pa', '1.2 × 10⁵ Pa', '1.6 × 10⁵ Pa', '5.6 × 10⁵ Pa'],
    answer: 2,
    explain: 'At constant volume, p / T = constant (T in kelvin).<br>p₂ = 1.2 × 10⁵ × (127 + 273) / (27 + 273) = 1.2 × 10⁵ × 400 / 300 = 1.6 × 10⁵ Pa.<br>Option D comes from wrongly using °C.'
  },
  {
    id: 'H5', topic: 'heat', sub: 'Kinetic theory',
    stem: 'The absolute temperature of a fixed mass of ideal gas is doubled. The r.m.s. speed of the gas molecules becomes',
    options: ['unchanged.', '√2 times the original value.', '2 times the original value.', '4 times the original value.'],
    answer: 1,
    explain: '½ m c̄² = (3/2) kT, so c_rms ∝ √T.<br>Doubling T multiplies c_rms by √2.'
  },
  {
    id: 'H6', topic: 'heat', sub: 'Kinetic theory',
    stem: 'A container holds a mixture of helium gas and oxygen gas at the same temperature. Which of the following statements is/are correct?',
    statements: [
      'The average kinetic energy of a helium molecule equals that of an oxygen molecule.',
      'The r.m.s. speed of the helium molecules is greater than that of the oxygen molecules.',
      'The pressure exerted by the helium gas equals that exerted by the oxygen gas.'
    ],
    options: ['(1) only', '(2) only', '(1) and (2) only', '(1), (2) and (3)'],
    answer: 2,
    explain: '(1) ✓ Average KE = (3/2) kT depends on temperature only.<br>(2) ✓ Same KE but helium molecules have smaller mass, so higher r.m.s. speed.<br>(3) ✗ Partial pressure depends on the number of moles of each gas, which is not given.'
  },
  {
    id: 'H7', topic: 'heat', sub: 'Ideal gas equation',
    stem: 'What is the volume occupied by 0.5 mol of an ideal gas at a pressure of 1.0 × 10⁵ Pa and a temperature of 300 K?<br>(Universal gas constant R = 8.31 J mol⁻¹ K⁻¹)',
    options: ['6.23 × 10⁻³ m³', '1.25 × 10⁻² m³', '2.49 × 10⁻² m³', '1.25 × 10⁻¹ m³'],
    answer: 1,
    explain: 'pV = nRT ⇒ V = nRT / p = 0.5 × 8.31 × 300 / (1.0 × 10⁵) = 1.25 × 10⁻² m³.'
  },
  {
    id: 'H8', topic: 'heat', sub: 'Heat transfer',
    stem: 'Which of the following features of a vacuum flask mainly reduce(s) heat transfer by radiation?',
    statements: [
      'The silvered surfaces of the double walls',
      'The vacuum between the double walls',
      'The plastic stopper'
    ],
    options: ['(1) only', '(2) only', '(1) and (2) only', '(2) and (3) only'],
    answer: 0,
    explain: '(1) ✓ Shiny silvered surfaces are poor emitters and good reflectors of radiation.<br>(2) ✗ The vacuum prevents conduction and convection, but radiation can travel through a vacuum.<br>(3) ✗ The stopper reduces conduction and convection.'
  },
  {
    id: 'H9', topic: 'heat', sub: 'Heating curve',
    stem: 'A solid is heated by a heater of constant power. Before melting, its temperature rises at 4 °C per minute. After it has completely melted, the temperature of the liquid rises at 2 °C per minute. Assuming no heat loss, find the ratio of specific heat capacity of the liquid to that of the solid.',
    options: ['1 : 4', '1 : 2', '2 : 1', '4 : 1'],
    answer: 2,
    explain: 'P = mc (ΔT / Δt). With the same P and m, c ∝ 1 / (rate of temperature rise).<br>c_liquid : c_solid = (1/2) : (1/4) = 2 : 1.'
  },

  /* ---------------- Force and Motion ---------------- */
  {
    id: 'M1', topic: 'force', sub: 'Kinematics',
    stem: 'A car travelling at 20 m s⁻¹ decelerates uniformly and stops after travelling 100 m. How long does it take to stop?',
    options: ['2.5 s', '5.0 s', '7.5 s', '10 s'],
    answer: 3,
    explain: 's = ½ (u + v) t ⇒ 100 = ½ (20 + 0) t ⇒ t = 10 s.'
  },
  {
    id: 'M2', topic: 'force', sub: 'Motion under gravity',
    stem: 'A ball is thrown vertically upwards. Neglecting air resistance, which of the following is/are correct when the ball is at its highest point?',
    statements: [
      'The velocity of the ball is zero.',
      'The acceleration of the ball is zero.',
      'The net force acting on the ball is zero.'
    ],
    options: ['(1) only', '(2) only', '(1) and (2) only', '(1), (2) and (3)'],
    answer: 0,
    explain: 'At the highest point the velocity is momentarily zero, but the weight still acts, so the net force = mg and the acceleration = g (downwards).'
  },
  {
    id: 'M3', topic: 'force', sub: "Newton's laws",
    stem: 'A man of mass 60 kg stands on a weighing scale inside a lift. The lift accelerates downwards at 2 m s⁻². What is the reading of the scale?<br>(g = 9.81 m s⁻²)',
    options: ['120 N', '469 N', '589 N', '709 N'],
    answer: 1,
    explain: 'Taking downwards as positive: mg − R = ma ⇒ R = m(g − a) = 60 × (9.81 − 2) = 469 N.'
  },
  {
    id: 'M4', topic: 'force', sub: 'Projectile motion',
    stem: 'A stone is thrown horizontally at 15 m s⁻¹ from the top of a cliff 20 m high. Neglecting air resistance, how far from the foot of the cliff does the stone land?<br>(g = 9.81 m s⁻²)',
    options: ['15.0 m', '20.0 m', '30.3 m', '60.6 m'],
    answer: 2,
    explain: 'Vertical: 20 = ½ (9.81) t² ⇒ t = 2.02 s.<br>Horizontal: x = 15 × 2.02 = 30.3 m.'
  },
  {
    id: 'M5', topic: 'force', sub: 'Momentum',
    stem: 'A trolley of mass 2 kg moving at 3 m s⁻¹ collides with a stationary trolley of mass 1 kg. They stick together after the collision. What is the loss of kinetic energy in the collision?',
    options: ['0 J', '3 J', '6 J', '9 J'],
    answer: 1,
    explain: 'Momentum conserved: 2 × 3 = 3v ⇒ v = 2 m s⁻¹.<br>KE before = ½ × 2 × 3² = 9 J; KE after = ½ × 3 × 2² = 6 J.<br>Loss = 3 J.'
  },
  {
    id: 'M6', topic: 'force', sub: 'Circular motion',
    stem: 'A car moves at constant speed around a horizontal circular track. Which of the following statements is/are correct?',
    statements: [
      'The acceleration of the car points towards the centre of the circle.',
      'The net force acting on the car is zero.',
      'Friction between the tyres and the road provides the centripetal force.'
    ],
    options: ['(1) only', '(2) only', '(1) and (3) only', '(2) and (3) only'],
    answer: 2,
    explain: '(1) ✓ Uniform circular motion has centripetal acceleration v²/r.<br>(2) ✗ The velocity keeps changing direction, so there is a net (centripetal) force.<br>(3) ✓ On a flat road, friction supplies the centripetal force.'
  },
  {
    id: 'M7', topic: 'force', sub: 'Gravitation',
    stem: 'A satellite moves in a circular orbit of radius r around the Earth with period T. What would be the period of a satellite in a circular orbit of radius 4r?',
    options: ['2T', '4T', '8T', '16T'],
    answer: 2,
    explain: 'GMm / r² = m(2π/T)² r ⇒ T² ∝ r³.<br>T′ = T × 4^(3/2) = 8T.'
  },
  {
    id: 'M8', topic: 'force', sub: 'Work, energy and power',
    stem: 'A motor lifts a load of mass 50 kg vertically at a constant speed of 0.4 m s⁻¹. What is the useful output power of the motor?<br>(g = 9.81 m s⁻²)',
    options: ['20 W', '49 W', '98 W', '196 W'],
    answer: 3,
    explain: 'At constant speed, lifting force = mg.<br>P = Fv = 50 × 9.81 × 0.4 = 196 W.'
  },
  {
    id: 'M9', topic: 'force', sub: 'Moments',
    stem: 'A uniform plank AB of length 4 m and weight 200 N rests horizontally on two supports at its ends. A boy of weight 500 N stands 1 m from end A as shown. What is the force exerted by the support at A on the plank?',
    figure: '<svg viewBox="0 0 360 130" role="img" aria-label="Plank AB on two supports, boy 1 m from A"><g fill="none" stroke="currentColor" stroke-width="2"><rect x="30" y="60" width="300" height="10"/><path d="M30 70 l-12 24 h24 z"/><path d="M330 70 l-12 24 h24 z"/><path d="M105 20 v36"/><path d="M99 48 l6 10 l6 -10"/><path d="M30 112 h300" stroke-width="1"/><path d="M30 106 v12 M105 106 v12 M330 106 v12" stroke-width="1"/></g><g fill="currentColor" font-size="13" font-family="inherit" text-anchor="middle"><text x="20" y="56">A</text><text x="342" y="56">B</text><text x="105" y="14">500 N</text><text x="67" y="126">1 m</text><text x="217" y="126">3 m</text></g></svg>',
    options: ['225 N', '350 N', '475 N', '525 N'],
    answer: 2,
    explain: 'Take moments about B:<br>F_A × 4 = 200 × 2 + 500 × 3 = 1900 ⇒ F_A = 475 N.<br>(Then F_B = 700 − 475 = 225 N — option A is the force at B.)'
  },
  {
    id: 'M10', topic: 'force', sub: 'Friction / energy',
    stem: 'A block slides down a rough inclined plane at constant velocity. Which of the following statements is/are correct?',
    statements: [
      'The net force acting on the block is zero.',
      'The friction acting on the block equals the component of its weight along the plane.',
      'The mechanical energy of the block is conserved.'
    ],
    options: STMT_OPTS,
    answer: 2,
    explain: '(1) ✓ Constant velocity ⇒ zero acceleration ⇒ zero net force.<br>(2) ✓ Along the plane: mg sin θ − f = 0.<br>(3) ✗ PE decreases while KE stays constant; the energy is converted to internal energy by friction.'
  },

  /* ---------------- Wave Motion ---------------- */
  {
    id: 'W1', topic: 'wave', sub: 'Wave equation',
    stem: 'A water wave has a frequency of 50 Hz. The distance between two adjacent crests is 0.4 m. What is the speed of the wave?',
    options: ['0.008 m s⁻¹', '12.5 m s⁻¹', '20 m s⁻¹', '125 m s⁻¹'],
    answer: 2,
    explain: 'λ = 0.4 m (adjacent crests).<br>v = fλ = 50 × 0.4 = 20 m s⁻¹.'
  },
  {
    id: 'W2', topic: 'wave', sub: 'Nature of waves',
    stem: 'Which of the following is/are longitudinal wave(s)?',
    statements: ['Sound waves in air', 'Light waves', 'Microwaves'],
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: 0,
    explain: 'Sound in air is longitudinal. Light and microwaves are electromagnetic waves, which are transverse.'
  },
  {
    id: 'W3', topic: 'wave', sub: 'Total internal reflection',
    stem: 'The refractive index of a type of glass is 1.5. What is the critical angle for light travelling from this glass to air?',
    options: ['33.7°', '41.8°', '48.2°', '56.3°'],
    answer: 1,
    explain: 'sin C = 1 / n = 1 / 1.5 ⇒ C = 41.8°.'
  },
  {
    id: 'W4', topic: 'wave', sub: 'Refraction',
    stem: 'A beam of light travels from air into water. Which of the following quantities of the light decrease(s)?',
    statements: ['Speed', 'Frequency', 'Wavelength'],
    options: ['(1) only', '(2) only', '(1) and (3) only', '(2) and (3) only'],
    answer: 2,
    explain: 'Frequency is set by the source and is unchanged. Speed decreases in the optically denser medium, so λ = v / f also decreases.'
  },
  {
    id: 'W5', topic: 'wave', sub: "Young's double-slit",
    stem: "In a Young's double-slit experiment, light of wavelength 600 nm is used. The slit separation is 0.5 mm and the screen is 2.0 m from the slits. What is the separation between adjacent bright fringes?",
    options: ['0.6 mm', '1.2 mm', '1.5 mm', '2.4 mm'],
    answer: 3,
    explain: 'Δy = λD / a = (600 × 10⁻⁹ × 2.0) / (0.5 × 10⁻³) = 2.4 × 10⁻³ m = 2.4 mm.'
  },
  {
    id: 'W6', topic: 'wave', sub: 'Diffraction grating',
    stem: 'Monochromatic light of wavelength 600 nm is incident normally on a diffraction grating with 500 lines per mm. What is the highest order of bright fringe that can be observed?',
    options: ['2', '3', '4', '6'],
    answer: 1,
    explain: 'd = 1 / (500 × 10³) = 2 × 10⁻⁶ m.<br>d sin θ = nλ with sin θ < 1 ⇒ n < d / λ = 3.33 ⇒ highest order = 3.'
  },
  {
    id: 'W7', topic: 'wave', sub: 'Lenses',
    stem: 'An object is placed 15 cm in front of a convex lens of focal length 10 cm. What is the nature of the image formed?',
    options: ['Real, inverted and magnified', 'Real, inverted and diminished', 'Virtual, upright and magnified', 'Virtual, upright and diminished'],
    answer: 0,
    explain: 'The object lies between f and 2f, so the image is real, inverted and magnified.<br>Check: 1/v = 1/10 − 1/15 ⇒ v = 30 cm, m = 30 / 15 = 2.'
  },
  {
    id: 'W8', topic: 'wave', sub: 'Stationary waves',
    stem: 'A stationary wave is formed on a string. The distance between two adjacent nodes is 0.3 m. Which of the following statements is/are correct?',
    statements: [
      'All points between two adjacent nodes vibrate in phase.',
      'The wavelength of the progressive waves forming the stationary wave is 0.6 m.',
      'Energy is transferred along the string by the stationary wave.'
    ],
    options: STMT_OPTS,
    answer: 2,
    explain: '(1) ✓ Points within one loop vibrate in phase.<br>(2) ✓ Node-to-node distance = λ/2 ⇒ λ = 0.6 m.<br>(3) ✗ A stationary wave does not transfer energy along the string.'
  },
  {
    id: 'W9', topic: 'wave', sub: 'Sound',
    stem: 'Which of the following statements about ultrasound is correct?',
    options: [
      'Its frequency is higher than 20 kHz.',
      'It travels faster than audible sound in air.',
      'It can travel through a vacuum.',
      'It is a transverse wave.'
    ],
    answer: 0,
    explain: 'Ultrasound is sound with frequency above the upper limit of human hearing (about 20 kHz). It is a longitudinal mechanical wave, travels at the same speed as audible sound in air, and cannot travel through a vacuum.'
  },

  /* ---------------- Electricity and Magnetism ---------------- */
  {
    id: 'E1', topic: 'elec', sub: 'Circuits',
    stem: 'In the circuit shown, the battery has an e.m.f. of 12 V and negligible internal resistance. What is the current through the 6 Ω resistor?',
    figure: '<svg viewBox="0 0 370 200" role="img" aria-label="12 V battery in series with 4 ohm resistor and a parallel combination of 6 ohm and 3 ohm"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M40 40 V92 M40 104 V160 H320 V125 M320 75 V40 H180 M120 40 H40"/><path d="M24 92 H56" /><path d="M32 104 H48" stroke-width="4"/><rect x="120" y="32" width="60" height="16"/><path d="M260 40 V75 M260 125 V160"/><rect x="252" y="75" width="16" height="50"/><rect x="312" y="75" width="16" height="50"/></g><g fill="currentColor"><circle cx="260" cy="40" r="3.5"/><circle cx="260" cy="160" r="3.5"/></g><g fill="currentColor" font-size="13" font-family="inherit"><text x="62" y="102">12 V</text><text x="136" y="24">4 Ω</text><text x="222" y="104">6 Ω</text><text x="336" y="104">3 Ω</text></g></svg>',
    options: ['0.67 A', '1.33 A', '2.0 A', '3.0 A'],
    answer: 0,
    explain: '6 Ω ∥ 3 Ω = (6 × 3) / (6 + 3) = 2 Ω. Total R = 4 + 2 = 6 Ω ⇒ I = 12 / 6 = 2 A.<br>p.d. across the parallel part = 2 × 2 = 4 V ⇒ current in 6 Ω = 4 / 6 = 0.67 A.'
  },
  {
    id: 'E2', topic: 'elec', sub: 'Electrical power',
    stem: 'An electric kettle is rated "220 V, 2200 W". What is the resistance of its heating element when it is operating normally?',
    options: ['0.1 Ω', '10 Ω', '22 Ω', '484 Ω'],
    answer: 2,
    explain: 'P = V² / R ⇒ R = 220² / 2200 = 22 Ω.'
  },
  {
    id: 'E3', topic: 'elec', sub: 'Domestic electricity',
    stem: 'Which of the following statements about domestic electricity is/are correct?',
    statements: [
      'A fuse should be connected in the live wire.',
      'The earth wire should be connected to the metal casing of an appliance.',
      'A switch should be connected in the neutral wire.'
    ],
    options: STMT_OPTS,
    answer: 2,
    explain: '(1) ✓ So that the appliance is disconnected from the high potential when the fuse blows.<br>(2) ✓ This protects the user if the live wire touches the casing.<br>(3) ✗ Switches go in the live wire; otherwise the appliance remains live when switched off.'
  },
  {
    id: 'E4', topic: 'elec', sub: 'Cost of electricity',
    stem: 'An air-conditioner rated 1.5 kW is used for 8 hours a day for 30 days. If electricity costs $1.2 per kW h, what is the cost of the electricity used?',
    options: ['$43.2', '$144', '$360', '$432'],
    answer: 3,
    explain: 'Energy = 1.5 × 8 × 30 = 360 kW h.<br>Cost = 360 × 1.2 = $432.'
  },
  {
    id: 'E5', topic: 'elec', sub: 'Electric field',
    stem: 'Two parallel metal plates 2 cm apart are connected to a 400 V supply. What is the magnitude of the electric force on an electron between the plates?<br>(Charge of electron = 1.60 × 10⁻¹⁹ C)',
    options: ['3.2 × 10⁻¹⁷ N', '6.4 × 10⁻¹⁷ N', '3.2 × 10⁻¹⁵ N', '8.0 × 10⁻¹⁴ N'],
    answer: 2,
    explain: 'E = V / d = 400 / 0.02 = 2 × 10⁴ V m⁻¹.<br>F = qE = 1.60 × 10⁻¹⁹ × 2 × 10⁴ = 3.2 × 10⁻¹⁵ N.'
  },
  {
    id: 'E6', topic: 'elec', sub: "Coulomb's law",
    stem: 'Two point charges separated by a distance r exert an electrostatic force F on each other. If the magnitude of each charge is doubled and the separation is unchanged, the force becomes',
    options: ['F / 4', 'F', '2F', '4F'],
    answer: 3,
    explain: 'F = Q₁Q₂ / (4πε₀ r²). Doubling both charges multiplies F by 2 × 2 = 4.'
  },
  {
    id: 'E7', topic: 'elec', sub: 'Magnetic force',
    stem: 'A straight wire of length 0.2 m carrying a current of 5 A is placed perpendicular to a uniform magnetic field of 0.3 T. What is the magnetic force on the wire?',
    options: ['0.03 N', '0.3 N', '3.0 N', '7.5 N'],
    answer: 1,
    explain: 'F = BIL = 0.3 × 5 × 0.2 = 0.3 N.'
  },
  {
    id: 'E8', topic: 'elec', sub: 'Transformers',
    stem: 'An ideal transformer has 200 turns in the primary coil and 20 turns in the secondary coil. The primary coil is connected to a 220 V a.c. supply. If the current in the secondary coil is 2 A, what is the current in the primary coil?',
    options: ['0.02 A', '0.2 A', '2 A', '20 A'],
    answer: 1,
    explain: 'V_s = 220 × 20 / 200 = 22 V.<br>Ideal: V_p I_p = V_s I_s ⇒ I_p = 22 × 2 / 220 = 0.2 A.'
  },
  {
    id: 'E9', topic: 'elec', sub: 'Electromagnetic induction',
    stem: 'A bar magnet is released from rest above a fixed horizontal copper ring and falls through it. Which of the following statements is/are correct?',
    statements: [
      'An induced current flows in the ring.',
      'As the magnet approaches the ring, its acceleration is less than g.',
      'The induced current flows in the same direction as the magnet approaches and as it leaves the ring.'
    ],
    options: ['(1) only', '(3) only', '(1) and (2) only', '(1), (2) and (3)'],
    answer: 2,
    explain: '(1) ✓ The flux through the ring changes.<br>(2) ✓ By Lenz\'s law the induced current opposes the motion, so the magnet is slowed.<br>(3) ✗ The flux increases then decreases, so the induced current reverses direction.'
  },
  {
    id: 'E10', topic: 'elec', sub: 'Power transmission',
    stem: 'Electrical power is transmitted through cables of fixed resistance. If the transmission voltage is increased by 10 times while the power transmitted is unchanged, the power loss in the cables becomes',
    options: ['1/10 of the original.', '1/100 of the original.', '10 times the original.', '100 times the original.'],
    answer: 1,
    explain: 'I = P / V, so the current drops to 1/10.<br>Power loss = I²R ⇒ becomes (1/10)² = 1/100 of the original.'
  },
  {
    id: 'E11', topic: 'elec', sub: 'Magnetic field of a current',
    stem: 'The magnetic field at a distance r from a long straight wire carrying current I is B. What is the magnetic field at a distance 2r from the wire when the current is 2I?',
    options: ['B / 2', 'B', '2B', '4B'],
    answer: 1,
    explain: 'B = μ₀I / (2πr). Doubling I and doubling r leaves B unchanged.'
  },

  /* ---------------- Radioactivity and Nuclear Energy ---------------- */
  {
    id: 'N1', topic: 'nuc', sub: 'Half-life',
    stem: 'A radioactive sample has an activity of 800 Bq. Its half-life is 5 days. What is its activity after 20 days?',
    options: ['50 Bq', '100 Bq', '160 Bq', '200 Bq'],
    answer: 0,
    explain: '20 days = 4 half-lives.<br>A = 800 × (½)⁴ = 50 Bq.'
  },
  {
    id: 'N2', topic: 'nuc', sub: 'Radioactive decay',
    stem: 'Uranium-238 (²³⁸₉₂U) decays to lead-206 (²⁰⁶₈₂Pb) through a series of α and β⁻ decays. How many α and β⁻ decays are involved?',
    options: ['6 α and 8 β⁻', '8 α and 6 β⁻', '8 α and 10 β⁻', '10 α and 2 β⁻'],
    answer: 1,
    explain: 'Mass number falls by 238 − 206 = 32 ⇒ 32 / 4 = 8 α decays.<br>8 α decays reduce Z by 16: 92 − 16 = 76. To reach 82, Z must rise by 6 ⇒ 6 β⁻ decays.'
  },
  {
    id: 'N3', topic: 'nuc', sub: 'Radiation properties',
    stem: 'Which of the following statements about α particles is/are correct?',
    statements: [
      'They have the strongest ionizing power among α, β and γ radiation.',
      'They can be stopped by a sheet of paper.',
      'They are deflected by an electric field.'
    ],
    options: ['(1) only', '(1) and (2) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: 3,
    explain: 'α particles are helium nuclei: highly ionizing, short range (stopped by paper or a few cm of air) and positively charged, so they are deflected by electric and magnetic fields.'
  },
  {
    id: 'N4', topic: 'nuc', sub: 'Nuclear fission',
    stem: 'In the fission reaction ²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + x ¹₀n, what is the value of x?',
    options: ['1', '2', '3', '4'],
    answer: 2,
    explain: 'Mass number: 235 + 1 = 141 + 92 + x ⇒ x = 3.<br>(Check charge: 92 = 56 + 36 ✓)'
  },
  {
    id: 'N5', topic: 'nuc', sub: 'Mass–energy',
    stem: 'In a nuclear reaction, the total mass of the products is 3.0 × 10⁻²⁸ kg less than that of the reactants. How much energy is released?<br>(Speed of light c = 3.00 × 10⁸ m s⁻¹)',
    options: ['9.0 × 10⁻²⁰ J', '1.35 × 10⁻¹¹ J', '2.7 × 10⁻¹¹ J', '2.7 × 10⁻⁸ J'],
    answer: 2,
    explain: 'E = Δm c² = 3.0 × 10⁻²⁸ × (3.00 × 10⁸)² = 2.7 × 10⁻¹¹ J.'
  },
  {
    id: 'N6', topic: 'nuc', sub: 'Atomic model',
    stem: 'Which of the following conclusions can be drawn from the Rutherford α-scattering experiment?',
    statements: [
      'Most of the atom is empty space.',
      'The positive charge and most of the mass of an atom are concentrated in a tiny nucleus.',
      'Electrons move in fixed circular orbits around the nucleus.'
    ],
    options: ['(1) only', '(2) only', '(1) and (2) only', '(1), (2) and (3)'],
    answer: 2,
    explain: 'Most α particles passed straight through ⇒ (1). A few were deflected through large angles ⇒ (2). The experiment says nothing about electron orbits, so (3) cannot be concluded.'
  },
  {
    id: 'N7', topic: 'nuc', sub: 'Half-life',
    stem: 'The count rate of a radioactive source falls from 640 counts per minute to 40 counts per minute in 12 hours. Neglecting background radiation, what is the half-life of the source?',
    options: ['1.5 h', '3 h', '4 h', '6 h'],
    answer: 1,
    explain: '640 / 40 = 16 = 2⁴ ⇒ 4 half-lives in 12 h ⇒ half-life = 3 h.'
  },
  {
    id: 'N8', topic: 'nuc', sub: 'Radiation safety',
    stem: 'Which unit is used to measure the equivalent dose of radiation received by a person?',
    options: ['Becquerel (Bq)', 'Sievert (Sv)', 'Coulomb (C)', 'Joule (J)'],
    answer: 1,
    explain: 'Equivalent dose is measured in sievert (Sv). The becquerel measures activity (decays per second).'
  },
  {
    id: 'N9', topic: 'nuc', sub: 'Isotopes',
    stem: 'Which of the following are the same for two isotopes of an element?',
    statements: ['Atomic number', 'Chemical properties', 'Nucleon number'],
    options: ['(1) only', '(3) only', '(1) and (2) only', '(2) and (3) only'],
    answer: 2,
    explain: 'Isotopes have the same number of protons (and electrons), hence the same atomic number and chemical properties, but different numbers of neutrons, so different nucleon numbers.'
  }
];
