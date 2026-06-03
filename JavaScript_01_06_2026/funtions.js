//functions with parameters

function greetuser(vinay){
    console.log("hello" + vinay);
    
}

greetuser("vinay");

//function without parameters.

function greet(){
    console.log("hello and welcome to nyb!");

}   
greet();

//functions with using default parameters

function greetuser1(name = "guest") {
    console.log("hello" + name);

}
greetuser1();
greetuser("vinay");

//return-a function can return a value using the return statement.

function multiply (a,b=6) {
    return a *b;

}
console.log(multiply(5));
console.log(multiply(6,4));


//using argument objecct.

function showArguments() {
    console.log(arguments);
    console.log("first argument :",arguments[0]);
    console.log("second argument :",arguments[1]);
}
showArguments("vinay",22,);

//rest parameters--collect multiple arguements into an array.

function sum1 (...numbers) {
    let total = 0;
    for (let num of numbers) {
        total +=num;
    }
    return total;
}

console.log(sum1(10,20,37,63));


//function declarations-->it is known as using the function keyword and can be called before it is declared.

function greets(name) {
    return "hello" + name;
}

console.log(greets("vinay"));