import React from "react";
import Image from "next/image";

export default function AppStorePreview({ project }) {
  const { lifestyleMockups } = project;
  return (
    <section
      id="marketing"
      className="py-24  transition-colors max-w-5xl mx-auto"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-emerald-600 dark:text-emerald-500 mb-4">
              Contextualization
            </h3>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              Real-world <br /> Application.
            </h2>
          </div>
          <p className="text-slate-500 dark:text-white/40 text-lg">
            Placing the interface in real-world scenarios to validate
            ergonomics, legibility under varying light conditions, and overall
            emotional resonance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {lifestyleMockups.map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-4/3 rounded-[3rem] overflow-hidden group shadow-2xl"
            >
              <Image
                src={project.category === "App Interfaces" ? img.img : img}
                alt={project.title + " lifestyle mockup " + (idx + 1)}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white text-[10px] font-bold uppercase tracking-widest">
                  {img.label || `Lifestyle Render 0${idx + 1}`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
