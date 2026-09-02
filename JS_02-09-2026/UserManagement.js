// CUSTOM ERRORS


class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

// REGISTER USER

function registerUser(username, age) {

    // TRY
    try {

        // THROW + CUSTOM ERROR
        if (username.length < 3) {
            throw new ValidationError(
                "Username must contain at least 3 characters."
            );
        }

        // THROW + CUSTOM ERROR
        if (age < 18) {
            throw new ValidationError(
                "User must be 18 or older."
            );
        }

        // Create user object
        const user = {
            username: username,
            age: age,
            role: "Network Engineer"
        };


        // JSON.stringify()
        // Converts JavaScript Object → JSON String
        const userData = JSON.stringify(user);


        // LOCAL STORAGE
        // Stores the JSON string in the browser
        localStorage.setItem("user", userData);


        // SESSION STORAGE
        // Stores temporary login information
        sessionStorage.setItem("loginStatus", "logged-in");


        console.log("User registered successfully!");

    }

    // CATCH
    catch (error) {
        console.log(`${error.name}: ${error.message}`);
    }

    // FINALLY
    finally {
        console.log("Registration process completed.");
    }
}

// GET USER


function getUser() {

    // TRY
    try {

        // LOCAL STORAGE
        // Retrieve stored JSON string
        const userData = localStorage.getItem("user");


        // THROW
        if (!userData) {
            throw new Error("No user found.");
        }


        // JSON.parse()
        // Converts JSON String → JavaScript Object
        const user = JSON.parse(userData);


        console.log("----- User Details -----");
        console.log("Username:", user.username);
        console.log("Age:", user.age);
        console.log("Role:", user.role);


        // SESSION STORAGE
        // Retrieve login status
        const loginStatus = sessionStorage.getItem("loginStatus");

        console.log("Login Status:", loginStatus);

    }

    // CATCH
    catch (error) {
        console.log("Error:", error.message);
    }

    // FINALLY
    finally {
        console.log("User retrieval process completed.");
    }
}


// RUN THE PROGRAM


registerUser("Vinay", 23);

getUser();