import SectionLabel from './ui/SectionLabel'
import Section from './ui/Section'

const ShieldIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const WrenchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
)

const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
)

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)

const REASONS = [
  {
    Icon: ShieldIcon,
    title: 'No Work Without Your OK',
    description:
      'We give you a written estimate before touching anything. The price we quote is the price you pay — no additions after the fact.',
  },
  {
    Icon: WrenchIcon,
    title: 'Experienced Mechanics',
    description:
      'Our team has been working on all makes and models for over 15 years. No apprentices on your car without supervision.',
  },
  {
    Icon: ClockIcon,
    title: 'Most Jobs Done Same Day',
    description:
      "If your repair will take longer than expected, we call you in the morning — not after you show up to pick it up.",
  },
  {
    Icon: CheckIcon,
    title: 'Straightforward Pricing',
    description:
      "No shop fees, no surprise line items. You get a clear breakdown and we only bill for what was actually done.",
  },
]

const STATS = [
  { value: '15+', label: 'Years in Business' },
  { value: '3K+', label: 'Vehicles Serviced' },
]

export default function WhyChooseUs() {
  return (
    <Section id="why-us">
      {/* Section header — full width above both columns */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">
        <div>
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2
            className="font-display font-bold text-white tracking-wide leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            WHAT WE
            <br />
            STAND FOR
          </h2>
        </div>
        <p className="text-zinc-500 text-sm leading-relaxed md:text-right md:max-w-xs">
          We&apos;ve been in this neighborhood a long time. Honest work, fair
          prices — and we don&apos;t fix things that aren&apos;t broken.
        </p>
      </div>

      {/* Two-column body — gap-px for clean 1px divider */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-zinc-800">

        {/* Left — stats panel */}
        <div className="bg-zinc-950 p-8 lg:p-12 flex flex-col justify-between gap-10">
          <div className="grid grid-cols-2 gap-8">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <div
                  className="font-display font-bold text-white leading-none mb-2"
                  style={{ fontSize: 'clamp(2.75rem, 5vw, 4rem)' }}
                >
                  {value}
                </div>
                <div className="text-zinc-500 text-xs uppercase tracking-widest">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-zinc-800 pt-8">
            <div className="w-6 h-0.5 bg-brand-red mb-5" />
            <p className="text-zinc-400 text-sm leading-relaxed italic">
              &ldquo;Straight talk, fair prices, and quality work&nbsp;—
              that&apos;s been our promise from day one.&rdquo;
            </p>
          </div>
        </div>

        {/* Right — reasons with circular badge icons */}
        <div className="bg-zinc-950 p-8 lg:p-10">
          <div className="space-y-7">
            {REASONS.map(({ Icon, title, description }) => (
              <div key={title} className="flex gap-4">
                <div className="w-9 h-9 rounded-full bg-brand-red/10 border border-brand-red/25 flex items-center justify-center shrink-0 text-brand-red mt-0.5">
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
            ))}
          </div>
        </div>

      </div>
    </Section>
  )
}
