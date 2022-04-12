import React, { Component } from 'react'

//Components
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeaderProfile from '../Components/HeaderProfile'
import Posts from '../Components/Posts'

//Json
import data from '../Samples/profile.json'


export default class Profile extends Component {

  state = {
    data: data
  }

  render() {
    return (
      <div>
        <Navbar/>
        <HeaderProfile profile={data} key={data.userId}/>
        <Posts posts={data} key={data.userId}/>
        <Footer/>
      </div>
    )
  }
}
