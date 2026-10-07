import { useState } from "react";

function FormComponents() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        console.log("Name:", name);
        console.log("Email:", email);
    }

    return (
        <div>
            <h2>Controlled Form</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Enter your name"/>

                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter your email"/>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FormComponents;