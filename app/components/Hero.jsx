"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* High-Impact Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-primary tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Loans at the{" "}
          <span className="text-brand-accent">
            Lowest Rates.
          </span>
        </h1>

        {/* Concise Value Proposition */}
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
          Get personal, home, and business loans through India’s top lending
          partners. Completely digital, zero hidden fees, and fast sanction.
        </p>

        {/* Clean, Polished Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <a
            href="#loans"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-brand-primary hover:bg-brand-primary-hover shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2 group"
          >
            <span>Explore All Loans</span>
          </a>

          <Link
            href="/emi-calculator"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-brand-primary bg-white border border-slate-300 hover:border-brand-primary shadow-xs hover:shadow transition-all text-center flex items-center justify-center gap-2"
          >
            <span>Calculate Monthly EMI</span>
          </Link>
        </div>

        {/* Micro-Trust Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold text-slate-500 pt-3">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
            Zero Impact on CIBIL to Check
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
            Instant Digital Sanction
          </span>
        </div>
      </div>
    </section>
  );
}
