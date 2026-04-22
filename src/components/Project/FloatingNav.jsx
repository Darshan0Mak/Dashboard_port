"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/images/logo.svg";
import { useState } from "react";

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

const getCtaColor = (cat) => {
  switch (cat) {
    case "UI / UX Design":
      return "bg-indigo-600";
    case "Visual Design":
      return "bg-pink-600";
    case "App Interfaces":
      return "bg-emerald-600";
    case "Brand Identity":
      return "bg-amber-600";
    default:
      return "bg-[#443dfc]";
  }
};

export default function FloatingNav({
  project,
  activeSection,
  setActiveSection,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = NAV_CONFIG[project.category] || [
    { label: "Info", id: "info" },
    { label: "Tech", id: "tech" },
  ];

  const handleNav = (id) => {
    setActiveSection(id);
    setMenuOpen(false);
    // smooth scroll to section
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const ctaColor = getCtaColor(project.category);
  const activeLabel =
    navLinks.find((l) => l.id === activeSection)?.label ?? navLinks[0].label;

  return (
    <>
      {/* ── DESKTOP: full pill ───────────────────────────────────────── */}
      <nav
        className="hidden md:flex fixed bottom-10 left-1/2 -translate-x-1/2 z-50
                      items-center gap-1 p-2
                      bg-[rgba(12,12,15,0.75)] backdrop-blur-xl
                      border border-white/20 rounded-2xl shadow-2xl
                      whitespace-nowrap transition-all duration-300"
      >
        {/* Logo */}
        <Link
          href="/"
          className="w-9 h-9 rounded-xl bg-white/5 border border-white/10
                     flex items-center justify-center mr-1
                     hover:bg-white/10 transition-colors"
        >
          <Image
            src={Logo}
            alt="Logo"
            width={16}
            height={16}
            className="opacity-80"
          />
        </Link>

        {/* Links */}
        <div className="flex items-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`px-4 py-2 rounded-xl text-[13px] font-medium transition-all active:scale-95
                ${
                  activeSection === link.id
                    ? "bg-white/10 text-white"
                    : "text-white/50 hover:bg-white/5 hover:text-white"
                }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-white/10 mx-2" />

        {/* CTA */}
        {project.liveLink && (
          <Link
            href={project.liveLink}
            target="_blank"
            className={`px-5 py-2 rounded-xl ${ctaColor} text-white text-[13px]
                        font-bold hover:brightness-110 transition-all shadow-lg active:scale-95`}
          >
            Visit ↗
          </Link>
        )}
      </nav>

      {/* ── MOBILE: compact pill + slide-up sheet ───────────────────── */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-3 w-[calc(100vw-32px)] max-w-sm">
        {/* Slide-up link sheet */}
        <div
          className={`w-full bg-[rgba(12,12,15,0.92)] backdrop-blur-xl
                         border border-white/20 rounded-2xl shadow-2xl
                         overflow-hidden transition-all duration-300 ease-out
                         ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
        >
          <div className="p-2 grid grid-cols-2 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`px-4 py-3 rounded-xl text-[13px] font-medium text-left transition-all active:scale-95
                  ${
                    activeSection === link.id
                      ? "bg-white/10 text-white"
                      : "text-white/50 hover:bg-white/5 hover:text-white"
                  }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA inside sheet */}
          {project.liveLink && (
            <div className="px-2 pb-2">
              <Link
                href={project.liveLink}
                target="_blank"
                className={`flex items-center justify-center w-full py-3 rounded-xl
                            ${ctaColor} text-white text-[13px] font-bold
                            hover:brightness-110 transition-all shadow-lg active:scale-95`}
              >
                Visit live project ↗
              </Link>
            </div>
          )}
        </div>

        {/* Bottom pill bar */}
        <div
          className="w-full flex items-center justify-between gap-2 p-2
                        bg-[rgba(12,12,15,0.85)] backdrop-blur-xl
                        border border-white/20 rounded-2xl shadow-2xl"
        >
          {/* Logo */}
          <Link
            href="/"
            className="w-9 h-9 rounded-xl bg-white/5 border border-white/10
                       flex items-center justify-center flex-shrink-0
                       hover:bg-white/10 transition-colors"
          >
            <Image
              src={Logo}
              alt="Logo"
              width={16}
              height={16}
              className="opacity-80"
            />
          </Link>

          {/* Active section label */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="flex-1 flex items-center justify-between px-3 py-2
                       rounded-xl bg-white/5 hover:bg-white/10
                       text-white text-[13px] font-medium transition-all active:scale-95"
          >
            <span>{activeLabel}</span>
            {/* Chevron */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              className={`opacity-50 transition-transform duration-300 ${menuOpen ? "rotate-180" : ""}`}
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>

          {/* Divider */}
          <div className="w-px h-5 bg-white/10" />

          {/* Mini CTA */}
          {project.liveLink && (
            <Link
              href={project.liveLink}
              target="_blank"
              className={`px-4 py-2 rounded-xl ${ctaColor} text-white
                          text-[13px] font-bold hover:brightness-110
                          transition-all shadow-lg active:scale-95 flex-shrink-0`}
            >
              Visit ↗
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
