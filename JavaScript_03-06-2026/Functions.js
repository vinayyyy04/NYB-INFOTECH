//function declarations-->it is known as using the function keyword and can be called before it is declared.

function greets(name) {
    return "hello" + name;
}

console.log(greets("vinay"));

// function expression--> a function is assigned to a variable.

let divide = function(a,b) {
    return a/b;
}
console.log(divide(15,20));


//Named function-->the function has its own name even though it is assigned to a variable.

let factorial = function fact(n) {
    if (n=== 0){
        return 1;

    }
    return n * fact(n-1);
};

console.log(factorial(6));

//Anonynmous function-->a function without a name.

let message = function(){
    console.log("hello and welcome to NYB amigos");
};

message();


//arrow function-->it is basically used for shorter syntax.

let multiply = (a,b)=> {
    return a*b;
};
console.log(multiply(4,2));