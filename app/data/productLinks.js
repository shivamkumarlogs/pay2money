/**
 * Product & Affiliate Links Configuration
 * 
 * Central registry of all actionable links across Pay2Money.
 * These act as fallbacks if Google Sheets is offline or unreachable.
 */

// Helper to normalize any name or ID into a clean key
export function normalizeKey(str) {
  if (!str) return "";
  return String(str)
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[_\s]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

// Google Sheet Configuration
// Set your Google Sheet ID below, or via GOOGLE_SHEET_ID in .env.local / Vercel
export const GOOGLE_SHEET_CONFIG = {
  sheetId: process.env.GOOGLE_SHEET_ID || process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID || "",
  sheetName: "Sheet1",
  revalidateSeconds: 60, // Cache for 60 seconds to ensure high speed & no rate limits
};

// Aliases mapping slides, tools, and naming variants directly to canonical products
// So updating ONE product in Google Sheets updates the card, the navbar, AND the hero slide!
export const KEY_ALIASES = {
  // Slides & Tools automatically use the same links as their parent loans:
  "slide-1": "personal-loan",
  "quick-personal-loans": "personal-loan",

  "slide-2": "free-cibil-check",
  "free-cibil-score-check": "free-cibil-check",
  "cibil-check": "free-cibil-check",
  "cibil": "free-cibil-check",

  "slide-3": "home-loan",
  "affordable-home-loans": "home-loan",

  "slide-4": "business-loan",
  "fast-business-loans": "business-loan",

  "slide-5": "gold-loan",
  "instant-gold-loans": "gold-loan",

  // Variations in product naming from Google Sheets
  "car-loan-new-used": "car-loan",
  "car-loan-new-and-used": "car-loan",
  "commercial-vehicle": "commercial-vehicle-loan",
  "fixed-deposit-fd": "fixed-deposit",
  "credit-card": "credit-cards",
};

// Default fallback links for all products and tools
export const DEFAULT_PRODUCT_LINKS = {
  // Loan Products (Used by Cards, Navbar Dropdown, and Hero Slides)
  "personal-loan": "/contact?service=personal-loan",
  "instant-loan": "/contact?service=instant-loan",
  "business-loan": "/contact?service=business-loan",
  "home-loan": "/contact?service=home-loan",
  "loan-against-property": "/contact?service=loan-against-property",
  "car-loan": "/contact?service=car-loan",
  "gold-loan": "/contact?service=gold-loan",
  "education-loan": "/contact?service=education-loan",
  "commercial-vehicle-loan": "/contact?service=commercial-vehicle-loan",
  "credit-cards": "/contact?service=credit-cards",

  // CIBIL & Financial Tools (Used by Cards and Tools Dropdown)
  "free-cibil-check": "/contact?service=free-cibil-check",
  "cibil-consultation": "tel:+917239037839",
  "fixed-deposit": "/contact?service=fixed-deposit",
  "credit-score-builder": "/contact?service=credit-score-builder",
  "emi-calculator": "/emi-calculator",

  // Main Action CTAs
  "explore-all-loans": "#loans",
  "calculate-monthly-emi": "/emi-calculator",
};

/**
 * Builds the Google Sheets CSV export URL from the Sheet ID
 */
export function getGoogleSheetCsvUrl(sheetId = GOOGLE_SHEET_CONFIG.sheetId) {
  if (!sheetId) return null;
  return `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(
    GOOGLE_SHEET_CONFIG.sheetName
  )}`;
}
