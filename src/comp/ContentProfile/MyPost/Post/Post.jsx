import React from 'react';
import postsCss from './Posts.module.css';

const Post = (props) => {
  return (
    <div className >
      <div className={postsCss.item}>
        <img className={postsCss.img} src="https://image.flaticon.com/icons/png/512/147/147144.png" alt="" />
        {props.massage}
        <div>
          <span>
            like {props.like}
          </span>
        </div>
      </div>
    </div>

  )
}

export default Post;