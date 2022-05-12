import React, { Component } from "react";

//Components
import Post from "./Post"

export default class Comments extends Component {
  render() {
    let { comments } = this.props;
    if (!comments) comments = [];

    return comments.map((comment) => (
      <Post post={comment} key={comment.commentId} isComment />
    ));
  }
}
