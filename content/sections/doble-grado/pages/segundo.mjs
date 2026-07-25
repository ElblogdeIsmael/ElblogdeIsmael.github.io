/**
 * Segundo Curso - Doble Grado en Ingenieria Informatica y ADE.
 *
 * 13 subjects across 2 semesters.
 * Add a subject by pushing an entry into the matching group.
 *
 * @author Ismael Sallami Moreno
 * @type {import("../../../types.d.ts").Page}
 */
export default {
  slug: "segundo",
  index: "02",
  title: "Segundo",
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
          code: "EC",
          name: "Estructura de Computadores",
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
                  name: "Computer Organization and Architecture — Stallings",
                  note: true,
                },
                {
                  name: "Computer Systems: A Programmer's Perspective — Bryant & O'Hallaron",
                  note: true,
                },
              ],
            },
          ],
        },
        {
          code: "ED",
          name: "Estructura de Datos",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/estructura-datos/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
            {
              label: "Bibliografía",
              resources: [
                {
                  name: "Estructuras de Datos en C++ — Rodriguez‑Sánchez et al.",
                  note: true,
                },
                {
                  name: "Data Abstraction & Problem Solving with C++ — Carrano",
                  note: true,
                },
              ],
            },
            {
              label: "Prácticas",
              resources: [
                {
                  name: "TDA-Image",
                  href: "https://github.com/Ismael-Sallami/TDA-Imagen/tree/main",
                  kind: "WEB",
                },
              ],
            },
          ],
        },
        {
          code: "IOF",
          name: "Introducción a las Operaciones Financieras",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/introduccion-las-operaciones-financieras/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
            {
              label: "Bibliografía",
              resources: [
                {
                  name: "Fundamentals of Financial Management — Brigham & Houston",
                  note: true,
                },
                {
                  name: "Principles of Corporate Finance — Brealey, Myers & Allen",
                  note: true,
                },
              ],
            },
          ],
        },
        {
          code: "IM",
          name: "Introducción al Márketing",
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
                  name: "Marketing Management — Kotler & Keller",
                  note: true,
                },
                {
                  name: "Introducción al Marketing — Lamb, Hair & McDaniel",
                  note: true,
                },
              ],
            },
          ],
        },
        {
          code: "MAC",
          name: "Macroeconomía",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/macroeconomia/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
            {
              label: "Bibliografía",
              resources: [
                {
                  name: "Macroeconomics — Olivier Blanchard",
                  note: true,
                },
                {
                  name: "Macroeconomía — Mankiw",
                  note: true,
                },
              ],
            },
          ],
        },
        {
          code: "SO",
          name: "Sistemas Operativos",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/sistemas-operativos/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
            {
              label: "Bibliografía",
              resources: [
                {
                  name: "Operating System Concepts — Silberschatz, Galvin & Gagne",
                  note: true,
                },
                {
                  name: "Modern Operating Systems — Tanenbaum",
                  note: true,
                },
              ],
            },
          ],
        },
        {
          code: "TC1",
          name: "Técnicas Cuantitativas I",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/tecnicas-cuantitativas-i/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
            {
              label: "Bibliografía",
              resources: [
                {
                  name: "Introducción a la Investigación Operativa — Hillier & Lieberman",
                  note: true,
                },
                {
                  name: "Quantitative Methods for Business — Anderson et al.",
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
          code: "ALGO",
          name: "Algorítmica",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/algoritmica/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
            {
              label: "Bibliografía",
              resources: [
                {
                  name: "Introduction to Algorithms — Cormen, Leiserson, Rivest, Stein",
                  note: true,
                },
                {
                  name: "Algorithm Design — Kleinberg & Tardos",
                  note: true,
                },
              ],
            },
          ],
        },
        {
          code: "AC",
          name: "Arquitectura de Computadores",
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
                  name: "Computer Organization and Design — Patterson & Hennessy",
                  note: true,
                },
                {
                  name: "Structured Computer Organization — Tanenbaum",
                  note: true,
                },
              ],
            },
          ],
        },
        {
          code: "CG",
          name: "Contabilidad General",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/contabilidad-general/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
            {
              label: "Bibliografía",
              resources: [
                {
                  name: "Contabilidad Financiera — Valencia Gradilla",
                  note: true,
                },
                {
                  name: "Financial Accounting — Libby, Libby & Short",
                  note: true,
                },
              ],
            },
          ],
        },
        {
          code: "DC",
          name: "Dirección Comercial",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/direccion-comercial/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
            {
              label: "Bibliografía",
              resources: [
                {
                  name: "Marketing Strategy — Walker, Mullins & Boyd",
                  note: true,
                },
                {
                  name: "Principles of Marketing — Kotler & Armstrong",
                  note: true,
                },
              ],
            },
          ],
        },
        {
          code: "LMD",
          name: "Lógica y Métodos Discretos",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/logica-y-metodos-discretos/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
            {
              label: "Bibliografía",
              resources: [
                {
                  name: "Discrete Mathematics and Its Applications — Rosen",
                  note: true,
                },
                {
                  name: "Matemáticas Discretas — Kenneth Rosen (en español)",
                  note: true,
                },
              ],
            },
          ],
        },
        {
          code: "TC2",
          name: "Técnicas Cuantitativas II",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/tecnicas-cuantitativas-ii/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
            {
              label: "Bibliografía",
              resources: [
                {
                  name: "Operations Research: Applications and Algorithms — Winston",
                  note: true,
                },
                {
                  name: "Model Building in Mathematical Programming — Williams",
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
