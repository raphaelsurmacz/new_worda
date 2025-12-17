// components/SectionBenefits.tsx
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

type Benefit = {
  id: string | number;
  title: string;
  desc: string;
};

type SectionBenefitsProps = {
  heading?: string;
  items?: Benefit[];
};

const DEFAULT_ITEMS: Benefit[] = [
  {
    id: 1,
    title: "Automatização Completa",
    desc: "Reduza o trabalho manual e evite erros na gestão dos seus anúncios.",
  },
  {
    id: 2,
    title: "Maior Eficiência",
    desc: "Venda suas peças de forma ágil e segura.",
  },
  {
    id: 3,
    title: "Escalabilidade",
    desc: "Expanda sua presença digital e alcance mais clientes.",
  },
  {
    id: 4,
    title: "Relatórios Personalizados",
    desc: "Tome decisões baseadas em dados reais.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function SectionBenefits({
  heading = "Benefícios da Integração WORDA — Amazon",
  items = DEFAULT_ITEMS,
}: SectionBenefitsProps) {
  return (
    <section className="relative w-full overflow-hidden py-20 text-slate-100">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center text-3xl md:text-5xl font-bold bg-gradient-to-r from-slate-100 via-cyan-200 to-blue-300 bg-clip-text text-transparent"
        >
          {heading}
        </motion.h2>

        {/* grid 2x2 */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 md:grid-cols-2"
        >
          {items.map((b) => (
            <motion.div
              key={b.id}
              variants={card}
              whileHover={{ y: -3, scale: 1.01, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl bg-[#0b1120]/40 backdrop-blur-md p-6 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/20">
                  <CheckCircle2 className="h-6 w-6 text-cyan-300" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-100">
                    {b.title}
                  </h3>
                  <p className="mt-1 text-slate-300 text-sm leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>

              {/* linha decorativa */}
              <div className="mt-5 h-[2px] w-16 bg-gradient-to-r from-cyan-400/60 to-blue-400/60 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}