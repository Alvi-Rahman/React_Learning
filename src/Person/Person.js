const person = (props) => {
    return (
        <div>
            <p> Hi, I am {props.name} and I am {props.age} years old. {props.children}</p>
        </div>
    );
}

export default person;