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
                {
                  name: "Apuntes y Casos Prácticos",
                  href: "/Subjects/Fifth/FIS/build/FIS.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Guías del Parcial 1",
              resources: [
                {
                  name: "Guía de estudio (temas 1 a 4.1 y prácticas 1 a 16)",
                  href: "/Subjects/Fifth/FIS/guias/guia-estudio-primer-parcial.pdf",
                  kind: "PDF",
                },
                {
                  name: "Repaso express y qué subrayar (4 páginas)",
                  href: "/Subjects/Fifth/FIS/guias/repaso-express-primer-parcial.pdf",
                  kind: "PDF",
                },
                {
                  name: "Hoja de ruta para subrayar la LIRPF y el RIRPF",
                  href: "/Subjects/Fifth/FIS/guias/hoja-de-ruta-codigo-primer-parcial.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Exámenes",
              resources: [
                {
                  name: "Test de teoría Parcial 1",
                  href: "/Subjects/Fifth/FIS/test/test-teoria-primer-parcial.html",
                  kind: "HTML",
                },
                {
                  name: "Casos prácticos tipo test Parcial 1",
                  href: "/Subjects/Fifth/FIS/test/casos-practicos-primer-parcial.html",
                  kind: "HTML",
                },
                {
                  name: "Banco de preguntas tipo test Parcial 1",
                  href: "/Subjects/Fifth/FIS/test/banco-test-primer-parcial.html",
                  kind: "HTML",
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
                {
                  name: "Actividades Prácticas y Casos de Debate",
                  href: "/Subjects/Fifth/DE-1/build/DE-1.pdf",
                  kind: "PDF",
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
                {
                  name: "Relación de Problemas",
                  href: "/Subjects/Fifth/DFIN/build/DFIN.pdf",
                  kind: "PDF",
                },
              ],
            },
          ],
        },
        {
          code: "PL",
          name: "Procesadores de Lenguajes",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica/pages/docencia/guias-docentes",
                  kind: "GUIA",
                },
                {
                  name: "Temario y Fundamentos de Compilación (Temas 1 al 6)",
                  href: "/Subjects/Fifth/PL/build/PL.pdf",
                  kind: "PDF",
                },
              ],
            },
          ],
        },
        {
          code: "VC",
          name: "Visión por Computador",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica/pages/docencia/guias-docentes",
                  kind: "GUIA",
                },
                {
                  name: "Temario y Cuestiones de Examen (Temas 1, 2 y 3)",
                  href: "/Subjects/Fifth/VC/build/VC.pdf",
                  kind: "PDF",
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
