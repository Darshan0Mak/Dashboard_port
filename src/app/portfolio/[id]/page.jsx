"use client";
import projects from "@/app/Data/projects";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/images/logo.svg";
import React from "react";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;

  const yOffset = -80; // adjust based on your UI
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};

export default function ProjectDetail({ params }) {
  const { id } = React.use(params);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0C0C0F] flex items-center justify-center">
        <h2 className="text-2xl font-bold text-white">Project not found</h2>
      </div>
    );
  }

  return (
    <div className="bg-[#0C0C0F] text-white min-h-screen overflow-x-hidden pb-32">
      {/* ===== HERO ===== */}
      <section
        className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden"
        id="info"
      >
        {/* Ambient glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-175 h-175 rounded-full bg-[radial-gradient(circle,rgba(245,200,66,0.12)_0%,transparent_65%)] pointer-events-none" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.06) 1px,transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%)",
          }}
        />

        {/* Category pill */}
        <div className="relative z-10 inline-flex items-center gap-2 bg-[rgba(68,61,252,0.12)] border border-[rgba(68,61,252,0.3)] text-[#443dfc] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#443dfc]" />
          {project.category}
        </div>

        <h1 className="relative z-10 text-[clamp(2.8rem,7vw,5.5rem)] font-heading font-bold leading-[1.05] tracking-tight max-w-225">
          {project.title}
        </h1>

        {project.summary && (
          <p className="relative z-10 text-white/45 text-lg max-w-4xl mx-auto leading-relaxed mt-6 mb-10">
            {project.summary}
          </p>
        )}

        <div className="relative z-10 flex gap-3 justify-center flex-wrap">
          {project.liveLink && (
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#443dfc] text-[#0C0C0F] font-bold text-sm px-7 py-3 rounded-xl hover:-translate-y-0.5 hover:opacity-90 transition-all"
            >
              ▶ Live Project
            </Link>
          )}
          {project.behance && (
            <Link
              href={project.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/6 text-white font-medium text-sm px-7 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition-all"
            >
              View on Behance
            </Link>
          )}
        </div>
      </section>

      {/* ===== BANNER ===== */}
      {project.banner && (
        <div className="max-w-250 mx-auto px-6">
          <div className="rounded-2xl overflow-hidden border border-white/8 bg-white/4">
            <Image
              src={project.banner}
              alt={`${project.title} banner`}
              width={2000}
              height={1125}
              priority
              className="w-full h-auto object-cover block"
            />
          </div>
        </div>
      )}

      {/* ===== STATS ROW ===== */}
      <div className="max-w-250 mx-auto px-6 mt-16">
        <div className="grid grid-cols-3 divide-x divide-white/8 border border-white/8 rounded-2xl overflow-hidden">
          {[
            { num: project.year ?? "2024", label: "Year" },
            { num: project.duration ?? "—", label: "Duration" },
            { num: project.category, label: "Category" },
          ].map(({ num, label }) => (
            <div key={label} className="bg-[#0C0C0F] py-7 text-center">
              <div className="text-[2.2rem] font-extrabold leading-none first:text-[#443dfc]">
                {num}
              </div>
              <div className="text-white/45 text-[11px] uppercase tracking-widest mt-1.5">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== TEXT SECTIONS ===== */}
      <div className="max-w-250 mx-auto px-6 space-y-10 mt-10">
        {[
          { label: "Overview", text: project.summary },
          { label: "Problem", text: project.problem },
          { label: "Solution", text: project.solution },
        ]
          .filter((s) => s.text)
          .map(({ label, text }) => (
            <div
              key={label}
              className="border-l-2 border-[rgba(68,61,252,0.35)] pl-7"
            >
              <p className="text-[11px] uppercase tracking-[.14em] text-[#443dfc] font-semibold mb-2">
                {label}
              </p>
              <p className="text-white/70 text-[1.05rem] leading-[1.75] max-w-3xl lg:max-w-5xl">
                {text}
              </p>
            </div>
          ))}
      </div>

      {/* ===== ELEMENTS ===== */}
      <div className="max-w-250 mx-auto px-6 mt-24" id="elements">
        <div className="mb-10">
          <p className="text-white/45 text-[11px] uppercase tracking-[.14em] mb-3">
            Elements
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold tracking-tight">
            Visual exploration
            <br />
            of the design
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.elementImages?.map((img, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden border border-white/8 bg-white/4 aspect-4/3 hover:-translate-y-1 hover:border-[rgba(68,61,252,0.3)] transition-all duration-300"
            >
              <Image
                src={img}
                alt={`${project.title} element ${idx + 1}`}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ===== TECH STACK ===== */}
      <div className="max-w-250 mx-auto px-6 mt-24" id="tech">
        <div className="mb-6">
          <p className="text-white/45 text-[11px] uppercase tracking-[.14em] mb-3">
            Built with
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold tracking-tight">
            Tech stack
          </h2>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {project.tech?.map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full bg-white/7 border border-white/8 text-white/75 text-sm hover:bg-[rgba(245,200,66,0.1)] hover:border-[rgba(245,200,66,0.35)] hover:text-[#F5C842] transition-all cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ===== OUTCOME ===== */}
      {project.outcome && (
        <div className="max-w-250 mx-auto px-6 mt-16 mb-10">
          <div className="mb-5">
            <p className="text-white/45 text-[11px] uppercase tracking-[.14em] mb-3">
              Result
            </p>
            <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold tracking-tight">
              Outcome
            </h2>
          </div>
          <div className="relative rounded-2xl bg-[linear-gradient(135deg,rgba(68,61,252,0.08),rgba(68,61,252,0.03))] border border-[rgba(68,61,252,0.2)] p-10 overflow-hidden">
            <div className="absolute -top-16 -right-16 w-44 h-44 bg-[radial-gradient(circle,rgba(68,61,252,0.12),transparent_60%)] pointer-events-none" />
            <p className="text-[11px] uppercase tracking-[.14em] text-[#443dfc] font-semibold mb-4">
              ★ Impact
            </p>
            <p className="text-white/70 text-[1.05rem] leading-[1.75]">
              {project.outcome}
            </p>
          </div>
        </div>
      )}

      {/* ===== FLOATING NAV ===== */}
      <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 p-4 bg-[rgba(12,12,15,0.65)] backdrop-blur-md border border-white/10 rounded-xl shadow-lg whitespace-nowrap">
        {/* Logo */}
        <div className="w-8 h-8 rounded-md bg-[#1a1a1a] border border-white/10 flex items-center justify-center">
          <Image
            src={Logo}
            alt="Logo"
            width={14}
            height={14}
            className="opacity-70"
          />
        </div>

        {/* Links */}
        <button
          onClick={() => scrollToSection("info")}
          className="px-3 py-1.5 rounded-lg text-sm text-white/60 hover:bg-white/10 hover:text-white transition"
        >
          Info
        </button>

        <button
          onClick={() => scrollToSection("elements")}
          className="px-3 py-1.5 rounded-lg text-sm text-white/60 hover:bg-white/10 hover:text-white transition"
        >
          Elements
        </button>

        <button
          onClick={() => scrollToSection("tech")}
          className="px-3 py-1.5 rounded-lg text-sm text-white/60 hover:bg-white/10 hover:text-white transition"
        >
          Tags
        </button>

        {/* Divider */}
        <div className="w-px h-4 bg-white/10 mx-1" />

        {/* CTA */}
        {project.liveLink && (
          <Link
            href={project.liveLink}
            target="_blank"
            className="px-4 py-1.5 rounded-lg bg-[#443dfc] text-[#0C0C0F] text-[12px] font-semibold hover:opacity-90 transition"
          >
            Visit ↗
          </Link>
        )}
      </nav>
    </div>
  );
}
