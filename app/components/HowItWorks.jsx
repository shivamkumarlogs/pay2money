"use client";

import React, { useEffect, useRef, useState } from "react";
import { HOW_IT_WORKS_STEPS as STEPS } from "../data/siteData";

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const timersRef = useRef([]);
  const [activeStep, setActiveStep] = useState(0); // 0 = none, 1, 2, 3
  const [isLineDrawn, setIsLineDrawn] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  // Trigger animation sequence (Pure React + Tailwind CSS with requestAnimationFrame & timers)
  const startSequence = () => {
    // Respect prefers-reduced-motion for accessibility
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setActiveStep(3);
      setIsLineDrawn(true);
      return;
    }

    // Reset states
    setActiveStep(0);
    setIsLineDrawn(false);
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];

    requestAnimationFrame(() => {
      // 1. Draw connecting SVG line with stroke-dashoffset over 2.0s (ease in-out)
      setIsLineDrawn(true);

      // 2. Line reaches Node 1 (~50ms) -> Fill with brand accent & pop in white check
      const t1 = setTimeout(() => {
        setActiveStep((prev) => Math.max(prev, 1));
      }, 50);

      // 3. Line reaches Node 2 (~1000ms) -> Fill with brand accent & pop in white check
      const t2 = setTimeout(() => {
        setActiveStep((prev) => Math.max(prev, 2));
      }, 1000);

      // 4. Line reaches Node 3 (~1900ms) -> Fill with brand accent & pop in white check
      const t3 = setTimeout(() => {
        setActiveStep((prev) => Math.max(prev, 3));
      }, 1900);

      timersRef.current = [t1, t2, t3];
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          startSequence();
        }
      },
      { threshold: 0.25 },
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
      timersRef.current.forEach(clearTimeout);
    };
  }, [hasTriggered]);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto select-none"
    >
      {/* Section Header consistent with whole project typography & layout */}
      <div className="max-w-4xl mx-auto text-center space-y-4 mb-14 sm:mb-20">
        <h2 className="text-2xl sm:text-4xl font-black text-brand-primary tracking-tight leading-[1.15]">
          Fast approvals in three simple steps.
        </h2>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
          Get sanctioned loan amounts deposited into your bank account with
          complete transparency.
        </p>
      </div>

      {/* Steps Flow Container (Matched to full container width) */}
      <div className="relative w-full">
        {/* DESKTOP WAVY SVG PATH (Matches reference curve) */}
        <div className="hidden md:block absolute top-0 left-0 w-full h-45 pointer-events-none z-0 overflow-visible">
          <svg
            viewBox="0 0 960 180"
            preserveAspectRatio="none"
            className="w-full h-45 overflow-visible"
          >
            <defs>
              <linearGradient
                id="goldFlowGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#C5943B" />
                <stop offset="50%" stopColor="#E5BE7E" />
                <stop offset="100%" stopColor="#C5943B" />
              </linearGradient>
              <filter
                id="goldGlowFilter"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Ghost track */}
            <path
              pathLength="100"
              d="M 160 36 C 220 16, 270 20, 320 45 C 370 70, 430 65, 480 36 C 540 10, 600 -10, 660 -10 C 730 -10, 760 16, 800 36"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            {/* Active animated wavy stroke over 2.0s */}
            <path
              pathLength="100"
              d="M 160 36 C 220 16, 270 20, 320 45 C 370 70, 430 65, 480 36 C 540 10, 600 -10, 660 -10 C 730 -10, 760 16, 800 36"
              fill="none"
              stroke="url(#goldFlowGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#goldGlowFilter)"
              style={{
                strokeDasharray: 100,
                strokeDashoffset: isLineDrawn ? 0 : 100,
                transition:
                  "stroke-dashoffset 2000ms cubic-bezier(0.42, 0, 0.58, 1)",
              }}
            />
          </svg>
        </div>

        {/* MOBILE VERTICAL SVG LINE (Visible on mobile) */}
        <div className="md:hidden absolute top-9 left-9 -translate-x-1/2 w-1 h-[calc(100%-72px)] pointer-events-none z-0">
          <svg
            className="w-full h-full overflow-visible"
            preserveAspectRatio="none"
          >
            <line
              x1="2"
              y1="0"
              x2="2"
              y2="100%"
              pathLength="100"
              stroke="#E2E8F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line
              x1="2"
              y1="0"
              x2="2"
              y2="100%"
              pathLength="100"
              stroke="#C5943B"
              strokeWidth="4"
              strokeLinecap="round"
              style={{
                strokeDasharray: 100,
                strokeDashoffset: isLineDrawn ? 0 : 100,
                transition:
                  "stroke-dashoffset 2000ms cubic-bezier(0.42, 0, 0.58, 1)",
              }}
            />
          </svg>
        </div>

        {/* THREE STEPS (Row on Desktop, Stacked on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 relative z-10">
          {STEPS.map((step, idx) => {
            const stepNumber = idx + 1;
            const isFilled = activeStep >= stepNumber;

            return (
              <div
                key={idx}
                className="flex flex-row md:flex-col items-start md:items-center text-left md:text-center gap-5 sm:gap-6"
              >
                {/* CIRCLE NODE */}
                <div
                  className={`relative shrink-0 w-18 h-18 rounded-full flex items-center justify-center transition-all duration-500 z-10 md:mb-6 ${
                    isFilled
                      ? "bg-brand-accent border-[3.5px] border-brand-accent text-white shadow-[0_0_25px_rgba(197,148,59,0.45)] scale-105"
                      : "bg-white border-[3px] border-slate-300 text-slate-400 shadow-xs scale-100"
                  }`}
                >
                  {/* Step Number (fades out when node fills) */}
                  <span
                    className={`text-xl font-black font-mono transition-all duration-300 ${
                      isFilled
                        ? "opacity-0 scale-50 absolute"
                        : "opacity-80 text-slate-400"
                    }`}
                  >
                    {step.num}
                  </span>

                  {/* White Checkmark Icon popping in */}
                  <svg
                    className={`w-8 h-8 text-white transition-all duration-400 ease-out ${
                      isFilled
                        ? "opacity-100 scale-100 rotate-0"
                        : "opacity-0 scale-0 -rotate-45 absolute"
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>

                {/* OUTCOME TYPOGRAPHY */}
                <div className="max-w-sm px-3">
                  <h3 className="text-lg sm:text-xl font-bold text-brand-primary mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
