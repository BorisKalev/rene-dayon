import { useLang } from "../i18n";
import SectionLabel from "./ui/SectionLabel";
import Section from "./ui/Section";

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

      <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-zinc-800">
        {h.steps.map(({ number, title, description }, i) => (
          <div
            key={number}
            className={[
              "py-10 md:py-0 md:px-10",
              i === 0 ? "md:pl-0" : "",
              i === h.steps.length - 1 ? "md:pr-0" : "",
              i !== 0 ? "border-t border-zinc-800 md:border-t-0" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <span
              className="block font-display font-bold text-zinc-800 leading-none mb-5 select-none"
              style={{ fontSize: "clamp(3.5rem, 7vw, 5.5rem)" }}
            >
              {number}
            </span>

            <div className="w-7 h-0.5 bg-brand-red mb-5" />

            <h3 className="text-white font-semibold text-lg mb-3">{title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
