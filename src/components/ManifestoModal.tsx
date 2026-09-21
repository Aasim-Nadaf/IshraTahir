"use client";

import React from "react";
import { X } from "lucide-react";

interface ManifestoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ManifestoModal({ isOpen, onClose }: ManifestoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-block-cream border-2 border-black rounded-[28px] max-w-xl w-full p-6 sm:p-8 shadow-figma-pop-lg relative max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Manifesto"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white border-2 border-black flex items-center justify-center hover:bg-neutral-100 transition"
        >
          <X className="w-4 h-4 text-black" />
        </button>

        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-white border-2 border-black rounded-full px-4 py-1 text-xs font-mono font-bold uppercase tracking-widest text-black">
            <span className="w-2 h-2 rounded-full bg-block-lime" />
            <span>THE ISHRATAHIR DESIGN MANIFESTO</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tightest leading-tight text-black">
            Rest designed like your best work.
          </h2>

          <div className="space-y-4 text-sm text-neutral-800 leading-relaxed font-sans">
            <p>
              In product design, architecture, and engineering, we iterate relentlessly.
              We reject arbitrary defaults, prototype components in isolation, and
              demand ergonomic perfection.
            </p>
            <p>
              Yet for decades, the mattress industry sold one-size-fits-all polyurethane
              slabs wrapped in marketing jargon, trapping heat and locking sleeping
              bodies into compromised postures.
            </p>
            <div className="p-4 bg-white border-2 border-black rounded-2xl shadow-figma-card">
              <span className="font-mono text-xs font-bold uppercase block text-black/60 mb-1">
                OUR THREE PILLARS
              </span>
              <ul className="space-y-2 text-xs font-semibold text-black">
                <li>1. <strong>Modular Dual-Firmness:</strong> Never compromise with your partner again.</li>
                <li>2. <strong>Zero Motion Coupling:</strong> 1,200 Swedish pocket springs isolate every micro-movement.</li>
                <li>3. <strong>Pure Air Standards:</strong> Lab-certified OEKO-TEX and CertiPUR-US foams with zero toxic off-gassing.</li>
              </ul>
            </div>
            <p>
              Good sleep is not passive downtime—it is the foundational operating
              system behind clarity, craft, and physical restoration.
            </p>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-full bg-black text-white font-bold text-xs uppercase tracking-widest hover:bg-neutral-800 shadow-figma-pop"
            >
              Close Manifesto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
