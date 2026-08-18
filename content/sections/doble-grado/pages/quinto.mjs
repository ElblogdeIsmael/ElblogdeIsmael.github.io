/**
 * Quinto Curso - Doble Grado en Ingenieria Informatica y ADE.
 *
 * 7 subjects across 2 semesters.
 * Add a subject by pushing an entry into the matching group.
 *
 * @author Ismael Sallami Moreno
 * @type {import("../../../types.d.ts").Page}
 */
export default {
  slug: "quinto",
  index: "05",
  title: "Quinto",
  titleOutline: "Curso",
  meta: [
    "Grado en Ingeniería Informática · ADE",
    "7 asignaturas · 2 semestres",
    "Curso por cursar: por ahora solo las guías docentes",
  ],
  groups: [
    {
      index: "01",
      name: "Primer Semestre",
      entries: [
        {
          code: "CE",
          name: "Creación de Empresas",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/creacion-empresas/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
          ],
        },
        {
          code: "DF",
          name: "Derecho Fiscal",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/derecho-fiscal/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
          ],
        },
        {
          code: "DEE1",
          name: "Dirección Estratégica de la Empresa I",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/direccion-estrategica-la-empresa-i/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
          ],
        },
        {
          code: "DFIN",
          name: "Dirección Financiera",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/direccion-financiera/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      index: "02",
      name: "Segundo Semestre",
      entries: [
        {
          code: "DEE2",
          name: "Dirección Estratégica de la Empresa II",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/direccion-estrategica-la-empresa-ii/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
          ],
        },
        {
          code: "PFG",
          name: "Proyecto Fin de Grado",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/proyecto-fin-grado/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
          ],
        },
        {
          code: "TFG",
          name: "Trabajo Fin de Grado",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/trabajo-fin-grado/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
