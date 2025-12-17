// components/VideoShowcaseDark.tsx
import { useEffect, useState } from "react";

export default function VideoShowcaseDark() {
  const [open, setOpen] = useState(false);

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
    return () => { document.head.removeChild(style); };
  }, []);

  // fecha com ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden text-blue-100"
      style={{
        background: "linear-gradient(135deg, #020617 0%, #0a1120 45%, #0f172a 100%)",
      }}
    >
      <div className="absolute inset-0 grid-bg-dark opacity-35" />

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <header className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-50">
            Assista ao nosso vídeo
          </h2>
          <p className="mt-4 text-blue-300/90 font-light max-w-3xl mx-auto">
            Um overview rápido do que fazemos, nossa stack e como entregamos
            performance com tecnologia.
          </p>
        </header>

        {/* Card do vídeo (thumb + botão de play) */}
        <div className="relative rounded-3xl border border-blue-800/60 bg-blue-900/20 backdrop-blur-sm overflow-hidden">
          {/* thumb (troque quando quiser) */}
          <div
            className="aspect-[16/9] w-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(2,6,23,0.2), rgba(2,6,23,0.6)), url('/images/video-thumb.jpg') center/cover no-repeat",
            }}
          />

          {/* borda de brilho sutil */}
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-blue-800/60" />

          {/* botão play central */}
          <div className="absolute inset-0 grid place-items-center">
            <button
              onClick={() => setOpen(true)}
              className="group inline-flex items-center gap-3 rounded-full border border-blue-700/70 bg-blue-900/40 px-6 py-3 backdrop-blur-md
                         hover:bg-blue-900/60 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/90 shadow-lg shadow-blue-900/40 group-hover:scale-105 transition">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-blue-50" fill="currentColor">
                  <path d="M8 5v14l11-7-11-7z" />
                </svg>
              </span>
              <span className="text-blue-100 font-semibold">Reproduzir vídeo</span>
            </button>
          </div>
        </div>

        {/* rodapé opcional */}
        <div className="text-center mt-6 text-blue-300/90 text-sm">
          Dica: clique para assistir em tela cheia.
        </div>
      </div>

      {/* ===== Modal com o vídeo ===== */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-2xl overflow-hidden border border-blue-700/60 shadow-2xl">
              <video
                key={Number(open)} // força reinício ao abrir
                controls
                autoPlay
                playsInline
                className="w-full h-auto bg-black"
                poster="/images/video-thumb.jpg"
              >
                {/* troque para seu arquivo local em /public */}
                <source src="/videos/demo.mp4" type="video/mp4" />
                Seu navegador não suporta vídeo HTML5.
              </video>
            </div>

            {/* fechar */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-12 right-0 rounded-full border border-blue-700/70 bg-blue-900/40 px-3 py-1 text-sm text-blue-100
                         hover:bg-blue-900/60 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}