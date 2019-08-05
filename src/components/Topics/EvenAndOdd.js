import React, {Component} from 'react';

export default class EvenAndOdd extends Component {
    constructor(){
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: []
        }
    }

    handleChange = (value) => {
        this.setState({
            userInput: value
        })
    }

    assignEvenAndOdds = (userInput) => {
        let array = userInput.split(',')
        let evens = []
        let odds = []

        for(let i = 0; i <array.length; i++){
            if(array[i]%2 === 0){
                evens.push(parseInt(array[i], 10))
            } else {
                odds.push(parseInt(array[i], 10))
            }
        }
        this.setState({evenArray: evens, oddArray: odds})
    }
    render(){
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={(event) => this.handleChange(event.target.value)}></input>
                <button className="confirmationButton" onClick={() => {this.assignEvenAndOdds(this.state.userInput)}}>Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}