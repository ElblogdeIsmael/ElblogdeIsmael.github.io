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
                {
                  name: "Temario",
                  href: "/Subjects/Second/EC/build/EC.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Temas",
              resources: [
                {
                  name: "Tema 1 · Introducción",
                  href: "/viewer/?file=Subjects/Second/EC/src/01_introduccion.md",
                  kind: "MD",
                },
                {
                  name: "Tema 2 · Representación de programas a nivel máquina",
                  href: "/viewer/?file=Subjects/Second/EC/src/02_nivel_maquina.md",
                  kind: "MD",
                },
                {
                  name: "Tema 3 · Unidad de control",
                  href: "/viewer/?file=Subjects/Second/EC/src/03_unidad_control.md",
                  kind: "MD",
                },
                {
                  name: "Tema 4 · Segmentación de cauce",
                  href: "/viewer/?file=Subjects/Second/EC/src/04_segmentacion.md",
                  kind: "MD",
                },
                {
                  name: "Tema 5 · Entrada/Salida",
                  href: "/viewer/?file=Subjects/Second/EC/src/05_entrada_salida.md",
                  kind: "MD",
                },
                {
                  name: "Tema 6 · Memoria",
                  href: "/viewer/?file=Subjects/Second/EC/src/06_memoria.md",
                  kind: "MD",
                },
                {
                  name: "Temario práctico",
                  href: "/viewer/?file=Subjects/Second/EC/src/07_practicas.md",
                  kind: "MD",
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
                  // La pagina /guia-docente de esta asignatura devuelve 404,
                  // pero la guia firmada si esta publicada. 2161125 es su
                  // codigo.
                  name: "Guía docente (2161125)",
                  href: "https://grados.ugr.es/sites/grados/default/public/guias-firmadas/2025-2026/2161125.pdf",
                  kind: "GUIA",
                },
                {
                  name: "Temario",
                  href: "/Subjects/Second/ED/build/ED.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Temas",
              resources: [
                {
                  name: "Tema 1 · Introducción a la eficiencia de los algoritmos",
                  href: "/viewer/?file=Subjects/Second/ED/src/01_eficiencia.md",
                  kind: "MD",
                },
                {
                  name: "Tema 2 · Abstracción de datos",
                  href: "/viewer/?file=Subjects/Second/ED/src/02_abstraccion.md",
                  kind: "MD",
                },
                {
                  name: "Tema 3 · Tipos de datos contenedores básicos",
                  href: "/viewer/?file=Subjects/Second/ED/src/03_contenedores_basicos.md",
                  kind: "MD",
                },
                {
                  name: "Tema 4 · Tipos de datos contenedores complejos",
                  href: "/viewer/?file=Subjects/Second/ED/src/04_contenedores_complejos.md",
                  kind: "MD",
                },
                {
                  name: "Seminarios",
                  href: "/viewer/?file=Subjects/Second/ED/src/05_seminarios.md",
                  kind: "MD",
                },
                {
                  name: "Temario práctico",
                  href: "/viewer/?file=Subjects/Second/ED/src/06_practicas.md",
                  kind: "MD",
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
                  href: "https://github.com/Ismael-Sallami/image-adt",
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
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/introduccion-al-marketing/guia-docente",
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
          // MACRO, no MAC: en cuarto MAC es Modelos Avanzados de Computacion y
          // la insignia de la ficha quedaba ambigua. Ver D-10.
          code: "MACRO",
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
            {
              label: "Ejercicios",
              resources: [
                {
                  name: "Ejercicios de Macroeconomía",
                  href: "/Subjects/Second/MACRO/Ejercicios_macroeconomia.pdf",
                  kind: "PDF",
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
                {
                  name: "Temario",
                  href: "/Subjects/Second/SO/build/SO.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Temas",
              resources: [
                {
                  name: "Tema 1 · Estructuras de sistemas operativos",
                  href: "/viewer/?file=Subjects/Second/SO/src/01_estructuras.md",
                  kind: "MD",
                },
                {
                  name: "Tema 2 · Procesos e hilos",
                  href: "/viewer/?file=Subjects/Second/SO/src/02_procesos.md",
                  kind: "MD",
                },
                {
                  name: "Tema 3 · Gestión de memoria",
                  href: "/viewer/?file=Subjects/Second/SO/src/03_memoria.md",
                  kind: "MD",
                },
                {
                  name: "Tema 4 · Gestión de archivos",
                  href: "/viewer/?file=Subjects/Second/SO/src/04_archivos.md",
                  kind: "MD",
                },
                {
                  name: "Tema 5 · Gestión de entradas y salidas",
                  href: "/viewer/?file=Subjects/Second/SO/src/05_entrada_salida.md",
                  kind: "MD",
                },
                {
                  name: "Tema 6 · Mecanismos de seguridad",
                  href: "/viewer/?file=Subjects/Second/SO/src/06_seguridad.md",
                  kind: "MD",
                },
                {
                  name: "Temario práctico",
                  href: "/viewer/?file=Subjects/Second/SO/src/07_practicas.md",
                  kind: "MD",
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
                {
                  name: "Temario",
                  href: "/Subjects/Second/ALGO/build/ALGO.pdf",
                  kind: "PDF",
                },
                {
                  name: "Prácticas",
                  href: "https://github.com/Ismael-Sallami/algorithm-design-techniques",
                  kind: "WEB",
                },
              ],
            },
            {
              label: "Temas",
              resources: [
                {
                  name: "Tema 1 · La eficiencia de los algoritmos",
                  href: "/viewer/?file=Subjects/Second/ALGO/src/01_eficiencia.md",
                  kind: "MD",
                },
                {
                  name: "Tema 2 · Divide y vencerás",
                  href: "/viewer/?file=Subjects/Second/ALGO/src/02_divide_venceras.md",
                  kind: "MD",
                },
                {
                  name: "Tema 3 · Algoritmos voraces",
                  href: "/viewer/?file=Subjects/Second/ALGO/src/03_voraces.md",
                  kind: "MD",
                },
                {
                  name: "Tema 4 · Exploración de grafos",
                  href: "/viewer/?file=Subjects/Second/ALGO/src/04_grafos.md",
                  kind: "MD",
                },
                {
                  name: "Tema 5 · Programación dinámica",
                  href: "/viewer/?file=Subjects/Second/ALGO/src/05_programacion_dinamica.md",
                  kind: "MD",
                },
                {
                  name: "Temario práctico",
                  href: "/viewer/?file=Subjects/Second/ALGO/src/06_practicas.md",
                  kind: "MD",
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
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/arquitectura-computadores/guia-docente",
                  kind: "GUIA",
                },
                {
                  name: "Temario",
                  href: "/Subjects/Second/AC/build/AC.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Temas",
              resources: [
                {
                  name: "Tema 1 · Arquitecturas paralelas: clasificación y prestaciones",
                  href: "/viewer/?file=Subjects/Second/AC/src/01_arquitecturas_paralelas.md",
                  kind: "MD",
                },
                {
                  name: "Tema 2 · Programación paralela",
                  href: "/viewer/?file=Subjects/Second/AC/src/02_programacion_paralela.md",
                  kind: "MD",
                },
                {
                  name: "Tema 3 · Paralelismo a nivel de hebra",
                  href: "/viewer/?file=Subjects/Second/AC/src/03_tlp.md",
                  kind: "MD",
                },
                {
                  name: "Tema 4 · Paralelismo a nivel de instrucción",
                  href: "/viewer/?file=Subjects/Second/AC/src/04_ilp.md",
                  kind: "MD",
                },
                {
                  name: "Tema 5 · Paralelismo de datos",
                  href: "/viewer/?file=Subjects/Second/AC/src/05_dlp.md",
                  kind: "MD",
                },
                {
                  name: "Problemas resueltos",
                  href: "/viewer/?file=Subjects/Second/AC/src/06_problemas.md",
                  kind: "MD",
                },
                {
                  name: "Temario práctico",
                  href: "/viewer/?file=Subjects/Second/AC/src/07_practicas.md",
                  kind: "MD",
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
          // CGRAL, no CG: en cuarto CG es Contabilidad de Gestion. Ver D-10.
          code: "CGRAL",
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
