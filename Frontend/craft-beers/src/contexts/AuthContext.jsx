/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { punkApi } from "../services/punkApi";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [newLoading, setNewLoading] = useState(true);
  const [drinks, setDrinks] = useState([]);

  const navigate = useNavigate();

  const loginUser = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("/login", data);
      localStorage.setItem("@TOKENUSER", response.data.token);
        
      setUser(response.data.user);

      localStorage.setItem("@TOKEN", response.data.token);
      toast.success("Login realizado com sucesso!");
      api.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;

      localStorage.setItem("@ID", response.data.user.id);

      getUser();

      setTimeout(() => {
        navigate("/home")
      }, 3000);

    } catch (error) {
      toast.error("Login não realizado!");
    } finally {
      setLoading(false);
    }
  };

  async function getUser() {
    const tokenValidate = localStorage.getItem("@TOKEN");
    const id = localStorage.getItem("@ID");

    if(!tokenValidate) {
        setNewLoading(false);
        return;
    }

    api.defaults.headers.common["Authorization"] = `Bearer ${tokenValidate}`

    try {
        const response = await api.get(`/users/${id}`);
        setUser(response.data);
    }
    catch (error) {
        console.error(error);
    }
    finally  {
        setNewLoading(false);
    }
  }

  useEffect(() => {
    getUser();
    }, []);

  const registerUser = async (data) => {
    try {
      setLoading(true);
      await api.post("/users", data);
      toast.success("Conta criada com sucesso!");

      setTimeout(() => {
        navigate("/");
      }, 5000);
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getDrinks = async () => {
      try {
        const response = await punkApi.get(`beers?page=2&per_page=80
        `)
        const drinksArray = Array.isArray(response.data) ? response.data : [];
        setDrinks(drinksArray);
      } catch (error) {
        console.log(error)
      }
    }
    getDrinks()
  },[])

  return (
    <AuthContext.Provider 
    value={{ 
      loginUser, 
      user, 
      toast, 
      loading, 
      newLoading, 
      setNewLoading, 
      registerUser, 
      getUser,
      drinks, 
      setDrinks }}>
      {children}
    </AuthContext.Provider>
  );
}