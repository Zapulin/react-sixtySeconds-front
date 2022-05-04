import { Link } from "react-router-dom";

function NotMemberRegister() {
  return (
    <div
      className="card rounded m-4 p-2 position-absolute top-50"
      style={{ background: "#FF8638" }}
    >
      <div className="card-body">
        <h5 className="card-title">The Audio Social Media</h5>
        <p className="card-text">¿Aún no eres miembro?</p>
        <p className="card-text">
          ¡Regístrate <span>GRATIS!</span>
        </p>

        <div className="d-flex justify-content-between">
          <Link to="/register">
            <button className="btn btn-dark rounded-pill">
              Registrarse
            </button>
          </Link>
          <Link to="/feed">
            <button className="btn btn-dark ms-2 rounded-pill">
              Continuar sin registrarse
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotMemberRegister;
