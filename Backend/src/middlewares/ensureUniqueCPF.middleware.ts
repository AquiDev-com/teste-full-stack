import { Request, Response, NextFunction } from "express";
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";
import { IUserRepo } from "../interfaces/users.interface";

export const ensureUniqueCPFMiddleware = async (
  request: Request,
  _: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userRepository: IUserRepo = AppDataSource.getRepository(User);

  const cpfFind = await userRepository.findOne({
    where: {
      cpf: request.body.cpf,
    },
  });

  if (!!cpfFind) {
    throw new AppError("Email already exists", 409);
  }
  return next();
};
