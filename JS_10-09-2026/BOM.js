const output = document.getElementById("output");

// 1. BOM
console.log("Browser Width:", window.innerWidth);
console.log("Browser Height:", window.innerHeight);
console.log("Current URL:", location.href);
console.log("Browser:", navigator.userAgent);


// 2. Output Methods
function showMessage(message) {
    console.log(message);
    alert(message);
    output.textContent = message;
}


// 3. Local Storage
function saveCar() {
    localStorage.setItem("favoriteCar", "BMW");
    showMessage("Favorite car saved!");
}

function showCar() {
    const car = localStorage.getItem("favoriteCar");

    if (car) {
        showMessage("Favorite Car: " + car);
    } else {
        showMessage("No car saved.");
    }
}

function clearCar() {
    localStorage.removeItem("favoriteCar");
    showMessage("Favorite car removed!");
}


// 4. Session Storage
sessionStorage.setItem("showroom", "Open");

console.log(
    "Session Status:",
    sessionStorage.getItem("showroom")
);