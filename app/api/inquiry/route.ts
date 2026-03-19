import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, companyName, email, phoneNumber, comment } = await req.json();

    if (!name || !email || !comment) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Space Auto Tech <onboarding@resend.dev>",
      to: [...new Set([process.env.RESEND_TO_EMAIL, "spaceautomation29@gmail.com"].filter(Boolean))] as string[],
      replyTo: email,
      subject: `Inquiry from ${name}${companyName ? ` — ${companyName}` : ""}`,
      html: `
        <h2>New Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${companyName || "Not provided"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber || "Not provided"}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${comment.replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Inquiry API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
