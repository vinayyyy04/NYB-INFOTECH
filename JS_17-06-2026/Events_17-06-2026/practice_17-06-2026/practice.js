let menuInput = document.getElementById("menuInput");
let addBtn = document.getElementById("addBtn");
let menuList = document.getElementById("menuList");

// Adding new menu item
addBtn.addEventListener("click", () => {
    if (menuInput.value.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = menuInput.value;
        menuList.appendChild(li);
        menuInput.value = "";
    }
});

// Event Delegation
menuList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        alert("You selected: " + event.target.textContent);
    }
});