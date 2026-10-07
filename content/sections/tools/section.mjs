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
    "Pequeñas apps que funcionan al 100% en tu navegador y utilidades nativas de alto rendimiento: sin que tus archivos salgan de tu equipo.",
  summary: "7 herramientas · CLI y Web nativos · código abierto",
  pages: [],
  links: [
    {
      name: "md2html",
      blurb: "apuntes Markdown a test HTML autocorregible",
      href: "https://ismael-sallami.github.io/md2html/",
      kind: "WEB",
      repo: "https://github.com/Ismael-Sallami/md2html",
    },
    {
      name: "pdf2md",
      blurb: "PDF, Word y Excel a Markdown",
      href: "https://ismael-sallami.github.io/pdf2md/",
      kind: "WEB",
      repo: "https://github.com/Ismael-Sallami/pdf2md",
    },
    {
      name: "diffchecker",
      blurb: "comparar dos textos y mezclarlos",
      href: "https://ismael-sallami.github.io/diffchecker/",
      kind: "WEB",
      repo: "https://github.com/Ismael-Sallami/diffchecker",
    },
    {
      name: "gittomd",
      blurb: "un repositorio de GitHub en un Markdown para tu IA",
      href: "https://ismael-sallami.github.io/gittomd/",
      kind: "WEB",
      repo: "https://github.com/Ismael-Sallami/gittomd",
    },
    {
      name: "contribmeter",
      blurb: "quién aporta cuánto en un repo u organización de GitHub",
      href: "https://ismael-sallami.github.io/contribmeter/",
      kind: "CLI",
      repo: "https://github.com/Ismael-Sallami/contribmeter",
    },
    {
      name: "GitVanguard",
      blurb: "controlador Git TUI de alto rendimiento para Linux",
      href: "https://ismael-sallami.github.io/git-vanguard/",
      kind: "CLI",
      repo: "https://github.com/Ismael-Sallami/git-vanguard",
    },
    {
      name: "PodVanguard",
      blurb: "centro de mando web para contenedores Docker y Kubernetes pods",
      href: "https://ismael-sallami.github.io/pod-vanguard/",
      kind: "WEB",
      repo: "https://github.com/Ismael-Sallami/pod-vanguard",
    },
  ],
};
