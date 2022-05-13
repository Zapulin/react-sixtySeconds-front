import React from "react";
import Signin from "./Signin";

export default function LoginModal() {
  return (
    <div className="modal fade" id="loginModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header text-center" style={{ backgroundColor: "#403D3D"}}>
            <h4 className="modal-title w-100 font-monospace fw-bold text-light">Iniciar Sesión</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body mx-3">
          <Signin />
          </div>
        </div>
      </div>
    </div>
  );
}
