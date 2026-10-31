"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { SITE_CONFIG } from "../data/siteData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-brand-dark text-slate-300 pt-4 pb-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Top Row: Brand & Contact */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand */}
          <div className="flex items-center">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="text-2xl font-black tracking-tight text-white">
                Pay2<span className="text-brand-accent">Money</span>
              </span>
            </Link>
          </div>

          {/* Contact Details from siteData */}
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-x-6 gap-y-2 text-xs text-slate-400">
            <p className="flex items-center gap-1.5 text-[11px] text-slate-400 max-w-xs sm:max-w-sm">
              <MapPin className="w-3.5 h-3.5 text-brand-accent shrink-0" />
              <span>{SITE_CONFIG.footerAddress || SITE_CONFIG.address}</span>
            </p>

            <p className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-400">
              <Phone className="w-3.5 h-3.5 text-brand-accent shrink-0" />
              <a
                href={SITE_CONFIG.phoneHref}
                className="hover:text-brand-accent transition-colors"
              >
                {SITE_CONFIG.phone}
              </a>
            </p>

            <p className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-400">
              <Mail className="w-3.5 h-3.5 text-brand-accent shrink-0" />
              <a
                href={SITE_CONFIG.emailHref}
                className="hover:text-brand-accent transition-colors"
              >
                {SITE_CONFIG.email}
              </a>
            </p>
          </div>
        </div>

        {/* Regulatory Disclaimer & Copyright */}
        <div className="pt-4 text-xs text-slate-400 space-y-3">
          <div className="p-4 rounded-xl bg-[#060E1C] border border-white/5 space-y-2">
            <h5 className="font-bold text-slate-300 uppercase tracking-wider text-[11px]">
              Regulatory &amp; Lending Disclaimer
            </h5>
            <p className="leading-relaxed text-[11px] text-slate-400">
              {SITE_CONFIG.disclaimer}
            </p>
            <p className="leading-relaxed text-[11px] text-slate-400">
              Loan approval, terms, interest rates, and disbursal are exclusively decided and executed by our partner scheduled commercial banks and RBI-regulated NBFCs according to their internal underwriting criteria. Submitting an application on Pay2Money does not constitute an explicit loan guarantee.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-[11px] pt-1">
            <p>
              &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <Link href="/privacy-policy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link>
              <Link href="#footer" className="hover:text-brand-accent transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
