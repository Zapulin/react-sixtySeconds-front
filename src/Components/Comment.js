import React, { Component } from "react";

//Components
import IconProfile from "./IconProfile";
import Audio from "./Audio";
import Likes from "./Likes";

export default class Comment extends Component {
  render() {
    const { comment } = this.props;

    return (
      <div className="row">
        <div className="d-flex justify-content-center align-items-center col-sm-12 col-md-4 col-lg-2">
          <IconProfile className="rounded-pill img-fluid" width="155" />
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2">
          <div className="rounded text-dark stats p-2">
            <h4 className="mb-0 mt-0">
              {comment.author}
              <span> dijo..{comment.creationDateText}</span>
            </h4>
            <span>@{comment.userName}</span>
            <div className="p-2 mt-2 d-flex justify-content-between">
              <div>
                <div className="col-sm-12 col-md-2 col-lg-2">
                  <div className="d-flex flex-column">
                    <Audio id={comment.audioId} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-end"></div>
        <div className="w-100 d-flex justify-content-end">
          <div className="d-flex align-items-center">
            <Likes
              likesCount={comment.likes}
              dislikesCount={comment.dislikes}
            />
          </div>
        </div>
      </div>
    );
  }
}
