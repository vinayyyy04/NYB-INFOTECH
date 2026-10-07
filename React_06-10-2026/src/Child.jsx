function Child({ name, age, isStudent, skills, user, handleClick }) {
    return (
        <div>
            <h1>{name}</h1>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>

            <p>Skills: {skills.join(", ")}</p>

            <p>City: {user.city}</p>
            <p>Course: {user.course}</p>

            <button onClick={handleClick}>
                Click Me
            </button>
        </div>
    );
}

export default Child;