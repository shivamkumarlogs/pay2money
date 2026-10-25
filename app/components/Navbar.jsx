"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Zap,
  User,
  Briefcase,
  Home,
  Building2,
  Car,
  Truck,
  GraduationCap,
  Coins,
  CreditCard,
  ChevronDown,
  Calculator,
  Gauge,
  Menu,
  X,
} from "lucide-react";

const LOAN_PRODUCTS = [
  {
    name: "Instant Loan",
    desc: "Approval in 10 minutes",
    href: "/#products",
    icon: <Zap className="w-5 h-5 text-[#2E9D52]" />,
  },
  {
    name: "Personal Loan",
    desc: "Minimal digital documentation",
    href: "/#products",
    icon: <User className="w-5 h-5 text-[#2E9D52]" />,
  },
  {
    name: "Business Loan",
    desc: "Collateral free working capital",
    href: "/#products",
    icon: <Briefcase className="w-5 h-5 text-[#2E9D52]" />,
  },
  {
    name: "Home Loan",
    desc: "Long flexible repayment tenures",
    href: "/#products",
    icon: <Home className="w-5 h-5 text-[#2E9D52]" />,
  },
  {
    name: "Loan Against Property",
    desc: "Unlock your property value",
    href: "/#products",
    icon: <Building2 className="w-5 h-5 text-[#2E9D52]" />,
  },
  {
    name: "Car Loan (New & Used)",
    desc: "New and used vehicle funding",
    href: "/#products",
    icon: <Car className="w-5 h-5 text-[#2E9D52]" />,
  },
  {
    name: "Commercial Vehicle Loan",
    desc: "Competitive truck & bus loans",
    href: "/#products",
    icon: <Truck className="w-5 h-5 text-[#2E9D52]" />,
  },
  {
    name: "Education Loan",
    desc: "Study in India or Abroad",
    href: "/#products",
    icon: <GraduationCap className="w-5 h-5 text-[#2E9D52]" />,
  },
  {
    name: "Gold Loan",
    desc: "30-min instant disbursal",
    href: "/#products",
    icon: <Coins className="w-5 h-5 text-[#2E9D52]" />,
  },
  {
    name: "Credit Cards",
    desc: "Lifetime free & lounge access",
    href: "/#products",
    icon: <CreditCard className="w-5 h-5 text-[#2E9D52]" />,
  },
];

const TOOLS = [
  {
    name: "EMI Calculator",
    desc: "Calculate monthly repayment",
    href: "/emi-calculator",
    icon: <Calculator className="w-5 h-5 text-[#2E9D52]" />,
  },
  {
    name: "CIBIL Check",
    desc: "Check credit score instantly",
    href: "/#cibil",
    icon: <Gauge className="w-5 h-5 text-[#2E9D52]" />,
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  // Dedicated mobile accordion states (prevents desktop/mobile state conflict)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileProductsOpen(false);
    setMobileToolsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-2.5 group"
          >
            <div className="flex flex-col">
              <div className="flex items-center text-2xl font-extrabold tracking-tight">
                <span className="text-[#0E2E5E]">Pay2</span>
                <span className="text-[#2E9D52]">Money</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              className="px-3.5 py-2 text-sm font-semibold text-slate-800 hover:text-[#2E9D52] rounded-lg hover:bg-slate-50 transition"
            >
              Home
            </Link>

            {/* Desktop Products Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-slate-800 group-hover:text-[#2E9D52] rounded-lg group-hover:bg-slate-50 transition"
                aria-expanded={productsOpen}
              >
                Products
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                    productsOpen ? "rotate-180 text-[#2E9D52]" : ""
                  }`}
                />
              </button>

              {productsOpen && (
                <div className="absolute top-full -left-20 pt-2 w-[680px] z-50 animate-fadeIn">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-5">
                    <div className="grid grid-cols-2 gap-2">
                      {LOAN_PRODUCTS.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => setProductsOpen(false)}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition group border border-transparent"
                        >
                          <div className="w-9 h-9 rounded-lg bg-emerald-50 text-[#2E9D52] flex items-center justify-center shrink-0 group-hover:bg-[#2E9D52] group-hover:text-white transition">
                            {React.cloneElement(item.icon, {
                              className: "w-5 h-5 transition",
                            })}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-800 group-hover:text-[#0E2E5E] transition-colors">
                              {item.name}
                            </div>
                            <div className="text-xs text-slate-500">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Desktop Tools Dropdown */}
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
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                    toolsOpen ? "rotate-180 text-[#2E9D52]" : ""
                  }`}
                />
              </button>

              {toolsOpen && (
                <div className="absolute top-full left-0 pt-2 w-72 z-50 animate-fadeIn">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 space-y-1">
                    {TOOLS.map((tool, idx) => (
                      <Link
                        key={idx}
                        href={tool.href}
                        onClick={() => setToolsOpen(false)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition group border border-transparent"
                      >
                        <div className="w-9 h-9 rounded-lg bg-emerald-50 text-[#2E9D52] flex items-center justify-center shrink-0 group-hover:bg-[#2E9D52] group-hover:text-white transition">
                          {React.cloneElement(tool.icon, {
                            className: "w-5 h-5 transition",
                          })}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-800 group-hover:text-[#0E2E5E] transition-colors">
                            {tool.name}
                          </div>
                          <div className="text-xs text-slate-500">
                            {tool.desc}
                          </div>
                        </div>
                      </Link>
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

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-slate-700 hover:text-[#0E2E5E] rounded-lg focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Styled identically to Desktop with icon badges & subtitles) */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-fadeIn max-h-[calc(100vh-80px)] overflow-y-auto">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Home
          </Link>

          {/* Mobile Products Accordion */}
          <div>
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              <span>Products</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-500 transition-transform ${
                  mobileProductsOpen ? "rotate-180 text-[#2E9D52]" : ""
                }`}
              />
            </button>
            {mobileProductsOpen && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2 pr-1 py-2">
                {LOAN_PRODUCTS.map((prod, idx) => (
                  <Link
                    key={idx}
                    href={prod.href}
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50/70 hover:bg-emerald-50/60 transition group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#2E9D52] flex items-center justify-center shrink-0 group-hover:bg-[#2E9D52] group-hover:text-white transition">
                      {React.cloneElement(prod.icon, {
                        className: "w-4 h-4 transition",
                      })}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-semibold text-slate-800 group-hover:text-[#0E2E5E] transition-colors truncate">
                        {prod.name}
                      </div>
                      <div className="text-[11px] text-slate-500 truncate">
                        {prod.desc}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Tools Accordion */}
          <div>
            <button
              onClick={() => setMobileToolsOpen(!mobileToolsOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              <span>Tools</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-500 transition-transform ${
                  mobileToolsOpen ? "rotate-180 text-[#2E9D52]" : ""
                }`}
              />
            </button>
            {mobileToolsOpen && (
              <div className="grid grid-cols-1 gap-2 pl-2 pr-1 py-2">
                {TOOLS.map((tool, idx) => (
                  <Link
                    key={idx}
                    href={tool.href}
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50/70 hover:bg-emerald-50/60 transition group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#2E9D52] flex items-center justify-center shrink-0 group-hover:bg-[#2E9D52] group-hover:text-white transition">
                      {React.cloneElement(tool.icon, {
                        className: "w-4 h-4 transition",
                      })}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-semibold text-slate-800 group-hover:text-[#0E2E5E] transition-colors truncate">
                        {tool.name}
                      </div>
                      <div className="text-[11px] text-slate-500 truncate">
                        {tool.desc}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/about"
            onClick={closeMobileMenu}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            About
          </Link>

          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
