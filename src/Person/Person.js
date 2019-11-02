import React from 'react';
// import Radium from 'radium';

import classes from './Person.css';

const person = (props) => {

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and i will get rich after {props.years} years !!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}></input>
        </div>
    )
}

// export default Radium(person);
export default person;