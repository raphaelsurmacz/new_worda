// components/PricingPlans.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Users,
  Rocket,
  Target,
  Database,
  LineChart,
  BarChart3,
  Settings,
  TrendingUp,
} from "lucide-react";

/* =========================================================
 * Tipos
 * =======================================================*/
export type Plan = {
  id: string;
  name: string;
  priceLabel: string;
  cadence?: string;
  subcopy?: string;
  blurb: string;
  features?: string[];
  ctaText: string;
  onClick?: () => void;
  highlight?: boolean;
  popular?: boolean;
  icon?: React.ReactNode;
  gradient?: string; // opcional agora
};

export type PricingPlansProps = {
  badgeText?: string;
  title?: string;
  subtitle?: string;
  note?: string;
  plans?: Plan[];
  stepsTitle?: string;
  steps?: Step[];
};

export type Step = {
  id: number | string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  gradient?: string; // opcional agora
};

/* =========================================================
 * Mocks (mantidos por compat)
 * =======================================================*/
const DEFAULT_PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    priceLabel: "FREE",
    blurb: "Perfect for individuals and small projects getting started with data analytics.",
    features: ["Up to 5,000 data points", "Basic analytics dashboard", "Email support", "Standard reports", "Community access"],
    ctaText: "Get Started Free",
    icon: <Rocket className="h-6 w-6" />,
  },
  {
    id: "pro",
    name: "Professional",
    priceLabel: "US$29",
    cadence: "month",
    subcopy: "billed annually",
    blurb: "For growing businesses that need advanced analytics and insights.",
    features: ["Up to 50,000 data points", "Advanced analytics", "Priority email & chat support", "Custom dashboards", "API access", "Export capabilities"],
    ctaText: "Start Free Trial",
    highlight: true,
    popular: true,
    icon: <Users className="h-6 w-6" />,
  },
  {
    id: "team",
    name: "Team",
    priceLabel: "US$79",
    cadence: "month",
    subcopy: "billed annually",
    blurb: "Collaborative features for teams that need to share insights and work together.",
    features: ["Up to 200,000 data points", "Team workspaces", "Role-based permissions", "Advanced integrations", "White-label reports", "SLA guarantee"],
    ctaText: "Start Free Trial",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    priceLabel: "Custom",
    cadence: "",
    subcopy: "tailored to your needs",
    blurb: "For large organizations requiring custom solutions and dedicated support.",
    features: ["Unlimited data points", "Custom data pipelines", "Dedicated account manager", "24/7 phone support", "On-premise deployment", "Custom SLAs"],
    ctaText: "Contact Sales",
    icon: <Shield className="h-6 w-6" />,
  },
];

const DEFAULT_STEPS: Step[] = [
  { id: 1, title: "Definição do Objetivo", desc: "Mergulhamos nos seus objetivos de negócio para definir métricas claras de sucesso.", icon: <Target className="h-6 w-6" /> },
  { id: 2, title: "Coleta de Dados", desc: "Integramos múltiplas fontes de dados (internas e externas) com pipelines automatizados.", icon: <Database className="h-6 w-6" /> },
  { id: 3, title: "Preparação dos Dados", desc: "Limpeza, estruturação e enriquecimento dos dados brutos para análise avançada.", icon: <Settings className="h-6 w-6" /> },
  { id: 4, title: "Análise Exploratória", desc: "Identificação de padrões ocultos, tendências e correlações através de exploração profunda.", icon: <LineChart className="h-6 w-6" /> },
  { id: 5, title: "Modelagem e IA", desc: "Aplicação de algoritmos e machine learning para prever cenários e otimizar resultados.", icon: <BarChart3 className="h-6 w-6" /> },
  { id: 6, title: "Visualização", desc: "Criação de dashboards interativos e relatórios que contam histórias claras para decisão.", icon: <Rocket className="h-6 w-6" /> },
  { id: 7, title: "Otimização Contínua", desc: "Monitoramento constante da performance e refinamento de estratégias baseado em dados.", icon: <TrendingUp className="h-6 w-6" /> },
];

/* =========================================================
 * Steps (glass neutro)
 * =======================================================*/
function StepsGrid({
  title = "Nossa Metodologia Data-Driven",
  steps = DEFAULT_STEPS,
}: {
  title?: string;
  steps?: Step[];
}) {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } };
  const cardVariants = { hidden: { opacity: 0, y: 18, scale: 0.98 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } } };

  return (
    <section className="relative w-full py-28 text-slate-100 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 bg-clip-text text-transparent">
            {title}
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Uma metodologia comprovada para transformar dados em{" "}
            <span className="bg-gradient-to-r from-cyan-200 to-blue-300 bg-clip-text text-transparent font-medium">
              inteligência acionável
            </span>
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {steps.map((step) => (
            <motion.article
              key={step.id}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl bg-[#0b1120]/40 backdrop-blur-md p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="text-3xl font-bold text-slate-300/20 group-hover:text-slate-300/30 transition-colors">
                  {String(step.id).padStart(2, "0")}
                </div>
                <div className="h-12 w-12 rounded-xl bg-[#0b1120]/60 backdrop-blur-sm flex items-center justify-center text-cyan-300/80">
                  {step.icon}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-slate-100 mb-3 group-hover:text-cyan-200 transition-colors">
                {step.title}
              </h3>

              <p className="text-slate-400 leading-7 text-sm">
                {step.desc}
              </p>

              <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
 * PricingPlans (hero neutro + Steps abaixo)
 * =======================================================*/
export default function PricingPlans({
  badgeText = "Comece agora. Sem cartão de crédito.",
  title = "Transforme Dados em",
  subtitle = "Decisões Inteligentes",
  note = "Metodologia exclusiva para alavancar seus resultados com precisão e agilidade.",
  plans = DEFAULT_PLANS, // mantido por compat (não renderizado aqui)
  stepsTitle = "Nossa Metodologia Data-Driven",
  steps = DEFAULT_STEPS,
}: PricingPlansProps) {
  return (
    <section className="relative w-full overflow-hidden text-slate-100">
      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-24 sm:pt-28">
        {/* Badge (glass) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0b1120]/40 backdrop-blur-md px-5 py-2">
            <div className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
            <span className="text-sm font-medium text-slate-300">{badgeText}</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.header
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="block bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 bg-clip-text text-transparent">
              {title}
            </span>
            <span className="mt-3 block bg-gradient-to-r from-cyan-200 to-blue-300 bg-clip-text text-transparent">
              {subtitle}
            </span>
          </h1>
          {note && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              {note}
            </motion.p>
          )}
        </motion.header>
      </div>

      {/* Steps abaixo (mesma paleta / glass) */}
      <StepsGrid title={stepsTitle} steps={steps} />
    </section>
  );
}