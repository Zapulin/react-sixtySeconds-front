import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ImageProfile from "../Samples/profileImg1.jpg";
import { logOut, isLoggedIn } from "../Services/auth";

export default function RegisterLogin() {
  
  const [isLogged, setIsLogged] = useState(isLoggedIn);

  return (
    <div>
      {isLogged ? (
        <div className="d-flex ms-auto gap-2">
          <Link to="/feed">
            <button
              type="button"
              className="btn btn-dark rounded-circle"
              style={{ backgroundColor: "#403D3D" }}
            >
              <i className="fa fa-plus"></i>
            </button>
          </Link>

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
          <div className="nav-item dropdown">
            <img
              src={ImageProfile}
              type="button"
              className="rounded-circle"
              alt="Avatar"
              width="42"
              height="38"
            />{" "}
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">
                <i className="fa fa-user-o"></i>Profile
              </a>
              <div>
                <a href="/" onClick={logOut}>
                  LOGOUT
                </a>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-dark rounded-circle ms-2 text-white"
              style={{ backgroundColor: "#403D3D" }}
              onClick={logOut}
            >
              <i class="fa fa-sign-out"></i>
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
