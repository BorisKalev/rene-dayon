import { useState } from 'react'
import { useLang } from '../i18n'
import SectionLabel from './ui/SectionLabel'
import Section from './ui/Section'

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-zinc-800 last:border-b-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span
          className={`text-sm font-semibold leading-snug transition-colors duration-200 pr-5 ${
            isOpen ? 'text-white' : 'text-zinc-300 group-hover:text-white'
          }`}
        >
          {question}
        </span>

        <span
          className={`shrink-0 w-6 h-6 flex items-center justify-center border transition-all duration-200 ${
            isOpen
              ? 'border-brand-red bg-brand-red text-white'
              : 'border-zinc-700 text-zinc-500 group-hover:border-zinc-500 group-hover:text-zinc-300'
          }`}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          >
            {isOpen ? (
              <path d="M1 5h8" />
            ) : (
              <>
                <path d="M5 1v8" />
                <path d="M1 5h8" />
              </>
            )}
          </svg>
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-zinc-400 text-sm leading-relaxed pr-8 sm:pr-10">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const { t } = useLang()
  const f = t.faq

  const toggle = (index) =>
    setOpenIndex((prev) => (prev === index ? null : index))

  return (
    <Section id="faq" muted>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

        <div className="lg:col-span-2">
          <SectionLabel>{f.label}</SectionLabel>
          <h2
            className="font-display font-bold text-white tracking-wide leading-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            {f.title.split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h2>
          <p className="text-zinc-500 text-sm leading-relaxed">
            {f.sub}{' '}
            <a
              href="#contact"
              className="text-zinc-300 hover:text-white underline underline-offset-2 decoration-zinc-600 hover:decoration-zinc-400 transition-colors"
            >
              {f.subLink}
            </a>{' '}
            {f.subEnd}
          </p>
        </div>

        <div className="lg:col-span-3 border-t border-zinc-800">
          {f.items.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
            />
          ))}
        </div>

      </div>
    </Section>
  )
}
