"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const line = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(16px)",
    transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
  });

  const trackCtaClick = (label, destination) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "cta_click", {
        event_category: "engagement",
        event_label: label,
        destination: destination,
      });
    }
  };

  const handleScrollToWorks = () => {
    trackCtaClick("Hero View Work", "#works");
    const element = document.getElementById("works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 bg-white dark:bg-[#0a0a0f]"
      id="hero"
    >
      {/* ── 1. DUAL-THEME BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(rgba(120, 120, 120, 0.22) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60rem] h-[32rem] rounded-full blur-3xl opacity-30 dark:opacity-20"
          style={{
            background:
              "conic-gradient(from 90deg at 50% 50%, #3b82f6/0, #3b82f6, #6366f1, #3b82f6, #3b82f6/0)",
          }}
        />

        <div
          className="absolute top-0 right-0 w-[48rem] h-[48rem] opacity-70 dark:opacity-100"
          style={{
            background:
              "radial-gradient(circle at 80% 20%, rgba(59,130,246,0.1) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[40rem] h-[40rem] opacity-60 dark:opacity-100"
          style={{
            background:
              "radial-gradient(circle at 20% 80%, rgba(99,102,241,0.08) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* ── 1. Eyebrow Badge (SEO Subheading) ── */}
        <div style={line(0.05)} className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.04] dark:bg-white/[0.05] backdrop-blur-md px-4 py-1.5 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-medium tracking-wide text-zinc-700 dark:text-zinc-300">
              Senior UI/UX Designer & Product Specialist · Available for
              Projects
            </span>
          </div>
        </div>

        {/* ── 2. SEO-Optimized Main Heading ── */}
        <div style={line(0.15)} className="max-w-4xl mx-auto mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-[70px] font-bold tracking-tighter text-zinc-900 dark:text-white leading-[1.1]">
            Senior UI/UX Designer crafting products that feel{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-300 dark:to-indigo-400 bg-clip-text text-transparent">
              effortless.
            </span>
          </h1>
        </div>

        {/* ── 3. Subtitle / Bio ── */}
        <div style={line(0.28)} className="max-w-2xl mx-auto mb-10 sm:mb-12">
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 font-normal">
            <span className="font-semibold text-zinc-900 dark:text-zinc-200">
              6+ years
            </span>{" "}
            specializing in design systems, high-converting SaaS interfaces, and
            user-centered web applications. Bridging intuitive design with
            measurable business outcomes.
          </p>
        </div>

        {/* ── 4. High-Conversion CTA Buttons ── */}
        <div
          style={line(0.4)}
          className="flex flex-row items-center justify-center gap-4 mb-16"
        >
          {/* Primary CTA: Smooth scrolls to BentoGrid or Portfolio */}
          <button
            type="button"
            onClick={handleScrollToWorks}
            className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-indigo-500/25 dark:shadow-indigo-500/15 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <span>View Selected Work</span>
            <span className="flex items-center justify-center w-5 h-5 rounded-md bg-white/20 transition-transform duration-200 group-hover:translate-x-0.5">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M2 5h6M5 2l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>

          {/* Secondary CTA */}
          <Link
            href="/contact"
            onClick={() => trackCtaClick("Hero Contact", "/contact")}
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] backdrop-blur-sm hover:bg-zinc-100 dark:hover:bg-white/[0.08] hover:border-zinc-400 dark:hover:border-white/20 transition-all duration-200"
          >
            Get in Touch
          </Link>
        </div>

        {/* ── 5. Visual Anchor: Interactive Design System Engine ── */}
        <div
          style={line(0.5)}
          className="w-full max-w-5xl mx-auto rounded-2xl p-2 sm:p-2.5 border border-black/10 dark:border-white/10 bg-gradient-to-b from-black/[0.02] to-black/[0.06] dark:from-white/[0.04] dark:to-white/[0.01] backdrop-blur-2xl shadow-2xl shadow-indigo-500/10 dark:shadow-indigo-950/40 group transition-all duration-500 hover:border-indigo-500/30 text-left"
        >
          <div className="relative rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-[#0b0c13] flex flex-col shadow-inner">
            {/* ── Chrome Header ── */}
            <div className="h-10 border-b border-black/5 dark:border-white/5 bg-zinc-50/80 dark:bg-[#11131c]/90 px-4 flex items-center justify-between backdrop-blur-md">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>

              <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5 text-[11px] font-mono text-zinc-600 dark:text-zinc-400">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m4.93 4.93 4.24 4.24M14.83 14.83l4.24 4.24M14.83 9.17l4.24-4.24M4.93 19.07l4.24-4.24" />
                </svg>
                <span>design-tokens.v3 / tokens.config.ts</span>
              </div>

              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>SYNCED</span>
              </div>
            </div>

            {/* ── Interactive Dashboard Body ── */}
            <div className="p-5 sm:p-7 grid grid-cols-1 lg:grid-cols-12 gap-5 relative select-none">
              <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-indigo-500/15 via-blue-500/10 to-transparent blur-3xl pointer-events-none" />

              {/* Left Sidebar */}
              <div className="hidden lg:flex lg:col-span-4 flex-col gap-3 border-r border-black/5 dark:border-white/5 pr-5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-mono">
                    Design Tokens
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/5 text-zinc-500">
                    68 active
                  </span>
                </div>

                {[
                  { name: "primary-accent", hex: "#4F46E5", tag: "Brand" },
                  { name: "surface-elevated", hex: "#11131C", tag: "UI" },
                  {
                    name: "motion-spring",
                    hex: "cubic(0.16,1)",
                    tag: "Easing",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-2.5 rounded-lg border text-xs flex items-center justify-between transition-all ${
                      idx === 0
                        ? "border-indigo-500/30 bg-indigo-50/50 dark:bg-indigo-500/10 text-indigo-900 dark:text-indigo-200"
                        : "border-black/5 dark:border-white/5 bg-zinc-50/60 dark:bg-white/[0.02] text-zinc-600 dark:text-zinc-400"
                    }`}
                  >
                    <div className="flex items-center gap-2 font-mono">
                      <span
                        className="w-3 h-3 rounded-full border border-black/10 dark:border-white/20"
                        style={{
                          backgroundColor: idx === 2 ? "#38bdf8" : item.hex,
                        }}
                      />
                      <span>{item.name}</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider opacity-60">
                      {item.tag}
                    </span>
                  </div>
                ))}

                <div className="mt-2 p-3 rounded-lg border border-black/5 dark:border-white/5 bg-zinc-50/40 dark:bg-white/[0.015]">
                  <div className="flex items-center justify-between text-[11px] mb-2 font-medium text-zinc-600 dark:text-zinc-400">
                    <span>Component Velocity</span>
                    <span className="text-emerald-500 font-mono">+24.8%</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-200 dark:bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-[78%] transition-all duration-1000" />
                  </div>
                </div>
              </div>

              {/* Right Telemetry Area */}
              <div className="col-span-12 lg:col-span-8 flex flex-col gap-4">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    {
                      label: "Auto-Layout Density",
                      val: "99.4%",
                      tag: "WCAG AAA",
                    },
                    {
                      label: "Interactive States",
                      val: "142",
                      tag: "Variants",
                    },
                    {
                      label: "Handoff Efficiency",
                      val: "0.2s",
                      tag: "Tokenized",
                    },
                  ].map((m, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl border border-black/5 dark:border-white/5 bg-zinc-50/60 dark:bg-white/[0.02] flex flex-col justify-between hover:border-indigo-500/20 transition-all"
                    >
                      <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 truncate">
                        {m.label}
                      </span>
                      <div className="mt-2 flex items-baseline justify-between">
                        <span className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white font-mono">
                          {m.val}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/5 text-zinc-500 dark:text-zinc-400">
                          {m.tag}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="relative p-5 rounded-xl border border-black/5 dark:border-white/5 bg-zinc-50/40 dark:bg-white/[0.015] flex flex-col justify-between overflow-hidden">
                  <div className="flex items-center justify-between mb-3 z-10">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                        Variant State & Interaction Curve
                      </span>
                      <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-indigo-500/10 text-indigo-500">
                        60 FPS
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400">
                      bezier(0.16, 1, 0.3, 1)
                    </span>
                  </div>

                  <div className="relative h-28 w-full flex items-center justify-center">
                    <svg
                      viewBox="0 0 500 100"
                      className="w-full h-full stroke-indigo-500 dark:stroke-indigo-400 fill-none"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id="gradientCurve"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#6366f1"
                            stopOpacity="0.25"
                          />
                          <stop
                            offset="100%"
                            stopColor="#6366f1"
                            stopOpacity="0.0"
                          />
                        </linearGradient>
                      </defs>

                      <path
                        d="M 0,80 Q 70,10 160,50 T 320,30 T 500,10 L 500,100 L 0,100 Z"
                        fill="url(#gradientCurve)"
                        className="opacity-70 dark:opacity-90"
                      />

                      <path
                        d="M 0,80 Q 70,10 160,50 T 320,30 T 500,10"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className="chart-smooth"
                      />
                    </svg>

                    <div className="absolute top-4 left-1/2 -translate-x-10 pointer-events-none flex items-start gap-1 cursor-float">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#3b82f6"
                        stroke="white"
                        strokeWidth="1.5"
                      >
                        <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                      </svg>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-blue-600 text-white font-medium shadow-md shadow-blue-500/30">
                        Darshan
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                    <span>state: hover:active</span>
                    <span>render: optimal</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-2 bg-gradient-to-t from-black/5 dark:from-black/40 to-transparent pointer-events-none" />
          </div>
        </div>

        <style jsx>{`
          .chart-smooth {
            stroke-dasharray: 600;
            stroke-dashoffset: 600;
            animation: drawPath 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          @keyframes drawPath {
            to {
              stroke-dashoffset: 0;
            }
          }
          .cursor-float {
            animation: floatCursor 4s ease-in-out infinite alternate;
          }
          @keyframes floatCursor {
            0% {
              transform: translate(-40px, 10px);
            }
            100% {
              transform: translate(20px, -8px);
            }
          }
        `}</style>

        {/* ── 6. Metrics & Social Proof ── */}
        <div
          style={line(0.6)}
          className="w-full max-w-3xl mx-auto mt-12 pt-8 border-t border-zinc-200 dark:border-white/10 flex flex-wrap items-center justify-around gap-x-8 gap-y-6 text-center"
        >
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
              6+
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium tracking-wide uppercase mt-0.5">
              Years Exp
            </div>
          </div>

          <div className="h-8 w-px bg-zinc-200 dark:bg-white/10 hidden sm:block" />

          <div>
            <div className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
              50+
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium tracking-wide uppercase mt-0.5">
              Products Shipped
            </div>
          </div>

          <div className="h-8 w-px bg-zinc-200 dark:bg-white/10 hidden sm:block" />

          <div>
            <div className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
              20+
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium tracking-wide uppercase mt-0.5">
              Happy Clients
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
