"use client";

import React, { useState } from "react";
import { X, Check } from "lucide-react";

interface SleepQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRecommendation: (rec: string) => void;
}

export function SleepQuizModal({
  isOpen,
  onClose,
  onSelectRecommendation,
}: SleepQuizModalProps) {
  const [step, setStep] = useState(1);
  const [sleepPosition, setSleepPosition] = useState<string>("Side");
  const [bodyPain, setBodyPain] = useState<string>("Lower Back");
  const [partnerPreference, setPartnerPreference] = useState<string>("Yes (Dual Comfort)");

  if (!isOpen) return null;

  const handleFinish = () => {
    let rec = "Royal Hybrid 12\" (Balanced 7.0)";
    if (sleepPosition === "Side") {
      rec = "Dual-Feel Cassette (Plush Cloud + Ortho Support)";
    } else if (sleepPosition === "Back" || bodyPain === "Lower Back") {
      rec = "Orthopedic 7-Zone Medical Core (Firm 8.5)";
    }
    onSelectRecommendation(rec);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-block-cream border-2 border-black rounded-[28px] max-w-lg w-full p-6 sm:p-8 shadow-figma-pop-lg relative">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Quiz"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white border-2 border-black flex items-center justify-center hover:bg-neutral-100 transition"
        >
          <X className="w-4 h-4 text-black" />
        </button>

        <div className="flex items-center gap-2 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-accent-magenta" />
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-black">
            Sleep Ergonomics Matrix • Step {step} of 3
          </span>
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold tracking-tight text-black">
              What is your primary sleeping position?
            </h3>
            <p className="text-sm text-neutral-700">
              Spinal curvature alignment changes drastically between postures.
            </p>
            <div className="space-y-2 pt-2">
              {["Side Sleeper (Shoulder & Hip relief)", "Back Sleeper (Lumbar lordosis support)", "Stomach Sleeper (Firm flat neutral)", "Combination / Toss & Turn"].map((pos) => {
                const isSelected = sleepPosition.startsWith(pos.split(" ")[0]);
                return (
                  <button
                    key={pos}
                    type="button"
                    onClick={() => setSleepPosition(pos.split(" ")[0])}
                    className={`w-full p-3.5 rounded-xl border-2 border-black flex items-center justify-between text-left font-semibold text-sm transition ${
                      isSelected
                        ? "bg-block-lime shadow-figma-card"
                        : "bg-white hover:bg-neutral-50"
                    }`}
                  >
                    <span>{pos}</span>
                    {isSelected && <Check className="w-4 h-4 text-black" />}
                  </button>
                );
              })}
            </div>
            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-3 rounded-full bg-black text-white font-bold text-xs uppercase tracking-widest hover:bg-neutral-800 shadow-figma-pop"
              >
                Continue →
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold tracking-tight text-black">
              Do you wake up with any focal stiffness?
            </h3>
            <p className="text-sm text-neutral-700">
              Our 7-zone active pocket springs provide progressive firmness mapping.
            </p>
            <div className="space-y-2 pt-2">
              {["Lower Back & Sacrum", "Neck & Upper Shoulders", "Hip Pressure Points", "No Pain, just looking for luxury"].map((pain) => {
                const isSelected = bodyPain === pain;
                return (
                  <button
                    key={pain}
                    type="button"
                    onClick={() => setBodyPain(pain)}
                    className={`w-full p-3.5 rounded-xl border-2 border-black flex items-center justify-between text-left font-semibold text-sm transition ${
                      isSelected
                        ? "bg-block-mint shadow-figma-card"
                        : "bg-white hover:bg-neutral-50"
                    }`}
                  >
                    <span>{pain}</span>
                    {isSelected && <Check className="w-4 h-4 text-black" />}
                  </button>
                );
              })}
            </div>
            <div className="pt-4 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-5 py-3 rounded-full bg-white border border-black font-mono text-xs uppercase font-bold"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-6 py-3 rounded-full bg-black text-white font-bold text-xs uppercase tracking-widest hover:bg-neutral-800 shadow-figma-pop"
              >
                Continue →
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold tracking-tight text-black">
              Do you sleep with a partner?
            </h3>
            <p className="text-sm text-neutral-700">
              IshraTahir offers modular split-core cassettes with independent coil decoupling.
            </p>
            <div className="space-y-2 pt-2">
              {["Yes (We have different firmness tastes)", "Yes (We like the same feel)", "Solo Sleeper"].map((opt) => {
                const isSelected = partnerPreference.startsWith(opt.split(" ")[0]);
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setPartnerPreference(opt)}
                    className={`w-full p-3.5 rounded-xl border-2 border-black flex items-center justify-between text-left font-semibold text-sm transition ${
                      isSelected
                        ? "bg-block-coral shadow-figma-card"
                        : "bg-white hover:bg-neutral-50"
                    }`}
                  >
                    <span>{opt}</span>
                    {isSelected && <Check className="w-4 h-4 text-black" />}
                  </button>
                );
              })}
            </div>
            <div className="pt-4 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-5 py-3 rounded-full bg-white border border-black font-mono text-xs uppercase font-bold"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleFinish}
                className="px-6 py-3 rounded-full bg-black text-white font-bold text-xs uppercase tracking-widest hover:bg-neutral-800 shadow-figma-pop"
              >
                Reveal Recommended Model →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
