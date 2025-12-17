// components/SectionHowItWorksAlt.tsx
import React from "react";
import { motion } from "framer-motion";
import { UploadCloud, RefreshCcw, LineChart } from "lucide-react";

type Item = {
  id: string | number;
  title: string;
  desc: string;
  icon: React.ReactNode;
  accent?: string;
};

type SectionProps = {
  heading?: string;
  items?: Item[];
};

const DEFAULT_ITEMS: Item[] = [
  {
    id: 1,
    title: "Publicação Automática",
    desc: "Extraímos os dados do DMS e publicamos os anúncios automaticamente no marketplace, mantendo tudo consistente.",
    icon: <UploadCloud className="h-7 w-7" />,
    accent: "from-cyan-400 to-blue-500",
  },
  {
    id: 2,
    title: "Sincronização em Tempo Real",
    desc: "Estoque e preços sempre atualizados para evitar ruptura e preservar a estratégia de precificação.",
    icon: <RefreshCcw className="h-7 w-7" />,
    accent: "from-blue-500 to-cyan-400",
  },
  {
    id: 3,
    title: "Relatórios & Insights",
    desc: "Acompanhe performance, identifique oportunidades e otimize sua operação com relatórios claros e práticos.",
    icon: <LineChart className="h-7 w-7" />,
    accent: "from-cyan-300 to-blue-400",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const cardVar = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function SectionHowItWorksAlt({
  heading = "Como funciona nossa integração?",
  items = DEFAULT_ITEMS,
}: SectionProps) {
  return (
    <section className="relative w-full overflow-hidden py-24 text-slate-100">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* título */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12 text-center text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-100 via-cyan-200 to-blue-300 bg-clip-text text-transparent"
        >
          {heading}
        </motion.h2>

        {/* cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {items.map((it) => (
            <motion.article
              key={it.id}
              variants={cardVar}
              whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.25 } }}
              className="group relative rounded-2xl bg-[#0b1120]/40 backdrop-blur-md p-6 text-center"
            >
              {/* ícone */}
              <div
                className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${it.accent} bg-opacity-10`}
              >
                {it.icon}
              </div>

              {/* título */}
              <h3 className="text-lg font-semibold text-slate-100 mb-2">
                {it.title}
              </h3>

              {/* descrição */}
              <p className="text-slate-300 text-sm leading-relaxed">{it.desc}</p>

              {/* linha decorativa */}
              <div
                className={`mt-6 h-1 w-14 mx-auto rounded-full bg-gradient-to-r ${it.accent} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}