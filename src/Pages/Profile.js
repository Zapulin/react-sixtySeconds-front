import React, { Component } from 'react';

//Components

import HeaderProfile from '../Components/HeaderProfile';
import Post from '../Components/Post';
import Login from '../Components/Login';

//Json
import profileJson from '../Samples/profile.json';


export default class Profile extends Component {

  state = {
    data: profileJson
  }

  render() {
    return (
      <div>
        <HeaderProfile profile={this.state.data} key={this.state.data.userId}/>
        <div>
        {
          this.state.data.posts.map((post) =>
          <Post post={post} key={post.id}/>
          )
        }
        </div>
        <Login />
      </div>
    )
  }
}
