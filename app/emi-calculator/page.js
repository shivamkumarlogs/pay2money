import React from "react";
import Navbar from "../components/Navbar";
import EmiCalculator from "../components/EmiCalculator";
import Footer from "../components/Footer";

export const metadata = {
  title: "Loan EMI Calculator",
  description:
    "Calculate your monthly loan EMI, total interest, and complete repayment schedule instantly with Pay2Money's free online financial calculator.",
  keywords: [
    "EMI calculator",
    "loan EMI calculator",
    "personal loan EMI",
    "home loan EMI",
    "business loan calculator",
    "Pay2Money",
  ],
  alternates: {
    canonical: "/emi-calculator",
  },
  openGraph: {
    title: "Loan EMI Calculator - Pay2Money",
    description:
      "Calculate your monthly loan EMI, total interest, and complete repayment schedule instantly with Pay2Money's free online financial calculator.",
    url: "https://www.pay2money.com/emi-calculator",
    type: "website",
  },
};

const calculatorSchemas = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://www.pay2money.com/emi-calculator/#app",
      name: "Pay2Money Loan EMI Calculator",
      url: "https://www.pay2money.com/emi-calculator",
      applicationCategory: "FinanceApplication",
      operatingSystem: "All",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
      },
      description:
        "Interactive loan EMI calculator computing monthly repayment, total interest, and principal amortization schedule for Indian borrowers.",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.pay2money.com/emi-calculator/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.pay2money.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Loan EMI Calculator",
          item: "https://www.pay2money.com/emi-calculator",
        },
      ],
    },
  ],
};

export default function EmiCalculatorPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(calculatorSchemas),
        }}
      />
      <Navbar />

      <main className="flex-1">
        <EmiCalculator />
      </main>

      <Footer />
    </div>
  );
}
