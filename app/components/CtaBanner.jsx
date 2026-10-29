"use client";

import React from "react";
import Button from "./Button";

export default function CtaBanner() {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-2xl bg-brand-primary text-white p-8 sm:p-12 md:p-16 text-center border border-slate-800/80 shadow-md">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-[1.15]">
            Find your best loan offer today.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Connect directly with accredited banks and NBFCs for instant
            sanctions at competitive rates.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
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
