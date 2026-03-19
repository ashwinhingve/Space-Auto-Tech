import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const {
      companyName, contactPerson, email, phone, address,
      gstNumber, panNumber, businessType, productsServices,
      yearsInBusiness, website, message
    } = await req.json();

    if (!companyName || !email || !contactPerson) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Space Auto Tech <onboarding@resend.dev>",
      to: [...new Set([process.env.RESEND_TO_EMAIL, "spaceautomation29@gmail.com"].filter(Boolean))] as string[],
      replyTo: email,
      subject: `Vendor Registration: ${companyName} — ${contactPerson}`,
      html: `
        <h2>New Vendor Registration</h2>
        <h3>Company Details</h3>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Contact Person:</strong> ${contactPerson}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Address:</strong> ${address || "Not provided"}</p>
        <p><strong>GST Number:</strong> ${gstNumber || "Not provided"}</p>
        <p><strong>PAN Number:</strong> ${panNumber || "Not provided"}</p>
        <p><strong>Business Type:</strong> ${businessType || "Not specified"}</p>
        <p><strong>Years in Business:</strong> ${yearsInBusiness || "Not specified"}</p>
        <p><strong>Website:</strong> ${website || "Not provided"}</p>
        <hr />
        <p><strong>Products/Services:</strong></p>
        <p>${(productsServices || "").replace(/\n/g, "<br/>")}</p>
        <p><strong>Message:</strong></p>
        <p>${(message || "").replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Vendor API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
