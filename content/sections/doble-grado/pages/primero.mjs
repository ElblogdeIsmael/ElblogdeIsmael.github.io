/**
 * Primer Curso - Doble Grado en Ingenieria Informatica y ADE.
 *
 * 13 subjects across 2 semesters.
 * Add a subject by pushing an entry into the matching group.
 *
 * @author Ismael Sallami Moreno
 * @type {import("../../../types.d.ts").Page}
 */
export default {
  slug: "primero",
  index: "01",
  title: "Primer",
  titleOutline: "Curso",
  meta: [
    "Grado en Ingeniería Informática · ADE",
    "13 asignaturas · 2 semestres",
  ],
  groups: [
    {
      index: "01",
      name: "Primer Semestre",
      entries: [
        {
          code: "CAL",
          name: "Cálculo",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/calculo/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
            {
              label: "Bibliografía",
              resources: [
                {
                  name: "Thomas' Calculus — George B. Thomas",
                  note: true,
                },
                {
                  name: "Cálculo infinitesimal — Jerónimo García‑Moro",
                  note: true,
                },
              ],
            },
          ],
        },
        {
          code: "EP",
          name: "Economía Política",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/economia-politica/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
            {
              label: "Bibliografía",
              resources: [
                {
                  name: "Principios de Economía — Mankiw",
                  note: true,
                },
                {
                  name: "Economía Política — Samuelson & Nordhaus",
                  note: true,
                },
              ],
            },
          ],
        },
        {
          code: "FFT",
          name: "Fundamentos Físicos y Tecnológicos",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/fundamentos-fisicos-y-tecnologicos/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
            {
              label: "Bibliografía",
              resources: [
                {
                  name: "Fundamentos de Física — Alonso & Finn",
                  note: true,
                },
                {
                  name: "Física Universitaria — Sears & Zemansky",
                  note: true,
                },
              ],
            },
          ],
        },
        {
          code: "FDAE",
          name: "Fundamentos de Dirección y Administración de Empresas",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/fundamentos-direccion-y-administracion-empresas/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
            {
              label: "Bibliografía",
              resources: [
                {
                  name: "Fundamentos de Economía y Administración de Empresas — Agote et al.",
                  note: true,
                },
              ],
            },
          ],
        },
        {
          code: "FP",
          name: "Fundamentos de Programación",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/fundamentos-programacion/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
            {
              label: "Bibliografía",
              resources: [
                {
                  name: "How to Think Like a Computer Scientist — Downey et al.",
                  note: true,
                },
                {
                  name: "Introducción a la Programación con Python 3 — Marzal Varó et al.",
                  note: true,
                },
              ],
            },
          ],
        },
        {
          code: "TOC",
          name: "Tecnología y Organización de Computadores",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/estructura-computadores/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
            {
              label: "Bibliografía",
              resources: [
                {
                  name: "Computer Organization and Design — Patterson & Hennessy",
                  note: true,
                },
                {
                  name: "Arquitectura de Computadores — Tanenbaum",
                  note: true,
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
          code: "FS",
          name: "Fundamentos del Software",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/fundamentos-del-software/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
            {
              label: "Bibliografía",
              resources: [
                {
                  name: "Software Engineering — Ian Sommerville",
                  note: true,
                },
                {
                  name: "The Pragmatic Programmer — Hunt & Thomas",
                  note: true,
                },
              ],
            },
          ],
        },
        {
          code: "HDM",
          name: "Historia del Desarrollo Económico Mundial Contemporáneo",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente (no disponible)",
                  href: "#",
                  kind: "GUIA",
                },
              ],
            },
            {
              label: "Bibliografía",
              resources: [
                {
                  name: "A Brief Economic History of the World — Angus Maddison",
                  note: true,
                },
                {
                  name: "Historia Económica Mundial — O'Brien & Hunt",
                  note: true,
                },
              ],
            },
          ],
        },
        {
          code: "ID",
          name: "Introducción al Derecho",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/introduccion-al-derecho/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
            {
              label: "Bibliografía",
              resources: [
                {
                  name: "Introducción al Derecho — García Grau",
                  note: true,
                },
                {
                  name: "Teoría General del Derecho — Enrique José Salvador",
                  note: true,
                },
              ],
            },
          ],
        },
        {
          code: "ME",
          name: "Matemáticas Empresariales",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/matematicas-empresariales/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
            {
              label: "Bibliografía",
              resources: [
                {
                  name: "Matemáticas Financieras · Modelo Cuantitativo — Downey",
                  note: true,
                },
              ],
            },
          ],
        },
        {
          code: "MP",
          name: "Metodología de la Programación",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/metodologia-la-programacion/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
            {
              label: "Bibliografía",
              resources: [
                {
                  name: "Clean Code — Robert C. Martin",
                  note: true,
                },
                {
                  name: "The Art of Computer Programming — Donald Knuth",
                  note: true,
                },
              ],
            },
            {
              label: "Prácticas",
              resources: [
                {
                  name: "Air-lines Project",
                  href: "https://github.com/Ismael-Sallami/airline-routes-adt",
                  kind: "WEB",
                },
              ],
            },
          ],
        },
        {
          code: "MIC",
          name: "Microeconomía",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/microeconomia/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
            {
              label: "Bibliografía",
              resources: [
                {
                  name: "Microeconomía — Varian",
                  note: true,
                },
                {
                  name: "Microeconomía intermedia — Nicholson & Snyder",
                  note: true,
                },
              ],
            },
          ],
        },
        {
          code: "ALG",
          name: "Álgebra Lineal y Estructuras Matemáticas",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/algebra-lineal-y-estructuras-matematicas/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
            {
              label: "Bibliografía",
              resources: [
                {
                  name: "Linear Algebra — Strang",
                  note: true,
                },
                {
                  name: "Álgebra Lineal y sus Aplicaciones — Lay",
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
