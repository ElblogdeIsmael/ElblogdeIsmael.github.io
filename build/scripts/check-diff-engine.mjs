/**
 * Checks the diff engine that powers /diffchecker/.
 *
 * The engine decides what the tool shows AND what the merge button writes to
 * disk, so a wrong answer here is the worst kind of defect: the screen looks
 * right and the downloaded file is not. Every property below is checked by
 * comparing whole strings, never counts.
 *
 * The cases are generated from a seeded pseudo random source, so a failure is
 * reproducible: rerun with the seed the report prints.
 *
 * Usage: node build/scripts/check-diff-engine.mjs [--seed N] [--cases N]
 *
 * @author Ismael Sallami Moreno
 */

import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");

/**
 * The engine is a plain browser script, so it is evaluated here rather than
 * imported: this package is `"type": "module"`, and a `require()` would read
 * the file as ESM. Passing `window` as undefined makes the script take its
 * Node branch and hand the API back through `module.exports`.
 */
function loadEngine() {
  const path = resolve(ROOT, "diffchecker/js/diff.js");
  const shim = { exports: {} };
  new Function("module", "window", readFileSync(path, "utf8"))(shim, undefined);
  return shim.exports;
}

const DIFF = loadEngine();

/** Line endings are normalised to LF, so expectations must be too. */
const lf = (text) => text.replace(/\r\n?/g, "\n");

/* ------------------------------------------------------------------ *
 * Seeded random source
 * ------------------------------------------------------------------ */

/**
 * mulberry32. Small, fast and good enough to shuffle text around.
 * @param {number} seed
 * @returns {() => number}
 */
