import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Fotos
import fernandoImg from "../../assets/team/fernando.jpg";
import viniciusImg from "../../assets/team/vinicius.jpg";
import joaoImg from "../../assets/team/joao.jpg";
import miguelImg from "../../assets/team/miguel.png";
import carlosImg from "../../assets/team/carlos.jpg";
import marcosImg from "../../assets/team/marcos.jpg";
import pabloImg from "../../assets/team/pablo.jpg";

/* ========== Tipos ========== */
type TeamMember = {
  name: string;
  role?: string;
  bio: string;
  photo?: string; // opcional
};

const teamMock: TeamMember[] = [
  { name: "Fernando Barczak", role: "CEO", bio: "Co-fundador e diretor comercial.", photo: fernandoImg },
  { name: "Vinicius Lamb", role: "Engenheiro de dados", bio: "Desenvolvedor back-end.", photo: viniciusImg },
  { name: "João Vitor de Souza", role: "Engenheiro de dados", bio: "Desenvolvedor back-end e especialista em cyber security.", photo: joaoImg },
  { name: "Miguel Zanchesttin", role: "Cientista de dados", bio: "Especialista em inteligência artificial.", photo: miguelImg },
  { name: "Carlos Junior", role: "Analista de dados BI", bio: "Analista de dados BI.", photo: carlosImg },
  { name: "Marcos Alexandre", role: "CTO", bio: "Co-fundador e diretor de tecnologia.", photo: marcosImg },
  { name: "Pablo Lincoln", role: "Sucesso do cliente", bio: "Especialista em suporte ao cliente.", photo: pabloImg },
];

export default function Section05({ items = teamMock }: { items?: TeamMember[] }) {
  const [page, setPage] = useState(0);
  const perPage = 3;

  // Calculate total pages for dot indicators (optional, but good for context)
  const pageCount = Math.ceil(items.length / perPage);

  // Logic to always show 3 items, wrapping around if needed
  const current = useMemo(() => {
    const startIndex = page * perPage;
    return Array.from({ length: perPage }).map((_, i) => {
      const index = (startIndex + i) % items.length;
      return items[index];
    });
  }, [items, page]);

  const nextSlide = () => {
    setPage((prev) => (prev + 1) % pageCount);
  };

  const prevSlide = () => {
    setPage((prev) => (prev - 1 + pageCount) % pageCount);
  };

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const card = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
  };

  /* Safe reset if items length changes (e.g. filtering) */
  // useEffect(() => setPage(0), [items.length]); // Optional protection

  return (
    <section className="w-full py-20 text-slate-100 relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 bg-clip-text text-transparent">
            Nossa Equipe
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Especialistas dedicados a transformar ideias em realidade.
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="hidden md:flex flex-none h-12 w-12 items-center justify-center rounded-full bg-[#0b1120]/60 backdrop-blur-sm border border-slate-700/50 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all text-slate-300 hover:text-cyan-200 z-10"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Grid de membros */}
          <motion.div
            key={page}
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 md:min-h-[300px] content-start"
          >
            {current.map((m, i) => (
              <motion.article
                key={`${m.name} -${i} `}
                variants={card}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-2xl bg-[#0b1120]/60 backdrop-blur-sm p-6 will-change-transform h-full border border-transparent hover:border-slate-700/50 transition-colors"
              >
                {/* Avatar */}
                <div className="flex items-center gap-3">
                  {m.photo ? (
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="h-10 w-10 rounded-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-[#0b1120]/70 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-sm font-bold text-cyan-200">
                        {m.name.split(" ").map(s => s[0]).slice(0, 2).join("")}
                      </span>
                    </div>
                  )}
                  <div>
                    <h3 className="text-base font-semibold text-slate-100">{m.name}</h3>
                    {m.role && <p className="text-xs text-slate-400">{m.role}</p>}
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {m.bio}
                </p>
              </motion.article>
            ))}
          </motion.div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="hidden md:flex flex-none h-12 w-12 items-center justify-center rounded-full bg-[#0b1120]/60 backdrop-blur-sm border border-slate-700/50 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all text-slate-300 hover:text-cyan-200 z-10"
            aria-label="Próximo"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Mobile Nav (Buttons below on mobile) */}
        <div className="flex md:hidden items-center justify-center gap-6 mt-8">
          <button
            onClick={prevSlide}
            className="h-12 w-12 flex items-center justify-center rounded-full bg-[#0b1120]/60 backdrop-blur-sm border border-slate-700/50 text-slate-300 active:scale-95 transition-transform"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex gap-1.5">
            {Array.from({ length: pageCount }).map((_, i) => (
              <div
                key={i}
                className={`h - 2 w - 2 rounded - full transition - colors ${i === page ? "bg-cyan-300" : "bg-slate-700"} `}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="h-12 w-12 flex items-center justify-center rounded-full bg-[#0b1120]/60 backdrop-blur-sm border border-slate-700/50 text-slate-300 active:scale-95 transition-transform"
          >
            <ChevronRight size={24} />
          </button>
        </div>

      </div>
    </section>
  );
}
