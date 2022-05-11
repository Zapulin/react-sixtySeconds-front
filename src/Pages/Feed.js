import React, { useState, useEffect } from 'react';
import '../App.css';

//API
import { getPostsFromAPi } from '../Services/Api';

//Components
import Post from '../Components/Post';
import CategoryBtn from '../Components/CategoryBtn';

function Feed() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);
  
  const getPosts = async () => {
    const response = await getPostsFromAPi();
    setPosts(response.data)
  }; 

  const categoryFilter = async (category) => {
    const response = await getPostsFromAPi();
    const updatedPosts = response.data.filter(post => post.category === String(category));
    setPosts(updatedPosts)
  }

  return (
    <div>
      <div>
        <CategoryBtn 
          text='Humor'
          categoryFilter={categoryFilter} />
        <CategoryBtn 
          text='Deportes'
          categoryFilter={categoryFilter} />
        <CategoryBtn 
          text='Noticias'
          categoryFilter={categoryFilter} />
        <CategoryBtn 
          text='Ciencia'
          categoryFilter={categoryFilter} />
        <CategoryBtn 
          text='Musica'
          categoryFilter={categoryFilter} />
        <CategoryBtn 
          text='Cultura'
          categoryFilter={categoryFilter} />
        <CategoryBtn 
          text='Politica'
          categoryFilter={categoryFilter} />
        <CategoryBtn 
          text='Ocio'
          categoryFilter={categoryFilter} />          
      </div>
      <div>
        {
          posts.map((post) =>
          <Post post={post} key={post.id}/>
          )
        }
      </div>
    </div>
  )
}

export default Feed;
