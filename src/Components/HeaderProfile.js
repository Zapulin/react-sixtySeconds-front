import React, { Component } from 'react'

import ImageProfile from '../Samples/profileImg1.jpg'


export default class HeaderProfile extends Component {


  render() {

    const {profile} = this.props
    //console.log("esto es profile" + profile.map(data => data.name))

    return (
      <div className=''>
          <div className=''>
            <img src={ImageProfile} alt={profile[0].name} width="200" height="200"/>
          </div>
          <div>
              <p className=''>{profile[0].name}</p>
              <p className=''>{profile[0].username}</p>
              <div className=''>
                  <span>Seguidores {profile[0].followers}</span>
              </div>
              <div className=''>
                  <span>Siguiendo {profile[0].following}</span>
              </div>
          </div>
      </div>
    )
  }
}
