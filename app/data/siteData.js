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
    href: "/#loans",
    gridHref: "#calculator",
    img: "/images/icons/personal-loan.png",
    icon: <User />,
  },
  {
    id: "instant-loan",
    title: "Instant Loan",
    name: "Instant Loan",
    desc: "Approval in 10 minutes, direct bank transfer",
    href: "/#loans",
    gridHref: "#calculator",
    img: "/images/icons/instant-loan.png",
    icon: <Zap />,
  },
  {
    id: "business-loan",
    title: "Business Loan",
    name: "Business Loan",
    desc: "Fuel your growth with up to ₹75 Lakhs instantly",
    href: "/#loans",
    gridHref: "#calculator",
    img: "/images/icons/business-loan.png",
    icon: <Briefcase />,
  },
  {
    id: "home-loan",
    title: "Home Loan",
    name: "Home Loan",
    desc: "Lowest interest rates starting at 7.10%* p.a.",
    href: "/#loans",
    gridHref: "#calculator",
    img: "/images/icons/home-loan.png",
    icon: <Home />,
  },
  {
    id: "loan-against-property",
    title: "Loan Against Property",
    name: "Loan Against Property",
    desc: "Unlock higher value - up to ₹10 Crore in 1 day*",
    href: "/#loans",
    gridHref: "#calculator",
    img: "/images/icons/property-loan.png",
    icon: <Building2 />,
  },
  {
    id: "car-loan",
    title: "Car Loan",
    name: "Car Loan",
    desc: "Drive home your dream car with 100% on-road funding",
    href: "/#loans",
    gridHref: "#calculator",
    img: "/images/icons/car-loan.png",
    icon: <Car />,
  },
  {
    id: "gold-loan",
    title: "Gold Loan",
    name: "Gold Loan",
    desc: "30-minute instant cash with safe bank vault storage",
    href: "/#loans",
    gridHref: "#calculator",
    img: "/images/icons/gold-loan.png",
    icon: <Coins />,
  },
  {
    id: "education-loan",
    title: "Education Loan",
    name: "Education Loan",
    desc: "Fund higher education in India or premier universities abroad",
    href: "/#loans",
    gridHref: "#calculator",
    img: "/images/icons/education-loan.png",
    icon: <GraduationCap />,
  },
  {
    id: "commercial-vehicle-loan",
    title: "Commercial Vehicle Loan",
    name: "Commercial Vehicle Loan",
    desc: "Fast funding for trucks, buses, tractors and transport fleets",
    href: "/#loans",
    gridHref: "#calculator",
    img: "/images/icons/commercial-vehicle-loan.png",
    icon: <Truck />,
  },
  {
    id: "credit-cards",
    title: "Credit Cards",
    name: "Credit Cards",
    desc: "Compare lifetime free cards with airport lounge & rewards",
    href: "/#loans",
    gridHref: "#calculator",
    img: "/images/icons/credit-cards.png",
    icon: <CreditCard />,
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
  },
  {
    id: "cibil-consultation",
    title: "CIBIL Score Consultation",
    name: "CIBIL Score Consultation",
    desc: "1-on-1 advisor support to boost your score to 750+",
    href: "#footer",
    img: "/images/icons/cibil-consultation.png",
    icon: <PhoneCall />,
  },
  {
    id: "fixed-deposit",
    title: "Fixed Deposit (FD)",
    name: "Fixed Deposit (FD)",
    desc: "High interest rates up to 9.1% with DICGC cover",
    href: "#calculator",
    img: "/images/icons/fixed-deposit.png",
    icon: <PiggyBank />,
  },
  {
    id: "credit-score-builder",
    title: "Credit Score Builder",
    name: "Credit Score Builder",
    desc: "Build your credit score from scratch with ease",
    href: "#cibil",
    img: "/images/icons/credit-builder.png",
    icon: <TrendingUp />,
  },
];

// ==========================================
// 4. Tools Navigation Items (Navbar Dropdown)
// ==========================================
export const NAV_TOOLS = [
  {
    name: "EMI Calculator",
    href: "/emi-calculator",
    icon: <Calculator />,
  },
  {
    id: "free-cibil-check",
    name: "CIBIL Check",
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
    image: "/images/hero/personal-loan.jpg",
    imgAlt: "Customer with smartphone",
  },
  {
    id: "free-cibil-check",
    title: "Free CIBIL Score Check",
    subtitle: "Know your credit score in 30 seconds with zero impact on your score.",
    cta: "Check Free",
    href: "#cibil",
    bg: "bg-[#0E223D]",
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

// ==========================================
// 8. Frequently Asked Questions (FAQ)
// ==========================================
export const FAQ_ITEMS = [
  {
    question: "What is Pay2Money?",
    answer:
      "Pay2Money is a trusted digital lending facilitation platform that connects borrowers with accredited scheduled commercial banks and RBI-registered NBFCs across India. We offer a transparent, paperless experience for personal loans, business loans, home loans, and credit cards with instant partner sanctions.",
  },
  {
    question: "Is it safe to apply for a loan through Pay2Money?",
    answer:
      "Yes, absolutely. Pay2Money utilizes bank-grade 256-bit encryption to ensure your personal and financial data remains secure. Your details are strictly shared only with verified partner lending institutions to process your specific application.",
  },
  {
    question: "How does Pay2Money work?",
    answer:
      "Simply choose your desired loan product, submit your basic eligibility details, and our digital system matches your profile with partner banks and NBFCs offering the lowest interest rates. Once approved, the loan amount is disbursed directly into your registered bank account.",
  },
  {
    question: "Who is eligible to apply for a loan on Pay2Money?",
    answer:
      "Any Indian citizen aged 21 to 60 with a valid PAN, Aadhaar, and a stable source of income (salaried or self-employed) is eligible to apply. Specific income criteria and credit score requirements depend on the lending partner.",
  },
  {
    question: "Does checking loan options affect my CIBIL score?",
    answer:
      "No. Browsing partner offers and preliminary eligibility checks on Pay2Money are soft inquiries and have zero impact on your CIBIL score.",
  },
  {
    question: "Does Pay2Money charge any fee from borrowers?",
    answer:
      "None. Our platform is 100% free for borrowers. We never charge consultation, processing, or broker fees from users.",
  },
  {
    question: "How fast is the loan approval and disbursal process?",
    answer:
      "Digital pre-approvals take as little as 2 to 10 minutes. Final disbursal to your registered bank account typically completes within 24 to 48 business hours upon document verification.",
  },
  {
    question: "What documents are required to apply?",
    answer:
      "Documentation is completely digital: your PAN card, Aadhaar for KYC verification, and your recent 3 to 6 months bank statement.",
  },
  {
    question: "Can I apply if I am self-employed or run a small business?",
    answer:
      "Yes. We facilitate loans for both salaried employees and self-employed individuals, including small business owners, traders, and professionals with tailored partner eligibility options.",
  },
  {
    question: "What is the typical repayment tenure available?",
    answer:
      "Repayment tenures range from 6 months up to 5 years for personal and instant loans, and up to 20 to 30 years for home loans and loans against property, depending on partner lender policies.",
  },
  {
    question: "Can I prepay or foreclose my loan before tenure completion?",
    answer:
      "Yes, you can prepay or foreclose your loan at any time. Under RBI guidelines, floating-rate personal loans provided by our partner institutions to individual borrowers carry zero foreclosure penalties.",
  },
  {
    question: "What interest rates can I expect on partner loans?",
    answer:
      "Interest rates depend on your credit score, monthly income, and chosen lender. Indicative rates start as low as 7.10% per annum for home loans and 10.5% per annum for unsecured personal loans.",
  },
];
