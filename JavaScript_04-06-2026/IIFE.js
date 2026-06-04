//IIFE--immediately invoked function expression--it is a function that executes immediately after it is defined
//with parameters

(function (name){
    console.log("welcome" + name);
})("vinay");

//arrow function usinf iife
((a,b) =>{
    console.log("sum:",a+b);
})(15,15);

//variable isolation using iife

let message = "hello all";

(function (message = "welcome"){
    console.log(message);
})();

console.log(message);

