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

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3">
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
                Products
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                    productsOpen ? "rotate-180 text-[#2E9D52]" : ""
                  }`}
                />
              </button>

              {productsOpen && (
                <div className="absolute top-full -left-20 pt-2 w-[720px] z-50 animate-fadeIn">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6">
                    <div className="grid grid-cols-2 gap-2">
                      {LOAN_PRODUCTS.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => setProductsOpen(false)}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 hover:border-emerald-200 border border-transparent transition group"
                        >
                          <div className="w-9 h-9 rounded-lg bg-emerald-50 text-[#2E9D52] flex items-center justify-center shrink-0 group-hover:bg-[#2E9D52] group-hover:text-white transition">
                            {React.cloneElement(item.icon, {
                              className:
                                "w-5 h-5 text-[#2E9D52] group-hover:text-white transition",
                            })}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-800 group-hover:text-[#0E2E5E]">
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
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                    toolsOpen ? "rotate-180 text-[#2E9D52]" : ""
                  }`}
                />
              </button>

              {toolsOpen && (
                <div className="absolute top-full left-0 pt-2 w-72 z-50 animate-fadeIn">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-3 space-y-1">
                    <Link
                      href="/emi-calculator"
                      onClick={() => setToolsOpen(false)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition shrink-0">
                        <Calculator className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-800">
                          EMI Calculator
                        </div>
                        <div className="text-xs text-slate-500">
                          Calculate monthly repayment
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/#cibil"
                      onClick={() => setToolsOpen(false)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition shrink-0">
                        <Gauge className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-semibold text-slate-800">
                            CIBIL Check
                          </span>
                        </div>
                        <div className="text-xs text-slate-500">
                          Check credit score instantly
                        </div>
                      </div>
                    </Link>
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

          {/* Mobile Menu Toggle Button (No Apply Button) */}
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
              <span>Products</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-500 transition-transform ${
                  productsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {productsOpen && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-3 py-2">
                {LOAN_PRODUCTS.map((prod, idx) => (
                  <Link
                    key={idx}
                    href={prod.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 text-xs font-medium text-slate-800 hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    <span className="shrink-0">{prod.icon}</span>
                    <span>{prod.name}</span>
                  </Link>
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
              <ChevronDown
                className={`w-4 h-4 text-slate-500 transition-transform ${
                  toolsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {toolsOpen && (
              <div className="grid grid-cols-1 gap-1.5 pl-3 py-2">
                <Link
                  href="/emi-calculator"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-xs font-medium text-slate-800 hover:bg-emerald-50 hover:text-emerald-700"
                >
                  <Calculator className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>EMI Calculator</span>
                </Link>
                <Link
                  href="/#cibil"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-50 text-xs font-medium text-slate-800 hover:bg-emerald-50 hover:text-emerald-700"
                >
                  <div className="flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>CIBIL Check</span>
                  </div>
                </Link>
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

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
