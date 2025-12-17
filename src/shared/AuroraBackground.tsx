export default function AuroraBackground({
  blend = false,
  intensity = "med",
}: {
  blend?: boolean;
  intensity?: "low" | "med" | "high";
}) {
  return (
    <div
      className={[
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
        "aurora-wrap aurora-force",
        blend ? "aurora-blend" : "",
        `aurora-${intensity}`,
      ].join(" ")}
    >
      <style>{`
        .aurora-wrap {
          background: radial-gradient(120% 100% at 50% 100%, #000 0%, #030612 55%, #050a1f 100%);
        }
        .aurora-force * { animation-play-state: running !important; }

        /* ——— Ribbons ——— */
        .ribbon {
          position: absolute;
          width: 85vmax;
          height: 85vmax;
          opacity: 0.5;                 
          filter: blur(28px);
          transform-origin: 50% 50%;
          will-change: transform; 
          backface-visibility: hidden;
        }
        .aurora-blend .ribbon { mix-blend-mode: screen; }

        /* Tech Palette: Cyan, Electric Blue, Deep Violet */
        .r1 {
          top: -30vmax; left: -20vmax;
          background: conic-gradient(from 140deg at 50% 50%,
            rgba(0,0,0,0) 0deg,
            rgba(6,182,212,0.4) 34deg,    /* cyan-500 */
            rgba(34,211,238,0.3) 88deg,   /* cyan-400 */
            rgba(59,130,246,0.4) 150deg,  /* blue-500 */
            rgba(37,99,235,0.3) 210deg,   /* blue-600 */
            rgba(0,0,0,0) 360deg);
          animation: driftR1 8s ease-in-out infinite alternate;
        }
        .r2 {
          top: -10vmax; right: -25vmax;
          opacity: 0.45;
          background: conic-gradient(from 200deg at 50% 50%,
            rgba(0,0,0,0) 0deg,
            rgba(139,92,246,0.4) 28deg,   /* violet-500 */
            rgba(167,139,250,0.3) 82deg,  /* violet-400 */
            rgba(59,130,246,0.4) 145deg,  /* blue-500 */
            rgba(37,99,235,0.3) 205deg,   /* blue-600 */
            rgba(0,0,0,0) 360deg);
          animation: driftR2 9s ease-in-out infinite alternate;
        }
        .r3 {
          bottom: -20vmax; left: -10vmax;
          opacity: 0.4;
          background: conic-gradient(from 100deg at 50% 50%,
            rgba(0,0,0,0) 0deg,
            rgba(6,182,212,0.3) 38deg,    /* cyan-500 */
            rgba(59,130,246,0.3) 96deg,   /* blue-500 */
            rgba(124,58,237,0.4) 158deg,  /* violet-600 */
            rgba(37,99,235,0.3) 220deg,   /* blue-600 */
            rgba(0,0,0,0) 360deg);
          animation: driftR3 8.5s ease-in-out infinite alternate;
        }

        /* Tech Grid Overlay */
        .tech-grid {
          position: absolute;
          inset: 0;
          background-size: 50px 50px;
          background-image:
            linear-gradient(to right, rgba(6,182,212,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6,182,212,0.03) 1px, transparent 1px);
          mask-image: radial-gradient(circle at 50% 50%, black 40%, transparent 100%);
          -webkit-mask-image: radial-gradient(circle at 50% 50%, black 40%, transparent 100%);
          pointer-events: none;
          z-index: 1;
        }

        /* ——— Keyframes ——— */
        @keyframes driftR1 {
          0%   { transform: translate3d(0,0,0) rotate(-8deg)  scale(1); }
          50%  { transform: translate3d(10vmax,-7vmax,0) rotate(-3deg)  scale(1.05); }
          100% { transform: translate3d(-8vmax,5vmax,0) rotate(-11deg) scale(1); }
        }
        @keyframes driftR2 {
          0%   { transform: translate3d(0,0,0) rotate(10deg)  scale(1); }
          50%  { transform: translate3d(-11vmax,6vmax,0) rotate(14deg) scale(1.06); }
          100% { transform: translate3d(7vmax,-5vmax,0) rotate(6deg)   scale(1); }
        }
        @keyframes driftR3 {
          0%   { transform: translate3d(0,0,0) rotate(14deg)  scale(0.95); }
          50%  { transform: translate3d(9vmax,-6vmax,0) rotate(11deg) scale(1.00); }
          100% { transform: translate3d(-7vmax,4vmax,0) rotate(17deg) scale(0.95); }
        }

        /* Intensidade */
        .aurora-low  .ribbon { filter: blur(24px); opacity: .3; }
        .aurora-med  .ribbon { filter: blur(28px); opacity: .5; }
        .aurora-high .ribbon { filter: blur(34px); opacity: .6; }

        @media (max-width: 640px) {
          .ribbon { filter: blur(22px); }
          .ribbon.r2 { display: none; }
          .tech-grid { background-size: 30px 30px; }
        }

        .aurora-vignette {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(70% 90% at 50% 120%, rgba(0,0,0,0.8), transparent 60%),
            radial-gradient(120% 60% at -10% 20%, rgba(0,0,0,0.6), transparent 60%),
            radial-gradient(120% 60% at 110% 30%, rgba(0,0,0,0.6), transparent 60%);
          z-index: 2;
        }
      `}</style>

      <div className="tech-grid" />
      <div className="ribbon r1" />
      <div className="ribbon r2" />
      <div className="ribbon r3" />
      <div className="aurora-vignette" />
    </div>
  );
}