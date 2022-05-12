import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

//API
import { getMyProfileFromApi, getProfileFromApi } from "../Services/Api";

//Components
import HeaderProfile from "../Components/HeaderProfile";
import Post from "../Components/Post";
import { getStorageToken } from "../Services/auth.js"

//Json
import "../App.css";

function Profile() {
  const [userData, setUserData] = useState({});
  const params = useParams();

  useEffect(() => {
    const token = getStorageToken();
    // Si tenemos id estamos en el perfil de otro usuario
    // Si no existe id accedemos a nuestros datos a traves del token
    if (params && params.id) {
      getProfile(params.id, token);
    } else {
      getMyProfile(token);
    }
  }, []);

  const getMyProfile = async (token) => {
    const response = await getMyProfileFromApi(token);
    const { data } = response.data
    if (!data.posts) {
      data.posts = []
    }
    setUserData(data);
  };

  const getProfile = async (id, token) => {
    const response = await getProfileFromApi(id, token);
    const { data } = response.data
    if (!data.posts) {
      data.posts = []
    }
    setUserData(data);
  };

  return (
    <div>     
     {userData && (
     <div>
        <HeaderProfile profile={userData} key={userData.userId} />
        {userData.posts && (
          <div>
            {userData.posts.map((post) => (
              <Post post={post} key={post.id} />
            ))}
          </div>
        )}
        {/* <Login />
        <div className="test-data">
          <h5>THIS DATA IS ONLY FOR TEST</h5>
          <h5 className="">{userData.name}</h5>
          <h5 className="">{userData.location}</h5>
          <h5 className="">{userData.blog}</h5>
          <h5 className="">{userData.company}</h5>
        </div> */}
      </div>)}
    </div>
  );
}

export default Profile;