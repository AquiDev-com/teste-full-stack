import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyle } from "./Styles/global.ts";
import { ToastContainer } from "react-toastify";
import { LoginProvider } from "./Contexts/login.context.tsx";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./Contexts/user.context.tsx";
import { PunkProvider } from "./Contexts/punk.context.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <LoginProvider>
          <PunkProvider>
            <GlobalStyle />
            <App />
            <ToastContainer />
          </PunkProvider>
        </LoginProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
