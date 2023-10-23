import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";

export const ensureDataIsValidMiddleware =
  (schema: ZodTypeAny) =>
  (request: Request, _: Response, next: NextFunction) => {
    const validatedData = schema.parse(request.body);

    request.body = validatedData;

    return next();
  };
