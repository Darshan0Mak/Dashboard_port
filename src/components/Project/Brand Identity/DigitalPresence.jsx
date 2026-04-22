import React from "react";
import Image from "next/image";

export default function DigitalPresence({ project }) {
  const { landingPreview, appIconImage } = project;

  return (
    <section
      id="digital"
      className="py-24 transition-colors overflow-hidden max-w-5xl mx-auto"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold  text-amber-600 dark:text-amber-500 mb-4">
            Digital Ecosystem
          </h3>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
            Digital Application.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Landing Page Preview */}
          <div className="lg:col-span-8 group">
            <div className="relative aspect-16/10 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-2xl">
              {/* Browser Header */}
              <div className="absolute top-0 inset-x-0 h-10 bg-slate-100 dark:bg-white/5 border-b border-slate-200 dark:border-white/10 flex items-center px-6 gap-2 z-20">
                <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-white/20" />
              </div>
              <Image
                src={landingPreview}
                alt="Landing Page"
                fill
                className="object-cover pt-10 group-hover:scale-[1.02] transition-transform duration-1000"
              />
            </div>
            <p className="mt-6 text-sm font-bold text-slate-400 uppercase tracking-widest ml-4">
              Web Presence
            </p>
          </div>

          {/* App Icon Showcase */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="relative aspect-square rounded-[3.5rem] overflow-hidden bg-slate-900 shadow-2xl group flex items-center justify-center border border-slate-200 dark:border-white/10">
              <Image
                src={appIconImage}
                alt="App Icon"
                width={200}
                height={200}
                className="w-full h-auto drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="bg-white dark:bg-white/5 p-8 rounded-4xl border border-slate-200 dark:border-white/10">
              <h4 className="text-slate-900 dark:text-white font-bold mb-2">
                Iconography
              </h4>
              <p className="text-sm text-slate-500 dark:text-white/40">
                Optimized for high-density displays and small-scale recognition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
