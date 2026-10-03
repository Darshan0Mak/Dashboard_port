import Image from "next/image";

export default function LogoGrid({ project }) {
  const { constructionImage } = project;
  return (
    <section
      id="identity"
      className="py-24 transition-colors overflow-hidden max-w-5xl mx-auto fade-in"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-amber-600"></span>
              <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-amber-600 dark:text-amber-500">
                Logo Construction
              </h3>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
              Precision & <br /> Geometric Logic.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-slate-500 dark:text-white/40 text-sm leading-relaxed border-l border-slate-200 dark:border-white/10 pl-6">
              The visual identity is built on a modular grid system, ensuring
              perfect scalability and optical balance across all touchpoints.
              Every curve and angle is mathematically derived to create a
              timeless mark.
            </p>
          </div>
        </div>

        {/* Blueprint Display Area */}
        <div className="relative aspect-video md:aspect-21/9 w-full bg-[#0C0C0F] rounded-[2.5rem] border border-white/10 overflow-hidden group shadow-sm">
          {/* Subtle Grid Background */}
          <div
            className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />

          {/* Main Construction Image */}
          <div className="relative w-full h-full flex items-center justify-center p-8 md:p-16">
            <Image
              src={constructionImage}
              alt="Logo Geometry Breakdown"
              width={1200}
              height={600}
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Technical Data Overlays (Corners) */}
          <div className="absolute top-8 right-8 text-right space-y-1">
            <p className="text-[10px] font-mono text-slate-400 dark:text-white/20 uppercase tracking-widest">
              Grid Scale
            </p>
            <p className="text-xs font-mono text-slate-600 dark:text-white/40">
              8pt / Responsive
            </p>
          </div>

          <div className="absolute bottom-8 left-8 space-y-1">
            <p className="text-[10px] font-mono text-slate-400 dark:text-white/20 uppercase tracking-widest">
              Angle Reference
            </p>
            <p className="text-xs font-mono text-slate-600 dark:text-white/40">
              45° / 90° Orthogonal
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
