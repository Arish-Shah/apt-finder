import twilio from "twilio";
import {
    TEXT_FROM,
  TEXT_TO,
  TWILIO_AUTH_SID,
  TWILIO_AUTH_TOKEN,
  WHATSAPP_FROM,
} from "./config";

const client = twilio(TWILIO_AUTH_SID, TWILIO_AUTH_TOKEN);

export async function sendText() {
  const textPromise = client.messages.create({
    body: "found apartment",
    from: TEXT_FROM,
    to: TEXT_TO!,
  });

  const whatsappPromise = client.messages.create({
    body: "found apartment",
    from: `whatsapp:${WHATSAPP_FROM}`,
    to: `whatsapp:${TEXT_TO}`,
  });

  return await Promise.all([textPromise, whatsappPromise]);
}