function rng(seed) {
  let a = seed >>> 0;
  return function next() {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const WORDS = [
  "precio",
  "total",
  "if",
  "return",
  "función",
  "año",
  "café",
  "\\section",
  "42",
  "",
  "  sangrado",
  "línea con acentos: ñ á é",
  "x",
];

/** @param {() => number} next @returns {string} */
function randomLine(next) {
  const count = 1 + Math.floor(next() * 4);
  const parts = [];
  for (let i = 0; i < count; i++) {
    parts.push(WORDS[Math.floor(next() * WORDS.length)]);
  }
  return parts.join(" ");
}

/** @param {() => number} next @param {number} lines @returns {string[]} */
function randomText(next, lines) {
  const out = [];
  for (let i = 0; i < lines; i++) out.push(randomLine(next));
  return out;
}

/**
 * Derives a second version by applying random edits: the realistic shape of
 * the input, two texts that share most of their lines.
 * @param {() => number} next
 * @param {string[]} lines
 * @returns {string[]}
 */
function mutate(next, lines) {
  const out = lines.slice();
  const edits = Math.floor(next() * 8);

  for (let i = 0; i < edits; i++) {
    if (out.length === 0) {
      out.push(randomLine(next));
      continue;
    }
    const at = Math.floor(next() * out.length);
    const roll = next();

    if (roll < 0.3) out.splice(at, 0, randomLine(next));
    else if (roll < 0.6) out.splice(at, 1);
    else if (roll < 0.85) out[at] = randomLine(next);
    else {
      // Move a block: the case a naive line matcher gets wrong.
      const size = 1 + Math.floor(next() * 3);
      const block = out.splice(at, size);
      out.splice(Math.floor(next() * (out.length + 1)), 0, ...block);
    }
  }

  return out;
}

/* ------------------------------------------------------------------ *
 * Properties
 * ------------------------------------------------------------------ */

const failures = [];

/**
 * @param {string} what
 * @param {boolean} ok
 * @param {object} context
 */
function assert(what, ok, context) {
  if (ok) return;
  failures.push({ what, context });
}

/** Sets the same choice on every hunk. */
function chooseAll(result, choice) {
  for (const hunk of result.hunks) hunk.choice = choice;
  return result;
}

/**
 * Runs every property against one pair of texts.
 * @param {string} label
 * @param {string} left
 * @param {string} right
 * @param {object} [options]
 */
function checkPair(label, left, right, options) {
  const result = DIFF.compare(left, right, options);
  const context = { label, left, right, options };

  // 1 and 2. The merge is the product the user downloads. Taking one side
  //          whole has to give that side back, byte for byte.
  assert(
    `${label}: todo a la izquierda reproduce el texto izquierdo`,
    DIFF.merge(chooseAll(result, "left")) === lf(left),
    context,
  );
  assert(
    `${label}: todo a la derecha reproduce el texto derecho`,
    DIFF.merge(chooseAll(result, "right")) === lf(right),
    context,
  );

  // 3. The rows are the diff itself: reading one side of them in order must
  //    rebuild that side. This is what proves nothing was dropped.
  const leftRows = result.rows
    .filter((row) => row.left.text !== null)
    .map((row) => row.left.text);
  const rightRows = result.rows
    .filter((row) => row.right.text !== null)
    .map((row) => row.right.text);

  assert(
    `${label}: las filas reconstruyen el texto izquierdo`,
    leftRows.join("\n") === lf(left),
    context,
  );
  assert(
    `${label}: las filas reconstruyen el texto derecho`,
    rightRows.join("\n") === lf(right),
    context,
  );

  // 4. Line numbers must run 1, 2, 3... with no gaps and no repeats, or the
  //    gutter lies about which line you are looking at.
  let expected = 0;
  for (const row of result.rows) {
    if (row.left.text === null) continue;
    expected += 1;
    assert(
      `${label}: numeración izquierda correlativa`,
      row.left.n === expected,
      { ...context, row },
    );
  }
  expected = 0;
  for (const row of result.rows) {
    if (row.right.text === null) continue;
    expected += 1;
    assert(
      `${label}: numeración derecha correlativa`,
      row.right.n === expected,
      { ...context, row },
    );
  }

  // 5. No changes reported if and only if the texts match.
  const { added, removed, changed } = result.stats;
  const quiet = added + removed + changed === 0;
  assert(
    `${label}: sin cambios si y solo si los textos son iguales`,
    quiet === (lf(left) === lf(right)),
    { ...context, stats: result.stats },
  );

  // 6. Keeping both sides emits every line of both, and nothing else.
  const equalRows = result.rows.filter((row) => row.hunk === null).length;
  const bothLines = result.hunks.reduce(
    (total, hunk) => total + hunk.left.length + hunk.right.length,
    0,
  );
  assert(
    `${label}: quedarse con ambos lados emite todas las líneas`,
    DIFF.merge(chooseAll(result, "both")).split("\n").length ===
      equalRows + bothLines,
    context,
  );

  // 7. Hunks must cover disjoint, ordered stretches of rows.
  let cursor = -1;
  for (const hunk of result.hunks) {
    assert(`${label}: bloques ordenados y sin solapar`, hunk.rowStart > cursor, {
      ...context,
      hunk,
    });
    cursor = hunk.rowEnd;
  }
}

/* ------------------------------------------------------------------ *
 * Fixed cases
 * ------------------------------------------------------------------ */

const FIXED = [
  ["idénticos", "uno\ndos\ntres\n", "uno\ndos\ntres\n"],
  ["ambos vacíos", "", ""],
  ["izquierdo vacío", "", "uno\ndos\n"],
  ["derecho vacío", "uno\ndos\n", ""],
  ["inserción pura", "uno\ntres\n", "uno\ndos\ntres\n"],
  ["borrado puro", "uno\ndos\ntres\n", "uno\ntres\n"],
  ["reemplazo", "uno\ndos\ntres\n", "uno\nDOS\ntres\n"],
  ["sin salto final", "uno\ndos", "uno\ndos\n"],
  ["CRLF frente a LF", "uno\r\ndos\r\n", "uno\ndos\n"],
  ["CR suelto", "uno\rdos\r", "uno\ndos\n"],
  ["solo saltos", "\n\n\n", "\n\n"],
  ["acentos", "café\nmañana\n", "café\nmanana\n"],
  ["líneas repetidas", "x\nx\nx\nx\n", "x\nx\n"],
  ["bloque movido", "a\nb\nc\nd\ne\n", "d\ne\na\nb\nc\n"],
  [
    "nada en común",
    Array.from({ length: 400 }, (_, i) => `izquierda ${i}`).join("\n"),
    Array.from({ length: 400 }, (_, i) => `derecha ${i}`).join("\n"),
  ],
  [
    "línea larguísima",
    "a".repeat(20000) + "\nfin\n",
    "b".repeat(20000) + "\nfin\n",
  ],
];

/* ------------------------------------------------------------------ *
 * Options
 * ------------------------------------------------------------------ */

/**
 * The normalising options change what counts as equal, never what gets
 * written. A merge always emits the original line, spaces included.
 */
function checkOptions() {
  const left = "uno   dos\n  TRES  \ncuatro\n";
  const right = "uno dos\nTRES\ncuatro\n";

  const strict = DIFF.compare(left, right);
  assert(
    "opciones: sin ignorar nada, el espaciado es una diferencia",
    strict.stats.added + strict.stats.removed + strict.stats.changed > 0,
    { left, right },
  );

  const loose = DIFF.compare(left, right, {
    ignoreWhitespace: true,
    trimLines: true,
  });
  assert(
    "opciones: ignorando espacios, los textos son iguales",
    loose.stats.added + loose.stats.removed + loose.stats.changed === 0,
    { left, right, stats: loose.stats },
  );
  assert(
    "opciones: el merge devuelve el original, no el normalizado",
    DIFF.merge(chooseAll(loose, "left")) === lf(left),
    { left, right },
  );

  const cased = DIFF.compare("Uno\nDos\n", "uno\ndos\n", { ignoreCase: true });
  assert(
    "opciones: ignorando mayúsculas, los textos son iguales",
    cased.stats.added + cased.stats.removed + cased.stats.changed === 0,
    { stats: cased.stats },
  );
  // Cuando dos líneas solo se distinguen en lo que se ha pedido ignorar no hay
  // bloque que elegir, así que el merge conserva la izquierda. Eso no puede ser
  // una sorpresa al descargar: la fila queda marcada para que se vea.
  assert(
    "opciones: sin bloque que elegir, el merge conserva la izquierda",
    DIFF.merge(chooseAll(cased, "right")) === "Uno\nDos\n",
    { rows: cased.rows.length },
  );
  assert(
    "opciones: las filas iguales solo por la opción quedan marcadas",
    cased.rows.filter((row) => row.soft).length === 2,
    { rows: cased.rows },
  );
  assert(
    "opciones: una fila igual de verdad no queda marcada",
    DIFF.compare("uno\n", "uno\n").rows.every((row) => !row.soft),
    {},
  );
}

/** The word level diff feeds the inline highlight. */
function checkWords() {
  const segments = DIFF.words("let total = precio * 1.21;", "let total = precio * IVA;");

  assert(
    "palabras: los segmentos reconstruyen el lado izquierdo",
    segments
      .filter((s) => s.type !== "ins")
      .map((s) => s.text)
      .join("") === "let total = precio * 1.21;",
    { segments },
  );
  assert(
    "palabras: los segmentos reconstruyen el lado derecho",
    segments
      .filter((s) => s.type !== "del")
      .map((s) => s.text)
      .join("") === "let total = precio * IVA;",
    { segments },
  );
  assert(
    "palabras: solo se marca lo que cambia, no la línea entera",
    segments.some((s) => s.type === "eq" && s.text.includes("precio")),
    { segments },
  );
}

/* ------------------------------------------------------------------ *
 * Entry point
 * ------------------------------------------------------------------ */

function main() {
  const args = process.argv.slice(2);
  const flag = (name, fallback) => {
    const at = args.indexOf(name);
    return at === -1 ? fallback : Number(args[at + 1]);
  };

  const seed = flag("--seed", 20260814);
  const cases = flag("--cases", 200);

  for (const [label, left, right] of FIXED) checkPair(`fijo «${label}»`, left, right);

  checkOptions();
  checkWords();

  const next = rng(seed);
  for (let i = 0; i < cases; i++) {
    const size = Math.floor(next() * 60);
    const left = randomText(next, size);
    const right = mutate(next, left);
    const trailing = next() < 0.5 ? "\n" : "";

    checkPair(`azar #${i}`, left.join("\n") + trailing, right.join("\n") + trailing);
  }

  console.log(
    `Diff engine: ${FIXED.length} fixed cases, ${cases} random pairs (seed ${seed}), ` +
      "plus options and word level checks.",
  );

  if (failures.length === 0) {
    console.log("Every property holds.");
    return;
  }

  console.error(`\n${failures.length} failed:\n`);
  for (const failure of failures.slice(0, 10)) {
    console.error(`  ${failure.what}`);
    console.error(`    ${JSON.stringify(failure.context).slice(0, 400)}\n`);
  }
  if (failures.length > 10) {
    console.error(`  ...and ${failures.length - 10} more.\n`);
  }
  console.error(`Reproduce with: node build/scripts/check-diff-engine.mjs --seed ${seed}`);
  process.exit(1);
}

main();
