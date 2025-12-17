// components/SectionTwo.tsx
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

type CaseCard = {
  id: string | number;
  title: string;
  headline: string;
  imageUrl: string;
  link?: string;
  bgTint?: string; // mantido por compat, mas agora usamos um glow neutro
};

type SectionTwoProps = {
  heading?: string;
  subcopy?: string;
  items?: CaseCard[];
};

const DEFAULT_ITEMS: CaseCard[] = [
  {
    id: 1,
    title: "Dashboard",
    headline: "Fluxo de caixa e controle de recebimento — Mercado Pago",
    imageUrl:
      "https://images.unsplash.com/photo-1551281044-8d8d0d8f1b78?q=80&w=1600&auto=format&fit=crop",
    link: "#case-1",
  },
  {
    id: 2,
    title: "Dashboard",
    headline: "Controle de Vendas no Mercado Livre",
    imageUrl:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
    link: "#case-2",
  },
  {
    id: 3,
    title: "Dashboard",
    headline: "Qualidade de Vendas — Automotivos",
    imageUrl:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop",
    link: "#case-3",
  },
];

const gridStagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function SectionTwo({
  heading = "Cases de Sucesso",
  subcopy = "Projetos reais que impulsionaram vendas e eficiência.",
  items = DEFAULT_ITEMS,
}: SectionTwoProps) {
  return (
    <section className="relative w-full overflow-hidden py-24 text-slate-100">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading compacto */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.45 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 bg-clip-text text-transparent">
            {heading}
          </h2>
          {subcopy && (
            <p className="mt-3 text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
              {subcopy}
            </p>
          )}
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={gridStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-70px" }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {items.map((c) => (
            <motion.article
              key={c.id}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl bg-[#0b1120]/40 backdrop-blur-md p-5"
            >
              {/* título + link */}
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-base md:text-lg font-semibold text-slate-100">
                  {c.title}
                </h3>
                {c.link && (
                  <a
                    href={c.link}
                    className="inline-flex items-center gap-1 text-cyan-300/90 hover:text-cyan-200 transition-colors text-xs md:text-sm"
                  >
                    Ver case <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>

              {/* Imagem */}
              <div className="relative overflow-hidden rounded-xl border border-slate-700/30">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src={c.imageUrl}
                  alt={c.headline}
                  className="h-48 md:h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              {/* Headline */}
              <h4 className="mt-4 text-lg font-semibold text-slate-100 leading-snug">
                {c.headline}
              </h4>

              {/* CTA miúdo opcional */}
              {c.link && (
                <a
                  href={c.link}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs md:text-sm font-medium text-cyan-300 hover:text-cyan-200 transition-colors"
                >
                  Detalhes <ArrowUpRight className="h-4 w-4" />
                </a>
              )}

              {/* linha sutil */}
              <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />

              {/* glow externo sutil */}
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-300/0 via-cyan-300/10 to-cyan-300/0 blur-xl" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}