/* app.js — UI del conversor PDF/DOCX/XLSX → Markdown (cola, preview, zip) */
(function () {
  "use strict";

  // pdf.js worker (sin esto la conversión PDF falla en silencio)
  if (window.pdfjsLib) {
    window.pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js";
  }

  var $ = function (id) { return document.getElementById(id); };
  var md = window.markdownit ? window.markdownit({ html: false, linkify: true, breaks: false }) : null;

  // ---------- tema claro/oscuro (persistido) ----------
  (function initPageTheme() {
    var saved = localStorage.getItem("pdf2md_theme");
    if (saved === "light") document.body.classList.add("light");
    else if (!saved) localStorage.setItem("pdf2md_theme", "dark");
    var btn = $("theme-toggle");
    if (!btn) return;
    function paint() { btn.textContent = document.body.classList.contains("light") ? "☀️" : "🌙"; }
    paint();
    btn.addEventListener("click", function () {
      document.body.classList.toggle("light");
      localStorage.setItem("pdf2md_theme", document.body.classList.contains("light") ? "light" : "dark");
      paint();
      if (selected >= 0) renderPreview(); // re-render para que la preview siga el tema
    });
  })();

  // estado: lista de { file, name(base), status, result, error, objectUrls:[] }
  var items = [];
  var selected = -1;

  var dz = $("dropzone");
  var fileInput = $("file-input");

  function baseName(name) {
    return (name || "documento").replace(/\.[^.]+$/, "").replace(/[\\/]+/g, "_") || "documento";
  }

  function iconFor(ext) {
    if (ext === "pdf") return "📕";
    if (ext === "docx") return "📘";
    if (ext === "xlsx" || ext === "xls") return "📗";
    return "📄";
  }

  // ---------- añadir archivos ----------
  function addFiles(fileList) {
    var arr = Array.prototype.slice.call(fileList || []);
    var added = 0;
    arr.forEach(function (f) {
      var ext = window.PDF2MD.extOf(f.name);
      if (window.PDF2MD.supported.indexOf(ext) === -1) {
        toast("Formato no soportado: " + f.name, true);
        return;
      }
      items.push({ file: f, name: baseName(f.name), ext: ext, status: "pending", result: null, error: null, objectUrls: [] });
      added++;
    });
    if (added) {
      $("dz-inner").style.display = "none";
      renderList();
      convertPending();
    }
  }

  // ---------- conversión ----------
  async function convertPending() {
    for (var i = 0; i < items.length; i++) {
      if (items[i].status !== "pending") continue;
      items[i].status = "working";
      renderList();
      try {
        var res = await window.PDF2MD.convert(items[i].file, {});
        items[i].result = res;
        items[i].status = "done";
        if (selected === -1) selectItem(i);
      } catch (err) {
        console.error(err);
        items[i].status = "error";
        items[i].error = err && err.message ? err.message : String(err);
      }
      renderList();
      updateDownloadState();
    }
    if (selected >= 0) renderPreview();
  }

  // ---------- lista de archivos ----------
  function renderList() {
    var list = $("file-list");
    list.innerHTML = "";
    items.forEach(function (it, i) {
      var li = document.createElement("div");
      li.className = "fitem" + (i === selected ? " active" : "") + (it.status === "error" ? " err" : "");
      var imgs = it.result ? it.result.images.length : 0;
      var status =
        it.status === "working" ? '<span class="spin" aria-hidden="true"></span> convirtiendo…' :
        it.status === "done" ? "✓ " + (imgs ? imgs + (imgs === 1 ? " imagen" : " imágenes") : "listo") :
        it.status === "error" ? "✕ " + (it.error || "error") :
        "en cola…";
      li.innerHTML =
        '<span class="fi-ico">' + iconFor(it.ext) + "</span>" +
        '<span class="fi-meta"><span class="fi-name">' + it.file.name + "</span>" +
        '<span class="fi-status">' + status + "</span></span>" +
        '<button class="fi-del ghost-btn small" data-i="' + i + '" title="Quitar">✕</button>';
      li.addEventListener("click", function (e) {
        if (e.target.closest(".fi-del")) return;
        if (it.status === "done") selectItem(i);
      });
      list.appendChild(li);
    });
    Array.prototype.forEach.call(list.querySelectorAll(".fi-del"), function (btn) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        removeItem(parseInt(btn.dataset.i, 10));
      });
    });
    $("file-list").hidden = items.length === 0;
    $("queue-bar").hidden = items.length === 0;
    $("q-count").textContent = items.length + (items.length === 1 ? " archivo" : " archivos");
  }

  function removeItem(i) {
    var it = items[i];
    if (it) it.objectUrls.forEach(function (u) { URL.revokeObjectURL(u); });
    items.splice(i, 1);
    if (selected === i) { selected = -1; }
    else if (selected > i) { selected--; }
    if (!items.length) {
      $("dz-inner").style.display = "";
      $("preview-frame").hidden = true;
      $("preview-empty").hidden = false;
    } else if (selected === -1) {
      var firstDone = items.findIndex(function (x) { return x.status === "done"; });
      if (firstDone >= 0) selectItem(firstDone);
    }
    renderList();
    updateDownloadState();
  }

  function selectItem(i) {
    selected = i;
    renderList();
    renderPreview();
  }

  // ---------- preview ----------
  function renderPreview() {
    var it = items[selected];
    if (!it || !it.result || !md) return;
    // URLs de objeto para que las imágenes se vean en la vista previa
    it.objectUrls.forEach(function (u) { URL.revokeObjectURL(u); });
    it.objectUrls = [];
    var urlByPath = {};
    it.result.images.forEach(function (img) {
      var blob = img.blob || (img.base64 ? base64ToBlob(img.base64) : null);
      if (blob) { var u = URL.createObjectURL(blob); it.objectUrls.push(u); urlByPath[img.path] = u; }
    });
    var rendered = md.render(it.result.markdown);
    rendered = rendered.replace(/(<img[^>]+src=")([^"]+)(")/g, function (m0, a, src, c) {
      return a + (urlByPath[src] || src) + c;
    });
    var frame = $("preview-frame");
    var light = document.body.classList.contains("light");
    frame.srcdoc =
      '<!doctype html><html><head><meta charset="utf-8">' +
      "<style>" + buildPreviewCss(light) + "</style></head><body><article class='md'>" +
      rendered + "</article></body></html>";
    frame.hidden = false;
    $("preview-empty").hidden = true;
    $("preview-title").textContent = it.name + ".md";
  }

  function base64ToBlob(b64) {
    try {
      var bin = atob(b64), len = bin.length, u8 = new Uint8Array(len);
      for (var i = 0; i < len; i++) u8[i] = bin.charCodeAt(i);
      return new Blob([u8]);
    } catch (e) { return null; }
  }

  // ---------- descarga zip ----------
  function updateDownloadState() {
    var anyDone = items.some(function (it) { return it.status === "done"; });
    $("btn-zip").disabled = !anyDone;
    $("btn-clear-all").disabled = items.length === 0;
  }

  async function downloadZip() {
    var done = items.filter(function (it) { return it.status === "done"; });
    if (!done.length) return;
    var zip = new JSZip();
    var used = {};
    done.forEach(function (it) {
      var folderName = it.name;
      while (used[folderName]) folderName = folderName + "_"; // evitar colisiones
      used[folderName] = true;
      var folder = zip.folder(folderName);
      folder.file("output.md", it.result.markdown);
      it.result.images.forEach(function (img) {
        if (img.base64) folder.file(img.path, img.base64, { base64: true });
        else if (img.blob) folder.file(img.path, img.blob);
      });
    });
    toast("Generando zip…");
    var blob = await zip.generateAsync({ type: "blob" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = done.length === 1 ? done[0].name + ".zip" : "markdown-export.zip";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast("Descargado ✓");
  }

  function clearAll() {
    items.forEach(function (it) { it.objectUrls.forEach(function (u) { URL.revokeObjectURL(u); }); });
    items = [];
    selected = -1;
    fileInput.value = "";
    $("dz-inner").style.display = "";
    $("preview-frame").hidden = true;
    $("preview-empty").hidden = false;
    renderList();
    updateDownloadState();
  }

  // ---------- eventos ----------
  dz.addEventListener("click", function (e) {
    if (e.target.closest("#file-list") || e.target.closest("#queue-bar")) return;
    fileInput.click();
  });
  dz.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fileInput.click(); }
  });
  fileInput.addEventListener("change", function () { addFiles(fileInput.files); fileInput.value = ""; });

  ["dragenter", "dragover"].forEach(function (ev) {
    dz.addEventListener(ev, function (e) { e.preventDefault(); dz.classList.add("dragover"); });
  });
  ["dragleave", "drop"].forEach(function (ev) {
    dz.addEventListener(ev, function (e) { e.preventDefault(); dz.classList.remove("dragover"); });
  });
  // permitir soltar en cualquier parte de la página
  ["dragover", "drop"].forEach(function (ev) {
    document.addEventListener(ev, function (e) { e.preventDefault(); });
  });
  dz.addEventListener("drop", function (e) {
    addFiles(e.dataTransfer && e.dataTransfer.files);
  });

  $("btn-zip").addEventListener("click", downloadZip);
  $("btn-clear-all").addEventListener("click", clearAll);

  // ---------- toast ----------
  var toastTimer = null;
  function toast(msg, isError) {
    var t = $("toast");
    t.textContent = msg;
    t.style.color = isError ? "var(--danger)" : "var(--accent)";
    t.hidden = false;
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.hidden = true; }, 3400);
  }

  // CSS inyectado en el iframe de preview (estilo apuntes, sigue el tema de la página)
  function buildPreviewCss(light) {
    var bg = light ? "#ffffff" : "#0d0f12";
    var fg = light ? "#11201c" : "#e8efe9";
    var head = light ? "#0c1a16" : "#ffffff";
    var codeBg = light ? "#eef2ef" : "#161b20";
    var preBg = light ? "#f3f6f4" : "#14181d";
    var link = light ? "#0f9a83" : "#2ee6c5";
    var bd = light ? "rgba(18,164,139,.28)" : "rgba(46,230,197,.22)";
    var thBg = light ? "rgba(18,164,139,.10)" : "rgba(46,230,197,.10)";
    var quote = light ? "#5a6a63" : "#9aa6a0";
    return (
      "@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700&family=Manrope:wght@400;600;700&display=swap');" +
      "body{margin:0;background:" + bg + ";color:" + fg + ";font:16px/1.7 'Manrope',system-ui,sans-serif;}" +
      ".md{max-width:780px;margin:0 auto;padding:28px 26px;}" +
      ".md h1,.md h2,.md h3{font-family:'Bricolage Grotesque',system-ui,sans-serif;line-height:1.2;color:" + head + ";}" +
      ".md h1{font-size:1.8rem;border-bottom:1px solid " + bd + ";padding-bottom:.3em;}" +
      ".md h2{font-size:1.4rem;margin-top:1.4em;}.md h3{font-size:1.15rem;}" +
      ".md a{color:" + link + ";}.md code{background:" + codeBg + ";padding:.15em .4em;border-radius:5px;font-family:ui-monospace,monospace;font-size:.9em;}" +
      ".md pre{background:" + preBg + ";border:1px solid " + bd + ";border-radius:10px;padding:14px;overflow:auto;}" +
      ".md pre code{background:none;padding:0;}" +
      ".md img{max-width:100%;border-radius:8px;border:1px solid " + bd + ";}" +
      ".md table{border-collapse:collapse;width:100%;margin:1em 0;font-size:.92rem;}" +
      ".md th,.md td{border:1px solid " + bd + ";padding:7px 10px;text-align:left;}" +
      ".md th{background:" + thBg + ";}" +
      ".md blockquote{border-left:3px solid #b8ff3c;margin:1em 0;padding:.2em 1em;color:" + quote + ";}"
    );
  }

  renderList();
  updateDownloadState();
})();
