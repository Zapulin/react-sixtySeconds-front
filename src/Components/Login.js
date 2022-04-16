import React from "react";

function Login() {
  return (
    <div className="container">
      <div class="d-flex justify-content-center p-4">
        <form name="login" method="POST" action="Login.php">
          <fieldset>
            <legend>Login</legend>
            <label>
              Usuario o Email:
              <input type="text" name="username" />
            </label>
            <label>
              Contraseña:
              <input type="password" name="pass" />
            </label>
            <input type="submit" value="Enviar"></input>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Login;
