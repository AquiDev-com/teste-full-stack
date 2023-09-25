import { z } from "zod";

import { loginSchema } from "../schemas/login.schema";
import { IUser, IUserRegister } from "./userContext.interface";

export interface ILoginContext {
  user: IUser | Token | undefined;
  login: (data: IUserRegister) => Promise<void>;
}
export interface Token {
  token: string;
}
export type TLogin = z.infer<typeof loginSchema>;
