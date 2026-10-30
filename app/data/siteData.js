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
  BadgePercent,
  Landmark,
  PhoneOff,
} from "lucide-react";

// ==========================================
// 1. Core Brand & Contact Information
// ==========================================
export const SITE_CONFIG = {
  name: "Pay2Money",
  companyName: "PM Finance Services Pvt Ltd",
  director: "Deepak Kumar",
  tagline: "Your Growth, Our Priority",
  slogan: "Loans Se Zyada Aage",
  phone: "+91 7239037839",
  phoneHref: "tel:+917239037839",
  email: "info@pay2money.com",
  emailHref: "mailto:info@pay2money.com",
  address:
    "Shop No. 3049, First Floor, Block E-II, Faridabad Bypass Road, Molar Band Extension, Opp. Adani CNG Pump, Near Khatu Shyam Bus Travel, New Delhi - 110044",
  footerAddress: "Molar Band Extension, New Delhi - 110044",
  workingHours: "Monday to Saturday, 9:30 AM to 6:30 PM",
  disclaimer:
    "Pay2Money (PM Finance Services Pvt Ltd) is an online loan facilitation platform. Pay2Money is NOT a bank or a Non-Banking Financial Company (NBFC) registered under the Reserve Bank of India Act, 1934. We do not directly lend money to consumers. We connect borrowers with partner banks and RBI-registered NBFCs.",
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
    img: "/images/icons/personal-loan.png",
    icon: <User />,
    fallbackIcon: <User className="w-8 h-8 text-brand-accent" />,
  },
  {
    id: "instant-loan",
    title: "Instant Loan",
    name: "Instant Loan",
    desc: "Approval in 10 minutes, direct bank transfer",
    navDesc: "Approval in 10 minutes",
    href: "/#loans",
    gridHref: "#calculator",
    img: "/images/icons/instant-loan.png",
    icon: <Zap />,
    fallbackIcon: <Zap className="w-8 h-8 text-brand-accent" />,
  },
  {
    id: "business-loan",
    title: "Business Loan",
    name: "Business Loan",
    desc: "Fuel your growth with up to ₹75 Lakhs instantly",
    navDesc: "Collateral free working capital",
    href: "/#loans",
    gridHref: "#calculator",
    img: "/images/icons/business-loan.png",
    icon: <Briefcase />,
    fallbackIcon: <Briefcase className="w-8 h-8 text-brand-accent" />,
  },
  {
    id: "home-loan",
    title: "Home Loan",
    name: "Home Loan",
    desc: "Lowest interest rates starting at 7.10%* p.a.",
    navDesc: "Long flexible repayment tenures",
    href: "/#loans",
    gridHref: "#calculator",
    img: "/images/icons/home-loan.png",
    icon: <Home />,
    fallbackIcon: <Home className="w-8 h-8 text-brand-accent" />,
  },
  {
    id: "loan-against-property",
    title: "Loan Against Property",
    name: "Loan Against Property",
    desc: "Unlock higher value - up to ₹10 Crore in 1 day*",
    navDesc: "Unlock your property value",
    href: "/#loans",
    gridHref: "#calculator",
    img: "/images/icons/property-loan.png",
    icon: <Building2 />,
    fallbackIcon: <Building2 className="w-8 h-8 text-brand-accent" />,
  },
  {
    id: "car-loan",
    title: "Car Loan",
    name: "Car Loan",
    desc: "Drive home your dream car with 100% on-road funding",
    navDesc: "Vehicle funding at low rates",
    href: "/#loans",
    gridHref: "#calculator",
    img: "/images/icons/car-loan.png",
    icon: <Car />,
    fallbackIcon: <Car className="w-8 h-8 text-brand-accent" />,
  },
  {
    id: "gold-loan",
    title: "Gold Loan",
    name: "Gold Loan",
    desc: "30-minute instant cash with safe bank vault storage",
    navDesc: "30-min instant disbursal",
    href: "/#loans",
    gridHref: "#calculator",
    img: "/images/icons/gold-loan.png",
    icon: <Coins />,
    fallbackIcon: <Coins className="w-8 h-8 text-brand-accent" />,
  },
  {
    id: "education-loan",
    title: "Education Loan",
    name: "Education Loan",
    desc: "Fund higher education in India or premier universities abroad",
    navDesc: "Study in India or Abroad",
    href: "/#loans",
    gridHref: "#calculator",
    img: "/images/icons/education-loan.png",
    icon: <GraduationCap />,
    fallbackIcon: <GraduationCap className="w-8 h-8 text-brand-accent" />,
  },
  {
    id: "commercial-vehicle-loan",
    title: "Commercial Vehicle Loan",
    name: "Commercial Vehicle Loan",
    desc: "Fast funding for trucks, buses, tractors and transport fleets",
    navDesc: "Competitive truck & bus loans",
    href: "/#loans",
    gridHref: "#calculator",
    img: "/images/icons/commercial-vehicle-loan.png",
    icon: <Truck />,
    fallbackIcon: <Truck className="w-8 h-8 text-brand-accent" />,
  },
  {
    id: "credit-cards",
    title: "Credit Cards",
    name: "Credit Cards",
    desc: "Compare lifetime free cards with airport lounge & rewards",
    navDesc: "Lifetime free & lounge access",
    href: "/#loans",
    gridHref: "#calculator",
    img: "/images/icons/credit-cards.png",
    icon: <CreditCard />,
    fallbackIcon: <CreditCard className="w-8 h-8 text-brand-accent" />,
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
    img: "/images/icons/cibil-check.png",
    icon: <Gauge />,
    fallbackIcon: <Gauge className="w-8 h-8 text-brand-primary" />,
  },
  {
    id: "cibil-consultation",
    title: "CIBIL Score Consultation",
    name: "CIBIL Score Consultation",
    desc: "1-on-1 advisor support to boost your score to 750+",
    href: "#footer",
    img: "/images/icons/cibil-consultation.png",
    icon: <PhoneCall />,
    fallbackIcon: <PhoneCall className="w-8 h-8 text-brand-primary" />,
  },
  {
    id: "fixed-deposit",
    title: "Fixed Deposit (FD)",
    name: "Fixed Deposit (FD)",
    desc: "High interest rates up to 9.1% with DICGC cover",
    href: "#calculator",
    img: "/images/icons/fixed-deposit.png",
    icon: <PiggyBank />,
    fallbackIcon: <PiggyBank className="w-8 h-8 text-brand-primary" />,
  },
  {
    id: "credit-score-builder",
    title: "Credit Score Builder",
    name: "Credit Score Builder",
    desc: "Build your credit score from scratch with ease",
    href: "#cibil",
    img: "/images/icons/credit-builder.png",
    icon: <TrendingUp />,
    fallbackIcon: <TrendingUp className="w-8 h-8 text-brand-primary" />,
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
    id: "free-cibil-check",
    name: "CIBIL Check",
    desc: "Check credit score instantly",
    href: "#cibil",
    icon: <Gauge />,
  },
];

