"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { LOAN_PRODUCTS as LOAN_CARDS, CIBIL_PRODUCTS as CIBIL_CARDS } from "../data/siteData";

export default function ProductGrid() {
  return (
    <section
      id="loans"
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Category 1: Loans and Cards Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-primary tracking-tight">
          Loans and Cards
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1.5">
          Simple digital applications with minimal paperwork and instant partner sanctions.
        </p>
      </div>

      {/* Kissht / SetuMoney Inspired Minimal 3D Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-14 sm:mb-16">
        {LOAN_CARDS.map((card, idx) => (
          <a
            key={idx}
            href={card.gridHref || card.href}
            className="group relative flex flex-col justify-between bg-white rounded-2xl p-6 min-h-52.5 sm:min-h-57.5 border border-slate-200/80 hover:border-brand-accent-border shadow-xs hover:shadow-md transition-all overflow-hidden"
          >
            {/* Top Row: 3D Illustration on left, Circular Arrow on right (appears on hover) */}
            <div className="flex items-start justify-between">
              <div className="w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center shrink-0 relative">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={72}
                  height={72}
                  className="w-full h-full object-contain transform group-hover:scale-108 transition-transform duration-300 drop-shadow-sm select-none"
                />
              </div>

              {/* Kissht-Style Top-Right Circular Hover Button */}
              <div className="w-8 h-8 rounded-full bg-brand-primary text-white group-hover:bg-brand-accent flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-0 sm:translate-y-1 sm:group-hover:translate-y-0 shadow-xs shrink-0">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Bottom Row: Title and Simple Subtitle */}
            <div className="mt-6">
              <h4 className="text-base sm:text-lg font-bold text-brand-primary leading-snug">
                {card.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-normal">
                {card.desc}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Category 2: CIBIL Score & Financial Tools */}
      <div id="cibil">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-primary tracking-tight">
            Check CIBIL Score &amp; Credit Tools
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1.5">
            Free credit assessment tools to monitor and build your financial health.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {CIBIL_CARDS.map((card, idx) => (
            <a
              key={idx}
              href={card.gridHref || card.href}
              className="group relative flex flex-col justify-between bg-white rounded-2xl p-6 min-h-47.5 sm:min-h-52.5 border border-slate-200/80 hover:border-brand-accent-border shadow-xs hover:shadow-md transition-all overflow-hidden"
            >
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shrink-0 relative">
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain transform group-hover:scale-108 transition-transform duration-300 drop-shadow-sm select-none"
                  />
                </div>

                <div className="w-8 h-8 rounded-full bg-brand-primary text-white group-hover:bg-brand-accent flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-0 sm:translate-y-1 sm:group-hover:translate-y-0 shadow-xs shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="mt-5">
                <h4 className="text-sm sm:text-base font-bold text-brand-primary leading-snug">
                  {card.title}
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-normal">
                  {card.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
