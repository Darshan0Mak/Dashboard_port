"use client";
import projects from "../../Data/projects";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

// --- Common Components ---
// --- Common Components ---
import ProjectStats from "../../../components/Project/ProjectStats.jsx";
import FloatingNav from "../../../components/Project/FloatingNav.jsx";

// --- App Interface Components ---
import AppDesignHero from "../../../components/Project/App-Interface/AppDesignHero.jsx";
import AppStorePreview from "../../../components/Project/App-Interface/AppStorePreview.jsx";
import ComponentLibrary from "../../../components/Project/App-Interface/ComponentLibrary.jsx";
import CoreFeatureWalkthrough from "../../../components/Project/App-Interface/CoreFeatureWalkthrough.jsx";
import MicroInteractions from "../../../components/Project/App-Interface/MicroInteractions.jsx";
import ProductArchitecture from "../../../components/Project/App-Interface/ProductArchitecture.jsx";
import ThemeComparison from "../../../components/Project/App-Interface/ThemeComparison.jsx";

// --- UI / UX Design Components ---
import UIUXHeroBanner from "../../../components/Project/UI-UX-Design/UIUXHeroBanner.jsx";
import ProjectOverview from "../../../components/Project/UI-UX-Design/ProjectOverview.jsx";
import UserFlow from "../../../components/Project/UI-UX-Design/UserFlow.jsx";
import UIUXStyleGuide from "../../../components/Project/UI-UX-Design/UIUXStyleGuide.jsx";
import DesignSolution from "../../../components/Project/UI-UX-Design/DesignSolution.jsx";
import InteractivePrototype from "../../../components/Project/UI-UX-Design/InteractivePrototype.jsx";
import KeyLearnings from "../../../components/Project/UI-UX-Design/KeyLearnings.jsx";

// --- Visual Design Components ---
import VisualDesignHero from "../../../components/Project/Visual-Design/VisualDesignHero.jsx";
import VisualConcept from "../../../components/Project/Visual-Design/VisualConcept.jsx";
import HeroBillboard from "../../../components/Project/Visual-Design/HeroBillboard.jsx";
import BentoAssetGrid from "../../../components/Project/Visual-Design/BentoAssetGrid.jsx";
import MacroDetails from "../../../components/Project/Visual-Design/MacroDetails.jsx";
import ColorTypeStudy from "../../../components/Project/Visual-Design/ColorTypeStudy.jsx";
import MotionReel from "../../../components/Project/Visual-Design/MotionReel.jsx";

// --- Brand Identity Components ---
import BrandHero from "../../../components/Project/Brand-Identity/BrandHero.jsx";
import LogoGrid from "../../../components/Project/Brand-Identity/LogoGrid.jsx";
import LogoSuite from "../../../components/Project/Brand-Identity/LogoSuite.jsx";
import StationaryMockups from "../../../components/Project/Brand-Identity/StationaryMockups.jsx";
import BrandPatterns from "../../../components/Project/Brand-Identity/BrandPatterns.jsx";
import DigitalPresence from "../../../components/Project/Brand-Identity/DigitalPresence.jsx";
import BrandManualSnippet from "../../../components/Project/Brand-Identity/BrandManualSnippet.jsx";

// --- Frontend Development Components ---
import FrontHeroBanner from "../../../components/Project/Frontend-Development/FrontendHeroBanner.jsx";
import FEProjectOverview from "../../../components/Project/Frontend-Development/FEProjectOverview.jsx";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;

  const yOffset = -50;
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};