// ==========================================
// 5. Hero Carousel Slides (HeroSlider)
// ==========================================
export const HERO_SLIDES = [
  {
    id: "personal-loan",
    title: "Quick Personal Loans",
    subtitle: "Get funds sent directly to your bank account with zero paperwork.",
    cta: "Apply Now",
    href: "#calculator",
    bg: "bg-brand-primary",
    btnText: "text-brand-primary",
    image: "/images/hero/personal-loan.jpg",
    imgAlt: "Customer with smartphone",
  },
  {
    title: "Free CIBIL Score Check",
    subtitle: "Know your credit score in 30 seconds with zero impact on your score.",
    cta: "Check Free",
    href: "#cibil",
    bg: "bg-[#0E223D]",
    btnText: "text-brand-primary",
    image: "/images/hero/cibil-check.jpg",
    imgAlt: "Credit score check with card and laptop",
  },
  {
    id: "home-loan",
    title: "Affordable Home Loans",
    subtitle: "Easy home financing with low monthly payments and flexible tenure.",
    cta: "Explore Home Loans",
    href: "#calculator",
    bg: "bg-[#142A4A]",
    btnText: "text-brand-primary",
    image: "/images/hero/home-loan.jpg",
    imgAlt: "Keys to new home",
  },
  {
    id: "business-loan",
    title: "Fast Business Loans",
    subtitle: "Get capital for daily expenses and equipment without giving any collateral.",
    cta: "Grow Your Business",
    href: "#calculator",
    bg: "bg-[#0A1A30]",
    btnText: "text-brand-primary",
    image: "/images/hero/business-loan.jpg",
    imgAlt: "Business team at work",
  },
  {
    id: "gold-loan",
    title: "Instant Gold Loans",
    subtitle: "Safe bank vault storage with same-day cash given straight into your account.",
    cta: "Get Gold Loan",
    href: "#calculator",
    bg: "bg-[#183256]",
    btnText: "text-brand-primary",
    image: "/images/hero/gold-loan.jpg",
    imgAlt: "Safe gold loan vault",
  },
];

// ==========================================
// 6. How It Works Steps (HowItWorks)
// ==========================================
export const HOW_IT_WORKS_STEPS = [
  {
    num: "1",
    title: "Instant Pre-Approval",
    desc: "Pre-sanctioned offers unlocked digitally in just 2 minutes.",
    icon: <User className="w-6 h-6" strokeWidth={2} />,
  },
  {
    num: "2",
    title: "Verified Partner Match",
    desc: "We connect your request directly with verified partner banks and NBFCs for quick sanction.",
    icon: <ClipboardCheck className="w-6 h-6" strokeWidth={2} />,
  },
  {
    num: "3",
    title: "Direct Bank Disbursal",
    desc: "Complete simple digital verification and receive funds directly into your bank account.",
    icon: <ShieldCheck className="w-6 h-6" strokeWidth={2} />,
  },
];

// ==========================================
// 7. About Page Core Commitments
// ==========================================
export const ABOUT_PROMISES = [
  {
    title: "Zero consultation fees",
    desc: "You never pay us a single rupee. Our platform, support, and guidance are completely free for borrowers.",
    icon: <BadgePercent className="w-5 h-5 text-brand-accent" />,
  },
  {
    title: "Direct bank disbursal",
    desc: "Your loan is disbursed straight into your registered bank account by our verified partner institutions.",
    icon: <Landmark className="w-5 h-5 text-brand-accent" />,
  },
  {
    title: "Bank-level data security",
    desc: "Your personal and financial records are protected with 256-bit encryption and shared only with partner lenders.",
    icon: <ShieldCheck className="w-5 h-5 text-brand-accent" />,
  },
  {
    title: "No aggressive sales calls",
    desc: "We do not sell your contact details to third-party telemarketers. We only reach out to assist with your active inquiry.",
    icon: <PhoneOff className="w-5 h-5 text-brand-accent" />,
  },
];

