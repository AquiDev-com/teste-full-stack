import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

export const ensureIsAuthenticatedMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authenticatedUser = response.locals.user;
  const userDataId = request.params.userId;

  if (authenticatedUser !== userDataId) {
    throw new AppError("Insufficient permission!", 403);
  }

  return next();
};
