import { z } from "zod";

export const emailSchema = z.string().email().min(5).max(100);

export default async function newsletterSignUp(
  action: "subscribe" | "unsubscribe",
  email: any
): Promise<boolean> {
  const { data, error } = emailSchema.safeParse(email.email);
  if (data == undefined || error != undefined)
    throw new Error(`Invalid email entered! Reason : ${error}`);
  const response = await fetch("", {
    body: JSON.stringify({
      action,
      email: data,
    }),
    method: "POST"
  });
  if (response.ok) return JSON.parse(await response.text()).body;
  else throw new Error("API unavailable right now");
}
