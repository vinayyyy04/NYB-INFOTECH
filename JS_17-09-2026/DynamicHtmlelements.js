const heading = document.getElementById("heading");
const button = document.getElementById("addBtn");
const container = document.getElementById("taskContainer");

// Modify existing HTML element
heading.textContent = "Today's Tasks";

// Create a new element
button.addEventListener("click", function () {

    const task = document.createElement("p");

    // Add content
    task.textContent = "Learn JavaScript DOM";

    // Modify properties
    task.style.color = "blue";
    task.style.fontSize = "18px";

    // Add the element to the page
    container.appendChild(task);
});