import React, { Component } from 'react';
import classes from './App.css';
// import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';


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
          {this.state.persons.map((person, index) => {
            return <Person
                click={this.deletePersonHandler.bind(this, index)}
                name={person.name}
                years={person.years}
                key={person.id}
                changed={(event) => this.changeNameHandler(event, person.id)} />
          })}
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
      <div className={classes.App}>
        <h1>Hi, I'm an App</h1>
        <p className={assinedClasses.join(' ')} >This is really working!</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    /* return React.createElement("div",{className:"App"},
    React.createElement("h1",null,"Hi, I'm a React App")); */
  }
}
export default App;
// export default Radium(App);
