import { motion } from "framer-motion";
import { ArrowUpRight, FlaskConical, FileText, type LucideIcon } from "lucide-react";
import { containerStagger, fadeUp } from "../lib/anim";

type Tool = {
  name: string;
  href: string;
  icon: LucideIcon;
  blurb: string;
  tags: string[];
};

const TOOLS: Tool[] = [
  {
    name: "md2html",
    href: "/md2html/",
    icon: FlaskConical,
    blurb:
      "Convierte apuntes en Markdown en tests HTML autocorregibles, con explicaciones, modo examen y temas. Todo en el navegador.",
    tags: ["Markdown", "Test", "HTML"],
  },
  {
    name: "pdf2md",
    href: "/pdf2md/",
    icon: FileText,
    blurb:
      "Pasa PDF, Word y Excel a Markdown y descarga un .zip con el texto y las imágenes. Sin subir nada a ningún servidor.",
    tags: ["PDF", "DOCX", "XLSX"],
  },
];

export default function Tools() {
  return (
    <section
      id="herramientas"
      className="relative z-10 mx-auto max-w-6xl px-5 py-28 sm:px-8"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerStagger}
      >
        <motion.p
          variants={fadeUp}
          className="text-xs font-700 uppercase tracking-[0.22em] text-teal"
        >
          Herramientas
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="mt-3 font-display text-4xl font-800 tracking-tight text-ink sm:text-5xl"
        >
          Herramientas que he construido
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-xl text-base leading-relaxed text-mist"
        >
          Pequeñas apps que funcionan al 100% en tu navegador: sin instalar nada y
          sin que tus archivos salgan de tu equipo.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-6 hairline max-w-sm" />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {TOOLS.map((t) => {
            const Icon = t.icon;
            return (
              <motion.a
                key={t.name}
                variants={fadeUp}
                href={t.href}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-bg-2 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal/60 hover:shadow-[0_20px_60px_-20px_rgba(46,230,197,0.4)]"
              >
                {/* glow al hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(40rem_20rem_at_80%_0%,rgba(46,230,197,0.10),transparent_60%)]" />

                <div className="relative flex items-start justify-between gap-4">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl border border-line bg-bg-3 text-teal transition-colors duration-300 group-hover:border-teal/50">
                    <Icon className="size-6" />
                  </span>
                  <span className="font-display text-sm font-700 text-bg-3 transition-colors duration-300 group-hover:text-teal/40">
                    {t.href}
                  </span>
                </div>

                <h3 className="relative mt-5 font-display text-2xl font-700 text-ink">
                  {t.name}
                </h3>

                <p className="relative mt-3 text-sm leading-relaxed text-mist">
                  {t.blurb}
                </p>

                <ul className="relative mt-5 flex flex-wrap gap-2">
                  {t.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-line bg-bg/40 px-2.5 py-1 text-xs text-mist"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-6 flex items-center gap-2 text-sm font-700 text-teal">
                  Abrir herramienta
                  <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
