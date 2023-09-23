import { z } from "zod";

export interface IUser {
  id: string;
  email: string;
}

export interface IUserContext {
  createUser: (data: IUserRegister) => Promise<void>;
}

export const userRegisterSchema = z.object({
  email: z.string(),
  password: z.string(),
});
export type IUserRegister = z.infer<typeof userRegisterSchema>;
