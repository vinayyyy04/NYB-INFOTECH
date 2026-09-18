function getUser() {
    return Promise.resolve({ id: 101, name: "Rahul" });
}

function getProfile(user) {
    return Promise.resolve({
        userId: user.id,
        email: "rahul@example.com"
    });
}

function getPosts(profile) {
    return Promise.resolve([
        "JavaScript",
        "Promises",
        "Async/Await"
    ]);
}

async function showUserData() {
    try {
        const user = await getUser();
        console.log("User:", user);

        const profile = await getProfile(user);
        console.log("Profile:", profile);

        const posts = await getPosts(profile);
        console.log("Posts:", posts);

    } catch (error) {
        console.log("Error:", error);
    }
}

showUserData();