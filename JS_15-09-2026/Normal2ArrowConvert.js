// Normal Function
function greet(name) {
    return `Hello, ${name}`;
}

// Arrow Function
const greetArrow = (name) => {
    return `Hello, ${name}`;
};


// Normal Function
function add(a, b) {
    return a + b;
}

// Arrow Function
const addArrow = (a, b) => a + b;


// Normal Function
function square(num) {
    return num * num;
}

// Arrow Function
const squareArrow = num => num * num;


// Using the functions
console.log(greet("Vinay"));
console.log(greetArrow("Vinay"));

console.log(add(10, 20));
console.log(addArrow(10, 20));

console.log(square(5));
console.log(squareArrow(5));

