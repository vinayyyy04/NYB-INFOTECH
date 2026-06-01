//If-else statements
let age = 20;
let result;

if (age >=18) {
    result = "eligible to vote";
} else {
    result = "not eligible to vote";
}

console.log(result);

//even or odd

let number = 7;
let output = number % 2 === 0 ? "even" : "odd";

console.log(output);

//find the greater number 

let a= 10;
let b= 20;

let greater = a > b ? a:b;

console.log(greater);

//login status

let isloggedin = true;

let message = isloggedin ? "welcome to NYB" : "Please login again";

console.log(message);

//Nested ternary operators

let marks = 92;

let grade = marks >=90
? "A" 
: marks >= 75
? "B"
:marks >= 50
? "c"
:"fail";

console.log(grade);


//assign default user

let username ="";

let displayname = username? username :"guest";

console.log(displayname);