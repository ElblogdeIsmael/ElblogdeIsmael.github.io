/**
 * Quinto Curso - Doble Grado en Ingenieria Informatica y ADE.
 *
 * 10 subjects across 2 semesters.
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
    "10 asignaturas · 2 semestres",
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
                  name: "Libro teórico-práctico de Creación de Empresas (Temas 1–10)",
                  href: "/Subjects/Fifth/CE/build/CE.pdf",
                  kind: "PDF",
                },
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
              label: "Material general",
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
                {
                  name: "Hackathon Puleva Health · Diagnóstico Estratégico y Ventajas Competitivas",
                  href: "/Subjects/Fifth/DE-1/practicas/hackathon-puleva-health.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Caso 1 · Honda",
              resources: [
                {
                  name: "Enunciado oficial del caso Honda",
                  href: "/Subjects/Fifth/DE-1/practicas/01-honda.pdf",
                  kind: "PDF",
                },
                {
                  name: "Resumen del caso (guía de estudio)",
                  href: "/viewer/?file=Subjects/Fifth/DE-1/practicas/casos/01-honda/resumen.md",
                  kind: "MD",
                },
                {
                  name: "Respuestas trabajadas (Markdown)",
                  href: "/viewer/?file=Subjects/Fifth/DE-1/practicas/casos/01-honda/respuestas.md",
                  kind: "MD",
                },
                {
                  name: "Respuestas entregadas (PDF)",
                  href: "/Subjects/Fifth/DE-1/practicas/01-honda-respuestas.pdf",
                  kind: "PDF",
                },
                {
                  name: "Notas adicionales en PDF",
                  href: "/Subjects/Fifth/DE-1/practicas/01-honda-notas.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Caso 2 · Unilever",
              resources: [
                {
                  name: "Enunciado oficial del caso Unilever",
                  href: "/Subjects/Fifth/DE-1/practicas/02-unilever.pdf",
                  kind: "PDF",
                },
                {
                  name: "Resumen y análisis del caso (Markdown)",
                  href: "/viewer/?file=Subjects/Fifth/DE-1/practicas/casos/02-unilever/resumen.md",
                  kind: "MD",
                },
                {
                  name: "Ideas clave del debate (Markdown)",
                  href: "/viewer/?file=Subjects/Fifth/DE-1/practicas/casos/02-unilever/ideas-clave.md",
                  kind: "MD",
                },
                {
                  name: "Respuestas del grupo (PDF)",
                  href: "/Subjects/Fifth/DE-1/practicas/02-unilever-respuestas.pdf",
                  kind: "PDF",
                },
              ],
            },
            {
              label: "Caso 3 · LEGO",
              resources: [
                {
                  name: "Resumen del caso LEGO (Markdown)",
                  href: "/viewer/?file=Subjects/Fifth/DE-1/practicas/casos/03-lego/resumen.md",
                  kind: "MD",
                },
                {
                  name: "Ideas clave y análisis estratégico (Markdown)",
                  href: "/viewer/?file=Subjects/Fifth/DE-1/practicas/casos/03-lego/ideas-clave.md",
                  kind: "MD",
                },
                {
                  name: "Respuestas entregadas (PDF)",
                  href: "/Subjects/Fifth/DE-1/practicas/03-lego-respuestas.pdf",
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
            {
              label: "Parcial 1 (Temas 1-4)",
              resources: [
                {
                  name: "Apuntes del Parcial 1: teoría, problemas y exámenes resueltos",
                  href: "/Subjects/Fifth/DFIN/parcial1/build/DFIN_Parcial1.pdf",
                  kind: "PDF",
                },
                {
                  name: "Formulario del Parcial 1",
                  href: "/Subjects/Fifth/DFIN/formulario1/build/DFIN_Formulario_Parcial1.pdf",
                  kind: "PDF",
                },
                {
                  name: "Test Parcial 1 (más repetidas primero, 236 preguntas)",
                  href: "/Subjects/Fifth/DFIN/test/test-parcial1.html",
                  kind: "HTML",
                },
              ],
            },
          ],
        },
        {
          code: "NPI",
          name: "Nuevos Paradigmas de Interacción",
          blocks: [
            {
              resources: [
                {
                  name: "Guía docente",
                  href: "https://www.ugr.es/estudiantes/grados/grado-ingenieria-informatica/nuevos-paradigmas-interaccion-ecompsist/guia-docente",
                  kind: "GUIA",
                },
                {
                  name: "Libro de teoría: fundamentos IHM, multimodalidad, RV/RA, gestos, computación ubicua y diálogo oral",
                  href: "/Subjects/Fifth/NPI/build/NPI.pdf",
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
                  name: "Temario, Hoja de Métodos, Relaciones y Ejercicios de Examen (Temas 1 al 6)",
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
                {
                  name: "Práctica 1 · OpenCV, filtros, gradientes y kernels gaussianos 1D (Notebook)",
                  href: "/ipynb/?file=Subjects/Fifth/VC/practicas/practica1.ipynb",
                  kind: "IPYNB",
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
