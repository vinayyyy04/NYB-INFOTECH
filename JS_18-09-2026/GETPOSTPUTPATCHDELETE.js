const API_URL = "https://jsonplaceholder.typicode.com/posts";

// 1. GET - Fetch data
async function getPosts() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`GET Error: ${response.status}`);
        }

        const posts = await response.json();

        console.log("GET:", posts.slice(0, 3));
    } catch (error) {
        console.log(error.message);
    }
}

// 2. POST - Create new data
async function createPost() {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "JavaScript Practice",
                body: "Learning Fetch API",
                userId: 1
            })
        });

        if (!response.ok) {
            throw new Error(`POST Error: ${response.status}`);
        }

        const newPost = await response.json();

        console.log("POST:", newPost);
    } catch (error) {
        console.log(error.message);
    }
}

// 3. PUT - Replace complete data
async function updatePost() {
    try {
        const response = await fetch(`${API_URL}/1`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: 1,
                title: "Updated Title",
                body: "Updated complete post",
                userId: 1
            })
        });

        if (!response.ok) {
            throw new Error(`PUT Error: ${response.status}`);
        }

        const updatedPost = await response.json();

        console.log("PUT:", updatedPost);
    } catch (error) {
        console.log(error.message);
    }
}

// 4. PATCH - Update partial data
async function patchPost() {
    try {
        const response = await fetch(`${API_URL}/1`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Partially Updated Title"
            })
        });

        if (!response.ok) {
            throw new Error(`PATCH Error: ${response.status}`);
        }

        const patchedPost = await response.json();

        console.log("PATCH:", patchedPost);
    } catch (error) {
        console.log(error.message);
    }
}

// 5. DELETE - Delete data
async function deletePost() {
    try {
        const response = await fetch(`${API_URL}/1`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error(`DELETE Error: ${response.status}`);
        }

        console.log("DELETE: Post deleted successfully");
    } catch (error) {
        console.log(error.message);
    }
}

// Run all operations
getPosts();
createPost();
updatePost();
patchPost();
deletePost();