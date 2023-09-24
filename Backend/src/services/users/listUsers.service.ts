import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { IAllUserReturn, IUserRepo } from "../../interfaces/users.interface";
import { returnAllUserSchema } from "../../schemas/users.schema";

export const listUsersService = async (): Promise<IAllUserReturn> => {
  const userRepository: IUserRepo = AppDataSource.getRepository(User);

  const findUsers: Array<User> = await userRepository.find();

  const users = returnAllUserSchema.parse(findUsers);
  return users;
};
