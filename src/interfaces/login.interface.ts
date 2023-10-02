import { z } from "zod";
import { createLoginSchema } from "../schemas/login.schema";
import { User } from "../entities";

export type ILogin = z.infer<typeof createLoginSchema>

export interface LoginResponse {
    token: string;
    user: User | {};
  }