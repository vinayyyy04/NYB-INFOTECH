import Child from "./Child";

function Parent() {
    const name = "Vinay";
    const age = 23;
    const isStudent = true;
    const skills = ["HTML", "CSS", "JavaScript"];
    const user = {
        city: "Vijayawada",
        course: "React"
    };

    function handleClick() {
        console.log("Button clicked");
    }

    return (
        <Child
            name={name}
            age={age}
            isStudent={isStudent}
            skills={skills}
            user={user}
            handleClick={handleClick}
        />
    );
}

export default Parent;