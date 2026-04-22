import React from "react";

export default function ProjectOverview({ project }) {
  const { challenge, solution } = project;

  return (
    <section
      id="info"
      className="py-24  transition-colors overflow-hidden max-w-5xl mx-auto"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Header Title */}
          <div className="lg:col-span-12 mb-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-indigo-600"></span>
              <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-indigo-600 dark:text-indigo-400">
                Project Overview
              </h3>
            </div>
          </div>

          {/* Left: Challenge */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight">
              The Challenge.
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-white/50 leading-relaxed font-medium">
              {challenge}
            </p>
          </div>

          {/* Vertical Divider for Desktop */}
          <div className="hidden lg:block lg:col-span-1 h-full w-px bg-slate-100 dark:bg-white/5 mx-auto" />

          {/* Right: Solution */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight">
              The Solution.
            </h2>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-slate-500 dark:text-white/40">
                {solution}
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                {["User-Centric", "Scalable Architecture", "Data-Driven"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-widest"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
