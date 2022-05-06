import React, { useState } from 'react';
import likeIcon from '../Resources/icons/like.png';
import dislikeIcon from '../Resources/icons/dislike.png';


function Likes({ likes, isLike}) {

  const [numLikes, setLike] = useState( likes );
  const [alreadyLiked, setLiked] = useState (false);

  const likeController = () => {
    if(!alreadyLiked) {
      setLike(numLikes + 1);
      setLiked(true);
    }
  };

  return (
    <div className=''>
      <img 
          className=''
          src={isLike ? likeIcon : dislikeIcon}
          alt='Like'
          onClick={likeController}/>
      <span>{numLikes}</span>
    </div>
  );
}

export default Likes;
