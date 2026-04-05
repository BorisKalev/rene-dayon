import { useLang } from "../i18n";
import redCar from "../assets/pictures/redCarFinal.jpg";

const ArrowIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
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
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 44px)",
        }}
      />

      {/* Red accent bar — top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red z-10" />

      {/* Main content — two columns on desktop */}
      <div className="relative flex-1 w-full max-w-6xl mx-auto px-6 pt-28 pb-0 flex flex-col">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          {/* Left — text content */}
          <div className="py-12 lg:py-20 flex flex-col justify-center">
            <p className="text-brand-red text-xs font-semibold uppercase tracking-[0.25em] mb-6">
              {h.eyebrow}
            </p>

            <h1
              className="font-display font-bold text-white leading-none tracking-tight mb-6"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
            >
              {h.line1}
              <br />
              <span className="text-brand-red">{h.line2}</span>
              <br />
              {h.line3}
            </h1>

            <p className="text-zinc-400 text-base leading-relaxed max-w-md mb-10">
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
              <a
                href="tel:+15147259336"
                className="hover:text-zinc-300 transition-colors"
              >
                +1 (514) 725-9336
              </a>
              <span className="hidden sm:block h-3 w-px bg-zinc-800" />
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                {h.walkIn}
              </span>
            </div>
          </div>

          {/* Right — car image (desktop) */}
          <div className="hidden lg:block relative h-full">
            {/* Gradient fade on the left edge */}
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 bottom-0 w-48 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to right, #09090b, transparent)" }}
            />
            {/* Gradient fade on the bottom edge */}
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 bottom-0 h-32 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to top, #09090b, transparent)" }}
            />
            {/* Gradient fade on the top edge */}
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-0 h-24 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to bottom, #09090b, transparent)" }}
            />

            <img
              src={redCar}
              alt="Alfa Romeo"
              className="absolute inset-0 w-full h-full object-cover object-center select-none"
              draggable="false"
              style={{ mixBlendMode: "lighten" }}
            />
          </div>
        </div>

        {/* Mobile car image — between headline and below-fold, blended */}
        <div
          className="lg:hidden relative -mx-6 mb-2 overflow-hidden"
          style={{ maxHeight: "300px" }}
        >
          <img
            src={redCar}
            alt="Alfa Romeo"
            className="w-full object-cover object-center"
            style={{ mixBlendMode: "lighten", opacity: 0.9 }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-none"
            style={{
              background:
                "linear-gradient(to top, #09090b 15%, transparent 60%)",
            }}
          />
        </div>

        {/* Trust strip — full width, pinned to bottom of hero */}
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
    </section>
  );
}
