import { NextFunction, Request, Response } from "express";
import { TUserRequest } from "../interfaces/user.types";
import * as bcryptjs from "bcryptjs";
import { AppError } from "../errors/appError";

const validatedPasswordMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userData: TUserRequest = req.body;
  const user = res.locals.user;

  const validated: boolean = await bcryptjs.compare(
    userData.password,
    user.password
  );

  if (!validated) {
    throw new AppError("Invalid credentials", 401);
  }

  return next();
};

export { validatedPasswordMiddleware };
