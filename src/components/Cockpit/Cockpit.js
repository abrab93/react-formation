import React from 'react';
import classes from '../../containers/App.css';

const cockpit = (props) => (

    <div className={classes.App}>
        <h1>Hi, I'm an App</h1>
        <p className={props.assinedClasses.join(' ')} >This is really working!</p>
        <button
          className={props.btnClass}
          onClick={props.clicked}>Toggle Persons</button>
        {props.persons}
      </div>

);

export default cockpit