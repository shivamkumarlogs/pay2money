"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES as SLIDES } from "../data/siteData";
import Button from "./Button";
import { useProductLinks } from "../context/LinksContext";

export default function HeroSlider() {
  const { getLink } = useProductLinks();
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
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${SLIDES.length * 100}%`,
            transform: `translateX(-${current * (100 / SLIDES.length)}%)`,
          }}
        >
          {SLIDES.map((slide, idx) => {
            const linkInfo = getLink(
              slide.id || `slide-${idx + 1}` || slide.title,
              slide.href
            );

            return (
              <div
                key={idx}
                style={{ width: `${100 / SLIDES.length}%` }}
                className={`shrink-0 ${slide.bg} text-white flex items-center min-h-50 sm:min-h-62.5 md:min-h-70 lg:min-h-75 relative overflow-hidden`}
              >
                {/* Left Side Content Container */}
                <div className="w-[62%] sm:w-[58%] md:w-[54%] z-10 flex flex-col justify-center pl-6 sm:pl-10 lg:pl-14 pr-2 py-4 sm:py-8 space-y-1.5 sm:space-y-3">
                  <h2 className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-extrabold sm:font-black tracking-tight leading-snug sm:leading-tight text-white drop-shadow-sm">
                    {slide.title}
                  </h2>

                  <p className="text-[11px] sm:text-sm md:text-base text-white/90 font-normal leading-normal sm:leading-relaxed max-w-md lg:max-w-lg">
                    {slide.subtitle}
                  </p>

                  <div className="pt-1 sm:pt-2">
                    <Button
                      href={linkInfo.href}
                      target={linkInfo.target}
                      rel={linkInfo.rel}
                      variant="white"
                      size="sm"
                      className="rounded-full! px-5 sm:px-7 py-1.5 sm:py-2.5 text-[11px] sm:text-sm"
                    >
                      {slide.cta}
                    </Button>
                  </div>
                </div>

                {/* Right Side: Full-Bleed Photography with Slanted / Diagonal Split */}
                <div
                  className="absolute right-0 top-0 bottom-0 w-[42%] sm:w-[46%] md:w-[48%] h-full overflow-hidden [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)] sm:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]"
                >
                  <Image
                    src={slide.image}
                    alt={slide.imgAlt}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 768px) 48vw, 600px"
                    className="object-cover object-center"
                    {...(idx === 0 ? { priority: true } : { loading: "eager" })}
                  />
                </div>
              </div>
            );
          })}
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
