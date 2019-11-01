import React from 'react';

import './Person.css'

const person = (props) =>{
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and i will get rich after {props.years} years !!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default person;