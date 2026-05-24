import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Pill } from "./Pill";
import { CircleArrow } from "./CircleArrow";

const TITLE = "Cuidamos do seu cabelo como ele merece";

export function About() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;
    const letters = titleRef.current.querySelectorAll(".jt-letter");
    const ctx = gsap.context(() => {
      gsap.from(letters, {
        opacity: 0,
        y: 30,
        stagger: 0.015,
        ease: "power2.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 80%", end: "top 40%", scrub: true },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="sobre" className="py-24 lg:py-36 text-center">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <Pill>Sobre nós</Pill>
        </motion.div>

        <h2
          ref={titleRef}
          className="mt-8 font-display text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.05]"
        >
          {TITLE.split("").map((ch, i) => (
            <span key={i} className="jt-letter inline-block">
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 text-ink/70 max-w-2xl mx-auto leading-relaxed"
        >
          Há mais de uma década, a Juliana Tavares dedica seu trabalho a entender,
          respeitar e realçar a textura única de cada fio. Cortes precisos,
          finalizações sob medida e tratamentos profundos — pensados exclusivamente
          para cabelos ondulados, cacheados e crespos.
        </motion.p>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          href="#servicos"
          className="mt-10 inline-flex items-center gap-4 group"
        >
          <span className="font-display italic text-xl text-ink">Descubra nossa história</span>
          <CircleArrow className="text-nude transition-transform duration-300 group-hover:translate-x-1" />
        </motion.a>
      </div>
    </section>
  );
}
