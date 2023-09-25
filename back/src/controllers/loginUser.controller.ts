import { Request, Response } from "express";
import { loginUserService } from "../services/login/loginUser.service";

const loginController = async (req: Request, res: Response) => {
  const user = res.locals.user;
  const session = await loginUserService(user);

  return res.status(200).json(session);
};
export { loginController };
