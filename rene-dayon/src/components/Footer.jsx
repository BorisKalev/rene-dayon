import { useLang } from '../i18n'

export default function Footer() {
  const { t } = useLang()
  const f = t.footer

  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="w-full max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Logo + hours */}
          <div>
            <a
              href="#"
              className="font-display font-bold text-xl tracking-widest text-white leading-none"
            >
              RENE<span className="text-brand-red">-</span>DAYON
            </a>
            <p className="text-zinc-600 text-xs mt-1.5">
              {f.hours} &nbsp;·&nbsp;{' '}
              <a
                href="tel:+15147259336"
                className="hover:text-zinc-400 transition-colors"
              >
                +1 (514) 725-9336
              </a>
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {f.links.map(({ label, href }) => (
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
