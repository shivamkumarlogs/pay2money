"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { DEFAULT_PRODUCT_LINKS, KEY_ALIASES, normalizeKey } from "../data/productLinks";

const LinksContext = createContext({
  links: DEFAULT_PRODUCT_LINKS,
  loading: false,
  getLink: () => ({ href: "/contact", isExternal: false }),
});

export function LinksProvider({ children }) {
  // Start with local default links immediately for 0ms delay / no layout shift
  const [links, setLinks] = useState(DEFAULT_PRODUCT_LINKS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchLinks() {
      try {
        const res = await fetch("/api/links");
        if (!res.ok) throw new Error("Failed to load links");
        const data = await res.json();
        if (data && data.links && isMounted) {
          setLinks(data.links);
        }
      } catch (err) {
        console.warn("Using fallback product links:", err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchLinks();
    return () => {
      isMounted = false;
    };
  }, []);

  /**
   * Universal Link Resolver
   * Accepts any ID, Title, or name (e.g. "Personal Loan" or "personal-loan")
   * Returns: { href, isExternal, target, rel }
   */
  const getLink = (identifier, fallbackHref = "/contact") => {
    if (!identifier) {
      return { href: fallbackHref, isExternal: false };
    }

    let key = normalizeKey(identifier);
    if (KEY_ALIASES[key]) {
      key = KEY_ALIASES[key];
    }
    const rawUrl = links[key];

    // If an active URL is defined in the Google Sheet / defaults
    if (rawUrl && typeof rawUrl === "string" && rawUrl.trim() !== "" && rawUrl.trim() !== "#") {
      const trimmed = rawUrl.trim();
      const isExternal = trimmed.startsWith("http://") || trimmed.startsWith("https://") || trimmed.startsWith("tel:") || trimmed.startsWith("mailto:");

      return {
        href: trimmed,
        isExternal,
        target: isExternal && trimmed.startsWith("http") ? "_blank" : undefined,
        rel: isExternal && trimmed.startsWith("http") ? "noopener noreferrer" : undefined,
      };
    }

    // Smart Fallback: Smoothly redirect to Contact page with service inquiry parameter
    const safeFallback = fallbackHref.includes("?") 
      ? fallbackHref 
      : `/contact?service=${encodeURIComponent(key)}`;

    return {
      href: safeFallback,
      isExternal: false,
    };
  };

  return (
    <LinksContext.Provider value={{ links, loading, getLink }}>
      {children}
    </LinksContext.Provider>
  );
}

/**
 * Custom hook to easily consume links in any component
 */
export function useProductLinks() {
  const context = useContext(LinksContext);
  if (!context) {
    throw new Error("useProductLinks must be used within a LinksProvider");
  }
  return context;
}
