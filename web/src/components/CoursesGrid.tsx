import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { COURSES } from "../data/courses";
import { containerStagger, fadeUp } from "../lib/anim";

export default function CoursesGrid() {
  return (
    <section id="cursos" className="relative z-10 mx-auto max-w-6xl px-5 py-28 sm:px-8">
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
          Cursos
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="mt-3 font-display text-4xl font-800 tracking-tight text-ink sm:text-5xl"
        >
          Cinco cursos, un recorrido
        </motion.h2>
        <motion.div variants={fadeUp} className="mt-6 hairline max-w-sm" />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((c, i) => (
            <motion.a
              key={c.slug}
              variants={fadeUp}
              href={`/courses/${c.slug}.html`}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-bg-2 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal/60 hover:shadow-[0_20px_60px_-20px_rgba(46,230,197,0.4)] ${
                i === 0 ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* glow al hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(40rem_20rem_at_var(--x,80%)_0%,rgba(46,230,197,0.10),transparent_60%)]" />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-bg-3 px-3 py-1 text-[0.7rem] font-700 uppercase tracking-wider text-lime">
                    {c.tag}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-700 text-ink">
                    {c.label}
                  </h3>
                </div>
                <span className="font-display text-5xl font-800 leading-none text-bg-3 transition-colors duration-300 group-hover:text-teal/30">
                  0{c.n}
                </span>
              </div>

              <p className="relative mt-3 text-sm leading-relaxed text-mist">
                {c.blurb}
              </p>

              <ul className="relative mt-5 flex flex-wrap gap-2">
                {c.subjects.slice(0, i === 0 ? 5 : 4).map((s) => (
                  <li
                    key={s}
                    className="rounded-md border border-line bg-bg/40 px-2.5 py-1 text-xs text-mist"
                  >
                    {s}
                  </li>
                ))}
              </ul>

              <div className="relative mt-6 flex items-center gap-2 text-sm font-700 text-teal">
                Ver contenido
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
