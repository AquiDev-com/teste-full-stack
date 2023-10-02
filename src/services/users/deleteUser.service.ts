import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { IUserRepo } from "../../interfaces/users.interfaces";

export const deleteUserService = async (idUser: number): Promise<void> => {

    const userRepository: IUserRepo = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            id: idUser,
        },
    })

    if (!user) {
        throw new Error("Usuário não encontrado");
    }
    
      await userRepository.remove(user);

}