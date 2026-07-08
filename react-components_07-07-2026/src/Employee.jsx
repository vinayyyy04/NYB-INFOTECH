//dynamic data using props

function Employee(props){
    console.log(props);
    return (
        <>
        <h2>Name: {props.name}</h2>
        <h2>Age: {props.age}</h2>
        </>
    );
}

export default Employee;