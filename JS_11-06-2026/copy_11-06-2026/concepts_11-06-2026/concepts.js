//for..in loop  in objects--it is used to iterate through all the keys

let car = {
    brand:"mahindra",
    model:"thar rox star edition",
    year:2026
};

for(let key in car) {
    console.log(key + ":" + car[key]);
}


//date object()-

// JavaScript Date Object - Complete Example

let today = new Date();

// Current Date & Time
console.log("Current Date & Time:", today);

// Current Year
console.log("Year:", today.getFullYear());

// Current Month
console.log("Month:", today.getMonth() + 1);

// Current Date
console.log("Date:", today.getDate());

// Current Day
console.log("Day:", today.getDay());

// Current Time
console.log("Hours:", today.getHours());
console.log("Minutes:", today.getMinutes());
console.log("Seconds:", today.getSeconds());

// Format Date (DD/MM/YYYY)
let date1 =
    today.getDate() + "/" +
    (today.getMonth() + 1) + "/" +
    today.getFullYear();

console.log("DD/MM/YYYY:", date1);

// Format Date (YYYY-MM-DD)
let date2 =
    today.getFullYear() + "-" +
    (today.getMonth() + 1) + "-" +
    today.getDate();

console.log("YYYY-MM-DD:", date2);

// Create Specific Date
let birthday = new Date("2003-05-10");
console.log("Birthday:", birthday);

// Calculate Age
let birthYear = 2003;
let age = today.getFullYear() - birthYear;
console.log("Age:", age);

// Display Date and Time Together
console.log(
    `Formatted Date & Time: ${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()} ${today.getHours()}`
);

// Check Weekend or Weekday
let day = today.getDay();

if (day === 0 || day === 6) {
    console.log("Weekend");
} else {
    console.log("Weekday");
}

//template strings 

let name = "Vinay";
let young = 22;
let role = "ASE";
let salary = 15000;

// Employee Details
console.log(`Employee Details:Name: ${name} young: ${young} role: ${role} Salary: ₹${salary}`);

//dynamic values

console.log(`My name is ${name}.`);
console.log(`I am ${young} years old.`);
console.log(`I work in the ${role} role.`);
console.log(`My salary is ₹${salary}.`);

//math objects
//math.round()--rounds the nearest integer

let number = 5.69;

console.log(Math.round(number));

//math.floor()rounds the lowest near integer

console.log(Math.floor(number));

//math.ceil()-always rounds up the nearest integer

console.log(Math.floor(number));

//math.random()--generates a random number between 0 and 1

console.log(Math.random(number));



// String Object Methods Practice

let text = "Hello Vinay, Welcome to Nyb infotech";

// length--returns the number of charecters

console.log(text.length);

// slice()--exracts part of strings

console.log(text.slice(6, 11));

// substring()--extracts charecter between two indexes

console.log(text.substring(6, 11));

// replace()--replaces a specified value

console.log(text.replace("Vinay", "yashwanth"));

// toUpperCase()--converts to uppercase

console.log(text.toUpperCase());

// toLowerCase()--converst to lower case

console.log(text.toLowerCase());

// charAt()--returns charecter at a  specific index

console.log(text.charAt(1));

// indexOf()--return first occurrence position

console.log(text.indexOf("Welcome"));

// lastIndexOf()--returns last occurrence position

console.log(text.lastIndexOf("o"));

// includes()--checks if text exists.

console.log(text.includes("JavaScript"));

// startsWith()-checks starting text

console.log(text.startsWith("Hello"));

// endsWith()--checks ending text 

console.log(text.endsWith("JavaScript"));

// split()--converts string into an array

console.log(text.split(" "));

// trim()--removes spaces from both ends

let str = "   JavaScript   ";
console.log(str.trim());

// concat()--joins strings together.

let firstName = "Vinay";
let lastName = "Ch";
console.log(firstName.concat(" ",lastName));