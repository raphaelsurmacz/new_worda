import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../Pages/Nav/Assets/Logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    {
      name: "Serviços",
      href: "#services",
      dropdown: [
        { name: "Desenvolvimento", href: "/development" },
        { name: "Análise de Dados", href: "/analytics" },
        { name: "Integrações", href: "/integrations" },
      ],
    },
    {
      name: "Soluções",
      href: "#solutions",
      dropdown: [{ name: "HubSync", href: "#hubsync" }],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    open: { opacity: 1, height: "auto", transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[#0a0f1a]/90 backdrop-blur-md border-b border-slate-800/50 shadow-sm"
          : "bg-transparent border-b border-slate-800/30"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <img src={logo} alt="Logo" className="w-40 h-auto object-contain" />
        </motion.a>

        {/* Desktop menu */}
        <motion.nav
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hidden items-center space-x-1 lg:flex"
        >
          {menuItems.map((item) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={item.href}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-slate-100 transition-colors"
              >
                <span>{item.name}</span>
                {item.dropdown && (
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                )}
              </a>

              {/* Dropdown menu */}
              <AnimatePresence>
                {item.dropdown && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 mt-2 w-56 rounded-xl bg-[#0b1120]/95 backdrop-blur-md border border-slate-800/60 shadow-lg p-2"
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="flex items-center px-3 py-2.5 rounded-lg text-sm text-slate-300 hover:text-slate-100 hover:bg-slate-800/40 transition-colors"
                      >
                        <span>{dropdownItem.name}</span>
                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="h-1 w-1 rounded-full bg-cyan-300/80" />
                        </div>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.nav>

        {/* Desktop actions (discretas) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden items-center gap-2 lg:flex"
        >
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#hubsync"
            className="rounded-lg border border-slate-700/70 bg-slate-800/40 px-5 py-2.5 text-sm font-medium text-slate-100 hover:bg-slate-700/50"
          >
            HubSync
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/5541984000180?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Worda."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-700/70 bg-transparent px-5 py-2.5 text-sm font-medium text-slate-300 hover:text-slate-100 hover:bg-slate-800/40"
          >
            Contact
          </motion.a>
        </motion.div>

        {/* Mobile toggle */}
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="lg:hidden p-3 rounded-xl bg-[#0b1120]/80 border border-slate-800/60 text-slate-200"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-5 w-5" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-5 w-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="lg:hidden border-t border-slate-800/60 bg-[#0a0f1a]/92 backdrop-blur-md shadow-md overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <a
                    href={item.href}
                    className="flex items-center justify-between py-3 text-base font-medium text-slate-200 hover:text-slate-100 transition-colors border-b border-slate-800/50"
                    onClick={() => setOpen(false)}
                  >
                    <span>{item.name}</span>
                    {item.dropdown && <ChevronDown className="h-4 w-4" />}
                  </a>

                  {/* Mobile dropdown */}
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2 border-l border-slate-800/50 pl-4">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block py-2 text-sm text-slate-300 hover:text-slate-100"
                          onClick={() => setOpen(false)}
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Mobile actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col gap-3 pt-6 border-t border-slate-800/60"
              >
                <motion.a
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  href="#hubsync"
                  className="w-full rounded-lg border border-slate-700/70 bg-slate-800/40 px-5 py-3 text-center text-sm font-medium text-slate-100"
                  onClick={() => setOpen(false)}
                >
                  HubSync
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  href="https://wa.me/5541984000180?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Worda."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-lg border border-slate-700/70 bg-transparent px-5 py-3 text-center text-sm font-medium text-slate-300 hover:text-slate-100 hover:bg-slate-800/40"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}