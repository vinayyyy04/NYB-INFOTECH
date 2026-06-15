

let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

    addBtn.addEventListener("click", function () {

let task = taskInput.value.trim();

        if (task === "") {
            alert("Please enter a task");
   return;
}

        // Create list item
let li = document.createElement("li");

// Task text
let span = document.createElement("span");
    span.textContent = task;

// Mark as completed
    span.addEventListener("click", function () {
        span.classList.toggle("completed");
});

// Delete button
    let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete");

    deleteBtn.addEventListener("click", function () {
            li.remove();
});

        li.appendChild(span);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);

// Clear input field
        taskInput.value = "";
});
