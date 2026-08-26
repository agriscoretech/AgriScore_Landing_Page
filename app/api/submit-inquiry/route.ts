import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // The Google Apps Script deployed as a web app URL.
    // E.g., https://script.google.com/macros/s/AKfycb.../exec
    const googleAppScriptUrl = process.env.INQUIRY_WEBHOOK_URL;

    if (!googleAppScriptUrl) {
      console.warn("INQUIRY_WEBHOOK_URL is not set.");
      // We return OK here just so the UI doesn't crash during development if you haven't set up the webhook yet.
      // In production, you might want to return a 500 error instead.
      return NextResponse.json(
        { message: "Webhook URL not configured, but received data successfully." },
        { status: 200 }
      );
    }

    const response = await fetch(googleAppScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Using no-cors handles the typical CORS restrictions enforced by Google Apps Script
      mode: "no-cors",
      body: JSON.stringify(body),
    });

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("Error submitting inquiry to Google Sheets:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}