import React, { Component } from "react";

import ImageProfile from "../Samples/profileImg1.jpg";

export default class HeaderProfile extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="container mt-5 d-flex justify-content-center col-lg-12">
        <div className="card p-3 mt-5 mb-5">
          <div className="row">
            <div className="image col-4">
              <img
                src={ImageProfile}
                alt={profile.name}
                className="rounded-pill"
                width="155"
              />
            </div>
            <div className="col-4">
              <div className="rounded text-dark stats p-2">
                <h4 className="mb-0 mt-0">{profile.name}</h4>

                <span>{profile.name}</span>

                <div className="p-2 mt-2 d-flex justify-content-between">
                  <div>
                    <div className="d-flex flex-column">
                      <span className="fw-bold fs-5">Seguidores</span>{" "}
                      <span className="">{profile.followers}</span>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="fw-bold fs-5">Seguidos</span>{" "}
                      <span className="">{profile.following}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <button
                className="btn rounded-pill fw-bold text-light"
                style={{ backgroundColor: "#403D3D" }}
              >
                Editar Perfil
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
