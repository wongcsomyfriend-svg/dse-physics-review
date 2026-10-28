/*
 * A small QR code encoder, so the site needs no outside library (it must work where CDNs are blocked).
 * Byte mode, error-correction level M, versions 1–10 (text up to 213 bytes of UTF-8 — plenty for a URL).
 * Follows ISO/IEC 18004: Reed–Solomon error correction, block interleaving, all eight masks with the
 * standard penalty rules, format and version information.
 *
 * window.qrMatrix(text) returns an array of rows of booleans (true = dark), without the quiet zone.
 */
(function () {
  'use strict';
  // Level M block structure: [EC codewords per block, [number of blocks, data codewords per block], ...]
  const BLOCKS = [null,
    [10, [1, 16]], [16, [1, 28]], [26, [1, 44]], [18, [2, 32]], [24, [2, 43]],
    [16, [4, 27]], [18, [4, 31]], [22, [2, 38], [2, 39]], [22, [3, 36], [2, 37]], [26, [4, 43], [1, 44]]];
  const ALIGN = [null, [], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50]];

  // Arithmetic in GF(256) with the QR polynomial x⁸ + x⁴ + x³ + x² + 1.
  const EXP = new Array(512), LOG = new Array(256);
  for (let i = 0, v = 1; i < 255; i++) { EXP[i] = v; LOG[v] = i; v <<= 1; if (v & 256) v ^= 0x11d; }
  for (let i = 255; i < 512; i++) EXP[i] = EXP[i - 255];
  const mul = (a, b) => (a && b ? EXP[LOG[a] + LOG[b]] : 0);
  function rsRemainder(data, n) {
    let g = [1];                                   // generator polynomial, highest power first
    for (let i = 0; i < n; i++) {
      const ng = new Array(g.length + 1).fill(0);
      for (let j = 0; j < g.length; j++) { ng[j] ^= g[j]; ng[j + 1] ^= mul(g[j], EXP[i]); }
      g = ng;
    }
    const r = data.concat(new Array(n).fill(0));
    for (let i = 0; i < data.length; i++) {
      const c = r[i];
      if (c) for (let j = 0; j < g.length; j++) r[i + j] ^= mul(g[j], c);
    }
    return r.slice(data.length);
  }

  // Data codewords followed by error-correction codewords, interleaved block by block.
  function codewords(bytes, ver) {
    const spec = BLOCKS[ver], ecLen = spec[0], groups = spec.slice(1);
    const dataLen = groups.reduce((t, [n, k]) => t + n * k, 0);
    const bits = [];
    const put = (val, len) => { for (let i = len - 1; i >= 0; i--) bits.push((val >>> i) & 1); };
    put(4, 4);                                     // byte mode
    put(bytes.length, ver < 10 ? 8 : 16);
    bytes.forEach(b => put(b, 8));
    put(0, Math.min(4, dataLen * 8 - bits.length)); // terminator
    while (bits.length % 8) bits.push(0);
    const data = [];
    for (let i = 0; i < bits.length; i += 8) data.push(bits.slice(i, i + 8).reduce((a, b) => (a << 1) | b, 0));
    for (let pad = 0xEC; data.length < dataLen; pad ^= 0xEC ^ 0x11) data.push(pad);
    const blocks = [];
    let k = 0;
    groups.forEach(([n, len]) => { for (let i = 0; i < n; i++) { blocks.push(data.slice(k, k + len)); k += len; } });
    const ecs = blocks.map(b => rsRemainder(b, ecLen));
    const out = [];
    const maxLen = Math.max(...blocks.map(b => b.length));
    for (let i = 0; i < maxLen; i++) blocks.forEach(b => { if (i < b.length) out.push(b[i]); });
    for (let i = 0; i < ecLen; i++) ecs.forEach(e => out.push(e[i]));
    return out;
  }

  function build(cw, ver, mask) {
    const size = 17 + 4 * ver;
    const m = [], fn = [];
    for (let i = 0; i < size; i++) { m.push(new Array(size).fill(false)); fn.push(new Array(size).fill(false)); }
    const set = (x, y, dark) => { m[y][x] = dark; fn[y][x] = true };   // x = column, y = row
    // Timing patterns, then finder patterns (with separators) and alignment patterns.
    for (let i = 0; i < size; i++) { set(6, i, i % 2 === 0); set(i, 6, i % 2 === 0); }
    [[3, 3], [size - 4, 3], [3, size - 4]].forEach(([cx, cy]) => {
      for (let dy = -4; dy <= 4; dy++) for (let dx = -4; dx <= 4; dx++) {
        const x = cx + dx, y = cy + dy, d = Math.max(Math.abs(dx), Math.abs(dy));
        if (x >= 0 && x < size && y >= 0 && y < size) set(x, y, d !== 2 && d !== 4);
      }
    });
    const al = ALIGN[ver], last = al.length - 1;
    al.forEach((ay, i) => al.forEach((ax, j) => {
      if ((i === 0 && j === 0) || (i === 0 && j === last) || (i === last && j === 0)) return;
      for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) set(ax + dx, ay + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
    }));
    // Format information (level M = 00) and the dark module.
    const fdata = (0 << 3) | mask;
    let rem = fdata;
    for (let i = 0; i < 10; i++) rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
    const fbits = ((fdata << 10) | rem) ^ 0x5412, fb = i => ((fbits >>> i) & 1) === 1;
    for (let i = 0; i <= 5; i++) set(8, i, fb(i));
    set(8, 7, fb(6)); set(8, 8, fb(7)); set(7, 8, fb(8));
    for (let i = 9; i < 15; i++) set(14 - i, 8, fb(i));
    for (let i = 0; i < 8; i++) set(size - 1 - i, 8, fb(i));
    for (let i = 8; i < 15; i++) set(8, size - 15 + i, fb(i));
    set(8, size - 8, true);
    // Version information for versions 7 and above.
    if (ver >= 7) {
      let r = ver;
      for (let i = 0; i < 12; i++) r = (r << 1) ^ ((r >>> 11) * 0x1F25);
      const vbits = (ver << 12) | r;
      for (let i = 0; i < 18; i++) {
        const dark = ((vbits >>> i) & 1) === 1, a = size - 11 + (i % 3), b = Math.floor(i / 3);
        set(a, b, dark); set(b, a, dark);
      }
    }
    // Data bits in the zig-zag order, skipping function modules, with the mask applied.
    const MASK = [
      (x, y) => (x + y) % 2 === 0, (x, y) => y % 2 === 0, (x, y) => x % 3 === 0, (x, y) => (x + y) % 3 === 0,
      (x, y) => (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0, (x, y) => (x * y) % 2 + (x * y) % 3 === 0,
      (x, y) => ((x * y) % 2 + (x * y) % 3) % 2 === 0, (x, y) => ((x + y) % 2 + (x * y) % 3) % 2 === 0][mask];
    let bit = 0;
    const total = cw.length * 8;
    for (let right = size - 1; right >= 1; right -= 2) {
      if (right === 6) right = 5;
      for (let vert = 0; vert < size; vert++) {
        for (let j = 0; j < 2; j++) {
          const x = right - j, upward = ((right + 1) & 2) === 0, y = upward ? size - 1 - vert : vert;
          if (fn[y][x]) continue;
          let dark = false;
          if (bit < total) { dark = ((cw[bit >>> 3] >>> (7 - (bit & 7))) & 1) === 1; bit++; }
          m[y][x] = dark !== MASK(x, y);
        }
      }
    }
    return m;
  }

  // The four penalty rules used to choose the mask.
  function penalty(m) {
    const n = m.length;
    let p = 0, dark = 0;
    const lines = [];
    for (let i = 0; i < n; i++) { lines.push(m[i]); lines.push(m.map(row => row[i])); }
    lines.forEach(line => {
      let run = 1;
      for (let i = 1; i <= n; i++) {
        if (i < n && line[i] === line[i - 1]) run++;
        else { if (run >= 5) p += 3 + (run - 5); run = 1; }
      }
      const s = line.map(v => (v ? 1 : 0)).join('');
      const re = /(?=(10111010000|00001011101))/g;
      p += 40 * (s.match(re) || []).length;
    });
    for (let y = 0; y < n - 1; y++) for (let x = 0; x < n - 1; x++) {
      const c = m[y][x];
      if (c === m[y][x + 1] && c === m[y + 1][x] && c === m[y + 1][x + 1]) p += 3;
    }
    m.forEach(row => row.forEach(v => { if (v) dark++; }));
    p += 10 * Math.floor(Math.abs(dark * 100 / (n * n) - 50) / 5);
    return p;
  }

  window.qrMatrix = function (text) {
    const bytes = Array.from(new TextEncoder().encode(String(text)));
    let ver = 1;
    for (; ver <= 10; ver++) {
      const cap = BLOCKS[ver].slice(1).reduce((t, [n, k]) => t + n * k, 0) * 8;
      if (4 + (ver < 10 ? 8 : 16) + bytes.length * 8 <= cap) break;
    }
    if (ver > 10) throw new Error('Text too long for this QR encoder');
    const cw = codewords(bytes, ver);
    let best = null, bestP = Infinity;
    for (let mask = 0; mask < 8; mask++) {
      const m = build(cw, ver, mask), p = penalty(m);
      if (p < bestP) { best = m; bestP = p; }
    }
    return best;
  };
  window.qrMatrix.forMask = (text, mask) => {   // for testing: build with a fixed mask
    const bytes = Array.from(new TextEncoder().encode(String(text)));
    let ver = 1;
    for (; ver <= 10; ver++) if (4 + (ver < 10 ? 8 : 16) + bytes.length * 8 <= BLOCKS[ver].slice(1).reduce((t, [n, k]) => t + n * k, 0) * 8) break;
    return build(codewords(bytes, ver), ver, mask);
  };
})();
