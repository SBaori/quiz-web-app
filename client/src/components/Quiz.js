import React from "react";
import "../styles/Quiz.css";

export default function Quiz() {

    function handleClick(e) {
        console.log(e.target.value);
    }

    return (
        <div className="quiz-container">
            <div className="quiz">
                <div className="quiz-header">
                    <h1>Quiz</h1>
                </div>
                <div className="quiz-body">
                    <div className="quiz-body-question">
                        <h2>Question 1</h2>
                        <p>What is the capital of France?</p>
                    </div>
                    <div className="quiz-options-body">

                        <input onClick={handleClick} type="radio" id="option1" name="option" value="paris" />
                        <label htmlFor="option1">Paris</label>


                        <input onClick={handleClick} type="radio" id="option2" name="option" value="london" />
                        <label htmlFor="option2">London</label>



                        <input onClick={handleClick} type="radio" id="option3" name="option" value="berlin" />
                        <label htmlFor="option3">Berlin</label>

                    </div>

                    <div className="navigation-button">
                        <button className="btn">Prev</button>
                        <button className="btn">Next</button>
                        <button className="btn">Submit</button>
                    </div>

                </div>
            </div>
        </div>
    );
}