import { Router } from "express";
import { ensureUniqueEmailMiddleware } from "../middlewares/ensureUniqueEmail.middleware";
import { ensureUniqueCPFMiddleware } from "../middlewares/ensureUniqueCPF.middleware";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { userSchema } from "../schemas/users.schema";
import {
  createUserController,
  listUsersController,
} from "../controllers/users.controllers";

export const usersRoutes = Router();

usersRoutes.post(
  "",
  ensureUniqueEmailMiddleware,
  ensureUniqueCPFMiddleware,
  ensureDataIsValidMiddleware(userSchema),
  createUserController
);

usersRoutes.get("", listUsersController);
