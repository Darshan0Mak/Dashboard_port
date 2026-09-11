import Image from "next/image";
import Link from "next/link";

export default function FrontHeroBanner({ project }) {
  return (
    <section
      id="info"
      className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-28 pb-16"
    >
      {/* Blue Ambient Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 fade-in">
        <span className="px-4 py-1.5 rounded-full border border-cyan-200 dark:border-cyan-500/30 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-widest">
          {project.category}
        </span>

        <h1 className="mt-8 text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-[1.1] fade-in">
          {project.title}
        </h1>

        <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed fade-in">
          {project.summary}
        </p>

        <div className="my-10 flex flex-wrap justify-center gap-4 fade-in">
          {/* <Link
            href={project.Behance || "#"}
            target="_blank"
            className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-2xl font-bold transition-all shadow-lg shadow-cyan-200 dark:shadow-none"
          >
            View Project
          </Link> */}
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
