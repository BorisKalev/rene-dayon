import { useLang } from "../i18n";
import redCar from "../assets/pictures/redCarFinal.jpg";

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M2 6.5h9M7 2.5L11 6.5 7 10.5" />
  </svg>
);

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section className="relative min-h-screen bg-zinc-950 overflow-hidden flex flex-col">

      {/* Diagonal texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 44px)",
        }}
      />

      {/* Red accent bar — top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red z-20" />

      {/* ─── CAR IMAGE ───────────────────────────────────────────────────────────
          Breaks OUT of the container. Pinned absolutely to the right edge of the
          viewport (not the container). Starts at ~46 % of viewport width so it
          occupies a cinematic 54 % of the screen and bleeds to the right edge.
      ─────────────────────────────────────────────────────────────────────────── */}
      <div
        className="hidden lg:block absolute inset-y-0 right-0 z-0"
        style={{ left: "46%" }}
      >
        {/* Left-edge blend — wide gradient so the car dissolves into the text zone */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 z-10 pointer-events-none"
          style={{
            width: "340px",
            background: "linear-gradient(to right, #09090b 15%, transparent 100%)",
          }}
        />
        {/* Top fade */}
        <div
          aria-hidden="true"
          className="absolute top-0 inset-x-0 z-10 pointer-events-none"
          style={{
            height: "140px",
            background: "linear-gradient(to bottom, #09090b, transparent)",
          }}
        />
        {/* Bottom fade — tall enough to cover the trust strip transition */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 inset-x-0 z-10 pointer-events-none"
          style={{
            height: "220px",
            background: "linear-gradient(to top, #09090b 30%, transparent 100%)",
          }}
        />

        <img
          src={redCar}
          alt="Alfa Romeo"
          draggable="false"
          className="w-full h-full object-cover select-none"
          style={{
            mixBlendMode: "lighten",
            objectPosition: "left center",
          }}
        />
      </div>

      {/* ─── CONTENT ─────────────────────────────────────────────────────────────
          Sits in the normal max-w-6xl container.
          Text is capped at max-w-[500px] so it stays cleanly in the left zone.
      ─────────────────────────────────────────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex flex-col w-full">

        {/* Text block */}
        <div className="flex-1 flex items-center w-full max-w-6xl mx-auto px-6">
          <div className="w-full max-w-125 py-28 lg:py-36">

            <p className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em] mb-6">
              {h.eyebrow}
            </p>

            <h1
              className="font-display font-bold text-white leading-none tracking-tight mb-6"
              style={{ fontSize: "clamp(2.8rem, 5.5vw, 5.5rem)" }}
            >
              {h.line1}
              <br />
              <span className="text-brand-red">{h.line2}</span>
              <br />
              {h.line3}
            </h1>

            <p className="text-zinc-400 text-base leading-relaxed mb-10">
              {h.sub}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-dark active:scale-[0.97] text-white font-semibold px-7 py-4 text-sm tracking-widest uppercase transition-all duration-200"
              >
                {h.cta1}
                <ArrowIcon />
              </a>
              <a
                href="#services"
                className="inline-flex items-center border border-zinc-700 hover:border-zinc-400 active:scale-[0.97] text-white font-semibold px-7 py-4 text-sm tracking-widest uppercase transition-all duration-200"
              >
                {h.cta2}
              </a>
            </div>

            {/* Info row */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-zinc-500 text-xs pt-8 border-t border-zinc-800/60">
              <span>{h.hours}</span>
              <span className="hidden sm:block h-3 w-px bg-zinc-800" />
              <a href="tel:+15147259336" className="hover:text-zinc-300 transition-colors">
                +1 (514) 725-9336
              </a>
              <span className="hidden sm:block h-3 w-px bg-zinc-800" />
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                {h.walkIn}
              </span>
            </div>

          </div>
        </div>

        {/* Mobile car strip — shown only on small screens */}
        <div className="lg:hidden relative mx-0 overflow-hidden" style={{ height: "260px" }}>
          <img
            src={redCar}
            alt="Alfa Romeo"
            className="w-full h-full object-cover object-center select-none"
            draggable="false"
            style={{ mixBlendMode: "lighten" }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(to top, #09090b 20%, transparent 65%)" }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, #09090b, transparent 40%)" }}
          />
        </div>

        {/* Trust strip — full container width, pinned to hero bottom */}
        <div className="w-full max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-zinc-800 border border-zinc-800 border-b-0">
            {h.trust.map(({ label, sub }) => (
              <div key={label} className="py-5 px-4">
                <div
                  className="font-display font-bold text-white leading-none mb-1"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
                >
                  {label}
                </div>
                <div className="text-zinc-500 text-xs uppercase tracking-widest">
                  {sub}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
