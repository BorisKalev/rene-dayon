import { useState } from 'react'
import SectionLabel from './ui/SectionLabel'
import Section from './ui/Section'

const FAQS = [
  {
    question: 'What are your opening hours?',
    answer:
      "We're open Monday to Friday, 8:00 to 17:00. We're closed on Saturdays and Sundays. If you need to leave a message outside of hours, we'll get back to you first thing the next morning.",
  },
  {
    question: 'Do I need to book in advance?',
    answer:
      "Booking ahead is the best way to guarantee your time slot. Walk-ins are welcome too — we do our best to fit you in depending on the day's schedule.",
  },
  {
    question: 'Do you give a quote before starting the work?',
    answer:
      'Always. We inspect the vehicle, write up exactly what needs to be done, and give you the full cost before anything is touched. Nothing starts without your approval.',
  },
  {
    question: 'How long does a standard repair take?',
    answer:
      'Routine jobs like oil changes or brake pads are done within a few hours. Bigger repairs — diagnostics, transmission, electrical — may take a full day. We give you a realistic time estimate upfront and keep you posted.',
  },
  {
    question: 'Do you guarantee your repairs?',
    answer:
      'Yes. All work performed at Rene-Dayon is covered by a warranty on both parts and labour. If something isn\'t right after we\'ve worked on it, bring it back and we\'ll sort it out at no extra charge.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept cash, debit, and all major credit cards. Payment is collected when you come to pick up the vehicle.',
  },
]

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

  const toggle = (index) =>
    setOpenIndex((prev) => (prev === index ? null : index))

  return (
    <Section id="faq" muted>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

        {/* Left — heading */}
        <div className="lg:col-span-2">
          <SectionLabel>FAQ</SectionLabel>
          <h2
            className="font-display font-bold text-white tracking-wide leading-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            COMMON
            <br />
            QUESTIONS
          </h2>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Don&apos;t see your question?{' '}
            <a
              href="#contact"
              className="text-zinc-300 hover:text-white underline underline-offset-2 decoration-zinc-600 hover:decoration-zinc-400 transition-colors"
            >
              Send us a message
            </a>{' '}
            or give us a call.
          </p>
        </div>

        {/* Right — accordion */}
        <div className="lg:col-span-3 border-t border-zinc-800">
          {FAQS.map((faq, index) => (
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
