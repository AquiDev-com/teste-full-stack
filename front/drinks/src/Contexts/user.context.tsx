import { createContext } from "react";
import { Children } from "../Interfaces/children";
import {
  IUserContext,
  IUserRegister,
} from "../Interfaces/userContext.interface";
import { api } from "../services/api.users";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: Children) => {
  const navegate = useNavigate();

  const createUser = async (data: IUserRegister) => {
    try {
      await api.post("/users", data);
      toast.success("Conta criada com sucesso", { className: "toast-sucess" });
      navegate("/");
    } catch (error) {
      toast.error("Algo deu errado, tente novamente!");
    }
  };
  return (
    <UserContext.Provider value={{ createUser }}>
      {children}
    </UserContext.Provider>
  );
};
