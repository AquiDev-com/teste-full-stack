import { z } from "zod";
import { UserGender } from "../entities/users.entity";

export const userSchema = z.object({
  name: z.string().min(3).max(127),
  email: z.string().email().max(256),
  password: z.string().max(120),
  phone: z.string().max(45),
  birthday: z.string(),
  image: z.string().optional().nullable(),
  gender: z.nativeEnum(UserGender),
});

export const returnUserSchema = userSchema
  .extend({
    id: z.number(),
  })
  .omit({ password: true });

export const returnAllUserSchema = returnUserSchema.array();

export const updateUserSchema = userSchema.partial();
