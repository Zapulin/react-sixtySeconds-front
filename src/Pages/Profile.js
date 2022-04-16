import React, { Component } from 'react'

//Components

import HeaderProfile from '../Components/HeaderProfile'
import Posts from '../Components/Posts'
import Login from '../Components/Login'

//Json
import data from '../Samples/profile.json'


export default class Profile extends Component {

  state = {
    data: data
  }

  render() {
    return (
      <div>
        <HeaderProfile profile={data} key={data.userId}/>
        <Posts posts={data} key={data.userId}/>
        <Login />
      </div>
    )
  }
}
