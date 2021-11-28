/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
// import contClass from './Content.module.css';
import MyPostst from './MyPost/MyPost';
import Profile from './Profile/Profile';

const Content = (props) => {
  return (
    <div >
      <Profile />
      <MyPostst postsData={props.state.posts} addPost={props.addPost} />
    </div>
  )
}

export default Content;