export default function ProjectStats({ project }) {
  // Logic to match the hero colors based on category
  const getCategoryColor = (cat) => {
    switch (cat) {
      case "UI / UX Designer":
        return "text-indigo-600 dark:text-indigo-500";
      case "Visual Design":
        return "text-pink-600 dark:text-pink-500";
      case "App Interfaces":
        return "text-emerald-600 dark:text-emerald-500";
      case "Brand Identity":
        return "text-amber-600 dark:text-amber-500";
      default:
        return "text-indigo-600 dark:text-indigo-500";
    }
  };

  const accentColor = getCategoryColor(project.category);

  const stats = [
    { num: project.year ?? "2024", label: "Year", highlight: true },
    { num: project.duration ?? "—", label: "Duration", highlight: true },
    { num: project.category, label: "Category", highlight: true },
  ];

  return (
    <section className="max-w-250 mx-auto px-6 mt-16 transition-colors fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-sm dark:shadow-none">
        {stats.map(({ num, label, highlight }) => (
          <div
            key={label}
            className="bg-white dark:bg-[#0C0C0F] py-8 md:py-10 text-center flex flex-col justify-center px-4"
          >
            <div
              className={`text-3xl md:text-[2.2rem] font-black leading-tight tracking-tight wrap-break-words
                ${highlight ? accentColor : "text-slate-900 dark:text-white/90"}
              `}
            >
              {num}
            </div>
            <div className="text-slate-400 dark:text-white/30 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] mt-3">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
