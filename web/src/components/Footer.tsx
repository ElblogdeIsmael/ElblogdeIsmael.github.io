import { BookOpen } from "lucide-react";

const LINKS = [
  { label: "Cursos", href: "#cursos" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Hablemos", href: "#contacto" },
  { label: "La historia", href: "/historia.html" },
  { label: "GitHub", href: "https://github.com/ismael-sallami" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <a href="#top" className="flex items-center gap-2 font-display text-base font-700 text-ink">
            <BookOpen className="size-4 text-teal" />
            Recursos <span className="text-teal">GIIADE</span>
          </a>
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-mist transition-colors hover:text-teal"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 hairline" />
        <p className="mt-6 text-center text-xs text-mist">
          © {new Date().getFullYear()} Ismael Sallami Moreno · Doble Grado en
          Ingeniería Informática y ADE · Universidad de Granada
        </p>
      </div>
    </footer>
  );
}
