/**
 * Tercer Curso - Doble Grado en Ingenieria Informatica y ADE.
 *
 * 13 subjects across 2 semesters.
 * Add a subject by pushing an entry into the matching group.
 *
 * @author Ismael Sallami Moreno
 * @type {import("../../../types.d.ts").Page}
 */
export default {
  slug: "tercero",
  index: "03",
  title: "Tercer",
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
          code: "FR",
          name: "Fundamentos de Redes",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/fundamentos-redes/guia-docente",
                  kind: "GUIA",
                },
                {
                  name: "Temario",
                  href: "/Subjects/Third/FR/Temario/build/FR.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Temas",
              resources: [
                {
                  name: "Tema 1 · Introducción a los fundamentos de redes",
                  href: "/viewer/?file=Subjects/Third/FR/Temario/src/01_introduccion.md",
                  kind: "MD",
                },
                {
                  name: "Tema 2 · Capa de red",
                  href: "/viewer/?file=Subjects/Third/FR/Temario/src/02_capa_de_red.md",
                  kind: "MD",
                },
                {
                  name: "Tema 3 · Capa de transporte",
                  href: "/viewer/?file=Subjects/Third/FR/Temario/src/03_capa_de_transporte.md",
                  kind: "MD",
                },
                {
                  name: "Tema 4 · Seguridad en redes",
                  href: "/viewer/?file=Subjects/Third/FR/Temario/src/04_seguridad.md",
                  kind: "MD",
                },
                {
                  name: "Tema 5 · Capa de aplicación",
                  href: "/viewer/?file=Subjects/Third/FR/Temario/src/05_capa_de_aplicacion.md",
                  kind: "MD",
                },
                {
                  name: "Seminarios y prácticas de laboratorio",
                  href: "/viewer/?file=Subjects/Third/FR/Temario/src/06_practicas.md",
                  kind: "MD",
                },
              ],
            },
            {
              label: "Preguntas de Examen",
              resources: [
                {
                  name: "Preguntas resueltas paso a paso",
                  href: "/Subjects/Third/FR/Teoria/Preguntas_Examen_Teoria/build/preguntas.pdf",
                  kind: "PDF",
                },
                {
                  name: "Preguntas de otros exámenes",
                  href: "/Subjects/Third/FR/TestsFR/Preguntas_Teoria_Otros_Examenes/build/preguntas.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Tipo Test Práctica",
              resources: [
                {
                  name: "Test Práctica 1",
                  href: "/Subjects/Third/FR/TestsFR/TestPractica1.html",
                  kind: "HTML",
                },
                {
                  name: "Test Práctica 2",
                  href: "/Subjects/Third/FR/TestsFR/TestPractica2.html",
                  kind: "HTML",
                },
                {
                  name: "Test Práctica 3",
                  href: "/Subjects/Third/FR/TestsFR/TestPractica3.html",
                  kind: "HTML",
                },
              ],
            },
            {
              label: "Resúmenes",
              resources: [
                {
                  name: "Tema 1 y 2",
                  href: "/Subjects/Third/FR/Resumenes/ETSIIT/build/tema1_y_tema2.pdf",
                  kind: "PDF",
                },
                {
                  name: "Tema 3",
                  href: "/Subjects/Third/FR/Resumenes/ETSIIT/build/tema3.pdf",
                  kind: "PDF",
                },
                {
                  name: "Tema 4",
                  href: "/Subjects/Third/FR/Resumenes/ETSIIT/build/tema4.pdf",
                  kind: "PDF",
                },
                {
                  name: "Tema 5",
                  href: "/Subjects/Third/FR/Resumenes/ETSIIT/build/tema5.pdf",
                  kind: "PDF",
                },
              ],
            },
          ],
        },
        {
          code: "PDOO",
          name: "Programación y Diseño Orientado a Objetos",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/programacion-y-diseno-orientado-objetos/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
            {
              label: "Prácticas · Proyecto Irrgarten",
              resources: [
                {
                  name: "Código del juego, en Java y en Ruby",
                  href: "https://github.com/Ismael-Sallami/irrgarten",
                  kind: "WEB",
                },
              ],
            },
            {
              label: "Relaciones de Problemas",
              resources: [
                {
                  name: "Relación 1",
                  href: "/Subjects/Third/PDOO/Teoria/RelacionesEjercicios/Solt1/ETSIIT/build/solt1.pdf",
                  kind: "PDF",
                },
                {
                  name: "Relación 2",
                  href: "/Subjects/Third/PDOO/Teoria/RelacionesEjercicios/Solt2/ETSIIT/build/solt2.pdf",
                  kind: "PDF",
                },
                {
                  name: "Relación 3",
                  href: "/Subjects/Third/PDOO/Teoria/RelacionesEjercicios/Solt3/ETSIIT/build/solt3.pdf",
                  kind: "PDF",
                },
                {
                  name: "Atributos y métodos",
                  href: "/Subjects/Third/PDOO/Teoria/otros/relacionEjercicios/relacionAtributo_metodos_PDOO.pdf",
                  kind: "PDF",
                },
                {
                  name: "Métodos de instancia y de clase en Java y Ruby",
                  href: "/Subjects/Third/PDOO/Teoria/otros/extraINfo/diferenciasEntremetodosJAVAruby.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Exámenes",
              resources: [
                {
                  name: "Parcial Prácticas 1",
                  href: "/Subjects/Third/PDOO/Examenes/parcial1Practicas.pdf",
                  kind: "PDF",
                },
                {
                  name: "Parcial Prácticas 2 · grupo A1",
                  href: "/Subjects/Third/PDOO/Examenes/parcial2Practicas.pdf",
                  kind: "PDF",
                },
                {
                  name: "Parcial Prácticas 2 · grupo A2",
                  href: "/Subjects/Third/PDOO/Examenes/examenPDOOpracticas2_grupoA2.pdf",
                  kind: "PDF",
                },
                {
                  name: "Parcial Teoría",
                  href: "/Subjects/Third/PDOO/Examenes/parcial1Teoria.pdf",
                  kind: "PDF",
                },
              ],
            },
          ],
        },
        {
          code: "ECO",
          name: "Econometría",
          blocks: [
            {
              label: "Prácticas",
              resources: [
                {
                  name: "Base de Datos",
                  href: "https://github.com/Ismael-Sallami/econometric-model/blob/main/data/obesity-dataset.csv",
                  kind: "WEB",
                },
                {
                  name: "Prácticas",
                  href: "/Subjects/Third/ECO/Practicas/FCCEE/build/Practica.pdf",
                  kind: "PDF",
                },
                {
                  name: "Archivos Modelo Econométrico",
                  href: "https://github.com/Ismael-Sallami/econometric-model",
                  kind: "WEB",
                },
              ],
            },
            {
              label: "Teoría",
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/econometria/guia-docente",
                  kind: "GUIA",
                },
                {
                  name: "Temario",
                  href: "/Subjects/Third/ECO/Temario/build/ECO.pdf",
                  kind: "PDF",
                },
                {
                  name: "Formulario y resumen",
                  href: "/Subjects/Third/ECO/Formulario/FCCEE/build/Formulario.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Temas",
              resources: [
                {
                  name: "Tema 1 · Introducción a la econometría",
                  href: "/viewer/?file=Subjects/Third/ECO/Temario/src/01_introduccion.md",
                  kind: "MD",
                },
                {
                  name: "Tema 2 · El modelo lineal I",
                  href: "/viewer/?file=Subjects/Third/ECO/Temario/src/02_modelo_lineal_1.md",
                  kind: "MD",
                },
                {
                  name: "Tema 3 · El modelo lineal II",
                  href: "/viewer/?file=Subjects/Third/ECO/Temario/src/03_modelo_lineal_2.md",
                  kind: "MD",
                },
                {
                  name: "Tema 4 · Multicolinealidad",
                  href: "/viewer/?file=Subjects/Third/ECO/Temario/src/04_multicolinealidad.md",
                  kind: "MD",
                },
                {
                  name: "Tema 5 · Heteroscedasticidad",
                  href: "/viewer/?file=Subjects/Third/ECO/Temario/src/05_heteroscedasticidad.md",
                  kind: "MD",
                },
                {
                  name: "Tema 6 · Autocorrelación",
                  href: "/viewer/?file=Subjects/Third/ECO/Temario/src/06_autocorrelacion.md",
                  kind: "MD",
                },
              ],
            },
          ],
        },
        {
          code: "CF1",
          name: "Contabilidad Financiera I",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/contabilidad-financiera-i/guia-docente",
                  kind: "GUIA",
                },
                {
                  name: "Temario",
                  href: "/Subjects/Third/CF1/Temario/build/CF1.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Temas",
              resources: [
                {
                  name: "Tema 1 · Normalización contable y PGC",
                  href: "/viewer/?file=Subjects/Third/CF1/Temario/src/01_normalizacion.md",
                  kind: "MD",
                },
                {
                  name: "Tema 2 · Existencias: compras y ventas",
                  href: "/viewer/?file=Subjects/Third/CF1/Temario/src/02_existencias.md",
                  kind: "MD",
                },
                {
                  name: "Tema 3 · Deudores y acreedores de la actividad habitual",
                  href: "/viewer/?file=Subjects/Third/CF1/Temario/src/03_deudores_acreedores.md",
                  kind: "MD",
                },
                {
                  name: "Tema 4 · Otras operaciones de la actividad corriente",
                  href: "/viewer/?file=Subjects/Third/CF1/Temario/src/04_actividad_corriente.md",
                  kind: "MD",
                },
                {
                  name: "Tema 5 · Inmovilizado material",
                  href: "/viewer/?file=Subjects/Third/CF1/Temario/src/05_inmovilizado_material.md",
                  kind: "MD",
                },
                {
                  name: "Tema 6 · Inmovilizado intangible",
                  href: "/viewer/?file=Subjects/Third/CF1/Temario/src/06_inmovilizado_intangible.md",
                  kind: "MD",
                },
              ],
            },
            {
              label: "Prácticas",
              resources: [
                {
                  name: "Relación de Ejercicios · Tema 2",
                  href: "/Subjects/Third/CF1/Practica/Tema2/EjerciciosPropuestos/FCCEE/build/EjPropt2.pdf",
                  kind: "PDF",
                },
                {
                  name: "Relación de Ejercicios · Tema 3",
                  href: "/Subjects/Third/CF1/Practica/Tema3/EjerciciosPropuestos/FCCEE/build/EjPropt3.pdf",
                  kind: "PDF",
                },
                {
                  name: "Relación de Ejercicios · Tema 4",
                  href: "/Subjects/Third/CF1/Practica/Tema4/EjerciciosPropuestos/FCCEE/build/EjPropT4.pdf",
                  kind: "PDF",
                },
                {
                  name: "Ejercicios Resueltos Adicionales · Tema 4",
                  href: "/viewer/?file=Subjects/Third/CF1/Practica/Tema4/EjerciciosPropuestos/EjerciciosResueltosAdicionales.md",
                  kind: "MD",
                },
                {
                  name: "Relación de Ejercicios · Tema 5",
                  href: "/Subjects/Third/CF1/Practica/Tema5/EjerciciosPropuestos/FCCEE/build/EjerciciosPropuestost5.pdf",
                  kind: "PDF",
                },
                {
                  name: "Relación de Ejercicios · Tema 6",
                  href: "/Subjects/Third/CF1/Practica/Tema6/EjerciciosPropuestos/FCCEE/build/EjerciciosPropuestost6.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Tests",
              resources: [
                {
                  name: "Test Tema 1",
                  href: "/Subjects/Third/CF1/Tests/testT1Libro.html",
                  kind: "HTML",
                },
                {
                  name: "Test Tema 1 · ampliado",
                  href: "/Subjects/Third/CF1/Tests/test-tema1.html",
                  kind: "HTML",
                },
                {
                  name: "Test Tema 2",
                  href: "/Subjects/Third/CF1/Tests/testT2Libro.html",
                  kind: "HTML",
                },
                {
                  name: "Test Tema 2 · ampliado",
                  href: "/Subjects/Third/CF1/Tests/test-tema2.html",
                  kind: "HTML",
                },
                {
                  name: "Test Tema 3",
                  href: "/Subjects/Third/CF1/Tests/testT3Libro.html",
                  kind: "HTML",
                },
                {
                  name: "Test Tema 4",
                  href: "/Subjects/Third/CF1/Tests/testT4libro.html",
                  kind: "HTML",
                },
                {
                  name: "Test Tema 5",
                  href: "/Subjects/Third/CF1/Tests/testT5Libro.html",
                  kind: "HTML",
                },
                {
                  name: "Test Tema 6",
                  href: "/Subjects/Third/CF1/Tests/testT6Libro.html",
                  kind: "HTML",
                },
                {
                  name: "Test extra · Temas 4, 5 y 6",
                  href: "/Subjects/Third/CF1/Tests/testPDF/tipoTestExtraTema4-5-6.html",
                  kind: "HTML",
                },
              ],
            },
            {
              label: "Resúmenes",
              resources: [
                {
                  name: "Tema 1",
                  href: "/Subjects/Third/CF1/Resumenes/Tema1/FCCEE/build/Resument1.pdf",
                  kind: "PDF",
                },
                {
                  name: "Tema 2",
                  href: "/Subjects/Third/CF1/Resumenes/Tema2/FCCEE/build/Resument2.pdf",
                  kind: "PDF",
                },
                {
                  name: "Tema 3",
                  href: "/Subjects/Third/CF1/Resumenes/Tema3/FCCEE/build/Resument3.pdf",
                  kind: "PDF",
                },
                {
                  name: "Tema 4",
                  href: "/Subjects/Third/CF1/Resumenes/Tema4/FCCEE/build/Resument4.pdf",
                  kind: "PDF",
                },
                {
                  name: "Tema 5",
                  href: "/Subjects/Third/CF1/Resumenes/Tema5/FCCEE/build/Resument5.pdf",
                  kind: "PDF",
                },
                {
                  name: "Tema 6",
                  href: "/Subjects/Third/CF1/Resumenes/Tema6/FCCEE/build/Resument6.pdf",
                  kind: "PDF",
                },
              ],
            },
          ],
        },
        {
          code: "DAE",
          name: "Dirección y Administración de Empresas",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/direccion-y-administracion-empresas/guia-docente",
                  kind: "GUIA",
                },
                {
                  name: "Temario",
                  href: "/Subjects/Third/DAE/Temario/build/DAE.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Temas",
              resources: [
                {
                  name: "Tema 1 · Administración de empresas y su evolución",
                  href: "/viewer/?file=Subjects/Third/DAE/Temario/src/01_administracion.md",
                  kind: "MD",
                },
                {
                  name: "Tema 2 · Cultura organizacional",
                  href: "/viewer/?file=Subjects/Third/DAE/Temario/src/02_cultura.md",
                  kind: "MD",
                },
                {
                  name: "Tema 3 · Cambio organizacional",
                  href: "/viewer/?file=Subjects/Third/DAE/Temario/src/03_cambio.md",
                  kind: "MD",
                },
                {
                  name: "Tema 4 · Toma de decisiones",
                  href: "/viewer/?file=Subjects/Third/DAE/Temario/src/04_decisiones.md",
                  kind: "MD",
                },
                {
                  name: "Tema 5 · Planificación",
                  href: "/viewer/?file=Subjects/Third/DAE/Temario/src/05_planificacion.md",
                  kind: "MD",
                },
                {
                  name: "Tema 6 · Motivación",
                  href: "/viewer/?file=Subjects/Third/DAE/Temario/src/06_motivacion.md",
                  kind: "MD",
                },
                {
                  name: "Tema 7 · Liderazgo",
                  href: "/viewer/?file=Subjects/Third/DAE/Temario/src/07_liderazgo.md",
                  kind: "MD",
                },
                {
                  name: "Tema 8 · Grupos de trabajo",
                  href: "/viewer/?file=Subjects/Third/DAE/Temario/src/08_grupos.md",
                  kind: "MD",
                },
                {
                  name: "Tema 9 · Comunicación y sistemas de información",
                  href: "/viewer/?file=Subjects/Third/DAE/Temario/src/09_comunicacion.md",
                  kind: "MD",
                },
                {
                  name: "Tema 10 · Conflicto y negociación",
                  href: "/viewer/?file=Subjects/Third/DAE/Temario/src/10_conflicto.md",
                  kind: "MD",
                },
                {
                  name: "Tema 11 · Control",
                  href: "/viewer/?file=Subjects/Third/DAE/Temario/src/11_control.md",
                  kind: "MD",
                },
                {
                  name: "Tema 12 · Ética y responsabilidad social",
                  href: "/viewer/?file=Subjects/Third/DAE/Temario/src/12_etica.md",
                  kind: "MD",
                },
                {
                  name: "Prácticas · las nueve actividades y el método de casos",
                  href: "/viewer/?file=Subjects/Third/DAE/Temario/src/13_practicas.md",
                  kind: "MD",
                },
              ],
            },
            {
              label: "Prácticas",
              resources: [
                {
                  name: "Apuntes Prácticas",
                  href: "/Subjects/Third/DAE/PracticasDAE/FCCEE/build/Practicas.pdf",
                  kind: "PDF",
                },
              ],
            },
          ],
        },
        {
          code: "SCD",
          name: "Sistemas Concurrentes y Distribuidos",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/sistemas-concurrentes-y-distribuidos/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
            {
              label: "Prácticas",
              resources: [
                {
                  name: "Prácticas 1 a 4 resueltas",
                  href: "https://github.com/Ismael-Sallami/concurrency-mpi",
                  kind: "WEB",
                },
              ],
            },
            {
              label: "Relaciones de Ejercicios",
              resources: [
                {
                  name: "Tema 1",
                  href: "/viewer/?file=Subjects/Third/SCD/Teoria/Tema1/RelacionEjerciciosTema1.md",
                  kind: "MD",
                },
                {
                  name: "Tema 1 · en PDF",
                  href: "/Subjects/Third/SCD/Teoria/Tema1/RelacionEjerciciosTema1.pdf",
                  kind: "PDF",
                },
                {
                  name: "Tema 2",
                  href: "/viewer/?file=Subjects/Third/SCD/Teoria/Tema2/RelacionEjerciciosTema2.md",
                  kind: "MD",
                },
                {
                  name: "Tema 3",
                  href: "/Subjects/Third/SCD/Teoria/Tema3/SolucionesEjercicios/ETSIIT/build/Ejerciciost3.pdf",
                  kind: "PDF",
                },
                {
                  name: "Tema 4",
                  href: "/Subjects/Third/SCD/Teoria/Tema4/SolucionesEjercicios/ETSIIT/build/Ejerciciost4.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Exámenes",
              resources: [
                {
                  name: "Enunciado Examen de Prácticas",
                  href: "/Subjects/Third/SCD/Examenes/Enunciado_Examen_Practicas_Primerparcial.pdf",
                  kind: "PDF",
                },
                {
                  name: "Segundo Parcial",
                  href: "/Subjects/Third/SCD/Examenes/SegundoParcial/ETSIIT/build/ExamenesAnteriores.pdf",
                  kind: "PDF",
                },
                {
                  name: "Parcial Extra · resuelto y explicado",
                  href: "/Subjects/Third/SCD/Examenes/Parcial_SCD_Extra/ETSIIT/build/Parcial.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Autoevaluaciones / Tests",
              resources: [
                {
                  name: "Autoevaluación 1",
                  href: "/Subjects/Third/SCD/AutoevalSCD/Autoeval1.html",
                  kind: "HTML",
                },
                {
                  name: "Autoevaluación 2 · Monitores",
                  href: "/Subjects/Third/SCD/AutoevalSCD/Autoeval2.html",
                  kind: "HTML",
                },
                {
                  name: "Autoevaluación 2 · Exclusión Mutua",
                  href: "/Subjects/Third/SCD/AutoevalSCD/testExtraT2.html",
                  kind: "HTML",
                },
                {
                  name: "Autoevaluación 3 · Paso de Mensajes",
                  href: "/Subjects/Third/SCD/AutoevalSCD/AutoevalT3.html",
                  kind: "HTML",
                },
                {
                  name: "Autoevaluación 4 · Sistemas de Tiempo Real",
                  href: "/Subjects/Third/SCD/AutoevalSCD/AutoevalT4.html",
                  kind: "HTML",
                },
              ],
            },
            {
              label: "Actividades Extra",
              resources: [
                {
                  name: "Criba de Eratóstenes con MPI",
                  href: "/Subjects/Third/SCD/Teoria/Actividad_Extra/cribadeErastotenes/ETSIIT/build/Erastotenes.pdf",
                  kind: "PDF",
                },
                {
                  name: "Demostración de un algoritmo de exclusión mutua",
                  href: "/Subjects/Third/SCD/Teoria/Actividad_Extra/Demostracion_Prop_ALG_EM/ETSIIT/build/Demostracion.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Resúmenes",
              resources: [
                {
                  name: "Resumen del Temario",
                  href: "/Subjects/Third/SCD/Resumenes/ETSIIT/build/Apuntes.pdf",
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
          code: "CF2",
          name: "Contabilidad Financiera II",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/contabilidad-financiera-ii/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
            {
              label: "Prácticas",
              resources: [
                {
                  name: "Apuntes Prácticas",
                  href: "/Subjects/Third/CF2/Practica/Temario.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Teoría",
              resources: [
                {
                  name: "Apuntes Teoría",
                  href: "/Subjects/Third/CF2/Teoria/Temario.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Tests",
              resources: [
                {
                  name: "Activos Financieros",
                  href: "/Subjects/Third/CF2/Teoria/Tests/Tema2.html",
                  kind: "HTML",
                },
                {
                  name: "Pasivos Financieros",
                  href: "/Subjects/Third/CF2/Teoria/Tests/Tema3.html",
                  kind: "HTML",
                },
                {
                  name: "Fondos Propios",
                  href: "/Subjects/Third/CF2/Teoria/Tests/Tema4.html",
                  kind: "HTML",
                },
                {
                  name: "Fondos Propios · segunda versión",
                  href: "/Subjects/Third/CF2/Teoria/Tests/test_t4v2.html",
                  kind: "HTML",
                },
                {
                  name: "Provisiones y Contingencias",
                  href: "/Subjects/Third/CF2/Teoria/Tests/Tema5.html",
                  kind: "HTML",
                },
                {
                  name: "Impuesto sobre Beneficios",
                  href: "/Subjects/Third/CF2/Teoria/Tests/Tema6.html",
                  kind: "HTML",
                },
                {
                  name: "Estados Financieros",
                  href: "/Subjects/Third/CF2/Teoria/Tests/Tema7.html",
                  kind: "HTML",
                },
                {
                  name: "Exámenes Anteriores",
                  href: "/Subjects/Third/CF2/Teoria/Tests/test.html",
                  kind: "HTML",
                },
              ],
            },
          ],
        },
        {
          code: "AOF",
          name: "Análisis de Operaciones Financieras",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/analisis-las-operaciones-financieras/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
            {
              label: "Teoría",
              resources: [
                {
                  name: "Apuntes Teoría",
                  href: "/Subjects/Third/AOF/Teoria/Teoria.pdf",
                  kind: "PDF",
                },
                {
                  name: "Formulario",
                  href: "/Subjects/Third/AOF/Formulario/build/Fromulario.pdf",
                  kind: "PDF",
                },
              ],
            },
          ],
        },
        {
          code: "FBD",
          name: "Fundamentos de Base de Datos",
          blocks: [
            {
              // La pagina /guia-docente de FBD da 404. La guia firmada si
              // existe, y su codigo no aparece en ninguna pagina del grado:
              // sale barriendo el rango 21611 3x contra el texto del PDF.
              resources: [
                {
                  name: "Guía docente (216113D)",
                  href: "https://grados.ugr.es/sites/grados/default/public/guias-firmadas/2025-2026/216113D.pdf",
                  kind: "GUIA",
                },
              ],
            },
            {
              label: "Teoría · Prácticas",
              resources: [
                {
                  name: "Apuntes Teoría",
                  href: "/Subjects/Third/FBD/Teoria/build/Temario.pdf",
                  kind: "PDF",
                },
                {
                  name: "Código",
                  href: "https://github.com/Ismael-Sallami/oracle-sql-exercises",
                  kind: "WEB",
                },
                {
                  name: "Relación 1",
                  href: "/Subjects/Third/FBD/Teoria/build/Relacion1.pdf",
                  kind: "PDF",
                },
                {
                  name: "Relación 2",
                  href: "/Subjects/Third/FBD/Teoria/build/Relacion2.pdf",
                  kind: "PDF",
                },
                {
                  name: "Relación 3",
                  href: "/Subjects/Third/FBD/Teoria/build/Relacion3.pdf",
                  kind: "PDF",
                },
                // La «Relacion S1-S2» se retiro el 2026-08-18. Sus 37 paginas
                // eran 30 fotografias de la hoja de enunciados del profesorado
                // con los diagramas resueltos a mano encima: ni una linea del
                // documento era propia. Vuelve cuando este escrita en LaTeX,
                // como las relaciones 1 a 3.
                {
                  name: "Relación T4",
                  href: "/Subjects/Third/FBD/Practica/2parte/Entregables/RelacionT4.pdf",
                  kind: "PDF",
                },
                {
                  name: "Ejercicios-Controles S4",
                  href: "/Subjects/Third/FBD/Practica/2parte/Entregables/Ejercicios_S4.pdf",
                  kind: "PDF",
                },
                {
                  name: "Ejercicios-Controles",
                  href: "/Subjects/Third/FBD/Practica/2parte/Entregables/Ejercicios/",
                  kind: "DIR",
                },
                {
                  name: "Apuntes Prácticas",
                  href: "/Subjects/Third/FBD/Practica/2parte/Practicas/ApuntesFBD.pdf",
                  kind: "PDF",
                },
                {
                  name: "Temario de Prácticas",
                  href: "/Subjects/Third/FBD/Practica/Temario.pdf",
                  kind: "PDF",
                },
                {
                  name: "Ejercicios-Controles SQL",
                  href: "/Subjects/Third/FBD/Practica/2parte/Practicas/Ejercicios.sql",
                  kind: "SQL",
                },
                {
                  name: "Simulacro 2 · cuestionario DDL",
                  href: "/Subjects/Third/FBD/Practica/2parte/Simulacro2/simulacro2.html",
                  kind: "HTML",
                },
                {
                  name: "Simulacro 2 · cuestionario DML de prácticas",
                  href: "/Subjects/Third/FBD/Practica/2parte/Simulacro2/simulacro2_practicas.html",
                  kind: "HTML",
                },
              ],
            },
          ],
        },
        {
          code: "FIS",
          name: "Fundamentos de Ingeniería del Software",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/fundamentos-ingenieria-del-software/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
            {
              label: "Prácticas",
              resources: [
                {
                  name: "Práctica 0",
                  href: "/Subjects/Third/FIS/Practicas/Practica-0/build/practica0_FIS.pdf",
                  kind: "PDF",
                },
                {
                  name: "Práctica 1",
                  href: "/Subjects/Third/FIS/Practicas/pr1.pdf",
                  kind: "PDF",
                },
                {
                  name: "Práctica 2.1",
                  href: "/Subjects/Third/FIS/Practicas/pr2-1.pdf",
                  kind: "PDF",
                },
                {
                  name: "Práctica 2.2",
                  href: "/Subjects/Third/FIS/Practicas/pr2-2.pdf",
                  kind: "PDF",
                },
                {
                  name: "Práctica 3.1",
                  href: "/Subjects/Third/FIS/Practicas/pr3-1.pdf",
                  kind: "PDF",
                },
                {
                  name: "Práctica 3.2",
                  href: "/Subjects/Third/FIS/Practicas/pr3-2.pdf",
                  kind: "PDF",
                },
                {
                  name: "Práctica 4",
                  href: "/Subjects/Third/FIS/Practicas/pr4.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Teoría",
              resources: [
                {
                  name: "Temario",
                  href: "/Subjects/Third/FIS/Teoria/build/Temario.pdf",
                  kind: "PDF",
                },
                {
                  name: "Apuntes Teoría",
                  href: "/viewer/?file=Subjects/Third/FIS/Teoria/resumenOrdinaria.md",
                  kind: "MD",
                },
                {
                  name: "Tipo test",
                  href: "/Subjects/Third/FIS/Teoria/test.html",
                  kind: "HTML",
                },
              ],
            },
            {
              label: "Ejercicios-Controles y Controles",
              resources: [
                {
                  name: "Ejercicio 2 · Diagrama de casos de uso",
                  href: "/Subjects/Third/FIS/Teoria/Ejercicios-Controles/Ejercicios/ej2.pdf",
                  kind: "PDF",
                },
                {
                  name: "Ejercicio 3 · Modelo conceptual",
                  href: "/Subjects/Third/FIS/Teoria/Ejercicios-Controles/Ejercicio3/Ejercicio3/main.pdf",
                  kind: "PDF",
                },
                {
                  name: "Apuntes Control 1",
                  href: "/Subjects/Third/FIS/Teoria/Ejercicios-Controles/Controles/control1.pdf",
                  kind: "PDF",
                },
                {
                  name: "Apuntes Control 2",
                  href: "/Subjects/Third/FIS/Teoria/Ejercicios-Controles/Controles/Guia_Control2/C2_FIS.pdf",
                  kind: "PDF",
                },
                {
                  name: "Guía completa Control 2",
                  href: "/Subjects/Third/FIS/Teoria/Ejercicios-Controles/Controles/Guia_Control2/GuiaCompletaC2-FIS.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Prácticas",
              resources: [
                {
                  name: "Los siete informes, en grupo de cuatro",
                  href: "https://github.com/Ismael-Sallami/software-engineering-practices",
                  kind: "WEB",
                },
              ],
            },
          ],
        },
        {
          code: "IA",
          name: "Inteligencia Artificial",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/inteligencia-artificial/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
            {
              label: "Prácticas",
              resources: [
                {
                  name: "Práctica 1 · Notas",
                  href: "/Subjects/Third/IA/Practicas/Practicas/Practica1/notas.pdf",
                  kind: "PDF",
                },
                {
                  name: "Práctica 1 · Apuntes de clase",
                  href: "/Subjects/Third/IA/Practicas/Practicas/Practica1/apuntesClase.pdf",
                  kind: "PDF",
                },
                {
                  name: "Práctica 1 · Cuestionario 1",
                  href: "/Subjects/Third/IA/Practicas/Practicas/Practica1/cuestionario1.pdf",
                  kind: "PDF",
                },
                {
                  name: "Práctica 1 · Cuestionario 2",
                  href: "/Subjects/Third/IA/Practicas/Practicas/Practica1/cuestionario2.pdf",
                  kind: "PDF",
                },
                {
                  name: "Práctica 2 · Agentes de rescate",
                  href: "https://github.com/Ismael-Sallami/rescue-agents",
                  kind: "WEB",
                },
                {
                  name: "Práctica 3 · Parchís con poda alfa-beta",
                  href: "https://github.com/Ismael-Sallami/parchis-ai",
                  kind: "WEB",
                },
                {
                  name: "Práctica 3 · Memoria",
                  href: "/Subjects/Third/IA/Practicas/Practicas/Practica3/practica3/practica3/Memoria.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Teoría",
              resources: [
                {
                  name: "Temario",
                  href: "/Subjects/Third/IA/Teoria/Temario.pdf",
                  kind: "PDF",
                },
              ],
            },
          ],
        },
        {
          code: "ISE",
          name: "Ingeniería de Servidores",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/ingenieria-servidores/guia-docente",
                  kind: "GUIA",
                },
              ],
            },
            {
              label: "Prácticas",
              resources: [
                {
                  name: "Apuntes Prácticas",
                  href: "/Subjects/Third/ISE/Prácticas/Practicas_ISE/Resolucion/Temario.pdf",
                  kind: "PDF",
                },
                {
                  name: "Test Prácticas",
                  href: "/Subjects/Third/ISE/Prácticas/Test/test_oficial_completo_ISE.html",
                  kind: "HTML",
                },
                {
                  name: "Código · Ansible, Prometheus y JMeter",
                  href: "https://github.com/Ismael-Sallami/ansible-infra-lab",
                  kind: "WEB",
                },
              ],
            },
            {
              label: "Teoría",
              resources: [
                {
                  name: "Examen Enero 2022",
                  href: "/Subjects/Third/ISE/Teoria/Examenes/enero2022.pdf",
                  kind: "PDF",
                },
                {
                  name: "Examen Febrero 2022",
                  href: "/Subjects/Third/ISE/Teoria/Examenes/febrer02022.pdf",
                  kind: "PDF",
                },
                {
                  name: "Examen Enero 2023",
                  href: "/Subjects/Third/ISE/Teoria/Examenes/enero2023.pdf",
                  kind: "PDF",
                },
                {
                  name: "Examen Febrero 2023",
                  href: "/Subjects/Third/ISE/Teoria/Examenes/febrero2023.pdf",
                  kind: "PDF",
                },
                {
                  name: "Examen Enero 2024",
                  href: "/Subjects/Third/ISE/Teoria/Examenes/enero2024.pdf",
                  kind: "PDF",
                },
                {
                  name: "Formulario",
                  href: "/Subjects/Third/ISE/Teoria/Formulario/Formulario.pdf",
                  kind: "PDF",
                },
                {
                  name: "Ejercicios-Controles Tema 3",
                  href: "/Subjects/Third/ISE/Teoria/Ejercicios/EjercicioT3.pdf",
                  kind: "PDF",
                },
                {
                  name: "Tipo Test",
                  href: "/Subjects/Third/ISE/Teoria/Test/test.html",
                  kind: "HTML",
                },
              ],
            },
          ],
        },
        {
          code: "MC",
          name: "Métodos Cuantitativos",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/metodos-cuantitativos/guia-docente",
                  kind: "GUIA",
                },
                {
                  name: "Temario",
                  href: "/Subjects/Third/MC/Temario/build/MC.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Parte 1 · Optimización",
              resources: [
                {
                  name: "Tema 1 · Introducción",
                  href: "/viewer/?file=Subjects/Third/MC/Temario/src/01_introduccion.md",
                  kind: "MD",
                },
                {
                  name: "Tema 2 · Introducción a la programación lineal",
                  href: "/viewer/?file=Subjects/Third/MC/Temario/src/02_programacion_lineal.md",
                  kind: "MD",
                },
                {
                  name: "Tema 3 · Símplex, dualidad, sensibilidad y programación entera",
                  href: "/viewer/?file=Subjects/Third/MC/Temario/src/03_simplex.md",
                  kind: "MD",
                },
                {
                  name: "Tema 4 · Optimización no lineal",
                  href: "/viewer/?file=Subjects/Third/MC/Temario/src/04_no_lineal.md",
                  kind: "MD",
                },
              ],
            },
            {
              label: "Parte 2 · Decisión",
              resources: [
                {
                  name: "Tema 5 · Teoría de la decisión",
                  href: "/viewer/?file=Subjects/Third/MC/Temario/src/05_teoria_decision.md",
                  kind: "MD",
                },
                {
                  name: "Tema 6 · Decisiones multicriterio",
                  href: "/viewer/?file=Subjects/Third/MC/Temario/src/06_multicriterio.md",
                  kind: "MD",
                },
                {
                  name: "Tema 7 · Teoría de juegos",
                  href: "/viewer/?file=Subjects/Third/MC/Temario/src/07_teoria_juegos.md",
                  kind: "MD",
                },
                {
                  name: "Tema 8 · Programación multiobjetivo",
                  href: "/viewer/?file=Subjects/Third/MC/Temario/src/08_multiobjetivo.md",
                  kind: "MD",
                },
                {
                  name: "Relación de ejercicios resueltos",
                  href: "/viewer/?file=Subjects/Third/MC/Temario/src/09_ejercicios.md",
                  kind: "MD",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
