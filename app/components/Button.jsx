"use client";

import React from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";

/**
 * Universal Button Component for Pay2Money Design System
 * 
 * Supports:
 * - Polymorphic rendering: <button>, <Link> (for internal routes), or <a> (for anchor / external links)
 * - Variants: 'primary', 'accent', 'outline', 'white', 'ghost'
 * - Sizes: 'sm', 'md', 'lg'
 * - Full width option, loading state, icon support
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  disabled = false,
  href,
  target,
  rel,
  type = "button",
  onClick,
  className = "",
  icon,
  iconPosition = "left",
  ...props
}) {
  // Base classes for consistent typography and interaction
  const baseClasses =
    "inline-flex items-center justify-center font-bold tracking-tight select-none transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98]";

  // Color variants connected to centralized globals.css tokens
  const variants = {
    primary:
      "bg-brand-primary hover:bg-brand-primary-hover text-white shadow-sm hover:shadow",
    accent:
      "bg-brand-accent hover:bg-brand-accent-hover text-white shadow-sm hover:shadow",
    outline:
      "bg-white text-brand-primary border border-slate-300 hover:border-brand-primary hover:text-brand-primary shadow-xs hover:shadow",
    white:
      "bg-white text-brand-primary hover:bg-slate-50 shadow-md hover:shadow-lg",
    ghost:
      "bg-transparent text-slate-700 hover:text-brand-accent hover:bg-slate-50/50",
  };

  // Size specifications
  const sizes = {
    sm: "px-4 py-2 text-xs rounded-lg gap-1.5",
    md: "px-6 py-3 text-sm rounded-xl gap-2",
    lg: "px-8 py-3.5 sm:py-4 text-sm sm:text-base rounded-xl gap-2.5",
  };

  const widthClass = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseClasses} ${variants[variant] || variants.primary} ${
    sizes[size] || sizes.md
  } ${widthClass} ${className}`.trim();

  const content = (
    <>
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin shrink-0" />
      ) : (
        icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {!loading && icon && iconPosition === "right" && (
        <span className="shrink-0">{icon}</span>
      )}
    </>
  );

  // 1. Next.js Internal Link
  if (href && href.startsWith("/") && !href.startsWith("/#")) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick} {...props}>
        {content}
      </Link>
    );
  }

  // 2. Hash anchor or External URL
  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        onClick={onClick}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : rel}
        {...props}
      >
        {content}
      </a>
    );
  }

  // 3. Regular Native Button
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
}

