import * as dotenv from "dotenv";

dotenv.config();

export const {
  PAGE_URL,
  TWILIO_AUTH_SID,
  TWILIO_AUTH_TOKEN,
  TEXT_FROM,
  TEXT_TO,
  WHATSAPP_FROM,
} = process.env;
