# DSE Physics Review

A static revision site for HKDSE Physics students:

- **Topic practice**: choose topics and HKDSE levels, then answer Paper 1 Section A style MC questions, with a worked solution after each one.
- **Structured questions**: Paper 1 Section B style questions in several parts. Type your working for each part, then reveal the suggested answer and tick the marking points you earned. Numerical final answers are checked automatically (within 2 %).
- **Mixed practice**: MC and structured questions in one session, about one structured question after every three MC.
- **Concept questions with figures**: 80 MC questions built around graphs and diagrams, such as motion graphs, field patterns, ray diagrams, decay curves and circuits. All figures are drawn in SVG (no photos), so they stay sharp and follow the light and dark themes.
- **Levelled question bank**: over 1100 MC questions, each tagged with the HKDSE grade band at which students usually get it right: Lv 2, Lv 3, Lv 4 or Lv 5/5**. Each topic has at least 11 questions at every level. Home, the result page and the wrong book show accuracy and filters by level. Levels are the setter's estimate, not an official HKEAA classification.
- **Mock paper**: 33 questions across the compulsory part in syllabus order, with a 60-minute timer and a bubble answer sheet. Solutions appear only after you hand in.
- **Wrong question book (錯題簿)**: every wrong answer is collected automatically. Add notes, redo questions, and clear one by getting it right twice in a row. The mock paper and the wrong book cover MC questions only.
- **List of data**: physical constants and exam tips.
- **English and Traditional Chinese (繁體中文)**: the button in the top bar switches the whole site, including every question and worked solution. The choice is remembered, and the site opens in Chinese when the browser language is Chinese.

Progress is saved in the browser's `localStorage`. You can export or import it from the Home page. Progress is shared between the two languages.

## The question bank

The bank has 1107 MC questions (about 220 per topic) and 40 structured questions (8 per topic), in these files:

| File | What it holds |
|---|---|
| `questions.js` + `questions.zh.js` | The original 177 questions, with their Chinese text in a separate file keyed by id. `questions.js` also defines `TOPICS`, `LEVELS` and the field list. |
| `bank/heat.js`, `force.js`, `wave.js`, `elec.js`, `nuc.js` | 350 more hand-written questions (70 per topic). Each question carries its Chinese text in a `zh` field next to the English. |
| `bank/concept.js` | 80 concept MC questions with figures (16 per topic), drawn with the `svgGraph()` and `svgPanels()` helpers or as hand-made SVG. |
| `bank/templates.js` | 50 number-variant templates, 10 per topic, giving 500 questions. Each template computes the answer, the wrong options (from common mistakes) and the worked solution, in both languages. |
| `bank/sq-heat.js`, `sq-force.js`, `sq-wave.js`, `sq-elec.js`, `sq-nuc.js` | Structured questions, 8 per topic (Lv 3 to Lv 5/5**), each with 3–5 parts and a marking scheme. |

`bank/core.js` holds `addBank()`, `addStructured()`, the graph helpers and the `template()` engine. Variants of one template share a `family` (e.g. `TH02`), and practice and mock papers use at most one variant per family before repeating.

## Adding questions

**A hand-written question:** add an object to the relevant `bank/<topic>.js` file. The field list and the meaning of each `level` (2, 3, 4, 5) are at the top of `questions.js`. Keep four options (A–D) in the HKDSE style, with numerical options in ascending order. For statement questions, use the `statements` array with the usual option sets such as `STMT_OPTS` (`(1) only`, `(3) only`, `(1) and (2) only`, `(2) and (3) only`).

Put the Chinese version in a `zh` field: `sub`, `stem`, `explain`, and `statements` if the question has them. Add `options` only when the options contain words. Numerical options are reused as they are, and statement option sets are converted automatically (`(1) and (2) only` → `只有 (1) 及 (2)`). The answer, figure and option order always come from the English question. A question with no Chinese text falls back to English.

**A figure:** use `svgGraph({ x, y, lines, dots, text, guides })` for a single graph, or `svgPanels([...], { x, y, mid })` for four sketch graphs labelled A–D (see the comments in `bank/core.js`). Hand-made SVG works too. Draw with `currentColor` rather than fixed colours, and add any English words in the figure to the figure list in `i18n.js`.

**A structured question:** add an object to the relevant `bank/sq-<topic>.js` file:

```js
{ id, topic, level, sub, stem, figure?,
  parts: [{ label: '(a)', q, marks, answer, points: [one marking point per mark], num?: { v, unit, tol } }],
  zh: { sub, stem, parts: [{ q, answer, points }] } }
```

`num` is the expected numerical final answer. The app checks the last number the student types against it, within `tol` (relative, default 0.02). Write marking points in the HKDSE style, ending with `[1M]` for a method mark or `[1A]` for an answer mark.

**A new template:** copy one in `bank/templates.js`. Give it a new `family` id, a list of parameter sets, and a `build` function that returns the answer, a few mistake-based wrong values and the stem and explanation in both languages. The engine picks the wrong options and rotates the correct answer through A–D.

Interface text is in `i18n.js`, keyed by the English string used in `app.js`. That file also lists the words inside figures that are swapped into Chinese.

After changing any CSS or JS file, bump the `?v=` number on its link in `index.html`, so returning visitors don't get an old copy from the cache.

## Running locally

Open `index.html` in a browser, or serve the folder:

```
python -m http.server 8000
```

## Hosting

The site is plain HTML, CSS and JS with no build step, so it can be served by GitHub Pages straight from the `main` branch root.
