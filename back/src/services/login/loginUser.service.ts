import { sign } from "jsonwebtoken";
import { TUser } from "../../interfaces/user.types";

const loginUserService = (user: TUser) => {
  const token = sign({ email: user.email }, String(process.env.SECRET_KEY!), {
    expiresIn: "1d",
    subject: String(user.id),
  });

  return { token };
};
export { loginUserService };
