import React, { Component } from 'react'

//Components
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default class Home extends Component {
  render() {
    return (
      <div>
          <Navbar/>
          <div className=''>
            <div className=''>
                <h1>The Audio Social Media</h1>
                <h3>Aún no eres miembro? Registrate GRATIS</h3>
                <button>Iniciar sessión</button>
                <button>Continuar sin registrarse</button>
            </div>
          </div>
          <div>
              <div>
                  <h3>¿Por qué 60"?</h3>
                  <ul>
                      <li><span>La nueva red social de audio 60" ¡Es la última moda!</span></li>
                      <li><span>Comparte tu contenido con tus propias palabras</span></li>
                      <li><span>¡No te lo pierdas!</span></li>
                  </ul>
              </div>
              <div>
                  <h3>¿Cómo funciona?</h3>
                  <ul>
                      <li><span>Graba lo que te apetezca</span></li>
                      <li><span>Aplica un tema para aumentar visibilidad</span></li>
                      <li><span>Elige quien puede verlo</span></li>
                      <li><span>Comparte</span></li>
                  </ul>
              </div>
          </div>
          <Footer/>
      </div>
    )
  }
}
