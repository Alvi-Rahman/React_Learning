import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}> Hi, I am {props.name} and I am {props.age} years old. {props.children}</p>
            <input type="text" onChange={props.changed} value={props.initVal}/>
        </div>
    );
}

export default person;