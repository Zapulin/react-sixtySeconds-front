import React, { Component } from "react";

//Components
import IconProfile from "./IconProfile";
import Audio from "./Audio";
import Comments from "./Comments";
import { findCategoryColorByName } from "../lib/DefaultCategories";
import Likes from "./Likes";

export default class Post extends Component {
  render() {
    const { post, isComment, onChangeCommentExpanded } = this.props;
    // Función expandir comentarios
    function onClickExpandComments(post) {
      post.commentsExpanded = !post.commentsExpanded;
      onChangeCommentExpanded(post);
    }

    return (
      <div className={isComment ? "ms-4" : ""}>
        <div className="card p-3">
          <div className="row">
            <div className="d-flex justify-content-center align-items-center col-sm-12 col-md-4 col-lg-2">
              <IconProfile
                className="img-fluid rounded-pill col-md-4 px-0"
                width="155"
              />
            </div>
            <div className="col-6">
              <div className="rounded text-dark stats p-2">
                <h4 className="mb-0 mt-0">
                  {post.author}
                  <span> dijo..{post.creationDateText}</span>
                </h4>
                <span>@{post.userName}</span>
                <div className="p-2 mt-2 d-flex justify-content-between">
                  <div>
                    <div className="col-sm-12 col-md-2 col-lg-2"></div>
                    <div className="d-flex flex-column">
                      <span className="card-title">{post.title}</span>
                      <Audio id={post.audioId} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-2 col-lg-4 d-flex justify-content-end">
              <div></div>
              <span
                className="px-2 rounded-pill text-white"
                style={{
                  backgroundColor: findCategoryColorByName(post.category),
                  height: "25px",
                }}
              >
                {post.category}
              </span>
            </div>
            <div className="w-100 d-flex justify-content-end">
              <div className="d-flex align-items-center">
                {!isComment && (
                  
                  <button
                    type="button"
                    className="btn btn-transparent m-2"
                    onClick={() => onClickExpandComments(post)}
                  >
                    <div className="d-flex gap-2 align-items-center">
                      <Likes
                        likesCount={post.likes}
                        dislikesCount={post.dislikes}
                      />
                      <i className="fa fa-comment"></i>
                      <span>comentarios</span>
                      <i
                        className={
                          post.commentsExpanded
                            ? "fa fa-sort-up"
                            : "fa fa-sort-down"
                        }
                      ></i>
                    </div>
                  </button> 
                )}
              </div>
            </div>
            {post.commentsExpanded && (
              <div
                className="w-100"
                style={{ background: "rgba(0,0,0,.125)", height: "1px" }}
              ></div>
            )}
            <div className="mt-3">
              {post.commentsExpanded && <Comments comments={post.comments} />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
