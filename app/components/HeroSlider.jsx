"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES as SLIDES } from "../data/siteData";
import Button from "./Button";
import { useProductLinks } from "../context/LinksContext";

export default function HeroSlider() {
  const { getLink } = useProductLinks();
  
  // Clone last slide at beginning, clone first slide at end for infinite continuous loop
  const slidesWithClones = useMemo(() => {
    if (SLIDES.length === 0) return [];
    return [SLIDES[SLIDES.length - 1], ...SLIDES, SLIDES[0]];
  }, []);

  // Track starts at index 1 (the first real slide)
  const [trackIndex, setTrackIndex] = useState(1);
  const [enableTransition, setEnableTransition] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Re-enable CSS transition after instantaneous position snap
  useEffect(() => {
    if (!enableTransition) {
      const timer = setTimeout(() => {
        setEnableTransition(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [enableTransition]);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setEnableTransition(true);
    setTrackIndex((prev) => prev + 1);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setEnableTransition(true);
    setTrackIndex((prev) => prev - 1);
  };

  const goToSlide = (idx) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setEnableTransition(true);
    setTrackIndex(idx + 1);
  };

  // Auto-scroll every 4.5 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      goToNext();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, isAnimating]);

  const handleTransitionEnd = () => {
    setIsAnimating(false);
    // If we transitioned forward into the clone of the first slide at the end
    if (trackIndex >= SLIDES.length + 1) {
      setEnableTransition(false);
      setTrackIndex(1);
    }
    // If we transitioned backward into the clone of the last slide at the start
    else if (trackIndex <= 0) {
      setEnableTransition(false);
      setTrackIndex(SLIDES.length);
    }
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

  // Derive the active real slide index for indicators (0 to 4)
  const activeRealIndex =
    trackIndex === 0
      ? SLIDES.length - 1
      : trackIndex === SLIDES.length + 1
        ? 0
        : trackIndex - 1;

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
        {/* Infinite Sliding Track */}
        <div
          className="flex will-change-transform"
          style={{
            transform: `translateX(-${trackIndex * 100}%)`,
            transition: enableTransition
              ? "transform 700ms cubic-bezier(0.25, 1, 0.5, 1)"
              : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slidesWithClones.map((slide, idx) => {
            const linkInfo = getLink(
              slide.id || `slide-${idx}` || slide.title,
              slide.href
            );

            return (
              <div
                key={`${slide.id || idx}-${idx}`}
                className={`w-full shrink-0 min-w-full ${slide.bg} text-white flex items-center min-h-50 sm:min-h-62.5 md:min-h-70 lg:min-h-75 relative overflow-hidden`}
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
                    priority={idx === 1}
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
              onClick={() => goToSlide(idx)}
              type="button"
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeRealIndex
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
