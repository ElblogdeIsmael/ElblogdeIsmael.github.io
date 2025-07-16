'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * language toggle
 */
document.getElementById("language-select").addEventListener("change", (event) => {
  const translations = {
    es: {
      // Header
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
      cv: "Descargar CV",
      // Hero Section
      heroTitle: "Hola soy",
      heroName: "Ismael", // Added for specific translation of name
      heroSubtitle: "Estudiante del doble grado en Ingeniería Informática y Administración y Dirección de Empresas",
      heroText: "En este momento estoy estudiando el doble grado en Ingeniería Informática y Administración y Dirección de Empresas en la Universidad de Granada. Me apasiona la programación, el desarrollo web y la creación de aplicaciones que mejoren la vida de las personas, así como las inversiones y lo que se esconde detrás de estas. Me gustaría contribuir a proyectos relacionados con la investigación del cáncer, así como otros campos relacionados con la física, matemáticas y la informática. Estoy siempre en busca de nuevos desafíos y oportunidades para aprender y crecer profesionalmente.",
      heroContactButton: "Contactame", // New translation
      heroAboutButton: "Sobre mí", // New translation
      heroProjectsCount: "Proyectos", // New translation for '10+ Proyectos'
      heroRotateImgAlt: "Soy desarrollador", // Alt text for image

      // About Section
      aboutSubtitle: "Mejoras en campos como la medicina",
      aboutTitle: "Me gustaría contribuir al campo médico aprovechando la Inteligencia Artificial, así como las inversiones y gestión del patrimonio, entre otros campos.",
      aboutText1: "Actualmente, la inteligencia artificial está revolucionando el sector sanitario, permitiendo diagnósticos más precisos, tratamientos personalizados y una gestión más eficiente de los recursos médicos. Me motiva la idea de aplicar mis conocimientos en informática para desarrollar soluciones innovadoras que ayuden a mejorar la calidad de vida de las personas.",
      aboutText2: "Además, me interesa el mundo de las inversiones y la gestión del patrimonio, donde la tecnología puede aportar transparencia y eficiencia. Mi objetivo es seguir aprendiendo y contribuir en proyectos que generen un impacto positivo en la sociedad, combinando mis habilidades técnicas con mi pasión por el crecimiento personal y profesional.",
      aboutViewProjects: "Ver Proyectos", // New translation

      // Projects Section
      projectsSubtitle: "Proyectos",
      projectsTitle: "Mis trabajos",
      projectsText: "En esta sección puedes encontrar una selección de mis proyectos más destacados. Cada uno de ellos refleja mi pasión por la programación y mi compromiso con la excelencia.",
      projectsCardSubtitleWeb: "Web", // New translation for project card
      projectsCardTitleWeb: "Web con contenido del doble grado de Ingeniería Informática + ADE", // New translation for project card title
      projectsCardViewProject: "Ver Proyecto", // New translation for project card link

      // Skills Section
      skillsSubtitle: "Mis habilidades", // New translation
      skillsTitle: "Buscando el desarrollo o mejora de habilidades", // New translation
      skillsText: "A lo largo de mi carrera, he adquirido una variedad de habilidades técnicas y blandas que me permiten abordar proyectos complejos y colaborar eficazmente en equipos multidisciplinarios. Estoy comprometido con el aprendizaje continuo y la mejora constante, buscando siempre nuevas oportunidades para crecer profesionalmente. Aún me queda mucho por aprender.", // New translation
      skillEnglishLevel: "C1", // Specific text for English level

      // Contact Section
      contactSubtitle: "Formulario de Contacto",
      contactTitle: "Página de Contacto",
      contactText: "Si tiene alguna duda, desea comunicar algún tipo de error o algo por el estilo que requiera conectarse conmigo, rellena el formulario de contacto y te responderé lo antes posible.",
      contactFormName: "Tu Nombre", // Placeholder
      contactFormEmail: "Email", // Placeholder
      contactFormMessage: "Mensaje", // Placeholder
      contactFormSend: "Enviar", // Button text

      // Footer
      footerCopyright: "&copy; 2025 Ismael Sallami Moreno. Todos los derechos reservados.",
      footerTerms: "Términos y Condiciones",
      footerPrivacy: "Política de Privacidad",
      backToTop: "Volver arriba",
      
      // Page title
      pageTitle: "Ismael Sallami - Web Personal"
    },
    en: {
      // Header
      home: "Home",
      about: "About Me",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      cv: "Download CV",
      // Hero Section
      heroTitle: "Hello, I'm",
      heroName: "Ismael", // Added for specific translation of name
      heroSubtitle: "Double Degree Student in Computer Engineering and Business Administration",
      heroText: "I am currently studying the double degree in Computer Engineering and Business Administration at the University of Granada. I am passionate about programming, web development, and creating applications that improve people's lives, as well as investments and what lies behind them. I would like to contribute to projects related to cancer research, as well as other fields related to physics, mathematics, and computer science. I am always looking for new challenges and opportunities to learn and grow professionally.",
      heroContactButton: "Contact Me",
      heroAboutButton: "About Me",
      heroProjectsCount: "Projects",
      heroRotateImgAlt: "I'm developer from New York",

      // About Section
      aboutSubtitle: "Improvements in fields such as medicine",
      aboutTitle: "I would like to contribute to the medical field by leveraging Artificial Intelligence, as well as investments and wealth management, among other fields.",
      aboutText1: "Currently, artificial intelligence is revolutionizing the healthcare sector, enabling more accurate diagnoses, personalized treatments, and more efficient management of medical resources. I am motivated by the idea of applying my knowledge in computer science to develop innovative solutions that help improve people's quality of life.",
      aboutText2: "In addition, I am interested in the world of investments and wealth management, where technology can bring transparency and efficiency. My goal is to continue learning and contribute to projects that generate a positive impact on society, combining my technical skills with my passion for personal and professional growth.",
      aboutViewProjects: "View Projects",

      // Projects Section
      projectsSubtitle: "Projects",
      projectsTitle: "My Work",
      projectsText: "In this section, you can find a selection of my most outstanding projects. Each one reflects my passion for programming and my commitment to excellence.",
      projectsCardSubtitleWeb: "Web",
      projectsCardTitleWeb: "Website with content from the Double Degree in Computer Engineering + Business Administration",
      projectsCardViewProject: "View Project",

      // Skills Section
      skillsSubtitle: "My Skills",
      skillsTitle: "Seeking skill development or improvement",
      skillsText: "Throughout my career, I have acquired a variety of technical and soft skills that allow me to tackle complex projects and collaborate effectively in multidisciplinary teams. I am committed to continuous learning and constant improvement, always seeking new challenges and opportunities to grow professionally. I still have a lot to learn.",
      skillEnglishLevel: "C1",

      // Contact Section
      contactSubtitle: "Contact Form",
      contactTitle: "Contact Page",
      contactText: "If you have any questions, want to report an error, or anything else that requires connecting with me, fill out the contact form and I will respond as soon as possible.",
      contactFormName: "Your Name",
      contactFormEmail: "Email",
      contactFormMessage: "Message",
      contactFormSend: "Send",

      // Footer
      footerCopyright: "&copy; 2025 Ismael Sallami Moreno. All rights reserved.",
      footerTerms: "Terms and Conditions",
      footerPrivacy: "Privacy Policy",
      backToTop: "Back to Top",

      // Page title
      pageTitle: "Ismael Sallami - Personal Web"
    },
  };

  const selectedLanguage = event.target.value;

  // Update page title
  document.title = translations[selectedLanguage].pageTitle;

  // Update header and navigation
  document.querySelector(".navbar-link[href='#home']").textContent = translations[selectedLanguage].home;
  document.querySelector(".navbar-link[href='#about']").textContent = translations[selectedLanguage].about;
  document.querySelector(".navbar-link[href='#projects']").textContent = translations[selectedLanguage].projects;
  document.querySelector(".navbar-link[href='#skills']").textContent = translations[selectedLanguage].skills;
  document.querySelector(".navbar-link[href='#contact']").textContent = translations[selectedLanguage].contact;
  document.querySelector(".btn.btn-primary").textContent = translations[selectedLanguage].cv; // Specific selector for CV button

  // Update hero section
  document.querySelector(".hero-title span").textContent = translations[selectedLanguage].heroTitle;
  document.querySelector(".hero-title strong").textContent = translations[selectedLanguage].heroName; // Targeting the <strong> for the name
  document.querySelector(".hero-title strong").nextSibling.textContent = " " + translations[selectedLanguage].heroSubtitle; // Text directly after <strong>
  document.querySelector(".hero-text").textContent = translations[selectedLanguage].heroText;
  document.querySelector(".btn-group .btn-primary.blue").textContent = translations[selectedLanguage].heroContactButton; // Contact Me button
  document.querySelector(".btn-group .btn:not(.btn-primary)").textContent = translations[selectedLanguage].heroAboutButton; // About Me button
  document.querySelector(".elem.elem-2 .elem-text").textContent = translations[selectedLanguage].heroProjectsCount;
  document.querySelector(".hero-banner .rotate-img").setAttribute("alt", translations[selectedLanguage].heroRotateImgAlt); // Update alt attribute

  // Update about section
  // Note: There are two .section-subtitle and .h2.section-title classes.
  // We need to be more specific or target them by their parent section.
  // For the 'about' section, the subtitle and title are the first occurrences.
  const aboutSection = document.getElementById("about");
  aboutSection.querySelector(".section-subtitle").textContent = translations[selectedLanguage].aboutSubtitle;
  aboutSection.querySelector(".h2.section-title").textContent = translations[selectedLanguage].aboutTitle;
  aboutSection.querySelectorAll(".section-text")[0].textContent = translations[selectedLanguage].aboutText1;
  aboutSection.querySelectorAll(".section-text")[1].textContent = translations[selectedLanguage].aboutText2;
  aboutSection.querySelector(".btn.btn-primary.blue").textContent = translations[selectedLanguage].aboutViewProjects;

  // Update projects section
  const projectsSection = document.getElementById("projects");
  projectsSection.querySelector(".section-subtitle").textContent = translations[selectedLanguage].projectsSubtitle;
  projectsSection.querySelector(".h2.section-title").textContent = translations[selectedLanguage].projectsTitle;
  // Make sure to select the section-text specific to the projects section, as there are other .section-text elements
  const projectSectionTexts = projectsSection.querySelectorAll(".section-text");
  if (projectSectionTexts.length > 0) {
      projectSectionTexts[0].textContent = translations[selectedLanguage].projectsText;
  }
  // Update project card text
  document.querySelector(".portfolio-card .card-subtitle").textContent = translations[selectedLanguage].projectsCardSubtitleWeb;
  document.querySelector(".portfolio-card .h3.card-title").textContent = translations[selectedLanguage].projectsCardTitleWeb;
  document.querySelector(".portfolio-card .btn-link span").textContent = translations[selectedLanguage].projectsCardViewProject;


  // Update skills section
  const skillsSection = document.getElementById("skills");
  skillsSection.querySelector(".section-subtitle").textContent = translations[selectedLanguage].skillsSubtitle;
  skillsSection.querySelector(".h2.section-title").textContent = translations[selectedLanguage].skillsTitle;
  skillsSection.querySelector(".section-text").textContent = translations[selectedLanguage].skillsText;
  // Update English skill level
  const englishSkillData = skillsSection.querySelector('.skills-item:last-child .skills-data');
  if (englishSkillData) {
      englishSkillData.textContent = translations[selectedLanguage].skillEnglishLevel;
  }
  const englishSkillTitle = skillsSection.querySelector('.skills-item:last-child .skills-title');
    if (englishSkillTitle) {
        // This targets the text content of the h3, preserving the image.
        englishSkillTitle.childNodes[1].nodeValue = " " + (selectedLanguage === "es" ? "Inglés" : "English");
    }


  // Update contact section
  const contactSection = document.getElementById("contact");
  contactSection.querySelector(".card-subtitle").textContent = translations[selectedLanguage].contactSubtitle;
  contactSection.querySelector(".h2.section-title").textContent = translations[selectedLanguage].contactTitle;
  contactSection.querySelector(".small-text").textContent = translations[selectedLanguage].contactText;
  contactSection.querySelector(".form .contact-input[name='name']").setAttribute("placeholder", translations[selectedLanguage].contactFormName);
  contactSection.querySelector(".form .contact-input[name='email']").setAttribute("placeholder", translations[selectedLanguage].contactFormEmail);
  contactSection.querySelector(".form .contact-input[name='message']").setAttribute("placeholder", translations[selectedLanguage].contactFormMessage);
  contactSection.querySelector(".form .btn-submit").textContent = translations[selectedLanguage].contactFormSend;


  // Update footer
  document.querySelector(".copyright").innerHTML = translations[selectedLanguage].footerCopyright;
  document.querySelector(".footer-link[href='https://www.termsfeed.com/live/83259c50-7f6f-4565-b0d8-b43deaf7e92c']").textContent = translations[selectedLanguage].footerTerms;
  document.querySelector(".footer-link[href='https://www.freeprivacypolicy.com/live/b5f07469-9f8f-4e3e-be2e-9d2f9977cad4']").textContent = translations[selectedLanguage].footerPrivacy;
  document.querySelector(".back-to-top").textContent = translations[selectedLanguage].backToTop;
});

// Set initial language on page load (optional, defaults to what's in HTML if not set)
document.addEventListener("DOMContentLoaded", () => {
    // Trigger the change event once on load to apply initial translations if needed
    // based on the default selected option in the language-select.
    const languageSelect = document.getElementById("language-select");
    if (languageSelect) {
        languageSelect.dispatchEvent(new Event('change'));
    }
});