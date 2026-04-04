import SectionLabel from './ui/SectionLabel'

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
)

const MapPinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M2 6.5h9M7 2.5L11 6.5 7 10.5" />
  </svg>
)

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-zinc-950 overflow-hidden">
      {/* Subtle diagonal texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 44px)',
        }}
      />

      {/* Navbar offset + content padding */}
      <div className="relative w-full max-w-6xl mx-auto px-6 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — main content */}
          <div>
            <SectionLabel>Garage Rene-Dayon</SectionLabel>

            <h1
              className="font-display font-bold text-white leading-[1.05] tracking-wide mb-5"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.75rem)' }}
            >
              HONEST WORK.
              <br />
              <span className="text-brand-red">FAIR PRICES.</span>
              <br />
              EVERY TIME.
            </h1>

            <p className="text-zinc-400 text-base leading-relaxed max-w-md mb-8">
              Garage Rene-Dayon has been the neighborhood&apos;s trusted mechanic
              for over 15 years. We tell you what&apos;s wrong, give you the price
              upfront, and don&apos;t start until you say yes.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-dark active:scale-[0.97] text-white font-semibold px-6 py-3.5 text-sm tracking-widest uppercase transition-all duration-200"
              >
                Book an Appointment
                <ArrowIcon />
              </a>
              <a
                href="#services"
                className="inline-flex items-center border border-zinc-700 hover:border-zinc-400 active:scale-[0.97] text-white font-semibold px-6 py-3.5 text-sm tracking-widest uppercase transition-all duration-200"
              >
                Our Services
              </a>
            </div>

            {/* Practical info strip */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-7 border-t border-zinc-800">
              <div className="flex items-center gap-2 text-zinc-500 text-xs">
                <ClockIcon />
                <span>Mon – Fri &nbsp;8:00 – 17:00</span>
              </div>
              <div className="hidden sm:block h-3 w-px bg-zinc-800" />
              <div className="flex items-center gap-2 text-zinc-500 text-xs">
                <PhoneIcon />
                <a href="tel:+15140000000" className="hover:text-zinc-300 transition-colors">
                  +1 (514) 000-0000
                </a>
              </div>
              <div className="hidden sm:block h-3 w-px bg-zinc-800" />
              <div className="flex items-center gap-2 text-zinc-500 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                <span>Walk-ins welcome</span>
              </div>
            </div>
          </div>

          {/* Right — info panel (desktop only) */}
          <div className="hidden lg:block border border-zinc-800 bg-zinc-900/40">

            {/* Stats row */}
            <div className="grid grid-cols-2 divide-x divide-zinc-800 border-b border-zinc-800">
              <div className="p-8">
                <div
                  className="font-display font-bold text-white leading-none mb-2"
                  style={{ fontSize: 'clamp(2.75rem, 4vw, 3.5rem)' }}
                >
                  15+
                </div>
                <div className="text-zinc-500 text-xs uppercase tracking-widest">
                  Years in Business
                </div>
              </div>
              <div className="p-8">
                <div
                  className="font-display font-bold text-white leading-none mb-2"
                  style={{ fontSize: 'clamp(2.75rem, 4vw, 3.5rem)' }}
                >
                  3K+
                </div>
                <div className="text-zinc-500 text-xs uppercase tracking-widest">
                  Vehicles Serviced
                </div>
              </div>
            </div>

            {/* Info rows */}
            <div className="p-8 space-y-5 border-b border-zinc-800">
              <div className="flex items-start gap-3">
                <span className="text-brand-red mt-0.5 shrink-0"><ClockIcon /></span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-zinc-600 mb-1">Hours</div>
                  <div className="text-zinc-300 text-sm">Mon – Fri &nbsp; 8:00 – 17:00</div>
                  <div className="text-zinc-600 text-sm">Sat &amp; Sun — Closed</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-brand-red mt-0.5 shrink-0"><MapPinIcon /></span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-zinc-600 mb-1">Address</div>
                  <div className="text-zinc-300 text-sm">123 Rue Principale</div>
                  <div className="text-zinc-300 text-sm">Montréal, QC H0H 0H0</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-brand-red mt-0.5 shrink-0"><PhoneIcon /></span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-zinc-600 mb-1">Phone</div>
                  <a
                    href="tel:+15140000000"
                    className="text-zinc-300 text-sm hover:text-white transition-colors"
                  >
                    +1 (514) 000-0000
                  </a>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="px-8 py-6">
              <div className="w-6 h-0.5 bg-brand-red mb-4" />
              <p className="text-zinc-500 text-xs leading-relaxed italic">
                &ldquo;We&apos;ve been in this neighborhood for over 15 years.
                Honest work and fair prices — that&apos;s the only way we know how to do it.&rdquo;
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
