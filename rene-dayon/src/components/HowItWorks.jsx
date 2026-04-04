import SectionLabel from './ui/SectionLabel'
import Section from './ui/Section'

const STEPS = [
  {
    number: '01',
    title: 'Call or Book Online',
    description:
      'Phone us or fill the quick form below. We confirm a time that works for you — usually the same day.',
  },
  {
    number: '02',
    title: 'We Inspect & Explain',
    description:
      'We go through the vehicle, find the issues, and walk you through exactly what needs to be done and what it will cost.',
  },
  {
    number: '03',
    title: 'Pick Up & Drive',
    description:
      'Work starts only after you approve. We use quality parts, do a final check, and call you when it\'s ready.',
  },
]

export default function HowItWorks() {
  return (
    <Section id="how-it-works" muted>
      <div className="mb-14">
        <SectionLabel>Our Process</SectionLabel>
        <h2
          className="font-display font-bold text-white tracking-wide"
          style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
        >
          HOW IT WORKS
        </h2>
      </div>

      {/* Steps — dividers between items on both mobile and desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-zinc-800">
        {STEPS.map(({ number, title, description }, i) => (
          <div
            key={number}
            className={[
              'md:px-10',
              i === 0 ? 'md:pl-0' : '',
              i === STEPS.length - 1 ? 'md:pr-0' : '',
              i === 0 ? 'pb-10' : 'pt-10 pb-10 border-t border-zinc-800 md:border-t-0',
              i === STEPS.length - 1 ? 'pb-0' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <span
              className="block font-display font-bold text-zinc-800 leading-none mb-5 select-none"
              style={{ fontSize: 'clamp(3.5rem, 7vw, 5.5rem)' }}
            >
              {number}
            </span>

            <div className="w-7 h-0.5 bg-brand-red mb-5" />

            <h3 className="text-white font-semibold text-lg mb-3">{title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
