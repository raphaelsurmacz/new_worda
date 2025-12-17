// components/SectionThree.tsx
import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, Code2, RefreshCcw, Wrench } from "lucide-react";

type Feature = {
  id: string | number;
  title: string;
  desc: string;
  icon: React.ReactNode;
  gradient?: string; // mantido por compat, não usamos para cor forte
};

type SectionThreeProps = {
  heading?: string;
  features?: Feature[];
  subcopy?: string;
};

const DEFAULT_FEATURES: Feature[] = [
  {
    id: 1,
    title: "Análise de Requisitos",
    desc:
      "Identificamos e documentamos as necessidades do seu negócio para garantir soluções funcionais e escaláveis.",
    icon: <ClipboardList className="h-7 w-7" />,
  },
  {
    id: 2,
    title: "Desenvolvimento Personalizado",
    desc: "Criamos sistemas sob medida utilizando tecnologias modernas e eficientes.",
    icon: <Code2 className="h-7 w-7" />,
  },
  {
    id: 3,
    title: "Integração de Sistemas",
    desc:
      "Garantimos que seus sistemas se comuniquem perfeitamente, otimizando processos internos e externos.",
    icon: <RefreshCcw className="h-7 w-7" />,
  },
  {
    id: 4,
    title: "Manutenção e Suporte",
    desc:
      "Oferecemos suporte contínuo para manter suas soluções seguras, ágeis e atualizadas.",
    icon: <Wrench className="h-7 w-7" />,
  },
];

const containerStagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function Section02({
  heading = "O Que Fazemos",
  subcopy,
  features = DEFAULT_FEATURES,
}: SectionThreeProps) {
  return (
    <section className="relative w-full overflow-hidden py-24 text-slate-100">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 bg-clip-text text-transparent">
            {heading}
          </h2>
          {subcopy && (
            <p className="mt-5 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {subcopy}
            </p>
          )}
        </motion.div>

        {/* Grid de cards (glass neutro) */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((f) => (
            <motion.article
              key={f.id}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl bg-[#0b1120]/40 backdrop-blur-md p-6"
            >
              {/* Cabeçalho do card */}
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0b1120]/60 backdrop-blur-sm text-cyan-300/80">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-100 group-hover:text-cyan-200 transition-colors">
                  {f.title}
                </h3>
              </div>

              {/* Descrição */}
              <p className="text-slate-400 leading-7 text-sm">
                {f.desc}
              </p>

              {/* Divisor sutil */}
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />

              {/* Halo sutil no hover */}
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