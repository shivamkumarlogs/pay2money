"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS as FAQS } from "../data/siteData";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0); // 1st item open by default like Kissht reference
  const [showAll, setShowAll] = useState(false);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const displayedFaqs = showAll ? FAQS : FAQS.slice(0, 5);

  return (
    <section
      id="faq"
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4 mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-4xl font-black text-brand-primary tracking-tight leading-[1.15]">
          Frequently Asked Questions
        </h2>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
          Everything you need to know about our digital loan facilitation
          process.
        </p>
      </div>

      {/* Kissht-Style Minimalist Horizontal Rows - Full width matching project grid */}
      <div className="w-full">
        {displayedFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div key={idx} className="border-b border-slate-200">
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between text-left py-5 sm:py-6 px-0 gap-4 cursor-pointer select-none group"
                aria-expanded={isOpen}
              >
                <span
                  className={`text-base sm:text-lg font-bold transition-colors ${
                    isOpen
                      ? "text-brand-primary font-black"
                      : "text-slate-800 group-hover:text-brand-primary"
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                    isOpen
                      ? "rotate-180 text-brand-primary"
                      : "text-slate-500 group-hover:text-slate-700"
                  }`}
                />
              </button>

              {isOpen && (
                <div className="pb-6 px-0 animate-fadeIn">
                  <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}

        {/* Kissht-Style Show More / Show Less Link */}
        {FAQS.length > 5 && (
          <div className="flex justify-end pt-5">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="text-sm font-bold text-brand-primary hover:text-brand-accent transition-colors cursor-pointer"
            >
              {showAll ? "Show Less FAQs" : "Show More FAQs"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
