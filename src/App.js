import './App.css';
import Person from './Person/Person'
import {useState} from "react";

function app(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [personsState, setPersons] = useState(
        {
            persons: [
                {name: "A", age: 28},
                {name: "B", age: 30},
                {name: "C", age: 26}
            ]
        }
    );

    const changeNameHandler = () => {
        // console.log("This was clicked!");
        setPersons(
            {
                persons: [
                    {name: "Changed Name", age: 28},
                    {name: "B", age: 30},
                    {name: "C", age: 26}
                ]
            }
        )
    }

    return (
        <div className="App">
            <h1> Hi! First react App!</h1>
            <button onClick={changeNameHandler}>Switch Name </button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age}> I wanna do some task A </Person>
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> I Wanna Do some task B </Person>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age}> I Wanna do some task C </Person>
        </div>
    );
}

export default app;
