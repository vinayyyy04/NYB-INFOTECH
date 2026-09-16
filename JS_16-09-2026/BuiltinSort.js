let numbers = [50, 10, 40, 20, 30];

// 1. Sorting WITH built-in sort()
let builtInSort = [...numbers].sort((a, b) => a - b);

console.log("Using sort():", builtInSort);


// 2. Sorting WITHOUT built-in methods
let manualSort = [...numbers];

for (let i = 0; i < manualSort.length; i++) {
    for (let j = 0; j < manualSort.length - i - 1; j++) {

        if (manualSort[j] > manualSort[j + 1]) {
            let temp = manualSort[j];
            manualSort[j] = manualSort[j + 1];
            manualSort[j + 1] = temp;
        }
    }
}

console.log("Without sort():", manualSort);
