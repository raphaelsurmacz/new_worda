import { motion } from "framer-motion";

// Logos
import bariguiLogo from "../../assets/clients/barigui.png";
import tonielloLogo from "../../assets/clients/toniello.png";
import hyundaiLogo from "../../assets/clients/hyundai.png";
import strasbourgLogo from "../../assets/clients/strasbourg.png";
import vipcarLogo from "../../assets/clients/vipcar.png";
import mallonLogo from "../../assets/clients/mallon.png";
// Grupo Servopa didn't have a distinct logo file found, might be text or shared. Using text fallback for now if needed or re-use others if appropriate. 
// Actually I will treat Servopa as text based since I didn't get a specific servopa.png in my download list (I got barigui twice in the thought trace possibly). 
// Wait, I see "toniello", "hyundai", "strasbourg", "vipcar", "mallon", "barigui". 
// I will list them all.

export default function Section02() {
  const companies = [
    { name: "Grupo Barigui", logo: bariguiLogo },
    { name: "Toniello", logo: tonielloLogo },
    { name: "Hyundai", logo: hyundaiLogo },
    { name: "Strasbourg", logo: strasbourgLogo },
    { name: "VipCar", logo: vipcarLogo },
    { name: "Mallon", logo: mallonLogo },
    { name: "Grupo Servopa", logo: null }, // Text fallback
    { name: "Volkswagen", logo: null }, // Text fallback
  ];

  const stats = [
    { number: "15+", label: "Países Atendidos" },
    { number: "99%", label: "Satisfação do Cliente" },
    { number: "24/7", label: "Suporte Especializado" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="w-full py-28 text-slate-100 relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="text-center"
        >
          {/* Heading */}
          <motion.div variants={itemVariants} className="mb-4">
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 bg-clip-text text-transparent">
              1000+
            </h2>
          </motion.div>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-300 font-light mb-4"
          >
            Clientes satisfeitos em todo o mundo
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            Empresas inovadoras que confiam em nossas soluções para transformar
            seus negócios digitalmente
          </motion.p>

          {/* Logos grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 place-items-center"
          >
            {companies.map((company) => (
              <motion.div
                key={company.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.1 } }}
                className="group relative"
              >
                <div className="relative h-20 w-40 rounded-xl bg-[#0b1120]/60 backdrop-blur-sm will-change-transform flex items-center justify-center border border-slate-800/30 p-2">
                  {company.logo ? (
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-h-full max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                    />
                  ) : (
                    <span className="font-semibold text-slate-400 group-hover:text-cyan-200 transition-colors">
                      {company.name}
                    </span>
                  )}
                </div>

                {/* Tooltip */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-[#0b1120]/80 backdrop-blur-md text-slate-200 text-xs py-1 px-2 rounded-md whitespace-nowrap">
                    {company.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center p-6 rounded-2xl bg-[#0b1120]/60 backdrop-blur-sm will-change-transform"
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}