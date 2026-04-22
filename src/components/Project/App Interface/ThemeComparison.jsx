import React from "react";
import Image from "next/image";

export default function ThemeComparison({ project }) {
  const { lightImage, darkImage } = project;
  return (
    <section
      id="interface"
      className="py-24  transition-colors max-w-5xl mx-auto"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-emerald-600 dark:text-emerald-500 mb-4">
            Adaptive UI
          </h3>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            Dark vs. Light.
          </h2>
          <p className="mt-4 text-slate-500 dark:text-white/40">
            A seamless visual transition designed to reduce eye strain and
            provide an immersive experience regardless of the environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Light Mode Card */}
          <div className="space-y-6">
            <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl bg-white">
              <Image
                src={lightImage}
                alt="Light Mode"
                fill
                className="object-cover"
              />
              <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-[10px] font-bold uppercase tracking-widest text-slate-900">
                Light Mode
              </div>
            </div>
          </div>

          {/* Dark Mode Card */}
          <div className="space-y-6">
            <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-[#0C0C0F]">
              <Image
                src={darkImage}
                alt="Dark Mode"
                fill
                className="object-cover"
              />
              <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white">
                Dark Mode
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
