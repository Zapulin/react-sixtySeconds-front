import React, { useState, useEffect } from 'react';

//API
import { getPostFromAPi } from '../Services/Api';

//Json
import postsJson from '../Samples/posts.json';
import '../App.css';

//Components
import Post from '../Components/Post';
import CategoryBtn from '../Components/CategoryBtn';

function Feed() {

  const [posts, setPosts] = useState(postsJson);
  const [postData, setPostsFromApi] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);
  
  const getPosts = async () => {
    const response = await getPostFromAPi();
    setPostsFromApi(response.data)
  }; 

  const categoryFilter = category => {
    const updatedPosts = postsJson.filter(post => post.category === category.toLowerCase());
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
      <div className='test-data'>
        <ul>
          <li><h5>THIS DATA IS ONLY FOR TEST</h5></li>
        {
          postData.map((post) => {
            return <li>{post.title}</li>
          })
        }
        </ul>
      </div>
    </div>
  )
}

export default Feed;
