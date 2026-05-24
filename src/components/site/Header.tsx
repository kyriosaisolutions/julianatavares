import { useEffect, useState } from "react";
import { JTLogo } from "./JTLogo";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "bg-cream/80 backdrop-blur-md border-b border-nude/10" : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-4 flex items-center justify-between">
        <a href="#top" aria-label="Studio Juliana Tavares">
          <JTLogo />
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm tracking-wide text-ink/80 hover:text-nude transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-nude text-nude px-6 py-2.5 text-sm hover:bg-nude hover:text-cream transition-colors"
        >
          Agendar horário
        </a>
      </div>
    </header>
  );
}
