import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  readUserController,
  updateUserController,
} from "../controllers/user.controller";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware";
import { validatedDataMiddleware } from "../middlewares/validatedData.middleware";
import { userRequestSchema } from "../schemas/user.schema";
import { ensureUserMiddleware } from "../middlewares/ensureUser.middleware";

const userRoutes = Router();

userRoutes.post(
  "",
  validatedDataMiddleware(userRequestSchema),
  createUserController
);
userRoutes.get(
  "",
  verifyTokenMiddleware,
  ensureUserMiddleware,
  readUserController
);
userRoutes.patch(
  "",
  verifyTokenMiddleware,
  ensureUserMiddleware,
  updateUserController
);
userRoutes.delete(
  "",
  verifyTokenMiddleware,
  ensureUserMiddleware,
  deleteUserController
);

export default userRoutes;
