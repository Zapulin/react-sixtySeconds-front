import React, { Component } from "react";
import { useParams } from "react-router-dom";
//Components

import HeaderProfile from "../Components/HeaderProfile";
import Posts from "../Components/Posts";
import { getProfileById } from "../services/profile";
// import Login from '../Components/Login'
export default function Profile() {
  const { id } = useParams();

  const profile = getProfileById(id);

  return (
    <div>
      <HeaderProfile profile={profile} />
      <Posts userId={id} />
    </div>
  );
}
