import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

export const ensureIsAuthenticatedMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authenticatedUser = request.user.id;
  const userDataId = parseInt(request.params.userId);

  if (parseInt(authenticatedUser) !== userDataId) {
    throw new AppError("Insufficient permission!", 403);
  }

  return next();
};
