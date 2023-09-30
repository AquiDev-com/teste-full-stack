import { Request, Response, NextFunction } from "express";
import { IUserRepo } from "../interfaces/users.interface";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";

export const ensureUserExistsMiddleware = async (
  request: Request,
  _: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository: IUserRepo = AppDataSource.getRepository(User);

  const userFind = await userRepository.findOne({
    where: {
      id: parseInt(request.params.id) || parseInt(request.user.id),
    },
  });

  if (!userFind) {
    throw new AppError("User not found!", 404);
  }
  return next();
};
