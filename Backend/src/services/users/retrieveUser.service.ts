import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import { IUserRepo, IUserReturn } from "../../interfaces/users.interface";
import { returnUserSchema } from "../../schemas/users.schema";

export const retrieveUserService = async (
  userId: number
): Promise<IUserReturn> => {
  const userRepository: IUserRepo = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!findUser) {
    throw new AppError("User not found!", 400);
  }

  const user = returnUserSchema.parse(findUser!);

  return user;
};
