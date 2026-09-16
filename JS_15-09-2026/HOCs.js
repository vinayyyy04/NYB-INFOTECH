
const numbers = [1, 2, 3, 4, 5];

// Higher-Order Function
function processNumbers(numbers, operation) {
    return numbers.map(operation);
}

// Function passed as an argument
const double = (num) => num * 2;

const result = processNumbers(numbers, double);

console.log(result);
