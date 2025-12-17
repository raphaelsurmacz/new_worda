// components/SectionThreeB.tsx
import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, UserCog, Rocket, Headphones } from "lucide-react";

type Item = {
  id: string | number;
  title: string;
  desc: string;
  icon: React.ReactNode;
  gradient?: string; // ex: "from-blue-700 to-sky-500"
};

type SectionThreeBProps = {
  heading?: string;
  items?: Item[];
  subcopy?: string;
};

const DEFAULT_ITEMS: Item[] = [
  {
    id: 1,
    title: "Inovação",
    desc: "Soluções criativas e eficientes que agregam valor ao seu negócio.",
    icon: <Lightbulb className="h-8 w-8" />,
    gradient: "from-blue-700 to-sky-500",
  },
  {
    id: 2,
    title: "Personalização",
    desc: "Cada projeto é desenhado de acordo com suas demandas específicas.",
    icon: <UserCog className="h-8 w-8" />,
    gradient: "from-sky-600 to-blue-600",
  },
  {
    id: 3,
    title: "Agilidade",
    desc: "Entrega rápida sem comprometer a qualidade.",
    icon: <Rocket className="h-8 w-8" />,
    gradient: "from-blue-800 to-blue-600",
  },
  {
    id: 4,
    title: "Suporte Contínuo",
    desc: "Monitoramento e melhorias constantes.",
    icon: <Headphones className="h-8 w-8" />,
    gradient: "from-blue-900 to-blue-700",
  },
];

const containerStagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Section03({
  heading = "Benefícios da Nossa Abordagem",
  subcopy,
  items = DEFAULT_ITEMS,
}: SectionThreeBProps) {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a0a12] to-[#0b0d12] py-24 text-blue-100">
      {/* fundo e grid do tema (igual PricingPlans/SectionThree) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full blur-[120px] bg-blue-900/20" />
        <div className="absolute top-10 right-0 h-72 w-72 rounded-full blur-[100px] bg-blue-900/15" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-[90px] bg-sky-900/10" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-200 via-blue-300 to-sky-300 bg-clip-text text-transparent">
            {heading}
          </h2>
          {subcopy && (
            <p className="mt-4 text-lg text-blue-200/90 max-w-3xl mx-auto">{subcopy}</p>
          )}
        </motion.div>

        {/* cards “pill” em 2 colunas */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-8 md:grid-cols-2"
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.25 } }}
              className="group relative"
            >
              {/* moldura/vidro */}
              <div className="relative rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 p-1 shadow-2xl shadow-black/30 backdrop-blur-sm">
                {/* linha de energia/halo */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.gradient ?? "from-blue-700 to-sky-500"} opacity-20 blur-sm group-hover:opacity-40 transition-all duration-500`}
                />
                <div className="relative rounded-[1.4rem] bg-gradient-to-br from-[#0b0d12] to-[#0f1117] p-6 md:p-7 border border-gray-700/30 group-hover:border-gray-600/50 transition-all duration-300">
                  {/* faixa diagonal criativa */}
                  <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-[0.06] bg-[linear-gradient(135deg,rgba(56,189,248,0.35)_0%,rgba(59,130,246,0.25)_40%,transparent_60%)] rounded-[1.3rem]" />

                  <div className="flex items-start gap-5">
                    {/* ícone */}
                    <div
                      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r ${item.gradient ?? "from-blue-700 to-sky-500"} shadow-lg group-hover:shadow-xl transition-all`}
                    >
                      {item.icon}
                    </div>

                    {/* textos */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-blue-100 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-sky-300 group-hover:to-blue-300 group-hover:bg-clip-text transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-blue-200/95 text-lg leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* conector visual (foco) */}
                  <div
                    className={`mt-6 h-1.5 w-16 rounded-full bg-gradient-to-r ${item.gradient ?? "from-blue-700 to-sky-500"} opacity-70 group-hover:opacity-100 transition-opacity`}
                  />
                </div>
              </div>

              {/* brilho externo no hover */}
              <div
                className={`pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r ${item.gradient ?? "from-blue-700 to-sky-500"} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}