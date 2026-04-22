import Image from "next/image";

export default function HeroBillboard({ project }) {
  const { banner, summary } = project;
  const imageSrc = banner || "/images/default-banner.jpg";
  const altText = summary || "Project Showcase";
  return (
    <section className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden bg-slate-900">
      {/* The Container has 'overflow-hidden'. 
        The image is set to 110% height to allow for a subtle 
        'scroll parallax' feel if you add Framer Motion later, 
        but even with pure Tailwind, this looks massive and immersive.
      */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={imageSrc}
          alt={altText || "Project Showcase"}
          fill
          priority
          className="object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
          sizes="100vw"
        />
      </div>

      {/* Subtle Overlay Gradients for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />

      {/* Optional: Floating Caption (Bottom Left) */}
      <div className="absolute bottom-10 left-6 md:left-12 z-10">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 px-4 py-2 rounded-full flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-[0.2em]">
            Full Scale Preview
          </span>
        </div>
      </div>
    </section>
  );
}
