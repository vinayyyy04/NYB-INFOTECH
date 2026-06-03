//hoisting-->is the behavior of moving declarations to the top of their scope before code execution.
// hoisting with var
console.log(a);
var a = 10;

// //hoisting with let

// console.log(b);
// let b = 20;

// //hoisting with const
// console.log(pi);
// const pi = 3.14;

//hoisting in function declaration.

greetss();

function greetss(){
       console.log("hello,vinay");
}

//hoisting in function expression.

// hello();

// var hello = function (){
//     console.log("hello!");

// };