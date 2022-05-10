import React, { Component } from "react";

export default class Likes extends Component {
  render() {
    const { likesCount, dislikesCount } = this.props;

    return (
      <div className="d-flex gap-2 mx-2">
        <i className="fa fa-thumbs-up">{likesCount}</i>
        <i className="fa fa-thumbs-down">{dislikesCount}</i>
      </div>
    );
  }
}
