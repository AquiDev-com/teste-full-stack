import { z } from "zod";
import {
  updateUserSchema,
  userRequestSchema,
  userResponseSchema,
  userSchema,
} from "../schemas/user.schema";

type TUser = z.infer<typeof userSchema>;
type TUserResponse = z.infer<typeof userResponseSchema>;
type TUserRequest = z.infer<typeof userRequestSchema>;
type TUserUpdate = z.infer<typeof updateUserSchema>;

export { TUser, TUserRequest, TUserResponse, TUserUpdate };
