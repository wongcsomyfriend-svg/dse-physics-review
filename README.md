# DSE Physics Review

A static revision site for HKDSE Physics students:

- **Topic practice**: choose topics and answer Paper 1 Section A style MC questions, with a worked solution after each one.
- **Mock paper**: 33 questions across the compulsory part in syllabus order, with a 60-minute timer and a bubble answer sheet. Solutions appear only after you hand in.
- **Wrong question book (錯題簿)**: every wrong answer is collected automatically. Add notes, redo questions, and clear one by getting it right twice in a row.
- **List of data**: physical constants and exam tips.
- **English and Traditional Chinese (繁體中文)**: the button in the top bar switches the whole site, including every question and worked solution. The choice is remembered, and the site opens in Chinese when the browser language is Chinese.

Progress is saved in the browser's `localStorage`. You can export or import it from the Home page. Progress is shared between the two languages.

## Adding questions

Edit `questions.js`. Each question is one object. The field list is at the top of that file. Keep four options (A–D) in the HKDSE style. For statement questions, use the `statements` array with the usual option sets such as `(1) only` and `(1) and (2) only`.

Then add the Chinese version to `questions.zh.js` under the same id, with `sub`, `stem`, `explain`, and `statements` if the question has them. Add `options` only when the options contain words. Numerical options are reused as they are, and statement option sets are converted automatically (`(1) and (2) only` → `只有 (1) 及 (2)`). The answer, figure and option order always come from `questions.js`. A question with no Chinese entry falls back to English.

Interface text is in `i18n.js`, keyed by the English string used in `app.js`. That file also lists the words inside figures that are swapped into Chinese.

After changing any CSS or JS file, bump the `?v=` number on its link in `index.html`, so returning visitors don't get an old copy from the cache.

## Running locally

Open `index.html` in a browser, or serve the folder:

```
python -m http.server 8000
```

## Hosting

The site is plain HTML, CSS and JS with no build step, so it can be served by GitHub Pages straight from the `main` branch root.
