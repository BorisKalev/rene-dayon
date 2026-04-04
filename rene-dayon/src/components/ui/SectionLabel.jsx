export default function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="h-px w-8 bg-brand-red flex-shrink-0" />
      <span className="text-brand-red text-xs font-semibold tracking-[0.18em] uppercase font-sans">
        {children}
      </span>
    </div>
  )
}
