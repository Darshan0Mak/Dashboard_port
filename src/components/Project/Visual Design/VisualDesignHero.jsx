import Image from "next/image";

export default function VisualDesignHero({ project }) {
  return (
    <section
      id="maininfo"
      className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-16 bg-white dark:bg-[#0C0C0F] overflow-hidden"
    >
      {/* Blue Ambient Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-pink-500/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 fade-in">
        <span className="px-4 py-1.5 rounded-full border border-pink-200 dark:border-pink-500/30 bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 text-xs font-bold uppercase tracking-widest">
          {project.category}
        </span>

        <h1 className="mt-8 text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-[1.1] fade-in">
          {project.title}
        </h1>

        <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed fade-in">
          {project.summary}
        </p>

        {/* <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href={project.liveLink || "#"}
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold transition-all shadow-lg shadow-emerald-200 dark:shadow-none"
          >
            View Project
          </Link>
        </div> */}
      </div>

      <div className="relative z-10 mt-16 w-full max-w-250 rounded-3xl border border-slate-200 dark:border-white/10 overflow-hidden shadow-2xl fade-in">
        <Image
          src={project.banner}
          width={1200}
          height={675}
          alt="Hero"
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}
