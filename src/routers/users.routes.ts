import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, retrieveUsersController, updateUserController } from "../controllers/users.controllers";
import { ensureEmailExistsMiddleware } from "../middlewares/ensureEmailExists.middleware";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { updateUserSchema, userCreateSchema } from "../schemas/users.schema";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureUserExistMiddleware } from "../middlewares/ensureUserExistMiddleware";
import { ensureValidUserMiddleware } from "../middlewares/ensureValidClient.middleware";

export const usersRoutes: Router = Router()

usersRoutes.post("", ensureEmailExistsMiddleware, ensureDataIsValidMiddleware(userCreateSchema), createUserController)

usersRoutes.get("", ensureTokenIsValidMiddleware, listUsersController)

usersRoutes.get("/:id", ensureTokenIsValidMiddleware, ensureUserExistMiddleware, retrieveUsersController)

usersRoutes.patch("/:id", ensureTokenIsValidMiddleware, ensureUserExistMiddleware, ensureValidUserMiddleware, ensureDataIsValidMiddleware(updateUserSchema), updateUserController)

usersRoutes.delete("/:id", ensureTokenIsValidMiddleware, ensureUserExistMiddleware, ensureValidUserMiddleware, deleteUserController)