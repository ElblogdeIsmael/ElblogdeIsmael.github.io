/*
 * converter.js — Port fiel a JavaScript del backend de md2html.py
 * (repo Ismael-Sallami/md2html). Corre 100% en el navegador.
 *
 * Mantiene las MISMAS regex y la MISMA estructura de salida que el Python,
 * para que el HTML generado en la web sea idéntico al de la app de escritorio.
 *
 * Markdown: usa markdown-it (cargado por CDN en index.html como window.markdownit),
 * equivalente práctico a markdown.markdown(..., extensions=['extra']).
 */
(function (global) {
  "use strict";

  // markdown-it con HTML en línea permitido (como el 'extra' de python-markdown).
  function nuevoMd() {
    if (typeof global.markdownit !== "function") {
      throw new Error("markdown-it no está cargado");
    }
    return global.markdownit({ html: true, linkify: false, typographer: false });
  }

  let _md = null;
  function md() {
    if (!_md) _md = nuevoMd();
    return _md;
  }

  // --- procesar_texto_md (md2html.py:469-479) ---
  function procesarTextoMd(textoMd) {
    let out;
    try {
      out = md().render(textoMd);
    } catch (e) {
      out = textoMd;
    }
    out = out.trim();
    // Quitar el <p>...</p> único envolvente, igual que el Python.
    if (
      out.startsWith("<p>") &&
      out.endsWith("</p>") &&
      (out.match(/<p>/g) || []).length === 1
    ) {
      out = out.slice(3, -4);
    }
    return out;
  }

  // --- parsear_preguntas (md2html.py:481-530) ---
  const RE_INICIO = /^(\d+)\.\s+(.*)$/;
  const RE_OPCION = /^\s*-\s*\((x|X|\s|)\)\s*(.*)$/;
  const RE_EXPLIC = /^\s*>\s?(.*)$/;

  function parsearPreguntas(bloqueTexto) {
    const lines = bloqueTexto.split("\n");

    // Agrupar en bloques que empiezan en "N. ..." (lo que captura la regex de pregunta).
    const bloques = [];
    let actual = null;
    for (const line of lines) {
      const mi = line.match(RE_INICIO);
      if (mi) {
        if (actual) bloques.push(actual);
        actual = [mi[2]]; // resto de la primera línea (tras "N. ")
      } else if (actual) {
        actual.push(line);
      }
      // Las líneas anteriores a la primera pregunta se ignoran (igual que el Python).
    }
    if (actual) bloques.push(actual);

    const preguntas = [];
    for (const contenidoLines of bloques) {
      const enunciadoLines = [];
      const opcionesRaw = [];
      const explicacionLines = [];
      let buscandoOpciones = false;

      for (const line of contenidoLines) {
        const mExp = line.match(RE_EXPLIC);
        const mOpt = line.match(RE_OPCION);
        if (mExp) {
          explicacionLines.push(mExp[1].trim());
        } else if (mOpt) {
          buscandoOpciones = true;
          const marca = (mOpt[1] || "").trim().toLowerCase();
          const texto = mOpt[2].trim();
          opcionesRaw.push({ marca: marca, texto: texto });
        } else {
          if (!buscandoOpciones) {
            if (line.trim()) enunciadoLines.push(line);
          } else {
            if (opcionesRaw.length && line.trim()) {
              opcionesRaw[opcionesRaw.length - 1].texto += " " + line.trim();
            }
          }
        }
      }

      const enunciadoFinal = enunciadoLines.join("\n").trim();
      const explicacionFinal = explicacionLines.join(" ").trim();
      const correctas = [];
      opcionesRaw.forEach((opt, i) => {
        if (opt.marca === "x") correctas.push(i);
      });

      if (enunciadoFinal && opcionesRaw.length) {
        preguntas.push({
          enunciado: enunciadoFinal,
          opciones: opcionesRaw,
          correctas: correctas,
          explicacion: explicacionFinal,
        });
      }
    }
    return preguntas;
  }

  // --- renderizar_bloque_preguntas (md2html.py:532-559) ---
  function renderizarBloque(listaPreguntas, contadorInicial) {
    let html = "";
    let idx = contadorInicial || 1;

    for (const p of listaPreguntas) {
      const enunciadoHtml = procesarTextoMd(p.enunciado);
      const strCorrectas = p.correctas.join(",");

      html += '<div class="question" id="q' + idx + '" data-correct="' + strCorrectas + '">\n';
      html += '  <div class="enunciado"><strong>' + idx + ".</strong> " + enunciadoHtml + "</div>\n";
      html += '  <ol type="a">\n';

      p.opciones.forEach((opt, i) => {
        const textoOptHtml = procesarTextoMd(opt.texto);
        html +=
          '    <li><label class="opcion-linea"><input type="checkbox" name="q' +
          idx +
          '" value="' + i + '"> ' + textoOptHtml + "</label></li>\n";
      });

      html += "  </ol>\n";

      const explicacion = p.explicacion || "";
      if (explicacion) {
        const explicacionHtml = procesarTextoMd(explicacion);
        html +=
          "  <button class=\"btn-explicacion\" onclick=\"toggleExplicacion('q" +
          idx + "')\">Ver explicación</button>\n";
        html += '  <div class="explicacion" id="exp-q' + idx + '" style="display:none">' + explicacionHtml + "</div>\n";
      }

      html += "</div>\n";
      idx += 1;
    }
    return { html: html, idx: idx };
  }

  function shuffleInPlace(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
    }
  }

  // get_meta (md2html.py:571-575)
  function getMeta(contenido, key, def) {
    const esc = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    let m = contenido.match(new RegExp("-\\s*\\*\\*" + esc + ":\\*\\*\\s*(.+)"));
    if (!m) m = contenido.match(new RegExp("\\*\\s*\\*\\*" + esc + ":\\*\\*\\s*(.+)"));
    return m ? m[1].trim() : def;
  }

  // Reemplazo seguro (no interpreta $ del replacement).
  function reemplazar(plantilla, token, valor) {
    return plantilla.split(token).join(valor == null ? "" : valor);
  }

  /*
   * generarHtmlFinal — equivalente a md2html.py:561-656
   * @param {string} contenido      Markdown del test.
   * @param {object} opts
   *    plantilla     {string} HTML de la plantilla con placeholders {{...}}.
   *    extraInfoHtml {string} HTML ya renderizado para {{LISTA_INFO}} (opcional).
   *    usarSecciones {boolean}
   *    shuffle       {boolean}
   *    titulo/autor/descripcion/titulacion {string} overrides opcionales.
   * @returns {{html:string, numPreguntas:number}}
   */
  function generarHtmlFinal(contenido, opts) {
    opts = opts || {};
    const plantilla = opts.plantilla;
    const htmlInstrucciones = opts.extraInfoHtml || "";
    const usarSecciones = opts.usarSecciones !== false;
    const shuffle = !!opts.shuffle;

    // Metadatos: override del formulario > extraído del MD > por defecto.
    let titulo = (opts.titulo || "").trim();
    if (!titulo) {
      const mTit = contenido.match(/^#\s*(.+)/m);
      titulo = mTit ? mTit[1].trim() : "Test Generado";
    }
    const autor = (opts.autor || "").trim() || getMeta(contenido, "Autor", "Desconocido");
    const desc = (opts.descripcion || "").trim() || getMeta(contenido, "Descripción", "");
    const titulacion = (opts.titulacion || "").trim() || getMeta(contenido, "Titulación", "");

    let htmlCuerpo = "";
    let contador = 1;
    let numPreguntas = 0;

    if (usarSecciones) {
      // re.split con grupo capturado -> [antes, titulo1, cont1, titulo2, cont2, ...]
      const partes = contenido.split(/<!--\s*([\s\S]+?)\s*-->/);

      if (partes.length > 0 && partes[0].trim()) {
        let preguntas = parsearPreguntas(partes[0]);
        if (preguntas.length) {
          if (shuffle) shuffleInPlace(preguntas);
          const r = renderizarBloque(preguntas, contador);
          htmlCuerpo += r.html;
          contador = r.idx;
          numPreguntas += preguntas.length;
        }
      }

      let i = 1;
      while (i < partes.length) {
        const tituloSecc = (partes[i] || "").trim();
        const contenidoSecc = i + 1 < partes.length ? partes[i + 1] : "";
        if (tituloSecc) htmlCuerpo += "<h2>" + tituloSecc + "</h2>\n";
        if (contenidoSecc.trim()) {
          let preguntas = parsearPreguntas(contenidoSecc);
          if (preguntas.length) {
            if (shuffle) shuffleInPlace(preguntas);
            const r = renderizarBloque(preguntas, contador);
            htmlCuerpo += r.html;
            contador = r.idx;
            numPreguntas += preguntas.length;
          }
        }
        i += 2;
      }
    } else {
      const contenidoLimpio = contenido.replace(/<!--[\s\S]*?-->/g, "");
      let preguntas = parsearPreguntas(contenidoLimpio);
      if (shuffle) shuffleInPlace(preguntas);
      const r = renderizarBloque(preguntas, contador);
      htmlCuerpo += r.html;
      numPreguntas += preguntas.length;
    }

    let finalHtml = plantilla;
    finalHtml = reemplazar(finalHtml, "{{TITULO}}", titulo);
    finalHtml = reemplazar(finalHtml, "{{AUTOR}}", autor);
    finalHtml = reemplazar(finalHtml, "{{TITULACION}}", titulacion);
    finalHtml = reemplazar(finalHtml, "{{DESCRIPCION}}", desc);
    finalHtml = reemplazar(finalHtml, "{{LISTA_INFO}}", htmlInstrucciones);
    finalHtml = reemplazar(finalHtml, "{{PREGUNTAS_HTML}}", htmlCuerpo);

    return { html: finalHtml, numPreguntas: numPreguntas };
  }

  // Renderiza un .md suelto (instrucciones extra) a HTML, como en md2html.py:569.
  function markdownExtra(texto) {
    try {
      return md().render(texto || "");
    } catch (e) {
      return texto || "";
    }
  }

  global.MD2HTML = {
    procesarTextoMd: procesarTextoMd,
    parsearPreguntas: parsearPreguntas,
    renderizarBloque: renderizarBloque,
    generarHtmlFinal: generarHtmlFinal,
    markdownExtra: markdownExtra,
  };
})(window);
