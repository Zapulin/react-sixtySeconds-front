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

function Profile() {

  const [profileData, setProfileData] = useState(profileJson);
  const [userData, setUserData] = useState({});
  const params = useParams();

  useEffect(() => {
    getProfile(params.id);
  }, [params.id]);
  
  const getProfile = async (id) => {
    const response = await getProfileFromApi(id);
    setUserData(response.data)
  };  

  return(
    <div>
        <HeaderProfile profile={profileData} key={profileData.userId}/>
        <div>
        {
          profileData.posts.map((post) =>
          <Post post={post} key={post.id}/>
          )
        }
        </div>
        <Login />
        <div className="test-data">
          <h5>THIS DATA IS ONLY FOR TEST</h5>
          <h5 className="">{userData.name}</h5>
          <h5 className="">{userData.location}</h5>
          <h5 className="">{userData.blog}</h5>
          <h5 className="">{userData.company}</h5>
        </div>
      </div>
  );
}

export default Profile;