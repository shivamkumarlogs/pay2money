"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[#071830] text-slate-300 pt-4 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Top Row: Brand & Contact */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand */}
          <div className="flex items-center">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="text-2xl font-black tracking-tight text-white">
                Pay2<span className="text-[#2E9D52]">Money</span>
              </span>
            </Link>
          </div>

          {/* Dummy Contact Details */}
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-x-8 gap-y-3 text-xs sm:text-sm text-slate-400">
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>123 Test District, Test, Test 123456</span>
            </p>

            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <a
                href="tel:+918726825434"
                className="hover:text-emerald-400 transition"
              >
                +91 1234567890
              </a>
            </p>

            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <a
                href="mailto:support@pay2money.com"
                className="hover:text-emerald-400 transition"
              >
                support@pay2money.com
              </a>
            </p>
          </div>
        </div>

        {/* Regulatory Disclaimer & Copyright */}
        <div className="pt-4 text-xs text-slate-400 space-y-3">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 space-y-2">
            <h5 className="font-bold text-slate-300 uppercase tracking-wider text-[11px]">
              Regulatory &amp; Lending Disclaimer
            </h5>
            <p className="leading-relaxed text-[11px] text-slate-400">
              Pay2Money is an online loan facilitation platform. Pay2Money is NOT a bank or a Non-Banking Financial Company (NBFC) registered under the Reserve Bank of India Act, 1934. We do not directly lend money to consumers.
            </p>
            <p className="leading-relaxed text-[11px] text-slate-400">
              Loan approval, terms, interest rates, and disbursal are exclusively decided and executed by our partner scheduled commercial banks and RBI-regulated NBFCs according to their internal underwriting criteria. Submitting an application on Pay2Money does not constitute an explicit loan guarantee.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-[11px] pt-1">
            <p>
              &copy; {currentYear} Pay2Money. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <a href="#footer" className="hover:text-white transition">Privacy Policy</a>
              <a href="#footer" className="hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

