import { Fragment } from "react";
import { useLang } from "../i18n";
import SectionLabel from "./ui/SectionLabel";
import Section from "./ui/Section";

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const ArrowDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14M6 13l6 6 6-6" />
  </svg>
);

export default function HowItWorks() {
  const { t } = useLang();
  const h = t.howItWorks;

  return (
    <Section id="how-it-works" muted>
      <div className="mb-14">
        <SectionLabel>{h.label}</SectionLabel>
        <h2
          className="font-display font-bold text-white tracking-wide"
          style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
        >
          {h.title}
        </h2>
      </div>

      {/*
        Grid layout:
          Desktop — 5 columns: [step] [arrow] [step] [arrow] [step]
          Mobile  — 1 column:  step / arrow / step / arrow / step (stacked)
      */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_40px_1fr_40px_1fr]">
        {h.steps.map(({ number, title, description }, i) => (
          <Fragment key={number}>
            {/* ── Step card ── */}
            <div className={[
              "py-10 md:py-0",
              i === 0 ? "md:pr-8" : i === h.steps.length - 1 ? "md:pl-8" : "md:px-8",
            ].join(" ")}>
              <span
                className="block font-display font-bold text-zinc-800 leading-none mb-5 select-none"
                style={{ fontSize: "clamp(3.5rem, 7vw, 5.5rem)" }}
              >
                {number}
              </span>

              <div className="w-7 h-0.5 bg-brand-red mb-5" />

              <h3 className="text-white font-semibold text-lg mb-3">{title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
            </div>

            {/* ── Arrow connector between steps ── */}
            {i < h.steps.length - 1 && (
              <div className="flex items-center justify-center">
                {/* Desktop: right-pointing arrow centred on the divider line */}
                <div className="hidden md:flex items-center justify-center relative self-stretch w-full">
                  {/* The divider line */}
                  <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-zinc-800" />
                  {/* Arrow badge over the line */}
                  <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full border border-zinc-700 bg-zinc-950 text-zinc-500">
                    <ArrowRight />
                  </div>
                </div>

                {/* Mobile: downward arrow between stacked steps */}
                <div className="md:hidden flex flex-col items-center gap-0 py-1 text-zinc-700">
                  <div className="w-px h-4 bg-zinc-800" />
                  <ArrowDown />
                  <div className="w-px h-4 bg-zinc-800" />
                </div>
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </Section>
  );
}
