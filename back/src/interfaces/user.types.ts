import { z } from "zod";
import {
  userRequestSchema,
  userResponseSchema,
  userSchema,
} from "../schemas/user.schema";

type TUser = z.infer<typeof userSchema>;
type TUserResponse = z.infer<typeof userResponseSchema>;
type TUserRequest = z.infer<typeof userRequestSchema>;

export { TUser, TUserRequest, TUserResponse };
