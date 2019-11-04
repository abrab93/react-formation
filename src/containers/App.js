import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Abdelmoughit", years: 5 },
      { id: 2, name: "Younes", years: 5 },
      { id: 3, name: "Amine", years: 5 },
      { id: 4, name: "Saad", years: 5 }
    ],
    showPersons: false
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

    let btnClass = '';
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
            <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.changeNameHandler}/>
        </div>
      );
      btnClass = classes.Red;
    }

    const assinedClasses = [];

    if (this.state.persons.length <= 2) {
      assinedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assinedClasses.push(classes.bold);
    }

    return (
      <Cockpit
        clicked={this.togglePersonsHandler}
        persons={persons}
        assinedClasses={assinedClasses}
        btnClass={btnClass} />
    );

  }
}
export default App;
