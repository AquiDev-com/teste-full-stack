import { z } from "zod";

export const createLoginSchema = z.object({
  email: z.string().email().max(256),
  password: z.string().max(120),
});
