import { Login } from "./loginPage";
import { useForm } from "react-hook-form";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect } from "react";

export const LoginPage = () => {

    const {loginUser, loading, user } = useContext(AuthContext);

    const navigate = useNavigate()
  
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm({
      mode: "onBlur",
      resolver: yupResolver(loginSchema),
    });
  
    const submit = async (data) => {
      await loginUser(data);
      reset();
    };
  
    useEffect(() => {
      if (!user) {
        navigate("/");
      }
    },[user, navigate]);
  
    return (
      <>
      <Login>
        <div className="divLeft">
          <h2>Login</h2>
          <form onSubmit={handleSubmit(submit)} noValidate>
            <label htmlFor="email">Email</label>
            <input type="email"
                placeholder="Digite aqui seu email"
                {...register("email")}/>
                  {errors.email?.message && <span>{errors.email.message}</span>}
  
            <label htmlFor="password">Senha</label>
            <input type="password"
                placeholder="Digite aqui sua senha"
                {...register("password")} />
                 {errors.password?.message && <span>{errors.password.message}</span>}
  
            <button type="submit" disabled={loading}>{loading ? "Entrando..." : "Entrar"}</button>
          </form>
          <span>Ainda não possui uma conta?</span>
          <Link to={`/register`}>Cadastre-se</Link>
        </div>
        <div className="divRight">
        <img src={logo} alt="" />
      </div>
      </Login>
      </>
    );
}