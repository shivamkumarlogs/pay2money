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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
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
