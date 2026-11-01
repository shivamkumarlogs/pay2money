"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
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

  const fetchLinks = useCallback(async () => {
    try {
      const res = await fetch("/api/links");
      if (!res.ok) throw new Error("Failed to load links");
      const data = await res.json();
      if (data && data.links) {
        setLinks(data.links);
      }
    } catch (err) {
      console.warn("Using fallback product links:", err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLinks();

    // Auto-revalidate silently when user focuses or returns to the browser tab
    const handleFocus = () => {
      if (document.visibilityState === "visible") {
        fetchLinks();
      }
    };

    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleFocus);

    return () => {
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleFocus);
    };
  }, [fetchLinks]);

  /**
   * Universal Link Resolver
   * Routes loans and actionable products through the server-side /apply/[productId] engine.
   * This guarantees real-time routing without requiring manual page reloads.
   */
  const getLink = (identifier, fallbackHref = "/contact") => {
    if (!identifier) {
      return { href: fallbackHref, isExternal: false };
    }

    const rawKey = normalizeKey(identifier);
    const key = KEY_ALIASES[rawKey] || rawKey;

    // Direct local anchor links (only when the identifier itself is a navigation anchor)
    if (rawKey.startsWith("#") || rawKey === "explore-all-loans") {
      const targetAnchor = fallbackHref && fallbackHref.startsWith("#") ? fallbackHref : "#loans";
      return { href: targetAnchor, isExternal: false };
    }

    // Dedicated internal tools
    if (key === "emi-calculator") {
      return { href: "/emi-calculator", isExternal: false };
    }

    if (key === "cibil-consultation") {
      const customUrl = links[rawKey] || links[key] || DEFAULT_PRODUCT_LINKS[key];
      if (customUrl && customUrl.startsWith("tel:")) {
        return { href: customUrl, isExternal: true };
      }
      return {
        href: `/apply/${encodeURIComponent(rawKey)}`,
        isExternal: true,
        target: "_blank",
        rel: "noopener noreferrer",
      };
    }

    // Server-Side Redirect Engine: All applications route through /apply/[productId]
    return {
      href: `/apply/${encodeURIComponent(rawKey)}`,
      isExternal: true,
      target: "_blank",
      rel: "noopener noreferrer",
    };
  };

  return (
    <LinksContext.Provider value={{ links, loading, getLink, refreshLinks: fetchLinks }}>
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
    return {
      links: DEFAULT_PRODUCT_LINKS,
      loading: false,
      getLink: (identifier, fallbackHref = "/contact") => ({
        href: `/apply/${encodeURIComponent(normalizeKey(identifier))}`,
        isExternal: true,
        target: "_blank",
        rel: "noopener noreferrer",
      }),
    };
  }
  return context;
}
