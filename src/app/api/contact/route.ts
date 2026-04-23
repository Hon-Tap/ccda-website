import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message, token } = body; // 'token' comes from the frontend ReCAPTCHA

    /* --- 1. VERIFY RECAPTCHA --- */
    if (!token) {
      return NextResponse.json({ success: false, message: "CAPTCHA token missing" }, { status: 400 });
    }

    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`;
    
    const recaptchaRes = await fetch(verifyUrl, { method: "POST" });
    const recaptchaJson = await recaptchaRes.json();

    if (!recaptchaJson.success) {
      return NextResponse.json({ success: false, message: "CAPTCHA verification failed" }, { status: 400 });
    }

    /* --- 2. BASIC VALIDATION --- */
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error("Email credentials not defined in environment");
    }

    /* --- 3. SMTP TRANSPORT --- */
    const transporter = nodemailer.createTransport({
      host: "mail.spacemail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    /* --- 4. SEND EMAIL --- */
    await transporter.sendMail({
      from: `"CCDA Website" <${process.env.EMAIL_USER}>`,
      to: ["info@ccda-ss.org", "john.gatmai@ccda-ss.org"],
      subject: `New Contact: ${subject || "Website Message"}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #1e8b35;">New Inquiry from ${name}</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || "General"}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });

  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}