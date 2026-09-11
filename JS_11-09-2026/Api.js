const API_URL = "https://jsonplaceholder.typicode.com/users";

// GET Request
async function getStudents() {
    try {
        console.log("Loading...");

        const response = await fetch(API_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Failed to fetch students");
        }

        const data = await response.json();

        console.log("Students:", data);

    } catch (error) {
        console.error("Error:", error.message);

    } finally {
        console.log("Loading completed");
    }
}


// POST Request
async function addStudent() {
    try {
        console.log("Adding student...");

        const student = {
            name: "Sowmith",
            email: "sowmith@example.com"
        };

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)
        });

        if (!response.ok) {
            throw new Error("Failed to add student");
        }

        const data = await response.json();

        console.log("Student Added:", data);

    } catch (error) {
        console.error("Error:", error.message);

    } finally {
        console.log("Loading completed");
    }
}


// PUT Request
async function updateStudent() {
    try {
        console.log("Updating student...");

        const student = {
            name: "Sowmith Raj",
            email: "raj@example.com"
        };

        const response = await fetch(`${API_URL}/1`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)
        });

        if (!response.ok) {
            throw new Error("Failed to update student");
        }

        const data = await response.json();

        console.log("Student Updated:", data);

    } catch (error) {
        console.error("Error:", error.message);

    } finally {
        console.log("Loading completed");
    }
}


// PATCH Request
async function patchStudent() {
    try {
        console.log("Partially updating student...");

        const response = await fetch(`${API_URL}/1`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: "newemail@example.com"
            })
        });

        if (!response.ok) {
            throw new Error("Failed to update student");
        }

        const data = await response.json();

        console.log("Student Partially Updated:", data);

    } catch (error) {
        console.error("Error:", error.message);

    } finally {
        console.log("Loading completed");
    }
}


// DELETE Request
async function deleteStudent() {
    try {
        console.log("Deleting student...");

        const response = await fetch(`${API_URL}/1`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Failed to delete student");
        }

        console.log("Student Deleted Successfully");

    } catch (error) {
        console.error("Error:", error.message);

    } finally {
        console.log("Loading completed");
    }
}


// Run the functions
getStudents();
addStudent();
updateStudent();
patchStudent();
deleteStudent();