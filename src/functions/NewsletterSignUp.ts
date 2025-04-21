import { z } from "zod";
import client from "./SupabaseClient";

export const emailSchema = z.string().email().min(5).max(255);

export default async function newsletter(
  action: "subscribe" | "unsubscribe",
  email: string
): Promise<boolean> {
  const { data, error } = await client.functions.invoke("newsletter", {
    body: {
      action,
      email,
    },
    method: "POST",
  });
  if (error == null) {
    if (data != null) return data;
    else return false;
  } else throw new Error("API unavailable right now");
}
