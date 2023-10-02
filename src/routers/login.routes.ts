import { Router } from "express";
import { createLoginController } from "../controllers/login.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { createLoginSchema } from "../schemas/login.schema";

export const loginRoutes: Router = Router()

loginRoutes.post("", ensureDataIsValidMiddleware(createLoginSchema), createLoginController)