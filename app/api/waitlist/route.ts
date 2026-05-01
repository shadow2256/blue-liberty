import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let email: string;
  try {
    ({ email } = await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const webhookUrl = process.env.GHL_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("[waitlist] GHL_WEBHOOK_URL not configured");
    return NextResponse.json({ error: "Service unavailable" }, { status: 503 });
  }

  const ghlRes = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      source: "Blue Liberty Waitlist",
      tags: ["waitlist", "blue-liberty"],
    }),
  });

  if (!ghlRes.ok) {
    console.error("[waitlist] GHL webhook failed", ghlRes.status);
    return NextResponse.json({ error: "Submission failed" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
