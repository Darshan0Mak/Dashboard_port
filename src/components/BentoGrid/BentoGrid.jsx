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
              className="flex items-center justify-between px-6 py-4 rounded-2xl dark:bg-white/10 bg-black/10 text-gray text-sm font-bold transition-all hover:bg-[#3b82f6] hover:dark:bg-[#3b82f6] hover:text-white group"
            >
              View Work
              <svg
                width="16"
                height="16"
                viewBox="0 0 14 14"
                fill="none"
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
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
          <div className="font-mono text-[10px] text-[#1769FF] bg-[#1769FF]/5 px-2 py-0.5 border border-[#1769FF]/20">
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
  const tools = [
    {
      name: "Figma",
      category: "UI / UX Design",
      tier: "daily",
      iconBg: "rgba(242,78,30,0.12)",
      iconBorder: "rgba(242,78,30,0.22)",
      icon: (
        <svg viewBox="0 0 38 57" className="w-3.5 h-3.5" fill="none">
          <path
            d="M19 28.5C19 25.6 20.1 22.9 22.1 20.9C24.1 18.9 26.8 17.8 29.7 17.8C32.6 17.8 35.3 18.9 37.3 20.9C39.3 22.9 40.4 25.6 40.4 28.5C40.4 31.4 39.3 34.1 37.3 36.1C35.3 38.1 32.6 39.2 29.7 39.2C26.8 39.2 24.1 38.1 22.1 36.1C20.1 34.1 19 31.4 19 28.5Z"
            fill="#1ABCFE"
          />
          <path
            d="M-2.4 47.2C-2.4 44.3-1.3 41.6 0.7 39.6C2.7 37.6 5.4 36.5 8.3 36.5H19V47.2C19 50.1 17.9 52.8 15.9 54.8C13.9 56.8 11.2 57.9 8.3 57.9C5.4 57.9 2.7 56.8 0.7 54.8C-1.3 52.8-2.4 50.1-2.4 47.2Z"
            fill="#0ACF83"
          />
          <path
            d="M19 0V17.8H29.7C32.6 17.8 35.3 16.7 37.3 14.7C39.3 12.7 40.4 10 40.4 7.1C40.4 4.2 39.3 1.5 37.3-0.5C35.3-2.5 32.6-3.6 29.7-3.6L19 0Z"
            fill="#FF7262"
          />
          <path
            d="M-2.4 7.1C-2.4 10-1.3 12.7 0.7 14.7C2.7 16.7 5.4 17.8 8.3 17.8H19V-3.6H8.3C5.4-3.6 2.7-2.5 0.7-0.5C-1.3 1.5-2.4 4.2-2.4 7.1Z"
            fill="#F24E1E"
          />
          <path
            d="M-2.4 28.5C-2.4 31.4-1.3 34.1 0.7 36.1C2.7 38.1 5.4 39.2 8.3 39.2H19V17.8H8.3C5.4 17.8 2.7 18.9 0.7 20.9C-1.3 22.9-2.4 25.6-2.4 28.5Z"
            fill="#A259FF"
          />
        </svg>
      ),
    },
    {
      name: "Photoshop",
      category: "Image Editing",
      tier: "daily",
      iconBg: "rgba(49,168,255,0.1)",
      iconBorder: "rgba(49,168,255,0.22)",
      icon: (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="#31A8FF">
          <circle cx="12" cy="12" r="10" />
          <rect x="9" y="8" width="2" height="8" fill="#0a0a0a" />
          <rect x="13" y="8" width="2" height="8" fill="#0a0a0a" />
        </svg>
      ),
    },
    {
      name: "JavaScript",
      category: "Frontend Dev",
      tier: "proficient",
      iconBg: "rgba(247,223,30,0.1)",
      iconBorder: "rgba(247,223,30,0.25)",
      icon: (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
          <rect width="24" height="24" rx="3" fill="#F7DF1E" />
          <path
            d="M6 17.5c.4.7.9 1.2 1.9 1.2 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.7-1.6l-.6-.2c-1.6-.7-2.7-1.6-2.7-3.4 0-1.7 1.3-3 3.3-3 1.4 0 2.4.5 3.1 1.8l-1.7 1.1c-.4-.7-.8-1-1.4-1-.6 0-1 .4-1 1 0 .7.4 1 1.4 1.4l.6.3c1.9.8 3 1.7 3 3.5 0 2-1.6 3.2-3.7 3.2-2.1 0-3.4-1-4.1-2.3L6 17.5zm8.5.2c.3.5.6.9 1.2.9.6 0 .9-.2.9-1.1V11h2.1v6.6c0 1.9-1.1 2.7-2.7 2.7-1.4 0-2.3-.7-2.7-1.6l1.2-1z"
            fill="#323330"
          />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      category: "CSS Framework",
      tier: "daily",
      iconBg: "rgba(56,189,248,0.1)",
      iconBorder: "rgba(56,189,248,0.25)",
      icon: (
        <svg viewBox="0 0 24 24" fill="#38BDF8" className="w-3.5 h-3.5">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      ),
    },
  ];

  const tierStyles = {
    daily: "bg-[#1769FF]/10 border-[#1769FF]/30 text-[#7EB3FF]",
    proficient: "bg-[#C7D2FE]/[0.05] border-[#C7D2FE]/20 text-[#C7D2FE]/65",
  };

  return (
    <BentoCard className="group relative col-span-1 flex flex-col justify-between overflow-hidden border border-white/5 bg-[#0a0a0a] p-5 transition-all duration-500 hover:border-[#C7D2FE]/30 sm:p-6">
      {/* HUD corners */}
      <div className="absolute top-0 left-0 h-2 w-2 border-t border-l border-white/20 group-hover:border-[#C7D2FE]" />
      <div className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-white/20 group-hover:border-[#C7D2FE]" />

      {/* Header */}
      <div className="relative z-10 mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="h-1.5 w-1.5 animate-pulse bg-[#C7D2FE] rounded-full" />
          <span className="font-mono text-[10px] tracking-widest text-gray-400 dark:text-gray-500 uppercase">
            System_Core
          </span>
        </div>

        {/* Tool rows */}
        <div className="divide-y divide-gray-200 dark:divide-white/10">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-2.5 py-2 first:pt-0 last:pb-0"
            >
              {/* Icon */}
              <div
                className="w-6.5 h-6.5 rounded-md flex items-center justify-center shrink-0"
                style={{
                  background: tool.iconBg,
                  border: `0.5px solid ${tool.iconBorder}`,
                }}
              >
                {tool.icon}
              </div>

              {/* Name + category */}
              <div className="flex-1 min-w-0">
                <p className="font-mono text-[11px] font-bold text-gray-900 dark:text-white leading-none">
                  {tool.name}
                </p>
                <p className="font-mono text-[8px] text-gray-500 dark:text-white/30 uppercase tracking-widest mt-0.5">
                  {tool.category}
                </p>
              </div>

              {/* Tier badge */}
              <span
                className={`font-mono text-[8px] px-2 py-0.5 rounded-full border uppercase tracking-wider shrink-0
        ${
          tool.tier === "daily"
            ? "border-green-500/30 text-green-600 dark:text-green-400"
            : "border-blue-500/30 text-blue-600 dark:text-blue-400"
        }`}
              >
                {tool.tier === "daily" ? "Daily" : "Proficient"}
              </span>
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
            Mastery<span className="text-[#1769FF]">.</span>stack
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
