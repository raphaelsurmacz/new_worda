// components/SectionResults.tsx
import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

type Stat = {
  id: string | number;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  decimals?: number;
};

type SectionResultsProps = {
  heading?: string;
  subcopy?: string;
  stats?: Stat[];
  durationMs?: number;
};

function AnimatedNumber({
  from = 0,
  to,
  decimals = 0,
}: {
  from?: number;
  to: number;
  decimals?: number;
}) {
  const mv = useMotionValue(from);
  const rounded = useTransform(mv, (v) => v.toFixed(decimals));

  useEffect(() => {
    const controls = animate(mv, to, { duration: 1.4, ease: "easeOut" });
    return () => controls.stop();
  }, [to]);

  return <motion.span>{rounded}</motion.span>;
}

export default function SectionResults({
  heading = "Resultados que falam por si",
  subcopy = "Através da integração inteligente e estratégias baseadas em dados, entregamos resultados reais.",
  stats = [
    { id: 1, value: 1, prefix: "+", suffix: " Milhão", label: "Faturados no Mercado Livre" },
    { id: 2, value: 30, prefix: "+", suffix: " Milhões", label: "Em produtos obsoletos" },
    { id: 3, value: 126, prefix: "+", suffix: " Mil", label: "Vendas processadas" },
  ],
  durationMs = 1400,
}: SectionResultsProps) {
  return (
    <section className="relative w-full overflow-hidden py-20 text-slate-100">
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-slate-100 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
            {heading}
          </h2>
          {subcopy && (
            <p className="mt-3 text-base md:text-lg text-slate-300/90 max-w-3xl mx-auto">
              {subcopy}
            </p>
          )}
        </motion.div>

        {/* métricas */}
        <div className="mt-14 grid gap-10 md:grid-cols-3 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group bg-[#0b1120]/40 backdrop-blur-md rounded-2xl py-10 px-4 hover:bg-[#0b1120]/60 transition-all"
            >
              <div className="text-4xl md:text-5xl font-extrabold leading-none">
                <span className="align-middle text-cyan-400">{s.prefix ?? ""}</span>
                <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  <AnimatedNumber to={s.value} decimals={s.decimals ?? 0} />
                </span>
                <span className="align-middle text-cyan-400">{s.suffix ?? ""}</span>
              </div>
              <div className="mt-3 text-lg text-slate-300/90">{s.label}</div>

              <div className="mt-5 h-[2px] w-20 mx-auto rounded-full bg-gradient-to-r from-cyan-400/50 to-blue-400/50 opacity-60 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}