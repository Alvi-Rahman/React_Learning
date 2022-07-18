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

    changeNameHandler = () => {
        // console.log("This was clicked!");
        this.setState(
            {
                persons: [
                    {name: "Changed Name", age: 28},
                    {name: "B", age: 30},
                    {name: "C", age: 26}
                ]
            }
        )
    };


    render() {
        return (
            <div className="App">
                <h1> Hi! First react App!</h1>
                <button onClick={this.changeNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> I wanna do some task
                    A </Person>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> I Wanna Do some task
                    B </Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> I Wanna do some task
                    C </Person>
            </div>
        );
    }
}

export default App;
