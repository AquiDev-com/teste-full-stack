import { Router } from "express";
import { validatedDataMiddleware } from "../middlewares/validatedData.middleware";
import { userRequestSchema } from "../schemas/user.schema";
import { ensureUser } from "../middlewares/ensureUserLogin.middleware";
import { validatedPasswordMiddleware } from "../middlewares/validatedPassword.middleware";
import { loginController } from "../controllers/loginUser.controller";

const loginRouter = Router();
loginRouter.post(
  "",
  validatedDataMiddleware(userRequestSchema),
  ensureUser,
  validatedPasswordMiddleware,
  loginController
);
export { loginRouter };
