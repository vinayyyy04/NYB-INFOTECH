const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const saveBtn = document.getElementById("saveBtn");
const loadBtn = document.getElementById("loadBtn");
const output = document.getElementById("output");

// Store object
saveBtn.addEventListener("click", function () {

    const user = {
        name: nameInput.value,
        email: emailInput.value
    };

    // Object → JSON string
    localStorage.setItem("user", JSON.stringify(user));

    output.textContent = "User saved successfully!";
});

// Retrieve object
loadBtn.addEventListener("click", function () {

    // JSON string → Object
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
        output.textContent =
            `Name: ${storedUser.name}, Email: ${storedUser.email}`;
    } else {
        output.textContent = "No user data found.";
    }
});