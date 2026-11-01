/**
 * Product Catalog & Affiliate Links Registry
 * 
 * Simple, direct mapping for the 14 products managed in Google Sheets.
 */

// 1. The 14 Products Managed in Google Sheets
export const PRODUCTS = Object.freeze([
  "personal-loan",
  "instant-loan",
  "business-loan",
  "home-loan",
  "loan-against-property",
  "car-loan",
  "commercial-vehicle-loan",
  "education-loan",
  "gold-loan",
  "credit-cards",
  "free-cibil-check",
  "cibil-consultation",
  "fixed-deposit",
  "credit-score-builder",
]);

// 2. Simple Slide & Name Mappings
export const KEY_ALIASES = Object.freeze({
  "slide-1": "instant-loan",
  "slide-2": "free-cibil-check",
  "slide-3": "home-loan",
  "slide-4": "business-loan",
  "slide-5": "gold-loan",
  "free-cibil-score-check": "free-cibil-check",
  "credit-card": "credit-cards",
});

// 3. String Normalizer (e.g. "Personal Loan" -> "personal-loan")
export function normalizeKey(str) {
  if (!str) return "";
  return String(str)
    .trim()
    .toLowerCase()
    .replace(/[_\s]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-");
}

// 4. Default Fallback URLs
export const DEFAULT_PRODUCT_LINKS = Object.freeze({
  ...PRODUCTS.reduce((acc, key) => {
    acc[key] = `/contact?service=${key}`;
    return acc;
  }, {}),
  "cibil-consultation": "tel:+917239037839",
  "emi-calculator": "/emi-calculator",
  "explore-all-loans": "#loans",
  "calculate-monthly-emi": "/emi-calculator",
});

// 5. Google Sheet Config
export const GOOGLE_SHEET_CONFIG = Object.freeze({
  sheetId: process.env.GOOGLE_SHEET_ID || process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID || "",
  sheetName: "Sheet1",
  revalidateSeconds: 15,
});

export function getGoogleSheetCsvUrl(sheetId = GOOGLE_SHEET_CONFIG.sheetId) {
  if (!sheetId) return null;
  return `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(
    GOOGLE_SHEET_CONFIG.sheetName
  )}`;
}
