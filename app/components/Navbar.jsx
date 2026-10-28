"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, AlignRight, X } from "lucide-react";
import { LOAN_PRODUCTS as LOAN_loans, NAV_TOOLS as TOOLS } from "../data/siteData";

// Reusable Navigation Link Item (Shared across Desktop & Mobile)
function NavLinkItem({ item, onClick, isMobile = false }) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`flex items-center gap-3 p-2.5 rounded-xl transition group ${
        isMobile
          ? "bg-slate-50/70 hover:bg-emerald-50/60"
          : "hover:bg-slate-50 border border-transparent"
      }`}
    >
      <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-lg bg-emerald-50 text-[#2E9D52] flex items-center justify-center shrink-0 group-hover:bg-[#2E9D52] group-hover:text-white transition">
        {React.cloneElement(item.icon, {
          className: "w-4 h-4 lg:w-5 lg:h-5 transition",
        })}
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-xs lg:text-sm font-semibold text-slate-800 group-hover:text-[#0E2E5E] transition-colors truncate">
          {item.name}
        </div>
        <div className="text-[11px] lg:text-xs text-slate-500 truncate">
          {item.desc}
        </div>
      </div>
    </Link>
  );
}

export default function Navbar() {
  // Desktop: single active dropdown tracker (null | 'loans' | 'tools')
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Mobile: drawer open boolean and active accordion tracker (null | 'loans' | 'tools')
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Bulletproof Scroll Lock (Radix / Moneyview standard)
  useEffect(() => {
    if (mobileOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [mobileOpen]);

  const toggleAccordion = (name) => {
    setActiveAccordion((prev) => (prev === name ? null : name));
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setActiveAccordion(null);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200/80 shadow-xs h-16 flex items-center transform-gpu will-change-transform">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="flex items-center h-10 group"
            >
              <div className="flex items-center text-2xl font-extrabold tracking-tight leading-none">
                <span className="text-[#0E2E5E]">Pay2</span>
                <span className="text-[#2E9D52]">Money</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                href="/"
                className="px-3.5 py-2 text-sm font-semibold text-slate-800 hover:text-[#2E9D52] rounded-lg hover:bg-slate-50 transition"
              >
                Home
              </Link>

              {/* loans Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown("loans")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-slate-800 group-hover:text-[#2E9D52] rounded-lg group-hover:bg-slate-50 transition"
                  aria-expanded={activeDropdown === "loans"}
                >
                  Loans
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                      activeDropdown === "loans"
                        ? "rotate-180 text-[#2E9D52]"
                        : ""
                    }`}
                  />
                </button>

                {activeDropdown === "loans" && (
                  <div className="absolute top-full -left-20 pt-2 w-170 z-50 animate-fadeIn">
                    <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-5">
                      <div className="grid grid-cols-2 gap-2">
                        {LOAN_loans.map((prod) => (
                          <NavLinkItem
                            key={prod.name}
                            item={prod}
                            onClick={() => setActiveDropdown(null)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Tools Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown("tools")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-slate-800 group-hover:text-[#2E9D52] rounded-lg group-hover:bg-slate-50 transition"
                  aria-expanded={activeDropdown === "tools"}
                >
                  Tools
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                      activeDropdown === "tools"
                        ? "rotate-180 text-[#2E9D52]"
                        : ""
                    }`}
                  />
                </button>

                {activeDropdown === "tools" && (
                  <div className="absolute top-full left-0 pt-2 w-72 z-50 animate-fadeIn">
                    <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 space-y-1">
                      {TOOLS.map((tool) => (
                        <NavLinkItem
                          key={tool.name}
                          item={tool}
                          onClick={() => setActiveDropdown(null)}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="px-3.5 py-2 text-sm font-semibold text-slate-800 hover:text-[#2E9D52] rounded-lg hover:bg-slate-50 transition"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="px-3.5 py-2 text-sm font-semibold text-slate-800 hover:text-[#2E9D52] rounded-lg hover:bg-slate-50 transition"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileOpen(true)}
                className="w-10 h-10 -mr-2 flex items-center justify-center text-slate-800 hover:text-[#0E2E5E] rounded-lg focus:outline-none transition active:scale-95"
                aria-label="Open mobile menu"
              >
                <AlignRight className="w-6 h-6 stroke-[2.2]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Moneyview-Style Mobile Drawer & Backdrop */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* 1. Dark Backdrop (Clicking outside closes drawer) */}
          <div
            onClick={closeMobileMenu}
            onWheel={(e) => e.preventDefault()}
            onTouchMove={(e) => e.preventDefault()}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity animate-fadeIn touch-none select-none"
          />

          {/* 2. Slide-In Right Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-77.5 max-w-[85vw] bg-white z-50 shadow-2xl flex flex-col overflow-hidden animate-slideInRight touch-auto overscroll-contain">
            {/* Drawer Top Header */}
            <div className="flex items-center justify-between px-4 h-16 border-b border-slate-100">
              <div className="flex items-center h-10 text-xl font-extrabold tracking-tight leading-none">
                <span className="text-[#0E2E5E]">Pay2</span>
                <span className="text-[#2E9D52]">Money</span>
              </div>
              <button
                onClick={closeMobileMenu}
                className="w-10 h-10 -mr-2 flex items-center justify-center text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition active:scale-95"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 stroke-[2.2]" />
              </button>
            </div>

            {/* Scrollable Navigation Links with dashed dividers */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2 overscroll-contain">
              <div className="border-b border-slate-200 pb-2">
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
                >
                  Home
                </Link>
              </div>

              {/* Mobile loans Accordion */}
              <div className="border-b border-slate-200 pb-2">
                <button
                  onClick={() => toggleAccordion("loans")}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
                >
                  <span>Loans</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform ${
                      activeAccordion === "loans"
                        ? "rotate-180 text-[#2E9D52]"
                        : ""
                    }`}
                  />
                </button>
                {activeAccordion === "loans" && (
                  <div className="grid grid-cols-1 gap-1.5 pl-2 pt-1.5">
                    {LOAN_loans.map((prod) => (
                      <NavLinkItem
                        key={prod.name}
                        item={prod}
                        isMobile={true}
                        onClick={closeMobileMenu}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Tools Accordion */}
              <div className="border-b border-slate-200 pb-2">
                <button
                  onClick={() => toggleAccordion("tools")}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
                >
                  <span>Tools</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform ${
                      activeAccordion === "tools"
                        ? "rotate-180 text-[#2E9D52]"
                        : ""
                    }`}
                  />
                </button>
                {activeAccordion === "tools" && (
                  <div className="grid grid-cols-1 gap-1.5 pl-2 pt-1.5">
                    {TOOLS.map((tool) => (
                      <NavLinkItem
                        key={tool.name}
                        item={tool}
                        isMobile={true}
                        onClick={closeMobileMenu}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="border-b border-slate-200 pb-2">
                <Link
                  href="/about"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
                >
                  About
                </Link>
              </div>

              <div>
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
