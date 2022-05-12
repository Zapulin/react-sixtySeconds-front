import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

//API
import { getProfileFromApi } from '../Services/Api';

//Components
import HeaderProfile from '../Components/HeaderProfile';
import Post from '../Components/Post';
import Login from '../Components/Login';

//Json
import profileJson from '../Samples/profile.json';
import '../App.css';
import Publish from '../Components/Publish';

function Profile() {

  const [profileData, setProfileData] = useState(profileJson);
  const params = useParams();

  useEffect(() => {
    getProfile(params.id);
  }, [params.id]);
  
  const getProfile = async (id) => {
    const response = await getProfileFromApi(id);
    //setUserData(response.data)
  };  

  return(
    <div>
        <HeaderProfile profile={profileData} key={profileData.userId}/>
        <div>
        {
          /*
          profileData.posts.map((post) =>
          <Post post={post} key={post.id}/>
          )
          */
        }
        </div>
        <button
              className="btn rounded-pill fw-bold text-light"
              style={{ backgroundColor: "#403D3D" }}
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalLong"
              data-bs-backdrop="false"
            >
              ver modal
            </button>
        <Publish />
      </div>
  );
}

export default Profile;