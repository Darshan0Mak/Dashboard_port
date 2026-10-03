import React from "react";
import Image from "next/image";

export default function ThemeComparison({ project }) {
  const { lightImage, darkImage, themeComparisonData } = project;

  // જો કોઈ પ્રોજેક્ટમાં light/dark ઇમેજ ન હોય તો સેક્શન રેન્ડર જ નહીં થાય
  if (!lightImage || !darkImage) return null;

  // Generic Dynamic Labels (JSON માંથી આવશે, નહીંતર સ્ટાન્ડર્ડ ડિફોલ્ટ લેશે)
  const tag = themeComparisonData?.tag ?? "Interface Adaptability";
  const title = themeComparisonData?.title ?? "Adaptive Appearance.";
  const description =
    themeComparisonData?.description ??
    "A seamless visual transition engineered for optimal contrast, readability, and comfort across diverse lighting environments.";

  const card1Label = themeComparisonData?.card1Label ?? "Light Surface";
  const card1Desc = themeComparisonData?.card1Desc ?? "High-contrast day mode.";

  const card2Label = themeComparisonData?.card2Label ?? "Dark Surface";
  const card2Desc = themeComparisonData?.card2Desc ?? "Focused night mode.";

  return (
    <section
      id="interface"
      className="py-24 transition-colors max-w-5xl mx-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h3 className="text-xs uppercase tracking-[0.35em] font-bold text-indigo-600 dark:text-indigo-400 mb-3">
            {tag}
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {description}
          </p>
        </div>

        {/* 2-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1 */}
          <div className="space-y-4">
            <div className="relative aspect-[9/18] rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-50 dark:bg-white/5 p-2">
              <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden">
                <Image
                  src={lightImage}
                  alt={card1Label}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
              <div className="absolute top-6 left-6 px-3.5 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-white/10 text-[10px] font-bold uppercase tracking-wider text-slate-900 dark:text-white shadow-sm">
                {card1Label}
              </div>
            </div>
            {card1Desc && (
              <div className="px-2">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {card1Desc}
                </p>
              </div>
            )}
          </div>

          {/* Card 2 */}
          <div className="space-y-4">
            <div className="relative aspect-[9/18] rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl bg-slate-950 p-2">
              <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden">
                <Image
                  src={darkImage}
                  alt={card2Label}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
              <div className="absolute top-6 left-6 px-3.5 py-1 rounded-full bg-indigo-950/80 backdrop-blur-md border border-indigo-500/30 text-[10px] font-bold uppercase tracking-wider text-indigo-300 shadow-sm">
                {card2Label}
              </div>
            </div>
            {card2Desc && (
              <div className="px-2">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {card2Desc}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
