
import "../stylesheets/Navbar.css";

function NavbarHome() {
	
	return (
    
    <>
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
          {/* <div class="navbar-nav">
                  <a href="#" class="nav-item nav-link active">Home</a>
                  <a href="#" class="nav-item nav-link">About</a>
                  <a href="#" class="nav-item nav-link">Products</a>
              </div> */}
          {/* Buttons */}
          <div className="d-flex ms-auto gap-2">
            {/* <input type="text" class="form-control me-sm-2" placeholder="Search"/> */}
            <button type="button" className="btn btn-dark rounded-pill">
              Iniciar sesión
            </button>
            <button type="button" className="btn btn-dark rounded-pill">
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </nav>

    <header className="p-3 text-white" id="navbar-color">
      <div className="row">
        {/* <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">

    <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
     
    </form>
    </ul> */}
        <div className="col-5"></div>
        <div className="col-4"></div>

        <div className="col-3 d-lg-flex gap-2">
          {/* <button type="button" class="btn btn-dark rounded-pill">
                Iniciar sesión
              </button> */}

          {/* <button type="button" class="btn btn-dark rounded-pill">
                Registrarse
              </button> */}
        </div>
      </div>
    </header>
  </>
);
}


  );
}

export default NavbarHome;
