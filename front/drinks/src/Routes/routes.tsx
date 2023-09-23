import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";
import { DashboardPage } from "../pages/dashboard/dashboard";
import { ProtectRoutes } from "./protect.routes";

export const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="dashboard" element={<ProtectRoutes />}>
        <Route index element={<DashboardPage />} />
      </Route>
    </Routes>
  );
};
