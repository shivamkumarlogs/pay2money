import React from "react";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import ProductGrid from "./components/ProductGrid";
import EmiCalculator from "./components/EmiCalculator";
import HowItWorks from "./components/HowItWorks";
import Faq from "./components/Faq";
import CtaBanner from "./components/CtaBanner";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { FAQ_ITEMS } from "./data/siteData";

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Navbar />
      <main className="flex-1">
        <HeroSlider />
        <Hero />
        <ProductGrid />
        <EmiCalculator />
        <HowItWorks />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
