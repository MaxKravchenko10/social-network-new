import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Nav from "./components/Nav/Nav";
import ProfileComponent from "./components/Profile/ProfileComponent";
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';


const App = () => {
    return (
        //создаем роутинг, чтобы компонента роут жила, нужно сделать обрамление компонентой BrowserRouter
        <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className="app-wrapper-content">
                <Route path='/ProfileComponent' component={ProfileComponent}/>
                <Route path='/Dialogs' component={Dialogs}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
