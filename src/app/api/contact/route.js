import nodemailer from "nodemailer"

export async function POST(req) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    return Response.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}