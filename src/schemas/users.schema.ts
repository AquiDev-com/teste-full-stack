import { z } from "zod";

export const userCreateSchema = z.object({

    name: z.string().max(45),

    email: z.string().email().max(45),

    password: z.string().max(120),

    phone: z.string().max(45),
})

export const returnUserSchema = userCreateSchema.extend({
    id: z.number(),

    dateRegister: z.date().optional(),
    
}).omit({password: true})

export const returnAllUserSchema = returnUserSchema.array();

export const updateUserSchema = userCreateSchema.partial();