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
import Publish from '../Components/Publish';

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
    const data = response.data

    if (!data.posts) {
      data.posts = []
    }
    setUserData(data);
  };

  const getProfile = async (id, token) => {
    const response = await getProfileFromApi(id, token);
    const data = response.data
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
           <div className="container d-flex flex-column gap-2 justify-content-center mb-4">
            {userData.posts.map((post) => (
              <Post post={post} key={post.id} />
            ))}
          </div>
        )}
      </div>)}
      <Publish />
    </div>
  );
}

export default Profile;