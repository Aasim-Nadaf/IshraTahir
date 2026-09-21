"use client";

import React from "react";
import Image from "next/image";

interface BundleSectionProps {
  onClaimBundle: () => void;
}

export function BundleSection({ onClaimBundle }: BundleSectionProps) {
  return (
    <section
      id="bundle"
      className="bg-block-coral border-2 border-black rounded-[32px] p-6 sm:p-10 lg:p-16 shadow-figma-pop-lg relative overflow-hidden scroll-mt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 bg-white border-2 border-black rounded-full px-4 py-1 text-xs font-mono font-bold uppercase tracking-widest text-black">
            <span>🎁 SEASONAL PROMO PACK</span>
            <span>•</span>
            <span className="text-accent-magenta">$400 VALUE FREE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tightest leading-[1.0] text-black">
            Free luxury bedding <br />
            bundled with every mattress.
          </h2>
          <p className="text-base sm:text-lg text-black leading-relaxed">
            Order any IshraTahir hybrid or orthopedic mattress this week and
            instantly unlock our signature bedroom bundle: two ergonomic Cloud
            pillows, one waterproof shield protector, and our silky cooling
            bamboo sheet set.
          </p>

          {/* Bundle Grid Specs */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white border-2 border-black rounded-2xl p-4 shadow-figma-card">
              <span className="font-mono text-[10px] font-bold uppercase block text-black/60">
                01 / INCLUDED
              </span>
              <span className="text-sm font-bold block mt-1 text-black">
                2x Pillows
              </span>
              <span className="text-xs text-black/70">Ergonomic Foam</span>
            </div>
            <div className="bg-white border-2 border-black rounded-2xl p-4 shadow-figma-card">
              <span className="font-mono text-[10px] font-bold uppercase block text-black/60">
                02 / INCLUDED
              </span>
              <span className="text-sm font-bold block mt-1 text-black">
                1x Protector
              </span>
              <span className="text-xs text-black/70">Breathable Shield</span>
            </div>
            <div className="bg-white border-2 border-black rounded-2xl p-4 shadow-figma-card">
              <span className="font-mono text-[10px] font-bold uppercase block text-black/60">
                03 / INCLUDED
              </span>
              <span className="text-sm font-bold block mt-1 text-black">
                1x Sheets
              </span>
              <span className="text-xs text-black/70">100% Silky Bamboo</span>
            </div>
          </div>

          {/* Magenta Promo Pill Button */}
          <div className="pt-2">
            <button
              type="button"
              onClick={onClaimBundle}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent-magenta text-white font-extrabold text-xs uppercase tracking-widest-pill hover:opacity-95 transition shadow-figma-pop border-2 border-black cursor-pointer"
            >
              Claim Bundle With Trial →
            </button>
          </div>
        </div>

        {/* Bundle Image Box */}
        <div className="lg:col-span-5">
          <div className="bg-white border-2 border-black rounded-[28px] p-3 shadow-figma-pop">
            <div className="rounded-[20px] overflow-hidden border border-black relative h-72 sm:h-80">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU04k_x9E5nDRi9weRUDbwDx-kvAlfM84-2xWQJF6D9DBDJJerFznGT2_MobUTwwpwn8woHh8B1wfD375fhrcKqM93ilceW9z8wJ85Xc6XkAw3mtvex8fJ7-1oU8r4mx4e3QKgGbzrztjNenM-wp5H6p4IdFbL-e_pggH6j2EEEHEnHb6Zdt6WLUk_BjDGbk7G0h8SyRSSMShc32L9JX0XZE3hF7gYo-X3exyQ-0xyHsHBqPXRZPVDZA"
                alt="Bedding accessory bundle"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-black text-white font-mono text-[10px] font-bold uppercase px-3 py-1.5 rounded-full select-none">
                AUTO-APPLIED AT CHECKOUT
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
