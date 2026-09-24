import type Stripe from "stripe";
import { getResendClient, getResendFromAddress } from "./resendClient";

const OWNER_EMAIL = "iamseanaustin@icloud.com";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendDubPlateOrderEmails(session: Stripe.Checkout.Session): Promise<void> {
  const metadata = session.metadata || {};
  const customerName = escapeHtml(metadata.name || "Customer");
  const customerEmail = metadata.email || session.customer_details?.email || "";
  const djName = escapeHtml(metadata.djName || "");
  const stationName = escapeHtml(metadata.stationName || "");
  const location = escapeHtml(metadata.location || "");
  const specialMessage = escapeHtml(metadata.specialMessage || "");
  const amount =
    typeof session.amount_total === "number" ? (session.amount_total / 100).toFixed(2) : "150.00";

  const resend = getResendClient();
  const from = getResendFromAddress();

  const detailsHtml = `
    <ul>
      <li><strong>DJ Name(s):</strong> ${djName}</li>
      <li><strong>Radio Station / Sound System:</strong> ${stationName}</li>
      <li><strong>Location:</strong> ${location}</li>
      <li><strong>Special Message:</strong> ${specialMessage || "&mdash;"}</li>
    </ul>
  `;

  const sends: Promise<unknown>[] = [
    resend.emails.send({
      from,
      to: OWNER_EMAIL,
      subject: `New Dub Plate/Audio Drop Order — $${amount} Paid`,
      html: `
        <p>New paid Dub Plate/Audio Drop request:</p>
        <ul>
          <li><strong>Name:</strong> ${customerName}</li>
          <li><strong>Email:</strong> ${escapeHtml(customerEmail) || "&mdash;"}</li>
        </ul>
        ${detailsHtml}
        <p><strong>Amount paid:</strong> $${amount}</p>
        <p><strong>Stripe session:</strong> ${session.id}</p>
      `,
    }),
  ];

  if (customerEmail) {
    sends.push(
      resend.emails.send({
        from,
        to: customerEmail,
        subject: "Payment Confirmed — Your Dub Plate/Audio Drop Request",
        html: `
          <p>Hi ${customerName},</p>
          <p>Thanks for your $${amount} payment! Your Dub Plate/Audio Drop request has been received:</p>
          ${detailsHtml}
          <p>Sean Austin will be in touch to deliver your custom recording.</p>
        `,
      })
    );
  }

  await Promise.all(sends);
}
