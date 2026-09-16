// 1. var
var name = "John";
name = "Alex";       // Can be reassigned
var name = "David";  // Can be redeclared

console.log(name);


// 2. let
let age = 25;
age = 30;            // Can be reassigned

console.log(age);


// 3. const
const country = "India";
// country = "USA";  // Cannot be reassigned

console.log(country);


// Block Scope
if (true) {
    var city = "Chennai";
    let state = "Tamil Nadu";
    const pin = 600001;

    console.log(city);
    console.log(state);
    console.log(pin);
}

console.log(city);   // var is function/global scoped
// console.log(state); // let is block scoped
// console.log(pin);   // const is block scoped


