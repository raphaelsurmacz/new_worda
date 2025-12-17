// components/SectionStacks.tsx
import React from "react";
import { motion } from "framer-motion";
import { Boxes, CircuitBoard, ServerCog, Cloud } from "lucide-react";

function Logo({
  name,
  label,
  color = "94a3b8", // slate-400 por padrão (neutro)
  size = 20,
  className = "",
}: {
  name: string;
  label?: string;
  color?: string;
  size?: number;
  className?: string;
}) {
  const src = `https://cdn.simpleicons.org/${encodeURIComponent(name)}/${color}`;
  return (
    <div className={`flex items-center gap-2 min-w-0 ${className}`}>
      <img
        src={src}
        alt={label ?? name}
        width={size}
        height={size}
        className="opacity-90 transition-transform duration-200 group-hover:scale-[1.04]"
        loading="lazy"
      />
      {label && (
        <span className="text-xs text-slate-300 truncate">{label}</span>
      )}
    </div>
  );
}

type StackItem = { name: string; label?: string; color?: string };
type StackCategory = {
  id: string;
  title: string;
  icon?: React.ReactNode;
  items: StackItem[];
};
type SectionStacksProps = {
  heading?: string;
  subcopy?: string;
  categories?: StackCategory[];
};

const DEFAULT_CATEGORIES: StackCategory[] = [
  {
    id: "frontend",
    title: "Front-end",
    icon: <Boxes className="h-5 w-5" />,
    items: [
      { name: "react", label: "React" },
      { name: "vue-dot-js", label: "Vue" },
      { name: "angular", label: "Angular" },
      { name: "nextdotjs", label: "Next.js" },
      { name: "tailwindcss", label: "Tailwind" },
    ],
  },
  {
    id: "backend",
    title: "Back-end",
    icon: <ServerCog className="h-5 w-5" />,
    items: [
      { name: "nodedotjs", label: "Node.js" },
      { name: "python", label: "Python" },
      { name: "java", label: "Java" },
      { name: "php", label: "PHP" },
      { name: "nestjs", label: "NestJS" },
    ],
  },
  {
    id: "databases",
    title: "Banco de Dados",
    icon: <CircuitBoard className="h-5 w-5" />,
    items: [
      { name: "mysql", label: "MySQL" },
      { name: "postgresql", label: "Postgres" },
      { name: "mongodb", label: "MongoDB" },
      { name: "redis", label: "Redis" },
      { name: "sqlite", label: "SQLite" },
    ],
  },
  {
    id: "infra",
    title: "Infraestrutura",
    icon: <Cloud className="h-5 w-5" />,
    items: [
      { name: "amazonaws", label: "AWS" },
      { name: "microsoftazure", label: "Azure" },
      { name: "googlecloud", label: "GCP" },
      { name: "docker", label: "Docker" },
      { name: "kubernetes", label: "K8s" },
    ],
  },
];

const gridStagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.10 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Section04({
  heading = "Tecnologias que utilizamos",
  subcopy = "Trabalhamos com linguagens e plataformas modernas, incluindo:",
  categories = DEFAULT_CATEGORIES,
}: SectionStacksProps) {
  return (
    <section className="relative w-full overflow-hidden py-28 text-slate-100">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.45 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 bg-clip-text text-transparent">
            {heading}
          </h2>
          {subcopy && (
            <p className="mt-4 text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
              {subcopy}
            </p>
          )}
        </motion.div>

        {/* grid de categorias (glass neutro) */}
        <motion.div
          variants={gridStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-70px" }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-4"
        >
          {categories.map((cat) => (
            <motion.section
              key={cat.id}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl bg-[#0b1120]/40 backdrop-blur-md p-6"
            >
              {/* título + ícone */}
              <header className="mb-5 flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0b1120]/60 text-cyan-300/80">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-100 group-hover:text-cyan-200 transition-colors">
                  {cat.title}
                </h3>
              </header>

              {/* chips de stacks (exibição diferente) */}
              <div className="flex flex-wrap gap-2.5">
                {cat.items.map((it, idx) => (
                  <div
                    key={`${cat.id}-${it.name}-${idx}`}
                    className="group/chip inline-flex items-center gap-2 rounded-full bg-[#0b1120]/40 backdrop-blur-md px-3 py-1.5 hover:bg-[#0b1120]/60 transition-colors"
                    title={it.label ?? it.name}
                  >
                    <Logo
                      name={it.name}
                      label={undefined}
                      color="a5b4fc" // slate-lilac/sutil (fica neutro-azulado)
                      size={16}
                      className="shrink-0"
                    />
                    <span className="text-xs text-slate-200">{it.label ?? it.name}</span>
                  </div>
                ))}
              </div>

              {/* linha sutil */}
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />
            </motion.section>
          ))}
        </motion.div>
      </div>
    </section>
  );
}