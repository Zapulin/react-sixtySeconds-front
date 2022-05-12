import React, { useState, useEffect } from "react";
import defaultPosts from "../Samples/posts.json";
import { generateCreationDateSinceText } from "../utils/posts";
import Post from "./Post";

export default function Posts() {
  const [posts, setPosts] = useState(defaultPosts);

  useEffect(() => {
    mapPosts(posts);
  }, []);

  function mapPosts() {
    const mappedPosts = posts.map((post) => {
      post.creationDateText = generateCreationDateSinceText(post.creationDate);
      post.commentsExpanded = false;
      return post;
    });
    setPosts(mappedPosts);
  }

  function onChangePost(newPost) {
    const newPosts = posts.map((post) => {
      if (post.id === newPost.id) {
        return newPost;
      }
      return post;
    });
    setPosts(newPosts);
  }

  return posts.map((post) => {
    return (
      <div className="card w-100 p-3">
        <Post
          post={post}
          key={post.id}
          onChangeCommentExpanded={(post) => onChangePost(post)}
        />
      </div>
    );
  });
}
