import React from "react";
import Image from "next/image";

export default function ProductArchitecture({ project }) {
  const { architectureSection } = project;

  // architectureImage અથવા elementImages[0] માંથી પાથ લેશે
  const archImg =
    project.architectureImage ||
    (project.elementImages && project.elementImages[0]) ||
    null;

  // જો ઈમેજ ન હોય તો સેક્શન રેન્ડર નહીં થાય (100% Conflict-free)
  if (!archImg) return null;

  const tag = architectureSection?.tag ?? "Product Strategy";
  const title = architectureSection?.title ?? "Architecture & User Journey.";
  const description =
    architectureSection?.description ??
    "Mapping the complete cleanup lifecycle, cognitive load mitigation, and heuristic error-prevention patterns before pixel design.";

  return (
    <section
      id="architecture"
      className="py-24 transition-colors max-w-5xl mx-auto"
    >
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

        {/* High-Resolution Diagram Preview */}
        <div className="relative w-full rounded-3xl border border-slate-200 dark:border-white/10 overflow-hidden shadow-xl bg-white dark:bg-[#0C0C0F] p-2 sm:p-4 group">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-950">
            <Image
              src={archImg}
              alt="Product Architecture & User Journey"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </div>

          {/* Meta footer badge */}
          <div className="mt-4 px-2 flex flex-wrap items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                Core Journey & Edge States
              </span>
            </div>
            <span className="tracking-wider uppercase text-[10px] font-bold">
              User Flows • Heuristics • UX Logic
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
