import { Repository } from "typeorm";
import { AppDataSource } from "./../../data-source";
import { User } from "../../entities/user.entitie";
import { TUserRequest } from "../../interfaces/user.types";
import { AppError } from "../../errors/appError";
import { userResponseSchema } from "../../schemas/user.schema";
const createUserService = async (data: TUserRequest) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({
    where: { email: data.email },
  });

  if (findUser) {
    throw new AppError("User already exists", 409);
  }
  const newUser = userRepository.create(data);
  await userRepository.save(newUser);

  const userResponse = userResponseSchema.parse(newUser);
  return userResponse;
};

export { createUserService };
