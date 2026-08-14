/**
 * Browser tools built alongside the notes.
 *
 * This section has no pages of its own: each tool is a standalone app that
 * lives in its own folder at the repository root. The generator renders a link
 * list instead of a page grid whenever `links` is set.
 *
 * @author Ismael Sallami Moreno
 * @type {import("../../types.d.ts").Section}
 */

export default {
  slug: "tools",
  index: "02",
  name: "Herramientas",
  title: "Herra",
  titleOutline: "mientas",
  blurb:
    "Pequeñas apps que funcionan al 100% en tu navegador: sin instalar nada y " +
    "sin que tus archivos salgan de tu equipo.",
  summary: "3 herramientas · sin servidor · código abierto",
  pages: [],
  links: [
    {
      name: "md2html — apuntes Markdown a test HTML autocorregible",
      href: "/md2html/",
      kind: "WEB",
    },
    {
      name: "md2html · código fuente",
      href: "https://github.com/Ismael-Sallami/md2html-testGenerator",
      kind: "WEB",
    },
    {
      name: "pdf2md — PDF, Word y Excel a Markdown",
      href: "/pdf2md/",
      kind: "WEB",
    },
    {
      name: "pdf2md · código fuente",
      href: "https://github.com/Ismael-Sallami/pdf-to-md",
      kind: "WEB",
    },
    {
      name: "diffchecker — comparar dos textos y mezclarlos",
      href: "/diffchecker/",
      kind: "WEB",
    },
  ],
};

// El visor de apuntes (/viewer/) no se lista aqui a proposito. Sigue
// funcionando porque ocho recursos de tercero y cuarto abren sus .md a traves
// de el; simplemente no se ofrece como herramienta suelta.
