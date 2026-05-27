{
let fullName = "vinay";
let age = "22";
console.log(fullName,age);
// console.log(age);
}
{
const pi = 2.31;
console.log("pi");
}
{
var name = "yashwanth";
var age = "22";
console.log(name);
console.log(age)
}

 let fullname = prompt("enter your name without spaces");  

 let username = "@"+ fullname + fullname.length;
 console.log(username);

 let n= alert("hello and welcome!");


 
// 1. Number
let age1 = 25;

// 2. String
let name1 = "Vinay";

// 3. Boolean
let isLoggedIn = true;
let hascompleted = false;

// 4. Undefined
let x;
console.log("Undefined value of x:", x);

// 5. Null
let Value = null;


// 6. BigInt
let bigNumber = 1234567890123456789012345678901234567890n;

// 7. Symbol
let uniqueId = Symbol("id");


console.log( age1);
console.log( name1);
console.log( isLoggedIn);
console.log( Value);
console.log( bigNumber);
console.log( uniqueId);

console.log( typeof(age1));
console.log( typeof(name1));
console.log( typeof(isLoggedIn,hascompleted));
console.log( typeof(Value));
console.log( typeof(bigNumber));
console.log(typeof(uniqueId));




let obj = {name:"vinay",age:22,male:true,number:7569972931};
console.log(obj,typeof(obj));

let arr =[22,243,44,"hello",true,false,null,[1,2,3,4,5,[9,7,65,]]];
console.log(arr,typeof(arr));

function salary(name,days){
    let perday =1000;
    console.log("monthly salary of ",name,"is",perday*days);
    return(perday*days);
}

salary("vinay",22);
salary("yashwanth",18);
salary("sowmith",12);
