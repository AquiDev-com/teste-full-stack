import { Router } from "express";
import { ensureUniqueEmailMiddleware } from "../middlewares/ensureUniqueEmail.middleware";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { updateUserSchema, userSchema } from "../schemas/users.schema";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  retrieveUsersController,
  updateUserController,
} from "../controllers/users.controllers";
import { ensureUserExistsMiddleware } from "../middlewares/ensureUserExists.middleware";
import { ensureIsAuthenticatedMiddleware } from "../middlewares/ensureIsAuthenticated.middleware";

export const usersRoutes = Router();

usersRoutes.post(
  "",
  ensureUniqueEmailMiddleware,
  ensureDataIsValidMiddleware(userSchema),
  createUserController
);

usersRoutes.use(ensureTokenIsValidMiddleware);

usersRoutes.get("", listUsersController);

usersRoutes.get("/:userId", retrieveUsersController);

usersRoutes.patch(
  "/:userId",
  ensureUserExistsMiddleware,
  ensureIsAuthenticatedMiddleware,
  ensureDataIsValidMiddleware(updateUserSchema),
  updateUserController
);

usersRoutes.delete(
  "/:userId",
  ensureUserExistsMiddleware,
  ensureIsAuthenticatedMiddleware,
  deleteUserController
);
