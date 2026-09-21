"use client";

import React, { useState } from "react";
import { TickerBar } from "@/components/TickerBar";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ModularSection } from "@/components/ModularSection";
import { PhysicsSection } from "@/components/PhysicsSection";
import { BundleSection } from "@/components/BundleSection";
import { FaqSection } from "@/components/FaqSection";
import { TrialBanner } from "@/components/TrialBanner";
import { Footer } from "@/components/Footer";
import { SleepQuizModal } from "@/components/SleepQuizModal";
import { TrialModal } from "@/components/TrialModal";
import { ManifestoModal } from "@/components/ManifestoModal";

export default function Home() {
  const [quizOpen, setQuizOpen] = useState(false);
  const [trialOpen, setTrialOpen] = useState(false);
  const [manifestoOpen, setManifestoOpen] = useState(false);
  const [recommendedModel, setRecommendedModel] = useState<string | undefined>(undefined);

  const handleRecommendation = (rec: string) => {
    setRecommendedModel(rec);
    setTrialOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F6F5F2] text-black font-sans antialiased selection:bg-block-lime flex flex-col">
      {/* TOP TICKER BAR: FigJam Style */}
      <TickerBar onOpenManifesto={() => setManifestoOpen(true)} />

      {/* MAIN FIGMA MONOCHROMATIC NAV */}
      <Navbar
        onOpenQuiz={() => setQuizOpen(true)}
        onOpenTrial={() => setTrialOpen(true)}
      />

      {/* MAIN CONTENT WRAPPER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8 flex-1 w-full">
        {/* HERO BANNER: BLOCK-CREAM (#FFFCE1) CANVAS */}
        <HeroSection onOpenTrial={() => setTrialOpen(true)} />

        {/* FEATURE SECTION: BLOCK-MINT (#CEF2E2) - Modular sleep, engineered for two */}
        <ModularSection />

        {/* DEEP NAVY STORY BLOCK: #1E1E2F - The Physics of Zero Gravity */}
        <PhysicsSection />

        {/* SIGNATURE BLOCK-CORAL: #FF8B77 - Promotional Bedding Bundle ($400 value) */}
        <BundleSection onClaimBundle={() => setTrialOpen(true)} />

        {/* SIGNATURE BLOCK-LIME: #D4FF59 - Specs, Shipping & 100-Night Trial FAQ */}
        <FaqSection />

        {/* CALLOUT BANNER: 100-NIGHT GUARANTEE (TRIAL ANCHOR) */}
        <TrialBanner
          onOpenTrial={() => setTrialOpen(true)}
          onOpenQuiz={() => setQuizOpen(true)}
        />
      </main>

      {/* MONOCHROME WHITE CANVAS FOOTER with Giant ISHRATAHIR Display Wordmark */}
      <Footer />

      {/* INTERACTIVE MODALS */}
      <SleepQuizModal
        isOpen={quizOpen}
        onClose={() => setQuizOpen(false)}
        onSelectRecommendation={handleRecommendation}
      />

      <TrialModal
        isOpen={trialOpen}
        onClose={() => setTrialOpen(false)}
        initialModel={recommendedModel}
      />

      <ManifestoModal
        isOpen={manifestoOpen}
        onClose={() => setManifestoOpen(false)}
      />
    </div>
  );
}
