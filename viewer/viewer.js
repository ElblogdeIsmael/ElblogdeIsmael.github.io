/*
 * viewer.js — Visor de apuntes Markdown in-site.
 * Lee ?file=Subjects/.../x.md, lo descarga (mismo origen) y lo renderiza con
 * markdown-it al estilo Obsidian. 100% en el navegador (GitHub Pages estático).
 */
(function () {
  "use strict";

  var GH_BLOB = "https://github.com/ElblogdeIsmael/ElblogdeIsmael.github.io/blob/main/";

  var contentEl = document.getElementById("md-content");
  var ghLinkEl = document.getElementById("gh-link");
  var themeSelect = document.getElementById("theme-select");

  /* ---------- Tema ---------- */
  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") || "brand";
  }
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("viewer-theme", theme); } catch (e) {}
  }
  if (themeSelect) {
    themeSelect.value = currentTheme();
    themeSelect.addEventListener("change", function () {
      applyTheme(themeSelect.value);
    });
  }

  /* ---------- Validación de ruta ---------- */
  // Solo apuntes propios: empieza por Subjects/ y acaba en .md, sin tretas.
  function isSafePath(file) {
    if (!file) return false;
    if (file.indexOf("..") !== -1) return false;
    if (file.indexOf("\\") !== -1) return false;
    if (file.indexOf("://") !== -1) return false;
    if (file.charAt(0) === "/") return false;
    if (!/^Subjects\//.test(file)) return false;
    if (!/\.md$/i.test(file)) return false;
    return true;
  }

  /* ---------- Estados ---------- */
  function showError(titulo, detalle, file) {
    var ghHtml = "";
    if (file && isSafePath(file)) {
      ghHtml =
        '<p><a class="md-gh-fallback" href="' + GH_BLOB + encodeURI(file) +
        '" target="_blank" rel="noopener">Abrir en GitHub ↗</a></p>';
    }
    contentEl.innerHTML =
      '<div class="md-error">' +
      '<h1>' + titulo + "</h1>" +
      "<p>" + detalle + "</p>" +
      ghHtml +
      '<p><a href="/">← Volver al inicio</a></p>' +
      "</div>";
  }

  /* ---------- Render ---------- */
  function render(file, texto) {
    var md = window.markdownit({ html: false, linkify: true, typographer: true });
    var html = md.render(texto);
    contentEl.innerHTML = html;

    // Título de la pestaña: primer H1 del documento o nombre de archivo.
    var h1 = contentEl.querySelector("h1");
    var nombre = file.split("/").pop();
    document.title = (h1 ? h1.textContent.trim() : nombre) + " · El Blog de Ismael";

    // Imágenes responsive y enlaces externos en pestaña nueva.
    contentEl.querySelectorAll("a[href]").forEach(function (a) {
      var href = a.getAttribute("href");
      if (/^https?:\/\//i.test(href)) {
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener");
      }
    });
  }

  /* ---------- Arranque ---------- */
  function init() {
    var params = new URLSearchParams(location.search);
    var file = params.get("file");

    if (!file) {
      showError(
        "Sin apunte que mostrar",
        "Falta el parámetro <code>?file=</code>. Llega aquí desde la página de tu curso."
      );
      return;
    }

    if (!isSafePath(file)) {
      showError(
        "Ruta no permitida",
        "El visor solo abre apuntes <code>.md</code> dentro de <code>Subjects/</code>."
      );
      return;
    }

    // Botón "ver en GitHub" del original.
    if (ghLinkEl) {
      ghLinkEl.href = GH_BLOB + encodeURI(file);
      ghLinkEl.hidden = false;
    }

    fetch("/" + encodeURI(file))
      .then(function (resp) {
        if (!resp.ok) throw new Error("HTTP " + resp.status);
        return resp.text();
      })
      .then(function (texto) {
        render(file, texto);
      })
      .catch(function (err) {
        showError(
          "No se encontró el apunte",
          "No se pudo cargar <code>" + file + "</code> (" + err.message + ").",
          file
        );
      });
  }

  init();
})();
