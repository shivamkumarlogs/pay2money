"usejs";
"use client";

import React, { useState } from "react";

export default function PromoBanner() {
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#0E2E5E] via-[#1B4B8A] to-[#2E9D52] text-white py-2.5 px-4 z-40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/15 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-sm">
        <div className="flex items-center gap-3">
          <p className="text-xs sm:text-sm font-medium text-slate-100">
            Instant Loan up to{" "}
            <span className="font-bold">₹2 Lakh</span>
          </p>
        </div>
        <div className="flex items-center gap-3 ml-auto">
          <a
            href="#products"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold bg-white text-[#0E2E5E] hover:bg-emerald-50 px-3.5 py-1.5 rounded-lg shadow-sm hover:shadow transition-all group"
          >
            Apply Now
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
          <button
            onClick={() => setClosed(true)}
            className="text-slate-300 hover:text-white p-1 rounded-md transition"
            aria-label="Close promotion banner"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
