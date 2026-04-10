import { useLang } from '../i18n'
import SectionLabel from './ui/SectionLabel'
import Section from './ui/Section'

import imgOil      from '../assets/pictures/oilchange.jpg'
import imgBrakes   from '../assets/pictures/brakes.jpg'
import imgEngine   from '../assets/pictures/engine.jpg'
import imgTires    from '../assets/pictures/tireChange.jpg'
import imgTrans    from '../assets/pictures/transmission.jpg'
import imgElec     from '../assets/pictures/electrical.jpg'

const SERVICE_IMAGES = [imgOil, imgBrakes, imgEngine, imgTires, imgTrans, imgElec]

const OilIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 3h8l1 7H7L8 3z" />
    <path d="M7 10c0 5 2 8 5 9 3-1 5-4 5-9" />
    <path d="M12 19v2" /><circle cx="12" cy="22" r="1" />
  </svg>
)
const BrakeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" />
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
  </svg>
)
const GearIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
)
const TireIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5.64 5.64l2.12 2.12M16.24 16.24l2.12 2.12M5.64 18.36l2.12-2.12M16.24 7.76l2.12-2.12" />
  </svg>
)
const TransIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="9" width="8" height="6" rx="1" /><rect x="14" y="9" width="8" height="6" rx="1" />
    <path d="M10 12h4" /><circle cx="6" cy="12" r="1.5" /><circle cx="18" cy="12" r="1.5" />
    <path d="M6 5v4M6 15v4M18 5v4M18 15v4" />
  </svg>
)
const ElecIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
)

const ICONS = [OilIcon, BrakeIcon, GearIcon, TireIcon, TransIcon, ElecIcon]

export default function Services() {
  const { t } = useLang()
  const s = t.services

  return (
    <Section id="services">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">
        <div>
          <SectionLabel>{s.label}</SectionLabel>
          <h2
            className="font-display font-bold text-white tracking-wide leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            {s.title}
          </h2>
        </div>
        <p className="text-zinc-500 text-sm leading-relaxed md:text-right md:max-w-xs">
          {s.sub}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {s.items.map(({ title, description }, i) => {
          const Icon = ICONS[i]
          const img  = SERVICE_IMAGES[i]
          return (
            <div
              key={title}
              className="group bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden hover:border-brand-red hover:shadow-[0_10px_30px_rgba(255,0,0,0.12)] transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Image header */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                {/* Fade image into card body */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to bottom, rgba(9,9,11,0.15) 0%, rgba(9,9,11,0.55) 60%, #09090b 100%)',
                  }}
                />
                {/* Number badge */}
                <span className="absolute top-3 right-3 font-display font-bold text-white/20 text-xs tracking-widest select-none group-hover:text-white/30 transition-colors duration-200">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Card body */}
              <div className="px-6 pb-6 pt-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-brand-red">
                    <Icon />
                  </span>
                  <h3 className="text-white font-semibold text-sm leading-snug">{title}</h3>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
