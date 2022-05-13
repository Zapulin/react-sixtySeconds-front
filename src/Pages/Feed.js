import React, { useState, useEffect } from "react";
import "../App.css";

//API
import { getPostsFromAPi } from "../Services/Api";

//Components
import Post from "../Components/Post";
import Categories from "../Components/Categories";
import Publish from "../Components/Publish";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await getPostsFromAPi();
    setPosts(response.data);
  };

  const categoryFilter = async (category) => {
    const response = await getPostsFromAPi();
    const updatedPosts = response.data.filter(
      (post) => post.category === String(category)
    );
    setPosts(updatedPosts);
  };

  return (
    <div className="container p-5 mt-3">
      <div className="my-4">
        <Categories categoryFilter={categoryFilter} />
      </div>
      <div className="d-flex flex-column justify-content-center gap-2 mx-md-5 mx-lg-5 px-lg-5">
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
      <Publish />
    </div>
    
  );
}

export default Feed;
