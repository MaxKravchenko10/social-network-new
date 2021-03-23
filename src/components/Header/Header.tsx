import React from "react";
import header from './Header.module.css'

const Header = () => {
    return (
        <header className={header.header}>
            <img src="https://i.ya-webdesign.com/images/lizard-svg-vector-5.png" alt="Screenshot-3"/>
            <h1>CHILDREN'S ENTERTAINMENT CENTER</h1>
        </header>
    )
};

export default Header;