import React, {Component} from 'react';

export default class FilterString extends Component {
    constructor(){
        super();

        this.state ={
            people: ['Sean', 'Jake', 'Jon', 'Dustin', 'Cole', 'Jerome'],
            userInput: '',
            filteredPeople: []
            
        } 
    }

    handleChange = (value) => {
        this.setState({
            userInput: value
        })
    }

    filteredPeople = (userInput) => {
        let people = this.state.people
        let filteredPeople = []

        for(let i = 0; i < people.length; i++){
            if(people[i].includes(userInput)){
                filteredPeople.push(people[i])
            }
        }
        this.setState({filteredPeople: filteredPeople})
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Names {JSON.stringify(this.state.names, null, 10)}</span>
                <input className="inputLine" onChange={(event) => this.handleChange(event.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filteredPeople(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered People {JSON.stringify(this.state.filteredPeople, null, 10)}</span>
            </div>
        )
    }
}