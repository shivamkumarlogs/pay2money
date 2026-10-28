"use client";

import React from "react";

export default function CtaBanner() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-2xl bg-brand-primary text-white p-8 sm:p-12 md:p-16 text-center border border-slate-800/80 shadow-md">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Ready to get started?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
            Access loans through trusted partner institutions and get fast
            disbursals with zero agent commission.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#loans"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm sm:text-base bg-brand-accent hover:bg-brand-accent-hover text-brand-dark transition-all transform hover:-translate-y-0.5"
            >
              Explore All Loans
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
