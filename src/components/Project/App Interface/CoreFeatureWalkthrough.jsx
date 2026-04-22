import React from "react";
import Image from "next/image";

export default function CoreFeatureWalkthrough({ project }) {
  const { features } = project;
  return (
    <section
      id="features"
      className="py-24 transition-colors max-w-5xl mx-auto"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-emerald-600 dark:text-emerald-500 mb-4">
            Functionality
          </h3>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            Core Feature <br /> Walkthrough.
          </h2>
        </div>

        <div className="space-y-40">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${
                idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Phone Frame Mockup */}
              <div className="relative w-full max-w-[320px] aspect-9/19.5 group">
                {/* Glossy Device Frame */}
                <div className="absolute inset-0 bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden shadow-emerald-500/10 transition-transform duration-700 group-hover:scale-[1.02]">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                  {/* Dynamic Gloss Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Description */}
              <div className="flex-1 space-y-6">
                <div className="w-12 h-1 bg-emerald-500 rounded-full" />
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-lg text-slate-500 dark:text-white/40 leading-relaxed">
                  {feature.description}
                </p>
                <div className="pt-4 grid grid-cols-2 gap-4">
                  {feature.stats?.map((stat, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5"
                    >
                      <p className="text-emerald-600 dark:text-emerald-400 font-bold text-lg">
                        {stat.value}
                      </p>
                      <p className="text-[10px] uppercase tracking-widest text-slate-400">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
