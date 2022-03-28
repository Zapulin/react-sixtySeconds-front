import React, { Component } from 'react'

//Components
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Categories from '../Components/Categories'
import Posts from '../Components/Posts'

export default class Feed extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Categories/>
        <Posts />
        <Footer/>
      </div>
    )
  }
}
