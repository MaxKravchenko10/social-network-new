import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Nav from "./components/Nav/Nav";
import ProfileComponent from "./components/Profile/ProfileComponent";
import Dialogs from './components/Dialogs/Dialogs';

function App() {
    // @ts-ignore
    return (
        <div className="app-wrapper">
            <Header />
            <Nav />
            <ProfileComponent />
            <Dialogs />
        </div>
    );
}

export default App;
