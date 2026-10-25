"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    title: "Quick Personal Loans",
    subtitle: "Get funds sent directly to your bank account with zero paperwork.",
    cta: "Apply Now",
    href: "#calculator",
    bg: "bg-[#0E2E5E]",
    btnText: "text-[#0E2E5E]",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1000&auto=format&fit=crop",
    imgAlt: "Customer with smartphone",
  },
  {
    title: "Free CIBIL Score Check",
    subtitle: "Know your credit score in 30 seconds with zero impact on your score.",
    cta: "Check Free",
    href: "#cibil",
    bg: "bg-[#1E7C3F]",
    btnText: "text-[#1E7C3F]",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1000&auto=format&fit=crop",
    imgAlt: "Credit score check with card and laptop",
  },
  {
    title: "Affordable Home Loans",
    subtitle: "Easy home financing with low monthly payments and flexible tenure.",
    cta: "Explore Home Loans",
    href: "#calculator",
    bg: "bg-[#0E3854]",
    btnText: "text-[#0E3854]",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    imgAlt: "Keys to new home",
  },
  {
    title: "Fast Business Loans",
    subtitle: "Get capital for daily expenses and equipment without giving any collateral.",
    cta: "Grow Your Business",
    href: "#calculator",
    bg: "bg-[#1C2340]",
    btnText: "text-[#1C2340]",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop",
    imgAlt: "Business team at work",
  },
  {
    title: "Instant Gold Loans",
    subtitle: "Safe bank vault storage with same-day cash given straight into your account.",
    cta: "Get Gold Loan",
    href: "#calculator",
    bg: "bg-[#1B3A2B]",
    btnText: "text-[#1B3A2B]",
    image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=1000&auto=format&fit=crop",
    imgAlt: "Safe gold loan vault",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-scroll every 4.5 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const goToPrev = () => {
    setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      goToNext();
    } else if (diff < -45) {
      goToPrev();
    }
  };

  return (
    <section className="py-2 sm:py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl select-none group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Horizontal Sliding Track */}
        <div
          className="flex transition-transform duration-700 ease-in-out w-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className={`w-full shrink-0 ${slide.bg} text-white flex items-center min-h-50 sm:min-h-62.5 md:min-h-70 lg:min-h-75 relative overflow-hidden`}
            >
              {/* Left Side Content Container */}
              <div className="w-[62%] sm:w-[58%] md:w-[54%] z-10 flex flex-col justify-center pl-4 sm:pl-10 lg:pl-14 pr-2 py-4 sm:py-8 space-y-1.5 sm:space-y-3">
                <h2 className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-extrabold sm:font-black tracking-tight leading-snug sm:leading-tight text-white drop-shadow-sm">
                  {slide.title}
                </h2>

                <p className="text-[11px] sm:text-sm md:text-base text-white/90 font-normal leading-normal sm:leading-relaxed max-w-md lg:max-w-lg">
                  {slide.subtitle}
                </p>

                <div className="pt-1 sm:pt-2">
                  <a
                    href={slide.href}
                    className={`inline-flex items-center justify-center px-4 sm:px-7 py-1.5 sm:py-2.5 rounded-full text-[11px] sm:text-sm font-bold bg-white ${slide.btnText} hover:bg-slate-50 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0`}
                  >
                    {slide.cta}
                  </a>
                </div>
              </div>

              {/* Right Side: Full-Bleed Photography with Slanted / Diagonal Split */}
              <div
                className="absolute right-0 top-0 bottom-0 w-[42%] sm:w-[46%] md:w-[48%] h-full overflow-hidden [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)] sm:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.image}
                  alt={slide.imgAlt}
                  className="w-full h-full object-cover object-center"
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Minimalist Side Arrows (Desktop only, pure arrows without background) */}
        <button
          onClick={goToPrev}
          type="button"
          className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white drop-shadow-md transition-all opacity-0 group-hover:opacity-100 p-2 cursor-pointer hover:scale-110 active:scale-95"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 lg:w-7 lg:h-7" strokeWidth={2.5} />
        </button>

        <button
          onClick={goToNext}
          type="button"
          className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white drop-shadow-md transition-all opacity-0 group-hover:opacity-100 p-2 cursor-pointer hover:scale-110 active:scale-95"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 lg:w-7 lg:h-7" strokeWidth={2.5} />
        </button>

        {/* Segmented Bottom Pill Indicators */}
        <div className="absolute bottom-2.5 sm:bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-black/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              type="button"
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === current
                  ? "w-6 bg-white shadow-sm"
                  : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
