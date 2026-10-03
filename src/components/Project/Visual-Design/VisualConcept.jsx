export default function VisualConcept({ project }) {
  const { Sectitle, conceptText, tags } = project;

  console.log("Rendering VisualConcept with project:", project);

  return (
    <section
      id="concept"
      className="relative w-full py-24 md:py-32 bg-white dark:bg-[#0C0C0F] overflow-hidden transition-colors max-w-250 mx-auto fade-in"
    >
      {/* Decorative Background Element - Subtle Gradients */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Eyebrow and Large Heading */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-10 h-px bg-pink-500"></span>
              <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-pink-600 dark:text-pink-500">
                The Core Concept
              </h3>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
              {Sectitle || "A Visual Narrative."}
            </h2>

            {/* Mood Tags/Keywords */}
            <div className="flex flex-wrap gap-2 pt-4">
              {tags?.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-white/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side: Description text */}
          <div className="lg:col-span-7 lg:pl-12">
            <div className="relative">
              {/* Giant Decorative Quote Mark */}
              <span className="absolute -top-12 -left-8 text-[120px] font-serif italic text-slate-100 dark:text-white/5 select-none leading-none">
                “
              </span>

              <div className="relative z-10 space-y-6">
                <p className="text-xl md:text-2xl leading-relaxed text-slate-600 dark:text-white/60 font-medium">
                  {conceptText}
                </p>

                {/* Visual Accent Line */}
                <div className="w-20 h-1.5 bg-linear-to-r from-pink-500 to-purple-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
