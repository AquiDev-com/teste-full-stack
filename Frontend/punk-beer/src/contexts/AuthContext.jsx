/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/axiosUser";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [newLoading, setNewLoading] = useState(true);
  const [modalIsBeerOpen, setIsBeerOpen] = useState(false);
  const [selectedBeer, setSelectedBeer] = useState(null);
  const [filteredBeer, setFilteredBeer] = useState([]);
  const [modalIsFilterOpen, setIsFilterOpen] = useState(false);

  const navigate = useNavigate();

  const NewLogin = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("/login", data);
      localStorage.setItem("@TOKENUSER", response.data.token.token);
      const { token, user } = response.data.token;

      setUser(user);

      localStorage.setItem("@TOKEN", token);
      toast.success("Login successfully! 👏");

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      localStorage.setItem("@USER_ID", user.id);

      getUser();

      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (error) {
      toast.error("User not found! 👀");
    } finally {
      setLoading(false);
    }
  };

  const getUser = async () => {
    const tokenValidate = localStorage.getItem("@TOKEN");
    const userId = localStorage.getItem("@USER_ID");

    if (!tokenValidate) {
      setNewLoading(false);
      return;
    }
    api.defaults.headers.common["Authorization"] = `Bearer ${tokenValidate}`;
    try {
      const response = await api.get(`/users/${userId}`);

      setUser(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setNewLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const NewRegister = async (data) => {
    try {
      setLoading(true);
      await api.post("/users", data);
      toast.success("Register successfully! 😎");
      setTimeout(() => {
        navigate("/");
      }, 5000);
    } catch (error) {
      toast.error("Something went wrong! 😢");
    } finally {
      setLoading(false);
    }
  };

  const handleBeerModal = (beerId) => {
    setSelectedBeer(beerId);
    setIsBeerOpen(!modalIsBeerOpen);
  };

  const handleFilterModal = () => {
    setIsFilterOpen(!modalIsFilterOpen);
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        setLoading,
        NewLogin,
        user,
        setUser,
        newLoading,
        setNewLoading,
        NewRegister,
        getUser,
        modalIsBeerOpen,
        setIsBeerOpen,
        handleBeerModal,
        selectedBeer,
        setSelectedBeer,
        filteredBeer,
        setFilteredBeer,
        modalIsFilterOpen,
        setIsFilterOpen,
        handleFilterModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
