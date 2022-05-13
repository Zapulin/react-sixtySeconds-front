import React, { Component } from "react";
import { getProfileImage } from "../lib/GetProfileImage";


function IconProfile({userId}){
  return (
    <div>
      <img
        src={getProfileImage(userId)}
        alt={userId}
        className="rounded-pill"
        width="155"
      ></img>
    </div>
  );
}

export default IconProfile;