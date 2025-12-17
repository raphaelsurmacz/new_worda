// components/SectionIntegration.tsx
import React from "react";
import { motion } from "framer-motion";

type SectionIntegrationProps = {
  marketplace?: string;
  description?: string;
};

export default function SectionIntegration({
  marketplace = "AMAZON",
  description = "A WORDA simplifica a conexão entre o sistema DMS da sua concessionária e a Amazon, permitindo que você venda suas peças com mais facilidade, segurança e eficiência. Nossa solução automatiza todo o processo, desde a publicação dos anúncios até a gestão de estoque e precificação em tempo real.",
}: SectionIntegrationProps) {
  return (
    <section className="relative w-full overflow-hidden py-24 text-slate-100">
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        {/* título */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
        >
          <span className="text-slate-200">Integração com a </span>
          <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            {marketplace.toUpperCase()}
          </span>
        </motion.h2>

        {/* descrição */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-lg md:text-2xl leading-relaxed text-slate-300 max-w-5xl mx-auto"
        >
          {description}
        </motion.p>

        {/* linha decorativa sutil */}
        <div className="mt-10 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />
      </div>
    </section>
  );
}