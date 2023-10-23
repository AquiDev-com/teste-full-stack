import { Router } from "express";
import { createLoginSchema } from "../schemas/login.schema";
import { createLoginController } from "../controllers/login.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";

export const loginRoutes = Router();

loginRoutes.post(
  "",
  ensureDataIsValidMiddleware(createLoginSchema),
  createLoginController
);
