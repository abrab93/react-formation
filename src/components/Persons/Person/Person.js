import React, {Component} from 'react';
// import Radium from 'radium';
import Aux from '../../../hoc/Auxilary';
import withClass from '../../../hoc/withClass';

import classes from './Person.css';

class Person extends Component {

    render(){
    console.log('[Person.js] rendering...');
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and i will get rich after this.{this.props.years} years !!</p>
                <p>{this.props.children}</p>
                <input  type='text' onChange={this.props.changed} value={this.props.name}></input>
            </Aux>
        )
    }
}

// export default Radium(person);
export default withClass(Person, classes.Person);