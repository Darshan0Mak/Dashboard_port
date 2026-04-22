import React from "react";
import Image from "next/image";

export default function UserFlow({ project }) {
  const { flowImage } = project;

  return (
    <section id="process" className="py-24 transition-colors max-w-5xl mx-auto">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-slate-400 mb-4">
          Information Architecture
        </h3>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
          Mapping the Journey.
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="relative group rounded-[3rem] overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0C0C0F] p-4 md:p-8 shadow-2xl">
          {/* Zoom Decoration */}
          <div className="absolute top-6 right-6 z-10 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            High-Fi Wireframe
          </div>

          {/* Actual Flow Image */}
          <div className="relative aspect-video md:aspect-21/9 w-full">
            <Image
              src={flowImage}
              alt="User Flow Diagram"
              fill
              className="object-contain transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Caption */}
        <p className="mt-8 text-center text-slate-400 dark:text-white/20 text-sm max-w-2xl mx-auto">
          User flow visualization showing the primary path from onboarding to
          core task completion, ensuring minimal friction and logical hierarchy.
        </p>
      </div>
    </section>
  );
}
