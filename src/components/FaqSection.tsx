"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How does the 100-night collaborative trial work?",
    answer:
      "Sleep on your IshraTahir mattress for up to 100 nights. If your body does not feel measurably more restored, contact our concierge. We dispatch a complimentary pickup and donate the mattress to local partner charities, refunding 100% of your order.",
  },
  {
    question: "What sets IshraTahir Hybrid apart from boxed memory foam?",
    answer:
      "Our hybrid marries 7-zone active pocket springs with high-density ThermaGel™ foam. You receive ergonomic spine alignment and cool airflow without ever experiencing the hot \"quicksand sinking\" feel of legacy memory foam.",
  },
  {
    question: "Are the foams 100% CertiPUR-US® certified?",
    answer:
      "Yes. All IshraTahir foam formulations are lab-certified to be made without ozone depleters, mercury, lead, heavy metals, formaldehyde, or phthalates, maintaining the lowest measurable VOC emissions for clean indoor air.",
  },
  {
    question: "Do you cut custom foam for sofas, RVs & yachts?",
    answer:
      "Absolutely. Our workshop cuts precision custom blocks in high-resilience medical foam, memory foam, and natural latex to your exact CAD specs or measurements with quick 48-hour dispatch.",
  },
  {
    question: "What bed foundations or frames are compatible?",
    answer:
      "Platform beds, slatted bases (with slats spaced 3\" apart or less), box springs, flat floors, and modern adjustable motorized power foundations are all 100% compatible.",
  },
  {
    question: "How quick is delivery & white-glove setup?",
    answer:
      "Standard boxed delivery ships nationwide in 2–5 business days via UPS/FedEx. Optional White-Glove installation includes in-bedroom unboxing and removal of your old mattress.",
  },
];

export function FaqSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleFaq = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section
      id="faq"
      className="bg-block-lime border-2 border-black rounded-[32px] p-6 sm:p-10 lg:p-16 shadow-figma-pop-lg scroll-mt-24"
    >
      <div className="max-w-3xl mb-12">
        <span className="font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 bg-black text-block-lime rounded-full inline-block mb-3">
          Knowledge Base // FAQ
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tightest leading-tight text-black">
          Specs, shipping &amp; <br />
          100-night trial FAQ.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-black leading-relaxed">
          Transparent sleep engineering. Everything you need to know about
          delivery, foundation setup, and our charitable donation returns policy.
        </p>
      </div>

      {/* High-Contrast Black Border Accordions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        {faqs.map((faq, index) => {
          const isOpen = openIndices.includes(index);
          return (
            <div
              key={index}
              className="bg-white border-2 border-black rounded-[20px] p-6 shadow-figma-card transition-all"
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left font-bold text-base cursor-pointer text-black gap-4"
              >
                <span>{faq.question}</span>
                <span
                  className={`font-mono font-bold text-xl select-none transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                >
                  ＋
                </span>
              </button>
              {isOpen && (
                <div className="text-sm text-black leading-relaxed mt-4 pt-4 border-t-2 border-black/10">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
