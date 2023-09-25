import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";

const deleteUserService = async (id: string) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser: User | null = await userRepository.findOneBy({ id: id });

  await userRepository.remove(findUser!);
};
export { deleteUserService };
