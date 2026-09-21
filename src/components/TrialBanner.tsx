"use client";

import React from "react";

interface TrialBannerProps {
  onOpenTrial: () => void;
  onOpenQuiz: () => void;
}

export function TrialBanner({ onOpenTrial, onOpenQuiz }: TrialBannerProps) {
  return (
    <section
      id="trial"
      className="bg-white border-2 border-black rounded-[32px] p-8 sm:p-12 text-center shadow-figma-pop scroll-mt-24"
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <span className="inline-flex items-center gap-2 bg-block-mint border border-black rounded-full px-4 py-1 text-xs font-mono font-bold uppercase tracking-widest text-black">
          Zero Risk // Pure Rest
        </span>
        <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tightest leading-tight text-black">
          Rest well tonight, <br className="hidden sm:block" />
          or return it without hassle.
        </h3>
        <p className="text-base text-black max-w-xl mx-auto leading-relaxed">
          We spend a third of our lives recharging. Give yourself the full
          100-night test run in your own sanctuary with zero restocking penalties.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={onOpenTrial}
            className="px-8 py-4 rounded-full bg-black text-white font-bold text-xs uppercase tracking-widest-pill hover:bg-neutral-800 transition shadow-figma-pop cursor-pointer"
          >
            Begin 100-Night Trial Now
          </button>
          <button
            type="button"
            onClick={onOpenQuiz}
            className="px-8 py-4 rounded-full bg-block-cream text-black border-2 border-black font-bold text-xs uppercase tracking-widest-pill hover:bg-block-lime transition shadow-figma-pop cursor-pointer"
          >
            Take Sleep Quiz
          </button>
        </div>
      </div>
    </section>
  );
}
