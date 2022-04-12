import React, { Component } from 'react'

//Components
import Comment from './Comment'

export default class Comments extends Component {
  
  render() {

    const {comments} = this.props

    return comments.map(comment => 
    <Comment comment={comment} key={comments.commentId /*Possible error no commentid=undefined*/}/>);

  }
}
