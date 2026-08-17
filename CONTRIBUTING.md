# Cómo se contribuye aquí

Este repositorio es el archivo de apuntes del Doble Grado en Ingeniería
Informática y ADE de la UGR, y lo mantiene una persona: Ismael Sallami Moreno.
No busca colaboradores de código. Lo que sí es bienvenido, y llega de vez en
cuando, es una corrección: un error en unos apuntes, un enlace roto, una guía
docente que ha cambiado de sitio, o un aviso de que algo publicado no debería
estarlo.

Este documento sirve para eso y para retomar el hilo dentro de seis meses.

## Lo primero: material que no es tuyo

**No entra material del profesorado ni de terceros.** Ni transparencias, ni
enunciados, ni guiones de prácticas, ni capítulos de manual. Da igual que la
asignatura los diera por buenos: publicarlos en abierto no es lo mismo que
usarlos para estudiar.

Y no basta con mirar los PDF:

- **También entra como imagen.** Contabilidad Financiera I publicó seis páginas
  fotografiadas de un manual dentro de un documento propio, con la marca de
  «Escaneado con CamScanner» y un dedo en el encuadre. Ningún barrido de
  metadatos lo vio, porque el documento que las llevaba dentro sí era propio.
- **También entra desde una fuente `.tex`.** Economía Mundial publicó 446 líneas
  de prosa de manual escritas dentro de un `.tex`, con la marca de agua de
  descarga en una nota al pie.
- **Un envoltorio con portada propia no es propio.** Si un documento solo hace
  `\includepdf` de otros, lo que publica es lo que incluye.

Si mandas apuntes, son tuyos y los has escrito tú. Si citas un manual, va en la
bibliografía, no pegado en el cuerpo.

## Avisar de algo que no debería estar publicado

Una clave, un DNI, un dato personal o material con derechos: eso no se abre como
una issue pública. Está en [`.github/SECURITY.md`](.github/SECURITY.md) cómo se
avisa.

## Tocar el contenido del sitio

El contenido vive en ficheros de datos, y el HTML **se genera**:

```bash
npm run build     # genera el sitio
npm run check     # falla si el HTML está desfasado o hay enlaces locales rotos
```

- **El copy vive en `content/`**, nunca dentro de las plantillas de `build/`.
- **El HTML de la raíz no se edita a mano.** Se versiona porque Pages lo sirve
  sin compilar, pero sale de `npm run build`. Si lo editas, el siguiente build
  lo pisa y el CI falla antes.
- **`assets/css/brutal.css` y `assets/css/tool.css` están generados.** Se editan
  las cinco capas de `assets/css/brutal/`.
- **El JS de `md2html/`, `pdf2md/` y `viewer/` no se toca.** Su CSS depende de
  los nombres de clase que ese JS manipula (`light`, `dragover`, `active`), así
  que un renombrado rompe el estilo sin que nada falle.

Cómo se añade un recurso, una asignatura, un curso, una sección o una
herramienta está en el [README](README.md#añadir-contenido).

## Escribir los apuntes de una asignatura

Se arranca de la plantilla, nunca copiando otra asignatura:

```bash
cp -r Subjects/_template Subjects/Second/SO
```

Después se cambia `PROJECT` en el `Makefile` y los tres campos de
`src/00_portada.md`, y `make` deja el PDF en `build/`.

Las reglas de forma, que salen de la
[D-12](docs/reorganizacion/DECISIONES.md):

- **Markdown por defecto**: prosa, tablas `|`, `$$…$$`, bloques de código.
- **LaTeX crudo dentro del propio `.md`** para lo que markdown no cubre —tikz,
  matemática pesada—. Pandoc lo pasa intacto.
- **`src/tex/` aparte solo si el bloque pasa de unas 50 líneas.** Un capítulo de
  prosa nunca va en `.tex`.
- **Nada de `--listings`.** Lee en verbatim, así que un acento dentro de un
  bloque de código aborta la compilación señalando otra línea. El resaltado
  nativo de pandoc funciona desde que `estilo.latex` emite
  `$highlighting-macros$`.

Y el contenido: un capítulo por tema de la guía docente oficial, en impersonal,
con la bibliografía de esa guía citada donde el texto se apoya en ella.

## Qué se ejecuta antes de mandar nada

```bash
npm run check                                          # siempre
node build/scripts/check-latex-builds.mjs --only <COD> # si tocaste un .tex
```

Y lo que ningún script ve, que es donde salen los fallos de verdad:

- **Abre el PDF y míralo.** Una figura mal dibujada compila sin una queja:
  leyendas encima de las barras, rótulos saliéndose de su caja, marcas de eje
  impresas como «1,929». Se ven con `pdftoppm -f N -l N -r 100 -png`.
- **Rehaz las cuentas de todo ejemplo numérico.** Un documento compila igual de
  bien con las cuentas mal.
- **`npm run check` no pide los enlaces externos.** Si añadiste uno, compruébalo:
  `curl -s -o /dev/null -w '%{http_code}' -L <url>`.

## Commits y pull requests

- **Los commits van en inglés simple.** Las PR, las issues y `docs/` van en
  español.
- **Un commit por unidad lógica.** Nada de commits gigantes llamados «cambios».
- **`git add` explícito de los ficheros tocados**, nunca `git add -A`: bajo
  `Subjects/` hay mucho fuera del índice a propósito.
- **Nunca se trabaja directamente sobre `main`.** Rama, PR, y el diff se lee
  entero antes de mezclar aunque el autor y el revisor sean la misma persona.
- **Sin atribución de herramientas.** Ni trailers de coautoría, ni firmas
  generadas, ni menciones a asistentes en commits, PR, issues o releases.

Las once reglas completas están en
[`docs/reorganizacion/REGLAS.md`](docs/reorganizacion/REGLAS.md), y lo que se
decidió y por qué en
[`DECISIONES.md`](docs/reorganizacion/DECISIONES.md).

## Licencia

El código y la maquetación van bajo MIT, como dice el [LICENSE](LICENSE). Los
apuntes son material propio; si los reutilizas, cita de dónde salen.
