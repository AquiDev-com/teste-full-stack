import { z } from "zod";

const userSchema = z.object({
  id: z.string(),
  email: z.string(),
  password: z.string(),
});

const userResponseSchema = userSchema.omit({ password: true });
const userRequestSchema = userSchema.omit({ id: true });
const updateUserSchema = userRequestSchema.partial();

export { userResponseSchema, userRequestSchema, userSchema, updateUserSchema };
