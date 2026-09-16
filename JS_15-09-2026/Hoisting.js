
// 1. Function Hoisting
greet();

function greet() {
    console.log("Hello!");
}


// 2. var Hoisting
console.log(age);

var age = 25;


// 3. let Hoisting
//  console.log(name); // ReferenceError

let name = "Vinay";


// 4. const Hoisting
// console.log(country); // ReferenceError

const country = "India";
