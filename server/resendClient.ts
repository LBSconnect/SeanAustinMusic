import { Resend } from "resend";

let cachedClient: Resend | null = null;

function getClient(): Resend {
  if (!cachedClient) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) throw new Error("RESEND_API_KEY environment variable is required");
    cachedClient = new Resend(apiKey);
  }
  return cachedClient;
}

export function getResendClient(): Resend {
  return getClient();
}

export function getResendFromAddress(): string {
  return process.env.RESEND_FROM_EMAIL || "Sean Austin Music <onboarding@resend.dev>";
}
