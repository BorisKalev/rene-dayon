import SectionLabel from './ui/SectionLabel'
import Section from './ui/Section'

const OilIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 3h8l1 7H7L8 3z" />
    <path d="M7 10c0 5 2 8 5 9 3-1 5-4 5-9" />
    <path d="M12 19v2" />
    <circle cx="12" cy="22" r="1" />
  </svg>
)

const BrakeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
  </svg>
)

const GearIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
)

const TireIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5.64 5.64l2.12 2.12M16.24 16.24l2.12 2.12M5.64 18.36l2.12-2.12M16.24 7.76l2.12-2.12" />
  </svg>
)

const TransmissionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="9" width="8" height="6" rx="1" />
    <rect x="14" y="9" width="8" height="6" rx="1" />
    <path d="M10 12h4" />
    <circle cx="6" cy="12" r="1.5" />
    <circle cx="18" cy="12" r="1.5" />
    <path d="M6 5v4M6 15v4M18 5v4M18 15v4" />
  </svg>
)

const ElectricalIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
)

const SERVICES = [
  {
    Icon: OilIcon,
    title: 'Oil & Fluid Change',
    description:
      'Oil, filter, and a quick fluid check. Done in under an hour — we let you know if anything else needs attention.',
  },
  {
    Icon: BrakeIcon,
    title: 'Brakes',
    description:
      'Pads, rotors, calipers. We check the whole system and only replace what actually needs replacing.',
  },
  {
    Icon: GearIcon,
    title: 'Engine Diagnostics',
    description:
      'We read the codes, explain what the warning light means, and give you a clear picture before touching anything.',
  },
  {
    Icon: TireIcon,
    title: 'Tires & Alignment',
    description:
      'Rotation, balancing, and wheel alignment. We also help you find the right tires for your car and budget.',
  },
  {
    Icon: TransmissionIcon,
    title: 'Transmission',
    description:
      "Fluid service and repairs for manual and automatic. We'll tell you honestly whether it's worth fixing or not.",
  },
  {
    Icon: ElectricalIcon,
    title: 'Electrical',
    description:
      'Battery, alternator, starter, fuses, wiring. We find the actual cause — not just swap parts until something works.',
  },
]

export default function Services() {
  return (
    <Section id="services">
      {/* Two-column header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">
        <div>
          <SectionLabel>What We Do</SectionLabel>
          <h2
            className="font-display font-bold text-white tracking-wide leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            WHAT WE WORK ON
          </h2>
        </div>
        <p className="text-zinc-500 text-sm leading-relaxed md:text-right md:max-w-xs">
          From routine maintenance to complex repairs — all makes and models,
          honest pricing every time.
        </p>
      </div>

      {/* Grid — gap-px creates clean 1px cell dividers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800">
        {SERVICES.map(({ Icon, title, description }, i) => (
          <div
            key={title}
            className="group bg-zinc-950 p-7 hover:bg-zinc-900 transition-colors duration-200 cursor-default"
          >
            {/* Icon row — icon left, number right */}
            <div className="flex items-start justify-between mb-5">
              <div className="text-brand-red">
                <Icon />
              </div>
              <span className="font-display font-bold text-zinc-800 text-xs tracking-widest group-hover:text-zinc-700 transition-colors duration-200 select-none">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>

            <h3 className="text-white font-semibold text-base mb-2.5">{title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
