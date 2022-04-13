function CardImageHome() {
  return (
    <div
      className="card rounded m-4 p-2 position-absolute top-50"
      style={{ background: "#FF8638" }}
    >
      <div
        class="card position-relative"
        style={{ width: "25rem", background: "#FF8638" }}
      >
        <div class="card-body">
          <h5 class="card-title">The Audio Social Media</h5>
          <p class="card-text">¿Aún no eres miembro?</p>
          <p class="card-text">
            ¡Regístrate <span>GRATIS!</span>
          </p>

          <div className="d-flex justify-content-between">
            <button className="btn btn-dark rounded-pill">
              {" "}
              Iniciar sesión
            </button>
            <button className="btn btn-dark ms-2 rounded-pill">
              {" "}
              Continuar sin registrarse{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardImageHome;
