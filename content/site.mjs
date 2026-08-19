/**
 * Site wide metadata. Every template reads from here, so a value defined once
 * stays consistent across the whole site.
 *
 * @author Ismael Sallami Moreno
 */

export const site = {
  name: "Recursos GIIADE",
  shortName: "GIIADE",
  url: "https://elblogdeismael.github.io",
  lang: "es",
  author: "Ismael Sallami Moreno",
  /** Browser chrome colour. Matches the light theme background, the default. */
  themeColor: "#eef2ef",

  title: "Recursos Ingeniería Informática - ADE del Blog de Ismael",
  description:
    "Recursos, apuntes, prácticas y materiales del Doble Grado en Ingeniería " +
    "Informática y ADE de la Universidad de Granada. Plataforma creada por " +
    "Ismael Sallami para compartir materiales útiles y facilitar el aprendizaje.",
  keywords:
    "Ismael, Sallami, Moreno, elblogdeismael, ingeniería informática, " +
    "administración y dirección de empresas, ugr, giiade, ade, apuntes, " +
    "exámenes, ejercicios, infoade, wuolah",

  /** Open Graph image, resolved against `url`. */
  ogImage: "/assets/images/hero3.jpg",
  favicon: "/assets/images/libros2.svg",
  courseIcon: "/assets/images/librosApilados.svg",

  /** Third party ids. Empty string disables the corresponding snippet. */
  analyticsId: "G-5W0LVJ83W7",
  adsenseClient: "ca-pub-4911114068279857",
  googleSiteVerification: "RqrgvwoKpvaqnIHZE5AnRm69J3G1KFaw1BxnlZ7hn3A",

  /** Where the contact form posts. */
  contactEndpoint: "https://formsubmit.co/ismEngineer23@gmail.com",

  /**
   * The repository this site is generated from. It is not the same as the
   * GitHub account below: that one is the person, this one is the code.
   * The top bar links to it, next to the brand.
   */
  repo: "https://github.com/ElblogdeIsmael/ElblogdeIsmael.github.io",

  social: [
    { label: "GitHub", href: "https://github.com/ismael-sallami" },
    { label: "Web personal", href: "https://ismael-sallami.github.io/" },
  ],

  /** Top bar links, in order. Section links are appended by the generator. */
  nav: [
    { label: "Sobre mí", href: "/#sobre-mi" },
    { label: "Hablemos", href: "/#contacto" },
    { label: "La historia", href: "/historia/" },
  ],
};

export default site;
