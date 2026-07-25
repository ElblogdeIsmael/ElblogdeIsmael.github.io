/**
 * Doble Grado en Ingenieria Informatica y ADE (UGR).
 *
 * Five course pages, one per academic year. To add a sixth, drop a file in
 * `pages/` and list it below. Nothing else needs to change.
 *
 * @author Ismael Sallami Moreno
 * @type {import("../../types.d.ts").Section}
 */

import primero from "./pages/primero.mjs";
import segundo from "./pages/segundo.mjs";
import tercero from "./pages/tercero.mjs";
import cuarto from "./pages/cuarto.mjs";
import quinto from "./pages/quinto.mjs";

export default {
  slug: "doble-grado",
  index: "01",
  title: "Doble",
  titleOutline: "Grado",
  blurb:
    "Cinco cursos de Ingeniería Informática y ADE en la Universidad de Granada. " +
    "Los dos primeros son sobre todo bibliografía y guías docentes; a partir de " +
    "tercero el material ya es propio.",
  summary: "5 cursos · 59 asignaturas",
  pages: [primero, segundo, tercero, cuarto, quinto],
};
