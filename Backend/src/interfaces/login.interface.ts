import { z } from "zod";
import { createLoginSchema } from "../schemas/login.schema";

export type ILogin = z.infer<typeof createLoginSchema>;
