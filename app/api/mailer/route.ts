import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import dotenv from "dotenv";
dotenv.config();


export async function POST(req: Request, res: NextApiResponse) {
    const { name, email, phone, subject, message } = await req.json();
    console.log("Received data:", { name, email, phone, subject, message });
    // Validate input
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: "dglifestyleeee@gmail.com",
            pass: "uvmf erba klqb xfku"
        }
    });
    const mailOptions = {
        from: 'dglifestyleeee@gmail.com',
        to: "dglifestyleeee@gmail.com",
        subject: `New message from ${name}`,
        html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
                <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; padding: 30px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
                    <h2 style="text-align: center; color: #333;">DG Lifestyle</h2>
                    <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                    <h3 style="color: #555;">New message from <span style="color: #000;">${name}</span></h3>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <p><strong>Message:</strong></p>
                    <div style="background-color: #f1f1f1; padding: 15px; border-radius: 5px; white-space: pre-line;">
                        ${message}
                    </div>
                    <p style="margin-top: 30px; font-size: 12px; color: #888;">This message was sent via the contact form on your website.</p>
                </div>
            </div>
        `,
        replyTo: email,
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    return new Response(JSON.stringify({ message: "Email sent" }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}