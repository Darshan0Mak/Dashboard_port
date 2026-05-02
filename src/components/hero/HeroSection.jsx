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
        <div style={line(0.05)} className="mb-7">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            {/* Pulsing green availability dot */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">
              Senior UX / UI Designer · Available for work
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
          <p
            className="mb-2 max-w-2xl text-base sm:text-[1.05rem] leading-relaxed text-white/42"
            style={line(0.4)}
          >
            <strong className="text-white/65 font-medium">6+ years</strong>{" "}
            designing user-centered digital products for startups and scaling
            brands. Specialized in{" "}
            <strong className="text-white/65 font-medium">
              SaaS and web apps
            </strong>
            , with expertise in AI-powered UX research, prototyping, and modern
            design systems.
          </p>

          {/* CTA group */}
          <div className="flex items-center gap-3 mb-4" style={line(0.5)}>
            {/* PRIMARY — gradient filled, glowing on hover */}
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
                boxShadow: "0 0 0 0 rgba(99,102,241,0)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(99,102,241,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 0 0 0 rgba(99,102,241,0)";
              }}
            >
              View Work
              {/* Arrow in a small pill — moves on hover */}
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
            </Link>

            {/* SECONDARY — ghost, clearly lighter */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/12 bg-white/4 text-sm font-medium text-white/55 hover:border-white/25 hover:text-white/80 hover:bg-white/7 transition-all duration-200"
            >
              Let&apos;s Talk
            </Link>
          </div>
          <div
            className="flex flex-wrap items-center justify-center gap-5 pt-7 w-full max-w-xl"
            style={{
              borderTop: "0.5px solid rgba(255,255,255,0.08)",
              ...line(0.6),
            }}
          >
            {/* Client avatars */}
            <div className="flex items-center gap-3">
              <div className="flex">
                {["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b"].map((bg, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-[#0a0a0f] flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ background: bg, marginLeft: i === 0 ? 0 : "-8px" }}
                  >
                    {["M", "R", "S", "K"][i]}
                  </div>
                ))}
              </div>
              <span className="text-xs text-white/38 leading-tight">
                <span className="text-white/60 font-semibold">
                  20+ happy clients
                </span>
                <br />
                across Fintech, EdTech & SaaS
              </span>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-6 bg-white/10" />

            {/* Stat — conversion lift */}
            <div className="text-center">
              <div className="text-base font-bold text-white">28%</div>
              <div className="text-[10px] text-white/35 uppercase tracking-wide">
                avg. lift
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-6 bg-white/10" />

            {/* Stat — products shipped */}
            <div className="text-center">
              <div className="text-base font-bold text-white">50+</div>
              <div className="text-[10px] text-white/35 uppercase tracking-wide">
                products shipped
              </div>
            </div>
          </div>
        </div>
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
