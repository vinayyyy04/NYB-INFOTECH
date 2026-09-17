const input = document.getElementById("itemInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("itemList");

button.addEventListener("click", function () {

    const item = input.value.trim();

    if (item === "") {
        return;
    }

    // Create new list item
    const li = document.createElement("li");

    // Add text
    li.textContent = item;

    // Add delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = " Delete";

    // Remove item
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    // Add button to list item
    li.appendChild(deleteBtn);

    // Add list item to the list
    list.appendChild(li);

    // Clear input
    input.value = "";
});