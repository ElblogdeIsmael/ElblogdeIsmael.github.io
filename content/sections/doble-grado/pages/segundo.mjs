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
                  name: "Computer Organization and Architecture · Stallings",
                  note: true,
                },
                {
                  name: "Computer Systems: A Programmer's Perspective · Bryant & O'Hallaron",
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
                  name: "Estructuras de Datos en C++ · Rodriguez‑Sánchez et al.",
                  note: true,
                },
                {
                  name: "Data Abstraction & Problem Solving with C++ · Carrano",
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
                {
                  name: "Temario",
                  href: "/Subjects/Second/IOF/build/IOF.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Temas",
              resources: [
                {
                  name: "Tema 1 · Conceptos básicos",
                  href: "/viewer/?file=Subjects/Second/IOF/src/01_conceptos.md",
                  kind: "MD",
                },
                {
                  name: "Tema 2 · Leyes simples",
                  href: "/viewer/?file=Subjects/Second/IOF/src/02_leyes_simples.md",
                  kind: "MD",
                },
                {
                  name: "Tema 3 · Operaciones a corto plazo",
                  href: "/viewer/?file=Subjects/Second/IOF/src/03_corto_plazo.md",
                  kind: "MD",
                },
                {
                  name: "Tema 4 · Leyes compuestas y continuas",
                  href: "/viewer/?file=Subjects/Second/IOF/src/04_leyes_compuestas.md",
                  kind: "MD",
                },
                {
                  name: "Tema 5 · Valoración de rentas",
                  href: "/viewer/?file=Subjects/Second/IOF/src/05_rentas.md",
                  kind: "MD",
                },
                {
                  name: "Tema 6 · Préstamos",
                  href: "/viewer/?file=Subjects/Second/IOF/src/06_prestamos.md",
                  kind: "MD",
                },
              ],
            },
            {
              label: "Bibliografía",
              // La guia docente oficial solo recoge el manual de Frias-Aceituno,
              // en sus ediciones espanola e inglesa. Los dos titulos que habia
              // aqui, Brigham & Houston y Brealey & Myers, no aparecen en ella.
              resources: [
                {
                  name: "Introducción a las Operaciones Financieras · Frías‑Aceituno",
                  note: true,
                },
                {
                  name: "Introduction to Financial Operations · Frías‑Aceituno",
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
                {
                  name: "Temario",
                  href: "/Subjects/Second/IM/build/IM.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Temas",
              resources: [
                {
                  name: "Tema 1 · Definición y procesos de marketing",
                  href: "/viewer/?file=Subjects/Second/IM/src/01_definicion.md",
                  kind: "MD",
                },
                {
                  name: "Tema 2 · El análisis del entorno y la competencia",
                  href: "/viewer/?file=Subjects/Second/IM/src/02_entorno.md",
                  kind: "MD",
                },
                {
                  name: "Tema 3 · Fundamentos de investigación comercial",
                  href: "/viewer/?file=Subjects/Second/IM/src/03_investigacion.md",
                  kind: "MD",
                },
                {
                  name: "Tema 4 · El comportamiento del consumidor",
                  href: "/viewer/?file=Subjects/Second/IM/src/04_consumidor.md",
                  kind: "MD",
                },
                {
                  name: "Tema 5 · Segmentación y posicionamiento",
                  href: "/viewer/?file=Subjects/Second/IM/src/05_segmentacion.md",
                  kind: "MD",
                },
                {
                  name: "Tema 6 · Políticas de marketing",
                  href: "/viewer/?file=Subjects/Second/IM/src/06_politicas.md",
                  kind: "MD",
                },
                {
                  name: "Temario práctico",
                  href: "/viewer/?file=Subjects/Second/IM/src/07_practicas.md",
                  kind: "MD",
                },
              ],
            },
            {
              label: "Bibliografía",
              // La guia docente oficial no recoge ni a Lamb, Hair & McDaniel ni
              // el Marketing Management de Kotler & Keller en ingles. Su
              // bibliografia fundamental es la que queda aqui.
              resources: [
                {
                  name: "Introducción al marketing · Alonso Dos Santos (coord.)",
                  note: true,
                },
                {
                  name: "Principios de marketing · Kotler & Armstrong",
                  note: true,
                },
                {
                  name: "Dirección de marketing · Kotler & Keller",
                  note: true,
                },
                {
                  name: "Fundamentos de marketing · Santesmases et al.",
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
                {
                  name: "Temario",
                  href: "/Subjects/Second/MACRO/build/MACRO.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Temas",
              resources: [
                {
                  name: "Tema 1 · Introducción",
                  href: "/viewer/?file=Subjects/Second/MACRO/src/01_introduccion.md",
                  kind: "MD",
                },
                {
                  name: "Tema 2 · El sector real en una economía cerrada",
                  href: "/viewer/?file=Subjects/Second/MACRO/src/02_sector_real.md",
                  kind: "MD",
                },
                {
                  name: "Tema 3 · Los mercados financieros",
                  href: "/viewer/?file=Subjects/Second/MACRO/src/03_mercados_financieros.md",
                  kind: "MD",
                },
                {
                  name: "Tema 4 · El modelo IS-LM",
                  href: "/viewer/?file=Subjects/Second/MACRO/src/04_islm.md",
                  kind: "MD",
                },
                {
                  name: "Tema 5 · La economía abierta y Mundell-Fleming",
                  href: "/viewer/?file=Subjects/Second/MACRO/src/05_economia_abierta.md",
                  kind: "MD",
                },
                {
                  name: "Tema 6 · Mercado de trabajo y oferta agregada",
                  href: "/viewer/?file=Subjects/Second/MACRO/src/06_mercado_trabajo.md",
                  kind: "MD",
                },
                {
                  name: "Tema 7 · Oferta y demanda agregadas. Curva de Phillips",
                  href: "/viewer/?file=Subjects/Second/MACRO/src/07_oferta_demanda.md",
                  kind: "MD",
                },
                {
                  name: "Tema 8 · El crecimiento económico",
                  href: "/viewer/?file=Subjects/Second/MACRO/src/08_crecimiento.md",
                  kind: "MD",
                },
              ],
            },
            {
              // Blanchard esta en la guia, con la edicion espanola; Mankiw
              // solo en la complementaria. Se anaden Dornbusch, que es la otra
              // obra de teoria fundamental, y el cuaderno de ejercicios.
              label: "Bibliografía",
              resources: [
                {
                  name: "Macroeconomía · Blanchard",
                  note: true,
                },
                {
                  name: "Macroeconomía · Dornbusch, Fischer & Startz",
                  note: true,
                },
                {
                  name: "Macroeconomía. Cuestiones y ejercicios · Sánchez Campillo (coord.)",
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
                  name: "Operating System Concepts · Silberschatz, Galvin & Gagne",
                  note: true,
                },
                {
                  name: "Modern Operating Systems · Tanenbaum",
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
                {
                  name: "Temario",
                  href: "/Subjects/Second/TC1/build/TC1.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Temas",
              resources: [
                {
                  name: "Tema 1 · Variables estadísticas unidimensionales",
                  href: "/viewer/?file=Subjects/Second/TC1/src/01_unidimensionales.md",
                  kind: "MD",
                },
                {
                  name: "Tema 2 · Variables estadísticas bidimensionales",
                  href: "/viewer/?file=Subjects/Second/TC1/src/02_bidimensionales.md",
                  kind: "MD",
                },
                {
                  name: "Tema 3 · Números índices",
                  href: "/viewer/?file=Subjects/Second/TC1/src/03_indices.md",
                  kind: "MD",
                },
                {
                  name: "Tema 4 · Series cronológicas",
                  href: "/viewer/?file=Subjects/Second/TC1/src/04_series.md",
                  kind: "MD",
                },
                {
                  name: "Tema 5 · Probabilidad",
                  href: "/viewer/?file=Subjects/Second/TC1/src/05_probabilidad.md",
                  kind: "MD",
                },
                {
                  name: "Tema 6 · Variables aleatorias",
                  href: "/viewer/?file=Subjects/Second/TC1/src/06_variables_aleatorias.md",
                  kind: "MD",
                },
                {
                  name: "Tema 7 · Distribuciones discretas",
                  href: "/viewer/?file=Subjects/Second/TC1/src/07_discretas.md",
                  kind: "MD",
                },
                {
                  name: "Temario práctico",
                  href: "/viewer/?file=Subjects/Second/TC1/src/08_practicas.md",
                  kind: "MD",
                },
              ],
            },
            {
              // Las dos obras que habia aqui son de investigacion operativa y
              // metodos cuantitativos para la gestion, no de estadistica
              // descriptiva y probabilidad, y no estan en la guia docente.
              // Sustituidas por la bibliografia fundamental que si lista.
              label: "Bibliografía",
              resources: [
                {
                  name: "Técnicas Cuantitativas I · Amor Pulido",
                  note: true,
                },
                {
                  name: "Estadística descriptiva y cálculo de probabilidades · Castillo & Guijarro",
                  note: true,
                },
                {
                  name: "Estadística para administración y economía · Newbold & Carlson",
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
                  name: "Introduction to Algorithms · Cormen, Leiserson, Rivest, Stein",
                  note: true,
                },
                {
                  name: "Algorithm Design · Kleinberg & Tardos",
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
                  name: "Computer Organization and Design · Patterson & Hennessy",
                  note: true,
                },
                {
                  name: "Structured Computer Organization · Tanenbaum",
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
                {
                  name: "Temario",
                  href: "/Subjects/Second/CGRAL/build/CGRAL.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Temas",
              resources: [
                {
                  name: "Tema 1 · La contabilidad",
                  href: "/viewer/?file=Subjects/Second/CGRAL/src/01_contabilidad.md",
                  kind: "MD",
                },
                {
                  name: "Tema 2 · La representación contable",
                  href: "/viewer/?file=Subjects/Second/CGRAL/src/02_representacion.md",
                  kind: "MD",
                },
                {
                  name: "Tema 3 · El ciclo contable",
                  href: "/viewer/?file=Subjects/Second/CGRAL/src/03_ciclo.md",
                  kind: "MD",
                },
                {
                  name: "Tema 4 · Normalización y regulación contable en España",
                  href: "/viewer/?file=Subjects/Second/CGRAL/src/04_normalizacion.md",
                  kind: "MD",
                },
                {
                  name: "Temario práctico",
                  href: "/viewer/?file=Subjects/Second/CGRAL/src/05_practicas.md",
                  kind: "MD",
                },
              ],
            },
            {
              label: "Bibliografía",
              // La guia docente oficial no recoge ni a Valencia Gradilla ni a
              // Libby & Short. Su bibliografia fundamental es el manual de
              // teoria y el libro de practicas de Rodriguez Ariza y otras.
              resources: [
                {
                  name: "Introducción a la Contabilidad. Manual de teoría · Rodríguez Ariza, López Pérez y Pérez López",
                  note: true,
                },
                {
                  name: "Introducción a la Contabilidad. Libro de prácticas · Rodríguez Ariza, López Pérez y Pérez López",
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
                {
                  name: "Temario",
                  href: "/Subjects/Second/DC/build/DC.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Temas",
              resources: [
                {
                  name: "Tema 1 · Mercado y demanda",
                  href: "/viewer/?file=Subjects/Second/DC/src/01_mercado.md",
                  kind: "MD",
                },
                {
                  name: "Tema 2 · Decisiones sobre producto",
                  href: "/viewer/?file=Subjects/Second/DC/src/02_producto.md",
                  kind: "MD",
                },
                {
                  name: "Tema 3 · Decisiones sobre precio",
                  href: "/viewer/?file=Subjects/Second/DC/src/03_precio.md",
                  kind: "MD",
                },
                {
                  name: "Tema 4 · Decisiones sobre distribución",
                  href: "/viewer/?file=Subjects/Second/DC/src/04_distribucion.md",
                  kind: "MD",
                },
                {
                  name: "Tema 5 · Decisiones sobre comunicación",
                  href: "/viewer/?file=Subjects/Second/DC/src/05_comunicacion.md",
                  kind: "MD",
                },
                {
                  name: "Tema 6 · Proceso de planificación de marketing",
                  href: "/viewer/?file=Subjects/Second/DC/src/06_planificacion.md",
                  kind: "MD",
                },
                {
                  name: "Temario práctico",
                  href: "/viewer/?file=Subjects/Second/DC/src/07_practicas.md",
                  kind: "MD",
                },
              ],
            },
            {
              label: "Bibliografía",
              // La guia docente oficial no recoge a Walker, Mullins & Boyd, y
              // los manuales de Kotler figuran en su edicion espanola. Esta es
              // su bibliografia fundamental.
              resources: [
                {
                  name: "Principios de marketing · Kotler & Armstrong",
                  note: true,
                },
                {
                  name: "Dirección de marketing · Kotler & Keller",
                  note: true,
                },
                {
                  name: "Principios de marketing · Esteban Talaya",
                  note: true,
                },
                {
                  name: "Introducción al marketing · Alonso Dos Santos",
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
                {
                  name: "Temario",
                  href: "/Subjects/Second/LMD/build/LMD.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Temas",
              resources: [
                {
                  name: "Bloque 1 · Álgebras de Boole y funciones booleanas",
                  href: "/viewer/?file=Subjects/Second/LMD/src/01_booleanas.md",
                  kind: "MD",
                },
                {
                  name: "Bloque 2 · Lógica proposicional",
                  href: "/viewer/?file=Subjects/Second/LMD/src/02_proposicional.md",
                  kind: "MD",
                },
                {
                  name: "Bloque 3 · Lenguajes de primer orden",
                  href: "/viewer/?file=Subjects/Second/LMD/src/03_primer_orden.md",
                  kind: "MD",
                },
                {
                  name: "Bloque 4 · Unificación y resolución",
                  href: "/viewer/?file=Subjects/Second/LMD/src/04_unificacion.md",
                  kind: "MD",
                },
                {
                  name: "Bloque 5 · Inducción y recurrencia",
                  href: "/viewer/?file=Subjects/Second/LMD/src/05_induccion.md",
                  kind: "MD",
                },
                {
                  name: "Bloque 6 · Grafos y árboles",
                  href: "/viewer/?file=Subjects/Second/LMD/src/06_grafos.md",
                  kind: "MD",
                },
                {
                  name: "Relación de problemas",
                  href: "/viewer/?file=Subjects/Second/LMD/src/07_problemas.md",
                  kind: "MD",
                },
              ],
            },
            {
              // Las dos entradas que habia aqui eran el mismo libro de Rosen
              // repetido en dos idiomas. Sustituidas por la bibliografia
              // fundamental de la guia.
              label: "Bibliografía",
              resources: [
                {
                  name: "Lógica para informáticos · García Miranda",
                  note: true,
                },
                {
                  name: "Matemática discreta · Biggs",
                  note: true,
                },
                {
                  name: "Matemática discreta y sus aplicaciones · Rosen",
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
                {
                  name: "Temario",
                  href: "/Subjects/Second/TC2/build/TC2.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Temas",
              resources: [
                {
                  name: "Tema 1 · Modelos continuos, muestra y estadísticos",
                  href: "/viewer/?file=Subjects/Second/TC2/src/01_introduccion.md",
                  kind: "MD",
                },
                {
                  name: "Tema 2 · Estimación puntual de parámetros",
                  href: "/viewer/?file=Subjects/Second/TC2/src/02_estimacion_puntual.md",
                  kind: "MD",
                },
                {
                  name: "Temas 3 y 4 · Distribuciones de los estadísticos muestrales",
                  href: "/viewer/?file=Subjects/Second/TC2/src/03_distribuciones_muestrales.md",
                  kind: "MD",
                },
                {
                  name: "Temas 5 y 6 · Intervalos de confianza",
                  href: "/viewer/?file=Subjects/Second/TC2/src/04_intervalos.md",
                  kind: "MD",
                },
                {
                  name: "Tema 7 · Contraste de hipótesis",
                  href: "/viewer/?file=Subjects/Second/TC2/src/05_contrastes.md",
                  kind: "MD",
                },
                {
                  name: "Tema 8 · Tests no paramétricos",
                  href: "/viewer/?file=Subjects/Second/TC2/src/06_no_parametricos.md",
                  kind: "MD",
                },
                {
                  name: "Temario práctico",
                  href: "/viewer/?file=Subjects/Second/TC2/src/07_practicas.md",
                  kind: "MD",
                },
              ],
            },
            {
              // Las dos obras que habia aqui son de investigacion operativa y
              // programacion matematica, no de inferencia estadistica, y no
              // estan en la guia docente. Sustituidas por las que si lista.
              label: "Bibliografía",
              resources: [
                {
                  name: "Técnicas cuantitativas para la inferencia · Herrerías et al.",
                  note: true,
                },
                {
                  name: "Probabilidad y estadística: aplicaciones y métodos · Canavos",
                  note: true,
                },
                {
                  name: "Estadística aplicada a los negocios y la economía · Lind et al.",
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
