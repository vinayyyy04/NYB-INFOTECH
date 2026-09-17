const clickBtn = document.getElementById("clickBtn");
const nameInput = document.getElementById("nameInput");
const colorSelect = document.getElementById("colorSelect");
const form = document.getElementById("myForm");
const mouseBox = document.getElementById("mouseBox");
const output = document.getElementById("output");

// 1. Click Event
clickBtn.addEventListener("click", function () {
    output.textContent = "Button clicked!";
});

// 2. Input Event
nameInput.addEventListener("input", function () {
    output.textContent = "You typed: " + nameInput.value;
});

// 3. Change Event
colorSelect.addEventListener("change", function () {
    output.textContent = "Selected: " + colorSelect.value;
});

// 4. Submit Event
form.addEventListener("submit", function (event) {
    event.preventDefault();
    output.textContent = "Form submitted!";
});

// 5. Mouse Event
mouseBox.addEventListener("mouseenter", function () {
    mouseBox.textContent = "Mouse entered!";
});

mouseBox.addEventListener("mouseleave", function () {
    mouseBox.textContent = "Mouse left!";
});

// 6. Keyboard Event
nameInput.addEventListener("keydown", function (event) {
    output.textContent = "Key pressed: " + event.key;
});