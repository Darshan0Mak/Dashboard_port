export default function ProjectStats({ project }) {
  const getCategoryColor = (cat) => {
    switch (cat) {
      case "Mobile Product Design":
      case "UI / UX Designer":
        return "text-indigo-600 dark:text-indigo-400";
      case "Visual Design":
        return "text-pink-600 dark:text-pink-500";
      case "App Interfaces":
        return "text-emerald-600 dark:text-emerald-500";
      case "Brand Identity":
        return "text-amber-600 dark:text-amber-500";
      case "Frontend Development":
        return "text-cyan-600 dark:text-cyan-500";
      default:
        return "text-indigo-600 dark:text-indigo-400";
    }
  };

  const accentColor = getCategoryColor(project.category);

  // 4 high-impact stats for hiring managers
  const stats = [
    {
      num: project.role ?? "Senior UI Designer",
      label: "Role",
    },
    {
      num: project.duration ?? "48-Hour Sprint",
      label: "Timeline",
    },
    {
      num: project.platform ?? "iOS / Android",
      label: "Platform",
    },
    {
      num: project.deliverable ?? "Figma System",
      label: "Deliverable",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-16 transition-colors fade-in">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-sm dark:shadow-none bg-white dark:bg-[#0C0C0F]">
        {stats.map(({ num, label }) => (
          <div
            key={label}
            className="py-6 sm:py-8 md:py-10 text-center flex flex-col justify-center px-4"
          >
            <div
              className={`text-xl sm:text-2xl md:text-2xl font-black leading-tight tracking-tight break-words ${accentColor}`}
            >
              {num}
            </div>
            <div className="text-slate-400 dark:text-white/40 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] mt-2">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
