import React ,{PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent{

/*static getDerivedStateFromProps(props, state){
    console.log('[Persons.js] getDerivedStateFromProps');
    return state;
}*/

// shouldComponentUpdate(nextProps, nestState){//*
//     console.log('[Persons.js] shouldComponentUpdate');
//     return  nextProps.persons !== this.props.persons // if i need to test for all props , its better to use pureComponent
//         ||  nextProps.clicked !== this.props.clicked // rather than using component and implement shouldeComp...
//         ||  nextProps.changed !== this.props.changed;// pureComponent = component + shouldComUpdt implemented for us. 
// }

getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!' };
}

componentDidUpdate(prevProps, prevState, snapshot){//*
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
}

componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount');
}

    render(){
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
                return <Person
                    click={this.props.clicked.bind(this, index)}
                    name={person.name}
                    years={person.years}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)} />
            })
        }
};

export default Persons;