/* ===========================================================
   converters.js — PDF / DOCX / XLSX → Markdown (100% navegador)
   Cada conversor devuelve { markdown, images } donde images es
   [{ path:"images/x.png", base64 } | { path, blob }].
   =========================================================== */
(function () {
  "use strict";

  // ---------- util ----------
  function escapeCell(s) {
    return String(s == null ? "" : s).replace(/\r?\n/g, " ").replace(/\|/g, "\\|").trim();
  }

  function rowsToMdTable(rows) {
    if (!rows || !rows.length) return "";
    var cols = rows.reduce(function (m, r) { return Math.max(m, r.length); }, 0);
    if (cols === 0) return "";
    var pad = function (r) { var c = r.slice(); while (c.length < cols) c.push(""); return c; };
    var header = pad(rows[0]).map(escapeCell);
    var sep = header.map(function () { return "---"; });
    var body = rows.slice(1).map(function (r) { return pad(r).map(escapeCell); });
    var line = function (cells) { return "| " + cells.join(" | ") + " |"; };
    return [line(header), line(sep)].concat(body.map(line)).join("\n");
  }

  // ---------- HTML → Markdown (Turndown + GFM) ----------
  var _td = null;
  function htmlToMd(html) {
    if (!_td) {
      _td = new TurndownService({
        headingStyle: "atx",
        codeBlockStyle: "fenced",
        bulletListMarker: "-",
        emDelimiter: "*",
      });
      if (window.turndownPluginGfm) _td.use(window.turndownPluginGfm.gfm);
    }
    return _td.turndown(html || "").trim();
  }

  // ---------- PDF ----------
  function fontHeight(item) {
    var t = item.transform || [1, 0, 0, 1, 0, 0];
    var h = Math.sqrt(t[2] * t[2] + t[3] * t[3]);
    return Math.round(h * 10) / 10 || item.height || 0;
  }

  function headingLevel(size, bodySize, maxSize) {
    // Solo encabezado si la fuente es claramente mayor que el cuerpo,
    // para no convertir páginas enteras en H1 (ver pdf_to_md.py).
    if (size <= bodySize * 1.12) return 0;
    if (size >= maxSize * 0.95) return 1;
    if (size >= maxSize * 0.8) return 2;
    if (size >= maxSize * 0.68) return 3;
    return 3;
  }

  function buildLines(textContent) {
    // Agrupa items en líneas por coordenada Y (transform[5]).
    var items = textContent.items.filter(function (i) { return i.str != null; });
    var lines = [];
    var cur = null;
    var lastY = null;
    items.forEach(function (it) {
      var y = Math.round(it.transform[5]);
      var size = fontHeight(it);
      if (lastY === null || Math.abs(y - lastY) > Math.max(2, size * 0.5)) {
        if (cur) lines.push(cur);
        cur = { parts: [], size: size, y: y };
        lastY = y;
      }
      cur.parts.push(it.str);
      cur.size = Math.max(cur.size, size);
      if (it.hasEOL) { lines.push(cur); cur = null; lastY = null; }
    });
    if (cur) lines.push(cur);
    return lines
      .map(function (l) { return { text: l.parts.join("").replace(/\s+/g, " ").trim(), size: l.size }; })
      .filter(function (l) { return l.text.length > 0; });
  }

  function frontmatter(meta) {
    var info = (meta && meta.info) || {};
    var fields = [];
    if (info.Title) fields.push("title: " + JSON.stringify(info.Title));
    if (info.Author) fields.push("author: " + JSON.stringify(info.Author));
    if (info.Subject) fields.push("subject: " + JSON.stringify(info.Subject));
    if (!fields.length) return "";
    return "---\n" + fields.join("\n") + "\n---\n\n";
  }

  function bitmapToBlob(img) {
    // img puede traer .bitmap (ImageBitmap) o .data (Uint8 RGBA/RGB).
    var w = img.width, h = img.height;
    if (!w || !h) return null;
    var canvas = document.createElement("canvas");
    canvas.width = w; canvas.height = h;
    var ctx = canvas.getContext("2d");
    if (img.bitmap) {
      ctx.drawImage(img.bitmap, 0, 0);
    } else if (img.data) {
      var src = img.data, channels = src.length / (w * h);
      var out = ctx.createImageData(w, h);
      var d = out.data;
      if (channels === 4) {
        d.set(src);
      } else if (channels === 3) {
        for (var i = 0, j = 0; i < src.length; i += 3, j += 4) {
          d[j] = src[i]; d[j + 1] = src[i + 1]; d[j + 2] = src[i + 2]; d[j + 3] = 255;
        }
      } else if (channels === 1) {
        for (var p = 0, q = 0; p < src.length; p++, q += 4) {
          d[q] = d[q + 1] = d[q + 2] = src[p]; d[q + 3] = 255;
        }
      } else {
        return null;
      }
      ctx.putImageData(out, 0, 0);
    } else {
      return null;
    }
    return new Promise(function (res) { canvas.toBlob(function (b) { res(b); }, "image/png"); });
  }

  function getPageImage(page, name) {
    // page.objs.get(name, cb) resuelve cuando el objeto está listo.
    return new Promise(function (res) {
      var done = false;
      try {
        page.objs.get(name, function (img) { if (!done) { done = true; res(img); } });
      } catch (e) { res(null); }
      setTimeout(function () { if (!done) { done = true; res(null); } }, 4000);
    });
  }

  async function extractPageImages(page, pageNum, images) {
    try {
      var ops = await page.getOperatorList(); // también resuelve los objs de imagen
      var OPS = window.pdfjsLib.OPS;
      var seen = {};
      for (var i = 0; i < ops.fnArray.length; i++) {
        var fn = ops.fnArray[i];
        if (fn === OPS.paintImageXObject || fn === OPS.paintJpegXObject) {
          var nm = ops.argsArray[i][0];
          if (!nm || seen[nm]) continue;
          seen[nm] = true;
          try {
            var img = await getPageImage(page, nm);
            if (!img) continue;
            var blob = await bitmapToBlob(img);
            if (blob && blob.size > 64) {
              var idx = images.length + 1;
              images.push({
                path: "images/page_" + String(pageNum).padStart(2, "0") + "_img_" + String(idx).padStart(3, "0") + ".png",
                blob: blob,
              });
            }
          } catch (e) { /* imagen suelta, ignorar */ }
        }
      }
    } catch (e) { /* página sin operadores legibles */ }
  }

  async function pdfToMarkdown(file, opts) {
    opts = opts || {};
    var pdfjsLib = window.pdfjsLib;
    var data = new Uint8Array(await file.arrayBuffer());
    var pdf = await pdfjsLib.getDocument({ data: data }).promise;
    var meta = await pdf.getMetadata().catch(function () { return null; });

    // Pase 1: recoger todas las líneas de todas las páginas + tamaños de fuente.
    var pages = [];
    var sizeCounts = {};
    var maxSize = 0;
    for (var p = 1; p <= pdf.numPages; p++) {
      var page = await pdf.getPage(p);
      var tc = await page.getTextContent();
      var lines = buildLines(tc);
      lines.forEach(function (l) {
        var s = Math.round(l.size);
        sizeCounts[s] = (sizeCounts[s] || 0) + l.text.length;
        if (l.size > maxSize) maxSize = l.size;
      });
      pages.push({ num: p, page: page, lines: lines, hasText: lines.length > 0 });
    }

    // Tamaño de cuerpo = el más frecuente (ponderado por caracteres).
    var bodySize = 12, best = -1;
    Object.keys(sizeCounts).forEach(function (s) {
      if (sizeCounts[s] > best) { best = sizeCounts[s]; bodySize = parseFloat(s); }
    });
    if (!maxSize) maxSize = bodySize;

    // Pase 2: construir markdown + extraer imágenes.
    var images = [];
    var out = [];
    for (var k = 0; k < pages.length; k++) {
      var pg = pages[k];
      var para = [];
      var flush = function () { if (para.length) { out.push(para.join(" ")); para = []; } };
      pg.lines.forEach(function (l) {
        var lvl = headingLevel(l.size, bodySize, maxSize);
        if (lvl) { flush(); out.push("\n" + "#".repeat(lvl) + " " + l.text + "\n"); }
        else para.push(l.text);
      });
      flush();

      if (opts.images !== false) {
        await extractPageImages(pg.page, pg.num, images);
      }

      // Página escaneada (sin texto): render completo como fallback de imagen.
      if (!pg.hasText && opts.renderScanned !== false) {
        try {
          var viewport = pg.page.getViewport({ scale: 2 });
          var canvas = document.createElement("canvas");
          canvas.width = viewport.width; canvas.height = viewport.height;
          await pg.page.render({ canvasContext: canvas.getContext("2d"), viewport: viewport }).promise;
          var rblob = await new Promise(function (res) { canvas.toBlob(res, "image/png"); });
          if (rblob) {
            var rp = "images/page_" + String(pg.num).padStart(2, "0") + "_render.png";
            images.push({ path: rp, blob: rblob });
            out.push("\n![Página " + pg.num + " (escaneada)](" + rp + ")\n");
          }
        } catch (e) { /* ignorar */ }
      }
    }

    var body = out.join("\n\n").replace(/\n{3,}/g, "\n\n").trim();
    var md = frontmatter(meta) + body;
    if (!body) {
      md += "\n> _No se extrajo texto. Puede ser un PDF escaneado sin OCR._";
    }
    return { markdown: md, images: images };
  }

  // ---------- DOCX ----------
  async function docxToMarkdown(file) {
    var arrayBuffer = await file.arrayBuffer();
    var images = [];
    var idx = 0;
    var result = await window.mammoth.convertToHtml(
      { arrayBuffer: arrayBuffer },
      {
        convertImage: window.mammoth.images.imgElement(function (image) {
          return image.read("base64").then(function (b64) {
            var ext = ((image.contentType || "image/png").split("/")[1] || "png").replace("jpeg", "jpg").replace("x-emf", "png");
            var path = "images/img_" + String(++idx).padStart(3, "0") + "." + ext;
            images.push({ path: path, base64: b64 });
            return { src: path };
          });
        }),
      }
    );
    return { markdown: htmlToMd(result.value), images: images };
  }

  // ---------- XLSX / XLS ----------
  async function xlsxToMarkdown(file) {
    var data = new Uint8Array(await file.arrayBuffer());
    var wb = window.XLSX.read(data, { type: "array" });
    var parts = [];
    wb.SheetNames.forEach(function (name) {
      var ws = wb.Sheets[name];
      var rows = window.XLSX.utils.sheet_to_json(ws, { header: 1, blankrows: false, defval: "" });
      parts.push("# " + name + "\n\n" + (rowsToMdTable(rows) || "_(hoja vacía)_"));
    });
    return { markdown: parts.join("\n\n").trim(), images: [] };
  }

  // ---------- dispatch ----------
  function extOf(name) {
    var m = /\.([a-z0-9]+)$/i.exec(name || "");
    return m ? m[1].toLowerCase() : "";
  }

  async function convert(file, opts) {
    var ext = extOf(file.name);
    if (ext === "pdf") return pdfToMarkdown(file, opts);
    if (ext === "docx") return docxToMarkdown(file);
    if (ext === "xlsx" || ext === "xls") return xlsxToMarkdown(file);
    throw new Error("Formato no soportado: ." + ext);
  }

  window.PDF2MD = {
    convert: convert,
    extOf: extOf,
    supported: ["pdf", "docx", "xlsx", "xls"],
  };
})();
