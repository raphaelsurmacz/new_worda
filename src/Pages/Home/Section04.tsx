import { motion } from "framer-motion";
import { FiMessageSquare } from "react-icons/fi";

type Testimonial = {
    name: string;
    role: string;
    quote: string;
    company?: string;
};

const testimonials: Testimonial[] = [
    {
        name: "Silvio Nicoleti",
        role: "COO",
        company: "Grupo Servopa",
        quote: "A Worda foi fundamental para a transformação digital do nosso grupo. A clareza nos dados e a eficiência das integrações mudaram nossa operação.",
    },
    {
        name: "Gustavo Mendes",
        role: "Especialista em E-commerce",
        company: "",
        quote: "Profissionais de altíssimo nível. Ajudaram a escalar nossas vendas em marketplaces com uma inteligência de dados que não tínhamos antes.",
    },
    {
        name: "Mateus Ferreira",
        role: "Gerente de E-commerce",
        company: "Grupo Barigui",
        quote: "Parceiros estratégicos que entregam muito além de código. Eles entendem do negócio e trazem soluções que realmente impactam o ROI.",
    },
];

export default function Section04() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <section className="w-full py-16 text-slate-100 relative overflow-hidden">
            <div className="relative mx-auto max-w-7xl px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#0b1120]/60 backdrop-blur-md rounded-full border border-slate-800/50">
                        <FiMessageSquare className="text-cyan-300 text-sm" />
                        <span className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Depoimentos</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 bg-clip-text text-transparent">
                        O que dizem nossos parceiros
                    </h2>
                </motion.div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            whileHover={{ y: -6, transition: { duration: 0.2 } }}
                            className="relative p-8 rounded-3xl bg-[#0b1120]/40 backdrop-blur-md border border-slate-800/30 hover:bg-[#0b1120]/60 transition-colors"
                        >
                            <div className="absolute top-8 right-8 text-6xl text-cyan-500/10 font-serif leading-none">"</div>

                            <p className="relative text-slate-300 leading-relaxed mb-8 italic">
                                "{t.quote}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-slate-950 font-bold text-sm">
                                    {t.name.split(" ").map(n => n[0]).join("")}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-100 text-base">{t.name}</h4>
                                    <div className="text-xs text-slate-400">
                                        {t.role} {t.company && <span className="text-cyan-400/80">• {t.company}</span>}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
