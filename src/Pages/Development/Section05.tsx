// components/SectionWhyUs.tsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Star } from "lucide-react";

export default function Section05() {
  return (
    <section className="relative w-full overflow-hidden py-24 text-slate-100">
      <div className="relative mx-auto max-w-5xl px-6 text-center">
       
        {/* Frase principal */}
        <motion.h3
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl md:text-5xl font-extrabold text-slate-100 leading-tight max-w-3xl mx-auto"
        >
          Tudo o que fazemos é{" "}
          <span className="bg-gradient-to-r from-cyan-200 to-blue-300 bg-clip-text text-transparent">
            pensado em performance
          </span>{" "}
          para você{" "}
          <span className="bg-gradient-to-r from-blue-200 to-cyan-300 bg-clip-text text-transparent">
            vender mais e melhor
          </span>
          .
        </motion.h3>

        {/* Texto secundário */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed"
        >
          Precisa de algo que não está no catálogo? A gente desenvolve.
          Equipe enxuta, ágil e focada em resultado—do conceito à operação.
        </motion.p>

        {/* CTA (glass) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-10 flex flex-col items-center gap-5"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#contato"
            className="inline-flex items-center gap-2.5 rounded-xl bg-[#0b1120]/40 backdrop-blur-md px-6 py-3 text-base font-semibold text-slate-100 hover:bg-[#0b1120]/60 hover:text-cyan-200 transition-colors"
          >
            <Rocket className="h-5 w-5" />
            Quero impulsionar minhas vendas
            <ArrowRight className="h-5 w-5" />
          </motion.a>

         
        </motion.div>
      </div>

      {/* Linha decorativa sutil */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />
    </section>
  );
}