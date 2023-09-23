import { Repository } from "typeorm";
import {
  TUserRequest,
  TUserResponse,
  TUserUpdate,
} from "../../interfaces/user.types";
import { User } from "../../entities/user.entitie";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { userResponseSchema } from "../../schemas/user.schema";

const updateUserService = async (
  data: Partial<TUserRequest>,
  idUser: string
) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ id: idUser });

  const update = userRepository.create({
    ...findUser,
    ...data,
  });
  await userRepository.save(update);

  const userResponse = userResponseSchema.parse(update);

  return userResponse;
};
export { updateUserService };
