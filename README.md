# DSE Physics Review

A static revision site for HKDSE Physics students:

- **Topic practice**: choose topics and answer Paper 1 Section A style MC questions, with a worked solution after each one.
- **Mock paper**: 33 questions across the compulsory part in syllabus order, with a 60-minute timer and a bubble answer sheet. Solutions appear only after you hand in.
- **Wrong question book (錯題簿)**: every wrong answer is collected automatically. Add notes, redo questions, and clear one by getting it right twice in a row.
- **List of data**: physical constants and exam tips.

Progress is saved in the browser's `localStorage`. You can export or import it from the Home page.

## Adding questions

Edit `questions.js`. Each question is one object. The field list is at the top of that file. Keep four options (A–D) in the HKDSE style. For statement questions, use the `statements` array with the usual option sets such as `(1) only` and `(1) and (2) only`.

## Running locally

Open `index.html` in a browser, or serve the folder:

```
python -m http.server 8000
```

## Hosting

The site is plain HTML, CSS and JS with no build step, so it can be served by GitHub Pages straight from the `main` branch root.
