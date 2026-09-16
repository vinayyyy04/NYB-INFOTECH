
// Function 1
function add(a, b) {
    return a + b;
}

// Function 2 accepts another function as an argument
function calculate(a, b, operation) {
    return operation(a, b);
}

// Passing the add function as an argument
const result = calculate(10, 20, add);

console.log(result);

