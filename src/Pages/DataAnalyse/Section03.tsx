// components/SectionCTA.tsx
import React from "react";
import { motion } from "framer-motion";
import { Rocket, Mail, ArrowRight } from "lucide-react";

export default function SectionCTA() {
  return (
    <section className="relative w-full overflow-hidden py-28 text-slate-100">
      <div className="relative mx-auto max-w-6xl px-6 md:flex md:items-center md:justify-between md:gap-8">
        {/* texto e título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <div className="flex items-center gap-2 mb-3 text-sm text-cyan-400/90 font-medium tracking-wide">
            <Mail className="h-4 w-4" />
            <span>Vamos conversar?</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight bg-gradient-to-r from-slate-100 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
            Descubra como podemos acelerar seu próximo projeto.
          </h2>

          <p className="mt-4 text-slate-300/90 text-sm leading-relaxed max-w-md">
            Agende uma conversa rápida com nosso time e veja como transformar
            suas ideias em resultados reais.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#contato"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#0b1120]/40 backdrop-blur-md px-6 py-2.5 text-sm font-semibold text-cyan-200 hover:text-white transition-all hover:bg-[#0b1120]/60"
          >
            <Rocket className="h-4 w-4 text-cyan-300" />
            Falar com especialista
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>

        {/* animação visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mt-12 md:mt-0 flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-600/10 blur-2xl" />
            <div className="relative flex items-center justify-center rounded-full bg-[#0b1120]/40 backdrop-blur-md p-8 md:p-10 hover:bg-[#0b1120]/60 transition-all">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative flex items-center justify-center"
              >
                <Rocket className="h-16 w-16 text-cyan-400 drop-shadow-lg" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}