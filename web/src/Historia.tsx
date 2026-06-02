import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Sprout, Hammer, Compass } from "lucide-react";
import { containerStagger, fadeUp } from "./lib/anim";

const MILESTONES = [
  {
    icon: Sprout,
    kicker: "El punto de partida",
    title: "Una carpeta de apuntes que se desbordó",
    body: "Todo empezó guardando resúmenes y prácticas para mí mismo. Decidí subirlos por si a alguien más le servían, y de ahí salió la idea de ponerlos en un sitio donde cualquiera pudiera encontrarlos.",
  },
  {
    icon: Hammer,
    kicker: "Aprender a construir",
    title: "La web como proyecto en sí misma",
    body: "Pasé de un HTML plano a montar la web con React y un sistema de diseño propio. Cada rediseño fue también una excusa para practicar lo que iba estudiando: front-end, 3D, automatización de documentos en LaTeX.",
  },
  {
    icon: Compass,
    kicker: "Hacia dónde voy",
    title: "Computación, IA y lo que venga",
    body: "Ahora el foco está en la mención de Computación y Sistemas Inteligentes, y en seguir abriendo material curso a curso. La idea es simple: que a quien venga detrás le cueste un poco menos.",
  },
];

export default function Historia() {
  return (
    <div className="bg-mesh grain relative min-h-screen">
      {/* Topbar */}
      <header className="sticky top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="/" className="flex items-center gap-2 font-display text-lg font-700 text-ink">
            <BookOpen className="size-5 text-teal" />
            Recursos <span className="text-teal">GIIADE</span>
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-700 text-ink transition-colors hover:border-teal hover:text-teal"
          >
            <ArrowLeft className="size-4" /> Volver al inicio
          </a>
        </nav>
      </header>

      <main className="relative z-10 mx-auto max-w-4xl px-5 pb-28 pt-20 sm:px-8">
        <motion.div initial="hidden" animate="show" variants={containerStagger}>
          <motion.p
            variants={fadeUp}
            className="text-xs font-700 uppercase tracking-[0.22em] text-teal"
          >
            La historia
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-3 max-w-2xl font-display text-5xl font-800 leading-[1.02] tracking-tight text-ink sm:text-6xl"
          >
            Aprender <span className="text-gradient">a construir</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-5 max-w-xl text-lg leading-relaxed text-mist">
            De la curiosidad multidisciplinar a una plataforma de recursos. Este
            es el recorrido que hay detrás del proyecto.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerStagger}
          className="relative mt-16 border-l border-line pl-8 sm:pl-12"
        >
          {MILESTONES.map((m, i) => (
            <motion.li key={m.kicker} variants={fadeUp} className="relative pb-14 last:pb-0">
              {/* nodo */}
              <span className="absolute -left-[2.45rem] flex size-9 items-center justify-center rounded-full border border-teal/40 bg-bg-2 text-teal sm:-left-[3.7rem]">
                <m.icon className="size-4" />
              </span>
              <span className="font-display text-sm font-700 uppercase tracking-wider text-lime">
                {String(i + 1).padStart(2, "0")} · {m.kicker}
              </span>
              <h2 className="mt-2 font-display text-2xl font-700 text-ink sm:text-3xl">
                {m.title}
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-mist">
                {m.body}
              </p>
            </motion.li>
          ))}
        </motion.ol>

        <div className="mt-8 hairline" />
        <a
          href="/#cursos"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-700 text-[#04140f] transition-transform duration-200 hover:-translate-y-0.5"
        >
          Explorar los cursos
        </a>
      </main>
    </div>
  );
}
