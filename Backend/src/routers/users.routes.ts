import { Router } from "express";
import { ensureUniqueEmailMiddleware } from "../middlewares/ensureUniqueEmail.middleware";
import { ensureUniqueCPFMiddleware } from "../middlewares/ensureUniqueCPF.middleware";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { userSchema } from "../schemas/users.schema";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import {
  createUserController,
  listUsersController,
  retrieveUsersController,
} from "../controllers/users.controllers";

export const usersRoutes = Router();

usersRoutes.post(
  "",
  ensureUniqueEmailMiddleware,
  ensureUniqueCPFMiddleware,
  ensureDataIsValidMiddleware(userSchema),
  createUserController
);

usersRoutes.use(ensureTokenIsValidMiddleware);

usersRoutes.get("", listUsersController);

usersRoutes.get("/:userId", retrieveUsersController);
