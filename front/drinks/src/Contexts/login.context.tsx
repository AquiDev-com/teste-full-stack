import { createContext, useState, useEffect } from "react";
import { Children } from "../Interfaces/children";
import { ILoginContext, Token } from "../Interfaces/loginContext.interface";
import { IUser, IUserRegister } from "../Interfaces/userContext.interface";
import { api } from "../services/api.users";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext({} as ILoginContext);

export const LoginProvider = ({ children }: Children) => {
  const [user, setUser] = useState<IUser | Token | undefined>();

  const navigate = useNavigate();

  const login = async (data: IUserRegister) => {
    try {
      const response = await api.post("/login", data);
      toast.success("Login efetuado com sucesso! Bem vindo!");
      localStorage.setItem("@token-punk", response.data.token);
      setUser(response.data.token);
      navigate("dashboard");
    } catch (error) {
      toast.error(`${error}`);
      console.error(error);
    }
  };

  const autoLogin = async () => {
    const token = localStorage.getItem("@token-punk");
    if (token) {
      try {
        const response = await api.get("/users", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
        navigate("dashboard");
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    autoLogin();
  }, []);

  return (
    <LoginContext.Provider value={{ user, login }}>
      {children}
    </LoginContext.Provider>
  );
};
