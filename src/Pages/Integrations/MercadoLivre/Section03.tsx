// components/IntegrationsSectionDark.tsx
import img1 from "../../Integrations/MercadoLivre/Assets/1.png";
import img2 from "../../Integrations/MercadoLivre/Assets/2.png";
import img3 from "../../Integrations/MercadoLivre/Assets/3.png";
import img4 from "../../Integrations/MercadoLivre/Assets/4.png";

export default function IntegrationsSectionDark() {
  const images = [img2, img3, img4];

  return (
    <section className="relative w-full overflow-hidden py-20 text-slate-100">
      <div className="relative mx-auto max-w-6xl px-6">
        {/* título e subtítulo */}
        <header className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-slate-100 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
            Integrado com seu sistema de gestão
          </h2>
          <p className="mt-4 text-slate-300/90 max-w-3xl mx-auto font-light">
            Compartilhe dados de produtos, pedidos e clientes em tempo real,
            automatizando a gestão e atualizando estoque e preços
            automaticamente.
          </p>
        </header>

        {/* linha 1 */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <div
              key={i}
              className="rounded-2xl bg-[#0b1120]/40 backdrop-blur-md hover:bg-[#0b1120]/60 transition-all duration-300 flex items-center justify-center p-10"
            >
              <img
                src={src}
                alt={`ERP Logo ${i + 1}`}
                className="h-16 w-auto opacity-90"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                  const ph = document.createElement("div");
                  ph.className =
                    "h-16 w-16 rounded-xl bg-[#0b1120]/60 border border-slate-700/30";
                  e.currentTarget.parentElement?.appendChild(ph);
                }}
              />
            </div>
          ))}
        </div>

        {/* linha 2 */}
        <div className="mt-8 rounded-2xl bg-[#0b1120]/40 backdrop-blur-md flex items-center justify-center p-14 hover:bg-[#0b1120]/60 transition-all">
          <img
            src={img1}
            alt="ERP Logo Principal"
            className="h-16 w-auto opacity-90"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
              const ph = document.createElement("div");
              ph.className =
                "h-16 w-16 rounded-xl bg-[#0b1120]/60 border border-slate-700/30";
              e.currentTarget.parentElement?.appendChild(ph);
            }}
          />
        </div>

        {/* banner informativo */}
        <div className="mt-8 rounded-2xl bg-[#0b1120]/40 backdrop-blur-md p-6 sm:p-8 text-center hover:bg-[#0b1120]/60 transition-all">
          <div className="text-slate-100 font-semibold text-lg">
            Não encontrou seu ERP?
          </div>
          <p className="text-slate-300 mt-2 text-sm md:text-base">
            Não se preocupe — nós fazemos a integração.
            <br className="hidden sm:block" />
            Entre em contato com nossa equipe comercial para saber mais.
          </p>
        </div>
      </div>
    </section>
  );
}