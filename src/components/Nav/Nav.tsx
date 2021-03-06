import React from "react";
import nav from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={nav.nav}>
            <div>
                <a href="/profile">Profile</a>
            </div>
            <div>
                <a href="/dialogsn">Messages</a>
            </div>
            <div>
                <a href="">News</a>
            </div>
            <div>
                <a href="">Music</a>
            </div>
            <div>
                <a href="">Settings</a>
            </div>
        </nav>
    )
};

export default Nav;