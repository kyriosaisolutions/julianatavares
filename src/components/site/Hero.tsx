import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArchedImage } from "./ArchedImage";
import { CurvedText } from "./CurvedText";
import { CircleArrow } from "./CircleArrow";
import { Instagram, MessageCircle, Music2 } from "lucide-react";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        gsap.to(".jt-hero-front", {
          yPercent: -10,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to(".jt-hero-back", {
          yPercent: -25,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to(".jt-hero-curved", {
          rotate: 360,
          transformOrigin: "50% 50%",
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={root} id="top" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left */}
        <div className="lg:col-span-4 relative">
          <h1 className="font-display text-6xl lg:text-7xl xl:text-8xl leading-[0.95] text-ink">
            Beleza que
            <br />
            <span className="inline-flex items-center gap-3">
              <span className="italic text-nude">liberta</span>
              <CircleArrow className="text-nude -rotate-45" size={44} />
            </span>
            <br />
            <span className="italic">seus cachos</span>
          </h1>
          <a
            href="#sobre"
            className="mt-12 inline-flex items-center gap-4 group"
          >
            <span className="font-display italic text-xl text-ink">Saiba mais</span>
            <CircleArrow className="text-nude transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Right: arched images */}
        <div className="lg:col-span-7 lg:col-start-6 relative flex items-end justify-center gap-4 md:gap-8">
          <div className="jt-hero-front relative w-[280px] h-[400px] md:w-[380px] md:h-[540px] shrink-0">
            <ArchedImage
              bg="nude-light"
              src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80"
              alt="Mulher com cabelo crespo definido"
              className="w-full h-full"
              offset={32}
            />
          </div>
          <div className="jt-hero-back relative w-[220px] h-[320px] md:w-[280px] md:h-[400px] shrink-0 mb-12">
            <ArchedImage
              bg="sage"
              src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80"
              alt="Mulher com cabelo cacheado"
              className="w-full h-full"
              offset={24}
            />
            <div className="jt-hero-curved absolute inset-0 -m-12 pointer-events-none text-nude hidden md:flex items-center justify-center">
              <CurvedText
                text="studio juliana tavares • especialista em cabelos texturizados • "
                size={420}
                radius={195}
              />
            </div>
          </div>
        </div>

        {/* Social rail */}
        <div className="hidden lg:flex flex-col items-center gap-4 absolute right-6 top-1/2 -translate-y-1/2 text-nude">
          <div className="w-px h-16 bg-nude/60" />
          <a href="#" aria-label="Instagram" className="hover:scale-110 transition"><Instagram size={18} /></a>
          <a href="#" aria-label="WhatsApp" className="hover:scale-110 transition"><MessageCircle size={18} /></a>
          <a href="#" aria-label="TikTok" className="hover:scale-110 transition"><Music2 size={18} /></a>
          <div className="w-px h-16 bg-nude/60" />
        </div>
      </div>
    </section>
  );
}
