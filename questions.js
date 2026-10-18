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
  {
    id: 'H10', topic: 'heat', sub: 'Temperature scales',
    stem: 'The length of the liquid thread in an uncalibrated liquid-in-glass thermometer is 4.0 cm at the ice point and 24.0 cm at the steam point. When the thermometer is put into a liquid, the length of the thread is 13.0 cm. What is the temperature of the liquid?',
    options: ['45.0 °C', '54.2 °C', '55.0 °C', '65.0 °C'],
    answer: 0,
    explain: 'θ = (l − l₀) / (l₁₀₀ − l₀) × 100 °C = (13.0 − 4.0) / (24.0 − 4.0) × 100 °C = 45.0 °C.<br>54.2 °C comes from 13.0 / 24.0 × 100 and 65.0 °C from 13.0 / 20.0 × 100 — both forget to subtract the ice-point length.'
  },
  {
    id: 'H11', topic: 'heat', sub: 'Internal energy',
    stem: 'Which of the following statements is/are correct?',
    statements: [
      'The internal energy of an object is the sum of the kinetic energy and potential energy of its molecules.',
      'When ice at 0 °C melts to become water at 0 °C, its internal energy is unchanged.',
      'Two objects at the same temperature must have the same internal energy.'
    ],
    options: STMT_OPTS,
    answer: 0,
    explain: '(1) ✓ This is the definition of internal energy.<br>(2) ✗ The temperature (average KE) is unchanged, but the potential energy of the molecules increases as the bonds are loosened, so the internal energy increases.<br>(3) ✗ Internal energy also depends on the mass and the material. A bathtub of warm water has more internal energy than a cup of water at the same temperature.'
  },
  {
    id: 'H12', topic: 'heat', sub: 'Heat capacity',
    stem: 'A 500 W heater raises the temperature of a metal block from 20 °C to 50 °C in 2 minutes. Assuming no heat loss, what is the heat capacity of the block?',
    options: ['33.3 J °C⁻¹', '1200 J °C⁻¹', '2000 J °C⁻¹', '3000 J °C⁻¹'],
    answer: 2,
    explain: 'Energy supplied E = Pt = 500 × (2 × 60) = 60 000 J.<br>Heat capacity C = E / ΔT = 60 000 / (50 − 20) = 2000 J °C⁻¹.<br>33.3 J °C⁻¹ comes from using t = 2 (minutes instead of seconds).'
  },
  {
    id: 'H13', topic: 'heat', sub: 'Latent heat',
    stem: 'Water in an electric kettle of power 2.0 kW is boiling. In the next 150 s, the mass of the water decreases by 0.12 kg. Assuming all the energy supplied is used to boil away the water, find the specific latent heat of vaporization of water given by this experiment.',
    options: ['2.5 × 10³ J kg⁻¹', '3.6 × 10⁴ J kg⁻¹', '2.5 × 10⁵ J kg⁻¹', '2.5 × 10⁶ J kg⁻¹'],
    answer: 3,
    explain: 'Pt = mℓ ⇒ ℓ = Pt / m = (2000 × 150) / 0.12 = 2.5 × 10⁶ J kg⁻¹.<br>2.5 × 10³ J kg⁻¹ comes from using P = 2.0 (kW not converted to W).'
  },
  {
    id: 'H14', topic: 'heat', sub: 'Latent heat',
    stem: '0.05 kg of ice at 0 °C is added to 0.3 kg of water at 30 °C in a container of negligible heat capacity. Neglecting heat exchange with the surroundings, what is the final temperature of the water?<br>(Specific heat capacity of water = 4200 J kg⁻¹ °C⁻¹; specific latent heat of fusion of ice = 3.34 × 10⁵ J kg⁻¹)',
    options: ['14.4 °C', '16.7 °C', '18.6 °C', '25.7 °C'],
    answer: 0,
    explain: 'Energy to melt the ice = 0.05 × 3.34 × 10⁵ = 16 700 J. (The warm water can give out up to 0.3 × 4200 × 30 = 37 800 J, so all the ice melts.)<br>Let T be the final temperature. Energy lost by warm water = energy to melt ice + energy to warm the melted ice from 0 °C:<br>0.3 × 4200 × (30 − T) = 16 700 + 0.05 × 4200 × T<br>37 800 − 1260T = 16 700 + 210T ⇒ T = 21 100 / 1470 = 14.4 °C.<br>16.7 °C forgets to warm the melted ice; 25.7 °C ignores the latent heat.'
  },
  {
    id: 'H15', topic: 'heat', sub: 'Convection',
    stem: 'On a sunny day, a breeze blows from the sea towards the land. Which of the following best explains this?',
    options: [
      'Sea water has a lower specific heat capacity than the land, so the air above the sea is heated more.',
      'The land has a lower specific heat capacity than sea water, so the air above the land becomes warmer and rises.',
      'Cool air above the land sinks and flows towards the sea.',
      'Energy is conducted from the land to the sea through the air.'
    ],
    answer: 1,
    explain: 'In sunshine the land warms up faster than the sea because of its lower specific heat capacity. The air above the land becomes warmer and less dense and rises (convection), and cooler air from above the sea flows in to take its place — the sea breeze.'
  },
  {
    id: 'H16', topic: 'heat', sub: 'Radiation',
    stem: 'Which of the following statements about thermal radiation is/are correct?',
    statements: [
      'All objects emit thermal radiation.',
      'A shiny silvered surface is a better absorber of radiation than a dull black surface.',
      'Energy transfer by radiation requires a medium.'
    ],
    options: STMT_OPTS,
    answer: 0,
    explain: '(1) ✓ Every object emits radiation; hotter objects emit more.<br>(2) ✗ A dull black surface is the better absorber (and emitter). Shiny surfaces reflect radiation.<br>(3) ✗ Radiation is electromagnetic and can travel through a vacuum, e.g. from the Sun to the Earth.'
  },
  {
    id: 'H17', topic: 'heat', sub: "Boyle's law",
    stem: 'An air bubble of volume 2.00 cm³ is released from the bottom of a lake 20 m deep. Assume the temperature of the water is uniform. What is the volume of the bubble just before it reaches the surface?<br>(Atmospheric pressure = 1.00 × 10⁵ Pa; density of water = 1000 kg m⁻³; g = 9.81 m s⁻²)',
    options: ['0.68 cm³', '2.00 cm³', '3.92 cm³', '5.92 cm³'],
    answer: 3,
    explain: 'Pressure at the bottom p₁ = p₀ + ρgh = 1.00 × 10⁵ + 1000 × 9.81 × 20 = 2.962 × 10⁵ Pa.<br>At constant temperature p₁V₁ = p₂V₂ ⇒ V₂ = 2.962 × 10⁵ × 2.00 / (1.00 × 10⁵) = 5.92 cm³.<br>3.92 cm³ forgets the atmospheric pressure acting on the water surface.'
  },
  {
    id: 'H18', topic: 'heat', sub: 'General gas law',
    stem: 'A fixed mass of ideal gas has a volume of 3.0 litres at a pressure of 1.0 × 10⁵ Pa and a temperature of 27 °C. It is compressed to a volume of 1.0 litre and its temperature rises to 87 °C. What is its new pressure?',
    options: ['2.5 × 10⁵ Pa', '3.0 × 10⁵ Pa', '3.6 × 10⁵ Pa', '9.7 × 10⁵ Pa'],
    answer: 2,
    explain: 'p₁V₁ / T₁ = p₂V₂ / T₂ with T in kelvin:<br>p₂ = 1.0 × 10⁵ × (3.0 / 1.0) × (87 + 273) / (27 + 273) = 1.0 × 10⁵ × 3 × 360 / 300 = 3.6 × 10⁵ Pa.<br>9.7 × 10⁵ Pa comes from using °C; 3.0 × 10⁵ Pa ignores the temperature change.'
  },
  {
    id: 'H19', topic: 'heat', sub: 'Kinetic theory',
    stem: 'A gas has a density of 1.2 kg m⁻³ at a pressure of 1.0 × 10⁵ Pa. What is the r.m.s. speed of its molecules?',
    options: ['167 m s⁻¹', '289 m s⁻¹', '500 m s⁻¹', '2.5 × 10⁵ m s⁻¹'],
    answer: 2,
    explain: 'pV = ⅓ Nm c̄² and density ρ = Nm / V, so p = ⅓ ρ c̄².<br>c_rms = √(3p / ρ) = √(3 × 1.0 × 10⁵ / 1.2) = √(2.5 × 10⁵) = 500 m s⁻¹.<br>2.5 × 10⁵ is the mean square speed c̄² (in m² s⁻²), not the r.m.s. speed.'
  },
  {
    id: 'H20', topic: 'heat', sub: 'Kinetic theory',
    stem: 'What is the average kinetic energy of a molecule of an ideal gas at 27 °C?<br>(Boltzmann constant k = 1.38 × 10⁻²³ J K⁻¹)',
    options: ['5.59 × 10⁻²² J', '2.07 × 10⁻²¹ J', '4.14 × 10⁻²¹ J', '6.21 × 10⁻²¹ J'],
    answer: 3,
    explain: 'Average KE = (3/2) kT = 1.5 × 1.38 × 10⁻²³ × (27 + 273) = 6.21 × 10⁻²¹ J.<br>5.59 × 10⁻²² J comes from using T = 27; 4.14 × 10⁻²¹ J is kT without the factor 3/2.'
  },
  {
    id: 'H21', topic: 'heat', sub: 'Ideal gas equation',
    stem: 'A gas cylinder of volume 0.020 m³ contains an ideal gas at a pressure of 2.0 × 10⁵ Pa and a temperature of 27 °C. How many gas molecules are there in the cylinder?<br>(R = 8.31 J mol⁻¹ K⁻¹; Avogadro constant N<sub>A</sub> = 6.02 × 10²³ mol⁻¹)',
    options: ['1.60', '9.66 × 10²³', '1.07 × 10²⁵', '9.66 × 10²⁶'],
    answer: 1,
    explain: 'n = pV / RT = (2.0 × 10⁵ × 0.020) / (8.31 × 300) = 1.60 mol.<br>N = nN<sub>A</sub> = 1.60 × 6.02 × 10²³ = 9.66 × 10²³.<br>1.60 is the number of moles, not molecules; 1.07 × 10²⁵ comes from using T = 27.'
  },
  {
    id: 'H22', topic: 'heat', sub: 'Kinetic theory',
    stem: 'Which of the following is NOT an assumption of the kinetic theory of an ideal gas?',
    options: [
      'The molecules are in constant random motion.',
      'Collisions of the molecules with one another and with the walls are perfectly elastic.',
      'Intermolecular forces are negligible except during collisions.',
      'All the molecules move with the same speed.'
    ],
    answer: 3,
    explain: 'The molecules have a range of speeds; only the mean square speed enters the result pV = ⅓ Nm c̄². A, B and C are all assumptions of the theory (together with negligible molecular volume and negligible collision time).'
  },
  {
    id: 'H23', topic: 'heat', sub: 'Kinetic theory',
    stem: 'A fixed mass of gas is compressed slowly to half its volume at constant temperature, and its pressure doubles. Which of the following best explains the increase in pressure?',
    options: [
      'The molecules hit the walls more frequently.',
      'The average kinetic energy of the molecules increases.',
      'Each collision with the walls produces a greater change in momentum.',
      'The attractive forces between the molecules become stronger.'
    ],
    answer: 0,
    explain: 'The temperature is constant, so the average KE and speed of the molecules are unchanged, and each collision gives the same momentum change. With the same number of molecules in half the volume, the molecules hit each unit area of the walls more often, so the pressure rises.'
  },
  {
    id: 'H24', topic: 'heat', sub: 'Temperature and heat',
    stem: 'Two objects X and Y are placed in thermal contact in an insulated box. X is initially at a higher temperature than Y. Which of the following statements is/are correct?',
    statements: [
      'X must have more internal energy than Y.',
      'Energy is transferred from X to Y.',
      'When thermal equilibrium is reached, X and Y have the same temperature.'
    ],
    options: STMT_OPTS,
    answer: 3,
    explain: '(1) ✗ Internal energy also depends on mass and material. A small hot object can have less internal energy than a large cool one.<br>(2) ✓ Heat flows from the higher temperature to the lower temperature.<br>(3) ✓ The net flow stops when the temperatures are equal — not when the internal energies are equal.'
  },
  {
    id: 'H25', topic: 'heat', sub: 'Heating curve',
    stem: 'A solid is heated by a heater of constant power. The graph shows how its temperature varies with time. Assuming no heat loss, what is the ratio of the specific latent heat of vaporization to the specific latent heat of fusion of the substance?',
    figure: '<svg viewBox="0 0 400 220" role="img" aria-label="Temperature–time graph rising from 0 to 2 min, flat from 2 to 6 min, rising from 6 to 10 min, flat from 10 to 22 min, then rising"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M50 190 V20 M50 190 H345"/><path d="M50 170 L74 140 L122 140 L170 70 L314 70 L330 40" stroke-width="2.5"/></g><g fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"><path d="M74 140 V190 M122 140 V190 M170 70 V190 M314 70 V190"/></g><g fill="currentColor" font-size="13" font-family="inherit" text-anchor="middle"><text x="50" y="206">0</text><text x="74" y="206">2</text><text x="122" y="206">6</text><text x="170" y="206">10</text><text x="314" y="206">22</text><text x="352" y="194" text-anchor="start">t / min</text><text x="58" y="16" text-anchor="start">temperature</text></g></svg>',
    options: ['0.33', '3.0', '3.7', '5.0'],
    answer: 1,
    explain: 'During a change of state, Pt = mℓ, so ℓ ∝ time of the flat part (same P and m).<br>Melting: 2 → 6 min = 4 min. Boiling: 10 → 22 min = 12 min.<br>ℓ<sub>v</sub> / ℓ<sub>f</sub> = 12 / 4 = 3.0.<br>3.7 (= 22 / 6) and 5.0 (= 10 / 2) come from reading the times instead of the durations.'
  },
  {
    id: 'H26', topic: 'heat', sub: 'Latent heat',
    stem: 'Steam at 100 °C causes a more serious burn than the same mass of boiling water at 100 °C. Why?',
    options: [
      'Steam is at a higher temperature than boiling water.',
      'Steam gives out a large amount of latent heat when it condenses on the skin.',
      'Steam has a higher specific heat capacity than water.',
      'Steam molecules move more slowly than water molecules, so they stay on the skin longer.'
    ],
    answer: 1,
    explain: 'Both are at 100 °C. When steam touches the skin it first condenses, releasing its latent heat of vaporization (about 2.26 × 10⁶ J kg⁻¹), and then the hot water cools down further. This releases far more energy than boiling water that only cools down.'
  },
  {
    id: 'H27', topic: 'heat', sub: 'Specific heat capacity',
    stem: 'A student measures the specific heat capacity of an aluminium block using an immersion heater and a joulemeter. Which of the following would make the measured value larger than the true value?',
    statements: [
      'Energy is lost from the block to the surroundings.',
      'The block is wrapped with a layer of insulating material.',
      'The final temperature is read as soon as the heater is switched off.'
    ],
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: 1,
    explain: 'c = E / (mΔT).<br>(1) ✓ Some of the measured E does not heat the block, so ΔT is too small for the E recorded ⇒ c too large.<br>(2) ✗ Insulation reduces heat loss and makes the result more accurate.<br>(3) ✓ The hot heater keeps heating the block after it is switched off, so the highest temperature is reached later. Reading too early makes ΔT too small ⇒ c too large.'
  },
  {
    id: 'H28', topic: 'heat', sub: "Charles' law",
    stem: 'A fixed mass of gas has a volume of 273 cm³ at 0 °C. It is heated at constant pressure until its volume becomes 300 cm³. What is its final temperature?',
    options: ['27 °C', '300 °C', '327 °C', '573 °C'],
    answer: 0,
    explain: 'At constant pressure V / T = constant (T in kelvin).<br>T₂ = 273 × 300 / 273 = 300 K = 300 − 273 = 27 °C.<br>300 °C forgets to convert the answer back from kelvin.'
  },
  {
    id: 'H29', topic: 'heat', sub: 'Ideal gas equation',
    stem: 'A rigid cylinder contains an ideal gas at 6.0 × 10⁵ Pa and 27 °C. After some gas has leaked out, the pressure is 4.0 × 10⁵ Pa and the temperature is 17 °C. What percentage of the original mass of gas has leaked out?',
    options: ['31 %', '33 %', '67 %', '69 %'],
    answer: 0,
    explain: 'For a fixed volume, n = pV / RT ∝ p / T.<br>n₂ / n₁ = (4.0 / 290) / (6.0 / 300) = (4.0 × 300) / (6.0 × 290) = 0.69.<br>So 69 % remains and 31 % has leaked out.<br>33 % ignores the fall in temperature; 69 % is the fraction that remains.'
  },
  {
    id: 'H30', topic: 'heat', sub: 'Conduction',
    stem: 'On a cold day, a metal bench feels colder to touch than a wooden bench, although both are at the same temperature. Why?',
    options: [
      'The metal bench is at a lower temperature than the wooden bench.',
      'Metal has a higher specific heat capacity than wood.',
      'Wood is a better conductor of heat than metal.',
      'Metal is a better conductor of heat, so it conducts energy away from the hand faster.'
    ],
    answer: 3,
    explain: 'Both benches are at the same temperature. The hand senses the rate at which it loses energy. Metal is a good conductor, so energy flows away from the hand quickly and the metal feels colder. Wood is a poor conductor.'
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
  {
    id: 'M11', topic: 'force', sub: 'Velocity–time graph',
    stem: 'The velocity–time graph of a car is shown. What is the total distance travelled by the car in the 10 s?',
    figure: '<svg viewBox="0 0 380 200" role="img" aria-label="Velocity–time graph rising from 0 to 12 m/s in 4 s, constant until 8 s, falling to 0 at 10 s"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M50 170 V20 M50 170 H345"/><path d="M50 170 L162 50 L274 50 L330 170" stroke-width="2.5"/></g><g fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"><path d="M50 50 H162 M162 50 V170 M274 50 V170"/></g><g fill="currentColor" font-size="13" font-family="inherit" text-anchor="middle"><text x="50" y="186">0</text><text x="162" y="186">4</text><text x="274" y="186">8</text><text x="330" y="186">10</text><text x="40" y="54" text-anchor="end">12</text><text x="58" y="16" text-anchor="start">v / m s⁻¹</text><text x="350" y="174" text-anchor="start">t / s</text></g></svg>',
    options: ['72 m', '84 m', '96 m', '120 m'],
    answer: 1,
    explain: 'Distance = area under the v–t graph.<br>0–4 s: ½ × 4 × 12 = 24 m; 4–8 s: 4 × 12 = 48 m; 8–10 s: ½ × 2 × 12 = 12 m.<br>Total = 24 + 48 + 12 = 84 m.'
  },
  {
    id: 'M12', topic: 'force', sub: 'Motion under gravity',
    stem: 'A stone is dropped from rest from a bridge and hits the water 2.5 s later. Neglecting air resistance, what is the height of the bridge above the water?<br>(g = 9.81 m s⁻²)',
    options: ['12.3 m', '24.5 m', '30.7 m', '61.3 m'],
    answer: 2,
    explain: 's = ut + ½ gt² = 0 + ½ × 9.81 × 2.5² = 30.7 m.<br>24.5 m is the final speed gt (in m s⁻¹), not a distance; 61.3 m forgets the ½.'
  },
  {
    id: 'M13', topic: 'force', sub: "Newton's third law",
    stem: 'A book rests on a horizontal table. According to Newton\'s third law, the reaction to the weight of the book is',
    options: [
      'the normal force exerted by the table on the book.',
      'the gravitational force exerted by the book on the Earth.',
      'the force exerted by the book on the table.',
      'the force exerted by the Earth on the table.'
    ],
    answer: 1,
    explain: 'The weight of the book is the gravitational pull of the Earth on the book. Its third-law partner is the gravitational pull of the book on the Earth — same type of force, acting on the other body.<br>The normal force from the table balances the weight (first law), but it is not the third-law pair.'
  },
  {
    id: 'M14', topic: 'force', sub: "Newton's second law",
    stem: 'Block A of mass 3 kg lies on a smooth horizontal table. It is connected by a light inextensible string passing over a smooth pulley to block B of mass 1 kg, which hangs freely as shown. The blocks are released from rest. What is the tension in the string?<br>(g = 9.81 m s⁻²)',
    figure: '<svg viewBox="0 0 340 200" role="img" aria-label="3 kg block on a table joined by a string over a pulley to a hanging 1 kg block"><g fill="none" stroke="currentColor" stroke-width="2"><rect x="20" y="80" width="230" height="12"/><path d="M40 92 V190 M230 92 V190"/><rect x="90" y="40" width="70" height="40"/><path d="M160 56 H262 M274 68 V130" stroke-width="1.5"/><circle cx="262" cy="68" r="12"/><path d="M250 80 L262 68"/><rect x="254" y="130" width="40" height="32"/></g><g fill="currentColor" font-size="13" font-family="inherit" text-anchor="middle"><text x="125" y="65">3 kg</text><text x="274" y="151">1 kg</text><text x="125" y="32">A</text><text x="306" y="151" text-anchor="start">B</text></g></svg>',
    options: ['2.45 N', '7.36 N', '9.81 N', '29.4 N'],
    answer: 1,
    explain: 'Treat A and B as one system: m<sub>B</sub>g = (m<sub>A</sub> + m<sub>B</sub>)a ⇒ a = 1 × 9.81 / 4 = 2.45 m s⁻².<br>For A: T = m<sub>A</sub>a = 3 × 2.45 = 7.36 N.<br>(Check with B: m<sub>B</sub>g − T = m<sub>B</sub>a ⇒ 9.81 − 7.36 = 2.45 ✓.) 9.81 N wrongly assumes B is in equilibrium.'
  },
  {
    id: 'M15', topic: 'force', sub: 'Friction',
    stem: 'A box of mass 20 kg is pushed along a horizontal floor by a horizontal force of 80 N and moves at constant velocity. The pushing force is then increased to 120 N. Assuming the friction is unchanged, what is the acceleration of the box?',
    options: ['2.0 m s⁻²', '4.0 m s⁻²', '6.0 m s⁻²', '10 m s⁻²'],
    answer: 0,
    explain: 'At constant velocity the net force is zero, so friction = 80 N.<br>With 120 N: net force = 120 − 80 = 40 N ⇒ a = 40 / 20 = 2.0 m s⁻².<br>6.0 m s⁻² ignores friction.'
  },
  {
    id: 'M16', topic: 'force', sub: 'Inclined plane',
    stem: 'A block of mass 2.0 kg is released from rest on a rough plane inclined at 30° to the horizontal. The friction acting on the block is 4.0 N. What is the acceleration of the block down the plane?<br>(g = 9.81 m s⁻²)',
    options: ['2.91 m s⁻²', '4.91 m s⁻²', '6.50 m s⁻²', '8.50 m s⁻²'],
    answer: 0,
    explain: 'Along the plane: mg sin 30° − f = ma<br>2.0 × 9.81 × 0.5 − 4.0 = 2.0a ⇒ 9.81 − 4.0 = 2.0a ⇒ a = 2.91 m s⁻².<br>4.91 m s⁻² ignores friction; 6.50 m s⁻² uses cos 30° instead of sin 30°.'
  },
  {
    id: 'M17', topic: 'force', sub: 'Equilibrium of forces',
    stem: 'A picture of weight 20 N hangs at rest from two strings. Each string makes an angle of 30° with the horizontal ceiling as shown. What is the tension in each string?',
    figure: '<svg viewBox="0 0 360 190" role="img" aria-label="Picture hanging from a hook by two strings, each at 30 degrees to the ceiling"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M30 20 H330"/><path d="M50 20 l-10 -10 M80 20 l-10 -10 M110 20 l-10 -10 M140 20 l-10 -10 M170 20 l-10 -10 M200 20 l-10 -10 M230 20 l-10 -10 M260 20 l-10 -10 M290 20 l-10 -10 M320 20 l-10 -10" stroke-width="1"/><path d="M60 20 L180 90 L300 20" stroke-width="1.5"/><rect x="120" y="90" width="120" height="80"/><path d="M90 20 A30 30 0 0 1 86 35 M270 20 A30 30 0 0 0 274 35" stroke-width="1"/></g><g fill="currentColor" font-size="13" font-family="inherit" text-anchor="middle"><text x="106" y="36">30°</text><text x="254" y="36">30°</text><text x="180" y="135">20 N</text></g></svg>',
    options: ['10 N', '11.5 N', '20 N', '40 N'],
    answer: 2,
    explain: 'Vertically: 2T sin 30° = 20 ⇒ 2T × 0.5 = 20 ⇒ T = 20 N.<br>(The horizontal components T cos 30° cancel.) 11.5 N comes from using cos 30° for the vertical component.'
  },
  {
    id: 'M18', topic: 'force', sub: 'Centre of gravity',
    stem: 'A non-uniform rod PQ of length 2.0 m rests horizontally on two supports, one at each end. The upward force from the support at P is 40 N and that at Q is 20 N. How far is the centre of gravity of the rod from P?',
    options: ['0.67 m', '1.00 m', '1.33 m', '1.50 m'],
    answer: 0,
    explain: 'Weight W = 40 + 20 = 60 N.<br>Moments about P: 20 × 2.0 = 60 × x ⇒ x = 0.67 m.<br>The centre of gravity is nearer the end with the larger support force. 1.33 m is its distance from Q.'
  },
  {
    id: 'M19', topic: 'force', sub: 'Work done',
    stem: 'A sledge is pulled 5.0 m along level ground by a rope. The tension in the rope is 40 N and the rope makes an angle of 30° with the horizontal. How much work is done by the tension?',
    options: ['173 J', '200 J', '231 J', '346 J'],
    answer: 0,
    explain: 'Only the component of the force along the displacement does work:<br>W = Fs cos θ = 40 × 5.0 × cos 30° = 173 J.<br>200 J ignores the angle; 231 J divides by cos 30° instead of multiplying.'
  },
  {
    id: 'M20', topic: 'force', sub: 'Conservation of energy',
    stem: 'A ball is dropped from rest at a height of 5.0 m above the ground. Neglecting air resistance, what is its speed when it is 1.0 m above the ground?<br>(g = 9.81 m s⁻²)',
    options: ['4.43 m s⁻¹', '6.26 m s⁻¹', '7.67 m s⁻¹', '8.86 m s⁻¹'],
    answer: 3,
    explain: 'The ball has fallen 5.0 − 1.0 = 4.0 m.<br>Loss in PE = gain in KE: mgh = ½ mv² ⇒ v = √(2gh) = √(2 × 9.81 × 4.0) = 8.86 m s⁻¹.<br>4.43 m s⁻¹ uses h = 1.0 m; 6.26 m s⁻¹ forgets the factor 2.'
  },
  {
    id: 'M21', topic: 'force', sub: 'Power',
    stem: 'A car of mass 1000 kg travels up a slope inclined at 5° to the horizontal at a constant speed of 20 m s⁻¹. The total resistive force on the car is 500 N. What is the output power of the engine?<br>(g = 9.81 m s⁻²)',
    options: ['17.1 kW', '27.1 kW', '196 kW', '206 kW'],
    answer: 1,
    explain: 'At constant speed, driving force F = mg sin 5° + resistance = 1000 × 9.81 × sin 5° + 500 = 855 + 500 = 1355 N.<br>P = Fv = 1355 × 20 = 2.71 × 10⁴ W = 27.1 kW.<br>17.1 kW ignores the resistive force; 196 kW uses mg instead of mg sin 5°.'
  },
  {
    id: 'M22', topic: 'force', sub: 'Momentum',
    stem: 'An object of mass 2.0 kg at rest on a smooth horizontal surface explodes into two pieces. One piece of mass 0.5 kg moves off at 12 m s⁻¹. What is the total kinetic energy of the two pieces just after the explosion?',
    options: ['12 J', '24 J', '36 J', '48 J'],
    answer: 3,
    explain: 'Total momentum stays zero: 0.5 × 12 = 1.5 × v ⇒ v = 4.0 m s⁻¹ (opposite direction).<br>KE = ½ × 0.5 × 12² + ½ × 1.5 × 4.0² = 36 + 12 = 48 J.<br>36 J and 12 J are the kinetic energies of the two pieces separately.'
  },
  {
    id: 'M23', topic: 'force', sub: 'Impulse',
    stem: 'A ball of mass 0.16 kg moves horizontally at 10 m s⁻¹ towards a bat. The bat hits it straight back. The graph shows how the force on the ball varies with time during the impact. What is the speed of the ball just after the impact?',
    figure: '<svg viewBox="0 0 360 190" role="img" aria-label="Force–time graph: triangle rising from 0 to 400 N at 0.01 s and back to 0 at 0.02 s"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M50 160 V20 M50 160 H320"/><path d="M50 160 L150 40 L250 160" stroke-width="2.5"/></g><g fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"><path d="M50 40 H150 V160"/></g><g fill="currentColor" font-size="13" font-family="inherit" text-anchor="middle"><text x="50" y="176">0</text><text x="150" y="176">0.01</text><text x="250" y="176">0.02</text><text x="42" y="44" text-anchor="end">400</text><text x="58" y="16" text-anchor="start">F / N</text><text x="325" y="164" text-anchor="start">t / s</text></g></svg>',
    options: ['15 m s⁻¹', '25 m s⁻¹', '35 m s⁻¹', '50 m s⁻¹'],
    answer: 0,
    explain: 'Impulse = area under the F–t graph = ½ × 0.02 × 400 = 4.0 N s = change in momentum.<br>Take the final direction as positive: 0.16v − 0.16 × (−10) = 4.0 ⇒ 0.16v = 2.4 ⇒ v = 15 m s⁻¹.<br>25 m s⁻¹ treats the ball as starting from rest; 35 m s⁻¹ adds the initial velocity instead of subtracting.'
  },
  {
    id: 'M24', topic: 'force', sub: 'Collisions',
    stem: 'Two bodies make an elastic collision. Which of the following must be correct?',
    statements: [
      'The kinetic energy of each body is unchanged.',
      'The two bodies move together after the collision.',
      'The total kinetic energy of the two bodies is unchanged.'
    ],
    options: STMT_OPTS,
    answer: 1,
    explain: '(1) ✗ Kinetic energy is usually transferred from one body to the other; only the total is conserved.<br>(2) ✗ Bodies that stick together have a completely inelastic collision.<br>(3) ✓ This is the definition of an elastic collision. (Total momentum is conserved in every collision.)'
  },
  {
    id: 'M25', topic: 'force', sub: 'Projectile motion',
    stem: 'A ball is kicked from level ground at 20 m s⁻¹ at an angle of 30° above the horizontal. Neglecting air resistance, what is the maximum height reached by the ball?<br>(g = 9.81 m s⁻²)',
    options: ['5.10 m', '10.2 m', '15.3 m', '20.4 m'],
    answer: 0,
    explain: 'Initial vertical velocity u<sub>y</sub> = 20 sin 30° = 10 m s⁻¹.<br>At the top v<sub>y</sub> = 0: 0 = u<sub>y</sub>² − 2gH ⇒ H = 10² / (2 × 9.81) = 5.10 m.<br>15.3 m uses 20 cos 30°; 20.4 m uses the full 20 m s⁻¹.'
  },
  {
    id: 'M26', topic: 'force', sub: 'Circular motion',
    stem: 'A ball of mass 0.2 kg is tied to a string and whirled in a horizontal circle of radius 0.5 m on a smooth horizontal table. It makes 3 revolutions per second. What is the tension in the string?',
    options: ['0.90 N', '3.60 N', '17.8 N', '35.5 N'],
    answer: 3,
    explain: 'ω = 2πf = 2π × 3 = 18.85 rad s⁻¹.<br>The tension provides the centripetal force: T = mω²r = 0.2 × 18.85² × 0.5 = 35.5 N.<br>0.90 N takes ω = 3 rad s⁻¹; 3.60 N takes v = 3 m s⁻¹.'
  },
  {
    id: 'M27', topic: 'force', sub: 'Gravitation',
    stem: 'The acceleration due to gravity at the Earth\'s surface is 9.81 m s⁻². What is the acceleration due to gravity at a height above the surface equal to the radius of the Earth?',
    options: ['2.45 m s⁻²', '4.91 m s⁻²', '9.81 m s⁻²', '19.6 m s⁻²'],
    answer: 0,
    explain: 'g = GM / r², where r is measured from the centre of the Earth.<br>At height R, r = 2R ⇒ g′ = 9.81 / 2² = 2.45 m s⁻².<br>4.91 m s⁻² wrongly uses g ∝ 1/r.'
  },
  {
    id: 'M28', topic: 'force', sub: 'Satellites',
    stem: 'Which of the following statements about a geostationary satellite is/are correct?',
    statements: [
      'Its angular speed about the centre of the Earth is zero.',
      'Its period equals the period of rotation of the Earth about its axis.',
      'Its orbit lies in the plane of the Equator.'
    ],
    options: STMT_OPTS,
    answer: 3,
    explain: '(1) ✗ It goes round the Earth once every 24 h. It is only stationary relative to the Earth\'s surface.<br>(2) ✓ Its period is about 24 h, so it stays above the same point.<br>(3) ✓ The centre of a circular orbit must be the centre of the Earth, so to stay above a fixed point it must orbit above the Equator.'
  },
  {
    id: 'M29', topic: 'force', sub: 'Satellites',
    stem: 'A satellite moves in a circular orbit of radius 7.0 × 10⁶ m around the Earth. What is its period?<br>(Mass of the Earth = 6.0 × 10²⁴ kg; G = 6.67 × 10⁻¹¹ N m² kg⁻²)',
    options: ['0.81 h', '1.62 h', '3.24 h', '24 h'],
    answer: 1,
    explain: 'GMm / r² = m(2π / T)² r ⇒ T = 2π √(r³ / GM).<br>T = 2π √((7.0 × 10⁶)³ / (6.67 × 10⁻¹¹ × 6.0 × 10²⁴)) = 2π × 926 = 5.82 × 10³ s = 1.62 h.<br>Only geostationary satellites have a period of 24 h.'
  },
  {
    id: 'M30', topic: 'force', sub: 'Moments',
    stem: 'A uniform metre rule is pivoted at its 40 cm mark. It balances horizontally when a weight of 1.2 N is hung at its 10 cm mark. What is the weight of the metre rule?',
    options: ['0.4 N', '1.2 N', '2.4 N', '3.6 N'],
    answer: 3,
    explain: 'The weight W of a uniform rule acts at the 50 cm mark, 10 cm from the pivot. The 1.2 N weight is 30 cm from the pivot on the other side.<br>Principle of moments: 1.2 × 30 = W × 10 ⇒ W = 3.6 N.<br>0.4 N comes from swapping the two distances.'
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
  {
    id: 'W10', topic: 'wave', sub: 'Wave motion',
    stem: 'The figure shows the shape of part of a string at a certain instant as a transverse wave travels along it to the right. Which particle is moving upwards at this instant?',
    figure: '<svg viewBox="0 0 380 160" role="img" aria-label="Transverse wave travelling to the right with particles P at equilibrium, Q at a crest, R at equilibrium and S at a trough"><g fill="none" stroke="currentColor"><path d="M30 80 H350" stroke-width="1" stroke-dasharray="4 3"/><path d="M40 80 L48.3 69.6 L56.7 60 L65 51.7 L73.3 45.4 L81.7 41.4 L90 40 L98.3 41.4 L106.7 45.4 L115 51.7 L123.3 60 L131.7 69.6 L140 80 L148.3 90.4 L156.7 100 L165 108.3 L173.3 114.6 L181.7 118.6 L190 120 L198.3 118.6 L206.7 114.6 L215 108.3 L223.3 100 L231.7 90.4 L240 80 L248.3 69.6 L256.7 60 L265 51.7 L273.3 45.4 L281.7 41.4 L290 40 L298.3 41.4 L306.7 45.4 L315 51.7 L323.3 60 L331.7 69.6 L340 80" stroke-width="2"/><path d="M270 140 H330 M322 134 L330 140 L322 146" stroke-width="1.5"/></g><g fill="currentColor"><circle cx="40" cy="80" r="4"/><circle cx="90" cy="40" r="4"/><circle cx="140" cy="80" r="4"/><circle cx="190" cy="120" r="4"/></g><g fill="currentColor" font-size="13" font-family="inherit" text-anchor="middle"><text x="40" y="100">P</text><text x="90" y="30">Q</text><text x="154" y="72">R</text><text x="190" y="140">S</text><text x="300" y="128">direction of travel</text></g></svg>',
    options: ['P', 'Q', 'R', 'S'],
    answer: 2,
    explain: 'For a wave travelling to the right, each particle soon copies the displacement of the particle just to its left.<br>P: the particle on its left is below it ⇒ P moves down. R: the particle on its left is above it ⇒ R moves up.<br>Q (crest) and S (trough) are momentarily at rest.'
  },
  {
    id: 'W11', topic: 'wave', sub: 'Wave equation',
    stem: 'A wave has a period of 0.02 s and a wavelength of 1.5 m. What is its speed?',
    options: ['0.013 m s⁻¹', '0.03 m s⁻¹', '33.3 m s⁻¹', '75 m s⁻¹'],
    answer: 3,
    explain: 'f = 1 / T = 1 / 0.02 = 50 Hz.<br>v = fλ = 50 × 1.5 = 75 m s⁻¹ (or v = λ / T).'
  },
  {
    id: 'W12', topic: 'wave', sub: 'Longitudinal waves',
    stem: 'A sound wave travels in air at 340 m s⁻¹. The distance between a compression and the nearest rarefaction is 0.85 m. What is the frequency of the sound?',
    options: ['100 Hz', '200 Hz', '400 Hz', '578 Hz'],
    answer: 1,
    explain: 'A compression and the nearest rarefaction are half a wavelength apart ⇒ λ = 2 × 0.85 = 1.7 m.<br>f = v / λ = 340 / 1.7 = 200 Hz.<br>400 Hz wrongly takes λ = 0.85 m.'
  },
  {
    id: 'W13', topic: 'wave', sub: 'Plane mirror',
    stem: 'A girl stands 2.0 m in front of a vertical plane mirror. She then walks 0.5 m towards the mirror. What is the distance between the girl and her image now?',
    options: ['1.5 m', '3.0 m', '3.5 m', '4.0 m'],
    answer: 1,
    explain: 'She is now 2.0 − 0.5 = 1.5 m from the mirror. The image is as far behind the mirror as the object is in front, so the girl–image distance = 2 × 1.5 = 3.0 m.<br>1.5 m is the image-to-mirror distance.'
  },
  {
    id: 'W14', topic: 'wave', sub: 'Refraction',
    stem: 'A ray of light travels from air into a glass block. The angle of incidence is 50° and the angle of refraction is 30°. What is the refractive index of the glass?',
    options: ['0.65', '1.35', '1.53', '1.67'],
    answer: 2,
    explain: 'Snell\'s law: n = sin i / sin r = sin 50° / sin 30° = 0.766 / 0.5 = 1.53.<br>1.67 is 50 / 30 (using angles instead of their sines); 0.65 is the reciprocal.'
  },
  {
    id: 'W15', topic: 'wave', sub: 'Refraction',
    stem: 'The refractive index of water is 1.33. What is the speed of light in water?<br>(Speed of light in vacuum c = 3.00 × 10⁸ m s⁻¹)',
    options: ['1.33 × 10⁸ m s⁻¹', '2.26 × 10⁸ m s⁻¹', '3.00 × 10⁸ m s⁻¹', '3.99 × 10⁸ m s⁻¹'],
    answer: 1,
    explain: 'n = c / v ⇒ v = c / n = 3.00 × 10⁸ / 1.33 = 2.26 × 10⁸ m s⁻¹.<br>Light is slower in an optically denser medium, so 3.99 × 10⁸ m s⁻¹ (multiplying by n) is impossible.'
  },
  {
    id: 'W16', topic: 'wave', sub: 'Total internal reflection',
    stem: 'A glass block (refractive index 1.50) is placed in water (refractive index 1.33). Which of the following statements is/are correct?',
    statements: [
      'Total internal reflection can occur when light travels from the glass towards the water.',
      'The critical angle at the glass–water boundary is greater than that at a glass–air boundary.',
      'Total internal reflection can occur when light travels from the water towards the glass.'
    ],
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: 0,
    explain: '(1) ✓ Glass is optically denser than water.<br>(2) ✓ Glass–water: sin C = 1.33 / 1.50 ⇒ C = 62.5°. Glass–air: sin C = 1 / 1.50 ⇒ C = 41.8°.<br>(3) ✗ Total internal reflection needs light travelling from the denser to the less dense medium.'
  },
  {
    id: 'W17', topic: 'wave', sub: 'Optical fibres',
    stem: 'An optical fibre has a core of refractive index 1.50 and a cladding of refractive index 1.40. What is the critical angle at the core–cladding boundary?',
    options: ['21.0°', '41.8°', '45.6°', '69.0°'],
    answer: 3,
    explain: 'For light going from the core to the cladding: n<sub>core</sub> sin C = n<sub>clad</sub> sin 90°.<br>sin C = 1.40 / 1.50 = 0.933 ⇒ C = 69.0°.<br>41.8° is the critical angle for a core–air boundary; 21.0° is 90° − 69.0°.'
  },
  {
    id: 'W18', topic: 'wave', sub: 'Lenses',
    stem: 'An object is placed 30 cm in front of a convex lens of focal length 20 cm. How far from the lens is the image formed?',
    options: ['12 cm', '20 cm', '50 cm', '60 cm'],
    answer: 3,
    explain: 'Lens formula (real-is-positive): 1/u + 1/v = 1/f ⇒ 1/30 + 1/v = 1/20 ⇒ 1/v = 1/60 ⇒ v = 60 cm.<br>The image is real, inverted and magnified (m = 60 / 30 = 2). 12 cm comes from adding 1/20 and 1/30.'
  },
  {
    id: 'W19', topic: 'wave', sub: 'Lenses',
    stem: 'An object is placed in front of a concave lens. Whatever the object distance, the image formed is always',
    options: [
      'real, inverted and diminished.',
      'virtual, upright and diminished.',
      'virtual, upright and magnified.',
      'real, upright and magnified.'
    ],
    answer: 1,
    explain: 'A concave (diverging) lens spreads the rays out. They appear to come from a point between the lens and its focal point on the object side, so the image is always virtual, upright and diminished.'
  },
  {
    id: 'W20', topic: 'wave', sub: 'Lenses',
    stem: 'A convex lens of focal length f is used as a magnifying glass. Where should the object be placed?',
    options: [
      'At a distance less than f from the lens',
      'Between f and 2f from the lens',
      'At 2f from the lens',
      'At a distance greater than 2f from the lens'
    ],
    answer: 0,
    explain: 'When the object is inside the focal length, the rays leaving the lens diverge and the image is virtual, upright and magnified — a magnifying glass.<br>Between f and 2f the image is real and inverted (as in a projector).'
  },
  {
    id: 'W21', topic: 'wave', sub: 'Diffraction',
    stem: 'Straight water waves pass through a gap in a barrier in a ripple tank. Which of the following changes would make the diffraction more noticeable?',
    statements: [
      'Making the gap narrower',
      'Increasing the wavelength of the waves',
      'Increasing the frequency of the waves'
    ],
    options: STMT_OPTS,
    answer: 2,
    explain: 'Diffraction is most noticeable when the gap width is comparable to or smaller than the wavelength.<br>(1) ✓ (2) ✓<br>(3) ✗ The speed in water of fixed depth is unchanged, so a higher frequency means a shorter wavelength and less diffraction.'
  },
  {
    id: 'W22', topic: 'wave', sub: 'Interference',
    stem: 'Two coherent sources S₁ and S₂ vibrate in phase and produce water waves of wavelength 2 cm. A point P is 12 cm from S₁ and 17 cm from S₂. Which of the following describes the interference at P?',
    options: [
      'Constructive interference; path difference = 2λ',
      'Constructive interference; path difference = 2.5λ',
      'Destructive interference; path difference = 2λ',
      'Destructive interference; path difference = 2.5λ'
    ],
    answer: 3,
    explain: 'Path difference = 17 − 12 = 5 cm = 5 / 2 λ = 2.5λ.<br>For sources in phase, a path difference of (n + ½)λ gives destructive interference.'
  },
  {
    id: 'W23', topic: 'wave', sub: "Young's double-slit",
    stem: "Which of the following changes would increase the separation of the bright fringes in a Young's double-slit experiment?",
    statements: [
      'Using blue light instead of red light',
      'Moving the screen further away from the slits',
      'Using slits that are closer together'
    ],
    options: STMT_OPTS,
    answer: 3,
    explain: 'Fringe separation Δy = λD / a.<br>(1) ✗ Blue light has a shorter wavelength, so Δy decreases.<br>(2) ✓ Larger D.<br>(3) ✓ Smaller a.'
  },
  {
    id: 'W24', topic: 'wave', sub: 'Diffraction grating',
    stem: 'Monochromatic light is incident normally on a diffraction grating with 300 lines per mm. The second-order bright fringe is observed at an angle of 21.1° from the central bright fringe. What is the wavelength of the light?',
    options: ['300 nm', '600 nm', '1200 nm', '1550 nm'],
    answer: 1,
    explain: 'd = 1 / (300 × 10³) = 3.33 × 10⁻⁶ m.<br>d sin θ = nλ ⇒ λ = 3.33 × 10⁻⁶ × sin 21.1° / 2 = 6.00 × 10⁻⁷ m = 600 nm.<br>1200 nm forgets n = 2; 1550 nm uses cos θ.'
  },
  {
    id: 'W25', topic: 'wave', sub: 'Stationary waves',
    stem: 'A string of length 1.2 m is fixed at both ends. When it is vibrated at 150 Hz, a stationary wave with three loops is formed as shown. What is the speed of the progressive waves on the string?',
    figure: '<svg viewBox="0 0 380 140" role="img" aria-label="String 1.2 m long fixed at both ends vibrating in three loops"><g fill="none" stroke="currentColor"><rect x="32" y="50" width="8" height="40" stroke-width="2"/><rect x="340" y="50" width="8" height="40" stroke-width="2"/><path d="M40 70 L48.3 62.2 L56.7 55 L65 48.8 L73.3 44 L81.7 41 L90 40 L98.3 41 L106.7 44 L115 48.8 L123.3 55 L131.7 62.2 L140 70 L148.3 77.8 L156.7 85 L165 91.2 L173.3 96 L181.7 99 L190 100 L198.3 99 L206.7 96 L215 91.2 L223.3 85 L231.7 77.8 L240 70 L248.3 62.2 L256.7 55 L265 48.8 L273.3 44 L281.7 41 L290 40 L298.3 41 L306.7 44 L315 48.8 L323.3 55 L331.7 62.2 L340 70" stroke-width="2"/><path d="M40 70 L48.3 77.8 L56.7 85 L65 91.2 L73.3 96 L81.7 99 L90 100 L98.3 99 L106.7 96 L115 91.2 L123.3 85 L131.7 77.8 L140 70 L148.3 62.2 L156.7 55 L165 48.8 L173.3 44 L181.7 41 L190 40 L198.3 41 L206.7 44 L215 48.8 L223.3 55 L231.7 62.2 L240 70 L248.3 77.8 L256.7 85 L265 91.2 L273.3 96 L281.7 99 L290 100 L298.3 99 L306.7 96 L315 91.2 L323.3 85 L331.7 77.8 L340 70" stroke-width="1.5" stroke-dasharray="5 3"/><path d="M40 118 H340 M40 112 V124 M340 112 V124" stroke-width="1"/></g><g fill="currentColor" font-size="13" font-family="inherit" text-anchor="middle"><text x="190" y="136">1.2 m</text></g></svg>',
    options: ['60 m s⁻¹', '120 m s⁻¹', '180 m s⁻¹', '360 m s⁻¹'],
    answer: 1,
    explain: 'Each loop is half a wavelength: 3 × λ/2 = 1.2 m ⇒ λ = 0.8 m.<br>v = fλ = 150 × 0.8 = 120 m s⁻¹.<br>60 m s⁻¹ takes one loop as a whole wavelength.'
  },
  {
    id: 'W26', topic: 'wave', sub: 'Sound intensity level',
    stem: 'The sound intensity level at a point is 60 dB. The sound intensity at the point is then increased 100 times. What is the new sound intensity level?',
    options: ['80 dB', '120 dB', '160 dB', '6000 dB'],
    answer: 0,
    explain: 'Intensity level = 10 log (I / I₀) dB. Multiplying I by 100 adds 10 log 100 = 20 dB.<br>New level = 60 + 20 = 80 dB.'
  },
  {
    id: 'W27', topic: 'wave', sub: 'Musical notes',
    stem: 'A piano and a violin play notes of the same pitch and the same loudness, but a listener can tell them apart. This is because the two sound waves have different',
    options: ['waveforms.', 'amplitudes.', 'fundamental frequencies.', 'speeds in air.'],
    answer: 0,
    explain: 'Same pitch ⇒ same fundamental frequency; same loudness ⇒ similar amplitude; all sounds travel at the same speed in air.<br>The quality (timbre) depends on the waveform, i.e. the mixture of overtones.'
  },
  {
    id: 'W28', topic: 'wave', sub: 'Electromagnetic spectrum',
    stem: 'Which of the following lists electromagnetic waves in order of increasing wavelength?',
    options: [
      'γ-rays, ultraviolet, visible light, microwaves',
      'microwaves, infra-red, visible light, X-rays',
      'X-rays, visible light, ultraviolet, radio waves',
      'radio waves, microwaves, γ-rays, infra-red'
    ],
    answer: 0,
    explain: 'In order of increasing wavelength: γ-rays, X-rays, ultraviolet, visible light, infra-red, microwaves, radio waves.<br>B is in decreasing order; C swaps visible light and ultraviolet; D is not in order.'
  },
  {
    id: 'W29', topic: 'wave', sub: 'Electromagnetic spectrum',
    stem: 'Which of the following statements about electromagnetic waves is/are correct?',
    statements: [
      'They are longitudinal waves.',
      'They all travel at the same speed in a vacuum.',
      'X-rays have a higher frequency than radio waves.'
    ],
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: 2,
    explain: '(1) ✗ Electromagnetic waves are transverse (they can be polarized).<br>(2) ✓ All travel at c = 3.00 × 10⁸ m s⁻¹ in a vacuum.<br>(3) ✓ X-rays have a much shorter wavelength, so a much higher frequency.'
  },
  {
    id: 'W30', topic: 'wave', sub: 'Ultrasound',
    stem: 'A ship sends an ultrasound pulse straight down to the sea bed, which is 450 m below. The speed of sound in sea water is 1500 m s⁻¹. How long after the pulse is sent is the echo received?',
    options: ['0.15 s', '0.30 s', '0.45 s', '0.60 s'],
    answer: 3,
    explain: 'The pulse travels down and back up: distance = 2 × 450 = 900 m.<br>t = 900 / 1500 = 0.60 s.<br>0.30 s is the time for the one-way trip only.'
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
    options: ['1/100 of the original.', '1/10 of the original.', '10 times the original.', '100 times the original.'],
    answer: 0,
    explain: 'I = P / V, so the current drops to 1/10.<br>Power loss = I²R ⇒ becomes (1/10)² = 1/100 of the original.'
  },
  {
    id: 'E11', topic: 'elec', sub: 'Magnetic field of a current',
    stem: 'The magnetic field at a distance r from a long straight wire carrying current I is B. What is the magnetic field at a distance 2r from the wire when the current is 2I?',
    options: ['B / 2', 'B', '2B', '4B'],
    answer: 1,
    explain: 'B = μ₀I / (2πr). Doubling I and doubling r leaves B unchanged.'
  },
  {
    id: 'E12', topic: 'elec', sub: 'Current and charge',
    stem: 'A steady current of 0.5 A flows in a wire for 2 minutes. How many electrons pass a point in the wire in this time?<br>(Charge of electron = 1.60 × 10⁻¹⁹ C)',
    options: ['3.13 × 10¹⁸', '6.25 × 10¹⁸', '3.75 × 10²⁰', '7.50 × 10²⁰'],
    answer: 2,
    explain: 'Q = It = 0.5 × (2 × 60) = 60 C.<br>Number of electrons N = Q / e = 60 / (1.60 × 10⁻¹⁹) = 3.75 × 10²⁰.<br>6.25 × 10¹⁸ comes from using t = 2 s.'
  },
  {
    id: 'E13', topic: 'elec', sub: 'Resistivity',
    stem: 'A uniform wire has resistance R. It is stretched uniformly to twice its original length, and its volume is unchanged. What is its new resistance?',
    options: ['R / 4', 'R / 2', '2R', '4R'],
    answer: 3,
    explain: 'R = ρl / A. With the volume lA fixed, doubling l halves A.<br>R′ = ρ(2l) / (A/2) = 4ρl / A = 4R.<br>2R forgets that the wire also becomes thinner.'
  },
  {
    id: 'E14', topic: 'elec', sub: 'Internal resistance',
    stem: 'A battery of e.m.f. 6.0 V and internal resistance 1.0 Ω is connected to a 5.0 Ω resistor. What is the potential difference across the terminals of the battery?',
    options: ['1.0 V', '5.0 V', '6.0 V', '7.0 V'],
    answer: 1,
    explain: 'I = ε / (R + r) = 6.0 / (5.0 + 1.0) = 1.0 A.<br>Terminal p.d. V = ε − Ir = 6.0 − 1.0 × 1.0 = 5.0 V (= IR across the 5.0 Ω resistor).<br>1.0 V is the "lost volts" inside the battery.'
  },
  {
    id: 'E15', topic: 'elec', sub: 'Circuits',
    stem: 'Three identical lamps X, Y and Z are connected to a battery of negligible internal resistance as shown. Lamp X then blows (becomes an open circuit). Assuming the resistance of each lamp is constant, which of the following statements is/are correct?',
    statements: [
      'Lamp Z becomes dimmer.',
      'Lamp Y becomes brighter.',
      'The total power delivered by the battery increases.'
    ],
    figure: '<svg viewBox="0 0 360 190" role="img" aria-label="Battery in series with lamp Z and a parallel pair of lamps X and Y"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M40 40 V92 M40 104 V160 H320 V112 M320 88 V40 H152 M128 40 H40 M260 40 V88 M260 112 V160"/><path d="M24 92 H56"/><path d="M32 104 H48" stroke-width="4"/><circle cx="140" cy="40" r="12"/><path d="M131.5 31.5 L148.5 48.5 M148.5 31.5 L131.5 48.5"/><circle cx="260" cy="100" r="12"/><path d="M251.5 91.5 L268.5 108.5 M268.5 91.5 L251.5 108.5"/><circle cx="320" cy="100" r="12"/><path d="M311.5 91.5 L328.5 108.5 M328.5 91.5 L311.5 108.5"/></g><g fill="currentColor"><circle cx="260" cy="40" r="3.5"/><circle cx="260" cy="160" r="3.5"/></g><g fill="currentColor" font-size="13" font-family="inherit" text-anchor="middle"><text x="140" y="22">Z</text><text x="238" y="105">X</text><text x="344" y="105">Y</text></g></svg>',
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: 0,
    explain: 'Let each lamp have resistance R and the battery e.m.f. be V.<br>Before: total resistance = R + R/2 = 1.5R; p.d. across Z = 2V/3, across Y = V/3.<br>After: Y and Z are in series, total resistance = 2R; p.d. across each = V/2.<br>(1) ✓ Z: 2V/3 → V/2, dimmer.<br>(2) ✓ Y: V/3 → V/2, brighter.<br>(3) ✗ P = V² / R<sub>total</sub>, and R<sub>total</sub> increases, so the total power decreases.'
  },
  {
    id: 'E16', topic: 'elec', sub: 'Electrical power',
    stem: 'A 2 Ω resistor and a 4 Ω resistor are connected in parallel across a 12 V supply of negligible internal resistance. What is the power dissipated in the 4 Ω resistor?',
    options: ['16 W', '36 W', '72 W', '108 W'],
    answer: 1,
    explain: 'In parallel, each resistor has the full 12 V across it.<br>P = V² / R = 12² / 4 = 36 W.<br>16 W is the value if the resistors were in series; 108 W is the total power.'
  },
  {
    id: 'E17', topic: 'elec', sub: 'Domestic electricity',
    stem: 'An electric heater is rated "220 V, 2.4 kW". Which of the following fuses is the most suitable for it?',
    options: ['3 A', '5 A', '10 A', '13 A'],
    answer: 3,
    explain: 'Normal working current I = P / V = 2400 / 220 = 10.9 A.<br>The fuse rating should be slightly above the normal current, so 13 A. A 10 A fuse would blow in normal use.'
  },
  {
    id: 'E18', topic: 'elec', sub: 'Electric field',
    stem: 'A point charge +Q is fixed at a point X and a point charge +4Q is fixed at a point Y, 0.60 m from X. At what distance from X on the line XY is the electric field strength zero?',
    options: ['0.12 m', '0.20 m', '0.30 m', '0.40 m'],
    answer: 1,
    explain: 'Between the charges the two fields point in opposite directions. Let the point be x from X:<br>kQ / x² = k(4Q) / (0.60 − x)² ⇒ (0.60 − x) = 2x ⇒ x = 0.20 m.<br>The neutral point is nearer the smaller charge. 0.40 m is its distance from Y.'
  },
  {
    id: 'E19', topic: 'elec', sub: 'Electric field',
    stem: 'Which of the following statements about electric field lines is/are correct?',
    statements: [
      'Electric field lines never cross each other.',
      'Electric field lines form closed loops.',
      'The electric field is stronger where the field lines are further apart.'
    ],
    options: STMT_OPTS,
    answer: 0,
    explain: '(1) ✓ The field has only one direction at each point.<br>(2) ✗ Electric field lines start on positive charges and end on negative charges. (Magnetic field lines form closed loops.)<br>(3) ✗ The field is stronger where the lines are closer together.'
  },
  {
    id: 'E20', topic: 'elec', sub: 'Electric potential',
    stem: 'An electron starts from rest and is accelerated through a potential difference of 2000 V in a vacuum. What is its final speed?<br>(Charge of electron = 1.60 × 10⁻¹⁹ C; mass of electron = 9.11 × 10⁻³¹ kg)',
    options: ['1.87 × 10⁷ m s⁻¹', '2.65 × 10⁷ m s⁻¹', '3.51 × 10¹⁴ m s⁻¹', '7.03 × 10¹⁴ m s⁻¹'],
    answer: 1,
    explain: 'Work done by the field = gain in KE: eV = ½ mv²<br>v = √(2eV / m) = √(2 × 1.60 × 10⁻¹⁹ × 2000 / 9.11 × 10⁻³¹) = √(7.03 × 10¹⁴) = 2.65 × 10⁷ m s⁻¹.<br>7.03 × 10¹⁴ forgets the square root (it is faster than light!); 1.87 × 10⁷ m s⁻¹ forgets the factor 2.'
  },
  {
    id: 'E21', topic: 'elec', sub: 'Magnetic field of a current',
    stem: 'A long solenoid of length 0.25 m has 500 turns and carries a current of 2.0 A. What is the magnetic field strength inside it, near its centre?<br>(μ₀ = 4π × 10⁻⁷ H m⁻¹)',
    options: ['3.14 × 10⁻⁴ T', '1.26 × 10⁻³ T', '2.51 × 10⁻³ T', '5.03 × 10⁻³ T'],
    answer: 3,
    explain: 'B = μ₀NI / l = 4π × 10⁻⁷ × 500 × 2.0 / 0.25 = 5.03 × 10⁻³ T.<br>1.26 × 10⁻³ T forgets to divide by the length.'
  },
  {
    id: 'E22', topic: 'elec', sub: 'Magnetic force',
    stem: 'An electron moves at 3.0 × 10⁶ m s⁻¹ perpendicular to a uniform magnetic field of 0.020 T. What is the magnitude of the magnetic force on the electron?<br>(Charge of electron = 1.60 × 10⁻¹⁹ C)',
    options: ['9.6 × 10⁻¹⁵ N', '4.8 × 10⁻¹³ N', '2.4 × 10⁻¹¹ N', '6.0 × 10⁴ N'],
    answer: 0,
    explain: 'F = BQv = 0.020 × 1.60 × 10⁻¹⁹ × 3.0 × 10⁶ = 9.6 × 10⁻¹⁵ N.<br>4.8 × 10⁻¹³ N leaves out B; 2.4 × 10⁻¹¹ N divides by B.'
  },
  {
    id: 'E23', topic: 'elec', sub: 'Magnetic force',
    stem: 'A straight wire is placed between the poles of a magnet as shown. The current in the wire flows into the page. In which direction is the magnetic force on the wire?',
    figure: '<svg viewBox="0 0 360 160" role="img" aria-label="Wire carrying current into the page between a north pole on the left and a south pole on the right"><g fill="none" stroke="currentColor" stroke-width="2"><rect x="30" y="30" width="70" height="100"/><rect x="260" y="30" width="70" height="100"/><circle cx="180" cy="80" r="12"/><path d="M172 72 L188 88 M188 72 L172 88"/></g><g fill="currentColor" font-family="inherit" text-anchor="middle"><text x="65" y="87" font-size="20">N</text><text x="295" y="87" font-size="20">S</text><text x="180" y="116" font-size="12">current into page</text></g></svg>',
    options: [
      'Upwards (towards the top of the figure)',
      'Downwards (towards the bottom of the figure)',
      'To the left (towards N)',
      'To the right (towards S)'
    ],
    answer: 1,
    explain: 'The magnetic field points from N to S, i.e. to the right.<br>Fleming\'s left-hand rule: First finger = Field (right), seCond finger = Current (into the page), thuMb = Motion ⇒ downwards.<br>The force is perpendicular to both the field and the current, so it can never be towards N or S.'
  },
  {
    id: 'E24', topic: 'elec', sub: 'Electromagnetic induction',
    stem: 'A metal rod of length 0.50 m moves at 4.0 m s⁻¹ perpendicular to a uniform magnetic field of 0.20 T. The rod, its velocity and the field are mutually perpendicular. What is the induced e.m.f. across the ends of the rod?',
    options: ['0.025 V', '0.10 V', '0.40 V', '1.6 V'],
    answer: 2,
    explain: 'ε = Blv = 0.20 × 0.50 × 4.0 = 0.40 V.'
  },
  {
    id: 'E25', topic: 'elec', sub: "Faraday's law",
    stem: 'A coil of 200 turns and area 0.010 m² is placed with its plane perpendicular to a uniform magnetic field of 0.50 T. The field is reduced steadily to zero in 0.10 s. What is the average induced e.m.f. in the coil?',
    options: ['0.05 V', '0.5 V', '5.0 V', '10 V'],
    answer: 3,
    explain: 'ε = N ΔΦ / Δt = N A ΔB / Δt = 200 × 0.010 × 0.50 / 0.10 = 10 V.<br>0.05 V is the e.m.f. of one turn only.'
  },
  {
    id: 'E26', topic: 'elec', sub: 'Transformers',
    stem: 'Which of the following can reduce the energy loss in a transformer?',
    statements: [
      'Using a laminated iron core',
      'Using thick copper wires for the coils',
      'Using a steel core instead of a soft iron core'
    ],
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: 0,
    explain: '(1) ✓ The insulated laminations reduce eddy currents in the core.<br>(2) ✓ Thick wires have lower resistance, so less I²R heating in the coils.<br>(3) ✗ Steel is hard to magnetize and demagnetize, so repeated magnetization wastes more energy. Soft iron is used.'
  },
  {
    id: 'E27', topic: 'elec', sub: 'Alternating current',
    stem: 'A sinusoidal a.c. supply with a peak voltage of 311 V is connected to a 100 Ω resistor. What is the average power dissipated in the resistor?',
    options: ['484 W', '684 W', '967 W', '3110 W'],
    answer: 0,
    explain: 'V<sub>rms</sub> = V₀ / √2 = 311 / √2 = 220 V.<br>Average power = V<sub>rms</sub>² / R = 220² / 100 = 484 W.<br>967 W uses the peak voltage, which gives the peak power, not the average power.'
  },
  {
    id: 'E28', topic: 'elec', sub: 'Motor effect',
    stem: 'Which of the following statements about a simple d.c. motor is/are correct?',
    statements: [
      'The coil turns because of the electrostatic force between the coil and the magnet.',
      'The commutator reverses the current in the coil every half revolution.',
      'Increasing the number of turns of the coil increases the turning effect.'
    ],
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: 2,
    explain: '(1) ✗ The turning effect comes from the magnetic force on the current-carrying sides of the coil.<br>(2) ✓ This keeps the torque in the same direction so the coil keeps turning one way.<br>(3) ✓ Torque ∝ BINA, so more turns give a larger torque.'
  },
  {
    id: 'E29', topic: 'elec', sub: 'Power transmission',
    stem: 'A power station sends 100 kW of electrical power to a village at 10 kV through cables of total resistance 5.0 Ω. What is the power lost in the cables?',
    options: ['0.5 kW', '5.0 kW', '50 kW', '2.0 × 10⁴ kW'],
    answer: 0,
    explain: 'Current in the cables I = P / V = 100 000 / 10 000 = 10 A.<br>Power loss = I²R = 10² × 5.0 = 500 W = 0.5 kW.<br>2.0 × 10⁴ kW comes from V² / R, but 10 kV is not the voltage across the cables.'
  },
  {
    id: 'E30', topic: 'elec', sub: 'Domestic electricity',
    stem: 'Electrical sockets in a home are usually connected in a ring circuit. What is the main advantage of a ring circuit?',
    options: [
      'Each socket has its own fuse in the consumer unit.',
      'The appliances are connected in series, so they share the mains voltage.',
      'If one socket is faulty, all the other sockets are switched off automatically.',
      'Current can reach each socket by two paths, so thinner cables can be used.'
    ],
    answer: 3,
    explain: 'In a ring circuit the live, neutral and earth wires each form a loop. Current reaches a socket along both sides of the ring, so each cable carries less current and thinner cables can be used. The sockets are in parallel, so each gets the full 220 V.'
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
  },
  {
    id: 'N10', topic: 'nuc', sub: 'Background radiation',
    stem: 'A GM counter placed near a radioactive source records 80 counts per minute. The background count rate is 20 counts per minute. What will the counter record after two half-lives of the source?',
    options: ['15 counts per minute', '20 counts per minute', '35 counts per minute', '40 counts per minute'],
    answer: 2,
    explain: 'Count rate due to the source = 80 − 20 = 60 counts per minute.<br>After two half-lives: 60 × ¼ = 15 counts per minute. The background is unchanged, so the reading = 15 + 20 = 35 counts per minute.<br>20 counts per minute (= 80 / 4) forgets to subtract the background first.'
  },
  {
    id: 'N11', topic: 'nuc', sub: 'Radiation properties',
    stem: 'A GM counter is placed in front of a radioactive source. The background count rate is 50 counts per minute. Different absorbers are placed between the source and the counter, giving the readings below.<br>No absorber: 400 counts per minute<br>A sheet of paper: 400 counts per minute<br>5 mm of aluminium: 50 counts per minute<br>What type(s) of radiation does the source emit?',
    options: ['α only', 'β only', 'α and γ', 'β and γ'],
    answer: 1,
    explain: 'Paper causes no drop ⇒ no α.<br>5 mm of aluminium brings the reading down to the background ⇒ the radiation is stopped by aluminium ⇒ β.<br>γ rays would pass through 5 mm of aluminium and keep the reading above background ⇒ no γ.'
  },
  {
    id: 'N12', topic: 'nuc', sub: 'Radiation properties',
    stem: 'Which of the following statements about α, β and γ radiation is/are correct?',
    statements: [
      'γ rays are not deflected by an electric field.',
      'α particles are deflected more than β particles in the same magnetic field.',
      'α and β particles are deflected in the same direction in a magnetic field.'
    ],
    options: STMT_OPTS,
    answer: 0,
    explain: '(1) ✓ γ rays are electromagnetic waves and carry no charge.<br>(2) ✗ α particles are about 7000 times heavier than β particles, so they are deflected much less.<br>(3) ✗ They carry opposite charges (+2e and −e), so they are deflected in opposite directions.'
  },
  {
    id: 'N13', topic: 'nuc', sub: 'Radioactive decay',
    stem: 'Strontium-90 (⁹⁰₃₈Sr) decays by emitting a β⁻ particle. What is the daughter nucleus?',
    options: ['⁸⁶₃₆Kr', '⁹⁰₃₇Rb', '⁸⁹₃₈Sr', '⁹⁰₃₉Y'],
    answer: 3,
    explain: 'In β⁻ decay a neutron changes into a proton and an electron is emitted:<br>⁹⁰₃₈Sr → ⁹⁰₃₉Y + ⁰₋₁e<br>The mass number is unchanged and the atomic number increases by 1. ⁸⁶₃₆Kr would be the product of α decay.'
  },
  {
    id: 'N14', topic: 'nuc', sub: 'Half-life',
    stem: 'The graph shows how the activity A of a radioactive sample varies with time t. What will the activity of the sample be at t = 25 min?',
    figure: '<svg viewBox="0 0 400 210" role="img" aria-label="Decay curve of activity against time starting at 640 Bq and falling to 160 Bq at 10 min"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M60 180 V10 M60 180 H340"/><path d="M60 20 L73 40.7 L86 58.7 L99 74.4 L112 88.1 L125 100 L138 110.4 L151 119.4 L164 127.2 L177 134.1 L190 140 L203 145.2 L216 149.7 L229 153.6 L242 157 L255 160 L268 162.6 L281 164.8 L294 166.8 L307 168.5 L320 170" stroke-width="2.5"/></g><g fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"><path d="M60 140 H190 V180"/></g><g fill="currentColor" font-size="13" font-family="inherit" text-anchor="middle"><text x="52" y="24" text-anchor="end">640</text><text x="52" y="144" text-anchor="end">160</text><text x="60" y="196">0</text><text x="190" y="196">10</text><text x="68" y="12" text-anchor="start">A / Bq</text><text x="345" y="184" text-anchor="start">t / min</text></g></svg>',
    options: ['20 Bq', '40 Bq', '80 Bq', '128 Bq'],
    answer: 0,
    explain: 'From the graph, A falls from 640 Bq to 160 Bq (a quarter) in 10 min ⇒ 2 half-lives ⇒ half-life = 5 min.<br>25 min = 5 half-lives ⇒ A = 640 × (½)⁵ = 20 Bq.<br>40 Bq is the activity at 20 min.'
  },
  {
    id: 'N15', topic: 'nuc', sub: 'Decay constant',
    stem: 'A radioactive sample contains 2.0 × 10²⁰ undecayed nuclei. The half-life of the nuclide is 8.0 days. What is the activity of the sample?',
    options: ['2.0 × 10¹⁴ Bq', '2.9 × 10¹⁴ Bq', '1.7 × 10¹⁹ Bq', '2.5 × 10¹⁹ Bq'],
    answer: 0,
    explain: 'Decay constant k = ln 2 / t<sub>½</sub> = 0.693 / (8.0 × 24 × 3600 s) = 1.0 × 10⁻⁶ s⁻¹.<br>A = kN = 1.0 × 10⁻⁶ × 2.0 × 10²⁰ = 2.0 × 10¹⁴ Bq.<br>1.7 × 10¹⁹ uses k in day⁻¹, which gives decays per day, not becquerels.'
  },
  {
    id: 'N16', topic: 'nuc', sub: 'Decay law',
    stem: 'What percentage of the nuclei in a radioactive sample remains undecayed after a time equal to 1.5 half-lives?',
    options: ['25.0 %', '35.4 %', '37.5 %', '75.0 %'],
    answer: 1,
    explain: 'N / N₀ = (½)^(t / t<sub>½</sub>) = (½)^1.5 = 0.354 = 35.4 %.<br>37.5 % assumes the number falls linearly between 50 % and 25 %, but radioactive decay is exponential.'
  },
  {
    id: 'N17', topic: 'nuc', sub: 'Radiation safety',
    stem: 'Which of the following are good practices when handling radioactive sources in a school laboratory?',
    statements: [
      'Hold the sources with long tongs.',
      'Store the sources in lead-lined boxes when they are not in use.',
      'Never point a source towards anyone.'
    ],
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: 3,
    explain: 'All three reduce the dose received.<br>(1) Tongs increase the distance from the source.<br>(2) Lead absorbs the radiation (shielding).<br>(3) Keeps people out of the beam.'
  },
  {
    id: 'N18', topic: 'nuc', sub: 'Uses of radioisotopes',
    stem: 'A factory monitors the thickness of the paper it produces by placing a radioactive source on one side of the paper and a detector on the other. Which of the following sources is the most suitable?',
    options: [
      'An α source with a half-life of 2 days',
      'An α source with a half-life of 400 years',
      'A β source with a half-life of 2 days',
      'A β source with a half-life of 30 years'
    ],
    answer: 3,
    explain: 'α particles are stopped completely by paper, and γ rays would pass through with almost no change. β particles are partly absorbed, so the count rate changes noticeably with the thickness.<br>A long half-life keeps the count rate steady over the months of use, so changes are due to the paper and not to decay.'
  },
  {
    id: 'N19', topic: 'nuc', sub: 'Uses of radioisotopes',
    stem: 'A radioisotope is injected into a patient as a tracer to check the function of an organ. The radiation is detected by a camera outside the body. Which of the following is the most suitable?',
    options: [
      'A γ emitter with a half-life of 6 hours',
      'A γ emitter with a half-life of 5000 years',
      'An α emitter with a half-life of 6 hours',
      'A β emitter with a half-life of 30 years'
    ],
    answer: 0,
    explain: 'The radiation must pass out of the body to reach the camera, so γ. α is stopped inside the body and is highly ionizing, which damages the tissue.<br>A half-life of a few hours is long enough for the test but short enough that the patient\'s dose is small.'
  },
  {
    id: 'N20', topic: 'nuc', sub: 'Fission and fusion',
    stem: 'Which of the following statements about nuclear fission and nuclear fusion is/are correct?',
    statements: [
      'In both processes, the total mass of the products is less than that of the reactants.',
      'Fusion requires an extremely high temperature.',
      'The products of fission are mostly stable nuclides.'
    ],
    options: STMT_OPTS,
    answer: 2,
    explain: '(1) ✓ The mass difference Δm is released as energy E = Δmc².<br>(2) ✓ The nuclei need very high kinetic energy to overcome the electrostatic repulsion between them.<br>(3) ✗ Fission fragments are neutron-rich and highly radioactive, which is why nuclear waste is a problem.'
  },
  {
    id: 'N21', topic: 'nuc', sub: 'Mass–energy',
    stem: 'In the fusion reaction ²₁H + ³₁H → ⁴₂He + ¹₀n, how much energy is released?<br>(Masses: ²₁H = 2.01410 u, ³₁H = 3.01605 u, ⁴₂He = 4.00260 u, ¹₀n = 1.00867 u; 1 u is equivalent to 931 MeV)',
    options: ['0.0189 MeV', '17.6 MeV', '28.3 MeV', '957 MeV'],
    answer: 1,
    explain: 'Mass of reactants = 2.01410 + 3.01605 = 5.03015 u.<br>Mass of products = 4.00260 + 1.00867 = 5.01127 u.<br>Δm = 0.01888 u ⇒ E = 0.01888 × 931 = 17.6 MeV.<br>0.0189 MeV forgets to convert from u; 957 MeV leaves out the neutron.'
  },
  {
    id: 'N22', topic: 'nuc', sub: 'X-rays',
    stem: 'Which of the following statements about X-rays is correct?',
    options: [
      'They are deflected by magnetic fields.',
      'They are streams of fast-moving electrons.',
      'They are electromagnetic waves of very short wavelength.',
      'They cannot pass through human tissue.'
    ],
    answer: 2,
    explain: 'X-rays are electromagnetic waves with wavelengths of about 10⁻⁸ to 10⁻¹³ m, produced when fast electrons hit a metal target. They carry no charge, so they are not deflected by magnetic fields. They pass easily through soft tissue but are absorbed more by bone, which is why they are used for medical images.'
  },
  {
    id: 'N23', topic: 'nuc', sub: 'Radioactive decay',
    stem: 'A nucleus of radium-226 (²²⁶₈₈Ra) emits an α particle, and the daughter nucleus then emits a β⁻ particle. What is the final nucleus?',
    options: ['²²²₈₆Rn', '²²²₈₇Fr', '²²²₈₉Ac', '²²⁶₈₇Fr'],
    answer: 1,
    explain: 'α decay: A − 4, Z − 2 ⇒ ²²²₈₆Rn.<br>β⁻ decay: A unchanged, Z + 1 ⇒ ²²²₈₇Fr.<br>²²²₈₆Rn is the product after the α decay only.'
  },
  {
    id: 'N24', topic: 'nuc', sub: 'Half-life',
    stem: 'What fraction of the nuclei in a radioactive sample has decayed after three half-lives?',
    options: ['1/8', '3/8', '2/3', '7/8'],
    answer: 3,
    explain: 'Fraction remaining = (½)³ = 1/8.<br>Fraction decayed = 1 − 1/8 = 7/8.<br>1/8 is the fraction that remains, not the fraction that has decayed.'
  },
  {
    id: 'N25', topic: 'nuc', sub: 'Half-life',
    stem: 'A sample contains 64 g of a radioactive isotope with a half-life of 2 years. What mass of the isotope will remain after 10 years?',
    options: ['2 g', '4 g', '6.4 g', '12.8 g'],
    answer: 0,
    explain: '10 years = 5 half-lives.<br>Mass remaining = 64 × (½)⁵ = 2 g.<br>6.4 g and 12.8 g treat the decay as linear.'
  },
  {
    id: 'N26', topic: 'nuc', sub: 'Radioactive dating',
    stem: 'The carbon-14 activity per gram of carbon in an ancient piece of wood is 12.5 % of that in living wood. The half-life of carbon-14 is 5730 years. Estimate the age of the wood.',
    options: ['5.73 × 10³ years', '1.15 × 10⁴ years', '1.43 × 10⁴ years', '1.72 × 10⁴ years'],
    answer: 3,
    explain: '12.5 % = 1/8 = (½)³ ⇒ 3 half-lives.<br>Age = 3 × 5730 = 17 190 years ≈ 1.72 × 10⁴ years.'
  },
  {
    id: 'N27', topic: 'nuc', sub: 'Detection of radiation',
    stem: 'In a cloud chamber, the tracks of α particles are short, thick and straight. Which of the following help(s) to explain this?',
    statements: [
      'α particles have a strong ionizing power.',
      'α particles have a short range in air.',
      'α particles carry no charge.'
    ],
    options: ['(1) and (2) only', '(1) and (3) only', '(2) and (3) only', '(1), (2) and (3)'],
    answer: 0,
    explain: '(1) ✓ Many ions are formed along the path, so many droplets ⇒ thick tracks.<br>(2) ✓ They lose energy quickly and travel only a few cm in air ⇒ short tracks. Being heavy, they are hardly deflected by collisions with electrons ⇒ straight.<br>(3) ✗ α particles are helium nuclei with charge +2e.'
  },
  {
    id: 'N28', topic: 'nuc', sub: 'Background radiation',
    stem: 'Which of the following is NOT a source of background radiation?',
    options: [
      'Radon gas in the air',
      'Cosmic rays from outer space',
      'Rocks and building materials',
      'Microwave ovens in homes'
    ],
    answer: 3,
    explain: 'Background radiation is ionizing radiation that is always around us, from radon gas, cosmic rays, rocks and soil, food, and medical sources. Microwaves are non-ionizing electromagnetic waves and are kept inside the oven by its metal case.'
  },
  {
    id: 'N29', topic: 'nuc', sub: 'Nuclear reactor',
    stem: 'Which of the following statements about a nuclear fission reactor is/are correct?',
    statements: [
      'The control rods absorb neutrons to control the rate of the chain reaction.',
      'The moderator absorbs neutrons to stop the chain reaction.',
      'The coolant slows down the neutrons.'
    ],
    options: STMT_OPTS,
    answer: 0,
    explain: '(1) ✓ Raising or lowering the control rods (e.g. boron) changes the number of neutrons available for fission.<br>(2) ✗ The moderator (e.g. graphite or water) slows the neutrons down so they are more likely to cause fission.<br>(3) ✗ The coolant carries thermal energy from the core to the heat exchanger.'
  },
  {
    id: 'N30', topic: 'nuc', sub: 'Nuclear fission',
    stem: 'Each fission of a uranium-235 nucleus releases about 200 MeV of energy. Estimate the energy released by the complete fission of 1 kg of uranium-235.<br>(Molar mass of uranium-235 = 235 g mol⁻¹; N<sub>A</sub> = 6.02 × 10²³ mol⁻¹; 1 MeV = 1.60 × 10⁻¹³ J)',
    options: ['8.2 × 10¹⁰ J', '8.2 × 10¹³ J', '9.0 × 10¹⁶ J', '5.1 × 10²⁶ J'],
    answer: 1,
    explain: 'Number of nuclei = (1000 / 235) × 6.02 × 10²³ = 2.56 × 10²⁴.<br>E = 2.56 × 10²⁴ × 200 × 1.60 × 10⁻¹³ = 8.2 × 10¹³ J.<br>8.2 × 10¹⁰ J uses 1 g; 9.0 × 10¹⁶ J is mc² for the whole 1 kg, but only about 0.1 % of the mass is converted.'
  }
];
