"use client";

import React, { useState } from "react";
import Image from "next/image";

export function ModularSection() {
  const [selectedFirmness, setSelectedFirmness] = useState<"left" | "center" | "right">("left");

  return (
    <section
      id="modular"
      className="bg-block-mint border-2 border-black rounded-[32px] p-6 sm:p-10 lg:p-16 shadow-figma-pop-lg scroll-mt-24"
    >
      <div className="max-w-3xl mb-12">
        <span className="font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 bg-white border border-black rounded-full inline-block mb-3 text-black">
          Dual-Firmness Matrix
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tightest leading-tight text-black">
          Modular sleep, <br />
          engineered for two.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-black leading-relaxed">
          No two sleeping bodies require the exact same posture curve. Tailor each
          side of your mattress independently with interchangeable high-resilience
          foam cassettes.
        </p>
      </div>

      {/* Pill Toggles (Soft / Balanced / Firm) */}
      <div className="inline-flex p-1.5 bg-white border-2 border-black rounded-full mb-8 flex-wrap gap-1 shadow-sm">
        <button
          type="button"
          onClick={() => setSelectedFirmness("left")}
          className={`px-5 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-widest transition cursor-pointer ${
            selectedFirmness === "left"
              ? "bg-black text-white shadow-sm"
              : "bg-transparent text-black hover:bg-neutral-100"
          }`}
        >
          Left: Soft (Cloud)
        </button>
        <button
          type="button"
          onClick={() => setSelectedFirmness("center")}
          className={`px-5 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-widest transition cursor-pointer ${
            selectedFirmness === "center"
              ? "bg-black text-white shadow-sm"
              : "bg-transparent text-black hover:bg-neutral-100"
          }`}
        >
          Center: Balanced (7.0)
        </button>
        <button
          type="button"
          onClick={() => setSelectedFirmness("right")}
          className={`px-5 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-widest transition cursor-pointer ${
            selectedFirmness === "right"
              ? "bg-black text-white shadow-sm"
              : "bg-transparent text-black hover:bg-neutral-100"
          }`}
        >
          Right: Ortho Firm
        </button>
      </div>

      {/* 3 Crisp White Card Inserts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white border-2 border-black rounded-[24px] p-6 flex flex-col justify-between shadow-figma-pop transition hover:-translate-y-1">
          <div>
            <div className="w-10 h-10 rounded-full bg-block-cream border border-black flex items-center justify-center font-mono font-bold text-sm mb-4 text-black">
              01
            </div>
            <h3 className="text-xl font-bold tracking-tight mb-2 text-black">
              Split-Feel Cassette
            </h3>
            <p className="text-sm text-black leading-relaxed mb-4">
              Choose your firmness profile for each half of the bed. Dual internal core allows side-sleepers to pair plush with orthopedic back support.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border border-black h-40 relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuALJHjUspP4e2UcE2fpVmkpZDlluG1W0dWtXdJ76hGEd5uHVXN5pxh59xDEJMs28L-uzD40HO-Qht6yraZcnebaUHjQCTZQ1DTUGtYNoy7vYQ-w5PNC7zv-pRh_2u2LId5XUyilnh-MqpeRwlgBq1sn-uPk5x0NsyWiStRxvXktX_zKFLiuIi0n6bIT7FyRnXyagP-azdfGLuy02Yn0v6Oaa3pwu2oruU4TaJnCL4evnpcKMit7VJQDfw"
              alt="Mattress layer core"
              fill
              sizes="(max-width: 768px) 100vw, 350px"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border-2 border-black rounded-[24px] p-6 flex flex-col justify-between shadow-figma-pop transition hover:-translate-y-1">
          <div>
            <div className="w-10 h-10 rounded-full bg-block-coral border border-black flex items-center justify-center font-mono font-bold text-sm mb-4 text-black">
              02
            </div>
            <h3 className="text-xl font-bold tracking-tight mb-2 text-black">
              Independent Coils
            </h3>
            <p className="text-sm text-black leading-relaxed mb-4">
              Over 1,200 individually wrapped Swedish pocket coils cancel lateral resonance. Your partner can toss, turn, or exit bed without vibrating your side.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border border-black h-40 relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuApNHGiEhXqpEkUoUIrIWtv7z97o5cLbpvtCRmYl0H3WfRr8d-DVwX0z5gp2DSwYrhm951NVLtuUutXYf4cqg3e4e1ndmpaZXz78YoTmiBucDcGt769suNTIXkYZJvOqu0e5Ql2N930A0f66MssQs4wOM4YRARN45-aOJCEJdo2CiMhJUwsdu7-vyZwBzwg-uF98GoNnNVZIWw7mmwSTPbJRIbw4YuV4B6x6oH8lZeesXAsHGRMPEl-8w"
              alt="Mattress bed frame foundation"
              fill
              sizes="(max-width: 768px) 100vw, 350px"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white border-2 border-black rounded-[24px] p-6 flex flex-col justify-between shadow-figma-pop transition hover:-translate-y-1">
          <div>
            <div className="w-10 h-10 rounded-full bg-block-lime border border-black flex items-center justify-center font-mono font-bold text-sm mb-4 text-black">
              03
            </div>
            <h3 className="text-xl font-bold tracking-tight mb-2 text-black">
              Bespoke Edge Grip
            </h3>
            <p className="text-sm text-black leading-relaxed mb-4">
              Triple-tempered perimeter barrier gives full edge-to-edge stability for seating, morning stretch, and maximum usable surface area.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border border-black h-40 relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAptQ7pqGgAGEL4ulPpGOoqChFv-mIGuEjWIvdzUbBqzV7_qfVvw6wE7jB7hkRcEqfrEbHM-KgnNFIIVrMMvK71TvZKm7gGZ0aTLnnlHOMBMGyydk-0yL66-QoiOAJBhqBEjkNUFJEm1t3dsgca6sQMC0pTvZmgYo3SMiQT5b5WOnjb4wr1J1UOjb6O0L7O3Dt2iFvwALnh8UG9U7dyGGY_1eDSzcSUT8slNd7DlT213Sdo-8ikrLMqyQ"
              alt="Mattress comfort materials"
              fill
              sizes="(max-width: 768px) 100vw, 350px"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
