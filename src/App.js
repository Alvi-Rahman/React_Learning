import './App.css';
import Person from './Person/Person'
import {Component} from "react";

class App extends Component{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    state = {
        persons: [
            {name: "A", age: 28},
            {name: "B", age: 30},
            {name: "C", age: 26}
        ]};

    changeNameHandler = (newName) => {
        // console.log("This was clicked!");
        this.setState(
            {
                persons: [
                    {name: newName, age: 28},
                    {name: "B", age: 30},
                    {name: "C", age: 26}
                ]
            }
        )
    };

    updateNameHandler = (event) => {
        this.setState(
            {
                persons: [
                    {name: "A", age: 28},
                    {name: event.target.value, age: 30},
                    {name: "C", age: 26}
                ]
            }
        )
    }


    render() {
        return (
            <div className="App">
                <h1> Hi! First react App!</h1>
                <button onClick={this.changeNameHandler.bind(this, "New Name")}>Switch Name</button>
                <Person
                    click={this.changeNameHandler.bind(this, "Other Name ")}
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}> I wanna do some task A </Person>
                <Person
                    changed={this.updateNameHandler}
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}> I Wanna Do some task B
                </Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}> I Wanna do some task C </Person>
            </div>
        );
    }
}

export default App;
