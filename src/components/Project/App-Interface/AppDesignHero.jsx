import Image from "next/image";
import Link from "next/link";

export default function AppDesignHero({ project }) {
  // Brand color dynamic fallback
  const isIndigo = !project.accentTheme || project.accentTheme === "indigo";

  return (
    <section
      id="overview"
      className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-28 pb-16"
    >
      {/* Ambient Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-indigo-500/15 blur-[130px] pointer-events-none" />

      <div className="relative z-10 fade-in">
        {project.category && (
          <span className="px-4 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest">
            {project.category}
          </span>
        )}

        <h1 className="mt-8 text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-[1.1]">
          {project.title}
        </h1>

        {project.summary && (
          <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {project.summary}
          </p>
        )}

        <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
          {project.liveLink && (
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
            >
              Interactive Prototype ↗
            </Link>
          )}

          <a
            href="#features"
            className="px-8 py-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-2xl font-semibold transition-all border border-slate-200 dark:border-slate-700/60"
          >
            Core Walkthrough ↓
          </a>
        </div>
      </div>

      {/* Hero Mockup Frame */}
      {project.banner && (
        <div className="relative z-10 mt-16 w-full max-w-5xl rounded-3xl border border-slate-200 dark:border-white/10 overflow-hidden shadow-2xl bg-slate-950/20 backdrop-blur-sm fade-in">
          <Image
            src={project.banner}
            width={1200}
            height={675}
            alt={project.title || "Project Banner"}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      )}
    </section>
  );
}
