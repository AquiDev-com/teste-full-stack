import { Request, Response } from "express";
import { IUser } from "../interfaces/users.interface";
import { createUserService } from "../services/users/createUser.service";
import { listUsersService } from "../services/users/listUsers.service";
import { retrieveUserService } from "../services/users/retrieveUser.service";

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

export const retrieveUsersController = async (
  request: Request,
  response: Response
) => {
  const userId: number = Number(request.params.userId);

  const user = await retrieveUserService(userId);

  return response.json(user);
};
