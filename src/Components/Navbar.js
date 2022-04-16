import { useState } from "react";
import { Link } from "react-router-dom";
import ImageProfile from "../Samples/profileImg1.jpg";
import "../stylesheets/Navbar.css";

function Navbar() {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* Logo - por ahora es un link  */}
          <a href="#" className="navbar-brand">
            Brand
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse1"
          >
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse1">
            <div className="form my-2 my-lg-0 mx-auto">
              <input
                className="form-control mr-sm-2 rounded-pill"
                type="search"
                placeholder="Buscar..."
                aria-label="Search"
              />
            </div>
            <div className="navbar-nav">
              {isLogged ? (
                <div className="d-flex ms-auto gap-2">
                  <Link to="/feed">
                    <button
                      type="button"
                      className="btn btn-dark rounded-circle"
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </Link>

                  <Link to="/feed">
                    {" "}
                    <button
                      type="button"
                      className="btn btn-dark rounded-circle"
                    >
                      <i className="fa fa-home"></i>
                    </button>
                  </Link>

                  <Link to="/feed">
                    {" "}
                    <button
                      type="button"
                      className="btn btn-dark rounded-circle"
                    >
                      <i className="fa fa-bell"></i>
                    </button>
                  </Link>

                  <div clclassNameass="nav-item dropdown">
                    <a
                      href="#"
                      data-toggle="dropdown-menu"
                      class="nav-link dropdown-toggle user-action"
                    >
                      <img src={ImageProfile} className="avatar" alt="Avatar" />{" "}
                    </a>
                    <div className="dropdown-menu">
                      <a href="#" className="dropdown-item">
                        <i className="fa fa-user-o"></i> Profile
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="d-flex ms-auto gap-2">
                  <Link to="/login">
                    <button type="button" className="btn btn-dark rounded-pill">
                      Iniciar sesión
                    </button>
                  </Link>
                  <Link to="/register">
                    <button type="button" className="btn btn-dark rounded-pill">
                      Registrarse
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
