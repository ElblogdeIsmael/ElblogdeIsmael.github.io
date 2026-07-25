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
          blocks: [],
        },
        {
          code: "DF",
          name: "Derecho Fiscal",
          blocks: [],
        },
        {
          code: "DEE1",
          name: "Dirección Estratégica de la Empresa I",
          blocks: [],
        },
        {
          code: "DFIN",
          name: "Dirección Financiera",
          blocks: [],
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
          blocks: [],
        },
        {
          code: "PFG",
          name: "Proyecto Fin de Grado",
          blocks: [],
        },
        {
          code: "TFG",
          name: "Trabajo Fin de Grado",
          blocks: [],
        },
      ],
    },
  ],
};
