
function Login() {
    return (
	<form method="POST" action="Login.php">
	  <fieldset>
	  <legend>Login</legend>
	  <label>Usuario o Email:<input type="text" name="username"/></label>
	  <label>Contraseña:<input type="password" name="pass"/></label>
	  <input type="submit" value="Enviar"></input>
	    </fieldset>
	</form>
  );
}

export default Login;
