import React from "react";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
// import LenderMarquee from "./components/LenderMarquee";
// import ProductGrid from "./components/ProductGrid";
import EmiCalculator from "./components/EmiCalculator";
// import MilestoneCards from "./components/MilestoneCards";
import HowItWorks from "./components/HowItWorks";
// import StatsBand from "./components/StatsBand";
import CtaBanner from "./components/CtaBanner";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Glassmorphic Header Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 3. Hero 5-Slide Carousel Banner */}
        <HeroSlider />

        {/* 4. Infinite Sliding Partner Banks & NBFCs Strip */}
        {/* <LenderMarquee /> */}

        {/* 5. Main Hero Value Proposition & Trust Metrics */}
        <Hero />

        {/* 6. Comprehensive Product Grid (Loans, Cards, Credit Health) */}
        {/* <ProductGrid /> */}

        {/* 7. Interactive Real-Time EMI Calculator */}
        <EmiCalculator />

        {/* 8. Loans for Every Milestone Image Cards */}
        {/* <MilestoneCards /> */}

        {/* 9. How It Works (3 Steps Process) */}
        <HowItWorks />

        {/* 10. Credibility & Growth Metrics Band */}
        {/* <StatsBand /> */}

        {/* 11. Pre-Footer Call to Action Banner */}
        <CtaBanner />
      </main>

      {/* 12. Regulatory Footer with Disclaimer and Links */}
      <Footer />
    </div>
  );
}