"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import projects from "@/app/Data/projects";
import { trackEvent } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────
   Showcase Banner Slider — Hero
   - Slides: projects marked `featured: true` first, topped up from
     the rest of the list, max 3.
   - Autoplay is driven by the progress bar's CSS animation, so the
     bar and the slide change can never drift apart.
   - Pauses on hover, keyboard focus, hidden tab and
     prefers-reduced-motion. Swipe on touch, ←/→ on keyboard.
   - Entrance animations are CSS (see hero-animations.css), so the
     server HTML is visible before JS loads.
   ───────────────────────────────────────────────────────────── */

const SLIDE_DURATION = 5000; // ms

// Banner માં બતાવવાના projects — જે ક્રમમાં લખશો એ જ ક્રમમાં દેખાશે.
// ID = portfolio URL નો છેલ્લો ભાગ (/portfolio/<id>)
const FEATURED_IDS = [
  "minddeft-technologies-pvt-ltd", // UI/UX
  "inboxcat", // Mobile Product Design
  "brand-identity-design", // UniCred Visual Identity
];

const SLIDES = FEATURED_IDS.map((id) =>
  projects.find((p) => p.id === id),
).filter(Boolean);

if (
  process.env.NODE_ENV !== "production" &&
  SLIDES.length !== FEATURED_IDS.length
) {
  console.warn("HeroSection: some FEATURED_IDS were not found in projects.js");
}

const pad = (n) => String(n).padStart(2, "0");

