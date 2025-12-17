// components/TechStackSectionDark.tsx
export default function TechStackSectionDark() {
  const items = [
    {
      label: "Cloud Computing",
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12">
          <path
            d="M7 17h9a4 4 0 0 0 0-8 5 5 0 0 0-9.7 1.5A3.5 3.5 0 0 0 7 17Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 20v-3M12 20v-3M15 20v-3"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      label: "Python",
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12">
          <path
            d="M5 10c0-2.8 2.2-5 5-5h4a2 2 0 0 1 2 2v5H9a4 4 0 0 1-4-4Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M19 14c0 2.8-2.2 5-5 5H10a2 2 0 0 1-2-2v-5h7a4 4 0 0 1 4 4Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <circle cx="9.5" cy="7.5" r="0.9" fill="currentColor" />
          <circle cx="14.5" cy="16.5" r="0.9" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "Docker",
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12">
          <rect x="5" y="9" width="3" height="3" rx="0.4" stroke="currentColor" strokeWidth="1.6" fill="none" />
          <rect x="9" y="9" width="3" height="3" rx="0.4" stroke="currentColor" strokeWidth="1.6" fill="none" />
          <rect x="13" y="9" width="3" height="3" rx="0.4" stroke="currentColor" strokeWidth="1.6" fill="none" />
          <rect x="9" y="5" width="3" height="3" rx="0.4" stroke="currentColor" strokeWidth="1.6" fill="none" />
          <path
            d="M3.5 13.5c.5 2.2 2.6 4 5.8 4H14c5 0 6.5-2.6 6.5-4.5 0-1-1-1-1.6-.9-.6.1-1.2-.2-1.5-.8"
            stroke="currentColor"
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      label: "SQL",
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12">
          <ellipse cx="12" cy="6" rx="7" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M5 6v8c0 1.9 3.1 3.5 7 3.5s7-1.6 7-3.5V6" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M5 10c0 1.9 3.1 3.5 7 3.5s7-1.6 7-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      ),
    },
    {
      label: "PowerBI",
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12">
          <rect x="4" y="10" width="2.8" height="8" rx="0.6" stroke="currentColor" strokeWidth="1.6" fill="none" />
          <rect x="9" y="6" width="2.8" height="12" rx="0.6" stroke="currentColor" strokeWidth="1.6" fill="none" />
          <rect x="14" y="8" width="2.8" height="10" rx="0.6" stroke="currentColor" strokeWidth="1.6" fill="none" />
          <circle cx="18.5" cy="5.5" r="1.3" stroke="currentColor" strokeWidth="1.6" fill="none" />
        </svg>
      ),
    },
    {
      label: "Apache Airflow",
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12">
          <path d="M12 12 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M12 12 18 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M12 12 6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M12 12 18 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="12" cy="12" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full overflow-hidden py-20 text-slate-100">
      <div className="relative mx-auto max-w-6xl px-6">
        {/* heading + subcopy */}
        <header className="max-w-4xl">
          <h3 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-slate-100 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
            Tudo que fazemos é pensado em performance de vendas
          </h3>
          <p className="mt-5 text-slate-300/90">
            Faltou algo? A gente desenvolve. Time completo e dinâmico, construindo sob medida para a sua necessidade.
          </p>
        </header>

        <h4 className="mt-12 text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
          Tecnologias utilizadas
        </h4>

        {/* grid de tecnologias — glass leve, sem borda/shadow pesado */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5">
          {items.map((it) => (
            <div
              key={it.label}
              className="group rounded-2xl bg-[#0b1120]/40 backdrop-blur-md p-6 sm:p-7 flex flex-col items-center justify-center transition-all duration-300 hover:bg-[#0b1120]/60 hover:scale-[1.02]"
            >
              <div className="flex items-center justify-center h-24 w-full rounded-xl bg-[#0b1120]/40">
                <div className="text-cyan-300/90 group-hover:text-cyan-200 transition-colors duration-300">
                  {it.icon}
                </div>
              </div>
              <div className="mt-4 text-center text-slate-200 font-medium">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}