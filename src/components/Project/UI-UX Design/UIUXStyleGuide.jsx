import React from "react";

export default function UIUXStyleGuide({ project }) {
  const { colors, typography, colorselement } = project;

  return (
    <section id="system" className="py-24 transition-colors max-w-5xl mx-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-indigo-600 dark:text-indigo-400 mb-4">
            Foundation
          </h3>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            System Language.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Typography Box */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-white/2 border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-8 md:p-12">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-10">
              Typography
            </h4>
            <div className="space-y-10">
              <div>
                <p className="text-xs text-slate-400 mb-2">
                  Primary / {typography.fontName}
                </p>
                <p className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Abc
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-600 dark:text-white/60">
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase">Heading 1</p>
                  <p className="text-2xl font-bold">Bold 32pt</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase">Body Copy</p>
                  <p className="text-base">Regular 16pt / Line-height 1.6</p>
                </div>
              </div>
            </div>
          </div>

          {/* Colors & Elements Box */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Color Palette */}
            <div className="bg-slate-50 dark:bg-white/2 border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-8">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6">
                Color Tokens
              </h4>
              <div className="flex gap-4">
                {colors.map((color, i) => (
                  <div key={i} className="flex-1">
                    <div
                      className="h-16 w-full rounded-2xl mb-2"
                      style={{ backgroundColor: color.hex }}
                    />
                    <p className="text-[10px] font-mono text-slate-500 dark:text-white/40 uppercase">
                      {color.hex}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* UI Elements Preview */}
            <div className="bg-slate-50 dark:bg-white/2 border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-8 grow">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-8">
                UI Elements
              </h4>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <button
                    className="px-6 py-2.5  text-white rounded-xl text-xs font-bold shadow-lg "
                    style={{
                      backgroundColor: project.colorselement,
                      boxShadow: `0 10px 20px ${project.colorselement}4D`, // ~30% opacity
                    }}
                  >
                    Primary
                  </button>
                  <button
                    className="px-6 py-2.5 border rounded-xl text-xs font-bold"
                    style={{
                      borderColor: project.colorselement,
                      color: project.colorselement,
                    }}
                  >
                    Ghost
                  </button>
                </div>
                <div className="relative w-full h-10 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 flex items-center text-xs text-slate-400 italic">
                  Enter email...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
