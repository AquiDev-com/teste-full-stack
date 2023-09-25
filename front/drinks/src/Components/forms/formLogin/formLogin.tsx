import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { loginSchema } from "../../../schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLogin } from "../../../Interfaces/loginContext.interface";
import { useContext } from "react";
import { LoginContext } from "../../../Contexts/login.context";
import { FormLoginStyle } from "./formLogin-style";

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLogin>({ resolver: zodResolver(loginSchema) });

  const { login } = useContext(LoginContext);

  const submitForm = (data: TLogin) => {
    login(data);
  };
  return (
    <>
      <FormLoginStyle onSubmit={handleSubmit(submitForm)}>
        <h2>Login</h2>

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          placeholder="Digite seu email..."
          {...register("email")}
        />
        <p>{errors.email?.message}</p>

        <label htmlFor="password">Senha:</label>
        <input
          type="text"
          id="password"
          placeholder="Digite sua senha..."
          {...register("password")}
        />
        <p>{errors.password?.message}</p>

        <Link to={"register"}>Ainda não tem conta? Cadastre-se aqui!</Link>

        <button type="submit">Entrar</button>
      </FormLoginStyle>
    </>
  );
};
