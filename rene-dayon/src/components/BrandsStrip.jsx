const BRANDS = [
  'Toyota',
  'Honda',
  'Ford',
  'Chevrolet',
  'Nissan',
  'BMW',
  'Mercedes-Benz',
  'Hyundai',
  'Kia',
  'Volkswagen',
  'Subaru',
  'Jeep',
]

export default function BrandsStrip() {
  return (
    <div className="border-b border-zinc-800 bg-zinc-950 py-4 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-6 overflow-x-auto scrollbar-none">

          {/* Label */}
          <div className="flex items-center gap-4 shrink-0">
            <span className="text-zinc-600 text-xs font-semibold uppercase tracking-[0.2em] whitespace-nowrap">
              All Makes
            </span>
            <span className="w-px h-3.5 bg-zinc-700 block" />
          </div>

          {/* Brand names */}
          <div className="flex items-center gap-7 shrink-0">
            {BRANDS.map((brand) => (
              <span
                key={brand}
                className="font-display font-semibold text-zinc-600 uppercase tracking-widest text-sm whitespace-nowrap hover:text-zinc-400 transition-colors duration-200 cursor-default select-none"
              >
                {brand}
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