export default function ProjectDetail({ params }) {
  const { id } = React.use(params);
  const currentIndex = projects.findIndex((p) => p.id === id);
  const project = projects[currentIndex];
  const [activeSection, setActiveSection] = useState("");

  // Next Project calculation
  const nextProject =
    currentIndex !== -1 && currentIndex + 1 < projects.length
      ? projects[currentIndex + 1]
      : projects[0];

  useEffect(() => {
    if (project && typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "case_study_read", {
        project_id: project.id,
        project_title: project.title,
        category: project.category,
      });
    }
  }, [project]);

  useEffect(() => {
    if (activeSection) {
      scrollToSection(activeSection);
    }
  }, [activeSection]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0C0C0F] flex items-center justify-center">
        <h2 className="text-2xl font-bold text-white">Project not found</h2>
      </div>
    );
  }

  function renderHeroBanner() {
    if (project.category === "UI / UX Design")
      return <UIUXHeroBanner project={project} />;
    if (project.category === "Visual Design")
      return <VisualDesignHero project={project} />;
    if (project.category === "Mobile Product Design")
      return <AppDesignHero project={project} />;
    if (project.category === "Brand Identity")
      return <BrandHero project={project} />;
    if (project.category === "Frontend Development")
      return <FrontHeroBanner project={project} />;
    return null;
  }

  function renderSection1() {
    if (project.category === "UI / UX Design")
      return <ProjectOverview project={project} />;
    if (project.category === "Visual Design")
      return <VisualConcept project={project} />;
    if (project.category === "Mobile Product Design")
      return <ProductArchitecture project={project} />;
    if (project.category === "Brand Identity")
      return <LogoGrid project={project} />;
    if (project.category === "Frontend Development")
      return <FEProjectOverview project={project} />;
    return null;
  }

  function renderSection2() {
    if (project.category === "UI / UX Design")
      return <UserFlow project={project} />;
    if (project.category === "Visual Design")
      return <HeroBillboard project={project} />;
    if (project.category === "Mobile Product Design")
      return <CoreFeatureWalkthrough project={project} />;
    if (project.category === "Brand Identity")
      return <LogoSuite project={project} />;
    return null;
  }

  function renderSection3() {
    if (project.category === "UI / UX Design")
      return <UIUXStyleGuide project={project} />;
    if (project.category === "Visual Design")
      return <BentoAssetGrid project={project} />;
    if (project.category === "Mobile Product Design")
      return <ThemeComparison project={project} />;
    if (project.category === "Brand Identity")
      return <StationaryMockups project={project} />;
    return null;
  }

  function renderSection4() {
    if (project.category === "UI / UX Design")
      return <DesignSolution project={project} />;
    if (project.category === "Visual Design")
      return <MacroDetails project={project} />;
    if (project.category === "Mobile Product Design")
      return <MicroInteractions project={project} />;
    if (project.category === "Brand Identity")
      return <BrandPatterns project={project} />;
    return null;
  }

  function renderSection5() {
    if (project.category === "UI / UX Design")
      return <InteractivePrototype project={project} />;
    if (project.category === "Visual Design")
      return <ColorTypeStudy project={project} />;
    if (project.category === "Mobile Product Design")
      return <ComponentLibrary project={project} />;
    if (project.category === "Brand Identity")
      return <DigitalPresence project={project} />;
    return null;
  }

  function renderSection6() {
    if (project.category === "UI / UX Design")
      return <KeyLearnings project={project} />;
    if (project.category === "Visual Design")
      return <MotionReel project={project} />;
    if (project.category === "Mobile Product Design")
      return <AppStorePreview project={project} />;
    if (project.category === "Brand Identity")
      return <BrandManualSnippet project={project} />;
    return null;
  }

  return (
    <div className="dark:bg-[#0C0C0F] bg-white text-zinc-900 dark:text-white min-h-screen overflow-x-hidden pb-24">
      {/* ===== HERO ===== */}
      {renderHeroBanner()}

      {/* ===== STATS ROW ===== */}
      <ProjectStats project={project} />

      {/* ===== SECTIONS ===== */}
      {renderSection1()}
      {renderSection2()}
      {renderSection3()}
      {renderSection4()}
      {renderSection5()}
      {renderSection6()}

      {/* ===== NEXT PROJECT FOOTER ===== */}
      {nextProject && (
        <section className="max-w-5xl mx-auto px-6 mt-24 pt-16 border-t border-black/10 dark:border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 rounded-3xl bg-zinc-50 dark:bg-white/[0.03] border border-black/5 dark:border-white/5">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-1">
                Next Case Study
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold">
                {nextProject.title}
              </h3>
              <p className="text-xs text-zinc-500 mt-1 font-mono">
                {nextProject.category}
              </p>
            </div>

            <Link
              href={`/portfolio/${nextProject.id}`}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <span>Explore Project</span>
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
          </div>
        </section>
      )}

      <FloatingNav project={project} setActiveSection={setActiveSection} />
    </div>
  );
}
