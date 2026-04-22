import React from "react";

export default function ColorTypeStudy({ project }) {
  const { fonts, colors } = project;

  return (
    <section className="py-24 bg-white dark:bg-[#0C0C0F] transition-colors overflow-hidden max-w-5xl mx-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side: Typography */}
          <div className="space-y-12">
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-slate-400 mb-6">
                Typography
              </h3>
              <div className="space-y-2">
                <p className="text-7xl md:text-9xl font-black text-slate-900 dark:text-white tracking-tighter">
                  Aa
                </p>
                <h4 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white/80">
                  {fonts.name}
                </h4>
              </div>
            </div>

            <div className="space-y-4 border-t border-slate-100 dark:border-white/5 pt-8">
              <p className="text-lg md:text-xl text-slate-500 dark:text-white/40 leading-relaxed italic">
                "The quick brown fox jumps over the lazy dog."
              </p>
              <div className="flex gap-6 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400">
                <span>Bold</span>
                <span>Medium</span>
                <span>Regular</span>
              </div>
            </div>
          </div>

          {/* Right Side: Color Cards */}
          <div className="relative h-[450px] flex items-center justify-center">
            <h3 className="absolute top-0 left-0 text-[11px] uppercase tracking-[0.4em] font-bold text-slate-400">
              Color Palette
            </h3>

            {/* The 'group' is now on this inner wrapper. 
               We use 'has-[:hover]' logic (modern CSS) to tell the cards:
               "If any card in this group is hovered, dim the others."
            */}
            <div className="relative w-full max-w-sm h-full flex items-center justify-center group">
              {colors.map((color, idx) => (
                <div
                  key={idx}
                  className={`
                    absolute w-48 h-64 rounded-[2.5rem] border border-white/20 shadow-2xl 
                    transition-all duration-500 ease-out cursor-pointer
                    
                    /* 1. Lift and bring to front on hover */
                    hover:!z-[100] hover:-translate-y-16 hover:rotate-0 hover:scale-110
                    
                    /* 2. Dim siblings ONLY when a card is actually being touched */
                    group-has-[div:hover]:[&:not(:hover)]:opacity-30 
                    group-has-[div:hover]:[&:not(:hover)]:blur-[4px]
                    group-has-[div:hover]:[&:not(:hover)]:scale-95
                  `}
                  style={{
                    backgroundColor: color.hex,
                    transform: `rotate(${idx * 10 - 10}deg) translateX(${idx * 40 - 40}px)`,
                    zIndex: colors.length - idx,
                  }}
                >
                  <div className="absolute bottom-6 left-6 text-white pointer-events-none">
                    <p className="text-[10px] font-bold uppercase tracking-widest">
                      {color.name}
                    </p>
                    <p className="text-sm font-mono font-bold tracking-tight">
                      {color.hex}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
