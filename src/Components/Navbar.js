import logo from "../Resources/images/dark_logo.svg";
import "../stylesheets/Navbar.css";
import SearchBar from "./SearchBar";
import RegisterLogin from "./RegisterLogin";


function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse">
            {/* Navbar brand */}
            <a className="navbar-brand mt-2 mt-lg-0" href="/">
              <img
                src={logo}
                width="60"
                height="60"
                className=" d-inline-block"
                alt=""
              />
            </a>
            <div className="form my-2 my-lg-0 mx-auto">
              <SearchBar />
            </div>
            <button
              className="navbar-toggler ml-auto align-items-end"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars"></i>
            </button>
            <RegisterLogin />
            <div className="navbar-nav"></div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
