import { useEffect, useState } from "react";
import { BookOpen } from "lucide-react";

const LINKS = [
  { label: "Cursos", href: "#cursos" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Hablemos", href: "#contacto" },
  { label: "La historia", href: "/historia.html" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2 font-display text-lg font-700 tracking-tight text-ink"
        >
          <BookOpen className="size-5 text-teal transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" />
          <span>
            Recursos <span className="text-teal">GIIADE</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 sm:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative rounded-full px-4 py-2 text-sm font-600 text-mist transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#cursos"
          className="rounded-full bg-teal px-4 py-2 text-sm font-700 text-[#04140f] transition-transform duration-200 hover:-translate-y-0.5 sm:hidden"
        >
          Cursos
        </a>
      </nav>
    </header>
  );
}
