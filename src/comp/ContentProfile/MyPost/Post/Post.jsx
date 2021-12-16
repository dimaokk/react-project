import React from "react";
import postsCss from "./Posts.module.css";

const Post = (props) => {
    return (
        <div className={postsCss.card}>
            <div className={postsCss.block}>
                <img
                    className={postsCss.img}
                    src="https://image.flaticon.com/icons/png/512/147/147144.png"
                    alt=""
                />

                <div className={postsCss.massage}>{props.message}</div>
            </div>

            <span>like {props.like}</span>
        </div>
    );
};

export default Post;
