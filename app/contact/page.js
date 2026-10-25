"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate clean submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-1">
        {/* 1. Header Section */}
        <section className="bg-white border-b border-slate-200/80 pt-16 pb-20 sm:pt-20 sm:pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-3xl sm:text-5xl font-black text-[#0E2E5E] tracking-tight leading-[1.15]">
              We are here to assist you.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Have questions about partner loan facilitation, documentation, or an active inquiry? Get in touch with our team.
            </p>
          </div>
        </section>

        {/* 2. Main Contact Grid */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Column: Direct Support Channels */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4 sm:gap-5">
              
              {/* Phone Card */}
              <div className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200/80 flex flex-col justify-center flex-1 space-y-2.5">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#2E9D52] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[#0E2E5E]">Phone Support</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Speak directly with our loan coordination team during business hours.
                </p>
                <div className="pt-0.5">
                  <a
                    href="tel:+911234567890"
                    className="text-sm font-semibold text-[#0E2E5E] hover:text-[#2E9D52] transition block"
                  >
                    +91 1234567890
                  </a>
                  <span className="text-xs text-slate-500">
                    Monday to Saturday, 9:30 AM to 6:30 PM IST
                  </span>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200/80 flex flex-col justify-center flex-1 space-y-2.5">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#2E9D52] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[#0E2E5E]">Email Support</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Send your inquiries or documentation questions anytime.
                </p>
                <div className="pt-0.5">
                  <a
                    href="mailto:support@pay2money.com"
                    className="text-sm font-semibold text-[#0E2E5E] hover:text-[#2E9D52] transition block"
                  >
                    support@pay2money.com
                  </a>
                  <span className="text-xs text-slate-500">
                    We respond within 24 business hours
                  </span>
                </div>
              </div>

              {/* Office Address Card */}
              <div className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200/80 flex flex-col justify-center flex-1 space-y-2.5">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#2E9D52] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[#0E2E5E]">Registered Address</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  123 Test District, Test, Test 123456
                </p>
              </div>

            </div>

            {/* Right Column: Contact Inquiry Form */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="bg-white rounded-xl p-7 sm:p-9 border border-slate-200/80 flex flex-col justify-between h-full space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#0E2E5E] tracking-tight">
                    Send us a message
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Fill in your details and our team will get in touch to assist you.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-4 my-auto">
                    <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-[#2E9D52] flex items-center justify-center font-bold text-xl">
                      ✓
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0E2E5E]">
                      Thank you for reaching out
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                      Your message has been received. Our team will review your inquiry and contact you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          phone: "",
                          email: "",
                          subject: "General Inquiry",
                          message: "",
                        });
                      }}
                      className="inline-block mt-2 px-5 py-2 text-xs font-semibold text-[#0E2E5E] bg-white border border-slate-200 rounded-lg hover:border-[#2E9D52] hover:text-[#2E9D52] transition"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your full name"
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2E9D52]/30 focus:border-[#2E9D52] bg-slate-50/50"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">
                          Mobile Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          pattern="[0-9]{10}"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="10-digit mobile number"
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2E9D52]/30 focus:border-[#2E9D52] bg-slate-50/50"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2E9D52]/30 focus:border-[#2E9D52] bg-slate-50/50"
                        />
                      </div>

                      {/* Subject */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">
                          Topic of Inquiry
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2E9D52]/30 focus:border-[#2E9D52] bg-slate-50/50 text-slate-700"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Personal Loan Inquiry">Personal Loan Inquiry</option>
                          <option value="Home Loan Inquiry">Home Loan Inquiry</option>
                          <option value="Business Loan Inquiry">Business Loan Inquiry</option>
                          <option value="Gold Loan Inquiry">Gold Loan Inquiry</option>
                          <option value="Existing Application Status">Existing Application Status</option>
                          <option value="Partnership / Institutional">Partnership / Institutional</option>
                          <option value="Feedback">Feedback</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">
                          Message <span className="text-rose-500">*</span>
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Please describe how we can assist you..."
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2E9D52]/30 focus:border-[#2E9D52] bg-slate-50/50 resize-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#0E2E5E] to-[#2E9D52] hover:from-[#0B254D] hover:to-[#268444] shadow-md hover:shadow-lg transition-all disabled:opacity-60"
                      >
                        {loading ? "Submitting..." : "Send Message"}
                      </button>

                      <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                        Your information is secure and only used to respond to your inquiry. We never send unsolicited calls or marketing spam.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
