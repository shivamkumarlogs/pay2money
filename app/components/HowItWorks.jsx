"use client";

import React from "react";
import { User, ClipboardCheck, ShieldCheck } from "lucide-react";

const STEPS = [
  {
    num: "1",
    title: "Submit Details",
    desc: "Choose your desired loan type and submit basic details digitally in just 2 minutes.",
    icon: <User className="w-6 h-6" strokeWidth={2} />,
  },
  {
    num: "2",
    title: "Partner Matching",
    desc: "We connect your request directly with verified partner banks and NBFCs for quick sanction.",
    icon: <ClipboardCheck className="w-6 h-6" strokeWidth={2} />,
  },
  {
    num: "3",
    title: "Fast Disbursal",
    desc: "Complete simple digital verification and receive funds directly into your bank account.",
    icon: <ShieldCheck className="w-6 h-6" strokeWidth={2} />,
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
          Get sanctioned loan amounts deposited into your bank account with
          complete transparency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {STEPS.map((step, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-xl p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
          >
            {/* Top row */}
            <div className="flex items-center justify-between mb-6">
              <span className="w-12 h-12 rounded-2xl bg-linear-to-tr from-[#0E2E5E] to-[#2E9D52] text-white font-black text-xl flex items-center justify-center shadow-md">
                {step.num}
              </span>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#2E9D52] flex items-center justify-center group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#0E2E5E] mb-2">
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
