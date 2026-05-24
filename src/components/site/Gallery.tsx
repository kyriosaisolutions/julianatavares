import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Pill } from "./Pill";
import { ArchedImage } from "./ArchedImage";

const cols = [
  [
    { src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80&fit=crop", h: "h-[360px]" },
    { src: "https://images.unsplash.com/photo-1604004555489-723a93d6ce74?w=800&q=80&fit=crop", h: "h-[280px]" },
  ],
  [
    { src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80&fit=crop", h: "h-[260px]" },
    { src: "https://images.unsplash.com/photo-1488207984690-cbe539ea9eb2?w=800&q=80&fit=crop", h: "h-[380px]" },
  ],
  [
    { src: "https://images.unsplash.com/photo-1576661416480-2c1a13c3aff5?w=800&q=80&fit=crop", h: "h-[340px]" },
    { src: "https://images.unsplash.com/photo-1542596594-649edbc13630?w=800&q=80&fit=crop", h: "h-[300px]" },
  ],
];

const speeds = [-8, -14, -5];
const bgs = ["sage-light", "sage", "sage-dark"] as const;

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

        <div className="gallery mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10">
          {cols.map((col, i) => (
            <div key={i} className="jt-gallery-col gallery-col flex flex-col gap-6 lg:gap-10">
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
