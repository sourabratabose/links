import { z } from "zod";

export const messageSchema = z.object({
  name: z.string().min(5).max(100),
  email: z.string().email().min(5).max(100),
  companyName: z.string().min(5).max(100).optional(),
  message: z.string().min(5).max(300),
});

export default async function messageSend(
  msgObj: any
): Promise<boolean> {
  const { data, error } = messageSchema.safeParse(msgObj);
  if (error != undefined || data == undefined)
    throw new Error("Bad message object! Request not sent");
  const response = await fetch("", {
    body: JSON.stringify(data),
    method: "POST"
  });
  if (response.ok) return JSON.parse(await response.text()).body;
  else throw new Error("API unavailable right now!");
}
