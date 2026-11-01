"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { Phone, Mail, MapPin, CheckCircle2, AlertCircle } from "lucide-react";
import { SITE_CONFIG } from "../data/siteData";

// Complete catalog of topics matching Pay2Money's entire service suite
const INQUIRY_TOPICS = [
  {
    group: "Loan Products",
    options: [
      "Personal Loan Inquiry",
      "Instant Loan Inquiry",
      "Business Loan Inquiry",
      "Home Loan Inquiry",
      "Loan Against Property (LAP)",
      "Gold Loan Inquiry",
      "Car Loan Inquiry",
      "Education Loan Inquiry",
      "Commercial Vehicle Loan",
      "Credit Cards Inquiry",
    ],
  },
  {
    group: "Credit & Financial Tools",
    options: [
      "Free CIBIL Score Check",
      "CIBIL Score Consultation",
      "Fixed Deposit (FD) Inquiry",
      "Credit Score Builder",
    ],
  },
  {
    group: "General Support",
    options: [
      "General Inquiry",
      "Existing Application Status",
      "Documentation Assistance",
      "Partnership / Institutional",
    ],
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Personal Loan Inquiry",
    message: "",
    hp_field: "", // Anti-spam honeypot (invisible to real users)
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  // Auto-detect service parameter from URL (fallback when partner link routes here)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const service = params.get("service");
      if (service) {
        const serviceMap = {
          "personal-loan": "Personal Loan Inquiry",
          "instant-loan": "Instant Loan Inquiry",
          "business-loan": "Business Loan Inquiry",
          "home-loan": "Home Loan Inquiry",
          "loan-against-property": "Loan Against Property (LAP)",
          "gold-loan": "Gold Loan Inquiry",
          "car-loan": "Car Loan Inquiry",
          "education-loan": "Education Loan Inquiry",
          "commercial-vehicle-loan": "Commercial Vehicle Loan",
          "credit-cards": "Credit Cards Inquiry",
          "free-cibil-check": "Free CIBIL Score Check",
          "cibil-consultation": "CIBIL Score Consultation",
          "fixed-deposit": "Fixed Deposit (FD) Inquiry",
          "credit-score-builder": "Credit Score Builder",
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

  // Strict Phone Number Input Sanitizer: Allows ONLY numbers up to 10 digits
  const handlePhoneChange = (e) => {
    const rawVal = e.target.value.replace(/\D/g, "");
    const trimmedVal = rawVal.slice(0, 10);

    setFormData((prev) => ({ ...prev, phone: trimmedVal }));

    // Clear phone error as user fixes it
    if (fieldErrors.phone && trimmedVal.length === 10 && /^[6-9]/.test(trimmedVal)) {
      setFieldErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  // Client-Side Validation
  const validateForm = () => {
    const errors = {};

    // 1. Name validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = "Please enter your full name (at least 2 characters).";
    }

    // 2. Mobile validation: exactly 10 digits, starting with 6, 7, 8, or 9
    const phone = formData.phone.trim();
    if (!phone) {
      errors.phone = "Mobile number is required.";
    } else if (phone.length !== 10) {
      errors.phone = `Please enter all 10 digits (currently ${phone.length}/10).`;
    } else if (!/^[6-9]/.test(phone)) {
      errors.phone = "Valid Indian mobile numbers must start with 6, 7, 8, or 9.";
    }

    // 3. Email validation (Optional, but if filled, must be valid format)
    const email = formData.email.trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address, or leave it blank.";
    }

    // 4. Message validation
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errors.message = "Please describe your inquiry or loan requirement (at least 5 characters).";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit inquiry. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setServerError(err.message || "Something went wrong. Please call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-surface">
      <Navbar />

      <main className="flex-1">
        {/* 1. Header Section */}
        <section className="pt-14 sm:pt-20 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-2xl sm:text-4xl font-black text-brand-primary tracking-tight leading-[1.15]">
              We are here to assist you.
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
                      Your inquiry has been successfully recorded. Our loan
                      advisors will review your details and reach out on your
                      phone shortly.
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSubmitted(false);
                        setServerError("");
                        setFieldErrors({});
                        setFormData({
                          name: "",
                          phone: "",
                          email: "",
                          subject: "Personal Loan Inquiry",
                          message: "",
                          hp_field: "",
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
                    noValidate
                    className="flex-1 flex flex-col justify-between space-y-4"
                  >
                    {/* Invisible Honeypot Field for Spam Bots */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="hp_field">Do not fill this</label>
                      <input
                        type="text"
                        id="hp_field"
                        name="hp_field"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.hp_field}
                        onChange={(e) =>
                          setFormData({ ...formData, hp_field: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-4">
                      {/* Full Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700 flex justify-between">
                          <span>
                            Full Name <span className="text-rose-500">*</span>
                          </span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (fieldErrors.name) {
                              setFieldErrors({ ...fieldErrors, name: "" });
                            }
                          }}
                          placeholder="e.g. Rahul Sharma"
                          className={`w-full px-4 py-3 text-sm rounded-xl border focus:outline-none focus:ring-2 bg-slate-50/50 transition-colors ${
                            fieldErrors.name
                              ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200"
                              : "border-slate-200 focus:border-brand-accent focus:ring-brand-accent/20"
                          }`}
                        />
                        {fieldErrors.name && (
                          <p className="text-[11px] text-rose-500 font-medium">
                            {fieldErrors.name}
                          </p>
                        )}
                      </div>

                      {/* Phone Number with fixed +91 prefix and strict 10-digit limit */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">
                          Mobile Number <span className="text-rose-500">*</span>
                        </label>

                        <div className="flex rounded-xl shadow-xs">
                          {/* Fixed +91 Badge */}
                          <div className="inline-flex items-center px-3.5 py-3 rounded-l-xl border border-r-0 border-slate-200 bg-slate-100/90 text-slate-700 text-sm font-semibold select-none shrink-0">
                            <span>+91</span>
                          </div>

                          {/* 10-digit Input */}
                          <input
                            type="tel"
                            inputMode="numeric"
                            autoComplete="tel"
                            maxLength={10}
                            required
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            placeholder="9876543210"
                            className={`w-full px-4 py-3 text-sm rounded-r-xl border focus:outline-none focus:ring-2 bg-slate-50/50 transition-colors tracking-wide ${
                              fieldErrors.phone
                                ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200"
                                : "border-slate-200 focus:border-brand-accent focus:ring-brand-accent/20"
                            }`}
                          />
                        </div>

                        {fieldErrors.phone && (
                          <p className="text-[11px] text-rose-500 font-medium">
                            {fieldErrors.phone}
                          </p>
                        )}
                      </div>

                      {/* Email Address */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">
                          Email Address
                        </label>
                        <input
                          type="email"
                          autoCapitalize="none"
                          autoCorrect="off"
                          spellCheck="false"
                          value={formData.email}
                          onKeyDown={(e) => {
                            if (e.key === " ") e.preventDefault();
                          }}
                          onChange={(e) => {
                            const val = e.target.value.toLowerCase().replace(/\s/g, "");
                            setFormData({ ...formData, email: val });
                            if (fieldErrors.email) {
                              setFieldErrors({ ...fieldErrors, email: "" });
                            }
                          }}
                          placeholder="name@example.com"
                          className={`w-full px-4 py-3 text-sm rounded-xl border focus:outline-none focus:ring-2 bg-slate-50/50 transition-colors lowercase ${
                            fieldErrors.email
                              ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200"
                              : "border-slate-200 focus:border-brand-accent focus:ring-brand-accent/20"
                          }`}
                        />
                        {fieldErrors.email && (
                          <p className="text-[11px] text-rose-500 font-medium">
                            {fieldErrors.email}
                          </p>
                        )}
                      </div>

                      {/* Topic of Inquiry (Comprehensive Product List) */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">
                          Topic of Inquiry <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            value={formData.subject}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                subject: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent bg-slate-50/50 text-slate-800 cursor-pointer appearance-none font-medium"
                          >
                            {INQUIRY_TOPICS.map((group) => (
                              <optgroup key={group.group} label={group.group}>
                                {group.options.map((option) => (
                                  <option key={option} value={option}>
                                    {option}
                                  </option>
                                ))}
                              </optgroup>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                            </svg>
                          </div>
                        </div>
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
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            });
                            if (fieldErrors.message) {
                              setFieldErrors({ ...fieldErrors, message: "" });
                            }
                          }}
                          placeholder="e.g. Looking for a Personal Loan of 5 Lakhs for 3 years. Please guide regarding documentation."
                          className={`w-full px-4 py-3 text-sm rounded-xl border focus:outline-none focus:ring-2 bg-slate-50/50 resize-none transition-colors ${
                            fieldErrors.message
                              ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200"
                              : "border-slate-200 focus:border-brand-accent focus:ring-brand-accent/20"
                          }`}
                        />
                        {fieldErrors.message && (
                          <p className="text-[11px] text-rose-500 font-medium">
                            {fieldErrors.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      {/* Server-side Error Alert */}
                      {serverError && (
                        <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                          <span>{serverError}</span>
                        </div>
                      )}

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
                        your inquiry. We never send unsolicited marketing spam.
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
