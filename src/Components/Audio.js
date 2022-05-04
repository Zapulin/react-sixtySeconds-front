import React, { Component } from 'react'

export default class Audio extends Component {

  //console.log(this.props.url)

  render() {
    return (
      <div>
        <audio controls>
          <source src={require("../Samples/AUDIOMP3.mp3")} type="audio/mpeg"/>
          Your browser does not support the audio tag.
        </audio>
      </div>
    )
  }
}
