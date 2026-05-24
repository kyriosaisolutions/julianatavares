import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { Pill } from "./Pill";
import { CircleArrow } from "./CircleArrow";

const TITLE = "Cuidamos do seu cabelo como ele merece";

const OWNER_PHOTO =
  "https://julianatavares.com.br/wp-content/uploads/2023/07/IMG_5900-copiar-2-1-1024x683.jpg";

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
    <section id="sobre" className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Two-column: photo | text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl aspect-[4/5] w-full max-w-md mx-auto lg:mx-0">
              <img
                src={OWNER_PHOTO}
                alt="Juliana Tavares — fundadora do Studio"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* decorative sage accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-sage-light/60 -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col items-start"
          >
            <Pill>Sobre nós</Pill>

            <h2
              ref={titleRef}
              className="mt-8 font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.08]"
            >
              {TITLE.split(" ").map((word, wi, arr) => (
                <span key={wi} className="inline-block whitespace-nowrap">
                  {word.split("").map((ch, ci) => (
                    <span key={ci} className="jt-letter inline-block">{ch}</span>
                  ))}
                  {wi < arr.length - 1 && <span className="jt-letter inline-block">&nbsp;</span>}
                </span>
              ))}
            </h2>

            <strong>
              <p className="mt-8 text-ink/70 max-w-xl leading-relaxed">
                Há mais de uma década, a Juliana Tavares dedica seu trabalho a entender,
                respeitar e realçar a textura única de cada fio. Cortes precisos,
                finalizações sob medida e tratamentos profundos — pensados exclusivamente
                para cabelos ondulados, cacheados e crespos.
              </p>
            </strong>

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
          </motion.div>

        </div>
      </div>
    </section>
  );
}
