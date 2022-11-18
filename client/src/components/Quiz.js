import React from "react";
import "../styles/Quiz.css";

import data from "./data";

export default function Quiz() {

    const [start, setstart] = React.useState(false);

    const [database, setdata] = React.useState({
        index: -1,
        DATA: [],
    });




    function handleClick(e) {
        console.log(e.target.value);
    }


    function startQuiz() {
        //fecth 
        setdata(() => {
            return {
                index: 0,
                DATA: data,
            }
        })

        setstart(true);
    }

    return (
        <div className="quiz-container">

            {!start ? <div className="start-cont">

                <button className="start-btn" onClick={startQuiz}> Start Quiz</button>

            </div>
                ://else
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

                        </div>

                        <div className="navigation-button">
                            <button className="btn">Prev</button>
                            <button className="btn">Next</button>
                            <button className="btn">Submit</button>
                        </div>

                    </div>
                </div>
            }
        </div>
    );
}