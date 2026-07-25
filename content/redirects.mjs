/**
 * Redirects from the old URL scheme.
 *
 * The previous site published course pages as `/courses/<name>.html`. Those
 * URLs are indexed by search engines and shared in links, so each one keeps a
 * small page that points at its replacement. They carry a canonical link, so
 * search engines credit the new URL and drop the old one over time.
 *
 * Remove an entry once the old URL stops receiving traffic.
 *
 * @author Ismael Sallami Moreno
 */

/** @type {{from: string, to: string}[]} */
export const REDIRECTS = [
  { from: "courses/first.html", to: "/doble-grado/primero/" },
  { from: "courses/second.html", to: "/doble-grado/segundo/" },
  { from: "courses/third.html", to: "/doble-grado/tercero/" },
  { from: "courses/fourth.html", to: "/doble-grado/cuarto/" },
  { from: "courses/fifth.html", to: "/doble-grado/quinto/" },
  { from: "historia.html", to: "/historia/" },
];

export default REDIRECTS;
