import { Repository } from "typeorm";
import { User } from "../../entities/user.entitie";
import { AppDataSource } from "../../data-source";
import { userResponseSchema } from "../../schemas/user.schema";

const readUserService = async (idUser: string) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ id: idUser });

  const userResponse = userResponseSchema.parse(findUser);
  return userResponse;
};
export { readUserService };
