import React from "react";
import Navbar from "../components/Navbar";
import EmiCalculator from "../components/EmiCalculator";
import Footer from "../components/Footer";

export const metadata = {
  title: "Loan EMI Calculator - Pay2Money",
  description:
    "Calculate your monthly loan EMI, total interest, and complete repayment schedule instantly with Pay2Money's free online financial calculator.",
  keywords:
    "EMI calculator, loan EMI calculator, personal loan EMI, home loan EMI, business loan calculator, Pay2Money",
};

export default function EmiCalculatorPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-1">
        <EmiCalculator />
      </main>

      <Footer />
    </div>
  );
}
