import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ImageProfile from "../Resources/images/img-default.jpg";
import { logOut, isLoggedIn } from "../Services/auth";

export default function RegisterLogin() {
  const [isLogged, setIsLogged] = useState(isLoggedIn);

  return (
    <div>
      {isLogged ? (

        <div className="d-flex ms-auto gap-2">
            <button
              type="button"
              className="btn btn-dark rounded-circle"
              style={{ backgroundColor: "#403D3D" }}
              data-bs-toggle="modal"
              data-bs-target="#publishModal"
              data-bs-backdrop="false"
            >
              <i className="fa fa-plus"></i>
            </button>
          <Link to="/feed">
            {" "}
            <button
              type="button"
              className="btn btn-dark rounded-circle"
              style={{ backgroundColor: "#403D3D" }}
            >
              <i className="fa fa-home"></i>
            </button>
          </Link>
          <Link to="/authors">
            <button
              type="button"
              className="btn btn-dark rounded-circle"
              style={{ backgroundColor: "#403D3D" }}
            >
              <i className="fa fa-group"></i>
            </button>
          </Link>

          <div className="nav-item">
            <Link to="/profile">
              <img
                src={ImageProfile}
                type="button"
                className="rounded-circle"
                alt="Avatar"
                width="42"
                height="38"
              />
            </Link>
            <button
              type="button"
              className="btn btn-dark rounded-circle ms-2 text-white"
              style={{ backgroundColor: "#403D3D" }}
              onClick={logOut}
            >
              <i className="fa fa-sign-out"></i>
            </button>
          </div>
        </div>
      ) : (
        <div className="d-flex ms-auto gap-2">
          <button
            className="btn rounded-pill fw-bold text-light"
            style={{ backgroundColor: "#403D3D" }}
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
            data-bs-backdrop="false"
          >
            Iniciar sesión
          </button>

          <button
            type="button"
            className="btn rounded-pill fw-bold text-light"
            data-bs-toggle="modal"
            data-bs-target="#registerModal"
            data-bs-backdrop="false"
            style={{ backgroundColor: "#403D3D" }}
          >
            Registrarse
          </button>
        </div>
      )}
    </div>
  );
}
