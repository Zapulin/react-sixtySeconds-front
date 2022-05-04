import React, { Component } from 'react'

//Components
import Recorder from './Recorder'

//Audio Samples
import audioMp3 from '../Samples/AUDIOMP3.mp3'
import audioOgg from '../Samples/AUDIOOGG.ogg'


export default class Audio extends Component {

  //TODO: Componente audio tiene que recibir ID para renderizar


  render() {
    return (
      <div>
        <audio controls>
          {
            console.log(this.props.url)
          }
          <source src={require("../Samples/AUDIOMP3.mp3")} type="audio/mpeg"/>
          Your browser does not support the audio tag.
        </audio>
      </div>
    )
  }
}
