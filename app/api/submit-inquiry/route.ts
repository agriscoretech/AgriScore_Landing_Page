import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const googleAppScriptUrl = process.env.INQUIRY_WEBHOOK_URL;

    if (!googleAppScriptUrl) {
      console.warn("INQUIRY_WEBHOOK_URL is not configured in .env.local.");
      return NextResponse.json(
        { message: "Webhook URL not configured, but received data in development mode." },
        { status: 200 }
      );
    }

    // Sanitize and ensure fields are safe strings
    const payload = {
      ...body,
      whatsapp: body.whatsapp ? `'${body.whatsapp}` : "",
      pincode: body.pincode ? `'${body.pincode}` : "",
    };

    const response = await fetch(googleAppScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Google Apps Script response error:", response.status, errorText);
      return NextResponse.json(
        { message: "Failed to submit inquiry to Google Sheets" },
        { status: 500 }
      );
    }

    const result = await response.json().catch(() => ({ status: "success" }));

    return NextResponse.json({ message: "Success", result }, { status: 200 });
  } catch (error: any) {
    console.error("Error submitting inquiry to Google Sheets:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}