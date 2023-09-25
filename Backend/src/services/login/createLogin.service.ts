import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { ILogin, ILoginResponse } from "../../interfaces/login.interface";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { IUserRepo } from "../../interfaces/users.interface";
import { User } from "../../entities";

export const createLoginService = async (
  loginData: ILogin
): Promise<ILoginResponse> => {
  const userRepository: IUserRepo = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    email: loginData.email,
  });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const passwordMatch = await compare(loginData.password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = jwt.sign(
    {
      email: user.email,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: String(user.id),
    }
  );

  const { id, name, email, phone, birthday, gender } = user;

  return {
    token,
    user: { id, name, email, phone, birthday, gender },
  };
};
