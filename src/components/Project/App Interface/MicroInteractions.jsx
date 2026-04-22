import Image from "next/image";
import React from "react";

export default function MicroInteractions({ project }) {
  const { interactions } = project;
  return (
    <section id="system" className="py-24  transition-colors max-w-5xl mx-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-emerald-600 dark:text-emerald-500 mb-4">
            Motion Design
          </h3>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            Micro-interactions.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interactions.map((item, idx) => (
            <div key={idx} className="group">
              <div className="relative aspect-square rounded-4xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 mb-6">
                <Image
                  src={item.videoSrc}
                  alt={item.title}
                  width={300}
                  height={300}
                  quality={100}
                  className="w-full h-full object-cover"
                />

                {/* Floating Indicator */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-slate-500 dark:text-white/40 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
