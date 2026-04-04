const FOOTER_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="w-full max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

          {/* Logo + tagline */}
          <div>
            <a
              href="#"
              className="font-display font-bold text-xl tracking-widest text-white leading-none"
            >
              RENE<span className="text-brand-red">-</span>DAYON
            </a>
            <p className="text-zinc-600 text-xs mt-1.5">
              Mon – Fri &nbsp; 8:00 – 17:00 &nbsp;·&nbsp;{' '}
              <a
                href="tel:+15140000000"
                className="hover:text-zinc-400 transition-colors"
              >
                +1 (514) 000-0000
              </a>
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {FOOTER_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-zinc-600 hover:text-zinc-300 text-xs tracking-wide transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-zinc-700 text-xs shrink-0">
            © {new Date().getFullYear()} Rene-Dayon
          </p>

        </div>
      </div>
    </footer>
  )
}
