import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import home from './pages/home';
import list from './pages/list';

function App() {
    return (
        <div className="app">
            <header>
                <Link to="/home">home</Link>
                <Link to="/list">list</Link>
            </header>
            <div className="main-wrap">
                <Route exact path="/" component={home} />
                <Route exact path="/home" component={home} />
                <Route exact path="/list" component={list} />
            </div>
        </div>
    );
}

export default App;
