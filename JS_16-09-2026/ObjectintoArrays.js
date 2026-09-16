// Object
let student = {
    name: "Rahul",
    age: 21,
    course: "JavaScript"
};


// Object → Array
let studentArray = Object.entries(student);

console.log("Object to Array:", studentArray);


// Array → Object
let studentObject = Object.fromEntries(studentArray);

console.log("Array to Object:", studentObject);


// Object keys → Array
let keys = Object.keys(student);

console.log("Keys:", keys);


// Object values → Array
let values = Object.values(student);

console.log("Values:", values);
