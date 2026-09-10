const carBox = document.getElementById("carBox");
const carBtn = document.getElementById("carBtn");
const carList = document.getElementById("carList");
const search = document.getElementById("search");
const scrollBtn = document.getElementById("scrollBtn");
const output = document.getElementById("output");

// 1. Event Listener
carBtn.addEventListener("click", () => {
    output.textContent = "Car button clicked!";
});

// 2. Normal Event
carBtn.addEventListener("mouseover", () => {
    console.log("Mouse is over the car button");
});

// 3. Event Bubbling
carBox.addEventListener("click", () => {
    console.log("Car Box - Bubbling");
});

// 4. Event Capturing
carBox.addEventListener("click", () => {
    console.log("Car Box - Capturing");
}, true);

// 5. Event Delegation
carList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log("Selected car:", event.target.textContent);
    }
});

// 6. Debouncing
function debounce(callback, delay) {
    let timer;

    return function () {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback();
        }, delay);
    };
}

search.addEventListener("input", debounce(() => {
    console.log("Searching...");
}, 500));


// 7. Throttling
function throttle(callback, delay) {
    let lastTime = 0;

    return function () {
        const currentTime = Date.now();

        if (currentTime - lastTime >= delay) {
            lastTime = currentTime;
            callback();
        }
    };
}

scrollBtn.addEventListener("mousemove", throttle(() => {
    console.log("Mouse moving...");
}, 1000));