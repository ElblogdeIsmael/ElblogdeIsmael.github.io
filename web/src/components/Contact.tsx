import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { containerStagger, fadeUp } from "../lib/anim";

export default function Contact() {
  return (
    <section id="contacto" className="relative z-10 mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerStagger}
        className="grid grid-cols-1 gap-12 lg:grid-cols-2"
      >
        <div>
          <motion.p
            variants={fadeUp}
            className="text-xs font-700 uppercase tracking-[0.22em] text-teal"
          >
            Hablemos
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-display text-4xl font-800 tracking-tight text-ink sm:text-5xl"
          >
            Formulario de contacto
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 max-w-md text-base leading-relaxed text-mist">
            ¿Una duda, una errata que reportar o una propuesta de colaboración?
            Rellena el formulario y te responderé lo antes posible.
          </motion.p>
        </div>

        <motion.form
          variants={fadeUp}
          action="https://formsubmit.co/ismEngineer23@gmail.com"
          method="POST"
          className="rounded-3xl border border-line bg-bg-2 p-6 sm:p-8"
        >
          <input type="hidden" name="_subject" value="Nuevo mensaje · Recursos GIIADE" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

          <label className="block text-sm font-600 text-ink">
            Tu nombre
            <input
              type="text"
              name="name"
              required
              placeholder="Cómo te llamas"
              className="mt-2 w-full rounded-xl border border-line bg-bg/60 px-4 py-3 text-ink outline-none transition-colors placeholder:text-mist/60 focus:border-teal"
            />
          </label>

          <label className="mt-5 block text-sm font-600 text-ink">
            Email
            <input
              type="email"
              name="email"
              required
              placeholder="tu@email.com"
              className="mt-2 w-full rounded-xl border border-line bg-bg/60 px-4 py-3 text-ink outline-none transition-colors placeholder:text-mist/60 focus:border-teal"
            />
          </label>

          <label className="mt-5 block text-sm font-600 text-ink">
            Mensaje
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Cuéntame…"
              className="mt-2 w-full resize-none rounded-xl border border-line bg-bg/60 px-4 py-3 text-ink outline-none transition-colors placeholder:text-mist/60 focus:border-teal"
            />
          </label>

          <button
            type="submit"
            className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal px-6 py-3.5 text-sm font-700 text-[#04140f] shadow-[0_8px_30px_-8px_rgba(46,230,197,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_38px_-8px_rgba(46,230,197,0.8)]"
          >
            Enviar
            <Send className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
}
