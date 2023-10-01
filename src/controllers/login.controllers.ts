import { Request, Response } from "express";
import { createLoginService } from "../services/login/createLogin.service";
import { ILogin } from "../interfaces/login.interface";

export const createLoginController = async (request: Request, response: Response): Promise<Response> => {

    const loginData: ILogin = request.body

    const { token, user } = await createLoginService(loginData)

    return response.json({
        token: token,
        user: user
    })

}