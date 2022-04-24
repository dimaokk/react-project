import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { PostReduxForm } from "./PostForm/PostForm";

const MyPostst = (props) => {
  let postsElement = props.posts.map((p) => (
    <Post key={p.like} message={p.message} like={p.like} />
  ));

  const addPost = (values) => {
    props.addPosts(values.postBody);
  };
  return (
    <div className={styles.my_post}>
      <div className={styles.addPostblock}>
        <h2 className={styles.title}>My posts</h2>
        <PostReduxForm onSubmit={addPost} />
      </div>
      <div className>{postsElement}</div>
    </div>
  );
};

export default MyPostst;
