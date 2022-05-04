import React, { useState } from 'react';
import '../stylesheets/Post.css';

//Components
import IconProfile from './IconProfile';
import Audio from './Audio';
import Comment from './Comment';
import Likes from './Likes';

function PostTest({ post }) {

  const [view, setView] = useState(false);

  const viewComments = () => {
    if (view) {
      setView(false);
    }else{
      setView(true);
    }
  }

  return(
    <div>
        <IconProfile/>
        <p>
          <span>{post.author}</span>
          <span>@{post.userName}</span>
          <span>{post.creationDate }</span>
          <span> dijo...</span>
        </p>
        <br/>
        <p>{post.title}</p>
        <br/>
        <Audio url={post.audioUrl}/>
        <Likes isLike={true} likes={post.likes}/>
        <Likes isLike={false} likes={post.dislikes}/>
        <button onClick={viewComments}>Commentarios {post.comments.length}</button>
        <div className={ view ? '' : 'hide-comments' }>
          {
            post.comments.map((comment) =>
            <Comment comment={comment} key={comment.commentId}/>
            )
          }
        </div>
      </div>
  );
}

export default PostTest;
