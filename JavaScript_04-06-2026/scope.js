//var--> can be accessed outside the function 
// let,const-->cannot be accesssed outside the function.

//var is function scoped,let and const are block scoped.

//global scope-->A variable declared outside all functions and blocks is globally accessible.

let company = "NYb infotech";

function showcompany(){
    console.log(company);

}
console.log(company);
showcompany();

//function scope-->the variables which are declared with var, let ,const inside the function are accessible inside that fucntion.

function showname(){
    let name = "Keerthy";
    console.log(name);
}
showname();

//block scope-->a variable declared with var inside a block{} are accessible only within that block.

if(true){
    let age = "23";
    console.log(age);

}
//  console.log(age);


 //scope accessibility--
 //global variables can be accessed anywhere

 let companyy = "NYB";

function showCompany() {
    console.log(companyy);
}

showCompany();
console.log(companyy); 

//functionscoped only accessed inside the function
function showMessage() {
    let message = "this is vinay";
    console.log(message);
}

showMessage(); 
// console.log(message); 

//block--let and const are only accessed inside the block.
if (true) {
    let age = 23;
    console.log(age);
}

// console.log(age); 