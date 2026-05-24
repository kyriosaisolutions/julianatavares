import { JTLogo } from "./JTLogo";
import { Instagram, MessageCircle, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-cream pt-20 pb-10 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <JTLogo />
            <p className="mt-6 text-ink/65 text-sm leading-relaxed max-w-xs">
              Studio especializado em cabelos ondulados, cacheados e crespos.
              Beleza que respeita a sua textura natural.
            </p>
            <div className="mt-6 flex gap-4 text-nude">
              <a href="https://instagram.com/juliana.cabelosreais" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="https://wa.me/5581985880205" target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={18} /></a>
              <a href="https://facebook.com/StudioJuTavares" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-display italic text-nude text-xl">Navegação</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink/70">
              <li><a href="#sobre" className="hover:text-nude">Sobre</a></li>
              <li><a href="#servicos" className="hover:text-nude">Serviços</a></li>
              <li><a href="#galeria" className="hover:text-nude">Galeria</a></li>
              <li><a href="#contato" className="hover:text-nude">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display italic text-nude text-xl">Contato</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink/70">
              <li>
                <a href="https://wa.me/5581985880205" target="_blank" rel="noreferrer" className="hover:text-nude">
                  WhatsApp: (81) 98588-0205
                </a>
              </li>
              <li className="leading-relaxed">
                Empresarial Phoenix · Av. João de Barros, 1527<br />
                Sala 102 · Espinheiro, Recife – PE, 52021-180
              </li>
              <li>
                <a href="https://trinks.com/studio-juliana-tavares" target="_blank" rel="noreferrer" className="hover:text-nude">
                  Agendamento online →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-nude/20 text-center text-xs text-ink/50">
          © {new Date().getFullYear()} Studio Juliana Tavares. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
