import { chromium, devices } from "playwright";
import { PAGE_URL } from "./config";
import { sendSMS } from "./sms";

async function main() {
  const browser = await chromium.launch();
  const context = await browser.newContext(devices["Desktop Chrome"]);
  const page = await context.newPage();

  await page.goto(PAGE_URL!);

  let flag = false;
  for (const id of [6, 7, 8]) {
    const button = await page.$(`[data-selenium-id="applyButton_${id}"]`);
    if (button) {
      flag = true;
      break;
    }
  }

  if (flag) {
    const messages = await sendSMS();
    console.info("sent text: ", messages[0].sid);
    console.info("sent whatsapp text: ", messages[1].sid);
    process.exit(0);
  } else {
    console.info("not available at ", new Date().toISOString());
  }
  
  await context.close();
  await browser.close();
}

main().catch(console.error);

setInterval(() => {
  main().catch(console.error);
}, 5000);