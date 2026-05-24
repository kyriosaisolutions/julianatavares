import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function BookingCTA() {
  return (
    <section id="contato" className="bg-sage py-24 lg:py-32 px-6">
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

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-3 bg-nude text-ink rounded-full px-10 py-5 text-lg font-medium hover:bg-nude-light transition-colors group"
        >
          <MessageCircle size={22} />
          Agendar pelo WhatsApp
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </motion.a>

        <p className="mt-6 text-cream/80 text-sm">
          Atendimento personalizado • Resposta em até 2h
        </p>
      </div>
    </section>
  );
}
