import React, { Component } from "react";
import photo_profile from "../Samples/profileImg1.jpg";
import profile from "../Samples/profile.json";
export default class IconProfile extends Component {
  render() {
    return (
      <div>
        <img
          src={photo_profile}
          alt={profile.profileImage}
          className="rounded-pill"
          width="155"
        ></img>
      </div>
    );
  }
}
