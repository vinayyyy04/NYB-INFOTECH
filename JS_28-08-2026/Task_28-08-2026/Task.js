// ==========================================
// SMART TASK MANAGER
// ==========================================


// ==========================================
// 1. CLASS
// ==========================================

class Task {

    constructor(title, priority) {

        this.id = Date.now();

        this.title = title;

        this.priority = priority;

        this.completed = false;

    }


    // Object Method

    toggleStatus() {

        this.completed = !this.completed;

    }

}


// ==========================================
// 2. INHERITANCE
// ==========================================

// ImportantTask inherits from Task

class ImportantTask extends Task {

    constructor(title, priority) {

        // Calling parent constructor

        super(title, priority);

        this.important = true;

    }

}


// ==========================================
// 3. OBJECT MANIPULATION
// ==========================================

const user = {

    name: "Sowmith",

    role: "Student"

};


// Adding a new property

user.city = "Hyderabad";


// Updating a property

user.role = "JavaScript Learner";


// Destructuring

const { name, role, city } = user;


// Template Literal

console.log(
    `Welcome ${name}! You are a ${role} from ${city}.`
);


// ==========================================
// 4. MODERN ES6+ FEATURES
// ==========================================

// Optional Chaining

console.log(user.address?.street);


// Nullish Coalescing

const phone = user.phone ?? "Not Available";

console.log(phone);


// Spread Operator

const skills = [
    "HTML",
    "CSS"
];

const updatedSkills = [
    ...skills,
    "JavaScript"
];

console.log(updatedSkills);


// Set

const technologies = new Set([
    "HTML",
    "CSS",
    "JavaScript",
    "JavaScript"
]);

console.log(technologies);


// ==========================================
// 5. TASK STORAGE
// ==========================================

const tasks = [];


// ==========================================
// 6. DOM ELEMENTS
// ==========================================

const taskInput =
    document.getElementById("taskInput");

const priorityInput =
    document.getElementById("priority");

const addBtn =
    document.getElementById("addBtn");

const taskList =
    document.getElementById("taskList");

const totalTasks =
    document.getElementById("totalTasks");

const completedTasks =
    document.getElementById("completedTasks");

const pendingTasks =
    document.getElementById("pendingTasks");


// ==========================================
// 7. FUNCTION
// ==========================================

function addTask() {

    const title =
        taskInput.value.trim();

    const priority =
        priorityInput.value;


    if (!title) {

        alert("Please enter a task!");

        return;

    }


    let newTask;


    // Creating different objects
    // using Classes and Inheritance

    if (priority === "High") {

        newTask =
            new ImportantTask(
                title,
                priority
            );

    } else {

        newTask =
            new Task(
                title,
                priority
            );

    }


    // Adding object to array

    tasks.push(newTask);


    // Clear input

    taskInput.value = "";


    renderTasks();

}


// ==========================================
// 8. HIGHER ORDER FUNCTION
// ==========================================

// filter() is a Higher Order Function

function getCompletedTasks() {

    return tasks.filter(task => {

        return task.completed;

    });

}


// map() is also a Higher Order Function

function getTaskTitles() {

    return tasks.map(task => {

        return task.title;

    });

}


// ==========================================
// 9. RENDER TASKS
// ==========================================

function renderTasks() {

    taskList.innerHTML = "";


    tasks.forEach(task => {

        const li =
            document.createElement("li");


        li.className =
            task.completed
                ? "task completed"
                : "task";


        li.innerHTML = `

            <div class="task-info">

                <strong>
                    ${task.title}
                </strong>

                <span class="priority">

                    Priority:
                    ${task.priority}

                </span>

            </div>


            <div class="task-actions">

                <button
                    class="complete-btn"
                    onclick="completeTask(${task.id})"
                >

                    ${task.completed
                        ? "Undo"
                        : "Complete"
                    }

                </button>


                <button
                    class="delete-btn"
                    onclick="deleteTask(${task.id})"
                >

                    Delete

                </button>

            </div>

        `;


        taskList.appendChild(li);

    });


    updateStatistics();

}


// ==========================================
// 10. OBJECT MANIPULATION
// ==========================================

function completeTask(id) {

    const task =
        tasks.find(task => {

            return task.id === id;

        });


    if (task) {

        task.toggleStatus();

    }


    renderTasks();

}


// ==========================================
// 11. DELETE TASK
// ==========================================

function deleteTask(id) {

    const index =
        tasks.findIndex(task => {

            return task.id === id;

        });


    if (index !== -1) {

        tasks.splice(index, 1);

    }


    renderTasks();

}


// ==========================================
// 12. HIGHER ORDER FUNCTIONS
// ==========================================

function updateStatistics() {

    // filter()

    const completed =
        tasks.filter(task =>
            task.completed
        ).length;


    // Another calculation

    const pending =
        tasks.filter(task =>
            !task.completed
        ).length;


    totalTasks.textContent =
        tasks.length;


    completedTasks.textContent =
        completed;


    pendingTasks.textContent =
        pending;

}


// ==========================================
// 13. PROMISE
// ==========================================

function loadTasks() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve([
                new Task(
                    "Learn JavaScript",
                    "High"
                ),

                new Task(
                    "Practice ES6",
                    "Medium"
                )

            ]);

        }, 1000);

    });

}


// ==========================================
// 14. ASYNC / AWAIT
// ==========================================

async function initializeApp() {

    console.log(
        "1. Application Started"
    );


    console.log(
        "2. Loading Tasks..."
    );


    // Waiting for Promise

    const loadedTasks =
        await loadTasks();


    console.log(
        "3. Tasks Loaded"
    );


    tasks.push(
        ...loadedTasks
    );


    renderTasks();

}


// ==========================================
// 15. EVENT LOOP DEMONSTRATION
// ==========================================

console.log(
    "A - Synchronous Code"
);


// Macrotask

setTimeout(() => {

    console.log(
        "D - setTimeout (Macrotask)"
    );

}, 0);


// Microtask

Promise.resolve().then(() => {

    console.log(
        "C - Promise (Microtask)"
    );

});


console.log(
    "B - Synchronous Code"
);


// Expected Order:

// A
// B
// C
// D


// ==========================================
// 16. EVENT LISTENER
// ==========================================

addBtn.addEventListener(
    "click",
    addTask
);


// ==========================================
// 17. START APPLICATION
// ==========================================

initializeApp();