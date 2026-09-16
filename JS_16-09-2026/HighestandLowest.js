let numbers = [45, 12, 89, 23, 67, 5, 34];

// Using built-in methods
let highest = Math.max(...numbers);
let lowest = Math.min(...numbers);

console.log("Highest:", highest);
console.log("Lowest:", lowest);


// Without built-in methods
let max = numbers[0];
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {

    if (numbers[i] > max) {
        max = numbers[i];
    }

    if (numbers[i] < min) {
        min = numbers[i];
    }
}

console.log("Highest without Math.max():", max);
console.log("Lowest without Math.min():", min);
