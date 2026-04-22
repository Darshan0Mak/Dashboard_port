import { NextResponse } from "next/server";
import path from "path";
import ejs from "ejs";
import { transporter } from "@/lib/mailer/transporter";

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.email || !body.subject || !body.message || !body.name) {
      return NextResponse.json(
        { success: false, message: "Please fill out all the details." },
        { status: 400 },
      );
    }
    const templatePath = path.join(
      process.cwd(),
      "src",
      "lib",
      "email",
      "templates",
      `contact-form-email.ejs`,
    );

    const html = await ejs.renderFile(templatePath, {
      fullName: body.name,
      emailAddress: body.email.toLowerCase(),
      subject: body.subject,
      messageContent: body.message,
    });

    const mailOptions = {
      from: '"Darshan Makwana\'s Portfolio" <darshanmakwana0896@gmail.com>',
      to: process.env.CONTACT_FORM_RECIPIENT,
      subject: "Website Contact Form Submission | Darshan Makwana's Portfolio",
      html,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message:
        "Contact form submitted successfully! I'll get back to you soon.",
    });
  } catch (error) {
    console.log("Error sending contact form email:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "An error occurred while submitting the form. Please try again later.",
      },
      { status: 500 },
    );
  }
}
