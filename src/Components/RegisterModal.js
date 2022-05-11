import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function RegisterModal() {
  return (
    <div className="modal fade" id="registerModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h4 className="modal-title w-100 font-monospace fw-bold">Registrarse</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <form>
            <div className="modal-body mx-3">
              <div className="md-form mb-3">
                <label className="font-monospace fw-bold">Nombre</label>
                <input type="text" className="form-control validate" />
              </div>
              <div className="md-form mb-3">
                <label className="font-monospace fw-bold">Apellidos</label>
                <input type="text" className="form-control validate" />
              </div>
              <div className="md-form mb-3">
                <label className="font-monospace fw-bold">Nombre de usuario</label>
                <input type="text" className="form-control validate" />
              </div>
              <div className="md-form mb-3">
                <label className="font-monospace fw-bold">Email</label>
                <input type="email" className="form-control validate" />
              </div>
              <div className="md-form mb-3">
                <label className="font-monospace fw-bold">Contraseña</label>
                <input type="password" className="form-control validate" />
              </div>
              <div className="md-form mb-3">
                <label className="font-monospace fw-bold">Confirmar Contraseña</label>
                <input
                  type="passwordConfirm"
                  className="form-control validate"
                />
              </div>
              <div>
                <label className="m-2 font-monospace fw-bold">
                  Fecha de nacimiento <input type="date" />{" "}
                </label>
              </div>
              <div className="justify-items-center d-flex">
                <input
                  className="form-check-input m-2"
                  type="checkbox"
                  value=""
                />
                <label className="form-check-label font-monospace fw-bold m-1">
                  Acepto la política de privacidad
                </label>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                type="submit"
                className="btn w-50 rounded-pill container-fluid fw-bold text-light"
                style={{ backgroundColor: "#403D3D" }}
              >
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
