import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { IUserAllReturn, IUserRepo } from "../../interfaces/users.interfaces"
import { returnAllUserSchema } from "../../schemas/users.schema"


export const listUsersService = async (): Promise<IUserAllReturn> => {

    const userRepository: IUserRepo = AppDataSource.getRepository(User)

    const findUsers: Array<User> = await userRepository.find()

    const users = returnAllUserSchema.parse(findUsers)

    return users

}