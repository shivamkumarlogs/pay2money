import { NextResponse } from "next/server";
import { getLiveProductLinks } from "../../lib/serverLinks.js";

export const revalidate = 15; // 15-second cache for fast updates

export async function GET() {
  const links = await getLiveProductLinks();
  return NextResponse.json({
    success: true,
    source: "google-sheets",
    count: Object.keys(links).length,
    links,
    updatedAt: new Date().toISOString(),
  });
}
