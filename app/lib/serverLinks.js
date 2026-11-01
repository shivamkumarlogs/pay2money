import dns from "node:dns";
import {
  DEFAULT_PRODUCT_LINKS,
  GOOGLE_SHEET_CONFIG,
  KEY_ALIASES,
  getGoogleSheetCsvUrl,
  normalizeKey,
} from "../data/productLinks.js";

// Prioritize IPv4 on Node.js to eliminate Windows IPv6 connect timeouts
if (typeof dns?.setDefaultResultOrder === "function") {
  try {
    dns.setDefaultResultOrder("ipv4first");
  } catch {
    // Ignore in non-Node runtimes
  }
}

/**
 * Robust CSV Line Parser
 * Handles escaped quotes, commas inside quotes, and clean trimming
 */
export function parseCsv(csvText) {
  const result = {};
  if (!csvText || typeof csvText !== "string") return result;

  const lines = csvText.split(/\r?\n/);
  for (const line of lines) {
    if (!line.trim()) continue;

    const matches = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
    if (!matches || matches.length < 2) continue;

    const rawKey = matches[0].replace(/^"|"$/g, "").trim();
    const rawUrl = matches[1].replace(/^"|"$/g, "").trim();

    // Skip header row if present
    if (
      rawKey.toLowerCase() === "product" ||
      rawKey.toLowerCase() === "name" ||
      rawKey.toLowerCase() === "id"
    ) {
      continue;
    }

    let key = normalizeKey(rawKey);
    if (KEY_ALIASES[key]) {
      key = KEY_ALIASES[key];
    }

    if (key && rawUrl) {
      result[key] = rawUrl;
    }
  }

  return result;
}

/**
 * Fetch and merge live links from Google Sheets with fallback defaults
 */
export async function getLiveProductLinks() {
  const sheetId =
    process.env.GOOGLE_SHEET_ID ||
    process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID ||
    GOOGLE_SHEET_CONFIG.sheetId;

  if (!sheetId) {
    return DEFAULT_PRODUCT_LINKS;
  }

  const csvUrl = getGoogleSheetCsvUrl(sheetId);

  try {
    const response = await fetch(csvUrl, {
      next: { revalidate: 15 }, // Fast 15-second revalidation
      signal: AbortSignal.timeout(6000),
      headers: {
        Accept: "text/csv, text/plain",
      },
    });

    if (!response.ok) {
      throw new Error(`Google Sheets responded with status ${response.status}`);
    }

    const csvText = await response.text();
    const sheetLinks = parseCsv(csvText);

    return {
      ...DEFAULT_PRODUCT_LINKS,
      ...sheetLinks,
    };
  } catch (err) {
    console.error("Failed to fetch live Google Sheet links, using defaults:", err.message);
    return DEFAULT_PRODUCT_LINKS;
  }
}
