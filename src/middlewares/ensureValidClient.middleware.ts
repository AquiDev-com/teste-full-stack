import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities";

export const ensureValidUserMiddleware = async (request: Request, response: Response, next: NextFunction) => {

    const userId = request.user.id;
    const requestUserId = parseInt(request.params.id);
  
    if (parseInt(userId) !== requestUserId) {
      return response
        .status(401)
        .json({ message: "You don`t have permissions." });
    }
  
    const userRepository = AppDataSource.getRepository(User);
  
    const user = await userRepository.findOne({
      where: {
        id: parseInt(userId),
      },
    });
  
    if (!user) {
      return response.status(404).json({ message: "User not found." });
    }

    return next()
};
