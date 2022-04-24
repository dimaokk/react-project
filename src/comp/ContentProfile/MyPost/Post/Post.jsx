import React from "react";
import postsCss from "./Posts.module.css";

const Post = (props) => {
    return (
        <div className={postsCss.card}>
            <div className={postsCss.block}>
                <img
                    className={postsCss.img}
                    src="https://handcraftguide.com/sites/default/files/styles/original___water/public/sketchingforkids1handcraftguide.com__0.jpg?itok=CiUYaUmE"
                    alt=""
                />

                <div className={postsCss.massage}>{props.message}</div>
            </div>

            <span>like {props.like}</span>
        </div>
    );
};

export default Post;
