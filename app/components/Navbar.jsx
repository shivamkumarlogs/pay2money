"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const LOAN_PRODUCTS = [
  {
    name: "Instant Loan",
    desc: "Approval in 10 minutes",
    href: "#products",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: "Personal Loan",
    desc: "From 9.99% p.a.",
    href: "#products",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    name: "Business Loan",
    desc: "Collateral free working capital",
    href: "#products",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "Home Loan",
    desc: "From 7.10% p.a.",
    href: "#products",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    name: "Loan Against Property",
    desc: "Unlock your property value",
    href: "#products",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    name: "Car Loan (New & Used)",
    desc: "Up to 100% on-road funding",
    href: "#products",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    name: "Commercial Vehicle Loan",
    desc: "Competitive truck & bus loans",
    href: "#products",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
      </svg>
    ),
  },
  {
    name: "Education Loan",
    desc: "Study in India or Abroad",
    href: "#products",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    name: "Gold Loan",
    desc: "30-min instant disbursal",
    href: "#products",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "Credit Cards",
    desc: "Lifetime free & lounge access",
    href: "#products",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2.5"
          : "bg-white/85 backdrop-blur-sm border-b border-slate-200 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            
            <div className="flex flex-col">
              <div className="flex items-center text-2xl font-extrabold tracking-tight">
                <span className="text-[#0E2E5E]">Pay2</span>
                <span className="text-[#2E9D52]">Money</span>
              </div>
              
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              className="px-3.5 py-2 text-sm font-semibold text-slate-800 hover:text-[#2E9D52] rounded-lg hover:bg-slate-50 transition"
            >
              Home
            </Link>

            {/* Products Mega Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-slate-800 group-hover:text-[#2E9D52] rounded-lg group-hover:bg-slate-50 transition"
                aria-expanded={productsOpen}
              >
                Our Products
                <svg
                  className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                    productsOpen ? "rotate-180 text-[#2E9D52]" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mega Menu Popup */}
              {productsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[640px] z-50 animate-fadeIn">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                      <div>
                        <h4 className="text-sm font-bold text-[#0E2E5E] uppercase tracking-wider">All Loans & Cards</h4>
                        <p className="text-xs text-slate-500">Compare rates from 40+ verified Indian lenders</p>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                        100% Free
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {LOAN_PRODUCTS.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          onClick={() => setProductsOpen(false)}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 hover:border-emerald-200 border border-transparent transition group"
                        >
                          <div className="w-9 h-9 rounded-lg bg-emerald-50 text-[#2E9D52] flex items-center justify-center shrink-0 group-hover:bg-[#2E9D52] group-hover:text-white transition">
                            {item.icon}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-800 group-hover:text-[#0E2E5E]">
                              {item.name}
                            </div>
                            <div className="text-xs text-slate-500">{item.desc}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Tools Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setToolsOpen(true)}
              onMouseLeave={() => setToolsOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-slate-800 group-hover:text-[#2E9D52] rounded-lg group-hover:bg-slate-50 transition"
                aria-expanded={toolsOpen}
              >
                Tools
                <svg
                  className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                    toolsOpen ? "rotate-180 text-[#2E9D52]" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {toolsOpen && (
                <div className="absolute top-full left-0 pt-2 w-72 z-50 animate-fadeIn">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-3 space-y-1">
                    <a
                      href="#calculator"
                      onClick={() => setToolsOpen(false)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-800">EMI Calculator</div>
                        <div className="text-xs text-slate-500">Calculate monthly repayment</div>
                      </div>
                    </a>

                    <a
                      href="#cibil"
                      onClick={() => setToolsOpen(false)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-semibold text-slate-800">CIBIL Check</span>
                          <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded-full">
                            FREE
                          </span>
                        </div>
                        <div className="text-xs text-slate-500">Check credit score instantly</div>
                      </div>
                    </a>
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

            <a
              href="#footer"
              className="px-3.5 py-2 text-sm font-semibold text-slate-800 hover:text-[#2E9D52] rounded-lg hover:bg-slate-50 transition"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Toggle Button (No Apply Button) */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-slate-700 hover:text-[#0E2E5E] rounded-lg focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-fadeIn">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Home
          </Link>

          <div>
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              <span>Our Products</span>
              <svg
                className={`w-4 h-4 text-slate-500 transition-transform ${productsOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {productsOpen && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-3 py-2">
                {LOAN_PRODUCTS.map((prod, idx) => (
                  <a
                    key={idx}
                    href={prod.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-xs font-medium text-slate-800 hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    <span className="text-[#2E9D52]">{prod.icon}</span>
                    {prod.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setToolsOpen(!toolsOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              <span>Tools</span>
              <svg
                className={`w-4 h-4 text-slate-500 transition-transform ${toolsOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {toolsOpen && (
              <div className="grid grid-cols-1 gap-1.5 pl-3 py-2">
                <a
                  href="#calculator"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-xs font-medium text-slate-800 hover:bg-emerald-50 hover:text-emerald-700"
                >
                  <span className="text-blue-600">📊</span>
                  EMI Calculator
                </a>
                <a
                  href="#cibil"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-50 text-xs font-medium text-slate-800 hover:bg-emerald-50 hover:text-emerald-700"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600">🎯</span>
                    <span>CIBIL Check</span>
                  </div>
                  <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded-full">
                    FREE
                  </span>
                </a>
              </div>
            )}
          </div>

          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            About
          </Link>

          <a
            href="#footer"
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
