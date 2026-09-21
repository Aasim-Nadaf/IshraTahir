"use client";

import React, { useState } from "react";
import { X, Check } from "lucide-react";

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialModel?: string;
}

export function TrialModal({ isOpen, onClose, initialModel }: TrialModalProps) {
  const [size, setSize] = useState("Queen (60\" × 80\")");
  const [firmness, setFirmness] = useState("Dual Split: Soft Left / Balanced Right");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border-2 border-black rounded-[28px] max-w-lg w-full p-6 sm:p-8 shadow-figma-pop-lg relative">
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            onClose();
          }}
          aria-label="Close Trial Form"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-block-cream border-2 border-black flex items-center justify-center hover:bg-neutral-100 transition"
        >
          <X className="w-4 h-4 text-black" />
        </button>

        {!submitted ? (
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-block-lime" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-black">
                100-Night Zero-Risk Trial
              </span>
            </div>

            <h3 className="text-2xl font-extrabold tracking-tight text-black">
              Configure your IshraTahir mattress.
            </h3>

            {initialModel && (
              <div className="p-3 bg-block-mint border border-black rounded-xl text-xs font-mono font-bold text-black flex items-center justify-between">
                <span>CONFIG: {initialModel}</span>
                <span className="bg-white px-2 py-0.5 rounded-full border border-black">
                  Recommended
                </span>
              </div>
            )}

            <div>
              <label className="block text-xs font-mono font-bold uppercase text-neutral-600 mb-1.5">
                Foundation Size
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Twin XL (38\" × 80\")",
                  "Full (54\" × 75\")",
                  "Queen (60\" × 80\")",
                  "King (76\" × 80\")",
                  "Cal King (72\" × 84\")",
                  "Custom Yacht / RV Size",
                ].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    className={`p-2.5 text-xs font-bold rounded-xl border-2 border-black text-left transition ${
                      size === s
                        ? "bg-block-lime shadow-figma-card"
                        : "bg-white hover:bg-neutral-50"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase text-neutral-600 mb-1.5">
                Core Cassette Firmness
              </label>
              <div className="space-y-1.5">
                {[
                  "Dual Split: Soft Left / Balanced Right",
                  "Dual Split: Balanced Left / Ortho Firm Right",
                  "Monolithic Cloud Plush (5.5 / 10)",
                  "Monolithic Balanced Support (7.0 / 10)",
                  "Monolithic Ortho Medical Core (8.5 / 10)",
                ].map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFirmness(f)}
                    className={`w-full p-2.5 text-xs font-semibold rounded-xl border-2 border-black text-left flex items-center justify-between transition ${
                      firmness === f
                        ? "bg-block-cream shadow-figma-card"
                        : "bg-white hover:bg-neutral-50"
                    }`}
                  >
                    <span>{f}</span>
                    {firmness === f && <Check className="w-3.5 h-3.5 text-black" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3 bg-block-coral/30 border border-black rounded-xl text-xs flex items-center justify-between text-black">
              <span className="font-semibold">🎁 $400 Bedding Bundle Included</span>
              <span className="font-mono font-bold text-accent-magenta">$0.00</span>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <div>
                <span className="text-xl font-extrabold text-black">$1,199</span>
                <span className="text-xs text-neutral-500 line-through ml-1.5">
                  $2,399
                </span>
                <p className="text-[10px] font-mono text-neutral-500">
                  Includes Free Shipping &amp; Setup
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSubmitted(true)}
                className="px-6 py-3.5 rounded-full bg-black text-white font-bold text-xs uppercase tracking-widest hover:bg-neutral-800 shadow-figma-pop"
              >
                Start 100-Night Trial →
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-block-lime border-2 border-black flex items-center justify-center mx-auto text-2xl">
              ✓
            </div>
            <h3 className="text-2xl font-extrabold text-black">
              Your 100-Night Trial is Reserved!
            </h3>
            <p className="text-sm text-neutral-700 max-w-sm mx-auto">
              We have configured your {size} with {firmness}. Our logistics
              concierge will coordinate white-glove setup and include your complimentary
              $400 bedding bundle.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-8 py-3 rounded-full bg-black text-white font-bold text-xs uppercase tracking-widest shadow-figma-pop hover:bg-neutral-800"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
