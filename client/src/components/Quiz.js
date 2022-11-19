import React from "react";
import "../styles/Quiz.css";
import Input from "./Input"; import Axios from "axios";
import data from "./data";
export default function Quiz() {

    const [start, setstart] = React.useState(false);

    const [database, setdata] = React.useState({
        index: -1,
        DATA: [],
        score: 0,
        currAns: "",
    });


    const [submitted, setsubmitted] = React.useState(false);


    function handleClick(myvalue) {
        console.log(myvalue);
        const val = database.DATA[0].questions[database.index].ans;
        setdata((prev) => {
            return { ...prev, currAns: val }
        });
    }

    async function startQuiz() {
        const d = await Axios.get("http://localhost:8000/question/test1");
        setdata(() => {
            return {
                ...prev,
                index: 0,
                DATA: d.data,
                score: 0,
            }
        });
        setstart(true);
    }

    function handleNext() {
        if (database.currAns === database.DATA[0].questions[database.index].ans) {
            setdata((prev) => {
                return {
                    ...prev,
                    score: prev.score + 1,
                }
            });
        }

        setdata((prev) => {
            return {
                ...prev,
                index: prev.index + 1,
            }
        });

    }

    function handleSubmit() {
        console.log("submit");

        if (database.currAns === database.DATA[0].questions[database.index].ans) {
            setdata((prev) => {
                return {
                    ...prev,
                    score: prev.score + 1,
                }
            });
        }
        setsubmitted(true);
    }

    return (
        <div className="quiz-container">
            {submitted ? <div className="score">Your Score is {database.score}</div>
                : <div>
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

                                    <button onClick={handleNext} className="btn">Next</button>
                                    <button onClick={handleSubmit} className="btn">Submit</button>
                                </div>

                            </div>
                        </div>
                    }
                </div>

            }


        </div>
    );
}
