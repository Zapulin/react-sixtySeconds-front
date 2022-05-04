import React, { useState } from 'react';

//Json
import postsJson from '../Samples/posts.json';

//Components
import Post from '../Components/Post';
import CategoryBtn from '../Components/CategoryBtn';

function Feed() {

  const [posts, setPosts] = useState(postsJson);

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
    </div>
  )
}

export default Feed;
