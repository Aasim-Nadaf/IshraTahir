"use client";

import React from "react";

interface TickerBarProps {
  onOpenManifesto: () => void;
}

export function TickerBar({ onOpenManifesto }: TickerBarProps) {
  return (
    <aside
      aria-label="Announcement"
      className="w-full bg-black text-[#FFFCE1] text-xs font-mono border-b border-black py-2 px-4"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-2 uppercase tracking-widest text-[11px] font-medium">
          <span className="inline-block w-2 h-2 rounded-full bg-block-lime animate-pulse" />
          <span>FIGJAM × ISHRATAHIR 2025 EDITION</span>
          <span className="text-white/40">•</span>
          <span>100-NIGHT COLLABORATIVE SLEEP TRIAL</span>
          <span className="text-white/40 hidden sm:inline">•</span>
          <span className="hidden sm:inline">FREE NATIONWIDE SETUP</span>
        </div>
        <div className="flex items-center space-x-4 uppercase tracking-widest text-[11px]">
          <span className="bg-white/10 px-2.5 py-0.5 rounded-full text-block-cream font-mono">
            CODE: REST2025
          </span>
          <button
            type="button"
            onClick={onOpenManifesto}
            className="hover:underline font-bold text-block-lime transition cursor-pointer"
          >
            Read Manifesto →
          </button>
        </div>
      </div>
    </aside>
  );
}