export default function HeroSection() {
  const total = SLIDES.length;
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStartX = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotion = () => setReducedMotion(mq.matches);
    const onVisibility = () => setTabHidden(document.hidden);
    onMotion();
    onVisibility();
    mq.addEventListener("change", onMotion);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      mq.removeEventListener("change", onMotion);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const isPlaying =
    total > 1 && !isHovered && !hasFocus && !tabHidden && !reducedMotion;

  const goTo = (index, method) => {
    const next = (index + total) % total;
    setActive(next);
    trackEvent("hero_slider_nav", {
      event_category: "engagement",
      method, // "arrow" | "dot" | "swipe" | "keyboard"
      slide_index: next + 1,
      project_id: SLIDES[next]?.id,
    });
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(active + 1, "keyboard");
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(active - 1, "keyboard");
    }
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) > 50) goTo(active + (dx < 0 ? 1 : -1), "swipe");
  };

  const onBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setHasFocus(false);
  };

  const trackCta = (label, destination) =>
    trackEvent("cta_click", {
      event_category: "engagement",
      event_label: label,
      destination,
    });

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-white pb-16 pt-28 sm:pb-20 sm:pt-32 dark:bg-[#0a0a0f]"
    >
      {/* ── Background ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-40 dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(120,120,120,0.22) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute -top-64 left-1/2 h-[36rem] w-[70rem] -translate-x-1/2 rounded-full opacity-60 dark:opacity-100"
          style={{
            background:
              "radial-gradient(closest-side, rgba(99,102,241,0.22), transparent)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* ── Eyebrow badge ── */}
        <div
          className="hero-rise mb-5 sm:mb-6"
          style={{ animationDelay: "0.05s" }}
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-black/[0.04] px-4 py-1.5 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/[0.05]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-medium tracking-wide text-zinc-700 dark:text-zinc-300">
              Senior UI/UX &amp; Product Designer · Available for projects
            </span>
          </div>
        </div>

        {/* ── Heading ── */}
        <h1
          className="hero-rise mb-4 max-w-4xl text-center text-4xl font-extrabold leading-[1.08] tracking-tighter text-zinc-900 sm:mb-5 sm:text-5xl lg:text-[54px] dark:text-white"
          style={{ animationDelay: "0.12s" }}
        >
          Senior UI/UX Designer crafting products that feel{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-300 dark:to-indigo-400">
            effortless.
          </span>
        </h1>

        {/* ── Subtitle ── */}
        <p
          className="hero-rise mb-7 max-w-2xl text-center text-base leading-relaxed text-zinc-600 sm:mb-8 sm:text-lg dark:text-zinc-400"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="font-semibold text-zinc-900 dark:text-zinc-200">
            6+ years
          </span>{" "}
          designing design systems, high-converting SaaS interfaces and
          user-centered web apps.
        </p>

        {/* ── CTAs ── */}
        <div
          className="hero-rise mb-10 flex flex-wrap items-center justify-center gap-3 sm:mb-12 sm:gap-4"
          style={{ animationDelay: "0.28s" }}
        >
          <Link
            href="/portfolio"
            onClick={() => trackCta("Hero View Selected Work", "/portfolio")}
            className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:from-blue-500 hover:to-indigo-500 hover:shadow-indigo-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 motion-reduce:transition-none dark:shadow-indigo-500/15 dark:focus-visible:ring-offset-[#0a0a0f]"
          >
            View Selected Work
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
          <Link
            href="/resume"
            onClick={() => trackCta("Hero View Resume", "/resume")}
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-zinc-800 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 motion-reduce:transition-none dark:border-white/15 dark:bg-white/[0.04] dark:text-zinc-200 dark:hover:border-white/25 dark:hover:bg-white/[0.09] dark:focus-visible:ring-offset-[#0a0a0f]"
          >
            View Resume
          </Link>
        </div>

        {/* ── Showcase banner slider ── */}
        {total > 0 && (
          <div
            className="hero-rise relative w-full"
            style={{ animationDelay: "0.38s" }}
          >
            <div
              role="region"
              aria-roledescription="carousel"
              aria-label="Featured case studies"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onFocus={() => setHasFocus(true)}
              onBlur={onBlur}
              onKeyDown={onKeyDown}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              className="relative h-[520px] w-full overflow-hidden rounded-3xl border border-black/10 bg-[#0b0d14] shadow-2xl shadow-black/10 sm:h-[500px] lg:h-[440px] lg:rounded-[28px] dark:border-white/10 dark:shadow-black/50"
            >
              {SLIDES.map((project, idx) => {
                const isActive = idx === active;
                return (
                  <div
                    key={project.id}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${idx + 1} of ${total}: ${project.title}`}
                    aria-hidden={!isActive}
                    className={`absolute inset-0 transition-opacity duration-700 ease-out motion-reduce:transition-none ${
                      isActive
                        ? "z-10 opacity-100"
                        : "pointer-events-none z-0 opacity-0"
                    }`}
                  >
                    {/* Image — top 55% on mobile, full banner on desktop */}
                    <div className="absolute inset-x-0 top-0 h-[55%] overflow-hidden lg:h-full">
                      <Image
                        src={project.thumbnail}
                        alt={`${project.title} — ${project.category} case study`}
                        fill
                        priority={idx === 0}
                        sizes="(max-width: 1280px) 100vw, 1280px"
                        className={`object-cover transition-transform ease-out motion-reduce:transition-none ${
                          isActive
                            ? "scale-100 duration-6000ms"
                            : "scale-110 duration-700"
                        }`}
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#0b0d14] via-[#0b0d14]/20 to-transparent lg:bg-gradient-to-r lg:from-[#0b0d14]/95 lg:via-[#0b0d14]/60 lg:to-transparent" />
                    </div>

                    {/* Text */}
                    <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 pb-8 sm:p-8 lg:inset-y-0 lg:right-auto lg:w-[560px] lg:justify-center lg:p-12">
                      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-indigo-300">
                        Featured case study · {pad(idx + 1)}
                        {project.category && (
                          <span className="text-zinc-400">
                            {" "}
                            · {project.category}
                          </span>
                        )}
                      </span>
                      <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                        {project.title}
                      </h2>
                      {project.shortDescription && (
                        <p className="line-clamp-2 text-sm leading-relaxed text-zinc-300 sm:text-[15px] lg:line-clamp-3">
                          {project.shortDescription}
                        </p>
                      )}
                      <Link
                        href={`/portfolio/${project.id}`}
                        tabIndex={isActive ? 0 : -1}
                        onClick={() =>
                          trackEvent("view_project_click", {
                            project_id: project.id,
                            project_name: project.title,
                            category: project.category,
                            location: "Hero Banner Slider",
                            slide_index: idx + 1,
                          })
                        }
                        className="mt-2 inline-flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-zinc-950 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0d14] motion-reduce:transition-none"
                      >
                        Read case study <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                );
              })}

              {/* Controls — top-right on mobile, bottom-right on desktop */}
              {total > 1 && (
                <div className="absolute right-3 top-3 z-20 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 backdrop-blur-md sm:right-5 sm:top-5 lg:bottom-6 lg:right-7 lg:top-auto lg:gap-4 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
                  <div className="flex items-center gap-1.5">
                    {SLIDES.map((project, idx) => (
                      <button
                        key={project.id}
                        type="button"
                        onClick={() => goTo(idx, "dot")}
                        aria-label={`Show ${project.title}`}
                        aria-current={idx === active ? "true" : undefined}
                        className="group flex h-8 w-9 items-center focus-visible:outline-none sm:w-12"
                      >
                        <span className="relative block h-1 w-full overflow-hidden rounded-full bg-white/25 group-focus-visible:ring-2 group-focus-visible:ring-indigo-400">
                          {idx === active && (
                            <span
                              key={active}
                              onAnimationEnd={() =>
                                setActive((a) => (a + 1) % total)
                              }
                              className="absolute inset-0 origin-left rounded-full bg-white"
                              style={{
                                animation: reducedMotion
                                  ? "none"
                                  : `hero-progress ${SLIDE_DURATION}ms linear forwards`,
                                animationPlayState: isPlaying
                                  ? "running"
                                  : "paused",
                              }}
                            />
                          )}
                        </span>
                      </button>
                    ))}
                  </div>
                  <div className="hidden items-center gap-2 sm:flex">
                    <button
                      type="button"
                      onClick={() => goTo(active - 1, "arrow")}
                      aria-label="Previous case study"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 motion-reduce:transition-none"
                    >
                      <svg
                        aria-hidden="true"
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M10 3L5 8L10 13"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={() => goTo(active + 1, "arrow")}
                      aria-label="Next case study"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 motion-reduce:transition-none"
                    >
                      <svg
                        aria-hidden="true"
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M6 3L11 8L6 13"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {/* Screen-reader announcement (silent while autoplaying) */}
              <p className="sr-only" aria-live={isPlaying ? "off" : "polite"}>
                Slide {active + 1} of {total}: {SLIDES[active]?.title}
              </p>
            </div>

            {/* ── Below the banner: all projects + metrics ── */}
            {/* <div className="mt-6 flex flex-col items-center justify-between gap-5 px-1 sm:flex-row">
              <Link
                href="/portfolio"
                onClick={() => trackCta("Hero See All Projects", "/portfolio")}
                className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
              >
                See all {projects.length} projects{" "}
                <span aria-hidden="true">→</span>
              </Link>
              <dl className="flex items-center gap-6 sm:gap-10">
                {[
                  { value: "6+", label: "Years exp" },
                  { value: "50+", label: "Products shipped" },
                  { value: "20+", label: "Happy clients" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="flex flex-col-reverse items-center sm:items-start"
                  >
                    <dt className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                      {m.label}
                    </dt>
                    <dd className="text-xl font-bold text-zinc-900 sm:text-2xl dark:text-white">
                      {m.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div> */}
          </div>
        )}
      </div>
    </section>
  );
}
