import React from "react";
import post from "./Post.module.css";

const Post = (props: any) => {
    // const postsType = {
    //     message: 'string',
    //     like: number
    // }

    return (
        <div className={post.div}>
            <img src="https://rocket-league.com/content/media/users/avatar/600px/ea145905661532267033.png"/>
            <span>{props.message}</span>
            <div>{props.like} like</div>
        </div>
    )
};

export default Post;