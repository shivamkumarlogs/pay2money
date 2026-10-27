"use client";

import React from "react";
import {
  User,
  Zap,
  Briefcase,
  Home,
  Building2,
  Car,
  Coins,
  GraduationCap,
  Truck,
  CreditCard,
  Gauge,
  PhoneCall,
  PiggyBank,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const LOAN_CARDS = [
  {
    title: "Personal Loan",
    rate: "From 9.99%* p.a.",
    badge: "Collateral Free",
    icon: <User className="w-6 h-6 text-[#2E9D52]" />,
    href: "#calculator",
    desc: "Unsecured loan for urgent expenses, travel, or medical needs",
  },
  {
    title: "Instant Loan",
    rate: "From 10.50%* p.a.",
    badge: "In 10 Minutes",
    icon: <Zap className="w-6 h-6 text-[#2E9D52]" />,
    href: "#calculator",
    desc: "Disbursal directly to bank account within minutes",
  },
  {
    title: "Business Loan",
    rate: "From 9.50%* p.a.",
    badge: "Collateral Free",
    icon: <Briefcase className="w-6 h-6 text-[#2E9D52]" />,
    href: "#calculator",
    desc: "Working capital, machinery & expansion loans up to ₹75 Lakh",
  },
  {
    title: "Home Loan",
    rate: "From 7.10%* p.a.",
    badge: "Lowest Interest",
    icon: <Home className="w-6 h-6 text-[#2E9D52]" />,
    href: "#calculator",
    desc: "Purchase, construct or renovate your dream residence",
  },
  {
    title: "Loan Against Property",
    rate: "From 8.50%* p.a.",
    badge: "High Loan Value",
    icon: <Building2 className="w-6 h-6 text-[#2E9D52]" />,
    href: "#calculator",
    desc: "Leverage commercial or residential real estate value",
  },
  {
    title: "Car Loan (New & Used)",
    rate: "From 8.50%* p.a.",
    badge: "100% Funding",
    icon: <Car className="w-6 h-6 text-[#2E9D52]" />,
    href: "#calculator",
    desc: "Drive away your dream vehicle with flexible EMIs",
  },
  {
    title: "Gold Loan",
    rate: "From 8.75%* p.a.",
    badge: "30-Min Disbursal",
    icon: <Coins className="w-6 h-6 text-[#2E9D52]" />,
    href: "#calculator",
    desc: "Instant cash against gold jewelry with high per-gram rate",
  },
  {
    title: "Education Loan",
    rate: "From 7.50%* p.a.",
    badge: "Moratorium Period",
    icon: <GraduationCap className="w-6 h-6 text-[#2E9D52]" />,
    href: "#calculator",
    desc: "Fund graduation or master's degrees in India and overseas",
  },
  {
    title: "Commercial Vehicle Loan",
    rate: "From 11.00%* p.a.",
    badge: "Fast Delivery",
    icon: <Truck className="w-6 h-6 text-[#2E9D52]" />,
    href: "#calculator",
    desc: "Loans for trucks, buses, tractors and transport fleets",
  },
  {
    title: "Credit Cards",
    rate: "Lifetime Free*",
    badge: "Free Lounge",
    icon: <CreditCard className="w-6 h-6 text-[#2E9D52]" />,
    href: "#calculator",
    desc: "Exclusive airport lounge access, rewards, and cashback",
  },
];

const CIBIL_CARDS = [
  {
    title: "CIBIL Score Check",
    tagline: "Know your score free",
    badge: "100% Free",
    icon: <Gauge className="w-6 h-6 text-[#0E2E5E]" />,
    desc: "Get an authentic CRIF / CIBIL credit report instantly",
    href: "#cibil",
  },
  {
    title: "CIBIL Score Consultation",
    tagline: "Improve your credit profile",
    badge: "Expert Advice",
    icon: <PhoneCall className="w-6 h-6 text-[#0E2E5E]" />,
    desc: "1-on-1 advisor support to boost your score above 750+",
    href: "#footer",
  },
  {
    title: "Fixed Deposit (FD)",
    tagline: "High interest rates up to 9.1%",
    badge: "Safe Return",
    icon: <PiggyBank className="w-6 h-6 text-[#0E2E5E]" />,
    desc: "Book corporate and bank FDs with DICGC insurance cover",
    href: "#calculator",
  },
  {
    title: "Credit Score Builder",
    tagline: "Build credit from scratch",
    badge: "Guaranteed",
    icon: <TrendingUp className="w-6 h-6 text-[#0E2E5E]" />,
    desc: "Build or rebuild your score if you are new to credit",
    href: "#cibil",
  },
];

export default function ProductGrid() {
  return (
    <section
      id="loans"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#2E9D52]">
          Our loans
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E2E5E] tracking-tight mt-2 mb-3">
          The right loan for every need
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          Choose what fits your financial plan with minimal documents, quick
          approval, and one simple application.
        </p>
      </div>

      {/* Category 1: Loans & Cards */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <h3 className="text-xl font-bold text-[#0E2E5E]">Loans and Cards</h3>
          <div className="flex-1 h-px bg-slate-200"></div>
          <span className="text-xs font-semibold text-slate-500">
            10 loans Available
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {LOAN_CARDS.map((card, idx) => (
            <a
              key={idx}
              href={card.href}
              className="group relative flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Badge */}
              <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                {card.badge}
              </span>

              {/* Lucide Icon */}
              <div className="w-14 h-14 rounded-2xl bg-linear-to-tr from-emerald-50 to-blue-50 flex items-center justify-center my-2 shadow-inner group-hover:scale-110 group-hover:bg-[#2E9D52]/10 transition-transform">
                {card.icon}
              </div>

              {/* Title & Rate */}
              <h4 className="text-sm font-bold text-[#0E2E5E] group-hover:text-[#2E9D52] transition-colors mt-2">
                {card.title}
              </h4>
              <span className="text-xs font-bold text-emerald-600 mt-1">
                {card.rate}
              </span>
              <p className="text-[11px] text-slate-500 mt-2 line-clamp-2 leading-tight">
                {card.desc}
              </p>

              <span className="mt-3 text-xs font-semibold text-[#0E2E5E] group-hover:text-[#2E9D52] flex items-center gap-1">
                <span>Apply Online</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Category 2: CIBIL & Financial Tools */}
      <div id="cibil">
        <div className="flex items-center gap-3 mb-6">
          <h3 className="text-xl font-bold text-[#0E2E5E]">
            Check CIBIL Score &amp; Credit Tools
          </h3>
          <div className="flex-1 h-px bg-slate-200"></div>
          <span className="text-xs font-semibold text-emerald-600">
            Zero Score Impact
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CIBIL_CARDS.map((card, idx) => (
            <a
              key={idx}
              href={card.href}
              className="group p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1.5 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-linear-to-tr from-blue-50 to-emerald-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-1">
                  <h4 className="text-sm font-bold text-[#0E2E5E] group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
                    {card.badge}
                  </span>
                </div>
                <div className="text-xs font-semibold text-emerald-600 mt-0.5">
                  {card.tagline}
                </div>
                <p className="text-xs text-slate-500 mt-1">{card.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
