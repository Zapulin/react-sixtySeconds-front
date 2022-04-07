import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Login() {
    return (
		<div className="dropdown">
			<form name="login" method="POST" action="Login.php">
				<fieldset>
					<legend>Login</legend>
					<label>Usuario o Email:<input type="text" name="username"/></label>
					<label>Contraseña:<input type="password" name="pass"/></label>
					<input type="submit" value="Enviar"></input>
				</fieldset>
			</form>
		</div>
  );
}

export default Login;
