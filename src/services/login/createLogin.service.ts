import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { ILogin } from "../../interfaces/login.interface";
import { IUserRepo } from "../../interfaces/users.interfaces";
import { User } from "../../entities";
import { AppError } from "../../error";

export const createLoginService = async (loginData: ILogin): Promise<string> => {

    const userRepository: IUserRepo = AppDataSource.getRepository(User)

    const user: User | null = await userRepository.findOneBy({
        email: loginData.email
    })

    if(!user){
        throw new AppError("Invalid credentials", 401)
    }

    const passwordMatch = await compare(loginData.password, user.password)

    if(!passwordMatch){
        throw new AppError("Invalid credentials", 401)
    }

    const token: string = jwt.sign(
        {
            email: user.email
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: '24h',
            subject: String(user.id)
        }
    )

    return token
}
