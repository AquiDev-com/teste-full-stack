import { AppDataSource } from "./data-source";
import "reflect-metadata";
import "express-async-errors";
import express, { Request, Response } from "express";
import userRoutes from "./routes/user.route";
import { User } from "./entities/user.entitie";
import { loginRouter } from "./routes/login.route";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.post("/pre-cadastrar-usuario", async (req: Request, res: Response) => {
  try {
    const userRepository = AppDataSource.getRepository(User);

    const newUser = new User();
    newUser.email = "devfullstack@gmail.com";
    newUser.password = "devfullstack";

    await userRepository.save(newUser);

    res
      .status(201)
      .json({ message: "Usuário pré-cadastrado inserido com sucesso." });
  } catch (error) {
    console.error("Erro ao pré-cadastrar o usuário:", error);
    res.status(500).json({ error: "Erro ao pré-cadastrar o usuário." });
  }
});
app.use("/login", loginRouter);

export default app;
