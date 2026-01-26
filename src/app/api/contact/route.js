import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        const { firstname, lastname, email, message } = await req.json();

        // Basic validation (frontend ≠ backend trust)
        if (!firstname || !email || !message) {
            return NextResponse.json(
                { message: "Missing fields" },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER,
            subject: "New Portfolio Contact",
            html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${firstname} ${lastname ?? ""}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Email error:", error);

        return NextResponse.json(
            { message: "Email failed" },
            { status: 500 }
        );
    }
}
