/*
 * app.js — Visor cifrado de informes GSOC (Mifos Gazelle).
 * Todo en el navegador: deriva la clave desde usuario:contraseña, descifra el
 * índice y cada informe bajo demanda, y lo renderiza con markdown-it + KaTeX.
 * Sin la contraseña no hay nada legible (los .enc son AES-256-GCM).
 */
(function () {
  "use strict";

  var SS_KEY = "mifos-key"; // clave AES exportada (base64) en sessionStorage

  // Estado
  var state = {
    key: null, // CryptoKey
    index: null, // índice descifrado
    objectUrls: [], // blob URLs a revocar al cambiar de informe
  };

  // Elementos
  var gate = document.getElementById("gate");
  var app = document.getElementById("app");
  var loginForm = document.getElementById("login-form");
  var userEl = document.getElementById("user");
  var passEl = document.getElementById("pass");
  var loginBtn = document.getElementById("login-btn");
  var loginError = document.getElementById("login-error");
  var logoutBtn = document.getElementById("logout-btn");
  var treeEl = document.getElementById("tree");
  var contentEl = document.getElementById("md-content");
  var countLabel = document.getElementById("count-label");
  var searchEl = document.getElementById("search");

  /* ===================== Utilidades binarias ===================== */
  var encUtf8 = new TextEncoder();
  var decUtf8 = new TextDecoder();

  function b64ToBytes(b64) {
    var bin = atob(b64);
    var out = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }
  function bytesToB64(bytes) {
    var bin = "";
    for (var i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    return btoa(bin);
  }

  /* ===================== Cripto ===================== */
  function getManifest() {
    return fetch("manifest.json", { cache: "no-store" }).then(function (r) {
      if (!r.ok) throw new Error("manifest");
      return r.json();
    });
  }

  function deriveKey(passphrase, manifest) {
    var salt = b64ToBytes(manifest.kdf.salt);
    return crypto.subtle
      .importKey("raw", encUtf8.encode(passphrase), "PBKDF2", false, [
        "deriveKey",
      ])
      .then(function (baseKey) {
        return crypto.subtle.deriveKey(
          {
            name: "PBKDF2",
            salt: salt,
            iterations: manifest.kdf.iterations,
            hash: manifest.kdf.hash,
          },
          baseKey,
          { name: "AES-GCM", length: 256 },
          true, // exportable: para guardar en sessionStorage
          ["encrypt", "decrypt"]
        );
      });
  }

  // Descifra base64(iv||ct) -> Uint8Array. Lanza si la clave es incorrecta.
  function decryptBytes(key, b64) {
    var packed = b64ToBytes(b64);
    var iv = packed.slice(0, 12);
    var ct = packed.slice(12);
    return crypto.subtle
      .decrypt({ name: "AES-GCM", iv: iv }, key, ct)
      .then(function (buf) {
        return new Uint8Array(buf);
      });
  }

  function decryptText(key, b64) {
    return decryptBytes(key, b64).then(function (bytes) {
      return decUtf8.decode(bytes);
    });
  }

  function fetchEnc(url) {
    return fetch(url, { cache: "no-store" }).then(function (r) {
      if (!r.ok) throw new Error("HTTP " + r.status + " · " + url);
      return r.text();
    });
  }

  /* ===================== Sesión ===================== */
  function saveKey(key) {
    return crypto.subtle.exportKey("raw", key).then(function (raw) {
      try {
        sessionStorage.setItem(SS_KEY, bytesToB64(new Uint8Array(raw)));
      } catch (e) {}
    });
  }
  function loadKey() {
    var b64;
    try {
      b64 = sessionStorage.getItem(SS_KEY);
    } catch (e) {
      return Promise.resolve(null);
    }
    if (!b64) return Promise.resolve(null);
    return crypto.subtle
      .importKey("raw", b64ToBytes(b64), { name: "AES-GCM" }, true, [
        "encrypt",
        "decrypt",
      ])
      .catch(function () {
        return null;
      });
  }
  function clearKey() {
    try {
      sessionStorage.removeItem(SS_KEY);
    } catch (e) {}
  }

  /* ===================== Login ===================== */
  function showLoginError(msg) {
    loginError.textContent = msg;
    loginError.hidden = false;
  }

  function unlockWithKey(key) {
    // Validar descifrando el índice. Si falla, la clave es incorrecta.
    return fetchEnc("index.enc")
      .then(function (b64) {
        return decryptText(key, b64);
      })
      .then(function (json) {
        state.key = key;
        state.index = JSON.parse(json);
        enterApp();
        return true;
      });
  }

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    loginError.hidden = true;
    loginBtn.disabled = true;
    loginBtn.textContent = "Descifrando…";

    var user = userEl.value.trim();
    var pass = passEl.value;

    getManifest()
      .then(function (manifest) {
        return deriveKey(user + ":" + pass, manifest);
      })
      .then(function (key) {
        return unlockWithKey(key).then(function () {
          return saveKey(key);
        });
      })
      .catch(function (err) {
        if (err && err.message === "manifest") {
          showLoginError("No se pudo cargar la configuración (manifest.json).");
        } else {
          showLoginError("Usuario o contraseña incorrectos.");
        }
      })
      .finally(function () {
        loginBtn.disabled = false;
        loginBtn.textContent = "Entrar";
        passEl.value = "";
      });
  });

  logoutBtn.addEventListener("click", function () {
    clearKey();
    location.reload();
  });

  /* ===================== Entrar en la app ===================== */
  function enterApp() {
    gate.hidden = true;
    app.hidden = false;
    countLabel.textContent = state.index.count + " informes";
    renderTree(state.index.tree, treeEl, 0);
  }

  /* ===================== Árbol / índice ===================== */
  function renderTree(nodes, container, depth) {
    container.innerHTML = "";
    nodes.forEach(function (node) {
      if (node.type === "dir") {
        var det = document.createElement("details");
        det.className = "tree-dir";
        if (depth === 0) det.open = true;
        var sum = document.createElement("summary");
        sum.innerHTML =
          '<span class="dir-icon">▸</span><span class="dir-name"></span>';
        sum.querySelector(".dir-name").textContent = prettyName(node.name);
        det.appendChild(sum);
        var kids = document.createElement("div");
        kids.className = "tree-children";
        renderTree(node.children, kids, depth + 1);
        det.appendChild(kids);
        container.appendChild(det);
      } else {
        var a = document.createElement("a");
        a.className = "tree-file";
        a.href = "#" + node.id;
        a.dataset.id = node.id;
        a.dataset.search = (node.title + " " + node.name).toLowerCase();
        a.textContent = node.title;
        a.title = node.name;
        a.addEventListener("click", function (e) {
          e.preventDefault();
          openReport(node.id);
        });
        container.appendChild(a);
      }
    });
  }

  function prettyName(name) {
    // "04-jira-tickets-provisionales" -> "Jira tickets provisionales"
    var s = name.replace(/^\d+[-_]?/, "").replace(/[-_]+/g, " ").trim();
    if (!s) s = name;
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  function setActive(id) {
    treeEl.querySelectorAll(".tree-file").forEach(function (a) {
      a.classList.toggle("active", a.dataset.id === id);
    });
    var active = treeEl.querySelector('.tree-file[data-id="' + id + '"]');
    if (active) {
      // Abrir los <details> antecesores
      var p = active.parentElement;
      while (p && p !== treeEl) {
        if (p.tagName === "DETAILS") p.open = true;
        p = p.parentElement;
      }
    }
  }

  /* ===================== Búsqueda ===================== */
  if (searchEl) {
    searchEl.addEventListener("input", function () {
      var q = searchEl.value.trim().toLowerCase();
      treeEl.querySelectorAll(".tree-file").forEach(function (a) {
        var hit = !q || a.dataset.search.indexOf(q) !== -1;
        a.style.display = hit ? "" : "none";
      });
      // Mostrar/ocultar carpetas vacías
      treeEl.querySelectorAll(".tree-dir").forEach(function (det) {
        var any = det.querySelector('.tree-file:not([style*="none"])');
        det.style.display = any ? "" : q ? "none" : "";
        if (q && any) det.open = true;
      });
    });
  }

  /* ===================== Render de informe ===================== */
  var md = window.markdownit({
    html: false,
    linkify: true,
    typographer: true,
    highlight: function (str, lang) {
      if (window.hljs && lang && window.hljs.getLanguage(lang)) {
        try {
          return window.hljs.highlight(str, { language: lang }).value;
        } catch (e) {}
      }
      return "";
    },
  });
  if (window.texmath && window.katex) {
    md.use(window.texmath, {
      engine: window.katex,
      delimiters: "dollars",
      katexOptions: { throwOnError: false, errorColor: "#ff6b6b" },
    });
  }

  function revokeObjectUrls() {
    state.objectUrls.forEach(function (u) {
      URL.revokeObjectURL(u);
    });
    state.objectUrls = [];
  }

  function idToRel(id) {
    var map = state.index.pathToId;
    for (var rel in map) if (map[rel] === id) return rel;
    return "";
  }

  function openReport(id) {
    setActive(id);
    location.hash = id;
    contentEl.innerHTML = '<div class="reader-loading">Descifrando…</div>';
    revokeObjectUrls();

    fetchEnc("data/" + id + ".enc")
      .then(function (b64) {
        return decryptText(state.key, b64);
      })
      .then(function (text) {
        var rel = idToRel(id);
        contentEl.innerHTML = md.render(text);
        document.title =
          (contentEl.querySelector("h1, h2") || {}).textContent ||
          "Informe · Mifos Gazelle";
        postProcess(rel);
        contentEl.scrollTop = 0;
        var main = contentEl.closest(".reader");
        if (main) main.scrollTop = 0;
      })
      .catch(function (err) {
        contentEl.innerHTML =
          '<div class="reader-error"><h2>No se pudo abrir el informe</h2><p>' +
          (err && err.message ? err.message : "Error de descifrado") +
          "</p></div>";
      });
  }

  // Imágenes cifradas -> blob URL; enlaces internos .md -> navegación interna.
  function postProcess(currentRel) {
    var assets = state.index.assets || {};
    var pathToId = state.index.pathToId || {};
    var baseDir = currentRel ? dirname(currentRel) : "";

    // Imágenes
    contentEl.querySelectorAll("img[src]").forEach(function (img) {
      var src = img.getAttribute("src");
      if (/^(https?:)?\/\//i.test(src) || src.indexOf("data:") === 0) return;
      var rel = normalizeJoin(baseDir, src);
      var asset = assets[rel];
      if (!asset) {
        img.alt = (img.alt || "") + " (imagen no disponible)";
        return;
      }
      img.removeAttribute("src");
      fetchEnc("data/" + asset.id + ".enc")
        .then(function (b64) {
          return decryptBytes(state.key, b64);
        })
        .then(function (bytes) {
          var blob = new Blob([bytes], { type: asset.mime });
          var url = URL.createObjectURL(blob);
          state.objectUrls.push(url);
          img.src = url;
        })
        .catch(function () {});
    });

    // Enlaces
    contentEl.querySelectorAll("a[href]").forEach(function (a) {
      var href = a.getAttribute("href");
      if (!href) return;
      if (/^https?:\/\//i.test(href)) {
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener");
        return;
      }
      if (href.charAt(0) === "#") return; // ancla interna del documento
      // ¿enlace a otro informe del índice?
      var clean = href.split("#")[0].split("?")[0];
      var rel = normalizeJoin(baseDir, clean);
      var id = pathToId[rel];
      if (id) {
        a.setAttribute("href", "#" + id);
        a.addEventListener("click", function (e) {
          e.preventDefault();
          openReport(id);
        });
      }
    });
  }

  /* ===================== Helpers de ruta ===================== */
  function dirname(p) {
    var i = p.lastIndexOf("/");
    return i === -1 ? "" : p.slice(0, i);
  }
  function normalizeJoin(base, rel) {
    rel = rel.replace(/^\.\//, "");
    var parts = (base ? base.split("/") : []).concat(rel.split("/"));
    var out = [];
    parts.forEach(function (seg) {
      if (seg === "" || seg === ".") return;
      if (seg === "..") out.pop();
      else out.push(seg);
    });
    return out.join("/");
  }

  /* ===================== Arranque ===================== */
  loadKey().then(function (key) {
    if (!key) return; // mostrar login
    unlockWithKey(key)
      .then(function () {
        var id = location.hash.replace(/^#/, "");
        if (id && state.index.pathToId && hasId(id)) openReport(id);
      })
      .catch(function () {
        clearKey(); // clave guardada inválida (rebuild con otra pass)
      });
  });

  function hasId(id) {
    var map = state.index.pathToId;
    for (var rel in map) if (map[rel] === id) return true;
    return false;
  }
})();
