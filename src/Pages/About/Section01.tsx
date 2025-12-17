// components/AboutSectionDark.tsx
import { useEffect } from "react";

export default function AboutSectionDark() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes gridShift {
        0% { background-position: 0 0, 0 0; }
        100% { background-position: 40px 40px, 40px 40px; }
      }
      .grid-bg-dark {
        background-image:
          linear-gradient(to right, rgba(59,130,246,0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(59,130,246,0.08) 1px, transparent 1px);
        background-size: 40px 40px, 40px 40px;
        animation: gridShift 25s linear infinite;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden text-blue-100"
      style={{
        background:
          "linear-gradient(135deg, #020617 0%, #0a1120 45%, #0f172a 100%)",
      }}
    >
      <div className="absolute inset-0 grid-bg-dark opacity-40" />

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        {/* ===== Header ===== */}
        <header className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-50">
            Sobre nós
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-blue-300/90 font-light">
            Somos uma equipe apaixonada por tecnologia, inovação e resultados. 
            Desenvolvemos soluções digitais sob medida para impulsionar negócios, 
            transformar ideias em produtos escaláveis e criar experiências que 
            geram impacto real.
          </p>
        </header>

        {/* ===== Conteúdo ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Texto */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-100 mb-4">
              Nossa missão
            </h3>
            <p className="text-blue-300 leading-relaxed">
              Entregar produtos digitais de alta performance, 
              com qualidade, inovação e foco total em performance e conversão.  
              Nossa cultura é centrada em evolução constante, automação e 
              experiência do usuário.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Soluções escaláveis e seguras.",
                "Integrações completas com APIs e ERPs.",
                "Design moderno e centrado no usuário.",
                "Equipe multidisciplinar e colaborativa.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-blue-500 mt-2" />
                  <p className="text-blue-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Card visual / logo placeholder */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl border border-blue-800/60 bg-blue-900/20 backdrop-blur-sm p-10 flex flex-col items-center justify-center">
              <div className="h-28 w-28 rounded-2xl bg-blue-950/40 ring-1 ring-blue-800/60 flex items-center justify-center mb-6">
                {/* espaço para logo/ícone */}
                <svg
                  viewBox="0 0 24 24"
                  className="h-12 w-12 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12h8M12 8v8" strokeLinecap="round" />
                </svg>
              </div>
              <p className="text-blue-200 text-center leading-relaxed">
                Combinamos criatividade, tecnologia e estratégia para entregar
                soluções digitais que elevam o nível da sua marca.
              </p>
            </div>
          </div>
        </div>

        {/* ===== rodapé (frase de efeito) ===== */}
        <div className="mt-20 text-center">
          <p className="text-blue-400 text-lg font-medium">
            Inovação, performance e propósito em cada linha de código.
          </p>
        </div>
      </div>
    </section>
  );
}