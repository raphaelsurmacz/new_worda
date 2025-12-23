import { motion } from "framer-motion";

export default function LandingHero() {
  return (
    <div className="min-h-screen w-full text-slate-100 relative overflow-hidden">
      <main className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-32 pb-20 sm:pt-40">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10"
        >
          <div className="absolute -z-10 top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] opacity-20 pointer-events-none">
            <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <linearGradient id="graph-gradient" x1="20" y1="180" x2="360" y2="20" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#22d3ee" />
                  <stop offset="1" stopColor="#3b82f6" />
                </linearGradient>
                <linearGradient id="fill-gradient" x1="20" y1="0" x2="20" y2="200" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#22d3ee" stopOpacity="0.2" />
                  <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Área de preenchimento (Fill) */}
              <motion.path
                d="M 20 180 C 120 180, 200 150, 360 20 L 360 200 L 20 200 Z"
                fill="url(#fill-gradient)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
              />

              {/* Linha Principal com Glow */}
              <motion.path
                d="M 20 180 C 120 180, 200 150, 360 20"
                stroke="url(#graph-gradient)"
                strokeWidth="3"
                strokeLinecap="round"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
              />

              {/* Seta (separada para animar junto ou depois) */}
              <motion.path
                d="M 335 30 L 360 20 L 340 50"
                stroke="url(#graph-gradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{ duration: 0.5, delay: 2.1 }}
              />

              {/* Ponto Pulsante no final */}
              <motion.circle
                cx="360"
                cy="20"
                r="4"
                fill="#22d3ee"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2, duration: 0.3 }}
              >
                <animate
                  attributeName="r"
                  values="4;8;4"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="1;0.5;1"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </motion.circle>
            </svg>
          </div>

          <h1 className="font-extrabold leading-tight tracking-tight text-4xl sm:text-5xl md:text-7xl lg:text-8xl relative">
            <span className="bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 bg-clip-text text-transparent">
              Worda
            </span>
            <br />
            <span className="bg-gradient-to-r from-slate-200 via-blue-200 to-cyan-200 bg-clip-text text-transparent text-2xl sm:text-4xl md:text-6xl lg:text-7xl block mt-2">
              Web Oriented Retail
            </span>
            <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-transparent text-2xl sm:text-4xl md:text-6xl lg:text-7xl block">
              & Data Analytics
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 max-w-3xl text-center text-xl leading-8 text-slate-300 font-light"
        >
          Soluções inteligentes para análise de dados, vendas online e sistemas sob medida para alavancar seu negócio.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://wa.me/5541984000180?text=Ol%C3%A1%2C%20quero%20come%C3%A7ar%20um%20projeto%20com%20a%20Worda."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center rounded-xl border border-slate-600/60 bg-slate-800/40 px-8 py-4 font-semibold text-slate-100 shadow-md shadow-black/30 transition-all duration-300 hover:bg-slate-700/40 hover:scale-[1.02]"
          >
            <span className="relative">Começar Projeto</span>
            <div className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</div>
          </a>

          <a
            href="#portfolio"
            className="inline-flex items-center justify-center rounded-xl border border-slate-700/70 bg-transparent px-8 py-4 font-medium text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-slate-500 hover:text-slate-100 hover:bg-slate-800/40"
          >
            Ver Portfólio
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-8 text-center"
        >
          {[
            { value: "50+", label: "Projetos Entregues" },
            { value: "3+", label: "Anos de Experiência" },
            { value: "100%", label: "Clientes Satisfeitos" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}