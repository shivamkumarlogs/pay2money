"use client";

import React from "react";
import { HOW_IT_WORKS_STEPS as STEPS } from "../data/siteData";

export default function HowItWorks() {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-4xl mx-auto text-center space-y-4 mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-4xl font-black text-brand-primary tracking-tight leading-[1.15]">
          Fast approvals in three simple steps.
        </h2>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
          Get sanctioned loan amounts deposited into your bank account with
          complete transparency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {STEPS.map((step, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-2xl p-8 border border-slate-200/80 hover:border-brand-accent-border shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
          >
            {/* Top row */}
            <div className="flex items-center justify-between mb-6">
              <span className="w-12 h-12 rounded-2xl bg-brand-primary text-white font-black text-xl flex items-center justify-center">
                {step.num}
              </span>
              <div className="w-12 h-12 rounded-2xl bg-brand-accent-light text-brand-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-primary mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
