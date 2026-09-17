const nameInput = document.getElementById("name");
const courseInput = document.getElementById("course");

const saveBtn = document.getElementById("saveBtn");
const loadBtn = document.getElementById("loadBtn");
const clearBtn = document.getElementById("clearBtn");

const output = document.getElementById("output");

// Save data
saveBtn.addEventListener("click", function () {
    sessionStorage.setItem("name", nameInput.value);
    sessionStorage.setItem("course", courseInput.value);

    output.textContent = "Data saved successfully!";
});

// Retrieve data
loadBtn.addEventListener("click", function () {
    const name = sessionStorage.getItem("name");
    const course = sessionStorage.getItem("course");

    if (name && course) {
        output.textContent = `Name: ${name} | Course: ${course}`;
    } else {
        output.textContent = "No data found!";
    }
});

// Clear data
clearBtn.addEventListener("click", function () {
    sessionStorage.clear();

    nameInput.value = "";
    courseInput.value = "";

    output.textContent = "Session data cleared!";
});