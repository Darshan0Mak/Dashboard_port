import Image from "next/image";
import React from "react";

export default function MicroInteractions({ project }) {
  const { interactions, interactionSection } = project;

  // જો પ્રોજેક્ટમાં interactions ન હોય તો સેક્શન રેન્ડર ન થાય
  if (!interactions || interactions.length === 0) return null;

  // Dynamic Labels
  const tag = interactionSection?.tag ?? "State Architecture";
  const title = interactionSection?.title ?? "Micro-interactions & States.";

  return (
    <section
      id="interactions"
      className="py-24 transition-colors max-w-5xl mx-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h3 className="text-xs uppercase tracking-[0.35em] font-bold text-indigo-600 dark:text-indigo-400 mb-3">
            {tag}
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            {title}
          </h2>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interactions.map((item, idx) => (
            <div key={idx} className="group flex flex-col">
              {/* Device Preview Card */}
              <div className="relative aspect-[4/5] sm:aspect-square rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-3 mb-5 transition-all duration-300 group-hover:border-indigo-500/40 group-hover:shadow-xl group-hover:shadow-indigo-500/5">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white dark:bg-slate-950 flex items-center justify-center">
                  <Image
                    src={item.videoSrc}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Status Indicator Dot */}
                <div className="absolute top-5 right-5 w-7 h-7 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                </div>
              </div>

              {/* Title & Description */}
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {item.title}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
