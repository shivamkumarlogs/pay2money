import React from "react";
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
  Calculator,
  Gauge,
  PhoneCall,
  PiggyBank,
  TrendingUp,
  ClipboardCheck,
  ShieldCheck,
} from "lucide-react";

// ==========================================
// 1. Core Brand & Contact Information
// ==========================================
export const SITE_CONFIG = {
  name: "Pay2Money",
  tagline: "Loans at the Lowest Rates",
  phone: "+91 1234567890",
  phoneHref: "tel:+911234567890",
  email: "support@pay2money.com",
  emailHref: "mailto:support@pay2money.com",
  address: "123 Test District, Test, Test 123456",
  workingHours: "Monday to Saturday, 9:30 AM to 6:30 PM",
  disclaimer:
    "Pay2Money is an online loan facilitation platform. Pay2Money is NOT a bank or a Non-Banking Financial Company (NBFC) registered under the Reserve Bank of India Act, 1934. We do not directly lend money to consumers. We connect borrowers with partner banks and NBFCs.",
};

// ==========================================
// 2. Primary Loan Products (Navbar + ProductGrid)
// ==========================================
export const LOAN_PRODUCTS = [
  {
    id: "personal-loan",
    title: "Personal Loan",
    name: "Personal Loan",
    desc: "Get up to ₹50 Lakhs in minutes",
    navDesc: "Minimal digital documentation",
    href: "/#loans",
    gridHref: "#calculator",
    img: "https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-160/1f4b0.png",
    icon: <User />,
    fallbackIcon: <User className="w-8 h-8 text-[#2E9D52]" />,
  },
  {
    id: "instant-loan",
    title: "Instant Loan",
    name: "Instant Loan",
    desc: "Approval in 10 minutes, direct bank transfer",
    navDesc: "Approval in 10 minutes",
    href: "/#loans",
    gridHref: "#calculator",
    img: "https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-160/26a1.png",
    icon: <Zap />,
    fallbackIcon: <Zap className="w-8 h-8 text-[#2E9D52]" />,
  },
  {
    id: "business-loan",
    title: "Business Loan",
    name: "Business Loan",
    desc: "Fuel your growth with up to ₹75 Lakhs instantly",
    navDesc: "Collateral free working capital",
    href: "/#loans",
    gridHref: "#calculator",
    img: "https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-160/1f4bc.png",
    icon: <Briefcase />,
    fallbackIcon: <Briefcase className="w-8 h-8 text-[#2E9D52]" />,
  },
  {
    id: "home-loan",
    title: "Home Loan",
    name: "Home Loan",
    desc: "Lowest interest rates starting at 7.10%* p.a.",
    navDesc: "Long flexible repayment tenures",
    href: "/#loans",
    gridHref: "#calculator",
    img: "https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-160/1f3e0.png",
    icon: <Home />,
    fallbackIcon: <Home className="w-8 h-8 text-[#2E9D52]" />,
  },
  {
    id: "loan-against-property",
    title: "Loan Against Property",
    name: "Loan Against Property",
    desc: "Unlock higher value - up to ₹10 Crore in 1 day*",
    navDesc: "Unlock your property value",
    href: "/#loans",
    gridHref: "#calculator",
    img: "https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-160/1f3e2.png",
    icon: <Building2 />,
    fallbackIcon: <Building2 className="w-8 h-8 text-[#2E9D52]" />,
  },
  {
    id: "car-loan",
    title: "Car Loan (New & Used)",
    name: "Car Loan (New & Used)",
    desc: "Drive home your dream car with 100% on-road funding",
    navDesc: "New and used vehicle funding",
    href: "/#loans",
    gridHref: "#calculator",
    img: "https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-160/1f697.png",
    icon: <Car />,
    fallbackIcon: <Car className="w-8 h-8 text-[#2E9D52]" />,
  },
  {
    id: "gold-loan",
    title: "Gold Loan",
    name: "Gold Loan",
    desc: "30-minute instant cash with safe bank vault storage",
    navDesc: "30-min instant disbursal",
    href: "/#loans",
    gridHref: "#calculator",
    img: "https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-160/1fa99.png",
    icon: <Coins />,
    fallbackIcon: <Coins className="w-8 h-8 text-[#2E9D52]" />,
  },
  {
    id: "education-loan",
    title: "Education Loan",
    name: "Education Loan",
    desc: "Fund higher education in India or premier universities abroad",
    navDesc: "Study in India or Abroad",
    href: "/#loans",
    gridHref: "#calculator",
    img: "https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-160/1f393.png",
    icon: <GraduationCap />,
    fallbackIcon: <GraduationCap className="w-8 h-8 text-[#2E9D52]" />,
  },
  {
    id: "commercial-vehicle-loan",
    title: "Commercial Vehicle Loan",
    name: "Commercial Vehicle Loan",
    desc: "Fast funding for trucks, buses, tractors and transport fleets",
    navDesc: "Competitive truck & bus loans",
    href: "/#loans",
    gridHref: "#calculator",
    img: "https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-160/1f69a.png",
    icon: <Truck />,
    fallbackIcon: <Truck className="w-8 h-8 text-[#2E9D52]" />,
  },
  {
    id: "credit-cards",
    title: "Credit Cards",
    name: "Credit Cards",
    desc: "Compare lifetime free cards with airport lounge & rewards",
    navDesc: "Lifetime free & lounge access",
    href: "/#loans",
    gridHref: "#calculator",
    img: "https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-160/1f4b3.png",
    icon: <CreditCard />,
    fallbackIcon: <CreditCard className="w-8 h-8 text-[#2E9D52]" />,
  },
];

