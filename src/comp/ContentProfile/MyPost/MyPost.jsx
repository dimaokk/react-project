import React from "react";
import myPostsClass from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPostst = (props) => {
    let postsElem = props.posts.map((p) => (
        <Post massage={p.massage} like={p.like} />
    ));

    let newPostEl = React.createRef();

    let addPosts = () => {
        let text = newPostEl.current.value;
        props.addPost(text);
    };

    return (
        <div className={myPostsClass.my_post}>
            <h2>My posts</h2>
            <div>
                <textarea
                    className={myPostsClass.input}
                    placeholder="Введите текст"
                    ref={newPostEl}
                />
                <button onClick={addPosts}>Add Post</button>
            </div>
            <div className>{postsElem}</div>
        </div>
    );
};

export default MyPostst;
