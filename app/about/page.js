import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ABOUT_PROMISES as PROMISES } from "../data/siteData";

export const metadata = {
  title: "About - Pay2Money",
  description:
    "Pay2Money is a loan facilitation platform connecting borrowers directly to accredited banks and NBFCs across India with complete transparency.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-surface">
      <Navbar />

      <main className="flex-1">
        {/* 1. Human-Centered Editorial Hero */}
        <section className="pt-14 sm:pt-20 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-2xl sm:text-4xl font-black text-brand-primary tracking-tight leading-[1.15]">
              Loans made straightforward and honest.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
              No endless paperwork. No aggressive telemarketers. No surprise
              broker fees. Just a clean, digital bridge to trusted lenders
              across India.
            </p>
          </div>
        </section>

        {/* 2. Authentic Story & Purpose */}
        <section className="pt-4 sm:pt-6 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-accent">
                Why We Started
              </span>

              <h2 className="text-xl sm:text-2xl font-black text-brand-primary tracking-tight leading-snug">
                Borrowing money is a major life moment. It shouldn&apos;t feel
                stressful.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Whether you are buying your first home, covering unexpected
                medical bills, or funding your small business, the lending
                process in India has traditionally felt opaque and frustrating.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                We founded Pay2Money to bring complete transparency to the
                table. We partner with scheduled commercial banks and
                RBI-registered NBFCs to provide a simple, digital pathway to
                formal credit.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                We handle the coordination and guide you through documentation
                so you can access partner financing without confusion or
                middleman markups.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-4/3 bg-slate-100">
                <Image
                  src="/images/about/team.jpg"
                  alt="Pay2Money team meeting"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Our Core Commitments */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-accent">
              Our Commitments
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-brand-primary tracking-tight">
              Built on trust and real human assistance
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROMISES.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 space-y-3.5 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-accent-light text-brand-accent flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-brand-primary">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
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
