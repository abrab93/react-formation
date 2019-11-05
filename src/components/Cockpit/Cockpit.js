import React from 'react';
import classes from './Cockpit.css';


const cockpit = (props) => {

    const assinedClasses = [];
    let btnClass = '';

    if (props.persons.length <= 2) {
      assinedClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
      assinedClasses.push(classes.bold);
    }

    if (props.showPersons) {
         btnClass = classes.Red;
    }

    return (
        <div>
            <h1>{props.appTitle}</h1>
            <p className={assinedClasses.join(' ')} >This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
)};

export default cockpit