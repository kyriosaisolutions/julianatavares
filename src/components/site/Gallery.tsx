import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Pill } from "./Pill";
import { ArchedImage } from "./ArchedImage";

const cols = [
  [
    { src: "/gallery/images_1.jpg", h: "h-[360px]" },
    { src: "/gallery/images_2.jpg", h: "h-[280px]" },
  ],
  [
    { src: "/gallery/images_3.jpg", h: "h-[260px]" },
    { src: "/gallery/images_4.jpg", h: "h-[380px]" },
  ],
  [
    { src: "/gallery/images_5.jpg", h: "h-[340px]" },
    { src: "/gallery/images_6.jpg", h: "h-[300px]" },
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
          className="relative z-10 text-center"
        >
          <Pill>Galeria</Pill>
          <h2 className="mt-6 font-display text-5xl md:text-6xl text-ink">
            Transformações <span className="italic text-nude">reais</span>
          </h2>
        </motion.div>

        <div className="gallery mt-24 grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10">
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
