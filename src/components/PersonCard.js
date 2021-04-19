import React from 'react';
import Counter from './Counter'

const PersonCard = props => {
    return(
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <Counter/>
        </div>
    )
}



/* class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characterAge: this.props.age
        };
    }

    render() {
        return(
            <div>
                <h1>{this.props.lastName}, {this.props.firstName} </h1>
                <p>Age: {this.state.characterAge} </p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={() => this.setState({characterAge: this.props.age +1 })}>Age Increaser!</button>
            </div>
        )
    }
}
*/

export default PersonCard;
