import { useForm } from "react-hook-form";
import {
  IUserRegister,
  userRegisterSchema,
} from "../../../Interfaces/userContext.interface";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { UserContext } from "../../../Contexts/user.context";
import { useContext } from "react";
import { FormRegisterStyle } from "./formRegister.style";
import { Link } from "react-router-dom";

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({ resolver: zodResolver(userRegisterSchema) });

  const { createUser } = useContext(UserContext);

  const formRegister = (data: IUserRegister) => {
    createUser(data);
  };

  return (
    <>
      <FormRegisterStyle onSubmit={handleSubmit(formRegister)}>
        <h2>Cadastro</h2>

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          placeholder="Digite um email..."
          {...register("email")}
        />

        <label htmlFor="password">Senha</label>
        <input
          type="text"
          id="password"
          placeholder="Digite uma senha..."
          {...register("password")}
        />

        <Link to={"/"}>Já tem cadastro? Entre aqui!</Link>

        <button type="submit">Cadastrar</button>
      </FormRegisterStyle>
    </>
  );
};
