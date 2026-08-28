// app.js


// ========================================
// 1. JAVASCRIPT MODULES - IMPORT
// ========================================

import { student, calculateTotal } from "./Student.js";


// ========================================
// 2. DESTRUCTURING
// ========================================

const { name, age, address, marks } = student;

console.log(name);
console.log(age);


// ========================================
// 3. OPTIONAL CHAINING ?.
// ========================================

const city = address?.city;

console.log(city);


// ========================================
// 4. NULLISH COALESCING ??
// ========================================

// student.phone does not exist

const phone = student.phone ?? "Not Available";

console.log(phone);


// ========================================
// 5. SPREAD OPERATOR ...
// ========================================

// Add a new mark without changing original array

const updatedMarks = [...marks, 95];

console.log(updatedMarks);


// ========================================
// 6. REST OPERATOR ...
// ========================================

// Send all marks to calculateTotal()

const totalMarks = calculateTotal(...updatedMarks);

console.log(totalMarks);


// ========================================
// 7. TEMPLATE LITERALS
// ========================================

console.log(`
Student Details
----------------
Name: ${name}
Age: ${age}
City: ${city}
Phone: ${phone}
Total Marks: ${totalMarks}
`);


// ========================================
// 8. SET
// ========================================

// Duplicate JavaScript will be removed

const subjects = new Set([
    "HTML",
    "CSS",
    "JavaScript",
    "JavaScript"
]);

console.log(subjects);


// ========================================
// 9. MAP
// ========================================

const studentInfo = new Map();

studentInfo.set("name", name);
studentInfo.set("age", age);
studentInfo.set("city", city);
studentInfo.set("totalMarks", totalMarks);

console.log(studentInfo);

console.log(studentInfo.get("name"));


// ========================================
// 10. WEAKMAP
// ========================================

// WeakMap key must be an object

const privateData = new WeakMap();

privateData.set(student, {
    password: "student123"
});

console.log(privateData.get(student));


// ========================================
// 11. WEAKSET
// ========================================

// WeakSet stores objects

const verifiedStudents = new WeakSet();

verifiedStudents.add(student);

console.log(verifiedStudents.has(student));


// ========================================
// 12. ES6+ ARROW FUNCTION
// ========================================

const displayStudent = () => {

    console.log(`Welcome ${name}!`);

};

displayStudent();