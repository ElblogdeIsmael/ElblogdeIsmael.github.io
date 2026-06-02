import { Suspense, lazy, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { containerStagger, fadeUp, hasWebGL } from "../lib/anim";

const HeroCanvas = lazy(() => import("./HeroCanvas"));

export default function Hero() {
  const reduce = useReducedMotion();
  const show3d = useMemo(() => !reduce && hasWebGL(), [reduce]);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-24">
      {/* Capa 3D / fallback */}
      <div className="absolute inset-0 -z-0">
        {show3d ? (
          <Suspense fallback={null}>
            <HeroCanvas />
          </Suspense>
        ) : (
          // Fallback estático: constelación en reposo sobre rejilla técnica
          <div className="absolute inset-0 [background:linear-gradient(rgba(46,230,197,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(46,230,197,0.05)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_70%_45%,black,transparent_72%)]">
            <svg className="absolute inset-0 size-full opacity-70" aria-hidden="true">
              <g stroke="rgba(46,230,197,0.35)" strokeWidth="1">
                <line x1="62%" y1="30%" x2="78%" y2="44%" />
                <line x1="78%" y1="44%" x2="68%" y2="62%" />
                <line x1="68%" y1="62%" x2="84%" y2="70%" />
                <line x1="62%" y1="30%" x2="84%" y2="34%" />
              </g>
              <g fill="#2ee6c5">
                <circle cx="62%" cy="30%" r="3" />
                <circle cx="84%" cy="34%" r="2.5" />
                <circle cx="68%" cy="62%" r="2.5" />
                <circle cx="84%" cy="70%" r="3" />
              </g>
              <circle cx="78%" cy="44%" r="3.5" fill="#b8ff3c" />
            </svg>
          </div>
        )}
      </div>

      <motion.div
        variants={containerStagger}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8"
      >
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-bg-2/60 px-4 py-1.5 text-xs font-600 uppercase tracking-[0.18em] text-teal backdrop-blur-sm"
        >
          <span className="size-1.5 rounded-full bg-lime" />
          Universidad de Granada · GIIADE
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="mt-6 max-w-3xl font-display text-5xl font-800 leading-[0.98] tracking-tight text-ink sm:text-7xl"
        >
          Web <span className="text-gradient">de recursos</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg"
        >
          Apuntes, prácticas y materiales del Doble Grado en Ingeniería
          Informática y Administración y Dirección de Empresas. Una plataforma
          creada por{" "}
          <span className="font-600 text-ink">Ismael Sallami Moreno</span> para
          compartir conocimiento y facilitar el aprendizaje.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#cursos"
            className="group inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-700 text-[#04140f] shadow-[0_8px_30px_-8px_rgba(46,230,197,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_38px_-8px_rgba(46,230,197,0.75)]"
          >
            Explorar cursos
            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="/historia.html"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-700 text-ink transition-colors hover:border-teal hover:text-teal"
          >
            La historia
          </a>
        </motion.div>
      </motion.div>

      <a
        href="#cursos"
        aria-label="Bajar a cursos"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-mist transition-colors hover:text-teal"
      >
        <ArrowDown className="size-6 animate-bounce" />
      </a>
    </section>
  );
}
