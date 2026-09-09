//Function Declaration

function greet() {
    console.log("Hello");
}

greet();

//Function Expression
const greet1 = function() {
    console.log("Hello");
};

greet1();

// Arrow Function
const greet2 = () => {
    console.log("Hello");
};

greet2();

//Parameters and Arguments

function greet3(name) {
    console.log("Hello " + name);
}

greet3("vinay");


// Default Parameters

function greet4(name = "User") {
    console.log("Hello " + name);
}

greet4();

//rest parameters

function add(...numbers){
console.log(numbers);
}

add(10,40,59,95);


//argument objects

function showArguments(){
    console.log(arguments);
}

showArguments(10,20,30,40,50);


//recursive function

function count(n){
    if(n===0){
        return;
    }
    console.log(n);

    count(n-1);
}

count(6);


//callback functions

function greet9(){
    console.log("hello");
}

function execute(callback){
    callback();
}

execute(greet9);
