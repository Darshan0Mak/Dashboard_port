import React from "react";

export default function InteractivePrototype({ project }) {
  const { figmaUrl, videoSrc } = project;
  return (
    <section
      id="prototype"
      className="py-24 transition-colors max-w-5xl mx-auto"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-indigo-600 dark:text-indigo-400 mb-4">
            Live Preview
          </h3>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            Interaction Design.
          </h2>
          <p className="mt-4 text-slate-500 dark:text-white/40">
            Experience the flow firsthand through this interactive prototype
            focusing on micro-interactions and seamless transitions.
          </p>
        </div>

        <div className="relative w-full aspect-video rounded-[3rem] overflow-hidden border border-slate-200 dark:border-white/10 bg-black shadow-2xl">
          {figmaUrl ? (
            <iframe
              className="w-full h-full border-none"
              src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`}
              allowFullScreen
            />
          ) : (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          )}

          {/* Glass Overlay Indicator */}
          <div className="absolute bottom-6 right-6 backdrop-blur-md bg-white/10 border border-white/20 px-4 py-2 rounded-full">
            <span className="text-[10px] font-bold text-white uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              Interactive Mode
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
