// components/Section01.tsx
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

const OPTIONS = ["Amazon", "Shopee", "Mercado Livre"] as const;
export type Marketplace = typeof OPTIONS[number];

export default function Section01({
  market,
  onChange,
}: {
  market?: Marketplace;
  onChange?: (m: Marketplace) => void;
}) {
  const parallaxX = useMotionValue(0);
  const parallaxY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      parallaxX.set(e.clientX - cx);
      parallaxY.set(e.clientY - cy);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [parallaxX, parallaxY]);

  const [internalMarket, setInternalMarket] = useState<Marketplace>(market ?? "Amazon");
  useEffect(() => {
    if (market) setInternalMarket(market);
  }, [market]);
  const currentMarket = market ?? internalMarket;

  const changeMarket = (m: Marketplace) => {
    setInternalMarket(m);
    onChange?.(m);
  };

  const tablistRef = useRef<HTMLDivElement>(null);
  const [segmentW, setSegmentW] = useState(0);

  useLayoutEffect(() => {
    const el = tablistRef.current;
    if (!el) return;
    const calc = () => setSegmentW((el.clientWidth - 12) / 3);
    calc();
    const ro = new ResizeObserver(calc);
    ro.observe(el);
    window.addEventListener("resize", calc);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", calc);
    };
  }, []);

  const activeIdx = Math.max(0, OPTIONS.indexOf(currentMarket));
  const sliderX = activeIdx * segmentW;

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full flex flex-col items-center justify-center text-slate-100 relative overflow-hidden px-6"
    >
      <main className="relative mx-auto flex max-w-6xl flex-col items-center pt-32 pb-20 sm:pt-40">
        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h1 className="font-extrabold leading-tight tracking-tight text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
            <span className="bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 bg-clip-text text-transparent">
              Construindo
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-200 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Soluções
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-300 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
              Escaláveis
            </span>
          </h1>
        </motion.div>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-3xl text-center text-lg leading-8 text-slate-300 font-light"
        >
          Integrações inteligentes e{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent font-semibold">
            inovação contínua
          </span>
          .
        </motion.p>

        {/* Seletor de Marketplace */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <div
            ref={tablistRef}
            role="tablist"
            aria-label="Selecionar marketplace"
            className="relative mx-auto flex w-[320px] sm:w-[420px] items-center justify-between rounded-full border border-cyan-400/20 bg-[#0b1120]/40 backdrop-blur-md p-1.5"
          >
            {/* Slider */}
            <motion.div
              className="absolute top-1.5 left-1.5 h-[calc(100%-12px)] rounded-full bg-cyan-500/10 border border-cyan-400/20"
              style={{ width: segmentW || 0 }}
              animate={{ x: sliderX }}
              transition={{ type: "spring", stiffness: 500, damping: 40 }}
            />

            {OPTIONS.map((opt) => {
              const active = currentMarket === opt;
              return (
                <button
                  key={opt}
                  role="tab"
                  aria-selected={active}
                  onClick={() => changeMarket(opt)}
                  className={`relative z-10 flex-1 cursor-pointer select-none px-4 py-2 text-xs sm:text-sm font-medium transition-colors ${
                    active ? "text-cyan-200" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          <p className="mt-3 text-center text-[11px] text-slate-400">
            use ← → no teclado para alternar
          </p>
        </motion.div>
      </main>
    </div>
  );
}