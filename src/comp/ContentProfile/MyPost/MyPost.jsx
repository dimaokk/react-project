import React from "react";
import myPostsClass from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPostst = (props) => {
    let postsElement = props.posts.map((p) => (
        <Post message={p.message} like={p.like} />
    ));

    let newPostElement = React.createRef();

    let onAddPosts = () => {
        props.addPosts();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={myPostsClass.my_post}>
            <div className={myPostsClass.addPostblock}>
                <h2 className={myPostsClass.title}>My posts</h2>
                <div>
                    <textarea
                        onChange={onPostChange}
                        className={myPostsClass.input}
                        placeholder="Введите текст"
                        ref={newPostElement}
                        value={props.newPostText}
                    />
                    <button onClick={onAddPosts}>Add</button>
                </div>
            </div>

            <div className>{postsElement}</div>
        </div>
    );
};

export default MyPostst;
