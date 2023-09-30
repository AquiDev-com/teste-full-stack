import { Request, Response } from "express";
import { IUser, IUserUpdate } from "../interfaces/users.interfaces"
import { createUserService } from "../services/users/createUser.service"
import { listUsersService } from "../services/users/listUser.service";
import { retrieveUserService } from "../services/users/retriveUser.service";
import { updateUserService } from "../services/users/updateUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";

export const createUserController = async (request: Request, response: Response) => {

    const userData: IUser = request.body

    const newUser = await createUserService(userData)

    return response.status(201).json(newUser)
}

export const listUsersController = async (request: Request, response: Response) => {

    const users = await listUsersService()

    return response.json(users)
}

export const retrieveUsersController = async (request: Request,response: Response) => {
      const id = request.params.id;
      
      const user  = await retrieveUserService(id);
    
      return response.json(user);
};

export const updateUserController = async (request: Request, response: Response) => {

    const userData: IUserUpdate = request.body
    const idUser = parseInt(request.params.id)

    const updatedUser = await updateUserService(userData, idUser)

    return response.json(updatedUser)
}

export const deleteUserController = async (request: Request, response: Response) => {

    await deleteUserService(parseInt(request.params.id))

    return response.status(204).send()
}