"use client";

import React from "react";

const STEPS = [
  {
    num: "1",
    title: "Submit Details",
    desc: "Choose your desired loan type and submit basic details digitally in just 2 minutes.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    num: "2",
    title: "Partner Matching",
    desc: "We connect your request directly with verified partner banks and NBFCs for quick sanction.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    num: "3",
    title: "Fast Disbursal",
    desc: "Complete simple digital verification and receive funds directly into your bank account.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#2E9D52]">
          How It Works
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E2E5E] tracking-tight mt-2 mb-3">
          Simple steps, no paperwork hassle
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          Get sanctioned loan amounts deposited into your bank account with complete transparency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {STEPS.map((step, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
          >
            {/* Top row */}
            <div className="flex items-center justify-between mb-6">
              <span className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0E2E5E] to-[#2E9D52] text-white font-black text-xl flex items-center justify-center shadow-md">
                {step.num}
              </span>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#2E9D52] flex items-center justify-center group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#0E2E5E] mb-2">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
            </div>

            
          </div>
        ))}
      </div>
    </section>
  );
}
