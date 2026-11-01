import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, subject, message, hp_field } = body;

    // 1. Anti-Spam Honeypot Verification (Silently drop bot submissions)
    if (hp_field) {
      console.warn("[SPAM BOT BLOCKED]: Honeypot field filled.");
      return NextResponse.json({
        success: true,
        message: "Your inquiry has been received.",
      });
    }

    // 2. Strict Input Validation
    const cleanName = String(name || "").trim();
    if (!cleanName || cleanName.length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter your full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    // Mobile number: exactly 10 digits, starting with 6, 7, 8, or 9
    const cleanPhone = String(phone || "").replace(/\D/g, "").slice(-10);
    const indianMobileRegex = /^[6-9]\d{9}$/;
    if (!cleanPhone || !indianMobileRegex.test(cleanPhone)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9." },
        { status: 400 }
      );
    }

    // Email is OPTIONAL. But if provided, validate format.
    const cleanEmail = String(email || "").trim();
    if (cleanEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address, or leave it blank." },
        { status: 400 }
      );
    }

    const cleanMessage = String(message || "").trim();
    if (!cleanMessage || cleanMessage.length < 3) {
      return NextResponse.json(
        { success: false, error: "Please describe your loan requirement or inquiry." },
        { status: 400 }
      );
    }

    // 3. Indian Standard Time (IST) Timestamp
    const now = new Date();
    const formattedDate = new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    }).format(now);

    const leadData = {
      timestamp: formattedDate,
      name: cleanName,
      phone: "+91 " + cleanPhone,
      email: cleanEmail || "Not provided",
      subject: String(subject || "General Inquiry").trim(),
      message: cleanMessage,
    };

    // 4. Google Sheets Webhook Dispatch
    const sheetWebhookUrl = process.env.GOOGLE_SHEET_LEADS_URL ? process.env.GOOGLE_SHEET_LEADS_URL.trim() : null;

    if (sheetWebhookUrl) {
      try {
        const sheetResponse = await fetch(sheetWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadData),
        });

        if (!sheetResponse.ok) {
          console.error("Google Sheet webhook returned status:", sheetResponse.status);
        }
      } catch (err) {
        console.error("Failed to forward lead to Google Sheets:", err.message);
      }
    } else {
      console.log("[PAY2MONEY LEAD CAPTURED - LOCAL DEV MODE]:", leadData);
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been received. Our team will contact you shortly.",
      timestamp: formattedDate,
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
