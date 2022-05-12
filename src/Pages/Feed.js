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
    if(response.data.error){
      console.log(response.data.error)
    }else{
      setPosts(response.data)
    }
  };

  const categoryFilter = async (category) => {
    const response = await getPostsFromAPi();
    console.log(category)
    const updatedPosts = response.data.filter(post => post.category === String(category));
    setPosts(updatedPosts)
  }

  return (
    <div>
      <div >
        <CategoryBtn 
          text='Humor'
          fnOnClick={categoryFilter} />
        <CategoryBtn 
          text='Deportes'
          fnOnClick={categoryFilter} />
        <CategoryBtn 
          text='Noticias'
          fnOnClick={categoryFilter} />
        <CategoryBtn 
          text='Ciencia'
          fnOnClick={categoryFilter} />
        <CategoryBtn 
          text='Musica'
          fnOnClick={categoryFilter} />
        <CategoryBtn 
          text='Cultura'
          fnOnClick={categoryFilter} />
        <CategoryBtn 
          text='Politica'
          fnOnClick={categoryFilter} />
        <CategoryBtn 
          text='Ocio'
          fnOnClick={categoryFilter} />          
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
