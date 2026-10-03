import React from "react";
import Image from "next/image";

export default function DesignSolution({ project }) {
  const { features } = project;
  return (
    <section
      id="solution"
      className="py-24 transition-colors max-w-5xl mx-auto"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-indigo-600 dark:text-indigo-400 mb-4">
            The Reveal
          </h3>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            High-Fidelity <br /> Solutions.
          </h2>
        </div>

        <div className="space-y-32">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`flex flex-col gap-12 lg:gap-24 items-center ${
                idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Feature Text */}
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold text-xl">
                  0{idx + 1}
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-lg text-slate-500 dark:text-white/40 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.points?.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-slate-600 dark:text-white/60"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Feature Image */}
              <div className="flex-1 w-full">
                <div className="relative aspect-4/3 rounded-[3rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl group bg-slate-50 dark:bg-white/5">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
