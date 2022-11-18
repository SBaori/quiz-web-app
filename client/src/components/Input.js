import React from 'react';
import '../styles/Quiz.css';

export default function Input(props) {

    function myClick(e) {
        props.handleClick(e.target.value);
    }

    return (
        <div className='myinput'>
            <input className='input_class' onClick={myClick} type="radio" id={props.id} name="option" value={props.value} />
            <label htmlFor={props.id}>{props.value}</label>
        </div>
    );
}