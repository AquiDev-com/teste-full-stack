import { NextFunction, Request, Response } from "express";
import { TUserRequest } from "../interfaces/user.types";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entitie";
import { AppError } from "../errors/appError";

const ensureUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const data: TUserRequest = req.body;

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: { email: data.email },
  });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  res.locals.user = user;

  return next();
};

export { ensureUser };
