import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Pill } from "./Pill";
import { ArchedImage } from "./ArchedImage";

const services = [
  {
    title: "Ondulados",
    desc: "Cortes que valorizam o movimento natural das ondas, com finalização leve e duradoura.",
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=80",
    bg: "sage-light" as const,
  },
  {
    title: "Cacheados",
    desc: "Técnicas exclusivas para definir cachos com volume, brilho e respeito ao formato.",
    img: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=700&q=80",
    bg: "nude-light" as const,
  },
  {
    title: "Crespos",
    desc: "Hidratação profunda, modelagem precisa e cuidados pensados para a beleza dos crespos.",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=700&q=80",
    bg: "sage" as const,
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
    <section ref={root} id="servicos" className="py-24 lg:py-32 bg-cream overflow-hidden">
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
          {services.map((s, i) => (
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
                href="#contato"
                className="mt-5 font-display italic text-nude text-lg hover:translate-x-1 inline-flex items-center gap-2 transition-transform"
              >
                Ver mais →
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
