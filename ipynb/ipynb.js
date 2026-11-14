/* ============================================================
   Visor interactivo de Jupyter Notebooks (.ipynb) en navegador.
   Soporta:
     - Carga remota via ?file=Subjects/.../*.ipynb (validada)
     - Carga local mediante boton "+ Abrir .ipynb" o drag & drop
     - Markdown + KaTeX + HTML sanitizado + highlight.js + PNG/SVG
     - Selector de temas sincronizado con /viewer/ (viewer-theme)
   ============================================================ */

(function () {
  "use strict";

  var REPO = "Ismael-Sallami/ElblogdeIsmael.github.io";
  var BRANCH = "main";
  var THEME_KEY = "viewer-theme";

  /* Cuadernos destacados cuando se abre /ipynb/ sin parametro ?file= */
  var SAMPLE_NOTEBOOKS = [
    {
      tag: "Visión por Computador · P1",
      name: "Práctica 1: Introducción a OpenCV y Procesado de Imagen",
      meta: "Análisis crítico de fuentes, filtros de suavizado, ruido gaussiano/sal y pimienta, derivadas y detección de bordes.",
      file: "Subjects/Fifth/VC/practicas/practica1.ipynb"
    }
  ];

  var ALLOWED_TAGS = new Set([
    "A", "B", "BLOCKQUOTE", "BR", "CAPTION", "CODE", "DEL", "DETAILS", "DIV",
    "EM", "FIGCAPTION", "FIGURE", "FONT", "H1", "H2", "H3", "H4", "H5", "H6",
    "HR", "I", "IMG", "KBD", "LI", "MARK", "OL", "P", "PRE", "S", "SMALL",
    "SPAN", "STRONG", "SUB", "SUMMARY", "SUP", "TABLE", "TBODY", "TD", "TH",
    "THEAD", "TR", "U", "UL"
  ]);
  var STRIP_WITH_CONTENT = new Set(["SCRIPT", "STYLE", "IFRAME", "OBJECT", "EMBED", "SVG"]);

  var themeSelect = document.getElementById("theme-select");
  var ghLink = document.getElementById("gh-link");
  var contentEl = document.getElementById("nb-content");
  var openBtn = document.getElementById("open-btn");
  var fileInput = document.getElementById("file-input");
  var tocToggle = document.getElementById("toc-toggle");
  var tocAside = document.getElementById("nb-toc");
  var tocClose = document.getElementById("toc-close");
  var tocList = document.getElementById("nb-toc-list");
  var codeToggle = document.getElementById("code-toggle");
  var outputsToggle = document.getElementById("outputs-toggle");

  /* ---- 1. Gestion de temas ---- */
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (themeSelect) themeSelect.value = theme;
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
  }

  var initialTheme = document.documentElement.getAttribute("data-theme") || "paper";
  applyTheme(initialTheme);
  if (themeSelect) {
    themeSelect.addEventListener("change", function () {
      applyTheme(themeSelect.value);
    });
  }

  /* ---- 2. Validacion de ruta segura (equivalente a /viewer/) ---- */
  function isSafePath(p) {
    return typeof p === "string" && /^Subjects\/[^\s?#]*\.ipynb$/i.test(p) && !p.includes("..");
  }

  function joinSource(src) {
    if (Array.isArray(src)) return src.join("");
    return typeof src === "string" ? src : "";
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c];
    });
  }

  function stripAnsi(s) {
    return String(s).replace(/\x1b\[[0-9;]*[a-zA-Z]/g, "");
  }

  /* ---- 3. Sanitizador DOM por lista blanca ---- */
  function sanitizeUrl(url, allowDataImage) {
    var trimmed = (url || "").trim();
    if (!trimmed) return "";
    if (/^(https?:|mailto:|#)/i.test(trimmed)) return trimmed;
    if (allowDataImage && /^data:image\/(png|jpeg|jpg|gif|webp);base64,/i.test(trimmed)) {
      return trimmed;
    }
    return "";
  }

  function cleanNodeTree(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, null);
    var toProcess = [];
    var current;
    while ((current = walker.nextNode())) {
      toProcess.push(current);
    }

    toProcess.forEach(function (el) {
      if (!el.parentNode) return;
      var tag = el.tagName.toUpperCase();

      if (STRIP_WITH_CONTENT.has(tag)) {
        el.parentNode.removeChild(el);
        return;
      }

      /* Preserva bloques renderizados por KaTeX eliminando posibles manejadores de evento */
      if (el.closest && el.closest(".katex")) {
        Array.prototype.slice.call(el.attributes).forEach(function (attr) {
          if (attr.name.toLowerCase().startsWith("on")) {
            el.removeAttribute(attr.name);
          }
        });
        return;
      }

      if (!ALLOWED_TAGS.has(tag)) {
        var frag = document.createDocumentFragment();
        while (el.firstChild) frag.appendChild(el.firstChild);
        el.parentNode.replaceChild(frag, el);
        return;
      }

      /* Filtra atributos: mantiene enlaces seguros, imagenes y color de <font> */
      var attrs = Array.prototype.slice.call(el.attributes);
      attrs.forEach(function (attr) {
        var name = attr.name.toLowerCase();
        var val = attr.value;

        if (name.startsWith("on") || name === "style") {
          el.removeAttribute(attr.name);
          return;
        }
        if (tag === "A" && name === "href") {
          var safeHref = sanitizeUrl(val, false);
          if (!safeHref) el.removeAttribute("href");
          else {
            el.setAttribute("href", safeHref);
            el.setAttribute("target", "_blank");
            el.setAttribute("rel", "noopener noreferrer");
          }
          return;
        }
        if (tag === "IMG" && (name === "src" || name === "alt" || name === "title")) {
          if (name === "src") {
            var safeSrc = sanitizeUrl(val, true);
            if (!safeSrc) el.removeAttribute("src");
            else el.setAttribute("src", safeSrc);
          }
          return;
        }
        if (tag === "FONT" && name === "color") {
          var normColor = val.trim().toLowerCase();
          if (normColor === "blue" || normColor === "#0000ff") {
            el.setAttribute("data-nb-color", "blue");
            el.removeAttribute("color");
          }
          return;
        }
        if (name === "class" || name === "align" || name === "colspan" || name === "rowspan" || name === "open") {
          return;
        }
        el.removeAttribute(attr.name);
      });
    });
  }

  function sanitizeHtml(rawHtml) {
    var tpl = document.createElement("template");
    tpl.innerHTML = rawHtml;
    cleanNodeTree(tpl.content);
    return tpl.content;
  }

  /* ---- 4. Motor Markdown + KaTeX ---- */
  function createMarkdownRenderer() {
    var md = window.markdownit({
      html: true,
      linkify: true,
      typographer: false
    });
    if (window.texmath && window.katex) {
      md.use(window.texmath, {
        engine: window.katex,
        delimiters: ["dollars", "brackets"],
        katexOptions: { throwOnError: false, strict: false }
      });
    }
    return md;
  }

  var mdRenderer = createMarkdownRenderer();

  /* Sustituye attachment:img.png por su data URI base64 si existe en la celda */
  function resolveAttachments(mdText, attachments) {
    if (!attachments || typeof attachments !== "object") return mdText;
    return mdText.replace(/attachment:([^\s)"']+)/g, function (match, name) {
      var att = attachments[name];
      if (!att || typeof att !== "object") return match;
      var mimes = Object.keys(att);
      if (!mimes.length) return match;
      var mime = mimes[0];
      var b64 = joinSource(att[mime]).replace(/\s+/g, "");
      return "data:" + mime + ";base64," + b64;
    });
  }

  /* ---- 5. Renderizado de salidas Jupyter ---- */
  function renderOutputNode(out) {
    if (!out || typeof out !== "object") return null;

    if (out.output_type === "stream") {
      var pre = document.createElement("pre");
      pre.className = "nb-out-stream" + (out.name === "stderr" ? " nb-out-stderr" : "");
      pre.textContent = stripAnsi(joinSource(out.text));
      return pre;
    }

    if (out.output_type === "error") {
      var errPre = document.createElement("pre");
      errPre.className = "nb-out-error";
      var tb = Array.isArray(out.traceback) ? out.traceback.join("\n") : "";
      errPre.textContent = stripAnsi(tb || ((out.ename || "Error") + ": " + (out.evalue || "")));
      return errPre;
    }

    if (out.output_type === "display_data" || out.output_type === "execute_result") {
      var data = out.data || {};
      var rasterMime = ["image/png", "image/jpeg", "image/webp", "image/gif"].find(function (m) {
        return Boolean(data[m]);
      });

      if (rasterMime) {
        var wrap = document.createElement("div");
        wrap.className = "nb-out-img-wrap";
        var img = document.createElement("img");
        img.loading = "lazy";
        img.alt = "Figura generada por la celda";
        var rawImg = joinSource(data[rasterMime]).replace(/\s+/g, "");
        img.src = "data:" + rasterMime + ";base64," + rawImg;
        wrap.appendChild(img);
        return wrap;
      }

      if (data["text/html"]) {
        var htmlDiv = document.createElement("div");
        htmlDiv.className = "nb-out-html";
        htmlDiv.appendChild(sanitizeHtml(joinSource(data["text/html"])));
        return htmlDiv;
      }

      if (data["text/plain"]) {
        var txtPre = document.createElement("pre");
        txtPre.className = "nb-out-stream";
        txtPre.textContent = stripAnsi(joinSource(data["text/plain"]));
        return txtPre;
      }
    }

    return null;
  }

  /* ---- 6. Renderizado completo del notebook ---- */
  function highlightPythonCode(codeEl, lang) {
    if (!window.hljs) return;
    try {
      var res = lang && window.hljs.getLanguage(lang)
        ? window.hljs.highlight(codeEl.textContent, { language: lang, ignoreIllegals: true })
        : window.hljs.highlightAuto(codeEl.textContent);
      codeEl.innerHTML = res.value;
    } catch (e) {}
  }

  function buildTocAndAnchors(articleEl) {
    if (!tocList || !tocAside || !tocToggle) return;
    tocList.innerHTML = "";
    var headings = articleEl.querySelectorAll(".nb-md-cell h1, .nb-md-cell h2, .nb-md-cell h3");
    if (!headings.length) {
      tocToggle.hidden = true;
      tocAside.hidden = true;
      return;
    }

    var slugCounts = {};
    headings.forEach(function (h) {
      var level = parseInt(h.tagName.substring(1), 10);
      var text = h.textContent.trim();
      if (!text) return;
      var base = text.toLowerCase().replace(/[^a-z0-9áéíóúüñ]+/gi, "-").replace(/^-|-$/g, "") || "sec";
      slugCounts[base] = (slugCounts[base] || 0) + 1;
      var id = slugCounts[base] > 1 ? base + "-" + slugCounts[base] : base;
      h.id = id;

      var link = document.createElement("a");
      link.href = "#" + id;
      link.className = "nb-toc-link nb-toc-lvl-" + level;
      link.textContent = text;
      tocList.appendChild(link);
    });

    tocToggle.hidden = false;
  }

  function renderNotebook(nb, labelPath) {
    if (!nb || !Array.isArray(nb.cells)) {
      showError("Formato no válido", "El archivo no contiene una lista de celdas Jupyter (cells).");
      return;
    }

    var lang = (nb.metadata && nb.metadata.kernelspec && nb.metadata.kernelspec.language) ||
      (nb.metadata && nb.metadata.language_info && nb.metadata.language_info.name) ||
      "python";
    var nbFormat = (nb.nbformat || 4) + "." + (nb.nbformat_minor || 0);

    var mdCount = 0;
    var codeCount = 0;
    var imgCount = 0;

    nb.cells.forEach(function (c) {
      if (c.cell_type === "markdown") mdCount++;
      else if (c.cell_type === "code") {
        codeCount++;
        if (Array.isArray(c.outputs)) {
          c.outputs.forEach(function (o) {
            if (o.data && (o.data["image/png"] || o.data["image/jpeg"] || o.data["image/webp"])) {
              imgCount++;
            }
          });
        }
      }
    });

    var fileName = labelPath.split("/").pop() || "notebook.ipynb";
    var firstHeading = null;
    for (var i = 0; i < nb.cells.length; i++) {
      if (nb.cells[i].cell_type === "markdown") {
        var m = joinSource(nb.cells[i].source).match(/^#\s+(.+)$/m);
        if (m) {
          firstHeading = m[1].replace(/<[^>]+>/g, "").trim();
          break;
        }
      }
    }

    document.title = (firstHeading || fileName) + " · Visor de Notebooks · El Blog de Ismael";

    contentEl.classList.remove("nb-hide-code", "nb-hide-outputs");
    if (codeToggle) {
      codeToggle.hidden = codeCount === 0;
      codeToggle.setAttribute("aria-pressed", "false");
      codeToggle.textContent = "Ocultar código";
    }
    if (outputsToggle) {
      outputsToggle.hidden = codeCount === 0;
      outputsToggle.setAttribute("aria-pressed", "false");
      outputsToggle.textContent = "Plegar salidas";
    }

    var frag = document.createDocumentFragment();

    var header = document.createElement("header");
    header.className = "nb-header";
    header.innerHTML =
      '<div class="nb-eyebrow">Jupyter Notebook · ' + escapeHtml(labelPath) + "</div>" +
      '<h1 class="nb-title">' + escapeHtml(firstHeading || fileName) + "</h1>" +
      '<div class="nb-stats">' +
      '<span class="nb-pill">' + nb.cells.length + " celdas</span>" +
      '<span class="nb-pill">' + mdCount + " markdown</span>" +
      '<span class="nb-pill">' + codeCount + " código (" + escapeHtml(lang) + ")</span>" +
      '<span class="nb-pill">' + imgCount + " figuras</span>" +
      '<span class="nb-pill">nbformat v' + escapeHtml(nbFormat) + "</span>" +
      "</div>";
    frag.appendChild(header);

    var cellsContainer = document.createElement("div");
    cellsContainer.className = "nb-cells";

    nb.cells.forEach(function (cell) {
      if (cell.cell_type === "markdown") {
        var mdText = resolveAttachments(joinSource(cell.source), cell.attachments);
        if (!mdText.trim()) return;
        var mdDiv = document.createElement("section");
        mdDiv.className = "nb-cell nb-md-cell";
        mdDiv.appendChild(sanitizeHtml(mdRenderer.render(mdText)));
        cellsContainer.appendChild(mdDiv);
        return;
      }

      if (cell.cell_type === "code") {
        var srcText = joinSource(cell.source);
        var hasOutputs = Array.isArray(cell.outputs) && cell.outputs.length > 0;
        if (!srcText.trim() && !hasOutputs) return;

        var cellDiv = document.createElement("section");
        cellDiv.className = "nb-cell nb-code-cell";

        if (srcText.trim()) {
          var codeWrap = document.createElement("div");
          codeWrap.className = "nb-code-wrap";

          var bar = document.createElement("div");
          bar.className = "nb-code-bar";

          var exec = cell.execution_count != null ? "In [" + cell.execution_count + "]" : "In [ ]";
          var execSpan = document.createElement("span");
          execSpan.className = "nb-exec-count";
          execSpan.textContent = exec + " · " + lang;

          var copyBtn = document.createElement("button");
          copyBtn.className = "nb-copy-btn";
          copyBtn.type = "button";
          copyBtn.textContent = "Copiar";
          copyBtn.addEventListener("click", function () {
            if (!navigator.clipboard) return;
            navigator.clipboard.writeText(srcText).then(function () {
              copyBtn.textContent = "Copiado";
              setTimeout(function () { copyBtn.textContent = "Copiar"; }, 1400);
            }).catch(function () {});
          });

          bar.appendChild(execSpan);
          bar.appendChild(copyBtn);

          var pre = document.createElement("pre");
          pre.className = "nb-code-pre";
          var code = document.createElement("code");
          code.className = "language-" + lang;
          code.textContent = srcText;
          highlightPythonCode(code, lang);
          pre.appendChild(code);

          codeWrap.appendChild(bar);
          codeWrap.appendChild(pre);
          cellDiv.appendChild(codeWrap);
        }

        if (hasOutputs) {
          var outBox = document.createElement("div");
          outBox.className = "nb-outputs";
          cell.outputs.forEach(function (out) {
            var node = renderOutputNode(out);
            if (node) outBox.appendChild(node);
          });
          if (outBox.childNodes.length) {
            cellDiv.appendChild(outBox);
          }
        }

        cellsContainer.appendChild(cellDiv);
        return;
      }

      if (cell.cell_type === "raw") {
        var rawText = joinSource(cell.source);
        if (!rawText.trim()) return;
        var rawDiv = document.createElement("pre");
        rawDiv.className = "nb-cell nb-raw-cell";
        rawDiv.textContent = rawText;
        cellsContainer.appendChild(rawDiv);
      }
    });

    frag.appendChild(cellsContainer);
    contentEl.innerHTML = "";
    contentEl.appendChild(frag);
    buildTocAndAnchors(contentEl);
  }

  /* ---- 7. Estados vacios, errores y lectura de archivo local ---- */
  function showError(title, detail) {
    if (tocToggle) tocToggle.hidden = true;
    if (tocAside) tocAside.hidden = true;
    if (codeToggle) codeToggle.hidden = true;
    if (outputsToggle) outputsToggle.hidden = true;
    contentEl.innerHTML =
      '<div class="nb-error">' +
      "<h2>" + escapeHtml(title) + "</h2>" +
      "<p>" + escapeHtml(detail) + "</p>" +
      "</div>";
  }

  function readLocalFile(file) {
    if (!file) return;
    if (!/\.ipynb$/i.test(file.name)) {
      showError("Extensión no compatible", "Selecciona un archivo con extensión .ipynb.");
      return;
    }
    if (ghLink) ghLink.hidden = true;
    contentEl.innerHTML = '<div class="nb-loading">Procesando ' + escapeHtml(file.name) + "…</div>";
    var reader = new FileReader();
    reader.onload = function () {
      try {
        var parsed = JSON.parse(reader.result);
        renderNotebook(parsed, "archivo local / " + file.name);
      } catch (err) {
        showError("JSON no válido", "No se pudo interpretar el archivo como cuaderno Jupyter: " + err.message);
      }
    };
    reader.onerror = function () {
      showError("Error de lectura", "No se pudo leer el archivo seleccionado.");
    };
    reader.readAsText(file, "utf-8");
  }

  function showLanding() {
    if (ghLink) ghLink.hidden = true;
    if (tocToggle) tocToggle.hidden = true;
    if (tocAside) tocAside.hidden = true;
    if (codeToggle) codeToggle.hidden = true;
    if (outputsToggle) outputsToggle.hidden = true;

    var cardsHtml = SAMPLE_NOTEBOOKS.map(function (nb) {
      return (
        '<a class="nb-sample-card" href="?file=' + encodeURIComponent(nb.file) + '">' +
        '<span class="nb-sample-tag">' + escapeHtml(nb.tag) + "</span>" +
        '<span class="nb-sample-name">' + escapeHtml(nb.name) + "</span>" +
        '<span class="nb-sample-meta">' + escapeHtml(nb.meta) + "</span>" +
        "</a>"
      );
    }).join("");

    contentEl.innerHTML =
      '<div class="nb-landing-hero">' +
      "<h1>Visor de Notebooks (.ipynb)</h1>" +
      "<p>Renderiza cualquier cuaderno Jupyter directamente en tu navegador con fórmulas LaTeX, código Python resaltado, tablas y figuras matplotlib en tres temas visuales.</p>" +
      "</div>" +
      '<div id="dropzone" class="nb-dropzone" role="button" tabindex="0">' +
      "<strong>Arrastra aquí un archivo .ipynb o haz clic para seleccionarlo</strong>" +
      "<span>Tu archivo no se sube a ningún servidor: todo ocurre en local.</span>" +
      "</div>" +
      '<div class="nb-samples-title">Cuadernos disponibles en El Blog de Ismael</div>' +
      '<div class="nb-samples">' + cardsHtml + "</div>";

    var dz = document.getElementById("dropzone");
    if (dz) {
      dz.addEventListener("click", function () { fileInput.click(); });
      dz.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          fileInput.click();
        }
      });
    }
  }

  /* ---- 8. Eventos de controles y arrastrar-soltar ---- */
  if (openBtn && fileInput) {
    openBtn.addEventListener("click", function () { fileInput.click(); });
    fileInput.addEventListener("change", function () {
      if (fileInput.files && fileInput.files[0]) {
        readLocalFile(fileInput.files[0]);
      }
    });
  }

  if (tocToggle && tocAside) {
    tocToggle.addEventListener("click", function () {
      var nextHidden = !tocAside.hidden;
      tocAside.hidden = nextHidden;
      tocToggle.setAttribute("aria-pressed", String(!nextHidden));
    });
  }

  if (tocClose && tocAside && tocToggle) {
    tocClose.addEventListener("click", function () {
      tocAside.hidden = true;
      tocToggle.setAttribute("aria-pressed", "false");
    });
  }

  if (codeToggle) {
    codeToggle.addEventListener("click", function () {
      var hiddenNow = contentEl.classList.toggle("nb-hide-code");
      codeToggle.setAttribute("aria-pressed", String(hiddenNow));
      codeToggle.textContent = hiddenNow ? "Mostrar código" : "Ocultar código";
    });
  }

  if (outputsToggle) {
    outputsToggle.addEventListener("click", function () {
      var hiddenNow = contentEl.classList.toggle("nb-hide-outputs");
      outputsToggle.setAttribute("aria-pressed", String(hiddenNow));
      outputsToggle.textContent = hiddenNow ? "Mostrar salidas" : "Plegar salidas";
    });
  }

  ["dragenter", "dragover"].forEach(function (evt) {
    document.addEventListener(evt, function (e) {
      e.preventDefault();
      var dz = document.getElementById("dropzone");
      if (dz) dz.classList.add("is-drag");
    });
  });

  ["dragleave", "drop"].forEach(function (evt) {
    document.addEventListener(evt, function (e) {
      e.preventDefault();
      var dz = document.getElementById("dropzone");
      if (dz) dz.classList.remove("is-drag");
    });
  });

  document.addEventListener("drop", function (e) {
    var files = e.dataTransfer && e.dataTransfer.files;
    if (files && files[0]) readLocalFile(files[0]);
  });

  /* ---- 9. Carga inicial por parametro ?file= ---- */
  var params = new URLSearchParams(window.location.search);
  var requestedFile = params.get("file");

  if (!requestedFile) {
    showLanding();
    return;
  }

  if (!isSafePath(requestedFile)) {
    showError(
      "Ruta no permitida",
      "Por seguridad, el visor remoto solo carga archivos .ipynb dentro de Subjects/."
    );
    return;
  }

  if (ghLink) {
    ghLink.href = "https://github.com/" + REPO + "/blob/" + BRANCH + "/" + requestedFile;
    ghLink.hidden = false;
  }

  contentEl.innerHTML =
    '<div class="nb-loading">Cargando cuaderno (puede tardar unos segundos si incluye figuras)...</div>';

  fetch("../" + requestedFile)
    .then(function (resp) {
      if (!resp.ok) throw new Error("HTTP " + resp.status);
      return resp.json();
    })
    .then(function (nb) {
      renderNotebook(nb, requestedFile);
    })
    .catch(function (err) {
      showError("No se pudo cargar el cuaderno", err.message || "Error de red.");
    });
})();
