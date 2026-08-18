# El blog de Ismael Sallami

[![Deploy to GitHub Pages](https://github.com/ElblogdeIsmael/ElblogdeIsmael.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/ElblogdeIsmael/ElblogdeIsmael.github.io/actions/workflows/deploy.yml)

Apuntes, prácticas y material del Doble Grado en Ingeniería Informática y ADE
de la Universidad de Granada. Se publica en
[elblogdeismael.github.io](https://elblogdeismael.github.io).

Es un archivo personal, no un proyecto abierto. No se buscan colaboradores ni
hay guía de contribución: lo que se publica aquí lo escribe una sola persona.
Para una errata o un enlace movido hay dos formularios de issue. Para material
que no debería estar publicado, [«Avisos»](#avisos).

## Cómo funciona

El contenido vive en ficheros de datos. Un generador escrito en Node los lee y
escribe HTML estático en la raíz del repositorio, que es lo que sirve GitHub
Pages. Sin dependencias: lo publicado son páginas HTML, una hoja de estilos y
dos scripts de poco más de un kilobyte.

```
content/          datos: qué se publica
  registry.mjs      lista de secciones
  site.mjs          metadatos del sitio
  types.d.ts        el modelo, documentado
  sections/         una carpeta por sección
build/            generador: cómo se publica
  render.mjs        punto de entrada
  templates/        una función por tipo de página
assets/css/brutal/  sistema de diseño en cinco capas
```

De `content/` sale la raíz entera: `index.html`, `doble-grado/`, `tools/`,
`historia/`, `sitemap.xml` y `assets/css/brutal.css`. Ese HTML se versiona, así
que Pages publica sin compilar nada.

## Comandos

```bash
npm run build     # genera el sitio
npm run dev       # genera y sirve en http://localhost:4173
npm run check     # falla si el HTML está desactualizado o hay enlaces rotos

# Si se ha tocado un .tex. Compila fuera del repositorio, así que no pisa nada.
node build/scripts/check-latex-builds.mjs --check      # los 100, unos 8 min
node build/scripts/check-latex-builds.mjs --only FBD   # solo lo tocado
```

Node 20 o superior, y nada que instalar.

Como el HTML se versiona, tras tocar `content/` toca ejecutar `npm run build`.
Sin eso el sitio no cambia y el CI falla con `npm run check`.

Ese `check` comprueba que cada enlace local apunta a un fichero que existe, pero
no pide los externos. Una guía docente que cambie de URL pasa por buena, así que
esas se barren a mano con `curl`.

Y con los `.tex` el barrido tampoco basta: hay que abrir el PDF y mirarlo. Una
figura mal dibujada compila sin una sola queja (leyendas encima de las barras,
rótulos que se salen de su caja, un eje pisado), y eso solo se ve renderizando
la página con `pdftoppm -f N -l N -r 100 -png`. Con las cuentas de un ejemplo
numérico pasa igual. Un documento compila perfectamente con las sumas mal.

## Añadir contenido

### Un recurso, o una asignatura entera

Los cursos viven en `content/sections/doble-grado/pages/`. Un recurso nuevo es
una entrada más en la lista `resources` de su asignatura, y una asignatura nueva
un objeto `{ code, name, blocks }` en el semestre que le toque, en ese mismo
fichero. Después, `npm run build`.

### La guía docente

Es el primer recurso de toda ficha. La URL sigue este patrón:

```
https://grados.ugr.es/informatica-ade/docencia/plan-estudios/<slug>/guia-docente
```

El *slug* sale del índice del plan de estudios. Dos avisos, y los dos han
costado tiempo dos veces:

- Las optativas de Computación y Sistemas Inteligentes cuelgan del **grado de
  Informática**, no del doble grado. Es el caso de MH y de AA, con
  `grados.ugr.es/informatica/…` y otro slug.
- Cuando esa página da 404, **la guía firmada sí existe** en
  `guias-firmadas/<curso>/<codigo>.pdf`. El código no aparece en ninguna página:
  se encuentra barriendo el rango y leyendo la primera página del PDF con
  `pdftotext`. Así salieron FBD (`216113D`) y MAC (`296113D`).

Si de verdad no hay guía, el modelo tiene `note: true` para eso. Nunca
`href: "#"`.

### Un apunte que se lea en el navegador

Se enlaza con `/viewer/?file=<ruta>`, nunca con una ruta relativa al `.md`. Así
se sirven 245 recursos: el visor descarga el markdown y lo renderiza en la
página, con las figuras de tikz compiladas al vuelo.

### Un test autocorregible

El `test/*.md` es la fuente y el `test/*.html` el artefacto que genera md2html.
Los dos se versionan, porque Pages sirve el HTML directamente, pero solo se
edita el `.md`.

### Los apuntes de una asignatura

Que es escribir un PDF nuevo:

1. `cp -r Subjects/_template Subjects/Second/SO`
2. En el `Makefile`, `PROJECT = SO`.
3. Un fichero por tema en `src/`, **en Markdown**. El LaTeX, solo para lo que
   Markdown no cubre, y dentro del propio `.md`.
4. `make` deja el PDF en `build/SO.pdf`. Se enlaza y `npm run build`.

Está todo en [`Subjects/_template/README.md`](Subjects/_template/README.md).

### Un curso, o cualquier página dentro de una sección

1. Un fichero en `content/sections/<seccion>/pages/<slug>.mjs`, con `slug`,
   `index`, `title`, `titleOutline`, `meta` y `groups`.
2. Importarlo en el `section.mjs` de esa sección y añadirlo al array `pages`.
3. `npm run build`

El orden del array es el orden que se ve, y de ahí salen solos el índice de la
sección, las migas de pan, los enlaces de anterior y siguiente, y el sitemap.

### Una sección nueva

Investigación, proyectos, lo que sea:

1. `cp -r content/sections/_template content/sections/investigacion`
2. Rellenar `section.mjs` y las páginas de `pages/`.
3. Importarla en `content/registry.mjs` y añadirla al array `SECTIONS`.
4. `npm run build`

Aparece sola en la portada, con su índice en `/investigacion/`, una página por
entrada y sus filas en el sitemap. Sin tocar plantillas ni CSS.

### Una herramienta

Las apps del navegador son el caso de sección **sin páginas**:
`content/sections/tools/section.mjs` tiene `pages: []` y un array `links`, y el
generador pinta una lista de enlaces en vez de una rejilla siempre que `links`
esté puesto. Así que:

1. La app, entera, en su carpeta de la raíz (`diffchecker/`, `md2html/`…).
2. Una entrada en `links` con `name`, `href` y `kind`. El `blurb` es la línea de
   debajo del nombre, y el `repo` pinta el cuadrado que lleva al código.
3. `npm run build`

El JS de `md2html/`, `pdf2md/` y `viewer/` no se toca. Su CSS depende de los
nombres de clase que ese JS manipula (`light`, `dragover`, `active`), así que
renombrar uno rompe el estilo sin que nada falle.

### El modelo

Es el mismo para todo. Un curso y un área de investigación se describen igual:

| Nivel      | Doble Grado    | Investigación     |
| ---------- | -------------- | ----------------- |
| `Section`  | Doble Grado    | Investigación     |
| `Page`     | Cuarto Curso   | Visión por Comp.  |
| `Group`    | Primer Semestre| Línea de trabajo  |
| `Entry`    | Asignatura     | Proyecto          |
| `Resource` | Apuntes en PDF | Publicación       |

Los campos están documentados en `content/types.d.ts`, que da autocompletado en
el editor sin necesidad de compilar TypeScript.

## Diseño

Brutalismo: bordes duros de 2 px, sombras desplazadas sin difuminar, rejilla
técnica de fondo, tipografía grande con la segunda mitad en contorno. Los tipos
son Bricolage Grotesque para display y Manrope para texto.

El tema claro es el de por defecto: papel `#eef2ef` con sombras duras oscuras y
acentos teal `#0f9e86` y lima `#4fb31f`. El oscuro (carbón `#0d0f12` con teal
`#2ee6c5` y lima `#b8ff3c`) se elige en el conmutador y se recuerda. No se
consulta la preferencia del sistema, porque la web está diseñada en claro.

El build concatena las cinco capas de `assets/css/brutal/` en un solo
`assets/css/brutal.css`. Ese fichero está generado: se editan las capas, nunca
él.

## Qué es cada carpeta

Las que se escriben a mano:

| Carpeta | Qué es |
| --- | --- |
| `content/` | Los datos: qué se publica y con qué texto |
| `build/` | El generador y sus plantillas |
| `assets/css/brutal/` | El sistema de diseño, en cinco capas |
| `Subjects/` | El material en sí: PDF, LaTeX, Markdown, tests y prácticas |
| `md2html/`, `pdf2md/`, `diffchecker/`, `viewer/` | Cuatro apps que funcionan enteras en el navegador. Las tres primeras se ofrecen en Herramientas; al visor se entra desde los recursos `.md` de las fichas |
| `extraFiles/preambulos_oficiales/` | La plantilla LaTeX compartida. **Está viva**: ver abajo |
| `docs/` | La documentación del propio repositorio. Hoy solo tiene `reorganizacion/`: el plan por fases, cerrado el 16 de agosto de 2026, con las reglas y las decisiones que siguen valiendo |

Las que **genera el build** y no se editan a mano:

| Carpeta | Qué contiene |
| --- | --- |
| `doble-grado/` | La sección del Doble Grado: un índice y una página por curso |
| `tools/` | El índice de las apps del navegador |
| `historia/` | La página sobre el proyecto |
| `courses/` | Las URLs antiguas, que redirigen a su sitio nuevo |

`doble-grado` es el *slug* de la sección, así que da nombre a la URL y a la
carpeta generada. Una sección nueva aparece igual con solo registrarla, como
cuenta «Añadir contenido».

Ni `extraFiles/` ni `htmlFiles/` se borran, aunque el generador no las enlace.
`extraFiles/preambulos_oficiales/` es la plantilla LaTeX compartida: una
veintena de documentos de tercero y cuarto hacen `\input` de `estilo.latex`,
`paquetes.tex`, `comandos.tex`, `estilos.tex`, `licencia.tex`, `referencias.tex`
y `metadata.yaml`, y las portadas leen las imágenes de `extraFiles/img/`. Y
`htmlFiles/history.html` es un stub de redirección vivo a `/historia.html`,
igual que los de `courses/`.

De ahí sale una regla: al buscar quién usa un fichero hay que grepear también
los Makefile, no solo el HTML y el JS. La nota que este README tuvo durante
meses daba las dos carpetas por muertas porque solo miró los `.html`, `.css`,
`.mjs` y `.js`.

## Avisos

Si aparece publicada aquí una clave, un dato personal o material con derechos de
autor, no se avisa en una issue pública: cómo hacerlo está en
[`.github/SECURITY.md`](.github/SECURITY.md). Para una errata o un enlace movido
hay dos formularios de issue.

## Licencia

El **código** (el generador, las plantillas, el sistema de diseño y las tres
apps del navegador) va bajo MIT, en [`LICENSE`](LICENSE).

Los **apuntes** son material propio, escritos siguiendo la guía docente de cada
asignatura y con su bibliografía citada donde el texto se apoya en ella. Quien
los reutilice, que cite de dónde salen.

Y lo que no está aquí y no va a estar: material del profesorado, guiones,
transparencias y capítulos de manual, tampoco incrustados como imagen dentro de
un documento propio.

## Contacto

GitHub: [ElblogdeIsmael](https://github.com/ElblogdeIsmael)
