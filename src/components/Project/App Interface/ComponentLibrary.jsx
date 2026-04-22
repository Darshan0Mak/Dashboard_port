import React from "react";

export default function ComponentLibrary({ project }) {
  const { components, primaryColor } = project;
  return (
    <section id="system" className="py-24 transition-colors max-w-5xl mx-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-emerald-600 dark:text-emerald-500 mb-4">
            Scalability
          </h3>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            Component <br /> Architecture.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Atoms: Buttons & Inputs */}
          <div className="lg:col-span-2 bg-slate-50 dark:bg-white/2 rounded-[3rem] p-10 border border-slate-200 dark:border-white/10">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-10">
              Atoms & Inputs
            </h4>
            <div className="flex flex-wrap gap-12 items-center">
              <div className="space-y-6">
                <button
                  className="px-8 py-3 text-white rounded-2xl text-sm font-bold shadow-lg"
                  style={{
                    backgroundColor: project.primaryColor,
                    boxShadow: `0 10px 20px ${project.primaryColor}33`, // add opacity
                  }}
                >
                  Primary Button
                </button>
                <div className="flex gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${project.primaryColor}1A`, // light bg (10% opacity)
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={project.primaryColor}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m5 12 5 5L20 7" />
                    </svg>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-white/10 flex items-center justify-center text-slate-400">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex-1 min-w-62.5 space-y-4">
                <div className="h-12 w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-5 flex items-center text-sm text-slate-400">
                  Search products...
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="h-1.5 flex-1 rounded-full"
                      style={{
                        backgroundColor:
                          i <= project.progress
                            ? project.primaryColor
                            : "rgba(148, 163, 184, 0.3)", // slate-400 with opacity
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Molecules: Navigation & Cards */}
          <div
            className="rounded-[3rem] p-10 text-white flex flex-col justify-between overflow-hidden relative"
            style={{
              backgroundColor: project.primaryColor,
            }}
          >
            {/* Glow */}
            <div
              className="absolute top-0 right-0 w-32 h-32 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"
              style={{
                backgroundColor: `${project.primaryColor}33`, // soft glow
              }}
            />

            {/* Label */}
            <h4 className="text-[10px] font-bold uppercase tracking-widest mb-10 text-white/80">
              Molecules
            </h4>

            <div className="space-y-6 relative z-10">
              {/* Card 1 */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center justify-between">
                <div className="w-8 h-8 rounded-lg bg-white/20" />
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <div className="w-2 h-2 rounded-full bg-white/30" />
                </div>
              </div>

              {/* Card 2 */}
              <div className="h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                <div className="w-1/2 h-3 bg-white/40 rounded-full mb-3" />
                <div className="w-3/4 h-2 bg-white/20 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
