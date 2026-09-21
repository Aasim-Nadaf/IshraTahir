"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenQuiz: () => void;
  onOpenTrial: () => void;
}

export function Navbar({ onOpenQuiz, onOpenTrial }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center text-white font-mono font-bold text-base transition-transform group-hover:rotate-12 select-none shadow-sm">
            IT
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tightest leading-none uppercase text-black">
              IshraTahir
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-black/60 font-semibold mt-0.5">
              Ergonomic Mattresses &amp; Foam
            </span>
          </div>
        </a>

        {/* Nav Links (Creative Directory) */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold tracking-tight">
          <a
            href="#modular"
            className="hover:text-black/70 transition flex items-center gap-1.5 text-black"
          >
            <span className="w-2 h-2 rounded-full bg-block-mint border border-black" />
            Modular Core
          </a>
          <a
            href="#physics"
            className="hover:text-black/70 transition flex items-center gap-1.5 text-black"
          >
            <span className="w-2 h-2 rounded-full bg-block-navy border border-black" />
            Zero Gravity Physics
          </a>
          <a
            href="#bundle"
            className="hover:text-black/70 transition flex items-center gap-1.5 text-black"
          >
            <span className="w-2 h-2 rounded-full bg-block-coral border border-black" />
            Bedding Bundle ($400)
          </a>
          <a
            href="#faq"
            className="hover:text-black/70 transition flex items-center gap-1.5 text-black"
          >
            <span className="w-2 h-2 rounded-full bg-block-lime border border-black" />
            Specs &amp; Trial
          </a>
        </div>

        {/* Monochromatic CTA Pill Buttons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenQuiz}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-black bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-neutral-100 transition shadow-sm cursor-pointer"
          >
            Quiz
          </button>
          <button
            type="button"
            onClick={onOpenTrial}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-black text-white font-bold text-xs uppercase tracking-widest hover:bg-neutral-800 transition shadow-figma-pop cursor-pointer"
          >
            Try 100 Nights Free
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 rounded-full border border-black hover:bg-neutral-100 transition"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b-2 border-black px-6 py-5 space-y-4">
          <div className="flex flex-col space-y-3 font-semibold text-sm">
            <a
              href="#modular"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-1.5 text-black hover:text-neutral-600"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-block-mint border border-black" />
              Modular Core
            </a>
            <a
              href="#physics"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-1.5 text-black hover:text-neutral-600"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-block-navy border border-black" />
              Zero Gravity Physics
            </a>
            <a
              href="#bundle"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-1.5 text-black hover:text-neutral-600"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-block-coral border border-black" />
              Bedding Bundle ($400)
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-1.5 text-black hover:text-neutral-600"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-block-lime border border-black" />
              Specs &amp; Trial
            </a>
          </div>
          <div className="pt-2 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuiz();
              }}
              className="w-full text-center py-2.5 rounded-full border border-black bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-neutral-100 transition shadow-sm"
            >
              Sleep Quiz
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrial();
              }}
              className="w-full text-center py-2.5 rounded-full bg-black text-white font-bold text-xs uppercase tracking-widest hover:bg-neutral-800 transition shadow-figma-pop"
            >
              Try 100 Nights Free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
