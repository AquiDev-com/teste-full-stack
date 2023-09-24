import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const handleErrors = (
  err: any,
  request: Request,
  response: Response,
  _: NextFunction
) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }
  if (err instanceof ZodError) {
    return response.status(400).json({ message: err.flatten().fieldErrors });
  }
  console.log(err);

  return response.status(500).json({
    message: "Internal server error",
  });
};
