import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "RescueSmart Kontakt <rescuesmart@anabellehofner.de>",
    to: "rescuesmart@anabellehofner.de",
    replyTo: email,
    subject: `Kontaktanfrage von ${name}`,
    text: `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
