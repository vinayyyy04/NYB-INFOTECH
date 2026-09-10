// 1. Selecting DOM Elements
const title = document.getElementById("title");
const carList = document.getElementById("carList");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

// 2. Reading DOM Property
console.log(title.textContent);

// 3. Modifying DOM Property
title.textContent = "My Favorite Cars";

// 4. DOM Traversing
console.log(carList.parentElement);
console.log(carList.children);

// 5. Creating Element Dynamically
addBtn.addEventListener("click", () => {
    const newCar = document.createElement("li");
    newCar.textContent = "Audi";

    // 6. Adding Element
    carList.appendChild(newCar);
});

// 7. Removing Element
removeBtn.addEventListener("click", () => {
    if (carList.lastElementChild) {
        carList.lastElementChild.remove();
    }
});