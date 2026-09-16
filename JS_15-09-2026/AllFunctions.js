
// 1. Function Declaration
function greet(name) {
    return `Hello, ${name}`;
}

// 2. Function Expression
const add = function(a, b) {
    return a + b;
};

// 3. Named Function
const multiply = function multiplyNumbers(a, b) {
    return a * b;
};

// 4. Anonymous Function
const subtract = function(a, b) {
    return a - b;
};

// 5. Arrow Function
const divide = (a, b) => {
    return a / b;
};

// 6. Callback Function
function calculate(a, b, operation) {
    return operation(a, b);
}

const result = calculate(10, 5, (a, b) => a + b);

// 7. Higher-Order Function
function higherOrderFunction(callback) {
    return callback();
}

const message = higherOrderFunction(() => "Function executed!");

// 8. Default Parameters
function welcome(name = "Guest") {
    return `Welcome, ${name}`;
}

// 9. Rest Parameters
function total(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// 10. IIFE
(function() {
    console.log("IIFE executed immediately");
})();

// Output
console.log(greet("Vinay"));
console.log(add(10, 20));
console.log(multiply(4, 5));
console.log(subtract(20, 8));
console.log(divide(20, 4));
console.log(result);
console.log(message);
console.log(welcome());
console.log(total(10, 20, 30));
