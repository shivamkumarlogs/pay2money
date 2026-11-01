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
import { FAQ_ITEMS, LOAN_PRODUCTS } from "./data/siteData";

export default function Home() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://www.pay2money.com/#faq",
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "ItemList",
        "@id": "https://www.pay2money.com/#services",
        name: "Financial Services & Loans",
        itemListElement: LOAN_PRODUCTS.map((prod, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: prod.title,
          description: prod.desc,
          url: `https://www.pay2money.com/apply/${prod.id}`,
        })),
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema),
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
