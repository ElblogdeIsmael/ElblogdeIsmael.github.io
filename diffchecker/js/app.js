/**
 * Interfaz de /diffchecker/.
 *
 * El motor (js/diff.js) decide que cambia; esto solo lo pinta y recoge las
 * elecciones del merge. Nada de innerHTML con texto del usuario: cada celda se
 * construye con createElement y textContent, que es lo unico que garantiza que
 * pegar un fragmento de HTML no ejecute nada.
 *
 * @author Ismael Sallami Moreno
 */

(function () {
  "use strict";

  var $ = function (id) {
    return document.getElementById(id);
  };

  /** Tramos iguales mas largos que esto se pliegan, dejando contexto. */
  var FOLD_MIN = 8;
  var CONTEXT = 3;

  var state = {
    view: "edit",
    layout: "split",
    // Lo que ha elegido el usuario, que no siempre es lo que se muestra: en
    // pantalla estrecha se fuerza la unificada y al ensanchar se devuelve
    // esto, no un valor por defecto.
    preferredLayout: "split",
    result: null,
    current: -1,
    expanded: Object.create(null),
    // Bloques que el usuario ha resuelto. Atenuar un lado tiene que
    // significar «he decidido», no «este es el valor inicial»: si no, la
    // vista nace con media pantalla apagada y comparar cuesta mas.
    decided: Object.create(null),
    names: { left: "", right: "" },
  };

  var timer = null;

  /* ---------------------------------------------------------------- *
   * Tema de la pagina (claro/oscuro)
   * ---------------------------------------------------------------- */

  (function initPageTheme() {
    var saved = localStorage.getItem("diffchecker_theme");
    if (saved === "dark") {
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      if (!saved) localStorage.setItem("diffchecker_theme", "light");
    }

    var btn = $("theme-toggle");
    function paint() {
      btn.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
    }
    paint();
    btn.addEventListener("click", function () {
      document.body.classList.toggle("light");
      localStorage.setItem(
        "diffchecker_theme",
        document.body.classList.contains("light") ? "light" : "dark",
      );
      paint();
    });
  })();

  /* ---------------------------------------------------------------- *
   * Utilidades de DOM
   * ---------------------------------------------------------------- */

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function say(message) {
    $("announce").textContent = message;
  }

  function notice(message) {
    var box = $("notice");
    if (!message) {
      box.hidden = true;
      box.textContent = "";
      return;
    }
    box.hidden = false;
    box.textContent = message;
  }

  /* ---------------------------------------------------------------- *
   * Comparacion
   * ---------------------------------------------------------------- */

  function options() {
    return {
      ignoreWhitespace: $("opt-ws").checked,
      ignoreCase: $("opt-case").checked,
      trimLines: $("opt-trim").checked,
    };
  }

  function recompute() {
    var left = $("text-left").value;
    var right = $("text-right").value;

    if (left === "" && right === "") {
      state.result = null;
      state.current = -1;
      state.expanded = Object.create(null);
      notice("");
      paintStats();
      render();
      return;
    }

    try {
      state.result = DIFF.compare(left, right, options());
      notice(
        state.result.truncated
          ? "Los dos textos se parecen tan poco que un tramo se ha marcado entero " +
              "como reemplazo. La comparación sigue siendo exacta: nada se pierde al mezclar."
          : "",
      );
    } catch (error) {
      state.result = null;
      notice(error.message);
    }

    state.current = -1;
    state.expanded = Object.create(null);
    state.decided = Object.create(null);
    paintStats();
    render();
  }

  function schedule() {
    if (timer) clearTimeout(timer);
    timer = setTimeout(recompute, 300);
  }

  /* ---------------------------------------------------------------- *
   * Contador de cambios
   * ---------------------------------------------------------------- */

  function paintStats() {
    var box = $("stats");
    box.textContent = "";

    if (!state.result) {
      box.appendChild(el("span", "is-same", "Pega algo en los dos lados"));
      return;
    }

    var stats = state.result.stats;
    if (stats.added + stats.removed + stats.changed === 0) {
      box.appendChild(el("span", "is-same", "Los dos textos son idénticos"));
      return;
    }

    if (stats.changed) {
      box.appendChild(el("b", null, String(stats.changed)));
      box.appendChild(el("span", null, "modificadas"));
    }
    if (stats.added) {
      box.appendChild(el("b", "is-add", "+" + stats.added));
      box.appendChild(el("span", "is-add", "añadidas"));
    }
    if (stats.removed) {
      box.appendChild(el("b", "is-del", "−" + stats.removed));
      box.appendChild(el("span", "is-del", "eliminadas"));
    }
  }

  /* ---------------------------------------------------------------- *
   * Celdas
   * ---------------------------------------------------------------- */

  /**
   * Celda de texto. Con detalle por palabras se envuelve en <mark> solo lo que
   * cambia; sin el, la linea va tal cual.
   */
  function textCell(side, row) {
    var cell = el("span", "dtext side-" + (side === "left" ? "l" : "r"));
    var value = row[side].text;

    if (value === null) {
      cell.classList.add("dpad");
      return cell;
    }
    if (!row.words) {
      cell.textContent = value;
      return cell;
    }

    var skip = side === "left" ? "ins" : "del";
    var markClass = side === "left" ? "wdel" : "wadd";

    for (var i = 0; i < row.words.length; i++) {
      var segment = row.words[i];
      if (segment.type === skip) continue;
      if (segment.type === "eq") {
        cell.appendChild(document.createTextNode(segment.text));
      } else {
        cell.appendChild(el("mark", markClass, segment.text));
      }
    }
    return cell;
  }

  function numberCell(side, value) {
    var cell = el(
      "span",
      "dnum side-" + (side === "left" ? "l" : "r"),
      value === null ? "" : String(value),
    );
    if (value === null) cell.classList.add("dpad");
    return cell;
  }

  function signCell(side, row) {
    var mark = "";
    if (side === "left" && row.left.text !== null) {
      if (row.type === "remove" || row.type === "change") mark = "−";
    }
    if (side === "right" && row.right.text !== null) {
      if (row.type === "add" || row.type === "change") mark = "+";
    }
    var cell = el("span", "dsign side-" + (side === "left" ? "l" : "r"), mark);
    if (row[side].text === null) cell.classList.add("dpad");
    return cell;
  }

  var CHOICES = [
    ["left", "◀", "quedarme con el original"],
    ["right", "▶", "quedarme con el modificado"],
    ["both", "◀▶", "quedarme con los dos"],
  ];

  /** Los botones de eleccion, solo en la primera fila de cada bloque. */
  function mergeCell(hunk, first) {
    var cell = el("span", "dmerge");
    if (!first) return cell;

    for (var i = 0; i < CHOICES.length; i++) {
      var choice = CHOICES[i][0];
      var button = el("button", "hunk-btn", CHOICES[i][1]);
      button.type = "button";
      button.dataset.hunk = String(hunk.id);
      button.dataset.choice = choice;
      button.setAttribute("aria-pressed", hunk.choice === choice ? "true" : "false");
      button.setAttribute(
        "aria-label",
        "Bloque " + (hunk.id + 1) + ": " + CHOICES[i][2],
      );
      button.title = CHOICES[i][2];
      cell.appendChild(button);
    }
    return cell;
  }

  /* ---------------------------------------------------------------- *
   * Filas
   * ---------------------------------------------------------------- */

  function splitRow(row, index) {
    var node = el("div", "drow " + row.type + (row.soft ? " soft" : ""));
    var hunk = row.hunk === null ? null : state.result.hunks[row.hunk];

    if (hunk) {
      node.dataset.hunk = String(hunk.id);
      if (state.decided[hunk.id]) node.dataset.choice = hunk.choice;
      if (hunk.id === state.current) node.classList.add("current");
    }

    node.appendChild(numberCell("left", row.left.n));
    node.appendChild(signCell("left", row));
    node.appendChild(textCell("left", row));
    node.appendChild(hunk ? mergeCell(hunk, index === hunk.rowStart) : el("span", "dmerge"));
    node.appendChild(numberCell("right", row.right.n));
    node.appendChild(signCell("right", row));
    node.appendChild(textCell("right", row));
    return node;
  }

  /**
   * En la vista unificada cada linea ocupa su propia fila: primero lo que sale
   * del bloque y despues lo que entra.
   */
  function unifiedRow(row, side, hunk, first) {
    var kind = side === "left" ? (row.type === "eq" ? "eq" : "remove") : "add";
    var node = el("div", "drow " + kind + (row.soft ? " soft" : ""));

    if (hunk) {
      node.dataset.hunk = String(hunk.id);
      if (state.decided[hunk.id]) node.dataset.choice = hunk.choice;
      if (hunk.id === state.current) node.classList.add("current");
    }

    node.appendChild(numberCell("left", side === "right" ? null : row.left.n));
    node.appendChild(numberCell("right", side === "left" ? null : row.right.n));

    var mark = row.type === "eq" ? "" : side === "left" ? "−" : "+";
    node.appendChild(
      el("span", "dsign side-" + (side === "left" ? "l" : "r"), mark),
    );

    // La misma celda que la vista lado a lado, para que el resaltado palabra a
    // palabra no se pierda al pasar a unificada.
    node.appendChild(textCell(side, row));
    node.appendChild(hunk ? mergeCell(hunk, first) : el("span", "dmerge"));
    return node;
  }

  function foldRow(from, hidden) {
    var button = el(
      "button",
      "dfold",
      "··· " + hidden + (hidden === 1 ? " línea igual" : " líneas iguales") + " ···",
    );
    button.type = "button";
    button.dataset.fold = String(from);
    button.title = "Mostrar este tramo";
    return button;
  }

  /* ---------------------------------------------------------------- *
   * Pintado
   * ---------------------------------------------------------------- */

  function emit(fragment, row, index) {
    if (state.layout === "split") {
      fragment.appendChild(splitRow(row, index));
      return;
    }

    var hunk = row.hunk === null ? null : state.result.hunks[row.hunk];
    var first = hunk ? index === hunk.rowStart : false;
    var hasLeft = row.left.text !== null;

    if (hasLeft) {
      fragment.appendChild(unifiedRow(row, "left", hunk, first));
    }
    if (row.right.text !== null && row.type !== "eq") {
      // Un bloque que solo anade no tiene linea izquierda, asi que los botones
      // de eleccion tienen que ir en la primera linea de la derecha o ese
      // bloque se quedaria sin ellos.
      fragment.appendChild(unifiedRow(row, "right", hunk, first && !hasLeft));
    }
  }

  function renderDiff() {
    var grid = $("grid");
    grid.textContent = "";
    grid.classList.toggle("unified", state.layout === "unified");

    if (!state.result) {
      var empty = el("div", "diff-empty");
      empty.appendChild(el("strong", null, "Nada que comparar todavía"));
      empty.appendChild(
        el("p", null, "Escribe o carga un fichero en cada lado y esto se llena solo."),
      );
      grid.appendChild(empty);
      return;
    }

    var rows = state.result.rows;
    var fragment = document.createDocumentFragment();
    var i = 0;

    while (i < rows.length) {
      if (rows[i].hunk !== null) {
        emit(fragment, rows[i], i);
        i++;
        continue;
      }

      // Tramo de lineas iguales: se pliega si es largo, dejando contexto a los
      // lados para no perder de vista donde estaba el cambio.
      var end = i;
      while (end < rows.length && rows[end].hunk === null) end++;

      var before = i === 0 ? 0 : CONTEXT;
      var after = end === rows.length ? 0 : CONTEXT;
      var hidden = end - i - before - after;

      if (hidden < FOLD_MIN || state.expanded[i]) {
        for (var k = i; k < end; k++) emit(fragment, rows[k], k);
        i = end;
        continue;
      }

      for (var a = i; a < i + before; a++) emit(fragment, rows[a], a);
      fragment.appendChild(foldRow(i, hidden));
      for (var b = end - after; b < end; b++) emit(fragment, rows[b], b);
      i = end;
    }

    grid.appendChild(fragment);
  }

  function renderResult() {
    $("result-text").textContent = state.result ? DIFF.merge(state.result) : "";
  }

  function render() {
    $("panel-edit").hidden = state.view !== "edit";
    $("panel-diff").hidden = state.view !== "diff";
    $("panel-result").hidden = state.view !== "result";

    $("view-edit").setAttribute("aria-pressed", String(state.view === "edit"));
    $("view-diff").setAttribute("aria-pressed", String(state.view === "diff"));
    $("view-result").setAttribute("aria-pressed", String(state.view === "result"));
    $("layout-split").setAttribute("aria-pressed", String(state.layout === "split"));
    $("layout-unified").setAttribute("aria-pressed", String(state.layout === "unified"));

    var idle = !state.result || state.result.hunks.length === 0;
    ["prev-change", "next-change", "all-left", "all-right", "reset-choices"].forEach(
      function (id) {
        $(id).disabled = idle;
      },
    );

    if (state.view === "diff") renderDiff();
    if (state.view === "result") renderResult();
  }

  function setView(view) {
    state.view = view;
    render();
  }

  /* ---------------------------------------------------------------- *
   * Elecciones del merge
   * ---------------------------------------------------------------- */

  function choose(id, choice) {
    if (!state.result) return;
    state.result.hunks[id].choice = choice;
    state.decided[id] = true;

    // Repintar solo las filas del bloque: con un diff largo, rehacer la rejilla
    // entera a cada clic se nota.
    var rows = $("grid").querySelectorAll('[data-hunk="' + id + '"]');
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].classList.contains("drow")) rows[i].dataset.choice = choice;
      else rows[i].setAttribute("aria-pressed", String(rows[i].dataset.choice === choice));
    }

    var label = choice === "left" ? "el original" : choice === "right" ? "el modificado" : "los dos";
    say("Bloque " + (id + 1) + ": " + label);
  }

  function chooseAll(choice, decided) {
    if (!state.result) return;
    for (var i = 0; i < state.result.hunks.length; i++) {
      state.result.hunks[i].choice = choice;
      if (decided) state.decided[i] = true;
    }
    if (!decided) state.decided = Object.create(null);
    render();
    say(
      "Todos los bloques: " +
        (choice === "left" ? "el original" : "el modificado") +
        ".",
    );
  }

  /* ---------------------------------------------------------------- *
   * Navegacion entre bloques
   * ---------------------------------------------------------------- */

  function goTo(step) {
    if (!state.result || state.result.hunks.length === 0) return;

    var total = state.result.hunks.length;
    var next = state.current + step;
    if (next < 0) next = total - 1;
    if (next >= total) next = 0;
    state.current = next;

    if (state.view !== "diff") setView("diff");
    else renderDiff();

    var node = $("grid").querySelector('[data-hunk="' + next + '"]');
    if (node) node.scrollIntoView({ block: "center", behavior: "smooth" });
    say("Bloque " + (next + 1) + " de " + total + ".");
  }

  /* ---------------------------------------------------------------- *
   * Ficheros
   * ---------------------------------------------------------------- */

  function loadFile(side, file) {
    if (!file) return;

    if (file.size > DIFF.LIMITS.maxBytes) {
      notice(
        "«" + file.name + "» pesa más de " +
          Math.round(DIFF.LIMITS.maxBytes / (1024 * 1024)) +
          " MB, que es el tope de esta herramienta.",
      );
      return;
    }

    file.text().then(function (text) {
      // Un binario leido como texto pinta basura y no dice por que. Los bytes
      // nulos lo delatan antes de tocar nada.
      if (text.indexOf("\u0000") !== -1) {
        notice("«" + file.name + "» no parece un fichero de texto.");
        return;
      }

      $(side === "left" ? "text-left" : "text-right").value = text;
      state.names[side] = file.name;
      $(side === "left" ? "name-left" : "name-right").textContent = file.name;
      notice("");
      recompute();

      if ($("text-left").value && $("text-right").value) setView("diff");
    });
  }

  function wireDropzone(side) {
    var zone = $(side === "left" ? "drop-left" : "drop-right");
    var input = $(side === "left" ? "file-left" : "file-right");

    zone.addEventListener("click", function () {
      input.click();
    });
    zone.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        input.click();
      }
    });
    input.addEventListener("change", function () {
      loadFile(side, input.files[0]);
      input.value = "";
    });

    ["dragenter", "dragover"].forEach(function (name) {
      zone.addEventListener(name, function (event) {
        event.preventDefault();
        zone.classList.add("dragover");
      });
    });
    ["dragleave", "drop"].forEach(function (name) {
      zone.addEventListener(name, function (event) {
        event.preventDefault();
        zone.classList.remove("dragover");
      });
    });
    zone.addEventListener("drop", function (event) {
      loadFile(side, event.dataTransfer.files[0]);
    });
  }

  /* ---------------------------------------------------------------- *
   * Resultado
   * ---------------------------------------------------------------- */

  function outputName() {
    var name = state.names.left || state.names.right;
    if (!name) return "resultado.txt";
    var dot = name.lastIndexOf(".");
    return dot > 0
      ? name.slice(0, dot) + "-mezclado" + name.slice(dot)
      : name + "-mezclado.txt";
  }

  function download() {
    if (!state.result) return;
    var blob = new Blob([DIFF.merge(state.result)], {
      type: "text/plain;charset=utf-8",
    });
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.href = url;
    link.download = outputName();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 1000);
  }

  function copy() {
    if (!state.result) return;
    var text = DIFF.merge(state.result);
    var button = $("copy-result");

    function done() {
      button.textContent = "Copiado";
      setTimeout(function () {
        button.textContent = "Copiar resultado";
      }, 1600);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, fallback);
    } else {
      fallback();
    }

    function fallback() {
      var area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      try {
        document.execCommand("copy");
        done();
      } catch (error) {
        notice("El navegador no ha dejado copiar. Selecciona el texto a mano.");
      }
      document.body.removeChild(area);
    }
  }

  /* ---------------------------------------------------------------- *
   * Ejemplo
   * ---------------------------------------------------------------- */

  var EXAMPLE_LEFT =
    "# Análisis de los estados financieros\n" +
    "\n" +
    "## Ratio de liquidez\n" +
    "\n" +
    "El ratio de liquidez mide la capacidad de la empresa para atender sus\n" +
    "deudas a corto plazo. Se calcula asi:\n" +
    "\n" +
    "    liquidez = activo corriente / pasivo corriente\n" +
    "\n" +
    "Un valor por debajo de 1 indica que la empresa no puede cubrir sus\n" +
    "obligaciones inmediatas con lo que tiene disponible.\n" +
    "\n" +
    "## Fondo de maniobra\n" +
    "\n" +
    "Es la diferencia entre el activo corriente y el pasivo corriente.\n";

  var EXAMPLE_RIGHT =
    "# Análisis de los estados financieros\n" +
    "\n" +
    "## Ratio de liquidez\n" +
    "\n" +
    "El ratio de liquidez mide la capacidad de la empresa para atender sus\n" +
    "deudas a corto plazo. Se calcula así:\n" +
    "\n" +
    "$$ \\text{liquidez} = \\frac{\\text{activo corriente}}{\\text{pasivo corriente}} $$\n" +
    "\n" +
    "Un valor por debajo de 1 indica que la empresa no puede cubrir sus\n" +
    "obligaciones inmediatas con lo que tiene disponible.\n" +
    "\n" +
    "## Fondo de maniobra\n" +
    "\n" +
    "Es la diferencia entre el activo corriente y el pasivo corriente. Un fondo\n" +
    "de maniobra negativo suele anticipar tensiones de tesorería.\n" +
    "\n" +
    "## Ratio de endeudamiento\n" +
    "\n" +
    "Relaciona los recursos ajenos con el total del pasivo.\n";

  function loadExample() {
    $("text-left").value = EXAMPLE_LEFT;
    $("text-right").value = EXAMPLE_RIGHT;
    state.names.left = "apuntes.md";
    state.names.right = "apuntes-revisado.md";
    $("name-left").textContent = "apuntes.md";
    $("name-right").textContent = "apuntes-revisado.md";
    recompute();
    setView("diff");
  }

  /* ---------------------------------------------------------------- *
   * Cableado
   * ---------------------------------------------------------------- */

  /**
   * La barra se pega justo debajo de la cabecera, y la altura de la cabecera
   * depende de la tipografia, del ancho y del tamano de letra del navegador.
   * Medirla es lo unico que no envejece: una constante en el CSS deja una
   * costura en cuanto algo de eso cambia.
   */
  function syncHeaderHeight() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    document.documentElement.style.setProperty(
      "--header-h",
      Math.round(header.getBoundingClientRect().height) + "px",
    );
  }

  /**
   * Lado a lado necesita ancho: por debajo de 900px cada linea cae en dos
   * columnas de unas ocho letras y deja de servir para lo unico que sirve,
   * que es leer las dos versiones a la vez. Ahi se fuerza la unificada.
   */
  var narrow = window.matchMedia("(max-width: 900px)");

  function applyWidth() {
    var forced = narrow.matches;
    var button = $("layout-split");
    button.disabled = forced;
    button.title = forced
      ? "La vista lado a lado necesita una pantalla más ancha"
      : "";

    var wanted = forced ? "unified" : state.preferredLayout;
    if (wanted !== state.layout) {
      state.layout = wanted;
      render();
    } else {
      $("layout-split").setAttribute("aria-pressed", String(state.layout === "split"));
      $("layout-unified").setAttribute("aria-pressed", String(state.layout === "unified"));
    }
  }

  function wire() {
    ["text-left", "text-right"].forEach(function (id) {
      $(id).addEventListener("input", schedule);
      $(id).addEventListener("paste", function () {
        // Pegar es el gesto que termina la edicion: en cuanto los dos lados
        // tienen algo, se salta a las diferencias sin pedirlo.
        setTimeout(function () {
          recompute();
          if ($("text-left").value && $("text-right").value) setView("diff");
        }, 0);
      });
    });

    ["opt-ws", "opt-case", "opt-trim"].forEach(function (id) {
      $(id).addEventListener("change", recompute);
    });

    $("view-edit").addEventListener("click", function () {
      setView("edit");
    });
    $("view-diff").addEventListener("click", function () {
      setView("diff");
    });
    $("view-result").addEventListener("click", function () {
      setView("result");
    });

    $("layout-split").addEventListener("click", function () {
      state.preferredLayout = "split";
      applyWidth();
    });
    $("layout-unified").addEventListener("click", function () {
      state.preferredLayout = "unified";
      applyWidth();
    });

    $("all-left").addEventListener("click", function () {
      chooseAll("left", true);
    });
    $("all-right").addEventListener("click", function () {
      chooseAll("right", true);
    });
    $("reset-choices").addEventListener("click", function () {
      chooseAll("left", false);
      say("Elecciones reiniciadas.");
    });

    $("prev-change").addEventListener("click", function () {
      goTo(-1);
    });
    $("next-change").addEventListener("click", function () {
      goTo(1);
    });

    $("swap").addEventListener("click", function () {
      var left = $("text-left").value;
      $("text-left").value = $("text-right").value;
      $("text-right").value = left;

      var name = state.names.left;
      state.names.left = state.names.right;
      state.names.right = name;
      $("name-left").textContent = state.names.left || "texto pegado";
      $("name-right").textContent = state.names.right || "texto pegado";

      recompute();
      say("Lados intercambiados.");
    });

    $("clear-all").addEventListener("click", function () {
      $("text-left").value = "";
      $("text-right").value = "";
      state.names = { left: "", right: "" };
      $("name-left").textContent = "texto pegado";
      $("name-right").textContent = "texto pegado";
      recompute();
      setView("edit");
    });

    $("example").addEventListener("click", loadExample);
    $("copy-result").addEventListener("click", copy);
    $("download-result").addEventListener("click", download);

    // Un solo oyente para toda la rejilla: con miles de filas, poner un oyente
    // por boton es lo que hace que la vista tarde en aparecer.
    $("grid").addEventListener("click", function (event) {
      var button = event.target.closest("button");
      if (!button) return;

      if (button.dataset.fold !== undefined) {
        state.expanded[button.dataset.fold] = true;
        renderDiff();
        return;
      }
      if (button.dataset.hunk !== undefined) {
        choose(Number(button.dataset.hunk), button.dataset.choice);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (!event.altKey || event.ctrlKey || event.metaKey) return;

      if (event.key === "ArrowDown") {
        event.preventDefault();
        goTo(1);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        goTo(-1);
      } else if (event.key === "ArrowLeft" && state.current >= 0) {
        event.preventDefault();
        choose(state.current, "left");
      } else if (event.key === "ArrowRight" && state.current >= 0) {
        event.preventDefault();
        choose(state.current, "right");
      }
    });

    wireDropzone("left");
    wireDropzone("right");

    window.addEventListener("resize", syncHeaderHeight);
    narrow.addEventListener("change", applyWidth);
    if (document.fonts && document.fonts.ready) {
      // Con la fuente de sistema la cabecera mide otra cosa: hay que volver a
      // medir cuando llega la definitiva.
      document.fonts.ready.then(syncHeaderHeight);
    }
  }

  wire();
  syncHeaderHeight();
  applyWidth();
  render();
})();
