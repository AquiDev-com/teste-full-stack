import { z } from "zod";
import { returnAllUserSchema, returnUserSchema, userCreateSchema } from "../schemas/users.schema";
import { DeepPartial, Repository } from "typeorm";
import { User } from "../entities";

export type IUser = z.infer<typeof userCreateSchema>
export type IUserReturn = z.infer<typeof returnUserSchema>
export type IUserAllReturn = z.infer<typeof returnAllUserSchema>
export type IUserRepo = Repository<User>;
export type IUserUpdate = DeepPartial<IUser>
