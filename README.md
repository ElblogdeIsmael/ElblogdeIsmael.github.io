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
```

Necesita Node 20 o superior. No hay que instalar nada.

## Añadir contenido

**Un recurso a una asignatura** — abre el curso en
`content/sections/doble-grado/pages/` y añade una entrada a la lista
`resources` de esa asignatura. Después `npm run build`.

**Una asignatura** — añade un objeto `{ code, name, blocks }` al semestre que
toque, en el mismo fichero.

**Una sección nueva** (investigación, proyectos, lo que sea):

1. `cp -r content/sections/_template content/sections/investigacion`
2. Rellena `section.mjs` y las páginas de `pages/`.
3. Impórtala en `content/registry.mjs` y añádela al array `SECTIONS`.
4. `npm run build`

Aparece sola en la portada, con su índice en `/investigacion/`, una página por
entrada y sus filas en el sitemap. No hay que tocar plantillas ni CSS.

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
| `md2html/`, `pdf2md/`, `viewer/` | Tres apps que funcionan enteras en el navegador |
| `docs/reorganizacion/` | El plan de la reorganización en curso, por fases |

Las que **genera el build** y no se editan a mano:

| Carpeta | Qué contiene |
| --- | --- |
| `doble-grado/` | La sección del Doble Grado: un índice y una página por curso |
| `tools/` | El índice de las tres apps del navegador |
| `historia/` | La página sobre el proyecto |
| `courses/` | Las URLs antiguas, que redirigen a su sitio nuevo |

`doble-grado` es el *slug* de la sección, así que da nombre a la URL y a la
carpeta generada. Una sección nueva —investigación, proyectos, lo que sea—
aparece igual con solo registrarla: ver «Añadir contenido».

`extraFiles/` y `htmlFiles/` son restos del sitio anterior: nada del generador
los enlaza. Se revisan y se retiran en la fase 2 de la reorganización.

## Contacto

GitHub: [ElblogdeIsmael](https://github.com/ElblogdeIsmael)
