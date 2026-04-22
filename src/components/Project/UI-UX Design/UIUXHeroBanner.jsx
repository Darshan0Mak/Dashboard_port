import Image from "next/image";
import Link from "next/link";

export default function UIUXHeroBanner({ project }) {
  return (
    <section
      id="info"
      className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-16 bg-white dark:bg-[#0C0C0F] overflow-hidden"
    >
      {/* Blue Ambient Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-indigo-500/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 fade-in">
        <span className="px-4 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest">
          {project.category}
        </span>

        <h1 className="mt-8 text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-[1.1] fade-in">
          {project.title}
        </h1>

        <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed fade-in">
          {project.summary}
        </p>

        <div className="my-10 flex flex-wrap justify-center gap-4 fade-in">
          <Link
            href={project.Behance || "#"}
            target="_blank"
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold transition-all shadow-lg shadow-indigo-200 dark:shadow-none"
          >
            View Project
          </Link>
        </div>
      </div>

      <div className="fade-in w-full max-w-250 mx-auto">
        <Image
          src={project.banner}
          width={1200}
          height={675}
          alt="Hero"
          className="w-full h-auto object-contain bg-black"
        />
      </div>
    </section>
  );
}
