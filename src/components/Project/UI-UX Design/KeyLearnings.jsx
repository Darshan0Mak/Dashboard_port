import React from "react";

export default function KeyLearnings({ project }) {
  const { learnings } = project;
  return (
    <section
      id="learnings"
      className="py-24 bg-white dark:bg-[#0C0C0F] transition-colors"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-indigo-600 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-indigo-500/20">
          {/* Abstract background shape */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-white/60 mb-8">
              Reflections
            </h3>
            <h2 className="text-3xl md:text-4xl font-black mb-12 leading-tight">
              Project Key <br /> Takeaways.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {learnings.map((item, idx) => (
                <div key={idx} className="space-y-3">
                  <h4 className="text-lg font-bold text-white">{item.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
