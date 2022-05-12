import React, { Component } from "react";

export default class NotFound extends Component {
  render() {
    return (
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div class="d-flex flex-column">
          <h1 class=" d-flex justify-content-center fw-bold text-dark font-monospace  display-1">404
          </h1>
             <p class=" align-items-center fs-1 fw-bold p-2 fw-bold text-dark font-monospace">
            Not found
          </p>
    
            <button
              type="button"
              className="text-white fw-bold rounded-pill align-items-center p-2 m-4"
              style={{ backgroundColor: "#403D3D" }}
            >
              Home
            </button>
          </div>
        </div>
    );
  }
}
