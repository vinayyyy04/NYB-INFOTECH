// ================================
// THROTTLING
// ================================

function throttle(callback, delay) {
    let lastTime = 0;

    return function () {
        const currentTime = Date.now();

        if (currentTime - lastTime >= delay) {
            callback();
            lastTime = currentTime;
        }
    };
}


// ================================
// DEBOUNCING
// ================================

function debounce(callback, delay) {
    let timer;

    return function () {
        clearTimeout(timer);

        timer = setTimeout(function () {
            callback();
        }, delay);
    };
}


// ================================
// PRACTICAL USE
// ================================

// Throttling → Mouse movement
const handleMouseMove = throttle(function () {
    console.log("Mouse is moving...");
}, 1000);

document.addEventListener("mousemove", handleMouseMove);


// Debouncing → User input
const handleSearch = debounce(function () {
    console.log("User stopped typing. Searching...");
}, 500);

document.addEventListener("input", handleSearch);