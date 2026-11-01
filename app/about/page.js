import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  ABOUT_PAGE_DATA,
  ABOUT_PROMISES as PROMISES,
} from "../data/siteData";

export const metadata = {
  title: "About Us",
  description:
    "Pay2Money is an independent loan facilitation platform connecting borrowers directly to accredited banks and NBFCs across India with complete transparency.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us - Pay2Money",
    description:
      "Independent loan facilitation platform connecting borrowers directly to accredited banks and NBFCs across India.",
    url: "https://www.pay2money.com/about",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
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
      name: "About Us",
      item: "https://www.pay2money.com/about",
    },
  ],
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Navbar />

      <main className="flex-1">
        {/* 1. Human-Centered Editorial Hero */}
        <section className="pt-14 sm:pt-20 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-2xl sm:text-4xl font-black text-brand-primary tracking-tight leading-[1.15]">
              {ABOUT_PAGE_DATA.hero.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
              {ABOUT_PAGE_DATA.hero.subtitle}
            </p>
          </div>
        </section>

        {/* 2. Authentic Story & Purpose */}
        <section className="pt-4 sm:pt-6 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-accent">
              {ABOUT_PAGE_DATA.story.tag}
            </span>

            <h2 className="text-xl sm:text-2xl font-black text-brand-primary tracking-tight leading-snug">
              {ABOUT_PAGE_DATA.story.title}
            </h2>

            {ABOUT_PAGE_DATA.story.paragraphs.map((para, idx) => (
              <p
                key={idx}
                className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal"
              >
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* 3. Our Core Commitments */}
        <section className="pt-6 sm:pt-8 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 sm:space-y-12">
          <div className="space-y-3 mx-auto">
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
