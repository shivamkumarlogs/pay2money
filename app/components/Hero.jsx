"use client";

import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-slate-50/60 via-white to-slate-50/80 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      {/* Subtle Background Glow Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-72 bg-linear-to-b from-emerald-100/30 via-sky-100/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto text-center space-y-8">
        
      

        {/* High-Impact Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0E2E5E] tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Loans at the{" "}
          <span className="bg-linear-to-r from-[#0E2E5E] via-[#1E78C8] to-[#2E9D52] bg-clip-text text-transparent">
            Lowest Rates.
          </span>
        </h1>

        {/* Concise Value Proposition */}
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
          Get personal, home, and business loans through India’s top lending partners. Completely digital, zero hidden fees, and fast sanction.
        </p>

        {/* Clean, Polished Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <a
            href="#products"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-linear-to-r from-[#0E2E5E] to-[#2E9D52] hover:from-[#0B254D] hover:to-[#268444] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2"
          >
            <span>Explore All Loan</span>
          </a>

          <Link
            href="/emi-calculator"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-[#0E2E5E] bg-white border border-slate-300 hover:border-[#2E9D52] hover:text-[#2E9D52] shadow-sm hover:shadow transition-all text-center flex items-center justify-center gap-2"
          >
            <span>Calculate Monthly EMI</span>
          </Link>
        </div>

        {/* Micro-Trust Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold text-slate-500 pt-3">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Zero Impact on CIBIL to Check
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Instant Digital Sanction
          </span>
          
        </div>

      </div>
    </section>
  );
}


