import React, { useState } from 'react';
import '../stylesheets/Post.css';

//Components
import IconProfile from './IconProfile';
import Audio from './Audio';
import Recorder from './Recorder';
import Comment from './Comment';
import Likes from './Likes';

function Post({ post }) {

  const [view, setView] = useState(false);
  const [showRecorder, setViewRecorder] = useState(false);

  const viewComments = () => {
    if (view) {
      setView(false);
    }else{
      setView(true);
    }
  }

  const viewRecorder = () => {
    if (showRecorder) {
      setViewRecorder(false);
    }else{
      setViewRecorder(true);
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
        <button onClick={viewRecorder}>Responder</button>
        <div className={ view ? '' : 'hide' }>
          {
            post.comments.map((comment) =>
            <Comment comment={comment} key={comment.commentId}/>
            )
          }
        </div>
        <div className={ showRecorder ? '' : 'hide' }>
        <Recorder/>  
        </div>
      </div>
  );
}

export default Post;
