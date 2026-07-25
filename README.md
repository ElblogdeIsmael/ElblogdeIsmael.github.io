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
`herramientas/`, `historia/`, `sitemap.xml` y `assets/css/brutal.css`. El HTML
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
técnica de fondo, tipografía grande con la segunda mitad en contorno. Teal
`#2ee6c5` y lima `#b8ff3c` sobre carbón `#0d0f12`, con tema claro sobre papel.
Tipos: Bricolage Grotesque para display, Manrope para texto.

Las cinco capas de `assets/css/brutal/` se editan por separado y el build las
concatena en `assets/css/brutal.css`. Ese fichero está generado: no se edita a
mano.

## Otras carpetas

- `Subjects/` — el material en sí: PDF, LaTeX, Markdown, tests y prácticas.
- `md2html/` — convierte apuntes en Markdown a tests HTML autocorregibles.
- `pdf2md/` — convierte PDF, Word y Excel a Markdown.
- `viewer/` — visor de apuntes en Markdown.
- `extraFiles/` — plantillas de LaTeX y utilidades.

## Contacto

GitHub: [ElblogdeIsmael](https://github.com/ElblogdeIsmael)
