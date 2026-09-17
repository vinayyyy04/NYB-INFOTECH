const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const todoCount = document.getElementById("todoCount");
const clearCompleted = document.getElementById("clearCompleted");
const filters = document.querySelectorAll(".filter");

// Load todos from Local Storage
let todos = JSON.parse(localStorage.getItem("todos")) || [];

let currentFilter = "all";


// ==============================
// SAVE TODOS
// ==============================

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}


// ==============================
// RENDER TODOS
// ==============================

function renderTodos() {

    todoList.innerHTML = "";

    let filteredTodos = todos;

    // Apply filter
    if (currentFilter === "active") {
        filteredTodos = todos.filter(todo => !todo.completed);
    }

    if (currentFilter === "completed") {
        filteredTodos = todos.filter(todo => todo.completed);
    }


    // Empty message
    if (filteredTodos.length === 0) {

        const emptyMessage = document.createElement("li");

        emptyMessage.className = "empty";

        emptyMessage.textContent = "No todos found ✨";

        todoList.appendChild(emptyMessage);

    }


    // Create Todo Elements
    filteredTodos.forEach(function (todo) {

        const li = document.createElement("li");

        li.className = "todo";

        if (todo.completed) {
            li.classList.add("completed");
        }


        // Checkbox
        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";

        checkbox.checked = todo.completed;


        // Todo Text
        const span = document.createElement("span");

        span.className = "todo-text";

        span.textContent = todo.text;


        // Edit Button
        const editBtn = document.createElement("button");

        editBtn.className = "edit-btn";

        editBtn.textContent = "Edit";


        // Delete Button
        const deleteBtn = document.createElement("button");

        deleteBtn.className = "delete-btn";

        deleteBtn.textContent = "Delete";


        // ==========================
        // MARK AS COMPLETED
        // ==========================

        checkbox.addEventListener("change", function () {

            todo.completed = checkbox.checked;

            saveTodos();

            renderTodos();
        });


        // ==========================
        // EDIT TODO
        // ==========================

        editBtn.addEventListener("click", function () {

            const newText = prompt(
                "Edit your todo:",
                todo.text
            );

            if (newText !== null && newText.trim() !== "") {

                todo.text = newText.trim();

                saveTodos();

                renderTodos();
            }
        });


        // ==========================
        // DELETE TODO
        // ==========================

        deleteBtn.addEventListener("click", function () {

            todos = todos.filter(function (item) {
                return item.id !== todo.id;
            });

            saveTodos();

            renderTodos();
        });


        // Add elements
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        todoList.appendChild(li);
    });


    updateCount();
}


// ==============================
// ADD TODO
// ==============================

function addTodo() {

    const text = todoInput.value.trim();

    if (text === "") {
        alert("Please enter a todo!");
        return;
    }


    const newTodo = {

        id: Date.now(),

        text: text,

        completed: false
    };


    todos.push(newTodo);

    saveTodos();

    todoInput.value = "";

    renderTodos();
}


// ==============================
// ADD BUTTON
// ==============================

addBtn.addEventListener("click", addTodo);


// ==============================
// ENTER KEY
// ==============================

todoInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        addTodo();
    }
});


// ==============================
// FILTER TODOS
// ==============================

filters.forEach(function (button) {

    button.addEventListener("click", function () {

        filters.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        currentFilter = button.dataset.filter;

        renderTodos();
    });
});


// ==============================
// CLEAR COMPLETED
// ==============================

clearCompleted.addEventListener("click", function () {

    todos = todos.filter(function (todo) {
        return !todo.completed;
    });

    saveTodos();

    renderTodos();
});


// ==============================
// TODO COUNT
// ==============================

function updateCount() {

    const activeTodos = todos.filter(function (todo) {
        return !todo.completed;
    });

    todoCount.textContent =
        `${activeTodos.length} task${activeTodos.length !== 1 ? "s" : ""} remaining`;
}


// ==============================
// INITIAL RENDER
// ==============================

renderTodos();