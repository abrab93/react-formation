import React, {useEffect} from 'react';
import classes from '../Cockpit/Cockpit.css';


const cockpit = (props) => {

    /*useEffect(() =>{
        console.log('[cockpit.js] useEffect');
        //http request...
        setTimeout(() => {
            alert('Data mounted to the cloud!!');
        },1000)
    },[props.persons]);*/

    useEffect(() =>{
        console.log('[cockpit.js] useEffect');
        //http request...
        setTimeout(() => {
            alert('Data mounted to the cloud!!');
        },1000);
        return (()=>{
            console.log('[cockpit.js] useEffect cleanning up!!');
        })
    },[]); // ==> componentDidMount

    useEffect(() =>{
        return (()=>{
            console.log('[cockpit.js] useEffect 2nd cleanning up!!');
        })
    });

    const assinedClasses = [];
    let btnClass = '';

    if (props.personsLength <= 2) {
      assinedClasses.push(classes.red);
    }

    if (props.personsLength <= 1) {
      assinedClasses.push(classes.bold);
    }

    if (props.showPersons) {
         btnClass = classes.Red;
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={assinedClasses.join(' ')} >This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
)};

export default React.memo(cockpit)