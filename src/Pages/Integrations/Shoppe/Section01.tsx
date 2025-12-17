// components/SectionIntegration.tsx
import React from "react";
import { motion } from "framer-motion";

type SectionIntegrationProps = {
  marketplace?: string;     // ex: "AMAZON", "SHOPEE", "MERCADO LIVRE"
  description?: string;
};

export default function SectionIntegration({
  marketplace = "Shopee",
  description = "A WORDA simplifica a conexão entre o sistema DMS da sua concessionária e a Amazon, permitindo que você venda suas peças com mais facilidade, segurança e eficiência. Nossa solução automatiza todo o processo, desde a publicação dos anúncios até a gestão de estoque e precificação em tempo real.",
}: SectionIntegrationProps) {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a0a12] to-[#0b0d12] py-24 text-blue-100">
      {/* fundo sutil (mesma linguagem visual) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full blur-[100px] bg-blue-900/20" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full blur-[90px] bg-sky-900/15" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_85%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
        >
          <span className="text-blue-200">Integração com a </span>
          <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
            {marketplace.toUpperCase()}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-7 text-lg md:text-2xl leading-relaxed text-blue-300/90 max-w-5xl mx-auto"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}