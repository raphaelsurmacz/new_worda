import { motion } from "framer-motion";
import { FiBarChart2, FiSettings, FiTrendingUp, FiLink } from "react-icons/fi";

type Item = {
  title: string;
  description: string;
  Icon: React.ElementType;
};

const items: Item[] = [
  {
    title: "Análise de Dados",
    description: "Extraímos insights estratégicos para guiar suas decisões de negócio com inteligência artificial e machine learning.",
    Icon: FiBarChart2,
  },
  {
    title: "Criação de Sistemas",
    description: "Desenvolvemos ferramentas e plataformas escaláveis que simplificam e automatizam seus processos operacionais.",
    Icon: FiSettings,
  },
  {
    title: "Otimização de Vendas",
    description: "Maximizamos a performance do seu e-commerce e Marketplaces com estratégias data-driven e testes A/B.",
    Icon: FiTrendingUp,
  },
  {
    title: "Integração de Sistemas",
    description: "Conectamos seu DMS com os maiores Marketplaces através de APIs robustas e arquitetura cloud-native.",
    Icon: FiLink,
  },
];

export default function Section03() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { scale: 1, rotate: 0, transition: { duration: 0.5, ease: "backOut" } },
  };

  return (
    <section id="services" className="w-full py-16 text-slate-100 relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 bg-clip-text text-transparent">
            Como te ajudamos?
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Soluções inteligentes e personalizadas para{" "}
            <span className="bg-gradient-to-r from-cyan-200 to-blue-300 bg-clip-text text-transparent font-medium">
              impulsionar seu negócio
            </span>{" "}
            no digital
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-4"
        >
          {items.map((item, idx) => (
            <motion.article
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              className="group relative rounded-3xl bg-[#0b1120]/60 backdrop-blur-sm p-8 text-center transition-all duration-300 will-change-transform"
            >
              {/* Ícone */}
              <motion.div
                variants={iconVariants}
                className="mb-6 h-20 w-20 rounded-2xl bg-[#0b1120]/70 flex items-center justify-center backdrop-blur-sm group-hover:bg-[#0b1120]/90 transition-colors duration-300"
              >
                <item.Icon className="text-3xl text-cyan-300/80 group-hover:text-cyan-200 transition-colors duration-300" />
              </motion.div>

              {/* Título */}
              <h3 className="text-xl font-semibold text-slate-100 mb-3 group-hover:text-cyan-200 transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-slate-400 leading-7 text-sm">
                {item.description}
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mt-6 inline-flex items-center text-xs font-medium text-slate-300 group-hover:text-cyan-200 transition-all duration-300"
              >
                Saiba mais
                <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/5541984000180?text=Ol%C3%A1%2C%20gostaria%20de%20come%C3%A7ar%20um%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#0b1120]/40 backdrop-blur-md px-8 py-4 font-semibold text-slate-100 transition-all duration-300 hover:bg-[#0b1120]/60 hover:text-cyan-200"
            >
              Começar Projeto
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-xl bg-transparent px-8 py-4 font-medium text-slate-300 backdrop-blur-sm transition-all duration-300 hover:bg-[#0b1120]/40 hover:text-cyan-200"
            >
              Ver Cases
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}