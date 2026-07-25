/**
 * TEMPLATE - an example page, showing every field the model supports.
 *
 * The four levels are generic. In a course they read as semester, subject and
 * download; in a research area they read as work line, project and output.
 * Same data, same template.
 *
 *   groups   -> semester        | work line
 *   entries  -> subject         | project
 *   blocks   -> "Prácticas"     | "Publicaciones"
 *   resources-> a PDF or a test | a paper or a repository
 *
 * @author Ismael Sallami Moreno
 * @type {import("../../../types.d.ts").Page}
 */

export default {
  /** URL segment. The page is published at `/<section>/<slug>/`. */
  slug: "ejemplo",

  /** Two-digit ordinal shown above the title, and the order within the section. */
  index: "01",

  /** Heading halves: solid, then outlined. */
  title: "Página",
  titleOutline: "de ejemplo",

  /** Two short lines under the title, aligned to opposite edges. */
  meta: ["Contexto de la página", "1 entrada · 1 grupo"],

  groups: [
    {
      index: "01",
      name: "Nombre del grupo",
      entries: [
        {
          /** Badge text. Keep it under six characters. */
          code: "EJ",
          name: "Nombre de la entrada",

          /**
           * Blocks group the resources. The first one usually has no label;
           * later ones head a run of related links.
           * An empty `blocks` array renders the "sin material" placeholder.
           */
          blocks: [
            {
              resources: [
                {
                  name: "Un documento",
                  href: "/Subjects/Ruta/al/fichero.pdf",
                  kind: "PDF",
                },
                {
                  name: "Un enlace externo",
                  href: "https://github.com/ismael-sallami",
                  kind: "WEB",
                },
              ],
            },
            {
              label: "Un grupo con título",
              resources: [
                {
                  name: "Un test autocorregible",
                  href: "/Subjects/Ruta/al/test.html",
                  kind: "HTML",
                },
                {
                  /** `note` renders plain text: material that is not published here. */
                  name: "Un libro recomendado — Autor",
                  note: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
