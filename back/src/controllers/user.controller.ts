import { Request, Response } from "express";
import { TUserRequest } from "../interfaces/user.types";
import { createUserService } from "../services/user/createUser.service";
import { updateUserService } from "../services/user/updateUser.service";
import { readUserService } from "../services/user/readUser.service";
import { deleteUserService } from "../services/user/deleteUser.service";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: TUserRequest = req.body;
  const newUser = await createUserService(data);
  return res.status(201).json(newUser);
};

const readUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = res.locals.id;
  const user = await readUserService(id);
  return res.status(200).json(user);
};

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: TUserRequest = req.body;
  const id = res.locals.id;
  const update = await updateUserService(data, id);
  return res.status(200).json(update);
};

const deleteUserController = async (req: Request, res: Response) => {
  const id = res.locals.id;
  await deleteUserService(id);

  return res.status(204).send();
};

export {
  createUserController,
  readUserController,
  updateUserController,
  deleteUserController,
};
