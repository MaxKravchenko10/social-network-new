import React from "react";
import Profile from './ProfileComponent.module.css';
import MyPosts from "./MyPosts/MyPosts";

const ProfileComponent = () => {
    return (
        <div>
            <img src="https://i.ytimg.com/vi/Mg_T7uty98A/maxresdefault.jpg" alt="meditation"/>
            <div>Avatar + description</div>
            <MyPosts />
        </div>
    )
};

export default ProfileComponent;