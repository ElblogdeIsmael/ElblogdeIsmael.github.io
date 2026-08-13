/**
 * Cuarto Curso - Doble Grado en Ingenieria Informatica y ADE.
 *
 * 13 subjects across 2 semesters.
 * Add a subject by pushing an entry into the matching group.
 *
 * @author Ismael Sallami Moreno
 * @type {import("../../../types.d.ts").Page}
 */
export default {
  slug: "cuarto",
  index: "04",
  title: "Cuarto",
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
          code: "CG",
          name: "Contabilidad de Gestión",
          blocks: [
            {
              resources: [
                {
                  name: "Temario",
                  href: "/Subjects/Fourth/CG/TEX/CG.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Exámenes",
              resources: [
                {
                  name: "Tests Parcial 1",
                  href: "/Subjects/Fourth/CG/test/test.html",
                  kind: "HTML",
                },
                {
                  name: "Tests Ordinaria",
                  href: "/Subjects/Fourth/CG/test/ordinaria.html",
                  kind: "HTML",
                },
              ],
            },
          ],
        },
        {
          code: "DO1",
          name: "Dirección de Operaciones I",
          blocks: [
            {
              resources: [
                {
                  name: "Tests",
                  href: "/Subjects/Fourth/DO-1/test/test.html",
                  kind: "HTML",
                },
                {
                  name: "Temario",
                  href: "/Subjects/Fourth/DO-1/TEX/DO-1.pdf",
                  kind: "PDF",
                },
              ],
            },
          ],
        },
        {
          code: "DDSI",
          name: "Diseño y Desarrollo de Sistemas de Información",
          blocks: [
            {
              resources: [
                {
                  name: "Temario",
                  href: "/Subjects/Fourth/DDSI/build/DDSI.pdf",
                  kind: "PDF",
                },
                {
                  name: "Repositorio GitHub de Prácticas",
                  href: "https://github.com/Ismael-Sallami/oracle-dbms-project",
                  kind: "WEB",
                },
              ],
            },
          ],
        },
        {
          code: "EM",
          name: "Economía Mundial",
          blocks: [
            {
              resources: [
                {
                  name: "Temario",
                  href: "/Subjects/Fourth/EM/TEX/EM.pdf",
                  kind: "PDF",
                },
                {
                  name: "Seminario",
                  href: "https://github.com/Leonin04/ModelosComplejosModelosDinamicos",
                  kind: "WEB",
                },
              ],
            },
            {
              label: "Exámenes",
              resources: [
                {
                  name: "Test Tema 1 y 2",
                  href: "/Subjects/Fourth/EM/test/test.html",
                  kind: "HTML",
                },
                {
                  name: "Test Ordinaria",
                  href: "/Subjects/Fourth/EM/test/ordinaria.html",
                  kind: "HTML",
                },
              ],
            },
            {
              label: "Presentaciones",
              resources: [
                {
                  name: "Caso 2.15 · Economía política de la migración",
                  href: "/Subjects/Fourth/EM/PRESENTACIONES/t2/caso2-15.pdf",
                  kind: "PDF",
                },
                {
                  name: "Caso 2.15 · segunda versión",
                  href: "/Subjects/Fourth/EM/PRESENTACIONES/t2/caso2-15_v2.pdf",
                  kind: "PDF",
                },
                {
                  name: "Caso 2.19 · Efectos de la migración sobre los salarios",
                  href: "/Subjects/Fourth/EM/PRESENTACIONES/t2/caso2-19.pdf",
                  kind: "PDF",
                },
                {
                  name: "Caso 2.19 · segunda versión",
                  href: "/Subjects/Fourth/EM/PRESENTACIONES/t2/caso2-19_v2.pdf",
                  kind: "PDF",
                },
                {
                  name: "Caso 2.22 · Inversión extranjera directa en Singapur",
                  href: "/Subjects/Fourth/EM/PRESENTACIONES/t2/caso2-22.pdf",
                  kind: "PDF",
                },
                {
                  name: "Caso 3.5 · Aranceles de la Administración Trump",
                  href: "/Subjects/Fourth/EM/PRESENTACIONES/t3/caso3-5_SALLAMI_MORENO_ISMAEL.pdf",
                  kind: "PDF",
                },
                {
                  name: "Titular 3.2 · La guerra comercial EE. UU.-China",
                  href: "/Subjects/Fourth/EM/PRESENTACIONES/t3/titular-3-2_SALLAMI_MORENO_ISMAEL.pdf",
                  kind: "PDF",
                },
                {
                  name: "Caso 4.5 · Estándares globales y soberanía nacional",
                  href: "/Subjects/Fourth/EM/PRESENTACIONES/t4/CASO-4-5-SALLAMI_MORENO_ISMAEL.pdf",
                  kind: "PDF",
                },
                {
                  name: "Caso 4.10 · Alimentos biotecnológicos en Europa",
                  href: "/Subjects/Fourth/EM/PRESENTACIONES/t4/caso-4-10_SALLAMI_MORENO_ISMAEL.pdf",
                  kind: "PDF",
                },
                {
                  name: "Caso 4.15 · Paneles solares y política ambiental",
                  href: "/Subjects/Fourth/EM/PRESENTACIONES/t4/caso-4-15-SALLAMI_MORENO_ISMAEL.pdf",
                  kind: "PDF",
                },
                {
                  name: "Titular 4.3 · Los estándares de Walmart y sus proveedores",
                  href: "/Subjects/Fourth/EM/PRESENTACIONES/t4/titular-4-3-SALLAMI_MORENO_ISMAEL.pdf",
                  kind: "PDF",
                },
                {
                  name: "Práctica del tema 4 · Elasticidad y creación de comercio",
                  href: "/Subjects/Fourth/EM/PRESENTACIONES/t4/Practica-t4-SALLAMI_MORENO_ISMAEL.pdf",
                  kind: "PDF",
                },
                {
                  name: "Titular 5.1 · Activos financieros internacionales",
                  href: "/Subjects/Fourth/EM/PRESENTACIONES/t5/titular-5-1-SALLAMI_MORENO_ISMAEL.pdf",
                  kind: "PDF",
                },
                {
                  name: "Caso 5.5 · Paridad de intereses no cubierta",
                  href: "/Subjects/Fourth/EM/PRESENTACIONES/t5/caso-5-5-SALLAMI_MORENO_ISMAEL.pdf",
                  kind: "PDF",
                },
                {
                  name: "Titular 5.6 · Overshooting del tipo de cambio",
                  href: "/Subjects/Fourth/EM/PRESENTACIONES/t5/titular-5-6_SALLAMI_MORENO_ISMAEL.pdf",
                  kind: "PDF",
                },
                {
                  name: "Caso 5.10 · Anclas nominales",
                  href: "/Subjects/Fourth/EM/PRESENTACIONES/t5/caso-5-10-SALLAMI_MORENO_ISMAEL.pdf",
                  kind: "PDF",
                },
                {
                  name: "Caso 5.15 · Régimen cambiario y flujos comerciales",
                  href: "/Subjects/Fourth/EM/PRESENTACIONES/t5/caso-5-15-SALLAMI_MORENO_ISMAEL.pdf",
                  kind: "PDF",
                },
                {
                  name: "Caso 6.4 · Los primeros años de tipos flexibles",
                  href: "/Subjects/Fourth/EM/PRESENTACIONES/t6/caso-6-4-SALLAMI_MORENO_ISMAEL.pdf",
                  kind: "PDF",
                },
                {
                  name: "Caso 6.9 · Crisis cambiarias",
                  href: "/Subjects/Fourth/EM/PRESENTACIONES/t6/caso-6-9-SALLAMI_MORENO_ISMAEL.pdf",
                  kind: "PDF",
                },
              ],
            },
          ],
        },
        {
          code: "IG",
          name: "Informática Gráfica",
          blocks: [
            {
              resources: [
                {
                  name: "Temario",
                  href: "/Subjects/Fourth/IG/build/IG.pdf",
                  kind: "PDF",
                },
                {
                  name: "Código",
                  href: "https://github.com/Ismael-Sallami/godot-graphics-exercises",
                  kind: "WEB",
                },
              ],
            },
          ],
        },
        {
          code: "MC",
          name: "Modelos de Computación",
          blocks: [
            {
              resources: [
                {
                  name: "Temario",
                  href: "/Subjects/Fourth/MC/TEX/MC.pdf",
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
          code: "AEF",
          name: "Análisis de los Estados Financieros",
          blocks: [
            {
              resources: [
                {
                  name: "Temario",
                  href: "/Subjects/Fourth/AEF/AEF.pdf",
                  kind: "PDF",
                },
                {
                  name: "Fundamentos del análisis contable",
                  href: "/viewer/?file=Subjects/Fourth/AEF/src/01_fundamentos.md",
                  kind: "MD",
                },
                {
                  name: "Indicadores y Análisis Financiero",
                  href: "/viewer/?file=Subjects/Fourth/AEF/src/02_indicadores.md",
                  kind: "MD",
                },
                {
                  name: "Formulario",
                  href: "/viewer/?file=Subjects/Fourth/AEF/src/03_formulario.md",
                  kind: "MD",
                },
                {
                  name: "Simulacro de Examen",
                  href: "/viewer/?file=Subjects/Fourth/AEF/src/05_simulacro.md",
                  kind: "MD",
                },
                {
                  name: "Plataforma de Estudio",
                  href: "/Subjects/Fourth/AEF/AEF_Plataforma_Estudio.html",
                  kind: "HTML",
                },
              ],
            },
          ],
        },
        {
          code: "DRH1",
          name: "Dirección de Recursos Humanos I",
          blocks: [
            {
              resources: [
                {
                  name: "Temario",
                  href: "/Subjects/Fourth/DRH1/DRH1.pdf",
                  kind: "PDF",
                },
                {
                  name: "Portafolio CaixaBank (trabajo en grupo)",
                  href: "/Subjects/Fourth/DRH1/practicas/portafolio-caixabank.pdf",
                  kind: "PDF",
                },
                {
                  name: "Actividad 1",
                  href: "/Subjects/Fourth/DRH1/Actividades/Act1/act1.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Exámenes",
              resources: [
                {
                  name: "Tests Ordinaria",
                  href: "/Subjects/Fourth/DRH1/test/test.html",
                  kind: "HTML",
                },
                {
                  name: "Test unificado",
                  href: "/Subjects/Fourth/DRH1/test/test-unificado.html",
                  kind: "HTML",
                },
                {
                  name: "Test Quizz",
                  href: "/Subjects/Fourth/DRH1/test/test-quizz.html",
                  kind: "HTML",
                },
                {
                  name: "Examen 2024",
                  href: "/Subjects/Fourth/DRH1/test/examen-2024.html",
                  kind: "HTML",
                },
                {
                  name: "Examen 2023",
                  href: "/Subjects/Fourth/DRH1/test/examen-2023.html",
                  kind: "HTML",
                },
                {
                  name: "Exámenes anteriores",
                  href: "/Subjects/Fourth/DRH1/test/examen-anteriores.html",
                  kind: "HTML",
                },
              ],
            },
          ],
        },
        {
          code: "EE",
          name: "Economía Española",
          blocks: [
            {
              resources: [
                {
                  name: "Tests",
                  href: "/Subjects/Fourth/EE/test/test.html",
                  kind: "HTML",
                },
                {
                  name: "Temario",
                  href: "/Subjects/Fourth/EE/EE.pdf",
                  kind: "PDF",
                },
                {
                  name: "Informe de coyuntura (trabajo en grupo)",
                  href: "/Subjects/Fourth/EE/practicas/informe-coyuntura-economia-espanola.pdf",
                  kind: "PDF",
                },
              ],
            },
          ],
        },
        {
          code: "OE",
          name: "Organización de Empresas",
          blocks: [
            {
              resources: [
                {
                  name: "Informe-diagnóstico CaixaBank (trabajo en grupo)",
                  href: "/Subjects/Fourth/OE/practicas/informe-caixabank.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Exámenes",
              resources: [
                {
                  name: "Test Exámenes Anteriores",
                  href: "/Subjects/Fourth/OE/test/test-wuolah.html",
                  kind: "HTML",
                },
                {
                  name: "Test de clase",
                  href: "/Subjects/Fourth/OE/test/test-clase.html",
                  kind: "HTML",
                },
                {
                  name: "Test Examen Año Pasado",
                  href: "/Subjects/Fourth/OE/test/test-examen-anio-pasado.html",
                  kind: "HTML",
                },
              ],
            },
          ],
        },
        {
          code: "AA",
          name: "Aprendizaje Automático",
          blocks: [
            {
              resources: [
                {
                  name: "Test ordinaria",
                  href: "/Subjects/Fourth/AA/test/test.html",
                  kind: "HTML",
                },
                {
                  name: "Temario",
                  href: "/Subjects/Fourth/AA/AA.pdf",
                  kind: "PDF",
                },
                {
                  name: "Repositorio GitHub de Prácticas",
                  href: "https://github.com/Ismael-Sallami/machine-learning-practices",
                  kind: "WEB",
                },
              ],
            },
          ],
        },
        {
          code: "MAC",
          name: "Modelos Avanzados de Computación",
          blocks: [
            {
              resources: [
                {
                  name: "Temario",
                  href: "/Subjects/Fourth/MAC/MAC.pdf",
                  kind: "PDF",
                },
                {
                  name: "Calculabilidad y modelos de cómputo",
                  href: "/viewer/?file=Subjects/Fourth/MAC/src/01_calculabilidad.md",
                  kind: "MD",
                },
                {
                  name: "Clases de complejidad",
                  href: "/viewer/?file=Subjects/Fourth/MAC/src/02_complejidad.md",
                  kind: "MD",
                },
                {
                  name: "Relaciones 1, 2, 4 y 5 resueltas",
                  href: "/viewer/?file=Subjects/Fourth/MAC/src/03_relaciones.md",
                  kind: "MD",
                },
                {
                  name: "Convocatorias resueltas 2021-2025",
                  href: "/viewer/?file=Subjects/Fourth/MAC/src/04_examenes.md",
                  kind: "MD",
                },
                {
                  name: "NP-completitud de 3-Partition",
                  href: "https://github.com/Ismael-Sallami/3-Partition-NP-Completeness",
                  kind: "WEB",
                },
              ],
            },
          ],
        },
        {
          code: "MH",
          name: "Metaheurísticas",
          blocks: [
            {
              resources: [
                {
                  name: "Repositorio GitHub de Prácticas",
                  href: "https://github.com/Ismael-Sallami/metaheuristics",
                  kind: "WEB",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
