
import Signin from '../Components/Signin';

function Login() {
  return (
    <>
      <div className="container d-flex flex-column justify-content-center mt-5">
        <h2 className="font-monospace fw-bold mt-4  text-center">Iniciar sesión</h2>
          <Signin />
      </div>
    </>
  );
}

export default Login;
