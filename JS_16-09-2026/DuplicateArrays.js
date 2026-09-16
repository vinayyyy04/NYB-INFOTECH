let numbers = [10, 20, 10, 30, 20, 40, 30, 50];

// Using Set
let uniqueNumbers = [...new Set(numbers)];

console.log("Original Array:", numbers);
console.log("Without Duplicates:", uniqueNumbers);


// Without using Set
let result = [];

for (let number of numbers) {
    if (!result.includes(number)) {
        result.push(number);
    }
}

console.log("Without Set:", result);
