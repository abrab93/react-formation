import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
    constructor(props){
        super(props);
        console.log('[App.js] constructor');
    }

  state = {
    persons: [
      { id: 1, name: "Abdelmoughit", years: 5 },
      { id: 2, name: "Younes", years: 5 },
      { id: 3, name: "Amine", years: 5 },
      { id: 4, name: "Saad", years: 5 }
    ],
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state){
      console.log('[App.js] getDerivedStateFromProps',props);
      return state;
  }

  componentDidMount(){//*
      console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){//*
      console.log('[App.js] shouldComponentUpdate');
      return true;
  }

  componentDidUpdate(){//*
      console.log('[App.js] componentDidUpdate');
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons;
    const persons = [...this.state.persons];//SPREAD OPERATOR , CREATE A COPIE FROM THE TABLE
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  changeNameHandler = (event, personId) => {

    const personIndex = this.state.persons.findIndex(person => {
      return person.id === personId;
    })

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.changeNameHandler}/>;
    }

    return (
        <div className={classes.App}>
            <button
                onClick={() =>{this.setState({ showCockpit: !this.state.showCockpit })
            }}>
                Remove Cockpit
            </button>
            { this.state.showCockpit ?
                <Cockpit
                    appTitle={this.props.appTitle}
                    clicked={this.togglePersonsHandler}
                    personsLength={this.state.persons.length}
                    showPersons={this.state.showPersons} />
            : null}
                {persons}
        </div>
    );

  }
}
export default App;
