import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import {
  IUpdateUser,
  IUserRepo,
  IUserReturn,
} from "../../interfaces/users.interface";
import { returnUserSchema } from "../../schemas/users.schema";

export const updateUserService = async (
  newUserData: IUpdateUser,
  userId: string
): Promise<IUserReturn> => {
  if (Object.keys(newUserData).length === 0) {
    throw new AppError("invalid data!", 400);
  }

  const userRepository: IUserRepo = AppDataSource.getRepository(User);

  const oldUserData = await userRepository.findOneBy({
    id: parseInt(userId),
  });

  const user = userRepository.create({
    ...oldUserData,
    ...newUserData,
  });

  await userRepository.save(user);

  const updatedUser = returnUserSchema.parse(user);
  return updatedUser;
};
