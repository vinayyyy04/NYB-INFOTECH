import { useState } from "react";

function Events() {
    const [name, setName] = useState("");

    // Click Event
    function handleClick() {
        alert("Button clicked!");
    }

    // Change Event
    function handleChange(event) {
        setName(event.target.value);
    }

    // Submit Event
    function handleSubmit(event) {
        event.preventDefault();
        alert(`Form submitted by ${name}`);
    }

    // Keyboard Event
    function handleKeyDown(event) {
        if (event.key === "Enter") {
            alert("Enter key pressed!");
        }
    }

    return (
        <div>
            <h2>React Event Handling</h2>

            <button onClick={handleClick}>
                Click Me
            </button>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter your name"
                />

                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Events;