import { Request, Response } from "express";
import { TUserRequest, TUserResponse } from "../interfaces/user.types";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: TUserRequest = req.body;

  return res.status(201).json("Deu certo");
};

const readUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).json("Deu certo");
};

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: TUserRequest = req.body;
  return res.status(200).json("deu certo");
};

const deleteUserController = async (req: Request, res: Response) => {};

export {
  createUserController,
  readUserController,
  updateUserController,
  deleteUserController,
};
