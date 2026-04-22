import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/images/logo.svg";

// 1. Define the unique sections for each category
const NAV_CONFIG = {
  "UI / UX Design": [
    { label: "Info", id: "info" },
    { label: "Process", id: "process" },
    { label: "Solution", id: "solution" },
    { label: "Prototype", id: "prototype" },
  ],
  "Visual Design": [
    { label: "Info", id: "maininfo" },
    { label: "Concept", id: "concept" },
    { label: "Showcase", id: "showcase" },
    { label: "Details", id: "details" },
    { label: "Motion", id: "motion" },
  ],
  "App Interfaces": [
    { label: "Overview", id: "overview" },
    { label: "Features", id: "features" },
    { label: "Interface", id: "interface" },
    { label: "System", id: "system" },
  ],
  "Brand Identity": [
    { label: "Info", id: "brandinfo" },
    { label: "Identity", id: "identity" },
    { label: "Logo Suite", id: "identitysuite" },
    { label: "Mockups", id: "mockups" },
    { label: "Guidelines", id: "guidelines" },
  ],
};

export default function FloatingNav({ project, setActiveSection }) {
  // Get sections based on category, fallback to a default list
  const navLinks = NAV_CONFIG[project.category] || [
    { label: "Info", id: "info" },
    { label: "Tech", id: "tech" },
  ];

  // Logic to match the CTA color to the category theme
  const getCtaColor = (cat) => {
    switch (cat) {
      case "UI / UX Designer":
        return "bg-indigo-600";
      case "Visual Design":
        return "bg-pink-600";
      case "App Design":
        return "bg-emerald-600";
      case "Brand Identities":
        return "bg-amber-600";
      default:
        return "bg-[#443dfc]";
    }
  };

  return (
    <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 p-2 md:p-3 bg-[rgba(12,12,15,0.75)] backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl whitespace-nowrap transition-all duration-300">
      {/* Logo */}
      <Link
        href="/"
        className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mr-1"
      >
        <Image
          src={Logo}
          alt="Logo"
          width={16}
          height={16}
          className="opacity-80"
        />
      </Link>

      {/* Dynamic Links */}
      <div className="flex items-center">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => setActiveSection(link.id)}
            className="px-3 md:px-4 py-2 rounded-xl text-[13px] font-medium text-white/50 hover:bg-white/5 hover:text-white transition-all active:scale-95"
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="w-px h-5 bg-white/10 mx-2" />

      {/* Dynamic CTA */}
      {project.liveLink && (
        <Link
          href={project.liveLink}
          target="_blank"
          className={`px-5 py-2 rounded-xl ${getCtaColor(project.category)} text-white text-[13px] font-bold hover:brightness-110 transition-all shadow-lg active:scale-95`}
        >
          Visit ↗
        </Link>
      )}
    </nav>
  );
}
