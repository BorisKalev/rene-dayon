/**
 * Shared section wrapper — enforces consistent vertical rhythm,
 * horizontal centering, and alternating background across every
 * content section on the page.
 *
 * Props:
 *   id        — nav anchor (optional)
 *   muted     — enables the subtle alternate-row bg (zinc-900/30)
 *   className — escape hatch for one-off overrides on the <section> tag
 */
export default function Section({ id, muted = false, className = '', children }) {
  const cls = [
    'py-20 lg:py-28 border-t border-zinc-800',
    muted && 'bg-zinc-900/30',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section id={id} className={cls}>
      <div className="w-full max-w-6xl mx-auto px-6">
        {children}
      </div>
    </section>
  )
}
