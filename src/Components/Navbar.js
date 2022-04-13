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
            <div class="navbar-nav">
              {isLogged ? (
                <div className="d-flex ms-auto gap-2">
                  <Link to="/feed">
                    <button
                      type="button"
                      className="btn btn-dark rounded-circle"
                    >
                      <i class="fa fa-plus"></i>
                    </button>
                  </Link>

                  <Link to="/feed">
                    {" "}
                    <button
                      type="button"
                      className="btn btn-dark rounded-circle"
                    >
                      <i class="fa fa-home"></i>
                    </button>
                  </Link>

                  <Link to="/feed">
                    {" "}
                    <button
                      type="button"
                      className="btn btn-dark rounded-circle"
                    >
                      <i class="fa fa-bell"></i>
                    </button>
                  </Link>

                  <div class="nav-item dropdown">
                    <a
                      href="#"
                      data-toggle="dropdown-menu"
                      class="nav-link dropdown-toggle user-action"
                    >
                      <img src={ImageProfile} class="avatar" alt="Avatar" />{" "}
                    </a>
                    <div class="dropdown-menu">
                      <a href="#" class="dropdown-item">
                        <i class="fa fa-user-o"></i> Profile
                      </a>
                      {/* <a href="#" class="dropdown-item"><i class="fa fa-user-o"></i> Profile</a></a>
					<a href="#" class="dropdown-item"><i class="fa fa-calendar-o"></i> Calendar</a></a>
					<a href="#" class="dropdown-item"><i class="fa fa-sliders"></i> Settings</a></a>
					<div class="dropdown-divider"></div>
					<a href="#" class="dropdown-item"><i class="material-icons">&#xE8AC;</i> Logout</a></a> */}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="d-flex ms-auto gap-2">
                  {/* <input type="text" class="form-control me-sm-2" placeholder="Search"/> */}
                  <button type="button" className="btn btn-dark rounded-pill">
                    Iniciar sesión ;
                  </button>
                  <button type="button" className="btn btn-dark rounded-pill">
                    Registrarse
                  </button>
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
