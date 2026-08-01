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
                  name: "Código · 67 scripts de Godot",
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
