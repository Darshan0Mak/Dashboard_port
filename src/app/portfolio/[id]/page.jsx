"use client";
import projects from "@/app/Data/projects";
import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import UIUXHeroBanner from "@/components/Project/UI-UX Design/UIUXHeroBanner";
import AppDesignHero from "@/components/Project/App Interface/AppDesignHero";
import VisualDesignHero from "@/components/Project/Visual Design/VisualDesignHero";
import BrandHero from "@/components/Project/Brand Identity/BrandHero";
import ProjectStats from "@/components/Project/ProjectStats";
import VisualConcept from "@/components/Project/Visual Design/VisualConcept";
import HeroBillboard from "@/components/Project/Visual Design/HeroBillboard";
import BentoAssetGrid from "@/components/Project/Visual Design/BentoAssetGrid";
import MacroDetails from "@/components/Project/Visual Design/MacroDetails";
import ColorTypeStudy from "@/components/Project/Visual Design/ColorTypeStudy";
import MotionReel from "@/components/Project/Visual Design/MotionReel";
import FloatingNav from "@/components/Project/FloatingNav";
import LogoGrid from "@/components/Project/Brand Identity/LogoGrid";
import LogoSuite from "@/components/Project/Brand Identity/LogoSuite";
import StationaryMockups from "@/components/Project/Brand Identity/StationaryMockups";
import BrandPatterns from "@/components/Project/Brand Identity/BrandPatterns";
import DigitalPresence from "@/components/Project/Brand Identity/DigitalPresence";
import BrandManualSnippet from "@/components/Project/Brand Identity/BrandManualSnippet";
import ProjectOverview from "@/components/Project/UI-UX Design/ProjectOverview";
import UserFlow from "@/components/Project/UI-UX Design/UserFlow";
import UIUXStyleGuide from "@/components/Project/UI-UX Design/UIUXStyleGuide";
import DesignSolution from "@/components/Project/UI-UX Design/DesignSolution";
import InteractivePrototype from "@/components/Project/UI-UX Design/InteractivePrototype";
import KeyLearnings from "@/components/Project/UI-UX Design/KeyLearnings";
import CoreFeatureWalkthrough from "@/components/Project/App Interface/CoreFeatureWalkthrough";
import ThemeComparison from "@/components/Project/App Interface/ThemeComparison";
import MicroInteractions from "@/components/Project/App Interface/MicroInteractions";
import ComponentLibrary from "@/components/Project/App Interface/ComponentLibrary";
import AppStorePreview from "@/components/Project/App Interface/AppStorePreview";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;

  const yOffset = -50; // adjust based on your UI
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};

export default function ProjectDetail({ params }) {
  const { id } = React.use(params);
  const project = projects.find((p) => p.id === id);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Scroll to top when project changes
    scrollToSection(activeSection);
  }, [activeSection]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0C0C0F] flex items-center justify-center">
        <h2 className="text-2xl font-bold text-white">Project not found</h2>
      </div>
    );
  }

  function renderHeroBanner() {
    if (project.category === "UI / UX Design") {
      return <UIUXHeroBanner project={project} />;
    } else if (project.category === "Visual Design") {
      return <VisualDesignHero project={project} />;
    } else if (project.category === "App Interfaces") {
      return <AppDesignHero project={project} />;
    } else if (project.category === "Brand Identity") {
      return <BrandHero project={project} />;
    } else {
      return null;
    }
  }

  function renderSection1() {
    if (project.category === "UI / UX Design") {
      return <ProjectOverview project={project} />;
    } else if (project.category === "Visual Design") {
      return <VisualConcept project={project} />;
    } else if (project.category === "App Interfaces") {
      return <CoreFeatureWalkthrough project={project} />;
    } else if (project.category === "Brand Identity") {
      return <LogoGrid project={project} />;
    } else {
      return null;
    }
  }
  function renderSection2() {
    if (project.category === "UI / UX Design") {
      return <UserFlow project={project} />;
    } else if (project.category === "Visual Design") {
      return <HeroBillboard project={project} />;
    } else if (project.category === "App Interfaces") {
      return <ThemeComparison project={project} />;
    } else if (project.category === "Brand Identity") {
      return <LogoSuite project={project} />;
    } else {
      return null;
    }
  }
  function renderSection3() {
    if (project.category === "UI / UX Design") {
      return <UIUXStyleGuide project={project} />;
    } else if (project.category === "Visual Design") {
      return <BentoAssetGrid project={project} />;
    } else if (project.category === "App Interfaces") {
      return <MicroInteractions project={project} />;
    } else if (project.category === "Brand Identity") {
      return <StationaryMockups project={project} />;
    } else {
      return null;
    }
  }
  function renderSection4() {
    if (project.category === "UI / UX Design") {
      return <DesignSolution project={project} />;
    } else if (project.category === "Visual Design") {
      return <MacroDetails project={project} />;
    } else if (project.category === "App Interfaces") {
      return <ComponentLibrary project={project} />;
    } else if (project.category === "Brand Identity") {
      return <BrandPatterns project={project} />;
    } else {
      return null;
    }
  }
  function renderSection5() {
    if (project.category === "UI / UX Design") {
      return <InteractivePrototype project={project} />;
    } else if (project.category === "Visual Design") {
      return <ColorTypeStudy project={project} />;
    } else if (project.category === "App Interfaces") {
      return <AppStorePreview project={project} />;
    } else if (project.category === "Brand Identity") {
      return <DigitalPresence project={project} />;
    } else {
      return null;
    }
  }
  function renderSection6() {
    if (project.category === "UI / UX Design") {
      return <KeyLearnings project={project} />;
    } else if (project.category === "Visual Design") {
      return <MotionReel project={project} />;
    } else if (project.category === "App Interfaces") {
      return null;
    } else if (project.category === "Brand Identity") {
      return <BrandManualSnippet project={project} />;
    } else {
      return null;
    }
  }

  return (
    <div className="dark:bg-[#0C0C0F] bg-white text-white min-h-screen overflow-x-hidden pb-32">
      {/* ===== HERO ===== */}
      {renderHeroBanner()}
      {/* ===== BANNER ===== */}
      {/* {project.banner && (
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
      )} */}
      {/* ===== STATS ROW ===== */}
      <ProjectStats project={project} />
      {/* Section 1: Overview, Problem, Solution */}
      {renderSection1()}
      {renderSection2()}
      {renderSection3()}
      {renderSection4()}
      {renderSection5()}
      {renderSection6()}

      <FloatingNav project={project} setActiveSection={setActiveSection} />
    </div>
  );
}
