import { Router } from "express";
import { Resend } from "resend";

const router = Router();

const VALID_PARTNER_TYPES = [
  "hospital",
  "dialysis",
  "senior",
  "city",
  "employer",
  "university",
  "other",
] as const;

const PARTNER_TYPE_LABELS: Record<string, string> = {
  hospital: "Hospital / Medical Center",
  dialysis: "Dialysis / Oncology Center",
  senior: "Senior / Disability Agency",
  city: "City / County Government",
  employer: "Employer / Workforce",
  university: "University / Education",
  other: "Other",
};

router.post("/partner", async (req, res) => {
  const { orgName, contactName, email, partnerType, message } = req.body ?? {};

  if (
    typeof orgName !== "string" || orgName.trim().length < 2 ||
    typeof contactName !== "string" || contactName.trim().length < 2 ||
    typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof partnerType !== "string" || !(VALID_PARTNER_TYPES as readonly string[]).includes(partnerType) ||
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
  const typeLabel = PARTNER_TYPE_LABELS[partnerType] ?? partnerType;

  try {
    await resend.emails.send({
      from: "VyDrive Partnerships <onboarding@resend.dev>",
      to: ["narayan.rabindranath@gmail.com"],
      replyTo: email.trim(),
      subject: `[VyDrive PARTNER] ${typeLabel} — ${orgName.trim()}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#0d7d74;">New VyDrive Partnership Inquiry</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;font-weight:bold;color:#555;width:140px;">Organization:</td><td style="padding:8px 0;">${orgName.trim()}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;color:#555;">Contact Name:</td><td style="padding:8px 0;">${contactName.trim()}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;color:#555;">Work Email:</td><td style="padding:8px 0;"><a href="mailto:${email.trim()}">${email.trim()}</a></td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;color:#555;">Partner Type:</td><td style="padding:8px 0;">${typeLabel}</td></tr>
          </table>
          <hr style="border:1px solid #eee;margin:16px 0;"/>
          <h3 style="color:#555;">Opportunity Details:</h3>
          <p style="line-height:1.6;color:#333;">${message.trim().replace(/\n/g, "<br/>")}</p>
          <hr style="border:1px solid #eee;margin:16px 0;"/>
          <p style="font-size:12px;color:#999;">Sent via vydrive.com partner form</p>
        </div>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    req.log.error({ err }, "Failed to send partner email via Resend");
    res.status(500).json({ error: "Failed to send inquiry. Please try again." });
  }
});

export default router;
