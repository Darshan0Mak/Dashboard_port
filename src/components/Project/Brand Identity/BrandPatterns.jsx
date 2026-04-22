import React from "react";
import Image from "next/image";

export default function BrandPatterns({ project }) {
  const { patternImage, textureImage } = project;
  return (
    <section
      id="patterns"
      className="py-24 transition-colors overflow-hidden max-w-5xl mx-auto"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-10 h-[1px] bg-amber-600"></span>
              <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-amber-600 dark:text-amber-500">
                Visual DNA
              </h3>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              Abstract <br /> Graphics & Patterns.
            </h2>
            <p className="text-slate-500 dark:text-white/40 leading-relaxed max-w-md">
              Supporting graphics expand the brand's visual language beyond the
              logo. These patterns are derived from the logo's geometry,
              creating a consistent texture for digital and print backgrounds.
            </p>
          </div>

          {/* Pattern Showcase */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-6">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 group">
              <Image
                src={patternImage}
                alt="Brand Pattern"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-amber-600/10 mix-blend-multiply" />
            </div>
            <div className="relative aspect-[4/5] mt-12 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 group bg-slate-900">
              <Image
                src={textureImage}
                alt="Brand Texture"
                fill
                className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl">
                <p className="text-white text-[10px] font-bold uppercase tracking-widest">
                  Texture Overlay
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
