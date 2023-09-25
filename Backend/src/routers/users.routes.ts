import { Router } from "express";
import { ensureUniqueEmailMiddleware } from "../middlewares/ensureUniqueEmail.middleware";
import { ensureUniqueCPFMiddleware } from "../middlewares/ensureUniqueCPF.middleware";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { userSchema } from "../schemas/users.schema";
import {
  createUserController,
  listUsersController,
  retrieveUsersController,
} from "../controllers/users.controllers";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";

export const usersRoutes = Router();

usersRoutes.post(
  "",
  ensureUniqueEmailMiddleware,
  ensureUniqueCPFMiddleware,
  ensureDataIsValidMiddleware(userSchema),
  createUserController
);

usersRoutes.get("", listUsersController);

usersRoutes.get(
  "/:userId",
  ensureTokenIsValidMiddleware,
  retrieveUsersController
);
