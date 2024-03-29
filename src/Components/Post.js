import React, { useState } from "react";
import "../stylesheets/Post.css";
import { Link } from "react-router-dom";

//Components
import IconProfile from "./IconProfile";
import Audio from "./Audio";
import Recorder from "./Recorder";
import Comments from "./Comments";
import { findCategoryColorByName } from "../lib/DefaultCategories";
import Likes from "./Likes";

export default function Post({ post }) {
  const [view, setView] = useState(false);
  const [showRecorder, setViewRecorder] = useState(false);

  const viewComments = () => {
    if (view) {
      setView(false);
    } else {
      setView(true);
    }
  };

  const viewRecorder = () => {
    if (showRecorder) {
      setViewRecorder(false);
    } else {
      setViewRecorder(true);
    }
  };
  return (
    <div>
      <div className="card p-3">
        <div className="row">
          <div className="d-flex justify-content-center align-items-center col-sm-12 col-md-4 col-lg-4">
            <IconProfile userId={post.userId} className="img-fluid" width="155" />
          </div>
          <div className="col-sm-8 col-md-6 col-lg-6">
            <div className="rounded text-dark stats p-2">
              <h4 className="mb-0 mt-0">
                {post.author}
                <span> dijo..{post.creationDate}</span>
              </h4>
              <span>
                <Link to={"/profile/" + post.userId}>@{post.nick}</Link></span>
              <div className="p-2 mt-2 d-flex justify-content-between">
                <div>
                  <div className="col-sm-12 col-md-2 col-lg-2"></div>
                  <div className="d-flex flex-column">
                    <span className="card-title">{post.title}</span>
                    <Audio audioURL={post.audioURL} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-2 col-lg-2 d-flex justify-content-end">
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
        </div>
        <div className="d-md-flex d-lg-flex justify-content-end align-items-center">
          <div className="d-flex m-3 align-items-center gap-2 col-sm-12 col-md-auto col-lg-auto">
            <Likes likes={post.likes} isLike />
            <Likes likes={post.dislikes} />
          </div>
          <button
            type="button"
            className="btn btn-transparent m-1 col-sm-12 col-md-auto col-lg-auto"
            onClick={viewComments}
          >
            <div className="d-flex gap-2 align-items-center">
              <i className="fa fa-comment"></i>
              <span> {post.comments?.length} comentarios</span>
              <i className={view ? "fa fa-sort-up" : "fa fa-sort-down"}></i>
            </div>
          </button>
          <button
            type="button"
            className="btn btn-transparent m-1 col-sm-12 col-md-auto col-lg-auto"
            onClick={viewRecorder}
          >
            <div className="d-flex gap-2 align-items-center">
              <i className="fa fa-microphone"></i>
              <span>Responder</span>
            </div>
          </button>
        </div>
        <div className={showRecorder ? "" : "hide"}>
          <Recorder />
        </div>
        <div className={view ? "" : "hide"}>
          <Comments comments={post.comments} />
        </div>
      </div>
    </div>
  );
}
