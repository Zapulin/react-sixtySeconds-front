import React, { Component } from "react";

import ImageProfile from "../Samples/profileImg1.jpg";
//import "./../stylesheets/Profile.css";

export default class HeaderProfile extends Component {
  render() {
    const { profile } = this.props;
    //console.log("esto es profile" + profile.map(data => data.name))

    return (
      <div className="container mt-5 d-flex justify-content-center">
        <div className="card w-50 p-3">
          <div className="row">
            <div className="image col-4">
              <img
                src={ImageProfile}
                alt={profile[0].name}
                className="rounded-pill"
                width="155"
              />
            </div>
            <div className="col-4">
              <div class="rounded text-dark stats p-2">
              <h4 className="mb-0 mt-0">{profile[0].name}</h4>

              <span>{profile[0].name}</span>

              <div className="p-2 mt-2 d-flex justify-content-between">
                <div>
                  <div className="d-flex flex-column">
                    <span className="followers">Seguidores</span>{" "}
                    <span className="nfollowers">{profile[0].followers}</span>
                  </div>
                  <div className="d-flex flex-column">
                    <span className="following">Seguidos</span>{" "}
                    <span className="nfollowing">{profile[0].following}</span>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <button className="btn btn-dark rounded-pill">
                Editar Perfil
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
