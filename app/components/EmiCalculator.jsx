"use client";

import React, { useState, useMemo } from "react";

export default function EmiCalculator() {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(10.5);
  const [tenure, setTenure] = useState(5);

  // Sanitized calculations
  const {
    monthlyEmi,
    totalInterest,
    totalPayable,
    principalPercent,
    interestPercent,
  } = useMemo(() => {
    const P = Math.max(0, parseFloat(amount) || 0);
    const annualRate = Math.min(30, Math.max(0, parseFloat(rate) || 0));
    const r = annualRate / (12 * 100);
    const n = Math.max(1, (parseFloat(tenure) || 1) * 12);

    if (P <= 0 || r <= 0 || n <= 0) {
      return {
        monthlyEmi: 0,
        totalInterest: 0,
        totalPayable: P,
        principalPercent: 100,
        interestPercent: 0,
      };
    }

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const interest = Math.max(0, totalPayment - P);

    const pPct =
      totalPayment > 0
        ? Math.min(100, Math.max(0, Math.round((P / totalPayment) * 100)))
        : 100;
    const iPct = 100 - pPct;

    return {
      monthlyEmi: Math.round(emi),
      totalInterest: Math.round(interest),
      totalPayable: Math.round(totalPayment),
      principalPercent: pPct,
      interestPercent: iPct,
    };
  }, [amount, rate, tenure]);

  const formatINR = (val) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val || 0);
  };

  // Helper for slider progress fill percentage
  const getSliderFill = (val, min, max) => {
    const clamped = Math.min(max, Math.max(min, val || min));
    return ((clamped - min) / (max - min)) * 100;
  };

  const amountPct = getSliderFill(amount, 50000, 10000000);
  const ratePct = getSliderFill(rate, 6.5, 24);
  const tenurePct = getSliderFill(tenure, 1, 30);

  return (
    <section
      id="calculator"
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Heading */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <span className="text-xs font-extrabold uppercase tracking-widest text-brand-accent">
          EMI Calculator
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-primary tracking-tight mt-2 mb-3">
          Calculate Your Monthly Loan EMI
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          Use the sliders or enter values manually to calculate your monthly EMI
          and repayment schedule.
        </p>
      </div>

      {/* Main Calculator Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 bg-white text-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs border border-slate-200/80 items-stretch">
          {/* Left Inputs Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 sm:space-y-7">
            {/* Amount Input & Slider */}
            <div className="bg-slate-50/80 p-4 sm:p-5 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between gap-3 mb-3">
                <label className="text-sm sm:text-base font-bold text-brand-primary">
                  Loan Amount
                </label>
                <div className="w-32 sm:w-36 h-9 sm:h-10 px-2.5 bg-white rounded-xl border border-slate-300 shadow-sm flex items-center justify-end gap-1 focus-within:border-brand-accent focus-within:ring-2 focus-within:ring-brand-accent/20 transition shrink-0">
                  <span className="text-xs sm:text-sm font-bold text-slate-400 select-none">
                    ₹
                  </span>
                  <input
                    type="number"
                    min={10000}
                    max={100000000}
                    step={25000}
                    value={amount === 0 ? "" : amount}
                    onChange={(e) => {
                      const val =
                        e.target.value === "" ? 0 : Number(e.target.value);
                      setAmount(val);
                    }}
                    onBlur={() => {
                      if (!amount || amount < 10000) setAmount(50000);
                      else if (amount > 100000000) setAmount(100000000);
                    }}
                    className="w-full text-right font-extrabold text-brand-accent text-sm sm:text-base focus:outline-none bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="500000"
                  />
                </div>
              </div>

              <input
                type="range"
                min={50000}
                max={10000000}
                step={25000}
                value={Math.min(10000000, Math.max(50000, amount))}
                onChange={(e) => setAmount(Number(e.target.value))}
                style={{
                  background: `linear-gradient(to right, var(--brand-accent) 0%, var(--brand-accent) ${amountPct}%, #E2E8F0 ${amountPct}%, #E2E8F0 100%)`,
                }}
                className="w-full h-2.5 rounded-lg appearance-none cursor-pointer accent-brand-accent"
              />

              <div className="flex justify-between text-xs text-slate-400 font-semibold mt-2">
                <span>₹50,000</span>
                <span>₹50 Lakh</span>
                <span>₹1 Crore</span>
              </div>
            </div>

            {/* Interest Rate Input & Slider */}
            <div className="bg-slate-50/80 p-4 sm:p-5 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between gap-3 mb-3">
                <label className="text-sm sm:text-base font-bold text-brand-primary">
                  Interest Rate (p.a.)
                </label>
                <div className="w-24 sm:w-28 h-9 sm:h-10 px-2.5 bg-white rounded-xl border border-slate-300 shadow-sm flex items-center justify-end gap-1 focus-within:border-brand-accent focus-within:ring-2 focus-within:ring-brand-accent/20 transition shrink-0">
                  <input
                    type="number"
                    min={1}
                    max={30}
                    step={0.1}
                    value={rate === 0 ? "" : rate}
                    onChange={(e) => {
                      const val =
                        e.target.value === "" ? 0 : Number(e.target.value);
                      setRate(val);
                    }}
                    onBlur={() => {
                      if (!rate || rate < 1) setRate(6.5);
                      else if (rate > 30) setRate(30);
                    }}
                    className="w-full text-right font-extrabold text-brand-accent text-sm sm:text-base focus:outline-none bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="10.5"
                  />
                  <span className="text-xs sm:text-sm font-bold text-slate-400 select-none">
                    %
                  </span>
                </div>
              </div>

              <input
                type="range"
                min={6.5}
                max={24}
                step={0.25}
                value={Math.min(24, Math.max(6.5, rate))}
                onChange={(e) => setRate(Number(e.target.value))}
                style={{
                  background: `linear-gradient(to right, var(--brand-accent) 0%, var(--brand-accent) ${ratePct}%, #E2E8F0 ${ratePct}%, #E2E8F0 100%)`,
                }}
                className="w-full h-2.5 rounded-lg appearance-none cursor-pointer accent-brand-accent"
              />

              <div className="flex justify-between text-xs text-slate-400 font-semibold mt-2">
                <span>6.5%</span>
                <span>12%</span>
                <span>24%</span>
              </div>
            </div>

            {/* Tenure Input & Slider */}
            <div className="bg-slate-50/80 p-4 sm:p-5 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between gap-3 mb-3">
                <label className="text-sm sm:text-base font-bold text-brand-primary">
                  Loan Tenure
                </label>
                <div className="w-24 sm:w-28 h-9 sm:h-10 px-2.5 bg-white rounded-xl border border-slate-300 shadow-sm flex items-center justify-end gap-1 focus-within:border-brand-accent focus-within:ring-2 focus-within:ring-brand-accent/20 transition shrink-0">
                  <input
                    type="number"
                    min={1}
                    max={30}
                    step={1}
                    value={tenure === 0 ? "" : tenure}
                    onChange={(e) => {
                      const val =
                        e.target.value === "" ? 0 : Number(e.target.value);
                      setTenure(val);
                    }}
                    onBlur={() => {
                      if (!tenure || tenure < 1) setTenure(1);
                      else if (tenure > 30) setTenure(30);
                    }}
                    className="w-full text-right font-extrabold text-brand-accent text-sm sm:text-base focus:outline-none bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="5"
                  />
                  <span className="text-xs sm:text-sm font-bold text-slate-400 select-none">
                    {tenure === 1 ? "Yr" : "Yrs"}
                  </span>
                </div>
              </div>

              <input
                type="range"
                min={1}
                max={30}
                step={1}
                value={Math.min(30, Math.max(1, tenure))}
                onChange={(e) => setTenure(Number(e.target.value))}
                style={{
                  background: `linear-gradient(to right, var(--brand-accent) 0%, var(--brand-accent) ${tenurePct}%, #E2E8F0 ${tenurePct}%, #E2E8F0 100%)`,
                }}
                className="w-full h-2.5 rounded-lg appearance-none cursor-pointer accent-brand-accent"
              />

              <div className="flex justify-between text-xs text-slate-400 font-semibold mt-2">
                <span>1 Year</span>
                <span>15 Years</span>
                <span>30 Years ({tenure * 12} Mos)</span>
              </div>
            </div>

            {/* Visual Progress Ratio Bar */}
            <div className="pt-2">
              <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-600 mb-2">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-brand-primary" />
                  Principal Loan: {principalPercent}%
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-brand-accent" />
                  Total Interest: {interestPercent}%
                </span>
              </div>
              <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden flex shadow-inner border border-slate-200">
                <div
                  className="bg-brand-primary transition-all duration-300"
                  style={{ width: `${principalPercent}%` }}
                />
                <div
                  className="bg-brand-accent transition-all duration-300"
                  style={{ width: `${interestPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Right Result Card Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-brand-primary text-white p-7 sm:p-9 lg:p-10 rounded-2xl border border-slate-800/80 shadow-md relative overflow-hidden h-full flex flex-col justify-center space-y-7 sm:space-y-8">
              {/* Monthly Repayment Box */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6">
                <span className="text-xs uppercase tracking-wider text-slate-300 font-bold block mb-1">
                  Monthly Repayment (EMI)
                </span>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-accent tracking-tight">
                  {formatINR(monthlyEmi)}
                  <span className="text-xs sm:text-sm font-normal text-slate-300 ml-1.5">
                    / month
                  </span>
                </div>
              </div>

              {/* Detailed Breakdown List */}
              <div className="space-y-4 pt-2">
                <div className="flex justify-between items-center text-sm sm:text-base">
                  <span className="text-slate-300 flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-sky-400 shrink-0" />
                    Principal Amount
                  </span>
                  <span className="font-extrabold text-white text-base sm:text-lg">
                    {formatINR(amount)}
                  </span>
                </div>

                <div className="flex justify-between items-center text-sm sm:text-base">
                  <span className="text-slate-300 flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-brand-accent shrink-0" />
                    Total Interest
                  </span>
                  <span className="font-extrabold text-amber-200 text-base sm:text-lg">
                    {formatINR(totalInterest)}
                  </span>
                </div>

                <div className="flex justify-between items-center pt-5 border-t border-white/15 text-base sm:text-lg">
                  <span className="text-white font-bold">
                    Total Amount Payable
                  </span>
                  <span className="font-black text-brand-accent text-xl sm:text-2xl">
                    {formatINR(totalPayable)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
