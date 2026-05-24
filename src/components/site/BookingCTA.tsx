import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function BookingCTA() {
  return (
    <section id="contato" className="bg-sage-dark py-24 lg:py-32 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl text-cream leading-[1.05]"
        >
          Pronta para <span className="italic">libertar</span> seus cachos?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/5581985880205"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-cream text-ink rounded-full px-10 py-5 text-lg font-medium hover:bg-nude-light transition-colors group"
          >
            <MessageCircle size={22} />
            WhatsApp
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="https://trinks.com/studio-juliana-tavares"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 border border-cream/60 text-cream rounded-full px-10 py-5 text-lg font-medium hover:bg-cream/10 transition-colors group"
          >
            Agendar Online
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>

        <p className="mt-6 text-cream/70 text-sm">
          Empresarial Phoenix · Av. João de Barros, 1527 – Sala 102 · Espinheiro, Recife – PE
        </p>
      </div>
    </section>
  );
}
