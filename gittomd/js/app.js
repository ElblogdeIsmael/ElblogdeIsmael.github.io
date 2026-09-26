/* gittomd en el navegador.
 *
 * El núcleo (filtros, árbol, Markdown, llamadas a la API) está en
 * gittomd-core.js, que se genera desde el repositorio de la herramienta. Aquí
 * solo va la interfaz. Todo se habla directamente con GitHub:
 *   - api.github.com para los datos del repo, el árbol y los ficheros privados
 *   - raw.githubusercontent.com para los ficheros de los repos públicos
 */
(function () {
  "use strict";

  var G = window.GitToMd;
  var TOKEN_KEY = "gittomd_token";
  var CONCURRENCY = 8;
  var PREVIEW_LIMIT = 300000; // caracteres que se pintan en pantalla

  function $(id) {
    return document.getElementById(id);
  }

  /* ---------------------------------------------------------------- *
   * Tema, igual que en las otras herramientas
   * ---------------------------------------------------------------- */
  (function initPageTheme() {
    var saved = null;
    try { saved = localStorage.getItem("gittomd_theme"); } catch (e) { /* sin almacenamiento */ }
    if (saved === "dark") document.body.classList.remove("light");
    else document.body.classList.add("light");

    var btn = $("theme-toggle");
    function paint() {
      btn.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
    }
    paint();
    btn.addEventListener("click", function () {
      document.body.classList.toggle("light");
      try {
        localStorage.setItem("gittomd_theme", document.body.classList.contains("light") ? "light" : "dark");
      } catch (e) { /* sin almacenamiento */ }
      paint();
    });
  })();

  /* ---------------------------------------------------------------- *
   * Estado
   * ---------------------------------------------------------------- */
  var state = {
    target: null,     // { owner, repo, ref, subdir }
    info: null,       // respuesta de /repos/{owner}/{repo}
    sha: "",
    ref: "",
    entries: [],      // [{ path, size, type }]
    ignoreFiles: {},  // { ruta: texto } de los .gitignore y .gittomdignore
    plan: null,       // { selected, skipped }
    unticked: {},     // rutas desmarcadas a mano
    markdown: "",
    busy: false,
  };

  function getToken() {
    try { return sessionStorage.getItem(TOKEN_KEY) || ""; } catch (e) { return ""; }
  }
  function setToken(token) {
    try {
      if (token) sessionStorage.setItem(TOKEN_KEY, token);
      else sessionStorage.removeItem(TOKEN_KEY);
    } catch (e) { /* sin almacenamiento */ }
  }

  /* ---------------------------------------------------------------- *
   * Mensajes
   * ---------------------------------------------------------------- */
  function notice(text, isError) {
    var el = $("notice");
    if (!text) {
      el.hidden = true;
      return;
    }
    el.hidden = false;
    el.textContent = text;
    el.classList.toggle("gtm-error", Boolean(isError));
  }

  function announce(text) {
    $("announce").textContent = text;
  }

  function progress(done, total, text) {
    var box = $("progress");
    if (total <= 0) {
      box.hidden = true;
      $("progress-text").textContent = text || "";
      return;
    }
    box.hidden = false;
    $("progress-bar").style.width = Math.round((done / total) * 100) + "%";
    $("progress-text").textContent = text || done + " / " + total;
  }

  function explainError(err) {
    if (err && err.kind === "rate-limit") {
      var when = err.reset ? " Se reinicia a las " + err.reset.toLocaleTimeString() + "." : "";
      return "GitHub ha cortado las consultas sin sesión (unas 60 por hora)." + when +
        " Con un token el límite sube a 5000: pega uno en el recuadro de repos privados.";
    }
    if (err && err.kind === "auth") return "GitHub ha rechazado el token. Revisa que esté bien copiado y que no haya caducado.";
    if (err && err.kind === "network") return "No he podido conectar con GitHub. Revisa la conexión.";
    return "Algo ha fallado: " + (err && err.message ? err.message : err);
  }

  /* ---------------------------------------------------------------- *
   * Opciones del formulario
   * ---------------------------------------------------------------- */
  function splitList(value) {
    return String(value || "").split(",").map(function (s) { return s.trim(); }).filter(Boolean);
  }

  function readOptions() {
    var kb = parseInt($("maxsize-input").value, 10);
    return {
      include: splitList($("include-input").value),
      exclude: splitList($("exclude-input").value),
      subdir: $("subdir-input").value.trim() || (state.target ? state.target.subdir : ""),
      maxFileSize: (kb > 0 ? kb : 512) * 1024,
      useGitignore: $("opt-gitignore").checked,
      includeLockfiles: $("opt-lockfiles").checked,
      includeMinified: $("opt-minified").checked,
      tree: $("opt-tree").checked,
      lang: $("lang-select").value,
    };
  }

  /* ---------------------------------------------------------------- *
   * Paso 1: cargar el repositorio (datos, árbol y reglas de ignore)
   * ---------------------------------------------------------------- */
  function setBusy(busy) {
    state.busy = busy;
    $("load-btn").disabled = busy;
    $("token-btn").disabled = busy;
    $("build-btn").disabled = busy || !state.plan || selectedEntries().length === 0;
  }

  function showPrivateBox(show, text) {
    $("private-box").hidden = !show;
    if (text) $("private-text").innerHTML = text;
    if (show) $("token-input").focus();
  }

  async function loadRepo() {
    if (state.busy) return;
    var input = $("repo-input").value.trim();
    var target = G.parseRepoInput(input);
    if (!target) {
      notice("No reconozco eso como un repositorio de GitHub. Prueba con owner/repo o con la dirección completa.", true);
      return;
    }
    var ref = $("ref-input").value.trim();
    if (ref) target.ref = ref;

    state.target = target;
    state.plan = null;
    state.unticked = {};
    notice("");
    showPrivateBox(false);
    $("files-box").hidden = true;
    resetOutput();
    setBusy(true);

    var token = getToken();
    var opts = { token: token };
    var name = target.owner + "/" + target.repo;
    try {
      progress(0, 0, "Buscando " + name + "...");
      var info = await G.getRepo(target.owner, target.repo, opts);
      var resolved = await G.resolveRef(target.owner, target.repo, target.ref || info.default_branch, target.subdir, opts);
      progress(0, 0, "Leyendo la lista de ficheros...");
      var tree = await G.getTree(target.owner, target.repo, resolved.sha, opts);

      state.info = info;
      state.sha = resolved.sha;
      state.ref = resolved.ref;
      state.target.subdir = resolved.subdir;
      if (resolved.subdir && !$("subdir-input").value.trim()) $("subdir-input").value = resolved.subdir;
      state.entries = tree.entries;

      state.ignoreFiles = {};
      var ignorePaths = G.ignoreFilePaths(tree.entries).slice(0, 30);
      await runPool(ignorePaths, function (path) {
        return downloadText(path).then(function (text) {
          if (text !== null) state.ignoreFiles[path] = text;
        }, function () { /* sin ese fichero se sigue igual */ });
      });

      if (tree.truncated) {
        notice("El repositorio es tan grande que GitHub no devuelve la lista completa de ficheros. " +
          "Faltarán algunos: usa la terminal (gittomd) para convertirlo entero.", false);
      }
      progress(0, 0, "");
      replan();
      announce("Repositorio cargado: " + state.entries.length + " ficheros.");
    } catch (err) {
      progress(0, 0, "");
      if (err && err.kind === "not-found") {
        if (token) {
          showPrivateBox(true, "<strong>No encuentro " + escapeHtml(name) + ".</strong> O no existe, o el token " +
            "no tiene acceso a él. Revisa el nombre o pega otro token.");
        } else {
          showPrivateBox(true, "<strong>No encuentro " + escapeHtml(name) + ".</strong> ¿Es privado? Pega un token " +
            "de GitHub con permiso de solo lectura y lo vuelvo a intentar.");
        }
      } else {
        notice(explainError(err), true);
      }
    } finally {
      setBusy(false);
    }
  }

  // Descarga un fichero del commit cargado y lo devuelve como texto (null si es binario).
  function downloadBytes(path) {
    return G.getFileBytes(state.target.owner, state.target.repo, state.sha, path, {
      token: getToken(),
      isPrivate: Boolean(state.info && state.info.private),
    });
  }
  function downloadText(path) {
    return downloadBytes(path).then(G.decodeText);
  }

  async function runPool(items, worker) {
    var index = 0;
    async function next() {
      while (index < items.length) {
        var i = index++;
        await worker(items[i], i);
      }
    }
    var runners = [];
    for (var n = 0; n < Math.min(CONCURRENCY, items.length); n++) runners.push(next());
    await Promise.all(runners);
  }

  /* ---------------------------------------------------------------- *
   * Lista de ficheros
   * ---------------------------------------------------------------- */
  function replan() {
    if (!state.entries.length && !state.info) return;
    state.plan = G.planEntries(state.entries, readOptions(), state.ignoreFiles);
    renderFileList();
    setBusy(false);
  }

  function selectedEntries() {
    if (!state.plan) return [];
    return state.plan.selected.filter(function (e) { return !state.unticked[e.path]; });
  }

  function renderFileList() {
    var list = $("file-list");
    var filter = $("files-filter").value.trim().toLowerCase();
    list.textContent = "";
    var frag = document.createDocumentFragment();
    var shown = 0;
    state.plan.selected.forEach(function (entry) {
      if (filter && entry.path.toLowerCase().indexOf(filter) === -1) return;
      if (shown >= 2000) return;
      shown++;
      var li = document.createElement("li");
      var label = document.createElement("label");
      var box = document.createElement("input");
      box.type = "checkbox";
      box.checked = !state.unticked[entry.path];
      box.dataset.path = entry.path;
      var name = document.createElement("span");
      name.className = "gtm-path";
      name.textContent = entry.path;
      var size = document.createElement("span");
      size.className = "gtm-size";
      size.textContent = G.formatBytes(entry.size);
      label.appendChild(box);
      label.appendChild(name);
      label.appendChild(size);
      li.appendChild(label);
      frag.appendChild(li);
    });
    list.appendChild(frag);
    if (shown >= 2000) {
      var more = document.createElement("li");
      more.className = "hint";
      more.textContent = "Hay más ficheros. Usa el filtro para encontrarlos.";
      list.appendChild(more);
    }
    $("files-box").hidden = false;
    updateCounts();
  }

  function updateCounts() {
    var chosen = selectedEntries();
    var bytes = chosen.reduce(function (n, e) { return n + e.size; }, 0);
    $("files-count").textContent = chosen.length + " de " + state.plan.selected.length + " ficheros, " + G.formatBytes(bytes);

    var reasons = {};
    state.plan.skipped.forEach(function (s) { reasons[s.reason] = (reasons[s.reason] || 0) + 1; });
    var parts = Object.keys(reasons).map(function (r) {
      return reasons[r] + " " + G.t("es", "reasons." + r);
    });
    $("skipped-line").textContent = parts.length ? "Omitidos: " + parts.join(", ") + "." : "No se omite nada.";
    $("build-btn").disabled = state.busy || chosen.length === 0;
  }

  $("file-list").addEventListener("change", function (ev) {
    var box = ev.target;
    if (!box.dataset || !box.dataset.path) return;
    if (box.checked) delete state.unticked[box.dataset.path];
    else state.unticked[box.dataset.path] = true;
    updateCounts();
  });

  $("files-filter").addEventListener("input", function () {
    if (state.plan) renderFileList();
  });

  function tickVisible(value) {
    var boxes = $("file-list").querySelectorAll("input[type=checkbox]");
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].checked = value;
      if (value) delete state.unticked[boxes[i].dataset.path];
      else state.unticked[boxes[i].dataset.path] = true;
    }
    updateCounts();
  }
  $("select-all").addEventListener("click", function () { tickVisible(true); });
  $("select-none").addEventListener("click", function () { tickVisible(false); });

  /* ---------------------------------------------------------------- *
   * Paso 2: descargar los ficheros y generar el Markdown
   * ---------------------------------------------------------------- */
  async function build() {
    if (state.busy || !state.plan) return;
    var chosen = selectedEntries();
    if (!chosen.length) return;
    setBusy(true);
    notice("");

    var files = [];
    var skipped = state.plan.skipped.slice();
    state.plan.selected.forEach(function (e) {
      if (state.unticked[e.path]) skipped.push({ path: e.path, size: e.size, reason: "user-excluded" });
    });

    var done = 0;
    var fatal = null;
    progress(0, chosen.length, "Descargando ficheros: 0 / " + chosen.length);
    await runPool(chosen, function (entry) {
      if (fatal) return Promise.resolve();
      return downloadBytes(entry.path).then(function (bytes) {
        var text = G.decodeText(bytes);
        if (text === null) skipped.push({ path: entry.path, size: entry.size, reason: "binary" });
        else files.push({ path: entry.path, content: text, size: entry.size });
      }, function (err) {
        if (err && (err.kind === "rate-limit" || err.kind === "auth")) fatal = err;
        else skipped.push({ path: entry.path, size: entry.size, reason: "fetch-error" });
      }).then(function () {
        done++;
        progress(done, chosen.length, "Descargando ficheros: " + done + " / " + chosen.length);
      });
    });

    if (fatal) {
      progress(0, 0, "");
      notice(explainError(fatal), true);
      setBusy(false);
      return;
    }

    var opts = readOptions();
    var info = state.info;
    var subdir = opts.subdir;
    var title = info.full_name + (subdir ? "/" + subdir : "");
    var result = G.buildMarkdown({
      title: title,
      rootName: subdir ? subdir.split("/").pop() : info.name,
      lang: opts.lang,
      tree: opts.tree,
      meta: {
        source: info.html_url + (subdir ? "/tree/" + state.ref + "/" + subdir : ""),
        description: info.description || "",
        ref: state.ref,
        commit: state.sha,
        date: new Date().toISOString().slice(0, 10),
      },
    }, files, skipped);

    state.markdown = result.parts[0];
    showOutput(result, (subdir ? subdir.split("/").pop() : info.name) + ".md");
    progress(0, 0, "Listo.");
    setBusy(false);
    announce("Markdown generado con " + result.fileCount + " ficheros.");
  }

  /* ---------------------------------------------------------------- *
   * Resultado
   * ---------------------------------------------------------------- */
  function resetOutput() {
    state.markdown = "";
    $("out-box").hidden = true;
    $("out-empty").hidden = false;
    $("out-title").textContent = "resultado.md";
  }

  function showOutput(result, filename) {
    $("out-empty").hidden = true;
    $("out-box").hidden = false;
    $("out-title").textContent = filename;
    $("download-btn").dataset.filename = filename.replace(/[^A-Za-z0-9._-]/g, "_");
    $("out-stats").textContent = result.fileCount + " ficheros incluidos, " + result.skippedCount +
      " omitidos, " + G.formatBytes(state.markdown.length) + ", unos " + G.formatTokens(result.tokens) + " tokens.";

    var warn = $("out-warning");
    if (result.tokens > 200000) {
      warn.hidden = false;
      warn.textContent = "Es mucho texto: puede que no quepa en el contexto de tu IA. " +
        "Prueba a limitarlo con Incluir, Excluir o Solo esta carpeta, o desmarca ficheros de la lista.";
    } else {
      warn.hidden = true;
    }

    var text = state.markdown;
    $("out-text").textContent = text.length > PREVIEW_LIMIT
      ? text.slice(0, PREVIEW_LIMIT) + "\n\n[Vista previa cortada. Copiar y Descargar llevan el documento completo.]"
      : text;
  }

  $("copy-btn").addEventListener("click", function () {
    var btn = this;
    function ok() {
      btn.textContent = "Copiado";
      setTimeout(function () { btn.textContent = "Copiar"; }, 1600);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(state.markdown).then(ok, fallback);
    } else {
      fallback();
    }
    function fallback() {
      var area = document.createElement("textarea");
      area.value = state.markdown;
      document.body.appendChild(area);
      area.select();
      try { document.execCommand("copy"); ok(); } catch (e) { notice("No he podido copiar. Usa Descargar.", true); }
      document.body.removeChild(area);
    }
  });

  $("download-btn").addEventListener("click", function () {
    var blob = new Blob([state.markdown], { type: "text/markdown;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = this.dataset.filename || "repo.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  });

  /* ---------------------------------------------------------------- *
   * Eventos
   * ---------------------------------------------------------------- */
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  $("repo-form").addEventListener("submit", function (ev) {
    ev.preventDefault();
    loadRepo();
  });

  $("token-btn").addEventListener("click", function () {
    var token = $("token-input").value.trim();
    if (!token) {
      $("token-input").focus();
      return;
    }
    setToken(token);
    $("token-input").value = "";
    loadRepo();
  });
  $("token-input").addEventListener("keydown", function (ev) {
    if (ev.key === "Enter") {
      ev.preventDefault();
      $("token-btn").click();
    }
  });
  $("token-cancel").addEventListener("click", function () {
    showPrivateBox(false);
    notice("Si es público y no aparece, revisa que el nombre esté bien escrito.", false);
  });

  $("build-btn").addEventListener("click", build);

  // Cambiar una opción de filtro rehace la lista sin volver a pedir nada a GitHub.
  ["include-input", "exclude-input", "subdir-input", "maxsize-input"].forEach(function (id) {
    $(id).addEventListener("change", function () { if (state.entries.length) replan(); });
  });
  ["opt-gitignore", "opt-lockfiles", "opt-minified"].forEach(function (id) {
    $(id).addEventListener("change", function () { if (state.entries.length) replan(); });
  });

  // ?repo=owner/repo carga el repositorio al abrir la página.
  (function fromQuery() {
    var params = new URLSearchParams(location.search);
    var repo = params.get("repo");
    if (!repo) return;
    $("repo-input").value = repo;
    if (params.get("ref")) $("ref-input").value = params.get("ref");
    loadRepo();
  })();
})();
