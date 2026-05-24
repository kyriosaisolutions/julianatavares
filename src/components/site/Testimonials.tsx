import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Pill } from "./Pill";

const items = [
  {
    name: "Mariana Souza",
    photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80",
    text: "Encontrei meu lugar. A Juliana entendeu meus cachos como ninguém. Saí me sentindo outra mulher.",
  },
  {
    name: "Camila Ribeiro",
    photo: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=200&q=80",
    text: "Atendimento impecável e um corte que respeitou meu cabelo crespo. Recomendo de olhos fechados.",
  },
  {
    name: "Ana Beatriz",
    photo: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&q=80",
    text: "Meus ondulados nunca tiveram tanto movimento e brilho. Studio de verdade especialista.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-sage-light/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <Pill>Depoimentos</Pill>
          <h2 className="mt-6 font-display text-5xl md:text-6xl text-ink">
            Quem confia, <span className="italic text-nude">volta</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-cream rounded-3xl p-8 flex flex-col items-center text-center shadow-sm"
            >
              <img
                src={t.photo}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover"
                loading="lazy"
              />
              <div className="flex gap-1 mt-4 text-nude">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={16} fill="currentColor" stroke="none" />
                ))}
              </div>
              <blockquote className="mt-4 text-ink/75 italic font-display text-lg leading-relaxed">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-4 text-sm tracking-wide text-ink/60">{t.name}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
