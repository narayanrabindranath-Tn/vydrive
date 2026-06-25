import { Router } from "express";
import { Resend } from "resend";

const router = Router();

const VALID_SUBJECTS = ["general", "partnership", "investor", "media"] as const;
const SUBJECT_LABELS: Record<string, string> = {
  general: "General Inquiry",
  partnership: "Partnership",
  investor: "Investor Relations",
  media: "Media / Press",
};

router.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body ?? {};

  if (
    typeof name !== "string" || name.trim().length < 2 ||
    typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof subject !== "string" || !(VALID_SUBJECTS as readonly string[]).includes(subject) ||
    typeof message !== "string" || message.trim().length < 10
  ) {
    res.status(400).json({ error: "Invalid form data. Please check all fields." });
    return;
  }

  const apiKey = process.env["RESEND_API_KEY"];
  if (!apiKey) {
    req.log.error("RESEND_API_KEY is not set");
    res.status(500).json({ error: "Email service is not configured." });
    return;
  }

  const resend = new Resend(apiKey);
  const subjectLabel = SUBJECT_LABELS[subject] ?? subject;

  try {
    await resend.emails.send({
      from: "VyDrive Contact <onboarding@resend.dev>",
      to: ["narayan.rabindranath@gmail.com"],
      replyTo: email.trim(),
      subject: `[VyDrive] ${subjectLabel} from ${name.trim()}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#0d7d74;">New VyDrive Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;font-weight:bold;color:#555;width:80px;">Name:</td><td style="padding:8px 0;">${name.trim()}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;color:#555;">Email:</td><td style="padding:8px 0;"><a href="mailto:${email.trim()}">${email.trim()}</a></td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;color:#555;">Subject:</td><td style="padding:8px 0;">${subjectLabel}</td></tr>
          </table>
          <hr style="border:1px solid #eee;margin:16px 0;"/>
          <h3 style="color:#555;">Message:</h3>
          <p style="line-height:1.6;color:#333;">${message.trim().replace(/\n/g, "<br/>")}</p>
          <hr style="border:1px solid #eee;margin:16px 0;"/>
          <p style="font-size:12px;color:#999;">Sent via vydrive.com contact form</p>
        </div>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    req.log.error({ err }, "Failed to send contact email via Resend");
    res.status(500).json({ error: "Failed to send message. Please try again." });
  }
});

export default router;
