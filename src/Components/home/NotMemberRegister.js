import { Link } from "react-router-dom";
import RegisterModal from "../RegisterModal";

function NotMemberRegister() {
  return (
    <div className="container">
      <div
        className="card rounded m-1 p-1 position-absolute top-50"
        style={{ backgroundColor: "#FF8638" }}
      >
        <div className="card-body">
          <h3 className="card-title font-monospace fw-bold text-light text-center">
            The Audio <pre /> Social Media
          </h3>
          <section className="card-text font-monospace fw-bold fs-5 text-dark text-center">
            ¿Aún no eres miembro?
            <pre />
            ¡Regístrate GRATIS! <pre />
          </section>
          <div className="d-flex justify-content-between">
            <button
              className="btn rounded-pill fw-bold text-light"
              style={{ backgroundColor: "#403D3D" }}
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#registerModal"
              data-bs-backdrop="false"
            >
              Registrarse
            </button>
            <RegisterModal />
            <Link to="/feed">
              <button
                className="btn ms-2 rounded-pill container-fluid fw-bold text-light"
                style={{ backgroundColor: "#403D3D" }}
              >
                Continuar sin registrarse
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotMemberRegister;
