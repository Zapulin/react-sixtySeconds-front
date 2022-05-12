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

  const [profileData, setProfileData] = useState({
    userId: 0,
    followers: 0,
    following: 0,
    name: "",
    posts: []
  });
  const params = useParams();

  useEffect(() => {
    getProfile(params.id);
  }, [params.id]);
  
  const getProfile = async (id) => {
    const response = await getProfileFromApi(id);
    setProfileData({
      userId: response.data.userId,
      followers: response.data.followers,
      following: response.data.following,
      name: response.data.name,
      posts: response.data.posts
    })
  };  

  return(
    <div>
      <HeaderProfile profile={profileData} key={profileData.userId} />
      <div>
      {
          profileData.posts.map((post) =>
          <Post post={post} key={post.id}/>
          )
        }
      </div>  
    </div>
  );
}

export default Profile;