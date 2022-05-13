import React from "react";
import Signup from "./Signup";

export default function RegisterModal() {
  return (
    <div className="modal fade" id="registerModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header text-center" style={{ backgroundColor: "#403D3D"}}>
            <h4 className="modal-title w-100 font-monospace fw-bold text-light">
              Registrarse
            </h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div className="modal-body mx-3">
            <Signup />
          </div>
        </div>
      </div>
    </div>
  );
}
