import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SITE_CONFIG } from "../data/siteData";
import { Scale, FileText, CheckCircle2, AlertCircle, Mail, Phone, MapPin, ShieldCheck, HeartHandshake } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions - Pay2Money",
  description:
    "Review the Terms & Conditions for Pay2Money (PM Finance Services Pvt Ltd). Understand our role as an independent loan referral and advisory bridge.",
};

export default function TermsAndConditionsPage() {
  const sections = [
    { id: "nature-of-service", title: "1. About Pay2Money & Nature of Service" },
    { id: "non-lender-disclaimer", title: "2. Non-Lender Status Disclaimer" },
    { id: "zero-borrower-fee", title: "3. 100% Free Service for Borrowers" },
    { id: "eligibility", title: "4. User Eligibility & Accurate Information" },
    { id: "partner-discretion", title: "5. Partner Underwriting & Approval" },
    { id: "disbursals-repayments", title: "6. Direct Disbursals & Repayments" },
    { id: "prohibited-usage", title: "7. Prohibited Platform Usage" },
    { id: "liability-limitation", title: "8. Limitation of Liability" },
    { id: "governing-law", title: "9. Governing Law & Jurisdiction" },
    { id: "support-contact", title: "10. Support & Direct Contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-surface">
      <Navbar />

      <main className="flex-1">
        {/* Header Section */}
        <section className="pt-14 sm:pt-20 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-2xl sm:text-4xl font-black text-brand-primary tracking-tight leading-[1.15]">
              Terms &amp; Conditions
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
              Effective Date: October 2026. Please read these terms to understand how PM Finance Services Pvt Ltd assists you with loan inquiries.
            </p>
          </div>
        </section>

        {/* Content Section with Sticky Sidebar */}
        <section className="pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Quick Navigation Sidebar */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                  <FileText className="w-4 h-4 text-brand-accent" />
                  <h3 className="text-sm font-bold text-brand-primary uppercase tracking-wider">
                    Table of Contents
                  </h3>
                </div>
                <nav className="space-y-1">
                  {sections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="block text-xs sm:text-sm text-slate-600 hover:text-brand-accent py-1.5 px-2 rounded-lg hover:bg-slate-50 transition font-medium"
                    >
                      {sec.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Advisory Card */}
              <div className="bg-[#081528] text-white rounded-2xl p-6 border border-slate-800 shadow-md space-y-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-accent">
                  <Scale className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">
                  Referral Bridge Advisory
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Pay2Money is an online loan discovery and referral platform. We connect you with partnered banks and NBFCs. We never lend money directly, and our guidance is 100% free for borrowers.
                </p>
              </div>
            </aside>

            {/* Right Column: Detailed Terms Body */}
            <article className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
              {/* 1. About Pay2Money */}
              <section id="nature-of-service" className="space-y-3.5 scroll-mt-28">
                <h2 className="text-lg sm:text-xl font-bold text-brand-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-accent" />
                  1. About Pay2Money &amp; Nature of Service
                </h2>
                <p>
                  These Terms &amp; Conditions govern your access to and use of the website operated by{" "}
                  <strong>PM Finance Services Pvt Ltd</strong> (brand name &quot;Pay2Money&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
                </p>
                <p>
                  Pay2Money operates as a digital loan facilitation, discovery, and advisory platform. Our goal is to simplify borrowing in India by connecting consumers and small businesses with scheduled commercial banks and RBI-registered NBFCs. We help you explore options, calculate EMIs, understand documentation requirements, and submit inquiries to lenders.
                </p>
              </section>

              {/* 2. Non-Lender Disclaimer */}
              <section id="non-lender-disclaimer" className="space-y-3.5 scroll-mt-28">
                <h2 className="text-lg sm:text-xl font-bold text-brand-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-accent" />
                  2. Explicit Non-Lender Status Disclaimer
                </h2>
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/70 text-amber-950 text-xs sm:text-sm space-y-2">
                  <p className="font-semibold flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-brand-accent shrink-0" />
                    Important Legal Clarification
                  </p>
                  <p>
                    PM Finance Services Pvt Ltd is NOT a bank, Non-Banking Financial Company (NBFC), or direct lender. We do not lend money, disburse credit from our own balance sheet, or issue loans directly to users.
                  </p>
                </div>
                <p>
                  All loan approvals, sanction letters, interest rates, tenures, processing fees, and disbursements are executed solely by our partner scheduled commercial banks and RBI-registered NBFCs according to their internal credit criteria.
                </p>
              </section>

              {/* 3. 100% Free Service */}
              <section id="zero-borrower-fee" className="space-y-3.5 scroll-mt-28">
                <h2 className="text-lg sm:text-xl font-bold text-brand-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-accent" />
                  3. 100% Free Service for Borrowers
                </h2>
                <p>
                  Pay2Money provides all discovery, calculator tools, and loan facilitation support completely free of cost to borrowers:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <p className="font-bold text-brand-primary text-xs sm:text-sm flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      Zero Upfront Charges
                    </p>
                    <p className="text-xs text-slate-600">
                      We never charge borrowers any registration fee, file opening fee, or consulting fee.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <p className="font-bold text-brand-primary text-xs sm:text-sm flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      Anti-Fraud Protection
                    </p>
                    <p className="text-xs text-slate-600">
                      Never transfer money to personal UPI or bank accounts. Pay2Money will never demand advance cash for approvals.
                    </p>
                  </div>
                </div>
              </section>

              {/* 4. Eligibility & Information */}
              <section id="eligibility" className="space-y-3.5 scroll-mt-28">
                <h2 className="text-lg sm:text-xl font-bold text-brand-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-accent" />
                  4. User Eligibility &amp; Accurate Information
                </h2>
                <p>
                  By using our platform or submitting an inquiry, you affirm that:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li>You are an Indian citizen or permanent resident residing in India.</li>
                  <li>You are at least 18 years of age and legally competent to enter into contracts.</li>
                  <li>All details you submit (such as name, mobile number, employment type, and income) are authentic, accurate, and yours.</li>
                  <li>You will not submit forged, falsified, or manipulated KYC documents to our team or partner lenders.</li>
                </ul>
              </section>

              {/* 5. Partner Discretion */}
              <section id="partner-discretion" className="space-y-3.5 scroll-mt-28">
                <h2 className="text-lg sm:text-xl font-bold text-brand-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-accent" />
                  5. Partner Underwriting &amp; Approval Autonomy
                </h2>
                <p>
                  Submitting an inquiry on Pay2Money or using our EMI calculator does not guarantee a loan offer or approval.
                </p>
                <p>
                  Each partner bank and NBFC retains sole and independent discretion to accept or reject any application based on their internal underwriting standards, credit risk models, income verification, and CIBIL score checks. Pay2Money has no power to overturn or influence a partner bank&apos;s credit decision.
                </p>
              </section>

              {/* 6. Disbursals & Repayments */}
              <section id="disbursals-repayments" className="space-y-3.5 scroll-mt-28">
                <h2 className="text-lg sm:text-xl font-bold text-brand-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-accent" />
                  6. Direct Disbursals &amp; Loan Repayments
                </h2>
                <p>
                  Pay2Money never handles your loan funds:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li><strong>Direct Disbursal:</strong> All sanctioned loan funds are transferred directly from the partner bank or NBFC account into your verified bank account.</li>
                  <li><strong>Direct Repayments:</strong> All monthly EMI payments, interest, and pre-closures are made directly to the lending institution via NACH e-mandate or official bank portals. Pay2Money never collects loan repayments.</li>
                </ul>
              </section>

              {/* 7. Prohibited Usage */}
              <section id="prohibited-usage" className="space-y-3.5 scroll-mt-28">
                <h2 className="text-lg sm:text-xl font-bold text-brand-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-accent" />
                  7. Prohibited Platform Usage
                </h2>
                <p>
                  When using Pay2Money, you agree not to:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li>Use automated bots, web scrapers, or crawlers to extract content or data from our website.</li>
                  <li>Submit fake, fraudulent, or abusive inquiries through our contact forms or phone lines.</li>
                  <li>Impersonate any other individual or submit inquiries using contact numbers that do not belong to you.</li>
                  <li>Introduce malicious code, viruses, or disruptive scripts to our digital infrastructure.</li>
                </ul>
              </section>

              {/* 8. Limitation of Liability */}
              <section id="liability-limitation" className="space-y-3.5 scroll-mt-28">
                <h2 className="text-lg sm:text-xl font-bold text-brand-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-accent" />
                  8. Limitation of Liability
                </h2>
                <p>
                  Pay2Money acts in good faith to connect borrowers with reputable lenders. To the fullest extent permitted by Indian law, PM Finance Services Pvt Ltd, its directors, and team members shall not be held liable for:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li>Any loan rejection, delay in sanction, or terms offered by a partner bank or NBFC.</li>
                  <li>Any disputes, contractual breaches, or repayment collection practices between you and the lending institution.</li>
                  <li>Temporary website downtime due to scheduled maintenance or telecommunication network outages.</li>
                </ul>
              </section>

              {/* 9. Governing Law */}
              <section id="governing-law" className="space-y-3.5 scroll-mt-28">
                <h2 className="text-lg sm:text-xl font-bold text-brand-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-accent" />
                  9. Governing Law &amp; Jurisdiction
                </h2>
                <p>
                  These Terms &amp; Conditions and any matters arising out of your use of our platform shall be governed by and construed in accordance with the laws of India.
                </p>
                <p>
                  Any legal claims or disputes relating to these Terms shall be subject to the exclusive jurisdiction of the competent courts in <strong>New Delhi, India</strong>.
                </p>
              </section>

              {/* 10. Support Contact */}
              <section id="support-contact" className="space-y-3.5 scroll-mt-28">
                <h2 className="text-lg sm:text-xl font-bold text-brand-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-accent" />
                  10. Support &amp; Direct Contact
                </h2>
                <p>
                  If you have questions about these Terms &amp; Conditions or need assistance with your loan inquiry, please reach out to us:
                </p>
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div>
                      <p className="text-slate-500 text-xs">Director &amp; Support Head</p>
                      <p className="font-bold text-brand-primary">{SITE_CONFIG.director}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">Company Name</p>
                      <p className="font-bold text-brand-primary">{SITE_CONFIG.companyName}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">Service Type</p>
                      <p className="font-bold text-brand-primary">Loan Discovery &amp; Advisory</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">Working Hours</p>
                      <p className="font-bold text-brand-primary">{SITE_CONFIG.workingHours}</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200/80 space-y-2 text-xs text-slate-600">
                    <p className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                      <span>Email: </span>
                      <a href={SITE_CONFIG.emailHref} className="text-brand-accent font-medium hover:underline">
                        {SITE_CONFIG.email}
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                      <span>Phone: </span>
                      <a href={SITE_CONFIG.phoneHref} className="text-brand-accent font-medium hover:underline">
                        {SITE_CONFIG.phone}
                      </a>
                    </p>
                    <p className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-brand-accent shrink-0 mt-0.5" />
                      <span>Office: {SITE_CONFIG.address}</span>
                    </p>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
