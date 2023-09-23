import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { LoginContext } from "../Contexts/login.context";

export const ProtectRoutes = () => {
  const { user } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);
  return <>{user ? <Outlet /> : null}</>;
};
