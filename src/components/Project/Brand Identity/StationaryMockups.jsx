import Image from "next/image";

export default function StationaryMockups({ project }) {
  const { mockups } = project;
  return (
    <section
      id="mockups"
      className="py-10 transition-colors max-w-5xl mx-auto fade-in"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-amber-600 dark:text-amber-500 mb-4">
              Physical Touchpoints
            </h3>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              Brand in the <br /> Real World.
            </h2>
          </div>
          <p className="text-slate-500 dark:text-white/40 max-w-xs text-sm leading-relaxed border-r md:border-r-0 md:border-l border-slate-200 dark:border-white/10 pr-6 md:pr-0 md:pl-6">
            Translating digital precision into tangible experiences through
            premium materials and environmental applications.
          </p>
        </div>

        {/* Mockup Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 01. Large Vertical (Signage/Poster) */}
          <div className="lg:row-span-2 relative group rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5">
            <Image
              src={mockups[0].image}
              alt={mockups[0].label}
              width={800}
              height={1200}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
              <p className="text-white text-sm font-bold uppercase tracking-widest">
                {mockups[0].label}
              </p>
            </div>
          </div>

          {/* 02. Wide Horizontal (Business Cards) */}
          <div className="lg:col-span-2 relative aspect-[16/9] group rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5">
            <Image
              src={mockups[1].image}
              alt={mockups[1].label}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute bottom-8 right-8 backdrop-blur-md bg-white/10 border border-white/20 px-6 py-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-all">
              <p className="text-white text-[10px] font-bold uppercase tracking-widest">
                {mockups[1].label}
              </p>
            </div>
          </div>

          {/* 03. Standard Square (Stationary/Letterhead) */}
          <div className="relative aspect-square group rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5">
            <Image
              src={mockups[2].image}
              alt={mockups[2].label}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>

          {/* 04. Standard Square (Packaging/Small) */}
          <div className="relative aspect-square group rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5">
            <Image
              src={mockups[3].image}
              alt={mockups[3].label}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
