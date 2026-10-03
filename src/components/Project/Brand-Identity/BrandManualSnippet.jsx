import React from "react";
import { Check, X } from "lucide-react";

export default function BrandManualSnippet({ project }) {
  const { dos, donts } = project;

  return (
    <section
      id="guidelines"
      className="py-14 transition-colors max-w-5xl mx-auto"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-amber-600 dark:text-amber-500 mb-4">
            System Rules
          </h3>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            Do's & Don'ts.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* The Do's */}
          <div className="bg-emerald-50/50 dark:bg-emerald-500/5 rounded-[2.5rem] p-10 md:p-12 border border-emerald-100 dark:border-emerald-500/10">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center mb-8">
              <Check className="text-white" size={24} strokeWidth={3} />
            </div>
            <ul className="space-y-6">
              {dos.map((text, i) => (
                <li
                  key={i}
                  className="flex gap-4 text-slate-700 dark:text-emerald-50/70 font-medium leading-relaxed"
                >
                  <span className="shrink-0 text-emerald-500">•</span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* The Don'ts */}
          <div className="bg-red-50/50 dark:bg-red-500/5 rounded-[2.5rem] p-10 md:p-12 border border-red-100 dark:border-red-500/10">
            <div className="w-12 h-12 rounded-2xl bg-red-500 flex items-center justify-center mb-8">
              <X className="text-white" size={24} strokeWidth={3} />
            </div>
            <ul className="space-y-6">
              {donts.map((text, i) => (
                <li
                  key={i}
                  className="flex gap-4 text-slate-700 dark:text-red-50/70 font-medium leading-relaxed"
                >
                  <span className="shrink-0 text-red-500">•</span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
