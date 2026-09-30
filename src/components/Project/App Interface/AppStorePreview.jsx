import React from "react";
import Image from "next/image";

export default function AppStorePreview({ project }) {
  const { lifestyleMockups, previewSection } = project;

  // જો પ્રોજેક્ટમાં મોકઅપ્સ ન હોય તો સેક્શન રેન્ડર નહીં થાય
  if (!lifestyleMockups || lifestyleMockups.length === 0) return null;

  // Dynamic Labels
  const tag = previewSection?.tag ?? "Contextualization";
  const title = previewSection?.title ?? "Real-world Application.";
  const description =
    previewSection?.description ??
    "Validating visual ergonomics, legibility under varied lighting, and touch target accessibility across real-world screen contexts.";

  return (
    <section
      id="marketing"
      className="py-24 transition-colors max-w-5xl mx-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          <div>
            <h3 className="text-xs uppercase tracking-[0.35em] font-bold text-indigo-600 dark:text-indigo-400 mb-3">
              {tag}
            </h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              {title}
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* 2-Column Mockups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {lifestyleMockups.map((imgItem, idx) => {
            // Safe URL resolution (handles both string and object { img, label })
            const imgSrc =
              typeof imgItem === "object" && imgItem !== null
                ? imgItem.img
                : imgItem;
            const imgLabel =
              typeof imgItem === "object" && imgItem?.label
                ? imgItem.label
                : `Preview 0${idx + 1}`;

            return (
              <div
                key={idx}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden group shadow-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03]"
              >
                <Image
                  src={imgSrc}
                  alt={`${project.title} Preview ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <div className="px-5 py-2.5 bg-white/20 dark:bg-black/40 backdrop-blur-md border border-white/30 rounded-full text-white text-xs font-bold uppercase tracking-widest shadow-lg">
                    {imgLabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
