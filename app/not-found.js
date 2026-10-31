import React from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Page Not Found",
  description:
    "Oops! This page is currently not available. Return to the Pay2Money homepage.",
};

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-surface">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <div className="w-full max-w-md mx-auto flex flex-col items-center space-y-6">
          {/* Open 404 Display (0 in Champagne Gold, No Circular Border) */}
          <div className="relative w-full flex items-center justify-center select-none py-4">
            {/* Soft Ambient Horizontal Glow */}
            <div className="absolute inset-0 w-3/4 max-w-xs mx-auto h-28 sm:h-36 bg-gradient-to-r from-transparent via-brand-accent-light to-transparent blur-2xl pointer-events-none -z-10" />

            <div className="flex items-center justify-center text-7xl sm:text-8xl lg:text-9xl font-black tracking-tight leading-none">
              <span className="text-brand-primary">4</span>
              <span className="text-brand-accent">0</span>
              <span className="text-brand-primary">4</span>
            </div>
          </div>

          {/* Text Content matching reference image */}
          <div className="space-y-1.5 pt-1">
            <h1 className="text-xl sm:text-2xl font-black text-brand-primary tracking-tight">
              Oops! Something went wrong
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 font-normal">
              This page is currently not available
            </p>
          </div>

          {/* Action Button matching reference proportion & Pay2Money tokens */}
          <div className="pt-3 w-full flex justify-center">
            <Link
              href="/"
              className="w-full max-w-xs inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-brand-primary hover:bg-brand-primary-hover text-white text-xs sm:text-sm font-bold tracking-tight transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98]"
            >
              Go to homepage
            </Link>
          </div>
        </div>
      </main>

      {/* Subtle 1-line Footer */}
      <footer className="py-6 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} Pay2Money. All rights reserved.
      </footer>
    </div>
  );
}
