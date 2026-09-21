"use client";

import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  onOpenTrial: () => void;
}

export function HeroSection({ onOpenTrial }: HeroSectionProps) {
  return (
    <section className="bg-block-cream border-2 border-black rounded-[32px] p-6 sm:p-10 lg:p-16 relative overflow-hidden shadow-figma-pop-lg">
      {/* Top Meta Row */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="inline-flex items-center gap-2 bg-white border-2 border-black rounded-full px-4 py-1 text-xs font-mono font-medium tracking-wide">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF2E74]" />
          <span className="uppercase tracking-widest font-bold text-black">
            PROJECT: RESTFUL STATE v2.4
          </span>
        </div>

        {/* Cursor Badge Annotation (Dr. Tariq) */}
        <div className="hidden md:inline-flex items-center gap-1.5 select-none">
          <svg
            className="w-4 h-4 cursor-arrow fill-[#FF2E74] -rotate-45"
            viewBox="0 0 24 24"
          >
            <path d="M4 0l16 12-7 2-4 9z" />
          </svg>
          <span className="bg-[#FF2E74] text-white text-[11px] font-mono px-2.5 py-1 rounded-full font-bold uppercase tracking-wider shadow-sm">
            Ergonomic Lead: Dr. Tariq
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Oversized Display Typography */}
        <div className="lg:col-span-7 space-y-6">
          <span className="font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 bg-block-lime rounded-full border border-black inline-block text-black">
            FigJam Sleep Systems // 001
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tightest leading-[0.98] text-black">
            Rest designed <br />
            like your{" "}
            <span className="underline decoration-wavy decoration-accent-magenta underline-offset-8">
              best work.
            </span>
          </h1>
          <p className="text-lg sm:text-xl font-normal text-black max-w-xl leading-relaxed">
            Engineered alongside orthopedic specialists. We scrapped legacy
            mattress assembly to invent modular dual-density comfort, tailored
            cut-to-size foams, and pocket spring alignment.
          </p>

          {/* Sticky Note Style Chips (FigJam Motif) */}
          <div className="flex flex-wrap gap-3 pt-2">
            <div className="bg-block-mint border border-black rounded-xl p-3 transform -rotate-1 shadow-figma-card transition hover:rotate-0">
              <span className="font-mono text-[10px] font-bold uppercase block text-black/70">
                SPEC 01
              </span>
              <span className="text-xs font-bold text-black">7-Zone Pocket Coils</span>
            </div>
            <div className="bg-block-coral border border-black rounded-xl p-3 transform rotate-2 shadow-figma-card transition hover:rotate-0">
              <span className="font-mono text-[10px] font-bold uppercase block text-black/70">
                SPEC 02
              </span>
              <span className="text-xs font-bold text-black">ThermaGel™ Cloud Foam</span>
            </div>
            <div className="bg-block-lime border border-black rounded-xl p-3 transform -rotate-2 shadow-figma-card transition hover:rotate-0">
              <span className="font-mono text-[10px] font-bold uppercase block text-black/70">
                SPEC 03
              </span>
              <span className="text-xs font-bold text-black">Zero Toxic Off-Gassing</span>
            </div>
          </div>

          {/* Dual Black/White Pill Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              type="button"
              onClick={onOpenTrial}
              className="px-8 py-4 rounded-full bg-black text-white font-bold text-xs uppercase tracking-widest-pill hover:bg-neutral-800 transition shadow-figma-pop cursor-pointer"
            >
              Shop The Royal Hybrid →
            </button>
            <a
              href="#physics"
              className="px-8 py-4 rounded-full bg-white text-black border-2 border-black font-bold text-xs uppercase tracking-widest-pill hover:bg-black hover:text-white transition shadow-figma-pop text-center"
            >
              Explore Architecture
            </a>
          </div>

          {/* Micro Reassurance */}
          <div className="flex items-center gap-3 font-mono text-xs text-black pt-2">
            <span className="flex text-amber-500 tracking-wider">★★★★★</span>
            <span className="font-bold">4.9/5 Rating</span>
            <span>•</span>
            <span>15,000+ Verified Sleepers</span>
          </div>
        </div>

        {/* Right Column: Crisp Photography with Cursor Annotations */}
        <div className="lg:col-span-5 relative">
          {/* Cursor Badge (Materials) */}
          <div className="absolute -top-3 -right-2 z-20 hidden sm:flex items-center gap-1.5 select-none">
            <svg
              className="w-4 h-4 cursor-arrow fill-blue-600 -rotate-45"
              viewBox="0 0 24 24"
            >
              <path d="M4 0l16 12-7 2-4 9z" />
            </svg>
            <span className="bg-blue-600 text-white text-[10px] font-mono px-3 py-1 rounded-full font-bold uppercase tracking-wider shadow-md">
              Materials: Organic Wool &amp; Latex
            </span>
          </div>

          {/* Frame Image Card */}
          <div className="bg-white border-2 border-black rounded-[24px] p-3 shadow-figma-pop">
            <div className="rounded-[18px] overflow-hidden border border-black relative h-80 sm:h-96">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYn6JDBkcNzREbD6SDXbxshHFW7kfFQR1GCfyGk77kPl68S739x18Hm61mP-_0WdN8f4EFuHUe2PKudIOFIKkJLzQ1UDsUJVkm_ioRrv-RuvNCyp22mFA3CN4qTQuoZuBdE2jFL1gyG0rLDix5V_0ye_gIkg8Y1_2DCbHVgaJXMNuu25KYdvs3Afpn18sBqrxvyVRznp_RHNk610Gobrd0IdW57YM8HQ9a0AJ6s2UXrPGCQlKUzGhrWQ"
                alt="IshraTahir Luxury Hybrid Mattress Bedroom Setup"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur border border-black rounded-xl p-3 flex items-center justify-between shadow-sm">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider font-bold block text-black/60">
                    FIGJAM STAMP
                  </span>
                  <span className="text-xs font-bold text-black">
                    Royal Hybrid 12&quot; Foundation
                  </span>
                </div>
                <span className="px-3 py-1 bg-block-lime border border-black rounded-full font-mono text-[10px] font-bold text-black">
                  $1,199 <del className="text-black/50 ml-1 font-normal">$2,399</del>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
