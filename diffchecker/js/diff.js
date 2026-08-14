/**
 * Motor de comparacion de textos de /diffchecker/.
 *
 * Sin dependencias: ni CDN ni librerias. El algoritmo es el de Myers (1986),
 * voraz y con traza, sobre las lineas ya normalizadas segun las opciones. Si la
 * distancia de edicion se dispara, se corta y se reparte el trabajo por anclas
 * de lineas unicas comunes (la idea del patience diff), que ademas da bloques
 * mas legibles cuando hay trozos movidos de sitio.
 *
 * Lo que este fichero devuelve no es solo lo que se pinta: es tambien lo que el
 * boton de descarga escribe. Por eso `merge()` trabaja sobre las mismas filas
 * que se muestran, y build/scripts/check-diff-engine.mjs comprueba que quedarse
 * con un lado entero devuelve ese lado byte a byte.
 *
 * Se expone como `window.DIFF` en el navegador y por `module.exports` cuando se
 * carga desde Node, para que el verificador pueda probarlo de verdad.
 *
 * @author Ismael Sallami Moreno
 */

(function (root, factory) {
  "use strict";
  var api = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  if (root) root.DIFF = api;
})(typeof window !== "undefined" ? window : null, function () {
  "use strict";

  /** Topes duros. Por encima se avisa; nunca se cuelga la pestana en silencio. */
  var LIMITS = {
    /** Tamano maximo de cada fichero que se carga. */
    maxBytes: 5 * 1024 * 1024,
    /** Lineas maximas sumando los dos lados. */
    maxLines: 30000,
    /** Distancia de edicion maxima antes de repartir por anclas. */
    maxD: 2000,
    /** Lo mismo, dentro de una linea. */
    maxWordD: 400,
    /** Por encima de esto no se busca el cambio palabra a palabra. */
    maxWordChars: 2000,
  };

  /* ---------------------------------------------------------------- *
   * Lineas y claves de comparacion
   * ---------------------------------------------------------------- */

  /**
   * Parte en lineas normalizando los finales a LF. Es una decision con
   * consecuencias: el texto que sale del merge lleva siempre LF.
   * @param {string} text
   * @returns {string[]}
   */
  function splitLines(text) {
    return String(text == null ? "" : text)
      .replace(/\r\n?/g, "\n")
      .split("\n");
  }

  /**
   * Clave con la que se compara una linea. Se compara por la clave y se muestra
   * (y se descarga) el original, que es lo que hace que «ignorar espacios» no
   * altere ni una coma del resultado.
   * @param {string} line
   * @param {object} options
   * @returns {string}
   */
  function keyOf(line, options) {
    var key = line;
    if (options.trimLines) key = key.replace(/^[ \t]+|[ \t]+$/g, "");
    if (options.ignoreWhitespace) {
      key = key.replace(/[ \t]+/g, " ").replace(/^ +| +$/g, "");
    }
    if (options.ignoreCase) key = key.toLowerCase();
    return key;
  }

  /* ---------------------------------------------------------------- *
   * Myers
   * ---------------------------------------------------------------- */

  /**
   * Reconstruye las operaciones recorriendo la traza hacia atras.
   * @param {Int32Array[]} trace estado antes de cada paso
   * @param {number} depth pasos gastados
   * @param {number} n
   * @param {number} m
   * @returns {{type: string, a: number, b: number}[]}
   */
  function backtrack(trace, depth, n, m) {
    var ops = [];
    var x = n;
    var y = m;
    var d, before, k, prevK, prevX, prevY;

    for (d = depth; d > 0; d--) {
      // `before` guarda solo la ventana viva del paso: el indice de k es k+d+1.
      before = trace[d];
      k = x - y;

      if (k === -d || (k !== d && before[k + d] < before[k + d + 2])) {
        prevK = k + 1;
      } else {
        prevK = k - 1;
      }

      prevX = before[prevK + d + 1];
      prevY = prevX - prevK;

      while (x > prevX && y > prevY) {
        x--;
        y--;
        ops.push({ type: "eq", a: x, b: y });
      }

      if (x === prevX) {
        y--;
        ops.push({ type: "ins", a: -1, b: y });
      } else {
        x--;
        ops.push({ type: "del", a: x, b: -1 });
      }
    }

    while (x > 0 && y > 0) {
      x--;
      y--;
      ops.push({ type: "eq", a: x, b: y });
    }

    ops.reverse();
    return ops;
  }

  /**
   * Myers voraz. Devuelve null si la distancia de edicion pasa del tope, que es
   * la senal para repartir el trabajo por anclas.
   * @param {string[]} a
   * @param {string[]} b
   * @param {number} maxD
   * @returns {{type: string, a: number, b: number}[] | null}
   */
  function myers(a, b, maxD) {
    var n = a.length;
    var m = b.length;
    if (n === 0 && m === 0) return [];

    var max = Math.min(maxD, n + m);
    var offset = max + 1;
    var v = new Int32Array(2 * max + 3);
    var trace = [];
    var d, k, x, y;

    for (d = 0; d <= max; d++) {
      trace.push(v.slice(offset - d - 1, offset + d + 2));

      for (k = -d; k <= d; k += 2) {
        if (k === -d || (k !== d && v[offset + k - 1] < v[offset + k + 1])) {
          x = v[offset + k + 1];
        } else {
          x = v[offset + k - 1] + 1;
        }
        y = x - k;

        while (x < n && y < m && a[x] === b[y]) {
          x++;
          y++;
        }
        v[offset + k] = x;

        if (x >= n && y >= m) return backtrack(trace, d, n, m);
      }
    }

    return null;
  }

  /* ---------------------------------------------------------------- *
   * Anclas: lineas que aparecen una sola vez en los dos lados
   * ---------------------------------------------------------------- */

  /**
   * Subsecuencia creciente mas larga por la segunda coordenada. Los pares ya
   * vienen ordenados por la primera.
   * @param {number[][]} pairs
   * @returns {number[][]}
   */
  function longestIncreasing(pairs) {
    var tails = [];
    var links = [];
    var i, lo, hi, mid;

    for (i = 0; i < pairs.length; i++) {
      lo = 0;
      hi = tails.length;
      while (lo < hi) {
        mid = (lo + hi) >> 1;
        if (pairs[tails[mid]][1] < pairs[i][1]) lo = mid + 1;
        else hi = mid;
      }
      links[i] = lo > 0 ? tails[lo - 1] : -1;
      tails[lo] = i;
    }

    var out = [];
    var at = tails.length ? tails[tails.length - 1] : -1;
    while (at >= 0) {
      out.push(pairs[at]);
      at = links[at];
    }
    out.reverse();
    return out;
  }

  /**
   * Reparte el tramo por sus anclas y compara cada trozo por separado.
   * @returns {boolean} false si no hay ninguna ancla que aprovechar
   */
  function splitByAnchors(a, b, aOff, bOff, depth, state, out) {
    var countA = new Map();
    var countB = new Map();
    var i, line;

    for (i = 0; i < a.length; i++) {
      countA.set(a[i], (countA.get(a[i]) || 0) + 1);
    }
    for (i = 0; i < b.length; i++) {
      countB.set(b[i], (countB.get(b[i]) || 0) + 1);
    }

    var whereB = new Map();
    for (i = 0; i < b.length; i++) {
      if (countB.get(b[i]) === 1) whereB.set(b[i], i);
    }

    var pairs = [];
    for (i = 0; i < a.length; i++) {
      line = a[i];
      if (countA.get(line) !== 1) continue;
      if (!whereB.has(line)) continue;
      pairs.push([i, whereB.get(line)]);
    }

    var anchors = longestIncreasing(pairs);
    if (anchors.length === 0) return false;

    var ai = 0;
    var bi = 0;
    for (i = 0; i < anchors.length; i++) {
      var pa = anchors[i][0];
      var pb = anchors[i][1];
      compareRange(
        a.slice(ai, pa),
        b.slice(bi, pb),
        aOff + ai,
        bOff + bi,
        depth + 1,
        state,
        out,
      );
      out.push({ type: "eq", a: aOff + pa, b: bOff + pb });
      ai = pa + 1;
      bi = pb + 1;
    }
    compareRange(
      a.slice(ai),
      b.slice(bi),
      aOff + ai,
      bOff + bi,
      depth + 1,
      state,
      out,
    );
    return true;
  }

  /** Emite el tramo como borrado entero seguido de insertado entero. */
  function pushPlain(a, b, aOff, bOff, out) {
    var i;
    for (i = 0; i < a.length; i++) out.push({ type: "del", a: aOff + i, b: -1 });
    for (i = 0; i < b.length; i++) out.push({ type: "ins", a: -1, b: bOff + i });
  }

  /**
   * Compara un tramo: recorta lo comun por los extremos, prueba Myers y, si no
   * cabe, reparte por anclas.
   */
  function compareRange(a, b, aOff, bOff, depth, state, out) {
    var i;
    var start = 0;
    while (start < a.length && start < b.length && a[start] === b[start]) start++;

    var endA = a.length;
    var endB = b.length;
    while (endA > start && endB > start && a[endA - 1] === b[endB - 1]) {
      endA--;
      endB--;
    }

    for (i = 0; i < start; i++) {
      out.push({ type: "eq", a: aOff + i, b: bOff + i });
    }

    var midA = a.slice(start, endA);
    var midB = b.slice(start, endB);
    var midOffA = aOff + start;
    var midOffB = bOff + start;

    if (midA.length === 0 || midB.length === 0) {
      pushPlain(midA, midB, midOffA, midOffB, out);
    } else {
      var ops = myers(midA, midB, state.maxD);
      if (ops) {
        for (i = 0; i < ops.length; i++) {
          out.push({
            type: ops[i].type,
            a: ops[i].a < 0 ? -1 : ops[i].a + midOffA,
            b: ops[i].b < 0 ? -1 : ops[i].b + midOffB,
          });
        }
      } else if (
        depth < 3 &&
        splitByAnchors(midA, midB, midOffA, midOffB, depth, state, out)
      ) {
        // Repartido; cada trozo ya ha escrito lo suyo.
      } else {
        state.truncated = true;
        pushPlain(midA, midB, midOffA, midOffB, out);
      }
    }

    for (i = 0; i < a.length - endA; i++) {
      out.push({ type: "eq", a: aOff + endA + i, b: bOff + endB + i });
    }
  }

  /* ---------------------------------------------------------------- *
   * Diferencias dentro de una linea
   * ---------------------------------------------------------------- */

  var TOKEN = /\s+|[0-9A-Za-z_À-ɏ]+|[^\s0-9A-Za-z_À-ɏ]/g;

  /** @param {string} text @returns {string[]} */
  function tokenize(text) {
    return text.match(TOKEN) || [];
  }

  /**
   * Compara dos lineas palabra a palabra. Alimenta el resaltado fino: en
   * `precio * 1.21` frente a `precio * IVA` marca solo lo que cambia.
   * @param {string} left
   * @param {string} right
   * @returns {{type: string, text: string}[]}
   */
  function words(left, right) {
    if (left === right) {
      return left === "" ? [] : [{ type: "eq", text: left }];
    }
    if (
      left.length > LIMITS.maxWordChars ||
      right.length > LIMITS.maxWordChars
    ) {
      return whole(left, right);
    }

    var a = tokenize(left);
    var b = tokenize(right);
    var ops = myers(a, b, LIMITS.maxWordD);
    if (!ops) return whole(left, right);

    var segments = [];
    for (var i = 0; i < ops.length; i++) {
      var op = ops[i];
      var text = op.type === "ins" ? b[op.b] : a[op.a];
      var last = segments[segments.length - 1];
      if (last && last.type === op.type) last.text += text;
      else segments.push({ type: op.type, text: text });
    }
    return segments;
  }

  /** Sin nada aprovechable en comun: fuera lo viejo, dentro lo nuevo. */
  function whole(left, right) {
    var out = [];
    if (left !== "") out.push({ type: "del", text: left });
    if (right !== "") out.push({ type: "ins", text: right });
    return out;
  }

  /**
   * Devuelve el detalle por palabras solo si las dos lineas se parecen. Entre
   * dos lineas sin nada que ver, el resaltado fino es ruido: mejor marcarlas
   * enteras.
   * @returns {{type: string, text: string}[] | null}
   */
  function wordsIfAlike(left, right) {
    var segments = words(left, right);
    var shared = 0;
    for (var i = 0; i < segments.length; i++) {
      if (segments[i].type === "eq") shared += segments[i].text.trim().length;
    }
    var longest = Math.max(left.trim().length, right.trim().length);
    if (longest === 0) return null;
    return shared * 4 >= longest ? segments : null;
  }

  /* ---------------------------------------------------------------- *
   * Filas y bloques
   * ---------------------------------------------------------------- */

  /** Una celda vacia: ese lado no tiene linea en esa fila. */
  function empty() {
    return { n: null, text: null };
  }

  /**
   * Convierte la lista de operaciones en filas alineadas y en bloques de
   * cambio, que es lo que la interfaz pinta y lo que el merge recorre.
   */
  function buildRows(ops, leftLines, rightLines) {
    var rows = [];
    var hunks = [];
    var i = 0;

    while (i < ops.length) {
      if (ops[i].type === "eq") {
        var leftText = leftLines[ops[i].a];
        var rightText = rightLines[ops[i].b];
        rows.push({
          type: "eq",
          left: { n: ops[i].a + 1, text: leftText },
          right: { n: ops[i].b + 1, text: rightText },
          hunk: null,
          words: null,
          // Iguales para la comparacion pero distintas de verdad: solo pasa con
          // las opciones de ignorar. No hay bloque que elegir, asi que el merge
          // se queda con la izquierda; la interfaz lo senala para que no sea
          // una sorpresa al descargar.
          soft: leftText !== rightText,
        });
        i++;
        continue;
      }

      // Myers puede intercalar borrados e inserciones dentro de un mismo
      // cambio. Se juntan todos los del tramo y se emparejan por posicion, que
      // es lo que da la vista lado a lado.
      var dels = [];
      var ins = [];
      while (i < ops.length && ops[i].type !== "eq") {
        if (ops[i].type === "del") dels.push(ops[i].a);
        else ins.push(ops[i].b);
        i++;
      }

      var kind = dels.length && ins.length ? "change" : ins.length ? "add" : "remove";
      var hunk = {
        id: hunks.length,
        kind: kind,
        left: dels.map(function (at) {
          return leftLines[at];
        }),
        right: ins.map(function (at) {
          return rightLines[at];
        }),
        leftStart: dels.length ? dels[0] + 1 : null,
        rightStart: ins.length ? ins[0] + 1 : null,
        rowStart: rows.length,
        rowEnd: rows.length,
        choice: "left",
      };

      var height = Math.max(dels.length, ins.length);
      for (var j = 0; j < height; j++) {
        var leftAt = j < dels.length ? dels[j] : -1;
        var rightAt = j < ins.length ? ins[j] : -1;
        var pair =
          leftAt >= 0 && rightAt >= 0 && kind === "change"
            ? wordsIfAlike(leftLines[leftAt], rightLines[rightAt])
            : null;

        rows.push({
          type: kind,
          left:
            leftAt >= 0 ? { n: leftAt + 1, text: leftLines[leftAt] } : empty(),
          right:
            rightAt >= 0 ? { n: rightAt + 1, text: rightLines[rightAt] } : empty(),
          hunk: hunk.id,
          words: pair,
          soft: false,
        });
      }

      hunk.rowEnd = rows.length - 1;
      hunks.push(hunk);
    }

    return { rows: rows, hunks: hunks };
  }

  /* ---------------------------------------------------------------- *
   * API
   * ---------------------------------------------------------------- */

  /**
   * Compara dos textos.
   * @param {string} leftText
   * @param {string} rightText
   * @param {{ignoreWhitespace?: boolean, ignoreCase?: boolean,
   *          trimLines?: boolean}} [options]
   * @returns {object}
   */
  function compare(leftText, rightText, options) {
    var opts = options || {};
    var leftLines = splitLines(leftText);
    var rightLines = splitLines(rightText);

    if (leftLines.length + rightLines.length > LIMITS.maxLines) {
      throw new RangeError(
        "Demasiadas lineas: el limite son " + LIMITS.maxLines + " entre los dos textos.",
      );
    }

    var leftKeys = leftLines.map(function (line) {
      return keyOf(line, opts);
    });
    var rightKeys = rightLines.map(function (line) {
      return keyOf(line, opts);
    });

    var state = { maxD: LIMITS.maxD, truncated: false };
    var ops = [];
    compareRange(leftKeys, rightKeys, 0, 0, 0, state, ops);

    var built = buildRows(ops, leftLines, rightLines);
    var stats = { added: 0, removed: 0, changed: 0, equal: 0 };

    for (var i = 0; i < built.hunks.length; i++) {
      var hunk = built.hunks[i];
      if (hunk.kind === "add") stats.added += hunk.right.length;
      else if (hunk.kind === "remove") stats.removed += hunk.left.length;
      else stats.changed += Math.max(hunk.left.length, hunk.right.length);
    }
    for (i = 0; i < built.rows.length; i++) {
      if (built.rows[i].hunk === null) stats.equal++;
    }

    return {
      rows: built.rows,
      hunks: built.hunks,
      stats: stats,
      truncated: state.truncated,
      leftLines: leftLines.length,
      rightLines: rightLines.length,
    };
  }

  /**
   * Construye el texto resultante segun la eleccion de cada bloque. Las filas
   * iguales van tal cual y cada bloque aporta el lado elegido.
   * @param {object} result lo que devuelve compare()
   * @returns {string}
   */
  function merge(result) {
    var out = [];
    var done = Object.create(null);
    var i, j, row, hunk;

    for (i = 0; i < result.rows.length; i++) {
      row = result.rows[i];

      if (row.hunk === null) {
        out.push(row.left.text);
        continue;
      }
      if (done[row.hunk]) continue;
      done[row.hunk] = true;

      hunk = result.hunks[row.hunk];
      if (hunk.choice === "right") {
        for (j = 0; j < hunk.right.length; j++) out.push(hunk.right[j]);
      } else if (hunk.choice === "both") {
        for (j = 0; j < hunk.left.length; j++) out.push(hunk.left[j]);
        for (j = 0; j < hunk.right.length; j++) out.push(hunk.right[j]);
      } else {
        for (j = 0; j < hunk.left.length; j++) out.push(hunk.left[j]);
      }
    }

    return out.join("\n");
  }

  return {
    LIMITS: LIMITS,
    compare: compare,
    merge: merge,
    words: words,
    splitLines: splitLines,
  };
});
