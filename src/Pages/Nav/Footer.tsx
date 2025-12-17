import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, ArrowUpRight, MessageCircle, Linkedin, Github, Twitter,
} from "lucide-react";
// mesma logo do nav
import logo from "../../Pages/Nav/Assets/Logo.png";

interface FooterProps {
  logoSrc?: string;           // opcional, caso queira sobrescrever
  brand?: string;
  description?: string;
  navLinks?: { label: string; href: string }[];
  phone?: string;
  email?: string;
  address?: string;
  onContact?: () => void;
  year?: number;
  socialLinks?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    whatsapp?: string;
  };
}

export default function Footer({
  logoSrc, // se vier, usa; senão, usa import 'logo'
  brand = "WORDA",
  description = "Web Oriented Retail & Data Analytics",
  navLinks = [
    { label: "Home", href: "/" },
    { label: "Análise de Dados", href: "/analytics" },
    { label: "Integrações", href: "/integrations" },
    { label: "Performance de Vendas", href: "/sales" },
  ],
  phone = "+55 41 984000180",
  email = "fernando@worda.com.br",
  address = "Curitiba, PR - Brasil",
  onContact,
  year = 2025,
  socialLinks = {
    linkedin: "https://linkedin.com/company/worda",
    github: "https://github.com/worda",
    twitter: "https://twitter.com/worda",
    whatsapp: "https://wa.me/5541984000180",
  },
}: FooterProps) {
  const quickLinks = [
    { label: "Sobre Nós", href: "/about" },
    { label: "Cases", href: "/cases" },
    { label: "Blog", href: "/blog" },
    { label: "Carreiras", href: "/careers" },
  ];

  const services = [
    { label: "Consultoria em Dados", href: "/data-consulting" },
    { label: "Desenvolvimento Web", href: "/web-development" },
    { label: "Integração de APIs", href: "/api-integration" },
    { label: "Otimização E-commerce", href: "/ecommerce-optimization" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <footer className="relative w-full text-slate-100 overflow-hidden">
      {/* Main */}
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-12 lg:grid-cols-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-auto">
                <img
                  src={logoSrc ?? (logo as string)}
                  alt={brand}
                  className="h-10 w-auto object-contain"
                  loading="lazy"
                />
              </div>
             
            </div>

            <p className="text-slate-400 leading-7 mb-8 max-w-md">
              Transformamos dados em insights e criamos soluções web escaláveis —
              tudo coerente com o seu momento de negócio.
            </p>

            {/* Contact */}
            <div className="space-y-3 mb-8">
              <motion.a
                whileHover={{ x: 4 }}
                href={`tel:${phone}`}
                className="flex items-center gap-3 text-slate-300 hover:text-cyan-200 transition-colors"
              >
                <div className="h-10 w-10 rounded-xl bg-[#0b1120]/40 backdrop-blur-md flex items-center justify-center">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="font-medium">{phone}</span>
              </motion.a>

              <motion.a
                whileHover={{ x: 4 }}
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-slate-300 hover:text-cyan-200 transition-colors"
              >
                <div className="h-10 w-10 rounded-xl bg-[#0b1120]/40 backdrop-blur-md flex items-center justify-center">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="font-medium">{email}</span>
              </motion.a>

              <div className="flex items-center gap-3 text-slate-400">
                <div className="h-10 w-10 rounded-xl bg-[#0b1120]/40 backdrop-blur-md flex items-center justify-center">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="font-medium">{address}</span>
              </div>
            </div>

            {/* Social (chips glass) */}
            <div className="flex gap-3">
              {socialLinks.linkedin && (
                <motion.a
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  href={socialLinks.linkedin}
                  className="h-10 w-10 rounded-xl bg-[#0b1120]/40 backdrop-blur-md flex items-center justify-center text-slate-400 hover:text-cyan-200 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </motion.a>
              )}
              {socialLinks.github && (
                <motion.a
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  href={socialLinks.github}
                  className="h-10 w-10 rounded-xl bg-[#0b1120]/40 backdrop-blur-md flex items-center justify-center text-slate-400 hover:text-cyan-200 transition-colors"
                >
                  <Github className="h-4 w-4" />
                </motion.a>
              )}
              {socialLinks.twitter && (
                <motion.a
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  href={socialLinks.twitter}
                  className="h-10 w-10 rounded-xl bg-[#0b1120]/40 backdrop-blur-md flex items-center justify-center text-slate-400 hover:text-cyan-200 transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                </motion.a>
              )}
              {socialLinks.whatsapp && (
                <motion.a
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  href={socialLinks.whatsapp}
                  className="h-10 w-10 rounded-xl bg-[#0b1120]/40 backdrop-blur-md flex items-center justify-center text-slate-400 hover:text-cyan-200 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                </motion.a>
              )}
            </div>
          </motion.div>

          {/* Navegação */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 className="text-base font-semibold text-slate-100 mb-4">Navegação</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-slate-400 hover:text-cyan-200 transition-colors group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Serviços */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 className="text-base font-semibold text-slate-100 mb-4">Serviços</h4>
            <ul className="space-y-2.5">
              {services.map((service, index) => (
                <motion.li
                  key={service.label}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <a
                    href={service.href}
                    className="flex items-center gap-2 text-slate-400 hover:text-cyan-200 transition-colors group"
                  >
                    <span>{service.label}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Links rápidos + CTA */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 className="text-base font-semibold text-slate-100 mb-4">Links Rápidos</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-slate-400 hover:text-cyan-200 transition-colors group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </motion.li>
              ))}
            </ul>

           
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-16 pt-8 border-t border-slate-800/50"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="text-slate-500 text-sm">
              © {year} {brand}. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <a href="/privacy" className="hover:text-cyan-200 transition-colors">Política de Privacidade</a>
              <a href="/terms" className="hover:text-cyan-200 transition-colors">Termos de Serviço</a>
              <a href="/cookies" className="hover:text-cyan-200 transition-colors">Cookies</a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Linha decorativa sutil */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />
    </footer>
  );
}