"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    // blink cursor
    const blink = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => {
      clearTimeout(t);
      clearInterval(blink);
    };
  }, []);

  const line = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(32px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  });

  return (
    <section
      className="relative w-full h-screen flex items-center overflow-hidden "
      id="hero"
    >
      {/* ── Fine grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Ambient glow ── */}
      <div
        className="absolute top-0 right-0 w-150 h-150 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(59,130,246,0.07) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-100 h-100 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 80%, rgba(99,102,241,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        {/* ── Eyebrow ── */}
        <div
          style={line(0.1)}
          className="mb-6 sm:mb-8 flex items-center gap-3 mx-auto justify-center"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/8 dark:border-white/10 bg-white/60 dark:bg-white/4 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400">
              Senior UX / UI Designer
            </span>
          </div>
        </div>

        {/* ── Main heading ── */}
        <div className="mb-8 sm:mb-10 text-center">
          <h1
            className="font-heading font-bold uppercase leading-[0.9] tracking-tight text-gray-900 dark:text-white "
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
          >
            Designing Products
          </h1>

          <h1
            className="font-heading font-bold uppercase leading-[0.9] tracking-tight "
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              backgroundImage: "linear-gradient(135deg, #3b82f6, #6366f1)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            That Feel Effortless.
          </h1>
        </div>

        {/* ── Bottom row ── */}
        <div
          style={line(0.52)}
          className="flex flex-col items-center gap-8 max-w-7xl mx-auto px-6 sm:px-8"
        >
          {/* Description */}
          <div className="max-w-2xl text-center">
            <p className="text-base sm:text-lg text-gray-500 dark:text-[#C7D2FE] leading-relaxed">
              6+ years designing user-centered digital products for startups and
              scaling brands. Specialized in SaaS and web apps, with expertise
              in AI-powered UX research, prototyping, and modern design systems.
            </p>
          </div>

          {/* CTA group */}
          <div className="flex items-center gap-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-bold hover:opacity-80 transition-opacity"
            >
              View Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2.5 7h9M7 2.5l4.5 4.5L7 11.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-black/10 dark:border-white/10 text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>

        {/* ── Scroll indicator ── */}
        {/* <div style={line(0.65)} className="mt-16 sm:mt-20">
          <a
            href="#bento"
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-300 dark:text-gray-600 hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
          >
            <div className="w-4 h-7 border border-current rounded-full flex justify-center relative overflow-hidden">
              <span
                className="w-0.5 h-1.5 bg-current rounded-full absolute top-1.5"
                style={{ animation: "scrollDot 1.5s ease-in-out infinite" }}
              />
            </div>
            Scroll
          </a>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes scrollDot {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
