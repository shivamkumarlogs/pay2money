import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, subject, message } = body;

    // 1. Basic Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter your full name." },
        { status: 400 }
      );
    }

    const cleanPhone = String(phone || "").replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    // 2. Format Indian Standard Time (IST) Timestamp
    const now = new Date();
    const formattedDate = new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    }).format(now);

    const leadData = {
      timestamp: formattedDate,
      name: name.trim(),
      phone: cleanPhone.slice(-10),
      email: (email || "").trim(),
      subject: (subject || "General Loan Inquiry").trim(),
      message: (message || "").trim(),
    };

    // 3. Google Sheets Webhook Dispatch
    const sheetWebhookUrl = process.env.GOOGLE_SHEET_LEADS_URL;

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
      // Clean local log when webhook URL is not yet configured in .env.local
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
