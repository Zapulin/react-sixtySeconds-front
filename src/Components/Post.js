import React, { Component } from 'react'

//Components
import IconProfile from './IconProfile'
import Audio from './Audio'
import Comments from './Comments'

export default class Post extends Component {
  render() {

    const {post} = this.props

    return (
      <div>
        <IconProfile/>
        <p>
          <span>{post.author}</span>
          <span>@{post.userName}</span>
          <span>{post.creationDate /*TODO: funcion date*/}</span>
          <span> dijo...</span>
        </p>
        <br/>
        <p>{post.title}</p>
        <br/>
        <Audio/>
        <p>Commentarios {post.comments.length}</p>
        <br/>
        <br/>
        <Comments comments={post.comments}/>
      </div>
    )
  }
}
