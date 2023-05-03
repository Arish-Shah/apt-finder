import { PAGE_URL } from "./config";

export async function request() {
  const response = await fetch(PAGE_URL!);
  return response.text();
}
