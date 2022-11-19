import React from "react";
import "../styles/Quiz.css";
import Input from "./Input";
import Axios from "axios";
import data from "./data";
export default function Quiz() {

    const [start, setstart] = React.useState(false);

    const [database, setdata] = React.useState({
        index: -1,
        DATA: [],
    });

    function handleClick(myvalue) {
        console.log(myvalue);
    }

    async function startQuiz() {
        const d = await Axios.get("http://localhost:8000/question/test1");
        setdata(() => {
            return {
                index: 0,
                DATA: d.data,
            }
        });
        setstart(true);
    }

    function handleNext() {

        setdata((prev) => {
            return {
                ...prev,
                index: prev.index + 1,
            }
        });
    }

    function handlePrev() {
        setdata((prev) => {
            return {
                ...prev,
                index: prev.index - 1,
            }
        });
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
                            <h2>Question {database.index + 1}/{database.DATA[0].questions.length}</h2>
                            <p>{database.DATA[0].questions[database.index].title}</p>
                        </div>
                        <div className="quiz-options-body">
                            {
                                database.DATA[0].questions[database.index].opts.map((item, index) => {
                                    return <Input key={index} value={item.opt} handleClick={handleClick} />
                                })
                            }
                        </div>

                        <div className="navigation-button">
                            <button onClick={handlePrev} className="btn">Prev</button>
                            <button onClick={handleNext} className="btn">Next</button>
                            <button className="btn">Submit</button>
                        </div>

                    </div>
                </div>
            }
        </div>
    );
}