import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const data = await request.json();
  const { name, email, message } = data;
  if (!email || !process.env.ADMIN_EMAIL) {
    return NextResponse.json({ success: false, error: 'Email или ADMIN_EMAIL не указаны' }, { status: 400 });
  }

  // Настройка транспорта
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // Письмо пользователю (французский)
  const userMail = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: 'Confirmation de votre demande',
    html: `<p>Bonjour ${name},</p><p>Votre demande a été reçue. Nous vous contacterons bientôt.</p><p>Cordialement,<br>L'équipe</p>`
  };

  // Письмо админу
  const adminMail = {
    from: process.env.GMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: 'Nouvelle demande reçue',
    html: `<p>Nouvelle demande de ${name} (${email}):</p><p>${message}</p>`
  };

  try {
    await transporter.sendMail(userMail);
    await transporter.sendMail(adminMail);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
