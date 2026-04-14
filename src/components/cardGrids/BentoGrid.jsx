"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance } from "@fortawesome/free-brands-svg-icons";

import AnimatedIconButton from "@/components/animatedButton/animatedButton";
import StatsCard from "../stats";
import ServicesOffering from "../serviceOffering/page";
import RecentWorkCard from "../RecentWorkCard/page";
import ArticleCard from "../linkedInArticle/page";
import Headshot from "../../../public/images/headshot-image-01.webp";
import ProjectImage from "../../../public/images/portfolio-2.webp";

// ─── useInView ────────────────────────────────────────────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ─── Base card wrapper ────────────────────────────────────────────────────────
function BentoCard({ children, className = "", delay = 0, style = {} }) {
  const [ref, inView] = useInView(0.08);
  return (
    <div
      ref={ref}
      className={`rounded-2xl border border-black/6 dark:border-white/6 bg-white/80 dark:bg-white/3 backdrop-blur-sm shadow-sm hover:shadow-md hover:scale-[1.015] active:scale-[0.99] transition-all duration-300 overflow-hidden ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.55s ease ${delay}s, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${delay}s, box-shadow 0.2s, scale 0.2s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ─── Profile Card ─────────────────────────────────────────────────────────────
function ProfileCard() {
  return (
    <BentoCard
      className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 lg:row-span-2 p-5 sm:p-7"
      delay={0}
    >
      <div className="flex flex-col h-full gap-8 relative overflow-hidden p-1">
        {/* 1. Background "Fill": Oversized Initials */}
        <div className="absolute -top-12 -right-12 text-[180px] font-black text-gray-900/3 dark:text-white/3 select-none pointer-events-none uppercase italic">
          DM
        </div>

        {/* 2. Top Section: Headshot + Name */}
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-center relative z-10">
          {/* Large Headshot with "Floating" effect */}
          <div className="relative shrink-0">
            <div className="w-32 h-32 sm:w-44 sm:h-44 lg:w-56 lg:h-56 rounded-3xl overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src={Headshot}
                alt="Darshan Makwana"
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Subtle glow behind image to fill space */}
            <div className="absolute -inset-2 bg-emerald-500/10 rounded-3xl blur-2xl -z-10" />
          </div>

          {/* Name & Availability */}
          <div className="text-center lg:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-emerald-600 dark:text-emerald-400">
                Available
              </span>
            </div>

            <h2 className="font-heading font-black uppercase leading-[0.85] text-gray-900 dark:text-white text-5xl sm:text-6xl lg:text-7xl tracking-tighter">
              Darshan
              <br />
              <span className="text-gray-400 dark:text-zinc-600">Makwana</span>
            </h2>

            <p className="mt-4 text-xs font-bold uppercase tracking-[0.4em] text-zinc-400 dark:text-zinc-500">
              Senior UI / UX Designer
            </p>
          </div>
        </div>

        {/* 3. Middle Section: Bio (Split into columns to fill horizontal space) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start flex-1">
          <div className="md:col-span-8 space-y-4">
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-snug">
              Designing intuitive digital experiences that feel effortless. 6+
              years crafting user-focused products for startups & brands.
            </p>
            {/* Decorative pills to add visual density */}
            <div className="flex flex-wrap gap-2">
              {["SaaS", "Web Apps", "UI Systems", "Product Design"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-gray-100 dark:bg-white/5 text-[10px] font-bold uppercase text-gray-500 dark:text-gray-400"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* 4. Bottom Section: CTA Actions */}
          <div className="md:col-span-4 flex flex-col gap-2 w-full">
            <Link
              href="/portfolio"
              className="flex items-center justify-between px-6 py-4 rounded-2xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-bold transition-all hover:bg-emerald-600 dark:hover:bg-emerald-400 dark:hover:text-black group"
            >
              View Work
              <svg
                width="16"
                height="16"
                viewBox="0 0 14 14"
                fill="none"
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              >
                <path
                  d="M3 11L11 3M11 3H5M11 3V9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <div className="flex gap-2">
              <Link
                href="/contact"
                className="flex-1 text-center px-4 py-3 rounded-2xl border border-gray-200 dark:border-white/10 text-xs font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/skills"
                className="flex-1 text-center px-4 py-3 rounded-2xl border border-gray-200 dark:border-white/10 text-xs font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
              >
                Skills
              </Link>
            </div>
          </div>
        </div>
      </div>
    </BentoCard>
  );
}

// ─── Recent Work Card ─────────────────────────────────────────────────────────
function RecentWorkBento() {
  return (
    <BentoCard
      className="col-span-1 sm:col-span-2 lg:col-span-2 p-0"
      delay={0.06}
    >
      <RecentWorkCard
        title="Redesigned onboarding flow"
        description="Redesigned onboarding flow, driving a 28% increase in completion rate"
        link="https://minddeft.com"
      />
    </BentoCard>
  );
}

// ─── Projects Card ────────────────────────────────────────────────────────────
function ProjectsCard() {
  const [hovered, setHovered] = useState(false);
  return (
    <BentoCard
      className="col-span-1 p-5 sm:p-6 flex flex-col justify-between group"
      delay={0.1}
    >
      <div
        className="relative w-full rounded-xl overflow-hidden mb-4"
        style={{ aspectRatio: "4/3" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src={ProjectImage}
          alt="Projects"
          fill
          className="object-cover transition-transform duration-500"
          style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
          quality={100}
        />
        {/* <div
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
          style={{ background: "rgba(0,0,0,0.5)", opacity: hovered ? 1 : 0 }}
        >
          <span className="text-white text-xs font-bold uppercase tracking-widest">
            Browse All
          </span>
        </div> */}
      </div>
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-0.5">
            Showcase
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
            Projects
          </h3>
        </div>
        <AnimatedIconButton href="/portfolio" />
      </div>
    </BentoCard>
  );
}

// ─── LinkedIn Articles Card ───────────────────────────────────────────────────
function LinkedInCard() {
  const [hovered, setHovered] = useState(false);

  return (
    <BentoCard
      className="group relative col-span-1 flex flex-col justify-between overflow-hidden border border-white/5 bg-[#0a0a0a] p-5 transition-all duration-500 sm:p-6"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Decorative HUD corners */}
      <div className="absolute top-0 left-0 h-2 w-2 border-t border-l border-white/20 transition-colors group-hover:border-orange-500" />
      <div className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-white/20 transition-colors group-hover:border-orange-500" />

      {/* Top Section: Action Area */}
      <div className="relative z-10 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse bg-[#C7D2FE] rounded-full" />
            <span className="font-mono text-[10px] tracking-widest text-gray-400 dark:text-gray-500 uppercase">
              Connection Est. 2026
            </span>
          </div>
          <div className="font-mono text-[10px] text-[#C7D2FE] bg-[#C7D2FE]/5 px-2 py-0.5 border border-[#C7D2FE]/20">
            {hovered ? "SIGNAL STRENGTH: 100%" : "3 NEW UPDATES"}
          </div>
        </div>

        {/* The Main "Button" Interface */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center gap-4 
  border border-black/10 dark:border-white/10 
  bg-black/5 dark:bg-white/5 
  p-4 rounded-2xl 
  transition-all duration-300 
  group-hover:bg-[#0A66C2]/10 group-hover:border-[#0A66C2]/30"
        >
          {/* Icon */}
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center 
    bg-zinc-200 dark:bg-zinc-800 
    transition-colors 
    group-hover:bg-[#0A66C2] 
    rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5 
      text-black dark:text-white 
      group-hover:text-white"
              fill="currentColor"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.762 0 5-2.24 5-5v-14c0-2.76-2.238-5-5-5zm-11.5 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13 12.268h-3v-5.604c0-1.337-.027-3.059-1.865-3.059-1.867 0-2.155 1.459-2.155 2.965v5.698h-3v-11h2.881v1.507h.041c.401-.759 1.381-1.557 2.845-1.557 3.043 0 3.603 2.004 3.603 4.611v6.439z" />
            </svg>
          </div>

          {/* Text */}
          <div className="overflow-hidden">
            <p
              className="text-xs font-bold tracking-tight uppercase 
      text-black dark:text-white"
            >
              LINKEDIN // PROFILE
            </p>

            <p
              className="text-[9px] 
      text-black/50 dark:text-white/40 
      group-hover:text-[#0A66C2] dark:group-hover:text-[#93c5fd] 
      transition-colors truncate"
            >
              {hovered
                ? "VIEW_PROFESSIONAL_GRAPH.EXE"
                : "Explore Case Studies & Articles"}
            </p>
          </div>
        </a>
      </div>

      {/* Bottom Section: Meta Data */}
      <div className="relative z-10 flex items-end justify-between border-t border-black/5 dark:border-white/5 pt-4">
        <div>
          <p className=" text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-1">
            UI Design Specialist
          </p>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Darshan<span className="text-[#1769FF]">.</span>M
          </h3>
        </div>

        {/* Animated Icon replacement */}
        <AnimatedIconButton href="/portfolio" />
      </div>

      {/* Subtle Scanline Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </BentoCard>
  );
}

// ─── Behance Card ─────────────────────────────────────────────────────────────
function BehanceCard() {
  const [hovered, setHovered] = useState(false);

  return (
    <BentoCard
      className="group relative col-span-1 flex flex-col justify-between overflow-hidden border border-white/5 bg-[#0a0a0a] p-5 transition-all duration-500 sm:p-6"
      delay={0.18}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Decorative HUD corners */}
      <div className="absolute top-0 left-0 h-2 w-2 border-t border-l border-white/20 transition-colors group-hover:border-[#1769FF]" />
      <div className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-white/20 transition-colors group-hover:border-[#1769FF]" />

      {/* Top Section: Action Area */}
      <div className="relative z-10 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse bg-[#1769FF] rounded-full" />
            <span className="font-mono text-[10px] tracking-widest text-gray-400 dark:text-gray-500 uppercase">
              Visual Archive
            </span>
          </div>
          <div className="font-mono text-[10px] text-[#1769FF] bg-[#1769FF]/5 px-2 py-0.5 border border-[#1769FF]/20">
            {hovered ? "SYNC_SUCCESS: 100%" : "NEW PROJECTS"}
          </div>
        </div>

        {/* The Main "Button" Interface */}
        <a
          href="https://www.behance.net/darshanmakwana0896"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center gap-4 border border-black/10 dark:border-white/10 
  bg-black/5 dark:bg-white/5 
  p-4 rounded-2xl 
  transition-all duration-300 
  group-hover:bg-[#1769FF]/10 group-hover:border-[#1769FF]/30"
        >
          {/* Icon */}
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center 
    bg-zinc-200 dark:bg-zinc-800 
    transition-colors 
    group-hover:bg-[#1769FF] 
    rounded-lg"
          >
            <FontAwesomeIcon
              icon={faBehance}
              className="text-black dark:text-white group-hover:text-white h-5 w-5"
            />
          </div>

          {/* Text */}
          <div className="overflow-hidden">
            <p
              className="text-xs font-bold tracking-tight uppercase 
      text-black dark:text-white"
            >
              Behance // Showcase
            </p>

            <p
              className="text-[9px] 
      text-black/50 dark:text-white/40 
      group-hover:text-[#1769FF] dark:group-hover:text-[#93c5fd] 
      transition-colors truncate"
            >
              {hovered
                ? "FETCHING_PORTFOLIO_DATA.EXE"
                : "View full UI/UX Case Studies"}
            </p>
          </div>
        </a>
      </div>

      {/* Bottom Section: Meta Data */}
      <div className="relative z-10 flex items-end justify-between border-t border-black/5 dark:border-white/5 pt-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 dark:text-gray-500 mb-1">
            Visual Storyteller
          </p>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Portfolio<span className="text-[#1769FF]">.</span>UI
          </h3>
        </div>

        {/* Animated Icon replacement */}
        <AnimatedIconButton href="https://www.behance.net/darshanmakwana0896" />
      </div>

      {/* Subtle Scanline Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </BentoCard>
  );
}

// ─── Tech Stack Card ─────────────────────────────────────────────────────────
function TechStackCard() {
  const [hovered, setHovered] = useState(false);
  const [animate, setAnimate] = useState(false);

  // Your core stack
  const tools = [
    { name: "Figma", level: "95%", color: "#F24E1E" },
    { name: "Photoshop", level: "95%", color: "#31A8FF" },
    { name: "Javascript", level: "80%", color: "#F7DF1E" },
    { name: "Tailwind", level: "90%", color: "#38BDF8" },
  ];

  // Animate on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BentoCard
      className="group relative col-span-1 flex flex-col justify-between overflow-hidden border border-white/5 bg-[#0a0a0a] p-5 transition-all duration-500 hover:border-[#C7D2FE]/30 sm:p-6"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* HUD corners */}
      <div className="absolute top-0 left-0 h-2 w-2 border-t border-l border-white/20 group-hover:border-[#C7D2FE]" />
      <div className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-white/20 group-hover:border-[#C7D2FE]" />

      {/* Header */}
      <div className="relative z-10 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="h-1.5 w-1.5 animate-pulse bg-[#C7D2FE] rounded-full" />
          <span className="font-mono text-[10px] tracking-widest text-gray-400 dark:text-gray-500 uppercase">
            System_Core
          </span>
        </div>

        {/* Stack */}
        <div className="space-y-3">
          {tools.map((tool, index) => (
            <div key={tool.name}>
              {/* Label */}
              <div className="flex justify-between items-end mb-1">
                <span
                  className="font-mono text-[10px] transition-colors"
                  style={{
                    color: hovered ? tool.color : "rgba(255,255,255,0.6)",
                  }}
                >
                  {tool.name}
                </span>

                <span className="font-mono text-[9px] text-white/40">
                  {tool.level}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-0.5 w-full bg-white/5 overflow-hidden relative">
                <div
                  className="h-full origin-left transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] relative overflow-hidden"
                  style={{
                    transform: animate
                      ? `scaleX(${parseInt(tool.level) / 100})`
                      : "scaleX(0)",
                    transitionDelay: `${index * 120}ms`,
                  }}
                >
                  {/* Gradient Flow Layer */}
                  <div
                    className="absolute inset-0 animate-liquid"
                    style={{
                      background: `linear-gradient(
          90deg,
          ${tool.color},
          ${tool.color}cc,
          ${tool.color},
          ${tool.color}aa
        )`,
                      backgroundSize: "200% 100%",
                    }}
                  />

                  {/* Glow Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      boxShadow: hovered
                        ? `0 0 10px ${tool.color}, 0 0 20px ${tool.color}66`
                        : "none",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex items-end justify-between border-t border-white/5 pt-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 dark:text-gray-500 mb-1">
            Engine Room
          </p>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Mastery<span className="text-[#C7D2FE]">.</span>stack
          </h3>
        </div>

        <AnimatedIconButton href="/skills" />
      </div>

      {/* Grid BG */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Scanline */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_2px]" />
    </BentoCard>
  );
}
// ─── Stats Card ───────────────────────────────────────────────────────────────
function StatsBento() {
  return (
    <BentoCard
      className="col-span-1 sm:col-span-2 lg:col-span-2 p-6 sm:p-7 flex flex-col items-center justify-center"
      delay={0.26}
    >
      <StatsCard />
    </BentoCard>
  );
}

// ─── CTA Card ─────────────────────────────────────────────────────────────────
function CTACard() {
  return (
    <BentoCard
      className="col-span-1 sm:col-span-2 lg:col-span-2 p-6 sm:p-8 relative overflow-hidden group"
      delay={0.22}
    >
      {/* Ambient glow */}
      <div
        className="absolute -right-8 -top-8 w-40 h-40 rounded-full pointer-events-none transition-all duration-500"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col h-full justify-between gap-8">
        {/* Icon */}
        <div className="w-10 h-10 rounded-xl border border-black/8 dark:border-white/8 bg-white dark:bg-white/5 flex items-center justify-center shadow-sm">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="text-blue-500"
          >
            <path
              d="M8 9h8m-8 4h6m4-9a3 3 0 013 3v7a3 3 0 01-3 3h-4l-4 4-4-4H5a3 3 0 01-3-3V7a3 3 0 013-3h14z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Text + CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
              Available for Projects
            </p>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
              Let&apos;s Talk.
            </h3>
          </div>
          <AnimatedIconButton href="/contact" />
        </div>
      </div>
    </BentoCard>
  );
}
// ─── Article feature card (the one with title/desc/link) ──────────────────────
function ArticleFeatureCard() {
  return (
    <BentoCard
      className="col-span-1 sm:col-span-2 lg:col-span-2 p-0"
      delay={0.08}
    >
      <ArticleCard
        title="UI/UX Designer, Graphic Designer..."
        description="Let's break it down: In the world of digital design..."
        link="https://www.linkedin.com/posts/darshan-makwana-4a743514a_uidesign-uxdesign-graphicdesign-activity-7368707492282806275-WFN4"
      />
    </BentoCard>
  );
}

// ─── Services (full width) ───────────────────────────────────────────────────
function ServicesBento() {
  return (
    <BentoCard
      className="col-span-1 sm:col-span-2 lg:col-span-4 p-0"
      delay={0.3}
    >
      <ServicesOffering />
    </BentoCard>
  );
}

// ─── Main Grid ────────────────────────────────────────────────────────────────
export default function BentoGrid() {
  return (
    <section id="bento" className="w-full py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="h-px flex-1 bg-black/5 dark:bg-white/5" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300 dark:text-gray-600">
            Overview
          </span>
          <div className="h-px flex-1 bg-black/5 dark:bg-white/5" />
        </div>

        {/*
          Responsive grid strategy:
          - mobile  (1 col):  everything stacks
          - tablet  (2 cols): pairs of cards
          - desktop (4 cols): full bento layout
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Row 1: Profile (2×2) + RecentWork (2×1) + Article (2×1) */}
          <ProfileCard />
          <RecentWorkBento />
          <ArticleFeatureCard />

          {/* Row 2 (desktop): Projects + LinkedIn + Behance + CTA */}
          <ProjectsCard />
          <LinkedInCard />
          <BehanceCard />
          <TechStackCard />
          <CTACard />

          {/* Row 3: Stats + Services */}
          <StatsBento />
          {/* <ServicesBento /> */}
        </div>
      </div>
    </section>
  );
}
