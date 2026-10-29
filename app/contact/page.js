"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "../data/siteData";

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

  // Auto-detect service parameter from URL (fallback when affiliate link expires)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const service = params.get("service");
      if (service) {
        const serviceMap = {
          "personal-loan": "Personal Loan Inquiry",
          "instant-loan": "Personal Loan Inquiry",
          "home-loan": "Home Loan Inquiry",
          "business-loan": "Business Loan Inquiry",
          "gold-loan": "Gold Loan Inquiry",
          "loan-against-property": "Home Loan Inquiry",
          "car-loan": "General Inquiry",
          "credit-cards": "General Inquiry",
          "free-cibil-check": "General Inquiry",
        };
        const mappedSubject = serviceMap[service] || "General Inquiry";
        const cleanName = service.replace(/-/g, " ");
        setFormData((prev) => ({
          ...prev,
          subject: mappedSubject,
          message: `Hi, I would like to apply for ${cleanName}. Please connect with me to guide through the process.`,
        }));
      }
    }
  }, []);

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
    <div className="flex flex-col min-h-screen bg-brand-surface">
      <Navbar />

      <main className="flex-1">
        {/* 1. Header Section */}
        <section className="pt-14 sm:pt-20 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-brand-primary tracking-tight leading-[1.15]">
              We are here to <span className="text-brand-accent">assist you.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
              Have questions about partner loan facilitation, documentation, or
              an active inquiry? Get in touch with our team.
            </p>
          </div>
        </section>

        {/* 2. Main Contact Grid */}
        <section className="pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-4 sm:pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column: Direct Support Channels */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-5">
              {/* Phone Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 flex flex-col justify-center flex-1 space-y-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-brand-accent-light text-brand-accent flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-brand-primary">
                  Phone Support
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Speak directly with our loan coordination team during business
                  hours.
                </p>
                <div className="pt-1">
                  <a
                    href={SITE_CONFIG.phoneHref}
                    className="text-sm font-bold text-brand-primary hover:text-brand-accent transition block"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                  <span className="text-xs text-slate-500 font-normal">
                    {SITE_CONFIG.workingHours}
                  </span>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 flex flex-col justify-center flex-1 space-y-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-brand-accent-light text-brand-accent flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-brand-primary">
                  Email Support
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Send your inquiries or documentation questions anytime.
                </p>
                <div className="pt-1">
                  <a
                    href={SITE_CONFIG.emailHref}
                    className="text-sm font-bold text-brand-primary hover:text-brand-accent transition block"
                  >
                    {SITE_CONFIG.email}
                  </a>
                  <span className="text-xs text-slate-500 font-normal">
                    We respond within 24 business hours
                  </span>
                </div>
              </div>

              {/* Office Address Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 flex flex-col justify-center flex-1 space-y-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-brand-accent-light text-brand-accent flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-brand-primary">
                  Registered Address
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {SITE_CONFIG.address}
                </p>
              </div>
            </div>

            {/* Right Column: Contact Inquiry Form */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="bg-white rounded-2xl p-7 sm:p-10 border border-slate-200/80 flex flex-col justify-between h-full space-y-6 shadow-xs">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-brand-primary tracking-tight">
                    Send us a message
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
                    Fill in your details and our team will get in touch to
                    assist you.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-brand-accent-light border border-brand-accent/20 text-center space-y-4 my-auto">
                    <div className="w-12 h-12 mx-auto rounded-full bg-brand-accent/15 text-brand-accent flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7 text-brand-accent" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-brand-primary">
                      Thank you for reaching out
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto font-normal">
                      Your message has been received. Our team will review your
                      inquiry and contact you shortly.
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
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
                      className="mt-2"
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="flex-1 flex flex-col justify-between space-y-4"
                  >
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
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Your full name"
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent bg-slate-50/50"
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
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="10-digit mobile number"
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent bg-slate-50/50"
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
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="name@example.com"
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent bg-slate-50/50"
                        />
                      </div>

                      {/* Subject */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">
                          Topic of Inquiry
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              subject: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent bg-slate-50/50 text-slate-700 cursor-pointer"
                        >
                          <option value="General Inquiry">
                            General Inquiry
                          </option>
                          <option value="Personal Loan Inquiry">
                            Personal Loan Inquiry
                          </option>
                          <option value="Home Loan Inquiry">
                            Home Loan Inquiry
                          </option>
                          <option value="Business Loan Inquiry">
                            Business Loan Inquiry
                          </option>
                          <option value="Gold Loan Inquiry">
                            Gold Loan Inquiry
                          </option>
                          <option value="Existing Application Status">
                            Existing Application Status
                          </option>
                          <option value="Partnership / Institutional">
                            Partnership / Institutional
                          </option>
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
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          placeholder="Please describe how we can assist you..."
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent bg-slate-50/50 resize-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      {/* Submit Button */}
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        fullWidth
                        loading={loading}
                      >
                        Send Message
                      </Button>

                      <p className="text-[11px] text-slate-400 text-center leading-relaxed font-normal">
                        Your information is secure and only used to respond to
                        your inquiry. We never send unsolicited calls or
                        marketing spam.
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
