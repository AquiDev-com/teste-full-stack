import { Request, Response } from "express";
import { IUser } from "../interfaces/users.interface";
import { createUserService } from "../services/users/createUser.service";
import { listUsersService } from "../services/users/listUsers.service";

export const createUserController = async (
  request: Request,
  response: Response
) => {
  const userData: IUser = request.body;

  const newUser = await createUserService(userData);

  return response.status(201).json(newUser);
};

export const listUsersController = async (_: Request, response: Response) => {
  const users = await listUsersService();

  return response.json(users);
};
