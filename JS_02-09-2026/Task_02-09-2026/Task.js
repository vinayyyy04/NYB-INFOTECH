// Task Manager


const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const message = document.getElementById("message");
const clearBtn = document.getElementById("clearBtn");



// Custom Error

class TaskError extends Error {

    constructor(message) {
        super(message);
        this.name = "TaskError";
    }

}


// Tasks Array

let tasks = [];



// Add Task


taskForm.addEventListener("submit", function (event) {

    event.preventDefault();

    try {

        const taskText = taskInput.value.trim();


        // THROW
        if (taskText === "") {
            throw new TaskError(
                "Please enter a task."
            );
        }


        if (taskText.length < 3) {
            throw new TaskError(
                "Task must contain at least 3 characters."
            );
        }


        // Add task to array
        tasks.push(taskText);


        // JSON.stringify()
        // Convert array → JSON string
        const taskData = JSON.stringify(tasks);


        // LOCAL STORAGE
        localStorage.setItem(
            "tasks",
            taskData
        );


        taskInput.value = "";

        displayTasks();

        showMessage(
            "Task added successfully!",
            "success"
        );

    }


    // CATCH
    catch (error) {

        showMessage(
            error.message,
            "error"
        );

    }


    // FINALLY
    finally {

        console.log(
            "Add task operation completed."
        );

    }

});



// Display Tasks


function displayTasks() {

    taskList.innerHTML = "";


    tasks.forEach(function (task, index) {

        const li = document.createElement("li");

        li.className = "task-item";


        li.innerHTML = `
            <span>${task}</span>

            <button
                class="delete-task"
                onclick="deleteTask(${index})"
            >
                Delete
            </button>
        `;


        taskList.appendChild(li);

    });


    taskCount.textContent =
        `${tasks.length} Task${tasks.length !== 1 ? "s" : ""}`;

}



// Delete Task


function deleteTask(index) {

    try {

        if (index < 0 || index >= tasks.length) {
            throw new TaskError(
                "Task does not exist."
            );
        }


        tasks.splice(index, 1);


        // Update Local Storage
        localStorage.setItem(
            "tasks",
            JSON.stringify(tasks)
        );


        displayTasks();

        showMessage(
            "Task deleted successfully!",
            "success"
        );

    }

    catch (error) {

        showMessage(
            error.message,
            "error"
        );

    }

}



// Clear All Tasks


clearBtn.addEventListener("click", function () {

    try {

        if (tasks.length === 0) {
            throw new TaskError(
                "There are no tasks to clear."
            );
        }


        tasks = [];


        localStorage.removeItem("tasks");


        displayTasks();

        showMessage(
            "All tasks have been cleared.",
            "success"
        );

    }

    catch (error) {

        showMessage(
            error.message,
            "error"
        );

    }

});



// Load Tasks


function loadTasks() {

    try {

        // LOCAL STORAGE
        const savedTasks =
            localStorage.getItem("tasks");


        if (!savedTasks) {
            return;
        }


        // JSON.parse()
        // Convert JSON string → JavaScript array
        tasks = JSON.parse(savedTasks);


        if (!Array.isArray(tasks)) {
            throw new TaskError(
                "Saved task data is invalid."
            );
        }


        displayTasks();

    }

    catch (error) {

        console.error(
            "Loading error:",
            error.message
        );

        tasks = [];

    }

    finally {

        console.log(
            "Task loading completed."
        );

    }

}



// Display Message


function showMessage(text, type) {

    message.textContent = text;
    message.className = type;

}



// Load saved tasks when page opens


loadTasks();