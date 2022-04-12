import React, { Component } from 'react'

//Components
import IconProfile from './IconProfile'
import Audio from './Audio'
import Likes from './Likes'

export default class Comment extends Component {


  render() {

    const {comment} = this.props

    return (
      <div>
        <IconProfile/>
        <p>
          <span>{comment.author}</span>
          <span>@{comment.userName}</span>
          <span>{comment.creationDate /*TODO: funcion date*/}</span>
          <span> Respondio...</span>
        </p>
        <Audio/>
        <Likes /> 
        <p>Dislikes {comment.dislikes}</p>
      </div>
    )
  }
}
