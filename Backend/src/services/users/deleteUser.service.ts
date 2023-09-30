import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { IUserRepo } from "../../interfaces/users.interface";

export const deleteUserService = async (userId: string): Promise<void> => {
  const userRepository: IUserRepo = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: parseInt(userId),
    },
  });

  await userRepository.remove(user!);
};
