// Datos de cursos — portados del bundle anterior (assets/courses-*.js)
// para no perder copy ni enlaces.

export interface Course {
  n: number;
  slug: string;
  label: string;
  cover: string;
  tag: string;
  blurb: string;
  guiaDocente: string | null;
  subjects: string[];
}

export const COURSES: Course[] = [
  {
    n: 1,
    slug: "first",
    label: "Primer Curso",
    cover: "/assets/images/1curso.png",
    tag: "Fundamentos",
    blurb:
      "Bases de la Ingeniería Informática y de ADE. En este curso encontrarás principalmente bibliografía recomendada y libros útiles.",
    guiaDocente:
      "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/",
    subjects: [
      "Fundamentos de Programación",
      "Cálculo",
      "Álgebra Lineal y Estructuras Matemáticas",
      "Introducción a la Economía",
      "Fundamentos Físicos y Tecnológicos",
    ],
  },
  {
    n: 2,
    slug: "second",
    label: "Segundo Curso",
    cover: "/assets/images/2curso.png",
    tag: "Núcleo",
    blurb:
      "Consolidación de estructuras de datos, algoritmia y materias de empresa. Aún con foco en bibliografía y guías docentes.",
    guiaDocente:
      "https://grados.ugr.es/informatica-ade/docencia/plan-estudios/",
    subjects: [
      "Estructuras de Datos",
      "Estadística",
      "Bases de Datos",
      "Contabilidad",
      "Programación Orientada a Objetos",
    ],
  },
  {
    n: 3,
    slug: "third",
    label: "Tercer Curso",
    cover: "/assets/images/3curso.png",
    tag: "Recursos propios",
    blurb:
      "A partir de aquí comienzan los recursos propios: apuntes, prácticas y materiales en HTML, LaTeX y Markdown.",
    guiaDocente: null,
    subjects: [
      "Sistemas Operativos",
      "Redes de Computadores",
      "Ingeniería del Software",
      "Inteligencia Artificial",
      "Dirección de Operaciones",
    ],
  },
  {
    n: 4,
    slug: "fourth",
    label: "Cuarto Curso",
    cover: "/assets/images/4curso.png",
    tag: "Especialidad CSI",
    blurb:
      "Mención de Computación y Sistemas Inteligentes. Aquí el material ya es propio y más completo.",
    guiaDocente: null,
    subjects: [
      "Aprendizaje Automático",
      "Modelos de Computación",
      "Metaheurísticas",
      "Minería de Datos",
      "Sistemas Inteligentes",
      "Dirección Estratégica",
    ],
  },
  {
    n: 5,
    slug: "fifth",
    label: "Quinto Curso",
    cover: "/assets/images/5curso.png",
    tag: "Avanzado",
    blurb:
      "Asignaturas avanzadas de la especialidad y los trabajos finales.",
    guiaDocente: null,
    subjects: [
      "Visión por Computador",
      "Procesamiento del Lenguaje Natural",
      "Sistemas Difusos y Neuronales",
      "TFG / Proyectos",
    ],
  },
];
