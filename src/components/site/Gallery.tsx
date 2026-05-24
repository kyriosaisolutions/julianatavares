import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Pill } from "./Pill";
import { ArchedImage } from "./ArchedImage";

const cols = [
  [
    { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80", h: "h-[360px]" },
    { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80", h: "h-[280px]" },
  ],
  [
    { src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80", h: "h-[260px]" },
    { src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80", h: "h-[380px]" },
  ],
  [
    { src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80", h: "h-[340px]" },
    { src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80", h: "h-[300px]" },
  ],
];

const speeds = [-8, -14, -5];
const bgs = ["sage-light", "nude-light", "sage"] as const;

export function Gallery() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>(".jt-gallery-col").forEach((col, i) => {
          gsap.to(col, {
            yPercent: speeds[i] ?? -10,
            ease: "none",
            scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
          });
        });
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={root} id="galeria" className="py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <Pill>Galeria</Pill>
          <h2 className="mt-6 font-display text-5xl md:text-6xl text-ink">
            Transformações <span className="italic text-nude">reais</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10">
          {cols.map((col, i) => (
            <div key={i} className="jt-gallery-col flex flex-col gap-6 lg:gap-10">
              {col.map((it, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: j * 0.1 }}
                  className={`relative ${it.h} group cursor-pointer`}
                >
                  <ArchedImage
                    src={it.src}
                    alt="Transformação"
                    bg={bgs[(i + j) % bgs.length]}
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-nude/0 group-hover:bg-nude/40 transition-colors duration-500 arch-shape flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100">
                    <span className="font-display italic text-cream text-xl">Ver caso</span>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
