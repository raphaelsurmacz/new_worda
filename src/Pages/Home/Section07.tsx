import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageSquare, FiArrowRight } from "react-icons/fi";

type Suggestion = { id: string; text: string };

const defaultSuggestions: Suggestion[] = [
  { id: "1", text: "Como funciona o processo de trabalho da Worda?" },
  { id: "2", text: "Como vocês fazem o planejamento personalizado?" },
  { id: "3", text: "Quais são as etapas de desenvolvimento e implementação?" },
  { id: "4", text: "Como funcionam o entendimento do negócio e o acompanhamento?" },
  { id: "5", text: "Quais resultados visíveis e mensuráveis posso esperar?" },
  { id: "6", text: "Quais tecnologias utilizam para criar sistemas sob medida?" },
];

/** 🔐 Em produção, mova para o backend/proxy */
const GEMINI_API_KEY = "SUA_KEY_AQUI";
const GEMINI_MODEL = "gemini-2.5-flash";

export default function Section06({
  title = "Dúvidas? Converse com nossa IA",
  subtitle = "Obtenha respostas instantâneas sobre tecnologia, desenvolvimento e estratégia digital",
  suggestions = defaultSuggestions,
  onAsk,
}: {
  title?: string;
  subtitle?: string;
  suggestions?: Suggestion[];
  onAsk?: (query: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function callGemini(userQuery: string) {
    setError(null);
    setAnswer(null);

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;
    const payload = {
      contents: [
        {
          role: "user",
          parts: [{ text: "Responda em Português do Brasil de forma clara e prática. Traga bullets curtos quando útil.\n\n" + `Pergunta: ${userQuery}` }],
        },
      ],
      generationConfig: { temperature: 0.7, maxOutputTokens: 900 },
    };

    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!resp.ok) {
      const errText = await resp.text().catch(() => "");
      throw new Error(`Erro ${resp.status}: ${errText || resp.statusText}`);
    }

    const data = await resp.json();
    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      data?.candidates?.[0]?.content?.parts?.map((p: any) => p?.text).join("\n") ??
      "";

    return text.trim();
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;

    setIsTyping(true);
    onAsk?.(q);

    try {
      const res = await callGemini(q);
      setAnswer(res || "Sem conteúdo retornado.");
    } catch (err: any) {
      setError(err?.message || "Falha ao consultar a API.");
    } finally {
      setIsTyping(false);
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="w-full py-20 text-slate-100 relative overflow-hidden">
      <div className="relative mx-auto max-w-4xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="text-center"
        >
          {/* Header */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-[#0b1120]/40 backdrop-blur-md">
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              <span className="text-xs font-medium text-slate-300">IA Assistente Online</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 bg-clip-text text-transparent">
              {title}
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>

          {/* Interface da IA */}
          <motion.div variants={itemVariants} className="mt-10 relative">
            {/* Card de input — glass neutro */}
            <motion.form
              onSubmit={handleSubmit}
              className={`relative rounded-2xl bg-[#0b1120]/60 backdrop-blur-sm p-5 transition-colors ${isFocused ? "outline outline-1 outline-cyan-300/30" : "outline-none"
                }`}
              aria-label="Formulário de pergunta para IA"
            >
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-[#0b1120]/70 backdrop-blur-sm flex items-center justify-center">
                  <FiMessageSquare className="text-base text-cyan-300/80" />
                </div>

                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Pergunte algo sobre tecnologia, desenvolvimento ou estratégia..."
                  className="flex-1 bg-transparent outline-none placeholder:text-slate-400 text-slate-100 text-base min-h-[2rem]"
                  disabled={isTyping}
                  aria-label="Sua pergunta"
                />

                <motion.button
                  whileHover={{ scale: isTyping ? 1 : 1.03 }}
                  whileTap={{ scale: isTyping ? 1 : 0.98 }}
                  type="submit"
                  disabled={isTyping || !query.trim()}
                  className={`h-10 w-10 rounded-lg flex items-center justify-center transition-all ${isTyping || !query.trim()
                    ? "bg-slate-700/60 cursor-not-allowed"
                    : "bg-[#0b1120]/60 hover:bg-[#0b1120]/80"
                    }`}
                  aria-label="Enviar pergunta"
                >
                  {isTyping ? (
                    <motion.div
                      aria-hidden
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="h-4 w-4 border-2 border-slate-100 border-t-transparent rounded-full"
                    />
                  ) : (
                    <FiArrowRight className="text-base text-slate-100" />
                  )}
                </motion.button>
              </div>

              {/* Indicador de typing sutil */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-3 flex items-center gap-1.5 absolute bottom-5 right-5 pointer-events-none"
                    aria-live="polite"
                  >
                    <span className="text-xs text-slate-500 italic">Gerando resposta...</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.form>

            {/* Resposta / Erro — glass neutro */}
            <div className="mx-auto mt-6 max-w-3xl text-left space-y-3">
              {error && (
                <div className="rounded-xl bg-[#230a0a]/50 backdrop-blur-md p-4 text-sm text-red-300">
                  {error}
                </div>
              )}

              {answer && (
                <div className="group relative rounded-2xl bg-[#0b1120]/40 backdrop-blur-md p-5 text-slate-100">
                  <div className="mb-2 flex items-center gap-2 text-xs text-slate-400">
                    <div className="h-2 w-2 rounded-full bg-cyan-300/80" />
                    Resposta da IA
                  </div>
                  <div className="prose prose-invert max-w-none">
                    {answer.split("\n").map((line, idx) => (
                      <p key={idx} className="leading-relaxed">{line}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Features — chips simples em glass */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3 mt-6"
            >
              {["Respostas Instantâneas", "Disponível 24/7", "Conhecimento Especializado"].map(
                (feature) => (
                  <div
                    key={feature}
                    className="px-3 py-1.5 rounded-full bg-[#0b1120]/40 backdrop-blur-md text-xs text-slate-300"
                  >
                    {feature}
                  </div>
                ),
              )}
            </motion.div>
          </motion.div>

          {/* Sugestões — glass neutro */}
          <motion.div variants={containerVariants} className="mt-12">
            <motion.p variants={itemVariants} className="text-slate-400 mb-6 text-base">
              Perguntas frequentes:
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 max-w-5xl mx-auto">
              {suggestions.map((s) => (
                <motion.button
                  key={s.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -2, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setQuery(s.text)}
                  className="group text-left p-4 rounded-xl bg-[#0b1120]/40 backdrop-blur-md hover:bg-[#0b1120]/60 transition-colors"
                >
                  <span className="text-slate-200 group-hover:text-slate-100 transition-colors text-sm leading-6">
                    {s.text}
                  </span>
                  <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-cyan-300 text-xs font-medium flex items-center gap-1">
                      Clique para perguntar <FiArrowRight />
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* CTA humano — glass neutro */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <p className="text-slate-400 mb-4">Precisa de ajuda humana?</p>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/5541984000180?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#0b1120]/40 backdrop-blur-md px-6 py-3 font-medium text-slate-100 hover:bg-[#0b1120]/60 hover:text-cyan-200 transition-colors"
            >
              Falar com Especialista
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}