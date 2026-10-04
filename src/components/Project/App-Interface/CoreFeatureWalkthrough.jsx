import React from "react";
import Image from "next/image";

export default function CoreFeatureWalkthrough({ project }) {
  const { features, workflowSection } = project;

  // જો કોઈ પ્રોજેક્ટમાં features ન હોય તો સેક્શન રેન્ડર નહીં થાય
  if (!features || features.length === 0) return null;

  // Generic Dynamic Labels (JSON માંથી આવશે, નહીંતર સ્ટાન્ડર્ડ ડિફોલ્ટ લેશે)
  const tag = workflowSection?.tag ?? "Core Workflow";
  const title = workflowSection?.title ?? "Designed for Clarity & Impact.";

  return (
    <section
      id="workflow"
      className="py-24 transition-colors max-w-5xl mx-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-20">
          <h3 className="text-xs uppercase tracking-[0.35em] font-bold text-indigo-600 dark:text-indigo-400 mb-3">
            {tag}
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            {title}
          </h2>
        </div>

        {/* Feature Cards Loop */}
        <div className="space-y-28 md:space-y-36">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
                idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Phone Frame Mockup Container */}
              <div className="relative w-full max-w-[300px] sm:max-w-[320px] aspect-[9/19.5] group shrink-0">
                {/* Indigo ambient back glow on hover */}
                <div className="absolute inset-0 bg-indigo-500/10 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glossy Device Frame */}
                <div className="relative w-full h-full bg-slate-950 rounded-[2.8rem] border-[6px] border-slate-800/80 shadow-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover"
                  />
                  {/* Subtle dynamic gloss overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Feature Content Description */}
              <div className="flex-1 space-y-5 text-left">
                {/* Step indicator pill */}
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20">
                  Step 0{idx + 1}
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {feature.title}
                </h3>

                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* UX Highlights / Stats (if present in JSON) */}
                {feature.stats && feature.stats.length > 0 && (
                  <div className="pt-2 grid grid-cols-2 gap-3">
                    {feature.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/5"
                      >
                        <p className="text-indigo-600 dark:text-indigo-400 font-bold text-base">
                          {stat.value}
                        </p>
                        <p className="text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold mt-0.5">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
