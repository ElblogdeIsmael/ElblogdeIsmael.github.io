/* app.js — UI del conversor md2html (drag&drop, opciones, preview, descarga) */
(function () {
  "use strict";

  var SWATCH = {
    pro: "#007bff", navy: "#1d4ed8", burdeos: "#8e2434", verde: "#0f766e",
    indigo: "#4338ca", grafito: "#475569", ambar: "#b45309", academico: "#8b2a0f",
    terminal: "#00e58a", mono: "#111111", teal: "#0d9488", rosa: "#db2777",
  };

  var EJEMPLO = [
    "# Test de ejemplo · md2html",
    "- **Autor:** Ismael Sallami",
    "- **Titulación:** Doble Grado GII + ADE",
    "- **Descripción:** Demostración del conversor: secciones, varias correctas, explicaciones, fórmulas, código y tablas.",
    "",
    "<!-- Conceptos básicos -->",
    "1. ¿Cuál es la capital de Francia?",
    "    - ( ) Berlín",
    "    - (x) París",
    "    - ( ) Roma",
    "> París es la capital de Francia desde el año 987.",
    "",
    "2. Selecciona los números **primos** (puede haber varias correctas):",
    "    - (x) 2",
    "    - (x) 7",
    "    - ( ) 9",
    "    - (x) 13",
    "> Un primo solo es divisible por 1 y por sí mismo.",
    "",
    "<!-- Mates y código -->",
    "3. La solución de una ecuación de 2º grado es $$x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$$ . ¿Qué término es el discriminante?",
    "    - (x) $b^2 - 4ac$",
    "    - ( ) $2a$",
    "    - ( ) $-b$",
    "",
    "4. ¿Qué imprime este código Python?",
    "    ```python",
    "    print(2 ** 3)",
    "    ```",
    "    - ( ) 6",
    "    - (x) 8",
    "    - ( ) 9",
    "> `**` es la potencia: 2 elevado a 3 = 8.",
    "",
    "5. Según la tabla, ¿qué lenguaje apareció primero?",
    "",
    "    | Lenguaje | Año |",
    "    |----------|-----|",
    "    | Python   | 1991|",
    "    | Java     | 1995|",
    "",
    "    - (x) Python",
    "    - ( ) Java",
    "",
  ].join("\n");

  var $ = function (id) { return document.getElementById(id); };

  var state = {
    contenido: null,
    nombre: "test",
    tema: "pro",
    htmlGenerado: "",
  };

  // ---------- Tema de la página (claro/oscuro) ----------
  (function initPageTheme() {
    var saved = localStorage.getItem("md2html_page_theme");
    if (saved === "light") document.body.classList.add("light");
    var btn = $("theme-toggle");
    function paint() { btn.textContent = document.body.classList.contains("light") ? "☀️" : "🌙"; }
    paint();
    btn.addEventListener("click", function () {
      document.body.classList.toggle("light");
      localStorage.setItem("md2html_page_theme", document.body.classList.contains("light") ? "light" : "dark");
      paint();
    });
  })();

  // ---------- Construir selector de temas ----------
  (function buildThemeGrid() {
    var grid = $("theme-grid");
    var temas = window.MD2HTML_TEMAS || [];
    temas.forEach(function (t, i) {
      var chip = document.createElement("button");
      chip.type = "button";
      chip.className = "theme-chip" + (i === 0 ? " active" : "");
      chip.dataset.key = t.key;
      chip.innerHTML =
        '<span class="swatch" style="background:' + (SWATCH[t.key] || "#888") + '"></span>' +
        "<span>" + t.name + "</span>";
      chip.addEventListener("click", function () {
        state.tema = t.key;
        Array.prototype.forEach.call(grid.children, function (c) { c.classList.remove("active"); });
        chip.classList.add("active");
        regenerar();
      });
      grid.appendChild(chip);
    });
  })();

  // ---------- Carga de ficheros ----------
  var dz = $("dropzone");
  var fileInput = $("file-input");

  function cargarTexto(texto, nombre) {
    state.contenido = texto;
    state.nombre = (nombre || "test").replace(/\.(md|markdown)$/i, "") || "test";
    $("file-name").textContent = nombre || "ejemplo.md";
    $("file-status").hidden = false;
    dz.querySelector(".dz-inner").style.display = "none";
    regenerar();
  }

  function leerArchivo(file) {
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function (e) { cargarTexto(e.target.result, file.name); };
    reader.readAsText(file, "utf-8");
  }

  dz.addEventListener("click", function (e) {
    if (e.target.closest("#btn-clear") || e.target.closest("#btn-ejemplo")) return;
    fileInput.click();
  });
  dz.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fileInput.click(); }
  });
  fileInput.addEventListener("change", function () { leerArchivo(fileInput.files[0]); });

  ["dragenter", "dragover"].forEach(function (ev) {
    dz.addEventListener(ev, function (e) { e.preventDefault(); dz.classList.add("dragover"); });
  });
  ["dragleave", "drop"].forEach(function (ev) {
    dz.addEventListener(ev, function (e) { e.preventDefault(); dz.classList.remove("dragover"); });
  });
  dz.addEventListener("drop", function (e) {
    var file = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
    leerArchivo(file);
  });

  $("btn-ejemplo").addEventListener("click", function (e) {
    e.stopPropagation();
    cargarTexto(EJEMPLO, "ejemplo.md");
  });

  $("btn-clear").addEventListener("click", function (e) {
    e.stopPropagation();
    state.contenido = null;
    state.htmlGenerado = "";
    fileInput.value = "";
    $("file-status").hidden = true;
    dz.querySelector(".dz-inner").style.display = "";
    $("preview-frame").hidden = true;
    $("preview-empty").hidden = false;
    $("btn-download").disabled = true;
    $("btn-copy").disabled = true;
  });

  // ---------- Generación ----------
  function temaPlantilla() {
    var tpls = window.MD2HTML_TEMPLATES || {};
    return tpls[state.tema] || tpls.pro;
  }

  function inyectarExamen(html) {
    var script =
      "<script>window.addEventListener('load',function(){try{" +
      "resetAnswers();document.body.classList.add('modo-examen');" +
      "var b=document.createElement('button');b.id='btn-corregir-examen';" +
      "b.textContent='Finalizar y Corregir Examen';b.style.display='block';" +
      "b.style.margin='30px auto';b.style.fontSize='1.2em';b.onclick=finalizarExamen;" +
      "document.getElementById('questions-container').after(b);}catch(e){}});<\/script>";
    return html.replace("</body>", script + "\n</body>");
  }

  var debounceTimer = null;
  function regenerar() {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(_regenerar, 120);
  }

  function _regenerar() {
    if (!state.contenido) return;
    try {
      var res = window.MD2HTML.generarHtmlFinal(state.contenido, {
        plantilla: temaPlantilla(),
        usarSecciones: $("opt-secciones").checked,
        shuffle: $("opt-shuffle").checked,
        titulo: $("meta-titulo").value,
        autor: $("meta-autor").value,
        titulacion: $("meta-titulacion").value,
        descripcion: $("meta-desc").value,
      });

      var html = res.html;
      if ($("opt-examen").checked) html = inyectarExamen(html);
      state.htmlGenerado = html;

      // Contador de preguntas
      var badge = $("q-count");
      badge.textContent = res.numPreguntas + (res.numPreguntas === 1 ? " pregunta" : " preguntas");
      badge.style.display = "";

      // Preview
      var frame = $("preview-frame");
      frame.srcdoc = html;
      frame.hidden = false;
      $("preview-empty").hidden = true;

      var hay = res.numPreguntas > 0;
      $("btn-download").disabled = !hay;
      $("btn-copy").disabled = !hay;
      if (!hay) toast("No se detectaron preguntas. Revisa el formato (1. … - (x) …).", true);
    } catch (err) {
      console.error(err);
      toast("Error al generar: " + err.message, true);
    }
  }

  // Regenerar al cambiar cualquier opción
  ["opt-secciones", "opt-shuffle", "opt-examen"].forEach(function (id) {
    $(id).addEventListener("change", regenerar);
  });
  ["meta-titulo", "meta-autor", "meta-titulacion", "meta-desc"].forEach(function (id) {
    $(id).addEventListener("input", regenerar);
  });
  $("btn-reload").addEventListener("click", regenerar);

  // ---------- Descargar / Copiar ----------
  $("btn-download").addEventListener("click", function () {
    if (!state.htmlGenerado) return;
    var blob = new Blob([state.htmlGenerado], { type: "text/html;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = state.nombre + ".html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast("Descargado ✓");
  });

  $("btn-copy").addEventListener("click", function () {
    if (!state.htmlGenerado) return;
    var done = function () { toast("HTML copiado al portapapeles ✓"); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(state.htmlGenerado).then(done, function () { fallbackCopy(); });
    } else { fallbackCopy(); }
    function fallbackCopy() {
      var ta = document.createElement("textarea");
      ta.value = state.htmlGenerado;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); done(); } catch (e) {}
      document.body.removeChild(ta);
    }
  });

  var toastTimer = null;
  function toast(msg, isError) {
    var t = $("toast");
    t.textContent = msg;
    t.style.color = isError ? "var(--danger)" : "var(--good)";
    t.hidden = false;
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.hidden = true; }, 3200);
  }
})();
