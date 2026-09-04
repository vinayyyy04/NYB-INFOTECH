// ========================================
// DOM SELECTION
// ========================================

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const priorityInput = document.getElementById("priority");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const message = document.getElementById("message");

const allBtn = document.getElementById("allBtn");
const completedBtn = document.getElementById("completedBtn");
const pendingBtn = document.getElementById("pendingBtn");
const clearBtn = document.getElementById("clearBtn");


// ========================================
// ARRAY + OBJECTS
// ========================================

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let currentFilter = "all";


// ========================================
// FUNCTIONS
// ========================================

const saveTasks = () => {

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

};


// ========================================
// DISPLAY TASKS
// ========================================

function displayTasks() {

    taskList.innerHTML = "";

    let filteredTasks = tasks;

    // CONDITION
    if (currentFilter === "completed") {

        filteredTasks = tasks.filter(
            task => task.completed === true
        );

    } else if (currentFilter === "pending") {

        filteredTasks = tasks.filter(
            task => task.completed === false
        );

    }


    // LOOP
    filteredTasks.forEach(task => {

        createTaskElement(task);

    });


    updateTaskCount();

}


// ========================================
// CREATE ELEMENT DYNAMICALLY
// ========================================

function createTaskElement(task) {

    const li = document.createElement("li");

    li.classList.add("task");

    if (task.completed) {
        li.classList.add("completed");
    }


    li.innerHTML = `
        <div class="task-info">

            <div class="task-name">
                ${task.name}
            </div>

            <div class="priority">
                Priority: ${task.priority}
            </div>

        </div>

        <div class="task-actions">

            <button
                class="complete-btn"
                data-id="${task.id}">
                ${task.completed ? "Undo" : "Complete"}
            </button>

            <button
                class="delete-btn"
                data-id="${task.id}">
                Delete
            </button>

        </div>
    `;


    taskList.appendChild(li);

}


// ========================================
// UPDATE TASK COUNT
// ========================================

function updateTaskCount() {

    taskCount.textContent =
        `Total Tasks: ${tasks.length}`;

}


// ========================================
// FORM HANDLING
// ========================================

taskForm.addEventListener("submit", (event) => {

    event.preventDefault();


    try {

        const name = taskInput.value.trim();

        const priority = priorityInput.value;


        // THROW ERROR
        if (name === "") {

            throw new Error("Task name cannot be empty.");

        }


        // OBJECT
        const newTask = {

            id: Date.now(),

            name: name,

            priority: priority,

            completed: false

        };


        // SPREAD OPERATOR
        tasks = [...tasks, newTask];


        saveTasks();

        displayTasks();


        taskForm.reset();

        showMessage("Task added successfully!");

    }

    catch (error) {

        showMessage(error.message);

    }

});


// ========================================
// EVENT DELEGATION
// ========================================

taskList.addEventListener("click", (event) => {

    const id = Number(
        event.target.dataset.id
    );


    // COMPLETE TASK
    if (
        event.target.classList.contains(
            "complete-btn"
        )
    ) {

        tasks = tasks.map(task => {

            if (task.id === id) {

                return {
                    ...task,
                    completed: !task.completed
                };

            }

            return task;

        });

        saveTasks();

        displayTasks();

    }


    // DELETE TASK
    if (
        event.target.classList.contains(
            "delete-btn"
        )
    ) {

        tasks = tasks.filter(
            task => task.id !== id
        );

        saveTasks();

        displayTasks();

        showMessage("Task deleted.");

    }

});


// ========================================
// FILTER BUTTONS
// ========================================

allBtn.addEventListener("click", () => {

    currentFilter = "all";

    displayTasks();

});


completedBtn.addEventListener("click", () => {

    currentFilter = "completed";

    displayTasks();

});


pendingBtn.addEventListener("click", () => {

    currentFilter = "pending";

    displayTasks();

});


// ========================================
// CLEAR ALL TASKS
// ========================================

clearBtn.addEventListener("click", () => {

    tasks = [];

    localStorage.removeItem("tasks");

    displayTasks();

    showMessage("All tasks cleared.");

});


// ========================================
// TEMPLATE LITERALS
// ========================================

function showMessage(text) {

    message.textContent = `${text}`;

    setTimeout(() => {

        message.textContent = "";

    }, 2000);

}


// ========================================
// PROMISE
// ========================================

function loadWelcomeMessage() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Welcome to Task Manager!");

        }, 500);

    });

}


// ========================================
// ASYNC / AWAIT
// ========================================

async function initializeApp() {

    try {

        const welcome = await loadWelcomeMessage();

        console.log(welcome);

        displayTasks();

    }

    catch (error) {

        console.log(
            "Initialization failed:",
            error
        );

    }

}


// ========================================
// FETCH API
// ========================================

async function fetchSampleTasks() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos?_limit=3"
        );


        if (!response.ok) {

            throw new Error(
                "Failed to fetch tasks"
            );

        }


        const data = await response.json();


        console.log("API Tasks:", data);

    }

    catch (error) {

        console.log(
            "API Error:",
            error.message
        );

    }

}


// ========================================
// START APPLICATION
// ========================================

initializeApp();

fetchSampleTasks();