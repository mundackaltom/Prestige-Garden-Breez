import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT } from "../../site-config";

export async function POST(request: Request) {
  const { name, phone, email, message } = await request.json();

  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Enquiry service is not configured." }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const fromAddress = process.env.RESEND_FROM_EMAIL || "Prestige Garden Breez <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from: fromAddress,
    to: CONTACT.email,
    replyTo: email || undefined,
    subject: `New enquiry from ${name} — Prestige Garden Breez`,
    text: [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email || "—"}`,
      "",
      "Message:",
      message || "—",
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error", error);
    return NextResponse.json({ error: "Failed to send enquiry." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
