import { useLang } from '../i18n'
import SectionLabel from './ui/SectionLabel'
import Section from './ui/Section'

const PhoneIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const MapPinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
)

function InfoRow({ Icon, label, children }) {
  return (
    <div className="flex gap-4">
      <div className="mt-0.5 text-brand-red shrink-0">
        <Icon />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-widest text-zinc-600 mb-1">
          {label}
        </div>
        <div className="text-zinc-300 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

const INPUT_BASE =
  'w-full bg-zinc-900 border border-zinc-700 text-zinc-200 text-sm px-4 py-3 placeholder:text-zinc-600 focus:border-brand-red hover:border-zinc-600 transition-colors duration-200'

const LABEL = 'block text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact

  return (
    <Section id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

        {/* Left — info */}
        <div>
          <SectionLabel>{c.label}</SectionLabel>
          <h2
            className="font-display font-bold text-white tracking-wide leading-tight mb-3"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            {c.title.split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h2>
          <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-sm">
            {c.sub}
          </p>

          <a
            href="tel:+15147259336"
            className="lg:hidden flex items-center justify-center gap-3 w-full border border-zinc-700 hover:border-zinc-500 active:scale-[0.98] text-white py-3.5 text-sm font-semibold tracking-widest uppercase mb-8 transition-all duration-200"
          >
            <PhoneIcon size={16} />
            {c.callCta} +1 (514) 725-9336
          </a>

          <div className="space-y-6">
            <InfoRow Icon={PhoneIcon} label={c.infoPhone}>
              <a href="tel:+15147259336" className="hover:text-white transition-colors">
                +1 (514) 725-9336
              </a>
            </InfoRow>

            <InfoRow Icon={MapPinIcon} label={c.infoAddress}>
              123 Rue Principale
              <br />
              Montréal, QC H0H 0H0
            </InfoRow>

            <InfoRow Icon={ClockIcon} label={c.infoHours}>
              <div className="space-y-1">
                <div className="flex gap-4">
                  <span className="text-zinc-500 w-20 shrink-0">{c.monFri}</span>
                  <span>8:00 – 17:00</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-zinc-500 w-20 shrink-0">{c.saturday}</span>
                  <span className="text-zinc-600">{c.closed}</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-zinc-500 w-20 shrink-0">{c.sunday}</span>
                  <span className="text-zinc-600">{c.closed}</span>
                </div>
              </div>
            </InfoRow>
          </div>
        </div>

        {/* Right — form */}
        <div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={LABEL}>{c.labelName}</label>
                <input
                  type="text"
                  placeholder="Jean Dupont"
                  className={INPUT_BASE}
                  required
                />
              </div>
              <div>
                <label className={LABEL}>{c.labelPhone}</label>
                <input
                  type="tel"
                  placeholder="+1 (514) 000-0000"
                  className={INPUT_BASE}
                  required
                />
              </div>
            </div>

            <div>
              <label className={LABEL}>{c.labelService}</label>
              <select className={`${INPUT_BASE} cursor-pointer`} defaultValue="">
                <option value="" disabled>{c.selectDefault}</option>
                {c.serviceOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label className={LABEL}>
                {c.labelMessage}{' '}
                <span className="text-zinc-700 normal-case tracking-normal font-normal">
                  {c.optional}
                </span>
              </label>
              <textarea
                rows={4}
                placeholder={c.placeholderMessage}
                className={`${INPUT_BASE} resize-none`}
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-brand-red hover:bg-brand-dark active:scale-[0.98] text-white font-semibold py-4 text-sm tracking-widest uppercase transition-all duration-200"
              >
                {c.submit}
              </button>
              <p className="text-zinc-600 text-xs text-center mt-3">
                {c.confirm}
              </p>
            </div>
          </form>
        </div>

      </div>
    </Section>
  )
}
