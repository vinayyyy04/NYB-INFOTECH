

// Variables
var name = "Vinay";
let age = 23;
const country = "India";

// Data Types
let studentName = "Vinay";       // Primitive: String
let studentAge = 23;            // Primitive: Number
let isStudent = true;           // Primitive: Boolean
let address;                    // Primitive: Undefined
let phone = null;               // Primitive: Null

let student = {                 // Reference: Object
    name: "Vinay",
    age: 20
};

let subjects = ["JavaScript", "HTML", "CSS"]; // Reference: Array

// typeof Operator
console.log(typeof name);       // string
console.log(typeof age);        // number
console.log(typeof student);    // object

// Type Conversion
let marks = "90";
let convertedMarks = Number(marks);

console.log(convertedMarks);    // 90

// Type Coercion
let result = "10" + 5;

console.log(result);             // 105

// Arithmetic Operator
let a = 10;
let b = 5;

console.log(a + b);              // 15

// Assignment Operator
let score = 50;
score += 10;

console.log(score);              // 60

// Comparison Operator
console.log(age >= 18);          // true

// Logical Operator
let hasID = true;

console.log(age >= 18 && hasID); // true

// Template Literal
console.log(`My name is ${name}, I am ${age} years old and I live in ${country}.`);
