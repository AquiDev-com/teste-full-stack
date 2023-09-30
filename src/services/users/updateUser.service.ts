import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { AppError } from "../../error"
import { IUserRepo, IUserReturn, IUserUpdate } from "../../interfaces/users.interfaces"
import { returnUserSchema } from "../../schemas/users.schema"

export const updateUserService = async (newUserData: IUserUpdate, idUser: number): Promise<IUserReturn> => {
    
    if (Object.keys(newUserData).length === 0) {
        throw new AppError("Invalid data.", 400)
    }

    const userRepository: IUserRepo = AppDataSource.getRepository(User)

    const oldUserData = await userRepository.findOneBy({
        id: idUser
    })

    const user = userRepository.create({
        ...oldUserData,
        ...newUserData
    })

    await userRepository.save(user)

    const updatedUser = returnUserSchema.parse(user)

    return updatedUser

}