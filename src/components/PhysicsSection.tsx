"use client";

import React, { useState } from "react";
import Image from "next/image";

export function PhysicsSection() {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section
      id="physics"
      className="bg-block-navy text-white border-2 border-black rounded-[32px] p-6 sm:p-10 lg:p-16 shadow-figma-pop-lg scroll-mt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Diagram Annotation Column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-block-mint" />
            <span className="uppercase tracking-widest text-block-cream font-bold">
              BIOMECHANICAL LAB REPORT
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tightest leading-tight">
            The Physics of <br />
            <span className="text-block-mint">Zero Gravity.</span>
          </h2>

          <p className="text-base text-neutral-300 leading-relaxed">
            Traditional beds force spinal compression at the shoulders and lumbar
            curves. By sequencing five progressive memory foam gradients atop
            responsive pocket springs, IshraTahir achieves true neutral buoyancy.
          </p>

          {/* Tech Diagram Callouts */}
          <div className="space-y-3 pt-2 font-mono text-xs">
            <div className="flex items-center gap-3 bg-white/5 border border-white/15 p-3 rounded-2xl hover:bg-white/10 transition">
              <span className="w-8 h-8 rounded-full bg-block-lime text-black font-bold flex items-center justify-center shrink-0">
                L1
              </span>
              <div>
                <span className="font-bold text-white uppercase">
                  CoolTouch™ Bamboo Shell
                </span>
                <p className="text-neutral-400 font-sans text-xs">
                  Conductive micro-quilting draws body heat 3.4x faster.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/5 border border-white/15 p-3 rounded-2xl hover:bg-white/10 transition">
              <span className="w-8 h-8 rounded-full bg-block-mint text-black font-bold flex items-center justify-center shrink-0">
                L2
              </span>
              <div>
                <span className="font-bold text-white uppercase">
                  ThermaGel™ Orthopedic Foam
                </span>
                <p className="text-neutral-400 font-sans text-xs">
                  Zero-rebound contour eliminates shoulder and hip friction.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/5 border border-white/15 p-3 rounded-2xl hover:bg-white/10 transition">
              <span className="w-8 h-8 rounded-full bg-block-coral text-black font-bold flex items-center justify-center shrink-0">
                L3
              </span>
              <div>
                <span className="font-bold text-white uppercase">
                  7-Zone Contour Coil System
                </span>
                <p className="text-neutral-400 font-sans text-xs">
                  Individually calibrated resistance aligns your lumbar lordosis.
                </p>
              </div>
            </div>
          </div>

          {/* CertiPUR-US and eco badges */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 font-mono text-xs uppercase tracking-widest text-block-mint">
              ✓ CertiPUR-US® Certified
            </span>
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 font-mono text-xs uppercase tracking-widest text-block-cream">
              ✓ OEKO-TEX® Standard 100
            </span>
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 font-mono text-xs uppercase tracking-widest text-block-lime">
              ✓ Formaldehyde-Free
            </span>
          </div>
        </div>

        {/* Product Layer Cutaway Graphic Card */}
        <div className="lg:col-span-6">
          <div className="bg-black/50 border-2 border-white/20 rounded-[28px] p-6 backdrop-blur">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs uppercase text-block-mint tracking-widest font-bold">
                FigJam Architecture Layer
              </span>
              {/* Circular Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsZoomed(!isZoomed)}
                  aria-label="Zoom diagram"
                  title="Toggle Zoom"
                  className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs font-mono font-bold transition cursor-pointer ${
                    isZoomed
                      ? "bg-white text-black"
                      : "bg-white/10 hover:bg-white text-white hover:text-black"
                  }`}
                >
                  {isZoomed ? "−" : "+"}
                </button>
                <button
                  type="button"
                  onClick={() => setIsZoomed(false)}
                  aria-label="Fit diagram"
                  title="Fit View"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 flex items-center justify-center text-xs font-mono font-bold transition cursor-pointer"
                >
                  ⊡
                </button>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/20 relative h-80 sm:h-96 transition-all duration-300">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkYfpP5Bs9rPCd-BTQC0I33hxX_O-YSyUXR4QffvyppJLzdnxZr98lqkDuzOEriRcs_zHXGstvt46msyR9ORAkhd7uZRUOxsbWFYtGl4pCFtUNjSU2x7I2pdlX2P5A5FYBbF5uaRr4ThK95bFP-KZKzE3yDcJTOiAZFixat-Kf_tivLWgXmrlg9tnIRh2Wu6mlidXf5xBz_TTFCO5gwwxH8KPzkQi-zPhgJxKPhDkK3wEZJogW8j29MA"
                alt="IshraTahir Royal Hybrid Mattress Layered Core"
                fill
                sizes="(max-width: 768px) 100vw, 550px"
                className={`object-cover transition-transform duration-500 ${
                  isZoomed ? "scale-125 cursor-zoom-out" : "scale-100 cursor-zoom-in"
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-black text-block-cream font-mono text-[10px] font-bold uppercase px-3 py-1.5 rounded-full border border-white/20 select-none">
                EXPLODED MULTI-LAYER VIEW
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center text-xs font-mono text-neutral-400">
              <span>FIGURE 4.2: DENSITY DISTRIBUTION</span>
              <span className="text-block-lime font-bold">
                48.2 KG/M³ MEDICAL CORE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
