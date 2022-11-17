import React from "react";

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
                    <a href="/signin">Sign In</a>
                </div>
            </nav>
        </div>
    );
}