// ==========================================
// 3. CIBIL & Credit Assessment Tools
// ==========================================
export const CIBIL_PRODUCTS = [
  {
    id: "free-cibil-check",
    title: "Free CIBIL Score Check",
    name: "Free CIBIL Score Check",
    desc: "Check your official score in 30 seconds for free",
    href: "#cibil",
    img: "https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-160/1f4ca.png",
    icon: <Gauge />,
    fallbackIcon: <Gauge className="w-8 h-8 text-[#0E2E5E]" />,
  },
  {
    id: "cibil-consultation",
    title: "CIBIL Score Consultation",
    name: "CIBIL Score Consultation",
    desc: "1-on-1 advisor support to boost your score to 750+",
    href: "#footer",
    img: "https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-160/1f4de.png",
    icon: <PhoneCall />,
    fallbackIcon: <PhoneCall className="w-8 h-8 text-[#0E2E5E]" />,
  },
  {
    id: "fixed-deposit",
    title: "Fixed Deposit (FD)",
    name: "Fixed Deposit (FD)",
    desc: "High interest rates up to 9.1% with DICGC cover",
    href: "#calculator",
    img: "https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-160/1f3e6.png",
    icon: <PiggyBank />,
    fallbackIcon: <PiggyBank className="w-8 h-8 text-[#0E2E5E]" />,
  },
  {
    id: "credit-score-builder",
    title: "Credit Score Builder",
    name: "Credit Score Builder",
    desc: "Build your credit score from scratch with ease",
    href: "#cibil",
    img: "https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-160/1f4c8.png",
    icon: <TrendingUp />,
    fallbackIcon: <TrendingUp className="w-8 h-8 text-[#0E2E5E]" />,
  },
];

// ==========================================
// 4. Tools Navigation Items (Navbar Dropdown)
// ==========================================
export const NAV_TOOLS = [
  {
    name: "EMI Calculator",
    desc: "Calculate monthly repayment",
    href: "/emi-calculator",
    icon: <Calculator />,
  },
  {
    name: "CIBIL Check",
    desc: "Check credit score instantly",
    href: "/#cibil",
    icon: <Gauge />,
  },
];

// ==========================================
// 5. Hero Carousel Slides (HeroSlider)
// ==========================================
export const HERO_SLIDES = [
  {
    title: "Quick Personal Loans",
    subtitle: "Get funds sent directly to your bank account with zero paperwork.",
    cta: "Apply Now",
    href: "#calculator",
    bg: "bg-[#0E2E5E]",
    btnText: "text-[#0E2E5E]",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1000&auto=format&fit=crop",
    imgAlt: "Customer with smartphone",
  },
  {
    title: "Free CIBIL Score Check",
    subtitle: "Know your credit score in 30 seconds with zero impact on your score.",
    cta: "Check Free",
    href: "#cibil",
    bg: "bg-[#1E7C3F]",
    btnText: "text-[#1E7C3F]",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1000&auto=format&fit=crop",
    imgAlt: "Credit score check with card and laptop",
  },
  {
    title: "Affordable Home Loans",
    subtitle: "Easy home financing with low monthly payments and flexible tenure.",
    cta: "Explore Home Loans",
    href: "#calculator",
    bg: "bg-[#0E3854]",
    btnText: "text-[#0E3854]",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    imgAlt: "Keys to new home",
  },
  {
    title: "Fast Business Loans",
    subtitle: "Get capital for daily expenses and equipment without giving any collateral.",
    cta: "Grow Your Business",
    href: "#calculator",
    bg: "bg-[#1C2340]",
    btnText: "text-[#1C2340]",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop",
    imgAlt: "Business team at work",
  },
  {
    title: "Instant Gold Loans",
    subtitle: "Safe bank vault storage with same-day cash given straight into your account.",
    cta: "Get Gold Loan",
    href: "#calculator",
    bg: "bg-[#1B3A2B]",
    btnText: "text-[#1B3A2B]",
    image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=1000&auto=format&fit=crop",
    imgAlt: "Safe gold loan vault",
  },
];

// ==========================================
// 6. How It Works Steps (HowItWorks)
// ==========================================
export const HOW_IT_WORKS_STEPS = [
  {
    num: "1",
    title: "Submit Details",
    desc: "Choose your desired loan type and submit basic details digitally in just 2 minutes.",
    icon: <User className="w-6 h-6" strokeWidth={2} />,
  },
  {
    num: "2",
    title: "Partner Matching",
    desc: "We connect your request directly with verified partner banks and NBFCs for quick sanction.",
    icon: <ClipboardCheck className="w-6 h-6" strokeWidth={2} />,
  },
  {
    num: "3",
    title: "Fast Disbursal",
    desc: "Complete simple digital verification and receive funds directly into your bank account.",
    icon: <ShieldCheck className="w-6 h-6" strokeWidth={2} />,
  },
];

