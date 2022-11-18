import React from "react";
import '../styles/Main.css';

export default function Main() {
    return (
        <div className="main-body" >
            <div className="main-body-landing">
                <div className="landing-text">
                    <h2>CRAT A FREE</h2>
                    <h1>QUIZ NOW</h1>
                    <p>QuizApp is a free online quiz maker that allows you to create and manage your own quizzes. You can create a quiz in minutes and start sharing it with your students or friends.</p>
                    <button>Get Started</button>
                </div>
                <div className="landing-img">
                    <img src={require('../img/study.png')} alt='landing' />
                </div>
            </div>

            <div className="about-container">
                <h1> About </h1>

            </div>







        </div>
    );
}