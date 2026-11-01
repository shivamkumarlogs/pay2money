import { NextResponse } from "next/server";
import { getLiveProductLinks } from "../../lib/serverLinks.js";
import { normalizeKey, KEY_ALIASES } from "../../data/productLinks.js";

// Force dynamic evaluation so every click looks up the latest live destination
export const dynamic = "force-dynamic";

function redirectWithNoIndex(target, requestUrl) {
  const dest = target.startsWith("/") ? new URL(target, requestUrl) : target;
  const res = NextResponse.redirect(dest, 307);
  res.headers.set("X-Robots-Tag", "noindex, nofollow");
  return res;
}

export async function GET(request, { params }) {
  const resolvedParams = await params;
  const productId = resolvedParams?.productId || "";

  const rawKey = normalizeKey(productId);
  const aliasKey = KEY_ALIASES[rawKey] || rawKey;

  const links = await getLiveProductLinks();
  const rawUrl = links[rawKey] || links[aliasKey];

  if (rawUrl && typeof rawUrl === "string" && rawUrl.trim() !== "" && rawUrl.trim() !== "#") {
    const trimmed = rawUrl.trim();

    // If external URL (partner bank or affiliate), redirect directly
    if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
      return redirectWithNoIndex(trimmed, request.url);
    }

    // If telephone or email link
    if (trimmed.startsWith("tel:") || trimmed.startsWith("mailto:")) {
      return redirectWithNoIndex(trimmed, request.url);
    }

    // If internal route (e.g. /contact or /emi-calculator)
    if (trimmed.startsWith("/")) {
      return redirectWithNoIndex(trimmed, request.url);
    }
  }

  // Fallback: Redirect to Contact inquiry page with service pre-selected
  const fallbackUrl = `/contact?service=${encodeURIComponent(rawKey || productId)}`;
  return redirectWithNoIndex(fallbackUrl, request.url);
}
