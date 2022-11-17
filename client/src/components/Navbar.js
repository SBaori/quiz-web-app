import React from "react";
import '../styles/Navbar.css';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar-cont">

                <div className="navbar-navigate">
                    <div className="navbar-logo">
                        <h1>QuiZapp</h1>
                    </div>
                    <div className="navbar-link">
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                    </div>
                </div>


                <div className="navbar-sign">
                    <div className="myimg">
                        <img src={require('../img/girl_study.png')} alt='user' />
                    </div>
                    <button> Sign In</button>
                </div>
            </nav>
        </div>
    );
}