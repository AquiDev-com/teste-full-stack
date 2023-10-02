import React, { useState } from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import { isEmail } from "validator";

type LoginOverlayProps = {
  onClose: () => void;
};

export default function LoginOverlay({ onClose }: LoginOverlayProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginVisible, setLoginVisible] = useState(true);
  const [subscriptionVisible, setSubscriptionVisible] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClose();
  };

  const handleOpenSubscription = (e: React.MouseEvent) => {
    e.preventDefault();
    setLoginVisible(false);
    setSubscriptionVisible(true);
  };

  const handleCloseSubscription = () => {
    setSubscriptionVisible(false);
    onClose();
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const watchPassword = watch("password");

  const onSubmit = (data) => {
    alert(JSON.stringify(data)); //TODO: adicionar o destino dos dados do form
  };

  const renderLoginForm = () => (
    <div className="container-login">
      <button className="close" onClick={onClose}>
        X
      </button>
      <h1>Login</h1>
      <form onSubmit={handleSubmitLogin}>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button className="submit" type="submit">
          Enviar
        </button>
      </form>
      <p>
        Não possui conta?{" "}
        <a href="#" onClick={handleOpenSubscription}>
          Registrar-se
        </a>
      </p>
    </div>
  );

  const renderSubscriptionForm = () => (
    <div className="container-subscription">
      <button className="close" onClick={onClose}>
        X
      </button>
      <h1>Cadastro</h1>
      <div className="form-group">
						<label>Nome</label>
						<input
							className={errors?.name && "input-error"}
							type="text"
							placeholder="Seu nome"
							{...register("name", {required: true})}
						/>
						{errors?.name?.type === "required" && (
							<p className="error-message">Nome é obrigatório.</p>
						)}
					</div>

					<div className="form-group">
						<label>Email</label>
						<input
							className={errors?.email && "input-error"}
							type="email"
							placeholder="Seu email"
							{...register("email", {
								required: true,
								validate: (value) => isEmail(value),
							})}
						/>
						{errors?.email?.type === "required" && (
							<p className="error-message">Email é obrigatório.</p>
						)}

						{errors?.email?.type === "validate" && (
							<p className="error-message">Email inválido.</p>
						)}
					</div>

					<div className="form-group">
						<label>Senha</label>
						<input
							className={errors?.password && "input-error"}
							type="password"
							placeholder="Senha"
							{...register("password", {required: true, minLength: 8})}
						/>

						{errors?.password?.type === "required" && (
							<p className="error-message">Senha obrigatória.</p>
						)}

						{errors?.password?.type === "minLength" && (
							<p className="error-message">
								Senha precisa conter no mínimo 8 caracteres.
							</p>
						)}
					</div>

					<div className="form-group">
						<label>Confirmação de Senha</label>
						<input
							className={errors?.passwordConfirmation && "input-error"}
							type="password"
							placeholder="Repita sua senha"
							{...register("passwordConfirmation", {
								required: true,
								validate: (value) => value === watchPassword,
							})}
						/>
						{errors?.passwordConfirmation?.type === "required" && (
							<p className="error-message">É necessário confirmar sua senha.</p>
						)}

						{errors?.passwordConfirmation?.type === "validate" && (
							<p className="error-message">Senhas não conferem.</p>
						)}
					</div>

					<div className="form-group">
						<div className="checkbox-group">
							<input
								type="checkbox"
								name="privacy-policy"
								{...register("privacyTerms", {
									validate: (value) => value === true,
								})}
							/>
							<label>Eu aceito a política de privacidade.</label>
						</div>

						{errors?.privacyTerms?.type === "validate" && (
							<p className="error-message">
								Você deve aceitar a política de privacidade.
							</p>
						)}
					</div>

					<div className="form-group btn-submit">
						<button onClick={() => handleSubmit(onSubmit)()}>
							Criar conta
						</button>
					</div>
    </div>
  );

  return (
    <>
      {loginVisible && renderLoginForm()}

      {subscriptionVisible && renderSubscriptionForm()}
    </>
  );
}
