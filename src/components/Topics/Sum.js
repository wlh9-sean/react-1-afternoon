import React, {Component} from 'react';

export default class Sum extends Component {
    constructor(){
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleChange = (value) => {
        this.setState({number1: parseInt(value, 10)})
    }

    handleChange2 = (value) => {
        this.setState({number2: parseInt(value, 10)})
    }

    addNumbers = (number1, number2) => {
        this.setState({sum: number1 + number2})

        
    }

    render(){
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(event) => this.handleChange(event.target.value)}></input>
                <input className="inputLine" onChange={(event) => this.handleChange2(event.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.addNumbers(this.state.number1, this.state.number2)}>Add</button>
                <span className="resultsBox">{this.state.sum}</span>
            </div>
        )
    }
}