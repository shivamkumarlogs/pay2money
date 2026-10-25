"use client";

import React from "react";

export default function CtaBanner() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0E2E5E] via-[#163D78] to-[#1F7C3F] text-white p-8 sm:p-12 md:p-16 text-center shadow-2xl border border-white/10">
        {/* Glow backdrop circles */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Ready to get started?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed">
            Access loans through trusted partner institutions and get fast disbursals with zero agent commission.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm sm:text-base bg-[#2E9D52] hover:bg-[#23B14E] text-white shadow-xl shadow-emerald-950/40 transform hover:-translate-y-0.5 transition-all"
            >
              Explore All Loans
            </a>
      
          </div>
        </div>
      </div>
    </section>
  );
}
