import React, { Component } from 'react'

//Components
import IconProfile from './IconProfile'
import Audio from './Audio'
import Comment from './Comment'

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
        <Audio id={post.audioId}/>
        <p>Commentarios {post.comments.length}</p>
        <br/>
        <br/>
        <div>
          {
            post.comments.map((comment) =>
            <Comment comment={comment} key={comment.commentId}/>
            )
          }
        </div>
      </div>
    )
  }
}
