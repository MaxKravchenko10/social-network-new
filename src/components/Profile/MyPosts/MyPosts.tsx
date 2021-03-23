import React from "react";
import myposts from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={'myposts'}>
            <div>
                <div>My post</div>
                <div>
                    <textarea name="" id=""></textarea> <button>New post</button>
                </div>
            </div>
            <Post message={'Hi, how are yoy?'} like={12}/>
            <Post message={'This is my first post'} like={15}/>
            <Post message={'Hi, how are yoy?'} like={20}/>
        </div>
    )
};

export default MyPosts;