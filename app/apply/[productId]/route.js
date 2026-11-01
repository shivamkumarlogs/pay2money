import { NextResponse } from "next/server";
import { getLiveProductLinks } from "../../lib/serverLinks.js";
import { normalizeKey, KEY_ALIASES } from "../../data/productLinks.js";

// Force dynamic evaluation so every click looks up the latest live destination
export const dynamic = "force-dynamic";

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
      return NextResponse.redirect(trimmed, 307);
    }

    // If telephone or email link
    if (trimmed.startsWith("tel:") || trimmed.startsWith("mailto:")) {
      return NextResponse.redirect(trimmed, 307);
    }

    // If internal route (e.g. /contact or /emi-calculator)
    if (trimmed.startsWith("/")) {
      return NextResponse.redirect(new URL(trimmed, request.url), 307);
    }
  }

  // Fallback: Redirect to Contact inquiry page with service pre-selected
  const fallbackUrl = new URL(
    `/contact?service=${encodeURIComponent(rawKey || productId)}`,
    request.url
  );
  return NextResponse.redirect(fallbackUrl, 307);
}
