/*
 * viewer.js — Visor de apuntes Markdown in-site.
 * Lee ?file=Subjects/.../x.md, lo descarga (mismo origen) y lo renderiza con
 * markdown-it al estilo Obsidian. 100% en el navegador (GitHub Pages estático).
 *
 * Los apuntes llevan LaTeX crudo, que es lo que la D-12 decide: markdown por
 * defecto y LaTeX dentro del propio .md para lo que markdown no cubre. Pandoc
 * lo pasa intacto al PDF, y markdown-it no sabe nada de él, así que sin las
 * reglas de abajo el lector veía `\begin{definicion}` en un bloque de código.
 */
(function () {
  "use strict";

  var GH_BLOB = "https://github.com/ElblogdeIsmael/ElblogdeIsmael.github.io/blob/main/";

  // El motor de TikZ es un TeX en WebAssembly: pesa unos 3,5 MB, así que solo
  // se carga en los documentos que traen alguna figura.
  var TIKZ_CDN = "https://cdn.jsdelivr.net/npm/@rod2ik/tikzjax@1.5.0/dist/";

  var contentEl = document.getElementById("md-content");
  var ghLinkEl = document.getElementById("gh-link");
  var themeSelect = document.getElementById("theme-select");

  /* ---------- Tema ---------- */
  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") || "brand";
  }
  // Los tres temas del visor son dos claridades: `paper` es claro y los otros
  // dos oscuros. El motor de TikZ lee `data-color-scheme` para saber si tiene
  // que aclarar los colores de las figuras, y solo entiende claro u oscuro, no
  // los nombres de aqui. Se fija aparte para no tocar `data-theme`, del que
  // cuelga todo el CSS.
  var CLARIDAD = { brand: "dark", obsidian: "dark", paper: "light" };

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute(
      "data-color-scheme", CLARIDAD[theme] || "dark");
    try { localStorage.setItem("viewer-theme", theme); } catch (e) {}
  }
  // Se aplica al arrancar y no solo al cambiar de tema: `data-theme` ya lo deja
  // puesto el script en linea de index.html, pero `data-color-scheme` no, y sin
  // el las figuras de la primera visita saldrian con los colores del tema
  // contrario.
  applyTheme(currentTheme());

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

  /* ================================================================
     LaTeX crudo
     ================================================================ */

  // Los rotulos no son el nombre del entorno: `anotacion` imprime «Nota».
  // Salen de extraFiles/preambulos_oficiales/estilos.tex y comandos.tex, que
  // es lo que compone el PDF, para que el visor y el PDF digan lo mismo.
  var ROTULOS = {
    teorema: "Teorema",
    definicion: "Definición",
    ejemplo: "Ejemplo",
    proposicion: "Proposición",
    demostracion: "Demostración",
    corolario: "Corolario",
    propuesta: "Propuesta",
    anotacion: "Nota",
    ejercicio: "Ejercicio",
    solucion: "Solución",
    ejercicioresuelto: "Ejercicio resuelto"
  };

  // Entornos que KaTeX sabe componer tal cual, sin traducir nada.
  var ENTORNOS_MATE = {
    "align": 1, "align*": 1, "aligned": 1, "alignat": 1, "alignat*": 1,
    "gather": 1, "gather*": 1, "cases": 1, "array": 1, "matrix": 1,
    "pmatrix": 1, "bmatrix": 1, "vmatrix": 1, "split": 1, "equation": 1,
    "equation*": 1
  };

  var ENTORNOS_LISTA = { itemize: "ul", enumerate: "ol", description: "ul" };
  var ENTORNOS_DIBUJO = { tikzpicture: 1, circuitikz: 1 };

  // Entornos que solo envuelven: se entra dentro y se sigue.
  var ENVOLTORIOS = {
    center: 1, figure: 1, "figure*": 1, table: 1, "table*": 1,
    flushleft: 1, flushright: 1, minipage: 1
  };

  function escaparHtml(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  /*
   * Sustituye \cmd{...} respetando las llaves anidadas. Un `replace` con
   * expresion regular corta en la primera `}`, y `\textbf{f(x) = \{1,2\}}`
   * saldria partido por la mitad.
   */
  function sustituirComando(texto, cmd, antes, despues) {
    var marca = "\\" + cmd + "{";
    var salida = "";
    var i = 0;
    while (i < texto.length) {
      var j = texto.indexOf(marca, i);
      if (j === -1) { salida += texto.slice(i); break; }
      salida += texto.slice(i, j);
      var k = j + marca.length;
      var nivel = 1;
      while (k < texto.length && nivel > 0) {
        if (texto[k] === "\\") { k += 2; continue; }
        if (texto[k] === "{") nivel++;
        else if (texto[k] === "}") nivel--;
        if (nivel > 0) k++;
      }
      salida += antes + texto.slice(j + marca.length, k) + despues;
      i = k + 1;
    }
    return salida;
  }

  /*
   * Traduce el cuerpo de un entorno a Markdown y lo devuelve para que lo
   * renderice markdown-it. Se traduce a Markdown y no a HTML a proposito: asi
   * texmath y KaTeX resuelven la matematica del cuerpo —la lleva casi la mitad
   * de los entornos— sin llamarlos a mano, y sin chocar con `html: false`.
   *
   * La lista de comandos es cerrada porque los cuerpos no traen nada mas:
   * medido sobre los 882 entornos del arbol, son \textbf, \emph, \texttt,
   * \medskip, \item, \, y los escapes. No hay markdown dentro, asi que no hay
   * riesgo de que el texto se reinterprete.
   */
  function latexAMarkdown(tex, citas) {
    // La matematica se aparta antes de tocar nada y se devuelve al final.
    // Dentro de $…$ el LaTeX es legitimo y lo resuelve KaTeX: traducir ahi
    // \, o \% rompe la formula, y el aviso que da KaTeX señala otra cosa.
    var mates = [];
    var t = tex.replace(/\$\$[\s\S]*?\$\$|\$[^$\n]*\$/g, function (m) {
      mates.push(m);
      return "%%MATE" + (mates.length - 1) + "%%";
    });

    // Primero los comandos con argumento, de dentro afuera.
    t = sustituirComando(t, "textbf", "**", "**");
    t = sustituirComando(t, "textit", "*", "*");
    t = sustituirComando(t, "emph", "*", "*");
    t = sustituirComando(t, "texttt", "`", "`");
    t = sustituirComando(t, "underline", "", "");
    t = sustituirComando(t, "textsc", "", "");

    // Citas: se resuelven contra el .bib del documento.
    t = t.replace(/\\cite\{([^}]*)\}/g, function (_, claves) {
      return renderCitas(claves, citas);
    });

    // Listas. `description` lleva \item[titulo], que pasa a negrita.
    t = t.replace(/\\begin\{(itemize|enumerate|description)\}/g, "\n");
    t = t.replace(/\\end\{(itemize|enumerate|description)\}/g, "\n");
    t = t.replace(/\\item\s*\[([^\]]*)\]\s*/g, "\n- **$1** ");
    t = t.replace(/\\item\s+/g, "\n- ");

    // Espaciado.
    t = t.replace(/\\(medskip|bigskip|smallskip|par)\b\s*/g, "\n\n");
    t = t.replace(/\\(vspace|hspace)\*?\{[^}]*\}/g, "");
    t = t.replace(/\\,/g, " ");     // espacio fino: 15\,000 -> 15 000
    t = t.replace(/\\(quad|qquad|;|:|!)\b/g, " ");
    t = t.replace(/\\phantom\{[^}]*\}/g, " ");
    t = t.replace(/\\noindent\b\s*/g, "");
    t = t.replace(/\\centering\b\s*/g, "");

    // Escapes de caracteres.
    t = t.replace(/\\textbackslash\b/g, "\\");
    t = t.replace(/\\([%&#_${}])/g, "$1");
    t = t.replace(/\\'([aeiouAEIOU])/g, function (_, v) {
      return { a: "á", e: "é", i: "í", o: "ó", u: "ú",
               A: "Á", E: "É", I: "Í", O: "Ó", U: "Ú" }[v];
    });

    // Y se devuelve la matematica a su sitio, intacta.
    t = t.replace(/%%MATE(\d+)%%/g, function (_, i) {
      return mates[Number(i)];
    });

    return t.trim();
  }

  /*
   * Un tabular de booktabs a tabla de Markdown. La primera fila es la
   * cabecera cuando hay un \midrule detras, que es como estan escritos los
   * veintiun tabular del arbol.
   */
  function tabularAMarkdown(cuerpo, citas) {
    // La especificacion de columnas del \\begin{tabular}{lcr} no aporta nada
    // aqui: markdown no la necesita.
    var filas = cuerpo
      .replace(/^\s*(\[[^\]]*\])?\s*\{[^{}]*\}/, "")
      .replace(/\\(top|mid|bottom)rule\b/g, "")
      .replace(/\\cmidrule\b(\([^)]*\))?(\{[^}]*\})?/g, "")
      .replace(/\\hline\b/g, "")
      .split("\\\\");
    var salida = [];
    var cabeceraPuesta = false;
    for (var i = 0; i < filas.length; i++) {
      var fila = filas[i].trim();
      if (!fila) continue;
      var celdas = fila.split("&").map(function (c) {
        // Las celdas llevan sus propios \textbf y \quad, asi que pasan por la
        // misma traduccion que el resto. Sin esto salian con el comando a la
        // vista, que es lo que hacia la fila de totales de CGRAL.
        var t = c.replace(/\\multicolumn\{\d+\}\{[^}]*\}\{([^}]*)\}/g, "$1");
        // El \quad sangra las subpartidas de un balance. Markdown se come los
        // espacios de una celda, asi que se usa un espacio duro.
        t = t.replace(/\\quad\s*/g, "  ");
        return latexAMarkdown(t, citas).replace(/\n+/g, " ").trim();
      });
      salida.push("| " + celdas.join(" | ") + " |");
      if (!cabeceraPuesta) {
        // markdown exige la separacion tras la primera fila, que es la que el
        // \\midrule delimita en los tabular de booktabs del arbol.
        salida.push("|" + celdas.map(function () { return " --- "; }).join("|") + "|");
        cabeceraPuesta = true;
      }
    }
    return "\n" + salida.join("\n") + "\n";
  }

  /* ---------- Citas ---------- */

  /*
   * Parser de BibTeX minimo: solo author, title y year, que es lo que la cita
   * necesita. No intenta cubrir el formato entero.
   */
  function parsearBib(texto) {
    var entradas = {};
    var re = /@\w+\s*\{\s*([^,\s]+)\s*,/g;
    var m;
    while ((m = re.exec(texto)) !== null) {
      var clave = m[1];
      // Recorta hasta la entrada siguiente para leer sus campos.
      var resto = texto.slice(m.index);
      var sig = resto.slice(1).search(/@\w+\s*\{/);
      var bloque = sig === -1 ? resto : resto.slice(0, sig + 1);
      entradas[clave] = {
        autor: campoBib(bloque, "author") || campoBib(bloque, "editor"),
        anio: campoBib(bloque, "year")
      };
    }
    return entradas;
  }

  function campoBib(bloque, nombre) {
    var re = new RegExp("\\b" + nombre + "\\s*=\\s*", "i");
    var m = re.exec(bloque);
    if (!m) return "";
    var i = m.index + m[0].length;
    var abre = bloque[i];
    if (abre !== "{" && abre !== '"') return "";
    var cierra = abre === "{" ? "}" : '"';
    var nivel = 1;
    var j = i + 1;
    while (j < bloque.length && nivel > 0) {
      if (bloque[j] === "\\") { j += 2; continue; }
      if (abre === "{" && bloque[j] === "{") nivel++;
      else if (bloque[j] === cierra) nivel--;
      if (nivel > 0) j++;
    }
    return limpiarAcentosTex(bloque.slice(i + 1, j).replace(/\s+/g, " ").trim());
  }

  // Los .bib escriben los acentos a la manera de LaTeX: {\'a}, \~n, \"u.
  function limpiarAcentosTex(s) {
    var mapa = {
      "'a": "á", "'e": "é", "'i": "í", "'o": "ó", "'u": "ú",
      "'A": "Á", "'E": "É", "'I": "Í", "'O": "Ó", "'U": "Ú",
      "~n": "ñ", "~N": "Ñ", '"u': "ü", '"U': "Ü", '"o': "ö", "`a": "à",
      "^o": "ô", "^e": "ê"
    };
    return s
      .replace(/\{?\\(['"~`^])\{?([a-zA-Z])\}?\}?/g, function (todo, ac, letra) {
        return mapa[ac + letra] || todo;
      })
      .replace(/\\ldots/g, "…")
      .replace(/[{}]/g, "");
  }

  // «García Teodoro, Pedro and Díaz Verdejo, Jesús» -> «García Teodoro y otros»
  function apellidos(autor) {
    if (!autor) return "";
    var partes = autor.split(/\s+and\s+/i);
    function apellido(nombre) {
      if (nombre.indexOf(",") !== -1) return nombre.split(",")[0].trim();
      var trozos = nombre.trim().split(/\s+/);
      return trozos.length > 1 ? trozos.slice(1).join(" ") : trozos[0];
    }
    if (partes.length === 1) return apellido(partes[0]);
    if (partes.length === 2) return apellido(partes[0]) + " y " + apellido(partes[1]);
    return apellido(partes[0]) + " y otros";
  }

  function renderCitas(claves, citas) {
    var alguna = false;
    var salida = claves.split(",").map(function (c) {
      var clave = c.trim();
      var e = citas && citas[clave];
      if (!e || !e.autor) return "[" + clave + "]";
      alguna = true;
      return apellidos(e.autor) + (e.anio ? ", " + e.anio : "");
    });
    // Sin bibliografia que resolver se deja la clave a secas: unos parentesis
    // alrededor de «[clave]» no informan de nada.
    return alguna ? "(" + salida.join("; ") + ")" : salida.join(", ");
  }

  /* ---------- Despacho de entornos ---------- */

  /*
   * Parte un bloque en sus entornos de primer nivel. Hace falta porque 205 de
   * los 882 bloques llevan mas de uno dentro —un ejercicio con su solucion, y
   * hasta diez seguidos—, asi que quedarse con el primero perderia el resto.
   */
  function partirEntornos(bloque) {
    var trozos = [];
    var re = /\\begin\{([a-zA-Z*]+)\}/g;
    var m;
    var i = 0;
    while ((m = re.exec(bloque)) !== null) {
      if (m.index < i) continue;
      var env = m[1];
      var fin = buscarFin(bloque, env, re.lastIndex);
      if (fin === -1) continue;
      var suelto = bloque.slice(i, m.index).trim();
      if (suelto) trozos.push({ env: null, cuerpo: suelto });
      var trasBegin = bloque.slice(re.lastIndex);
      var opt = /^\s*\[([^\]]*)\]/.exec(trasBegin);
      var desde = re.lastIndex + (opt ? opt[0].length : 0);
      trozos.push({
        env: env,
        opt: opt ? opt[1] : "",
        cuerpo: bloque.slice(desde, fin)
      });
      i = fin + ("\\end{" + env + "}").length;
      re.lastIndex = i;
    }
    var cola = bloque.slice(i).trim();
    if (cola) trozos.push({ env: null, cuerpo: cola });
    return trozos;
  }

  // Busca el \end{env} que cierra, contando los anidados del mismo nombre.
  function buscarFin(texto, env, desde) {
    var abre = "\\begin{" + env + "}";
    var cierra = "\\end{" + env + "}";
    var nivel = 1;
    var i = desde;
    while (i < texto.length) {
      var a = texto.indexOf(abre, i);
      var c = texto.indexOf(cierra, i);
      if (c === -1) return -1;
      if (a !== -1 && a < c) { nivel++; i = a + abre.length; continue; }
      nivel--;
      if (nivel === 0) return c;
      i = c + cierra.length;
    }
    return -1;
  }

  function renderBloqueLatex(contenido, ctx) {
    var trozos = partirEntornos(contenido);
    var html = "";
    for (var i = 0; i < trozos.length; i++) {
      html += renderTrozo(trozos[i], ctx);
    }
    return html;
  }

  function renderTrozo(trozo, ctx) {
    var env = trozo.env;

    // Los envoltorios no pintan nada: se entra dentro y se sigue.
    if (env && ENVOLTORIOS[env]) {
      return renderBloqueLatex(trozo.cuerpo, ctx);
    }

    if (env && ENTORNOS_DIBUJO[env]) return renderFigura(trozo, ctx);
    if (env && ENTORNOS_MATE[env]) return renderMate(trozo, ctx);
    if (env && ROTULOS[env]) return renderSemantico(trozo, ctx);

    if (env === "tabular") {
      return ctx.md.render(tabularAMarkdown(trozo.cuerpo, ctx.citas));
    }

    if (env && ENTORNOS_LISTA[env]) {
      return ctx.md.render(latexAMarkdown("\\begin{" + env + "}" +
        trozo.cuerpo + "\\end{" + env + "}", ctx.citas));
    }

    // Texto suelto, o un entorno que no conocemos: se traduce lo que se pueda.
    var cuerpo = trozo.cuerpo.trim();
    if (!cuerpo) return "";
    if (env) return avisoPdf("Este bloque se compone en LaTeX", ctx);
    return ctx.md.render(latexAMarkdown(cuerpo, ctx.citas));
  }

  function renderSemantico(trozo, ctx) {
    var rotulo = ROTULOS[trozo.env];
    var nota = trozo.opt ? ' <span class="md-thm-nota">(' +
      escaparHtml(trozo.opt) + ")</span>" : "";
    var cuerpo = ctx.md.render(latexAMarkdown(trozo.cuerpo, ctx.citas));
    return '<div class="md-thm md-thm-' + trozo.env + '">' +
      '<p class="md-thm-cab"><span class="md-thm-nombre">' + rotulo +
      "</span>" + nota + "</p>" +
      '<div class="md-thm-cuerpo">' + cuerpo + "</div></div>";
  }

  function renderMate(trozo, ctx) {
    var tex = "\\begin{" + trozo.env + "}" + trozo.cuerpo +
      "\\end{" + trozo.env + "}";
    if (!window.katex) return "<pre><code>" + escaparHtml(tex) + "</code></pre>";
    try {
      return '<p class="md-mate">' + window.katex.renderToString(tex, {
        displayMode: true, throwOnError: false, errorColor: "#ff6b6b"
      }) + "</p>";
    } catch (e) {
      return avisoPdf("Esta fórmula se compone en LaTeX", ctx);
    }
  }

  /* ---------- Figuras ---------- */

  /*
   * Se emite el <script type="text/tikz"> que el motor sustituye por el SVG.
   * El `data-add-to-preamble` lleva los operadores en español del preambulo
   * compartido: de las 195 figuras del arbol solo una los usa.
   *
   * Van en TeX llano y no con \DeclareMathOperator: el preambulo se inyecta
   * en todas las figuras y se evalua antes de que amsmath este cargado, asi
   * que con la forma de amsmath fallaban las 195 con «Undefined control
   * sequence». En TeX llano no dependen de ningun paquete.
   */
  // Las que usan los dibujos del arbol, mas las de uso corriente. Se cargan
  // todas en todas las figuras: ver el comentario de renderFigura.
  var BIBLIOTECAS_TIKZ = [
    "arrows.meta", "positioning", "calc", "trees", "shapes.geometric",
    "shapes.misc", "fit", "matrix", "patterns", "backgrounds", "chains",
    "decorations.pathreplacing", "decorations.markings", "decorations.pathmorphing",
    "intersections", "through", "quotes", "angles", "babel"
  ];

  var PREAMBULO_FIGURAS =
    "\\def\\sen{\\mathop{\\rm sen}\\nolimits}" +
    "\\def\\tg{\\mathop{\\rm tg}\\nolimits}" +
    "\\def\\rg{\\mathop{\\rm rg}\\nolimits}" +
    "\\def\\mcd{\\mathop{\\rm mcd}\\nolimits}";

  function renderFigura(trozo, ctx) {
    ctx.hayFiguras = true;
    var tex = "\\begin{" + trozo.env + "}" +
      (trozo.opt ? "[" + trozo.opt + "]" : "") +
      trozo.cuerpo + "\\end{" + trozo.env + "}";

    // amsmath va siempre: el motor no lo carga por su cuenta, y sin el fallan
    // las figuras que llevan \binom, \text o \DeclareMathOperator dentro de
    // una etiqueta. Es lo que rompia las de ALG, TOC, MH y LMD.
    var pk = { amsmath: "", amssymb: "" };
    if (trozo.env === "circuitikz") pk.circuitikz = "";
    if (/\\begin\{(axis|semilogyaxis|semilogxaxis|loglogaxis)\}|\\addplot|pgfplots/.test(tex)) {
      pk.pgfplots = "";
    }
    var paquetes = " data-tex-packages='" + escaparHtml(JSON.stringify(pk)) + "'";

    // Las bibliotecas van todas, no las que se adivinen del dibujo. Cargar una
    // que no se usa no cuesta nada en TeX; no cargar la que hace falta aborta
    // la figura, y adivinarlo se demostro imposible: `right=of a`,
    // `right=6mm of a` y `below right=1pt and -4pt` son las tres positioning y
    // no hay patron corto que las cubra sin dejarse ninguna.
    var libs = BIBLIOTECAS_TIKZ.slice();
    var reLib = /\\usetikzlibrary\{([^}]*)\}/g;
    var m;
    while ((m = reLib.exec(tex)) !== null) libs.push(m[1]);
    var atrLibs = ' data-tikz-libraries="' + escaparHtml(libs.join(",")) + '"';

    // El cuerpo del <script> NO se escapa. Dentro de un elemento script el
    // navegador no descodifica entidades, asi que un `>=stealth` escapado
    // llegaria a TeX como `&gt;=stealth` y la figura saldria mal sin decir por
    // que: son 83 de las 195 las que llevan `<`, `>` o `&`. Lo unico que hay
    // que neutralizar es la secuencia que cerraria el elemento antes de tiempo.
    var cuerpoScript = tex.replace(/<\/(script)/gi, "<\\/$1");

    return '<div class="md-fig">' +
      '<script type="text/tikz"' + paquetes + atrLibs +
      ' data-add-to-preamble="' + escaparHtml(PREAMBULO_FIGURAS) + '">' +
      cuerpoScript +
      "<\/script>" +
      '<noscript class="md-fig-aviso">' + avisoPdfHtml(ctx) + "</noscript>" +
      "</div>";
  }

  /* ---------- Aviso de respaldo ---------- */

  /*
   * Deduce el PDF del apunte para poder remitir a el. Desde
   * <dir>/src/x.md, el codigo es el nombre de <dir>, salvo que sea `Temario`
   * y entonces es el del padre: comprobado sobre los 176 ficheros del arbol
   * que traen LaTeX, y el PDF existe en los 176.
   */
  function rutaPdf(file) {
    var dir = dirDelApunte(file);
    if (!dir.length) return "";
    var codigo = dir[dir.length - 1];
    if (codigo === "Temario" && dir.length > 1) codigo = dir[dir.length - 2];
    return "/" + dir.join("/") + "/build/" + codigo + ".pdf";
  }

  // El referencias.bib vive donde el documento raiz, que es la misma carpeta
  // que contiene src/. Es la trampa que ya mordio en EM al compilar: puesto un
  // nivel mas arriba, biber no lo encuentra.
  function rutaBib(file) {
    var dir = dirDelApunte(file);
    if (!dir.length) return "";
    return "/" + encodeURI(dir.join("/") + "/referencias.bib");
  }

  function dirDelApunte(file) {
    var partes = file.split("/");
    var i = partes.lastIndexOf("src");
    return i < 1 ? [] : partes.slice(0, i);
  }

  function avisoPdfHtml(ctx) {
    var pdf = rutaPdf(ctx.file);
    return "Se compone en LaTeX y solo aparece en el PDF." +
      (pdf ? ' <a href="' + encodeURI(pdf) + '">Abrir el temario en PDF ↗</a>' : "");
  }

  function avisoPdf(titulo, ctx) {
    return '<div class="md-fig-aviso"><strong>' + escaparHtml(titulo) +
      ".</strong> " + avisoPdfHtml(ctx) + "</div>";
  }

  /* ---------- Carga diferida del motor de TikZ ---------- */

  function cargarTikz(ctx) {
    if (document.getElementById("tikzjax-css")) return;
    var css = document.createElement("link");
    css.id = "tikzjax-css";
    css.rel = "stylesheet";
    css.href = TIKZ_CDN + "fonts.min.css";
    document.head.appendChild(css);
    var js = document.createElement("script");
    js.src = TIKZ_CDN + "tikzjax.min.js";
    js.defer = true;
    js.onerror = function () { avisarFigurasSinPintar(ctx); };
    document.head.appendChild(js);

    // Si el CDN no responde o el motor se atasca, la figura no puede quedarse
    // en blanco sin decir nada: pasado el margen se remite al PDF.
    window.setTimeout(function () { avisarFigurasSinPintar(ctx); }, 25000);
  }

  // El motor sustituye cada <script> por un <svg>. Los que sigan siendo script
  // es que no se han compuesto.
  function avisarFigurasSinPintar(ctx) {
    var pendientes = contentEl.querySelectorAll(
      '.md-fig > script[type="text/tikz"]');
    for (var i = 0; i < pendientes.length; i++) {
      var caja = pendientes[i].parentNode;
      if (caja.querySelector("svg")) continue;
      caja.innerHTML = '<p class="md-fig-aviso">' + avisoPdfHtml(ctx) + "</p>";
    }
  }

  /* ---------- Reglas de markdown-it ---------- */

  /*
   * Tres reglas, porque el LaTeX llega de tres maneras distintas:
   *
   *  - En valla ```{=latex}, que es lo que la plantilla recomienda.
   *  - Suelto, con \begin{...} a principio de linea. Pandoc lo pasa igual
   *    porque `raw_tex` esta activo, asi que compila y hay 160 escritos asi.
   *  - \cite{...} en mitad de un parrafo, que son 802 y salen al final de casi
   *    todos los capitulos.
   */
  function instalarReglasLatex(md, ctx) {
    // 1. Vallas ```{=latex}
    var fenceDefecto = md.renderer.rules.fence;
    md.renderer.rules.fence = function (tokens, idx, options, env, slf) {
      if (tokens[idx].info.trim() === "{=latex}") {
        return renderBloqueLatex(tokens[idx].content, ctx);
      }
      return fenceDefecto(tokens, idx, options, env, slf);
    };

    // 2. Entornos sueltos, sin valla.
    // Va antes de `code` y no antes de `fence` porque markdown-it lee cuatro
    // espacios de sangria como bloque de codigo, y hay entornos escritos
    // sangrados —los ejercicios de MC— que se perdian ahi.
    md.block.ruler.before("code", "latex_suelto", function (state, ini, fin, silent) {
      var pos = state.bMarks[ini] + state.tShift[ini];
      var max = state.eMarks[ini];
      var linea = state.src.slice(pos, max);
      var m = /^\\begin\{([a-zA-Z*]+)\}/.exec(linea);
      if (!m) return false;
      var env = m[1];
      if (!ROTULOS[env] && !ENTORNOS_MATE[env] && !ENTORNOS_LISTA[env] &&
          !ENTORNOS_DIBUJO[env] && !ENVOLTORIOS[env] && env !== "tabular") {
        return false;
      }
      // Busca el \end que cierra, contando anidados del mismo nombre.
      var nivel = 0;
      var cierre = -1;
      for (var i = ini; i < fin; i++) {
        var l = state.src.slice(state.bMarks[i] + state.tShift[i], state.eMarks[i]);
        var abiertos = l.split("\\begin{" + env + "}").length - 1;
        var cerrados = l.split("\\end{" + env + "}").length - 1;
        nivel += abiertos - cerrados;
        if (nivel <= 0 && (abiertos || cerrados)) { cierre = i; break; }
      }
      if (cierre === -1) return false;
      if (silent) return true;
      var bloque = state.getLines(ini, cierre + 1, 0, false);
      var token = state.push("latex_suelto", "", 0);
      token.content = bloque;
      token.map = [ini, cierre + 1];
      state.line = cierre + 1;
      return true;
    });
    md.renderer.rules.latex_suelto = function (tokens, idx) {
      return renderBloqueLatex(tokens[idx].content, ctx);
    };

    // 3. \cite{clave} en prosa.
    md.inline.ruler.before("escape", "latex_cite", function (state, silent) {
      if (state.src.charCodeAt(state.pos) !== 0x5C /* \ */) return false;
      var m = /^\\cite\{([^}]*)\}/.exec(state.src.slice(state.pos));
      if (!m) return false;
      if (!silent) {
        var token = state.push("latex_cite", "", 0);
        token.content = m[1];
      }
      state.pos += m[0].length;
      return true;
    });
    md.renderer.rules.latex_cite = function (tokens, idx) {
      return '<span class="md-cite">' +
        escaparHtml(renderCitas(tokens[idx].content, ctx.citas)) + "</span>";
    };
  }

  /*
   * Deja el documento en condiciones de que las reglas de bloque vean lo que
   * tienen que ver. Dos arreglos, los dos medidos sobre el arbol:
   *
   *  - Un \begin{...} pegado al parrafo anterior no empieza bloque, asi que
   *    markdown-it lo mete dentro del parrafo y la regla nunca lo alcanza. Son
   *    treinta y dos, y se separan con una linea en blanco.
   *  - Ocho \section*{} y \subsection*{} sueltos, que pasan a encabezado.
   *
   * No toca lo que hay dentro de una valla ni dentro de $$…$$: ahi el texto es
   * literal o es de KaTeX.
   */
  function normalizarLatex(texto) {
    var partes = texto.split(/(```[\s\S]*?```|\$\$[\s\S]*?\$\$)/);
    for (var p = 0; p < partes.length; p++) {
      if (p % 2 === 1) continue;          // los impares son valla o matematica
      var t = partes[p];

      t = t.replace(/^[ \t]*\\chapter\*?\{([^}]*)\}[ \t]*$/gm, "\n# $1\n");
      t = t.replace(/^[ \t]*\\section\*?\{([^}]*)\}[ \t]*$/gm, "\n## $1\n");
      t = t.replace(/^[ \t]*\\subsection\*?\{([^}]*)\}[ \t]*$/gm, "\n### $1\n");
      t = t.replace(/^[ \t]*\\subsubsection\*?\{([^}]*)\}[ \t]*$/gm, "\n#### $1\n");
      t = t.replace(/^[ \t]*\\paragraph\*?\{([^}]*)\}[ \t]*/gm, "\n**$1** ");

      // La matematica de display escrita \[ … \]: texmath solo entiende los
      // delimitadores de dolar, que es lo que declara `delimiters: "dollars"`.
      t = t.replace(/\\\[([\s\S]*?)\\\]/g, function (_, m) {
        return "\n$$" + m.trim() + "$$\n";
      });

      // Linea en blanco antes de un \begin que arranca linea con texto encima.
      t = t.replace(
        /([^\n])\n([ \t]*\\begin\{(?:itemize|enumerate|description|tabular|flushleft|flushright|center|solucion|ejercicio|ejercicioresuelto|teorema|definicion|ejemplo|proposicion|demostracion|corolario|propuesta|anotacion|align\*?|aligned|gather\*?|equation\*?|cases|pmatrix|bmatrix|array)\})/g,
        "$1\n\n$2");
      partes[p] = t;
    }
    return partes.join("");
  }

  function crearMd(ctx) {
    var md = window.markdownit({ html: false, linkify: true, typographer: true });
    // Fórmulas LaTeX ($…$ inline, $$…$$ en bloque) vía KaTeX. Guarda por si el CDN falla.
    if (window.texmath && window.katex) {
      md.use(window.texmath, {
        engine: window.katex,
        delimiters: "dollars",
        katexOptions: { throwOnError: false, errorColor: "#ff6b6b" }
      });
    }
    instalarReglasLatex(md, ctx);
    return md;
  }

  /* ---------- Render ---------- */
  function render(file, texto, citas) {
    var ctx = { file: file, citas: citas || {}, hayFiguras: false };
    // El propio md renderiza los cuerpos de los entornos, asi que el contexto
    // se lo pasa a si mismo.
    ctx.md = crearMd(ctx);

    var html = ctx.md.render(normalizarLatex(texto));
    contentEl.innerHTML = html;

    // El motor de TikZ solo se descarga si el documento trae alguna figura:
    // son 3,5 MB y la mitad de los apuntes no tienen ninguna.
    if (ctx.hayFiguras) cargarTikz(ctx);

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
        // El render es sincrono, asi que la bibliografia tiene que estar antes.
        // Solo se pide si el apunte cita algo, y esta al lado del documento:
        // <dir>/referencias.bib, igual que el .bib que biber lee al compilar.
        if (texto.indexOf("\\cite{") === -1) return render(file, texto, {});
        return fetch(rutaBib(file))
          .then(function (r) { return r.ok ? r.text() : ""; })
          .catch(function () { return ""; })
          .then(function (bib) { render(file, texto, parsearBib(bib)); });
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
