import { motion } from "framer-motion";
import {
  BrainCircuit,
  HeartPulse,
  ChartLine,
  FileCode2,
  Github,
  Globe,
  MapPin,
} from "lucide-react";
import { containerStagger, fadeUp } from "../lib/anim";

const AREAS = [
  { icon: BrainCircuit, label: "Inteligencia Artificial", note: "Computación · IA" },
  { icon: HeartPulse, label: "IA aplicada a Medicina", note: "Investigación" },
  { icon: ChartLine, label: "Inversiones y gestión", note: "ADE · finanzas" },
  { icon: FileCode2, label: "Documentación técnica", note: "HTML · LaTeX" },
];

export default function About() {
  return (
    <section id="sobre-mi" className="relative z-10 mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerStagger}
        className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.8fr_1fr]"
      >
        {/* Retrato */}
        <motion.div variants={fadeUp} className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 rounded-[2rem] bg-[conic-gradient(from_140deg,rgba(46,230,197,0.5),rgba(184,255,60,0.4),rgba(255,182,39,0.35),rgba(46,230,197,0.5))] opacity-60 blur-xl" />
          <img
            src="/assets/images/ismael.png"
            alt="Foto de Ismael Sallami"
            loading="lazy"
            className="relative aspect-square w-full rounded-[2rem] border border-line object-cover"
          />
          <div className="relative mt-4 flex items-center justify-center gap-4 text-sm text-mist">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-4 text-teal" /> Granada
            </span>
            <span className="text-line">·</span>
            <span>UGR · 2021—hoy</span>
          </div>
        </motion.div>

        {/* Texto */}
        <div>
          <motion.p
            variants={fadeUp}
            className="text-xs font-700 uppercase tracking-[0.22em] text-teal"
          >
            Sobre mí
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-display text-4xl font-800 tracking-tight text-ink sm:text-5xl"
          >
            Ismael Sallami Moreno
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-2 text-lg text-lime">
            Estudiante de informática y ADE, siempre liado con algún proyecto
          </motion.p>
          <motion.p variants={fadeUp} className="mt-5 max-w-xl text-base leading-relaxed text-mist">
            Estudio el Doble Grado en Ingeniería Informática y ADE en la
            Universidad de Granada. Esta web reúne lo que voy aprendiendo por el
            camino, con la intención de que le sirva a quien venga detrás.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {AREAS.map((a) => (
              <div
                key={a.label}
                className="flex items-center gap-3 rounded-2xl border border-line bg-bg-2 px-4 py-3 transition-colors hover:border-teal/50"
              >
                <a.icon className="size-5 shrink-0 text-teal" />
                <div>
                  <p className="text-sm font-700 text-ink">{a.label}</p>
                  <p className="text-xs text-mist">{a.note}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/ismael-sallami"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-700 text-ink transition-colors hover:border-teal hover:text-teal"
            >
              <Github className="size-4" /> GitHub
            </a>
            <a
              href="https://ismael-sallami.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-700 text-ink transition-colors hover:border-lime hover:text-lime"
            >
              <Globe className="size-4" /> Web personal
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
