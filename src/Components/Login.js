import React from "react";

function Login() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center p-4">
        <form name="login" method="POST" action="Login.php">
          <fieldset>
            <legend>Login</legend>
            <br />
            <label>
              Usuario o Email:
              <input type="text" name="username" />
            </label>
            <br />
            <label>
              Contraseña:
              <input type="password" name="pass" />
            </label>
            <br />
            <input type="submit" value="Enviar"></input>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Login;
