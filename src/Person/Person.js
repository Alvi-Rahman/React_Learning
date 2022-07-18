const person = (props) => {
    return (
        <div>
            <p onClick={props.click}> Hi, I am {props.name} and I am {props.age} years old. {props.children}</p>
            <input type="text" onChange={props.changed}/>
        </div>
    );
}

export default person;