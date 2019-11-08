import React, {Component} from 'react';
// import Radium from 'radium';
import Aux from '../../../hoc/Auxilary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types'; // npm install --save prop-types
import AuthContext from '../../../context/auth-context';

import classes from './Person.css';

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElemRef = React.createRef();
    }

// must be static *contextType* so we can use this.context where ever we want in the component
    static contextType = AuthContext;

    componentDidMount(){
        this.inputElemRef.current.focus();
        console.log(this.context.authenticated);
    }

    render(){
    console.log('[Person.js] rendering...');
        return (
            <Aux>
                { this.context.authenticated ? <p> Authenticated </p> : <p> Please Log in !!</p>}
                <p onClick={this.props.click}>I'm {this.props.name} and i will get rich after this.{this.props.years} years !!</p>
                <p>{this.props.children}</p>
                <input
                    ref={this.inputElemRef}
                    type='text'
                    onChange={this.props.changed}
                    value={this.props.name}></input>
            </Aux>
        )
    }
}

Person.propTypes = {
    name: PropTypes.string,
    click: PropTypes.func,
    years: PropTypes.number,
    changed: PropTypes.func
}

// export default Radium(person);
export default withClass(Person, classes.Person);