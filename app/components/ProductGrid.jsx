"use client";

import React from "react";
import {
  ArrowUpRight,
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
} from "lucide-react";

const LOAN_CARDS = [
  {
    title: "Personal Loan",
    desc: "Get up to ₹50 Lakhs in minutes",
    img: "https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-160/1f4b0.png",
    fallbackIcon: <User className="w-8 h-8 text-[#2E9D52]" />,
    href: "#calculator",
  },
  {
    title: "Instant Loan",
    desc: "Approval in 10 minutes, direct bank transfer",
    img: "https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-160/26a1.png",
    fallbackIcon: <Zap className="w-8 h-8 text-[#2E9D52]" />,
    href: "#calculator",
  },
  {
    title: "Business Loan",
    desc: "Fuel your growth with up to ₹75 Lakhs instantly",
    img: "https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-160/1f4bc.png",
    fallbackIcon: <Briefcase className="w-8 h-8 text-[#2E9D52]" />,
    href: "#calculator",
  },
  {
    title: "Home Loan",
    desc: "Lowest interest rates starting at 7.10%* p.a.",
    img: "https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-160/1f3e0.png",
    fallbackIcon: <Home className="w-8 h-8 text-[#2E9D52]" />,
    href: "#calculator",
  },
  {
    title: "Loan Against Property",
    desc: "Unlock higher value - up to ₹10 Crore in 1 day*",
    img: "https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-160/1f3e2.png",
    fallbackIcon: <Building2 className="w-8 h-8 text-[#2E9D52]" />,
    href: "#calculator",
  },
  {
    title: "Car Loan (New & Used)",
    desc: "Drive home your dream car with 100% on-road funding",
    img: "https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-160/1f697.png",
    fallbackIcon: <Car className="w-8 h-8 text-[#2E9D52]" />,
    href: "#calculator",
  },
  {
    title: "Gold Loan",
    desc: "30-minute instant cash with safe bank vault storage",
    img: "https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-160/1fa99.png",
    fallbackIcon: <Coins className="w-8 h-8 text-[#2E9D52]" />,
    href: "#calculator",
  },
  {
    title: "Education Loan",
    desc: "Fund higher education in India or premier universities abroad",
    img: "https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-160/1f393.png",
    fallbackIcon: <GraduationCap className="w-8 h-8 text-[#2E9D52]" />,
    href: "#calculator",
  },
  {
    title: "Commercial Vehicle Loan",
    desc: "Fast funding for trucks, buses, tractors and transport fleets",
    img: "https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-160/1f69a.png",
    fallbackIcon: <Truck className="w-8 h-8 text-[#2E9D52]" />,
    href: "#calculator",
  },
  {
    title: "Credit Cards",
    desc: "Compare lifetime free cards with airport lounge & rewards",
    img: "https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-160/1f4b3.png",
    fallbackIcon: <CreditCard className="w-8 h-8 text-[#2E9D52]" />,
    href: "#calculator",
  },
];

const CIBIL_CARDS = [
  {
    title: "Free CIBIL Score Check",
    desc: "Check your official score in 30 seconds for free",
    img: "https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-160/1f4ca.png",
    fallbackIcon: <Gauge className="w-8 h-8 text-[#0E2E5E]" />,
    href: "#cibil",
  },
  {
    title: "CIBIL Score Consultation",
    desc: "1-on-1 advisor support to boost your score to 750+",
    img: "https://3dicons.sgp1.cdn.digitaloceanspaces.com/v1/dynamic/color/headphone-dynamic-color.png",
    fallbackIcon: <PhoneCall className="w-8 h-8 text-[#0E2E5E]" />,
    href: "#footer",
  },
  {
    title: "Fixed Deposit (FD)",
    desc: "High interest rates up to 9.1% with DICGC cover",
    img: "https://3dicons.sgp1.cdn.digitaloceanspaces.com/v1/dynamic/color/locker-dynamic-color.png",
    fallbackIcon: <PiggyBank className="w-8 h-8 text-[#0E2E5E]" />,
    href: "#calculator",
  },
  {
    title: "Credit Score Builder",
    desc: "Build your credit score from scratch with ease",
    img: "https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-160/1f4c8.png",
    fallbackIcon: <TrendingUp className="w-8 h-8 text-[#0E2E5E]" />,
    href: "#cibil",
  },
];

export default function ProductGrid() {
  return (
    <section
      id="loans"
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Category 1: Loans and Cards Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0E2E5E] tracking-tight">
          Loans and Cards
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1.5">
          Simple digital applications with minimal paperwork and instant partner sanctions.
        </p>
      </div>

      {/* Kissht / SetuMoney Inspired Minimal 3D Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-14 sm:mb-16">
        {LOAN_CARDS.map((card, idx) => (
          <a
            key={idx}
            href={card.href}
            className="group relative flex flex-col justify-between bg-[#F4F7FC] rounded-2xl p-6 min-h-52.5 sm:min-h-57.5 border border-slate-200/60 shadow-xs overflow-hidden"
          >
            {/* Top Row: 3D Illustration on left, Circular Arrow on right (appears on hover) */}
            <div className="flex items-start justify-between">
              <div className="w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center shrink-0">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-contain transform group-hover:scale-108 transition-transform duration-300 drop-shadow-sm select-none"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              {/* Kissht-Style Top-Right Circular Hover Button */}
              <div className="w-8 h-8 rounded-full bg-[#0E2E5E] text-white flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-0 sm:translate-y-1 sm:group-hover:translate-y-0 shadow-xs shrink-0">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Bottom Row: Title and Simple Subtitle */}
            <div className="mt-6">
              <h4 className="text-base sm:text-lg font-bold text-[#0E2E5E] leading-snug">
                {card.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-normal">
                {card.desc}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Category 2: CIBIL Score & Financial Tools */}
      <div id="cibil">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0E2E5E] tracking-tight">
            Check CIBIL Score &amp; Credit Tools
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1.5">
            Free credit assessment tools to monitor and build your financial health.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {CIBIL_CARDS.map((card, idx) => (
            <a
              key={idx}
              href={card.href}
              className="group relative flex flex-col justify-between bg-[#F4F7FC] rounded-2xl p-6 min-h-47.5 sm:min-h-52.5 border border-slate-200/60 shadow-xs overflow-hidden"
            >
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shrink-0">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-contain transform group-hover:scale-108 transition-transform duration-300 drop-shadow-sm select-none"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <div className="w-8 h-8 rounded-full bg-[#0E2E5E] text-white flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-0 sm:translate-y-1 sm:group-hover:translate-y-0 shadow-xs shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="mt-5">
                <h4 className="text-sm sm:text-base font-bold text-[#0E2E5E] leading-snug">
                  {card.title}
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-normal">
                  {card.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
