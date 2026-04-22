import React from "react";

export default function MotionReel({ project }) {
  const { loops } = project;
  return (
    <section
      id="motion"
      className="py-24 bg-white dark:bg-[#0C0C0F] transition-colors max-w-5xl mx-auto"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
              <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-slate-400">
                In Motion
              </h3>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              Dynamic <br /> Narrative.
            </h2>
          </div>
          <p className="text-slate-500 dark:text-white/40 max-w-sm text-sm leading-relaxed pb-2">
            Movement brings the static brand to life. These loops explore the
            physics, rhythm, and temporal identity of the project.
          </p>
        </div>

        {/* Motion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main Large Feature Reel (Spans full width on mobile, 1 col on md) */}
          <div className="md:col-span-2 relative aspect-video rounded-[3rem] overflow-hidden bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 group">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            >
              <source src={loops[0].src} type="video/mp4" />
              {/* Fallback for GIF if video isn't provided */}
              <img
                src={loops[0].src}
                alt={loops[0].label}
                className="w-full h-full object-cover"
              />
            </video>
            <div className="absolute top-8 left-8">
              <span className="backdrop-blur-xl bg-black/20 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                {loops[0].label || "Main Sequence"}
              </span>
            </div>
          </div>

          {/* Smaller Detail Loops */}
          {loops.slice(1, 3).map((loop, idx) => (
            <div
              key={idx}
              className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 group"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={loop.src} type="video/mp4" />
                <img
                  src={loop.src}
                  alt={loop.label}
                  className="w-full h-full object-cover"
                />
              </video>
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">
                  {loop.label}
                </p>
                <p className="text-white/60 text-[10px] leading-tight">
                  {loop.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
