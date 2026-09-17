const parent = document.getElementById("parent");
const child = document.getElementById("child");

// Bubbling
parent.addEventListener("click", function () {
    console.log("Parent - Bubbling");
});

child.addEventListener("click", function () {
    console.log("Child - Bubbling");
});


// Capturing
parent.addEventListener("click", function () {
    console.log("Parent - Capturing");
}, true);

child.addEventListener("click", function () {
    console.log("Child - Capturing");
}, true);