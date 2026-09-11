import React from "react";
import {
  Code2,
  Layers,
  Cpu,
  Sparkles,
  Palette,
  Workflow,
  Zap,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

// Icon mapper helper
const getCategoryIcon = (category = "") => {
  const cat = category.toLowerCase();
  if (cat.includes("frame") || cat.includes("core")) return Code2;
  if (cat.includes("style") || cat.includes("css")) return Palette;
  if (cat.includes("motion") || cat.includes("anim")) return Sparkles;
  if (cat.includes("design") || cat.includes("figma")) return Workflow;
  if (cat.includes("primitive") || cat.includes("ui")) return Layers;
  return Cpu;
};

export default function ProjectSpecsSection({ project }) {
  const stack = project?.techStack || [];
  const specs = project?.specs || [];

  if (!stack.length && !specs.length) return null;

  return (
    <section
      className="relative w-full max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-neutral-100"
      id="project-specs"
    >
      {/* Ambient background bloom */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-neutral-800/80 pb-6 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-cyan-500"></span>
              <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-cyan-600 dark:text-cyan-400">
                Under The Hood
              </h3>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-3">
              Tech Stack & Build Specs
            </h2>
            <p className="text-sm text-neutral-400 max-w-md">
              Core libraries, architectural systems, and performance standards
              implemented for {project?.title}.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8 items-stretch">
          {/* ================= LEFT SIDE (2 COLUMNS): TECH STACK ================= */}
          <div className="relative group/main lg:col-span-2 rounded-2xl border border-neutral-800/90 bg-gradient-to-b from-neutral-900/90 via-neutral-900/50 to-neutral-950/80 backdrop-blur-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-500 shadow-2xl overflow-hidden">
            {/* Ambient Corner Flare */}
            <div className="absolute -top-24 -right-24 w-56 h-56 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover/main:bg-cyan-500/20 transition-all duration-700" />

            <div className="relative z-10">
              {/* Card Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-8 border-b border-white/[0.06] pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500" />
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                      Technologies & Libraries
                    </span>
                    <p className="text-[11px] text-neutral-400 mt-0.5">
                      Production ecosystem
                    </p>
                  </div>
                </div>

                {/* Counter Pill */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono font-semibold tracking-wide shadow-inner">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  {stack.length} Active Modules
                </span>
              </div>

              {/* Stack Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {stack.map((item, idx) => {
                  const isObject = typeof item === "object";
                  const name = isObject ? item.name : item;
                  const category = isObject ? item.category : "Technology";
                  const desc = isObject ? item.desc : null;
                  const Icon = getCategoryIcon(category);

                  return (
                    <div
                      key={idx}
                      className="group/item relative flex items-start gap-3.5 p-4 rounded-xl border border-neutral-800/80 bg-neutral-950/60 hover:bg-neutral-900/90 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-950/30 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <div className="absolute left-0 top-3 bottom-3 w-1 bg-cyan-400 rounded-r opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />

                      <div className="p-2.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-slate-300 group-hover/item:text-cyan-300 group-hover/item:border-cyan-500/30 group-hover/item:bg-cyan-950/30 transition-all duration-300 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>

                      <div className="flex flex-col min-w-0 pr-1">
                        <span className="text-sm font-bold text-white group-hover/item:text-cyan-100 transition-colors truncate">
                          {name}
                        </span>
                        {desc ? (
                          <span className="text-xs text-neutral-400 group-hover/item:text-neutral-300 transition-colors truncate mt-0.5">
                            {desc}
                          </span>
                        ) : (
                          <span className="text-[11px] text-cyan-400/80 uppercase font-mono tracking-wider truncate mt-0.5">
                            {category}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer Guarantee Bar */}
            <div className="relative z-10 mt-8 pt-5 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400" />
                <span className="font-medium">
                  Pixel-perfect implementation
                </span>
                <span className="text-neutral-600">•</span>
                <span className="text-neutral-400">Zero UI bloat</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 font-mono text-[10px] tracking-wider uppercase">
                Production Ready
              </span>
            </div>
          </div>

          {/* ================= RIGHT SIDE (1 COLUMN): BUILD SPECS & STATS ================= */}
          <div className="flex flex-col gap-4">
            {specs.length > 0 ? (
              specs.map((spec, idx) => (
                <div
                  key={idx}
                  className="group relative flex-1 rounded-2xl border border-neutral-800/90 bg-gradient-to-b from-neutral-900/80 to-neutral-950/90 backdrop-blur-2xl p-6 hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl"
                >
                  {/* Subtle top edge glow on hover */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-start justify-between">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400/90">
                      {spec.label}
                    </span>
                    <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-all duration-300">
                      <Zap className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="text-3xl font-black tracking-tight text-white group-hover:text-cyan-100 group-hover:translate-x-1 transition-all duration-200">
                      {spec.value}
                    </div>
                    <div className="text-xs text-neutral-400 mt-1">
                      {spec.detail}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              /* Fallback cards if project.specs is empty */
              <div className="h-full rounded-2xl border border-neutral-800/90 bg-neutral-900/60 backdrop-blur-2xl p-6 flex flex-col justify-center gap-4">
                {[
                  "Semantic HTML & Accessible Standards",
                  "Fluid Responsive Breakpoints",
                  "Optimized Web Vitals & Clean Code",
                ].map((text, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3.5 rounded-xl border border-neutral-800/80 bg-neutral-950/40"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-xs font-semibold text-neutral-300">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
