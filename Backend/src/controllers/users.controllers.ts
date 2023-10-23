import { Request, Response } from "express";
import { IUpdateUser, IUser } from "../interfaces/users.interface";
import { createUserService } from "../services/users/createUser.service";
import { listUsersService } from "../services/users/listUsers.service";
import { retrieveUserService } from "../services/users/retrieveUser.service";
import { updateUserService } from "../services/users/updateUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";

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
  const userId: string = request.params.userId;

  const user = await retrieveUserService(userId);

  return response.json(user);
};

export const updateUserController = async (
  request: Request,
  response: Response
) => {
  const userData: IUpdateUser = request.body;
  const userId = request.params.userId;

  const updateUser = await updateUserService(userData, userId);

  return response.json(updateUser);
};

export const deleteUserController = async (
  request: Request,
  response: Response
) => {
  const userId = request.params.userId;
  await deleteUserService(userId);

  return response.status(204).send();
};
