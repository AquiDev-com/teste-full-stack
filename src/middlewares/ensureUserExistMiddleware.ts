import { Request, Response, NextFunction } from "express";
import { IUserRepo } from "../interfaces/users.interfaces";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import { User } from "../entities";

export const ensureUserExistMiddleware = async (request: Request, response: Response, next: NextFunction
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