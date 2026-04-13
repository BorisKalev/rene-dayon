import { useLang } from "../i18n";
import SectionLabel from "./ui/SectionLabel";
import Section from "./ui/Section";
import toolsImg from "../assets/pictures/tools.jpg";

const ShieldIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const WrenchIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);
const ClockIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);
const CheckIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const REASON_ICONS = [ShieldIcon, WrenchIcon, ClockIcon, CheckIcon];

export default function WhyChooseUs() {
  const { t } = useLang();
  const w = t.whyUs;

  return (
    <Section id="why-us">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">
        <div>
          <SectionLabel>{w.label}</SectionLabel>
          <h2
            className="font-display font-bold text-white tracking-wide leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            {w.title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </h2>
        </div>
        <p className="text-zinc-500 text-sm leading-relaxed md:text-right md:max-w-xs">
          {w.sub}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 border border-zinc-800 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800">
        {/* Left — stats panel with tools.jpg atmosphere */}
        <div className="relative bg-zinc-950 p-8 lg:p-12 flex flex-col justify-between gap-10 overflow-hidden">
          {/* Background tools photo — very subtle */}
          <img
            src={toolsImg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover grayscale"
            style={{ opacity: 0.5 }}
          />
          {/* Dark gradient over it so content stays fully readable */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(9,9,11,0.7) 0%, rgba(9,9,11,0.5) 100%)",
            }}
          />

          {/* Content — sits above the image */}
          <div className="relative z-10 grid grid-cols-2 gap-8">
            {w.stats.map(({ value, label }) => (
              <div key={label}>
                <div
                  className="font-display font-bold text-white leading-none mb-2"
                  style={{ fontSize: "clamp(2.75rem, 5vw, 4rem)" }}
                >
                  {value}
                </div>
                <div className="text-zinc-500 text-xs uppercase tracking-widest">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div className="relative z-10 border-t border-zinc-800 pt-8">
            <div className="w-6 h-0.5 bg-brand-red mb-5" />
            <p className="text-zinc-400 text-sm leading-relaxed italic">
              {w.quote}
            </p>
          </div>
        </div>

        {/* Right — reasons */}
        <div className="bg-zinc-950 p-8 lg:p-10">
          <div className="space-y-7">
            {w.reasons.map(({ title, description }, i) => {
              const Icon = REASON_ICONS[i];
              return (
                <div key={title} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="w-9 h-9 rounded-full bg-brand-red/10 border border-brand-red/25 flex items-center justify-center shrink-0 text-brand-red">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1.5 leading-snug">
                      {title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
