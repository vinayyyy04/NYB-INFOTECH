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
        "JavaScript Basics",
        "Promise Chaining",
        "Async Programming"
    ]);
}

getUser()
    .then(user => {
        console.log("User:", user);
        return getProfile(user);
    })
    .then(profile => {
        console.log("Profile:", profile);
        return getPosts(profile);
    })
    .then(posts => {
        console.log("Posts:", posts);
    })
    .catch(error => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Process completed");
    });