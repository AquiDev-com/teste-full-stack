import { Register } from "./registerPage";
import { useForm } from "react-hook-form";
import logo from "../../assets/logo.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import InputMask from "react-input-mask";
import "react-toastify/dist/ReactToastify.css";

export const RegisterPage = () => {

    const {registerUser} = useContext(AuthContext);
    const [loading] = useState(false);
  
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm({
      mode: "onBlur",
      defaultValues: {
        name: "",
        email: "",
        password: "",
        phone: "",
      },
      resolver: yupResolver(registerSchema),
    });
  
    const submit = async (data) => {
      const dataNew = { ...data };
      await registerUser(dataNew);
      reset();
    };
  
    return (
      <>
        <Register>
          <div className="divLeft">
            <img src={logo} alt="" />
          </div>
          <div className="divRight">
            <div className="divRegister">
            <h2>Cadastro</h2>
            <Link to={`/`}>Voltar</Link>
            </div>
            <form onSubmit={handleSubmit(submit)} noValidate>
              <label htmlFor="name">Nome</label>
              <input
                type="name"
                placeholder="Digite aqui seu nome"
                {...register("name")}
              />
              {errors.name?.message && <span>{errors.name.message}</span>}
  
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Digite aqui seu email"
                {...register("email")}
              />
              {errors.email?.message && <span>{errors.email.message}</span>}
  
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                placeholder="Digite aqui sua senha"
                {...register("password")}
              />
              {errors.password?.message && <span>{errors.password.message}</span>}
  
              <label htmlFor="phone">Contato</label>
              <InputMask
                type="text" 
                mask="(99) 99999-9999"
                placeholder="Digite seu número"
                {...register("phone")}
              />
              {errors.phone?.message && <span>{errors.phone.message}</span>}
        
              <button type="submit" disabled={loading}>
                {loading ? "Cadastrando..." : "Cadastrar"}
              </button>
            </form>

          </div>
        </Register>
      </>
    );
  };