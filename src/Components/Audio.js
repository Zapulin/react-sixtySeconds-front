import React, { Component } from 'react'

function Audio(props) {

  return (
    <div>
      <audio controls>
        <source src={props.url} type="audio/mpeg"/>
        Your browser does not support the audio tag.
      </audio>
    </div>
  )
}

export default Audio;