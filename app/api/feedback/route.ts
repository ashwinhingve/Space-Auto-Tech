import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, contactNumber, address, systemSize, batteryType, panelType } = await req.json();

    if (!fullName || !email || !contactNumber) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const addressStr = address
      ? `${address.street || ""}, ${address.city || ""}, ${address.state || ""} ${address.postalCode || ""}`.trim()
      : "Not provided";

    const { error } = await resend.emails.send({
      from: "Space Auto Tech <onboarding@resend.dev>",
      to: [...new Set([process.env.RESEND_TO_EMAIL, "spaceautomation29@gmail.com"].filter(Boolean))] as string[],
      replyTo: email,
      subject: `Solar Requirement: ${fullName} — ${systemSize || "Unknown"} KW`,
      html: `
        <h2>New Solar System Requirement</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact Number:</strong> ${contactNumber}</p>
        <p><strong>Address:</strong> ${addressStr}</p>
        <p><strong>System Size:</strong> ${systemSize || "Not specified"} KW</p>
        <p><strong>Battery Type:</strong> ${batteryType || "Not specified"}</p>
        <p><strong>Panel Type(s):</strong> ${Array.isArray(panelType) ? panelType.join(", ") : panelType || "Not specified"}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Feedback API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
