import { useState, useMemo } from "react";
import { motion } from "framer-motion";

/* ========== Tipos ========== */
type TeamMember = {
  name: string;
  role?: string;
  bio: string;
  photo?: string; // opcional
};

const teamMock: TeamMember[] = [
  { name: "Carlos Junior", role: "CTO & Fundador", bio: "Especialista em arquitetura de sistemas escaláveis com 10+ anos de experiência. Lidera nossa visão tecnológica e estratégia de inovação." },
  { name: "Ana Data Sense", role: "Head de Dados & IA", bio: "PhD em Ciência de Dados com foco em machine learning aplicado. Transforma dados complexos em insights acionáveis para negócios." },
  { name: "Carlos Cloud", role: "Arquiteto de Soluções", bio: "Especialista em cloud computing e DevOps. Desenha infraestruturas robustas e otimizadas para alta performance e segurança." },
  { name: "Marina UX", role: "Líder de Product Design", bio: "Designer focada em UX e interfaces intuitivas. Conecta tecnologia às necessidades humanas de forma elegante." },
];

export default function Section05({ items = teamMock }: { items?: TeamMember[] }) {
  const [page, setPage] = useState(0);
  const perPage = 3;

  const pageCount = Math.ceil(items.length / perPage);
  const current = useMemo(() => {
    const start = page * perPage;
    return items.slice(start, start + perPage);
  }, [items, page]);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const card = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <section className="w-full py-20 text-slate-100 relative overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6">
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

        {/* Grid de membros (3 por página) */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {current.map((m, i) => (
            <motion.article
              key={`${m.name}-${i}`}
              variants={card}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-2xl bg-[#0b1120]/60 backdrop-blur-sm p-6 will-change-transform"
            >
              {/* Avatar menor (foto ou iniciais) */}
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

        {/* Paginação simples (sem ícones) */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={() => setPage(p => Math.max(0, p - 1))}
            disabled={page === 0}
            className="px-3 py-1.5 rounded-lg bg-[#0b1120]/60 backdrop-blur-sm text-sm text-slate-200 disabled:opacity-40"
          >
            Anterior
          </button>
          <div className="flex gap-1.5">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Ir para página ${i + 1}`}
                className={`h-2.5 w-6 rounded-full transition-all ${i === page ? "bg-cyan-300/60" : "bg-slate-600/60 hover:bg-slate-500/60"
                  }`}
              />
            ))}
          </div>
          <button
            onClick={() => setPage(p => Math.min(pageCount - 1, p + 1))}
            disabled={page === pageCount - 1}
            className="px-3 py-1.5 rounded-lg bg-[#0b1120]/60 backdrop-blur-sm text-sm text-slate-200 disabled:opacity-40"
          >
            Próximo
          </button>
        </div>
      </div>
    </section>
  );
}