"use client";

import React from "react";

export function Footer() {
  return (
    <footer className="bg-white border-t-2 border-black mt-16 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Links Directory */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-16 border-b-2 border-black">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-black text-white font-mono font-bold flex items-center justify-center text-xs">
                IT
              </div>
              <span className="text-lg font-extrabold tracking-tight uppercase text-black">
                IshraTahir
              </span>
            </div>
            <p className="text-xs text-black font-sans leading-relaxed max-w-sm">
              Figma-inspired sleep systems, bespoke cut foam, and orthopedic
              mattresses crafted for deep ergonomic recovery.
            </p>
            <div className="flex items-center gap-2 font-mono text-[11px] font-bold text-black">
              <span className="w-2 h-2 rounded-full bg-block-lime border border-black" />
              <span>WORKSHOP ONLINE: MON-SUN 8AM-9PM</span>
            </div>
          </div>

          {/* Directory Column 1 */}
          <div className="space-y-3 font-mono text-xs">
            <div className="font-bold uppercase tracking-widest text-black/60">
              COLLECTIONS
            </div>
            <ul className="space-y-2 font-sans font-semibold text-sm text-black">
              <li>
                <a className="hover:underline" href="#modular">
                  Royal Hybrid 12&quot;
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#physics">
                  Orthopedic Memory Foam
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#modular">
                  Custom Cut Foam Blocks
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#bundle">
                  Bamboo Shield Bedding
                </a>
              </li>
            </ul>
          </div>

          {/* Directory Column 2 */}
          <div className="space-y-3 font-mono text-xs">
            <div className="font-bold uppercase tracking-widest text-black/60">
              STANDARDS
            </div>
            <ul className="space-y-2 font-sans font-semibold text-sm text-black">
              <li>
                <a className="hover:underline" href="#trial">
                  100-Night Trial
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#physics">
                  CertiPUR-US Certs
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#physics">
                  Zero Motion Transfer
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#trial">
                  Charity Donation Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Directory Column 3 */}
          <div className="space-y-3 font-mono text-xs">
            <div className="font-bold uppercase tracking-widest text-black/60">
              COLLABORATE
            </div>
            <ul className="space-y-2 font-sans font-semibold text-sm text-black">
              <li>
                <a className="hover:underline" href="mailto:support@ishratahir.com">
                  Architect &amp; Designer B2B
                </a>
              </li>
              <li>
                <a className="hover:underline" href="tel:+18005550199">
                  +1 (800) 555-FOAM
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#faq">
                  Concierge Support
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#faq">
                  Press Inquiries
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* GIANT DISPLAY WORDMARK (Figma Style) */}
        <div className="py-12 select-none overflow-hidden text-center border-b-2 border-black">
          <h2 className="text-[13vw] font-extrabold tracking-tightest leading-none text-black uppercase pointer-events-none">
            ISHRATAHIR
          </h2>
        </div>

        {/* Bottom Meta Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-mono gap-4 text-black">
          <div>
            © 2025 ISHRATAHIR SLEEP SYSTEMS INC. ALL RIGHTS RESERVED.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <a className="hover:underline" href="#faq">
              PRIVACY POLICY
            </a>
            <a className="hover:underline" href="#faq">
              TERMS OF SERVICE
            </a>
            <a className="hover:underline" href="#faq">
              FIGJAM CANVAS TEMPLATE
            </a>
            <a className="hover:underline text-emerald-600 font-bold" href="#faq">
              SYSTEM STATUS: 100% RESTED
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
