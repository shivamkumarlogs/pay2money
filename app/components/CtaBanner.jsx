"use client";

import React from "react";
import Button from "./Button";

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
            <Button
              href="#loans"
              variant="accent"
              size="lg"
              className="w-full sm:w-auto"
            >
              Explore All Loans
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
