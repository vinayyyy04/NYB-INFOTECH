async function getUsers() {
    try {
        console.log("Fetching users...");

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const users = await response.json();

        users.forEach(user => {
            console.log(`Name: ${user.name}`);
            console.log(`Email: ${user.email}`);
            console.log("-------------------");
        });
    } 
    catch (error) {
        console.log("Failed to fetch users:", error.message);
    }
}

getUsers();