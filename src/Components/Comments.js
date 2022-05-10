import React, { Component } from "react";

//Components
import Post from "./Post";

export default class Comments extends Component {
  render() {
    const { comments } = this.props;

    return comments.map((comment) => (
      <Post post={comment} key={comment.commentId} isComment />
    ));
  }
}
