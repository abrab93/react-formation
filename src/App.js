import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
state = {
  persons : [
    {id: 1, name: "Abdelmoughit", years: 5},
    {id: 2, name: "Younes", years: 5}
  ],
  showPersons: false
}

deletePersonHandler = (personIndex)=>{
    //const persons = this.state.persons;
    const persons = [...this.state.persons];//SPREAD OPERATOR , CREATE A COPIE FROM THE TABLE
    persons.splice(personIndex,1);
    this.setState({persons: persons});
}

changeNameHandler = (event , personId) =>{

    const personIndex = this.state.persons.findIndex(person=>{
        return person.id === personId;
    })

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons : persons})
}

togglePersonsHandler = ()=>{
    this.setState({showPersons: !this.state.showPersons});
}

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons){
        persons = (
            <div>
                {this.state.persons.map( (person,index) => {
                    return <Person
                        click={this.deletePersonHandler.bind(this,index)}
                        name={person.name}
                        years={person.years}
                        key={person.id}
                        changed={(event)=>this.changeNameHandler(event,person.id)}/>
                })}
            </div>
        );
    }

   return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    /* return React.createElement("div",{className:"App"},
    React.createElement("h1",null,"Hi, I'm a React App")); */
  }
}

export default App;
