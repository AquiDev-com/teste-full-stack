import React, {useState} from "react";
import "./login.css";
import {useForm} from "react-hook-form";
import isEmail from "validator/lib/isEmail";


type LoginOverlayProps = {
	onClose: () => void;
};

export default function LoginOverlay({onClose}: LoginOverlayProps) {
	const [loginVisible, setLoginVisible] = useState(true);
	const [subscriptionVisible, setSubscriptionVisible] = useState(false);

	const handleOpenSubscription = (e: React.MouseEvent) => {
		e.preventDefault();
		setLoginVisible(false);
		setSubscriptionVisible(true);
	};

	const {
		register,
		handleSubmit,
		watch,
		formState: {errors},
	} = useForm();

	const watchPassword = watch("password");

	const onSubmit = (data: unknown) => {
		alert(JSON.stringify(data)); //TODO: conectar com backend
	};

	const renderLoginForm = () => (
		<div className="container-login">
			<button className="close" onClick={onClose}>
				X
			</button>
			<h1>Login</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
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

				<label>Senha </label>
				<input
					className={errors?.password && "input-error"}
					type="password"
					placeholder="Sua senha"
					{...register("password", {required: true, minLength: 8})}
				/>

				{errors.password?.type === "required" && (
					<p className="error-message">Senha obrigatória.</p>
				)}

				{errors.password?.type === "minLength" && (
					<p className="error-message">
						Senha precisa conter no mínimo 8 caracteres.
					</p>
				)}

				<button className="submit" onClick={() => handleSubmit(onSubmit)()}>
					Enviar
				</button>
			</form>
			<p>
				Não possui conta?{" "}
				<button onClick={handleOpenSubscription}>Registrar-se</button>
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
					placeholder="Sua senha"
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
					placeholder="Digite sua senha novamente"
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
						about="privacy-policy"
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
				<button onClick={() => handleSubmit(onSubmit)()}>Criar conta</button>
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
