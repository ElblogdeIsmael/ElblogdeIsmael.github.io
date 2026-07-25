/**
 * Copy for the home page.
 *
 * Text lives here rather than inside the template, so wording can change
 * without touching markup. The numbers under the hero are not here on purpose:
 * they are counted from the content registry at build time and can never drift
 * from what the site actually holds.
 *
 * @author Ismael Sallami Moreno
 */

export const home = {
  hero: {
    kicker: "Universidad de Granada · GIIADE",
    title: "Web de",
    titleOutline: "recursos",
    name: "Web de recursos",
    lead:
      "Apuntes, prácticas y materiales del Doble Grado en Ingeniería Informática " +
      "y Administración y Dirección de Empresas. La mantiene " +
      "<strong>Ismael Sallami Moreno</strong>: subo lo que voy haciendo por si le " +
      "sirve a alguien más.",
  },

  /** Ticker between the hero and the sections. Decoration only. */
  marquee: [
    "Apuntes",
    "Prácticas",
    "Exámenes resueltos",
    "LaTeX",
    "Markdown",
    "Tests autocorregibles",
    "Bibliografía",
    "Código",
  ],

  sections: {
    kicker: "Qué hay aquí",
    title: "Secciones",
  },

  about: {
    kicker: "Sobre mí",
    title: "Ismael Sallami Moreno",
    role: "Estudiante de informática y ADE, siempre liado con algún proyecto",
    body:
      "Estudio el Doble Grado en Ingeniería Informática y ADE en la Universidad " +
      "de Granada. Esta web reúne lo que voy aprendiendo por el camino, con la " +
      "intención de que le sirva a quien venga detrás.",
    place: "Granada",
    period: "UGR · 2021—hoy",
    /* Cuatro entradas: la rejilla es de dos columnas y un número par la deja
       cuadrada, sin huecos. */
    areas: [
      { name: "Ingeniería de Software", note: "Web · herramientas propias" },
      { name: "Inteligencia Artificial", note: "Computación · IA" },
      { name: "Inversiones y gestión", note: "ADE · finanzas" },
      { name: "Documentación técnica", note: "HTML · LaTeX" },
    ],
  },

  contact: {
    kicker: "Hablemos",
    title: "Formulario de contacto",
    body:
      "¿Una duda, una errata que reportar o una propuesta de colaboración? " +
      "Rellena el formulario y te responderé lo antes posible.",
    subject: "Nuevo mensaje · Recursos GIIADE",
  },
};

export default home;
