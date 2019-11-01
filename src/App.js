import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
state = {
  persons : [
    {name: "Abdelmoughit", years: 5},
    {name: "Younes", years: 5}
  ]
}

switchNameHandler = (newName) =>{
 //console.log ('switchNameHandler');
 this.setState({
  persons : [
    {name: newName , years: 2},
    {name: "Younes", years: 3}
  ]
 })
}

changeNameHandler = (event) =>{
console.log(event.target.value);
  this.setState({
    persons : [
      {name:  "Abdelmoughit", years: 5},
      {name: event.target.value, years: 5}
    ]
   })

}

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer' 
    }
   return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Abdelmoughit Rabia')}>Switch Name</button>
        <Person 
          click={this.switchNameHandler.bind(this,'Abdo Ra')} 
          name={this.state.persons[0].name} 
          years={this.state.persons[0].years} >
            *YES I WILL BE RICH INCHAALAH*
        </Person>
        <Person 
          changed={this.changeNameHandler}
          name={this.state.persons[1].name} 
          years={this.state.persons[1].years} />
      </div>
    );
    /* return React.createElement("div",{className:"App"},
    React.createElement("h1",null,"Hi, I'm a React App")); */
  }
}

export default App;
