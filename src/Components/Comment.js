import React, { useState } from 'react';
import '../stylesheets/Comment.css';

//Components
import IconProfile from './IconProfile'
import Audio from './Audio'
import Recorder from './Recorder'
import Likes from './Likes'

function Comment({comment}) {

  const [view, setView] = useState(false);

  const viewRecorder = () => {
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
          <span>{comment.author}</span>
          <span>@{comment.userName}</span>
          <span>{comment.creationDate }</span>
          <span> Respondio...</span>
        </p>
        <Audio url={comment.audioUrl}/>
        <Likes isLike={true} likes={comment.likes}/>
        <Likes isLike={false} likes={comment.dislikes}/>
        <button onClick={viewRecorder}>Responder</button>
        <div className={ view ? '' : 'hide-recorder' }>
        <Recorder/>  
        </div>
    </div>
  );
}
export default Comment;
/*
export default class Comment extends Component {


  render() {

    const {comment} = this.props

    return (
      <div>
        <IconProfile/>
        <p>
          <span>{comment.author}</span>
          <span>@{comment.userName}</span>
          <span>{comment.creationDate }</span>
          <span> Respondio...</span>
        </p>
        <Audio url={comment.audioUrl}/>
        <Likes isLike={true} likes={comment.likes}/>
        <Likes isLike={false} likes={comment.dislikes}/>
      </div>
    )
  }
}
*/