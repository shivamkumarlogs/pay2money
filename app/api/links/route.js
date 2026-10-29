import { NextResponse } from "next/server";
import {
  DEFAULT_PRODUCT_LINKS,
  GOOGLE_SHEET_CONFIG,
  KEY_ALIASES,
  getGoogleSheetCsvUrl,
  normalizeKey,
} from "../../data/productLinks";

export const revalidate = 60; // Cache this route for 60 seconds

/**
 * Robust CSV Line Parser
 * Handles escaped quotes, commas inside quotes, and clean trimming
 */
function parseCsv(csvText) {
  const result = {};
  if (!csvText || typeof csvText !== "string") return result;

  const lines = csvText.split(/\r?\n/);
  for (const line of lines) {
    if (!line.trim()) continue;

    // Simple regex matching comma separated values that may be quoted
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

export async function GET() {
  const sheetId =
    process.env.GOOGLE_SHEET_ID ||
    process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID ||
    GOOGLE_SHEET_CONFIG.sheetId;

  // If no Google Sheet ID is configured yet, immediately return local defaults
  if (!sheetId) {
    return NextResponse.json({
      success: true,
      source: "default",
      links: DEFAULT_PRODUCT_LINKS,
    });
  }

  const csvUrl = getGoogleSheetCsvUrl(sheetId);

  try {
    const response = await fetch(csvUrl, {
      next: { revalidate: GOOGLE_SHEET_CONFIG.revalidateSeconds },
      headers: {
        Accept: "text/csv, text/plain",
      },
    });

    if (!response.ok) {
      throw new Error(`Google Sheets responded with status ${response.status}`);
    }

    const csvText = await response.text();
    const sheetLinks = parseCsv(csvText);

    // Merge: Sheet links override default fallback links
    const mergedLinks = {
      ...DEFAULT_PRODUCT_LINKS,
      ...sheetLinks,
    };

    return NextResponse.json({
      success: true,
      source: "google-sheets",
      count: Object.keys(mergedLinks).length,
      links: mergedLinks,
      updatedAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error("Failed to fetch Google Sheet links, using defaults:", err.message);

    // Bulletproof fallback: Never break the website if Google Sheets is unreachable
    return NextResponse.json({
      success: true,
      source: "fallback-default",
      error: err.message,
      links: DEFAULT_PRODUCT_LINKS,
    });
  }
}
