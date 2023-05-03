import * as cheerio from "cheerio";
import { INTERVAL_MS } from "./config";
import { request } from "./request";
import { sendText } from "./text";

async function main() {
  const html = await request();
  const $ = cheerio.load(html);
  const count = $([6, 7, 8]
    .map(i => `[data-selenium-id='applyButton_${i}']`)
    .join(", ")).length;

  if (count > 0) {
    const messages = await sendText();
    console.info("sent text: ", messages[0].sid);
    console.info("sent whatsapp text: ", messages[1].sid);
    process.exit(0);
  } else {
    console.info("not found at ", new Date().toISOString());
  }
}

main().catch(console.error);

setInterval(() => {
  main().catch(console.error);
}, parseInt(INTERVAL_MS!));
