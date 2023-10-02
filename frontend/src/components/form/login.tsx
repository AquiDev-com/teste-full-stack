export default function Login() {
	return (
        <>
        <h1> Login</h1>
		<form>
			<label>
				Email:
				<input type="text" name="email" />
			</label>
			<label>
				Senha:
				<input type="text" name="password" />
			</label>
			<button type="submit">Submit</button>
		</form>
        <p> Não possui conta? <a href="/">Registrar-se</a></p>
        </>
        
	);
}
