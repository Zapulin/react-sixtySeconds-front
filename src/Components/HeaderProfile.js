import React, { Component } from 'react'

export default class HeaderProfile extends Component {
  render() {
    return (
      <div className=''>
          <div>
              <p className=''>Nombre</p>
              <p className=''>@perfil</p>
              <div className=''>
                  <span>Seguidores</span>
              </div>
              <div className=''>
                  <span>Siguiendo</span>
              </div>
          </div>
      </div>
    )
  }
}
