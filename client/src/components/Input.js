import React from 'react';

export default function Input(props) {
    return (
        <div>
            <input onClick={props.handleClick} type="radio" id={props.id} name="option" value={props.value} />
            <label htmlFor={props.id}>{props.value}</label>
        </div>
    );
}