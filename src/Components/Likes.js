import React, { useState } from "react";

function Likes({ likes, isLike }) {
  const [numLikes, setLike] = useState(likes);
  const [alreadyLiked, setLiked] = useState(false);

  const likeController = () => {
    if (!alreadyLiked) {
      setLike(numLikes + 1);
      setLiked(true);
    }
  };

  return (
    <div className="d-flex gap-2">
      <i
        className={isLike ? "fa fa-thumbs-up" : "fa fa-thumbs-down"}
        onClick={likeController}
      />
      <span>{numLikes}</span>
    </div>
  );
}

export default Likes;
