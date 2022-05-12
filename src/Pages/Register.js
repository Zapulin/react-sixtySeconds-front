import Signup from "../Components/Signup";

function Login() {
  return (
    <>
      <div className="container d-flex flex-column justify-content-center mt-5 mb-3">
        <h2 className="font-monospace fw-bold mt-4  text-center">
          Iniciar sesión
        </h2>
        <Signup />
      </div>
    </>
  );
}

export default Login;
