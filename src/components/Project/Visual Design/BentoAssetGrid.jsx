import Image from "next/image";

export default function BentoAssetGrid({ project }) {
  const { assets } = project;
  return (
    <section
      id="showcase"
      className="py-24 bg-white dark:bg-[#0C0C0F] transition-colors max-w-5xl mx-auto fade-in"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 space-y-4">
          <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-slate-400">
            Deliverables
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Project Ecosystem
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {/* 01. Large Featured Asset (Spans 8 cols) */}
          <div className="lg:col-span-8 lg:row-span-2 relative group overflow-hidden rounded-4xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5">
            <Image
              src={assets[0]}
              alt="Major Deliverable"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* 02. Tall Vertical Asset (Spans 4 cols) */}
          <div className="lg:col-span-4 lg:row-span-2 relative group overflow-hidden rounded-4xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5">
            <Image
              src={assets[1]}
              alt="Social Media Concept"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* 03. Square/Wide Asset (Spant 4 cols) */}
          <div className="lg:col-span-4 lg:row-span-1 relative group overflow-hidden rounded-4xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5">
            <Image
              src={assets[2]}
              alt="Digital Ad"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* 04. Wide Horizontal Asset (Spans 8 cols) */}
          <div className="lg:col-span-8 lg:row-span-1 relative group overflow-hidden rounded-4xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5">
            <Image
              src={assets[3]}
              alt="Brand Poster"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
