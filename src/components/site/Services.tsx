import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Pill } from "./Pill";
import { ArchedImage } from "./ArchedImage";

const categories = [
  {
    title: "Ondulados",
    desc: "Cortes que valorizam o movimento natural das ondas, com finalização leve e duradoura.",
    img: "https://images.unsplash.com/photo-1569430548104-6ca1cda3ec41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhYmVsbyUyMG9uZHVsYWRvfGVufDB8fDB8fHww",
    bg: "nude-light" as const,
  },
  {
    title: "Cacheados",
    desc: "Técnicas exclusivas para definir cachos com volume, brilho e respeito ao formato.",
    img: "/gallery/servicos_cacheado.jpg",
    bg: "sage" as const,
  },
  {
    title: "Crespos",
    desc: "Hidratação profunda, modelagem precisa e cuidados pensados para a beleza dos crespos.",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1200&q=80&fit=crop",
    bg: "sage-light" as const,
  },
];

const pricing = [
  {
    name: "Corte à Seco",
    price: "R$ 140",
    desc: "Preserva volume e forma natural dos cachos, evitando a distorção que ocorre com o cabelo molhado.",
  },
  {
    name: "Tratamento",
    price: "R$ 120",
    desc: "Personalizado conforme a necessidade do fio: hidratação, nutrição ou reconstrução.",
  },
  {
    name: "Corte + Tratamento",
    price: "R$ 210",
    desc: "Combo completo — corte à seco e tratamento numa única visita.",
  },
  {
    name: "Cronograma Capilar",
    price: "R$ 270",
    desc: "Rotina semanal alternando os 3 tratamentos conforme a necessidade dos fios.",
  },
  {
    name: "Acidificação",
    price: "R$ 140",
    desc: "Equilibra o pH dos fios, sela cutículas e repara danos de química.",
  },
  {
    name: "Cobertura de Brancos",
    price: "R$ 180",
    desc: "Coloração que respeita a estrutura do fio e cobre os fios brancos com naturalidade.",
  },
  {
    name: "Mecha de Contorno",
    price: "a partir de R$ 280",
    desc: "Iluminação estratégica ao redor do rosto para valorizar os traços.",
  },
  {
    name: "Mechas com Pó So Pure",
    price: "R$ 500–800",
    desc: "Mechas com descoloração suave usando pó So Pure. Preço varia por comprimento.",
  },
  {
    name: "Mechas com Reestruturação",
    price: "R$ 600–900",
    desc: "Mechas combinadas com reestruturação capilar profunda. Preço varia por comprimento.",
  },
  {
    name: "Mechas Iluminadas SEM Descoloração",
    price: "R$ 400–700",
    desc: "Iluminação sem descolorar o fio. Técnica que preserva a saúde do cabelo.",
  },
  {
    name: "Tratamento Bond Fusion",
    price: "R$ 200",
    desc: "Reconstrução das ligações internas do fio, recuperando resistência e brilho.",
  },
];

export function Services() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      if (!track.current || !root.current) return;
      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".jt-service-card");
        gsap.set(cards, { opacity: 0, y: 80 });
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "+=120%",
            pin: true,
            scrub: 1,
          },
        });
        cards.forEach((c, i) => {
          tl.to(c, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, i * 0.6);
        });
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <>
      <section ref={root} id="servicos" className="py-24 lg:py-32 bg-sage-light/50 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <Pill>Serviços</Pill>
            <h2 className="mt-6 font-display text-5xl md:text-6xl text-ink">
              Para cada <span className="italic text-nude">textura</span>, um cuidado
            </h2>
          </motion.div>

          <div
            ref={track}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          >
            {categories.map((s, i) => (
              <motion.article
                key={s.title}
                className="jt-service-card flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="w-full max-w-[300px] aspect-[3/4]">
                  <ArchedImage src={s.img} alt={s.title} bg={s.bg} className="w-full h-full" />
                </div>
                <h3 className="mt-8 font-display text-4xl text-ink italic">{s.title}</h3>
                <p className="mt-3 text-ink/70 max-w-xs leading-relaxed">{s.desc}</p>
                <a
                  href="#tabela-servicos"
                  className="mt-5 font-display italic text-nude text-lg hover:translate-x-1 inline-flex items-center gap-2 transition-transform"
                >
                  Ver preços →
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="tabela-servicos" className="py-24 lg:py-32 bg-cream">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <Pill>Tabela de preços</Pill>
            <h2 className="mt-6 font-display text-5xl md:text-6xl text-ink">
              Transparência em <span className="italic text-nude">cada serviço</span>
            </h2>
          </motion.div>

          <div className="mt-16 divide-y divide-nude/30">
            {pricing.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
              >
                <div className="flex-1">
                  <p className="font-display text-xl text-ink">{item.name}</p>
                  <p className="mt-1 text-sm text-ink/60 max-w-md leading-relaxed">{item.desc}</p>
                </div>
                <p className="font-display italic text-nude text-xl sm:text-2xl whitespace-nowrap">{item.price}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <a
              href="https://trinks.com/studio-juliana-tavares"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-sage-dark text-cream rounded-full px-10 py-5 text-lg font-medium hover:bg-ink transition-colors group"
            >
              Agendar horário
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
