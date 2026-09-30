import React from "react";
import Image from "next/image";

export default function ComponentLibrary({ project }) {
  const { systemSection, primaryColor } = project;

  // Design system sheet image path (falls back to elementImages if available)
  const systemImg =
    project.designSystemImage ||
    (project.elementImages && project.elementImages[1]) ||
    null;

  const tag = systemSection?.tag ?? "Scalability";
  const title = systemSection?.title ?? "Design System & Components.";
  const description =
    systemSection?.description ??
    "Engineered with atomic principles: strict 4px/8px layout grid, accessible WCAG contrast tokens, and reusable interactive components.";

  return (
    <section id="system" className="py-24 transition-colors max-w-5xl mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14">
          <h3 className="text-xs uppercase tracking-[0.35em] font-bold text-indigo-600 dark:text-indigo-400 mb-3">
            {tag}
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>

        {/* High-Resolution Design System Preview */}
        {systemImg ? (
          <div className="relative w-full rounded-3xl border border-slate-200 dark:border-white/10 overflow-hidden shadow-xl bg-white dark:bg-[#0C0C0F] p-2 sm:p-4 group">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-950">
              <Image
                src={systemImg}
                alt="Design System & Component Architecture"
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.01]"
              />
            </div>

            {/* Meta indicator */}
            <div className="mt-4 px-2 flex flex-wrap items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: primaryColor || "#6366F1" }}
                />
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  Atomic Component Library
                </span>
              </div>
              <span className="tracking-wider uppercase text-[10px] font-bold">
                Typography • Tokens • Master UI
              </span>
            </div>
          </div>
        ) : (
          /* Fallback UI if an image is not provided for future projects */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
              <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-4">
                Core Tokens
              </h4>
              <p className="text-sm text-slate-500">
                Design tokens and typography scales defined in Figma.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
