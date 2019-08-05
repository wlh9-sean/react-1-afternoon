import React, {Component} from 'react';

export default class FilterObject extends Component {
    constructor(){
        super();

        this.state = {
            shoppingList: [
                {
                    department: 'Home Goods',
                    item: 'Pillow',
                    price: 40
                },
                {
                    aisle: 'P7',
                    item: 'Gummy Bears',
                    price: 7
                },
                {
                    category: 'music',
                    item: 'MP3 Player',
                    price: 49
                }
            ],
            userInput: '',
            filteredList: []
        }
    }

    handleChange = (value) =>{
        this.setState({userInput: value})
    }

    filteredList(prop){
        let shoppingList = this.state.shoppingList
        let filteredList = []

        for(let i = 0; i < shoppingList.length; i++){
            if(shoppingList[i].hasOwnProperty(prop)){
                filteredList.push(shoppingList[i])
            }
        }
        this.setState({filteredList: filteredList})
    }
    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.shoppingList, null, 10)}</span>
                <input onChange={(event) => this.handleChange(event.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filteredList(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredList, null, 10)}</span>
            </div>
        )
    }
}