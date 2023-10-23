import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";
import logo from "../../assets/logo.png";
import { StyledLoginPage } from "./style";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Loading } from "../../components/Loading";

export const LoginPage = () => {
  const { loading, NewLogin, setLoading } = useContext(AuthContext);

  const navigate = useNavigate();

  const goRegisterClick = () => {
    navigate("/register");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const submit = async (data) => {
    setLoading(true);
    setTimeout(async () => {
      await NewLogin(data);
      if (localStorage.getItem("@TOKEN")) {
        setTimeout(() => {
          navigate("/dashboard");
        }, 5000);
      } else {
        setTimeout(() => {
          navigate("/");
        }, 5000);
        reset();
      }
    }, 1000);
  };
  return (
    <StyledLoginPage>
      <section className="secLogin">
        <h1 className="titleLogin">Login</h1>
        <form className="formLogin" onSubmit={handleSubmit(submit)} noValidate>
          <label htmlFor="email" className="lbLogin">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email here..."
            className="iptLogin"
            {...register("email")}
          />
          {errors.email && <p className="areaError">{errors.email.message}</p>}
          <label htmlFor="password" className="lbLogin">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password here..."
            className="iptLogin"
            {...register("password")}
          />
          {errors.password && (
            <p className="areaError">{errors.password.message}</p>
          )}
          <button type="submit" className="btLogar" disabled={loading}>
            {loading ? <Loading /> : "Sing in"}
          </button>
        </form>
        <p className="messageCreateRegister">Do not have an account?</p>
        <button className="btGoToRegister" onClick={goRegisterClick}>
          Register
        </button>
      </section>
      <section className="secApresentation">
        <img src={logo} alt="punk beer image " className="logo" />
      </section>
    </StyledLoginPage>
  );
};
