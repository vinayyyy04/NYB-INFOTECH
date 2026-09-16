let students = ["vinay", "keerthy", "Arun", "Priya", "Kiran"];

// Add and remove elements
students.push("Anu");
students.pop();

// Remove duplicates
students = [...new Set(students)];

// Convert names to uppercase
let upperCaseNames = students.map(name => name.toUpperCase());

// Filter names with more than 4 characters
let filteredNames = students.filter(name => name.length > 4);

// Find a student
let foundStudent = students.find(name => name === "Arun");

// Find student index
let studentIndex = students.findIndex(name => name === "Arun");

// Check conditions
let hasKiran = students.some(name => name === "Kiran");
let allAreStrings = students.every(name => typeof name === "string");

// Sort names
students.sort();

// Join names
let studentList = students.join(", ");

console.log("Students:", students);
console.log("Uppercase:", upperCaseNames);
console.log("Filtered:", filteredNames);
console.log("Found:", foundStudent);
console.log("Index:", studentIndex);
console.log("Has Kiran:", hasKiran);
console.log("All are strings:", allAreStrings);
console.log("Student List:", studentList);
