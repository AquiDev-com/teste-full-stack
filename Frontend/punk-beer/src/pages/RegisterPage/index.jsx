import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledRegisterPage } from "./style";
import { registerSchema } from "./registerSchema";
import { AuthContext } from "../../contexts/AuthContext";
import { Loading } from "../../components/Loading";
import logo from "../../assets/logo.png";
import InputMask from "react-input-mask";
import { useContext } from "react";

export const RegisterPage = () => {
  const { loading, NewRegister, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const goLoginClick = () => {
    navigate("/");
  };

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
      cpf: "",
      phone: "",
      birthday: "",
      image: "",
      gender: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const submit = async (data) => {
    setLoading(true);
    setTimeout(async () => {
      const information = { ...data };
      await NewRegister(information);
      reset();
    }, 1000);
  };
  return (
    <StyledRegisterPage>
      <section className="secApresentation">
        <img src={logo} alt="punk beer image" className="logo" />
      </section>
      <section className="secRegister">
        <div className="areaRegisterAndGoToLogin">
          <h1 className="titleRegister">Register</h1>
          <button className="btGoToLogin" onClick={goLoginClick}>
            Return to login
          </button>
        </div>
        <form
          className="formRegister"
          onSubmit={handleSubmit(submit)}
          noValidate
        >
          <label htmlFor="name" className="lbRegister">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name here..."
            className="iptRegister"
            {...register("name")}
          />
          {errors.name && <p className="areaError">{errors.name.message}</p>}
          <label htmlFor="email" className="lbRegister">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email here..."
            className="iptRegister"
            {...register("email")}
          />
          {errors.email && <p className="areaError">{errors.email.message}</p>}
          <label htmlFor="password" className="lbRegister">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password here..."
            className="iptRegister"
            {...register("password")}
          />
          {errors.password && (
            <p className="areaError">{errors.password.message}</p>
          )}
          <label htmlFor="cpf" className="lbRegister">
            CPF
          </label>
          <input
            type="text"
            placeholder="Enter your CPF here..."
            className="iptRegister"
            {...register("cpf")}
          />
          {errors?.cpf && <p className="areaError">{errors.cpf.message}</p>}

          <label htmlFor="phone" className="lbRegister">
            Phone
          </label>
          <InputMask
            type="text"
            mask="(99) 99999-9999"
            placeholder="Enter your phone here..."
            className="iptRegister"
            {...register("phone")}
          />
          {errors.phone && <p className="areaError">{errors.phone.message}</p>}

          <label htmlFor="birthday" className="lbRegister">
            Birthday
          </label>
          <InputMask
            type="text"
            mask="99/99/9999"
            placeholder="Enter your birthday here..."
            className="iptRegister"
            {...register("birthday")}
          />
          {errors?.birthday && (
            <p className="areaError">{errors.birthday.message}</p>
          )}

          <label htmlFor="image" className="lbRegister">
            Image
          </label>
          <input
            type="url"
            placeholder="Insert your image link..."
            className="iptRegister"
            {...register("image")}
          />
          {errors?.image && <p className="areaError">{errors.image.message}</p>}

          <label htmlFor="gender" className="lbRegister">
            Gender
          </label>
          <select
            name="gender"
            id="gender"
            className="iptRegister"
            {...register("gender")}
          >
            <option value="">Select</option>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="no binary">no binary</option>
            <option value="I prefer not to say">I prefer not to say</option>
          </select>
          {errors.gender && (
            <p className="areaError">{errors.gender.message}</p>
          )}
          <button type="submit" className="btRegister" disabled={loading}>
            {loading ? <Loading /> : "Register"}
          </button>
        </form>
      </section>
    </StyledRegisterPage>
  );
};
