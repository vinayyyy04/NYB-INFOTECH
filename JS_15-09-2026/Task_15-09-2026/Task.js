// Hoisting
showWelcome();

function showWelcome() {
    console.log("Welcome to Employee Dashboard!");
}


// Global Scope
const company = "Tech Solutions";
let employeeCount = 1;


// Function Declaration
function getEmployeeName(name) {
    return name;
}


// Function Expression
const getRole = function(role) {
    return role;
};


// Named Function
const calculateSalary = function salary(amount) {
    return amount;
};


// Anonymous Function
const calculateProjects = function(count) {
    return count;
};


// Arrow Function
const getSkills = () => ["JavaScript", "HTML", "CSS"];


// Default Parameters
function welcome(name = "Guest") {
    return `Welcome, ${name}!`;
}


// Rest Parameters
function calculateBonus(...bonuses) {
    return bonuses.reduce((total, bonus) => total + bonus, 0);
}


// Arguments Object
function countArguments() {
    return arguments.length;
}


// Higher-Order Function
function processEmployee(callback) {
    return callback();
}


// First-Class Function
const employeeFunction = function() {
    return "Employee function executed";
};


// Callback Function
function loadEmployee(callback) {
    callback();
}


// Global + Function + Block Scope
function employeeDetails() {
    let employeeName = "Vinay"; // Function Scope

    if (true) {
        const department = "Development"; // Block Scope
        console.log(employeeName); // Lexical Scope
        console.log(department);
    }
}


// Closure
function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();


// IIFE
(function() {
    console.log("IIFE executed immediately!");
})();


// Employee Data
const name = getEmployeeName("Vinay");
const role = getRole("Frontend Developer");
const salary = calculateSalary(50000);
const projects = calculateProjects(6);
const skills = getSkills();


// Callback
loadEmployee(() => {
    document.getElementById("employeeName").textContent = name;
});


// Display Data
document.getElementById("role").textContent = `Role: ${role}`;
document.getElementById("salary").textContent = `₹${salary}`;
document.getElementById("projects").textContent = projects;


// Display Skills
const skillsList = document.getElementById("skills");

skills.forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = `⚡ ${skill}`;
    skillsList.appendChild(li);
});


// Button
document.getElementById("btn").addEventListener("click", () => {

    const bonus = calculateBonus(2000, 3000, 5000);

    processEmployee(() => {
        alert(
            `${welcome(name)}\n\n` +
            `Company: ${company}\n` +
            `Bonus: ₹${bonus}\n` +
            `Counter: ${counter()}`
        );
    });
});


// Practice
employeeDetails();

console.log("Arguments:", countArguments(10, 20, 30));
console.log(employeeFunction());




