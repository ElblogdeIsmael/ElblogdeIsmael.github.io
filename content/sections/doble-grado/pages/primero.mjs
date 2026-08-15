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
                {
                  name: "Temario",
                  href: "/Subjects/First/CAL/build/CAL.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Temas",
              resources: [
                {
                  name: "Tema 1 · Números reales y aritmética de ordenador",
                  href: "/viewer/?file=Subjects/First/CAL/src/01_reales.md",
                  kind: "MD",
                },
                {
                  name: "Tema 2 · Sucesiones y series",
                  href: "/viewer/?file=Subjects/First/CAL/src/02_sucesiones.md",
                  kind: "MD",
                },
                {
                  name: "Tema 3 · Continuidad y derivabilidad",
                  href: "/viewer/?file=Subjects/First/CAL/src/03_continuidad.md",
                  kind: "MD",
                },
                {
                  name: "Tema 4 · Integrabilidad",
                  href: "/viewer/?file=Subjects/First/CAL/src/04_integrabilidad.md",
                  kind: "MD",
                },
                {
                  name: "Tema 5 · Interpolación numérica",
                  href: "/viewer/?file=Subjects/First/CAL/src/05_interpolacion.md",
                  kind: "MD",
                },
                {
                  name: "Tema 6 · Resolución de sistemas de ecuaciones",
                  href: "/viewer/?file=Subjects/First/CAL/src/06_sistemas.md",
                  kind: "MD",
                },
                {
                  name: "Prácticas con Maxima",
                  href: "/viewer/?file=Subjects/First/CAL/src/07_practicas.md",
                  kind: "MD",
                },
              ],
            },
            {
              // Las dos obras que habia aqui no estan en la guia docente de la
              // asignatura, y la segunda ni siquiera existe con ese autor.
              // Sustituidas por la bibliografia que la guia si lista.
              label: "Bibliografía",
              resources: [
                {
                  name: "Cálculo. Una variable — Jon Rogawski",
                  note: true,
                },
                {
                  name: "Cálculo de una variable — James Stewart",
                  note: true,
                },
                {
                  name: "Análisis Numérico — Burden & Faires",
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
                {
                  name: "Temario",
                  href: "/Subjects/First/FFT/build/FFT.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Temas",
              resources: [
                {
                  name: "Tema 1 · Fundamentos de electromagnetismo",
                  href: "/viewer/?file=Subjects/First/FFT/src/01_electromagnetismo.md",
                  kind: "MD",
                },
                {
                  name: "Tema 2 · Teoría de circuitos. Corriente continua",
                  href: "/viewer/?file=Subjects/First/FFT/src/02_continua.md",
                  kind: "MD",
                },
                {
                  name: "Tema 3 · Teoría de circuitos. Corriente alterna",
                  href: "/viewer/?file=Subjects/First/FFT/src/03_alterna.md",
                  kind: "MD",
                },
                {
                  name: "Tema 4 · Dispositivos electrónicos",
                  href: "/viewer/?file=Subjects/First/FFT/src/04_dispositivos.md",
                  kind: "MD",
                },
                {
                  name: "Tema 5 · Fundamentos de electrónica digital",
                  href: "/viewer/?file=Subjects/First/FFT/src/05_digital.md",
                  kind: "MD",
                },
                {
                  name: "Tema 6 · Circuitos electrónicos básicos",
                  href: "/viewer/?file=Subjects/First/FFT/src/06_circuitos_basicos.md",
                  kind: "MD",
                },
                {
                  name: "Temario práctico",
                  href: "/viewer/?file=Subjects/First/FFT/src/07_practicas.md",
                  kind: "MD",
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
                {
                  name: "Temario",
                  href: "/Subjects/First/FP/build/FP.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Temas",
              resources: [
                {
                  name: "Tema 1 · Programación en C++: fundamentos",
                  href: "/viewer/?file=Subjects/First/FP/src/01_fundamentos.md",
                  kind: "MD",
                },
                {
                  name: "Tema 2 · Estructuras de control",
                  href: "/viewer/?file=Subjects/First/FP/src/02_control.md",
                  kind: "MD",
                },
                {
                  name: "Tema 3 · Funciones",
                  href: "/viewer/?file=Subjects/First/FP/src/03_funciones.md",
                  kind: "MD",
                },
                {
                  name: "Tema 4 · Registros, vectores y matrices",
                  href: "/viewer/?file=Subjects/First/FP/src/04_datos_compuestos.md",
                  kind: "MD",
                },
                {
                  name: "Tema 5 · Clases",
                  href: "/viewer/?file=Subjects/First/FP/src/05_clases.md",
                  kind: "MD",
                },
                {
                  name: "Tema 6 · Recursividad",
                  href: "/viewer/?file=Subjects/First/FP/src/06_recursividad.md",
                  kind: "MD",
                },
                {
                  name: "Temario práctico",
                  href: "/viewer/?file=Subjects/First/FP/src/07_practicas.md",
                  kind: "MD",
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
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/tecnologia-y-organizacion-computadores/guia-docente",
                  kind: "GUIA",
                },
                {
                  name: "Temario",
                  href: "/Subjects/First/TOC/build/TOC.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Temas",
              resources: [
                {
                  name: "Tema 1 · Introducción",
                  href: "/viewer/?file=Subjects/First/TOC/src/01_introduccion.md",
                  kind: "MD",
                },
                {
                  name: "Tema 2 · Unidades funcionales de un computador",
                  href: "/viewer/?file=Subjects/First/TOC/src/02_unidades_funcionales.md",
                  kind: "MD",
                },
                {
                  name: "Tema 3 · Estudio de sistemas combinacionales",
                  href: "/viewer/?file=Subjects/First/TOC/src/03_combinacionales.md",
                  kind: "MD",
                },
                {
                  name: "Tema 4 · Estudio de sistemas secuenciales",
                  href: "/viewer/?file=Subjects/First/TOC/src/04_secuenciales.md",
                  kind: "MD",
                },
                {
                  name: "Tema 5 · Nivel de transferencia entre registros",
                  href: "/viewer/?file=Subjects/First/TOC/src/05_rtl.md",
                  kind: "MD",
                },
                {
                  name: "Seminarios y prácticas",
                  href: "/viewer/?file=Subjects/First/TOC/src/06_practicas.md",
                  kind: "MD",
                },
              ],
            },
            {
              // Patterson y Hennessy no esta en la guia docente de esta
              // asignatura. Sustituido por la bibliografia fundamental que la
              // guia si lista; Tanenbaum se queda, que si aparece entre la
              // complementaria.
              label: "Bibliografía",
              resources: [
                {
                  name: "Fundamentos de diseño lógico y de computadores — Mano & Kime",
                  note: true,
                },
                {
                  name: "Computer Organization and Architecture — Stallings",
                  note: true,
                },
                {
                  name: "Conceptos de Informática. Problemas — Prieto & Prieto",
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
                {
                  name: "Temario",
                  href: "/Subjects/First/FS/build/FS.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Temas",
              resources: [
                {
                  name: "Tema 1 · Sistema de cómputo",
                  href: "/viewer/?file=Subjects/First/FS/src/01_sistema_computo.md",
                  kind: "MD",
                },
                {
                  name: "Tema 2 · Introducción a los sistemas operativos",
                  href: "/viewer/?file=Subjects/First/FS/src/02_sistemas_operativos.md",
                  kind: "MD",
                },
                {
                  name: "Tema 3 · Compilación y enlazado de programas",
                  href: "/viewer/?file=Subjects/First/FS/src/03_compilacion.md",
                  kind: "MD",
                },
                {
                  name: "Tema 4 · Sistemas de archivos y bases de datos",
                  href: "/viewer/?file=Subjects/First/FS/src/04_archivos_bd.md",
                  kind: "MD",
                },
                {
                  name: "Tema 5 · Generación y depuración de aplicaciones",
                  href: "/viewer/?file=Subjects/First/FS/src/05_generacion_depuracion.md",
                  kind: "MD",
                },
                {
                  name: "Temario práctico",
                  href: "/viewer/?file=Subjects/First/FS/src/06_practicas.md",
                  kind: "MD",
                },
              ],
            },
            {
              // Las dos obras que habia aqui (Sommerville y el Pragmatic
              // Programmer) no estan en la guia docente de esta asignatura:
              // son de ingenieria del software. Sustituidas por la
              // bibliografia fundamental que la guia si lista.
              label: "Bibliografía",
              resources: [
                {
                  name: "Operating Systems: Internals and Design Principles — Stallings",
                  note: true,
                },
                {
                  name: "Introducción a la Informática — Prieto, Lloris & Torres",
                  note: true,
                },
                {
                  name: "Learning the bash Shell — Newham & Rosenblatt",
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
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/historia-del-desarrollo-economico-mundial-contemporaneo/guia-docente",
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
                  // La pagina /guia-docente de esta asignatura devuelve 404,
                  // pero la guia firmada si esta publicada. 216111B es su
                  // codigo.
                  name: "Guía docente (216111B)",
                  href: "https://grados.ugr.es/sites/grados/default/public/guias-firmadas/2025-2026/216111B.pdf",
                  kind: "GUIA",
                },
                {
                  name: "Temario",
                  href: "/Subjects/First/MP/build/MP.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Temas",
              resources: [
                {
                  name: "Tema 1 · Punteros y memoria dinámica",
                  href: "/viewer/?file=Subjects/First/MP/src/01_punteros.md",
                  kind: "MD",
                },
                {
                  name: "Tema 2 · Funciones",
                  href: "/viewer/?file=Subjects/First/MP/src/02_funciones.md",
                  kind: "MD",
                },
                {
                  name: "Tema 3 · Tipos de datos abstractos: clases",
                  href: "/viewer/?file=Subjects/First/MP/src/03_clases.md",
                  kind: "MD",
                },
                {
                  name: "Tema 4 · Gestión de E/S. Ficheros",
                  href: "/viewer/?file=Subjects/First/MP/src/04_ficheros.md",
                  kind: "MD",
                },
                {
                  name: "Seminarios",
                  href: "/viewer/?file=Subjects/First/MP/src/05_seminarios.md",
                  kind: "MD",
                },
                {
                  name: "Temario práctico",
                  href: "/viewer/?file=Subjects/First/MP/src/06_practicas.md",
                  kind: "MD",
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
                {
                  name: "Temario",
                  href: "/Subjects/First/ALG/build/ALG.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Temas",
              resources: [
                {
                  name: "Bloque 1 · Aritmética entera y modular",
                  href: "/viewer/?file=Subjects/First/ALG/src/01_aritmetica.md",
                  kind: "MD",
                },
                {
                  name: "Bloque 2 · Combinatoria",
                  href: "/viewer/?file=Subjects/First/ALG/src/02_combinatoria.md",
                  kind: "MD",
                },
                {
                  name: "Bloque 3 · Sistemas de ecuaciones lineales y matrices",
                  href: "/viewer/?file=Subjects/First/ALG/src/03_sistemas_matrices.md",
                  kind: "MD",
                },
                {
                  name: "Bloque 4 · Espacios vectoriales",
                  href: "/viewer/?file=Subjects/First/ALG/src/04_espacios_vectoriales.md",
                  kind: "MD",
                },
                {
                  name: "Bloque 5 · Aplicaciones lineales y diagonalización",
                  href: "/viewer/?file=Subjects/First/ALG/src/05_aplicaciones_lineales.md",
                  kind: "MD",
                },
                {
                  name: "Seminario · Conjuntos, aplicaciones y relaciones",
                  href: "/viewer/?file=Subjects/First/ALG/src/06_seminario.md",
                  kind: "MD",
                },
                {
                  name: "Relación de problemas",
                  href: "/viewer/?file=Subjects/First/ALG/src/07_problemas.md",
                  kind: "MD",
                },
              ],
            },
            {
              // Lay no esta en la guia docente de la asignatura. Sustituido por
              // la bibliografia fundamental que la guia si lista; Strang se
              // queda, con el titulo con el que aparece alli.
              label: "Bibliografía",
              resources: [
                {
                  name: "Álgebra lineal con métodos elementales — Merino & Santos",
                  note: true,
                },
                {
                  name: "Álgebra lineal y sus aplicaciones — Strang",
                  note: true,
                },
                {
                  name: "Matemáticas discreta y combinatoria — Grimaldi",
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
