import Image from "next/image";

export default function MacroDetails({ project }) {
  const { details } = project;
  return (
    <section
      id="details"
      className="py-24  transition-colors overflow-hidden max-w-5xl mx-auto fade-in"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with vertical alignment */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-pink-600 dark:text-pink-500 mb-4">
              The Fine Print
            </h3>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              Macro Details & <br /> Textures.
            </h2>
          </div>
          <p className="text-slate-500 dark:text-white/40 max-w-xs text-sm leading-relaxed">
            A closer look at the grain, typography, and organic imperfections
            that bring the visual narrative to life.
          </p>
        </div>

        {/* Detail Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Focused Detail (Larger) */}
          <div className="relative aspect-4/5 rounded-[3rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl group">
            <Image
              src={details[0].image}
              alt={details[0].label}
              fill
              className="object-cover transition-transform duration-[2s] group-hover:scale-110"
            />
            {/* Glass Label */}
            <div className="absolute bottom-8 left-8 backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 px-6 py-3 rounded-2xl">
              <p className="text-white text-xs font-bold uppercase tracking-widest">
                {details[0].label}
              </p>
            </div>
          </div>

          {/* Right: Stacked Details */}
          <div className="space-y-12">
            {details.slice(1, 3).map((item, idx) => (
              <div key={idx} className="group flex flex-col gap-6">
                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  />
                </div>
                <div className="px-4">
                  <h4 className="text-slate-900 dark:text-white font-bold text-lg">
                    {item.label}
                  </h4>
                  <p className="text-slate-500 dark:text-white/40 text-sm mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
