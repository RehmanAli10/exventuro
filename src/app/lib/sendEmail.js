import { Resend } from "resend";
import EmailTemplateUser from "../components/EmailTemplates/EmailTemplateUser";
import EmailTemplateAdmin from "../components/EmailTemplates/EmailTemplateAdmin";

const resend = new Resend("re_h5iCwrxA_NPuvJVZNGy7LZkEksqo6i4Q8");

export async function sendEmailToUser(userDetails) {
  const isBookingEmail =
    userDetails.packageName && userDetails.packageName !== "Adventure Package";

  try {
    const emailHtml = EmailTemplateUser({ userDetails });

    await resend.emails.send({
      from: "info@mail.exventuro.com",
      to: userDetails.email,
      subject: isBookingEmail
        ? `Booking Confirmation: ${userDetails.packageName}`
        : "Thank You for Contacting Exventuro",
      html: emailHtml,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}

export async function sendEmailToAdmin(userDetails) {
  const isBookingEmail =
    userDetails.packageName && userDetails.packageName !== "Adventure Package";

  try {
    const emailHtml = EmailTemplateAdmin({ userDetails });

    await resend.emails.send({
      from: "info@mail.exventuro.com",
      to: "info@exventuro.com",
      subject: isBookingEmail
        ? `📌 Booking Request from ${userDetails.name} — ${userDetails.packageName}`
        : `✉️ New Inquiry from ${userDetails.name}`,
      html: emailHtml,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}
