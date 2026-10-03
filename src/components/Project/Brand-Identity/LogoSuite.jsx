import Image from "next/image";

export default function LogoSuite({ project }) {
  const { logoPrimary, logoSecondary, logoMono } = project;
  const variations = [
    {
      title: "Primary Mark",
      desc: "The standard version used for most applications.",
      src: logoPrimary,
      bg: "bg-white dark:bg-[#121214]",
    },
    {
      title: "Secondary Lockup",
      desc: "Optimized for horizontal layouts and navbars.",
      src: logoSecondary,
      bg: "bg-amber-50 dark:bg-amber-900/10",
    },
    {
      title: "Monochrome",
      desc: "Simplified version for high-contrast or print.",
      src: logoMono,
      bg: "bg-slate-900 dark:bg-black",
      isDark: true,
    },
  ];

  return (
    <section
      id="identitysuite"
      className="py-24 bg-white dark:bg-[#0C0C0F] transition-colors max-w-5xl mx-auto fade-in"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold  text-amber-600 dark:text-amber-500 mb-4">
            Visual Versatility
          </h3>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            The Logo Suite.
          </h2>
        </div>

        {/* Variations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {variations.map((item, idx) => (
            <div
              key={idx}
              className={`group flex flex-col h-full rounded-[2.5rem] border border-slate-100 dark:border-white/5 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/5`}
            >
              {/* Logo Display Area */}
              <div
                className={`relative aspect-square flex items-center justify-center p-8 ${item.bg} overflow-hidden`}
              >
                {/* Subtle Grain for the Monochrome/Dark panel */}
                {item.isDark && (
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                )}

                <Image
                  src={item.src}
                  alt={item.title}
                  width={300}
                  height={300}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Text Area */}
              <div className="p-8 bg-slate-50 dark:bg-white/[0.02] flex-grow border-t border-slate-100 dark:border-white/5">
                <h4
                  className={`text-lg font-bold mb-2 ${item.isDark && idx === 2 ? "text-slate-900 dark:text-white" : "text-slate-900 dark:text-white"}`}
                >
                  {item.title}
                </h4>
                <p className="text-sm text-slate-500 dark:text-white/40 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
