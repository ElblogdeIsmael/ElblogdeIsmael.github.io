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
  summary: "12 herramientas · CLI y Web nativos · código abierto",
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
    {
      name: "Visor de Notebooks (.ipynb)",
      blurb: "renderizado en navegador de cuadernos Jupyter con Python, LaTeX y figuras",
      href: "/ipynb/",
      kind: "IPYNB",
    },
    {
      name: "Simulador Aptis ESOL C1",
      blurb: "simulador completo de Aptis C1: Core, Reading, Listening, Writing y Speaking",
      href: "https://ismael-sallami.github.io/english-c1-suite/aptis/",
      kind: "WEB",
      repo: "https://github.com/Ismael-Sallami/english-c1-suite",
    },
    {
      name: "Biblioteca de Writings · ISE Digital",
      blurb: "writings oficiales de Trinity y modelos C1 anotados con traducción y comparador",
      href: "https://ismael-sallami.github.io/english-c1-suite/writing-library/",
      kind: "WEB",
      repo: "https://github.com/Ismael-Sallami/english-c1-suite",
    },
    {
      name: "Chuleta Writing C1 · ISE Digital",
      blurb: "hoja esquemática A4 imprimible con esqueletos, inversiones, conectores y checklist",
      href: "https://ismael-sallami.github.io/english-c1-suite/writing-cheatsheet/",
      kind: "WEB",
      repo: "https://github.com/Ismael-Sallami/english-c1-suite",
    },
    {
      name: "English C1 Suite · Guías y Hub",
      blurb: "portada unificada con guías tácticas de Aptis C1, banco real y Topic oral de Trinity",
      href: "https://ismael-sallami.github.io/english-c1-suite/",
      kind: "WEB",
      repo: "https://github.com/Ismael-Sallami/english-c1-suite",
    },
  ],
};
