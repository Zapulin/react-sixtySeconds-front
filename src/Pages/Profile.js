import React, { Component } from 'react'

//Components
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        Pagina profile
        <Footer/>
      </div>
    )
  }
}
