import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "About - Pay2Money",
  description:
    "Pay2Money is a loan facilitation platform connecting borrowers directly to accredited banks and NBFCs across India with complete transparency.",
};

const PROMISES = [
  {
    title: "Zero consultation fees",
    desc: "You never pay us a single rupee. Our platform, support, and guidance are completely free for borrowers.",
  },
  {
    title: "Direct bank disbursal",
    desc: "Your loan is disbursed straight into your registered bank account by our verified partner institutions.",
  },
  {
    title: "Bank-level data security",
    desc: "Your personal and financial records are protected with 256-bit encryption and shared only with partner lenders.",
  },
  {
    title: "No aggressive sales calls",
    desc: "We do not sell your contact details to third-party telemarketers. We only reach out to assist with your active inquiry.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-1">
        {/* 1. Human-Centered Editorial Hero */}
        <section className="relative overflow-hidden bg-white border-b border-slate-200/80 pt-16 pb-20 sm:pt-24 sm:pb-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0E2E5E] tracking-tight leading-[1.15]">
              We believe getting a loan should be straightforward and honest.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              No endless paperwork. No aggressive telemarketers. No surprise
              broker fees. Just a clean, digital bridge to trusted lenders
              across India.
            </p>
          </div>
        </section>

        {/* 2. Authentic Story & Purpose */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="md:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2E9D52]">
                Why We Started
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E2E5E] tracking-tight leading-snug">
                Borrowing money is a major life moment. It shouldn&apos;t feel
                stressful.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Whether you are buying your first home, covering unexpected
                medical bills, or funding your small business, the lending
                process in India has traditionally felt opaque and frustrating.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We founded Pay2Money to bring complete transparency to the
                table. We partner with scheduled commercial banks and
                RBI-registered NBFCs to provide a simple, digital pathway to
                formal credit.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We handle the coordination and guide you through documentation
                so you can access partner financing without confusion or
                middleman markups.
              </p>
            </div>

            <div className="md:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-4/3 bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop"
                  alt="Pay2Money team meeting"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Our Core Commitments */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2E9D52]">
              Our Commitments
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E2E5E] tracking-tight">
              Built on trust and real human assistance
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PROMISES.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-7 sm:p-8 border border-slate-200/80  space-y-3"
              >
                <h3 className="text-base sm:text-lg font-bold text-[#0E2E5E]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
