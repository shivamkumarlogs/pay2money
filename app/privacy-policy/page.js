import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SITE_CONFIG } from "../data/siteData";
import {
  FileText,
  Mail,
  Phone,
  MapPin,
  AlertCircle,
  HeartHandshake,
} from "lucide-react";

export const metadata = {
  title: "Privacy Policy - Pay2Money",
  description:
    "Learn how Pay2Money (PM Finance Services Pvt Ltd) collects, uses, and protects your inquiry information as an independent loan referral and advisory service.",
};

export default function PrivacyPage() {
  const sections = [
    { id: "philosophy", title: "1. Who We Are & Our Philosophy" },
    { id: "data-collection", title: "2. Information We Actually Collect" },
    { id: "no-harvesting", title: "3. What We Never Collect" },
    { id: "data-usage", title: "4. How We Use Your Inquiry Details" },
    { id: "data-sharing", title: "5. How We Share With Partner Lenders" },
    { id: "zero-fee-promise", title: "6. Zero Borrower Fees & Safety" },
    { id: "security-storage", title: "7. Data Security & Domestic Storage" },
    { id: "user-rights", title: "8. Review, Update & Deletion Rights" },
    { id: "third-party-links", title: "9. Partner Websites & External Links" },
    { id: "grievance", title: "10. Direct Contact & Grievance Support" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-surface">
      <Navbar />

      <main className="flex-1">
        {/* Header Section */}
        <section className="pt-14 sm:pt-20 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-2xl sm:text-4xl font-black text-brand-primary tracking-tight leading-[1.15]">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
              Effective Date: October 2026. A straightforward, honest
              explanation of how PM Finance Services Pvt Ltd handles your
              information.
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

              {/* Startup Reality & Trust Card */}
              <div className="bg-[#081528] text-white rounded-2xl p-6 border border-slate-800 shadow-md space-y-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-accent">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">
                  Our Startup Promise
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Pay2Money is an independent loan referral and advisory
                  service. We do not sell your phone number to telemarketing
                  lists, and we never ask you for money or upfront processing
                  fees.
                </p>
              </div>
            </aside>

            {/* Right Column: Detailed Policy Body */}
            <article className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
              {/* 1. Philosophy */}
              <section id="philosophy" className="space-y-3.5 scroll-mt-28">
                <h2 className="text-lg sm:text-xl font-bold text-brand-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-accent" />
                  1. Who We Are &amp; Our Core Philosophy
                </h2>
                <p>
                  This Privacy Policy applies to the website and advisory
                  services operated by{" "}
                  <strong>PM Finance Services Pvt Ltd</strong> (referred to as
                  &quot;Pay2Money&quot;, &quot;we&quot;, &quot;us&quot;, or
                  &quot;our&quot;), with our registered office in New Delhi,
                  India.
                </p>
                <p>
                  Pay2Money is an independent, early-stage loan discovery,
                  referral, and advisory platform. We act as a helpful digital
                  bridge connecting individuals and small business owners in
                  India with accredited scheduled commercial banks and
                  RBI-registered Non-Banking Financial Companies (NBFCs).
                </p>
                <p>
                  Because we are an early-stage service, we believe in keeping
                  our privacy policy truthful, transparent, and easy to
                  understand. We do not hide behind complex corporate jargon or
                  claim to operate systems that we do not have.
                </p>
              </section>

              {/* 2. Data Collection */}
              <section
                id="data-collection"
                className="space-y-3.5 scroll-mt-28"
              >
                <h2 className="text-lg sm:text-xl font-bold text-brand-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-accent" />
                  2. Information We Actually Collect
                </h2>
                <p>
                  We only collect information that you knowingly and voluntarily
                  provide to us when you use our website, fill out an inquiry
                  form, or contact our team:
                </p>
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <p className="font-bold text-brand-primary text-xs sm:text-sm">
                      Contact &amp; Inquiry Details
                    </p>
                    <p className="text-xs text-slate-600">
                      Your full name, mobile phone number, email address, and
                      your message or note explaining your financial requirement
                      (submitted via our Contact Us form, phone call, or
                      WhatsApp).
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <p className="font-bold text-brand-primary text-xs sm:text-sm">
                      Loan Requirement Information
                    </p>
                    <p className="text-xs text-slate-600">
                      The product category you are interested in (such as
                      Personal Loan, Business Loan, Home Loan, Gold Loan, or
                      LAP), approximate amount requested, and employment type
                      (salaried or self-employed).
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <p className="font-bold text-brand-primary text-xs sm:text-sm">
                      Standard Technical Logs
                    </p>
                    <p className="text-xs text-slate-600">
                      Basic browser technical information such as your IP
                      address, browser type, and page access timestamps to
                      ensure site security, spam prevention, and fast page
                      loading.
                    </p>
                  </div>
                </div>
              </section>

              {/* 3. What We Never Collect */}
              <section id="no-harvesting" className="space-y-3.5 scroll-mt-28">
                <h2 className="text-lg sm:text-xl font-bold text-brand-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-accent" />
                  3. What We Never Collect
                </h2>
                <p>
                  Unlike large mobile-app lenders, Pay2Money does not run
                  invasive mobile applications that request intrusive device
                  permissions. We want to be completely clear about what we
                  never access:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li>
                    <strong>No Contact Lists:</strong> We never access your
                    phone book or contact lists.
                  </li>
                  <li>
                    <strong>No Photos or Media:</strong> We never access your
                    device photo galleries or media files.
                  </li>
                  <li>
                    <strong>No SMS or Transactional Messages:</strong> We do not
                    read or scrape your private SMS inbox.
                  </li>
                  <li>
                    <strong>No Device Sensors:</strong> We do not track your
                    real-time GPS location, camera, or microphone.
                  </li>
                  <li>
                    <strong>No Biometric Storage:</strong> We do not capture or
                    store fingerprints or facial scans.
                  </li>
                </ul>
              </section>

              {/* 4. Data Usage */}
              <section id="data-usage" className="space-y-3.5 scroll-mt-28">
                <h2 className="text-lg sm:text-xl font-bold text-brand-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-accent" />
                  4. How We Use Your Inquiry Details
                </h2>
                <p>
                  We use the information you provide solely for clear, practical
                  purposes related to your inquiry:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li>
                    <strong>Responding to Inquiries:</strong> To review your
                    requirement and have our loan advisory team reach out by
                    phone, email, or WhatsApp to assist you.
                  </li>
                  <li>
                    <strong>Eligibility Guidance:</strong> To help you
                    understand basic documentation needs (such as salary slips,
                    ITR, or bank statements) required by lending institutions.
                  </li>
                  <li>
                    <strong>Connecting With Partner Lenders:</strong> To match
                    your profile with appropriate partner banks or
                    RBI-registered NBFCs offering loans matching your criteria.
                  </li>
                  <li>
                    <strong>Customer Support:</strong> To answer your questions,
                    resolve any concerns, and guide you through the initial
                    inquiry phase.
                  </li>
                </ul>
              </section>

              {/* 5. Sharing With Partner Lenders */}
              <section id="data-sharing" className="space-y-3.5 scroll-mt-28">
                <h2 className="text-lg sm:text-xl font-bold text-brand-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-accent" />
                  5. How We Share With Partner Lenders
                </h2>
                <p>
                  When you ask us to assist you with a loan, we share your
                  inquiry details with our verified partner banks and
                  RBI-registered NBFCs who provide that specific loan product.
                </p>
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/70 text-amber-950 text-xs sm:text-sm space-y-2">
                  <p className="font-semibold flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-brand-accent shrink-0" />
                    Strict Anti-Spam Commitment
                  </p>
                  <p>
                    We strictly do NOT sell, rent, or trade your personal
                    details to third-party telemarketing call centers, mass data
                    brokers, or unrelated marketing agencies. Your contact
                    details are shared exclusively with genuine financial
                    partners for the sole purpose of evaluating your loan
                    request.
                  </p>
                </div>
              </section>

              {/* 6. Zero Borrower Fees & Safety */}
              <section
                id="zero-fee-promise"
                className="space-y-3.5 scroll-mt-28"
              >
                <h2 className="text-lg sm:text-xl font-bold text-brand-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-accent" />
                  6. Zero Borrower Fees &amp; Safety Advisory
                </h2>
                <p>
                  Pay2Money is 100% free for loan applicants. We do not charge
                  borrowers any consultation fees, registration fees, or service
                  charges.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs sm:text-sm">
                  <p className="font-bold text-brand-primary">
                    Fraud Warning for Borrowers:
                  </p>
                  <p className="text-slate-600">
                    Pay2Money never asks you to transfer money into personal UPI
                    IDs, personal bank accounts, or pay cash upfront for loan
                    approvals. Any official processing fees, if applicable, are
                    deducted directly by the lending bank or NBFC as part of
                    their formal loan sanction agreement.
                  </p>
                </div>
              </section>

              {/* 7. Security & Storage */}
              <section
                id="security-storage"
                className="space-y-3.5 scroll-mt-28"
              >
                <h2 className="text-lg sm:text-xl font-bold text-brand-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-accent" />
                  7. Data Security &amp; Domestic Storage
                </h2>
                <p>
                  We treat your inquiry information with seriousness and
                  maintain industry-standard security safeguards:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li>
                    <strong>SSL / HTTPS Encryption:</strong> All data
                    transmitted between your browser and our website is
                    protected using 256-bit SSL encryption.
                  </li>
                  <li>
                    <strong>Domestic Server Storage:</strong> Your information
                    is stored strictly on secure cloud servers situated within
                    India.
                  </li>
                  <li>
                    <strong>Restricted Access:</strong> Only authorized members
                    of our loan coordination team who need your information to
                    assist your application can access it.
                  </li>
                </ul>
              </section>

              {/* 8. User Rights */}
              <section id="user-rights" className="space-y-3.5 scroll-mt-28">
                <h2 className="text-lg sm:text-xl font-bold text-brand-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-accent" />
                  8. Review, Update &amp; Deletion Rights
                </h2>
                <p>
                  You have full control over the contact details you submit to
                  us. At any time, you can:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li>
                    Request a copy of the inquiry information you submitted to
                    us.
                  </li>
                  <li>
                    Ask us to update or correct any inaccuracies in your contact
                    details.
                  </li>
                  <li>
                    Request permanent deletion of your inquiry details from our
                    active database.
                  </li>
                  <li>
                    Withdraw your consent to receive further advisory calls or
                    WhatsApp updates.
                  </li>
                </ul>
                <p className="text-xs text-slate-500">
                  To exercise any of these rights, simply email us at{" "}
                  <a
                    href={SITE_CONFIG.emailHref}
                    className="text-brand-accent font-medium hover:underline"
                  >
                    {SITE_CONFIG.email}
                  </a>{" "}
                  with the subject &quot;Data Deletion / Update Request&quot;.
                </p>
              </section>

              {/* 9. Partner Links */}
              <section
                id="third-party-links"
                className="space-y-3.5 scroll-mt-28"
              >
                <h2 className="text-lg sm:text-xl font-bold text-brand-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-accent" />
                  9. Partner Websites &amp; External Links
                </h2>
                <p>
                  Our website contains links that may redirect you to the
                  official websites or application portals of partner banks,
                  NBFCs, or credit bureaus. Once you leave our domain and visit
                  an external partner website, their terms and conditions and
                  privacy policy govern your interaction with them. We encourage
                  you to review their policies directly.
                </p>
              </section>

              {/* 10. Grievance & Direct Contact */}
              <section id="grievance" className="space-y-3.5 scroll-mt-28">
                <h2 className="text-lg sm:text-xl font-bold text-brand-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-accent" />
                  10. Direct Contact &amp; Grievance Support
                </h2>
                <p>
                  If you have any questions, concerns, or complaints regarding
                  how your information is handled, you can reach out directly to
                  our leadership team:
                </p>
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div>
                      <p className="text-slate-500 text-xs">Contact Person</p>
                      <p className="font-bold text-brand-primary">
                        {SITE_CONFIG.director}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">Organization</p>
                      <p className="font-bold text-brand-primary">
                        {SITE_CONFIG.companyName}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">Brand</p>
                      <p className="font-bold text-brand-primary">
                        {SITE_CONFIG.name}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">Response Time</p>
                      <p className="font-bold text-brand-primary">
                        Within 24 to 48 Hours
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200/80 space-y-2 text-xs text-slate-600">
                    <p className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                      <span>Email: </span>
                      <a
                        href={SITE_CONFIG.emailHref}
                        className="text-brand-accent font-medium hover:underline"
                      >
                        {SITE_CONFIG.email}
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                      <span>Phone: </span>
                      <a
                        href={SITE_CONFIG.phoneHref}
                        className="text-brand-accent font-medium hover:underline"
                      >
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
