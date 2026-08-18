# El blog de Ismael Sallami

Apuntes, prácticas y material del Doble Grado en Ingeniería Informática y ADE
de la Universidad de Granada. Publicado en
[elblogdeismael.github.io](https://elblogdeismael.github.io).

## Cómo funciona

El contenido vive en ficheros de datos. Un generador escrito en Node los lee y
escribe HTML estático en la raíz del repositorio, que es lo que sirve GitHub
Pages. No hay dependencias: el sitio publicado son páginas HTML, una hoja de
estilos y dos scripts de poco más de un kilobyte.

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

Se genera desde `content/` hacia la raíz: `index.html`, `doble-grado/`,
`tools/`, `historia/`, `sitemap.xml` y `assets/css/brutal.css`. El HTML
generado se versiona, así que Pages publica sin necesidad de compilar nada.

## Comandos

```bash
npm run build     # genera el sitio
npm run dev       # genera y sirve en http://localhost:4173
npm run check     # falla si el HTML está desactualizado o hay enlaces rotos

# Si has tocado un .tex. Compila fuera del repositorio, así que no pisa nada.
node build/scripts/check-latex-builds.mjs --check      # los 100, unos 8 min
node build/scripts/check-latex-builds.mjs --only FBD   # solo lo tocado
```

Necesita Node 20 o superior. No hay que instalar nada.

**El HTML generado se versiona.** Después de tocar `content/` hay que ejecutar
`npm run build` o el sitio no cambia, y el CI falla con `npm run check`.

`npm run check` comprueba que cada enlace local apunta a un fichero que existe.
**No pide los externos**, así que una guía docente que cambie de URL pasa por
buena: eso se barre a mano con `curl`.

## Añadir contenido

**Un recurso a una asignatura** — abre el curso en
`content/sections/doble-grado/pages/` y añade una entrada a la lista
`resources` de esa asignatura. Después `npm run build`.

**Una asignatura** — añade un objeto `{ code, name, blocks }` al semestre que
toque, en el mismo fichero.

**Los apuntes de una asignatura**, que es escribir un PDF nuevo:

1. `cp -r Subjects/_template Subjects/Second/SO`
2. En el `Makefile`, `PROJECT = SO`.
3. Escribe en `src/`, un fichero por tema. Se escribe **en Markdown**; el LaTeX
   solo para lo que Markdown no cubre, y dentro del propio `.md`.
4. `make` deja el PDF en `build/SO.pdf`. Enlázalo y `npm run build`.

Está todo en [`Subjects/_template/README.md`](Subjects/_template/README.md).

**Un curso**, o cualquier otra página dentro de una sección:

1. Un fichero en `content/sections/<seccion>/pages/<slug>.mjs`, con `slug`,
   `index`, `title`, `titleOutline`, `meta` y `groups`.
2. Impórtalo en el `section.mjs` de esa sección y añádelo al array `pages`.
3. `npm run build`

El orden del array es el orden que se ve, y de ahí salen solos el índice de la
sección, las migas de pan, los enlaces de anterior y siguiente, y el sitemap.

**Una sección nueva** (investigación, proyectos, lo que sea):

1. `cp -r content/sections/_template content/sections/investigacion`
2. Rellena `section.mjs` y las páginas de `pages/`.
3. Impórtala en `content/registry.mjs` y añádela al array `SECTIONS`.
4. `npm run build`

Aparece sola en la portada, con su índice en `/investigacion/`, una página por
entrada y sus filas en el sitemap. No hay que tocar plantillas ni CSS.

**Una herramienta** — las apps del navegador son el caso de sección **sin
páginas**: `content/sections/tools/section.mjs` tiene `pages: []` y un array
`links`, y el generador pinta una lista de enlaces en vez de una rejilla
siempre que `links` esté puesto. Así que:

1. La app, entera, en su carpeta de la raíz (`diffchecker/`, `md2html/`…).
2. Una entrada en `links` con `name`, `href` y `kind`. Si el código vive en un
   repositorio aparte, una segunda entrada apuntando a él, como hacen md2html y
   pdf2md.
3. `npm run build`

**El JS de `md2html/`, `pdf2md/` y `viewer/` no se toca**: su CSS depende de los
nombres de clase que ese JS manipula (`light`, `dragover`, `active`), así que
renombrar uno rompe el estilo sin que nada falle.

El modelo es el mismo para todo. Un curso y un área de investigación se
describen igual:

| Nivel      | Doble Grado    | Investigación     |
| ---------- | -------------- | ----------------- |
| `Section`  | Doble Grado    | Investigación     |
| `Page`     | Cuarto Curso   | Visión por Comp.  |
| `Group`    | Primer Semestre| Línea de trabajo  |
| `Entry`    | Asignatura     | Proyecto          |
| `Resource` | Apuntes en PDF | Publicación       |

Los campos están documentados en `content/types.d.ts`, que da autocompletado
en el editor sin necesidad de compilar TypeScript.

## Diseño

Brutalismo: bordes duros de 2 px, sombras desplazadas sin difuminar, rejilla
técnica de fondo, tipografía grande con la segunda mitad en contorno.
Tipos: Bricolage Grotesque para display, Manrope para texto.

**El tema claro es el de por defecto**: papel `#eef2ef` con sombras duras
oscuras y acentos teal `#0f9e86` y lima `#4fb31f`. El oscuro (carbón `#0d0f12`
con teal `#2ee6c5` y lima `#b8ff3c`) se elige en el conmutador y se recuerda.
No se consulta la preferencia del sistema: la web está diseñada en claro.

Las cinco capas de `assets/css/brutal/` se editan por separado y el build las
concatena en `assets/css/brutal.css`. Ese fichero está generado: no se edita a
mano.

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
| `docs/reorganizacion/` | El plan de la reorganización, por fases. Cerrado el 16 de agosto de 2026 |

Las que **genera el build** y no se editan a mano:

| Carpeta | Qué contiene |
| --- | --- |
| `doble-grado/` | La sección del Doble Grado: un índice y una página por curso |
| `tools/` | El índice de las apps del navegador |
| `historia/` | La página sobre el proyecto |
| `courses/` | Las URLs antiguas, que redirigen a su sitio nuevo |

`doble-grado` es el *slug* de la sección, así que da nombre a la URL y a la
carpeta generada. Una sección nueva —investigación, proyectos, lo que sea—
aparece igual con solo registrarla: ver «Añadir contenido».

**`extraFiles/` y `htmlFiles/` no se borran**, aunque el generador no los
enlace. `extraFiles/preambulos_oficiales/` es la plantilla LaTeX compartida:
una veintena de documentos de tercero y cuarto hacen `\input` de `estilo.latex`,
`paquetes.tex`, `comandos.tex`, `estilos.tex`, `licencia.tex`,
`referencias.tex` y `metadata.yaml`, y las portadas leen las imágenes de
`extraFiles/img/`. Y `htmlFiles/history.html` es un stub de redirección vivo a
`/historia.html`, igual que los de `courses/`.

Al buscar quién usa un fichero hay que grepear **también los Makefile**, no
solo el HTML y el JS: la nota que este README tuvo durante meses daba las dos
carpetas por muertas porque solo miró los `.html`, `.css`, `.mjs` y `.js`.

## Avisos

Si encuentras una clave, un dato personal o material con derechos de autor
publicado aquí, **no se avisa en una issue pública**: cómo hacerlo está en
[`.github/SECURITY.md`](.github/SECURITY.md). Para una errata o un enlace
movido hay dos formularios de issue.

## Contacto

GitHub: [ElblogdeIsmael](https://github.com/ElblogdeIsmael)
