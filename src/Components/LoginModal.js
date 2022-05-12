import React from "react";

export default function LoginModal() {
  return (
    <div className="modal fade" id="loginModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h4 className="modal-title w-100 font-monospace fw-bold">Iniciar Sesión</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body mx-3">
            <div className="md-form mb-2">
              <i className="fa fa-envelope p-2"></i>
              <label htmlFor="defaultForm-email" className="font-monospace fw-bold">
                Email
              </label>
              <input
                type="email"
                id="defaultForm-email"
                className="form-control validate"
              />
            </div>

            <div className="md-form mb-4">
              <i className="fa fa-key p-2"></i>
              <label htmlFor="defaultForm-pass" className="font-monospace fw-bold">
                Contraseña
              </label>
              <input
                type="password"
                id="defaultForm-password"
                className="form-control validate"
              />
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <button
              type="submit"
              className="btn w-50 rounded-pill container-fluid fw-bold text-light"
              style={{ backgroundColor: "#403D3D" }}
            >
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
