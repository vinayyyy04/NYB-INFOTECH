const API_URL = "https://jsonplaceholder.typicode.com/users";

async function loadUsers() {
    console.log("Loading...");

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const users = await response.json();

        // Empty state
        if (users.length === 0) {
            console.log("No users found.");
            return;
        }

        // Success state
        console.log("Users loaded successfully!");

        users.forEach(user => {
            console.log(`${user.name} - ${user.email}`);
        });

    } catch (error) {
        // Error state
        console.log("Failed to load users:", error.message);

    } finally {
        // Loading completed
        console.log("Loading finished.");
    }
}

loadUsers();